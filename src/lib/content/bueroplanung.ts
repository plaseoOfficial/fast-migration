/**
 * Content for the `/bueroeinrichtung/bueroplanung/` page: the "Büroplanung"
 * cluster child (Produkt/planungsnah) under the Büroeinrichtung pillar
 * (`/bueroeinrichtung/`, Gewerbe-Silo `buero`). Built from the shared library
 * sections (UspHighlight, SegmentCards, SpecTable, ProcessSteps) plus the Privat
 * hero/intro/planner sections, so each section carries one topic
 * (ARCHITECTURE.md §1.1). Winkel laut Cluster-Map buero.md: die DIENSTLEISTUNG
 * Planung (Bedarfsanalyse, Zonierung, Ergonomie, Akustik, Fläche/Normen), NICHT
 * der Möbelkatalog (der liegt bei /bueroeinrichtung/bueromoebel-nach-mass/).
 *
 * Voice = Fast Systemmöbel (sachlich-handwerklich, B2B, Sie-Form, keine
 * em-dashes). Fakten gegen docs/seo/brand/FACTS.md + kundenwissen.md geprüft:
 * Meisterbetrieb Espelkamp (ohne Jahr), >1.000 m² Fertigung, Homag/CNC,
 * kostenloses Aufmaß, eigenes Montageteam, 3D-Planung, Montage ~200 km um
 * Espelkamp, Lieferung bundesweit. KEINE Preise, keine Garantie-Zahl, keine
 * Finanzierung (Gewerbe), keine ASR-Zertifizierung (Normen nur als Richtwert).
 *
 * Copy: Authoring-Engine (Writer/Humanizer/QC/Chefredakteur) aus dem Research-Kit
 * (docs/seo/research/bueroplanung.kit.md), Lauf 2026-09-30, Chefredakteur pass
 * (1457 W, 9 FAQ). Bildpfade sind Platzhalter aus dem Büro-Pool, Alt-Texte
 * beschreiben das jeweilige Motiv (siehe REVIEW.md Bild-Vorschläge).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/bueroeinrichtung/bueroplanung/";
const IMG = "/images/bueroeinrichtung";

export const bpHero = {
  bgImage: `${IMG}/bueroeinrichtung-arbeitsplaetze-grossraumbuero.jpg`,
  imageAlt:
    "Großraumbüro mit Arbeitsplätzen, Rollcontainern und Stauraum nach Maß",
  title: "Büroplanung vom Meisterbetrieb aus Espelkamp",
  intro:
    "Büroplanung macht aus Ihrem Grundriss ein Büro, in dem gut gearbeitet wird. Wir planen Flächen, Zonen und Arbeitsplätze, fertigen die Büromöbel im eigenen Werk in Espelkamp und montieren sie mit unserem Team. So bekommen Sie Planung und Umsetzung aus einer Hand.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Gewerbe", href: "/gewerbe/" },
    { label: "Büroeinrichtung", href: "/bueroeinrichtung/" },
    { label: "Büroplanung" },
  ],
};

export const bpIntroStats = {
  since: "seit 1996",
  sinceSub: "Planen und fertigen wir Möbel nach Maß.",
  heading: "Ein Büro, das zu Ihren Räumen und Abläufen passt",
  introBefore: "Von der ersten",
  introBold: "Bedarfsanalyse",
  introAfter:
    " bis zur Montage planen wir Ihr Büro nach Grundriss und Arbeitsweise und setzen es mit dem eigenen Team um.",
  bandImage: `${IMG}/bueroeinrichtung-konferenzraum-glastisch.jpg`,
  bandAlt: "Konferenzraum mit Glastisch nach Maß und schwarzen Lederstühlen vor einer Backsteinwand",
  col1Title: "Planung und Umsetzung aus einer Hand",
  col1Body:
    "Wir planen Ihr Büro und bauen es auch: Zonierung, Arbeitsplätze und Stauraum, millimetergenau nach Grundriss. Was Sie brauchen, klären wir beim kostenlosen Aufmaß vor Ort.",
  col1CtaLabel: "Büroplanung anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Beratung, Planung, Fertigung und Montage laufen bei uns zusammen. Sie sprechen mit den Leuten, die Ihr Büro planen und bauen, im Rahmen der [Büroeinrichtung](/bueroeinrichtung/) nach Maß.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Planungsradius rund um Espelkamp",
  col3Body:
    "Beratung, Aufmaß und Montage übernimmt unser eigenes Team im Umkreis von rund 200 km: Minden, Bielefeld, Osnabrück, ganz OWL. Die reine Lieferung geht darüber hinaus bundesweit.",
  col3CtaLabel: "Büro im Möbelplaner planen",
  col3CtaHref: "/moebelplaner/",
};

export const bpCtas = {
  intro: {
    image: `${IMG}/schreibtisch-nach-mass-betonoptik-buero.jpg`,
    heading: "Gute Büroplanung beginnt mit einem Blick auf Ihre Räume",
    linkText: "Sprechen Sie mit uns über Ihr Büroprojekt",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/schreibtisch-nach-mass-arbeitsplatz.jpg`,
    heading: "Ihr Büro planen wir, bevor das erste Brett geschnitten wird.",
    linkText: "Jetzt Büroplanung unverbindlich anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** UspHighlight (shared): Direktantwort auf "Was ist Büroplanung?" [AEO]. */
