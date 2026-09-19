/**
 * Content for the `/einbauschraenke-nach-mass/kleiderschrank-nach-mass/` page:
 * the "Kleiderschrank nach Maß" cluster child (product) under the Einbauschränke
 * pillar (`/einbauschraenke-nach-mass/`). Built from the Privat library sections
 * plus shared sections (SegmentCards, SpecTable, UspHighlight, ProcessSteps) so
 * each section carries one topic (ARCHITECTURE.md §1.1). Copy is
 * kleiderschrank-specific (klassischer Schlafzimmer-Kleiderschrank als
 * Frontlösung/Einbau, Innenaufteilung, Dreh- vs. Schiebetür, raumhoch Wand zu
 * Wand) to avoid cannibalising the pillar and the sibling product pages
 * (Dachschräge = Schräge, begehbar = Ankleidezimmer, Garderobe = Flur).
 * Cluster-Map: docs/seo/research/clusters/einbauschraenke.md.
 *
 * Copy follows the Fast Systemmöbel brand voice (Sie-Anrede, handwerklich,
 * konkret, belegt, keine em-dashes). See docs/seo/brand/BRAND_VOICE.md und
 * docs/seo/brand/FACTS.md. Firmen-/Zahlenfakten (Telefon, Adresse, Geo,
 * 2. Generation, 4.000+ Projekte, 1.000 m² Fertigung, 200 km Montage-Radius,
 * Homag, PU-Kanten) stammen aus dem Pillar-Modul/FACTS.md.
 *
 * Copy: Authoring-Engine (Writer/Humanizer/QC/Chefredakteur) aus dem Research-Kit
 * (docs/seo/research/kleiderschrank-nach-mass.kit.md), Lauf 2026-09-03, 1623 W,
 * Chefredakteur pass. Bildpfade sind Platzhalter aus dem Einbauschrank-Pool, bis
 * eigene Kleiderschrank-Motive vorliegen (siehe REVIEW.md Bild-Vorschläge).
 * Maß-/Kostenwerte sind allgemeine Planungsorientierung (Kit §9b), keine
 * Fast-Vorgabe.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/einbauschraenke-nach-mass/kleiderschrank-nach-mass/";
const IMG = "/images/einbauschraenke";

export const klHero = {
  bgImage: `${IMG}/kleiderschrank-nach-mass-weiss-offen.jpg`,
  imageAlt:
    "Kleiderschrank nach Maß in Weiß, raumhoch bis zur Decke, mit offenem Garderobenbereich und geschlossenen Fronten",
  title: "Kleiderschrank nach Maß aus Espelkamp",
  intro:
    "Ein Kleiderschrank nach Maß ist ein Schrank, den wir millimetergenau auf Ihren Raum bauen: Wand zu Wand, bis unter die Decke, ohne Passleisten und toten Winkel. Planung, Bau und Montage kommen aus einer Hand, aus unserem Meisterbetrieb in Espelkamp. Die Innenaufteilung richtet sich nach Ihrer Garderobe, nach nichts sonst.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Einbauschränke nach Maß", href: "/einbauschraenke-nach-mass/" },
    { label: "Kleiderschrank nach Maß" },
  ],
};

export const klIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Schränke nach Maß.",
  heading: "Kleiderschrank Wand zu Wand, jeder Zentimeter genutzt",
  introBefore:
    "Ein Standardschrank lässt oben Luft und an den Seiten Ritzen. Unser Kleiderschrank nach Maß schließt Wand zu Wand ohne Passleisten und läuft bis unter die",
  introBold: "Decke",
  introAfter: ". Jeder Zentimeter wird zu Stauraum statt zu totem Winkel.",
  bandImage: `${IMG}/kleiderschrank-nach-mass-auszuege-spiegel.jpg`,
  bandAlt:
    "Kleiderschrank nach Maß mit offenen Regalfächern, ausgezogenen Schubladen und Standspiegel",
  col1Title: "Wand zu Wand ohne Passleisten",
  col1Body:
    "Die Innenaufteilung planen wir genau auf Ihren Grundriss und Ihre Garderobe. Kleiderstangen, Auszüge und Fächer sitzen, wo Sie sie brauchen, ohne Standardraster und ohne tote Ecke an Wand oder Decke.",
  col1CtaLabel: "Kleiderschrank anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Jedes Teil fertigen wir selbst in Espelkamp, von der PU-verleimten Kante bis zur Front. Ein Ansprechpartner bleibt von der Beratung bis zur Montage Ihr Kontakt. Ihr Kleiderschrank gehört zu unseren [Einbauschränken nach Maß](/einbauschraenke-nach-mass/).",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Aufmaß, Einbau und Montage übernehmen wir im Umkreis von rund 200 km um Espelkamp, in ganz OWL und Umgebung, etwa in Minden, Lübbecke, Osnabrück und Bielefeld. Fertige Möbel schicken wir auch bundesweit.",
  col3CtaLabel: "Kleiderschrank online planen",
  col3CtaHref: "/moebelplaner/",
};

export const klCtas = {
  intro: {
    image: `${IMG}/begehbare-ankleide-nach-mass-weiss.jpg`,
    heading: "Ihr Kleiderschrank beginnt an Ihrer Wand",
    linkText: "Sprechen Sie mit uns über Ihren Kleiderschrank",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/einbauschrank-nach-mass-wand-zu-wand-grifflos.jpg`,
    heading: "Holen Sie aus Ihrer Wand den Kleiderschrank, der wirklich passt",
    linkText: "Jetzt kostenloses Aufmaß für Ihren Kleiderschrank anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SegmentCards (shared): Bauformen/Türsysteme (Kit §3 Modul 2). Feeds JSON-LD OfferCatalog/ItemList.
 *  Dachschräge + begehbare Ankleide nur 1 Satz + Link (Anti-Dedup, Gate 11). */
