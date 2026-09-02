/**
 * Content for the `/wohnmoebel-nach-mass/sideboard-nach-mass/` page: the
 * "Sideboard nach Maß" cluster child (product) under the Wohnmöbel pillar
 * (`/wohnmoebel-nach-mass/`). Built from the Privat library sections plus shared
 * sections (SpecTable, SegmentCards, UspHighlight, ProcessSteps) so each section
 * carries one topic (ARCHITECTURE.md §1.1). Copy is sideboard-specific (das
 * freistehende, niedrige Stauraummöbel: Schubladen/Türen/offene Fächer, freistehend
 * oder schwebend, exakte Breite/Höhe/Tiefe) to avoid cannibalising the pillar and
 * the sibling product pages (Wohnwand = raumhohe Wand, TV-Wand = Medienfokus,
 * Regal/Bücherregal = offene Fächer). Cluster-Map:
 * docs/seo/research/clusters/wohnmoebel.md.
 *
 * Copy follows the Fast Systemmöbel brand voice (Sie-Anrede, handwerklich,
 * konkret, belegt, keine em-dashes). See docs/seo/brand/BRAND_VOICE.md und
 * docs/seo/brand/FACTS.md. Firmen-/Zahlenfakten stammen aus dem Pillar-Modul/FACTS.md.
 *
 * Copy: Authoring-Engine aus dem Research-Kit
 * (docs/seo/research/sideboard-nach-mass.kit.md), Lauf 2026-09-02, Chefredakteur
 * pass. Bildpfade sind Platzhalter aus dem Wohnmöbel-Pool, bis eigene
 * Sideboard-Motive vorliegen (siehe REVIEW.md).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/wohnmoebel-nach-mass/sideboard-nach-mass/";
const IMG = "/images/wohnmoebel";

export const sideHero = {
  bgImage: `${IMG}/sideboard-nach-mass-weiss-metallgestell.jpg`,
  imageAlt:
    "Sideboard nach Maß in Weiß auf schlankem Metallgestell mit offenem Mittelfach",
  title: "Sideboard nach Maß aus Espelkamp",
  intro:
    "Ein Sideboard nach Maß ist ein niedriges, breites Stauraummöbel mit Schubladen, Türen und offenen Fächern, gebaut in genau Ihrer Breite, Höhe und Tiefe. Wir sind ein Meisterbetrieb aus Espelkamp und bauen Ihr Sideboard vom Entwurf bis zur Montage selbst, nach einem kostenlosen Aufmaß bei Ihnen zu Hause.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Wohnmöbel nach Maß", href: "/wohnmoebel-nach-mass/" },
    { label: "Sideboard nach Maß" },
  ],
};

export const sideIntroStats = {
  since: "seit 1996",
  sinceSub: "fertigen wir Möbel nach Maß, jedes Teil in eigener Werkstatt.",
  heading: "Ein Sideboard, das Wand zu Wand in Ihre Nische passt",
  introBefore:
    "Ein Sideboard von der Stange hört beim Standardmaß auf. An der Wand bleibt links und rechts eine Lücke. Ihres bauen wir Wand zu Wand, millimetergenau, passend auf jeden",
  introBold: "Zentimeter",
  introAfter: " Ihrer Nische oder Wand, ganz ohne Passleisten.",
  bandImage: `${IMG}/arbeitszimmer-nach-mass-schreibtisch-sideboard.jpg`,
  bandAlt: "Sideboard nach Maß neben einem Schreibtisch im Wohn- und Arbeitsbereich",
  col1Title: "Genau Ihre Breite, Höhe und Tiefe",
  col1Body:
    "Schubladen, Türen oder offene Fächer teilen wir so auf, wie Sie es im Alltag brauchen. Mit Griff oder grifflos, freistehend oder schwebend, ganz nach Ihrem Raum.",
  col1CtaLabel: "Jetzt Sideboard anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Jeden Korpus fertigen wir in Espelkamp selbst und verleimen die Kanten fugenlos mit PU, feuchtigkeitsbeständig verschlossen. Von der Beratung bis zur Montage bleibt Ihr Sideboard ein [maßgefertigtes Wohnmöbel](/wohnmoebel-nach-mass/) aus einer Hand.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Aufmaß und Montage übernimmt unser eigenes Team im Umkreis von rund 200 km um Espelkamp, in ganz OWL und um Minden, Lübbecke, Osnabrück und Bielefeld. Freistehende Sideboards liefern wir deutschlandweit.",
  col3CtaLabel: "Sideboard online planen",
  col3CtaHref: "/moebelplaner/",
};

export const sideCtas = {
  intro: {
    image: `${IMG}/wohnmoebel-nach-mass-wohn-essbereich.jpg`,
    heading: "Ihr Sideboard beginnt mit einem Blick auf Ihre Wand",
    linkText: "Sprechen Sie mit uns über Ihr Sideboard",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/wohnmoebel-nach-mass-tv-wand-kamin.jpg`,
    heading: "Holen Sie aus Ihrer Wand das Sideboard, das wirklich passt",
    linkText: "Jetzt kostenloses Aufmaß für Ihr Sideboard anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SpecTable (shared): Abgrenzung Sideboard vs Highboard/Lowboard/Kommode/Anrichte (Kit §3 Modul 2, Snippet-tauglich). */
