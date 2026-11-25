/**
 * Content for the `/leitstellenmoebel/` page: Gewerbe-Cluster-Pillar for Möbel für
 * Leitstellen, Leitstände, Leitwarten und Kontrollräume. Silo „leitstellen“, Eltern
 * `/gewerbe/`. Fast ist hier Tischlerei und Fertiger: Möbel nach Zeichnung, auch
 * mehrere gleiche Arbeitsplätze. Technik, Stühle, Videowall, Akustik und Installation
 * liefert Fast nicht.
 *
 * Voice = Fast Systemmöbel (sachlich-handwerklich, Sie-Form, Präsens). Fakten gegen
 * docs/seo/brand/FACTS.md (Abschnitt „Leitstellenmöbel“): rund 1.000 m² Fertigung,
 * Homag-/CNC-Technik, 72.000+ Teile, PU-Kantenverleimung (fugenlos, feuchtigkeitsbeständig),
 * 3D-Planung, kostenloses Aufmaß, eigenes Montageteam, Montage deutschlandweit auf
 * Anfrage, Lieferung bundesweit. Keine Normen, Zertifikate, Auftraggeber, Preise,
 * Lieferzeiten und keine Betriebsdauer als Möbeleigenschaft.
 *
 * Bilder: Werkstattmotive, die Alt-Texte beschreiben die Fertigung (docs/seo/bilder.md).
 * Inhaltsmodul: nur `import type` aus anderen Modulen (audit:links).
 */

export const leitstellenHero = {
  bgImage: "/images/leitstellenmoebel/leitstellenmoebel-fertigung-bearbeitungszentrum-halle.jpg",
  imageAlt: "Homag-Bearbeitungszentrum in der Fertigungshalle von Fast Systemmöbel in Espelkamp",
  title: "Leitstellenmöbel nach Maß vom Tischler",
  intro:
    "Wir fertigen Möbel für Leitstellen, Leitstände und Kontrollräume in unserer Tischlerei in Espelkamp, nach Ihrer Zeichnung, auch mehrere gleiche Arbeitsplätze.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Gewerbe", href: "/gewerbe/" },
    { label: "Leitstellenmöbel" },
  ],
};

export const leitstellenIntroStats = {
  since: "seit 1996",
  sinceSub: "Fertigen wir Möbel in Espelkamp.",
  heading: "Möbel für Leitstelle, Leitwarte und Kontrollraum",
  introBefore:
    "Ob Einsatzzentrale, Leitwarte oder Kontrollraum: Wir setzen Ihren Plan in Möbel um, vom ersten Muster bis zum letzten Platz.",
  introBold: "Mehrere Arbeitsplätze",
  introAfter: " fertigen wir nach demselben Muster, auch bei einer späteren Erweiterung.",
  bandImage: "/images/leitstellenmoebel/leitstellenmoebel-fertigung-plattenzuschnitte-detail.jpg",
  bandAlt: "Zuschnitte in Holzdekor und Anthrazit auf Rollwagen und Tisch vor einer Homag-Anlage",
  col1Title: "Leitstelle anfragen",
  col1Body:
    "Sie senden uns Grundriss, Zeichnung oder CAD-Daten. Wir prüfen die Fertigbarkeit, bauen auf Wunsch ein Mustermöbel zur Freigabe und fertigen danach alle Plätze. Leitstellentische, Pulte und Schränke entstehen nach Ihren Maßen auf Homag- und CNC-Technik.",
  col1CtaLabel: "Jetzt Leitstelle anfragen",
  col1CtaHref: "#anfrage",
  col2Body:
    "Planung, Fertigung und Montage kommen aus einem Haus. Sie haben einen festen Ansprechpartner und müssen für die Möbel keine zweite Firma koordinieren. Technik und Installation stimmen wir mit Ihrem Technik-Lieferanten ab.",
  counterTarget: 72,
  counterDuration: 2000,
  counterSuffix: "K+",
  col3Title: "gefertigte Einzelteile",
  col3Body:
    "Mehr als 72.000 Einzelteile hat unsere Fertigung verlassen. Wir liefern bundesweit, unser eigenes Montageteam baut deutschlandweit auf Anfrage auf. Das Aufmaß vor Ort ist kostenlos.",
  col3CtaLabel: "Leitstelle persönlich besprechen",
  col3CtaHref: "#anfrage",
};

