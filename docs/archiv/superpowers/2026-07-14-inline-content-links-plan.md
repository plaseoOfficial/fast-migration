# Inline-Content-Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Skalierbare interne Verlinkung direkt im Fließtext: Marker-Syntax `[Anker](/ziel/)` in Content-Strings, Mini-Renderer, harte Audit-Regel `minInlineLinks`, Retrofit aller 18 Seiten.

**Architecture:** Ein purer Parser (`src/lib/inline-links/parse.ts`, keine Imports — vom Audit-Skript via `--experimental-strip-types` importierbar) ist die einzige Syntax-Quelle. Ein React-Renderer (`src/lib/inline-links/index.tsx`) mappt Segmente auf `<Link>`/`<a>`. Sections leiten Fließtext-Props durch `renderInlineLinks()`; Strings ohne Marker rendern byte-identisch (pixel-perfect-sicher). Das Audit-Skript extrahiert Marker mit Ankertext und prüft ein Minimum pro Seitentyp.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript strict, Node ≥ 24 (`--experimental-strip-types`), kein Test-Framework (Verifikation: Node-Assert-Skript + `npm run audit:links` + `npm run check`).

**Spec:** `docs/superpowers/specs/2026-07-14-inline-content-links-design.md`

## Global Constraints

- **Pixel-perfect:** Sections dürfen außer dem `renderInlineLinks()`-Wrap keine Markup-/CSS-Änderung bekommen. Strings ohne Marker müssen byte-identisch rendern.
- **Copy minimal-invasiv:** Anker auf vorhandene Formulierungen; kleine Einschübe erlaubt, keine Umformulierung ganzer Absätze. Deutsch, Brand Voice, Headings ≤ 50 Zeichen unberührt.
- **Keine Links in Headings/Eyebrows/Stats/Button-Labels** — nur Fließtext-Props.
- **Silo-Regeln unverändert:** keine lateralen Cluster-Links; Möbelplaner-Links in Nav/Footer bleiben extern; Footer ohne Cluster-Tiefenlinks (Entscheidungen 2026-07-14).
- **TypeScript strict, kein `any`, named exports, 2-space indent.**
- **`package.json` + `pnpm-lock.yaml` NICHT anfassen/committen** (enthält fremde, uncommittete Versions-Bumps). Keine neuen Dependencies.
- **Deps nur via pnpm** (falls doch nötig — hier nicht vorgesehen).
- Jeder Commit endet mit `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`.
- Verifikation je Task: genannte Kommandos wirklich laufen lassen, Output prüfen.

---

### Task 0: Branch + offene Quick-Win-Änderungen committen

**Files:**
- Kein neuer Code; Branch + 2 Commits aus dem bestehenden Working Tree.

**Interfaces:**
- Produces: Branch `feat/inline-content-links`, auf dem alle folgenden Tasks committen.

- [ ] **Step 1: Branch anlegen**

```bash
git checkout -b feat/inline-content-links
```

- [ ] **Step 2: SEO-Quick-Wins committen** (bereits umgesetzte, verifizierte Änderungen dieser Session — NICHT `package.json`/`pnpm-lock.yaml`)

```bash
git add src/lib/content.ts src/lib/seo/linking-rules.ts scripts/audit-internal-links.mjs docs/seo/internal-linking.md docs/seo/link-audit.json
git commit -m "seo: Footer nach Prinzip 4 verschlankt, Audit-Fixes (Ancestor-Whitelist, *Href-Regex, Backlog-Zielspalte), Doku-Abgleich

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

- [ ] **Step 3: Design-Spec committen**

```bash
git add docs/superpowers/specs/2026-07-14-inline-content-links-design.md docs/superpowers/plans/2026-07-14-inline-content-links.md
git commit -m "docs: Design-Spec + Plan für Inline-Content-Links

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

- [ ] **Step 4: Sauberkeit prüfen**

Run: `git status --short`
Expected: nur noch ` M package.json`, ` M pnpm-lock.yaml` (fremde Bumps, bleiben liegen).

---

### Task 1: Parser `parseInlineLinks` (pur, audit-tauglich)

**Files:**
- Create: `src/lib/inline-links/parse.ts`
- Create: `scripts/inline-links-parse.test.mjs`

**Interfaces:**
- Produces:
  - `INLINE_LINK_RE: RegExp` (global, `[label](href)`)
  - `interface InlineLink { label: string; href: string }`
  - `type InlineSegment = string | InlineLink`
  - `parseInlineLinks(text: string): InlineSegment[]` — String ohne Marker ⇒ `[text]`
  - `stripInlineLinks(text: string): string` — Marker ⇒ nur Label

- [ ] **Step 1: Assert-Skript schreiben (failing test)**

