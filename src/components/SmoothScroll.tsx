"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * Site-wide soft/inertial scrolling. Wraps the whole app in a global Lenis
 * instance so the mouse wheel and trackpad feel eased instead of snappy.
 * Respects `prefers-reduced-motion` by disabling the smoothing entirely.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  // On route change, jump back to the top. In `root` mode Lenis owns the scroll
  // position and does NOT reset it on App-Router navigations, so a link clicked
  // from far down a page (e.g. a footer/CTA link → /kontakt/) would otherwise
  // open the new page already scrolled mid-way down. `immediate` skips the ease.
  useEffect(() => {
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        // Lower lerp = softer, longer catch-up. Tuned for a calm, gliding feel.
        lerp: 0.08,
        wheelMultiplier: 0.9,
        smoothWheel: !prefersReducedMotion,
        // Keep anchor / programmatic jumps eased too.
        duration: 1.2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
