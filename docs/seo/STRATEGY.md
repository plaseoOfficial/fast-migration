# SEO-Strategie — Fast Systemmöbel

> Stand: 2026-06-10 · Basis: Code-Audit aller 16 gebauten Seiten, `keyword-map.md` (111 URLs),
> `internal-linking.md`, `brand/FACTS.md` (SSOT), `research/competitors/_overview.md`,
> `npm run audit:links` (16 Fehler · 12 Hinweise).
> Ergänzt die bestehende Doku (SYSTEM.md, Playbooks, Briefs) um die **übergreifende Roadmap**:
> Was ist da, was fehlt, in welcher Reihenfolge, und wie bauen wir Autorität auf.

---

## 1. Ausgangslage (Ist-Analyse)

### 1.1 Wo wir stehen

| Bereich | Stand | Reife |
|---|---|---|
| Seitenarchitektur (Silo-Modell, 111 URLs, 2 Pillars + Ratgeber) | vollständig dokumentiert | ✅ 100 % |
| Gebaute Seiten | **16 von 111** (14 indexierbar + 3 Legal − /library noindex) | ⚠️ 14 % |
| Keyword-Map (Primär + Sekundär + SV-Schätzung je URL) | vollständig, SV unverifiziert | ✅ ~80 % |
| Technisches Fundament (Sitemap, robots, JSON-LD, Canonicals, Redirects) | steht, kleine Bugs | ✅ ~90 % |
| Content-Briefs | 1 von 111 (`/kuechen-nach-mass/`) | ⚠️ <5 % |
| Research-Kits (SERP/Wettbewerb je Keyword) | 4 (Homepage, Ladenbau, Büro, Gastro) | ⚠️ ~30 % |
| Interne Verlinkung | Launch-Seiten verdrahtet, 16 Audit-Fehler offen | ⚠️ ~60 % |
| Off-Page / Lokale SEO / Outreach | **nicht begonnen** (GBP 4,2★/14 Bewertungen, 2 Citations) | ❌ ~5 % |

**Kurzfassung:** Die Strategie-Architektur ist exzellent dokumentiert, die Execution steht am
Anfang. Der Engpass ist nicht Planung, sondern **Content-Produktion + Off-Page**.

### 1.2 Bewertung der gebauten Seiten

Alle 14 indexierbaren Seiten haben: unique Title + Description, Canonical, OG-Daten,
JSON-LD `@graph` (LocalBusiness/Service/BreadcrumbList/FAQPage), eine H1, Sitemap-Eintrag.
Das ist überdurchschnittlich sauber. Befunde je Seite:

| Route | Primär-KW (Map) | Zustand | Offene Punkte |
|---|---|---|---|
| `/` | Möbel nach Maß Meisterbetrieb | ✅ gut | — |
| `/moebel-nach-mass/` (Privat-Pillar) | Möbel nach Maß | ✅ gut | „über 25 Jahre" in `moebel-nach-mass.ts:226` (FACTS ❌) |
| `/kuechen-nach-mass/` | Küche nach Maß (1,5–3k SV) | ⚠️ | 3× `#`-Platzhalter-Links (page.tsx:76/83/90); Brief fordert 2.400–3.200 W + 3 fehlende Sections (DESIGN-SPEC) |
| `/gewerbe/` (Gewerbe-Pillar) | Möbel nach Maß Gewerbe | ✅ gut | — |
| `/gewerbe/ladenbau/` | Ladenbau nach Maß (1,5–3k SV) | ⚠️ | Canonical ohne Trailing-Slash (page.tsx:44 → `PAGE_PATH`); OG-type "article"; **URL weicht von Map ab** (Map: `/ladenbau/` flach — entscheiden & ggf. Redirect) |
| `/bueroeinrichtung/` | Büroeinrichtung nach Maß | ✅ gut | — |
| `/gastronomieeinrichtung/` | Gastronomieeinrichtung (1,3–2,9k SV, Wettb. hoch) | ✅ gut | Korridor lt. Map 2.400–2.800 W prüfen |
| `/praxiseinrichtung/` | Praxiseinrichtung nach Maß | ✅ gut | — |
| `/serienmoebel/` | Möbel Serienfertigung | ✅ gut | — |
| `/referenzen/` | Referenzen | ⚠️ | `siteName: "fast.side-boost.com"` (page.tsx:39); „über 25 Jahre" 2× (page.tsx:19, referenzen.ts:33); SOLL-Links → /gewerbe/ + /kontakt/ fehlen |
| `/ueber-uns/` | Tischlerei Meisterbetrieb Espelkamp | ⚠️ | 1× `#`-Platzhalter (ueber-uns.ts); SOLL-Link → /gewerbe/ fehlt |
| `/moebelplaner/` | Möbelplaner online | ⚠️ | SOLL-Link → /referenzen/ fehlt |
| `/kontakt/` | Tischlerei Kontakt | ⚠️ | SOLL-Link → /referenzen/ fehlt |
| `/impressum/` `/datenschutz/` `/agb/` | — | ⚠️ | fehlender MUSS-Link → `/` (audit); keine H1 |

