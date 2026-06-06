/**
 * Fast Systemmöbel design tokens — extracted from the live-site clone.
 *
 * These mirror the raw CSS values used across the section components so the
 * "magic strings" have one documented home. Values intentionally match the
 * existing inline styles (computed-identical) so they can be reused in new
 * sections/pages without drifting from the originals.
 *
 * The existing pixel-perfect sections keep their literal values; these tokens
 * are for the shared primitives (`Section`, `Container`), the `/library`
 * showcase, and any new pages assembled from the library.
 */

export const fastColors = {
  /** Section background wash used across most body sections. */
  beige: "rgba(203,191,181,0.59)",
  /** Primary dark text / header & footer fill. */
  dark: "rgb(61,61,61)",
  /** Dark card fill (services grid, fact box). */
  darkCard: "rgb(45,45,45)",
  /** Near-black headline ink used on privat pages. */
  ink: "rgb(23,33,33)",
  /** Muted body copy. */
  text: "rgb(102,102,102)",
  /** Faint label grey (e.g. "seit 1996"). */
  textFaint: "rgba(117,117,117,0.5)",
  /** Accent yellow. */
  yellow: "rgb(237,168,33)",
  /** Light surface / inverted text. */
  light: "rgb(243,243,243)",
  /** Light card fill (testimonials, faq). */
  cardBg: "rgb(250,250,250)",
  white: "rgb(255,255,255)",
  black: "rgb(0,0,0)",
} as const;

export const fastFonts = {
  urbanist: "var(--font-urbanist), Helvetica, Arial, sans-serif",
  poppins: "var(--font-poppins), Helvetica, Arial, sans-serif",
} as const;

/** Centered content-wrapper widths. `home` = 1280px, `mnm` (privat) = 1224px. */
export const fastContainer = {
  home: "mx-auto max-w-[1280px] px-5 sm:px-6",
  mnm: "mx-auto w-full max-w-[1224px] px-5 sm:px-6 lg:px-8",
} as const;

export type FastColor = keyof typeof fastColors;
export type FastFont = keyof typeof fastFonts;
export type FastContainerVariant = keyof typeof fastContainer;
