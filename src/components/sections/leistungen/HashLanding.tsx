"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

/**
 * Deep links like `/alle-leistungen/#gewerbe` (header mega menu) arrive via a
 * client-side navigation. SmoothScroll resets Lenis to the top on every route
 * change, which runs after the browser's own hash jump and would swallow it.
 * This re-applies the hash once that reset is done.
 */
export function HashLanding() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    // Two frames: let SmoothScroll's reset-to-top run first.
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        // Header offset comes from the section's `scroll-mt-[96px]`, which
        // Lenis honours. Lenis still caches the previous page's scroll limit; refresh it,
        // otherwise the jump is clamped short of the target.
        lenis.resize();
        lenis.scrollTo(target, { immediate: true, force: true });
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [lenis]);

  return null;
}
