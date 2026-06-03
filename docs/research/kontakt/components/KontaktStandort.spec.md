# KontaktStandort Specification

- **Target:** `src/components/kontakt/KontaktStandort.tsx`
- **Screenshots:** `docs/design-references/kontakt/band-1.jpg` (bottom), `band-2.jpg` (top)
- **Interaction:** static. Read `docs/research/_SHARED-pages2.md`.
- Beige section `rgba(203,191,181,0.59)`, `py-12 lg:py-[57px]`, container `max-w-[1224px] mx-auto px-6 lg:px-8`, Urbanist root.

## Content
- Eyebrow `STANDORT` — Urbanist 14px weight500 letterSpacing 2px uppercase `rgb(0,0,0)`, centered.
- H2 `Wir freuen uns auf Sie!` — Urbanist 120px/120 weight500 -5px `rgb(0,0,0)`, centered; responsive `text-[44px] leading-[1.0] sm:text-[72px] lg:text-[120px] lg:leading-[120px]`. mt 8px, mb 40px.
- **Location block:** a `relative` image with an overlaid info card.
  - Image `/images/2025/11/IMG_9387-scaled.jpg` (alt "Maßgefertigte Küche"), `object-cover`, `h-[360px] lg:h-[480px] w-full`, square corners.
  - Info card: absolutely positioned bottom-left (or top-left), `bg-[rgba(231,224,218,0.96)]` (beige/cream), padding `32px lg:40px`, `max-w-[360px]`, offset so it overlaps the image left edge (`lg:left-0 lg:top-12` or simply inset within). Contains:
    - H4 `Unser Standort` — Urbanist 50px/60 weight500 -2px `rgb(0,0,0)`; responsive `text-[28px] leading-[1.1] lg:text-[50px] lg:leading-[60px]`. mb 16px.
    - Address (Urbanist 20px/32 weight500 `rgb(0,0,0)`): two lines — `Alte Waldstraße 32,` and `32339 Espelkamp`.
    - Arrow link `Zu Google Maps` (mt 12px, Urbanist 20px weight500 `rgb(0,0,0)`, underline + ArrowRightIcon) → `https://www.google.com/maps/place//data=!4m2!3m1!1s0x47b0a7e010fcc05b:0x7383530031d88616?sa=X&ved=1t:8290&ictx=111` (target=_blank).

## Responsive: on mobile, card can sit above/below the image stacked (not absolute) — use absolute only at `lg:`.
