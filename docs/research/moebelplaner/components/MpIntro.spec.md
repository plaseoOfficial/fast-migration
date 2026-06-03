# MpIntro Specification

- **Target:** `src/components/moebelplaner/MpIntro.tsx`
- **Screenshot:** `docs/design-references/moebelplaner/band-1.jpg`
- **Interaction:** static + embedded iframe. Read `docs/research/_SHARED-pages2.md`.
- Beige section, `pt-12 lg:pt-[57px] pb-8`, container `max-w-[1224px] mx-auto px-6 lg:px-8`, Urbanist root.

## Header — 3 cols (`lg:grid-cols-[1fr_2fr_1.2fr] gap-10 items-start`)
- Col1: H4 `seit 1996` (Urbanist 30px/30 weight500 `rgba(117,117,117,0.5)`) + `Geben wir unser Bestes.` (16px, same gray, mt 6px).
- Col2: H2 `Möbelplanung online – mit Fertigung aus Espelkamp` (Urbanist 66px/66 weight500 -3px `rgb(0,0,0)`; responsive `text-[34px] leading-[1.05] lg:text-[66px] lg:leading-[66px]`).
- Col3: paragraph `Konfiguratoren gibt es viele. Was die meisten nicht bieten: jemand der Ihre Planung gründlich durchdenkt, Tipps zu Einlegeböden, Schubladen und Materialstärke gibt, die Maße prüft und die Möbel direkt in Espelkamp fertigt.` (Urbanist 18px/28.8 weight500 `rgb(102,102,102)`).

## Embed (mt ~40px) — the online configurator
- A full-width container with `id="moebelplaner"` (anchor target). Inside, an iframe:
  `<iframe src="https://moebelplaner.fast-systemmoebel.de" title="Möbelplaner" className="w-full h-[666px] border-0" style={{ border: 0 }} />`
- The external app may block framing; if it renders blank that matches the original. Add a small fallback line below the iframe: an arrow link `Möbelplaner in neuem Tab öffnen` → `https://moebelplaner.fast-systemmoebel.de` (target=_blank, Urbanist 16px `rgb(102,102,102)` underline) so the section is never a dead blank.

## Responsive: 3-col header stacks; iframe stays full width, height `h-[520px] lg:h-[666px]`.
