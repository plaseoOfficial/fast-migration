"use client";

import Image from "next/image";
import { useState } from "react";

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
  const last = years.length - 1;
  const current = years[active];
  const progress = last > 0 ? (active / last) * 100 : 0;

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

        {/* Year selector with progress line */}
        <div className="relative mt-14 lg:mt-[72px]">
          {/* Base track */}
          <div
            className="absolute left-0 right-0 top-[26px] h-[7px] rounded-full"
            style={{ backgroundColor: "rgb(243,243,243)" }}
            aria-hidden="true"
          />
          {/* Filled progress */}
          <div
            className="absolute left-0 top-[26px] h-[7px] rounded-full transition-[width] duration-300 ease-out"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, rgb(237,168,33) 0%, rgb(245,196,90) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="relative flex items-start justify-between">
            {years.map((y, i) => {
              const isActive = i === active;
              return (
                <button
                  key={y.year}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  aria-label={`Jahr ${y.year} anzeigen`}
                  className="group flex flex-col items-center focus:outline-none"
                >
                  <span
                    className="mb-2 text-[12px] font-medium tabular-nums transition-colors sm:text-[14px]"
                    style={{ color: isActive ? "rgb(61,61,61)" : "rgb(102,102,102)" }}
                  >
                    {y.year}
                  </span>
                  {/* Marker on the track */}
                  {isActive ? (
                    <span
                      className="flex h-[22px] w-[22px] items-center justify-center rounded-full"
                      style={{ border: `3px solid ${YELLOW}`, backgroundColor: CARD_BG }}
                    >
                      <span
                        className="h-[6px] w-[6px] rounded-full"
                        style={{ backgroundColor: YELLOW }}
                      />
                    </span>
                  ) : (
                    <span
                      className="mt-[5px] h-[12px] w-[2px] transition-colors group-hover:bg-[rgb(237,168,33)]"
                      style={{ backgroundColor: "rgb(170,170,170)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active year card */}
        <div
          className="mt-12 grid grid-cols-1 items-stretch gap-8 border p-8 lg:mt-[60px] lg:grid-cols-2 lg:gap-12 lg:p-12"
          style={{ backgroundColor: CARD_BG, borderColor: "rgba(61,61,61,0.25)" }}
        >
          <div className="flex flex-col justify-center">
            <h3
              className="font-medium"
              style={{
                fontSize: "clamp(28px, 3.2vw, 40px)",
                lineHeight: "1.2",
                letterSpacing: "-1.5px",
                color: "rgb(23,33,33)",
              }}
            >
              {current.title}
            </h3>
            <p
              className="mt-5 max-w-[460px]"
              style={{ fontSize: "16px", lineHeight: "26px", color: "rgb(61,61,61)" }}
            >
              {current.body}
            </p>
          </div>
          <div className="relative aspect-[3/2] w-full overflow-hidden">
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