export const sideAbgrenzung = {
  heading: "Sideboard, Highboard, Lowboard oder Kommode?",
  intro:
    "Die Begriffe geraten schnell durcheinander. Diese Übersicht zeigt, was ein Sideboard von seinen Verwandten trennt, damit Sie das richtige Möbel für Ihren Raum anfragen.",
  firstColLabel: "Möbeltyp",
  columns: ["Höhe und Form", "Typische Nutzung"],
  highlightColumn: 0,
  rows: [
    {
      label: "Sideboard",
      values: [
        "Niedrig und breit, meist hüfthoch um 70 bis 90 cm.",
        "Stauraum und Anrichte im Wohn- und Essbereich.",
      ],
    },
    {
      label: "Highboard",
      values: [
        "Höher und schlanker, reicht oft bis auf Brusthöhe.",
        "Viel Stauraum auf wenig Grundfläche, teils mit Vitrine.",
      ],
    },
    {
      label: "Lowboard",
      values: [
        "Besonders niedrig und lang, knie- bis hüfthoch.",
        "Unter dem Fernseher als TV-Möbel und Medienablage.",
      ],
    },
    {
      label: "Kommode / Anrichte",
      values: [
        "Kompakter und tiefer, vor allem mit Schubladen.",
        "Schlafzimmer, Flur oder als Anrichte im Essbereich.",
      ],
    },
  ],
};

/** SpecTable (shared): Maß-Orientierung. NUR allgemeines Planungswissen (Kit §9), keine fixe Fast-Range. */
export const sideMasse = {
  heading: "Maße eines Sideboards nach Maß: Ihre Orientierung",
  intro:
    "Wie breit, hoch und tief ein Sideboard sein sollte, hängt von Raum und Nutzung ab. Die Werte unten sind allgemeines Planungswissen, mehr zur Orientierung. Verbindlich wird es nach dem kostenlosen Aufmaß: Dann planen wir millimetergenau, Wand zu Wand und ohne Passleisten.",
  firstColLabel: "Maß",
  columns: ["Übliche Orientierung", "Bei Fast nach Maß"],
  highlightColumn: 1,
  rows: [
    {
      label: "Breite",
      values: [
        "Kompakt ab etwa 80 cm, gängig 120 bis 200 cm, nach oben offen.",
        "Millimetergenau auf Ihre Nische oder Wand, Wand zu Wand.",
      ],
    },
    {
      label: "Höhe",
      values: [
        "Meist hüfthoch, oft an der Fensterbank ausgerichtet.",
        "Auf Ihren Raum und die tägliche Nutzung abgestimmt.",
      ],
    },
    {
      label: "Tiefe",
      values: [
        "Rund 40 bis 50 cm, für enge Räume auch schlanker.",
        "Nach Inhalt und Stellfläche geplant, auch besonders flach.",
      ],
    },
    {
      label: "Sondersituation",
      values: [
        "Nische und Dachschräge verlangen echte Sondermaße.",
        "Nische und Dachschräge exakt aufgemessen und ausgebaut.",
      ],
    },
  ],
};

/** SegmentCards (shared): Ausstattung/Design (Kit §3 Modul 4). */
export const sideAusstattung = {
  heading: "Ausstattung und Gestaltung",
  intro:
    "Wie Ihr Sideboard am Ende wirkt und wie leicht es sich nutzen lässt, entscheiden Front, Beschläge und die Aufteilung im Korpus. Was zu Ihnen passt, klären wir in der Beratung.",
  segments: [
    {
      title: "Schubladen, Türen, offene Fächer",
      body: "Die Aufteilung planen wir nach Ihrem Bedarf. Geschlossene Türen und Schubladen halten Kram aus dem Blick, offene Fächer zeigen, was gezeigt werden darf.",
    },
    {
      title: "Griff oder grifflos",
      body: "Mit klassischem Griff, mit Griffleiste oder ganz grifflos per Push-to-Open. Auf Wunsch laufen die Schubladen mit Soft-Close und Vollauszug.",
    },
    {
      title: "Front und Material",
      body: "Massivholz, Furnier oder pflegeleichtes Dekor, matt oder mit Glanz. Die Kanten verleimen wir fugenlos mit PU, feuchtigkeitsbeständig verschlossen.",
    },
  ],
};

