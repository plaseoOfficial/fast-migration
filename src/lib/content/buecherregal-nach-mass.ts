/**
 * Content for the `/wohnmoebel-nach-mass/buecherregal-nach-mass/` page: the
 * "Bücherregal nach Maß" cluster child (product) under the Wohnmöbel pillar
 * (`/wohnmoebel-nach-mass/`). Built from the Privat library sections plus shared
 * sections (SegmentCards, SpecTable, UspHighlight, ProcessSteps) so each section
 * carries one topic (ARCHITECTURE.md §1.1). Copy is bücherregal-specific ("Das
 * Buch als Maßgabe": Fachtiefen/-höhen nach Buchformat, Traglast/Durchbiegung,
 * Bücherwand bis zur Decke) to avoid cannibalising the pillar and the sibling
 * product pages (Regal = allgemeine Fläche, Raumteiler = zonierend, Wohnwand =
 * geschlossene Türwand). Cluster-Map: docs/seo/research/clusters/wohnmoebel.md.
 *
 * Copy follows the Fast Systemmöbel brand voice (Sie-Anrede, handwerklich,
 * konkret, belegt, keine em-dashes). See docs/seo/brand/BRAND_VOICE.md und
 * docs/seo/brand/FACTS.md. Firmen-/Zahlenfakten stammen aus dem Pillar-Modul/FACTS.md.
 *
 * Copy: Authoring-Engine aus dem Research-Kit
 * (docs/seo/research/buecherregal-nach-mass.kit.md), Lauf 2026-09-02, Chefredakteur
 * pass. Konkrete Holzart-Namen wurden bei der Integration entfernt
 * (FACTS: spezifische Holzarten nicht belegt; nur generisch "Massivholz"). Buchformat-Maße und
 * Statik-Faustregeln sind allgemeines Planungswissen (Kit §9b Framing-Auflage),
 * keine Fast-eigene Bandbreite. Bildpfade sind Platzhalter aus dem
 * Wohnmöbel-/Einbauschrank-Pool, bis eigene Bücherregal-Motive vorliegen (REVIEW.md).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/wohnmoebel-nach-mass/buecherregal-nach-mass/";
const IMG = "/images/wohnmoebel";

export const buchHero = {
  bgImage: "/images/einbauschraenke/einbauschrank-nach-mass-anthrazit-regalnische.jpg",
  imageAlt:
    "Raumhohes Bücherregal nach Maß, in eine Wohnzimmer-Nische bis unter die Decke eingebaut",
  title: "Bücherregal nach Maß aus Espelkamp",
  intro:
    "Ein Bücherregal nach Maß ist die Bücherwand, deren Fächer wir auf Ihre Bücher abstimmen: Fachtiefen und Fachhöhen nach Ihren Titeln. Tragfähig geplant, millimetergenau in die Nische oder bis unter die Decke gebaut. Als Meisterbetrieb aus Espelkamp planen, fertigen und montieren wir es selbst, nach einem kostenlosen Aufmaß vor Ort.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Wohnmöbel nach Maß", href: "/wohnmoebel-nach-mass/" },
    { label: "Bücherregal nach Maß" },
  ],
};

export const buchIntroStats = {
  since: "seit 1996",
  sinceSub: "fertigen wir Möbel nach Maß in eigener Werkstatt.",
  heading: "Fächer nach Ihren Büchern, nicht nach dem Raster",
  introBefore:
    "Standardregale haben feste Fachhöhen, für Bildbände zu niedrig, für Taschenbücher zu tief. Ihre Bücherwand bauen wir Wand zu Wand und bis unter die Decke, mit Fächern für jeden",
  introBold: "Buchrücken",
  introAfter: ".",
  bandImage: `${IMG}/wohnmoebel-nach-mass-wohn-essbereich.jpg`,
  bandAlt: "Bücherregal nach Maß als raumhohe Bücherwand im Wohnzimmer",
  col1Title: "Tragfähig geplant, ohne Durchbiegung",
  col1Body:
    "Bücher gehören zu den schwersten Dingen im Regal. Wir begrenzen die freie Feldbreite und wählen die Materialstärke so, dass die Böden bei voller Buchlast tragen und nicht durchhängen.",
  col1CtaLabel: "Jetzt Bücherregal anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "In Espelkamp fertigen wir jede Bücherwand selbst, mit fugenloser PU-Kantenverleimung, sauber und feuchtigkeitsbeständig verschlossen. Von der Beratung bis zur Montage bleibt es ein [maßgefertigtes Wohnmöbel](/wohnmoebel-nach-mass/) aus einer Hand.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Aufmaß und Montage übernimmt unser eigenes Montageteam, rund 200 km um Espelkamp: in ganz OWL, in Minden, Lübbecke, Osnabrück und Bielefeld. Steht das Regal frei, liefern wir es deutschlandweit.",
  col3CtaLabel: "Bücherregal online planen",
  col3CtaHref: "/moebelplaner/",
};

export const buchCtas = {
  intro: {
    image: `${IMG}/wohnmoebel-nach-mass-wohn-essbereich.jpg`,
    heading: "Ihr Bücherregal beginnt mit einem Blick auf Ihre Sammlung",
    linkText: "Sprechen Sie mit uns über Ihr Bücherregal",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/tv-wand-nach-mass-wandpolsterung.jpg`,
    heading: "Machen Sie aus Ihrer Wand die Bücherwand, die wirklich passt",
    linkText: "Jetzt kostenloses Aufmaß für Ihr Bücherregal anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SegmentCards (shared): Formen/Varianten des Bücherregals (Kit §3 Modul 2). Sibling-Link -> Regal (Regal-Familie). */
