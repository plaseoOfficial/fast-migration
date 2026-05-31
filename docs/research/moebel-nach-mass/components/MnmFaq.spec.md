# MnmFaq Specification

## Overview
- **Target file:** `src/components/mnm/MnmFaq.tsx` — **Client Component** (`"use client"`, accordion toggle state).
- **Screenshots:** `09b-testimonials-reviews.jpg` (bottom), `10a-faq.jpg`
- **Interaction model:** click-to-toggle accordion. All items CLOSED by default.
- Read `_SHARED.md`. Beige section bg `rgba(203,191,181,0.59)`. Section `py-14 lg:py-[64px]`. Container `max-w-[1224px] mx-auto px-6 lg:px-8`.

## Layout — 2 cols (desktop `lg:grid-cols-2 gap-10 lg:gap-16 items-start`)
### Left
- Eyebrow: `WAS WIR OFT GEFRAGT WERDEN` — Urbanist 14px, weight 500, letterSpacing 2px, uppercase, color `rgb(61,61,61)`.
- H2: `Häufige Fragen zu unseren Raumkonzepten` — Urbanist, weight 500, color `rgb(0,0,0)`, large. Responsive `text-[36px] leading-[1.05] lg:text-[56px] lg:leading-[1.0]`. letterSpacing -1px. Margin-top ~12px.
- Arrow link (margin-top ~32px): `Zum FAQ` → `/faq/` — Urbanist 20px, weight 500, color `rgb(0,0,0)`, underline + `ArrowRightIcon` inline.

### Right — accordion (5 items)
Each item: bg `rgb(250,250,250)`, margin-bottom 15px, square corners.
- Header button: full width, `flex items-center justify-between`, padding `30px` (right ~50px). Question: Urbanist 20px, weight 500, color `rgb(0,0,0)`, left. Trailing icon: `ArrowRightIcon h-5 w-5` color `rgb(61,61,61)`; rotate 90° (point down) when open (`transition-transform`).
- Content (collapsible): when open, show answer with padding `0 30px 30px`. Answer: Urbanist 16px, lineHeight 25px, weight 500, color `rgb(102,102,102)`. Use conditional render or max-height transition.

Items (question → answer):
1. `Arbeiten Sie nur in Espelkamp?` → `Wir fertigen in Espelkamp, montieren im Umkreis von ca. 200 km und liefern deutschlandweit.`
2. `Gibt es eine Garantie?` → `Ja, unsere Möbel nach Maß erhalten bis zu 5 Jahre Garantie.`
3. `Sind Maßmöbel pflegeleicht?` → `Ja. Unsere Dekore und Materialien sind robust und leicht zu reinigen.`
4. `Welche Möbel fertigen Sie?` → `Schränke und Regale, Sideboards, Kommoden, Dachschrägen-Lösungen, Kleiderschränke und mehr Stauraum.`
5. `Wie läuft die Planung ab?` → `Mit Aufmaß-Service, digitalem Planen und klarer Abstimmung bis zur fertigen Maßanfertigung.`

## State
- `const [open, setOpen] = useState<number | null>(null)` — single-open accordion (clicking a different one closes the previous; clicking the open one closes it). (Original allows independent toggles; single-open is acceptable and clean.)

## Responsive
- Mobile: stack — left header block above the accordion list.
