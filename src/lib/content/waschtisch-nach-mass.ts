/**
 * Content for the `/badmoebel-nach-mass/waschtisch-nach-mass/` page: the
 * "Waschtisch nach Maß" cluster child (product) under the Badmöbel pillar
 * (`/badmoebel-nach-mass/`). Object focus = the washstand TOP: plate + basin
 * (Aufsatz-/Einbaubecken, Ausschnitt, Armaturposition, Doppelwaschtisch,
 * Wand zu Wand). The corpus below the basin lives on waschtischunterschrank,
 * the material deep-dive on badmoebel-massivholz (Cluster-Map, Anti-Dedup).
 *
 * Built from the Privat library sections plus shared sections (SegmentCards,
 * SpecTable ×3, UspHighlight, ProcessSteps) so each section carries one topic
 * (ARCHITECTURE.md §1.1): Beckenintegration · Maß-Tabelle · Material-Vergleich
 * (Markt) · PU-Kante/Verarbeitung · Raumsituationen · Kostenfaktoren.
 *
 * Copy follows the Fast brand voice (Sie, handwerklich, konkret, belegt, keine
 * em-dashes). Facts from docs/seo/brand/FACTS.md + clients/fast/kundenwissen.md.
 * Leerstellen (Kit §9b): Becken/Armatur werden NICHT verkauft (Fast baut um das
 * kundeneigene Becken herum), keine erfundenen Fast-Maße/Materialportfolios,
 * keine Preise, keine Lieferzeiten, keine Einzel-Referenzen. Maß-/Material-
 * Tabellen = allgemeine Markt-/Planungsorientierung, keine Fast-Vorgabe.
 *
 * Copy: Authoring-Engine (Writer/Humanizer/QC/Chefredakteur) aus dem Research-Kit
 * (docs/seo/research/waschtisch-nach-mass.kit.md), Lauf 2026-10-01, 1685 W,
 * Chefredakteur pass. Bildpfade aus dem Badmöbel-Pool als Platzhalter, bis eigene
 * Waschtisch-Motive vorliegen (siehe REVIEW.md Bild-Vorschläge).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/badmoebel-nach-mass/waschtisch-nach-mass/";
const IMG = "/images/badmoebel";

export const wtHero = {
  bgImage: `${IMG}/waschtisch-nach-mass-weiss-holzplatte.jpg`,
  imageAlt:
    "Heller Waschtisch nach Maß aus Holz mit Aufsatzbecken, von Wand zu Wand im Bad eingebaut",
  title: "Waschtisch nach Maß aus Espelkamp",
  intro:
    "Ein Waschtisch nach Maß ist die Waschtischplatte in genau Ihrer Breite, von Wand zu Wand, ohne Passleisten. Den Ausschnitt für Ihr Becken, die Hahnlochbohrung für die Armatur und die Aussparung für den Siphon arbeiten wir passgenau ein. Geplant, gefertigt und montiert aus einer Hand, in unserem Meisterbetrieb in Espelkamp.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Badmöbel nach Maß", href: "/badmoebel-nach-mass/" },
    { label: "Waschtisch nach Maß" },
  ],
};

export const wtIntroStats = {
  since: "seit 1996",
  sinceSub: "Fertigen wir Möbel nach Maß.",
  heading: "Die Waschtischplatte, die bis an beide Wände reicht",
  introBefore:
    "Standardplatten enden am Rastermaß und lassen Fugen zur Wand. Unsere Waschtischplatte nach Maß läuft millimetergenau",
  introBold: "von Wand zu Wand",
  introAfter: ", mit passgenauem Ausschnitt für Ihr Becken und die Armatur.",
  bandImage: `${IMG}/waschtisch-nach-mass-eiche-aufsatzbecken.jpg`,
  bandAlt:
    "Waschtischplatte aus Eiche nach Maß mit rundem Aufsatzbecken und Wandarmatur",
  col1Title: "Platte und Becken aufeinander abgestimmt",
  col1Body:
    "Ob Aufsatz- oder Einbaubecken, einzeln oder als Doppelwaschtisch: Wir planen die Platte um Ihr Wunschbecken, setzen Ausschnitt und Hahnlochbohrung an die richtige Stelle und schließen die Platte sauber an die Wand an.",
  col1CtaLabel: "Waschtisch anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Jede Platte entsteht bei uns in Espelkamp, von der PU-verleimten Kante bis zur Oberfläche. Von der Beratung bis zur Montage bleibt ein Ansprechpartner für Sie zuständig. Ihr Waschtisch gehört zu unseren [maßgefertigten Badmöbeln](/badmoebel-nach-mass/).",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Aufmaß, Einbau und Montage übernehmen wir im Umkreis von rund 200 km um Espelkamp, in ganz OWL, etwa in Minden, Lübbecke, Osnabrück und Bielefeld. Fertige Platten liefern wir auch bundesweit.",
  col3CtaLabel: "Waschtisch online planen",
  col3CtaHref: "/moebelplaner/",
};

export const wtCtas = {
  intro: {
    image: `${IMG}/doppelwaschtisch-nach-mass-weiss-schwebend.jpg`,
    heading: "Ihr Waschtisch beginnt an Ihrer Wand",
    linkText: "Sprechen Sie mit uns über Ihren Waschtisch",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/waschtisch-nach-mass-holz-led-spiegel.jpg`,
    heading: "Holen Sie aus Ihrer Nische den Waschtisch, der genau passt",
    linkText: "Jetzt kostenloses Aufmaß für Ihren Waschtisch anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SegmentCards (shared): Beckenintegration (Kit §3 Modul 4, das Alleinstellungs-Thema).
 *  Fast verkauft keine Becken/Armaturen (Kit §9b-1/2) — nur Machbarkeit, kein Lieferumfang. */
