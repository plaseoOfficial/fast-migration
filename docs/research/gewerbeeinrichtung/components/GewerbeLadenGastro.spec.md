# GewerbeLadenGastro Specification

- **Target:** `src/components/gewerbe/GewerbeLadenGastro.tsx`
- **Screenshot:** `docs/design-references/gewerbeeinrichtung/band-2.jpg`
- **Interaction:** static. Read `docs/research/_SHARED-pages2.md`.
- Beige section, `py-10 lg:py-[46px]`, container `max-w-[1224px] mx-auto px-6 lg:px-8`, Urbanist root.

## Row 1 — `lg:grid-cols-2 gap-10 lg:gap-16 items-center`
- **Left:** H2 `Ladeneinrichtung, die zu Ihrem Objekt passt` (Urbanist 59px/59 weight500 -4px `rgb(23,33,33)`; responsive `text-[32px] leading-[1.05] lg:text-[59px] lg:leading-[59px]`). Two paragraphs (Urbanist 16px/28 weight500 `rgb(102,102,102)`, mt 20px, spaced):
  1. `Wir wissen, dass jede Ladeneinrichtung einzigartig ist und eine einzigartige Erscheinung benötigt, um Kunden anzuwerben, Wohlbefinden auszustrahlen und zum Kauf anzuregen.`
  2. `Wir fertigen Möbel, die diese Anforderungen perfekt abbilden. Von robusten Oberflächen über intelligenten Stauraum bis zu wunderschönen Auslegetischen. Alles entsteht in unserer Produktion in Espelkamp und wird exakt nach Ihren Wünschen abgestimmt.`
  Then 3 yellow dots (mt 24px).
- **Right:** image `/images/2025/11/WhatsApp-Bild-2025-01-16-um-12.34.29_b25a14a5.jpg` (alt "Ladeneinrichtung – OBST & GEMÜSE Markt"), `object-cover`, `h-[260px] lg:h-[330px] w-full`, square corners.

## Row 2 — `lg:grid-cols-2 gap-10 lg:gap-16 items-center` (mt ~40px)
- **Left:** 3-image masonry `columns-3 gap-3 [&_img]:w-full [&_img]:mb-3` (or a simple 3-col flex), square corners, `object-cover`:
  1. `/images/2025/11/20230829_030744000_iOS.jpg` (alt "Modernes Bad mit Holzwaschtisch")
  2. `/images/2025/11/DSC07129-Kopie-scaled.jpg` (alt "Zwei Personen blättern")
  3. `/images/2025/11/20181220_075204314_iOS-scaled.jpg` (alt "Moderne Sitzbank mit Holzsitz")
- **Right:** H2 `Gastro möbel die magisch anziehen` (Urbanist 64px/64 weight500 -4px `rgb(23,33,33)`; responsive `text-[32px] lg:text-[64px] lg:leading-[64px]`). Three paragraphs (Urbanist 16px/28 weight500 `rgb(102,102,102)`, mt 16px):
  1. `Ob Restaurant, Café, Hotel oder gastronomischer Betrieb – wir planen und fertigen **Gastro Möbel nach Maß**, die exakt zu Ihrem Konzept, Ihren Abläufen und Ihrem Raum passen. Von der ersten Idee bis zur Umsetzung erhalten Sie bei uns alles aus einer Hand.` (bold "Gastro Möbel nach Maß" `rgb(23,33,33)`)
  2. `Unsere **individuellen Gastro Möbel** sind funktional, robust und auf den täglichen Einsatz ausgelegt. Langlebige Materialien, durchdachte Details und eine klare Gestaltung sorgen dafür, dass Design und Belastbarkeit kein Widerspruch sind.` (bold "individuellen Gastro Möbel")
  3. `Wir beraten Sie ganzheitlich und nehmen uns bewusst Zeit, Ihre Anforderungen im Detail zu verstehen. Die Planung erfolgt praxisnah, damit die Einrichtung nicht nur gut aussieht, sondern auch funktioniert.`
  Then 3 yellow dots (mt 24px).

## Responsive: each row stacks (heading/text then image, or image then heading) on mobile.
