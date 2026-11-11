/**
 * Content for the `/bueroeinrichtung/bueroschraenke-nach-mass/` page: the
 * "Büroschränke nach Maß" cluster child (Produkt) under the Büroeinrichtung pillar
 * (`/bueroeinrichtung/`, Gewerbe-Silo `buero`). Same section set as the sibling
 * `bueromoebel-nach-mass` (Vorlage), plus a second SpecTable (Fronten) and a
 * second SegmentCards block, so each section carries one topic.
 * Winkel laut Cluster-Map buero.md: Stauraum und Ablage im Büro, der Ordner als
 * Maßgabe. NICHT das Möbelprogramm (→ bueromoebel-nach-mass, verlinkt), NICHT die
 * Planungs-Dienstleistung (→ bueroplanung, verlinkt), NICHT der Privat-Einbauschrank.
 *
 * Voice = Fast Systemmöbel (sachlich-handwerklich, B2B, Sie-Form, keine
 * em-dashes). Fakten gegen docs/seo/brand/FACTS.md + kundenwissen.md geprüft:
 * Meisterbetrieb Espelkamp (ohne Jahr), Eigenfertigung, Homag-Maschinen,
 * PU-Kantenverleimung (fugenlos/feuchtigkeitsbeständig, NICHT wasserfest),
 * kostenloses Aufmaß, eigenes Montageteam, Montage ~200 km um Espelkamp,
 * Lieferung bundesweit. KEINE Preise, keine Traglasten, kein Schlosssystem,
 * kein "DSGVO-konform", keine Finanzierung (Gewerbe). Ordnerwerte = allgemeine
 * Formatmaße als Rechenhilfe, keine Fast-Spezifikation (Kit §9b-4).
 *
 * Copy: Authoring-Engine aus dem Research-Kit
 * (docs/seo/research/bueroschraenke-nach-mass.kit.md), Lauf 2026-11-04, plus die
 * vier Chefredakteur-Fixes dieses Laufs (col1Body, Bauform-Titel 4, Kostenzeile
 * „Höhe und Einbau", Ordner-Intro); Retry-Lauf 2026-11-11 auf diesem Bestand,
 * Chefredakteur pass. Bildpfade sind Platzhalter aus dem Büro-Pool,
 * Alt-Texte beschreiben das jeweilige Motiv (siehe Bild-Vorschläge).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/bueroeinrichtung/bueroschraenke-nach-mass/";
const IMG = "/images/bueroeinrichtung";

export const bsHero = {
  bgImage: `${IMG}/aktenschrankwand-nach-mass-buero.jpg`,
  imageAlt: "Büro mit weißem Sideboard mit Schubkästen, raumhohen Aktenschränken und einem Arbeitsplatz davor",
  title: "Büroschränke und Aktenschränke nach Maß",
  intro:
    "Ein Büroschrank nach Maß ist ein Akten- und Ordnerschrank, der genau in Ihren Raum passt, mit Fächern, die sich nach Ihren Ordnern richten. Wir fertigen ihn in unserem Meisterbetrieb in Espelkamp. Zum Aufmaß und zur Montage kommt unser eigenes Team.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Gewerbe", href: "/gewerbe/" },
    { label: "Büroeinrichtung", href: "/bueroeinrichtung/" },
    { label: "Büroschränke nach Maß" },
  ],
};

export const bsIntroStats = {
  since: "seit 1996",
  sinceSub: "Fertigen wir Schränke, die auf den Millimeter in Ihren Raum passen.",
  heading: "Erst zählen, dann bauen",
  introBefore: "Ihr Schrank richtet sich nach Ihrem Aktenbestand und nach Ihrer",
  introBold: "Wand",
  introAfter: ", nicht nach einem Katalograster.",
  bandImage: `${IMG}/bueroeinrichtung-arbeitsplaetze-grossraumbuero.jpg`,
  bandAlt: "Großraumbüro mit Arbeitsplätzen, Rollcontainern und Stauraum nach Maß",
  col1Title: "Vom Aktenbestand zum Schrank",
  col1Body:
    "Bevor wir zeichnen, zählen wir Ihre Ordner. Daraus folgt die Fächerzahl, und wir prüfen, ob Wand und Decke dafür reichen.",
  col1CtaLabel: "Büroschrank anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Ihr Schrank entsteht in Espelkamp, in unserer eigenen Werkstatt. Soll gleich das ganze Büro neu werden? Dann kommt die [maßgefertigte Büroeinrichtung](/bueroeinrichtung/) aus derselben Hand.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Aufmaß und Einbau mit eigenem Team",
  col3Body:
    "Bis rund 200 km um Espelkamp messen wir selbst auf und bauen selbst ein, ob in Minden, Lübbecke, Bielefeld oder Osnabrück. Weiter weg liefern wir deutschlandweit.",
  col3CtaLabel: "Schrank online vorplanen",
  col3CtaHref: "/moebelplaner/",
};

export const bsCtas = {
  intro: {
    image: `${IMG}/buero-galerie-schrankwand.jpg`,
    heading: "Sie haben die Ordner, wir bauen den Schrank dazu.",
    linkText: "Beratung zum Büroschrank anfragen",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/schreibtisch-nach-mass-betonoptik-buero.jpg`,
    heading: "Ihr Büroschrank nach Maß beginnt mit einem Termin vor Ort.",
    linkText: "Kostenloses Aufmaß anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Fragen zu Ordnern, Maßen oder Fronten? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SpecTable (shared): Tabelle 1 „Der Ordner als Maßgabe" (Kit §3). Allgemeine Formatwerte, keine Fast-Spezifikation. */
