/**
 * Content for the `/kuechen-nach-mass/kueche-mit-dachschraege/` page: the
 * "Küche mit Dachschräge" cluster child (product) under the Küchen pillar
 * (`/kuechen-nach-mass/`). Built from the Privat library plus shared sections
 * (SegmentCards, SpecTable, UspHighlight, ProcessSteps) so each section carries
 * one topic (ARCHITECTURE.md §1.1). Copy is Dachschrägen-Küchen-specific
 * (Kniestock, Kopffreiheit, Schrägenform, Muldenlüfter) to avoid cannibalising
 * the pillar and the Einbauschrank-Dachschräge sibling (Trennung nach Möbeltyp:
 * Küche hier, Schrank dort).
 *
 * Copy follows the Fast Systemmöbel brand voice (Sie-Anrede, handwerklich,
 * konkret, belegt, keine em-dashes). See docs/seo/brand/BRAND_VOICE.md und FACTS.md.
 *
 * Copy: Authoring-Engine (Writer/Humanizer/QC/Chefredakteur) aus dem Research-Kit
 * (docs/seo/research/kueche-mit-dachschraege.kit.md), Lauf 2026-08-13, Chefredakteur
 * pass. Bildpfade sind Platzhalter aus dem Küchen-Pool, bis eigene Dachschrägen-
 * Küchen-Motive vorliegen (siehe REVIEW.md Bild-Vorschläge).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/kuechen-nach-mass/kueche-mit-dachschraege/";
const IMG = "/images";

export const dsHero = {
  bgImage: `${IMG}/2026/05/variante_1778229163946_1-scaled.jpg`,
  imageAlt: "Küche nach Maß mit Kochinsel unter einer Dachschräge",
  title: "Küche mit Dachschräge nach Maß aus Espelkamp",
  intro:
    "Ja, eine vollwertige Küche mit Dachschräge ist machbar, wenn wir sie aufs Grad genau planen. Als Meisterbetrieb aus Espelkamp bauen wir Ihre Küche millimetergenau bis unter die Schräge, Wand zu Wand ohne Passleisten. So wird aus dem Raum unter dem Dach eine Arbeitsküche mit Kopffreiheit und Stauraum.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Küchen nach Maß", href: "/kuechen-nach-mass/" },
    { label: "Küche mit Dachschräge" },
  ],
};

export const dsIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Möbel und Küchen nach Maß.",
  heading: "Warum die Schräge nach Maß verlangt",
  introBefore:
    "Serienküchen stoßen an jeder Dachschräge an ihre Grenzen, weil ihr festes Raster die Winkel nicht trifft. Wir fertigen die Küche millimetergenau bis unter die",
  introBold: "Schräge",
  introAfter: ".",
  bandImage: `${IMG}/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg`,
  bandAlt: "Maßgefertigte Küche mit Kochinsel unter Dachschräge",
  col1Title: "Wand zu Wand ohne Passleisten",
  col1Body:
    "Fronten und Korpus folgen dem Winkel, Wand zu Wand ohne Passleisten und ohne tote Ecke. Küchen unter Dachschrägen haben wir schon einige gebaut.",
  col1CtaLabel: "Dachschrägen-Küche anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "In unserer Werkstatt in Espelkamp verschließen wir die Kanten mit PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig, auch an spitzen Winkeln. Vom Aufmaß bis zur Montage bleibt es eine [maßgefertigte Küche vom Tischler](/kuechen-nach-mass/).",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Aufmaß der Schräge und Montage übernimmt unser eigenes Team im Umkreis von rund 200 km um Espelkamp, in ganz OWL, in Minden, Lübbecke, Osnabrück und Bielefeld. Kein Bausatz, wir bauen bei Ihnen auf.",
  col3CtaLabel: "Dachschrägen-Küche online planen",
  col3CtaHref: "/moebelplaner/",
};

export const dsCtas = {
  intro: {
    image: `${IMG}/2025/11/IMG_9387-scaled.jpg`,
    heading: "Ihre Dachschrägen-Küche beginnt mit einem Blick auf die Schräge",
    linkText: "Sprechen Sie mit uns über Ihre Dachschräge",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/2025/11/20231204_095459232_iOS-scaled.jpg`,
    heading: "Machen Sie aus dem Raum unter dem Dach eine Küche, die passt",
    linkText: "Jetzt kostenloses Aufmaß der Schräge anfragen",
    href: "/kontakt/",
  },
  /** Tertiary conversion path (Playbook §6): phone as a trust anchor, clickable on mobile. */
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SegmentCards (shared): Begriffs-Glossar Kniestock/Drempel/Abseite (Kit Modul 2, AEO). */
export const dsBegriffe = {
  heading: "Kniestock, Drempel und Abseite kurz erklärt",
  intro:
    "Unter dem Dach begegnen Ihnen diese Begriffe ständig, im Neubau wie im Altbau. Kurz sortiert, damit wir bei der Planung dasselbe meinen.",
  segments: [
    {
      title: "Kniestock",
      body: "Die niedrige Außenwand an der Traufseite, auf der die Dachschräge aufsetzt. Ihre Höhe entscheidet, wie hoch Sie dort noch Unterschränke stellen und arbeiten können.",
    },
    {
      title: "Drempel",
      body: "Ein anderes, regional gebräuchliches Wort für den Kniestock. Gemeint ist dieselbe niedrige Wand unter der Schräge, planerisch macht das keinen Unterschied.",
    },
    {
      title: "Abseite und First",
      body: "Die Abseite ist der flache Hohlraum hinter der Kniestockwand, ideal als verstecktes Stauraumdepot. Der First ist der höchste Punkt im Raum, dort haben Sie die volle Kopffreiheit.",
    },
  ],
};

