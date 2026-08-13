/**
 * Content for the `/kuechen-nach-mass/kuechenzeile-nach-mass/` page: the
 * "Küchenzeile nach Maß" cluster child (product) under the Küchen pillar
 * (`/kuechen-nach-mass/`). Built from the Privat library sections plus shared
 * sections (SegmentCards, SpecTable, UspHighlight, ProcessSteps) so each section
 * carries one topic (ARCHITECTURE.md §1.1). Copy is Zeilen-specific (einzeilige
 * Küche, kleine/schmale Räume, Wand-zu-Wand ohne Passleisten) to avoid
 * cannibalising the pillar and the sibling form pages.
 *
 * Copy follows the Fast Systemmöbel brand voice (Sie-Anrede, handwerklich,
 * konkret, belegt, keine em-dashes). See docs/seo/brand/BRAND_VOICE.md and
 * docs/seo/brand/FACTS.md. Firmen-/Zahlenfakten (Telefon, Adresse, Geo, 1996,
 * 2. Generation, 4.000+ Projekte, 1.000 m² Fertigung, 200 km Montage-Radius,
 * Homag, PU-Kanten) stammen aus dem Pillar-Modul/FACTS.md.
 *
 * Copy: Authoring-Engine (Writer/Humanizer/QC/Chefredakteur) aus dem Research-Kit
 * (docs/seo/research/kuechenzeile-nach-mass.kit.md), Lauf 2026-08-13, Chefredakteur
 * pass. Bildpfade sind Platzhalter aus dem Küchen-Pool (echte Küchenfotos), bis
 * eigene Küchenzeilen-Motive vorliegen (siehe REVIEW.md Bild-Vorschläge).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/kuechen-nach-mass/kuechenzeile-nach-mass/";
const IMG = "/images";

export const kzHero = {
  bgImage: `${IMG}/2025/11/IMG_4797-scaled.jpg`,
  imageAlt:
    "Küchenzeile nach Maß an einer Wand mit heller Holz-Arbeitsplatte und Oberschränken",
  title: "Küchenzeile nach Maß aus Espelkamp",
  intro:
    "Eine Küchenzeile nach Maß ist die einzeilige Küche, die wir genau auf Ihr Wandmaß bauen: Wand zu Wand, ohne Passleisten, kein Zentimeter verschenkt. Als Meisterbetrieb aus Espelkamp planen, fertigen und montieren wir sie selbst, millimetergenau nach kostenlosem Aufmaß bei Ihnen vor Ort.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Küchen nach Maß", href: "/kuechen-nach-mass/" },
    { label: "Küchenzeile nach Maß" },
  ],
};

export const kzIntroStats = {
  since: "seit 1996",
  sinceSub: "Fertigen wir Möbel nach Maß in eigener Werkstatt.",
  heading: "Eine Wand, jeder Zentimeter genutzt",
  introBefore:
    "Die einzeilige Küche reiht Spüle, Kochfeld und Stauraum an einer einzigen Wand auf. Wir planen sie auf Ihren Grundriss und ziehen die Zeile ohne Lücke durch, bis zum letzten",
  introBold: "Wandanschluss",
  introAfter: ".",
  bandImage: `${IMG}/2025/11/ThabarSebastian_kueche2.jpeg`,
  bandAlt: "Helle Küchenzeile nach Maß mit angrenzendem Essbereich",
  col1Title: "Wand zu Wand ohne Passleisten",
  col1Body:
    "Standardschränke enden im Raster, den Rest kaschieren Blenden. Ihre Zeile bauen wir Wand zu Wand, millimetergenau nach kostenlosem Aufmaß. Kein toter Spalt, kein verschenkter Stauraum.",
  col1CtaLabel: "Jetzt Küchenzeile anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "In Espelkamp fertigen wir jede Zeile selbst, mit PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig. Von der Beratung bis zur Montage bleibt es eine [maßgefertigte Küche vom Tischler](/kuechen-nach-mass/), mit einem Ansprechpartner.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Aufmaß und Montage übernimmt unser eigenes Montageteam, rund 200 km um Espelkamp: in ganz OWL, in Minden, Lübbecke, Osnabrück und Bielefeld. Immer von uns, nie als Bausatz.",
  col3CtaLabel: "Küchenzeile online planen",
  col3CtaHref: "/moebelplaner/",
};

export const kzCtas = {
  intro: {
    image: `${IMG}/2025/11/IMG_9387-scaled.jpg`,
    heading: "Ihre Küchenzeile beginnt mit einem Blick auf Ihre Wand",
    linkText: "Sprechen Sie mit uns über Ihre Küchenzeile",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/2025/11/20231204_095459232_iOS-scaled.jpg`,
    heading: "Holen Sie aus einer Wand die Küche, die wirklich passt.",
    linkText: "Jetzt kostenloses Aufmaß für Ihre Küchenzeile anfragen",
    href: "/kontakt/",
  },
  /** Tertiary conversion path (Playbook §6): phone as a trust anchor, clickable on mobile. */
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SegmentCards (shared): Zielgruppen/Einsatz — der einzigartige Winkel dieser Seite. */
export const kzZielgruppen = {
  heading: "Für wen sich die Küchenzeile eignet",
  intro:
    "Die einzeilige Küche ist die richtige Form, wenn der Raum schmal, klein oder offen ist. Alles reiht sich an einer Wand, die Wege bleiben kurz, der übrige Raum frei. Reicht eine Wand nicht, planen wir über Eck als L-Küche oder unter der Schräge als Küche mit Dachschräge.",
  segments: [
    {
      title: "Single- und Miniküche",
      body: "In der Single-Wohnung reicht eine kompakte Zeile: Kühlen, Kochen, Spülen und Stauraum auf wenigen Metern an einer Wand. Als Miniküche rücken wir die Funktionen so dicht zusammen, dass auch die kleine Küche vollwertig bleibt.",
    },
    {
      title: "Einlieger- und Ferienwohnung",
      body: "Für eine Einliegerwohnung oder Ferienwohnung zählt eine robuste, pflegeleichte Küche, die viel auf wenig Fläche kann. Die Zeile lässt sich schlicht und funktional halten und passt trotzdem millimetergenau in den vorhandenen Raum.",
    },
    {
      title: "Offene Wohnküche",
      body: "Im offenen Wohnraum bildet die Zeile eine ruhige, geschlossene Front zur Wohnzone. Soll das ganze Raumkonzept mit einer Insel als Raumteiler entstehen, ist die offene Wohnküche die passende Form.",
    },
    {
      title: "Schmaler Raum und Nische",
      body: "In einem schmalen Flur oder einer Nische entscheidet jeder Zentimeter. Wir setzen die Zeile Wand zu Wand, ohne Passleisten, und holen aus der Tiefe der Nische Stauraum, statt sie zu verschenken.",
    },
  ],
};

