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
 *       <LeistungAnfrage variante="serie" seite="Serienmöbel" />
 *       <LeistungAnfrage variante="leitstelle" seite="Leitstellenmöbel" />
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
 * Nur Belegtes (FACTS.md): Preise nur als Küchen-Orientierung und als Beispiele
 * aus dem Möbelplaner, Lieferzeit nur für Planer-Möbel, keine Garantien.
 * Rückmelde-Zeit und kostenloses Aufmaß (auch Gewerbe) sind bestätigt.
 */

export type AnfrageVariante = "kueche" | "privat" | "gewerbe" | "serie" | "leitstelle" | "neutral";

/** Ansprechpartner für Anfragen. Funktion vom Kunden bestätigt (FACTS.md, 2026-11-24). */
export const ANSPRECHPARTNER = {
  vorname: "Andreas",
  name: "Andreas Fast",
  funktion: "Tischlermeister, Vertrieb und Projektleitung",
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

/** Zugesagte Rückmelde-Zeit (vom Kunden bestätigt, FACTS.md 2026-11-24). Nur hier ändern. */
export const RUECKMELDUNG = "am selben oder nächsten Werktag";

/** Text nach dem Absenden. */
export const DANKE = `Danke. ${ANSPRECHPARTNER.name} meldet sich ${RUECKMELDUNG} bei Ihnen.`;

/** Kurzer Hinweis unter dem Button: was nach dem Absenden passiert. */
export const NACH_DEM_ABSENDEN = `${ANSPRECHPARTNER.name} meldet sich ${RUECKMELDUNG}.`;

/**
 * Orientierung für Küchen, vom Kunden bestätigt (FACTS.md, 2026-11-24). Kein
 * Festpreis und kein „ab“-Preis. Steht als `preisZeile` im Block der Küchen-Seiten.
 */
export const KUECHEN_PREISZEILE =
  "Eine Küchenzeile nach Maß liegt bei uns meist zwischen 8.000 und 15.000 Euro, eine Küche über Eck oder mit Insel zwischen 15.000 und 30.000 Euro. Darin sind Möbel, Arbeitsplatte und Montage enthalten, Geräte kommen dazu. Den genauen Preis nennen wir nach dem Aufmaß.";

/**
 * Beispielpreise aus dem öffentlichen Möbelplaner (FACTS.md, Ausnahme Planer).
 * Gerundet, je Beispiel mit Maß und Ausführung, Möbelpreis inkl. MwSt., zzgl.
 * Lieferung und Montage, kein Festpreis und kein „ab“. Jeder Wert ist im Planer
 * von Hand nachgestellt. Der Planer ist live: Stand mitführen und halbjährlich
 * prüfen. Die Preiszeile im Anfrageblock liest die Werte von hier. Die Kosten-Fragen
 * und Kosten-Abschnitte der Inhaltsmodule tragen denselben Satz als festen Text
 * (das Link-Audit importiert die Module ohne Auflösung von Geschwister-Importen).
 * Bei einer Änderung alle Stellen mitziehen: `grep -rn "Stand November 2026" src/lib/content`.
 * Für Küche gilt `KUECHEN_PREISZEILE`, für Gewerbe gibt es keine Zahl.
 */
export const PLANER_STAND = "November 2026";

const PLANER_VORSPANN = `Zur Orientierung aus unserem Möbelplaner (Stand ${PLANER_STAND}): `;
const PLANER_HINWEIS =
  "Das ist der Möbelpreis inkl. MwSt., Lieferung und Montage kommen dazu. Den genauen Preis nennen wir nach dem Aufmaß.";

/** Nur die Beispielsätze, ohne Vorspann und Hinweis (für Fließtext und Tabellen). */
export const PLANER_BEISPIELE = {
  einbauschrank:
    "Ein Einbauschrank in Weiß mit Türen, 2,50 m hoch, kostet für eine 1 m breite Nische rund 1.100 Euro, für 2 m rund 1.500 Euro und für 3 m rund 2.400 Euro.",
  kleiderschrank:
    "Ein frei stehender Kleiderschrank in Weiß mit Türen, 2,30 m hoch, kostet bei 1 m Breite rund 1.200 Euro, bei 2 m rund 1.800 Euro und bei 3 m rund 2.500 Euro. Mit 2 m Breite in Hellgrau sind es rund 1.900 Euro, in Eiche-Dekor rund 2.200 Euro.",
  dachschraege:
    "Ein Schrank unter der Dachschräge in Weiß mit Türen (Kniestock 86 cm, Raumhöhe 2,30 m) kostet für eine 1 m breite Nische rund 1.200 Euro und für 2 m rund 1.600 Euro. Unter einer flachen Schräge liegt ein 1,80 m breiter Schrank bei rund 1.400 Euro. Für eine 2,80 m breite Nische sind es je nach Höhe rund 2.600 bis 2.700 Euro.",
  hauswirtschaftsraum:
    "Eine Schrankwand in Weiß, 2,80 m breit und 2 m hoch, großteils offen, kostet rund 2.800 Euro. Ein raumhoher Schrank, 3,50 m breit, mit Holzfronten und Innenausstattung liegt bei rund 4.100 Euro.",
  bad:
    "Ein Waschtischunterschrank mit 1,60 m Breite kostet in Weiß mit hellem Holz rund 800 Euro, in Kristallweiß mit Türen und Auszügen rund 1.700 Euro. Mit 1 m Breite in Weiß und Eiche mit Auszügen sind es rund 1.000 Euro, mit 2,10 m Breite in gebleichter Eiche mit Schubkästen rund 2.800 Euro.",
  wohnmoebel:
    "Ein Lowboard, 1,60 m breit, mit Holzrahmen und weißen Fronten kostet rund 1.100 Euro, ein Sideboard, 2 m breit, in Eiche und Weiß rund 1.500 Euro und ein Lowboard, 2,45 m breit, in Eiche greige rund 2.400 Euro. Eine Regalwand mit 1,50 m Breite liegt bei rund 1.500 Euro, eine Regalwand in Eiche, 3 m breit und 2,40 m hoch, bei rund 3.600 Euro.",
  regal:
    "Eine offene Regalwand in Sandbeige, 3 m breit und 2,50 m hoch, kostet rund 2.200 Euro. Eine Regalwand mit 1,50 × 1,50 m und farbigen Türen liegt bei rund 1.500 Euro.",
  regalwand:
    "Eine offene Regalwand in Sandbeige, 3 m breit und 2,50 m hoch, kostet rund 2.200 Euro.",
} as const;

export type PlanerBeispiel = keyof typeof PLANER_BEISPIELE;

/** Ganzer Satz mit Vorspann (Stand) und Hinweis: Preiszeile im Block und Kosten-Fragen. */
export function planerPreis(art: PlanerBeispiel): string {
  return `${PLANER_VORSPANN}${PLANER_BEISPIELE[art]} ${PLANER_HINWEIS}`;
}

/** Eine Zeile unter dem Block, nur auf Privat-Seiten (Variante „privat“). Lieferzeit gilt nur für Planer-Möbel. */
export const MOEBELPLANER_ZEILE =
  "Lieber erst selbst probieren? Im [Möbelplaner](/moebelplaner/) sehen Sie Maße, Dekore und einen Richtpreis. Möbel aus dem Planer liefern wir meist in 3 bis 5 Wochen.";

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
  /** Feld zur Größe (im aufklappbaren Bereich, freiwillig). Fehlt bei „leitstelle“ (dort `arbeitsplaetze`). */
  umfang?: AuswahlFeld;
  /** Zahl der Arbeitsplätze statt Stückzahl (Leitstelle): Textfeld mit Hilfetext, freiwillig, kein Pflichtfeld. */
  arbeitsplaetze?: { label: string; hinweis: string };
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
      "Schicken Sie uns Grundriss, Fotos oder eine kurze Beschreibung. Andreas Fast klärt mit Ihnen Umfang und Termine und bleibt bis zur Montage Ihr Ansprechpartner. Das Aufmaß vor Ort ist kostenlos.",
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
  leitstelle: {
    zeile: "Leitstellenanfrage",
    ueberschrift: "Zahl der Arbeitsplätze, Maße, Termin: mehr brauchen wir für den Anfang nicht",
    einleitung:
      "Senden Sie uns Grundriss oder Zeichnung und die Zahl der Arbeitsplätze. Wir prüfen Maße und Fertigbarkeit und melden uns mit einer Einschätzung.",
    button: "Leitstelle anfragen",
    arbeitsplaetze: {
      label: "Zahl der Arbeitsplätze",
      hinweis: "Wenn bekannt, nennen Sie in der Nachricht gern die Monitore je Platz und ob rund um die Uhr gearbeitet wird.",
    },
    zeitraum: { typ: "monat", label: "Wunschtermin (Monat)" },
    unternehmen: true,
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

/** Streifen am Seitenende: eine Zeile je Variante, Link zum Block. */
export const STREIFEN: Record<AnfrageVariante, { text: string; linkText: string }> = {
  kueche: { text: "Sie möchten Ihre Küche persönlich besprechen?", linkText: "Zur Küchenberatung" },
  privat: { text: "Sie möchten Ihr Vorhaben persönlich besprechen?", linkText: "Zur Beratung" },
  gewerbe: { text: "Sie planen ein Projekt?", linkText: "Zur Projektanfrage" },
  serie: { text: "Sie planen eine Serie?", linkText: "Zur Serienanfrage" },
  leitstelle: { text: "Sie planen eine Leitstelle?", linkText: "Zur Leitstellenanfrage" },
  neutral: { text: "Sie haben ein Vorhaben?", linkText: "Zur Anfrage" },
};
