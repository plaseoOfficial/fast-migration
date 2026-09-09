# Design: Inline-Content-Links — skalierbare interne Verlinkung im Fließtext

**Datum:** 2026-07-14 · **Status:** Entwurf, wartet auf Review (Ben)

## Problem

Alle Links der Website leben in strukturierten Slots (Karten, CTAs, Breadcrumbs,
Nav/Footer). Die Text-Props der Sections sind reine Strings — ein Satz im Body
kann kein `<a>` enthalten. Folge: nur 1–2 echte kontextuelle Textlinks pro Seite,
ungleiche Link-Verteilung (`/kontakt/` 41 eingehende Body-Links, Gastro/Serienmöbel/
Praxis/Über-uns je 2), und bei ~80 geplanten Seiten skaliert die Verlinkung nicht,
weil neue Seiten nur verlinkt werden können, wo zufällig ein Karten-Slot frei ist.

## Entscheidungen (Ben, 2026-07-14)

| Frage | Entscheidung |
|---|---|
| Scope | Basis **und** Retrofit aller 18 bestehenden Seiten |
| Technischer Ansatz | **A: Marker-String** `[Anker](/ziel/)` + Mini-Renderer (statt Segment-Arrays oder MDX) |
| Link-Styling | Dezent: Textfarbe erbt, Unterstreichung mit Offset, Hover → Fast-Gelb `rgb(237,168,33)` |
| Governance | **Harte Audit-Regel** `minInlineLinks` pro Seitentyp (Fehler = CI-Gate) |
| Copy-Eingriff | Minimal-invasiv: Anker auf vorhandene Formulierungen, nur kleine Einschübe |

## 1. Primitive: `renderInlineLinks`

Neu: `src/lib/inline-links.tsx`, Export `renderInlineLinks(text: string): ReactNode`.

- Parst **ausschließlich** die Syntax `[Anker](/ziel/)` (Markdown-Link, nichts weiter —
  kein Bold, keine Listen, kein Nesting).
- Interne Ziele (beginnend mit `/`) → `next/link` `<Link>`; externe (`http…`) → `<a>`.
- String ohne Marker → wird unverändert zurückgegeben (**byte-identisches Rendering**,
  Pixel-Perfect-Regel unverletzt).
- Fehlgeformte Marker (z. B. `[Text` ohne `](…)`) → bleiben Literaltext. Fail-safe,
  nie kaputtes Markup.
- Styling: Klasse `fast-inline-link` in `src/app/globals.css` —
  `color: inherit; text-decoration: underline; text-underline-offset: 4px;
  transition: color .2s` + Hover `rgb(237,168,33)`. Spec wird in
  `docs/design-system/TOKENS.md` ergänzt, damit der `design-qc`-Agent sie kennt.

## 2. Section-Adoption (Whitelist)

Nur **Fließtext-Props** laufen durch den Renderer — niemals Headings, Eyebrows,
Stats oder Button-Labels (Heading-Hierarchie-Konvention bleibt unberührt).
Pro Section ist die einzige Code-Änderung `{prop}` → `{renderInlineLinks(prop)}`.

Whitelist (Absatz-/Body-Props):

- `FaqSection.answer`
- `MnmIntroStats`: `introBefore`, `introAfter`, `col1Body`, `col2Body`, `col3Body`
- `MnmWeitereLeistungen`: Karten-`description`
- `MnmGeschichte`, `MnmWarum`, `MnmTypische`: Absatz-Props
- `ContrastCols`, `UspHighlight`, `SegmentCards`, `ProcessSteps`: Body-/Step-Texte
- Gewerbe-Pendants der obigen Sections

## 3. Regeln & Audit

**`src/lib/seo/linking-rules.ts`:**

- `TypeRule` bekommt `minInlineLinks` (Minimum echter In-Content-Links pro Seite):
  Pillar-Hub ≥ 3 · Cluster-Pillar ≥ 3 · Produkt ≥ 2 · Ratgeber-Pillar ≥ 3 ·
  Cluster-Article ≥ 2 · Homepage ≥ 2 · Conversion ≥ 1 · Brand ≥ 2 · Legal 0.
