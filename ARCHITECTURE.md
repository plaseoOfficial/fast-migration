# Architecture & Contributor Guide

> Read this before building or changing any page. It is the shared playbook so
> every contributor (human or AI) works the same way. The live, per-section
> reference is **[`docs/sections/CATALOG.md`](docs/sections/CATALOG.md)** and the
> browsable showcase is the **`/library`** route.

---

## 1. What this project is

A **pixel-perfect clone of Fast Systemmöbel** (custom-furniture company, Espelkamp)
built as a **modular section library**. Every page is assembled from reusable,
props-driven *section* components. The same library powers all pages, so a change
to a shared section updates every page that uses it.

**Stack:** Next.js 16 (App Router, React 19, TypeScript strict) · Tailwind CSS v4
· deployed on Vercel · Node 24.

**Golden rule:** _pixel-perfect first._ When refactoring existing sections, the
rendered HTML/CSS must stay byte-identical — change only content (via props),
never markup, classNames, inline styles, spacing, or colors. Verify with
`npm run check` and a visual diff against `docs/design-references/`.

---

## 2. The section library

All sections live under **`src/components/sections/`**, grouped by audience/origin:

```
src/components/sections/
  _shared/      Section, Container, tokens   ← layout primitives + design tokens
  home/         the 9 homepage sections
  privat/       the möbel-nach-mass set (the "Privat" template sections)
  shared/       cross-page reusable: ServiceHero, FaqSection, TestimonialsSection,
                PartnerCarousel, ExpandingImageCta
  gewerbe/      Gewerbe* (commercial page)
  moebelplaner/ Mp* (planner page)
  kontakt/      Kontakt* (contact page)
```

- **Reusable sections** (`home/`, `privat/`, `shared/`) are **props-driven**:
  content is passed in, nothing is hardcoded. Their copy lives in content
  modules under `src/lib/content/`.
- **Page-specific sections** (`gewerbe/`, `moebelplaner/`, `kontakt/`) currently
  hardcode their own content (no props). That's acceptable for one-off page
  content; prefer props + a content module when a section could be reused.

### The registry (use case + category)
**`src/lib/sections/registry.ts`** lists every section (31 today). Each entry has:
- a **`useCase`** — the job it does (`hero`, `faq`, `testimonials`, `services-grid`, …)
- a **`category`** — audience/origin (`home`, `privat`, `shared`, `gewerbe`, …)
- sample props used to preview it.

Metadata (the catalog source of truth) is in **`src/lib/sections/catalog-data.ts`**
(pure data, no React — so a plain Node script can read it). `define.tsx` keeps the
registry type-safe with no `any`.

### Discovering sections — do this before writing a new one
1. **`/library`** — run the app and open `/library` (internal, `noindex`). Every
   section rendered with sample content, grouped by category + use case.
2. **`docs/sections/CATALOG.md`** — the same info as markdown: use case, props,
   which pages use each section, screenshot reference, and the **Privat Page Recipe**.

> Reuse an existing section before creating a new one. Match by `useCase`.

---

## 3. Pages — how the site is assembled

| Route | Layout / chrome | Sections (top → bottom) | Content source |
|---|---|---|---|
| `/` | `Header` + `<main>` + `Footer` | HeroSection · DiscoverSection · QualitySection · ParallaxQuote · HandwerkSection · MoebelplanerSection · RaeumeSection · TestimonialsSection (home) · FaqSection (home) | `src/lib/content/home.ts` (re-exports `src/lib/content.ts`) |
| `/leistungen/moebel-nach-mass` **(Privat template)** | `PrivatPageLayout` | MnmHero · MnmIntroStats · ExpandingImageCta · MnmProcess · MnmWeitereLeistungen · MnmTypische · MnmWarum · MnmGeschichte · MnmMoebelplaner · TestimonialsSection (shared) · ExpandingImageCta · FaqSection (shared) | `src/lib/content/moebel-nach-mass.ts` |
| `/leistungen/gewerbeeinrichtung` | `Header` + `<main>` + `Footer` | ServiceHero · GewerbeIntroStats · ExpandingImageCta · GewerbeLadenGastro · MnmWeitereLeistungen · GewerbeLeistungen · GewerbeWarum · MnmMoebelplaner · TestimonialsSection (shared) · ExpandingImageCta · FaqSection (shared) | inline in `page.tsx` |
| `/leistungen/moebelplaner` | `Header` + `<main>` + `Footer` | ServiceHero · MpSchritte · MpIntro · TestimonialsSection (shared) · ExpandingImageCta · MpProzess · FaqSection (shared) | inline in `page.tsx` |
| `/kontakt` | `Header` + `<main>` + `Footer` | ServiceHero · KontaktPanel · PartnerCarousel · KontaktStandort | inline in `page.tsx` |
| `/library` | none (bare) | every section, for internal preview (`noindex`) | sample props from the registry |

