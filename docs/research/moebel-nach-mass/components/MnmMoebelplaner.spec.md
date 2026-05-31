# MnmMoebelplaner Specification

## Overview
- **Target file:** `src/components/mnm/MnmMoebelplaner.tsx`
- **Screenshot:** `docs/design-references/moebel-nach-mass/08-moebelplaner-cta.jpg`
- **Interaction model:** static
- Read `_SHARED.md`. **DARK section** — bg `rgb(61,61,61)`. Section `pt-12 lg:pt-[46px]` and `pb-0` (image touches the section bottom). Container `max-w-[1224px] mx-auto px-6 lg:px-8`.

## Layout — 2 cols (desktop `lg:grid-cols-2 gap-10 lg:gap-16 items-end`)
### Left — text (vertically centered-ish, padded bottom)
- H2: `Möbel nach Maß einfach online planen und konfigurieren` — Urbanist 64px, lineHeight 64px, weight 500, letterSpacing -4px, color `rgb(255,255,255)`. Responsive `text-[34px] leading-[1.05] lg:text-[64px] lg:leading-[64px]`.
- Paragraph (margin-top 20px, Urbanist 16px / 28 / weight500 / color `rgb(255,255,255)`):
  `Mit unserem Möbelkonfigurator können Sie Ihre Möbel nach Maß online planen – schnell, übersichtlich und millimetergenau. Ob Schrank nach Maß, Regal, Sideboard oder Kommode: Sie konfigurieren Maße, Dekore, Einlegeböden oder Schubladen bequem von zuhause. Der 3D-Konfigurator zeigt jede Anpassung sofort an und macht individuelle Möbel nach Maß für Sie direkt sichtbar. Nach der Konfiguration übernehmen wir den Feinschliff: Aufmaß, Beratung, Materialien und die fachgerechte Montage. So verbinden wir präzise Online-Planung mit echter handwerklicher Maßanfertigung.`
- Arrow link (margin-top 24px): `Jetzt individuelle Anfrage stellen` → `/kontakt` — Urbanist 20px, weight 500, color `rgb(255,255,255)`, underline + `ArrowRightIcon` inline. (Bottom padding ~48px below the link so it doesn't touch image.)

### Right — masked image + yellow line motif
- Main image `/images/2025/11/20150701_185458257_iOS-scaled.jpg` (alt "Moderner Empfangsbereich") shown large, `object-cover`, filling the right column and extending to the section bottom (`self-end`, `h-[320px] lg:h-[460px] w-full`). Square corners (a soft `rounded-tl-[40px]` optional to hint the mask shape).
- Decorative **yellow line motif**: a stack of ~14 thin horizontal yellow bars (`bg-[rgb(237,168,33)] h-[3px]`) with increasing widths, right-aligned, positioned absolutely at the bottom-right overlapping the image area (forms a right-triangle of lines). Render as a `flex flex-col items-end gap-[6px]` of divs with widths e.g. 20px,36px,...,180px. `pointer-events-none`, place behind or beside the image bottom-right.

## Responsive
- Mobile: stack — text block, then image. Reduce H2. Image full width.
