# Page Topology — /leistungen/moebel-nach-mass/

WordPress + Divi + Divi Pixel. page-id-4213. Desktop doc height ~10,883px @1440. Single vertical scroll, no scroll-snap, no smooth-scroll library (native scroll).

Predominant font: **Urbanist** (headings AND body). FAQ question text + footer use Open Sans/Poppins. Header CTA uses Poppins.
Dominant section background: **beige `rgba(203,191,181,0.59)`** over white. Hero = white + photo. Möbelplaner = dark `rgb(61,61,61)`. Footer = dark.

| # | Name | Component | Divi sec | Top | H | Bg | Interaction |
|---|------|-----------|----------|-----|---|-----|-------------|
| 0 | Sticky Header | `Header` (shared) | tb_header | 0 | 96 | transparent→`rgb(61,61,61)` on scroll>50 | scroll-driven color, hover |
| 1 | Hero | `MnmHero` | section_0 | 0 | 638 | white + photo (`WhatsApp…fab2d495.jpg`) cover | static |
| 2 | Intro + Stats + Maßmöbel CTA | `MnmIntroStats` + `ExpandingImageCta` | section_1 | 614 | 1937 | beige | counter count-up; CTA static |
| 3 | Process | `MnmProcess` | section_2 | 2552 | 544 | beige | static (decorative `…` ellipsis) |
| 4 | Weitere Leistungen | `MnmWeitereLeistungen` | section_3 | 3095 | 1658 | beige | static 6-card grid |
| 5 | Typische Maßanfertigungen | `MnmTypische` | section_4 | 4753 | 1083 | beige | static (2 image+list rows) |
| 6 | Warum Maßmöbel | `MnmWarum` | section_5 | 5835 | 552 | beige | static (image collage + text + `…`) |
| 7 | Unsere Geschichte | `MnmGeschichte` | section_6 | 6387 | 1378 | beige | static gallery + dark fact box |
| 8 | Möbelplaner | `MnmMoebelplaner` | section_7 | 7765 | 504 | dark `rgb(61,61,61)` | static; masked image right |
| 9 | Testimonials + final CTA | `MnmTestimonials` + `ExpandingImageCta` | section_8 | 8269 | 1290 | beige | 3 review cards (swiper); CTA static |
| 10 | FAQ | `MnmFaq` | section_9 | 9559 | 585 | beige | click accordion (toggles) |
| 11 | Footer | `Footer` (shared) | tb_footer | 10144 | 739 | dark | static |

## Layout
- Header `position: fixed`, full width, 96px, z above content. Transition `0.5s ease-in-out`.
- Inner content container ~1080–1280px. Section vertical padding ~46–73px (varies).
- Most sections beige; the beige is `rgba(203,191,181,0.59)` over white page → effective ≈ `rgb(225,219,213)`.

## Interaction model per section
- Header: scroll-driven bg/text swap (transparent + dark text at top → dark bg + light text scrolled).
- Hero, Process, Weitere Leistungen, Typische, Warum, Geschichte, Möbelplaner: static.
- Intro/Stats: number counter counts 0→72 (suffix "K+"), 2000ms, on scroll-into-view.
- Maßmöbel / "Ihr Raum verdient" : Divi "Expanding CTA" — rendered as full-bleed image with white heading + arrow link overlaid (collapsed/visible state).
- Testimonials: Divi Pixel testimonial swiper, 3 slides visible, looped.
- FAQ: click-to-toggle accordion (all closed by default), arrow icon per row.

## Reuse
- `Header`, `Footer`, `icons.tsx`, `globals.css` tokens, `next/font` (Poppins/Urbanist/Open Sans) — all shared, already match live. Reused as-is.
- Route lives at `src/app/leistungen/moebel-nach-mass/page.tsx` (homepage clone preserved at `/`).