/** UspHighlight (shared): Aufbau freistehend vs schwebend + Statik/Wandmontage (Content-Gap, Kit §3 Modul 5). */
export const sideMontage = {
  eyebrow: "Freistehend oder schwebend",
  heading: "Auf Füßen oder schwebend an der Wand",
  body:
    "Ihr Sideboard bauen wir freistehend auf Sockel oder Füßen, oder wir montieren es schwebend an die Wand. Schwebend wirkt der Raum leichter, der Boden bleibt frei. Damit ein wandhängendes Sideboard sicher trägt, prüfen wir beim Aufmaß den Wandaufbau und legen die Befestigung darauf aus. Gerade in Nische oder unter der Dachschräge kommt es auf diese Details an.",
  image: `${IMG}/sideboard-nach-mass-weiss-metallgestell.jpg`,
  imageAlt: "Sideboard nach Maß in Weiß auf schlankem Metallgestell mit offenem Mittelfach",
};

/** ProcessSteps (shared): Mini-Prozess (Vollprozess liegt beim Pillar). */
export const sideProcess = {
  eyebrow: "Ablauf",
  heading: "So entsteht Ihr Sideboard",
  image: "/images/einbauschraenke/einbauschrank-montage-espelkamp.jpg",
  imageAlt: "Monteur von Fast Systemmöbel bei der Montage vor Ort",
  steps: [
    {
      title: "Beratung und kostenloses Aufmaß",
      description:
        "Wir sprechen über Nutzung, Raum und Wünsche und vermessen danach Wand oder Nische millimetergenau. Das Aufmaß vor Ort kostet Sie nichts.",
    },
    {
      title: "3D-Planung",
      description:
        "Aus Ihren Maßen entsteht die technische 3D-Planung mit Aufteilung, Fronten und Beschlägen. So sehen Sie Ihr Sideboard, bevor der erste Span fällt.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Nach Ihrer Freigabe fertigen wir das Sideboard in unserer eigenen Werkstatt in Espelkamp, jedes Teil in Eigenregie auf moderner Homag-Technik.",
    },
    {
      title: "Montage durch unser Team",
      description:
        "Unser eigenes Montageteam liefert und montiert Ihr Sideboard zum verbindlichen Termin, freistehend oder wandhängend, und räumt am Ende auf.",
    },
  ],
};

/** SpecTable (shared): Kostentreiber. KEINE Preise/€-Zahlen (Kit §8). */
export const sideKosten = {
  heading: "Was den Preis Ihres Sideboards bestimmt",
  intro:
    "Was ein Sideboard nach Maß kostet, lässt sich nicht pauschal sagen, weil jedes Stück anders geplant ist. Diese Faktoren geben den Ausschlag. Den genauen Preis bekommen Sie als individuelles Angebot nach dem kostenlosen Aufmaß.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Größe",
      values: ["Breite, Höhe und Tiefe bestimmen, wie viel Material und Arbeitszeit im Korpus stecken."],
    },
    {
      label: "Material",
      values: ["Massivholz, Furnier und Dekor liegen preislich deutlich auseinander."],
    },
    {
      label: "Fronten und Beschläge",
      values: ["Push-to-Open, Soft-Close und Vollauszüge kosten mehr als einfache Scharniere."],
    },
    {
      label: "Ausstattungsdichte",
      values: ["Viele Schubladen, Einlegeböden und Einteilungen bedeuten mehr Aufwand als ein schlichter Korpus."],
    },
    {
      label: "Einbausituation",
      values: ["Eine gerade Wand ist einfacher als eine Nische, eine Dachschräge oder eine schwebende Wandmontage."],
    },
  ],
};

export const sideMoebelplaner = {
  heading: "Ihr Sideboard online vorplanen, den Rest übernehmen wir",
  body:
    "Mit unserem [Möbelplaner](/moebelplaner/) stellen Sie Ihr Sideboard online zusammen, Maße, Fronten und Aufteilung im 3D-Konfigurator. Was Sie dort entwerfen, nehmen wir als Ausgangspunkt und machen daraus Ihr fertiges Möbel: kostenloses Aufmaß vor Ort, Beratung zu Material und Beschlägen, Fertigung in Espelkamp und Montage durch unser eigenes Team.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/arbeitszimmer-nach-mass-schreibtisch-sideboard.jpg`,
  imageAlt: "Sideboard nach Maß mit passendem Schreibtisch im Wohn- und Arbeitsbereich",
};

export const sideTestimonialsHeading = "Was unsere Kunden über ihr Sideboard sagen";

