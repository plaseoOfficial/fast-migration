# MpSchritte Specification

- **Target:** `src/components/moebelplaner/MpSchritte.tsx`
- **Screenshot:** `docs/design-references/moebelplaner/band-0.jpg` (bottom)
- **Interaction:** static. Read `docs/research/_SHARED-pages2.md`.
- Beige section, `py-12 lg:py-[57px]`, container `max-w-[1224px] mx-auto px-6 lg:px-8`, Urbanist root.

## Layout — 2 cols (`lg:grid-cols-2 gap-10 lg:gap-16 items-start`)
- **Left:** H2 `In drei Schritten zu Ihren Möbeln nach Maß` (Urbanist 59px/59 weight500 -3px `rgb(23,33,33)`; responsive `text-[32px] leading-[1.05] lg:text-[59px] lg:leading-[59px]`). Below it (mt 32px) a large image `/images/2025/11/IMG_9120-scaled.jpg` (alt "Maßgefertigtes Möbeldetail"), `object-cover`, `h-[300px] lg:h-[420px] w-full`, square corners.
- **Right:** 3 steps stacked (gap ~32px). Each step: H3 title + description.
  1. **Online planen** — `Nutzen Sie unseren Online-Möbelplaner kostenlos und unverbindlich. Direkt hier auf dieser Seite.`
  2. **Maß wird übernommen** — `Ihre Maße – von Höhe und Breite bis zu Korpus und Sockel – fließen direkt in die Fertigung. Kein Hin und Her, keine Übertragungsfehler.`
  3. **Persönliche Beratung** — `Nach Ihrer Planung meldet sich jemand von uns bei Ihnen und bespricht den nächsten Schritt.`
  - Title H3: Urbanist 20px/1 weight500 `rgb(0,0,0)`. Description: Urbanist 14px/23.8 weight500 `rgb(102,102,102)`, mt 8px. Optionally separate steps with a thin `border-t border-black/10` + `pt-6` (steps 2,3).

## Responsive: stack (heading + image, then steps) on mobile.
