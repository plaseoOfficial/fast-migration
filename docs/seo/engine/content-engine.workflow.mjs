/*
 * SERP-Intelligence-Engine (Ebene 1) — Fast Systemmöbel.
 * Läuft 1× pro Keyword, das Ergebnis (Research-Kit) wird GECACHT und von der
 * Authoring-Engine wiederverwendet. NUR über das Workflow-Tool ausführbar.
 *
 * Aufruf:
 *   Workflow({ scriptPath: ".../content-engine.workflow.mjs",
 *     args: { slug, url, primaryKeyword, pageType, cluster, seoRoot, repoRoot } })
 *
 * Prinzip (vom Kunden bestätigt): Tiefe gehört in die RECHERCHE (einmal, gründlich,
 * gecacht), nicht ins teure Schreib-Hin-und-Her. Ziel ist NICHT ein Rohdaten-Dump,
 * sondern ein DICHTES, ENTSCHEIDUNGSFERTIGES Research-Kit, aus dem der Writer fast
 * nur noch „zusammenbauen + Fast-Stimme drauf" muss.
 *
 * 3 Agents: 2 Recherche (read-only, Explore) parallel → 1 Synthese → Kit.
 * Rückgabe: { slug, pageType, corridor, kit (Markdown), research }.
 * Der Orchestrator speichert kit → docs/seo/research/<slug>.kit.md.
 *
 * REGELN: Agents geben nur Daten/Text zurück; sie editieren KEINE Dateien.
 */

export const meta = {
  name: 'serp-intelligence',
  description: 'Ebene 1: SERP + Konkurrenz-Tiefe + WDF*IDF + Intent → dichtes, gecachtes Research-Kit (1× pro Keyword)',
  phases: [
    { title: 'Recherche', detail: 'SERP/Wortzahl/Konkurrenz + WDF/Intent/Gap (2 read-only Agents parallel)' },
    { title: 'Synthese', detail: 'Dichtes Research-Kit inkl. Korridor, Pflicht-Module, FAQ, Do-NOT-claim, Discovery-Fragen' },
  ],
}

let cfg = args || {}
if (typeof cfg === 'string') { try { cfg = JSON.parse(cfg) } catch (e) { cfg = {} } }
const KW = cfg.primaryKeyword
const URL = cfg.url || ''
const SLUG = cfg.slug
const INTENT = cfg.intent || '?'
const PAGE_TYPE = String(cfg.pageType || 'leistung').toLowerCase()
const CLUSTER = cfg.cluster || null
const SEO = cfg.seoRoot
const REPO = cfg.repoRoot
if (!KW || !SEO || !REPO || !SLUG) {
  throw new Error('serp-intelligence: args unvollständig. Erwarte {slug,url,primaryKeyword,pageType,seoRoot,repoRoot}. Erhalten: ' + JSON.stringify(args))
}

const ARCHETYPE_CORRIDOR = {
  hub: { min: 800, max: 1200 }, leistung: { min: 2400, max: 3200 }, produkt: { min: 1200, max: 1800 },
  ratgeber: { min: 2000, max: 3500 }, referenz: { min: 1200, max: 2000 }, conversion: { min: 300, max: 600 },
}
const baseCorr = ARCHETYPE_CORRIDOR[PAGE_TYPE] || ARCHETYPE_CORRIDOR.leistung
const PLAYBOOK = `${SEO}/playbooks/${PAGE_TYPE}.md`
const CLUSTER_MAP = CLUSTER ? `${SEO}/playbooks/clusters/${CLUSTER}.md` : null

const WEB = 'Lade zuerst Web-Tools via ToolSearch ("select:WebSearch,WebFetch") und nutze sie für echte Google.de-Recherche (Markt Deutschland). Wortzahlen aus gefetchtem Body MESSEN, nicht schätzen.'
const TEXTONLY = 'WICHTIG: Gib AUSSCHLIESSLICH die geforderten Daten zurück. Bearbeite KEINE Dateien, führe KEINE schreibenden Befehle aus.'

