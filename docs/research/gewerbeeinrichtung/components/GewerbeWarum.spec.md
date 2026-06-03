# GewerbeWarum Specification

- **Target:** `src/components/gewerbe/GewerbeWarum.tsx`
- **Pattern reference:** `src/components/mnm/MnmGeschichte.tsx` — SAME layout (centered H2 + eyebrow + masonry gallery + 2-col text/fact-box). Read `docs/research/_SHARED-pages2.md`.
- **Interaction:** static. Beige section, `py-12 lg:py-[57px]`, container `max-w-[1224px] mx-auto px-6 lg:px-8`, Urbanist root.

## Header (centered)
- H2 `Warum Unternehmen uns vertrauen` — Urbanist 84px/84 weight500 -3px `rgb(0,0,0)`; responsive `text-[36px] leading-[1.05] lg:text-[84px] lg:leading-[84px]`; max-width ~1000px.
- Eyebrow (below, mt 12px) `HANDWERK, TECHNIK UND KLARE PROZESSE.` — Urbanist 18px/23.8 weight500 letterSpacing 4px uppercase `rgb(61,61,61)`.

## Gallery (mt ~40px) — CSS-columns masonry `columns-2 md:columns-3 lg:columns-5 gap-3 [&>figure]:mb-3 [&>figure]:break-inside-avoid`, each `object-cover w-full` square; optional hover caption overlay (dark `bg-black/40` opacity-0 group-hover:opacity-100, white centered H4 24px). Images + captions:
1. `/images/2025/11/IMG_9120-scaled.jpg` — `IMG_9120` (alt "Moderner Badschrank")
2. `/images/2024/03/test-img-83485.jpg` — `Luxor Collection` (alt "Modernes Wohnzimmer", wide)
3. `/images/2025/11/DSC07129-Kopie-scaled.jpg` — `DSC07129 Kopie` (alt "Zwei Personen blättern", tall)
4. `/images/2025/11/WhatsApp-Bild-2025-04-01-um-22.54.05_fab2d495.jpg` — `WhatsApp Bild 2025-04-01` (alt "Moderner Ankleidebereich", tall)
5. `/images/2025/11/20231220_131839984_iOS-scaled.jpg` — `20231220_131839984_iOS` (alt "Modernes Büro mit Holzlamellenwand", tall)

## Lower block (mt ~40px) — `lg:grid-cols-2 gap-10 items-center`
- **Left — text** (Urbanist 16px/28 weight500 `rgb(23,33,33)`):
  `Gewerbeprojekte brauchen Verlässlichkeit. Termine müssen halten, Qualität muss stimmen, Kommunikation muss klar sein. Als Meisterbetrieb mit eigenem Maschinenpark setzen wir jedes Detail kontrolliert um – von der Planung bis zur Montage. Für Architekten, Arztpraxen, Unternehmen und Gastronomen ist das entscheidend.`
- **Right — dark fact box:** bg `rgb(45,45,45)`, padding `48px lg:64px`, square corners, `flex items-center justify-center min-h-[160px]`. Single centered H3 `100 % Maßfertigung aus Espelkamp` — Urbanist 20px/1.3 weight500 `rgb(255,255,255)`, textAlign center. (No bullet list.)

## Responsive: gallery → 2 columns; lower block stacks.