export const bsOrdner = {
  heading: "Wie viel passt hinein? Der Ordner gibt das Maß vor",
  intro:
    "Die Werte beruhen auf den gerundeten Formatmaßen eines stehenden A4-Ordners. Sie dienen als Rechenhilfe für Ihren Bestand und sind keine festen Maße unserer Fertigung. Verbindlich wird jedes Maß erst nach dem kostenlosen Aufmaß.",
  firstColLabel: "Planungsgröße",
  columns: ["Richtwert (ca.)", "Was es für den Schrank heißt"],
  highlightColumn: 0,
  rows: [
    {
      label: "A4-Ordner, stehend",
      values: [
        "rund 32 cm hoch, rund 28,5 cm tief, Rücken 8 cm (breit) oder 5 cm (schmal)",
        "Daran hängen Fachhöhe, Innentiefe und Kapazität des Schranks",
      ],
    },
    {
      label: "Lichte Fachhöhe",
      values: [
        "rund 33 bis 35 cm zwischen den Fachböden, also Ordnerhöhe plus Griffluft",
        "Mit verstellbaren Fachböden passen auch Stehsammler oder Ablagekörbe",
      ],
    },
    {
      label: "Ordner je Meter Fachboden",
      values: [
        "ca. 12 breite oder ca. 20 schmale Ordner",
        "Hochgerechnet auf Fachbreite und Fächerzahl ergibt das die Kapazität",
      ],
    },
  ],
};

/** SegmentCards (shared): Bauformen (Kit §3 Zeile 3). */
export const bsBauformen = {
  heading: "Welche Bauform passt zu Ihrem Büro?",
  intro:
    "Die Form gibt der Raum vor, vor allem die Länge der Wand und die Lage der Fenster. Gemischt geht auch, etwa raumhoch an der Innenwand und halbhoch unter dem Fenster.",
  segments: [
    {
      title: "Raumhohe Aktenschrankwand",
      body: "Von Wand zu Wand, bis unter die Decke und ohne Passleisten an den Seiten. Oben bleibt keine Ablage für Staub und abgestellte Kartons. Das Archiv wandert nach oben. Unten steht, was Sie täglich brauchen.",
    },
    {
      title: "Halbhoher Aktenschrank unter dem Fenster",
      body: "Unter der Fensterbrüstung nimmt der halbhohe Schrank kein Licht weg. Oben drauf haben Drucker und Post Platz. Wir bauen ihn so lang, wie die Wand es hergibt, gern auch über mehrere Fenster hinweg.",
    },
    {
      title: "Freistehende Schrankzeile",
      body: "Mitten im Raum trennt die Schrankzeile Arbeitsplätze und Laufwege. Die Rückseite fertigen wir als Sichtseite, damit die Zeile von beiden Seiten ordentlich aussieht. Mit Schiebetüren bleibt auch der Gang davor frei.",
    },
    {
      title: "Aktenschrank für Nische und Dachschräge",
      body: "Der Schrank richtet sich nach dem, was der Raum vorgibt: die Dachschräge im Obergeschoss, eine Nische neben der Tür, Fenster, Heizkörper, Steckdosen. Wie wir die einzelne Stelle lösen, klären wir beim Aufmaß.",
    },
    {
      title: "Abschließbarer Aktenschrank",
      body: "Für Personal-, Mandanten- oder Patientenakten planen wir auf Wunsch abschließbare Fächer ein. So bleiben vertrauliche Unterlagen unter Verschluss. Was das für den Datenschutz bedeutet, lesen Sie weiter unten.",
    },
    {
      title: "Container und Sideboard am Arbeitsplatz",
      body: "Was Sie am Platz griffbereit brauchen, kommt in den Rollcontainer unter dem Tisch oder ins Sideboard daneben. Den passenden Schreibtisch bauen wir im selben Stil. Er gehört zu unserem Programm für [maßgefertigte Büromöbel](/bueroeinrichtung/bueromoebel-nach-mass/).",
    },
  ],
};

