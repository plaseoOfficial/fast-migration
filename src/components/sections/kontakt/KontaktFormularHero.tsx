"use client";

import { useState, useTransition } from "react";
import { track } from "@vercel/analytics";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { sendeKontaktAnfrage } from "@/lib/actions/kontakt";
import { cn } from "@/lib/utils";

const URBANIST: React.CSSProperties = {
  fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
};

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface KontaktFormularHeroProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
  bgImage: string;
  /**
   * Top-to-bottom scrim behind the transparent header, for white-on-photo
   * readability. Override via a full CSS `background` value.
   */
  headerScrim?: string;
}

const DEFAULT_HEADER_SCRIM =
  "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0) 100%)";

const INPUT_STYLE: React.CSSProperties = {
  backgroundColor: "rgb(247,244,240)",
  color: "rgb(61,61,61)",
  padding: "14px 16px",
  borderRadius: 0,
  ...URBANIST,
};

const LABEL_CLASS = "block text-[13px] font-medium mb-1.5";
const INPUT_CLASS =
  "w-full border-0 outline-none text-[16px] font-normal focus:ring-0 focus:outline-none";

export function KontaktFormularHero({ title, breadcrumb, bgImage, headerScrim }: KontaktFormularHeroProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setError(null);
    startTransition(async () => {
      const result = await sendeKontaktAnfrage(formData);
      if (result.ok) {
        setSubmitted(true);
        track("Kontaktformular gesendet", { seite: window.location.pathname });
      } else {
        const grund = result.error ?? "Senden fehlgeschlagen. Bitte versuchen Sie es erneut.";
        setError(grund);
        track("Kontaktformular Fehler", { grund });
      }
    });
  }

  return (
    <section
      className={cn(
        "relative isolate w-full overflow-hidden",
        "min-h-[100svh] flex items-center",
        "pt-[100px] sm:pt-[120px] lg:pt-[140px] pb-12 lg:pb-16"
      )}
      style={URBANIST}
    >
      {/* Background image */}
      <Image
        src={bgImage}
        alt={title}
        fill
        priority
        className="object-cover object-[50%_50%] z-0"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.32) 45%, rgba(0,0,0,0.08) 75%)",
        }}
        aria-hidden="true"
      />

      {/* Top scrim — keeps the transparent header (white logo + nav) readable
          over the photo. Tunable via the headerScrim prop. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[200px] lg:h-[280px]"
        style={{ background: headerScrim ?? DEFAULT_HEADER_SCRIM }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">

          {/* Left — heading + breadcrumb + quick contact */}
          <Reveal>
            <p
              className="uppercase tracking-[2px] text-[14px] font-medium mb-3"
              style={{ color: "rgba(255,255,255,0.6)", ...URBANIST }}
            >
              BEREIT WENN SIE ES SIND
            </p>
            <h1
              className="text-white font-medium text-[34px] leading-[1.1] sm:text-[44px] lg:text-[58px] lg:leading-[60px]"
              style={{ letterSpacing: "-2px", ...URBANIST }}
            >
              {title}
            </h1>

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mt-5 flex flex-wrap items-center gap-1"
            >
              {breadcrumb.map((item, index) => {
                const isLast = index === breadcrumb.length - 1;
                return (
                  <span key={index} className="flex items-center gap-1">
                    {index > 0 && (
                      <ChevronRightIcon className="h-3 w-auto opacity-60 text-white/70" />
                    )}
                    {isLast || !item.href ? (
                      <span className="text-[15px] leading-[26px] font-bold text-white">
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-[15px] leading-[26px] text-white/70 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </span>
                );
              })}
            </nav>

            {/* Quick contact row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href="tel:057719138312"
                className="text-[20px] font-medium text-white hover:text-[rgb(249,178,51)] transition-colors"
                style={URBANIST}
              >
                05771 9138312
              </a>
              <span className="text-[15px] text-white/60" style={URBANIST}>
                Mo&ndash;Fr&nbsp;&nbsp;6:00&ndash;17:00 Uhr
              </span>
            </div>
          </Reveal>

          {/* Right — form card */}
          <Reveal
            y={0}
            className="px-6 py-8 lg:px-10 lg:py-10"
            style={{ backgroundColor: "rgb(61,61,61)" }}
          >
            {submitted ? (
              <div className="flex items-center justify-center py-20">
                <p
                  className="text-center text-[20px] font-medium"
                  style={{ color: "rgb(255,255,255)", ...URBANIST }}
                >
                  Danke! Wir melden uns.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot — unsichtbar; füllen nur Bots aus. */}
                <input
                  type="text"
                  name="firma"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                {/* Vorname + Nachname row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="vorname" className={LABEL_CLASS} style={{ color: "rgb(255,255,255)", ...URBANIST }}>
                      Vorname
                    </label>
                    <input
                      id="vorname"
                      name="vorname"
                      type="text"
                      placeholder="Vorname"
                      className={INPUT_CLASS}
                      style={INPUT_STYLE}
                    />
                  </div>
                  <div>
                    <label htmlFor="nachname" className={LABEL_CLASS} style={{ color: "rgb(255,255,255)", ...URBANIST }}>
                      Nachname
                    </label>
                    <input
                      id="nachname"
                      name="nachname"
                      type="text"
                      placeholder="Nachname"
                      className={INPUT_CLASS}
                      style={INPUT_STYLE}
                    />
                  </div>
                </div>

                {/* Email + Telefon row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className={LABEL_CLASS} style={{ color: "rgb(255,255,255)", ...URBANIST }}>
                      Email Adresse
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Adresse"
                      className={INPUT_CLASS}
                      style={INPUT_STYLE}
                    />
                  </div>
                  <div>
                    <label htmlFor="telefon" className={LABEL_CLASS} style={{ color: "rgb(255,255,255)", ...URBANIST }}>
                      Telefonnummer
                    </label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      placeholder="Telefonnummer"
                      className={INPUT_CLASS}
                      style={INPUT_STYLE}
                    />
                  </div>
                </div>

                {/* Nachricht */}
                <div className="mb-0">
                  <label htmlFor="nachricht" className={LABEL_CLASS} style={{ color: "rgb(255,255,255)", ...URBANIST }}>
                    Nachricht
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    placeholder="Nachricht"
                    rows={4}
                    className={cn(INPUT_CLASS, "resize-none")}
                    style={INPUT_STYLE}
                  />
                </div>

                {/* Fehlermeldung */}
                {error && (
                  <p
                    role="alert"
                    className="mt-4 text-[15px] font-medium"
                    style={{ color: "rgb(249,178,51)", ...URBANIST }}
                  >
                    {error}
                  </p>
                )}

                {/* Senden button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full mt-6 text-[20px] font-medium transition-colors duration-200 disabled:opacity-70"
                  style={{
                    backgroundColor: "rgb(249,178,51)",
                    color: "rgb(61,61,61)",
                    borderRadius: "100px",
                    padding: "16px 20px",
                    border: "none",
                    cursor: isPending ? "default" : "pointer",
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
                  {isPending ? "Wird gesendet …" : "Senden"}
                </button>
              </form>
            )}
          </Reveal>

        </div>
      </div>
    </section>
  );
}
