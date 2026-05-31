# MnmTypische Specification

## Overview
- **Target file:** `src/components/mnm/MnmTypische.tsx`
- **Screenshot:** `docs/design-references/moebel-nach-mass/05-typische.jpg`
- **Interaction model:** static
- Read `_SHARED.md`. Beige section bg `rgba(203,191,181,0.59)`. Section `py-12 lg:py-[57px]`. Container `max-w-[1224px] mx-auto px-6 lg:px-8`.

## Header
- H2: `Typische Maßanfertigungen – passgenaue Möbel für Ihr Zuhause` — Urbanist 64px, lineHeight 64px, weight 500, letterSpacing -3px, color `rgb(23,33,33)`, left. Responsive `text-[32px] leading-[1.05] lg:text-[64px] lg:leading-[64px]`. max-width ~880px. Margin-bottom ~40px.

## Body — 2 rows × 2 cols (desktop `lg:grid-cols-2 gap-8 lg:gap-12 items-center`)
Images alternate sides. Each list is a vertical stack of items separated by a 1px divider `border-t border-black/10` (no top border on first item).

### Row 1
- **Left:** image `/images/2025/11/IMG_9120-scaled.jpg` (alt "Maßgefertigtes Möbeldetail") — `object-cover`, container height ~`h-[260px] lg:h-[360px]`, square corners.
- **Right:** list:
  - **Küchen** — `Klare Linien, funktionale Wege, perfekt integrierte Stauraumlösungen für jeden Küchenraum.`
  - **Bad** — `Präzise Planung für kleine und große Bäder: Stauraum, Lichtführung und harmonische Materialien.`
  - **Garderoben** — `Durchdachte Garderoben mit optimaler Aufteilung für Alltag, Familie und saisonale Ordnung.`

### Row 2
- **Left:** list:
  - **Wohnbereiche** — `Wohnräume, die Struktur geben: Möbel, Akzente und Proportionen mit klarer Wirkung.`
  - **Homeoffice** — `Arbeitsbereiche, die Ruhe, Ergonomie und Stauraum verbinden – auch auf kleinsten Flächen.`
  - **Stauraum** — `Individuelle Lösungen, die jeden Zentimeter nutzen – für Nischen, Dachschrägen und Sonderbereiche.`
- **Right:** image `/images/2025/11/IMG_2249.jpg` (alt "Maßgefertigte Garderobe mit Stauraum") — same styling as row 1 image.

### List item styling
- Title (H3): Urbanist 20px, lineHeight 1, weight 500, color `rgb(0,0,0)`.
- Description: Urbanist 14px, lineHeight 23.8px, weight 500, color `rgb(102,102,102)`, margin-top 8px.
- Each item padding `py-5`; divider line between items (`border-t border-black/10` on items 2,3).

## Responsive
- Mobile: stack each row (image then list). Keep alternating not required on mobile — order image, list, list, image is fine.