/** SpecTable (shared): Tabelle 2 „Fronten im Büro" (Kit §3 Zeile 4). Kriterium = Platz vor dem Schrank. */
export const bsFronten = {
  heading: "Welche Front passt: Drehtür, Schiebetür oder offen?",
  intro:
    "Entscheidend ist der Platz vor dem Schrank. Im schmalen Flur ist eine aufschwingende Tür im Weg, im Archivraum stört sie niemanden. Mehrere Fronten in einem Schrank? Geht auch.",
  firstColLabel: "Front",
  columns: ["Platz vor dem Schrank", "Zugriff", "Gut für"],
  rows: [
    {
      label: "Drehtüren",
      values: ["Schwenkraum etwa so breit wie die Tür", "Ganzer Schrankteil auf einen Blick", "Büro oder Archivraum mit freier Fläche davor"],
    },
    {
      label: "Schiebetüren",
      values: ["Kein Schwenkraum", "Immer nur ein Teil offen", "Flur, schmales Büro, Schrankzeile am Gang"],
    },
    {
      label: "Offene Fächer",
      values: ["Kein zusätzlicher Platz", "Sofort, ohne Tür", "Laufende Vorgänge und Handablage, neben geschlossenen Fächern"],
    },
    {
      label: "Auszüge",
      values: ["Platz zum Herausziehen", "Von oben, Mappe für Mappe", "Hängeregistratur und Kleinmaterial"],
    },
  ],
};

/** UspHighlight (shared): Vertraulichkeit sachlich (Kit §3 Zeile 5, §7b EUR-Lex). */
export const bsVertraulich = {
  eyebrow: "Vertrauliche Unterlagen",
  heading: "Reicht ein abschließbarer Schrank für den Datenschutz?",
  body:
    "Ein abschließbarer Schrank kann ein Baustein Ihres Datenschutzes sein. Geordnet abgelegte Papierakten mit personenbezogenen Daten fallen unter die DSGVO, und [Art. 32 DSGVO (EUR-Lex)](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679) verlangt geeignete technische und organisatorische Maßnahmen. Welches Schutzniveau Ihre Akten brauchen, legt Ihr Datenschutzkonzept fest, nicht der Tischler. Wir setzen die abschließbaren Fächer dorthin, wo Ihre Abläufe sie brauchen.",
  image: `${IMG}/bueroschrankwand-nach-mass-grau.jpg`,
  imageAlt: "Freistehende Büroschrankzeile mit dunkelgrauen Schiebetüren entlang einer Glaswand, oben Ablagekörbe",
};