export const leitstellenPlanung = {
  eyebrow: "Worauf es bei der Planung ankommt",
  heading: "Was bei Leitstellenmöbeln zählt",
  intro:
    "Diese Punkte legen Betreiber und Planer fest. Wir setzen sie in Möbel um und stimmen Maße und Aussparungen mit Ihnen ab.",
  segments: [
    {
      title: "Ergonomie und Sehabstände",
      body: "Sitz- und Arbeitshöhe, Monitorabstand und Blickwinkel stehen in Ihrer Planung. Wir fertigen den Leitstellentisch nach diesem Maß.",
    },
    {
      title: "Technik und Kabelwege",
      body: "Rechner, Netzteile und Kabel brauchen Platz und Wege. Wir bauen Aussparungen und Kabelwege dort ein, wo Ihr Plan sie vorsieht.",
    },
    {
      title: "Wärme und Belüftung",
      body: "Wo Geräte im Möbel stehen, braucht es Luft. Öffnungen und Fächer setzen wir nach den Angaben Ihres Technik-Lieferanten.",
    },
    {
      title: "Zugang für die Wartung",
      body: "Klappen, Revisionsöffnungen und Fächer machen die Technik erreichbar. Lage und Größe legen wir mit Ihnen vor der Fertigung fest.",
    },
    {
      title: "Nutzung durch mehrere Personen",
      body: "Ein Platz wird von wechselnden Personen genutzt. Oberflächen und Kanten legen wir nach Ihrer Vorgabe aus, unsere PU-Kante ist fugenlos und feuchtigkeitsbeständig.",
    },
    {
      title: "Gleiche Plätze",
      body: "In einer Leitstelle sollen Plätze nebeneinander gleich aussehen und gleich funktionieren. Jedes Teil läuft auf demselben Programm.",
    },
  ],
};

export const leitstellenFertigung = {
  eyebrow: "So fertigen wir",
  heading: "Nach Ihrer Zeichnung, Teil für Teil gleich",
  body:
    "Wir arbeiten nach Ihrer Zeichnung oder Ihren CAD-Daten und prüfen vorab, ob sich alles fertigen lässt. Eine 3D-Planung zeigt Ihnen das Möbel, bevor das erste Teil geschnitten wird. Auf Wunsch bauen wir ein Mustermöbel, das Sie freigeben. Danach schneiden und bohren wir alle Teile auf Homag- und CNC-Technik, jedes nach dem freigegebenen Programm. Die PU-Kantenverleimung verschließt die Kanten fugenlos und feuchtigkeitsbeständig.",
  image: "/images/leitstellenmoebel/leitstellenmoebel-fertigung-bohranlage-detail.jpg",
  imageAlt: "Homag-Bohr- und Bearbeitungsanlage mit Plattenzuschnitten im Vordergrund in der Werkhalle",
};

export const leitstellenSerie = {
  eyebrow: "Mehrere Arbeitsplätze",
  heading: "Ein Standard für alle Plätze",
  body:
    "Eine Leitstelle besteht selten aus einem Tisch. Wir fertigen mehrere gleiche Arbeitsplätze und bauen auf Wunsch ein Mustermöbel zur Freigabe, damit jeder Platz dem anderen entspricht. Wird die Leitstelle später erweitert, lassen sich weitere Plätze nachfertigen, weil Programm und Muster bleiben. Wie wir gleiche Möbel in größerer Zahl fertigen, steht unter [Möbel in Serie](/serienmoebel/).",
  stat: { value: "72.000+", label: "gefertigte Einzelteile" },
  image: "/images/leitstellenmoebel/leitstellenmoebel-fertigung-cnc-absaugung-detail.jpg",
  imageAlt: "Homag-CNC-Bearbeitungszentrum mit Absaugschlauch und Bedienpult in der Werkhalle in Espelkamp",
};

export const leitstellenUmfang = {
  eyebrow: "Klar abgegrenzt",
  heading: "Was wir liefern und was nicht",
  intro:
    "Leitstellenmöbel gehören zu unserer [Gewerbeeinrichtung](/gewerbe/). Wir sind Tischlerei und Fertiger, kein Anbieter für Leitstellentechnik.",
  negative: {
    title: "Nicht bei uns",
    points: [
      "Videowall und Großbildtechnik",
      "Rechner, Umschaltsysteme und Installation",
      "Stühle und Sitzmöbel",
      "Akustikelemente und Beleuchtung",
    ],
  },
  positive: {
    title: "Von uns",
    points: [
      "Leitstellentische, Pulte und Schränke nach Ihrer Zeichnung",
      "Aussparungen und Kabelwege nach Ihrem Plan",
      "Mehrere gleiche Plätze, auf Wunsch mit Mustermöbel zur Freigabe",
      "Lieferung bundesweit, Montage mit eigenem Team deutschlandweit auf Anfrage",
    ],
  },
};