/** SpecTable (shared): Maß-Orientierung. NUR allgemeines Planungswissen (Kit §9b), keine Fast-Maß-Range. */
export const kzMasse = {
  heading: "Maße einer Küchenzeile: allgemeine Orientierung",
  intro:
    "Wie lang und wie tief eine Küchenzeile sein sollte, hängt vom Raum ab. Die folgenden Werte sind allgemeines Planungswissen, gedacht als Orientierung. Verbindlich wird es bei Ihnen erst nach dem kostenlosen Aufmaß. Dann planen wir millimetergenau, Wand zu Wand ohne Passleisten.",
  firstColLabel: "Maß",
  columns: ["Übliche Orientierung", "Bei Fast nach Maß"],
  highlightColumn: 1,
  rows: [
    {
      label: "Länge",
      values: [
        "Gängige Zeilen sind 2,4 bis 3,6 m lang. Für Kochen, Spülen und Stauraum gelten rund 3 m als komfortabel.",
        "Millimetergenau auf Ihre Wand, Wand zu Wand ohne Passleisten.",
      ],
    },
    {
      label: "Tiefe der Unterschränke",
      values: [
        "Unterschränke sind meist rund 60 cm tief. Für enge Räume gibt es schlankere Varianten mit etwa 37 bis 50 cm.",
        "Nach Raum und Nutzung geplant, bei Bedarf schlanker für schmale Räume.",
      ],
    },
    {
      label: "Arbeitshöhe",
      values: [
        "Die ergonomische Arbeitshöhe richtet sich nach Ihrer Körpergröße, häufig zwischen 90 und 95 cm Oberkante Arbeitsplatte.",
        "Auf Ihre Körpergröße abgestimmt geplant, nicht aufs Raster.",
      ],
    },
    {
      label: "Oberschränke und Anschluss",
      values: [
        "Oberschränke reichen oft bis unter die Decke für mehr Stauraum oder bleiben bewusst offen für ein leichteres Bild.",
        "Passgenau bis an Decke und Seitenwände, ohne Lücken und Blenden.",
      ],
    },
  ],
};