export const buchVarianten = {
  heading: "Bücherregal nach Maß in jeder Form",
  intro:
    "Ob gerade Wand, Ecke, Nische oder Dachschräge, wir planen die Bücherwand in der Form, die zu Ihrem Raum passt, vom [offenen Regal nach Maß](/wohnmoebel-nach-mass/regal-nach-mass/) bis zur geschlossenen Variante mit Türen.",
  segments: [
    {
      title: "Gerades Regal und Bücherwand",
      body: "Als durchgehende Regalwand von Wand zu Wand, raumhoch bis unter die Decke. Eine gefüllte Bücherwand schluckt nebenbei Schall und macht den Raum ruhiger.",
    },
    {
      title: "Eck- und Nischenregal",
      body: "Nutzt eine Ecke oder Nische bündig aus, als Einbau-Bücherregal genau dort, wo ein Standardregal nicht hineinpasst.",
    },
    {
      title: "Dachschrägenregal",
      body: "Unter die Schräge gebaut, oft als Stufenregal, das jeden Zentimeter Resthöhe bis zum Kniestock nutzt.",
    },
    {
      title: "Offen oder mit Türen",
      body: "Offene Präsentation, geschlossene Fächer oder Glastüren gegen Staub, auch mit Schiebetüren und im selben Regal gemischt.",
    },
  ],
};

/** SpecTable (shared): Fachhöhe/-tiefe nach Buchformat (Kit §3 Modul 3, Kern-Asset). Allgemeines Planungswissen (§9b). */
export const buchMasse = {
  heading: "Fachtiefe und Fachhöhe nach Buchformat",
  intro:
    "Wie tief und wie hoch ein Fach sein sollte, richtet sich nach dem Buchformat. Die Werte unten sind allgemeines Planungswissen zur Orientierung; verstellbare Böden erlauben eine Mischbelegung. Verbindlich planen wir Ihre Fächer millimetergenau nach dem kostenlosen Aufmaß.",
  firstColLabel: "Buchformat",
  columns: ["Fachtiefe (Orientierung)", "Fachhöhe (Orientierung)"],
  highlightColumn: 0,
  rows: [
    {
      label: "Taschenbuch, Roman",
      values: ["Rund 20 bis 25 cm.", "Rund 20 bis 25 cm."],
    },
    {
      label: "Hardcover",
      values: ["Rund 30 cm.", "Rund 30 bis 35 cm."],
    },
    {
      label: "Bildband, Kunstband",
      values: ["Rund 35 bis 40 cm.", "Liegend bis rund 45 cm."],
    },
    {
      label: "Verstellbare Böden",
      values: ["Fachböden über die Lochreihe versetzbar.", "Mischbelegung aller Formate möglich."],
    },
  ],
};