export const leitstellenAblauf = {
  eyebrow: "In fünf Schritten",
  heading: "Von der Anfrage zur fertigen Leitstelle",
  image: "/images/leitstellenmoebel/leitstellenmoebel-fertigung-bearbeitungszentrum-detail.jpg",
  imageAlt: "Bearbeitungszentrum von Homag mit Bedienmonitor und einliegender Platte in der Werkhalle",
  steps: [
    {
      title: "Anfrage",
      description:
        "Sie schicken uns Grundriss, Zeichnung und die Zahl der Arbeitsplätze. Andreas Fast meldet sich am selben oder nächsten Werktag.",
    },
    {
      title: "Unterlagen oder Aufmaß vor Ort",
      description:
        "Wir gehen Ihre Unterlagen durch oder kommen zum Aufmaß in die Räume. Das Aufmaß ist kostenlos.",
    },
    {
      title: "Planung und Muster",
      description:
        "Wir planen in 3D, klären Aussparungen mit Ihrem Technik-Lieferanten und bauen auf Wunsch ein Mustermöbel zur Freigabe.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Alle Teile entstehen in Eigenregie in unserer Halle, ohne Zwischenhändler und ohne Subunternehmer.",
    },
    {
      title: "Lieferung und Montage",
      description:
        "Wir liefern bundesweit. Unser eigenes Team montiert, deutschlandweit auf Anfrage.",
    },
  ],
};

export const leitstellenFilm = {
  eyebrow: "Aus unserer Werkstatt",
  heading: "So entsteht ein Möbel bei uns",
  body:
    "Ein kurzer Blick in unsere Fertigung: Wir planen am Rechner, schneiden die Platten auf der CNC zu, setzen Beschläge und verleimen Korpusse in der Presse. Alles unter einem Dach, mit unserem eigenen Team.",
  chapters: ["Planung", "Konstruktion am Rechner", "Zuschnitt an der CNC", "Beschläge und Bohrungen", "Korpusse in der Presse"],
  video: {
    src: "/videos/werkstatt-fast-systemmoebel-espelkamp.mp4",
    poster: "/videos/werkstatt-fast-systemmoebel-espelkamp.webp",
    label:
      "Werkstattfilm ohne Ton: Mitarbeiter von Fast Systemmöbel planen am Rechner, schneiden Platten auf der CNC zu, montieren Beschläge und verleimen Korpusse in der Presse",
    width: 1280,
    height: 720,
  },
};

export const leitstellenFaq = {
  heading: "Häufige Fragen zu Leitstellenmöbeln",
  items: [
    {
      question: "Was brauchen Sie von uns für ein Angebot?",
      answer:
        "Am besten Zeichnung oder Grundriss, die Zahl der Arbeitsplätze, die Maße und Ihren Wunschtermin. Hilfreich sind außerdem eine Technikliste und Ihre Vorgaben zur Ergonomie, soweit vorhanden. Das Aufmaß vor Ort ist kostenlos. [Schicken Sie uns Ihre Unterlagen](/kontakt/), wir melden uns am selben oder nächsten Werktag.",
    },
    {
      question: "Fertigen Sie nach unseren Zeichnungen oder nach Vorgaben unseres Planers?",
      answer:
        "Ja, nach Zeichnung oder CAD-Daten. Wir prüfen die Fertigbarkeit und stimmen Fragen mit Ihnen oder Ihrem Planer ab. Vorab bauen wir auf Wunsch ein Mustermöbel zur Freigabe.",
    },
    {
      question: "Sind höhenverstellbare Leitstellentische möglich?",
      answer: "Ob Ihre Tische höhenverstellbar sein sollen, klären wir in der Planung.",
    },
    {
      question: "Wie werden Technik und Möbel zusammen geplant?",
      answer:
        "Wir fertigen die Möbel mit Aussparungen und Kabelwegen nach Ihrem Plan. Maße und Lage stimmen wir mit Ihrem Technik-Lieferanten ab, bevor wir fertigen.",
    },
    {
      question: "Können Sie weitere Arbeitsplätze später gleich nachfertigen?",
      answer:
        "Ja, Nachbestellungen sind möglich, weil Programm und Muster bleiben. Weitere Plätze lassen sich nach demselben Programm fertigen.",
    },
    {
      question: "Liefern und montieren Sie bundesweit?",
      answer:
        "Wir liefern bundesweit. Unser eigenes Montageteam baut deutschlandweit auf Anfrage auf, die Einzelheiten klären wir im ersten Gespräch.",
    },
    {
      question: "Was kostet ein Leitstellenmöbel?",
      answer:
        "Der Preis hängt von Maßen, Material, Zahl der Plätze und Ausführung ab. Eine Preisliste gibt es nicht, Sie erhalten ein individuelles Angebot nach Ihren Unterlagen oder dem Aufmaß.",
    },
  ],
};
