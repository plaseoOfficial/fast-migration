/**
 * Content for the `/wohnmoebel-nach-mass/regal-nach-mass/` page: the "Regal nach
 * Maß" cluster child (product) under the Wohnmöbel pillar
 * (`/wohnmoebel-nach-mass/`). Built from the Privat library sections plus shared
 * sections (SegmentCards, SpecTable, UspHighlight, ProcessSteps) so each section
 * carries one topic (ARCHITECTURE.md §1.1). Copy is regal-specific (offenes Regal
 * als flexible Fläche, Wandregal/Standregal/Eckregal, millimetergenaue
 * Fachaufteilung bis zur Decke) to avoid cannibalising the pillar and the sibling
 * product pages (Bücherregal = Buch-Maß, Raumteiler = zonierend, Wohnwand =
 * geschlossene Türwand). Cluster-Map: docs/seo/research/clusters/wohnmoebel.md.
 *
 * Copy follows the Fast Systemmöbel brand voice (Sie-Anrede, handwerklich,
 * konkret, belegt, keine em-dashes). See docs/seo/brand/BRAND_VOICE.md und
 * docs/seo/brand/FACTS.md. Firmen-/Zahlenfakten (Telefon, Adresse, Geo,
 * 2. Generation, 4.000+ Projekte, 1.000 m² Fertigung, 200 km Montage-Radius,
 * Homag, PU-Kanten) stammen aus dem Pillar-Modul/FACTS.md.
 *
 * Copy: Authoring-Engine (Writer/Humanizer/QC/Chefredakteur) aus dem Research-Kit
 * (docs/seo/research/regal-nach-mass.kit.md), Lauf 2026-09-02, Chefredakteur pass.
 * Bildpfade sind Platzhalter aus dem Wohnmöbel-/Einbauschrank-Pool, bis eigene
 * Regal-Motive vorliegen (siehe REVIEW.md Bild-Vorschläge).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/wohnmoebel-nach-mass/regal-nach-mass/";
const IMG = "/images/wohnmoebel";

export const regHero = {
  bgImage: "/images/einbauschraenke/einbauschrank-nach-mass-anthrazit-regalnische.jpg",
  imageAlt:
    "Offenes Regal nach Maß, bündig in eine Wohnzimmer-Nische bis unter die Decke eingebaut",
  title: "Regal nach Maß aus Espelkamp",
  intro:
    "Ein Regal nach Maß ist das offene Regal, das wir millimetergenau auf Ihre Wand, Nische oder Ecke zuschneiden. Bis unter die Decke, von Wand zu Wand, ohne eine einzige Passleiste. Als Meisterbetrieb aus Espelkamp planen wir es, fertigen es und montieren es selbst, nach kostenlosem Aufmaß bei Ihnen vor Ort.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Wohnmöbel nach Maß", href: "/wohnmoebel-nach-mass/" },
    { label: "Regal nach Maß" },
  ],
};

export const regIntroStats = {
  since: "seit 1996",
  sinceSub: "fertigen wir Möbel nach Maß in eigener Werkstatt.",
  heading: "Offenes Regal, jeder Zentimeter genutzt",
  introBefore:
    "Regale von der Stange enden im Raster, den Rest kaschieren Blenden. Ihr Regal nach Maß bauen wir anders: Wand zu Wand, bis unter die Decke, millimetergenau nach kostenlosem Aufmaß. Ohne einen verschenkten",
  introBold: "Zentimeter",
  introAfter: ".",
  bandImage: `${IMG}/wohnmoebel-nach-mass-wohn-essbereich.jpg`,
  bandAlt: "Offenes Regal nach Maß als frei stehende Raumkante zwischen Wohn- und Essbereich",
  col1Title: "Wand zu Wand ohne Passleisten",
  col1Body:
    "Die Fachaufteilung planen wir genau auf Ihren Raum. Kein toter Spalt, kein verschenkter Stauraum. Offen zum Zeigen, geschlossen mit Klappen oder Schubladen für alles hinter der Front.",
  col1CtaLabel: "Regal nach Maß anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Jedes Regal entsteht bei uns in Espelkamp, mit fugenlos verschlossener PU-Kantenverleimung, feuchtigkeitsbeständig und stabil. Von der Beratung bis zur Montage kommt Ihr [maßgefertigtes Wohnmöbel](/wohnmoebel-nach-mass/) aus einer Hand, mit einem festen Ansprechpartner.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Aufmaß und Montage macht unser eigenes Montageteam, im Umkreis von rund 200 km um Espelkamp: in ganz OWL, in Minden, Lübbecke, Osnabrück und Bielefeld. Frei stehende Regale liefern wir bundesweit.",
  col3CtaLabel: "Regal online vorplanen",
  col3CtaHref: "/moebelplaner/",
};

export const regCtas = {
  intro: {
    image: `${IMG}/wohnmoebel-nach-mass-wohn-essbereich.jpg`,
    heading: "Ihr Regal beginnt an Ihrer Wand",
    linkText: "Sprechen Sie mit uns über Ihr Regal",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/tv-wand-nach-mass-wandpolsterung.jpg`,
    heading: "Holen Sie aus Ihrer Wand das Regal, das wirklich passt",
    linkText: "Jetzt kostenloses Aufmaß für Ihr Regal anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SegmentCards (shared): Varianten/Ausführungen des offenen Regals (Kit §3 Modul 2). */
