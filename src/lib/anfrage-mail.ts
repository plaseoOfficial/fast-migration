/**
 * Reine Logik zum Anfrageblock (LeistungAnfrage): Grenzen, Wege, Prüfung der
 * Eingaben, Betreff und Mailtext. Bewusst ohne Imports und ohne Resend, damit
 * Client (Vorab-Prüfung der Dateien) und Server-Action (kontakt.ts) dieselben
 * Regeln nutzen und die Logik sich ohne Versand testen lässt.
 */

/** Die drei Wege, wie Besucher starten können (Reihenfolge = Anzeige). */
export const WEGE = [
  { wert: "rueckruf", label: "Rückruf" },
  { wert: "termin", label: "Termin vor Ort mit Aufmaß" },
  { wert: "unterlagen", label: "Pläne oder Fotos schicken" },
] as const;

export type WegWert = (typeof WEGE)[number]["wert"];

export const ANFRAGE_GRENZEN = {
  maxDateien: 3,
  /**
   * Summe aller Anhänge. Vercel begrenzt den Anfrage-Körper einer Funktion auf
   * 4,5 MB, die Server-Action in next.config.ts auf 4 MB (Standard wäre 1 MB).
   * 3,5 MB für Dateien lässt Platz für Textfelder und Multipart-Rahmen.
   */
  maxGesamtBytes: 3.5 * 1024 * 1024,
  /** Lange Kante, auf die Bilder im Browser verkleinert werden. */
  bildKantePx: 1600,
  erlaubteTypen: ["image/jpeg", "image/png", "image/webp", "application/pdf"],
} as const;