export const bpDefinition = {
  eyebrow: "Was ist Büroplanung?",
  heading: "Büroplanung heißt: erst planen, dann einrichten",
  body:
    "Büroplanung ist die vorausschauende Planung von Flächen, Zonen und Arbeitsplätzen, bevor Möbel bestellt werden. Sie klärt, wie viele Menschen auf welcher Bürofläche arbeiten. Die reine Büroeinrichtung liefert nur die Möbel, die Raumplanung des Architekten legt den Grundriss fest. Dazwischen planen wir das fertige Bürokonzept mit Möblierung und setzen es selbst um.",
  image: `${IMG}/buero-galerie-arbeitsplatz.jpg`,
  imageAlt: "Schreibtisch nach Maß mit Rollcontainer an einer Sichtbetonwand",
};

/** SegmentCards (shared): Anlässe, wann Büroplanung nötig wird. */
export const bpAnlaesse = {
  heading: "Wann sich eine Büroplanung lohnt",
  intro:
    "Meist gibt eine Veränderung den Anstoß. Diese Anlässe führen am häufigsten dazu, dass Unternehmen ihr Büro neu planen lassen:",
  segments: [
    {
      title: "Umzug in neue Räume",
      body: "Beim Umzug entscheidet die Planung, ob die neue Fläche wirklich passt. Wir stimmen Arbeitsplätze, Wege und Stauraum auf den neuen Grundriss ab, bevor Sie einziehen.",
    },
    {
      title: "Wachstum oder Verkleinerung",
      body: "Kommen Arbeitsplätze dazu oder fallen welche weg, muss die Fläche neu aufgeteilt werden. Wir sorgen dafür, dass sich mehr oder weniger Menschen sinnvoll auf die vorhandenen Quadratmeter verteilen.",
    },
    {
      title: "Sanierung und Umbau",
      body: "Bei einer Sanierung lässt sich das Büro von Grund auf neu denken. Wir gestalten den Bestand um, statt vorhandene Möbel nur zu verschieben.",
    },
    {
      title: "New Work und Hybrid",
      body: "Mit Desk Sharing, Homeoffice und Teamzonen ändern sich die Anforderungen. Wir planen Zonen fürs konzentrierte Arbeiten, für Austausch und Rückzug.",
    },
    {
      title: "Homeoffice-Rückkehr",
      body: "Kehren Teams aus dem Homeoffice zurück, braucht es Arbeitsplätze, die man gern nutzt. Wir schaffen Plätze und Rückzugsorte, die den Weg ins Büro attraktiv machen.",
    },
  ],
};

