"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface TimelineYear {
  year: string;
  title: string;
  body: string;
  image: string;
}

interface UeberTimelineProps {
  headingBefore: string;
  headingAccent: string;
  headingAfter: string;
  intro: string;
  years: TimelineYear[];
}

const BEIGE = "rgba(203,191,181,0.59)";
const CARD_BG = "rgb(247,244,240)";
const YELLOW = "rgb(237,168,33)";

export function UeberTimeline({
  headingBefore,
  headingAccent,
  headingAfter,
  intro,
  years,
}: UeberTimelineProps) {
  const [active, setActive] = useState(0);
  const [fillHeight, setFillHeight] = useState(0);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const markerRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Track which milestone is centered in the viewport as the user scrolls.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let topMost: { index: number; top: number } | null = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number(entry.target.getAttribute("data-index"));
          const top = entry.boundingClientRect.top;
          if (topMost === null || top < topMost.top) {
            topMost = { index, top };
          }
        }
        if (topMost) setActive(topMost.index);
      },
      // A thin band across the vertical middle of the viewport decides "active".
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 }
    );

    const nodes = itemRefs.current.filter((node): node is HTMLLIElement => node !== null);
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  // Grow the progress line down to the center of the active marker.
  useEffect(() => {
    const recompute = () => {
      const track = trackRef.current;
      const marker = markerRefs.current[active];
      if (!track || !marker) return;
      const trackTop = track.getBoundingClientRect().top;
      const markerRect = marker.getBoundingClientRect();
      setFillHeight(markerRect.top + markerRect.height / 2 - trackTop);
    };

    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, [active]);

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: BEIGE,
        fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1350px] px-6 py-[100px] lg:py-[135px]">
        {/* Heading */}
        <h2
          className="mx-auto max-w-[1000px] text-center font-medium"
          style={{
            fontSize: "clamp(34px, 5vw, 60px)",
            lineHeight: "1.1",
            letterSpacing: "-3px",
            color: "rgb(61,61,61)",
          }}
        >
          {headingBefore}
          <span style={{ color: YELLOW }}>{headingAccent}</span>
          {headingAfter}
        </h2>

        {/* Intro */}
        <p
          className="mx-auto mt-8 max-w-[760px] text-center"
          style={{ fontSize: "16px", lineHeight: "26px", color: "rgb(61,61,61)" }}
        >
          {intro}
        </p>

        {/* Vertical timeline */}
        <div ref={trackRef} className="relative mt-14 lg:mt-[72px]">
          {/* Base rail */}
          <div
            className="absolute top-0 bottom-0 w-[3px] rounded-full left-[20px] -translate-x-1/2 lg:left-[160px]"
            style={{ backgroundColor: "rgb(243,243,243)" }}
            aria-hidden="true"
          />
          {/* Filled progress */}
          <div
            className="absolute top-0 w-[3px] rounded-full left-[20px] -translate-x-1/2 transition-[height] duration-500 ease-out lg:left-[160px]"
            style={{
              height: `${fillHeight}px`,
              background: "linear-gradient(180deg, rgb(237,168,33) 0%, rgb(245,196,90) 100%)",
            }}
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-16 lg:gap-24">
            {years.map((y, i) => {
              const isActive = i === active;
              const isPast = i <= active;
              return (
                <li
                  key={y.year}
                  data-index={i}
                  ref={(node) => {
                    itemRefs.current[i] = node;
                  }}
                  className="relative grid grid-cols-[40px_1fr] items-start gap-6 lg:grid-cols-[160px_1fr] lg:items-stretch lg:gap-12"
                >
                  {/* Rail column: year label + marker */}
                  <div className="relative flex items-start lg:items-center lg:justify-end lg:pr-12">
                    {/* Year (desktop, left of rail) */}
                    <span
                      className="hidden text-right font-medium tabular-nums transition-colors lg:block"
                      style={{
                        fontSize: "clamp(28px, 2.6vw, 40px)",
                        lineHeight: "1",
                        letterSpacing: "-1.5px",
                        color: isActive ? "rgb(23,33,33)" : "rgb(150,150,150)",
                      }}
                    >
                      {y.year}
                    </span>
                    {/* Marker on the rail */}
                    <span
                      ref={(node) => {
                        markerRefs.current[i] = node;
                      }}
                      className="absolute top-[6px] flex items-center justify-center rounded-full transition-all duration-300 left-[20px] -translate-x-1/2 lg:top-1/2 lg:left-[160px] lg:-translate-y-1/2"
                      style={
                        isActive
                          ? {
                              height: "22px",
                              width: "22px",
                              border: `3px solid ${YELLOW}`,
                              backgroundColor: CARD_BG,
                            }
                          : {
                              height: "14px",
                              width: "14px",
                              backgroundColor: isPast ? YELLOW : "rgb(170,170,170)",
                            }
                      }
                    >
                      {isActive && (
                        <span
                          className="h-[6px] w-[6px] rounded-full"
                          style={{ backgroundColor: YELLOW }}
                        />
                      )}
                    </span>
                  </div>

                  {/* Content card */}
                  <div
                    className="border p-7 transition-opacity duration-300 lg:p-10"
                    style={{
                      backgroundColor: CARD_BG,
                      borderColor: "rgba(61,61,61,0.25)",
                      opacity: isActive ? 1 : 0.62,
                    }}
                  >
                    {/* Year (mobile, inside card) */}
                    <span
                      className="mb-2 block font-medium tabular-nums lg:hidden"
                      style={{
                        fontSize: "22px",
                        lineHeight: "1",
                        letterSpacing: "-1px",
                        color: YELLOW,
                      }}
                    >
                      {y.year}
                    </span>
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
                      <div>
                        <h3
                          className="font-medium"
                          style={{
                            fontSize: "clamp(22px, 2.4vw, 32px)",
                            lineHeight: "1.2",
                            letterSpacing: "-1px",
                            color: "rgb(23,33,33)",
                          }}
                        >
                          {y.title}
                        </h3>
                        <p
                          className="mt-4 max-w-[460px]"
                          style={{
                            fontSize: "16px",
                            lineHeight: "26px",
                            color: "rgb(61,61,61)",
                          }}
                        >
                          {y.body}
                        </p>
                      </div>
                      <div className="relative aspect-[3/2] w-full overflow-hidden">
                        <Image
                          src={y.image}
                          alt={y.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 500px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
