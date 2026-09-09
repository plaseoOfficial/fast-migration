/*
 * Authoring-Engine (Ebene 2) — Fast Systemmöbel. LEAN.
 * Schreibt die finale Section-Copy einer Seite aus dem gecachten Research-Kit.
 * NUR über das Workflow-Tool ausführbar.
 *
 * Aufruf:
 *   Workflow({ scriptPath: ".../authoring-engine.workflow.mjs",
 *     args: { slug, url, primaryKeyword, pageType, cluster, kitPath, modulePath,
 *             seoRoot, repoRoot } })
 *
 * 4 Agents, alle TEXT-ONLY (editieren NIE Dateien): Writer → Humanizer → QC&Fix → Chefredakteur.
 * Dazwischen DETERMINISTISCHE Code-Gates (0 Token, 100%): Verbotene-Claims,
 * FAQ-Struktur, Title/Description-Länge. KEINE teure Multi-Runden-Schleife.
 *
 * Rückgabe: { slug, copy (Markdown, prop-gemappt), gates, qc, chef, status }.
 * Der Orchestrator (Mensch) setzt copy in src/lib/content/<slug>.ts ein und fährt EINMAL `npm run check`.
 *
 * Lehre aus dem 2,2-Mio-Lauf: Agents NICHT Dateien editieren lassen, NICHT Lint/Build
 * im Loop fahren, Tiefe steckt im gecachten Kit — nicht in QC-Iterationen.
 */

export const meta = {
  name: 'authoring-engine',
  description: 'Ebene 2 (lean): Kit → Writer → Humanizer → Code-Gates → QC&Fix → Chefredakteur. Text-only, kein Loop.',
  phases: [
    { title: 'Writer', detail: 'Kit → prop-gemappte Copy in einem Aufruf (Text)' },
    { title: 'Humanize', detail: 'KI-Muster brechen, O-Ton Fast (voice-only, günstig)' },
    { title: 'QC&Fix', detail: 'Code-Gates (Claims/FAQ/Title) + 1 Reviewer → korrigierte Copy' },
    { title: 'Endabnahme', detail: 'Chefredakteur: dient & konvertiert? (Verdikt)' },
  ],
}

let cfg = args || {}
if (typeof cfg === 'string') { try { cfg = JSON.parse(cfg) } catch (e) { cfg = {} } }
const { slug: SLUG, url: URL, primaryKeyword: KW, kitPath: KIT, modulePath: MODULE, seoRoot: SEO, repoRoot: REPO } = cfg
const PAGE_TYPE = String(cfg.pageType || 'leistung').toLowerCase()
const CLUSTER = cfg.cluster || null
if (!SLUG || !KW || !KIT || !MODULE || !SEO) {
  throw new Error('authoring-engine: args unvollständig. Erwarte {slug,url,primaryKeyword,pageType,kitPath,modulePath,seoRoot}. Erhalten: ' + JSON.stringify(args))
}

const PLAYBOOK = `${SEO}/playbooks/${PAGE_TYPE}.md`
const CLUSTER_MAP = CLUSTER ? `${SEO}/playbooks/clusters/${CLUSTER}.md` : null

const TEXTONLY =
  `EISERNE REGEL: Du gibst AUSSCHLIESSLICH den geforderten Text zurück. Du bearbeitest KEINE Dateien (kein Edit/Write/NotebookEdit) und führst KEINE Befehle aus (kein Bash/npm/lint/build). ` +
  `Das Einsetzen in Dateien und Prüfen übernimmt ausschließlich der Mensch/Orchestrator. Jeder Datei-Eingriff ist ein Fehler.`

