"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Extra classes; spread onto the wrapper so it can BE the grid/flex item. */
  className?: string;
  /** Stagger delay in ms (use index * step for sequenced siblings). */
  delay?: number;
  /** Rise distance in px. Pass 0 for an opacity-only reveal. */
  y?: number;
  /** Fraction of the element visible before it reveals (IntersectionObserver). */
  threshold?: number;
  style?: CSSProperties;
}

/**
 * Lightweight scroll-reveal wrapper: fades + rises its children in once, the
 * first time they scroll into view. No animation library — just an
 * IntersectionObserver. The hidden start state and the transition live in
 * globals.css (`.js [data-reveal]`), gated behind the `js` class so content is
 * never hidden without JS.
 *
 * Visibility is tracked in React state (not via imperative classList) so that a
 * parent re-render — e.g. an accordion item whose className changes on toggle —
 * cannot wipe the `is-visible` class and make the element vanish again.
 *
 * Renders a <div>, so place it where a block-level wrapper is valid.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y,
  threshold = 0.15,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, visible]);

  const cssVars = {
    ...style,
    ...(delay ? { "--reveal-delay": `${delay}ms` } : {}),
    ...(y !== undefined ? { "--reveal-y": `${y}px` } : {}),
  } as CSSProperties;

  return (
    <div
      ref={ref}
      data-reveal
      className={[className, visible && "is-visible"].filter(Boolean).join(" ")}
      style={cssVars}
    >
      {children}
    </div>
  );
}
