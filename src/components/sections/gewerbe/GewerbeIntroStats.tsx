"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

function useCountUp(target: number, duration: number) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const rafRef = useRef<number | null>(null);

  const start = () => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { value, start };
}

interface GewerbeIntroStatsProps {
  since: string;
  sinceSub: string;
  heading: string;
  introBefore: string;
  introBold: string;
  introAfter: string;
  bandImage: string;
  bandAlt: string;
  col1Title: string;
  col1Body: string;
  col1CtaLabel: string;
  col1CtaHref: string;
  col2Title: string;
  col2Body: string;
  counterTarget: number;
  counterDuration: number;
  counterUnit: string;
  counterPlus: string;
  col3Title: string;
  col3Body: string;
  col3CtaLabel: string;
  col3CtaHref: string;
}

export function GewerbeIntroStats({
  since,
  sinceSub,
  heading,
  introBefore,
  introBold,
  introAfter,
  bandImage,
  bandAlt,
  col1Title,
  col1Body,
  col1CtaLabel,
  col1CtaHref,
  col2Title,
  col2Body,
  counterTarget,
  counterDuration,
  counterUnit,
  counterPlus,
  col3Title,
  col3Body,
  col3CtaLabel,
  col3CtaHref,
}: GewerbeIntroStatsProps) {
  const counterRef = useRef<HTMLDivElement>(null);
  const { value, start } = useCountUp(counterTarget, counterDuration);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [start]);

  return (
    <section
      className="pt-12 lg:pt-[57px] pb-8"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">

        {/* Row A — 3 columns */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.2fr] gap-10 items-start">

          {/* Col 1: seit 1996 eyebrow */}
          <div>
            <p
              style={{
                fontSize: "30px",
                lineHeight: "30px",
                fontWeight: 500,
                color: "rgba(117,117,117,0.5)",
                margin: 0,
              }}
            >
              {since}
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(117,117,117,0.5)",
                marginTop: "6px",
                marginBottom: 0,
              }}
            >
              {sinceSub}
            </p>
          </div>

          {/* Col 2: big H2 */}
          <h2
            className="text-[26px] leading-[1.15] sm:text-[34px] sm:leading-[1.05] lg:text-[40px] lg:leading-[44px] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] max-lg:break-words max-lg:hyphens-auto"
            lang="de"
            style={{
              fontWeight: 500,
              color: "rgb(0,0,0)",
              margin: 0,
            }}
          >
            {heading}
          </h2>

          {/* Col 3: intro paragraph */}
          <p
            style={{
              fontSize: "18px",
              lineHeight: "28.8px",
              fontWeight: 500,
              color: "rgb(102,102,102)",
              margin: 0,
            }}
          >
            {introBefore}{" "}
            <strong style={{ color: "rgb(23,33,33)", fontWeight: 700 }}>
              {introBold}
            </strong>
            {" "}{introAfter}
          </p>
        </Reveal>

        {/* Row B — full-width image band */}
        <div className="mt-9 h-[260px] lg:h-[430px] w-full overflow-hidden">
          <Image
            src={bandImage}
            alt={bandAlt}
            width={1224}
            height={430}
            className="h-full w-full object-cover"
            style={{ borderRadius: 0 }}
          />
        </div>

        {/* Row C — 3 columns */}
        <Reveal className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Col 1: Warum Maßarbeit zählt */}
          <div>
            <h3
              style={{
                fontSize: "20px",
                lineHeight: "20px",
                fontWeight: 500,
                color: "rgb(51,51,51)",
                margin: 0,
              }}
            >
              {col1Title}
            </h3>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "31.5px",
                fontWeight: 500,
                color: "rgb(102,102,102)",
                marginTop: "16px",
                marginBottom: 0,
              }}
            >
              {col1Body}
            </p>
            <Link
              href={col1CtaHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "20px",
                fontWeight: 500,
                color: "rgb(0,0,0)",
                textDecoration: "underline",
                marginTop: "24px",
              }}
            >
              {col1CtaLabel}
              <ArrowRightIcon className="inline-block h-[1em] w-auto ml-2 align-middle" />
            </Link>
          </div>

          {/* Col 2: Planung bis Montage */}
          <div>
            <h3
              style={{
                fontSize: "20px",
                lineHeight: "20px",
                fontWeight: 500,
                color: "rgb(51,51,51)",
                margin: 0,
              }}
            >
              {col2Title}
            </h3>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "31.5px",
                fontWeight: 500,
                color: "rgb(102,102,102)",
                marginTop: "16px",
                marginBottom: 0,
              }}
            >
              {col2Body}
            </p>
          </div>

          {/* Col 3: count-up counter + gefertigte Einzelteile */}
          <div ref={counterRef}>
            <div
              className="text-[40px] leading-[40px] lg:text-[70px] lg:leading-[70px]"
              style={{
                fontWeight: 500,
                color: "rgb(0,0,0)",
              }}
            >
              <span>{value}</span>{counterUnit}<span style={{ color: "rgb(237,168,33)" }}>{counterPlus}</span>
            </div>
            <h3
              style={{
                fontSize: "31px",
                lineHeight: "31px",
                fontWeight: 600,
                letterSpacing: "-1px",
                color: "rgb(51,51,51)",
                marginTop: "8px",
                marginBottom: 0,
              }}
            >
              {col3Title}
            </h3>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "31.5px",
                fontWeight: 500,
                color: "rgb(102,102,102)",
                marginTop: "16px",
                marginBottom: 0,
              }}
            >
              {col3Body}
            </p>
            <Link
              href={col3CtaHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "20px",
                fontWeight: 500,
                color: "rgb(0,0,0)",
                textDecoration: "underline",
                marginTop: "24px",
              }}
            >
              {col3CtaLabel}
              <ArrowRightIcon className="inline-block h-[1em] w-auto ml-2 align-middle" />
            </Link>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
