# PartnerCarousel Specification (shared)

- **Target:** `src/components/fast/PartnerCarousel.tsx`
- **Interaction:** time-driven infinite horizontal marquee (CSS). Read `docs/research/_SHARED-pages2.md`.

## Purpose
A single-track infinite-scrolling row of partner logos, used on the Kontakt page (between the contact panel and the location block). Transparent/beige background.

## Implementation
- Reuse the existing global CSS classes in `globals.css`: wrap two identical copies of the logo list in a `.fast-marquee-track` inside a `.fast-marquee overflow-hidden` container (so the loop is seamless). `.fast-marquee-track` already animates `translateX(0 → -50%)` over 40s linear infinite, and pauses on hover.
- Each logo: `next/image`, `className="h-12 w-auto object-contain opacity-90"`, inside a flex item with horizontal padding (`px-8 lg:px-12`), vertically centered. Track is `flex items-center`.
- Logos (path / alt), render the list TWICE (original + duplicate) for the loop:
  - `/images/2026/01/logo.png` "Partner"
  - `/images/2026/01/3838_1702_1_m.jpg` "Partner"
  - `/images/2026/01/cropped-2025-01-15-Logo-WP-StB-scaled-1.jpg` "Steuerberater"
  - `/images/2026/01/monolith-logo.png` "Monolith"
  - `/images/2026/01/lcm-schokoladenmaschinen.svg` "LCM Schokoladenmaschinen"
  - `/images/2026/01/icon07_1.png` "Partner"
  - `/images/2026/01/aufbaugemeinschaft-espelkamp-logo-75-jahre-2048x959-1.png` "Aufbaugemeinschaft Espelkamp"
  - `/images/2026/01/Hell-Blitz-Logo-200px.png.webp` "Hell Blitz"
  - `/images/2026/01/logo-polipol-relaunch.svg` "Polipol"
  - `/images/2026/01/CMC-Logo-100x50-1-2048x962-1.webp` "CMC Engineering"
  - `/images/2026/01/das-mauerwerk_logo.svg` "Das Mauerwerk"
  - `/images/2026/01/logo-elithera-e1724308171765.png` "Elithera"
  - `/images/2026/01/Enderweit-Partner.svg` "Enderweit Partner"
- Section wrapper: beige bg `rgba(203,191,181,0.59)`, vertical padding `py-10 lg:py-12`. (Note: next/image needs width/height — use `width={160} height={48}` with the className above; logos vary in aspect, object-contain handles it. Mark `unoptimized` not required.)