/** SegmentCards (shared): Küchenform nach Grundriss unter der Schräge (Kit Modul 4, ✅). */
export const dsFormen = {
  heading: "Welche Küchenform unter die Schräge passt",
  intro:
    "Die passende Form richtet sich nach dem Verlauf der Schräge und danach, wo die Kopffreiheit reicht. Hier nur der Schrägen-Bezug, die Formen im Detail zeigen die jeweiligen Produktseiten.",
  segments: [
    {
      title: "Zeile an der Traufseite",
      body: "Die einzeilige Küche läuft an der hohen Wand entlang. Spüle und Herd setzen wir dorthin, wo Sie aufrecht stehen, die niedrigen Zonen an der Schräge übernehmen Auszüge und ein Hochschrank an der Giebelwand.",
    },
    {
      title: "L- oder U-Form in den Raum",
      body: "Bei der L- oder U-Küche rückt die Arbeitszone unter den First in die Raummitte, wo die Kopffreiheit am größten ist. Die Schräge trägt den Stauraum, ein Eckschrank löst die tote Ecke auf.",
    },
    {
      title: "Insel oder Halbinsel im First",
      body: "Eine Kücheninsel oder Halbinsel steht frei unter dem höchsten Punkt, wenn Grundriss und Anschlüsse es zulassen. In einer offenen Wohnküche zoniert sie zugleich den Raum.",
    },
  ],
};