export const klVarianten = {
  heading: "Kleiderschrank nach Maß in jeder Bauform",
  intro:
    "Welche Bauform passt, entscheidet Ihr Raum: die Wand davor, der Platz zum Öffnen und die Optik. Jede davon bauen wir nach Maß. Für die Schräge unter dem Dach gibt es einen eigenen [Schrank für die Dachschräge](/einbauschraenke-nach-mass/einbauschrank-dachschraege/), für einen ganzen Ankleideraum die begehbare Ankleide. Für den Flur bauen wir die passende [Garderobe nach Maß](/einbauschraenke-nach-mass/garderobe-nach-mass/).",
  segments: [
    {
      title: "Drehtürenschrank",
      body: "Der Klassiker mit Dreh- oder Falttüren. Sie öffnen die Front komplett und haben den ganzen Innenraum auf einen Blick, jede Kleiderstange und jedes Fach frei zugänglich. Passt überall dort, wo vor dem Schrank genug Platz zum Aufschwingen der Türen bleibt.",
    },
    {
      title: "Schiebe- und Schwebetürenschrank",
      body: "Für wenig Platz davor. Schiebe- und Schwebetüren brauchen keinen Türschwung, gleiten an der Front entlang und tragen große Flächen, auf Wunsch mit Spiegel oder Glas. Ideal in schmalen Schlafzimmern und vor Durchgängen.",
    },
    {
      title: "Nischen- und Wand-zu-Wand-Schrank",
      body: "Zwischen zwei Wänden, in die Ecke als Eckschrank oder in eine vorhandene Nische bauen wir millimetergenau, Wand zu Wand ohne Passleisten. So verschwindet die letzte Lücke, in die ein Schrank von der Stange nie sauber passt.",
    },
    {
      title: "Einbau oder freistehend",
      body: "Fest eingebaut bis unter die Decke, an Sockel und Wand angeschlossen, wirkt der Schrank wie Teil des Raums. Als freistehendes Möbel nach Maß nehmen Sie ihn beim Umzug mit. Beides bauen wir, je nachdem, ob Sie bleiben oder flexibel sein wollen.",
    },
  ],
};