Globale Lücken: Footer enthält 6× `#`-Platzhalter (`content.ts:194–214`) und 3× in
`MnmWeitereLeistungen.tsx` · Hero-Bilder ohne `priority` (LCP) · kein `apple-touch-icon`/Manifest.

### 1.3 Wettbewerbsposition (aus `competitors/_overview.md`)

Gegen Online-Konfigurator-Anbieter (schrankwerk, deinschrank, schrankplaner) und
B2B-Spezialisten (lang-ladenbau, mip-gmbh) hat Fast eine **einzigartige Kombination**, die
kein Wettbewerber komplett abdeckt:

1. **Meisterbetrieb + eigenes Montageteam + kostenloses Aufmaß** (Online-Anbieter: Montage nur als Zukauf)
2. **Eigener 3D-Möbelplaner** (Handwerks-Wettbewerber: kein Tool)
3. **B2C + B2B aus einer Hand** (alle Wettbewerber: nur eins von beiden)
4. **Regional verankert in OWL, 200 km Montageradius** (Online-Anbieter: anonym)

→ Positionierung in allen Texten: *„Online planen wie beim Konfigurator-Anbieter,
gebaut und montiert wie vom Tischler nebenan."*

---

## 2. Säule 1 — Technisches SEO: Sofort-Fixes (Woche 1)

Aufwand gesamt: ~1–2 Tage. Reihenfolge = Priorität.

| # | Fix | Datei:Zeile |
|---|---|---|
| 1 | **„über 25 Jahre" entfernen** (FACTS ❌-Liste) → ersetzen durch „seit 1996" (✅ belegt) | `src/app/(site)/referenzen/page.tsx:19`, `src/lib/content/referenzen.ts:33`, `src/lib/content/moebel-nach-mass.ts:226` |
| 2 | Canonical mit Trailing-Slash | `src/app/(site)/gewerbe/ladenbau/page.tsx:44` (`PAGE_PATH` → `${PAGE_PATH}/`) |
| 3 | `siteName` korrigieren → `"Fast Systemmöbel"` | `src/app/(site)/referenzen/page.tsx:39` |
| 4 | Alle 13 `#`-Platzhalter-Links auflösen oder Elemente entfernen (Launch-Regel: *keine* Dead-Links) | `src/lib/content.ts:194–214` (Footer), `src/app/(site)/kuechen-nach-mass/page.tsx:76/83/90`, `src/components/sections/privat/MnmWeitereLeistungen.tsx:18/25/39`, `src/lib/content/ueber-uns.ts` |
| 5 | MUSS-Links Impressum/Datenschutz → `/` (Logo-/Textlink) | `src/app/impressum/page.tsx`, `src/app/datenschutz/page.tsx` |
| 6 | 5 SOLL-Links nachziehen (moebelplaner→referenzen, kontakt→referenzen, ueber-uns→gewerbe, referenzen→gewerbe + kontakt) | via `intern-verlinkung`-Agent |
| 7 | Hero-/LCP-Bilder `priority` setzen | Hero-Sections (HeroSection, MnmHero, ServiceHero) |
| 8 | OG-type "article" → "website" auf Ladenbau | `src/app/(site)/gewerbe/ladenbau/page.tsx` |
| 9 | H1 auf Legal-Seiten ergänzen | `src/app/{impressum,datenschutz,agb}/page.tsx` |
| 10 | Nice-to-have: `apple-touch-icon`, `manifest.webmanifest` | `src/app/` |