const CANON =
  `KANON (FACTS/BRAND_VOICE/Playbook/Kit überstimmen alles):\n` +
  `- Research-Kit (deine Hauptquelle — Nutzeraufgabe, belegte Fakten, offene Fragen, Do-NOT-claim): ${KIT}\n` +
  `- Fakten (nur ✅/🟢; ❌ nie): ${SEO}/brand/FACTS.md\n- Stimme (Sie, keine em-dashes): ${SEO}/brand/BRAND_VOICE.md\n` +
  `- Playbook ${PAGE_TYPE} (geeignete Module/Schema/CTA/Ton/Negativ-Abgrenzung): ${PLAYBOOK}\n- Tiefe/Anti-Fülltext: ${SEO}/DEPTH.md\n` +
  `- Humanizer: ${SEO}/templates/humanizer.md\n- Interne Verlinkung: ${SEO}/internal-linking.md\n` +
  (CLUSTER_MAP ? `- Cluster-Differenzierung (Anti-Duplikat): ${CLUSTER_MAP}\n` : '') +
  `- Bestehendes Modul (Prop-Struktur, die du neu textest — Keys/Bildpfade/Maße/hrefs NICHT ändern): ${MODULE}\n` +
  `- FAQ nur für verbleibende echte Nutzerfragen; keine Mindestanzahl.`

// ---------- deterministische Code-Gates (0 Token) ----------
// Schneidet etwaige Agent-Trailing-Notizen ab, damit die Gates NUR die echte Copy messen
// (sonst zählen/linten sie die Vermerke des Agents mit → False Positives).
function stripNotes(md) {
  if (!md || typeof md !== 'string') return ''
  let cut = md.length
  for (const re of [/\n[=*\-]{3,}\s*\n+\s*(QC-?VERMERK|NOTES|ANMERK|HINWEIS)/i, /\n\s*===\s*NOTES\s*===/i, /\nQC-?VERMERK/i, /\nSTRUKTUR-BEDARF/i, /\nMETA\s*\(/i]) {
    const m = md.search(re); if (m >= 0 && m < cut) cut = m
  }
  return md.slice(0, cut)
}
// Robust gegen alle Prop-Formate (auch Objekt-Zeilen `row[i]: { title:"…", description:"…" }`):
// zählt ALLE Quote-Strings, ohne Pfade/URLs/Bilddateien/reine alt-Werte.
function countCopy(md) {
  const body = stripNotes(md)
  let faq = 0
  for (const line of body.split('\n')) {
    if (/\bquestion\s*:/.test(line)) faq += 1
  }
  // Umfang nur grob beschreiben, ohne Mindestlänge oder Abnahmeschwelle.
  const words = body.trim() ? body.trim().split(/\s+/).length : 0
  return { faq, words }
}
const FORBIDDEN = [
  { re: /\b(bis\s*zu\s*)?\d+\s*jahr\w*\s*garantie\b/i, why: '„X Jahre Garantie" (gibt es nicht)' },
  { re: /\bgarantie\s*(von|über)\s*\d+\s*jahr/i,        why: 'Garantie-Jahreszahl' },
  { re: /\bmeisterbetrieb\s*seit\s*\d{4}\b/i,           why: '„Meisterbetrieb seit <Jahr>"' },
  { re: /\bseit\s*2013\b/i,                             why: '„seit 2013"' },
  { re: /1996[^.\n]{0,40}espelkamp/i,                   why: '„1996 … Espelkamp" (war Rahden-Tonnenheide)' },
  { re: /espelkamp[^.\n]{0,25}1996/i,                   why: '„Espelkamp … 1996" (war Rahden-Tonnenheide)' },
  { re: /\b\d{1,3}[\.\s]?\d{3}\s*(€|euro)\b/i,          why: 'konkrete Preiszahl (Preise sind individuell)' },
  { re: /\bab\s*\d{1,2}\.?\d{3}\s*(€|euro)/i,           why: '„ab X €" (Preise individuell)' },
  { re: /\b25\+?\s*jahr/i,                              why: '„25+ Jahre"' },
  { re: /\b12\+?\s*mitarbeiter/i,                       why: '„12+ Mitarbeiter"' },
  { re: /\b(FSC|PEFC)\b/,                               why: 'FSC/PEFC namentlich' },
]
function lintForbidden(md) { const body = stripNotes(md); const h = []; for (const f of FORBIDDEN) if (f.re.test(body)) h.push(f.why); return h }
function metaLens(md) {
  // NUR echte Meta-Props prüfen (metaTitle/metaDescription = Page-Layer). Hero-`title` ist H1, darf > 60 sein.
  const out = []; const body = stripNotes(md)
  const t = body.match(/\bmetaTitle\s*:\s*"([^"]+)"/i)
  if (t && t[1].length > 60) out.push(`Meta-Title zu lang (${t[1].length}>60)`)
  const d = body.match(/\bmetaDescription\s*:\s*"([^"]+)"/i)
  if (d && d[1].length > 155) out.push(`Meta-Description zu lang (${d[1].length}>155)`)
  return out
}

