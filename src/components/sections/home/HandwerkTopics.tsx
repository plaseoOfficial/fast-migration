"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react";
import type { TabPanel } from "@/types";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const poppins = "var(--font-poppins), Helvetica, Arial, sans-serif";
const urbanist = "var(--font-urbanist), Helvetica, Arial, sans-serif";

/**
 * Detail/aspect topics that get grouped into a single compact "Im Detail" panel
 * instead of a full photo stage each — keeps the horizontal journey short and
 * visually recedes the less-prominent topics. The remaining (core) topics stay
 * full foreground panels.
 */
const SECONDARY_TITLES = new Set(["Farben", "Licht", "Technologie", "Räume"]);

/**
 * The "großen Animationen" centerpiece: on desktop the section pins and the
 * topic panels glide sideways — one flows into the next (echtagentur-style),
 * with a progress label rail on top. Core topics are full panels; the detail
 * topics collapse into one quiet overview panel at the end. On mobile / under
 * reduced-motion the GSAP branch never runs and everything renders as a calm
 * vertical stack (no pin, no scroll-hijack).
 */
export function HandwerkTopics({ tabs }: { tabs: TabPanel[] }) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const lenis = useLenis();

  const primary = tabs.filter((t) => !SECONDARY_TITLES.has(t.title));
  const secondary = tabs.filter((t) => SECONDARY_TITLES.has(t.title));
  const labels = [...primary.map((t) => t.title), ...(secondary.length ? ["Im Detail"] : [])];

  useGSAP(
    () => {
      const scope = scopeRef.current;
      const track = trackRef.current;
      if (!scope || !track) return;

      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          track.classList.add("is-horizontal");
          scope.classList.add("is-sticky");
          const labelEls = gsap.utils.toArray<HTMLElement>(".topic-label", scope);
          const setActive = (i: number) =>
            labelEls.forEach((l, idx) => l.classList.toggle("active", idx === i));
          setActive(0);

          const distance = () => track.scrollWidth - window.innerWidth;
          // Instead of JS-pinning (which inserts a pin-spacer and jolts against
          // Lenis' momentum on engage/release), we make the inner viewport
          // `position: sticky` via CSS and give this wrapper enough height for
          // the sticky to last exactly the horizontal travel. No pin = no jolt.
          const sizeWrapper = () => {
            scope.style.height = `${window.innerHeight + distance()}px`;
          };
          sizeWrapper();

          const tween = gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: scope,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              invalidateOnRefresh: true,
              onRefresh: sizeWrapper,
              onUpdate: (self) =>
                setActive(Math.round(self.progress * (labels.length - 1))),
            },
          });
          stRef.current = tween.scrollTrigger ?? null;

          // Soft enter/exit: each panel's content fades + scales in as it nears
          // the viewport centre and back out as it leaves — peak at centre — so
          // panels glide in and out instead of hard-cutting at the edges.
          // `containerAnimation` ties these to horizontal position, not page Y.
          const panelEls = gsap.utils.toArray<HTMLElement>(".topic-panel", track);
          panelEls.forEach((p) => {
            const inner = p.querySelector<HTMLElement>(".topic-panel-inner");
            if (!inner) return;
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: p,
                  containerAnimation: tween,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              })
              .fromTo(
                inner,
                { opacity: 0.4, scale: 0.94 },
                { opacity: 1, scale: 1, ease: "power2.out" },
              )
              .to(inner, { opacity: 0.4, scale: 0.94, ease: "power2.in" });
          });

          return () => {
            track.classList.remove("is-horizontal");
            scope.classList.remove("is-sticky");
            scope.style.height = "";
            gsap.set(track, { clearProps: "transform" });
            stRef.current = null;
          };
        },
      );

      return () => mm.revert();
    },
    { scope: scopeRef },
  );

  // Soft entry, decoupled from the pin: fade the whole track in (opacity only —
  // no transform, so it never interferes with the pin or the horizontal x) the
  // first time it scrolls into view. The hidden start state + transition live in
  // globals.css behind the `js` class.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-entered");
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05 },
    );
    io.observe(track);
    return () => io.disconnect();
  }, []);

  const goTo = (i: number) => {
    const st = stRef.current;
    if (!st) return;
    const target = st.start + (i / (labels.length - 1)) * (st.end - st.start);
    if (lenis) lenis.scrollTo(target);
    else window.scrollTo(0, target);
  };

  return (
    <div ref={scopeRef} className="topic-stage">
      <div className="topic-viewport">
        <div className="topic-nav">
          {labels.map((label, i) => (
            <button
              key={label}
              type="button"
              className="topic-label"
              onClick={() => goTo(i)}
            >
              {label}
            </button>
          ))}
        </div>

        <div ref={trackRef} className="topic-track">
        {primary.map((t) => (
          <article key={t.title} className="topic-panel">
            <div className="topic-panel-inner">
              <div className="topic-media">
                <Image
                  src={t.background}
                  alt={t.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <h3
                  className="absolute bottom-7 left-7 right-7 text-white"
                  style={{
                    fontFamily: poppins,
                    fontSize: "clamp(32px, 4vw, 56px)",
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: "-1px",
                  }}
                >
                  {t.title}
                </h3>
              </div>

              <div className="topic-cards">
                {t.cards.map((card) => (
                  <div
                    key={card.title}
                    className="flex items-start gap-4 rounded-md bg-white/70 p-5 backdrop-blur-sm"
                  >
                    <Image
                      src={card.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 shrink-0"
                    />
                    <div>
                      <h4
                        className="mb-1"
                        style={{
                          fontFamily: urbanist,
                          fontSize: 18,
                          fontWeight: 500,
                          lineHeight: 1.1,
                          color: "rgb(61,61,61)",
                        }}
                      >
                        {card.title}
                      </h4>
                      <p className="fast-body" style={{ fontSize: 14, lineHeight: 1.7 }}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}

        {secondary.length > 0 && (
          <article className="topic-panel topic-panel--overview">
            <div className="topic-panel-inner">
              <div className="topic-overview">
                <p className="fast-eyebrow mb-6">Im Detail</p>
                <div className="topic-overview-grid">
                  {secondary.map((t) => (
                    <div key={t.title} className="topic-mini">
                      <div className="topic-mini-media">
                        <Image
                          src={t.background}
                          alt={t.title}
                          fill
                          sizes="92px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4
                          className="mb-1"
                          style={{
                            fontFamily: poppins,
                            fontSize: 20,
                            fontWeight: 500,
                            lineHeight: 1.2,
                            color: "rgb(61,61,61)",
                          }}
                        >
                          {t.title}
                        </h4>
                        <p className="fast-body" style={{ fontSize: 13, lineHeight: 1.5 }}>
                          {t.cards.map((c) => c.title).join(" · ")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        )}
        </div>
      </div>
    </div>
  );
}
