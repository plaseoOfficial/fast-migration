"use client";

import { useLenis } from "lenis/react";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * Single scroll engine for the whole page. On every Lenis tick it drives all
 * scroll-coupled motion from one place, so the hero parallax, the quote drift,
 * and any future scroll effect stay perfectly in sync (and off React's render
 * path). Two signals are published:
 *
 *  • `--scroll-y` on <html> — the raw scroll position in px. Read by elements
 *    anchored to the top of the page (the hero background).
 *  • `--parallax` on each `[data-parallax]` element — a viewport-relative
 *    progress that runs ≈ −0.5 (entering from the bottom) → 0 (centered) →
 *    ≈ +0.5 (leaving the top). Lets any mid-page element drift independently
 *    of where it sits in the document.
 *
 * Mounted inside <SmoothScroll> (the Lenis provider). Renders nothing.
 * Under prefers-reduced-motion it never subscribes, so both variables keep
 * their defaults and every coupled transform collapses to identity.
 */
export function ScrollCoupler() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useLenis(
    prefersReducedMotion
      ? undefined
      : (lenis) => {
          // Keep GSAP ScrollTrigger in lockstep with Lenis' eased scroll so
          // pinned sections update on every smoothed frame (no jitter/lag).
          ScrollTrigger.update();

          const root = document.documentElement;
          root.style.setProperty("--scroll-y", `${lenis.scroll}px`);

          const viewport = window.innerHeight || 1;
          const nodes =
            document.querySelectorAll<HTMLElement>("[data-parallax]");
          for (const el of nodes) {
            const rect = el.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            // ≈ −0.5 entering from the bottom → 0 centered → ≈ +0.5 leaving the
            // top. Clamped so far-off-screen elements don't accrue huge offsets.
            const raw = 0.5 - center / viewport;
            const progress = Math.max(-0.5, Math.min(0.5, raw));
            el.style.setProperty("--parallax", progress.toFixed(4));
          }
        },
  );

  return null;
}
