"use client";

/**
 * Anfrageblock für Leistungsseiten: links Ansprechpartner, Kernsatz und Telefon,
 * rechts das Formular. Sechs Fassungen über `variante` (Küche, Privat, Gewerbe,
 * Serie, Leitstelle, neutral); alle Texte und Felder je Fassung stehen in
 * `src/lib/content/anfrage.ts`, die Seite übergibt nur ihre Besonderheiten.
 * Anker `#anfrage`: Der Header-Button und der `AnfrageStreifen` springen hierher.
 *
 * Aufbau: Sichtbar sind nur Name, Telefon, E-Mail, die drei Wege („Rückruf“ ist
 * vorgewählt), die Nachricht (freiwillig) und der Button. Alle Projektangaben
 * (Umfang, Zeitraum, Ort, Unternehmen, Objektart, Breite, Budget, Dateien …) liegen
 * in einem nativen `<details>` „Mehr zum Projekt angeben (freiwillig)“. Ein
 * `<details>` und kein Button mit `aria-expanded`, weil AnalyticsEvents solche
 * Buttons als „FAQ geöffnet“ zählt. Zugeklappte Felder werden mitgesendet.
 * Pflicht: Name sowie Telefon oder E-Mail (bei „Rückruf“ das Telefon), siehe
 * `pruefeAnfrage`. Wer „Pläne oder Fotos schicken“ wählt, bekommt den Bereich
 * geöffnet und das Datei-Feld zuoberst.
 *
 * Versand: dieselbe Server-Action wie das Kontaktformular (`sendeKontaktAnfrage`),
 * erkennt den Anfrageblock am Feld `variante`. Das unsichtbare Fallen-Feld gegen
 * Bots heißt `firma`; der Firmenname heißt deshalb `unternehmen`.
 *
 * Dateien: bis zu drei, Bilder werden im Browser auf ~1600 px verkleinert (JPEG),
 * die Summe ist begrenzt (siehe ANFRAGE_GRENZEN), zu große Mengen melden wir am Feld.
 *
 * Messung: Telefonklick zählt der delegierte Listener als „Telefon geklickt“ mit
 * Zone „Anfrageblock“ (data-track-zone). Das Formular meldet „Kontaktformular
 * gesendet“ mit Variante, Position und Weg. Details: docs/seo/tracking.md.
 *
 * Nicht mit `KontaktPanel` verwechseln: Dessen Formular ist eine reine
 * Library-Demo ohne Versand.
 *
 * Styling: helle, weiße Karte auf dem beigen Sektionsgrund (Vorgabe Auftraggeber:
 * einladend statt dunkel), Urbanist, eckige Kanten, dunkle Schrift rgb(61,61,61),
 * Felder rgb(243,243,243) mit Rand rgb(102,102,102), Button Gold rgb(249,178,51).
 */

import { useEffect, useRef, useState, useTransition } from "react";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/Reveal";
import {
  FORM_CARD_BG,
  FORM_ERROR_CLASS,
  FORM_FIELD_CLASS,
  FORM_GOLD,
  FORM_HINT_CLASS,
  FORM_INK,
  FORM_LABEL_CLASS,
  FORM_URBANIST,
  FehlerSymbol,
} from "@/components/sections/_shared/FormularStil";
import { renderInlineLinks } from "@/lib/inline-links";
import { sendeKontaktAnfrage } from "@/lib/actions/kontakt";
import {
  ANFRAGE_GRENZEN,
  WEGE,
  formatiereGroesse,
  leseAnfrage,
  pruefeAnfrage,
  type AnfrageFehler,
} from "@/lib/anfrage-mail";
import {
  ANSPRECHPARTNER,
  DANKE,
  KERNSATZ,
  MOEBELPLANER_ZEILE,
  NACH_DEM_ABSENDEN,
  TELEFON,
  VARIANTEN,
  type AnfrageVariante,
} from "@/lib/content/anfrage";