/** SegmentCards (shared): Material, Kante, Fertigung (Kit §3 Zeile 6, §9a-5/6/7). */
export const bsMaterial = {
  heading: "Material und Verarbeitung im Büroalltag",
  intro:
    "Ein Aktenschrank geht jeden Tag auf und zu, oft im Wechsel von mehreren Leuten. Bei Oberfläche und Kante zählt deshalb mehr als die Optik.",
  segments: [
    {
      title: "Oberflächen nach Ihrem Raum",
      body: "Einen festen Katalog haben wir nicht. Fronten und Oberflächen richten sich nach Ihrem Raum, ob Massivholz oder branchenübliche Werkstoffe. Was zu Boden, Türen und Schreibtischen passt, suchen wir gemeinsam mit Ihnen aus.",
    },
    {
      title: "PU-Kante an Fachboden und Front",
      body: "Die Vorderkanten von Fachböden und Fronten haben es am schwersten. Jeden Tag streifen Ordner und Hände daran entlang. Wir verschließen sie deshalb mit PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig.",
    },
    {
      title: "Meisterbetrieb in Espelkamp",
      body: "Jedes Teil fertigen wir in unserem Familienbetrieb selbst, auf Homag-Maschinen. Viele komplette Büroeinrichtungen in Ostwestfalen-Lippe kommen aus dieser Werkstatt.",
    },
  ],
};

/** ProcessSteps (shared): 5 Schritte (Kit §3 Zeile 8). */
export const bsProcess = {
  eyebrow: "Ablauf",
  heading: "Wie Ihr Aktenschrank nach Maß entsteht",
  image: `${IMG}/buero-galerie-arbeitsplatz.jpg`,
  imageAlt: "Schreibtisch nach Maß mit Rollcontainer an einer Sichtbetonwand",
  steps: [
    {
      title: "Bestand und Raum besprechen",
      description:
        "Am Telefon oder vor Ort klären wir, was hinein soll und was unter Verschluss gehört. Ist noch offen, wo welcher Stauraum hinkommt, hilft unsere [Büroplanung](/bueroeinrichtung/bueroplanung/).",
    },
    {
      title: "Kostenloses Aufmaß",
      description:
        "Wir kommen zu Ihnen und messen Wandlänge, Deckenhöhe und jede Aussparung aus. Ihren Aktenbestand sehen wir uns dabei gleich mit an.",
    },
    {
      title: "3D-Planung",
      description:
        "Aus Aufmaß und Bestand entsteht die 3D-Planung mit Fachaufteilung und Fronten. Sie geben erst frei, wenn alles passt.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Nach Ihrer Freigabe schneiden wir Korpus, Fachböden und Fronten zu und verleimen die Kanten. Alles in der eigenen Werkstatt.",
    },
    {
      title: "Montage durch unser Team",
      description:
        "Wir bauen den Schrank ein und richten ihn aus, im Umkreis von rund 200 km um Espelkamp. Für weiter entfernte Orte liefern wir bundesweit.",
    },
  ],
};

/** SpecTable (shared): Tabelle 3 Kostenfaktoren. KEINE Preise/€-Zahlen (Kit §8). */
export const bsKosten = {
  heading: "Was kostet ein Büroschrank nach Maß?",
  intro:
    "Der Preis hängt von Ihrem Aktenbestand und Ihrem Raum ab. Deshalb nennen wir ihn erst nach dem kostenlosen Aufmaß. Was in Ihrem individuellen Angebot steht, bestimmen diese Punkte.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    { label: "Aktenmenge", values: ["Je mehr laufende Meter Ordner, desto mehr Fächer braucht der Schrank."] },
    {
      label: "Bauform und Einbau",
      values: ["Halbhoch unter dem Fenster, freistehende Zeile oder raumhoch wand-zu-wand, dazu Nische, Dachschräge oder Aussparungen."],
    },
    { label: "Fronten", values: ["Offene Fächer, Drehtüren, Schiebetüren oder Auszüge, auch gemischt in einem Schrank."] },
    { label: "Innenleben und Schloss", values: ["Wie viele verstellbare Fachböden es werden und welche Fächer abschließbar sein sollen."] },
    { label: "Oberfläche", values: ["Material der Fronten und Korpusse, bei einer freistehenden Zeile auch die Rückseite als Sichtseite."] },
    { label: "Aufwand vor Ort", values: ["Wie aufwendig Anlieferung und Einbau sind, etwa bei engem Treppenhaus oder Schränken in mehreren Räumen."] },
  ],
};