export const wtBecken = {
  heading: "Becken und Armatur, passgenau in die Platte gearbeitet",
  intro:
    "Welches Becken in Ihr Bad kommt, entscheiden Sie. Wir arbeiten die Platte darum herum, mit exaktem Ausschnitt, Hahnlochbohrung für die Armatur und Aussparung für den Siphon.",
  segments: [
    {
      title: "Aufsatzbecken",
      body: "Das Becken steht sichtbar auf der Platte, als eigenes Gestaltungselement. Die Hahnlochbohrung für die Wand- oder Standarmatur setzen wir genau dorthin, wo sie zu Ihrem Becken passt.",
    },
    {
      title: "Einbau- und Unterbaubecken",
      body: "Das Becken sitzt bündig in oder unter der Platte, die Oberfläche bleibt glatt und leicht zu reinigen. Den Ausschnitt fertigen wir millimetergenau nach Ihrem Modell.",
    },
    {
      title: "Doppelwaschtisch",
      body: "Zwei Becken auf einer durchgehenden Platte, Wand zu Wand im Familienbad. Abstände, Armaturen und Abläufe planen wir so, dass beide Plätze bequem nebeneinanderliegen.",
    },
    {
      title: "Armatur und Ablauf",
      body: "Wand- oder Standarmatur, mittig oder seitlich: Hahnlochbohrung und die Aussparung für Siphon und Ablauf richten wir nach Ihrer Anschlusssituation, die wir beim Aufmaß erfassen.",
    },
  ],
};

