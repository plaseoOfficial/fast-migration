# MnmHero Specification

## Overview
- **Target file:** `src/components/mnm/MnmHero.tsx`
- **Screenshot:** `docs/design-references/moebel-nach-mass/01-hero.jpg`
- **Interaction model:** static
- Read `docs/research/moebel-nach-mass/components/_SHARED.md` for shared rules.

## Layout
Full-bleed section. Background = cover photo `/images/2025/11/WhatsApp-Bild-2025-04-01-um-22.54.05_fab2d495.jpg` (a fitted walk-in closet), `background-size: cover; background-position: 50% 50%`, white behind. Add a subtle dark overlay for text legibility: `linear-gradient(90deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.12) 45%, rgba(0,0,0,0) 70%)`.
- Section height ≈ 638px desktop. Use `min-h-[638px]`. paddingTop pushes content to lower portion: desktop `pt-[200px] lg:pt-[230px] pb-14`. Content vertically toward bottom (`flex items-end`).
- 2-column flex inside container (`max-w-[1224px] mx-auto px-6 lg:px-8`): left column ~66% (h1 + breadcrumb), right column ~30% (intro paragraph, aligned to bottom).

## Content & exact styles
### H1 (left)
- Text: `Möbel nach Maß aus Espelkamp – millimetergenau geplant`
- Urbanist, **fontSize 70px**, lineHeight 84px, fontWeight 500, letterSpacing -3px, color `rgb(255,255,255)`, textAlign left.
- Responsive: `text-[36px] leading-[1.1] sm:text-[48px] lg:text-[70px] lg:leading-[84px]`.

### Breadcrumb (left, below h1, ~16px gap)
- Items: `fast.side-boost.com` › `Leistungen` › `Möbel nach Maß` (last is bold/active).
- Urbanist 15px, lineHeight 26px, color `rgba(255,255,255,0.7)`. Separator: a small chevron `›` (use `›` char or ChevronRightIcon h-3, opacity 0.6). Active last item `rgb(255,255,255)`.
- Links: `fast.side-boost.com` → `/`, `Leistungen` → `/leistungen`, `Möbel nach Maß` → current.

### Intro paragraph (right column, bottom-aligned)
- Text (verbatim): `Standardlösungen finden Sie in jedem Möbelhaus. Wir bei Fast Systemmöbel gehen einen Schritt weiter: Wir planen und fertigen hochwertige Möbel nach Maß, die sich millimetergenau in Ihre Räume einfügen und Ihre Persönlichkeit perfekt unterstreichen.`
- Urbanist 15px, lineHeight 23.8px, fontWeight 500, color `rgba(255,255,255,0.7)`, textAlign left.

## Responsive
- Mobile (<lg): single column, h1 then breadcrumb then intro stacked. Reduce pt to ~`pt-[140px]`. min-h auto/`min-h-[520px]`.
- Desktop (lg): 2-col, content bottom-aligned.

## Notes
- Use `next/image` with `fill` + `object-cover` for the bg photo inside a relative section, OR a div with `style={{ backgroundImage }}`. Prefer next/image fill for quality. Put overlay div above the image, content above overlay (z-index).
