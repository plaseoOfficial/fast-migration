"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Arbeiten Sie nur in Espelkamp?",
    answer:
      "Wir fertigen in Espelkamp, montieren im Umkreis von ca. 200 km und liefern deutschlandweit.",
  },
  {
    question: "Gibt es eine Garantie?",
    answer: "Ja, unsere Möbel nach Maß erhalten bis zu 5 Jahre Garantie.",
  },
  {
    question: "Sind Maßmöbel pflegeleicht?",
    answer: "Ja. Unsere Dekore und Materialien sind robust und leicht zu reinigen.",
  },
  {
    question: "Welche Möbel fertigen Sie?",
    answer:
      "Schränke und Regale, Sideboards, Kommoden, Dachschrägen-Lösungen, Kleiderschränke und mehr Stauraum.",
  },
  {
    question: "Wie läuft die Planung ab?",
    answer:
      "Mit Aufmaß-Service, digitalem Planen und klarer Abstimmung bis zur fertigen Maßanfertigung.",
  },
];

export function MnmFaq() {
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
              WAS WIR OFT GEFRAGT WERDEN
            </p>

            {/* H2 */}
            <h2
              className="mt-3 text-[36px] leading-[1.05] lg:text-[56px] lg:leading-[1.0]"
              style={{
                fontWeight: 500,
                color: "rgb(0,0,0)",
                letterSpacing: "-1px",
              }}
            >
              Häufige Fragen zu unseren Raumkonzepten
            </h2>

            {/* Arrow link */}
            <Link
              href="/faq/"
              className="mt-8 inline-flex items-center underline"
              style={{
                fontSize: "20px",
                fontWeight: 500,
                color: "rgb(0,0,0)",
              }}
            >
              Zum FAQ
              <ArrowRightIcon className="inline-block h-[1em] w-auto ml-2 align-middle" />
            </Link>
          </div>

          {/* Right column — accordion */}
          <div>
            {FAQ_ITEMS.map((item, index) => {
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
                    className="flex w-full items-center justify-between text-left"
                    style={{ padding: "30px 50px 30px 30px" }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontSize: "20px",
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
                    <div style={{ padding: "0 30px 30px 30px" }}>
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