/** UspHighlight (shared): Geräte-Integration auf wenig Fläche (Content-Gap-Winkel). */
export const kzGeraete = {
  eyebrow: "Geräte auf wenig Fläche",
  heading: "Wir planen die Zeile um Ihre Geräte herum",
  body:
    "Auf einer schmalen Zeile zählt jeder Gerätezentimeter. Wir bauen die Küchenzeile um Ihre Elektrogeräte herum, auch um die kompakten: Untertisch-Kühlschrank, schlanker 45-cm-Geschirrspüler, Kompaktbackofen oder ein Kochfeld mit zwei bis vier Zonen. Die Marken der Einbaugeräte wählen Sie frei. Wir sorgen dafür, dass alles bündig sitzt und die Zeile ihre klare Linie behält.",
  image: `${IMG}/2025/11/20231204_095459232_iOS-scaled.jpg`,
  imageAlt: "Fertige Küchenzeile nach Maß mit eingebautem Backofen und Kochfeld an einer Wand",
};

/** SegmentCards (shared): Fronten & Material — nur allgemeine Kategorien (Kit §9b), Massivholz + PU-Kante belegt. */
export const kzFronten = {
  heading: "Fronten, Arbeitsplatte und Material",
  intro:
    "Wie Ihre Zeile am Ende wirkt, entscheiden Fronten, Arbeitsplatte und Kante. Welche genau, klären wir im Beratungsgespräch. Fest zu unserem Handwerk gehören Massivholz und die PU-Kantenverleimung.",
  segments: [
    {
      title: "Fronten",
      body: "Gängige Front-Kategorien sind Dekor, Lack, Furnier oder Massivholz. Welche zu Ihrer Zeile passt, hängt von Optik, Nutzung und Budget ab. Das klären wir gemeinsam in der Beratung.",
    },
    {
      title: "Arbeitsplatte",
      body: "Für die Arbeitsplatte kommen je nach Beanspruchung Schichtstoff, Naturstein oder Keramik infrage. Wir stimmen sie auf Ihre Fronten und den Alltag in der Küche ab.",
    },
    {
      title: "Kante und Verarbeitung",
      body: "Unsere Korpuskanten schließen wir mit PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig. So bleiben an der stark genutzten Zeile keine offenen Fugen.",
    },
  ],
};