/** SpecTable (shared): Statik/Spannweite (Gap-Killer, Kit §3 Modul 4). Qualitativ/Orientierung, keine Fast-kg-Garantie (§9b-3). */
export const buchStatik = {
  heading: "Stabil unter Buchlast: Spannweite und Böden",
  intro:
    "Ein Regal voller Bücher trägt mehr Last, als man denkt. Ob ein Boden durchbiegt, entscheiden vor allem die freie Feldbreite und die Materialstärke. Diese Faustregeln dienen der Orientierung; die Tragkraft für Ihr Regal legen wir beim Aufmaß aus.",
  firstColLabel: "Faktor",
  columns: ["Worauf es ankommt"],
  highlightColumn: 0,
  rows: [
    {
      label: "Feldbreite",
      values: ["Schmalere Felder tragen mehr; bei voller Buchlast halten wir die Spannweite eher kurz."],
    },
    {
      label: "Materialstärke",
      values: ["Stärkere Böden biegen weniger, für größere Spannweiten wählen wir eine dickere Platte."],
    },
    {
      label: "Zwischenwände",
      values: ["Senkrechte Wände stützen lange Böden und verteilen die Last."],
    },
    {
      label: "Verankerung an der Wand",
      values: ["Hohe Bücherwände sichern wir gegen Kippen, die Befestigung klären wir im Aufmaß."],
    },
  ],
};

/** UspHighlight (shared): Material/PU-Kante/Ausstattung (Kit §3 Modul 6). Holzarten generisch (FACTS: keine Holzart-Namen als Sortiment). */
export const buchMaterial = {
  eyebrow: "Material und Ausstattung",
  heading: "Massives Holz, saubere Kanten, verstellbare Böden",
  body:
    "Korpus und Böden fertigen wir aus Massivholz, MDF oder beschichteten Platten; was zu Optik, Budget und Statik passt, klären wir im Beratungsgespräch. Die Einlegeböden sitzen auf einer Lochreihe im 32-mm-Raster und lassen sich jederzeit versetzen. Alle Kanten verschließen wir fugenlos mit PU-Kantenverleimung, feuchtigkeitsbeständig. LED, Türen oder eine Regalleiter für deckenhohe Fächer planen wir auf Wunsch ein.",
  image: "/images/einbauschraenke/einbauschrank-nach-mass-anthrazit-fenster.jpg",
  imageAlt: "Bücherregal nach Maß mit verstellbaren Böden und fugenlosen Kanten an einer Fensterwand",
};

/** ProcessSteps (shared): Mini-Prozess (Vollprozess liegt beim Pillar). */
export const buchProcess = {
  eyebrow: "Ablauf",
  heading: "So entsteht Ihre Bücherwand",
  image: "/images/einbauschraenke/einbauschrank-montage-espelkamp.jpg",
  imageAlt: "Montageteam von Fast Systemmöbel baut eine Bücherwand nach Maß vor Ort auf",
  steps: [
    {
      title: "Beratung und kostenloses Aufmaß",
      description:
        "Wir sprechen über Ihre Sammlung und Wünsche und vermessen dann Wand, Nische oder Schräge millimetergenau. Das Aufmaß vor Ort ist kostenlos.",
    },
    {
      title: "3D-Planung",
      description:
        "Aus den Maßen entsteht die technische 3D-Planung mit Fachteilung, Statik und Material. So sehen Sie Ihre Bücherwand, bevor sie gebaut wird.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Nach Ihrer Freigabe fertigen wir die Bücherwand in unserer eigenen Werkstatt in Espelkamp auf modernen Homag-Maschinen.",
    },
    {
      title: "Montage durch eigenes Team",
      description:
        "Unser eigenes Montageteam baut die Bücherwand zum verbindlichen Termin auf, richtet sie aus und sichert sie an der Wand.",
    },
  ],
};