const SERP_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    topResults: { type: 'array', items: { type: 'object', additionalProperties: false,
      properties: { rank: { type: 'integer' }, domain: { type: 'string' }, url: { type: 'string' },
        pageType: { type: 'string' }, wordCount: { type: 'integer' }, measured: { type: 'boolean' },
        contentBlocks: { type: 'array', items: { type: 'string' } } },
      required: ['rank', 'domain', 'wordCount', 'measured'] } },
    medianWordCount: { type: 'integer' },
    dominantFormats: { type: 'array', items: { type: 'string' } },
    featuredSnippet: { type: 'object', additionalProperties: false, properties: { present: { type: 'boolean' }, format: { type: 'string' } }, required: ['present'] },
    peopleAlsoAsk: { type: 'array', items: { type: 'string' } },
    depthBlueprint: { type: 'array', items: { type: 'string' }, description: 'wie die Top-Treffer konkret Tiefe erzeugen (Bloecke/Tabellen/Ratgeber)' },
    mustCoverTopics: { type: 'array', items: { type: 'string' } },
  },
  required: ['topResults', 'medianWordCount', 'depthBlueprint', 'mustCoverTopics', 'peopleAlsoAsk'],
}

const WDF_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    terms: { type: 'array', items: { type: 'object', additionalProperties: false,
      properties: { term: { type: 'string' }, importance: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] } }, required: ['term', 'importance'] } },
    requiredEntities: { type: 'array', items: { type: 'string' } },
    dominantIntent: { type: 'string', enum: ['informational', 'commercial', 'transactional', 'navigational', 'mixed'] },
    jobToBeDone: { type: 'string' },
    microIntents: { type: 'array', items: { type: 'string' } },
    intentMandatoryModules: { type: 'array', items: { type: 'string' }, description: 'Module, die FAST ALLE Top-Treffer haben → auf unserer Seite Pflicht' },
    contentGaps: { type: 'array', items: { type: 'string' } },
    ourAngles: { type: 'array', items: { type: 'string' }, description: 'wo Fast (Meisterbetrieb, Eigenfertigung, PU-Kante, Familie, Möbelplaner) überholt' },
    faqCandidates: { type: 'array', items: { type: 'string' } },
  },
  required: ['terms', 'dominantIntent', 'jobToBeDone', 'microIntents', 'intentMandatoryModules', 'faqCandidates'],
}

// ---------- Recherche (2 read-only Agents parallel) ----------
phase('Recherche')
const [serp, wdf] = await parallel([
  () => agent(
    `${TEXTONLY}\n${WEB}\nDu bist SERP- & Konkurrenz-Tiefen-Analyst. Keyword: "${KW}" (Google.de, Intent ${INTENT}).\n` +
    `Ermittle die organischen Top-8 (keine Ads). Fetche sie und MISS die Wortzahl des Hauptinhalts → medianWordCount. ` +
    `Für die 3 stärksten: lies sie ganz und erfasse, mit welchen Bloecken/Tabellen/Ratgebern sie Tiefe erzeugen (depthBlueprint). ` +
    `Erfasse Formate, Featured Snippet / „Ähnliche Fragen" (PAA), und die Themen, die ALLE Top-Treffer abdecken (mustCoverTopics).`,
    { schema: SERP_SCHEMA, phase: 'Recherche', label: 'serp+konkurrenz', model: 'sonnet', agentType: 'Explore' }),
  () => agent(
    `${TEXTONLY}\n${WEB}\nDu bist WDF*IDF-, Intent- & Gap-Analyst für "${KW}" (DE).\n` +
    `Leite aus den rankenden Top-Treffern ab: thematische Pflicht-Terme (mit Gewicht hoch/mittel/niedrig), Pflicht-Entitäten, ` +
    `den dominanten Intent + Job-to-be-done + 4–7 Micro-Intents, die intent-abgeleiteten Pflicht-Module (was fast alle Treffer haben), Content-Gaps, unseren Winkel (Fast: Meisterbetrieb Espelkamp/OWL, Eigenfertigung, PU-Kantenverleimung, Familie Fast, Möbelplaner) und FAQ-Kandidaten (≥10) aus PAA + echten Nutzerfragen.\n` +
    `Lies ${SEO}/keyword-map.md für die Zeile zu ${URL} und ${SEO}/research/competitors/_overview.md.`,
    { schema: WDF_SCHEMA, phase: 'Recherche', label: 'wdf+intent+gap', model: 'sonnet', agentType: 'Explore' }),
])