/** ProcessSteps (shared): Ablauf der Büroplanung von Analyse bis Montage. */
export const bpProcess = {
  eyebrow: "Ablauf",
  heading: "So planen wir Ihr Büro",
  image: `${IMG}/schreibtisch-nach-mass-betonoptik-buero.jpg`,
  imageAlt: "Schreibtisch nach Maß mit Platte in Betonoptik und offenem Regal dahinter",
  steps: [
    {
      title: "Bedarfsanalyse",
      description:
        "Im Beratungsgespräch klären wir anhand einer festen Checkliste, wie Ihr Team arbeitet: Zahl der Arbeitsplätze, Abläufe, Besprechungen, Rückzug und Empfang. Daraus entsteht das Raumprogramm.",
    },
    {
      title: "Flächen- und Zonenplanung",
      description:
        "Aus Grundriss und Bedarf entsteht die Flächenplanung: Arbeitszonen, Besprechung, Rückzug, Empfang und Pause, mit kurzen Wegen dazwischen.",
    },
    {
      title: "Kostenloses Aufmaß und 3D-Planung",
      description:
        "Wir vermessen Ihre Räume millimetergenau und zeigen die Einrichtungsplanung als 3D-Visualisierung. Sie sehen Ihr Büro, bevor das erste Möbel entsteht.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Nach Ihrer Freigabe fertigen wir die Büromöbel im eigenen Werk in Espelkamp, in Eigenregie und ohne Subunternehmer.",
    },
    {
      title: "Montage durch eigenes Team",
      description:
        "Unser eigenes Team übernimmt die Montage, auf Wunsch außerhalb der Geschäftszeiten oder in Etappen, damit Ihr Betrieb weiterläuft.",
    },
  ],
};

/** SpecTable (shared): Flächenbedarf & Normen. Öffentliche ASR/ArbStättV-Richtwerte, KEINE Fast-Zusage. */
export const bpFlaechen = {
  heading: "Wie viel Fläche ein Arbeitsplatz braucht",
  intro:
    "Die folgenden Quadratmeter sind Richtwerte aus der Arbeitsstättenverordnung und den Technischen Regeln für Arbeitsstätten (ASR A1.2), ergänzt um die DGUV Information 215-441. Sie gelten als Orientierung, nicht als Zusage. Verbindlich planen wir Ihre Bürofläche nach dem kostenlosen Aufmaß.",
  firstColLabel: "Planungsgröße",
  columns: ["Richtwert nach ASR / ArbStättV"],
  highlightColumn: 0,
  rows: [
    {
      label: "Einzel- und Mehrpersonenbüro",
      values: ["Rund 8 bis 10 m² je Arbeitsplatz, inklusive Möblierung und Verkehrsfläche."],
    },
    {
      label: "Großraumbüro",
      values: ["Im Großraum werden eher 12 bis 15 m² je Arbeitsplatz angesetzt, weil der Anteil an Verkehrsflächen steigt."],
    },
    {
      label: "Bewegungsfläche am Arbeitsplatz",
      values: ["Die freie Bewegungsfläche am Arbeitsplatz sollte mindestens rund 1,5 m² betragen."],
    },
    {
      label: "Raumhöhe",
      values: ["Je nach Grundfläche gelten gestaffelte Mindestraumhöhen von etwa 2,50 bis 3,00 m."],
    },
  ],
};

/** SegmentCards (shared): Zonen und Raumtypen im modernen Büro. */
export const bpZonen = {
  heading: "Welche Zonen ein Büro braucht",
  intro:
    "Ein durchdachtes Bürokonzept besteht aus mehreren Zonen mit eigenen Aufgaben. Wir planen sie so, dass sie zusammenspielen und sich nicht gegenseitig stören:",
  segments: [
    {
      title: "Empfang",
      body: "Der erste Eindruck: ein Empfangstresen, der Besucher führt, mit Arbeitsplatz dahinter und Stauraum im Sichtbereich.",
    },
    {
      title: "Arbeitszonen",
      body: "Einzel- und Teamplätze für die tägliche Arbeit, geplant nach Anzahl, Technik und den Wegen dazwischen.",
    },
    {
      title: "Besprechung und Konferenz",
      body: "Vom kurzen Abstimmungspunkt bis zum großen Konferenzraum, jeweils mit Tisch und Anschlüssen in passender Größe.",
    },
    {
      title: "Rückzug und Telefonbox",
      body: "Geschützte Orte für konzentriertes Arbeiten und Telefonate, die den Lärm aus dem offenen Bereich heraushalten.",
    },
    {
      title: "Pause und Teeküche",
      body: "Ein Bereich zum Durchatmen mit robuster Teeküche, die den täglichen Betrieb und Feuchtigkeit verträgt.",
    },
    {
      title: "Open Space",
      body: "Der offene Bereich, gegliedert durch Schränke und Akustikelemente, damit er ruhig und übersichtlich bleibt.",
    },
  ],
};