/** SpecTable (shared): Kostentreiber. KEINE Preise/€-Zahlen (Kit §8). */
export const buchKosten = {
  heading: "Was den Preis Ihres Bücherregals bestimmt",
  intro:
    "Was ein Bücherregal nach Maß kostet, lässt sich nicht pauschal sagen, weil jede Bücherwand anders geplant ist. Der Preis setzt sich aus den folgenden Faktoren zusammen. Den genauen Wert bekommen Sie als individuelles Angebot nach dem kostenlosen Aufmaß.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Größe und laufende Meter",
      values: ["Je mehr Wand und Fächer, desto mehr Material und Fertigungszeit."],
    },
    {
      label: "Material",
      values: ["Massivholz, Furnier oder beschichtete Platte liegen preislich weit auseinander."],
    },
    {
      label: "Türen und Ausstattung",
      values: ["Türen, Schubladen, Beleuchtung und andere Extras erhöhen den Aufwand."],
    },
    {
      label: "Sonderform",
      values: ["Ecke, Dachschräge oder eine Einpassung in die Nische verlangen mehr Anpassung."],
    },
    {
      label: "Montage und Zugang",
      values: ["Deckenhohe Wände mit Regalleiter und Kippsicherung bedeuten mehr Montageaufwand."],
    },
  ],
};

export const buchMoebelplaner = {
  heading: "Ihr Bücherregal online vorplanen, den Rest übernehmen wir",
  body:
    "Mit unserem [Möbelplaner](/moebelplaner/) stellen Sie Ihre Bücherwand im 3D-Konfigurator zusammen, mit Maßen, Fächern und Material. Was Sie dort planen, nehmen wir auf. Alles Weitere liegt bei uns: kostenloses Aufmaß vor Ort, Beratung, Fertigung in Espelkamp und Montage durch unser eigenes Team.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/wohnmoebel-nach-mass-wohn-essbereich.jpg`,
  imageAlt: "Bücherregal nach Maß als offene Bücherwand im Wohnraum",
};

export const buchTestimonialsHeading = "Was unsere Kunden über ihr Bücherregal nach Maß sagen";