export const regVarianten = {
  heading: "Regal nach Maß in jeder Ausführung",
  intro:
    "An der Wand, frei im Raum oder in die Ecke gesetzt: Wir planen das offene Regal in der Bauform, die zu Ihrem Raum passt. Vom schlichten Wandregal über das Stufenregal bis zur raumhohen Regalwand. Für Bücher planen wir es als [Bücherregal nach Maß](/wohnmoebel-nach-mass/buecherregal-nach-mass/).",
  segments: [
    {
      title: "Wandregal",
      body: "An die Wand montiert, in genau Ihrer Breite. Schwebend als Hängeregal oder mit sichtbarer Aufhängung. Gut über Sideboard, Schreibtisch oder Sofa.",
    },
    {
      title: "Standregal",
      body: "Frei stehend vom Boden bis zur Höhe, die Sie wollen. An der Wand oder als offene Raumkante, die zwei Zonen locker trennt.",
    },
    {
      title: "Eckregal",
      body: "Nutzt die Ecke und führt zwei Wände zusammen. So entsteht Fläche, wo sonst nur eine tote Lücke bliebe.",
    },
    {
      title: "Raumhoch, Wand zu Wand",
      body: "Als Regalwand bis unter die Decke, Wand zu Wand und ohne Passleisten. Offene Fächer zum Zeigen, geschlossene Elemente für alles, was hinter die Front soll.",
    },
  ],
};

/** SpecTable (shared): Maß-Orientierung. NUR allgemeines Planungswissen (Kit §9b), keine Fast-Maß-Range. */
export const regMasse = {
  heading: "Maße eines Regals nach Maß: allgemeine Orientierung",
  intro:
    "Wie hoch, breit und tief ein Regal sein sollte, hängt vom Raum ab und davon, was hineinsoll. Die Werte hier unten sind allgemeines Planungswissen zur Orientierung, keine feste Fast-Vorgabe. Verbindlich wird es bei Ihnen erst nach dem kostenlosen Aufmaß. Dann planen wir millimetergenau, Wand zu Wand ohne Passleisten.",
  firstColLabel: "Maß",
  columns: ["Übliche Orientierung", "Bei Fast nach Maß"],
  highlightColumn: 1,
  rows: [
    {
      label: "Höhe",
      values: [
        "Vom niedrigen Wandbord bis raumhoch, oft am Türsturz oder an der Decke ausgerichtet.",
        "Bis unter Ihre Decke, raumhoch und ohne Passleisten abgeschlossen.",
      ],
    },
    {
      label: "Breite und Fachteilung",
      values: [
        "Feldbreiten teilt man nach Nutzung und Stabilität der Böden auf.",
        "Millimetergenau auf Ihre Wand, Fachbreiten und -höhen frei eingeteilt.",
      ],
    },
    {
      label: "Tiefe",
      values: [
        "Flach für Deko und Bilder, tiefer für Ordner, Kisten und Boxen.",
        "Je Fach unterschiedlich möglich, flach oben, tiefer unten.",
      ],
    },
    {
      label: "Sondersituation",
      values: [
        "Nische, Ecke und Dachschräge verlangen Sondermaße statt Standardware.",
        "Nische, Ecke und Dachschräge exakt aufgemessen und passgenau ausgebaut.",
      ],
    },
  ],
};

/** UspHighlight (shared): Material/Verarbeitung/PU-Kante + Statik qualitativ (Kit §3 Modul 5, §9b-2). */
export const regMaterial = {
  eyebrow: "Material und Verarbeitung",
  heading: "Stabile Böden, saubere Kanten",
  body:
    "Korpus und Böden fertigen wir aus Massivholz oder aus furnierten und beschichteten Platten, auf Wunsch mit umweltzertifiziertem Holz. Die Einlegeböden sitzen auf einem Lochraster und lassen sich jederzeit versetzen. Alle Sichtkanten verschließen wir fugenlos mit PU-Kantenverleimung, feuchtigkeitsbeständig und sauber. Die Böden legen wir nach Spannweite und Belastung aus, damit sie sich auch voll beladen nicht durchbiegen.",
  image: "/images/einbauschraenke/einbauschrank-nach-mass-anthrazit-fenster.jpg",
  imageAlt: "Offenes Regal nach Maß in Anthrazit mit verstellbaren Einlegeböden im Lochraster",
};

