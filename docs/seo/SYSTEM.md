# Content-System — Fast Systemmöbel (Operating Manual)

> Wie wir nachhaltig **1A-SEO-Content über alle Seiten** erzeugen — **ohne Drift, ohne Spam/Duplikate**, skalierbar von 14 auf 111 Seiten. Verbindliche Arbeitsgrundlage.

## Prinzip — 3 Garantien, strukturell erzwungen (nicht der Modell-„Erinnerung" überlassen)
1. **Kein Drift** — jeder Lauf lädt denselben Kanon + den Seiten-Brief frisch ein.
2. **Kein Spam/Duplikat** — Differenzierungs-Contract + Korpus-Dedup-Gate (s. u.).
3. **Skalierbar** — exakt dieselbe Pipeline pro Seite, Batch-parallel, Mensch-Freigabe.

## Ein Worktree, mehrere Regel-Ebenen
**EIN** Worktree (`fast-migration-content`). „Andere Regeln pro Segment" = **Playbook-Dateien**, NICHT getrennte Worktrees/Ordner (sonst zerfallen Build, interne Verlinkung & Dedup-Wissen).

| Ebene | Datei(en) | Gilt für |
|---|---|---|
| **1 · Globaler Kanon** | `brand/FACTS.md`, `brand/BRAND_VOICE.md`, `SEO-PLAYBOOK.md` | **alle** Seiten |
| **2 · Seitentyp-Playbook** | `playbooks/<typ>.md` | je Archetyp (Hub/Leistung/Produkt/Ratgeber/Referenz/Conversion) |
| **2b · Cluster-Differenzierung** | `playbooks/clusters/<cluster>.md` | je Cluster (Küchen, Schränke…) — **Anti-Duplikat** |
| **3 · Per-Seite-Brief** | `briefs/<slug>.md` | die Einzelseite |

→ Die Engine wählt Ebene 2 **automatisch** über die Spalte „Seitentyp" der URL-Master.

## Ordnerstruktur (Ziel)
```
docs/seo/
  SYSTEM.md            ← dieses Dokument (das „Wie")
  SEO-PLAYBOOK.md      ← lebende SEO/AEO-Regeln 2026 (aus Deep-Research)
  brand/               FACTS.md · BRAND_VOICE.md · COMPANY_INTAKE.md
  architecture.md · keyword-map.md · internal-linking.md · redirects.md
  playbooks/
    hub.md · leistung.md · produkt.md · ratgeber.md · referenz.md · conversion.md
    clusters/  kuechen.md · einbauschraenke.md · …   ← Differenzierungs-Maps
  briefs/<slug>.md
  research/competitors/<slug>.md
  engine/  content-engine.workflow.mjs · authoring-engine.workflow.mjs
  STATUS.md            ← Content-Register (Status je Seite)
```

## Seitentyp-Playbooks (warum Referenz ≠ Leistung)
Jedes Playbook fixiert für seinen Archetyp: **Ziel · Such-Intent · Pflicht-Bausteine · Schema · E-E-A-T-Fokus · CTA-Stärke · Ton-Nuance · Wortzahl-Korridor · interne-Link-Rolle · AEO-Elemente.**

| Archetyp | Ziel/Intent | Pflicht-Bausteine | Schema | CTA |
|---|---|---|---|---|
| **Hub** | Orientierung + Verteilung | Überblick, Cluster-Karten | CollectionPage | weich |
| **Leistung** | Vertrauen → Anfrage | USP, Prozess, Vergleich, FAQ | Service+FAQ | **stark** |
| **Produkt** | Kaufabsicht | Varianten, Maße, Kosten-Hinweis | Product+FAQ | stark |
| **Ratgeber** | Helfen/ranken/AEO | Schritte, Tabellen, Direktantworten | HowTo/FAQ | weich |
| **Referenz/Trust** | Beweisen, Marke | Story, echte Projekte, Team | Organization/AboutPage | weich |
| **Conversion** | Abschluss | Formular zuerst, Minimal-Text | LocalBusiness/ContactPoint | Formular |

## 🛡️ Anti-Duplikat / Anti-Spam (dein Kern-Risiko)
**Problem:** Küchenzeile / L-Küche / Kochinsel / Neubau / Dachschräge dürfen NICHT „dasselbe + ein paar Wörter" sein → Thin Content, Abstrafung. **Drei Schutzschichten:**