**Strukturentscheidung offen:** Ladenbau liegt unter `/gewerbe/ladenbau/`, die Keyword-Map
und redirects.md planen `/ladenbau/` (flach, wie alle anderen Gewerbe-Cluster). Vor dem Bau
der Ladenbau-Kinder (`/ladenbau/verkaufstheke-nach-mass/` …) entscheiden — sonst
Redirect-Kaskade. Empfehlung: auf `/ladenbau/` umziehen, solange noch nichts live ist.

**Gate:** `npm run audit:links` muss 0 Fehler zeigen; danach als PR-Pflicht-Check beibehalten.

---

## 3. Säule 2 — Keyword-Strategie & Priorisierung

Die Keyword-Map ist vollständig (111 URLs). Was fehlt, ist **Priorisierung nach
Aufwand/Ertrag**. Bewertung: Suchvolumen × Wettbewerb × Conversion-Nähe × Montageradius-Fit.

### Tier 1 — Quick Wins (hoher SV, moderater Wettbewerb, kommerziell)

| Ziel | Primär-KW | SV/Mon | Warum zuerst |
|---|---|---|---|
| `/hauswirtschaftsraum/` (Hub) | Hauswirtschaftsraum einrichten | 4.000–6.000 | Höchstes SV im Portfolio, Trend-Thema, wenig spezialisierte Konkurrenz |
| `/einbauschraenke-nach-mass/` (Hub) | Einbauschrank nach Maß | 4.000–6.000 | Zweithöchstes SV, Kerngeschäft, schrankwerk & Co. ohne Montage-USP angreifbar |
| `/kuechen-nach-mass/kueche-nach-mass-kosten/` | Küche nach Maß Kosten | 600–1.200 | Kosten-Intent = heißester Lead; Playbook-Pflichtmodul existiert |
| `/einbauschraenke-nach-mass/einbauschrank-kosten/` | Einbauschrank Kosten | 1.200–2.000 | dito |
| `/kuechen-nach-mass/kueche-mit-dachschraege/` | Küche mit Dachschräge | 500–1.000 | Wettbewerb niedrig-mittel, perfektes Maß-Thema |
| `/einbauschraenke-nach-mass/einbauschrank-dachschraege/` | Einbauschrank Dachschräge | 800–1.500 | dito |

### Tier 2 — Volumen-Themen mit hartem Wettbewerb (nach Tier 1)
Kleiderschrank nach Maß (2,5–4k, hoch) · begehbarer Kleiderschrank (1,5–2,5k, hoch) ·
Küche planen (4–8k, Ratgeber, hoch) · Regal nach Maß (1,5–2,5k, hoch) · TV-Wand nach Maß (1,3–2k).
Hier gewinnen wir erst, wenn die Hubs Autorität aufgebaut haben.

### Tier 3 — Gewerbe-Kinder (kleines SV, hoher B2B-Auftragswert)
Verkaufstheke, Empfangstresen/-theke (3 Varianten!), Tresen Gastro, Arztpraxis-Möbel,
Kanzleieinrichtung, Kleinserien/Lohnfertigung. SV 100–700, aber ein Lead = fünfstelliger
Auftrag. Wettbewerb meist niedrig → mit 800–1.400 Wörtern schnell rankbar.

### Querschnitt: Lokaler Keyword-Layer
„Espelkamp" steht bereits in Titles. Zusätzlich konsequent **OWL, Minden, Lübbecke,
Bielefeld, Osnabrück** (FACTS-bestätigte Beispielorte) in Intro/FAQ/Schema einweben —
**keine Stadt-Doorway-Pages** (Wettbewerbs-Doku rät explizit zu thematischen Inhalten statt
Stadt-Landingpages). `/liefergebiet-montage/` wird die zentrale Geo-Seite.