/** SpecTable (shared): Maß-Orientierung. NUR allgemeines Planungswissen (Kit §9b-1), keine Fast-Range. */
export const klMasse = {
  heading: "Maße eines Kleiderschranks nach Maß: allgemeine Orientierung",
  intro:
    "Feste Standardmaße gibt es bei uns nicht, jeder Schrank entsteht nach Aufmaß. Die Werte hier unten sind Erfahrungswerte aus der Praxis, damit Sie Ihre Planung einordnen können. Verbindlich wird alles erst nach dem kostenlosen Aufmaß vor Ort. Dann millimetergenau, Wand zu Wand.",
  firstColLabel: "Maß",
  columns: ["Übliche Orientierung", "Bei Fast nach Maß"],
  highlightColumn: 1,
  rows: [
    {
      label: "Schranktiefe",
      values: [
        "Drehtürschrank rund 60 cm, Schiebetürschrank rund 65 bis 68 cm, damit die Kleiderbügel quer hängen.",
        "Millimetergenau nach Aufmaß, für schmale Räume auch flacher geplant.",
      ],
    },
    {
      label: "Kleiderstangenhöhe",
      values: [
        "Mäntel und lange Kleider brauchen etwa 150 bis 180 cm, Jacken und Blazer etwa 90 bis 110 cm.",
        "Lang- und Kurzhänger trennen wir und teilen die Höhe auf Ihre Garderobe auf.",
      ],
    },
    {
      label: "Fachhöhen und Auszüge",
      values: [
        "Fächer, Schubladen und Auszüge nach Nutzung gestaffelt, unten schwerer, oben leichter.",
        "Frei eingeteilt: Hemdenfächer, Hosenauszug und Schubkästen dort, wo Sie sie brauchen.",
      ],
    },
    {
      label: "Höhe und Anschluss",
      values: [
        "Oft raumhoch, mit Aufsatz bis knapp unter die Decke und Sockel am Boden.",
        "Raumhoch bis unter Ihre Decke, sauber an Sockel, Wand und Schräge angeschlossen.",
      ],
    },
  ],
};

/** UspHighlight (shared): Material/Verarbeitung/PU-Kante + Warum Fast (Kit §3 Modul 5/6). */
export const klMaterial = {
  eyebrow: "Material und Verarbeitung",
  heading: "Vom Meisterbetrieb, nicht aus der Online-Fabrik",
  body:
    "Korpus und Fronten bauen wir aus Massivholz oder aus furnierten und beschichteten Platten, den Korpus meist 19 mm stark. Die Kanten verschließen wir mit PU-Kantenverleimung: fugenlos und feuchtigkeitsbeständig, ohne dunkle Klebefuge. Bei den Fronten haben Sie die Wahl zwischen Dekor, Echtholzfurnier und Lack in matt oder hochglanz. Jedes Teil fertigen wir selbst in Espelkamp auf Homag-Technik, nicht in einer anonymen Online-Fabrik.",
  image: `${IMG}/einbauschrank-nach-mass-anthrazit-fenster.jpg`,
  imageAlt:
    "Einbauschrank nach Maß in Anthrazit mit beleuchtetem offenem Regalfach neben einem bodentiefen Fenster",
};

/** SegmentCards (shared): Innenausstattung (Kit §3 Modul 5, MI4). Aufzählbares als Grid statt Fließtext. */
export const klAusstattung = {
  heading: "Innenausstattung für jeden Zentimeter",
  intro:
    "Das Innenleben planen wir Fach für Fach auf Ihre Garderobe. Genau das entscheidet, wie viel wirklich hineinpasst und wie leicht Sie morgens finden, was Sie suchen.",
  segments: [
    {
      title: "Kleiderstangen und Kleiderlift",
      body: "Kleiderstangen für Lang- und Kurzhänger, übereinander gesetzt für doppelte Hängefläche. Wo es hoch hinausgeht, holt ein Kleiderlift die obere Stange bequem nach unten.",
    },
    {
      title: "Hosenauszug und Schubladen",
      body: "Hosenauszüge für faltenfreie Hosen, Schubkästen mit Soft-Close, die sanft und leise schließen, dazu schmale Auszüge für Gürtel und Krawatten.",
    },
    {
      title: "Fächer und Einlegeböden",
      body: "Hemden- und Pulloverfächer, Einlegeböden im Lochraster, die Sie später umstecken können, und Hutböden ganz oben. So bleibt die Aufteilung anpassbar.",
    },
    {
      title: "LED und Details",
      body: "LED-Beleuchtung an Stangen und Böden, Spiegeltüren, grifflose Fronten oder Push-to-open. Kleine Details, die den Schrank jeden Tag angenehmer machen.",
    },
  ],
};