/** SpecTable (shared): Maß-Orientierung Platte. NUR allgemeines Planungswissen (Kit §9b-3), keine Fast-Range. */
export const wtMasse = {
  heading: "Welche Maße sind bei einer Waschtischplatte nach Maß möglich?",
  intro:
    "Feste Standardmaße führen wir nicht, jede Platte entsteht als Wunschmaß nach Aufmaß. Die Werte hier sind allgemeine Planungsorientierung, damit Sie Ihre Idee einordnen können. Verbindlich wird alles erst nach dem kostenlosen Aufmaß vor Ort.",
  firstColLabel: "Maß",
  columns: ["Übliche Orientierung", "Bei Fast nach Maß"],
  highlightColumn: 1,
  rows: [
    {
      label: "Breite",
      values: [
        "Richtet sich nach Waschplatz und Wandbreite, vom schmalen Gäste-WC bis zum breiten Doppelwaschtisch.",
        "Millimetergenau Wand zu Wand, ohne Passleisten, auf Wunsch auch über Eck.",
      ],
    },
    {
      label: "Tiefe",
      values: [
        "Oft etwa 45 bis 50 cm, in schmalen Bädern flacher, damit man gut vorbeikommt.",
        "Frei nach Aufmaß, auch besonders flach für enge Bäder geplant.",
      ],
    },
    {
      label: "Höhe (Komforthöhe)",
      values: [
        "Beckenoberkante rund 85 bis 95 cm, als Faustregel die halbe Körpergröße (Orientierung nach DIN 68935).",
        "Auf Ihre Körpergröße abgestimmt, höher oder niedriger für Kinder und Senioren.",
      ],
    },
    {
      label: "Nische und schräge Wand",
      values: [
        "Alte Bäder haben selten rechte Winkel, Wände stehen schief oder eine Dachschräge engt ein.",
        "Nische, Dachschräge und schiefe Wand messen wir genau aus und passen die Platte daran an.",
      ],
    },
    {
      label: "Beckenposition und Ausschnitt",
      values: [
        "Mittig oder seitlich, je nach Raum und Anschluss.",
        "Ausschnitt, Hahnlochbohrung und Siphon-Aussparung passgenau nach Ihrem Becken.",
      ],
    },
  ],
};

/** SpecTable (shared): Material-Vergleich (Markt, Kit §3 Modul 3). Allgemeine Einordnung,
 *  belegte Fast-Option = nur Massivholz (Kit §9b-4); andere Materialien nur „auf Anfrage". */
export const wtMaterialVergleich = {
  heading: "Welches Plattenmaterial passt in Ihr Bad?",
  intro:
    "Jedes Material verhält sich im feuchten Bad anders. Die Übersicht ordnet die gängigen Plattenmaterialien ein. Belegt fertigen wir aus Massivholz, andere Werkstoffe besprechen wir im Einzelfall.",
  firstColLabel: "Plattenmaterial",
  columns: ["Im feuchten Bad", "Pflege", "Optik und Haptik"],
  rows: [
    {
      label: "Massivholz",
      values: [
        "Mit richtiger Oberfläche und PU-Kante feuchtigkeitsbeständig, Spritzwasser nicht stehen lassen.",
        "Gelegentlich nachölen, sonst feucht abwischen.",
        "Warm, lebendige Maserung, jedes Stück ein Unikat.",
      ],
    },
    {
      label: "Mineralwerkstoff (Corian)",
      values: [
        "Fugenlos verarbeitbar, unempfindlich gegen Feuchtigkeit.",
        "Pflegeleicht, kleine Kratzer lassen sich anschleifen.",
        "Glatt und matt, nahtlose Becken-Integration möglich.",
      ],
    },
    {
      label: "Keramik",
      values: [
        "Sehr robust gegen Wasser und Flecken.",
        "Einfach zu reinigen, kratzfest.",
        "Klassisch, kühl, hart in der Haptik.",
      ],
    },
    {
      label: "Schichtstoff und HPL",
      values: [
        "Beschichtete Platte, an der PU-Kante feuchtigkeitsbeständig verschlossen.",
        "Pflegeleicht, einfach abzuwischen.",
        "Viele Dekore, von Holzoptik bis unifarben.",
      ],
    },
  ],
};

