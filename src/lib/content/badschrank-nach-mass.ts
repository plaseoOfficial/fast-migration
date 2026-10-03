/**
 * Content for the `/badmoebel-nach-mass/badschrank-nach-mass/` page: the
 * "Badschrank nach Maß" cluster child (product) under the Badmöbel pillar
 * (`/badmoebel-nach-mass/`). Object focus = STAURAUM ABSEITS DES WASCHPLATZES:
 * Hochschrank, Hängeschrank, raumhoher Einbauschrank für Handtücher und Vorräte.
 * NICHT Unterschrank am Becken (→ waschtischunterschrank), NICHT Spiegel/Licht
 * (→ spiegelschrank), NICHT Material-Deep-Dive (→ badmoebel-massivholz).
 *
 * Built from the Privat library sections plus shared sections (SegmentCards ×2,
 * SpecTable ×2, UspHighlight, ProcessSteps) so each section carries one topic
 * (ARCHITECTURE.md §1.1): Typen-Grid · Maß-Tabelle · PU-Kante/Material ·
 * Ausstattung · Kostenfaktoren.
 *
 * Copy follows the Fast brand voice (Sie, handwerklich, konkret, belegt, keine
 * em-dashes). Facts from docs/seo/brand/FACTS.md + clients/fast/kundenwissen.md.
 * Leerstellen (Kit §9b): keine Fast-Festmaße, kein Träger-/Front-Portfolio als
 * Zusage (nur Massivholz belegt; MDF/Melaminharz/HPL nur als Markt-Nennung),
 * keine Beschlagmarken, kein Bad-Referenzprojekt, kein Barrierefrei-Claim fürs Bad.
 *
 * Copy: Authoring-Engine (Writer/Humanizer/QC/Chefredakteur) aus dem Research-Kit
 * (docs/seo/research/badschrank-nach-mass.kit.md), Lauf 2026-10-01 (Lauf 2 nach
 * Chefredakteur-Korrektur), 1531 W, Chefredakteur pass. `since` = sitewide-Muster
 * „seit 1996" (Gründungsjahr, FACTS; wie kleiderschrank/garderobe live, nicht
 * „Meisterbetrieb seit <Jahr>"). Hero-Alt an das reale Foto angepasst. Bildpfade
 * aus dem Badmöbel-Pool als Platzhalter (siehe REVIEW.md Bild-Vorschläge).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/badmoebel-nach-mass/badschrank-nach-mass/";
const IMG = "/images/badmoebel";

export const bsHero = {
  bgImage: `${IMG}/badschrank-nach-mass-hochschrank-grau.jpg`,
  imageAlt:
    "Grauer dreitüriger Badschrank nach Maß neben der Badewanne, unter dem Fenster",
  title: "Badschrank nach Maß aus Espelkamp",
  intro:
    "Ein Badschrank nach Maß bringt Stauraum dorthin, wo Standardmöbel scheitern: neben die Dusche, in die Nische, unter die Schräge. Ob Hochschrank, Hängeschrank oder raumhoher Einbauschrank, wir planen ihn millimetergenau und bauen ihn in unserem Meisterbetrieb in Espelkamp. Planung, Fertigung und Montage bleiben in einer Hand.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Badmöbel nach Maß", href: "/badmoebel-nach-mass/" },
    { label: "Badschrank nach Maß" },
  ],
};

export const bsIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Möbel nach Maß.",
  heading: "Stauraum fürs Bad, millimetergenau in die Nische",
  introBefore:
    "Handtücher, Vorräte und Kosmetik brauchen einen festen Platz, den Möbel von der Stange im Bad selten passend hergeben. Ein Badschrank nach Maß nutzt",
  introBold: "jede Nische und jede Wandhöhe",
  introAfter: ", vom flachen Hängeschrank bis zum raumhohen Einbauschrank.",
  bandImage: `${IMG}/badmoebel-nach-mass-beleuchtete-nische.jpg`,
  bandAlt:
    "Beleuchtete Einbaunische eines Badschranks nach Maß mit offenen Fächern und geschlossenen Fronten",
  col1Title: "Hochschrank, Hängeschrank oder Einbauschrank",
  col1Body:
    "Der Hochschrank bringt Stauraum auf wenig Grundfläche, der Hängeschrank lässt den Boden frei, der raumhohe Einbauschrank nimmt die ganze Wand. Was passt, zeigt sich vor Ort. Jeden bauen wir wandbündig ein.",
  col1CtaLabel: "Badschrank anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Jedes Teil fertigen wir selbst in Espelkamp, von der PU-verleimten Kante bis zur Front. Den passenden [Waschtischunterschrank nach Maß](/badmoebel-nach-mass/waschtischunterschrank-nach-mass/) am Becken planen wir auf Wunsch gleich mit. Ihr Badschrank gehört zu unseren [maßgefertigten Badmöbeln](/badmoebel-nach-mass/).",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Aufmaß, Einbau und Montage übernehmen wir im Umkreis von rund 200 km um Espelkamp, in ganz OWL, etwa in Minden, Lübbecke, Osnabrück und Bielefeld. Fertige Möbel liefern wir auch bundesweit.",
  col3CtaLabel: "Badschrank online planen",
  col3CtaHref: "/moebelplaner/",
};

export const bsCtas = {
  intro: {
    image: `${IMG}/badmoebel-nach-mass-sitzbank-holzplatte.jpg`,
    heading: "Ihr Badschrank beginnt an Ihrer Wand",
    linkText: "Sprechen Sie mit uns über Ihren Badschrank",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/badmoebel-spiegelschrank-doppelwaschtisch.jpg`,
    heading: "Holen Sie aus Ihrer Nische den Stauraum, der genau passt",
    linkText: "Jetzt kostenloses Aufmaß für Ihren Badschrank anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SegmentCards (shared): Typen-Grid (Kit §3 Modul 2). Spiegelschrank/Waschtisch nur verweisen (Anti-Dedup). */