export const buchFaq = {
  heading: "Häufige Fragen zum Bücherregal nach Maß",
  items: [
    {
      question: "Wie tief muss ein Bücherregal nach Maß sein?",
      answer:
        "Das hängt vom größten Buchformat im Fach ab. Zur Orientierung: rund 20 bis 25 cm für Taschenbücher und Romane, etwa 30 cm für Hardcover und 35 bis 40 cm für Bildbände. Nach dem Aufmaß stimmen wir die Tiefe auf Ihre Sammlung ab.",
    },
    {
      question: "Wie hoch sollten die Fächer für Taschenbücher, Hardcover und Bildbände sein?",
      answer:
        "Taschenbücher brauchen rund 20 cm, Romane etwa 25 cm, Hardcover 30 bis 35 cm und liegende Bildbände bis rund 45 cm. Damit Sie Formate mischen können, arbeiten wir mit verstellbaren Fachböden auf einer Lochreihe.",
    },
    {
      question: "Wie viel Gewicht hält ein Regalboden, bevor er sich durchbiegt?",
      answer:
        "Ein voll bepacktes Fach trägt viel Gewicht, deshalb ist die Spannweite entscheidend: Je breiter ein Feld, desto eher biegt der Boden durch. Wir begrenzen die Feldbreiten, wählen die passende Materialstärke und setzen bei langen Böden Zwischenwände. Die Tragkraft legen wir beim Aufmaß aus.",
    },
    {
      question: "Was kostet ein Bücherregal nach Maß?",
      answer:
        "Einen Festpreis gibt es nicht, weil kein Regal dem anderen gleicht. Der Preis hängt vor allem von der Größe in laufenden Metern ab, dazu von Material, Türen, Sonderform und Montageaufwand. Ihren genauen Preis bekommen Sie als individuelles Angebot nach dem kostenlosen Aufmaß.",
    },
    {
      question: "Kann ein Bücherregal exakt in eine Nische oder unter eine Dachschräge eingepasst werden?",
      answer:
        "Ja, genau dafür ist ein Bücherregal nach Maß da. Wir bauen es millimetergenau in die Nische, Wand zu Wand oder unter die Dachschräge, ohne Passleisten. Soll das Regal einen Raum zonieren statt an der Wand zu stehen, planen wir das besser als Raumteiler.",
    },
    {
      question: "Kann ein Bücherregal bis zur Decke reichen und brauche ich dann eine Leiter?",
      answer:
        "Ja, eine Bücherwand lässt sich bis unter die Decke bauen und nutzt die Wandfläche voll aus. Den Zugang zu den oberen Fächern planen wir mit ein, etwa über eine Regalleiter. Ob eine Leiter sinnvoll ist, klären wir im Beratungsgespräch.",
    },
    {
      question: "Welches Material eignet sich für ein Bücherregal?",
      answer:
        "Für Korpus und Böden kommen Massivholz, MDF oder eine beschichtete Platte infrage. Was zu Optik, Budget und Statik passt, legen wir gemeinsam fest. Die Kanten verschließen wir fugenlos mit PU-Kantenverleimung, das hält sie sauber und feuchtigkeitsbeständig.",
    },
    {
      question: "Offen oder mit Türen: Was ist für ein Bücherregal sinnvoller?",
      answer:
        "Das hängt von Nutzung und Raum ab. Offene Fächer zeigen Ihre Bücher, geschlossene Fächer und Türen halten Staub ab und beruhigen die Wand. Glastüren sind der Mittelweg. Häufig mischen wir beides im selben Regal, offen zum Zeigen, geschlossen zum Verstauen.",
    },
    {
      question: "Wie sichere ich ein hohes Bücherregal gegen Kippen?",
      answer:
        "Hohe Regale gehören an der Wand gesichert, gerade in Haushalten mit Kindern. Wie das Bücherregal befestigt und gegen Kippen gesichert wird, klären wir beim Aufmaß und richten es beim Aufbau entsprechend ein.",
    },
    {
      question: "Wie läuft die Planung ab und wie lange dauert die Fertigung?",
      answer:
        "Es beginnt mit Beratung und kostenlosem Aufmaß, danach folgen 3D-Planung, Fertigung in Espelkamp und Montage durch unser eigenes Team. Einen verbindlichen Termin nennen wir nach dem Aufmaß und Ihrer Freigabe, weil die Dauer von Umfang und Material abhängt.",
    },
  ],
};

const buchTypes = buchVarianten.segments.map((s) => s.title);

/**
 * JSON-LD for the Bücherregal product child. Same scope/convention as the pillar
 * and the Küchenzeile sibling (Service, not Product-with-price): Service,
 * BreadcrumbList (4 levels), FAQPage (1:1 to visible FAQ), ItemList. No
 * offers/aggregateRating (Preise sind immer individuell, siehe FACTS.md).
 */
export const buchJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bücherregal nach Maß",
    serviceType: "Maßgefertigte Bücherregale",
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
      name: "Bücherregale nach Maß",
      itemListElement: buchTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Bücherregal: ${name}` },
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
      { "@type": "ListItem", position: 4, name: "Bücherregal nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: buchFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bücherregal nach Maß: Formen",
    itemListElement: buchTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
