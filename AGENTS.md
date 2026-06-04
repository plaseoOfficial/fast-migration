<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: Fast Systemmöbel — modular section library

This repo is a **pixel-perfect clone of Fast Systemmöbel**, built as **one modular
section library** shared by every page. **Before building or changing any page,
read [`ARCHITECTURE.md`](ARCHITECTURE.md) and
[`docs/sections/CATALOG.md`](docs/sections/CATALOG.md), and browse the `/library` route.**

Core rules (full detail in `ARCHITECTURE.md`):
- **Pixel-perfect.** When refactoring existing sections, keep the rendered markup/CSS
  byte-identical — change only content (via props), never classes/styles/spacing/colors.
  Verify with `npm run check` + a visual diff vs `docs/design-references/`.
- **Sections live in** `src/components/sections/{home,privat,shared,gewerbe,moebelplaner,kontakt}`
  plus `_shared/` primitives. Reusable sections (home/privat/shared) are **props-driven**;
  their copy lives in content modules under `src/lib/content/`.
- **Reuse before creating.** Every section is registered in `src/lib/sections/registry.ts`
  with a `useCase` + `category`. Check `/library` / `CATALOG.md` first; match by use case.
- **Site chrome (nav + footer) is centralized.** Create every public page inside the
  `(site)` route group (`src/app/(site)/<slug>/page.tsx`); `src/app/(site)/layout.tsx`
  renders the shared `Header` + `Footer` automatically, so new pages get identical
  chrome with no wiring. Pages only return their own `<main>`. The internal `/library`
  showcase stays **outside** the group and chrome-free.
- **New "Privat" (residential service) page** = create under `(site)`, wrap sections in
  `PrivatPageLayout` (now just `<main>`), follow the Privat Page Recipe in `CATALOG.md`,
  content in `src/lib/content/<slug>.ts`.
- **New section** → add the component + register it in `registry.ts` + `catalog-data.ts`,
  then run `npm run gen:catalog`.
- **New page added?** Consult **[`docs/seo/internal-linking.md`](docs/seo/internal-linking.md)** (the
  silo-model link backlog) and wire every internal link whose target now exists, in both directions.
  We launch *clean* — no dead links; flat URLs (`/moebel-nach-mass/` → `/kuechen-nach-mass/`, …).

# Website Reverse-Engineer Template

## What This Is
A reusable template for reverse-engineering any website into a clean, modern Next.js codebase using AI coding agents. The Next.js + shadcn/ui + Tailwind v4 base is pre-scaffolded — just run `/clone-website <url1> [<url2> ...]`.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React (default — will be replaced/supplemented by extracted SVGs)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles
- **Pixel-perfect emulation** — match the target's spacing, colors, typography exactly
- **No personal aesthetic changes during emulation phase** — match 1:1 first, customize later
- **Real content** — use actual text and assets from the target site, not placeholders
- **Beauty-first** — every pixel matters

## Project Structure
```
src/
  app/              # Next.js routes
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons as React components
  lib/
    utils.ts        # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  images/           # Downloaded images from target site
  videos/           # Downloaded videos from target site
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Inspection output (design tokens, components, layout)
  design-references/ # Screenshots and visual references
scripts/            # Asset download scripts
```

## MOST IMPORTANT NOTES
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly since you are basically serving the orchestrator role and have full context to our goals, work given, work achieved, and desired outcomes.
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate platform-specific instruction files.
- After editing `.claude/skills/clone-website/SKILL.md`, run `node scripts/sync-skills.mjs` to regenerate the skill for all platforms.

@docs/research/INSPECTION_GUIDE.md
