"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * The homepage's signature cross-section moment. Pins the hero for one viewport
 * of scroll; as you scroll, the hero recedes (scale down + dim) while the next
 * section slides up and over it. Because the pin uses `pinSpacing: false`, the
 * following section scrolls into the hero's space — the over-slide is the pin
 * mechanism itself, not a faked transform.
 *
 * Receives the hero + the following section as children (Server Components,
 * passed straight through). The hero is found via its `data-hero` attribute,
 * scoped to this wrapper so nothing leaks globally. useGSAP reverts everything
 * on unmount; gsap.matchMedia disables it entirely under reduced-motion.
 */
export function OpeningOverlap({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const hero = scope.current?.querySelector<HTMLElement>("[data-hero]");
        if (!hero) return;

        gsap.to(hero, {
          scale: 0.94,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: hero,
            pinSpacing: false,
          },
        });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
