# AGENT-WORKFLOW — Ablauf-Regeln (VERBINDLICH)

> Diese Reihenfolge ist Pflicht für **jeden** Content-Lauf. Kein Schritt wird übersprungen,
> keine Reihenfolge getauscht. Ergänzt [`SYSTEM.md`](SYSTEM.md) (das „Warum") um das „Wann/Was zuerst".

## Phase 0 — Voraussetzung (einmalig je Cluster, VOR der ersten Unterseite)
- **0.1 Differenzierungs-Map** (`playbooks/clusters/<cluster>.md`) muss existieren: pro Unterseite ein einzigartiger Winkel + „deckt NICHT ab"-Grenzen. Fehlt sie → zuerst anlegen. *(Ohne Map kein Cluster-Content — Anti-Duplikat.)*

## Phase 1 — RESEARCH-KIT (Ebene 1 · Engine: `content-engine.workflow.mjs` = SERP-Intelligence)
Läuft **1× pro Keyword**, Ergebnis wird **gecacht** (`docs/seo/research/<slug>.kit.md`) und wiederverwendet. **3 Agents, read-only/text-only:**
1. **SERP + Konkurrenz-Tiefe** — Top-8 fetchen, Wortzahl MESSEN → Median; Tiefe-Blaupause der Sieger; Formate; Snippet/PAA.
2. **WDF\*IDF + Intent + Gap** — Pflicht-Terme (mit Gewicht), Entitäten, Intent/Job-to-be-done/Micro-Intents, intent-abgeleitete Pflicht-Module, Gaps, unser Winkel, FAQ-Kandidaten.
→ **Korridor** deterministisch in Code: `max(SERP-Median, Archetyp-Min) … Median×Bonus`
3. **Synthese → Research-Kit** — dicht & entscheidungsfertig (Korridor · Pflicht-Module · WDF-Checkliste · FAQ-Liste · Do-NOT-claim · Winkel) **inkl. §9 Discovery-Fragen**.
**Gate:** Kit liegt vor.

## Phase 1.5 — 🔴 DISCOVERY (PFLICHT · Kunde-Regel · NACH der SERP-Suche, VOR dem Schreiben)
Die im Kit (§9) erzeugten **seitenspezifischen Fragen an den Kunden** werden gestellt und **vom Menschen/Kunden beantwortet** → Antworten zurück ins Kit. **IMMER dabei:** Geo-Reichweite („bundesweit oder montage-gebunden?"). Nur was NUR der Kunde weiß. *(Das ist die ausdrückliche Regel: erst passende Fragen stellen, dann schreiben.)*
**Hard-Stop:** Solange Discovery-Fragen offen sind → **kein Authoring.**

## Phase 2 — AUTHORING (Ebene 2 · Engine: `authoring-engine.workflow.mjs`) — LEAN, **text-only**
Eingabe: das **beantwortete** Kit. **4 Agents, alle TEXT-ONLY (editieren NIE Dateien, fahren KEIN Bash/Build):**
1. **Writer** — Kit → prop-gemappte Copy in einem Aufruf.
2. **Humanizer** — KI-Muster brechen, O-Ton Fast (voice-only; ändert KEINE Fakten/Keywords/Links/Struktur).
→ **Code-Gates** (0 Token, deterministisch, 100 %): Wortzahl-Korridor · **Verbotene-Claims** (FACTS ❌) · FAQ-Zahl · Title/Description-Länge.
3. **QC&Fix** — EIN Reviewer prüft alle Dimensionen (Fakten · WDF · E-E-A-T · Links/Dedup · AEO · Human) + die Code-Befunde und gibt die **korrigierte Copy** zurück.
4. **Chefredakteur** — holistisches Verdikt (dient & konvertiert?).
**Gate:** Code-Gates grün + Chefredakteur pass. → finale Copy (prop-gemappt, **als Text an den Menschen** — kein Selbst-Einsetzen).

## Phase 3 — INTEGRATION (Mensch + Technik)
11. **Mensch-Review / Freigabe** (du)
12. Copy in `src/lib/content/<slug>.ts` einsetzen — **nur Werte, pixel-perfect**
13. **Schema + Metadata** setzen (seitentyp-spezifisch, s. u.)
14. **Interne Links beidseitig** verdrahten (`internal-linking.md`)
15. **`npm run check`** (lint+typecheck+build) + **Visual-Diff** vs. `docs/design-references/`
16. **`design-qc`-Agent** (bei UI-Änderungen)
17. **`STATUS.md`** aktualisieren (Seite = live-ready)

## Kategorie-spezifische Abzweige (das Ebene-2-Playbook entscheidet)
- **Hub:** CollectionPage-Schema · Cluster-Karten · breite Einordnung · **keine** Tiefe-Konkurrenz zu den Kind-Seiten.
- **Leistung (conversion):** **starker** CTA (Möbelplaner + Kontakt) · Service+FAQPage-Schema · Vergleichstabelle · Prozess · USP.
- **Produkt:** Product+FAQPage-Schema · Varianten/Maße · Kosten-Orientierung · technische Specs.
- **Ratgeber:** HowTo/FAQPage-Schema · **AEO-Direktantworten** + Tabellen · schwacher CTA · maximale Tiefe.
- **Referenz/Über-uns:** Organization/AboutPage-Schema · echte Projekte/Team/Zahlen · **Experience-Fokus** · weicher CTA.
- **Conversion (Kontakt/Planer):** Formular zuerst · Minimal-Copy · LocalBusiness/ContactPoint · **kein** SEO-Fülltext.

## Hard Stops (Abbruch-Regeln)
- **Discovery-Fragen (Phase 1.5) unbeantwortet** → kein Authoring (erst fragen, dann schreiben).
- **Verbotene-Claims-Gate rot** (ein ❌-Claim aus FACTS.md, in Code erkannt) → **sofortiger Stopp, nie live.**
- **Agents editieren Dateien / fahren Bash/Build** → Verstoß. Agents geben nur Text zurück; **der Mensch** setzt ein.
- **`npm run check` rot** → **nicht mergen.**

## Skalierungs-Modus (Batch)
**Recherche (Ebene 1) 1× pro Keyword/Cluster** — Kits gecacht, von allen Cluster-Unterseiten wiederverwendet. **Authoring (Ebene 2) pro Seite, lean** (3 text-only Agents). Sammel-Review (Phase 3) → ein Merge. Cluster-Seiten **erst nach** ihrer Differenzierungs-Map (Phase 0). Richtwert: ~4 Agents/Seite (Writer · Humanizer · QC&Fix · Chefredakteur), ~140k Token/Seite (statt 32 Agents / 2,2 Mio); Recherche (Ebene 1) zusätzlich 1× pro Keyword, gecacht.
