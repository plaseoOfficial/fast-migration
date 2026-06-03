# Shared rules for kontakt / gewerbeeinrichtung / moebelplaner builders

Same site as the existing `/leistungen/moebel-nach-mass/` clone (WordPress/Divi, Urbanist-heavy, beige `rgba(203,191,181,0.59)` over white).

## Hard rules (same as mnm builders)
- Next.js 16, React 19, TS strict (no `any`), Tailwind v4, 2-space indent. Named exports.
- Imports: `cn` from `@/lib/utils`; icons from `@/components/icons` (`ArrowRightIcon`, `StarIcon`, `ChevronDownIcon`, `ChevronRightIcon`, `PlusIcon`, `MinusIcon`, `InstagramIcon`, `LinkedinIcon`, `FacebookIcon`); `Image` from `next/image`; `Link` from `next/link`.
- Font: put `style={{ fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif" }}` on the section root. (FAQ answers use Open Sans — note in spec.)
- Beige section bg: `style={{ backgroundColor: "rgba(203,191,181,0.59)" }}`. Content container: `mx-auto w-full max-w-[1224px] px-6 lg:px-8`.
- `next/image` with `fill` needs a `relative` parent of fixed height. NEVER use negative z-index on a `fill` image (it escapes behind the page); use the image first in DOM + content with `relative z-10`, or `isolate` on the section.
- Mobile-first: stack to 1 column by default, apply desktop multi-col at `lg:`. Headings use `text-[..] lg:text-[..]` (shrink on mobile).
- Do NOT edit shared files. Do NOT run build/dev/tsc (orchestrator verifies centrally). Re-read your file once after writing.
- Arrow links: text + `ArrowRightIcon className="inline-block h-[1em] w-auto ml-2 align-middle"`, underlined.

## Reference components (READ for patterns, do not modify)
- `src/components/mnm/MnmIntroStats.tsx` — eyebrow + H2 + image band + 3-col incl. count-up counter (IntersectionObserver, 0→72, "72K+").
- `src/components/mnm/MnmTypische.tsx` — heading + 2×2 alternating image/list rows with dividers.
- `src/components/mnm/MnmGeschichte.tsx` — centered H2 + eyebrow + CSS-columns masonry gallery + 2-col (text + dark fact box).
- `src/components/mnm/MnmProcess.tsx` — left heading+paragraph+3 yellow dots, right image.
- `src/components/mnm/MnmFaq.tsx` — client accordion (single-open), white rows, rotating arrow.
- `src/components/mnm/ExpandingImageCta.tsx` — reusable full-bleed image + white heading + arrow link (props: image, heading, linkText, href).
- `src/components/Header.tsx` / `Footer.tsx` — shared chrome (reused as-is).

## Decorative "…" dots
Render as 3 round dots: `<div className="flex gap-2">` × `h-3 w-3 rounded-full bg-[rgb(237,168,33)]`.

## Reuse map (the page assembly imports these directly; builders don't rebuild them)
- `MnmWeitereLeistungen`, `MnmMoebelplaner` (dark Möbelplaner-CTA), `ExpandingImageCta` — identical content across service pages.
- Shared new components in `src/components/fast/`: `ServiceHero`, `FaqSection`, `TestimonialsSection`, `PartnerCarousel`.