export const bsTypen = {
  heading: "Badschrank nach Maß in jeder Bauform",
  intro:
    "Welche Bauform passt, hängt an Ihrem Bad: an der freien Wand, am Platz auf dem Boden, an der Menge, die hinein soll. Alle vier bauen wir nach Aufmaß.",
  segments: [
    {
      title: "Hochschrank",
      body: "Der Hochschrank nutzt die Höhe, nicht die Fläche. Er fasst Handtücher und Vorräte, ohne breit auszuladen. Passt neben Dusche oder Wanne, wo die Wand frei bleibt.",
    },
    {
      title: "Hängeschrank",
      body: "Hängt an der Wand und gibt den Boden frei. Das wirkt leicht, und darunter wischen Sie bequem durch. Gut über der Toilette, in der Nische oder wo am Boden kein Platz bleibt.",
    },
    {
      title: "Raumhoher Einbauschrank",
      body: "Reicht wandbündig bis unter die Decke, ohne Passleisten und ohne toten Winkel. Hinter ruhigen Fronten verschwindet der ganze Badvorrat. Auch die niedrige Zone unter der Dachschräge nutzen wir mit.",
    },
    {
      title: "Oberschrank und Nische",
      body: "In eine vorhandene Nische oder über ein bestehendes Möbel bauen wir passgenau. So wird selbst die letzte Lücke zu Stauraum, in die ein Schrank von der Stange nie sauber passt.",
    },
  ],
};

