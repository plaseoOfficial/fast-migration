# MnmWarum Specification

## Overview
- **Target file:** `src/components/mnm/MnmWarum.tsx`
- **Screenshot:** `docs/design-references/moebel-nach-mass/06-warum.jpg`
- **Interaction model:** static
- Read `_SHARED.md`. Beige section bg `rgba(203,191,181,0.59)`.

## Layout
Section `py-12 lg:py-[46px]`. Container `max-w-[1224px] mx-auto px-6 lg:px-8`.
Desktop 2-col grid `lg:grid-cols-2 gap-10 lg:gap-16 items-center`:
- **Left:** image collage (masonry).
- **Right:** heading + paragraph + decorative dots.

### Left — masonry collage (6 images)
Use CSS columns masonry: `columns-2 lg:columns-3 gap-2 [&>*]:mb-2 [&_img]:w-full [&_img]:break-inside-avoid`. Square corners, `object-cover`. Order:
1. `/images/2025/11/20231204_095459232_iOS-scaled.jpg` (alt "Moderne Küche in Grau und Weiß")
2. `/images/2025/11/DSC_0001.jpg` (alt "Moderner Schreibtisch")
3. `/images/2025/11/DSC_9814.jpg` (alt "Modernes, dunkelgraues Möbel")
4. `/images/2025/11/IMG_4797-scaled.jpg` (alt "Moderne Küche mit weißen Schränken") — portrait/tall
5. `/images/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg` (alt "Moderne Küche mit hellen Schränken") — wide
6. `/images/2025/11/20181220_075204314_iOS-scaled.jpg` (alt "Moderne Sitzbank mit Holzsitz")
(next/image: give each width 600 height auto via `className="w-full h-auto"` and width/height attributes matching natural ratio, OR use a fixed aspect wrapper. Keep masonry natural heights.)

### Right — Heading (H2)
- `Warum Maßmöbel aus eigener Fertigung überzeugen`
- Urbanist 64px, lineHeight 64px, weight 500, letterSpacing -4px, color `rgb(23,33,33)`, left.
- Responsive `text-[34px] leading-[1.05] lg:text-[64px] lg:leading-[64px]`.

### Right — Paragraph (~20px gap)
Verbatim: `Unsere Möbel nach Maß werden vollständig in Espelkamp gefertigt. Präzision bis ins Detail und stabile Konstruktionen sorgen dafür, dass Ihr Möbelstück und der Raum eine perfekte Einheit bilden. Ob Kleiderschrank, Kommode, Regal oder maßgefertigtes Sideboard – jede Maßanfertigung wird auf Ihre Bedürfnisse zugeschnitten und massgeschneidert aufgebaut. Wir setzen auf langlebige Materialien, saubere Verarbeitung und eine Montage, die funktional und modern wirkt. Lieferung und Montage erfolgen durch unser eigenes Team.`
- Urbanist 16px, lineHeight 28px, weight 500, color `rgb(102,102,102)`.

### Right — Decorative dots (~24px gap)
Three round dots: `flex gap-2`, each `h-3 w-3 rounded-full bg-[rgb(237,168,33)]`.

## Responsive
- Mobile: collage first (2-col masonry), then heading/paragraph/dots.
