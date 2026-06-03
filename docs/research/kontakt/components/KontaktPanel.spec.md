# KontaktPanel Specification

- **Target:** `src/components/kontakt/KontaktPanel.tsx` — **Client Component** (`"use client"`, mock form submit).
- **Screenshots:** `docs/design-references/kontakt/band-0.jpg` (bottom), `band-1.jpg` (top)
- **Interaction:** form is a mock — on submit, `e.preventDefault()` and show an inline "Danke! Wir melden uns." success message (no backend). Read `docs/research/_SHARED-pages2.md`.
- Outer section: beige bg `rgba(203,191,181,0.59)`, `py-12 lg:py-[57px]` (top 0 actually — section starts under hero; use `pt-0 pb-14`). Container `max-w-[1224px] mx-auto px-6 lg:px-8`.

## Dark panel (the whole contact block sits on a dark card)
- A card: bg `rgb(61,61,61)`, padding `40px lg:64px`, square corners.
- Header centered: eyebrow `BEREIT WENN SIE ES SIND` (Urbanist 14px weight500 letterSpacing 2px uppercase `rgba(255,255,255,0.5)`); H2 `Support & Kontakt` (Urbanist 60px/60 weight500 -2px `rgb(255,255,255)` centered; responsive `text-[34px] leading-[1.05] lg:text-[60px] lg:leading-[60px]`; mt 8px, mb 40px).
- Body 2-col (`lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start`):
  - **Left — form.** Fields with white labels above (Urbanist 14px weight500 `rgb(255,255,255)`, mb 8px). Inputs: bg `rgb(247,244,240)`, text `rgb(61,61,61)`, no border, no radius, padding `20px 16px`, fontSize 18px Urbanist, `w-full`, placeholder `rgb(102,102,102)`.
    - Row: `Vorname` (full width), `Nachname` (full width) — actually stack: Vorname, Nachname each full width OR 2-col. From screenshot Vorname & Nachname are each full-width stacked; Email & Telefon are a 2-col row. So: Vorname (full), Nachname (full), then grid 2-col [Email Adresse | Telefonnummer], then Nachricht (textarea, full, rows~5), then Senden.
    - Placeholders/labels: `Vorname`, `Nachname`, `Email Adresse`, `Telefonnummer`, `Nachricht`.
    - **Senden** button: full width, bg `rgb(249,178,51)`, text `rgb(61,61,61)`, border-radius `100px` (pill), padding `18px 20px`, fontSize 20px Urbanist weight500, hover bg `rgb(61,61,61)` text `rgb(249,178,51)`. mt 24px.
    - On submit: preventDefault, replace form with a centered white message "Danke! Wir melden uns." (or show below button).
  - **Right — info panel over image.** `relative` block, `min-h-[420px]`, `next/image fill object-cover` of `/images/2025/11/DSC07156-scaled.jpg` (alt "Beratungsgespräch"), dark overlay `absolute inset-0 bg-black/55`, content `relative z-10 p-8 lg:p-10 text-white`:
    - H3 `Öffnungszeiten` (Urbanist 24px/24 weight500 white) + a thin underline divider (`border-b border-white/30 mt-3 mb-4`).
    - Rows (each `flex justify-between` Urbanist ~18-20px white, py-2):
      - Montag — 6:00 - 17:00 Uhr
      - Dienstag — 6:00 - 17:00 Uhr
      - Mittwoch — 6:00 - 17:00 Uhr
      - Donnerstag — 6:00 - 17:00 Uhr
      - Freitag — 6:00 - 17:00 Uhr
      - Samstag — Geschlossen
      - Sonntag — Geschlossen
    - mt 24px: a row `Jetzt anrufen` (left) + `05771 9138312` (right, as a `tel:` link `tel:057719138312`). Same flex justify-between style.

## Responsive: 2-col stacks (form, then info panel). H2 shrinks.