### Kannibalisierungs-Schutz (Pflicht vor Cluster-Kindern)
Drei Empfangstresen-/Theken-URLs (ladenbau/büro/praxis) und doppelte Kosten-Themen
(Cluster-Kind vs. `/ratgeber/…`) sind kannibalisierungs-gefährdet. **Vor jedem
Cluster-Kind-Batch die Differenzierungs-Map** (`playbooks/clusters/<cluster>.md`) anlegen —
in AGENT-WORKFLOW.md als Phase 0 vorgesehen, existiert aber noch für keinen Cluster.
Außerdem: SV-Schätzungen vor jedem Batch per Keyword-Planner/Sistrix verifizieren
(steht so in der Map, ist noch nicht passiert).

---

## 4. Säule 3 — Content-Roadmap (12 Wochen)

Prozess je Seite (Engine existiert als Doku): Research-Kit → Differenzierungs-Map →
Brief → Copy (Playbook-Korridor) → QC-Gates (`templates/qc-checklist.md`) → FACTS-Check →
`npm run audit:links`.

| Phase | Zeitraum | Seiten | Ziel |
|---|---|---|---|
| **0 — Launch-Blocker** | Woche 1–2 | Technik-Fixes (§2) · `/ablauf-massanfertigung/` · `/liefergebiet-montage/` · Küchen-Seite auf Brief-Soll bringen (3 Sections lt. DESIGN-SPEC) | Sauberer Launch-Stand; die 2 Trust-Seiten entsperren 4 blockierte MUSS-Links |
| **1 — Privat-Hubs** | Woche 3–6 | `/einbauschraenke-nach-mass/` · `/hauswirtschaftsraum/` · `/badmoebel-nach-mass/` · `/wohnmoebel-nach-mass/` · `/ratgeber/` (Hub) · beide Kosten-Seiten (Tier 1) | Silo-Gerüst komplett; Kosten-Content für Leads |
| **2 — Tier-1/2-Kinder** | Woche 7–10 | Dachschrägen-Duo · Kleiderschrank-Trio · Küchen-Kinder (Zeile/L/Insel) · HWR-Kinder (Waschmaschinen-/Vorratsschrank) · 2–3 Ratgeber | Long-Tail-Traffic; Hub-Autorität durch Kind-Links |
| **3 — Gewerbe-Tiefe** | Woche 11–12+ | Gewerbe-Kinder nach Tier 3 · restliche Ratgeber · `/team/` | B2B-Leads; E-E-A-T (Team-Seite = Familien-Story) |

Kapazitäts-Daumenregel: 4–6 Seiten/Woche sind mit Kit→Brief→QC-Pipeline realistisch;
Qualität (QC-Gates, FACTS-Treue) schlägt Tempo — eine falsche Garantie-Aussage kostet
mehr als eine Woche Verzögerung.

---

## 5. Säule 4 — Lokale SEO

Schema (LocalBusiness + GeoCircle 200 km) ist vorbildlich. Der Rest ist ungenutzt:

1. **Google Business Profile** (größter lokaler Hebel, aktuell 4,2★/14 Bewertungen):
   - Kategorien (Tischler/Möbelhersteller/Küchenstudio), Leistungen, Fotos (Werkstatt,
     Montageteam, Projekte), Öffnungszeiten **Mo–Fr 06–17 Uhr** (Kunde bestätigt).
   - **Bewertungs-Programm:** Nach jeder Montage QR-Karte/Follow-up-Mail mit
     GBP-Review-Link. Ziel: 40+ Bewertungen, ≥4,6★ in 12 Monaten. Antworten auf jede
     Bewertung. (→ `gbp-workflow`-Skill nutzen.)
   - Wöchentliche GBP-Posts aus Projekt-Fotos/Referenzen.
