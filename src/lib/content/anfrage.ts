/**
 * Zentrale Inhalte des Anfrageblocks (`LeistungAnfrage`) und des Streifens
 * (`AnfrageStreifen`). Alles, was auf mehreren Seiten gleich ist, steht NUR hier:
 * Ansprechpartner, Kernsatz, Telefon, die drei Wege, je Variante Texte und Felder.
 * Eine Änderung an Name oder Funktion von Andreas Fast gehört in
 * `ANSPRECHPARTNER` und sonst nirgends hin.
 *
 * Einbau auf einer Seite (page.tsx):
 *   - Block statt des ersten Bild-Aufrufs (nach MnmIntroStats):
 *       <LeistungAnfrage variante="kueche" seite="Küchen nach Maß" />
 *       <LeistungAnfrage variante="privat" seite="Schrank für Dachschräge" ueberschrift="Ihren … planen wir bei Ihnen vor Ort" />
 *       <LeistungAnfrage variante="gewerbe" seite="Praxiseinrichtung" objektart="Praxis" />
 *       <LeistungAnfrage variante="serie" seite="Serienmöbel" /> (leitstelle für Leitstellenmöbel)
 *       <LeistungAnfrage variante="neutral" seite="Startseite" />
 *   - Streifen statt des zweiten Bild-Aufrufs, vor FaqSection:
 *       <AnfrageStreifen variante="…" />
 *   - MnmMoebelplaner raus (Gewerbe, Küche) bzw. entfällt bei Privat (die Zeile steckt im Block).
 *   - Der Header-Button springt von selbst zum Block (CSS :has(#anfrage)), nichts zu tun.
 *
 * Aufbau des Formulars (alle Varianten): sichtbar Name, Telefon, E-Mail, die drei Wege
 * („Rückruf“ vorgewählt), Nachricht (freiwillig), Button. Alles Weitere, was hier je
 * Variante steht (`umfang`, `zeitraum`, `unternehmen`, `objektart`, `breite`,
 * `gegenstand`, `laufzeit`, `budgetStufen`), liegt im aufklappbaren, freiwilligen
 * Bereich „Mehr zum Projekt angeben“. Pflicht ist nur Name plus Telefon oder E-Mail.
 *
 * Die drei Wege (Rückruf, Termin, Unterlagen) stehen in `src/lib/anfrage-mail.ts`
 * (`WEGE`), weil die Server-Action sie mitprüft.
 *
 * Nur Belegtes: Rückruf-Zeit, Lieferzeit, Preise und Garantien stehen hier
 * bewusst nicht. Das „kostenlose Aufmaß“ steht nur bei Küche und Privat.
 */

export type AnfrageVariante = "kueche" | "privat" | "gewerbe" | "serie" | "neutral";

/** Seiten-Funktion von Andreas Fast. Funktion vorerst „Tischlermeister“ (steht so live auf /ueber-uns/). */
export const ANSPRECHPARTNER = {
  vorname: "Andreas",
  name: "Andreas Fast",
  funktion: "Tischlermeister",
  foto: "/images/2025/11/Freigestellt.png",
  /** Original-Maße des Fotos, für next/image. */
  fotoBreite: 393,
  fotoHoehe: 634,
  /** Alt-Text beschreibt das Bild, abgeleitet aus Name und Funktion. */
  get alt(): string {
    return `${this.name}, ${this.funktion} bei Fast Systemmöbel`;
  },
} as const;

export const KERNSATZ =
  "Planung, Fertigung und Montage kommen bei uns aus einem Haus. Sie haben einen Ansprechpartner, vom ersten Gespräch bis zur fertigen Montage.";

export const TELEFON = {
  anzeige: "05771 9138312",
  href: "tel:+4957719138312",
  zeiten: "Mo–Fr 6:00–17:00 Uhr",
} as const;

/** Text nach dem Absenden. Zeitangabe erst, wenn Fast sie nennt. */
export const DANKE = `Danke. ${ANSPRECHPARTNER.name} meldet sich bei Ihnen.`;

/** Eine Zeile unter dem Block, nur auf Privat-Seiten (Variante „privat“). */
export const MOEBELPLANER_ZEILE =
  "Lieber erst selbst probieren? Im [Möbelplaner](/moebelplaner/) sehen Sie Maße, Dekore und einen Richtpreis.";

/** Auswahlfeld: Beschriftung und Optionen (Optionstext = gesendeter Wert). */
export interface AuswahlFeld {
  label: string;
  optionen: readonly string[];
}

export interface VariantenInhalt {
  /** Kleine Zeile über der Überschrift; zugleich Kopf des Mail-Betreffs. */
  zeile: string;
  ueberschrift: string;
  einleitung: string;
  button: string;
  /** Feld zur Größe (im aufklappbaren Bereich, freiwillig). */
  umfang: AuswahlFeld;
  /** Auswahl (Küche, Privat) oder Monat (Gewerbe, Serie); fehlt bei der neutralen Fassung. */
  zeitraum?: { typ: "auswahl"; label: string; optionen: readonly string[] } | { typ: "monat"; label: string };
  /** Weitere Felder je Variante. */
  breite?: boolean;
  unternehmen?: boolean;
  objektart?: boolean;
  /** Freitext „Was wird gefertigt“ (Serie). */
  gegenstand?: string;
  /** „Einmalig oder laufend“ (Serie). */
  laufzeit?: AuswahlFeld;
  /**
   * Stufen des Budgetrahmens, von Fast zu nennen. Leer = Feld erscheint nicht.
   * Eintragen genügt, das Formular zeigt das Feld dann von selbst.
   */
  budgetStufen: readonly string[];
}

