# Design Tokens — Fast Systemmöbel

The contract the **`design-qc`** agent enforces. Distilled from the Claude Design
handoff bundle (`project/colors_and_type.css` + `preview/*.html`), cross-checked
against `src/app/globals.css`. "✓ in code" = the value is also present in
`globals.css` / `_shared/tokens.ts` and is therefore confirmed.

## 1. Colors

Only these are part of the system. **Any other hex/rgb in UI code is a deviation.**

| Token | Value | Use | ✓ in code |
|---|---|---|---|
| `fast-beige` | `rgba(203,191,181,0.59)` | section tint over white | ✓ |
| `fast-beige-solid` | `rgb(231,224,218)` | opaque beige | ✓ |
| `fast-dark` | `rgb(61,61,61)` | headings, ink, dark surfaces | ✓ |
| `fast-text` | `rgb(102,102,102)` | body copy | ✓ |
| `fast-light` | `rgb(243,243,243)` | light fills, display-on-photo | ✓ |
| `fast-yellow` | `rgb(237,168,33)` | accent, CTA, active state | ✓ |
| `fast-link` | `rgb(46,163,242)` | hyperlinks | ✓ |
| `white` | `#ffffff` | base | ✓ |

Semantic surfaces (from the bundle's `colors_and_type.css`):

| Token | Value | Use |
|---|---|---|
| `surface-glass` | `rgba(255,255,255,0.70)` | frosted cards |
| `ink-on-dark` | `rgba(220,220,220,0.85)` | text on dark surfaces |
| `border-subtle` | `rgba(0,0,0,0.10)` | hairline borders on light |
| `border-on-dark` | `rgba(255,255,255,0.30)` | hairline borders on dark |

## 2. Typography

| Family | Token | Role | ✓ in code |
|---|---|---|---|
| **Poppins** | `--font-poppins` | display, headings, most marketing copy | ✓ |
| **Urbanist** | `--font-urbanist` | nav, tabs, card titles, hotspot labels | ✓ |
| **Open Sans** | `--font-open-sans` | small copy, testimonials, footer links | ✓ |

`var(--font-poppins)` etc. are **equivalent** to the literal `'Poppins'` family —
do not flag the variable form. **Default weight is `500` (medium)** across the
brand; available 300 / 400 / 500 / 600 / 700.

**Type scale (px)** — sizes outside this set are deviations:

| Step | px | Tracking | Notes |
|---|---|---|---|
| display | 144 | −10px | hero brand title (✓ `.fast-display`) |
| mega | 120 | −5px | |
| h1 | 84 | −2px | |
| h2 | 65 | — | |
| h3 | 45 | — | |
| h4 | 37 | −1px | |
| title | 22 | — | |
| lg | 18 | — | |
| base | 16 | — | |
| sm | 14 | — | body / eyebrow (✓) |
| xs | 12 | — | footer fine print |
| eyebrow | 14 | **+2px** | uppercase (✓ `.fast-eyebrow`) |

**Line-heights:** tight `1` · snug `1.3` · body `1.7` (✓ body lh 1.7).

## 3. Spacing & layout

| Token | Value | ✓ in code |
|---|---|---|
| container | `1280px` max | ✓ (`fastContainer.home`) |
| container-wide | `1440px` max | ✓ (header) |
| section padding-y (desktop) | `84px` | ✓ (`.fast-section`) |
| section padding-y (mobile ≤768) | `48px` | ✓ |
| container padding-x | `24px` (`px-6`) | ✓ |

Step bars in the spacing preview: 16 / 32 / 56px. Prefer Tailwind scale; flag
arbitrary one-off px gaps that don't map to it.

## 4. Radii & shadows

| Radius | Value | ✓ |
|---|---|---|
| sm | `6px` | |
| default | `8px` | ✓ (`--radius` 0.5rem) |
| **pill** | `50px` | ✓ (`--radius-pill`) |
| full | `9999px` | avatars / icon circles |

| Shadow | Value |
|---|---|
| sm | `0 1px 2px rgba(0,0,0,0.05)` |
| card | `0 10px 30px rgba(0,0,0,0.08)` |
| pop | `0 12px 28px rgba(0,0,0,0.18)` |

## 5. Component specs

| Component | Spec |
|---|---|
| **Button — pill** | `padding 10px 20px` · `border-radius 50px` · `font 15px/500 Poppins` · bg `fast-yellow`, text `fast-dark` · hover → bg `fast-dark`, text `fast-yellow` (✓ `.fast-btn-pill`) |
| **Button — outline** | same metrics · `1px solid fast-dark` · transparent · hover bg dark / white text (✓ `.fast-btn-outline`) |
| **FAQ item** | card `padding 26px 32px` · `radius 6px` · `border border-subtle` · question Poppins 16px · toggle circle `radius 50%`, yellow/dark |
| **Eyebrow** | Poppins `14px / 500` · `+2px` tracking · uppercase, color `fast-dark` |
| **Stats / Tabs / Testimonial** | per `preview/components-{stats,tabs,testimonial}.html` (Urbanist tab/labels, pill tabs, star ratings, avatar circles) |

## 6. Known repo divergences (the agent flags these)

`src/components/sections/_shared/tokens.ts` defines colors **not** in the design
system — report them as deviations to reconcile (add to the system or replace):

| In `tokens.ts` | Value | Status |
|---|---|---|
| `darkCard` | `rgb(45,45,45)` | not in design system |
| `ink` | `rgb(23,33,33)` | not in design system |
| `cardBg` | `rgb(250,250,250)` | not in design system |
| `textFaint` | `rgba(117,117,117,0.5)` | not in design system |
| `black` | `rgb(0,0,0)` | not in design system |

Also: `--fast-beige-solid` exists in `globals.css` but is **missing** from
`tokens.ts` (omission worth noting).