/** SegmentCards (shared): Einsatzräume des offenen Regals (Kit §4: 3-4 Räume, nicht 8). */
export const regEinsatz = {
  heading: "Wo ein Regal nach Maß zu Hause ist",
  intro:
    "Ein offenes Regal passt in fast jeden Raum, sobald Tiefe und Fachhöhe zur Nutzung stimmen. Genau darauf planen wir es, ob im Wohnzimmer, im Arbeitszimmer, im Flur oder im Kinderzimmer.",
  segments: [
    {
      title: "Wohnzimmer",
      body: "Offene Fläche für Bücher, Deko und Kleinteile, ruhig gegliedert und passgenau an die Wand gesetzt. Auf Wunsch mit Licht in einzelnen Fächern.",
    },
    {
      title: "Büro und Arbeitszimmer",
      body: "Tiefere Fächer für Ordner und Akten, dazu geschlossene Elemente dort, wo Ordnung zählt.",
    },
    {
      title: "Flur und Nische",
      body: "Schlank in die Nische gesetzt, wo Standardregale scheitern. Jeder Zentimeter bis unter die Decke genutzt.",
    },
  ],
};

/** ProcessSteps (shared): Mini-Prozess (Vollprozess liegt beim Pillar). */
export const regProcess = {
  eyebrow: "Ablauf",
  heading: "So entsteht Ihr Regal",
  image: "/images/einbauschraenke/einbauschrank-montage-espelkamp.jpg",
  imageAlt: "Monteure von Fast Systemmöbel montieren ein Regal nach Maß vor Ort",
  steps: [
    {
      title: "Beratung und kostenloses Aufmaß",
      description:
        "Wir sprechen über Nutzung, Bauform und Wünsche und vermessen dann Wand, Nische oder Ecke millimetergenau. Das Aufmaß vor Ort ist für Sie kostenlos.",
    },
    {
      title: "Technische 3D-Planung",
      description:
        "Aus Ihren Maßen entsteht die technische 3D-Planung mit Fachteilung, Material und Ausführung. So sehen Sie Ihr Regal, bevor ein Span gesägt ist.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Nach Ihrer Freigabe fertigen wir das Regal in unserer eigenen Werkstatt in Espelkamp auf Homag-Maschinen, jedes Teil in Eigenregie.",
    },
    {
      title: "Montage durch unser eigenes Team",
      description:
        "Zum verbindlichen Termin baut unser Montageteam das Regal auf und richtet es Wand zu Wand aus, sauber an Boden und Decke.",
    },
  ],
};

/** SpecTable (shared): Kostentreiber. KEINE Preise/€-Zahlen (Kit §8). */
export const regKosten = {
  heading: "Was den Preis Ihres Regals bestimmt",
  intro:
    "Was ein Regal nach Maß kostet, lässt sich nicht pauschal sagen, dazu ist jedes Stück zu unterschiedlich geplant. Fünf Faktoren geben den Ausschlag. Den genauen Wert nennen wir Ihnen als individuelles, unverbindliches Angebot, nach dem kostenlosen Aufmaß.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Größe und Fläche",
      values: ["Je mehr Breite, Höhe und Feldbreite, desto mehr Korpus, Böden und Fertigungszeit."],
    },
    {
      label: "Material",
      values: ["Massivholz, Furnier und beschichtete Platte liegen preislich deutlich auseinander."],
    },
    {
      label: "Ausstattung",
      values: ["Zusätzliche Türen, Klappen, Schubladen, Boxen oder Beleuchtung erhöhen den Aufwand."],
    },
    {
      label: "Oberfläche",
      values: ["Ob Dekor, Lack oder geöltes Holz, die Oberfläche wirkt sich auf den Preis aus."],
    },
    {
      label: "Sondersituation",
      values: ["Ecke, Dachschräge oder eine schiefe Altbauwand verlangen mehr Anpassung."],
    },
  ],
};