/** ProcessSteps (shared): Mini-Prozess (Vollprozess liegt beim Pillar). */
export const klProcess = {
  eyebrow: "Ablauf",
  heading: "So entsteht Ihr Kleiderschrank",
  image: `${IMG}/einbauschrank-montage-espelkamp.jpg`,
  imageAlt:
    "Zwei Monteure von Fast Systemmöbel montieren ein maßgefertigtes Möbel und richten es mit der Wasserwaage aus",
  steps: [
    {
      title: "Beratung und kostenloses Aufmaß",
      description:
        "Wir sprechen über Garderobe und Raum, am Telefon oder bei Ihnen zu Hause. Dann nehmen wir kostenlos vor Ort Maß, auch an schiefen Wänden.",
    },
    {
      title: "Technische 3D-Planung",
      description:
        "Aus dem Aufmaß wird eine technische 3D-Planung. Sie sehen Fronten, Einteilung und Auszüge, bevor der erste Span fällt, und ändern mit, bis alles sitzt.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Nach Ihrer Freigabe fertigen wir jedes Teil selbst in unserer Werkstatt in Espelkamp, auf Homag-Technik und mit PU-verleimten Kanten.",
    },
    {
      title: "Montage durch unser eigenes Team",
      description:
        "Unser eigenes Montageteam baut den Schrank zum verbindlichen Termin ein und richtet ihn Wand zu Wand aus. Kein fremder Subunternehmer, keine Selbstmontage.",
    },
  ],
};

/** SpecTable (shared): Kostentreiber. KEINE Preise/€-Zahlen (Kit §8). */
export const klKosten = {
  heading: "Was den Preis Ihres Kleiderschranks bestimmt",
  intro:
    "Einen Pauschalpreis nennen wir bewusst nicht, weil jeder Schrank anders ausfällt. Ihr Angebot rechnen wir individuell nach dem kostenlosen Aufmaß. Diese fünf Faktoren geben dabei den Ausschlag.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Breite und Laufmeter",
      values: ["Mehr Breite, Höhe und Laufmeter bedeuten mehr Korpus, mehr Front und mehr Fertigungszeit."],
    },
    {
      label: "Türsystem",
      values: ["Drehtür, Schiebe- oder Schwebetür unterscheiden sich in Beschlag, Laufsystem und Aufwand."],
    },
    {
      label: "Front und Material",
      values: ["Dekor ist günstiger als Echtholzfurnier oder Lack in matt und hochglanz."],
    },
    {
      label: "Innenausstattung",
      values: ["Kleiderlift, Hosenauszüge, Schubkästen mit Soft-Close und LED erhöhen den Aufwand."],
    },
    {
      label: "Einbausituation",
      values: ["Nische, Schräge oder eine schiefe Altbauwand verlangen mehr Anpassung als eine gerade Wand."],
    },
  ],
};

export const klMoebelplaner = {
  heading: "Ihren Kleiderschrank online vorplanen, den Rest übernehmen wir",
  body:
    "Im [Möbelplaner](/moebelplaner/) skizzieren Sie Maße, Fronten und Einteilung vorab und bekommen ein Gefühl für Ihren Schrank. Er ersetzt kein Aufmaß und nennt keinen Sofortpreis. Aufmaß, die technische 3D-Planung, Fertigung und Montage übernehmen wir.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/kleiderschrank-nach-mass-weiss-offen.jpg`,
  imageAlt: "Kleiderschrank nach Maß in Weiß, raumhoch bis zur Decke geplant",
};

export const klTestimonialsHeading = "Was unsere Kunden über ihre Kleiderschränke sagen";