/** SpecTable (shared): Zonen-Ergonomie. NUR allgemeines Ergonomiewissen (Kit §9b), keine Fast-Range. */
export const dsMasse = {
  heading: "Kopffreiheit und Zonen unter der Schräge",
  intro:
    "Diese Werte sind allgemeine Ergonomie- und Planungsorientierung, keine festen Fast-Maße. Ihren genauen Verlauf messen wir beim kostenlosen Aufmaß der Schräge millimetergenau auf.",
  firstColLabel: "Zone",
  columns: ["Allgemeine Orientierung", "Lösung nach Maß"],
  highlightColumn: 1,
  rows: [
    {
      label: "Arbeitszone im Stehen",
      values: [
        "Als Faustregel rund 60 cm Abstand zwischen Kopf und Decke an Arbeitszonen, damit Sie aufrecht stehen.",
        "Spüle und Herd planen wir dorthin, wo die Kopffreiheit reicht, ans Dachfenster oder in den First.",
      ],
    },
    {
      label: "Arbeitshöhe",
      values: [
        "Arbeitshöhe rund 90 cm, abhängig von Ihrer Körpergröße.",
        "Die Arbeitsplatte richten wir auf Ihre Größe aus, für rückenschonendes Arbeiten.",
      ],
    },
    {
      label: "Stauraum an der Schräge",
      values: [
        "Der niedrige Bereich bis zum Kniestock bleibt bei Standardmöbeln meist ungenutzt.",
        "Schrägenschränke und Vollauszüge holen den Stauraum bis unter die Schräge heraus.",
      ],
    },
    {
      label: "Sitzbereich unter der tiefen Schräge",
      values: [
        "Ganz flache Zonen unterhalb der Stehhöhe eignen sich nicht mehr zum Arbeiten.",
        "Dort planen wir eine Sitzbank mit Stauraum oder offene Regale statt einer Arbeitszone.",
      ],
    },
  ],
};

/** SegmentCards (shared): Lösungen unter der Schräge (Kit Modul 5 Stauraum + Modul 7 Licht/Dunstabzug). */
export const dsLoesungen = {
  heading: "Stauraum, Licht und Dunstabzug unter der Schräge",
  intro:
    "Das macht die Schräge alltagstauglich, vom letzten Zentimeter Stauraum bis zur Beleuchtung im Schatten der Dachfläche.",
  segments: [
    {
      title: "Schrägenschränke und Auszüge",
      body: "Maßgefertigte Schrägenschränke schließen bündig zur Dachfläche ab. Im niedrigen Bereich planen wir Vollauszüge statt Drehtüren, weil sich eine Tür unter der Schräge kaum öffnen lässt.",
    },
    {
      title: "Abseite nutzen",
      body: "Hinter der Kniestockwand steckt die Abseite. Mit Auszügen, Klappen oder Rollcontainern machen wir diesen Drempel-Stauraum zugänglich, statt ihn hinter einer Gipswand zu verlieren.",
    },
    {
      title: "Licht und Dachfenster",
      body: "Das Dachfenster ist die stärkste Lichtquelle. Gegen Schattenzonen unter der Schräge setzen wir LED-Lichtleisten unter den Ober- und Hängeschränken, helle Fronten reflektieren das Tageslicht zusätzlich.",
    },
    {
      title: "Dunstabzug",
      body: "Wo der Kniestock niedrig ist und keine hohe Wandhaube passt, ist ein Muldenlüfter im Kochfeld oft die bessere Wahl. Wir stimmen den Abzug auf Schräge, Gebälk und Dachfenster ab.",
    },
  ],
};

/** ProcessSteps (shared): Mini-Prozess (Vollprozess liegt beim Pillar). */
export const dsProcess = {
  eyebrow: "Ablauf",
  heading: "So planen wir Ihre Küche unter der Dachschräge",
  image: `${IMG}/2025/11/IMG_4797-scaled.jpg`,
  imageAlt: "Küche nach Maß unter Dachschräge in der Planung",
  steps: [
    {
      title: "Beratung und Aufmaß der Schräge",
      description:
        "Wir beraten Sie und nehmen die Schräge kostenlos vor Ort auf, mit Winkel, Kniestockhöhe und mehreren Höhenpunkten. Dachfenster und Gebälk stimmen wir dabei ab.",
    },
    {
      title: "3D-Planung",
      description:
        "In der 3D-Planung sehen Sie Ihre Küche vorab, mit Zonen, Fronten und dem Verlauf entlang der Schräge. Änderungen sind hier jederzeit möglich, bevor wir fertigen.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Wir fertigen in unserer eigenen Werkstatt in Espelkamp auf Homag-Maschinen. Fronten und Korpus schneiden wir im Verlauf Ihrer Schräge zu, nach Ihrem Aufmaß.",
    },
    {
      title: "Montage durch eigenes Team",
      description:
        "Nach Ihrer Freigabe baut unser eigenes Montageteam die Küche zum verbindlichen Termin bei Ihnen auf und justiert die Passung an der Schräge fein nach.",
    },
  ],
};

