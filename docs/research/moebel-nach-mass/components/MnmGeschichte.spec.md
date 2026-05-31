# MnmGeschichte Specification

## Overview
- **Target file:** `src/components/mnm/MnmGeschichte.tsx`
- **Screenshot:** `docs/design-references/moebel-nach-mass/07-geschichte.jpg`
- **Interaction model:** static (masonry gallery; optional hover caption)
- Read `_SHARED.md`. Beige section bg `rgba(203,191,181,0.59)`. Section `py-12 lg:py-[57px]`. Container `max-w-[1224px] mx-auto px-6 lg:px-8`.

## Header (centered)
- H2: `Unsere Geschichte – Qualität aus fast drei Jahrzehnten` — Urbanist 84px, lineHeight 84px, weight 500, letterSpacing -3px, color `rgb(0,0,0)`, centered. Responsive `text-[36px] leading-[1.05] lg:text-[84px] lg:leading-[84px]`. max-width ~1000px centered.
- Eyebrow (below H2, ~12px): `VOM GARAGENBETRIEB ZUM MODERNEN MÖBELHERSTELLER.` — Urbanist 18px, lineHeight 23.8px, weight 500, letterSpacing 4px, textTransform uppercase, color `rgb(61,61,61)`, centered.

## Gallery (margin-top ~40px)
Masonry row of 5 photos: `columns-2 md:columns-3 lg:columns-5 gap-3 [&>figure]:mb-3 [&>figure]:break-inside-avoid`. Each photo `object-cover w-full`, square corners. Optionally wrap each in `<figure className="relative group">` with a hover caption overlay (dark `bg-black/40`, opacity-0 group-hover:opacity-100, white centered H4 24px Urbanist). Images + hover captions:
1. `/images/2025/11/IMG_9120-scaled.jpg` — caption `IMG_9120` (alt "Moderner Badschrank")
2. `/images/2024/03/test-img-83485.jpg` — caption `Luxor Collection` (alt "Modernes Wohnzimmer", wide 800×400)
3. `/images/2025/11/DSC07129-Kopie-scaled.jpg` — caption `DSC07129 Kopie` (alt "Zwei Personen blättern", tall)
4. `/images/2025/11/WhatsApp-Bild-2025-04-01-um-22.54.05_fab2d495.jpg` — caption `WhatsApp Bild 2025-04-01` (alt "Moderner Ankleidebereich", tall)
5. `/images/2025/11/20231220_131839984_iOS-scaled.jpg` — caption `20231220_131839984_iOS` (alt "Modernes Büro mit Holzlamellenwand", tall)

## Lower block (margin-top ~40px) — 2 cols (`lg:grid-cols-2 gap-10 items-start`)
### Left — text (Urbanist 16px / 28 / weight500 / color `rgb(23,33,33)`, paragraphs spaced ~16px)
1. `Fast Systemmöbel begann 1996 in einer Garage in Espelkamp.`
2. `Aus ersten Küchen entstand ein Meisterbetrieb mit über 1.000 m² Fertigungsfläche, modernen Homag-Maschinen und einem eingespielten Team. Heute fertigen wir Maßmöbel, die millimetergenau geplant, hochwertig verarbeitet und zuverlässig montiert werden.`
3. `Jede Maßanfertigung verbindet Funktionalität und Design – vom Einbauschrank bis zum Sideboard. Unsere Möbel werden in Espelkamp gefertigt, im Umkreis von 200 km montiert und deutschlandweit geliefert.`

### Right — dark fact box
- bg `rgb(45,45,45)`, padding `40px lg:48px`, square corners. Vertical list, each line Urbanist 16px, lineHeight ~32px, weight 500, color `rgb(255,255,255)`:
  - `– Made in Germany`
  - `– 1.000 m² Fertigung`
  - `– Meisterbetrieb seit 2013`
  - `– Homag-Technologie`
  - `– Aufbau bis 200 km`
  - `– Lieferung bundesweit`

## Responsive
- Mobile: gallery → 2 columns; lower block stacks (text then fact box).