/** ProcessSteps (shared): Mini-Prozess (Vollprozess liegt beim Pillar). */
export const kzProcess = {
  eyebrow: "Ablauf",
  heading: "So entsteht Ihre Küchenzeile",
  image: `${IMG}/2026/05/variante_1778229163946_1-scaled.jpg`,
  imageAlt: "Küchenzeile nach Maß in der Fertigung in der Werkstatt",
  steps: [
    {
      title: "Beratung und kostenloses Aufmaß",
      description:
        "Wir besprechen Nutzung, Geräte und Wünsche, bei Ihnen zu Hause oder bei uns. Danach vermessen wir Ihre Wand millimetergenau. Das Aufmaß ist kostenlos.",
    },
    {
      title: "3D-Planung",
      description:
        "Aus den Maßen entsteht die 3D-Planung mit Einteilung, Fronten, Auszügen und Geräten. Sie sehen Ihre Zeile vor der Fertigung und ändern in Ruhe.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Nach Ihrer Freigabe fertigen wir die Zeile in unserer eigenen Werkstatt in Espelkamp, auf Homag-Technik. Made in Germany, jedes Teil aus unserem Haus.",
    },
    {
      title: "Montage durch eigenes Team",
      description:
        "Unser eigenes Montageteam baut die Zeile zum verbindlichen Termin auf und justiert die Passung an Wand und Anschluss vor Ort, bis alles sitzt.",
    },
  ],
};

/** SpecTable (shared): Kostenfaktoren. KEINE Preise/€-Zahlen (Kit §8). */
export const kzKostenFaktoren = {
  heading: "Was den Preis Ihrer Küchenzeile bestimmt",
  intro:
    "Was eine Küchenzeile nach Maß kostet, lässt sich nicht pauschal sagen, weil jede Zeile anders geplant ist. Einen festen Laufmeterpreis nennen wir bewusst nicht. Der Preis setzt sich aus diesen Faktoren zusammen. Den genauen Wert bekommen Sie als individuelles Angebot nach dem kostenlosen Aufmaß.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Länge der Zeile",
      values: ["Je mehr laufende Meter, desto mehr Korpus, Fronten und Arbeitsplatte, und desto mehr Zeit in der Fertigung."],
    },
    {
      label: "Fronten und Material",
      values: ["Dekor, Lack, Furnier oder Massivholz liegen preislich weit auseinander und prägen Optik wie Preis am stärksten."],
    },
    {
      label: "Geräte-Umfang",
      values: ["Wie viele und welche Einbaugeräte integriert werden. Die Geräte selbst bringen Sie mit, wir planen die Zeile darum herum."],
    },
    {
      label: "Innenausstattung",
      values: ["Auszüge statt einfacher Böden, Vollauszüge, Sortierung und Beleuchtung holen mehr aus der Zeile und schlagen sich im Preis nieder."],
    },
    {
      label: "Arbeitsplatte",
      values: ["Schichtstoff, Naturstein oder Keramik unterscheiden sich deutlich in Material- und Bearbeitungsaufwand."],
    },
    {
      label: "Einbausituation",
      values: ["Eine gerade Wand ist einfacher als eine Nische, eine schräge Wand oder besondere Anschlüsse, die mehr Anpassung verlangen."],
    },
  ],
};

export const kzMoebelplaner = {
  heading: "Ihre Küchenzeile online vorplanen, den Rest übernehmen wir",
  body:
    "Mit unserem [Möbelplaner](/moebelplaner/) stellen Sie Ihre Zeile online zusammen: Maße, Fronten, Auszüge und Geräte im 3D-Konfigurator, in Ruhe von zu Hause. Was Sie planen, nehmen wir auf. Alles Weitere liegt bei uns: kostenloses Aufmaß vor Ort, Beratung, Fertigung in Espelkamp und Montage durch unser eigenes Team.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg`,
  imageAlt: "Maßgefertigte Küche mit heller Zeile und Kochinsel im offenen Wohnraum",
};

export const kzTestimonialsHeading = "Was unsere Kunden über ihre Küchenzeile sagen";