`Header`, `Footer`, `icons.tsx`, and `ui/` primitives stay at `src/components/`
(page chrome, not library sections).

---

## 4. "Privat" pages and the template

`moebel-nach-mass` is the canonical **Privat** (residential service) page and the
template for every future Privat page. A page is marked Privat **verbally** — there
is no audience flag in code. To build a new Privat page:

1. Create `src/app/leistungen/<slug>/page.tsx`, wrap content in **`PrivatPageLayout`**
   (Header + `<main className="flex flex-col">` + Footer). Keep `export const metadata`
   in the route file.
2. Create a content module `src/lib/content/<slug>.ts` (copy the shape of
   `moebel-nach-mass.ts`).
3. Compose the sections in the **Privat Page Recipe** order (see `CATALOG.md`),
   reusing `privat/` + `shared/` sections; pass content from the module.
4. The two CTA blocks are `ExpandingImageCta` wrapped in a beige `<section>`:
   `pb-12 lg:pb-16` (intro) and `pb-14 lg:pb-[64px]` (final).

For commercial/other pages, use `ServiceHero` + the relevant `shared/` and
page-specific sections (see the gewerbe/moebelplaner/kontakt pages as examples).

---

## 5. Adding or changing a section

**Add a new reusable section:**
1. Create the component in the right `sections/<category>/` folder. Reusable →
   props-driven; define a co-located `interface …Props`. Client interactivity →
   `"use client"` and keep props serializable.
2. Register it: add a `SectionMeta` entry to `catalog-data.ts` (id, displayName,
   useCase, category, description, props summary, usedOn, screenshot) and a
   `defineSection(...)` line in `registry.ts` with sample props.
3. Regenerate the catalog: `npm run gen:catalog`.
4. `npm run check`.

**Change an existing section's content:** edit its content module under
`src/lib/content/` (or the page's inline consts) — not the component.

**Refactor a section's markup:** don't, unless you are intentionally changing the
design. Pixel parity is the contract.

---

## 6. Conventions

- TypeScript strict, **no `any`**. Named exports. PascalCase components, camelCase utils.
- Tailwind utility classes; brand values mirror `src/components/sections/_shared/tokens.ts`
  and the `@theme`/`.fast-*` rules in `src/app/globals.css`.
- 2-space indentation. Mobile-first responsive.
- Content is data: section content lives in `src/lib/content/*` (or page-inline
  consts), passed via props. Components stay presentational.
- **Next.js 16 is not the Next.js in your training data** — read the relevant guide
  in `node_modules/next/dist/docs/` before writing framework code.
- Verify before pushing: **`npm run check`** (lint + typecheck + build) must be green.

---

## 7. Commands & key paths

```
npm run dev          # dev server (http://localhost:3000)
npm run check        # lint + typecheck + build — run before every push
npm run gen:catalog  # regenerate docs/sections/CATALOG.md from the registry
```

| What | Where |
|---|---|
| Section components | `src/components/sections/` |
| Layout primitives + tokens | `src/components/sections/_shared/` |
| Registry (useCase + category) | `src/lib/sections/registry.ts` · `catalog-data.ts` |
| Section catalog (docs) | `docs/sections/CATALOG.md` |
| Live section showcase | `/library` route |
| Page content modules | `src/lib/content/` · `src/lib/content.ts` |
| Privat page layout | `src/components/layouts/PrivatPageLayout.tsx` |
| Shared types | `src/types/index.ts` · `src/types/mnm.ts` |
| Design references (screenshots) | `docs/design-references/` |
| Research / inspection notes | `docs/research/` |
