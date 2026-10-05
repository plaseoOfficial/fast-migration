"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

/**
 * Deep links like `/leistungen/#gewerbe` (header mega menu) arrive via a
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

  // Same-page jumps (e.g. „Alle Leistungen ansehen →“ in the mega menu while
  // already on /leistungen/#privat): Next treats them as a hash-only change and
  // the browser jump never reaches Lenis, so nothing scrolls and the URL ends up
  // as `#privat#privat`. Capture those clicks, scroll via Lenis and set a clean
  // hash. `preventDefault` makes next/link skip its own navigation, while the
  // link's onClick (e.g. closing the menu) still runs.
  useEffect(() => {
    if (!lenis) return;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as Element | null)?.closest?.("a[href*='#']");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      e.preventDefault();
      window.history.pushState(null, "", `${url.pathname}${url.hash}`);
      lenis.resize();
      lenis.scrollTo(target, { force: true });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [lenis]);

  return null;
}
