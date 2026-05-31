# Shared rules for ALL mnm/* builders

- **Target dir:** `src/components/mnm/<Name>.tsx`. Named export `export function <Name>()`.
- **Imports available:** `import { cn } from "@/lib/utils"`, icons from `@/components/icons` (`ArrowRightIcon`, `StarIcon`, `ChevronDownIcon`, `PlusIcon`, `MinusIcon`, `InstagramIcon`, `LinkedinIcon`), `Image from "next/image"`, `Link from "next/link"`.
- **Font:** This page is **Urbanist** for headings AND body. Put `style={{ fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif" }}` on the section root so children inherit. Exceptions noted per-spec (FAQ question = same Urbanist; footer/header handled elsewhere).
- **Colors:** beige section bg `rgba(203,191,181,0.59)`; body text `rgb(102,102,102)`; headings `rgb(0,0,0)` / `rgb(23,33,33)` / `rgb(61,61,61)` (per spec); accent yellow `rgb(237,168,33)`; near-white `rgb(243,243,243)`.
- **Content container:** `mx-auto w-full max-w-[1224px] px-6 lg:px-8` unless spec says full-bleed.
- **Section root:** `<section className="...">`. Beige sections: `style={{ backgroundColor: "rgba(203,191,181,0.59)" }}`.
- **Images:** use `next/image` with explicit width/height (or `fill` + a sized parent). Paths are under `/public` (start with `/images/...`). Use the exact paths from the spec.
- **Responsive:** mobile-first. Stack to single column by default; apply the multi-column desktop layout at `lg:`. Headings use `clamp()` or `text-[..] lg:text-[..]` so they shrink on mobile.
- **TypeScript strict, no `any`. 2-space indent. No inline `<style>` tags. Tailwind utilities + small inline `style` objects for exact px values are fine.**
- **Do NOT run `npm run build` or `tsc`** (the orchestrator verifies centrally). Just write clean, strictly-typed TSX and re-read your file once to confirm imports resolve and JSX is valid.
- Arrow links on this site look like: text + a right-arrow glyph, underlined, e.g. `Jetzt individuelle Anfrage stellen →`. Use `ArrowRightIcon className="inline-block h-[1em] w-auto ml-2 align-middle"`.