// ---------- Korridor (deterministisch, in Code) ----------
let serpMedian = (serp && Number.isFinite(serp.medianWordCount)) ? serp.medianWordCount : null
let cmin = baseCorr.min, cmax = baseCorr.max
if (serpMedian && PAGE_TYPE !== 'conversion') { cmin = Math.max(serpMedian, baseCorr.min); cmax = Math.max(cmin + 400, Math.round(serpMedian * 1.3)) }
const corridor = { min: cmin, max: cmax, serpMedian, archetype: PAGE_TYPE }
log(`Korridor [${PAGE_TYPE}] = ${cmin}–${cmax} W (SERP-Median ${serpMedian ?? 'n/a'})`)

// ---------- Synthese → Research-Kit (1 Agent, Text) ----------
phase('Synthese')
const kit = await agent(
  `${TEXTONLY}\nDu bist Senior-SEO-Stratege für Fast Systemmöbel. Verdichte die Rohrecherche zu einem DICHTEN, ENTSCHEIDUNGSFERTIGEN Research-Kit für ${URL} ("${KW}", Archetyp ${PAGE_TYPE}).\n` +
  `Faustregel: Muss der Writer später noch recherchieren/raten → Kit zu dünn. Muss er nur noch FORMULIEREN → Kit richtig. Kein Rohdaten-Dump, sondern Signal.\n\n` +
  `LIES: Playbook ${PLAYBOOK} · ${SEO}/DEPTH.md · ${SEO}/brand/FACTS.md (für Do-NOT-claim) · ${SEO}/internal-linking.md` + (CLUSTER_MAP ? ` · ${CLUSTER_MAP}` : '') + `\n\n` +
  `ROHRECHERCHE:\nSERP/Konkurrenz:\n${JSON.stringify(serp, null, 2)}\n\nWDF/Intent/Gap:\n${JSON.stringify(wdf, null, 2)}\n\n` +
  `Gib das Kit als Markdown mit EXAKT diesen Abschnitten zurück:\n` +
  `# Research-Kit: ${KW} (${URL})\n` +
  `## 1 · Wortzahl-Korridor → **${cmin}–${cmax} W** (SERP-Median ${serpMedian ?? 'n/a'}) — verbindlich, kein Raten\n` +
  `## 2 · Intent & Job-to-be-done (was will der Nutzer sehen/tun)\n` +
  `## 3 · Pflicht-Module (intent-abgeleitet, was ALLE Top-Treffer haben) + Tiefe-Blaupause (wie die Sieger Tiefe erzeugen)\n` +
  `## 4 · WDF*IDF-Termliste als CHECKLISTE (Term · Gewicht · ☐) — zum Abhaken beim Schreiben\n` +
  `## 5 · FAQ-Liste (≥10, fertig formulierbar, aus PAA + Nutzerfragen)\n` +
  `## 6 · Gaps & unser Winkel (wo Fast überholt) + Negativ-Abgrenzung lt. Playbook\n` +
  `## 7 · Interne Links (rein/raus, Anker) lt. internal-linking.md\n` +
  `## 8 · Do-NOT-claim-Liste (❌ aus FACTS.md, konkret für dieses Thema)\n` +
  `## 9 · 🔴 Discovery-Fragen an den Kunden (PFLICHT vor dem Schreiben — nur was NUR der Kunde weiß; IMMER inkl. Geo-Reichweite „bundesweit oder montage-gebunden?")\n` +
  `Nur das Kit-Markdown, dicht und konkret, keine Vorrede.`,
  { phase: 'Synthese', label: 'research-kit' })

return { slug: SLUG, url: URL, pageType: PAGE_TYPE, corridor, kit, research: { serp, wdf } }
