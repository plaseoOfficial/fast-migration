# MnmWeitereLeistungen Specification

## Overview
- **Target file:** `src/components/mnm/MnmWeitereLeistungen.tsx`
- **Screenshot:** `docs/design-references/moebel-nach-mass/04-weitere-leistungen.jpg`
- **Interaction model:** static
- Read `_SHARED.md`. Beige section bg `rgba(203,191,181,0.59)`. Section `py-16 lg:py-[72px]`.

## Header (centered)
- Eyebrow: `LEISTEN? IMMER 100% – WIR FERTIGEN SIE ABER AUCH` — Urbanist 14px, lineHeight 23.8px, weight 500, letterSpacing 2px, textTransform uppercase, color `rgb(61,61,61)`, centered.
- H2: `Weitere Leistungen von Fast Systemmöbel` — Urbanist 80px, lineHeight 80px, weight 500, letterSpacing -2px, color `rgb(61,61,61)`, centered. Responsive `text-[38px] leading-[1.05] lg:text-[80px] lg:leading-[80px]`. Margin-top ~16px. max-width ~900px centered.

## Cards grid (margin-top ~48px)
3 columns × 2 rows on desktop (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`). 6 cells: 5 dark cards + 1 white "&" card (last cell).

### Dark card (cells 1–5)
- bg `rgb(45,45,45)`, padding `40px`, min-height `430px`, `flex flex-col`. Square corners.
- Top: white icon `next/image` 60×60 (the SVG). Then H3 title (margin-top ~24px).
- H3 title: Urbanist 25px, lineHeight 25px, weight 500, color `rgb(255,255,255)`.
- Spacer (`flex-1`/`mt-auto`) so description sits in lower half.
- Description: Urbanist 18px, lineHeight 31.5px, weight 500, color `rgb(243,243,243)`. Margin-top auto.
- Link: `Mehr Infos hier` — Urbanist 14px, lineHeight 23.8px, weight 500, letterSpacing 2px, textTransform uppercase, color `rgb(243,243,243)`, margin-top 16px. (Hover: color → `rgb(237,168,33)`.)

Card data (icon path / title / description / href):
1. `/images/2024/03/interior-design-white-icons-15.svg` — **Möbel nach Maß** — `Jedes Stück ein Unikat. Ob Küche, Bad oder Wohnraum: Wir fertigen passgenaue Möbel, die sich exakt nach Ihrem Stil, Ihrem Alltag und Ihrem Raum richten.` — href `/leistungen/moebel-nach-mass/`
2. `/images/2024/03/interior-design-white-icons-22.svg` — **Raumkonzepte** — `Wir denken Räume ganzheitlich. Durchdachte Konzepte verbinden Architektur, Licht, Materialien und Möbel zu einer harmonischen Einheit – vom ersten Entwurf bis zur Montage.` — href `/leistungen/raumkonzepte/`
3. `/images/2024/03/interior-design-white-icons-07.svg` — **Fertigung** — `Moderne Homag-Technik, präzise CNC-Verarbeitung und handwerkliche Qualitätskontrolle sorgen dafür, dass jedes Bauteil exakt passt. Von Einzelmöbeln bis zu kompletten Objekten.` — href `#`
4. `/images/2024/03/interior-design-white-icons-08.svg` — **Objekt- & Gewerbeeinrichtung** — `Für Hotels, Büros oder Ladengeschäfte entwickeln wir langlebige Möbelkonzepte, die Design und Funktion vereinen. Robust, zeitlos und auf das Nutzungskonzept abgestimmt.` — href `/leistungen/gewerbeeinrichtung/`
5. `/images/2024/03/interior-design-white-icons-09.svg` — **Montage** — `Unsere Monteure arbeiten sauber, termingerecht und millimetergenau. Die finale Passung wird vor Ort abgestimmt – bis jedes Detail sitzt.` — href `#`

### White "&" card (cell 6)
- bg `rgb(255,255,255)`, padding `40px`, same min-height, `flex flex-col`.
- Big `&` glyph: Urbanist 300px, lineHeight 300px, weight 500, color `rgb(0,0,0)` — but cap visual height; use `text-[120px] lg:text-[200px] leading-[0.9]` so it fits the card (the live value is 300px but it overflows tastefully; 160–200px reads correctly).
- Paragraph (mt-auto): `Jedes Projekt entsteht bei uns aus Erfahrung, Planungssicherheit und moderner Fertigung. Ob Einzelstück oder kompletter Innenausbau – Sie profitieren von Lösungen, die langfristig tragen und handwerklich sauber umgesetzt sind.` — Urbanist 18px, lineHeight 31.5px, weight 500, color `rgb(23,33,33)`.

## Responsive
- Mobile: single column stack; cards keep min-height; "&" smaller.