/** UspHighlight (shared): Ergonomie, Akustik, Licht als Planungsthemen. */
export const bpThemen = {
  eyebrow: "Worauf wir bei der Planung achten",
  heading: "Ergonomie, Akustik und Licht von Anfang an mitgeplant",
  body:
    "Gute Büroplanung denkt drei Dinge früh mit. Ergonomie am Arbeitsplatz, etwa mit Platz für einen höhenverstellbaren Schreibtisch und genug Bewegungsfläche. Akustik und Schallschutz durch Zonierung und schallabsorbierende Schränke, die offene Bereiche leiser machen. Und ein Lichtkonzept mit Tageslicht und Beleuchtung, das Arbeitsplätze blendfrei ausleuchtet.",
  image: `${IMG}/bueroeinrichtung-sitzecke-pausenbereich.jpg`,
  imageAlt: "Sitzecke im Büro mit gepolsterter Bank und Tisch nach Maß",
};

/** SpecTable (shared): Kostenfaktoren. KEINE Preise/€-Zahlen (Kit §8). */
export const bpKosten = {
  heading: "Was den Preis einer Büroplanung bestimmt",
  intro:
    "Einen Pauschalpreis nennen wir bewusst nicht, weil jedes Projekt anders ist. Diese Kostenfaktoren bestimmen den Umfang. Den genauen Wert bekommen Sie als individuelles Angebot nach dem kostenlosen Aufmaß.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Fläche und Arbeitsplatzzahl",
      values: ["Je größer die Fläche und je mehr Arbeitsplätze, desto mehr Planung, Möbel und Montage fallen an."],
    },
    {
      label: "Ausbaugrad",
      values: ["Ob Grundausstattung oder durchgeplantes Bürokonzept mit Empfang, Akustik und Rückzugsorten macht den Unterschied."],
    },
    {
      label: "Sonderanfertigung",
      values: ["Nischen, Dachschrägen und besondere Formen verlangen mehr Planung und Fertigung als gerade Wände."],
    },
    {
      label: "Technik-Integration",
      values: ["Strom, Daten und Kabelführung in Schreibtischen und Sideboards planen wir mit, das erhöht den Aufwand."],
    },
    {
      label: "Montageaufwand",
      values: ["Montage in Etappen oder außerhalb der Geschäftszeiten kostet mehr Zeit vor Ort."],
    },
  ],
};

export const bpMoebelplaner = {
  heading: "Ihr Büro online vorplanen, den Rest übernehmen wir",
  body:
    "Mit unserem [Möbelplaner](/moebelplaner/) stellen Sie Schränke und Büromöbel online zusammen: Maße, Oberflächen und Einlegeböden im 3D-Konfigurator. Was Sie dort planen, nehmen wir auf. Alles Weitere liegt bei uns: kostenloses Aufmaß, Beratung, Fertigung in Espelkamp und Montage durch unser eigenes Team.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/bueroeinrichtung-empfang-kuechenzeile.jpg`,
  imageAlt: "Empfangsbereich mit Küchenzeile und Holzlamellen-Wand nach Maß",
};

export const bpTestimonialsHeading = "Was unsere Gewerbekunden über ihre Büroplanung sagen";