```js
// scripts/inline-links-parse.test.mjs
// Regressionstest für die Inline-Link-Syntax. Läuft ohne Framework:
//   node --experimental-strip-types scripts/inline-links-parse.test.mjs
import assert from "node:assert/strict";
import { parseInlineLinks, stripInlineLinks } from "../src/lib/inline-links/parse.ts";

// String ohne Marker → unverändert als einzelnes Segment
assert.deepEqual(parseInlineLinks("Nur Text, kein Link."), ["Nur Text, kein Link."]);

// Ein interner Link mitten im Satz
assert.deepEqual(
  parseInlineLinks("Wir planen Ihre [Küche nach Maß](/kuechen-nach-mass/) gleich mit."),
  ["Wir planen Ihre ", { label: "Küche nach Maß", href: "/kuechen-nach-mass/" }, " gleich mit."],
);

// Zwei Links + Umlaute im Anker
assert.deepEqual(
  parseInlineLinks("[Büroeinrichtung](/bueroeinrichtung/) und [Ladenbau](/ladenbau/)."),
  [
    { label: "Büroeinrichtung", href: "/bueroeinrichtung/" },
    " und ",
    { label: "Ladenbau", href: "/ladenbau/" },
    ".",
  ],
);

// Externer Link
assert.deepEqual(
  parseInlineLinks("Im [Möbelplaner](https://moebelplaner.fast-systemmoebel.de/) starten."),
  ["Im ", { label: "Möbelplaner", href: "https://moebelplaner.fast-systemmoebel.de/" }, " starten."],
);

// Fehlgeformte Marker bleiben Literaltext (fail-safe)
assert.deepEqual(parseInlineLinks("Ein [kaputter Marker ohne Ziel."), ["Ein [kaputter Marker ohne Ziel."]);
assert.deepEqual(parseInlineLinks("Klammern [so] ohne Ziel-Teil."), ["Klammern [so] ohne Ziel-Teil."]);

// Leerer String
assert.deepEqual(parseInlineLinks(""), [""]);

// stripInlineLinks: reiner Lesetext
assert.equal(
  stripInlineLinks("Ihre [Küche nach Maß](/kuechen-nach-mass/) aus Espelkamp."),
  "Ihre Küche nach Maß aus Espelkamp.",
);

console.log("inline-links parse: alle Assertions bestanden");
```

- [ ] **Step 2: Test laufen lassen — muss fehlschlagen**

Run: `node --experimental-strip-types scripts/inline-links-parse.test.mjs`
Expected: FAIL — `Cannot find module … src/lib/inline-links/parse.ts`

- [ ] **Step 3: Parser implementieren**

```ts
// src/lib/inline-links/parse.ts
/**
 * Parser für die Inline-Link-Marker-Syntax in Content-Modul-Copy:
 *   "Wir planen Ihre [Küche nach Maß](/kuechen-nach-mass/) gleich mit."
 *
 * Pure data + types only (kein React, keine Imports), damit das Audit-Skript
 * (`scripts/audit-internal-links.mjs`) ihn via --experimental-strip-types
 * importieren kann — Renderer und Audit teilen sich EINE Syntax-Quelle.
 * Nur Links, bewusst kein Markdown (kein Bold, keine Listen, kein Nesting).
 */

export interface InlineLink {
  label: string;
  href: string;
}

export type InlineSegment = string | InlineLink;

/** `[Anker](/ziel/)` bzw. `[Anker](https://…)`. Label ohne eckige Klammern, href ohne Leerzeichen/Klammern. */
export const INLINE_LINK_RE = /\[([^[\]]+)\]\((\/[^)\s]*|https?:\/\/[^)\s]+)\)/g;

/**
 * Zerlegt einen Copy-String in Text- und Link-Segmente.
 * Fehlgeformte Marker bleiben Literaltext; ohne Marker kommt `[text]` zurück.
 */
export function parseInlineLinks(text: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  let last = 0;
  const re = new RegExp(INLINE_LINK_RE.source, "g");
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) segments.push(text.slice(last, m.index));
    segments.push({ label: m[1], href: m[2] });
    last = m.index + m[0].length;
  }
  if (last < text.length) segments.push(text.slice(last));
  if (segments.length === 0) segments.push(text);
  return segments;
}

/** Copy-String ohne Marker — der reine Lesetext. */
export function stripInlineLinks(text: string): string {
  return text.replace(new RegExp(INLINE_LINK_RE.source, "g"), "$1");
}
```

- [ ] **Step 4: Test laufen lassen — muss bestehen**

Run: `node --experimental-strip-types scripts/inline-links-parse.test.mjs`
Expected: `inline-links parse: alle Assertions bestanden`

- [ ] **Step 5: Commit**

```bash
git add src/lib/inline-links/parse.ts scripts/inline-links-parse.test.mjs
git commit -m "feat: Parser für Inline-Link-Marker [Anker](/ziel/) in Content-Copy

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 2: Renderer `renderInlineLinks` + Styling + TOKENS.md