export function formatiereGroesse(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1).replace(".", ",")} MB`;
}

/** Einzeiler: ohne Zeilenumbrüche, Länge begrenzt (Betreff, Namen, Felder). */
export function einzeiler(wert: string, max = 120): string {
  return wert.replace(/[\r\n\t]+/g, " ").replace(/\s{2,}/g, " ").trim().slice(0, max);
}

export interface AnfrageEingang {
  variante: string;
  /** Kleine Zeile des Blocks, z. B. "Projektanfrage" (Betreff-Kopf). */
  zeile: string;
  seite: string;
  objektart: string;
  weg: string;
  umfang: string;
  zeitraum: string;
  gegenstand: string;
  laufzeit: string;
  unternehmen: string;
  plz: string;
  breite: string;
  budget: string;
  arbeitsplaetze: string;
  name: string;
  email: string;
  telefon: string;
  nachricht: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function leseAnfrage(get: (name: string) => string): AnfrageEingang {
  const e1 = (n: string, max = 120) => einzeiler(get(n), max);
  return {
    variante: e1("variante", 20),
    zeile: e1("zeile", 60),
    seite: e1("seite", 120),
    objektart: e1("objektart", 80),
    weg: e1("weg", 20),
    umfang: e1("umfang", 120),
    zeitraum: e1("zeitraum", 60),
    gegenstand: e1("gegenstand", 200),
    laufzeit: e1("laufzeit", 40),
    unternehmen: e1("unternehmen", 120),
    plz: e1("plz", 60),
    breite: e1("breite", 40),
    budget: e1("budget", 80),
    arbeitsplaetze: e1("arbeitsplaetze", 10),
    name: e1("name", 120),
    email: e1("email", 160),
    telefon: e1("telefon", 40),
    // Nachricht behält Zeilenumbrüche.
    nachricht: get("nachricht").trim().slice(0, 5000),
  };
}

export interface AnfrageFehler {
  /** Feldname im Formular (für Fehlermeldung am Feld). */
  feld: string;
  error: string;
}

/**
 * Pflichtlogik: Name immer, Weg gewählt (im Formular ist „Rückruf“ vorgewählt),
 * mindestens Telefon oder E-Mail, bei „Rückruf“ das Telefon. Eine angegebene
 * E-Mail muss gültig sein. Nachricht und alle Projektangaben sind freiwillig.
 * Fehlen Telefon und E-Mail, sitzt die Meldung am Feld, das zum Weg passt
 * (Unterlagen: E-Mail, sonst Telefon).
 */
export function pruefeAnfrage(e: AnfrageEingang): AnfrageFehler | null {
  if (!e.name) return { feld: "name", error: "Bitte geben Sie Ihren Namen an." };
  if (!WEGE.some((w) => w.wert === e.weg)) {
    return { feld: "weg", error: "Bitte wählen Sie, wie Sie starten möchten." };
  }
  if (e.email && !EMAIL_RE.test(e.email)) {
    return { feld: "email", error: "Bitte geben Sie eine gültige E-Mail-Adresse an." };
  }
  if (e.weg === "rueckruf" && !e.telefon) {
    return { feld: "telefon", error: "Für einen Rückruf brauchen wir Ihre Telefonnummer." };
  }
  if (!e.telefon && !e.email) {
    return {
      feld: e.weg === "unterlagen" ? "email" : "telefon",
      error: "Bitte geben Sie Ihre Telefonnummer oder E-Mail-Adresse an, damit wir uns melden können.",
    };
  }
  return null;
}

const VARIANTEN_NAMEN: Record<string, string> = {
  kueche: "Küche",
  privat: "Privat",
  gewerbe: "Gewerbe",
  serie: "Serie",
  neutral: "Allgemein",
};

/**
 * Betreff mit Größe vor dem Öffnen, z. B.
 * „Projektanfrage Praxis · Komplette Einrichtung · 33602“.
 * Privat-Seiten tragen statt der Objektart die Seite (z. B. das Möbel).
 */
export function baueBetreff(e: AnfrageEingang): string {
  const kopf =
    e.variante === "gewerbe"
      ? [e.zeile, e.objektart].filter(Boolean).join(" ")
      : e.variante === "privat"
        ? [e.zeile, e.seite].filter(Boolean).join(" · ")
        : e.zeile || "Anfrage";
  const teile = [kopf || "Anfrage", e.umfang || null, e.plz || null].filter(Boolean);
  return teile.join(" · ").slice(0, 180);
}

export function baueMailText(e: AnfrageEingang, dateiNamen: string[]): string {
  const weg = WEGE.find((w) => w.wert === e.weg)?.label ?? e.weg;
  const zeilen: [string, string][] = [
    ["Variante", VARIANTEN_NAMEN[e.variante] ?? e.variante],
    ["Seite", e.seite],
    ["Gewünschter Weg", weg],
    ["Unternehmen", e.unternehmen],
    ["Art des Objekts", e.objektart],
    ["Was wird gefertigt", e.gegenstand],
    ["Umfang", e.umfang],
    ["Laufzeit", e.laufzeit],
    ["Zeitraum", e.zeitraum],
    ["Ort oder PLZ", e.plz],
    ["Ungefähre Breite", e.breite],
    ["Zahl der Arbeitsplätze", e.arbeitsplaetze],
    ["Budgetrahmen", e.budget],
  ];
  return [
    "Neue Anfrage über den Anfrageblock auf fast-systemmoebel.de",
    "",
    `Name: ${e.name}`,
    `E-Mail: ${e.email || "—"}`,
    `Telefon: ${e.telefon || "—"}`,
    "",
    ...zeilen.filter(([, wert]) => wert).map(([name, wert]) => `${name}: ${wert}`),
    `Anhänge: ${dateiNamen.length ? dateiNamen.join(", ") : "keine"}`,
    "",
    "Nachricht:",
    e.nachricht || "—",
  ].join("\n");
}

/** Dateiname ohne Pfad und Sonderzeichen für den Mail-Anhang. */
export function sichererDateiname(name: string): string {
  const roh = name.split(/[\\/]/).pop() ?? "datei";
  return roh.replace(/[^\w.\- äöüÄÖÜß]/g, "_").slice(0, 80) || "datei";
}
