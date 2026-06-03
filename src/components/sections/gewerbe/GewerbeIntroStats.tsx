"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

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

export function GewerbeIntroStats() {
  const counterRef = useRef<HTMLDivElement>(null);
  const { value, start } = useCountUp(72, 2000);

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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.2fr] gap-10 items-start">

          {/* Col 1: seit 1996 eyebrow */}
          <div>
            <h4
              style={{
                fontSize: "30px",
                lineHeight: "30px",
                fontWeight: 500,
                color: "rgba(117,117,117,0.5)",
                margin: 0,
              }}
            >
              seit 1996
            </h4>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(117,117,117,0.5)",
                marginTop: "6px",
                marginBottom: 0,
              }}
            >
              Geben wir unser Bestes.
            </p>
          </div>

          {/* Col 2: big H2 */}
          <h2
            className="text-[34px] leading-[1.05] lg:text-[66px] lg:leading-[66px]"
            style={{
              fontWeight: 500,
              letterSpacing: "-3px",
              color: "rgb(0,0,0)",
              margin: 0,
            }}
          >
            Individuelle Möbel für Gewerbe &amp; Objektbau
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
            Fast Systemmöbel aus Espelkamp begleitet Sie genau in dieser
            entscheidenden{" "}
            <strong style={{ color: "rgb(23,33,33)", fontWeight: 700 }}>
              Bauphase
            </strong>
            {" "}– mit präziser Planung, ehrlicher Beratung und handwerklicher
            Umsetzung, die jeden Quadratmeter nutzt.
          </p>
        </div>

        {/* Row B — full-width image band */}
        <div className="mt-9 h-[260px] lg:h-[430px] w-full overflow-hidden">
          <Image
            src="/images/2025/11/DSC_9934.jpg"
            alt="Gewerbemöbel – Maßarbeit für Gewerbe und Objektbau"
            width={1224}
            height={430}
            className="h-full w-full object-cover"
            style={{ borderRadius: 0 }}
          />
        </div>

        {/* Row C — 3 columns */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

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
              Warum Maßarbeit zählt
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
              In Gewerberäumen entscheidet Qualität über Effizienz.
              Standardlösungen funktionieren selten. Wir entwickeln Möbel, die
              exakt zu Ihrem Ablauf, Ihrem Raum und Ihrem Design passen –
              millimetergenau gefertigt und für den täglichen Einsatz optimiert.
            </p>
            <Link
              href="/kontakt"
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
              Jetzt individuelle Anfrage stellen
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
              Planung bis Montage
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
              Wir begleiten Sie vollständig: Analyse vor Ort, technische
              Planung, Fertigung auf modernsten Homag-Systemen und saubere
              Montage. Für Sie bedeutet das: Ein Ansprechpartner, klare
              Prozesse, verlässliche Termine.
            </p>
          </div>

          {/* Col 3: count-up counter + gefertigte Einzelteile */}
          <div ref={counterRef}>
            <div
              style={{
                fontSize: "70px",
                lineHeight: "70px",
                fontWeight: 500,
                color: "rgb(0,0,0)",
              }}
            >
              <span>{value}</span>K<span style={{ color: "rgb(237,168,33)" }}>+</span>
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
              gefertigte Einzelteile
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
              Unsere Fertigung kombiniert neueste CNC-Technik mit handwerklicher
              Perfektion. So entstehen Systemmöbel, die langlebig, funktional
              und ästhetisch überzeugen – in jedem Projekt, jedem Detail.
            </p>
            <Link
              href="/project/mixmarkt/"
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
              Entdecken Sie das Gefühl von Qualität
              <ArrowRightIcon className="inline-block h-[1em] w-auto ml-2 align-middle" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
