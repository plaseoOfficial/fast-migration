# Behaviors — /leistungen/moebel-nach-mass/

## Global
- Native scroll, no Lenis/Locomotive. No scroll-snap.
- Fonts: **Urbanist** (display + body on this page), Open Sans (FAQ q / footer body), Poppins (header CTA, footer headings).
- Beige body background `rgba(203,191,181,0.59)`; accent yellow `rgb(237,168,33)`; text `rgb(102,102,102)`; near-black headings `rgb(0,0,0)` / `rgb(23,33,33)` / `rgb(61,61,61)`.

## Header (shared)
- scrollY 0: `background: rgba(255,255,255,0)` (transparent); logo color normal; nav text dark `rgb(61,61,61)`.
- scrollY > ~50: `background: rgb(61,61,61)`; logo inverts to white; nav text `rgb(243,243,243)`.
- transition `0.5s ease-in-out` (clone uses `duration-300`, acceptable). Height 96px both states.
- Nav hover: link color → `rgb(237,168,33)`. CTA pill hover: bg→dark, text→yellow.

## Counter (Intro/Stats)
- `data-count-from=0 data-count-to=72 duration=2000`. Renders "72K+" (suffix "K+"). Number: Urbanist 70px/70 weight500 black. Animate on scroll into view (IntersectionObserver), once.

## Expanding CTA (Maßmöbel + "Ihr Raum verdient mehr als Standard")
- Divi Pixel ExpandingCTA. On the page it shows: full-bleed cover image, white H2 (65px/71.5, -2px), white arrow link bottom-left. (Hover/click expand effect is ignorable for visual parity — render the visible collapsed state.)
- Maßmöbel image: `IMG_6123-scaled.jpg`. Final-CTA image: `DSC_9938.jpg`.

## Decorative ellipsis
- Process + Warum sections include a large yellow `…` text (140px, color `rgb(237,168,33)`, line-height 0). Pure decoration, not a slider.

## Testimonials (swiper)
- 3 cards visible (light `rgb(250,250,250)` cards), centered. Each: round avatar (80px), 5 gold `★` row, quote (gray, centered), name (dark, centered, ~20px). Long quotes truncate with "Read More" link. Looped swiper; on desktop shows all 3, likely auto/loop. Clone: static 3-card row (no autoplay needed for parity; optional slow loop).
- Reviews:
  1. Fynn Sudermann — ★★★★★ "Heftiger Laden!" — `unnamed-2.png`
  2. Thorsten Feldhaus — ★★★★★ "Klasse Team, hervorragende Arbeit. Kann ich nur jedem empfehlen, der eine individuelle…" + Read More — `unnamed-1.png`
  3. Martin K — ★★★★★ "Wir haben vor einem Jahr Möbel für unsere Büroräume anfertigen lassen und sind vollkommen zufrieden…" + Read More — default `testimonial-avatar.png`

## FAQ (accordion)
- `dipi-faq` layout "toggles". Each `.dipi-faq-entry` starts `closed`; `.dipi-faq-content` display:none. Click title toggles. Icon font glyph (closed `$` = → arrow; open `!`). White rows, arrow on the right. Clone: click to expand, arrow rotates.

## Responsive
- Tablet ≤980 / Phone ≤767: all multi-column grids stack to 1 column. Header nav → hamburger → fullscreen overlay menu (handled by shared Header).
- Hero h1 shrinks (~70px → ~36px). Section headings scale down (clamp).
- 2-col image+text rows stack (text above/below image). 6-card services grid → single column. Counter + stat columns stack.

## Hover
- Buttons/links: underline links stay underlined; arrow links nudge.
- Cards (services): subtle — primarily static. Testimonial cards static.
- Nav links: → yellow.