const URBANIST = FORM_URBANIST;
const INK = FORM_INK;
const GOLD = FORM_GOLD;
const LABEL_CLASS = FORM_LABEL_CLASS;
const HINT_CLASS = FORM_HINT_CLASS;
const FIELD_CLASS = FORM_FIELD_CLASS;
const SELECT_STYLE: React.CSSProperties = {
  appearance: "none",
  paddingRight: 44,
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%233d3d3d' stroke-width='2'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 16px center",
};

export interface LeistungAnfrageProps {
  /** Fassung des Blocks, bestimmt Texte und Felder (siehe content/anfrage.ts). */
  variante: AnfrageVariante;
  /** Herkunft für die Mail, z. B. "Ladenbau". Bei Privat zugleich Teil des Betreffs. */
  seite: string;
  /** Eigene Überschrift, z. B. „Ihren Schrank unter der Dachschräge planen wir bei Ihnen vor Ort“. */
  ueberschrift?: string;
  /** Gewerbe: vorbelegte Art des Objekts (Praxis, Laden, Gastronomie, Büro). */
  objektart?: string;
  /** Optionale Preiszeile unter der Einleitung. Bleibt leer, bis Fast einen Rahmen nennt. */
  preisZeile?: string;
}

interface GewaehlteDatei {
  id: number;
  file: File;
}

/** Bild im Browser auf lange Kante ~1600 px verkleinern (JPEG); PDFs bleiben unverändert. */
async function bereiteDateiVor(file: File): Promise<File> {
  if (!file.type.startsWith("image/")) return file;
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const lang = Math.max(bitmap.width, bitmap.height);
  const faktor = Math.min(1, ANFRAGE_GRENZEN.bildKantePx / lang);
  if (faktor === 1 && file.type === "image/jpeg" && file.size < 700 * 1024) {
    bitmap.close();
    return file;
  }
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * faktor);
  canvas.height = Math.round(bitmap.height * faktor);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas nicht verfügbar");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/jpeg", 0.82));
  if (!blob) throw new Error("Bild konnte nicht umgewandelt werden");
  const name = file.name.replace(/\.[^.]+$/, "") || "bild";
  return new File([blob], `${name}.jpg`, { type: "image/jpeg" });
}

