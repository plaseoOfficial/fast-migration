"use client";

import { useState } from "react";
import Link from "next/link";
import type { FaqItem } from "@/types";
import { PlusIcon, MinusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

interface FaqSectionProps {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function FaqSection({ eyebrow, heading, items, ctaLabel, ctaHref }: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="fast-section w-full"
      style={{ backgroundColor: "rgba(203,191,181,0.59)" }}
    >
      <div className="mx-auto max-w-[920px] px-6">
        <p className="fast-eyebrow mb-3 text-center">{eyebrow}</p>
        <h2
          className="mb-10 text-center"
          style={{
            fontSize: "clamp(36px, 5vw, 65px)",
            lineHeight: 1,
            letterSpacing: "-2px",
            fontWeight: 500,
            color: "rgb(61,61,61)",
          }}
        >
          {heading}
        </h2>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => {
            const expanded = open === i;
            return (
              <Reveal
                key={item.q}
                delay={i * 60}
                className={cn(
                  "rounded-md border transition-colors",
                  expanded ? "border-[rgb(237,168,33)] bg-white" : "border-black/10 bg-white"
                )}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(expanded ? null : i)}
                  aria-expanded={expanded}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
                      fontSize: 18,
                      fontWeight: 500,
                      lineHeight: "23.4px",
                      color: "rgb(61,61,61)",
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full"
                    style={{
                      backgroundColor: expanded ? "rgb(237,168,33)" : "rgba(0,0,0,0.06)",
                      color: "rgb(61,61,61)",
                    }}
                  >
                    {expanded ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                  </span>
                </button>
                {/* Height-eased reveal: the 0fr→1fr grid row animates open/
                    closed smoothly. Answer stays in the DOM (good for SEO),
                    clipped by overflow-hidden while collapsed. */}
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div
                      className="px-6 pb-6 pt-0 fast-body"
                      style={{ fontSize: 14, lineHeight: "23.8px" }}
                    >
                      {item.a}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {ctaLabel && ctaHref ? (
          <div className="mt-10 text-center">
            <Link href={ctaHref} className="fast-btn-pill">
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
