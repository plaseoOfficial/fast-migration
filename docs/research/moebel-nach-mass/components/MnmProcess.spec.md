# MnmProcess Specification

## Overview
- **Target file:** `src/components/mnm/MnmProcess.tsx`
- **Screenshot:** `docs/design-references/moebel-nach-mass/03-process.jpg`
- **Interaction model:** static
- Read `_SHARED.md`. Beige section bg `rgba(203,191,181,0.59)`.

## Layout
Section padding `py-12 lg:py-[46px] lg:pb-14`. Container `max-w-[1224px] mx-auto px-6 lg:px-8`.
2-column grid (desktop `lg:grid-cols-2 gap-12 items-center`):
- **Left column:** heading + paragraph + decorative ellipsis.
- **Right column:** a single image.

### Left — Heading (H2)
- Text: `Planung, Fertigung und Montage für Maßmöbel aus einer Hand`
- Urbanist, fontSize 59px, lineHeight 59px, fontWeight 500, letterSpacing -4px, color `rgb(23,33,33)`, left.
- Responsive `text-[34px] leading-[1.05] lg:text-[59px] lg:leading-[59px]`.

### Left — Paragraph (below heading, ~20px gap)
- Verbatim: `Unsere Maßmöbel entstehen in einem strukturierten Prozess: digitales Planen, professionelles Aufmaß, Fertigung auf Homag-Technologie und saubere Montage durch unser eigenes Team. Dabei kombinieren wir hochwertige Materialien, moderne Dekore und robuste Konstruktionen für maximale Funktionalität. Ob Schrank nach Maß, Regal, Sideboard, Kommode oder Lösungen für Nischen und Dachschrägen – wir entwickeln Möbel, die perfekt in den Raum passen und langfristig zuverlässig funktionieren. **Made in Germany**.`
- Urbanist 16px, lineHeight 28px, fontWeight 500, color `rgb(102,102,102)`. The trailing "Made in Germany." is bold (`rgb(23,33,33)` / black, fontWeight 700).

### Left — Decorative ellipsis (below paragraph, ~24px gap)
- Three dots `…` (use the literal `…` char OR three round 12px dots). Color `rgb(237,168,33)` (yellow). Big: render as `…` at fontSize ~50px OR three `h-3 w-3 rounded-full bg-[rgb(237,168,33)]` dots in a row with gap. Prefer 3 round dots, left-aligned.

### Right — Image
- `/images/2025/11/20161103_150622294_iOS-scaled.jpg` (dark grey built-in wardrobe). natural 2560x1920. Display ~544x408+, `object-cover`, square corners. Use next/image width 560 height 420 (responsive `w-full h-auto`).

## Responsive
- Mobile: stack — heading, paragraph, dots, then image. 
