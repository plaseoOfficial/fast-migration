# SEO-Content-System — Fast Systemmöbel

Dies ist der Arbeitsbereich für **erstklassigen, E-E-A-T-freundlichen, markentreuen
SEO-Content**. Alles, was ein Content-Producer braucht, liegt hier in `docs/seo/`.
Der eigentliche Seitentext lebt props-getrennt in `src/lib/content/*.ts` — Copy ändern
heißt nur Werte editieren, Design bleibt pixel-perfect.

> **Worktree-Hinweis:** Diese Arbeit läuft im Worktree `fast-migration-content`
> (Branch `content/seo-foundation`). Am Ende mergen wir nach `master` („einpflegen").

## Der Workflow in einem Satz
**Firmen-Wissen → Keyword-Fundament → per-Seite-Brief (Maschine) → schreiben → QC → einpflegen.**

## Ordnerstruktur

```
docs/seo/
  README.md            ← du bist hier
  internal-linking.md  Silo-/Pillar-Cluster-Modell + Link-Backlog (bestehend)
  architecture.md      Ziel-Seitenlandkarte / URL-Master (Phase B, aus seo-audit)
  keyword-map.md       Keyword → URL, Intent, Volumen-Schätzung (Phase B, aus seo-audit)
  brand/
    FACTS.md           Harte, zitierfähige Fakten (NAP, Zahlen) + Confidence-Marker
    COMPANY_INTAKE.md  Fragenkatalog — DU füllst ihn aus (E-E-A-T-Rohstoff)
    BRAND_VOICE.md     Stilregeln, destilliert aus INTAKE + FACTS (Phase A.2)
  templates/
    brief-template.md     Struktur eines per-Seite-Briefs
    page-write-prompt.md  „Ein Prompt pro Seite" — der Schreib-Prompt
    eeat-checklist.md     Messbare E-E-A-T-Kriterien
    qc-checklist.md       8 harte QC-Gates
  briefs/
    <slug>.md          Fertiger Brief je Seite (Output der Content-Engine)
  research/
    competitors/<slug>.md  SERP-Top-10 + Content-Gap je Ziel-Keyword (Engine-Zwischenstand)
```

## Was JETZT dein nächster Schritt ist
1. **`brand/COMPANY_INTAKE.md` ausfüllen.** Das ist der wichtigste Rohstoff: Damit
   schreibe ich später „als ob die Firma selbst schreibt". Je konkreter (echte Projekte,
   echte Namen, O-Ton-Zitate), desto stärker das E-E-A-T-Signal.
2. Alles in `brand/FACTS.md` mit 🟡 oder ❓ **bestätigen oder korrigieren** — das sind
   unverifizierte/fehlende Zahlen, die sonst zu falschen Claims führen.

## Status der Phasen
- [x] Phase A — Worktree, Skelett, Intake, FACTS, Brand-Voice (v0)
- [x] Domain bereinigt — alle `side-boost`-Reste raus → `www.fast-systemmoebel.de` (Typecheck grün)
- [x] Phase B — Sheet ingestiert → `architecture.md`, `keyword-map.md`, `redirects.md`, `research/competitors/_overview.md`
- [ ] Phase C — Templates + Content-Engine + PoC-Brief (`/kuechen-nach-mass/`)
- [ ] Phase D — Schreiben (Humanizer!), `/ueber-uns/`, Organization-Schema, `llms.txt`

> **Hinweis:** Der `seo-audit` war bereits gefahren — das [Google Sheet](https://docs.google.com/spreadsheets/d/1Jf_zmBGD8pOtzeKDjVX6jP0JkMmrgXGn7QMP9Fnzg5E/edit) ist seine 17-Tab-Ausgabe. `docs/seo/*.md` ist die in-Repo-Spiegelung (Sheet bleibt führend).