/** SpecTable (shared): Maß-Orientierung. NUR allgemeines Planungswissen (Kit §9b-1), keine Fast-Range. */
export const bsMasse = {
  heading: "Maße eines Badschranks nach Maß: eine Orientierung",
  intro:
    "Feste Standardmaße führen wir nicht, jeder Schrank entsteht nach Aufmaß. Die Werte unten sind grobe Richtwerte, damit Sie die Größen einordnen können. Verbindlich wird alles erst nach dem kostenlosen Aufmaß bei Ihnen vor Ort.",
  firstColLabel: "Maß",
  columns: ["Übliche Orientierung", "Bei Fast nach Maß"],
  highlightColumn: 1,
  rows: [
    {
      label: "Höhe",
      values: [
        "Hängeschrank oft rund 60 bis 90 cm, Hochschrank bis gut 180 cm, Einbauschrank raumhoch.",
        "Frei bis unter Ihre Decke, sauber an Sockel und Wand angeschlossen.",
      ],
    },
    {
      label: "Breite",
      values: [
        "Vom schmalen Nischenschrank bis zur kompletten Wand, je nach Platz.",
        "Millimetergenau von Wand zu Wand, ohne Passleisten.",
      ],
    },
    {
      label: "Tiefe",
      values: [
        "Oft rund 20 bis 35 cm, flach für schmale Flächen, tiefer für Vorräte.",
        "Frei nach Aufmaß, flach fürs enge Bad oder tief für mehr Stauraum.",
      ],
    },
    {
      label: "Sondersituation",
      values: [
        "Nische, Dachschräge oder die Fläche über der Toilette bleiben oft ungenutzt.",
        "Passgenau in die Nische, unter die Schräge und über das WC gebaut.",
      ],
    },
  ],
};

/** UspHighlight (shared): Material/PU-Kante + Warum Fast (Kit §3 Modul 4/6). */
export const bsMaterial = {
  eyebrow: "Material und Feuchtraum",
  heading: "Kanten, die im feuchten Bad nicht aufquellen",
  body:
    "In billigen Schränken quellen die Kanten mit der Zeit auf, weil Wasser in die offene Klebefuge zieht. Jede Schnittkante verschließen wir mit PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig, ohne Angriffsfläche für Spritzwasser und Dampf. Wir fertigen aus Massivholz und hochwertigen, branchenüblichen Materialien. Am Markt übliche Platten wie MDF, Melaminharz oder HPL besprechen wir im Einzelfall. Etwas Wandabstand hält die Rückseite belüftet.",
  image: `${IMG}/badezimmer-nach-mass-freistehende-badewanne.jpg`,
  imageAlt:
    "Freistehende Badewanne in einem Badezimmer nach Maß mit raumhohem Badschrank an der Wand",
};

/** SegmentCards (shared): Ausstattung (Kit §3/MI5). Aufzählbares als Grid; nur Machbarkeit, keine Marken (Kit §9b-3). */
export const bsAusstattung = {
  heading: "Innenausstattung für Handtücher, Vorräte und mehr",
  intro:
    "Das Innenleben planen wir auf das, was bei Ihnen im Bad verstaut wird. Genau das entscheidet, wie viel hineinpasst und wie schnell Sie finden, was Sie suchen.",
  segments: [
    {
      title: "Einlegeböden und Fächer",
      body: "Verstellbare Einlegeböden im Lochraster, die Sie später umstecken können. Hohe Fächer für Handtücher, flache für Kosmetik und Vorräte, gestaffelt nach Ihrem Alltag.",
    },
    {
      title: "Auszüge und Wäschekippe",
      body: "Auszüge mit Soft-Close für den schnellen Griff, auf Wunsch eine Wäschekippe für die Schmutzwäsche. So bekommt jedes Teil im Bad seinen festen Ort.",
    },
    {
      title: "Griffe oder grifflos",
      body: "Grifflos mit Push-to-open für eine ruhige Front oder mit Griff, der sich auch mit nassen Händen gut fassen lässt. Beschläge und Öffnung stimmen wir gemeinsam ab.",
    },
    {
      title: "Fronten und Oberfläche",
      body: "Front und Oberfläche richten wir auf Ihr Bad aus, pflegeleicht und abwischbar. Welche Dekore und Oberflächen möglich sind, klären wir vorab.",
    },
  ],
};