export const bpFaq = {
  heading: "Häufige Fragen zur Büroplanung",
  items: [
    {
      question: "Was unterscheidet Büroplanung von Büroeinrichtung?",
      answer:
        "Büroplanung ist der vorgelagerte Schritt: Wir planen Flächen, Zonen und Arbeitsplätze, bevor Möbel bestellt werden. Die Büroeinrichtung liefert dann die passenden Möbel. Bei uns geht beides ineinander über, weil wir planen, fertigen und montieren.",
    },
    {
      question: "Wie läuft eine Büroplanung bei Fast ab?",
      answer:
        "In fünf Schritten: Bedarfsanalyse, Flächen- und Zonenplanung, kostenloses Aufmaß mit 3D-Planung, Fertigung im eigenen Werk in Espelkamp und Montage durch unser Team. Sie haben vom ersten Beratungsgespräch bis zur Abnahme einen festen Ansprechpartner.",
    },
    {
      question: "Wie viele Quadratmeter braucht ein Arbeitsplatz?",
      answer:
        "Als Orientierung gelten nach ASR und Arbeitsstättenverordnung rund 8 bis 10 m² je Arbeitsplatz im Einzelbüro und 12 bis 15 m² im Großraumbüro. Das sind Richtwerte, keine festen Vorgaben. Verbindlich planen wir Ihre Fläche nach dem kostenlosen Aufmaß.",
    },
    {
      question: "Welche Normen muss ich bei der Büroplanung beachten?",
      answer:
        "Maßgeblich sind die Arbeitsstättenverordnung und die Technischen Regeln für Arbeitsstätten (ASR A1.2), etwa zu Bewegungsflächen und Raumhöhe, ergänzt um die DGUV Information 215-441. Wir kennen diese Vorgaben und planen sie in Ihr Büro ein, ohne dass Sie sich durch Paragrafen arbeiten müssen.",
    },
    {
      question: "Was kostet eine Büroplanung?",
      answer:
        "Einen Pauschalpreis gibt es nicht, weil jedes Büro anders ist. Der Preis hängt von Fläche, Arbeitsplatzzahl, Ausbaugrad, Sonderanfertigung und Montageaufwand ab. Nach dem kostenlosen Aufmaß erhalten Sie ein individuelles Angebot, an das wir uns halten.",
    },
    {
      question: "Welche Bürokonzepte gibt es und welches passt zu mir?",
      answer:
        "Gängig sind das Zellenbüro mit Einzel- und Mehrpersonenräumen, das offene Großraumbüro, Activity Based Working mit Zonen je Tätigkeit sowie Desk Sharing und Hybrid-Modelle. Welches passt, hängt von Ihrer Arbeitsweise ab. Das klären wir gemeinsam in der Bedarfsanalyse.",
    },
    {
      question: "Bekomme ich Planung, Fertigung und Montage aus einer Hand?",
      answer:
        "Ja. Wir planen Ihr Büro, fertigen die Möbel im eigenen Werk in Espelkamp und montieren mit unserem eigenen Team. Es gibt keinen Wechsel zwischen mehreren Gewerken, und Sie sprechen durchgehend mit denselben Ansprechpartnern.",
    },
    {
      question: "Planen Sie auch bestehende Büros um, nicht nur Neubauten?",
      answer:
        "Ja. Wir planen sowohl neue Flächen als auch den Umbau bestehender Räume, etwa bei Sanierung, Wachstum oder der Umstellung auf New Work. Den Bestand denken wir dabei neu, statt Möbel nur zu verschieben. Frühere Referenzprojekte zeigen wir Ihnen auf Anfrage gern.",
    },
    {
      question: "In welchem Gebiet planen und montieren Sie?",
      answer:
        "Beratung, Aufmaß und Montage übernehmen wir mit eigenem Team im Umkreis von rund 200 km um Espelkamp, etwa in Minden, Bielefeld, Osnabrück und ganz OWL. Außerhalb dieses Radius liefern wir bundesweit.",
    },
  ],
};

const bpTypes = bpZonen.segments.map((s) => s.title);

/**
 * JSON-LD for the Büroplanung child. Service (not Product-with-price, wie das
 * Kit vorgibt): Service (provider=Organization, serviceType, areaServed,
 * hasOfferCatalog), BreadcrumbList (4 levels), FAQPage (1:1 zu sichtbarer FAQ),
 * ItemList. Kein offers/aggregateRating (Preise immer individuell, FACTS.md).
 */
export const bpJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Büroplanung",
    serviceType: "Büroplanung und Büroeinrichtung nach Maß",
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
      name: "Büroplanung: Zonen und Bereiche",
      itemListElement: bpTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Planung: ${name}` },
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
      { "@type": "ListItem", position: 4, name: "Büroplanung", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bpFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Büroplanung: Zonen und Bereiche",
    itemListElement: bpTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
