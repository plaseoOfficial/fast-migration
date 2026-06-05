"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const URBANIST: React.CSSProperties = {
  fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
};

const HOURS = [
  { day: "Montag", time: "6:00 - 17:00 Uhr" },
  { day: "Dienstag", time: "6:00 - 17:00 Uhr" },
  { day: "Mittwoch", time: "6:00 - 17:00 Uhr" },
  { day: "Donnerstag", time: "6:00 - 17:00 Uhr" },
  { day: "Freitag", time: "6:00 - 17:00 Uhr" },
  { day: "Samstag", time: "Geschlossen" },
  { day: "Sonntag", time: "Geschlossen" },
] as const;

export function KontaktPanel() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className="pt-0 pb-14"
      style={{ backgroundColor: "rgba(203,191,181,0.59)", ...URBANIST }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        {/* Dark card */}
        <div
          className="px-6 py-10 lg:px-16 lg:py-16"
          style={{ backgroundColor: "rgb(61,61,61)" }}
        >
          {/* Centered header */}
          <div className="text-center mb-10">
            <p
              className="uppercase tracking-[2px] text-[14px] font-medium mb-2"
              style={{ color: "rgba(255,255,255,0.5)", ...URBANIST }}
            >
              BEREIT WENN SIE ES SIND
            </p>
            <h2
              className="font-medium text-[34px] leading-[1.05] lg:text-[60px] lg:leading-[60px] mt-2"
              style={{ color: "rgb(255,255,255)", letterSpacing: "-2px", ...URBANIST }}
            >
              Support &amp; Kontakt
            </h2>
          </div>

          {/* 2-col body */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">

            {/* Left — contact form */}
            <div>
              {submitted ? (
                <div className="flex items-center justify-center py-16">
                  <p
                    className="text-center text-[20px] font-medium"
                    style={{ color: "rgb(255,255,255)", ...URBANIST }}
                  >
                    Danke! Wir melden uns.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Vorname */}
                  <div className="mb-5">
                    <label
                      htmlFor="vorname"
                      className="block text-[14px] font-medium mb-2"
                      style={{ color: "rgb(255,255,255)", ...URBANIST }}
                    >
                      Vorname
                    </label>
                    <input
                      id="vorname"
                      type="text"
                      placeholder="Vorname"
                      className={cn(
                        "w-full border-0 outline-none text-[16px] lg:text-[18px] p-3 lg:py-5 lg:px-4 font-normal",
                        "focus:ring-0 focus:outline-none"
                      )}
                      style={{
                        backgroundColor: "rgb(247,244,240)",
                        color: "rgb(61,61,61)",
                        borderRadius: 0,
                        ...URBANIST,
                      }}
                    />
                  </div>

                  {/* Nachname */}
                  <div className="mb-5">
                    <label
                      htmlFor="nachname"
                      className="block text-[14px] font-medium mb-2"
                      style={{ color: "rgb(255,255,255)", ...URBANIST }}
                    >
                      Nachname
                    </label>
                    <input
                      id="nachname"
                      type="text"
                      placeholder="Nachname"
                      className="w-full border-0 outline-none text-[16px] lg:text-[18px] p-3 lg:py-5 lg:px-4 focus:ring-0 focus:outline-none"
                      style={{
                        backgroundColor: "rgb(247,244,240)",
                        color: "rgb(61,61,61)",
                        borderRadius: 0,
                        ...URBANIST,
                      }}
                    />
                  </div>

                  {/* Email + Telefon row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[14px] font-medium mb-2"
                        style={{ color: "rgb(255,255,255)", ...URBANIST }}
                      >
                        Email Adresse
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Email Adresse"
                        className="w-full border-0 outline-none text-[16px] lg:text-[18px] p-3 lg:py-5 lg:px-4 focus:ring-0 focus:outline-none"
                        style={{
                          backgroundColor: "rgb(247,244,240)",
                          color: "rgb(61,61,61)",
                          borderRadius: 0,
                          ...URBANIST,
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefon"
                        className="block text-[14px] font-medium mb-2"
                        style={{ color: "rgb(255,255,255)", ...URBANIST }}
                      >
                        Telefonnummer
                      </label>
                      <input
                        id="telefon"
                        type="tel"
                        placeholder="Telefonnummer"
                        className="w-full border-0 outline-none text-[16px] lg:text-[18px] p-3 lg:py-5 lg:px-4 focus:ring-0 focus:outline-none"
                        style={{
                          backgroundColor: "rgb(247,244,240)",
                          color: "rgb(61,61,61)",
                          borderRadius: 0,
                          ...URBANIST,
                        }}
                      />
                    </div>
                  </div>

                  {/* Nachricht */}
                  <div className="mb-0">
                    <label
                      htmlFor="nachricht"
                      className="block text-[14px] font-medium mb-2"
                      style={{ color: "rgb(255,255,255)", ...URBANIST }}
                    >
                      Nachricht
                    </label>
                    <textarea
                      id="nachricht"
                      placeholder="Nachricht"
                      rows={5}
                      className="w-full border-0 outline-none text-[16px] lg:text-[18px] p-3 lg:py-5 lg:px-4 resize-none focus:ring-0 focus:outline-none"
                      style={{
                        backgroundColor: "rgb(247,244,240)",
                        color: "rgb(61,61,61)",
                        borderRadius: 0,
                        ...URBANIST,
                      }}
                    />
                  </div>

                  {/* Senden button */}
                  <button
                    type="submit"
                    className={cn(
                      "w-full mt-6 text-[20px] font-medium transition-colors duration-200",
                      "hover:text-[rgb(249,178,51)]"
                    )}
                    style={{
                      backgroundColor: "rgb(249,178,51)",
                      color: "rgb(61,61,61)",
                      borderRadius: "100px",
                      padding: "18px 20px",
                      border: "none",
                      cursor: "pointer",
                      ...URBANIST,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgb(61,61,61)";
                      (e.currentTarget as HTMLButtonElement).style.color = "rgb(249,178,51)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgb(249,178,51)";
                      (e.currentTarget as HTMLButtonElement).style.color = "rgb(61,61,61)";
                    }}
                  >
                    Senden
                  </button>
                </form>
              )}
            </div>

            {/* Right — info panel over image */}
            <div className="relative min-h-[280px] lg:min-h-[420px] isolate">
              <Image
                src="/images/2025/11/DSC07156-scaled.jpg"
                alt="Beratungsgespräch"
                fill
                className="object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/55" />
              {/* Content */}
              <div
                className="relative z-10 p-8 lg:p-10 text-white"
                style={URBANIST}
              >
                <h3
                  className="text-[24px] leading-[24px] font-medium"
                  style={{ color: "rgb(255,255,255)", ...URBANIST }}
                >
                  Öffnungszeiten
                </h3>
                <div className="border-b border-white/30 mt-3 mb-4" />

                {HOURS.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between py-2 text-[18px]"
                    style={{ color: "rgb(255,255,255)", ...URBANIST }}
                  >
                    <span>{day}</span>
                    <span>{time}</span>
                  </div>
                ))}

                {/* Phone row */}
                <div
                  className="flex justify-between items-center mt-6 text-[18px]"
                  style={{ color: "rgb(255,255,255)", ...URBANIST }}
                >
                  <span>Jetzt anrufen</span>
                  <a
                    href="tel:057719138312"
                    className="hover:underline"
                    style={{ color: "rgb(255,255,255)", ...URBANIST }}
                  >
                    05771 9138312
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