const LENS_SCHEMA = { type: 'object', additionalProperties: false,
  properties: { pass: { type: 'boolean' }, issues: { type: 'array', items: { type: 'string' } }, fixes: { type: 'array', items: { type: 'string' } } },
  required: ['pass', 'issues', 'fixes'] }

// ---------- Writer (1 Agent, Text) ----------
phase('Writer')
let copy = await agent(
  `${TEXTONLY}\nDu schreibst die FINALE Website-Copy für Fast Systemmöbel — als das Unternehmen selbst.\n` +
  `Seite ${URL} · „${KW}" · Archetyp ${PAGE_TYPE}.\n${CANON}\n\n` +
  `AUFGABE: Bearbeite die für den Auftrag relevanten Props nach der Leseraufgabe; passende bestehende Inhalte erhalten.\n` +
  `REGELN:\n- „Sie", O-Ton Fast, konkret, KEINE em-dashes, keine Floskeln, keine Dreiklang-Slogan-Tics, keine Wort-Wiederholungs-Tics.\n` +
  `- Thema in Title/H1 verständlich benennen; Begriffe nach Nutzwert einsetzen, keine WDF-Checkliste abarbeiten.\n` +
  `- Abschnitte nach Nutzeraufgabe wählen. Kit §3/§5 sind Recherchehinweise, keine Modul- oder FAQ-Quote.\n` +
  `- Faktentreue: nichts aus Kit §8 (Do-NOT-claim). Winkel/USPs aus Kit §6 einbauen.\n` +
  `- Reicht die Prop-Struktur für eine relevante Nutzerfrage nicht aus, vermerke am Ende „STRUKTUR-BEDARF (Design): <Modul>" statt Fülltext.\n\n` +
  `OUTPUT-FORMAT (zwingend, einzeilige Werte): pro Export ein Block „### <exportName>", darunter je Prop eine Zeile \`propName: "Text"\` (Array-Einträge nummeriert, FAQ je „question:"/„answer:"-Zeile). NUR das.`,
  { phase: 'Writer', label: 'writer' })

// ---------- Humanizer (1 Agent, Text — voice-only, günstig) ----------
phase('Humanize')
copy = await agent(
  `${TEXTONLY}\nDu bist der Humanizer für die Copy von ${URL}. Arbeite nach ${SEO}/templates/humanizer.md und ${SEO}/brand/BRAND_VOICE.md.\n` +
  `EINZIGE Aufgabe: die KI-Anmutung rausnehmen, menschlicher O-Ton Fast rein. Brich gleichförmige Satzlängen, Floskeln, „nicht nur…sondern", generische Übergänge, Dreiklang-Slogan-Tics, Wort-Wiederholungen, leere Superlative; variiere den Rhythmus (mal ein kurzer Satz als Pointe); „Sie"-Anrede; idiomatisches Deutsch; KEINE em-dashes.\n` +
  `ÄNDERE NICHT: Fakten/Zahlen, Keywords/Entitäten, interne Links oder Prop-Keys/Struktur. Gib die Copy im exakt gleichen Format zurück (### <exportName> / propName: "…").\n\nCOPY:\n${copy}`,
  { phase: 'Humanize', label: 'humanizer' })