export const sideFaq = {
  heading: "Häufige Fragen zum Sideboard nach Maß",
  items: [
    {
      question: "Was ist ein Sideboard und wie unterscheidet es sich von Highboard, Lowboard und Kommode?",
      answer:
        "Ein Sideboard ist ein niedriges, breites Stauraummöbel mit Türen, Schubladen oder offenen Fächern, meist hüfthoch. Ein Highboard ist höher und schlanker, ein Lowboard besonders niedrig und als TV-Möbel gedacht, eine Kommode kompakter mit Schubladen. Nach Maß legen Sie Form und Höhe selbst fest.",
    },
    {
      question: "Welche Maße hat ein Sideboard nach Maß?",
      answer:
        "Übliche Sideboards sind rund 120 bis 200 cm breit, hüfthoch und etwa 40 bis 50 cm tief. Das sind nur Orientierungswerte. Breite, Höhe und Tiefe bauen wir millimetergenau nach Ihrem Raum, ob schmal für den Flur oder mehrere Meter Wand zu Wand.",
    },
    {
      question: "Was kostet ein Sideboard nach Maß?",
      answer:
        "Einen Festpreis gibt es nicht, weil jedes Sideboard anders geplant ist. Der Preis hängt vor allem von Größe, Material, Fronten und Beschlägen sowie der Ausstattungsdichte ab. Nach dem kostenlosen Aufmaß und der Planung erhalten Sie ein verbindliches, individuelles Angebot.",
    },
    {
      question: "Kann ein Sideboard nach Maß schwebend an der Wand montiert werden?",
      answer:
        "Ja. Wir bauen Ihr Sideboard freistehend auf Füßen oder schwebend als wandhängende Variante. Für die schwebende Montage prüfen wir beim Aufmaß den Wandaufbau und legen die Befestigung passend aus, damit das Möbel dauerhaft sicher trägt.",
    },
    {
      question: "Passt ein Sideboard nach Maß auch in eine Nische oder unter eine Dachschräge?",
      answer:
        "Genau dafür ist Maßanfertigung gemacht. Wir messen Nische oder Dachschräge exakt auf und bauen das Sideboard Wand zu Wand ohne störende Passleisten. So bleibt keine Lücke, in der sich Staub sammelt.",
    },
    {
      question: "Welche Ausstattung ist sinnvoll: Schubladen, Türen oder offene Fächer?",
      answer:
        "Das hängt davon ab, was hineinkommt. Schubladen mit Vollauszug ordnen Kleinteile, Türen verbergen Größeres, offene Fächer sind für Bücher oder Deko da. Meist kombinieren wir alle drei und ergänzen auf Wunsch Soft-Close oder Push-to-Open.",
    },
    {
      question: "Welche Holzarten und Oberflächen gibt es für ein Sideboard nach Maß?",
      answer:
        "Zur Wahl stehen Massivholz, Furnier und pflegeleichtes Dekor, matt oder glänzend. Die Kanten verleimen wir fugenlos mit PU, das macht sie feuchtigkeitsbeständig. Musterdekore und Materialproben zeigen wir Ihnen vor der Entscheidung.",
    },
    {
      question: "Wie läuft die Planung eines Sideboards nach Maß bei Fast ab?",
      answer:
        "Zuerst beraten wir Sie und nehmen ein kostenloses Aufmaß vor Ort. Daraus entsteht die 3D-Planung, die Sie freigeben. Danach fertigen wir das Sideboard in Espelkamp, und unser eigenes Montageteam liefert und baut es auf.",
    },
    {
      question: "Liefern und montieren Sie bundesweit?",
      answer:
        "Freistehende Sideboards liefern wir deutschlandweit. Das kostenlose Aufmaß und die Montage durch unser eigenes Team bieten wir im Umkreis von rund 200 km um Espelkamp an, also in ganz OWL und der Region um Minden, Lübbecke, Osnabrück und Bielefeld.",
    },
  ],
};

const sideTypes = ["Sideboard", "Highboard", "Lowboard", "Kommode / Anrichte"];

/**
 * JSON-LD for the Sideboard product child. Same scope/convention as the pillar
 * and the Küchenzeile sibling (Service, not Product-with-price): Service,
 * BreadcrumbList (4 levels), FAQPage (1:1 to visible FAQ), ItemList. No
 * offers/aggregateRating (Preise sind immer individuell, siehe FACTS.md).
 */
export const sideJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sideboard nach Maß",
    serviceType: "Maßgefertigte Sideboards",
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
      name: "Sideboards nach Maß",
      itemListElement: sideTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Sideboard: ${name}` },
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
      { "@type": "ListItem", position: 4, name: "Sideboard nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sideFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sideboard nach Maß: Bauformen",
    itemListElement: sideTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