/** ProcessSteps (shared): Mini-Prozess (Vollprozess liegt beim Pillar). */
export const bsProcess = {
  eyebrow: "Ablauf",
  heading: "So entsteht Ihr Badschrank",
  image: `/images/einbauschraenke/einbauschrank-montage-espelkamp.jpg`,
  imageAlt:
    "Zwei Monteure von Fast Systemmöbel richten ein maßgefertigtes Möbel mit der Wasserwaage aus",
  steps: [
    {
      title: "Beratung und kostenloses Aufmaß",
      description:
        "Wir sprechen über Ihr Bad und Ihren Stauraumbedarf, am Telefon oder bei Ihnen. Dann messen wir kostenlos vor Ort und denken Rohre, Heizkörper und Steckdosen mit.",
    },
    {
      title: "Technische 3D-Planung",
      description:
        "Aus dem Aufmaß wird eine technische 3D-Planung. Sie sehen Fronten, Fächer und Aufteilung, bevor der erste Span fällt, und ändern mit, bis alles sitzt.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Nach Ihrer Freigabe fertigen wir jedes Teil selbst in unserer Werkstatt, mit PU-verleimten Kanten für den feuchten Raum.",
    },
    {
      title: "Montage durch unser eigenes Team",
      description:
        "Zum verbindlichen Termin baut unser Montageteam den Badschrank ein, befestigt ihn sicher an der Wand und richtet ihn aus. Kein fremder Subunternehmer.",
    },
  ],
};

/** SpecTable (shared): Kostentreiber. KEINE Preise/€-Zahlen (Kit §8). */
export const bsKosten = {
  heading: "Was den Preis Ihres Badschranks bestimmt",
  intro:
    "Einen Pauschalpreis nennen wir bewusst nicht, weil jeder Badschrank anders ausfällt. Ihr Angebot rechnen wir nach dem kostenlosen Aufmaß individuell. Der Preis entsteht aus Material, Ausstattung und Aufwand.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Größe und Typ",
      values: ["Hängeschrank, Hochschrank oder raumhoher Einbauschrank unterscheiden sich in Korpus und Fertigungszeit."],
    },
    {
      label: "Material und Front",
      values: ["Dekor, Furnier oder Lack in matt oder hochglanz wirken sich auf Aufwand und Verarbeitung aus."],
    },
    {
      label: "Beschläge und Auszüge",
      values: ["Soft-Close-Auszüge, Push-to-open, Wäschekippe und zusätzliche Einlegeböden erhöhen den Aufwand."],
    },
    {
      label: "Einbausituation",
      values: ["Nische, Dachschräge oder eine schiefe Altbauwand verlangen mehr Anpassung als eine gerade Wand."],
    },
    {
      label: "Montage",
      values: ["Sichere Wandmontage und Einbau vor Ort gehören zur Leistung und fließen ins Angebot ein."],
    },
  ],
};

export const bsMoebelplaner = {
  heading: "Ihren Badschrank online vorplanen, den Rest übernehmen wir",
  body:
    "Im [Möbelplaner](/moebelplaner/) skizzieren Sie Maße, Fronten und Aufteilung vorab und bekommen ein erstes Gefühl für Ihren Badschrank. Ein Aufmaß ersetzt er nicht, einen Sofortpreis nennt er auch nicht. Aufmaß, 3D-Planung, Fertigung und Montage übernehmen wir.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/badmoebel-nach-mass-led-spiegel-dusche.jpg`,
  imageAlt: "Badschrank nach Maß neben beleuchtetem Spiegel und bodengleicher Dusche",
};

export const bsTestimonialsHeading = "Was unsere Kunden über ihre Badmöbel sagen";