export function LeistungAnfrage({
  variante,
  seite,
  ueberschrift,
  objektart,
  preisZeile,
}: LeistungAnfrageProps) {
  const inhalt = VARIANTEN[variante];
  const budgetSichtbar = inhalt.budgetStufen.length > 0;

  const [submitted, setSubmitted] = useState(false);
  const [fehler, setFehler] = useState<AnfrageFehler | null>(null);
  const [weg, setWeg] = useState<string>(WEGE[0].wert);
  const [offen, setOffen] = useState(false);
  const [dateien, setDateien] = useState<GewaehlteDatei[]>([]);
  const [verarbeite, setVerarbeite] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dateiNr = useRef(0);
  const dankeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitted) dankeRef.current?.focus();
  }, [submitted]);

  const fehlerAn = (feld: string) => (fehler?.feld === feld ? fehler.error : null);
  const feldProps = (feld: string) => ({
    "aria-invalid": fehler?.feld === feld ? true : undefined,
    "aria-describedby": fehler?.feld === feld ? `la-fehler-${feld}` : undefined,
  });
  const fehlerText = (feld: string) =>
    fehlerAn(feld) ? (
      <p id={`la-fehler-${feld}`} role="alert" className={`mt-2 ${FORM_ERROR_CLASS}`}>
        <FehlerSymbol />
        <span>{fehlerAn(feld)}</span>
      </p>
    ) : null;

  function zeigeFehler(f: AnfrageFehler) {
    setFehler(f);
    trackEvent("Kontaktformular Fehler", { grund: f.error, label: `Anfrageblock · ${variante}`, variante });
    if (f.feld === "dateien") setOffen(true);
    // Fokus auf das betroffene Feld, damit Tastatur- und Screenreader-Nutzer es finden.
    // Kurze Verzögerung: Das Dateifeld ist während der Bildverarbeitung gesperrt und nimmt den Fokus erst danach an.
    window.setTimeout(() => {
      const ziel = f.feld === "weg" ? `la-weg-${WEGE[0].wert}` : `la-${f.feld}`;
      document.getElementById(ziel)?.focus();
    }, 120);
  }

  async function dateienHinzufuegen(e: React.ChangeEvent<HTMLInputElement>) {
    const gewaehlt = Array.from(e.target.files ?? []);
    e.target.value = "";
    if (!gewaehlt.length) return;
    setFehler(null);
    if (dateien.length + gewaehlt.length > ANFRAGE_GRENZEN.maxDateien) {
      zeigeFehler({ feld: "dateien", error: `Es sind höchstens ${ANFRAGE_GRENZEN.maxDateien} Dateien möglich.` });
      return;
    }
    if (gewaehlt.some((f) => !(ANFRAGE_GRENZEN.erlaubteTypen as readonly string[]).includes(f.type))) {
      zeigeFehler({ feld: "dateien", error: "Bitte wählen Sie Bilder (JPEG, PNG, WebP) oder PDF-Dateien." });
      return;
    }
    setVerarbeite(true);
    try {
      const fertig: GewaehlteDatei[] = [];
      for (const f of gewaehlt) {
        fertig.push({ id: ++dateiNr.current, file: await bereiteDateiVor(f) });
      }
      const neu = [...dateien, ...fertig];
      const summe = neu.reduce((s, d) => s + d.file.size, 0);
      if (summe > ANFRAGE_GRENZEN.maxGesamtBytes) {
        zeigeFehler({
          feld: "dateien",
          error: `Die Dateien sind zusammen zu groß (${formatiereGroesse(summe)} von ${formatiereGroesse(ANFRAGE_GRENZEN.maxGesamtBytes)}). Entfernen Sie eine Datei oder wählen Sie kleinere Dateien. Fotos verkleinern wir automatisch, PDFs nicht.`,
        });
      } else {
        setDateien(neu);
      }
    } catch {
      zeigeFehler({ feld: "dateien", error: "Eine Datei konnte nicht gelesen werden. Bitte versuchen Sie ein JPEG, PNG oder PDF." });
    } finally {
      setVerarbeite(false);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setFehler(null);

    const vorab = pruefeAnfrage(leseAnfrage((n) => String(formData.get(n) ?? "")));
    if (vorab) {
      zeigeFehler(vorab);
      return;
    }
    for (const d of dateien) formData.append("dateien", d.file);
    const text = (n: string) => String(formData.get(n) ?? "").trim();
    const angaben =
      dateien.length > 0 ||
      text("objektart") !== (objektart ?? "") ||
      ["umfang", "zeitraum", "plz", "unternehmen", "gegenstand", "laufzeit", "breite", "budget", "arbeitsplaetze"].some(
        (n) => text(n) !== "",
      )
        ? "ja"
        : "nein";
    const wegLabel = WEGE.find((w) => w.wert === weg)?.label ?? weg;

    startTransition(async () => {
      try {
        const result = await sendeKontaktAnfrage(formData);
        if (result.ok) {
          setSubmitted(true);
          // Honeypot-Treffer verschickt keine Mail, dann auch keine Conversion zählen.
          if (!result.spam) {
            const pfad = window.location.pathname;
            trackEvent("Kontaktformular gesendet", {
              seite: pfad,
              label: `Anfrageblock · ${variante} · ${wegLabel} · ${angaben === "ja" ? "mit Angaben" : "ohne Angaben"} · ${pfad}`,
              variante,
              position: "Anfrageblock",
              weg: wegLabel,
              angaben,
            });
          }
        } else {
          zeigeFehler({
            feld: result.feld ?? "formular",
            error: result.error ?? "Senden fehlgeschlagen. Bitte versuchen Sie es erneut.",
          });
        }
      } catch {
        // z. B. Anfrage-Körper über der Hoster-Grenze: die Action wurde gar nicht erreicht.
        zeigeFehler({
          feld: "dateien",
          error: "Das Senden hat nicht geklappt, vermutlich sind die Dateien zu groß. Entfernen Sie eine Datei oder rufen Sie uns an.",
        });
      }
    });
  }

  const zeitraum = inhalt.zeitraum;
  const telefonHinweis = weg === "rueckruf" ? "für den Rückruf" : "oder E-Mail";
  const emailHinweis = weg === "rueckruf" ? "freiwillig" : "oder Telefon";

  return (
    <section
      id="anfrage"
      className="scroll-mt-24 py-14 lg:py-20"
      style={{ backgroundColor: "rgba(203,191,181,0.59)", ...URBANIST }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* Links: Ansprache, Ansprechpartner, direkter Draht */}
          <Reveal className="lg:sticky lg:top-28">
            <p className="mb-3 text-[14px] font-medium uppercase tracking-[2px]" style={{ color: INK }}>
              {inhalt.zeile}
            </p>
            <h2
              className="text-[28px] font-medium leading-[1.15] tracking-[-1px] sm:text-[38px] sm:leading-[1.1]"
              style={{ color: INK }}
            >
              {ueberschrift ?? inhalt.ueberschrift}
            </h2>
            <p className="mt-4 text-[17px] leading-[1.7]" style={{ color: "rgb(61,61,61)" }}>
              {inhalt.einleitung}
            </p>
            {preisZeile ? (
              <p className="mt-3 text-[15px] leading-[1.7]" style={{ color: INK }}>
                {renderInlineLinks(preisZeile)}
              </p>
            ) : null}

            <div className="mt-8 flex items-center gap-5">
              {/* Porträt: Kopf und Schultern per Zuschnitt aus dem Ganzkörperfoto */}
              <div
                className="relative h-[112px] w-[112px] shrink-0 overflow-hidden rounded-full"
                style={{ backgroundColor: "rgb(231,224,218)" }}
              >
                <Image
                  src={ANSPRECHPARTNER.foto}
                  alt={ANSPRECHPARTNER.alt}
                  width={ANSPRECHPARTNER.fotoBreite}
                  height={ANSPRECHPARTNER.fotoHoehe}
                  sizes="150px"
                  className="absolute left-1/2 top-0 h-auto w-[150px] max-w-none -translate-x-1/2 -translate-y-[6px]"
                />
              </div>
              <div>
                <p className="text-[22px] font-medium leading-[1.4]" style={{ color: INK }}>
                  {ANSPRECHPARTNER.name}
                </p>
                <p className="mt-1 text-[16px]" style={{ color: INK }}>
                  {ANSPRECHPARTNER.funktion}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-[34em] text-[17px] leading-[1.7]" style={{ color: INK }}>
              {KERNSATZ}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-1" data-track-zone="Anfrageblock">
              <a
                href={TELEFON.href}
                className="inline-flex min-h-[44px] items-center text-[22px] font-medium transition-colors hover:text-[rgb(237,168,33)]"
                style={{ color: INK }}
              >
                {TELEFON.anzeige}
              </a>
              <span className="text-[15px]" style={{ color: INK }}>
                {TELEFON.zeiten}
              </span>
            </div>
          </Reveal>

          {/* Rechts: Formularkarte */}
          <Reveal y={0} className="px-6 py-8 lg:px-10 lg:py-10" style={{ backgroundColor: FORM_CARD_BG }}>
            {submitted ? (
              <div
                ref={dankeRef}
                tabIndex={-1}
                role="status"
                className="flex items-center justify-center py-20 outline-none"
              >
                <p className="text-center text-[22px] font-medium text-[rgb(61,61,61)]">{DANKE}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot: unsichtbar, füllen nur Bots aus. */}
                <input type="text" name="firma" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <input type="hidden" name="variante" value={variante} />
                <input type="hidden" name="zeile" value={inhalt.zeile} />
                <input type="hidden" name="seite" value={seite} />

                <div className="mb-4">
                  <label htmlFor="la-name" className={LABEL_CLASS} style={URBANIST}>
                    Name
                  </label>
                  <input id="la-name" name="name" type="text" autoComplete="name" className={FIELD_CLASS} style={URBANIST} {...feldProps("name")} />
                  {fehlerText("name")}
                </div>

                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="la-telefon" className={LABEL_CLASS} style={URBANIST}>
                      Telefon <span className={HINT_CLASS}>({telefonHinweis})</span>
                    </label>
                    <input id="la-telefon" name="telefon" type="tel" autoComplete="tel" className={FIELD_CLASS} style={URBANIST} {...feldProps("telefon")} />
                    {fehlerText("telefon")}
                  </div>
                  <div>
                    <label htmlFor="la-email" className={LABEL_CLASS} style={URBANIST}>
                      E-Mail <span className={HINT_CLASS}>({emailHinweis})</span>
                    </label>
                    <input id="la-email" name="email" type="email" autoComplete="email" className={FIELD_CLASS} style={URBANIST} {...feldProps("email")} />
                    {fehlerText("email")}
                  </div>
                </div>

                <fieldset className="mb-6 min-w-0 border-0 p-0" {...(fehlerAn("weg") ? { "aria-describedby": "la-fehler-weg" } : {})}>
                  <legend className="mb-2 p-0 text-[14px] font-medium text-[rgb(61,61,61)]">Wie möchten Sie starten?</legend>
                  <div className="grid grid-cols-1 gap-2">
                    {WEGE.map((w) => (
                      <label
                        key={w.wert}
                        className="group/opt relative flex min-h-[48px] cursor-pointer items-center gap-3 border border-[rgb(102,102,102)] px-4 text-[16px] font-medium text-[rgb(61,61,61)] transition-colors hover:bg-[rgb(243,243,243)] has-[:checked]:border-[rgb(249,178,51)] has-[:checked]:bg-[rgb(249,178,51)] has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[rgb(61,61,61)]"
                        style={URBANIST}
                      >
                        <input
                          id={`la-weg-${w.wert}`}
                          type="radio"
                          name="weg"
                          value={w.wert}
                          checked={weg === w.wert}
                          onChange={() => {
                            setWeg(w.wert);
                            if (w.wert === "unterlagen") setOffen(true);
                          }}
                          className="peer sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border-2 border-current"
                        >
                          <span className="h-2 w-2 rounded-full bg-current opacity-0 group-has-[:checked]/opt:opacity-100" />
                        </span>
                        {w.label}
                      </label>
                    ))}
                  </div>
                  {fehlerText("weg")}
                </fieldset>

                <div className="mb-4">
                  <label htmlFor="la-nachricht" className={LABEL_CLASS} style={URBANIST}>
                    Nachricht <span className={HINT_CLASS}>(freiwillig)</span>
                  </label>
                  <textarea id="la-nachricht" name="nachricht" rows={3} className={`${FIELD_CLASS} resize-none`} style={URBANIST} {...feldProps("nachricht")} />
                  {fehlerText("nachricht")}
                </div>

                {/* Projektangaben: natives details (zählt nicht als FAQ), zugeklappte Felder werden mitgesendet. */}
                <details
                  open={offen}
                  onToggle={(e) => setOffen(e.currentTarget.open)}
                  className="group/det mb-2 border-t border-[rgb(102,102,102)]/40"
                >
                  <summary
                    className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-3 py-2 text-[16px] font-medium text-[rgb(61,61,61)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(61,61,61)] [&::-webkit-details-marker]:hidden"
                    style={URBANIST}
                  >
                    <span>Mehr zum Projekt angeben (freiwillig)</span>
                    <svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" className="shrink-0 transition-transform group-open/det:rotate-180">
                      <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </summary>
                  <div className="flex flex-col pt-3">
                    <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className={inhalt.unternehmen ? "" : "sm:col-span-2"}>
                        <label htmlFor="la-plz" className={LABEL_CLASS} style={URBANIST}>
                          Ort oder PLZ des Projekts
                        </label>
                        <input id="la-plz" name="plz" type="text" autoComplete="postal-code" className={FIELD_CLASS} style={URBANIST} {...feldProps("plz")} />
                      </div>
                      {inhalt.unternehmen ? (
                        <div>
                          <label htmlFor="la-unternehmen" className={LABEL_CLASS} style={URBANIST}>
                            Unternehmen
                          </label>
                          <input id="la-unternehmen" name="unternehmen" type="text" autoComplete="organization" className={FIELD_CLASS} style={URBANIST} {...feldProps("unternehmen")} />
                        </div>
                      ) : null}
                    </div>

                    {inhalt.objektart ? (
                      <div className="mb-4">
                        <label htmlFor="la-objektart" className={LABEL_CLASS} style={URBANIST}>
                          Art des Objekts
                        </label>
                        <input id="la-objektart" name="objektart" type="text" defaultValue={objektart ?? ""} placeholder="z. B. Praxis, Laden, Büro" className={FIELD_CLASS} style={URBANIST} />
                      </div>
                    ) : null}

                    {inhalt.gegenstand ? (
                      <div className="mb-4">
                        <label htmlFor="la-gegenstand" className={LABEL_CLASS} style={URBANIST}>
                          {inhalt.gegenstand}
                        </label>
                        <input id="la-gegenstand" name="gegenstand" type="text" className={FIELD_CLASS} style={URBANIST} />
                      </div>
                    ) : null}

                    <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className={zeitraum ? "" : "sm:col-span-2"}>
                        {inhalt.arbeitsplaetze ? (
                          <>
                            <label htmlFor="la-arbeitsplaetze" className={LABEL_CLASS} style={URBANIST}>
                              {inhalt.arbeitsplaetze.label}
                            </label>
                            <input id="la-arbeitsplaetze" name="arbeitsplaetze" type="text" inputMode="numeric" maxLength={10} className={FIELD_CLASS} style={URBANIST} aria-describedby="la-arbeitsplaetze-hinweis" />
                            <p id="la-arbeitsplaetze-hinweis" className={`mt-2 text-[14px] leading-[1.6] ${HINT_CLASS}`}>
                              {inhalt.arbeitsplaetze.hinweis}
                            </p>
                          </>
                        ) : inhalt.umfang ? (
                          <>
                        <label htmlFor="la-umfang" className={LABEL_CLASS} style={URBANIST}>
                          {inhalt.umfang.label}
                        </label>
                        <select
                          id="la-umfang"
                          name="umfang"
                          defaultValue=""
                          className={FIELD_CLASS}
                          style={{ ...URBANIST, ...SELECT_STYLE }}
                        >
                          <option value="">Bitte wählen</option>
                          {inhalt.umfang.optionen.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                          </>
                        ) : null}
                      </div>
                      {zeitraum ? (
                        <div>
                          <label htmlFor="la-zeitraum" className={LABEL_CLASS} style={URBANIST}>
                            {zeitraum.label}
                          </label>
                          {zeitraum.typ === "auswahl" ? (
                            <select id="la-zeitraum" name="zeitraum" defaultValue="" className={FIELD_CLASS} style={{ ...URBANIST, ...SELECT_STYLE }}>
                              <option value="">Bitte wählen</option>
                              {zeitraum.optionen.map((o) => (
                                <option key={o} value={o}>
                                  {o}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input id="la-zeitraum" name="zeitraum" type="month" className={FIELD_CLASS} style={URBANIST} />
                          )}
                        </div>
                      ) : null}
                    </div>

                    {inhalt.laufzeit ? (
                      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="la-laufzeit" className={LABEL_CLASS} style={URBANIST}>
                            {inhalt.laufzeit.label}
                          </label>
                          <select id="la-laufzeit" name="laufzeit" defaultValue="" className={FIELD_CLASS} style={{ ...URBANIST, ...SELECT_STYLE }}>
                            <option value="">Bitte wählen</option>
                            {inhalt.laufzeit.optionen.map((o) => (
                              <option key={o} value={o}>
                                {o}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    ) : null}

                    {inhalt.breite || budgetSichtbar ? (
                      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {inhalt.breite ? (
                          <div>
                            <label htmlFor="la-breite" className={LABEL_CLASS} style={URBANIST}>
                              Ungefähre Breite <span className={HINT_CLASS}>(freiwillig)</span>
                            </label>
                            <input id="la-breite" name="breite" type="text" placeholder="z. B. 280 cm" className={FIELD_CLASS} style={URBANIST} />
                          </div>
                        ) : null}
                        {budgetSichtbar ? (
                          <div>
                            <label htmlFor="la-budget" className={LABEL_CLASS} style={URBANIST}>
                              Budgetrahmen <span className={HINT_CLASS}>(freiwillig)</span>
                            </label>
                            <select id="la-budget" name="budget" defaultValue="" className={FIELD_CLASS} style={{ ...URBANIST, ...SELECT_STYLE }}>
                              <option value="">Keine Angabe</option>
                              {inhalt.budgetStufen.map((o) => (
                                <option key={o} value={o}>
                                  {o}
                                </option>
                              ))}
                            </select>
                          </div>
                        ) : null}
                      </div>
                    ) : null}

                    <div className={`mb-4 ${weg === "unterlagen" ? "order-first" : ""}`}>
                      <p className={LABEL_CLASS} style={URBANIST}>
                        Pläne oder Fotos <span className={HINT_CLASS}>(freiwillig, bis zu {ANFRAGE_GRENZEN.maxDateien} Dateien)</span>
                      </p>
                      <div className="has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[rgb(61,61,61)] inline-block">
                        <input
                          id="la-dateien"
                          type="file"
                          multiple
                          accept="image/jpeg,image/png,image/webp,application/pdf"
                          onChange={dateienHinzufuegen}
                          disabled={dateien.length >= ANFRAGE_GRENZEN.maxDateien || verarbeite}
                          className="peer sr-only"
                          {...feldProps("dateien")}
                        />
                        <label
                          htmlFor="la-dateien"
                          className="inline-flex min-h-[48px] cursor-pointer items-center border border-[rgb(61,61,61)] px-5 text-[16px] font-medium text-[rgb(61,61,61)] transition-colors hover:bg-[rgb(61,61,61)] hover:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-60 peer-disabled:hover:bg-transparent peer-disabled:hover:text-[rgb(61,61,61)]"
                          style={URBANIST}
                        >
                          {verarbeite ? "Wird verkleinert ..." : "Dateien auswählen"}
                        </label>
                      </div>
                      <p className="mt-2 text-[14px] text-[rgb(102,102,102)]">
                        Bilder, PDF. Fotos verkleinern wir vor dem Senden, alle Dateien zusammen bis {formatiereGroesse(ANFRAGE_GRENZEN.maxGesamtBytes)}.
                      </p>
                      {dateien.length ? (
                        <ul className="mt-3 space-y-1" aria-label="Ausgewählte Dateien">
                          {dateien.map((d) => (
                            <li key={d.id} className="flex items-center justify-between gap-3 text-[15px] text-[rgb(61,61,61)]">
                              <span className="min-w-0 truncate">
                                {d.file.name} <span className={HINT_CLASS}>({formatiereGroesse(d.file.size)})</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => setDateien((alt) => alt.filter((x) => x.id !== d.id))}
                                aria-label={`${d.file.name} entfernen`}
                                className="inline-flex min-h-[44px] shrink-0 items-center px-2 underline underline-offset-4 hover:bg-[rgb(243,243,243)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[rgb(61,61,61)]"
                              >
                                Entfernen
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {fehlerText("dateien")}
                    </div>
                  </div>
                </details>

                {fehler && fehler.feld === "formular" ? (
                  <p id="la-fehler-formular" role="alert" className={`mt-4 ${FORM_ERROR_CLASS}`}>
                    <FehlerSymbol />
                    <span>{fehler.error}</span>
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isPending || verarbeite}
                  className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center px-8 text-[16px] font-medium transition-colors hover:bg-[rgb(61,61,61)] hover:text-white disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(61,61,61)] sm:w-auto"
                  style={{ backgroundColor: GOLD, color: INK, borderRadius: 0, ...URBANIST }}
                >
                  {isPending ? "Wird gesendet ..." : inhalt.button}
                </button>
                <p className={`mt-3 text-[14px] leading-[1.6] ${HINT_CLASS}`}>{NACH_DEM_ABSENDEN}</p>
              </form>
            )}
          </Reveal>
        </div>

        {variante === "privat" ? (
          <p className="mt-8 text-[16px] leading-[1.7]" style={{ color: INK }}>
            {renderInlineLinks(MOEBELPLANER_ZEILE)}
          </p>
        ) : null}
      </div>
    </section>
  );
}
