# Section Library — Catalog

> Auto-generated from `src/lib/sections/catalog-data.ts`. Do not edit by hand —
> run `node --experimental-strip-types scripts/gen-section-catalog.mjs`.

**31 sections** across 6 categories. Browse them rendered at `/library`. Each section is a props-driven component; `category` = audience/origin, `useCase` = the job it does.

## Index

- **Shared (cross-page, reusable)** — [Privat — Weitere Leistungen (Services Grid)](#privat-weitere-leistungen), [Privat — Planner CTA](#privat-planner-cta), [Shared — Service Hero](#shared-service-hero), [Shared — FAQ](#shared-faq), [Shared — Testimonials (3-up)](#shared-testimonials), [Shared — Partner Carousel](#shared-partner-carousel), [Shared — Expanding Image CTA](#shared-image-cta)
- **Home** — [Home — Hero](#home-hero), [Home — Discover](#home-discover), [Home — Quality](#home-quality), [Home — Parallax Quote](#home-parallax), [Home — Handwerk Tabs](#home-handwerk), [Home — Planner Embed](#home-planner), [Home — Räume Showcase](#home-raeume), [Home — Testimonials + Logos](#home-testimonials), [Home — FAQ](#home-faq)
- **Privat — möbel-nach-mass template** — [Privat — Hero](#privat-hero), [Privat — Intro + Stats](#privat-intro-stats), [Privat — Process](#privat-process), [Privat — Categories (Typische)](#privat-typische), [Privat — Warum (Masonry + Text)](#privat-warum), [Privat — Story (Geschichte)](#privat-geschichte)
- **Gewerbe** — [Gewerbe — Intro + Stats](#gewerbe-intro-stats), [Gewerbe — Laden & Gastro](#gewerbe-laden-gastro), [Gewerbe — Leistungen](#gewerbe-leistungen), [Gewerbe — Warum](#gewerbe-warum)
- **Möbelplaner** — [Möbelplaner — Schritte](#mp-schritte), [Möbelplaner — Intro](#mp-intro), [Möbelplaner — Prozess](#mp-prozess)
- **Kontakt** — [Kontakt — Panel](#kontakt-panel), [Kontakt — Standort](#kontakt-standort)

## Sections

### Shared (cross-page, reusable)

#### Privat — Weitere Leistungen (Services Grid)

`#privat-weitere-leistungen` — Eyebrow + heading and a 6-cell grid of dark service cards plus a white ampersand card. Defaults to the canonical Fast services; also used by the gewerbe page.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `services-grid` | `shared` | no | `/leistungen/moebel-nach-mass` · `/leistungen/gewerbeeinrichtung` |

| Prop | Type | Required |
| --- | --- | --- |
| `eyebrow / heading` | `string` | no |
| `cards` | `ServiceCard[]` | no |
| `ampersandText / moreLabel` | `string` | no |

![Privat — Weitere Leistungen (Services Grid)](../design-references/moebel-nach-mass/04-weitere-leistungen.jpg)

#### Privat — Planner CTA

`#privat-planner-cta` — Dark marketing CTA: heading + body + underline link on the left, image with a yellow line-motif on the right. Defaults to the planner copy; also used by the gewerbe page.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `planner-cta` | `shared` | no | `/leistungen/moebel-nach-mass` · `/leistungen/gewerbeeinrichtung` |

| Prop | Type | Required |
| --- | --- | --- |
| `heading / body` | `string` | no |
| `ctaLabel / ctaHref` | `string` | no |
| `image / imageAlt` | `string` | no |

![Privat — Planner CTA](../design-references/moebel-nach-mass/08-moebelplaner-cta.jpg)

#### Shared — Service Hero

`#shared-service-hero` — Generic service-page hero: title, breadcrumb, optional intro + optional CTA pill, over a photo.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `hero` | `shared` | no | `/leistungen/gewerbeeinrichtung` · `/leistungen/moebelplaner` · `/kontakt` |

| Prop | Type | Required |
| --- | --- | --- |
| `title` | `string` | yes |
| `breadcrumb` | `BreadcrumbItem[]` | yes |
| `bgImage` | `string` | yes |
| `intro` | `string` | no |
| `cta` | `{ label; href }` | no |

![Shared — Service Hero](../design-references/gewerbeeinrichtung/band-0.jpg)

#### Shared — FAQ

`#shared-faq` — Two-column FAQ: left intro + arrow link, right accordion (rotating arrow). Eyebrow/CTA default to the Fast wording.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `faq` | `shared` | yes | `/leistungen/moebel-nach-mass` · `/leistungen/gewerbeeinrichtung` · `/leistungen/moebelplaner` |

| Prop | Type | Required |
| --- | --- | --- |
| `heading` | `string` | yes |
| `items` | `{ question; answer }[]` | yes |
| `eyebrow / ctaHref / ctaLabel` | `string` | no |

![Shared — FAQ](../design-references/moebel-nach-mass/10a-faq.jpeg)

#### Shared — Testimonials (3-up)

`#shared-testimonials` — Eyebrow + heading and a 3-card grid of customer reviews with avatars and star ratings.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `testimonials` | `shared` | no | `/leistungen/moebel-nach-mass` · `/leistungen/gewerbeeinrichtung` · `/leistungen/moebelplaner` |

| Prop | Type | Required |
| --- | --- | --- |
| `heading` | `string` | yes |
| `eyebrow` | `string` | no |

![Shared — Testimonials (3-up)](../design-references/moebel-nach-mass/09-testimonials.jpg)

#### Shared — Partner Carousel

`#shared-partner-carousel` — Infinite-scroll marquee of partner logos.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `logo-carousel` | `shared` | no | `/kontakt` |

_Prop-less (page-specific content)._

![Shared — Partner Carousel](../design-references/kontakt/band-2.jpg)

#### Shared — Expanding Image CTA

`#shared-image-cta` — Full-width image block with a gradient overlay, an oversized heading and an underline CTA link.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `image-cta` | `shared` | no | `/leistungen/moebel-nach-mass` · `/leistungen/gewerbeeinrichtung` · `/leistungen/moebelplaner` |

| Prop | Type | Required |
| --- | --- | --- |
| `image` | `string` | yes |
| `heading` | `string` | yes |
| `linkText` | `string` | yes |
| `href` | `string` | yes |
| `className` | `string` | no |

![Shared — Expanding Image CTA](../design-references/moebel-nach-mass/02b-massmoebel.jpg)

### Home

#### Home — Hero

`#home-hero` — Full-bleed hero: centered oversized brand title + two intro paragraphs over a photo.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `hero` | `home` | no | `/` |

| Prop | Type | Required |
| --- | --- | --- |
| `bgImage` | `string` | yes |
| `title` | `string` | yes |
| `intro` | `string` | yes |
| `body` | `string` | yes |

![Home — Hero](../design-references/sec1-hero.png)

#### Home — Discover

`#home-discover` — Eyebrow + heading, kitchen photo with interactive hotspots, team photo + intro, and a 4-blurb row.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `discover` | `home` | no | `/` |

| Prop | Type | Required |
| --- | --- | --- |
| `eyebrow` | `string` | yes |
| `heading` | `string` | yes |
| `kitchenImage` | `string` | yes |
| `hotspots` | `Hotspot[]` | yes |
| `teamImage` | `string` | yes |
| `teamHeading` | `string` | yes |
| `teamBody` | `string` | yes |
| `blurbs` | `Blurb[]` | yes |

![Home — Discover](../design-references/sec2-discover.png)

#### Home — Quality

`#home-quality` — Large multi-line headline + two paragraphs, followed by a 3-image gallery.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `quality` | `home` | no | `/` |

| Prop | Type | Required |
| --- | --- | --- |
| `headingLines` | `string[]` | yes |
| `paragraphs` | `string[]` | yes |
| `images` | `string[]` | yes |

![Home — Quality](../design-references/sec3-quality.png)

#### Home — Parallax Quote

`#home-parallax` — Fixed-attachment background with radial gradient; centered heading, body and italic quote.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `parallax-quote` | `home` | no | `/` |

| Prop | Type | Required |
| --- | --- | --- |
| `bgImage` | `string` | yes |
| `heading` | `string` | yes |
| `body` | `string` | yes |
| `quote` | `string` | yes |

![Home — Parallax Quote](../design-references/sec4-parallax.png)

#### Home — Handwerk Tabs

`#home-handwerk` — Heading + animated counters, a tab bar, and a tabbed image + 3-card panel.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `handwerk-tabs` | `home` | yes | `/` |

| Prop | Type | Required |
| --- | --- | --- |
| `eyebrow` | `string` | yes |
| `headingLines` | `string[]` | yes |
| `stats` | `CounterStat[]` | yes |
| `tabs` | `TabPanel[]` | yes |

![Home — Handwerk Tabs](../design-references/sec5-handwerk-tabs.png)

#### Home — Planner Embed

`#home-planner` — Eyebrow + heading wrapping an embedded iframe of the external Möbelplaner, plus an open-in-tab CTA.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `planner-embed` | `home` | no | `/` |

| Prop | Type | Required |
| --- | --- | --- |
| `eyebrow` | `string` | yes |
| `heading` | `string` | yes |
| `plannerUrl` | `string` | yes |
| `ctaLabel` | `string` | yes |
| `ctaHref` | `string` | yes |

![Home — Planner Embed](../design-references/sec6-moebelplaner.png)

#### Home — Räume Showcase

`#home-raeume` — Centered intro + 3-column project showcase with the oversized 'Fast' wordmark and a ratings badge.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `rooms-showcase` | `home` | no | `/` |

| Prop | Type | Required |
| --- | --- | --- |
| `heading / subheading / body` | `string` | yes |
| `story/kitchen/bath images + captions` | `string` | yes |
| `badge` | `string` | yes |

![Home — Räume Showcase](../design-references/sec7-raeume.png)

#### Home — Testimonials + Logos

`#home-testimonials` — Oversized heading, a single featured testimonial card, and an infinite partner-logo marquee.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `testimonials` | `home` | no | `/` |

| Prop | Type | Required |
| --- | --- | --- |
| `heading` | `string` | yes |
| `testimonial` | `Testimonial` | yes |
| `logos` | `PartnerLogo[]` | yes |

![Home — Testimonials + Logos](../design-references/sec8-testimonials.png)

#### Home — FAQ

`#home-faq` — Single-column accordion (plus/minus, yellow active border) with an eyebrow, heading and CTA.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `faq` | `home` | yes | `/` |

| Prop | Type | Required |
| --- | --- | --- |
| `eyebrow` | `string` | yes |
| `heading` | `string` | yes |
| `items` | `FaqItem[]` | yes |
| `ctaLabel / ctaHref` | `string` | yes |

![Home — FAQ](../design-references/sec9-faq.png)

### Privat — möbel-nach-mass template

#### Privat — Hero

`#privat-hero` — Service hero with split layout: left H1 + breadcrumb, right intro paragraph, over a photo (Urbanist).

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `hero` | `privat` | no | `/leistungen/moebel-nach-mass` |

| Prop | Type | Required |
| --- | --- | --- |
| `bgImage / imageAlt` | `string` | yes |
| `title` | `string` | yes |
| `intro` | `string` | yes |
| `breadcrumb` | `BreadcrumbItem[]` | yes |

![Privat — Hero](../design-references/moebel-nach-mass/01-hero.jpg)

#### Privat — Intro + Stats

`#privat-intro-stats` — Three-column intro (since/heading/asterisk-paragraph), a full-width image band, and a 3-column block with a scroll-triggered count-up.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `intro-stats` | `privat` | yes | `/leistungen/moebel-nach-mass` |

| Prop | Type | Required |
| --- | --- | --- |
| `heading / intro* / col1–3 copy` | `string` | yes |
| `counterTarget / counterDuration` | `number` | yes |
| `links (col1/col3)` | `string` | yes |

![Privat — Intro + Stats](../design-references/moebel-nach-mass/02a-intro-stats.jpg)

#### Privat — Process

`#privat-process` — Two-column: heading + paragraph (with trailing bold) + decorative dots on the left, image on the right.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `process` | `privat` | no | `/leistungen/moebel-nach-mass` |

| Prop | Type | Required |
| --- | --- | --- |
| `heading` | `string` | yes |
| `paragraph / paragraphStrong` | `string` | yes |
| `image / imageAlt` | `string` | yes |

![Privat — Process](../design-references/moebel-nach-mass/03-process.jpg)

#### Privat — Categories (Typische)

`#privat-typische` — Heading + two alternating image/list rows of titled category items.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `categories-list` | `privat` | no | `/leistungen/moebel-nach-mass` |

| Prop | Type | Required |
| --- | --- | --- |
| `heading` | `string` | yes |
| `image1/2 + alt` | `string` | yes |
| `row1 / row2` | `CategoryItem[]` | yes |

![Privat — Categories (Typische)](../design-references/moebel-nach-mass/05-typische.jpg)

#### Privat — Warum (Masonry + Text)

`#privat-warum` — CSS-columns masonry collage on the left, heading + paragraph + decorative dots on the right.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `gallery-masonry` | `privat` | no | `/leistungen/moebel-nach-mass` |

| Prop | Type | Required |
| --- | --- | --- |
| `heading / paragraph` | `string` | yes |
| `images` | `WarumImage[]` | yes |

![Privat — Warum (Masonry + Text)](../design-references/moebel-nach-mass/06-warum.jpg)

#### Privat — Story (Geschichte)

`#privat-geschichte` — Centered heading + caps subheading, a 5-up masonry gallery with hover captions, and a paragraphs + dark fact-box block.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `story` | `privat` | no | `/leistungen/moebel-nach-mass` |

| Prop | Type | Required |
| --- | --- | --- |
| `heading / subheading` | `string` | yes |
| `gallery` | `GalleryItem[]` | yes |
| `paragraphs / factLines` | `string[]` | yes |

![Privat — Story (Geschichte)](../design-references/moebel-nach-mass/07-geschichte.jpg)

### Gewerbe

#### Gewerbe — Intro + Stats

`#gewerbe-intro-stats` — Commercial-page intro/stats band with a scroll count-up.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `intro-stats` | `gewerbe` | no | `/leistungen/gewerbeeinrichtung` |

_Prop-less (page-specific content)._

![Gewerbe — Intro + Stats](../design-references/gewerbeeinrichtung/band-1.jpg)

#### Gewerbe — Laden & Gastro

`#gewerbe-laden-gastro` — Retail/gastronomy feature: text intro + image strip showcasing shop and gastro fit-outs.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `feature-text` | `gewerbe` | no | `/leistungen/gewerbeeinrichtung` |

_Prop-less (page-specific content)._

![Gewerbe — Laden & Gastro](../design-references/gewerbeeinrichtung/band-3.jpg)

#### Gewerbe — Leistungen

`#gewerbe-leistungen` — Grid of commercial service categories (Praxis, Büro, Ladenbau, Hotel & Gastro, …).

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `categories-list` | `gewerbe` | no | `/leistungen/gewerbeeinrichtung` |

_Prop-less (page-specific content)._

![Gewerbe — Leistungen](../design-references/gewerbeeinrichtung/band-6.jpg)

#### Gewerbe — Warum

`#gewerbe-warum` — Trust section with masonry gallery and a credentials block.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `story` | `gewerbe` | no | `/leistungen/gewerbeeinrichtung` |

_Prop-less (page-specific content)._

![Gewerbe — Warum](../design-references/gewerbeeinrichtung/band-7.jpg)

### Möbelplaner

#### Möbelplaner — Schritte

`#mp-schritte` — Numbered step sequence explaining how the online planner works.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `steps` | `moebelplaner` | no | `/leistungen/moebelplaner` |

_Prop-less (page-specific content)._

![Möbelplaner — Schritte](../design-references/moebelplaner/band-1.jpg)

#### Möbelplaner — Intro

`#mp-intro` — Intro feature block for the planner page.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `feature-text` | `moebelplaner` | no | `/leistungen/moebelplaner` |

_Prop-less (page-specific content)._

![Möbelplaner — Intro](../design-references/moebelplaner/band-2.jpg)

#### Möbelplaner — Prozess

`#mp-prozess` — Process explanation from planning to finished custom furniture.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `process` | `moebelplaner` | no | `/leistungen/moebelplaner` |

_Prop-less (page-specific content)._

![Möbelplaner — Prozess](../design-references/moebelplaner/band-3.jpg)

### Kontakt

#### Kontakt — Panel

`#kontakt-panel` — Contact panel: form, opening hours and phone.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `contact-form` | `kontakt` | no | `/kontakt` |

_Prop-less (page-specific content)._

![Kontakt — Panel](../design-references/kontakt/band-0.jpg)

#### Kontakt — Standort

`#kontakt-standort` — Location section with address / map.

| Use case | Category | Client | Used on |
| --- | --- | --- | --- |
| `location` | `kontakt` | no | `/kontakt` |

_Prop-less (page-specific content)._

![Kontakt — Standort](../design-references/kontakt/band-3.jpg)

## Privat Page Recipe

When a page is marked **Privat**, build it from this canonical section order (derived from `/leistungen/moebel-nach-mass`). Wrap everything in `PrivatPageLayout` (Header + `<main className="flex flex-col">` + Footer) and keep page `metadata` in the route file. The two CTA blocks are `ExpandingImageCta` wrapped in a beige `<section>` with the noted padding.

| # | Section | Library id |
| --- | --- | --- |
| 1 | MnmHero | `#privat-hero` |
| 2 | MnmIntroStats | `#privat-intro-stats` |
| 3 | ExpandingImageCta inside <section beige className="pb-12 lg:pb-16"> | `#shared-image-cta` |
| 4 | MnmProcess | `#privat-process` |
| 5 | MnmWeitereLeistungen | `#privat-weitere-leistungen` |
| 6 | MnmTypische | `#privat-typische` |
| 7 | MnmWarum | `#privat-warum` |
| 8 | MnmGeschichte | `#privat-geschichte` |
| 9 | MnmMoebelplaner | `#privat-planner-cta` |
| 10 | TestimonialsSection (shared) | `#shared-testimonials` |
| 11 | ExpandingImageCta inside <section beige className="pb-14 lg:pb-[64px]"> | `#shared-image-cta` |
| 12 | FaqSection (shared) | `#shared-faq` |