- `ANCHORS`-Sets um alle gebauten Ziele ergänzen, die noch fehlen:
  `/einbauschraenke-nach-mass/`, `/ladenbau/`, `/bueroeinrichtung/`,
  `/gastronomieeinrichtung/`, `/serienmoebel/`, `/praxiseinrichtung/`.

**`scripts/audit-internal-links.mjs`:**

- Extraktion: alle String-Werte (Module-Walk **und** Regex-Fallback) werden auf
  Marker gescannt → Link-Einträge **mit Ankertext** und Flag `inline: true`.
  Schließt auch die `partialExtraction`-Lücke der Homepage.
- Neuer Check (**Fehler**, CI-Gate): Seite hat weniger als `minInlineLinks`
  Inline-Links.
- Bestehende Checks gelten automatisch mit: Dead-Links, Exact-Match-Cap (max. 3×
  pro Ziel/Seite), Generik-Quote (max. 10 %), `maxBodyLinks`-Budget,
  MUSS/SOLL/DARF-NICHT, Silo-Regeln.

**Unverändert bleiben:** Silo-Modell, Click-Depth ≤ 3, keine lateralen
Cluster-Links, Möbelplaner-Links in Nav/Footer extern (Entscheidung 2026-07-14),
Footer ohne Cluster-Tiefenlinks.

## 4. Retrofit der 18 Seiten

Minimal-invasiv, pro Seite 2–4 Inline-Links nach Link-Plan aus MUSS/SOLL:

- Anker vorrangig auf Formulierungen legen, die schon im Text stehen
  („Küchen nach Maß" steht oft bereits wörtlich in der Copy); wo nötig kleine
  Einschübe/Halbsätze, keine Umformulierung ganzer Absätze. Brand Voice und
  Copy-Längen-Budgets bleiben unberührt.
- Anker-Varianten aus den `ANCHORS`-Sets (exact/partial/brand/descriptive) rotieren.
- Gezielte Stärkung der unterversorgten Ziele:
  - `/gewerbe/`-Hub-Fließtext verlinkt Gastro, Serienmöbel, Praxis kontextuell
    (Hub→Cluster, silo-konform).
  - Hubs + `/referenzen/` verlinken `/ueber-uns/` kontextuell
    („Meisterbetrieb in Espelkamp", E-E-A-T).

## 5. Doku, Agent & Verifikation

- `docs/seo/internal-linking.md`: Marker-Konvention + `minInlineLinks`-Regel.
- `docs/sections/CATALOG.md` (Page-Recipe) + `ARCHITECTURE.md`: Hinweis, dass
  neue Seiten Inline-Links direkt mitliefern müssen.
- `.claude/agents/intern-verlinkung.md`: Syntax + Anker-Set-Nutzung ergänzen.
- **Verifikation:** `npm run check` (lint + typecheck + build), `npm run audit:links`
  grün **mit** neuer Min-Regel, visueller Spot-Check von 2–3 Seiten, `design-qc`
  auf geänderte Sections. Kein neues Test-Framework — der Audit-Lauf ist der
  Regressionstest.

## Umsetzungsreihenfolge

1. Primitive + `globals.css` + TOKENS.md
2. Section-Adoption (Whitelist)
3. Anchor-Sets + Audit-Extraktion (Check noch als Hinweis)
4. Retrofit aller 18 Seiten
5. Check auf Fehler-Stufe scharf schalten
6. Doku + Agent-Update

Der Audit-Check geht erst scharf, wenn der Retrofit durch ist — sonst wäre CI
sofort rot.

## Nicht-Ziele

- Kein Markdown-/MDX-Rendering, kein Bold/Listen im Fließtext.
- Keine Links in Headings/Eyebrows/Labels.
- Keine Änderung der Silo-Regeln oder der Nav-/Footer-Entscheidungen.
- Kein CMS / keine Redakteurs-Oberfläche — Content-Module bleiben TypeScript.
