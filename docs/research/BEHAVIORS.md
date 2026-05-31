# Page Behaviors — fast.side-boost.com

## Global
- No smooth-scroll library (no Lenis / Locomotive). Native browser scroll.
- Body font: `"Open Sans", Arial, sans-serif` 14px / 23.8 line-height / weight 500.
- Headings use **Poppins** (display) and **Urbanist** (subheadings/UI).
- Light beige body sections sit on `rgba(203, 191, 181, 0.59)` overlay over white.
- Accent yellow button color: `rgb(237, 168, 33)` with 50px pill radius.
- Heading default color: `rgb(61, 61, 61)`. Body text color: `rgb(102, 102, 102)`.

## Header
- Default state (scrollY=0): background `rgba(255,255,255,0)` (transparent), text/nav `rgb(61,61,61)`.
- Scrolled state (scrollY>~80): background `rgb(61,61,61)` (dark), white/light text.
- Height stays 96px in both states.
- CSS transition: ~`all 0.3s ease`.

## Hero
- Static. No animations. Big subtle h1 in `rgb(243,243,243)` (near-white) painted over background image bottom.

## Discover (Entdecke)
- Image hotspot has clickable dots on real site (divi-pixel image-hotspot). In clone we keep dots as static markers.
- Five blurbs in 2-column grid (one wide intro + four small bullets with icons).

## Quality
- Static row of 3 images. Heading above with split into two lines.

## Parallax Quote
- Background: image with radial gradient overlay `radial-gradient(circle, rgba(23,33,33,0.46) 0%, rgba(33,33,33,0.66) 57%)`.
- `background-attachment: fixed` for parallax effect.

## Handwerk (advanced tabs)
- Tabs across the top: titles like "Farben…", "Möbelstücke…", "Licht…", "Räume…", "Wenn Design auf Technologie trifft", "Jeder Quadratmeter…", "Moderne, flexible…", "Wesentliche Innovationen…".
- Click to switch — content panel fades, shows 3 blurb cards.
- Two-column above: intro+button on left, three counter stats on right ("0 +" years etc., counts up — we'll use 25, 4000, 12 as best-guess from "seit"+"realisierte"+"Designer" phrasing).

## Räume
- 4-counter strip (e.g. "Über 4 Tausend Kunden vertrauen Fast Systemmöbel").
- 3-card hover gallery: cards reveal image+title on hover, scale subtly.
- Giant "Fast" text band like the hero — same massive light h1 effect.

## Testimonials Carousel
- Single track of brand logos, animates left infinite-loop (CSS `@keyframes scroll-x` with `animation-duration` ~30s linear infinite).
- Above is a single big testimonial card with Arminia Bielefeld wappen + quote + 5 stars + name.

## FAQ
- 4 accordion items. Click toggles open/close. Plus/minus icon rotates.

## Footer
- Dark `rgb(61,61,61)` background. White text. 4-column link list. Social icons row. Copyright.

## Responsive
- Mobile (390): all multi-column grids stack. Hamburger menu replaces nav. Hero font shrinks. Tabs may transform into stacked accordion-style picker (we'll keep tabs scrolling horizontally on mobile).
- Tablet (768): 2-column grids become 1-col, hero scales.

## Hover
- Buttons: subtle darken on background. Borders unchanged.
- Nav links: color shift from `rgb(61,61,61)` → `rgb(237,168,33)` (accent yellow) on hover.
- Cards: subtle scale on hover gallery.