export const kzFaq = {
  heading: "Häufige Fragen zur Küchenzeile nach Maß",
  items: [
    {
      question: "Was kostet eine Küchenzeile nach Maß?",
      answer:
        "Einen Pauschalpreis gibt es nicht, dafür ist jede Zeile zu individuell geplant. Der Preis hängt vor allem von Länge, Fronten, Arbeitsplatte, Geräteumfang und Innenausstattung ab. Nach dem kostenlosen Aufmaß bekommen Sie ein konkretes Angebot, ohne versteckte Posten.",
    },
    {
      question: "Wie lang und wie tief sollte eine Küchenzeile sein?",
      answer:
        "Zur Orientierung: Gängige Zeilen sind 2,4 bis 3,6 m lang, Unterschränke meist rund 60 cm tief, für enge Räume auch schlanker. Verbindlich planen wir millimetergenau nach Aufmaß, damit die Zeile Wand zu Wand passt.",
    },
    {
      question: "Welche Küchenzeile eignet sich für kleine Räume oder Singlehaushalte?",
      answer:
        "Die einzeilige Küche ist hier die passende Form. Als Single- oder Miniküche reihen wir Kühlen, Kochen, Spülen und Stauraum dicht an einer Wand, ohne einen Zentimeter zu verschenken. Reicht eine Wand nicht, planen wir über Eck als L-Küche.",
    },
    {
      question: "Wie läuft die Planung einer Küchenzeile nach Maß ab?",
      answer:
        "In vier Schritten: Beratung und kostenloses Aufmaß vor Ort, dann 3D-Planung zum Ansehen und Ändern, danach Fertigung in unserer Werkstatt in Espelkamp und zuletzt Montage durch unser eigenes Team. Ein Ansprechpartner von Anfang bis Abnahme.",
    },
    {
      question: "Wie lange dauert die Fertigung?",
      answer:
        "Eine feste Wochenzahl nennen wir nicht, weil sie von Umfang und Auslastung abhängt. Sie bekommen einen verbindlichen Termin, sobald Aufmaß und Planung freigegeben sind, und wissen dann genau, woran Sie sind.",
    },
    {
      question: "Was ist der Unterschied zur Standard-Zeile aus dem Möbelhaus?",
      answer:
        "Standardzeilen kommen im festen Raster, Reststücke verschwinden hinter Passleisten. Unsere Zeile bauen wir Wand zu Wand ohne Passleisten, in Eigenfertigung, mit frei wählbaren Geräten und Materialien. Sie kaufen kein Rastermaß, sondern eine Küche, die genau in Ihren Raum passt.",
    },
    {
      question: "Können Kühlschrank, Kochfeld und Geschirrspüler in eine schmale Zeile?",
      answer:
        "Ja. Wir planen die Zeile um Ihre Geräte herum, auch um kompakte wie Untertisch-Kühlschrank, 45-cm-Geschirrspüler oder Kompaktbackofen. Die Marken der Einbaugeräte wählen Sie frei, wir sorgen für den bündigen Einbau.",
    },
    {
      question: "Montiert Fast die Küchenzeile selbst?",
      answer:
        "Ja. Vermessen und montiert wird immer von unserem eigenen Montageteam, im Umkreis von rund 200 km um Espelkamp, in ganz OWL. Es gibt keinen Bausatz und keine reine Gerätelieferung, wir übernehmen den Aufbau und die Feinjustage vor Ort.",
    },
  ],
};

const kzTypes = kzZielgruppen.segments.map((s) => s.title);

/**
 * JSON-LD for the Küchenzeile product child. Same scope/convention as the pillar
 * and the Dachschräge sibling (Service, not Product-with-price): Service
 * (provider=Organization, serviceType, areaServed, hasOfferCatalog), BreadcrumbList
 * (4 levels), FAQPage (1:1 to visible FAQ), ItemList. No offers/aggregateRating
 * (Preise sind immer individuell, siehe FACTS.md).
 */
export const kzJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Küchenzeile nach Maß",
    serviceType: "Maßgefertigte Küchenzeilen",
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
      name: "Küchenzeilen nach Maß",
      itemListElement: kzTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Küchenzeile für ${name}` },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Küchen nach Maß", item: `${SITE}/kuechen-nach-mass/` },
      { "@type": "ListItem", position: 4, name: "Küchenzeile nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: kzFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Küchenzeile nach Maß: Einsatzbereiche",
    itemListElement: kzTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
