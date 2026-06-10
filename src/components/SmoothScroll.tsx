"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { ScrollCoupler } from "@/components/ScrollCoupler";
import { gsap } from "@/lib/gsap";

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

  // Drive Lenis from GSAP's ticker (instead of its own RAF) so Lenis and
  // ScrollTrigger advance on the exact same frame. Without this, pinned
  // sections jolt when the pin engages/releases because the two run on
  // separate animation loops a frame apart. `lagSmoothing(0)` stops GSAP from
  // fast-forwarding after a stutter, which would otherwise desync the scroll.
  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

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
        // We pump Lenis from the GSAP ticker below — disable its own RAF so the
        // two loops can't run a frame apart (the source of pin-jolt).
        autoRaf: false,
      }}
    >
      <ScrollCoupler />
      {children}
    </ReactLenis>
  );
}