1. **Differenzierungs-Contract (VOR dem Schreiben):** Pro Cluster definieren wir **einmal** in `playbooks/clusters/<cluster>.md`, was **jede** Unterseite **einzigartig** abdeckt **und was sie bewusst NICHT** abdeckt („gehört zur Schwesterseite"). Jeder Brief erbt seinen Abschnitt → die Seiten können sich gar nicht überschneiden.
2. **Eigene-Substanz-Pflicht:** Jede Seite braucht **eigenes Material** — eigener Winkel, eigene Beispiele/Maße/Daten/FAQ. Synonym-Umschreibung ist verboten.
3. **Korpus-Dedup-Gate (QC):** Ein Agent vergleicht jeden Draft **semantisch gegen ALLE** Schwester-/Bestandsseiten, misst die Überlappung und **blockt** bei zu hoher Ähnlichkeit → erzwingt echte Differenzierung. *(Ergänzt die Kannibalisierungs-Logik aus dem Sheet-Tab 11.)*

## QC — wie wir prüfen (lean, NICHT 13 einzelne LLM-Gates)
- **Deterministisch in Code (0 Token, 100 %):** Wortzahl-Korridor · **Verbotene-Claims** (FACTS ❌) · FAQ-Zahl · Title/Description-Länge.
- **Ein QC&Fix-Reviewer (1 Agent)** deckt in EINEM Durchgang ab: Fakten · Keywords/WDF*IDF · E-E-A-T · interne Links/CTA + Korpus-Dedup · AEO/Zitierbarkeit · Human-Score — und gibt die **korrigierte Copy** zurück.
- **Chefredakteur (1 Agent):** holistisches Verdikt (dient die Seite dem Nutzer & konvertiert sie?).

*(Die früheren „13 einzelnen LLM-Gates" + Multi-Lens-Schleifen sind aufgegeben — sie waren der Hauptgrund für 32 Agents / 2,2 Mio Token pro Seite. Gleiche Abdeckung, ein Bruchteil der Kosten. Tiefe steckt im gecachten Research-Kit, nicht in QC-Iterationen.)*

## AEO/GEO (KI-Suche — ChatGPT/Perplexity/Google AI Overviews)
`llms.txt` + `llms-full.txt` · zitierbarer Aufbau (Frage-zuerst, Direktantworten, Tabellen, klare Entitäten) · vollständiges Schema. Regeln: `SEO-PLAYBOOK.md` (aus Deep-Research). Geprüft durch QC-Gate 10.

## Der Lauf pro Seite (immer identisch)
1. **(einmal je Cluster)** Differenzierungs-Map anlegen.
2. **SERP-Intelligence-Engine** (Ebene 1, **1× pro Keyword, gecacht**) → `research/<slug>.kit.md`: Korridor · Pflicht-Module + Tiefe-Blaupause · WDF-Checkliste · FAQ-Liste · Do-NOT-claim · Winkel · **§9 Discovery-Fragen**.
3. **🔴 Discovery** — Kunden-Fragen aus dem Kit **stellen + beantworten lassen** (erst fragen, dann schreiben). Hard-Stop, solange offen.
4. **Authoring-Engine** (Ebene 2, **lean, text-only**) → Writer → Code-Gates → QC&Fix → Chefredakteur → Copy als **Text**.
5. **Mensch** setzt Copy in `src/lib/content/<slug>.ts` ein → interne Links → **einmal** `npm run check` → Visual-Diff vs. `docs/design-references/`.
6. **`STATUS.md`** aktualisieren.

## Skalierung
**14 Launch-Seiten** als Batch (Pipeline parallel, je Seite dieselbe Maschine) → Sammel-Review → merge. Danach die ~97 weiteren in **Wellen** entlang der Sheet-Launch-Phasen (P2 Woche 3–6, P3 Woche 7–12). Qualität bleibt konstant, weil die Maschine konstant ist.

## Rollen
- **Engines/Agents** schlagen vor (Brief, Copy, QC).
- **Du** entscheidest Fakten, Freigaben, Strategie.
- **Mensch-Checkpoint** vor jedem Merge — nichts geht ungeprüft live.
