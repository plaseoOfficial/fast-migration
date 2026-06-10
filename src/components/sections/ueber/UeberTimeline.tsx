"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

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
const CARD_BG = "#ffffff";
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
      <div className="mx-auto w-full max-w-[1280px] px-6 py-[48px] lg:py-[84px]">
        {/* Heading */}
        <h2
          className="mx-auto max-w-[1000px] text-center font-medium"
          style={{
            fontSize: "clamp(45px, 5vw, 65px)",
            lineHeight: "1.1",
            letterSpacing: "0",
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
          style={{ fontSize: "16px", lineHeight: "1.7", color: "rgb(61,61,61)" }}
        >
          {intro}
        </p>

        {/* Vertical timeline */}
        <div ref={trackRef} className="relative mt-14 lg:mt-[72px]">
          {/* Base rail — left on mobile, centered on desktop */}
          <div
            className="absolute top-0 bottom-0 w-[3px] rounded-full left-[20px] -translate-x-1/2 lg:left-1/2"
            style={{ backgroundColor: "rgb(243,243,243)" }}
            aria-hidden="true"
          />
          {/* Filled progress */}
          <div
            className="absolute top-0 w-[3px] rounded-full left-[20px] -translate-x-1/2 transition-[height] duration-500 ease-out lg:left-1/2"
            style={{
              height: `${fillHeight}px`,
              background: "rgb(237,168,33)",
            }}
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-16 lg:gap-28">
            {years.map((y, i) => {
              const isActive = i === active;
              const isPast = i <= active;
              // Desktop: even milestones sit left of the rail, odd ones right.
              const cardLeft = i % 2 === 0;
              return (
                <li
                  key={y.year}
                  data-index={i}
                  ref={(node) => {
                    itemRefs.current[i] = node;
                  }}
                  className="relative pl-[44px] lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12 lg:pl-0"
                >
                  {/* Horizontal branch from the rail to the card (desktop) */}
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 hidden h-[2px] -translate-y-1/2 lg:block"
                    style={{
                      width: "24px",
                      left: cardLeft ? "calc(50% - 24px)" : "50%",
                      backgroundColor: isPast ? YELLOW : "rgb(243,243,243)",
                    }}
                  />

                  {/* Marker on the rail */}
                  <span
                    ref={(node) => {
                      markerRefs.current[i] = node;
                    }}
                    className="absolute top-[6px] left-[20px] z-10 flex -translate-x-1/2 items-center justify-center rounded-full transition-all duration-300 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2"
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

                  {/* Big year — desktop only, opposite side of the card */}
                  <div
                    className={cn(
                      "hidden lg:flex lg:items-center",
                      cardLeft
                        ? "lg:order-2 lg:justify-start lg:pl-12"
                        : "lg:order-1 lg:justify-end lg:pr-12"
                    )}
                  >
                    <span
                      className="font-medium tabular-nums transition-colors"
                      style={{
                        fontSize: "clamp(37px, 3.5vw, 45px)",
                        lineHeight: "1",
                        letterSpacing: "-1px",
                        color: isActive ? "rgb(61,61,61)" : "rgb(102,102,102)",
                      }}
                    >
                      {y.year}
                    </span>
                  </div>

                  {/* Content card */}
                  <Reveal
                    y={0}
                    delay={i * 80}
                    className={cn(
                      "border p-7 transition-opacity duration-300 lg:p-10",
                      cardLeft ? "lg:order-1" : "lg:order-2"
                    )}
                    style={{
                      backgroundColor: CARD_BG,
                      borderColor: "rgba(0,0,0,0.10)",
                      opacity: isActive ? 1 : 0.62,
                    }}
                  >
                    {/* Year (mobile, inside card) */}
                    <span
                      className="mb-2 block font-medium tabular-nums lg:hidden"
                      style={{
                        fontSize: "22px",
                        lineHeight: "1",
                        letterSpacing: "0",
                        color: YELLOW,
                      }}
                    >
                      {y.year}
                    </span>
                    {/* Image on top, full card width — reads large and keeps a
                        consistent frame across mixed portrait/landscape sources. */}
                    <div className="relative mb-6 aspect-[3/2] w-full overflow-hidden lg:mb-7">
                      <Image
                        src={y.image}
                        alt={y.title}
                        fill
                        sizes="(max-width: 1024px) 90vw, 600px"
                        className="object-cover object-top"
                      />
                    </div>
                    <h3
                      className="font-medium"
                      style={{
                        fontSize: "22px",
                        lineHeight: "1.2",
                        letterSpacing: "-1px",
                        color: "rgb(61,61,61)",
                      }}
                    >
                      {y.title}
                    </h3>
                    <p
                      className="mt-4"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                        color: "rgb(61,61,61)",
                      }}
                    >
                      {y.body}
                    </p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