/** UspHighlight (shared): PU-Kante/Verarbeitung + Warum Fast (Kit §3 Modul 7/8). */
export const wtMaterial = {
  eyebrow: "Verarbeitung und Material",
  heading: "Fugenlose Kante statt aufgequollener Ränder",
  body:
    "Im Bad arbeiten Spritzwasser und Wasserdampf jeden Tag an den Möbeln. Deshalb verschließen wir die Schnittkanten mit PU-Kantenverleimung: fugenlos und feuchtigkeitsbeständig, ohne dunkle Klebefuge, in die Feuchtigkeit kriechen könnte. Die Platte fertigen wir aus Massivholz oder branchenüblichen hochwertigen Materialien, selbst in unserer Tischlerei in Espelkamp, in einem Familienbetrieb, nicht in einer anonymen Online-Fabrik. Die Oberfläche, etwa geölt oder lackiert, legen wir gemeinsam mit Ihnen fest.",
  image: `${IMG}/waschtisch-nach-mass-holzbank-spiegelwand.jpg`,
  imageAlt:
    "Waschtisch nach Maß aus Holz mit durchgehender Spiegelwand und integrierter Sitzbank",
};

/** SegmentCards (shared): Raumsituationen (Kit §3 Modul 5). Allgemeine Lösungswege,
 *  keine konkreten Referenzprojekte (Kit §9b-6). */
export const wtRaum = {
  heading: "Für jede Wand und jede Nische im Bad",
  intro:
    "Die meisten Anfragen kommen genau dann, wenn Standardmöbel nicht mehr passen und ein Sondermaß gefragt ist. Für diese Situationen bauen wir die Platte nach Maß.",
  segments: [
    {
      title: "Nische und schmales Bad",
      body: "Zwischen zwei Wänden oder in einer flachen Nische sitzt die Platte Wand zu Wand, ohne Passleisten. In schmalen Bädern planen wir sie besonders flach, damit der Weg frei bleibt.",
    },
    {
      title: "Wand zu Wand",
      body: "Eine durchgehende Platte über die ganze Wandbreite wirkt ruhig und lässt keine Fuge zum Verstauben. Kante und Anschluss arbeiten wir sauber an die Wand.",
    },
    {
      title: "Doppelwaschtisch im Familienbad",
      body: "Zwei Becken, viel Ablage dazwischen, alles auf einer Platte. So haben morgens zwei Menschen nebeneinander Platz.",
    },
    {
      title: "Vorgegebene Beckenposition",
      body: "Sitzen Anschluss und Ablauf schon fest, planen wir Ausschnitt und Platte genau darum herum. Das Becken bleibt, wo es ist, die Platte passt sich an.",
    },
  ],
};

/** ProcessSteps (shared): Mini-Prozess (Vollprozess liegt beim Pillar). */
export const wtProcess = {
  eyebrow: "Ablauf",
  heading: "So entsteht Ihr Waschtisch",
  image: `/images/einbauschraenke/einbauschrank-montage-espelkamp.jpg`,
  imageAlt:
    "Zwei Monteure von Fast Systemmöbel richten ein maßgefertigtes Möbel mit der Wasserwaage aus",
  steps: [
    {
      title: "Beratung und kostenloses Aufmaß",
      description:
        "Wir sprechen über Becken, Armatur und Raum, am Telefon oder bei Ihnen zu Hause. Dann messen wir kostenlos vor Ort und erfassen Anschluss und Ablauf.",
    },
    {
      title: "Technische 3D-Planung",
      description:
        "Aus dem Aufmaß wird eine technische 3D-Planung. Sie sehen Platte, Ausschnitt und Kante am Bildschirm, bevor wir das Holz zuschneiden, und ändern mit, bis alles sitzt.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Nach Ihrer Freigabe fertigen wir die Platte selbst in unserer Werkstatt, mit passgenauem Ausschnitt und PU-verleimten Kanten.",
    },
    {
      title: "Montage durch unser eigenes Team",
      description:
        "Unser eigenes Montageteam baut den Waschtisch zum verbindlichen Termin ein und schließt ihn Wand zu Wand an. Verantwortlich bleiben wir bis zuletzt, kein fremder Dienstleister.",
    },
  ],
};

