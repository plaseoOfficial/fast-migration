"use client";

/**
 * Anfrage-Section für Leistungsseiten: kurzer Kontaktblock + echtes Formular
 * direkt auf der Seite, statt nur eines CTA-Links auf /kontakt/.
 *
 * WARUM: Im Ladenbau-Wettbewerbsfeld führt jede Seite in den Top 10 die
 * Kontaktaufnahme auf der Leistungsseite selbst (Formular und/oder NAP-Block);
 * der Erstplatzierte (schreinerei-tomasi.de) besteht praktisch nur aus
 * Bildergalerie + Adresse/Öffnungszeiten/Telefon. Gemessen 2026-07-31.
 *
 * Nutzt dieselbe Server-Action wie das Kontaktseiten-Formular
 * (`sendeKontaktAnfrage`) inkl. Honeypot. Das Feld `seite` kennzeichnet die
 * Herkunft in der Mail, damit Gewerbe-Anfragen erkennbar bleiben.
 *
 * ACHTUNG: Nicht mit `KontaktPanel` verwechseln — dessen Formular ist eine
 * reine Library-Demo ohne Versand (siehe Registry) und darf nicht live
 * eingesetzt werden.
 *
 * Styling folgt 1:1 den Konstanten aus KontaktFormularHero (Urbanist,
 * INPUT_STYLE, dunkle Karte rgb(61,61,61)) — keine neuen Design-Tokens.
 */

import { useState, useTransition } from "react";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/Reveal";
import { sendeKontaktAnfrage } from "@/lib/actions/kontakt";
import { cn } from "@/lib/utils";

const URBANIST: React.CSSProperties = {
  fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
};

const INPUT_STYLE: React.CSSProperties = {
  backgroundColor: "rgb(247,244,240)",
  color: "rgb(61,61,61)",
  padding: "14px 16px",
  borderRadius: 0,
  ...URBANIST,
};

const LABEL_CLASS = "block text-[13px] font-medium mb-1.5";
const INPUT_CLASS =
  "w-full border-0 outline-none text-[16px] font-normal focus:ring-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(249,178,51)]";

export interface LeistungAnfrageProps {
  /** Kleine Zeile über der Überschrift. */
  eyebrow?: string;
  /** Section-Überschrift (H2). */
  heading: string;
  /** Ein bis zwei Sätze, was nach dem Absenden passiert. */
  intro: string;
  /** Herkunft für die Benachrichtigungsmail, z. B. "Ladenbau". */
  seite: string;
}

