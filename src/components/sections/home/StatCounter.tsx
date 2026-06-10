"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

interface StatCounterProps {
  /** Source value, may carry a thousands dot, e.g. "30", "4000", "72.000". */
  value: string;
  suffix?: string;
  label: string;
}

const deFormat = new Intl.NumberFormat("de-DE");

/**
 * A single KPI that counts up from 0 the first time it scrolls into view.
 * The final value is server-rendered (SEO / no-JS safe); GSAP only takes over
 * in the browser. Under reduced-motion the matchMedia branch never runs, so the
 * server-rendered final value simply stays put.
 */
export function StatCounter({ value, suffix = "+", label }: StatCounterProps) {
  const numRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = numRef.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const target = parseInt(value.replace(/\D/g, ""), 10) || 0;
        const proxy = { n: 0 };
        el.textContent = "0";

        const tween = gsap.to(proxy, {
          n: target,
          duration: 1.6,
          ease: "power2.out",
          paused: true,
          onUpdate: () => {
            el.textContent = deFormat.format(Math.round(proxy.n));
          },
        });

        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => tween.play(),
        });

        return () => {
          st.kill();
          tween.kill();
          el.textContent = deFormat.format(target);
        };
      });

      return () => mm.revert();
    },
    { scope: numRef },
  );

  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
          fontSize: "clamp(36px, 4vw, 56px)",
          lineHeight: 1,
          fontWeight: 500,
          color: "rgb(61,61,61)",
          letterSpacing: "-1.5px",
        }}
      >
        <span ref={numRef}>{value}</span>
        <span style={{ color: "rgb(237,168,33)" }}>{suffix}</span>
      </div>
      <p className="fast-body mt-3" style={{ fontSize: 14, lineHeight: "23.8px" }}>
        {label}
      </p>
    </div>
  );
}