const ZEITRAUM_PRIVAT = {
  typ: "auswahl",
  label: "Zeitraum",
  optionen: ["in 3 Monaten", "in 3 bis 6 Monaten", "später", "Neubau, Termin steht"],
} as const;

export const VARIANTEN: Record<AnfrageVariante, VariantenInhalt> = {
  kueche: {
    zeile: "Küchenberatung",
    ueberschrift: "Ihre Küche besprechen wir persönlich",
    einleitung:
      "Schildern Sie uns kurz Raum und Vorhaben. Andreas Fast meldet sich bei Ihnen und kommt zum Aufmaß zu Ihnen nach Hause. Das Aufmaß ist kostenlos.",
    button: "Küchenberatung anfragen",
    umfang: {
      label: "Umfang",
      optionen: [
        "Neue Küche komplett",
        "Küchenzeile",
        "Küche mit Schräge oder Nische",
        "Einzelne Schränke oder Ergänzung",
      ],
    },
    zeitraum: ZEITRAUM_PRIVAT,
    budgetStufen: [],
  },
  privat: {
    zeile: "Beratung und Aufmaß",
    // Seiten übergeben ihre Überschrift selbst („Ihren Einbauschrank planen wir bei Ihnen vor Ort“),
    // damit Artikel und Fall des Möbels stimmen. Dies ist der Ersatz ohne Möbelnamen.
    ueberschrift: "Ihr Vorhaben planen wir bei Ihnen vor Ort",
    einleitung:
      "Nischen, Schrägen und schiefe Wände messen wir selbst. Wir kommen zum kostenlosen Aufmaß, beraten zu Aufteilung und Material und bauen in unserer Werkstatt. Die Montage macht unser eigenes Team.",
    button: "Beratung anfragen",
    umfang: {
      label: "Umfang",
      optionen: ["Ein Möbelstück", "Mehrere Möbel oder ein ganzer Raum", "Ganzes Haus oder Neubau"],
    },
    zeitraum: ZEITRAUM_PRIVAT,
    breite: true,
    budgetStufen: [],
  },
  gewerbe: {
    zeile: "Projektanfrage",
    ueberschrift: "Ihr Projekt, ein Ansprechpartner",
    einleitung:
      "Schicken Sie uns Grundriss, Fotos oder eine kurze Beschreibung. Andreas Fast klärt mit Ihnen Umfang und Termine und bleibt bis zur Montage Ihr Ansprechpartner.",
    button: "Projekt anfragen",
    umfang: {
      label: "Umfang",
      optionen: ["Einzelne Möbel", "Ein Raum oder Bereich", "Komplette Einrichtung", "Mehrere Standorte"],
    },
    zeitraum: { typ: "monat", label: "Fertigstellung bis (Monat)" },
    unternehmen: true,
    objektart: true,
    budgetStufen: [],
  },
  serie: {
    zeile: "Serienanfrage",
    ueberschrift: "Stückzahl, Maße, Termin: mehr brauchen wir für den Anfang nicht",
    einleitung:
      "Senden Sie uns Zeichnung oder Foto eines Musters und die Stückzahl. Wir prüfen Machbarkeit und Fertigungszeit und melden uns mit einer Einschätzung.",
    button: "Serie anfragen",
    umfang: { label: "Stückzahl", optionen: ["1–10", "11–50", "51–200", "über 200"] },
    zeitraum: { typ: "monat", label: "Liefertermin (Monat)" },
    unternehmen: true,
    gegenstand: "Was wird gefertigt?",
    laufzeit: { label: "Einmalig oder laufend", optionen: ["Einmalig", "Laufend"] },
    budgetStufen: [],
  },
  neutral: {
    zeile: "Anfrage",
    ueberschrift: "Sprechen Sie mit uns über Ihr Vorhaben",
    einleitung: "Schildern Sie uns kurz, worum es geht. Andreas Fast meldet sich bei Ihnen.",
    button: "Anfrage senden",
    umfang: {
      label: "Worum geht es?",
      optionen: [
        "Küche",
        "Einbauschrank oder Hauswirtschaftsraum",
        "Einrichtung für Praxis, Laden, Gastronomie oder Büro",
        "Serie",
      ],
    },
    budgetStufen: [],
  },
};

/** Feld „Zahl der Arbeitsplätze“ (nur Serie, nur mit Schalter `leitstelle`). */
export const ARBEITSPLAETZE_LABEL = "Zahl der Arbeitsplätze";

/** Streifen am Seitenende: eine Zeile je Variante, Link zum Block. */
export const STREIFEN: Record<AnfrageVariante, { text: string; linkText: string }> = {
  kueche: { text: "Sie möchten Ihre Küche persönlich besprechen?", linkText: "Zur Küchenberatung" },
  privat: { text: "Sie möchten Ihr Vorhaben persönlich besprechen?", linkText: "Zur Beratung" },
  gewerbe: { text: "Sie planen ein Projekt?", linkText: "Zur Projektanfrage" },
  serie: { text: "Sie planen eine Serie?", linkText: "Zur Serienanfrage" },
  neutral: { text: "Sie haben ein Vorhaben?", linkText: "Zur Anfrage" },
};
