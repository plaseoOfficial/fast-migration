# Page Topology — fast.side-boost.com

Page total height: ~8969px desktop @ 1440. Built on WordPress + Divi + Divi Pixel.

## Top-to-Bottom Sections

| # | Name | Component | Top | H | Notes |
|---|------|-----------|-----|---|-------|
| 1 | Sticky Header | `<Header>` | 0 | 96 | Fixed/sticky overlay. Transparent at top, dark `rgb(61,61,61)` on scroll. Logo left, nav center, "Möbelplaner" CTA right. |
| 2 | Hero | `<HeroSection>` | 0 | 805 | Massive "Fast Systemmöbel" h1 (144px Poppins) with white background fade into light gray. Subhead intro paragraph stack on right. |
| 3 | Discover (Entdecke) | `<DiscoverSection>` | 781 | 1129 | "Entdecke Fast Systemmöbel" h2. Hotspot image of modern kitchen + 5-blurb grid below describing features. Soft beige bg `rgba(203,191,181,0.59)`. |
| 4 | Quality (Wahre Qualität) | `<QualitySection>` | 1910 | 948 | Big h2 "Wahre Qualität passt sich dem Menschen an." Three image cards in a row. Same beige bg. |
| 5 | Parallax Quote | `<ParallaxQuote>` | 2857 | 417 | Dark parallax bg image with radial gradient overlay. Centered text + quote. |
| 6 | Handwerk + Tabs | `<HandwerkSection>` | 3274 | 1001 | "Handwerk mit System, Design mit Seele". Two-column: about + 3 stat counters (years/projects/team), advanced tabs with category names, each tab shows 3 blurb cards. |
| 7 | Möbelplaner CTA | `<MoebelplanerSection>` | 4275 | 1027 | Tagline "EINFACH AUSPROBIEREN…" Big h2 "Möbel online planen" with images. |
| 8 | Räume Geschichten | `<RaeumeSection>` | 5302 | 1253 | "Räume, die Geschichten erzählen" + intro + 4-counter strip + 3-card hover gallery row + giant "Fast" text band. |
| 9 | Testimonials + Logos | `<TestimonialsSection>` | 6554 | 1102 | "Was Kunden sagen" + Arminia Bielefeld testimonial card + horizontal scrolling partner-logo carousel (single track, looped). |
| 10 | FAQ | `<FaqSection>` | 7656 | 575 | Eyebrow + h2 "FAQ" + 4 toggle accordions + CTA button. |
| 11 | Footer | `<Footer>` | 8231 | 739 | Dark `rgb(61,61,61)` bg. Logo, social heading, link columns (Links / Leistungen / Einsatzgebiete / Rechtliches). Copyright row. |

## Layout Notes
- Single vertical scroll, no scroll-snap.
- Header is `position: fixed/sticky`, full width, z-index above content.
- Sections alternate beige `rgba(203,191,181,0.59)` and white/dark backgrounds.
- Common section padding is large (~80–120px vertical). Inner content container ~1080px wide.

## Interaction Models (per section)
- Header: scroll-driven (bg/text color change after small scroll). Hover on nav links.
- Hero: static.
- Discover: static blurb grid + image hotspot click markers (interactive on real site; in clone render as static markers).
- Quality: static three-image row.
- Parallax Quote: parallax background (fixed background-attachment).
- Handwerk: click-driven tabs.
- Möbelplaner: static CTA.
- Räume: static counter + hover image gallery (CSS hover, scale/zoom).
- Testimonials: time-driven infinite-scroll logo carousel.
- FAQ: click-driven accordion.
- Footer: static.
