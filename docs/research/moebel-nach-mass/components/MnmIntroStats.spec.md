# MnmIntroStats Specification

## Overview
- **Target file:** `src/components/mnm/MnmIntroStats.tsx`  (must be a Client Component: `"use client"` — it has a count-up counter)
- **Screenshots:** `02a-intro-stats.jpg` (top), `10a-faq.jpg` shows OK+/72K detail, `02b-massmoebel.jpg` (bottom of section is the Maßmöbel CTA — that is a SEPARATE component, do NOT build it here).
- **Interaction model:** static layout + one number counter that counts up when scrolled into view.
- Read `_SHARED.md`. Beige section bg `rgba(203,191,181,0.59)`. This is the tallest section.

## Structure (top → bottom), container `max-w-[1224px] mx-auto px-6 lg:px-8`, section `pt-12 lg:pt-[57px] pb-8`
### Row A — 3 columns (desktop `lg:grid-cols-[1fr_2fr_1.2fr] gap-10 items-start`)
- **Col 1:** eyebrow block.
  - H4 `seit 1996` — Urbanist 30px, lineHeight 30px, weight 500, color `rgba(117,117,117,0.5)`.
  - small line `Geben wir unser Bestes.` — Urbanist 16px, color `rgba(117,117,117,0.5)`, margin-top 6px.
- **Col 2:** H2 `Individuelle Möbel nach Maß für jeden Raum präzise planen` — Urbanist 66px, lineHeight 66px, weight 500, letterSpacing -3px, color `rgb(0,0,0)`. Responsive `text-[34px] leading-[1.05] lg:text-[66px] lg:leading-[66px]`.
- **Col 3:** an asterisk `*` (Urbanist ~60px, color `rgb(23,33,33)`, line-height 1) then paragraph: `Fast Systemmöbel aus Espelkamp begleitet Sie genau in dieser entscheidenden **Bauphase**. Mit präziser Planung, ehrlicher Beratung und handwerklicher Umsetzung, die jeden Quadratmeter nutzt.` — Urbanist 18px, lineHeight 28.8px, weight 500, color `rgb(102,102,102)`. Bold the word **Bauphase** (color `rgb(23,33,33)`, weight 700).

### Row B — full-width image band (~36px top margin)
- Image `/images/2025/11/IMG_2772-scaled.jpg` (white floor-to-ceiling cabinet hallway), `object-cover`, height ~430px desktop (`h-[260px] lg:h-[430px] w-full`), square corners.

### Row C — 3 columns (desktop `lg:grid-cols-3 gap-10`, ~48px top margin)
- **Col 1:**
  - H3 `Maßarbeit planen` — Urbanist 20px, lineHeight 20px, weight 500, color `rgb(51,51,51)`.
  - Paragraph (Urbanist 18px / 31.5 / weight500 / `rgb(102,102,102)`, margin-top 16px): `Wir fertigen Möbel nach Maß, die millimetergenau zu Ihrem Raum passen und jede Nische optimal nutzen. Jede Maßanfertigung entsteht individuell nach Ihren Anforderungen. Mit hochwertigen Dekoren, stabilen Konstruktionen und präzisem Aufmaß-Service.`
  - Arrow link `Jetzt individuelle Anfrage stellen` → `/kontakt` (Urbanist 20px weight500 color `rgb(0,0,0)`, underline, + ArrowRightIcon). margin-top 24px.
- **Col 2:**
  - Paragraph only (Urbanist 18px/31.5/`rgb(102,102,102)`): `Dabei planen wir jedes Möbelstück so, dass Funktionalität, Stauraum und Alltagstauglichkeit perfekt zusammenspielen. Ob Schrank, Regal, Sideboard oder Kommode: Sie erhalten maßgeschneiderte Möbel, die langlebig gebaut, modern gestaltet und sauber integriert werden – exakt nach Ihren Vorstellungen.`
- **Col 3:**
  - **Counter** (count-up): big number `72` with suffix `K+` → displays `72K+`. Urbanist 70px, lineHeight 70px, weight 500, color `rgb(0,0,0)`. Use IntersectionObserver to animate 0→72 over 2000ms when the counter enters viewport (once). Render as `<span>{value}</span>K+`.
  - H3 `gefertigte Einzelteile` — Urbanist 31px, lineHeight 31px, weight 600, letterSpacing -1px, color `rgb(51,51,51)`, margin-top 8px.
  - Paragraph (Urbanist 18px/31.5/`rgb(102,102,102)`, margin-top 16px): `Unsere Fertigung kombiniert neueste CNC-Technik mit handwerklicher Perfektion. So entstehen Systemmöbel, die langlebig, funktional und ästhetisch überzeugen – in jedem Projekt, jedem Detail.`
  - Arrow link `Entdecken Sie das Gefühl von Qualität` → `/project/mixmarkt/` (same arrow-link style). margin-top 24px.

## Counter implementation
```tsx
"use client";
import { useEffect, useRef, useState } from "react";
// IntersectionObserver, when intersecting && !started, ramp count 0->72 over 2000ms with requestAnimationFrame, then set started.
```

## Responsive
- All rows stack to single column on mobile. Image band shorter. Counter remains large.