// ---------- Code-Gates + QC&Fix (1 Agent, Text) ----------
phase('QC&Fix')
let measured = countCopy(copy)
let forbidden = lintForbidden(copy)
let metaIssues = metaLens(copy)
log(`Code-Gates: ${measured.words} W / ${measured.faq} FAQ (nur Information) · Verbotene ${forbidden.length} · Meta ${metaIssues.length}`)

const review = await agent(
  `${TEXTONLY}\nDu bist EIN strenger, adversarialer QC-Reviewer für die finale Copy von ${URL} („${KW}", ${PAGE_TYPE}). Prüfe ALLE Dimensionen in EINEM Durchgang und gib die KORRIGIERTE Copy zurück.\n${CANON}\n\n` +
  `DETERMINISTISCHE BEFUNDE (in Code gemessen — zwingend beheben):\n` +
  `- Wortzahl ${measured.words}: Information, keine Mindestlänge.\n` +
  `- FAQ ${measured.faq}: Nur hilfreiche offene Fragen beantworten, keine Quote.\n` +
  `- Verbotene Claims: ${forbidden.length ? forbidden.join('; ') + ' → ENTFERNEN' : 'keine'}\n` +
  `- Meta-Länge: ${metaIssues.length ? metaIssues.join('; ') : 'ok'}\n\n` +
  `PRÜFE ZUSÄTZLICH (und behebe): Faktentreue (FACTS/Kit §8) · verständliche Fachbegriffe und Nutzerantworten (Kit §4) · E-E-A-T (Region, Prozess, PU-Kante, Familie Fast, NAP) · interne Links + CTA (Kit §7, Möbelplaner+Kontakt, kein Cross-Silo) · AEO (Direktantworten, keine erfundenen Zahlen) · Korpus-Dedup (nicht „dasselbe + andere Wörter" wie Schwesterseiten in ${REPO}/src/lib/content/) · Human-Score (O-Ton, Sie, Rhythmus, keine em-dashes).\n\n` +
  `Gib NUR die KORRIGIERTE Copy im exakt gleichen Format (### <exportName> / propName: "…") zurück. Behalte Keys/Bildpfade/Maße/hrefs.\n\nAKTUELLE COPY:\n${copy}`,
  { phase: 'QC&Fix', label: 'qc-fix' })
copy = review || copy

// Re-Check (Code) nach dem Fix
measured = countCopy(copy); forbidden = lintForbidden(copy); metaIssues = metaLens(copy)
const gates = {
  words: measured.words, faq: measured.faq, formatCountsInformational: true,
  forbidden, metaIssues,
}
log(`Nach Fix: ${measured.words} W / ${measured.faq} FAQ · Verbotene ${forbidden.length} · Meta ${metaIssues.length}`)

// ---------- Chefredakteur (1 Agent, Verdikt) ----------
phase('Endabnahme')
const chef = await agent(
  `${TEXTONLY}\nChefredakteur-Endabnahme (holistisch) für ${URL} (${PAGE_TYPE}, „${KW}").\n${CANON}\n` +
  `Code-Gates: ${measured.words} W / ${measured.faq} FAQ; Verbotene-Claims: ${forbidden.length ? forbidden.join('; ') : 'sauber'}.\n` +
  `(1) Dient die Seite dem Nutzer (Job-to-be-done aus Kit §2)? (2) Konvertiert sie (CTA-Stärke lt. Playbook)? (3) Klingt sie wie Fast? (4) Live-ready? ` +
  `pass=true nur bei klarem Ja; sonst issues+fixes konkret. Gib KEINE neue Copy zurück, nur das Verdikt.\n\nCOPY:\n${copy}`,
  { schema: LENS_SCHEMA, phase: 'Endabnahme', label: 'chefredakteur' })

let status = 'OK'
if (forbidden.length) status = 'FACTS_VIOLATION'
else if (chef && !chef.pass) status = 'CHEF_REVIEW'

return { slug: SLUG, url: URL, pageType: PAGE_TYPE, copy, gates, chef, status }