export const bsMoebelplaner = {
  heading: "Ihren Büroschrank vorab online skizzieren",
  body:
    "Im [Möbelplaner](/moebelplaner/) planen Sie Maße, Fronten und Fächer Ihres Schranks vor, soweit Sie sie schon kennen. Bestellt ist damit noch nichts. Ihr Entwurf ist die Grundlage für unsere Beratung. Danach messen wir auf, fertigen und montieren.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/bueroeinrichtung-empfang-kuechenzeile.jpg`,
  imageAlt: "Empfangsbereich mit Küchenzeile und Holzlamellen-Wand nach Maß",
};

export const bsTestimonialsHeading = "Was Kunden über die Zusammenarbeit mit uns sagen";

export const bsFaq = {
  heading: "Häufige Fragen zu Büroschränken nach Maß",
  items: [
    {
      question: "Was bedeutet „5 OH“ bei Aktenschränken, und braucht ein Schrank nach Maß dieses Raster?",
      answer:
        "OH steht für Ordnerhöhe. Bei Serienschränken heißt 5 OH: fünf Ordnerreihen übereinander. Nach Maß brauchen Sie dieses Raster nicht. Jedes Fach wird so hoch wie sein Inhalt, der Schrank auf Wunsch so hoch wie der Raum.",
    },
    {
      question: "Wie tief muss ein Büroschrank für Aktenordner sein?",
      answer:
        "Innen ab rund 30 cm. Das reicht für einen stehenden A4-Ordner mit etwas Luft. Außen kommen Rückwand und Front dazu, bei Schiebetüren noch etwas Lauftiefe. Das genaue Maß steht nach dem Aufmaß fest.",
    },
    {
      question: "Wie viele Ordner passen in eine Schrankwand?",
      answer:
        "Bei einer 3 m breiten Wand mit 5 Ordnerfächern übereinander sind es rund 180 breite Ordner (3 × 12 × 5). Seiten- und Mittelwände kosten etwas Platz, es werden also ein paar weniger.",
    },
    {
      question: "Was sollte ich vor dem Aufmaß vorbereiten?",
      answer:
        "Messen Sie Ihren Bestand grob in laufenden Metern und notieren Sie, ob es breite oder schmale Ordner sind. Kommen Hängemappen dazu? Muss etwas abschließbar sein? Auch Fotos der Wand mit Fenstern, Heizkörpern und Steckdosen helfen.",
    },
    {
      question: "Lassen sich Auszüge für Hängeregister einbauen?",
      answer:
        "Ja, auf Anfrage planen wir Auszüge für Hängeregister ein. Beim Aufmaß nehmen wir das Format Ihrer Hängemappen auf, damit der Auszug genau passt.",
    },
    {
      question: "Wann steht der Montagetermin fest?",
      answer:
        "Sobald das Aufmaß gemacht ist und Sie die 3D-Planung freigegeben haben, nennen wir Ihnen einen verbindlichen Termin. Eine Wochenzahl vorab wäre nur geraten. Jeder Schrank ist anders geplant.",
    },
  ],
};

const bsTypes = bsBauformen.segments.map((s) => s.title);

/**
 * JSON-LD wie beim Geschwister bueromoebel-nach-mass: Service + OfferCatalog
 * (Bauformen als itemOffered), BreadcrumbList (4 Ebenen), FAQPage (1:1 zur
 * sichtbaren FAQ), ItemList. Kein offers/aggregateRating (Preise individuell).
 */
export const bsJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Büroschränke nach Maß",
    serviceType: "Maßgefertigte Büro- und Aktenschränke",
    url: `${SITE}${PATH}`,
    provider: {
      "@type": "Organization",
      name: "Fast Systemmöbel",
      url: `${SITE}/`,
      telephone: "+4957719138312",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Alte Waldstraße 32",
        postalCode: "32339",
        addressLocality: "Espelkamp",
        addressRegion: "Nordrhein-Westfalen",
        addressCountry: "DE",
      },
    },
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: 52.3833, longitude: 8.6167 },
        geoRadius: "200000",
      },
      { "@type": "Country", name: "DE" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Büroschränke nach Maß",
      itemListElement: bsTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Gewerbe", item: `${SITE}/gewerbe/` },
      { "@type": "ListItem", position: 3, name: "Büroeinrichtung", item: `${SITE}/bueroeinrichtung/` },
      { "@type": "ListItem", position: 4, name: "Büroschränke nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bsFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Büroschränke nach Maß: Bauformen",
    itemListElement: bsTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