/** SpecTable (shared): Kostenfaktoren. KEINE Preise/€-Zahlen, kein pauschaler Schrägenaufschlag (Kit §8/§9a). */
export const dsKostenFaktoren = {
  heading: "Was den Preis Ihrer Dachschrägen-Küche bestimmt",
  intro:
    "Einen pauschalen Zuschlag für die Schräge gibt es bei uns nicht. Der Preis entsteht aus Material, Geräten und Aufwand. Was Sie am Ende zahlen, steht im individuellen Angebot nach dem kostenlosen Aufmaß.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Schrägenzuschnitt und Sonderfronten",
      values: ["Fronten und Korpusse, die dem Dachwinkel folgen, brauchen mehr Planung und Zuschnitt als gerade Standardteile."],
    },
    {
      label: "Kniestockhöhe und Zahl der Schrägen",
      values: ["Je niedriger der Kniestock und je mehr Schrägen oder Gauben zusammenkommen, desto aufwändiger wird die Lösung."],
    },
    {
      label: "Material und Fronten",
      values: ["Ob lackiert, furniert oder mit Massivholz, die Wahl der Fronten und Materialien prägt Optik und Preis am stärksten."],
    },
    {
      label: "Geräte-Umfang",
      values: ["Anzahl und Ausstattung der Einbaugeräte, vom Muldenlüfter bis zum Backofen, die Marke wählen Sie frei."],
    },
    {
      label: "Maßfertigung Wand zu Wand",
      values: ["Der passgenaue Einbau bündig zwischen den Wänden, ohne Passleisten, bestimmt den Fertigungsaufwand mit."],
    },
  ],
};

/**
 * UspHighlight (shared): Kombi-Angebot Küche + Einbauschrank aus einer Hand
 * (Kit §9a Q8, freigegeben). Trägt den Paarregel-Link zum Dachschrägenschrank
 * (Cluster-Map: Trennung nach Möbeltyp, gegenseitig verlinken).
 */
export const dsKombi = {
  eyebrow: "Aus einer Hand",
  heading: "Küche und Schrank unter derselben Schräge",
  body:
    "Dieselbe Dachschräge trägt oft mehr als die Küche. Kommt der Stauraum daneben von uns, planen wir Küche und [Schrank unter der Dachschräge](/einbauschraenke-nach-mass/einbauschrank-dachschraege/) in einem Aufmaß und montieren beides in einem Zug. Ein Ansprechpartner, ein durchgehendes Bild bis in die Abseite.",
  image: `${IMG}/2025/11/ThabarSebastian_kueche2.jpeg`,
  imageAlt: "Küche und Einbauschrank unter einer Dachschräge nach Maß",
};

export const dsMoebelplaner = {
  heading: "Ihre Dachschrägen-Küche online vorplanen, den Rest übernehmen wir",
  body:
    "Mit unserem [Möbelplaner](/moebelplaner/) skizzieren Sie Ihre Küche unter der Schräge selbst, mit Maßen, Fronten und Einteilung im 3D-Konfigurator. Diese Skizze ist der ideale Start fürs Beratungsgespräch. Den Rest übernehmen wir: kostenloses Aufmaß der Schräge, Planung, Fertigung in Espelkamp und Montage durch unser Team.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/2025/11/IMG_9387-scaled.jpg`,
  imageAlt: "Dachschrägen-Küche nach Maß mit grifflosen Fronten",
};

export const dsTestimonialsHeading = "Das sagen Kundinnen und Kunden über die Zusammenarbeit mit uns";