/** SpecTable (shared): Kostentreiber. KEINE Preise/€-Zahlen (Kit §8). */
export const wtKosten = {
  heading: "Was den Preis Ihres Waschtischs bestimmt",
  intro:
    "Einen Pauschalpreis nennen wir bewusst nicht, weil jeder Waschtisch anders ausfällt. Ihr Angebot rechnen wir individuell nach dem kostenlosen Aufmaß. Diese Faktoren geben den Ausschlag.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Material der Platte",
      values: ["Massivholz, Mineralwerkstoff oder beschichtete Platte unterscheiden sich in Aufwand und Verarbeitung."],
    },
    {
      label: "Beckenart und Zahl",
      values: ["Einzelbecken oder Doppelwaschtisch, Aufsatz oder Einbau wirken auf Ausschnitt und Planung."],
    },
    {
      label: "Breite und Ausschnitte",
      values: ["Mehr Breite, zusätzliche Ausschnitte, Hahnlochbohrungen und Aussparungen bedeuten mehr Fertigungszeit."],
    },
    {
      label: "Kantenausführung",
      values: ["Gerade Kante, Baumkante oder eine besondere Profilierung beeinflussen den Aufwand."],
    },
    {
      label: "Einbausituation und Montage",
      values: ["Nische, schiefe Wand oder vorgegebene Anschlüsse verlangen mehr Anpassung als eine gerade Wand."],
    },
  ],
};

export const wtMoebelplaner = {
  heading: "Ihren Waschtisch online vorplanen, den Rest übernehmen wir",
  body:
    "Im [Möbelplaner](/moebelplaner/) skizzieren Sie Maße, Material und Becken vorab und bekommen ein Gefühl für Ihren Waschtisch. Er ersetzt kein Aufmaß und nennt keinen Sofortpreis. Aufmaß, 3D-Planung, Fertigung und Montage übernehmen wir.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/badmoebel-nach-mass-led-spiegel-dusche.jpg`,
  imageAlt: "Waschtisch nach Maß mit beleuchtetem Spiegel neben einer bodengleichen Dusche",
};

export const wtTestimonialsHeading = "Was unsere Kunden über ihre Badmöbel sagen";