export function LeistungAnfrage({ eyebrow, heading, intro, seite }: LeistungAnfrageProps) {
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
        // Honeypot-Treffer verschickt keine Mail — dann auch keine Conversion zählen.
        if (!result.spam) {
          trackEvent("Kontaktformular gesendet", { seite: window.location.pathname });
        }
      } else {
        const grund = result.error ?? "Senden fehlgeschlagen. Bitte versuchen Sie es erneut.";
        setError(grund);
        trackEvent("Kontaktformular Fehler", { grund });
      }
    });
  }

  return (
    <section
      className="py-14 lg:py-20"
      style={{ backgroundColor: "rgba(203,191,181,0.59)", ...URBANIST }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
          {/* Links — Ansprache + direkter Draht */}
          <Reveal>
            {eyebrow ? (
              <p
                className="uppercase tracking-[2px] text-[14px] font-medium mb-3"
                style={{ color: "rgba(61,61,61,0.6)", ...URBANIST }}
              >
                {eyebrow}
              </p>
            ) : null}
            <h2
              className="text-[28px] leading-[1.15] sm:text-[38px] sm:leading-[1.1] font-medium tracking-[-1px]"
              style={{ color: "rgb(61,61,61)", ...URBANIST }}
            >
              {heading}
            </h2>
            <p
              className="mt-4 text-[17px] leading-[1.6]"
              style={{ color: "rgba(61,61,61,0.8)", ...URBANIST }}
            >
              {intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href="tel:+4957719138312"
                onClick={() => trackEvent("Anruf geklickt", { seite })}
                className="text-[20px] font-medium hover:text-[rgb(249,178,51)] transition-colors"
                style={{ color: "rgb(61,61,61)", ...URBANIST }}
              >
                05771 9138312
              </a>
              <span className="text-[15px]" style={{ color: "rgba(61,61,61,0.65)", ...URBANIST }}>
                Mo&ndash;Fr&nbsp;&nbsp;6:00&ndash;17:00 Uhr
              </span>
            </div>
            <address
              className="mt-3 not-italic text-[15px] leading-[1.6]"
              style={{ color: "rgba(61,61,61,0.65)", ...URBANIST }}
            >
              Fast Systemmöbel, Alte Waldstraße 32, 32339 Espelkamp
            </address>
          </Reveal>

          {/* Rechts — Formularkarte */}
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
                {/* Herkunft der Anfrage für die Benachrichtigungsmail. */}
                <input type="hidden" name="seite" value={seite} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="la-vorname" className={LABEL_CLASS} style={{ color: "rgb(255,255,255)", ...URBANIST }}>
                      Vorname
                    </label>
                    <input
                      id="la-vorname"
                      name="vorname"
                      type="text"
                      placeholder="Vorname"
                      autoComplete="given-name"
                      className={INPUT_CLASS}
                      style={INPUT_STYLE}
                    />
                  </div>
                  <div>
                    <label htmlFor="la-nachname" className={LABEL_CLASS} style={{ color: "rgb(255,255,255)", ...URBANIST }}>
                      Nachname
                    </label>
                    <input
                      id="la-nachname"
                      name="nachname"
                      type="text"
                      placeholder="Nachname"
                      autoComplete="family-name"
                      className={INPUT_CLASS}
                      style={INPUT_STYLE}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="la-email" className={LABEL_CLASS} style={{ color: "rgb(255,255,255)", ...URBANIST }}>
                      Email Adresse
                    </label>
                    <input
                      id="la-email"
                      name="email"
                      type="email"
                      placeholder="Email Adresse"
                      autoComplete="email"
                      className={INPUT_CLASS}
                      style={INPUT_STYLE}
                    />
                  </div>
                  <div>
                    <label htmlFor="la-telefon" className={LABEL_CLASS} style={{ color: "rgb(255,255,255)", ...URBANIST }}>
                      Telefonnummer
                    </label>
                    <input
                      id="la-telefon"
                      name="telefon"
                      type="tel"
                      placeholder="Telefonnummer"
                      autoComplete="tel"
                      className={INPUT_CLASS}
                      style={INPUT_STYLE}
                    />
                  </div>
                </div>

                <div className="mb-0">
                  <label htmlFor="la-nachricht" className={LABEL_CLASS} style={{ color: "rgb(255,255,255)", ...URBANIST }}>
                    Nachricht
                  </label>
                  <textarea
                    id="la-nachricht"
                    name="nachricht"
                    placeholder="Was möchten Sie einrichten?"
                    rows={4}
                    className={cn(INPUT_CLASS, "resize-none")}
                    style={INPUT_STYLE}
                  />
                </div>

                {error ? (
                  <p
                    role="alert"
                    className="mt-4 text-[15px] font-medium"
                    style={{ color: "rgb(249,178,51)", ...URBANIST }}
                  >
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isPending}
                  className="mt-6 w-full sm:w-auto px-8 py-[14px] text-[16px] font-medium transition-colors disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(249,178,51)] focus-visible:ring-offset-2"
                  style={{
                    backgroundColor: "rgb(249,178,51)",
                    color: "rgb(61,61,61)",
                    borderRadius: 0,
                    ...URBANIST,
                  }}
                >
                  {isPending ? "Wird gesendet ..." : "Anfrage senden"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
