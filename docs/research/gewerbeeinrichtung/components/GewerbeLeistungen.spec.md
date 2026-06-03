# GewerbeLeistungen Specification

- **Target:** `src/components/gewerbe/GewerbeLeistungen.tsx`
- **Pattern reference:** `src/components/mnm/MnmTypische.tsx` — SAME layout (heading + 2×2 alternating image/list rows with dividers). Read `docs/research/_SHARED-pages2.md`.
- **Interaction:** static. Beige section, `py-12 lg:py-[57px]`, container `max-w-[1224px] mx-auto px-6 lg:px-8`, Urbanist root.

## Header
- H2 `Unsere Leistungen für Gewerbekunden` — Urbanist 64px/64 weight500 -3px `rgb(23,33,33)`; responsive `text-[32px] leading-[1.05] lg:text-[64px] lg:leading-[64px]`; max-width ~820px; mb 40px.

## Body — 2 rows × 2 cols (`lg:grid-cols-2 gap-8 lg:gap-12 items-center`)
List items: title (H3 Urbanist 20px/1 weight500 `rgb(0,0,0)`) + description (Urbanist 14px/23.8 weight500 `rgb(102,102,102)`, mt 8px); items separated by `border-t border-black/10` (no top border on first); each item `py-5`.

### Row 1: [image left] [list right]
- Image `/images/2025/11/DSC_9814.jpg` (alt "Gewerbemöbel Detail"), `object-cover`, `h-[260px] lg:h-[360px] w-full`.
- List:
  - **Praxisräume** — `Hygienische, funktionale Möbel für Behandlungs- und Funktionsräume.`
  - **Büros** — `Ergonomische Arbeitsplätze, Stauraum und verkabelte Systeme nach Maß.`
  - **Ladenbau** — `Individuelle Einrichtungen, die Marken sichtbar und Räume effizient machen.`

### Row 2: [list left] [image right]
- List:
  - **Hotel & Gastro** — `Strapazierfähige Lösungen für Empfang, Zimmer, Bar- und Servicebereiche.`
  - **Empfangstheken** — `Repräsentative Theken, abgestimmt auf Raumfluss und Kundenkontakt.`
  - **Sonderbau** — `Individuelle Gewerbemöbel, die nicht in ein Schema passen.`
- Image `/images/2025/11/DSC_9747.jpg` (alt "Maßgefertigte Gewerbeeinrichtung").

## Responsive: stack each row (image then list, list then image) on mobile.