export const wtFaq = {
  heading: "Häufige Fragen zum Waschtisch nach Maß",
  items: [
    {
      question: "Welche Maße sind bei einem Waschtisch nach Maß möglich?",
      answer:
        "Breite, Tiefe und Höhe planen wir frei, die Platte läuft Wand zu Wand ohne Passleisten, millimetergenau in Ihre Nische. Die Werte in unserer Tabelle sind allgemeine Orientierung. Verbindlich wird es erst beim kostenlosen Aufmaß bei Ihnen vor Ort.",
    },
    {
      question: "Wie hoch sollte ein Waschtisch sein?",
      answer:
        "Als Orientierung liegt die Beckenoberkante bei etwa 85 bis 95 cm (nach DIN 68935), eine gängige Faustregel ist die halbe Körpergröße. Feste Vorgaben machen wir nicht, wir stimmen die Höhe auf Sie ab, auf Wunsch höher oder niedriger für Kinder und Senioren.",
    },
    {
      question: "Aus welchem Material wird die Waschtischplatte gefertigt?",
      answer:
        "Belegt fertigen wir aus Massivholz und branchenüblichen hochwertigen Materialien. Andere Plattenmaterialien wie Mineralwerkstoff oder beschichtete Platten besprechen wir im Einzelfall. Welches Material zu Ihrem Bad passt, klären wir in der Beratung.",
    },
    {
      question: "Ist Massivholz für einen Waschtisch im Bad geeignet?",
      answer:
        "Ja, mit der richtigen Oberfläche und guter Belüftung. Die Kanten verschließen wir fugenlos mit PU-Kantenverleimung, das macht sie feuchtigkeitsbeständig. Spritzwasser sollten Sie nicht stehen lassen. Wasserfest ist Holz nicht, für den täglichen Badgebrauch ist es aber gut gerüstet.",
    },
    {
      question: "Aufsatzbecken oder Einbaubecken, was passt auf eine Platte nach Maß?",
      answer:
        "Beides ist planbar. Für ein Aufsatzbecken bohren wir das Hahnloch passend, für ein Einbau- oder Unterbaubecken fertigen wir den Ausschnitt auf den Millimeter. Das Becken selbst bringen Sie mit, wir arbeiten die Platte passgenau darum herum.",
    },
    {
      question: "Liefert Fast das Becken und die Armatur mit?",
      answer:
        "Sanitärobjekte wie Becken und Armaturen verkaufen wir nicht. Sie wählen Becken und Armatur frei, wir planen und bauen die Platte passend dazu, mit exaktem Ausschnitt, Hahnlochbohrung und Siphon-Aussparung.",
    },
    {
      question: "Ist ein Doppelwaschtisch nach Maß möglich?",
      answer:
        "Ja. Voraussetzung ist genug Wandbreite für zwei Waschplätze. Dann fertigen wir eine durchgehende Platte ohne Mittelfuge und setzen die beiden Ausschnitte, Hahnlochbohrungen und Abläufe so, dass beide Armaturen frei bedienbar bleiben und die Siphons darunter Platz haben.",
    },
    {
      question: "Passt ein Waschtisch nach Maß in eine Nische oder ein schmales Bad?",
      answer:
        "Ja, genau dafür ist Maßarbeit da. Die Platte sitzt Wand zu Wand ohne Passleisten, in schmalen Bädern bauen wir sie flacher, damit davor genug Raum bleibt. Schiefe Wände und Dachschrägen nehmen wir beim Aufmaß gleich mit auf.",
    },
    {
      question: "Was unterscheidet die PU-Kante von einer normalen Kante?",
      answer:
        "Bei der PU-Kantenverleimung ist die Schnittkante fugenlos verschlossen, ohne dunkle Klebefuge, in die bei Spritzwasser Feuchtigkeit kriechen könnte. Das macht die Kante feuchtigkeitsbeständig und hält die Platte gerade am Becken länger schön.",
    },
    {
      question: "Was kostet ein Waschtisch nach Maß?",
      answer:
        "Einen festen Preis nennen wir nicht, weil jeder Waschtisch anders ist. Den Ausschlag geben Material, Beckenart und Zahl, Breite und Ausschnitte, die Kantenausführung und die Einbausituation. Nach dem kostenlosen Aufmaß bekommen Sie ein individuelles Angebot.",
    },
    {
      question: "Wohin liefert und montiert ihr?",
      answer:
        "Unser Montagegebiet reicht rund 200 km um Espelkamp, durch ganz OWL, etwa nach Minden, Lübbecke, Osnabrück und Bielefeld. In diesem Radius kommen wir zum Aufmaß und bauen Ihren Waschtisch vor Ort ein. Außerhalb dieses Gebiets liefern wir Ihnen die fertige Platte bundesweit.",
    },
  ],
};

const wtTypes = wtBecken.segments.map((s) => s.title);

/**
 * JSON-LD for the Waschtisch product child. Same scope/convention as the pillar
 * and the sibling product pages (Service, not Product-with-price): Service
 * (provider=Organization, serviceType, areaServed, hasOfferCatalog),
 * BreadcrumbList (4 levels), FAQPage (1:1 to visible FAQ), ItemList. No
 * offers/aggregateRating (Preise immer individuell, siehe FACTS.md).
 */
export const wtJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Waschtisch nach Maß",
    serviceType: "Maßgefertigte Waschtische und Waschtischplatten",
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
      name: "Waschtische nach Maß",
      itemListElement: wtTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Waschtisch: ${name}` },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Badmöbel nach Maß", item: `${SITE}/badmoebel-nach-mass/` },
      { "@type": "ListItem", position: 4, name: "Waschtisch nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: wtFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Waschtisch nach Maß: Beckenintegration",
    itemListElement: wtTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
