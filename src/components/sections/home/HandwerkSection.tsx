"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import type { CounterStat, TabPanel } from "@/types";
import { cn } from "@/lib/utils";

interface HandwerkSectionProps {
  eyebrow: string;
  headingLines: string[];
  stats: CounterStat[];
  tabs: TabPanel[];
}

export function HandwerkSection({ eyebrow, headingLines, stats, tabs }: HandwerkSectionProps) {
  const [active, setActive] = useState(0);
  const panel = tabs[active];

  return (
    <section
      id="ueber-uns"
      className="fast-section w-full"
      style={{ backgroundColor: "rgba(203, 191, 181, 0.59)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14 items-end">
          <div>
            <p className="fast-eyebrow mb-3">{eyebrow}</p>
            <h2
              style={{
                fontSize: "clamp(28px, 2.8vw, 37px)",
                lineHeight: "1.3",
                letterSpacing: "-1px",
                fontWeight: 500,
                color: "rgb(61,61,61)",
              }}
            >
              {headingLines.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6 lg:gap-10">
            {stats.map((s) => (
              <div key={s.label}>
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
                  {s.value}
                  <span style={{ color: "rgb(237,168,33)" }}>{s.suffix ?? "+"}</span>
                </div>
                <p className="fast-body mt-3" style={{ fontSize: 14, lineHeight: "23.8px" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tab triggers */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((t, i) => (
            <button
              key={t.title}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "px-5 py-2.5 rounded-full transition-colors",
                active === i
                  ? "bg-[rgb(61,61,61)] text-white"
                  : "bg-white/60 text-[rgb(61,61,61)] hover:bg-white"
              )}
              style={{
                fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {t.title}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 relative min-h-[360px] rounded-md overflow-hidden">
            <Image
              key={panel.background}
              src={panel.background}
              alt={panel.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black/20" />
            <h3
              className="absolute bottom-6 left-6 right-6 text-white"
              style={{
                fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
                fontSize: "clamp(24px, 2.5vw, 32px)",
                fontWeight: 500,
                lineHeight: 1,
              }}
            >
              {panel.title}
            </h3>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-5">
            {panel.cards.map((card) => (
              <div
                key={card.title}
                className="bg-white/70 backdrop-blur-sm rounded-md p-6 flex flex-col gap-3"
              >
                <Image src={card.icon} alt="" width={44} height={44} className="h-11 w-11" />
                <h4
                  style={{
                    fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
                    fontSize: 18,
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "rgb(61,61,61)",
                  }}
                >
                  {card.title}
                </h4>
                <p
                  className="fast-body"
                  style={{ fontSize: 14, lineHeight: "23.8px" }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