export const bsFaq = {
  heading: "Häufige Fragen zum Badschrank nach Maß",
  items: [
    {
      question: "Was kostet ein Badschrank nach Maß?",
      answer:
        "Einen festen Preis nennen wir nicht, weil jeder Badschrank anders ist. Den Ausschlag geben Größe und Typ, Material und Front, Beschläge und Auszüge sowie Einbausituation und Montage. Nach dem kostenlosen Aufmaß erhalten Sie ein individuelles Angebot.",
    },
    {
      question: "Hochschrank, Hängeschrank oder Einbauschrank, welcher Badschrank passt zu meinem Bad?",
      answer:
        "Der Hochschrank fasst viel auf kleiner Fläche, der Hängeschrank hält den Boden frei, der raumhohe Einbauschrank nutzt die ganze Wand bis unter die Decke. Was passt, entscheiden freie Wand, Bodenplatz und Ihr Stauraumbedarf. Alle drei fertigen wir nach Maß.",
    },
    {
      question: "Welche Höhe und Tiefe sollte ein Badschrank haben?",
      answer:
        "Als Orientierung sind Hängeschränke oft rund 60 bis 90 cm hoch, Hochschränke bis gut 180 cm, Einbauschränke raumhoch. Die Tiefe liegt häufig bei 20 bis 35 cm. Feste Vorgaben machen wir nicht, wir bauen millimetergenau nach Aufmaß.",
    },
    {
      question: "Passt ein Badschrank nach Maß in eine Nische, unter eine Dachschräge oder über die Toilette?",
      answer:
        "Ja, dafür ist Maßarbeit gemacht. Wir bauen Wand zu Wand ohne Passleisten, passen den Schrank an die Dachschräge an und nutzen auch die Fläche über der Toilette. Aus der toten Ecke wird nutzbarer Stauraum.",
    },
    {
      question: "Welches Material eignet sich für einen Badschrank im feuchten Bad?",
      answer:
        "Wir fertigen aus Massivholz und hochwertigen, branchenüblichen Materialien, mit pflegeleichter Oberfläche. Entscheidend im Bad ist die Kante: Die verschließen wir fugenlos mit PU-Kantenverleimung. Welche Fronten und Oberflächen möglich sind, besprechen wir im Einzelfall.",
    },
    {
      question: "Quellen die Kanten eines Badschranks bei Feuchtigkeit auf, und wie verhindert Fast das?",
      answer:
        "Bei billigen Schränken zieht Wasser in die offene Klebefuge der Kante, und sie quillt auf. Wir verschließen die Kanten mit PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig, so bleibt keine Angriffsfläche. Wasserfest ist das nicht, aber für den feuchten Badalltag gut gerüstet.",
    },
    {
      question: "Kann ich Einlegeböden, Auszüge, Wäschekippe und Griffe frei wählen?",
      answer:
        "Ja. Verstellbare Einlegeböden, Soft-Close-Auszüge, auf Wunsch eine Wäschekippe sowie Griffe oder grifflose Fronten mit Push-to-open planen wir nach Ihrem Bedarf. Konkrete Beschläge und Ausstattung legen wir gemeinsam fest.",
    },
    {
      question: "Wie wird ein Hängeschrank im Bad sicher an der Wand befestigt?",
      answer:
        "Beim Aufmaß prüfen wir die Wand und planen die Befestigung passend zum Gewicht von Schrank und Inhalt. Unser Montageteam hängt den Schrank vor Ort auf und richtet ihn aus, statt ihn Ihnen zur Selbstmontage zu überlassen.",
    },
    {
      question: "Montiert Fast den Badschrank selbst oder wird er nur geliefert?",
      answer:
        "In unserem Montagegebiet, rund 200 km um Espelkamp und durch ganz OWL, etwa nach Minden, Lübbecke, Osnabrück und Bielefeld, baut unser eigenes Montageteam den Badschrank vor Ort ein. Fertige, freistehende Möbel liefern wir auch bundesweit.",
    },
    {
      question: "Wie pflege ich die Oberflächen meines Badschranks im Bad?",
      answer:
        "Für die meisten Oberflächen reicht ein nebelfeuchtes Tuch, scharfe Scheuermittel sollten Sie meiden. Spritzwasser wischen Sie am besten zeitnah ab. Mit etwas Wandabstand bleibt die Rückseite belüftet, das tut einem Badezimmerschrank nach Maß im feuchten Raum gut.",
    },
  ],
};

const bsTypes = bsTypen.segments.map((s) => s.title);

/**
 * JSON-LD for the Badschrank product child. Same scope/convention as the pillar
 * and sibling product pages (Service, not Product-with-price): Service,
 * BreadcrumbList (4 levels), FAQPage (1:1 to visible FAQ), ItemList. No
 * offers/aggregateRating (Preise immer individuell, siehe FACTS.md).
 */
export const bsJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Badschrank nach Maß",
    serviceType: "Maßgefertigte Badschränke",
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
      name: "Badschränke nach Maß",
      itemListElement: bsTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Badschrank: ${name}` },
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
      { "@type": "ListItem", position: 4, name: "Badschrank nach Maß", item: `${SITE}${PATH}` },
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
    name: "Badschrank nach Maß: Bauformen",
    itemListElement: bsTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