2. **NAP-Konsistenz:** Verbindlich: Alte Waldstraße **32**, 32339 Espelkamp, 05771 9138312,
   Mo–Fr 06–17 Uhr. Bestehende Einträge (wlw.de, kuechen-atlas.de — dort steht noch 09–16 Uhr
   und tlw. „32a") korrigieren, dann erst neue Citations aufbauen.
3. **Citations aufbauen** (Reihenfolge nach Autorität): HWK Ostwestfalen-Lippe /
   Tischler-Innung (Mitgliedschaft beim Kunden klären — FACTS ❓), Gelbe Seiten, 11880,
   Das Örtliche, Cylex, Houzz (Portfolio!), MyHammer/Blauarbeit (B2C-Leads), wer-zu-wem,
   Kompass (B2B).
4. **`/liefergebiet-montage/`** als Geo-Hub: 200-km-Karte, Beispielorte
   (Espelkamp, Minden, Lübbecke, Bielefeld, Osnabrück, ganz OWL), Anfahrt/Montage-Ablauf.

---

## 6. Säule 5 — Off-Page & Outreach

Grundsatz: Fast hat **echte, belegte Stories** (FACTS.md) — die sind mehr wert als
gekaufte Links. Alle Hooks sind kundenseitig freigegeben oder ✅ belegt:

### 6.1 PR-Hooks (Lokalpresse & Fachmedien)
| Hook | Story | Ziel-Medien |
|---|---|---|
| **30 Jahre Fast (1996→2026)** | Garagen-Gründung Rahden-Tonnenheide → Meisterbetrieb mit eigener Fertigung (Jubiläums-Datum beim Kunden bestätigen lassen) | Westfalen-Blatt, Neue Westfälische, Lübbecker Kreiszeitung, espelkamp.de (Kontakt existiert: Bürgermeister-Besuch 24.02.2023!) |
| **Arminia-Bielefeld-Kabine** (vom Kunden freigegeben; Kabine, NICHT Küche) | „Espelkamper Tischlerei baut die Kabine der Arminia" — Case-Study-Seite unter /referenzen/ + Outreach | Lokalsport-Medien, Arminia-Fanmedien, Vereinsumfeld; intern auf Gewerbe/Ladenbau/Über-uns verlinken |
| **Familien-Nachfolge** | Johann → Andreas & Peter Fast, 2. Generation seit 2010, schrittweise Übernahme | Handwerksblatt, DHB, Lokalpresse (Nachfolge ist Dauer-Thema im Handwerk) |
| **Nachhaltigkeit** | Holzabfälle als Energie, Photovoltaik, E-Fuhrpark (alle ✅ belegt) | Regionale Wirtschafts-/Energie-Formate, IHK/HWK-Magazine |

### 6.2 Partner- & Lieferanten-Links (einfachste B2B-Links)
- **Homag** (Maschinenpark ✅ bestätigt): Homag publiziert Kunden-Referenzstories →
  aktiv anbieten; sehr starke Domain.
- Geräte-/Materialpartner und Beschläge-Hersteller: Händler-/Partnerverzeichnisse prüfen.
- **kuechen-atlas.de**-Profil ausbauen (besteht bereits).

### 6.3 Linkable Assets (Content, der Links verdient)
1. **Der Möbelplaner** (kostenloses 3D-Tool, USP gegen alle Handwerks-Wettbewerber):
   Outreach an Hausbau-/Renovierungs-Blogs und „Möbel online planen"-Tool-Listen.
2. **Kosten-Ratgeber** (Küche/Einbauschrank nach Maß): ehrliche Kostenfaktoren statt
   Fantasiepreise (FACTS: keine Preisspannen!) — zitierfähig für Foren & Blogs.
3. **HWR-Planungs-Checkliste** (PDF/Seite zum 4–6k-SV-Thema): Bauherren-Foren,
   Neubau-Communities (z. B. Hausbau-Foren, Bautagebücher).

### 6.4 Netzwerk & Verbände
- HWK OWL / Tischler-Innung / Tischler NRW: Mitgliedseinträge (klären, ggf. beitreten).
- **Lehrstellenbörse der HWK** + Ausbildungsportale (Fast hat jobs-Seite auf Altsite) —
  Ausbildungsbetrieb-Einträge sind stabile, vertrauenswürdige Links.
- Architekten/Innenarchitekten & Bauträger in OWL: Kooperations-Outreach
  (Empfehlungsnetzwerk; mittelbar Links über Projektseiten der Partner).
- B2B-Branchenportale für Gewerbe-Cluster: Gastro-Gründerportale, Praxisgründung-Portale
  (z. B. Ratgeber-Beiträge „Praxis einrichten: Checkliste vom Möbelbauer").

### 6.5 Was wir NICHT machen
Linkkauf/PBNs · Stadt-Doorway-Pages · Verzeichnis-Spam (nur kuratierte Citations) ·
Claims ohne FACTS-Beleg in Pressetexten (jede PR-Aussage gegen FACTS.md prüfen).

---

## 7. Säule 6 — AEO/GEO (KI-Suche)

FAQ-Schema ist flächendeckend live (gute Basis). Ergänzend (Phase 2+, lt. DEPTH.md §64):
- `llms.txt` / `llms-full.txt` generieren, sobald Hubs stehen.
- Frage-zuerst-Struktur in Ratgebern (H2 als echte Fragen, Antwort in ersten 2 Sätzen).
- Zitierfähige Tabellen (Kostenfaktoren, Material-Vergleiche, Maß-Checklisten).
- Entitäts-Konsistenz: identische NAP/Fakten auf Website, GBP, Verzeichnissen, LinkedIn.

---

## 8. Messung & KPIs

**Setup (Woche 1):** Google Search Console + Bing Webmaster verifizieren, Sitemap
einreichen · GBP-Insights-Baseline · Rank-Tracking für ~30 Fokus-Keywords (Tier 1 + Pillars)
· SV-Verifizierung der Map per Keyword-Planner/Sistrix.

| KPI | Baseline | Ziel 3 Mon. | Ziel 12 Mon. |
|---|---|---|---|
| Indexierte Seiten | ~14 | 35–40 | 100+ |
| Top-10-Rankings (Fokus-KWs) | 0 (Launch) | 5–8 (Tier 3 + Long-Tail) | 25+ inkl. 2 Hubs |
| GBP-Bewertungen | 14 (4,2★) | 20+ | 40+ (≥4,6★) |
| Verweisende Domains | ~2 (wlw, kuechen-atlas) | +5 (Citations/HWK) | +20 (PR/Partner) |
| Leads/Monat (Formular + Planer-Starts + Anrufe) | Baseline erheben | +50 % | ×3 |

**Laufende Gates:** `npm run audit:links` = 0 Fehler je PR · FACTS-Check je Text ·
QC-Checklist je Seite · Quartals-Re-Audit (Technik + Rankings + Kannibalisierung).

---

## 9. Maßnahmenplan — die nächsten 10 Schritte

1. ☐ Technik-Fixes §2 (1–2 Tage, ein PR) — inkl. „über 25 Jahre"-Korrektur
2. ☐ Entscheidung `/gewerbe/ladenbau/` vs. `/ladenbau/` (vor Ladenbau-Kindern)
3. ☐ GSC + Rank-Tracking + SV-Verifizierung aufsetzen
4. ☐ `/ablauf-massanfertigung/` + `/liefergebiet-montage/` bauen (entsperrt MUSS-Links)
5. ☐ Küchen-Seite auf Brief-Soll (DESIGN-SPEC-Sections)
6. ☐ GBP optimieren + Bewertungs-Programm starten (Kunde briefen)
7. ☐ NAP-Korrektur wlw/kuechen-atlas + 5 Kern-Citations
8. ☐ Differenzierungs-Maps für Einbauschränke + HWR, dann Phase-1-Hubs bauen
9. ☐ Arminia-Case-Study + 30-Jahre-PR vorbereiten (Kundenfreigaben einholen)
10. ☐ Homag-Referenzstory + HWK/Innung-Einträge anstoßen

**Offene Kundenfragen (blockieren Teile der Strategie):** Jubiläumsdatum/Feier 2026 ·
HWK/Innung-Mitgliedschaft · Arminia-Foto-/Zitatfreigabe für Case Study ·
USt-IdNr fürs Impressum · „Meisterbetrieb seit"-Jahr.