export const klFaq = {
  heading: "Häufige Fragen zum Kleiderschrank nach Maß",
  items: [
    {
      question: "Wie tief sollte ein Kleiderschrank nach Maß sein?",
      answer:
        "Als Orientierung: ein Drehtürschrank etwa 60 cm tief, ein Schiebetürschrank rund 65 bis 68 cm, damit die Kleiderbügel quer hängen. Feste Vorgaben machen wir nicht. Wir bauen millimetergenau nach Aufmaß und planen für schmale Räume auch flacher.",
    },
    {
      question: "Wie hoch hängt man die Kleiderstange für Mäntel, Jacken und Blazer?",
      answer:
        "Lange Sachen wie Mäntel und Kleider brauchen etwa 150 bis 180 cm Höhe, Jacken und Blazer etwa 90 bis 110 cm. Kurzhänger lassen sich doppelt übereinander setzen. Die genaue Aufteilung richten wir nach Ihrer Garderobe.",
    },
    {
      question: "Wie viel Kleidung passt auf einen Meter Kleiderstange?",
      answer:
        "Grob gerechnet passen auf einen Meter Stange etwa 30 Hemden, 25 Hosen oder 15 bis 20 Jacken, je nach Bügel und Stoff. Das sind allgemeine Richtwerte, keine feste Zusage. Wie viel Stauraum Ihr Schrank braucht, klären wir beim Aufmaß.",
    },
    {
      question: "Drehtür oder Schiebetür, was passt bei welchem Raum?",
      answer:
        "Das hängt vor allem am Platz vor dem Schrank. Drehtüren brauchen Raum zum Aufschwingen, geben dafür freien Blick auf den ganzen Innenraum. Schiebe- und Schwebetüren sparen genau diesen Platz und passen gut in schmale Zimmer und vor Durchgänge.",
    },
    {
      question: "Was kostet ein Kleiderschrank nach Maß und wovon hängt der Preis ab?",
      answer:
        "Einen festen Preis nennen wir nicht, weil jeder Schrank anders ist. Den Ausschlag geben Breite und Laufmeter, das Türsystem, Front und Material, die Innenausstattung und die Einbausituation. Nach dem kostenlosen Aufmaß bekommen Sie ein individuelles Angebot.",
    },
    {
      question: "Welche Innenausstattung gibt es?",
      answer:
        "Kleiderstangen für Lang- und Kurzhänger, Kleiderlift, Hosenauszüge, Schubkästen mit Soft-Close, verstellbare Einlegeböden, Hemden- und Hutfächer sowie LED-Beleuchtung. Auf Wunsch Spiegeltüren und grifflose Fronten. Wir teilen den Innenraum genau auf Ihre Garderobe auf.",
    },
    {
      question: "Muss ich selbst Maß nehmen oder kommt jemand vorbei?",
      answer:
        "Sie müssen nicht selbst messen. Wir kommen zum kostenlosen Aufmaß vor Ort, im Montagegebiet rund um Espelkamp, und nehmen auch schiefe Wände, Nischen und Schrägen genau auf. Auf dieser Grundlage entsteht Ihre Planung.",
    },
    {
      question: "Was ist der Unterschied zu einer begehbaren Ankleide?",
      answer:
        "Ein Einbau-Kleiderschrank nach Maß ist eine Frontlösung im Zimmer, an oder in eine Wand gebaut. Eine begehbare Ankleide macht einen ganzen Raum zum Schrank, in den Sie hineingehen. Wir bauen beides, je nach Platz und Wunsch.",
    },
    {
      question: "Welche Materialien und Fronten stehen zur Auswahl?",
      answer:
        "Korpus und Fronten aus Massivholz oder aus furnierten und beschichteten Platten, die Kanten fugenlos PU-verleimt. Fronten wählen Sie als Dekor, Echtholzfurnier oder Lack in matt und hochglanz. Muster zeigen wir Ihnen in Ruhe in der Beratung.",
    },
    {
      question: "Lohnt sich ein Kleiderschrank nach Maß gegenüber einem Schrank von der Stange?",
      answer:
        "Ein Schrank von der Stange hört bei festen Rastermaßen auf und lässt oben und an den Seiten Luft. Ein Kleiderschrank nach Maß läuft Wand zu Wand bis unter die Decke, ohne Passleisten, und die Innenaufteilung passt zu Ihrer Garderobe statt zum Katalog.",
    },
    {
      question: "Wohin liefert und montiert ihr?",
      answer:
        "Unser Montagegebiet reicht rund 200 km um Espelkamp, durch ganz OWL, etwa nach Minden, Lübbecke, Osnabrück und Bielefeld. In diesem Radius kommen wir zum Aufmaß und bauen Ihren Kleiderschrank vor Ort ein. Fertige, freistehende Möbel liefern wir darüber hinaus bundesweit.",
    },
  ],
};

const klTypes = klVarianten.segments.map((s) => s.title);

/**
 * JSON-LD for the Kleiderschrank product child. Same scope/convention as the
 * pillar and the Dachschräge/Regal siblings (Service, not Product-with-price):
 * Service (provider=Organization, serviceType, areaServed, hasOfferCatalog),
 * BreadcrumbList (4 levels), FAQPage (1:1 to visible FAQ), ItemList. No
 * offers/aggregateRating (Preise sind immer individuell, siehe FACTS.md).
 */
export const klJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kleiderschrank nach Maß",
    serviceType: "Maßgefertigte Kleiderschränke",
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
      name: "Kleiderschränke nach Maß",
      itemListElement: klTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Kleiderschrank: ${name}` },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Einbauschränke nach Maß", item: `${SITE}/einbauschraenke-nach-mass/` },
      { "@type": "ListItem", position: 4, name: "Kleiderschrank nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: klFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kleiderschrank nach Maß: Bauformen",
    itemListElement: klTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
