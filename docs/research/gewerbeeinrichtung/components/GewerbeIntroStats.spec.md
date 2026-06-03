# GewerbeIntroStats Specification

- **Target:** `src/components/gewerbe/GewerbeIntroStats.tsx` — **Client Component** (`"use client"`, count-up counter).
- **Pattern reference:** `src/components/mnm/MnmIntroStats.tsx` — SAME layout, different content. Read `docs/research/_SHARED-pages2.md`.
- Beige section. Does NOT include the Gewerbemöbel CTA (that's a separate `ExpandingImageCta` in the page).

## Structure (mirror MnmIntroStats), container `max-w-[1224px] mx-auto px-6 lg:px-8`, `pt-12 lg:pt-[57px] pb-8`
### Row A — 3 cols (`lg:grid-cols-[1fr_2fr_1.2fr] gap-10 items-start`)
- Col1: H4 `seit 1996` (Urbanist 30px, `rgba(117,117,117,0.5)`) + `Geben wir unser Bestes.` (16px, same gray, mt 6px).
- Col2: H2 `Individuelle Möbel für Gewerbe & Objektbau` (Urbanist 66px/66 weight500 -3px `rgb(0,0,0)`; responsive `text-[34px] leading-[1.05] lg:text-[66px] lg:leading-[66px]`).
- Col3: paragraph `Fast Systemmöbel aus Espelkamp begleitet Sie genau in dieser entscheidenden **Bauphase** – mit präziser Planung, ehrlicher Beratung und handwerklicher Umsetzung, die jeden Quadratmeter nutzt.` (Urbanist 18px/28.8 weight500 `rgb(102,102,102)`; bold "Bauphase" `rgb(23,33,33)`).

### Row B — full-width image band (mt ~36px)
- Image `/images/2025/11/DSC_9934.jpg`, `object-cover`, `h-[260px] lg:h-[430px] w-full`, square corners.

### Row C — 3 cols (`lg:grid-cols-3 gap-10`, mt ~48px)
- Col1: H3 `Warum Maßarbeit zählt` (Urbanist 20px/20 weight500 `rgb(51,51,51)`) + paragraph `In Gewerberäumen entscheidet Qualität über Effizienz. Standardlösungen funktionieren selten. Wir entwickeln Möbel, die exakt zu Ihrem Ablauf, Ihrem Raum und Ihrem Design passen – millimetergenau gefertigt und für den täglichen Einsatz optimiert.` (18px/31.5 `rgb(102,102,102)`, mt 16px) + arrow link `Jetzt individuelle Anfrage stellen` → `/kontakt` (Urbanist 20px weight500 black, underline+arrow, mt 24px).
- Col2: paragraph only `Wir begleiten Sie vollständig: Analyse vor Ort, technische Planung, Fertigung auf modernsten Homag-Systemen und saubere Montage. Für Sie bedeutet das: Ein Ansprechpartner, klare Prozesse, verlässliche Termine.` — preceded by H3 `Planung bis Montage` (20px/20 `rgb(51,51,51)`). (i.e. col2 = H3 "Planung bis Montage" + that paragraph.)
- Col3: **counter** count 0→72 over 2000ms on scroll-into-view (IntersectionObserver, once), render `{value}K+` (Urbanist 70px/70 weight500 `rgb(0,0,0)`); H3 `gefertigte Einzelteile` (Urbanist 31px/31 weight600 -1px `rgb(51,51,51)`, mt 8px); paragraph `Unsere Fertigung kombiniert neueste CNC-Technik mit handwerklicher Perfektion. So entstehen Systemmöbel, die langlebig, funktional und ästhetisch überzeugen – in jedem Projekt, jedem Detail.` (18px/31.5 `rgb(102,102,102)`, mt 16px); arrow link `Entdecken Sie das Gefühl von Qualität` → `/project/mixmarkt/` (mt 24px).

## Responsive: all rows stack to single column on mobile.
