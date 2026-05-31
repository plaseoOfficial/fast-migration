# ExpandingImageCta Specification (reusable)

## Overview
- **Target file:** `src/components/mnm/ExpandingImageCta.tsx`
- **Screenshots:** `docs/design-references/moebel-nach-mass/02b-massmoebel.jpg` (variant A), and the dark parallax banner in `09b-testimonials-reviews.jpg` / `10a-faq.jpg` (variant B "Ihr Raum verdient mehr als Standard.")
- **Interaction model:** static (renders the visible "collapsed" state of a Divi Pixel Expanding CTA)
- Read `_SHARED.md`.

## Purpose
A reusable full-bleed image banner with an overlaid white heading + underlined arrow link, used twice on the page:
1. **Maßmöbel** — image `/images/2025/11/IMG_6123-scaled.jpg`, heading `Maßmöbel nach Ihren Vorstellungen`, link `Sprechen Sie mit uns über Ihr Projekt` → `/kontakt`.
2. **Final CTA** — image `/images/2025/11/DSC_9938.jpg`, heading `Ihr Raum verdient mehr als Standard.`, link `Sprechen Sie mit uns über Ihr Projekt.` → `/kontakt`.

## Props
```ts
interface ExpandingImageCtaProps {
  image: string;
  heading: string;
  linkText: string;
  href: string;
  className?: string;
}
```

## Layout & exact styles
- A `relative` block, height ≈ 578px desktop (`min-h-[460px] lg:min-h-[578px]`), full width of its container (it sits inside the section's content container, ~1224px, NOT viewport-full). Rounded corners: none (square). `overflow-hidden`.
- Background: `next/image fill object-cover` of `image`. Overlay gradient for legibility: `linear-gradient(0deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.05) 100%)`.
- Content padded `p-10 lg:p-[60px]`, anchored bottom-left (`flex flex-col justify-end items-start`).
- **Heading:** Urbanist, fontSize 65px, lineHeight 71.5px, fontWeight 500, letterSpacing -2px, color `rgb(255,255,255)`, max-width ~60%. Responsive `text-[34px] leading-[1.1] lg:text-[65px] lg:leading-[71.5px]`.
- **Link:** Urbanist 20px, lineHeight 34px, fontWeight 500, color `rgb(255,255,255)`, with right arrow (`ArrowRightIcon` inline), margin-top ~24px. Underline on the text. Hover: slight opacity / arrow nudge.

## Responsive
- Mobile: min-h ~`min-h-[360px]`, padding reduce, heading clamps down. Heading max-width 100%.