**Files:**
- Create: `src/lib/inline-links/index.tsx`
- Modify: `src/app/globals.css` (Klasse `.fast-inline-link`, hinter dem globalen `a`-Reset bei Zeile ~72 einfügen)
- Modify: `docs/design-system/TOKENS.md` (neuer Eintrag „Inline-Content-Links")

**Interfaces:**
- Consumes: `parseInlineLinks` aus Task 1.
- Produces: `renderInlineLinks(text: string): ReactNode` — Import in Sections: `import { renderInlineLinks } from "@/lib/inline-links";`

- [ ] **Step 1: Renderer implementieren**

```tsx
// src/lib/inline-links/index.tsx
import Link from "next/link";
import type { ReactNode } from "react";
import { parseInlineLinks } from "./parse";

export { INLINE_LINK_RE, parseInlineLinks, stripInlineLinks } from "./parse";
export type { InlineLink, InlineSegment } from "./parse";

/**
 * Rendert einen Copy-String, der [Anker](/ziel/)-Marker enthalten darf.
 * Ohne Marker wird der String unverändert zurückgegeben (byte-identisches
 * Rendering — pixel-perfect-sicher). Interne Ziele werden next/link-<Link>,
 * externe ein normales <a>; Styling: .fast-inline-link (TOKENS.md).
 */
export function renderInlineLinks(text: string): ReactNode {
  const segments = parseInlineLinks(text);
  if (segments.length === 1 && typeof segments[0] === "string") return text;
  return segments.map((seg, i) =>
    typeof seg === "string" ? (
      seg
    ) : seg.href.startsWith("/") ? (
      <Link key={i} href={seg.href} className="fast-inline-link">
        {seg.label}
      </Link>
    ) : (
      <a key={i} href={seg.href} className="fast-inline-link">
        {seg.label}
      </a>
    ),
  );
}
```

- [ ] **Step 2: CSS-Klasse ergänzen** — in `src/app/globals.css` direkt nach `a { color: inherit; text-decoration: none; }`:

```css
/* Inline-Content-Links im Fließtext (Entscheidung 2026-07-14): Farbe erbt vom
   Absatz, dezente Unterstreichung, Hover → Fast-Gelb. Gerendert von
   renderInlineLinks() (src/lib/inline-links). */
.fast-inline-link {
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.2s ease;
}
.fast-inline-link:hover {
  color: rgb(237, 168, 33);
}
```

- [ ] **Step 3: TOKENS.md ergänzen** — neuer Unterpunkt in der Komponenten-/Link-Sektion (an bestehende Struktur anpassen):

```markdown
### Inline-Content-Links (`.fast-inline-link`)

Links im Fließtext (Content-Marker `[Anker](/ziel/)`, gerendert via
`renderInlineLinks()` aus `src/lib/inline-links`):

- Farbe: erbt vom umgebenden Absatz (kein Blau, kein Gelb im Ruhezustand)
- `text-decoration: underline` mit `text-underline-offset: 4px`
- Hover: `color: rgb(237, 168, 33)` (Fast-Gelb), `transition: color 0.2s ease`
- Nur in Fließtext-Props — nie in Headings, Eyebrows, Stats oder Button-Labels
```

- [ ] **Step 4: Typecheck**

Run: `npx tsc --noEmit`
Expected: kein Output (0 Fehler).

- [ ] **Step 5: Commit**

```bash
git add src/lib/inline-links/index.tsx src/app/globals.css docs/design-system/TOKENS.md
git commit -m "feat: renderInlineLinks-Renderer + .fast-inline-link Styling (TOKENS.md)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 3: Audit-Integration (Extraktion + minInlineLinks als Hinweis) + Anchor-Sets

**Files:**
- Modify: `src/lib/seo/linking-rules.ts` (`TypeRule.minInlineLinks`, Werte in `RULES`, neue `ANCHORS`-Einträge, `contentModule: "gewerbe"` am `/gewerbe/`-Node)
- Modify: `scripts/audit-internal-links.mjs` (Marker-Extraktion + neuer CHECK 11)

**Interfaces:**
- Consumes: `INLINE_LINK_RE` aus `../src/lib/inline-links/parse.ts` (Task 1).
- Produces: Link-Einträge mit `inline: true` + `anchor`; Audit-Check `min-inline` (Severity über Konstante `MIN_INLINE_SEVERITY`, zunächst `"Hinweis"` — Task 8 stellt auf `"Fehler"`).

- [ ] **Step 1: `TypeRule` erweitern** — in `linking-rules.ts`:

```ts
export interface TypeRule {
  maxBodyLinks: number;
  maxNavFooter: number;
  /** Minimum echter kontextueller In-Content-Links ([Anker](/ziel/)-Marker im Fließtext). */
  minInlineLinks: number;
  must: TargetRule[];
  soll: TargetRule[];
  darfNicht: ForbiddenRule[];
}
```

Werte je `RULES`-Eintrag ergänzen (jeweils als erste Zeile nach `maxNavFooter`):
homepage `minInlineLinks: 2` · pillar-hub `3` · cluster-pillar `3` · product `2` ·
ratgeber-pillar `3` · cluster-article `2` · conversion `1` · brand `2` · legal `0`.

- [ ] **Step 2: `/gewerbe/`-Node reparieren** (Content-Modul existiert, war nie registriert):

```ts
{ slug: "/gewerbe/", type: "pillar-hub", silo: "gewerbe", audience: "gewerbe", parent: "/", built: true, contentModule: "gewerbe" },
```

- [ ] **Step 3: `ANCHORS`-Sets für alle gebauten Ziele ohne Set ergänzen:**

```ts
  "/einbauschraenke-nach-mass/": {
    exact: ["Einbauschränke nach Maß"],
    partial: ["maßgefertigte Einbauschränke", "Einbauschrank vom Tischler", "Schrank nach Maß"],
    brand: ["Fast Systemmöbel Einbauschränke"],
    descriptive: ["alle Einbauschränke nach Maß", "zum Einbauschrank-Bereich"],
  },
  "/ladenbau/": {
    exact: ["Ladenbau nach Maß"],
    partial: ["individueller Ladenbau", "Ladeneinrichtung vom Tischler"],
    brand: ["Fast Systemmöbel Ladenbau"],
    descriptive: ["unsere Ladenbau-Leistungen", "zum Ladenbau-Bereich"],
  },
  "/bueroeinrichtung/": {
    exact: ["Büroeinrichtung"],
    partial: ["Büromöbel nach Maß", "maßgefertigte Büroeinrichtung"],
    brand: ["Fast Systemmöbel Büroeinrichtung"],
    descriptive: ["Büros einrichten lassen", "zur Büroeinrichtung"],
  },
  "/gastronomieeinrichtung/": {
    exact: ["Gastronomieeinrichtung"],
    partial: ["Gastro-Möbel nach Maß", "Einrichtung für Gastronomie"],
    brand: ["Fast Systemmöbel Gastronomie"],
    descriptive: ["Gastronomie einrichten lassen", "zur Gastronomieeinrichtung"],
  },
  "/serienmoebel/": {
    exact: ["Serienmöbel"],
    partial: ["Möbel in Serie", "Serienfertigung für Objektausstatter"],
    brand: ["Fast Systemmöbel Serienfertigung"],
    descriptive: ["Möbel in Serie fertigen lassen", "zur Serienfertigung"],
  },
  "/praxiseinrichtung/": {
    exact: ["Praxiseinrichtung"],
    partial: ["Praxismöbel nach Maß", "Einrichtung für Praxen"],
    brand: ["Fast Systemmöbel Praxiseinrichtung"],
    descriptive: ["Praxis einrichten lassen", "zur Praxiseinrichtung"],
  },
```

- [ ] **Step 4: Audit-Skript — Marker-Extraktion.** In `scripts/audit-internal-links.mjs`:

(a) Import ergänzen:

```js
import { INLINE_LINK_RE } from "../src/lib/inline-links/parse.ts";
```

(b) Helper neben `walkValue` (Marker aus einem String ziehen):

```js
/** [Anker](/ziel/)-Marker aus einem Copy-String → { href, anchor, inline } (siehe src/lib/inline-links). */
function inlineLinksFromString(text, out) {
  const re = new RegExp(INLINE_LINK_RE.source, "g");
  let m;
  while ((m = re.exec(text)) !== null) out.push({ href: m[2], anchor: m[1], inline: true });
}
```

(c) In `walkValue` jeden String-Wert scannen — am Anfang der `for (const [k, v] of Object.entries(val))`-Schleife:

```js
    if (typeof v === "string") inlineLinksFromString(v, out);
```

(d) In `regexLinks` (Zeilen-Sweep) zusätzlich Marker erfassen — im `lines.forEach`-Body:

```js
    const inlineRe = new RegExp(INLINE_LINK_RE.source, "g");
    while ((m = inlineRe.exec(line)) !== null) out.push({ href: m[2], anchor: m[1], inline: true, line: i + 1 });
```

Und sicherstellen, dass `anchor`/`inline` überall mit durchgereicht werden, wo `regexLinks`-Ergebnisse in `links`/`addPageLink` landen (Spread `...l` statt Einzelfelder verwenden).

- [ ] **Step 5: Neuer CHECK 11 — Minimum kontextueller Inline-Links.** Nach CHECK 6 im Per-Page-Block:

```js
    // CHECK 11: Minimum kontextueller In-Content-Links (Marker im Fließtext)
    const inlineCount = outgoing.filter((l) => l.inline && isInternal(l.href)).length;
    if (hasModule && rule.minInlineLinks > 0 && inlineCount < rule.minInlineLinks) {
      add(MIN_INLINE_SEVERITY, "min-inline", `${node.slug}: nur ${inlineCount}/${rule.minInlineLinks} kontextuelle In-Content-Links ([Anker](/ziel/)-Marker im Fließtext).`, { page: node.slug });
    }
```

Konstante oben bei den anderen Konstanten:

```js
// Task 8 stellt auf "Fehler" (CI-Gate), sobald der Retrofit aller Seiten durch ist.
const MIN_INLINE_SEVERITY = "Hinweis";
```

- [ ] **Step 6: Audit laufen lassen**

Run: `npm run audit:links`
Expected: 0 Fehler · 0 Warnungen · ~19 Hinweise (4 bisherige muss-backlog + je 1 `min-inline` pro Seite mit `minInlineLinks > 0`, da noch keine Marker existieren). Falls das neue `gewerbe`-Content-Modul zusätzliche Funde hochspült (z. B. canonical-Hinweise): beheben, wenn trivial (Trailing-Slash), sonst notieren.

- [ ] **Step 7: Typecheck + Commit**

Run: `npx tsc --noEmit` — Expected: 0 Fehler.

```bash
git add src/lib/seo/linking-rules.ts scripts/audit-internal-links.mjs docs/seo/link-audit.json
git commit -m "feat(audit): Inline-Marker-Extraktion mit Ankertext + minInlineLinks-Check (Hinweis) + Anchor-Sets für alle gebauten Ziele

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 4: Section-Adoption (Whitelist mechanisch wrappen)

**Files (Modify):** ausschließlich `{prop}` → `{renderInlineLinks(prop)}` an der Render-Stelle + Import `import { renderInlineLinks } from "@/lib/inline-links";` — sonst NICHTS ändern:

| Datei | Props (Render-Stellen) |
|---|---|
| `shared/FaqSection.tsx` | `item.answer` |
| `shared/ContrastCols.tsx` | `intro`, `points[]`-Einträge |
| `shared/UspHighlight.tsx` | `body` |
| `shared/SegmentCards.tsx` | `intro` |
| `shared/SpecTable.tsx` | `intro` |
| `shared/ServiceHero.tsx` | `intro` |
| `shared/ReferenzenGrid.tsx` | `leadParagraphs[]`-Einträge |
| `shared/ProcessSteps.tsx` | Step-Beschreibungstext (Prop im File verifizieren) |
| `privat/MnmIntroStats.tsx` | `introBefore`, `introBold`, `introAfter`, `col1Body`, `col2Body`, `col3Body` |
| `privat/MnmGeschichte.tsx` | `paragraphs[]`-Einträge (beide map-Stellen) |
| `privat/MnmWarum.tsx` | `paragraph` |
| `privat/MnmProcess.tsx` | `paragraph` |
| `privat/MnmTypische.tsx` | Fließtext-Props (im File verifizieren; nur Absätze, keine Titel) |
| `privat/MnmWeitereLeistungen.tsx` | Karten-`description` |
| `privat/MnmMoebelplaner.tsx` | `body` |
| `privat/MnmHero.tsx` | `intro` |
| `gewerbe/GewerbeIntroStats.tsx` | `col1Body`, `col2Body`, `col3Body` |
| `gewerbe/GewerbeLadenGastro.tsx` | `ladenParagraphs[]`, `gastroIntroLead`, `gastroIntroMid`, `gastroBody2Before`, `gastroBody2After`, `gastroBody3` |
| `gewerbe/GewerbeLeistungen.tsx` | `description` |
| `gewerbe/GewerbeWarum.tsx` | `bodyParagraph` |
| `gewerbe/BueroProcessSteps.tsx` | `description` |
| `gewerbe/BueroVergleich.tsx` | `intro`, `kantenText` |
| `gewerbe/BueroMoebelplanerCta.tsx` | `body` |
| `ueber/UeberWofuer.tsx` | `body` |
| `ueber/UeberValues.tsx` | `body` |
| `ueber/UeberTimeline.tsx` | `intro`, `body` |
| `ueber/UeberHero.tsx` | `intro` |
| `home/QualitySection.tsx`, `home/DiscoverSection.tsx` | Absatz-Render-Stellen (im File verifizieren) |
| `moebelplaner/MpIntro.tsx` | Absatz-/Body-Prop (im File verifizieren) |
| `kontakt/KontaktPanel.tsx` | Intro-Absatz (im File verifizieren) |

**Interfaces:**
- Consumes: `renderInlineLinks` (Task 2).
- Produces: Alle Whitelist-Render-Stellen akzeptieren Marker. Kein Prop-Typ ändert sich (`string` bleibt `string`).

- [ ] **Step 1: Wrap durchführen** — Muster (Beispiel FaqSection):

```tsx
import { renderInlineLinks } from "@/lib/inline-links";
// …
-                      {item.answer}
+                      {renderInlineLinks(item.answer)}
```

Regeln: nur die in der Tabelle genannten Fließtext-Stellen; „im File verifizieren" heißt: die `<p>`-/Absatz-Interpolationen wrappen, Titel/Labels nicht. Bei `string[]`-Props das einzelne Element im `.map()` wrappen.

- [ ] **Step 2: Voller Check (Markup darf sich nicht ändern — noch existieren keine Marker)**

Run: `npm run check`
Expected: lint 0 Errors, tsc 0 Fehler, Build erfolgreich.

- [ ] **Step 3: Audit-Gegenprobe**

Run: `npm run audit:links`
Expected: identisch zu Task 3 Step 6 (keine neuen Funde — reine Render-Änderung).

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/
git commit -m "feat: Fließtext-Props der Section-Whitelist durch renderInlineLinks leiten

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 5: Retrofit Privat-Silo (4 Seiten)

**Files:**
- Modify: `src/lib/content/moebel-nach-mass.ts`, `src/lib/content/kuechen-nach-mass.ts`, `src/lib/content/einbauschraenke-nach-mass.ts`, `src/lib/content/einbauschrank-dachschraege.ts`
- Ggf. Modify: `src/app/(site)/kuechen-nach-mass/page.tsx` (WEITERE_LEISTUNGEN_CARDS liegt dort)

**Interfaces:**
- Consumes: Marker-Syntax (Task 1), gewrappte Sections (Task 4), `ANCHORS` (Task 3).
- Produces: `min-inline`-Hinweis verschwindet für diese 4 Seiten.

**Link-Plan** (2–4 Marker je Seite; Anker aus `ANCHORS` rotieren, Exact-Match max. 3×/Ziel/Seite, keine generischen Anker; Anker vorrangig auf schon vorhandene Formulierungen):

| Seite (min) | Inline-Ziele | Anker-Vorschläge | Platzierung |
|---|---|---|---|
| `/moebel-nach-mass/` (3) | `/kuechen-nach-mass/` · `/einbauschraenke-nach-mass/` · `/ueber-uns/` · optional `/referenzen/` | „maßgefertigte Küche" · „Einbauschränke nach Maß" · „Meisterbetrieb" (descriptive zu Über-uns) | IntroStats-Bodies, Geschichte/Warum-Absätze |
| `/kuechen-nach-mass/` (3) | `/moebel-nach-mass/` · `/referenzen/` · `/moebelplaner/` · optional `/ueber-uns/` | „Möbel nach Maß" · „Küchenprojekte ansehen"-Variante im Fließtext · „Küche online planen" | IntroStats, FAQ-Antworten |
| `/einbauschraenke-nach-mass/` (3) | `…/einbauschrank-dachschraege/` · `/moebel-nach-mass/` · `/referenzen/` | „Schrank für Dachschräge nach Maß" · „individuelle Möbel" · „Beispielprojekte" | IntroStats, FAQ, Absätze |
| `…/einbauschrank-dachschraege/` (2) | `/einbauschraenke-nach-mass/` · `/kontakt/` oder `/referenzen/` | „Einbauschränke nach Maß" (partial-Variante, Exact steht schon in Karten) · „Beratung anfragen" | Body-Absätze, FAQ |

**DARF NICHT:** `/kuechen-nach-mass/` ↔ `/einbauschraenke-nach-mass/` (laterale Cluster-Links).

- [ ] **Step 1:** Module lesen, je Seite die Marker minimal-invasiv setzen (bestehende Wörter verlinken; nur wo nötig kleiner Einschub).
- [ ] **Step 2:** Run: `npm run audit:links` — Expected: keine `min-inline`-Hinweise mehr für die 4 Privat-Seiten, keine neuen Warnungen/Fehler (Exact-Match-Cap, Budget!).
- [ ] **Step 3:** Run: `npx tsc --noEmit` — Expected: 0 Fehler.
- [ ] **Step 4: Commit**

```bash
git add src/lib/content/ "src/app/(site)/kuechen-nach-mass/"
git commit -m "content: kontextuelle Inline-Links im Privat-Silo (Retrofit)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 6: Retrofit Gewerbe-Silo (6 Seiten)

**Files:**
- Modify: `src/lib/content/gewerbe.ts`, `ladenbau.ts`, `bueroeinrichtung.ts`, `gastronomieeinrichtung.ts`, `serienmoebel.ts`, `praxiseinrichtung.ts`

**Link-Plan:**

| Seite (min) | Inline-Ziele | Anker-Vorschläge | Hinweis |
|---|---|---|---|
| `/gewerbe/` (3) | `/gastronomieeinrichtung/` · `/serienmoebel/` · `/praxiseinrichtung/` · optional `/ladenbau/`, `/bueroeinrichtung/` | „Einrichtung für Gastronomie" · „Möbel in Serie" · „Praxismöbel nach Maß" | **Priorität: die 3 unterversorgten Cluster** (je nur 2 Body-Inbound) |
| `/ladenbau/` (3) | `/gewerbe/` · `/referenzen/` · `/kontakt/` | „Objekteinrichtung" · „Referenzprojekte" · „Projekt anfragen"-Variante | |
| `/bueroeinrichtung/` (3) | `/gewerbe/` · `/referenzen/` · `/kontakt/` | „gewerbliche Einrichtung" · „Arbeiten ansehen" · „Beratung anfragen" | |
| `/gastronomieeinrichtung/` (3) | `/gewerbe/` · `/referenzen/` · `/kontakt/` | „Gewerbeeinrichtung" · „Referenzprojekte ansehen" · „jetzt anfragen" — Vorsicht: generisch-Quote | |
| `/serienmoebel/` (3) | `/gewerbe/` · `/referenzen/` · `/kontakt/` | „Objekteinrichtung" · „Beispielprojekte" · „Angebot anfordern" | `mustExempt`: kein `/moebelplaner/` |
| `/praxiseinrichtung/` (3) | `/gewerbe/` · `/referenzen/` · `/kontakt/` | „zum Gewerbe-Bereich" · „Referenzprojekte" · „Beratungsgespräch vereinbaren" | |

**DARF NICHT:** Gewerbe-Cluster untereinander (nur über `/gewerbe/`-Hub).

- [ ] **Step 1:** Marker setzen (minimal-invasiv, Anker variieren — nicht 5× denselben Wortlaut über die Cluster).
- [ ] **Step 2:** Run: `npm run audit:links` — Expected: keine `min-inline`-Hinweise für Gewerbe-Seiten, 0 Fehler/Warnungen.
- [ ] **Step 3:** Run: `npx tsc --noEmit` — Expected: 0 Fehler.
- [ ] **Step 4: Commit**

```bash
git add src/lib/content/
git commit -m "content: kontextuelle Inline-Links im Gewerbe-Silo (Retrofit)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 7: Retrofit neutrale Seiten (5 Seiten)

**Files:**
- Modify: `src/lib/content/home.ts`, `src/lib/content/ueber-uns.ts`, `src/lib/content/referenzen.ts`
- Modify: `src/app/(site)/moebelplaner/page.tsx`, `src/app/(site)/kontakt/page.tsx` (Content liegt inline; Marker in die dortigen Fließtext-Strings der gewrappten Sections)

**Link-Plan:**

| Seite (min) | Inline-Ziele | Anker-Vorschläge | Hinweis |
|---|---|---|---|
| `/` (2) | `/moebel-nach-mass/` · `/gewerbe/` · optional `/kuechen-nach-mass/` | „Möbel nach Maß für Zuhause" · „Gewerbliche Einrichtung & Ladenbau" | in Quality-/Discover-Absätzen |
| `/ueber-uns/` (2) | `/moebel-nach-mass/` · `/gewerbe/` · `/referenzen/` | „individuelle Möbel" · „Objekteinrichtung" · „Referenzprojekte" | E-E-A-T-Brücke |
| `/referenzen/` (2) | `/moebel-nach-mass/` · `/gewerbe/` | „maßgefertigte Möbel" · „Gewerbeeinrichtung" | nur bereits vorhandene Ziele (Budget 10 fast voll) |
| `/moebelplaner/` (1) | `/referenzen/` oder `/kontakt/` | „Referenzprojekte ansehen" / „Beratung anfragen" | |
| `/kontakt/` (1) | `/referenzen/` | „Arbeiten ansehen" | |

- [ ] **Step 1:** Marker setzen. Achtung `home.ts`: Extraktion läuft über den Regex-Fallback — nach dem Setzen prüfen, dass die Marker im Audit ankommen.
- [ ] **Step 2:** Run: `npm run audit:links` — Expected: **kein einziger `min-inline`-Hinweis mehr**; 0 Fehler · 0 Warnungen · 4 muss-backlog-Hinweise.
- [ ] **Step 3:** Run: `npx tsc --noEmit` — Expected: 0 Fehler.
- [ ] **Step 4: Commit**

```bash
git add src/lib/content/ "src/app/(site)/moebelplaner/" "src/app/(site)/kontakt/"
git commit -m "content: kontextuelle Inline-Links auf Homepage, Über-uns, Referenzen, Conversion-Seiten (Retrofit)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 8: Check scharf schalten + Doku + Agent

**Files:**
- Modify: `scripts/audit-internal-links.mjs` (`MIN_INLINE_SEVERITY` → `"Fehler"`)
- Modify: `docs/seo/internal-linking.md` (Marker-Konvention + Min-Regel)
- Modify: `docs/sections/CATALOG.md` (Page-Recipe: Inline-Links Pflicht)
- Modify: `ARCHITECTURE.md` (Kurzverweis)
- Modify: `.claude/agents/intern-verlinkung.md` (Syntax + Anker-Sets nutzen)

- [ ] **Step 1: Severity umstellen**

```js
// Scharf seit Retrofit 2026-07 (CI-Gate): Seiten ohne Minimum an kontextuellen
// In-Content-Links brechen das Audit.
const MIN_INLINE_SEVERITY = "Fehler";
```

- [ ] **Step 2:** Run: `npm run audit:links` — Expected: 0 Fehler (Retrofit erfüllt das Minimum überall) · 0 Warnungen · 4 Hinweise.

- [ ] **Step 3: Doku ergänzen.** In `internal-linking.md` unter „Rules (condensed)":

```markdown
- **Inline-Content-Links (Pflicht seit 2026-07).** Kontextuelle Links stehen als
  Marker direkt in der Copy der Content-Module: `[Anker](/ziel/)` — gerendert via
  `renderInlineLinks()` (`src/lib/inline-links`), geprüft via `minInlineLinks` in
  `linking-rules.ts` (Hub/Cluster/Ratgeber ≥ 3 · Produkt/Artikel/Brand ≥ 2 ·
  Homepage ≥ 2 · Conversion ≥ 1). Anker aus den `ANCHORS`-Sets rotieren
  (exact/partial/brand/descriptive). Neue Seiten liefern ihre Inline-Links im
  Content-Modul direkt mit — `npm run audit:links` bricht sonst.
```

In `CATALOG.md` (Privat Page Recipe) + `ARCHITECTURE.md` je einen 2–3-Zeilen-Hinweis mit Verweis auf obige Regel einfügen. In `.claude/agents/intern-verlinkung.md` ergänzen: Der Agent setzt/prüft Links bevorzugt als Inline-Marker in Content-Modulen, zieht Anker aus `ANCHORS` und respektiert `minInlineLinks`.

- [ ] **Step 4: Voller Check**

Run: `npm run check` — Expected: alles grün.

- [ ] **Step 5: Commit**

```bash
git add scripts/audit-internal-links.mjs docs/seo/internal-linking.md docs/sections/CATALOG.md ARCHITECTURE.md .claude/agents/intern-verlinkung.md docs/seo/link-audit.json
git commit -m "feat(audit): minInlineLinks als CI-Gate scharf + Doku/Agent-Konventionen

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 9: Visuelle Verifikation + Abschluss

- [ ] **Step 1: Dev-Server + Spot-Check** — `npm run dev`, dann 3 Seiten prüfen (`/kuechen-nach-mass/`, `/gewerbe/`, `/ueber-uns/`): Links im Fließtext unterstrichen, Farbe erbt, Hover gelb, Klick navigiert intern ohne Full-Reload. Screenshot je Seite als Beleg.
- [ ] **Step 2: design-qc-Agent** auf die geänderten Sections laufen lassen (read-only): erwartet keine neuen Verstöße außer dokumentierten Clone-Divergenzen (TOKENS.md §6 — nicht „fixen").
- [ ] **Step 3:** `git status` sauber (bis auf fremde `package.json`/`pnpm-lock.yaml`-Bumps), alle Task-Checkboxen im Plan abgehakt.
- [ ] **Step 4:** PR gegen `master` erstellen (Titel: „feat: Inline-Content-Links — skalierbare interne Verlinkung im Fließtext"), Body: Zusammenfassung + Verweis auf Spec, Abschluss mit dem Standard-Footer `🤖 Generated with [Claude Code](https://claude.com/claude-code)`.
