# MnmTestimonials Specification

## Overview
- **Target file:** `src/components/mnm/MnmTestimonials.tsx`
- **Screenshots:** `09a-testimonials-top.jpg`, `09b-testimonials-reviews.jpg`
- **Interaction model:** static 3-card row (originals are a looped swiper; static row is fine for parity)
- Read `_SHARED.md`. Beige section bg `rgba(203,191,181,0.59)`. Section `py-14 lg:py-[64px]`. Container `max-w-[1224px] mx-auto px-6 lg:px-8`.

## Header (centered)
- Eyebrow: `Sind Sie glücklich, sind wir es auch` — Urbanist 14px, weight 500, letterSpacing 2px, textTransform uppercase, color `rgb(61,61,61)`, centered.
- H2: `Was unseren Kunden dazu sagen` — Urbanist 65px, lineHeight 65px, weight 500, letterSpacing -2px, color `rgb(0,0,0)`, centered. Responsive `text-[34px] leading-[1.05] lg:text-[65px] lg:leading-[65px]`. Margin-top ~12px, margin-bottom ~48px.

## Cards (3-col `grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8`)
Each card: bg `rgb(250,250,250)`, padding `50px 40px`, square corners, no shadow, `flex flex-col items-center text-center`.
- Avatar: round `h-20 w-20 rounded-full object-cover overflow-hidden` (`next/image` 80×80).
- Stars: row of 5 `StarIcon` `h-5 w-5`, color `rgb(237,168,33)`, margin-top 20px.
- Quote: Urbanist 16px, lineHeight 23.8px, weight 500, color `rgb(102,102,102)`, margin-top 16px.
- "Read More" (only for truncated quotes): Urbanist 16px, color `rgb(117,117,117)`, underline, as a span/link (`href="#"`).
- Name: Urbanist 20px, weight 500, color `rgb(0,0,0)`, margin-top 16px.

Card data:
1. avatar `/images/2026/03/unnamed-2.png` — rating 5 — quote `Heftiger Laden!` — name `Fynn Sudermann` — no ReadMore.
2. avatar `/images/2026/03/unnamed-1.png` — rating 5 — quote `Klasse Team, hervorragende Arbeit. Kann ich nur jedem empfehlen, der eine individuelle…` — ReadMore — name `Thorsten Feldhaus`.
3. avatar `/images/testimonial-avatar.png` — rating 5 — quote `Wir haben vor einem Jahr Möbel für unsere Büroräume anfertigen lassen und sind vollkommen zufrieden…` — ReadMore — name `Martin K`.

## Responsive
- Mobile: single column stack of the 3 cards.