export const dsFaq = {
  heading: "Häufige Fragen zur Küche mit Dachschräge",
  items: [
    {
      question: "Wie viel Abstand muss zwischen Kopf und Dachschräge bleiben?",
      answer:
        "Als Faustregel sollten an Arbeitszonen rund 60 cm zwischen Kopf und Dachschräge frei bleiben, damit Sie aufrecht stehen. Das ist allgemeines Ergonomiewissen. Den genauen Verlauf messen wir beim Aufmaß und legen die Arbeitszonen dorthin, wo genug Kopffreiheit bleibt.",
    },
    {
      question: "Was ist der Unterschied zwischen Kniestock und Drempel?",
      answer:
        "Praktisch keiner. Beide Wörter meinen die niedrige Außenwand, auf der die Dachschräge aufsetzt. Drempel ist regional gebräuchlich, Kniestock der geläufigere Fachbegriff. Seine Höhe entscheidet, wie viel Unterschrank und Arbeitsfläche an der Traufseite möglich sind.",
    },
    {
      question: "Welche Küchenform eignet sich bei Dachschräge am besten?",
      answer:
        "Das hängt vom Grundriss ab. Eine Zeile an der hohen Traufwand ist am einfachsten, L- oder U-Form holen die Arbeitszone unter den First in die Raummitte, eine Insel passt unter den höchsten Punkt, wenn Platz und Anschlüsse stimmen.",
    },
    {
      question: "Wie nutze ich den niedrigen Bereich unter der Schräge als Stauraum?",
      answer:
        "Mit maßgefertigten Schrägenschränken bündig zur Dachfläche, Vollauszügen statt Drehtüren und der Abseite hinter dem Kniestock. So wird aus der sonst toten Restfläche nutzbarer Stauraum bis unter die Schräge.",
    },
    {
      question: "Welcher Dunstabzug funktioniert bei niedrigem Kniestock?",
      answer:
        "Wo eine hohe Wandhaube nicht unter die Schräge passt, ist ein Muldenlüfter direkt im Kochfeld oft die bessere Wahl. Das ist als Option gedacht, die passende Lösung stimmen wir auf Ihre Schräge und Ihr Kochfeld ab.",
    },
    {
      question: "Kann die Spüle unter einem Dachfenster stehen?",
      answer:
        "Ja, das bringt Tageslicht und gute Lüftung an den Arbeitsplatz. Achten sollten Sie auf die Armaturhöhe, damit sich das Dachfenster noch öffnen lässt, und auf Kondenswasser. Beides berücksichtigen wir in der Planung.",
    },
    {
      question: "Was kostet eine Küche mit Dachschräge?",
      answer:
        "Einen pauschalen Aufschlag für die Schräge gibt es nicht. Was die Küche kostet, hängt an Material, Fronten, Geräten und Aufwand. Nach dem kostenlosen Aufmaß bekommen Sie ein individuelles Angebot statt einer Pauschale.",
    },
    {
      question: "Lohnt sich eine Maßanfertigung oder reicht eine Standardküche?",
      answer:
        "Standardküchen kommen im festen Raster, an der Schräge entstehen dann Passleisten und tote Ecken. Eine Maßanfertigung folgt dem Winkel und läuft Wand zu Wand ohne Passleisten. Genau dafür lohnt sich unter dem Dach der Tischler.",
    },
  ],
};

const dsFormTypes = dsFormen.segments.map((s) => s.title);

/**
 * JSON-LD for the Dachschräge-Küche product child. Same scope/convention as the
 * pillar and the Küchenzeile sibling: Service (provider=Organization, serviceType,
 * areaServed, hasOfferCatalog), BreadcrumbList (4 levels), FAQPage (1:1 to visible
 * FAQ), ItemList. No offers/aggregateRating (Preise sind immer individuell, FACTS.md).
 */
export const dsJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Küche mit Dachschräge nach Maß",
    serviceType: "Maßgefertigte Küchen für Dachschrägen",
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
      name: "Küchen für Dachschrägen nach Maß",
      itemListElement: dsFormTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Dachschrägen-Küche als ${name}` },
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
      { "@type": "ListItem", position: 4, name: "Küche mit Dachschräge", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dsFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Küche mit Dachschräge nach Maß: Formen",
    itemListElement: dsFormTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