export const regMoebelplaner = {
  heading: "Ihr Regal online vorplanen, den Rest übernehmen wir",
  body:
    "Mit unserem [Möbelplaner](/moebelplaner/) skizzieren Sie Ihr Regal vorab und sammeln Maße, Fächer und Materialideen. Das bereitet Ihre persönliche Planung vor, den genauen Aufbau legen wir dann gemeinsam fest. Der Rest liegt bei uns: kostenloses Aufmaß vor Ort, Beratung, Fertigung in Espelkamp, Montage durch unser eigenes Team.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/wohnmoebel-nach-mass-wohn-essbereich.jpg`,
  imageAlt: "Offenes Regal nach Maß in einem offenen Wohnraum",
};

export const regTestimonialsHeading = "Was unsere Kunden über ihr Regal sagen";

export const regFaq = {
  heading: "Häufige Fragen zum Regal nach Maß",
  items: [
    {
      question: "Was kostet ein Regal nach Maß?",
      answer:
        "Einen Pauschalpreis gibt es nicht, denn jedes Regal wird anders geplant. Es kommt vor allem auf Größe und Fläche, Material, Ausstattung, Oberfläche und die Einbausituation an. Nach dem kostenlosen Aufmaß bekommen Sie ein individuelles, unverbindliches Angebot.",
    },
    {
      question: "Welche Maße sind bei einem Regal nach Maß möglich?",
      answer:
        "Höhe, Breite und Tiefe planen wir frei, vom niedrigen Wandregal bis zur raumhohen Regalwand von Wand zu Wand. Auch die Fachaufteilung legen wir genau nach Ihrer Nutzung fest.",
    },
    {
      question: "Passt ein Regal nach Maß auch in eine Nische, Ecke oder unter die Dachschräge?",
      answer:
        "Ja. Wir messen Nische, Ecke oder Dachschräge vor Ort exakt auf und fertigen das Regal passgenau, bis unter die Decke und ohne Passleisten. Gerade dort, wo Standardregale scheitern, spielt Maßarbeit ihre Stärke aus.",
    },
    {
      question: "Aus welchem Material wird das Regal gefertigt?",
      answer:
        "Aus Massivholz oder aus furnierten und beschichteten Platten, je nach Wunsch und Budget. Die Sichtkanten verschließen wir fugenlos mit unserer PU-Kantenverleimung, die feuchtigkeitsbeständig ist und sauber bleibt.",
    },
    {
      question: "Sind die Einlegeböden verstellbar?",
      answer:
        "Ja. Die Einlegeböden sitzen auf einem Lochraster und lassen sich in der Höhe versetzen. So passen Sie die Fächer später an neue Bücher, Ordner oder Boxen an.",
    },
    {
      question: "Kann ich das Regal mit Türen, Schubladen oder Boxen ergänzen?",
      answer:
        "Ja, offene Fächer lassen sich mit einzelnen geschlossenen Elementen kombinieren, etwa mit Türen, Klappen, Schubladen oder Boxen. Was davon sinnvoll ist, klären wir in der Beratung.",
    },
    {
      question: "Übernehmen Sie Aufmaß und Montage?",
      answer:
        "Das Aufmaß vor Ort ist kostenlos. Montiert wird von unserem eigenen Team, im Umkreis von rund 200 km um Espelkamp, etwa in OWL, Minden, Osnabrück und Bielefeld. Frei stehende Regale liefern wir auch bundesweit.",
    },
    {
      question: "Worin unterscheidet sich ein Regal vom Meisterbetrieb von einem Regal von der Stange?",
      answer:
        "Wir sind ein Meisterbetrieb und fertigen in eigener Werkstatt in Espelkamp. Wir beraten und messen persönlich bei Ihnen vor Ort und bauen echte Sondermaße statt fester Raster. Und statt der üblichen ABS-Kante verschließen wir die Kanten fugenlos mit PU-Kantenverleimung.",
    },
  ],
};

const regTypes = regVarianten.segments.map((s) => s.title);

/**
 * JSON-LD for the Regal product child. Same scope/convention as the pillar and
 * the Küchenzeile sibling (Service, not Product-with-price): Service
 * (provider=Organization, serviceType, areaServed, hasOfferCatalog),
 * BreadcrumbList (4 levels), FAQPage (1:1 to visible FAQ), ItemList. No
 * offers/aggregateRating (Preise sind immer individuell, siehe FACTS.md).
 */
export const regJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Regal nach Maß",
    serviceType: "Maßgefertigte Regale",
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
      name: "Regale nach Maß",
      itemListElement: regTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Regal: ${name}` },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Wohnmöbel nach Maß", item: `${SITE}/wohnmoebel-nach-mass/` },
      { "@type": "ListItem", position: 4, name: "Regal nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: regFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Regal nach Maß: Ausführungen",
    itemListElement: regTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
