import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fastColors, fastFonts, type FastFont } from "./tokens";

type SectionBackground = "beige" | "dark" | "darkCard" | "light" | "white" | "none";

interface SectionProps {
  id?: string;
  /** Background fill token. Defaults to `none` (transparent). */
  background?: SectionBackground;
  /** Apply the shared 84/48px vertical rhythm (the `.fast-section` utility). */
  rhythm?: boolean;
  /** Set the section font family (privat sections use `urbanist`). */
  font?: FastFont;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const BACKGROUND: Record<SectionBackground, string | undefined> = {
  beige: fastColors.beige,
  dark: fastColors.dark,
  darkCard: fastColors.darkCard,
  light: fastColors.light,
  white: fastColors.white,
  none: undefined,
};

/**
 * Outer `<section>` wrapper for library sections and new pages. Provides the
 * common background / vertical-rhythm / font conveniences while still allowing
 * full `className` + `style` passthrough for bespoke spacing.
 *
 * The pre-existing pixel-perfect sections keep their own literal `<section>`
 * tags; this primitive is for composing new pages from the library.
 */
export function Section({
  id,
  background = "none",
  rhythm = false,
  font,
  className,
  style,
  children,
}: SectionProps) {
  const classes = cn(rhythm && "fast-section", className);
  return (
    <section
      id={id}
      className={classes || undefined}
      style={{
        backgroundColor: BACKGROUND[background],
        fontFamily: font ? fastFonts[font] : undefined,
        ...style,
      }}
    >
      {children}
    </section>
  );
}
