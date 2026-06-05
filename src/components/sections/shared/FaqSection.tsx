"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  eyebrow?: string;
  heading: string;
  items: FaqItem[];
  ctaHref?: string;
  ctaLabel?: string;
}

export function FaqSection({
  eyebrow = "WAS WIR OFT GEFRAGT WERDEN",
  heading,
  items,
  ctaHref = "/faq/",
  ctaLabel = "Zum FAQ",
}: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(index: number) {
    setOpen((prev) => (prev === index ? null : index));
  }

  return (
    <section
      className="py-14 lg:py-[64px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left column */}
          <div>
            {/* Eyebrow */}
            <p
              className="uppercase"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "2px",
                color: "rgb(61,61,61)",
              }}
            >
              {eyebrow}
            </p>

            {/* H2 */}
            <h2
              className="mt-3 text-[28px] leading-[1.1] sm:text-[36px] sm:leading-[1.05] lg:text-[56px] lg:leading-[1.0] max-lg:break-words max-lg:hyphens-auto"
              lang="de"
              style={{
                fontWeight: 500,
                color: "rgb(0,0,0)",
                letterSpacing: "-1px",
              }}
            >
              {heading}
            </h2>

            {/* Arrow link */}
            <Link
              href={ctaHref}
              className="mt-8 inline-flex items-center underline"
              style={{
                fontSize: "20px",
                fontWeight: 500,
                color: "rgb(0,0,0)",
              }}
            >
              {ctaLabel}
              <ArrowRightIcon className="inline-block h-[1em] w-auto ml-2 align-middle" />
            </Link>
          </div>

          {/* Right column — accordion */}
          <div>
            {items.map((item, index) => {
              const isOpen = open === index;
              return (
                <div
                  key={index}
                  className="mb-[15px]"
                  style={{ backgroundColor: "rgb(250,250,250)" }}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between text-left p-5 sm:p-[30px] sm:pr-[50px]"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="text-[16px] sm:text-[18px] lg:text-[20px]"
                      style={{
                        fontWeight: 500,
                        color: "rgb(0,0,0)",
                        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
                      }}
                    >
                      {item.question}
                    </span>
                    <ArrowRightIcon
                      className={cn(
                        "h-5 w-5 flex-shrink-0 ml-4 transition-transform duration-300",
                        isOpen ? "rotate-90" : "rotate-0"
                      )}
                      style={{ color: "rgb(61,61,61)" }}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-[30px] sm:pb-[30px]">
                      <p
                        style={{
                          fontSize: "16px",
                          lineHeight: "25px",
                          fontWeight: 500,
                          color: "rgb(102,102,102)",
                          fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
