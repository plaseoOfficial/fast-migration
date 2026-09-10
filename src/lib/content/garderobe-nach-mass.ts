/**
 * Content for the `/einbauschraenke-nach-mass/garderobe-nach-mass/` page: the
 * "Garderobe nach Maß" cluster child (product) under the Einbauschränke pillar
 * (`/einbauschraenke-nach-mass/`). Built from the Privat library sections plus
 * shared sections (SegmentCards, SpecTable, UspHighlight, ProcessSteps) so each
 * section carries one topic (ARCHITECTURE.md §1.1). Copy is garderobe-specific
 * (Flur/Eingangsbereich: Schrank + offenes Paneel + Sitzbank + Spiegel aus einer
 * Hand, schmaler Flur, Nische, Dachschräge, unter der Treppe) to avoid
 * cannibalising the pillar and the sibling product pages (Kleiderschrank =
 * Schlafzimmer, Dachschräge = Schräge, unter der Treppe = Treppe).
 * Cluster-Map: docs/seo/research/clusters/einbauschraenke.md.
 *
 * Copy follows the Fast Systemmöbel brand voice (Sie-Anrede, handwerklich,
 * konkret, belegt, keine em-dashes). See docs/seo/brand/BRAND_VOICE.md und
 * docs/seo/brand/FACTS.md. Firmen-/Zahlenfakten (Telefon, Adresse, Geo,
 * 2. Generation, 4.000+ Projekte, 1.000 m² Fertigung, 200 km Montage-Radius,
 * Homag, PU-Kanten) stammen aus dem Pillar-Modul/FACTS.md.
 *
 * Copy: Authoring-Engine (Writer/Humanizer/QC/Chefredakteur) aus dem Research-Kit
 * (docs/seo/research/garderobe-nach-mass.kit.md), Lauf 2026-09-03, 1506 W,
 * Chefredakteur pass. Bildpfade sind reale Garderobe-Motive aus dem Wohnmöbel-/
 * Einbauschrank-Pool (siehe REVIEW.md Bild-Vorschläge). Maß-/Kostenwerte sind
 * allgemeine Planungsorientierung (Kit §9b), keine Fast-Vorgabe.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/einbauschraenke-nach-mass/garderobe-nach-mass/";
const IMG = "/images/wohnmoebel";

export const garHero = {
  bgImage: `${IMG}/garderobe-nach-mass-flur-anthrazit.jpg`,
  imageAlt:
    "Garderobe nach Maß im Flur mit anthrazitfarbener Wandnische, großem Standspiegel, offenen Wandborden und weißer Schubladenkommode",
  title: "Garderobe nach Maß aus Espelkamp",
  intro:
    "Eine Garderobe nach Maß ist Ihr Flurmöbel aus einer Hand: Garderobenschrank, offenes Paneel, Sitzbank und Spiegel, auf den Millimeter in Ihren Eingangsbereich eingepasst. Bei Fast Systemmöbel planen, fertigen und montieren wir sie in der eigenen Tischlerei in Espelkamp. Passend zu jeder Flurwand, auch wenn der Flur schmal ist.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Einbauschränke nach Maß", href: "/einbauschraenke-nach-mass/" },
    { label: "Garderobe nach Maß" },
  ],
};

export const garIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Schränke nach Maß.",
  heading: "Garderobe für den Flur, jeder Zentimeter genutzt",
  introBefore:
    "Schrank, Sitzbank und Spiegel fügen wir zu einem abgestimmten Möbel und passen es millimetergenau in Ihren Flur ein, von Wand zu Wand und bis unter die",
  introBold: "Decke",
  introAfter: ".",
  bandImage: `${IMG}/garderobe-nach-mass-flur-schrank-kommode.jpg`,
  bandAlt:
    "Garderobe nach Maß im Flur mit hohem Garderobenschrank, Sitzbank und zwei Schuhkommoden in Weiß und Anthrazit",
  col1Title: "Schrank, Bank und Spiegel aus einem Guss",
  col1Body:
    "Garderobenschrank, Schuhstauraum und Sitzbank stecken in einem durchgeplanten Möbel, nicht in zusammengewürfelten Einzelteilen. So bleibt der Flur aufgeräumt. Und selbst im schmalen Flur geht kein Zentimeter Stauraum verloren.",
  col1CtaLabel: "Garderobe anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Gefertigt wird in Espelkamp, mit PU-verleimten Kanten, die dem täglichen Flur-Alltag standhalten. Von der Beratung bis zur Montage haben Sie einen Ansprechpartner, nicht fünf. Mehr zum Prinzip lesen Sie bei unseren [maßgefertigten Einbauschränken](/einbauschraenke-nach-mass/).",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Aufmaß und Montage übernehmen wir im Umkreis von rund 200 km um Espelkamp, in ganz OWL und darüber hinaus, etwa in Minden, Lübbecke, Osnabrück und Bielefeld. Geliefert wird bundesweit.",
  col3CtaLabel: "Garderobe online planen",
  col3CtaHref: "/moebelplaner/",
};

export const garCtas = {
  intro: {
    image: `${IMG}/garderobe-nach-mass-sitzbank-eiche.jpg`,
    heading: "Ihre Garderobe beginnt an Ihrer Flurwand",
    linkText: "Sprechen Sie mit uns über Ihre Garderobe",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/garderobe-nach-mass-nische-spiegel.jpg`,
    heading: "Holen Sie aus Ihrem Flur die Garderobe, die wirklich passt",
    linkText: "Jetzt kostenloses Aufmaß für Ihre Garderobe anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SegmentCards (shared): Elemente einer Garderobe nach Maß (Kit §3 Modul 2). Feeds JSON-LD OfferCatalog/ItemList. */
export const garElemente = {
  heading: "Was zu einer Garderobe nach Maß gehört",
  intro:
    "Eine Garderobe nach Maß besteht aus wenigen Elementen, die wir frei kombinieren: geschlossener Schrank, offenes Paneel, Sitzbank und Spiegel. Was Ihr Flur davon braucht, bestimmen Sie, wir fügen es zu einem Möbel.",
  segments: [
    {
      title: "Garderobenschrank",
      body: "Geschlossener Stauraum für Jacken, Mäntel und Alltagskram. Innen Kleiderstange, Schubladen und Fächer nach Ihrer Aufteilung. Von außen sieht man der Front nicht an, wie viel Ordnung dahinter steckt.",
    },
    {
      title: "Offenes Paneel und Board",
      body: "Für die Jacke, die täglich dran muss: Kleiderhaken und eine schmale Ablage am offenen Paneel. Das braucht kaum Tiefe und hält trotzdem alles griffbereit, gerade im schmalen Flur.",
    },
    {
      title: "Sitzbank mit Schuhstauraum",
      body: "Eine Sitzfläche zum bequemen Anziehen, darunter Platz für Schuhe als Auszug oder Schrägboden. Die Sitzbank ist damit zugleich Ihr Schuhregal und kostet keine zusätzliche Stellfläche im Flur.",
    },
    {
      title: "Spiegel und Hutablage",
      body: "Ein Garderobenspiegel, bündig in die Front eingelassen, oben eine Hutablage für Mützen und Hüte. Der letzte Blick vor der Tür, und ganz nebenbei mehr Ordnung im Eingangsbereich.",
    },
  ],
};

/** SpecTable (shared): Maß-Orientierung. NUR allgemeines Planungswissen (Kit §9b-1), keine Fast-Range. */
export const garMasse = {
  heading: "Maße einer Garderobe nach Maß: allgemeine Orientierung",
  intro:
    "Feste Fast-Maße gibt es nicht. Jede Garderobe entsteht nach dem Aufmaß bei Ihnen, auf den Millimeter. Die Werte unten sind reine Planungsorientierung, inklusive der Bewegungsfläche nach DIN 18040-2. Gebaut wird am Ende Wand zu Wand, ohne sichtbare Passleisten.",
  firstColLabel: "Maß",
  columns: ["Übliche Orientierung", "Bei Fast nach Maß"],
  highlightColumn: 1,
  rows: [
    {
      label: "Tiefe im Flur",
      values: [
        "Für den Bügel quer volle Tiefe, rund 55 bis 60 cm. Schmal mit Längsstange und Haken rund 30 bis 35 cm.",
        "Millimetergenau nach Aufmaß, auf Wunsch flach für den engen Flur.",
      ],
    },
    {
      label: "Offene Paneele",
      values: [
        "Für Haken und Ablage genügen rund 15 bis 25 cm Tiefe.",
        "Auf Ihre Wand geplant, offen und geschlossen kombiniert.",
      ],
    },
    {
      label: "Höhe",
      values: [
        "Standardhöhe oder raumhoch bis unter die Decke.",
        "Raumhoch bis unter Ihre Decke, ohne Passleisten abgeschlossen.",
      ],
    },
    {
      label: "Bewegungsfläche davor",
      values: [
        "Orientierung DIN 18040-2, genug Platz zum Türöffnen und Anziehen.",
        "Sitzbank und Türschwenk beim Aufmaß mit eingeplant.",
      ],
    },
  ],
};

/** SegmentCards (shared): Raumsituationen im Flur (Kit §3 Modul 3, der Differenzierer). Schwester-Spokes nur Anriss + Link (Anti-Dedup). */
export const garRaeume = {
  heading: "Die Garderobe für Ihre Flursituation",
  intro:
    "Kein Flur gleicht dem anderen. Ob schmaler Durchgang, Nische neben der Tür, Dachschräge oder der Winkel unter der Treppe: Für jede Situation planen wir die passende Garderobe, statt ein Standardmaß hineinzuzwängen.",
  segments: [
    {
      title: "Schmaler und kleiner Flur",
      body: "Im schmalen Flur zählt jeder Zentimeter. Wir setzen auf eine geschlossene, flache Front statt offener Haken, ziehen den Schrank raumhoch bis zur Decke und wählen Schiebetüren, damit vor der Garderobe kein Türschwenk Platz kostet.",
    },
    {
      title: "Nische im Eingang",
      body: "Eine Nische oder einen Mauervorsprung im Eingang füllen wir wandbündig aus, ohne Fugen an den Seiten. Aus der toten Ecke wird nutzbarer Stauraum für Jacken und Schuhe.",
    },
    {
      title: "Dachschräge im Flur",
      body: "Läuft der Flur unter eine Schräge, folgen Fronten und Klappen exakt dem Winkel und nutzen den Raum bis in die Spitze. Tiefer gehen wir beim [Dachschrägenschrank nach Maß](/einbauschraenke-nach-mass/einbauschrank-dachschraege/).",
    },
    {
      title: "Unter der Treppe",
      body: "Die Fläche unter der Treppe ergibt eine kompakte Garderobe mit Bank und Fächern. Größere Schrank-Auszüge zeigen wir separat beim [Stauraum unter der Treppe](/einbauschraenke-nach-mass/schrank-unter-treppe/).",
    },
  ],
};

/** UspHighlight (shared): Material/Verarbeitung/PU-Kante, Flur-relevant (Kit §3 Modul 6, §9b-2). */
export const garMaterial = {
  eyebrow: "Material und Verarbeitung",
  heading: "Gebaut für den täglichen Flur-Alltag",
  body:
    "Der Flur ist der am härtesten beanspruchte Raum: nasse Schuhe, schwere Taschen, der Kinderwagen an der Front. Darum arbeiten wir mit Massivholz oder robusten Dekoren und verschließen jede Kante mit PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig. Farben und Oberflächen wählen Sie in der Beratung. Alles entsteht in unserem Meisterbetrieb in Espelkamp. Fürs Schlafzimmer planen wir den passenden [Kleiderschrank nach Maß](/einbauschraenke-nach-mass/kleiderschrank-nach-mass/) gleich mit.",
  image: "/images/einbauschraenke/garderobe-flur-nach-mass-anthrazit.jpg",
  imageAlt:
    "Garderobenschrank nach Maß in Anthrazit mit offener Kleidernische im Flur",
};

/** ProcessSteps (shared): Mini-Prozess (Vollprozess liegt beim Pillar). */
export const garProcess = {
  eyebrow: "Ablauf",
  heading: "So entsteht Ihre Garderobe",
  image: "/images/einbauschraenke/einbauschrank-montage-espelkamp.jpg",
  imageAlt:
    "Zwei Monteure von Fast Systemmöbel montieren ein maßgefertigtes Möbel und richten es mit der Wasserwaage aus",
  steps: [
    {
      title: "Beratung und kostenloses Aufmaß",
      description:
        "Wir sprechen über Ihren Flur, die tägliche Nutzung und Ihre Wünsche. Danach nehmen wir kostenlos vor Ort Aufmaß, im Montagegebiet rund um Espelkamp.",
    },
    {
      title: "Technische 3D-Planung",
      description:
        "Schrank, Sitzbank, Spiegel und die komplette Innenaufteilung entstehen zuerst in der 3D-Planung. So sehen Sie Ihre Garderobe, bevor der erste Span fällt.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "In unserer eigenen Tischlerei in Espelkamp fertigen wir jedes Teil selbst, vom Korpus bis zur Front. Nichts kommt als anonyme Zulieferware aus dem Regal.",
    },
    {
      title: "Montage durch unser eigenes Team",
      description:
        "Zum verbindlichen Termin baut unser eigenes Montageteam die Garderobe ein und richtet sie Wand zu Wand aus. Erst wenn alles sitzt, sind wir fertig.",
    },
  ],
};

/** SpecTable (shared): Kostentreiber. KEINE Preise/€-Zahlen (Kit §8). */
export const garKosten = {
  heading: "Was den Preis Ihrer Garderobe bestimmt",
  intro:
    "Einen Pauschalpreis nennen wir bewusst nicht, denn jede Garderobe ist ein Einzelstück. Den genauen Preis bekommen Sie als individuelles Angebot nach dem kostenlosen Aufmaß. Diese vier Faktoren geben dabei den Ausschlag.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Größe und Länge",
      values: ["Mehr Wandlänge und Höhe bedeuten mehr Korpus, mehr Fronten und mehr Fertigungszeit."],
    },
    {
      label: "Material und Dekor",
      values: ["Massivholz, furnierte oder beschichtete Fronten liegen im Aufwand deutlich auseinander."],
    },
    {
      label: "Ausstattung",
      values: ["Schuhauszug, Schubladen, integrierter Spiegel und LED-Beleuchtung erhöhen den Aufwand."],
    },
    {
      label: "Sondersituation",
      values: ["Nische, Dachschräge oder der Zuschnitt unter der Treppe verlangen zusätzliche Anpassung."],
    },
  ],
};

export const garMoebelplaner = {
  heading: "Ihre Garderobe online vorplanen, den Rest übernehmen wir",
  body:
    "Im [Möbelplaner](/moebelplaner/) skizzieren Sie Maße, Elemente und Materialideen für Ihre Garderobe schon vorab und bereiten so Ihre persönliche Planung vor. Ein fertiges Angebot spuckt das Tool nicht aus, das ist Absicht: Aufmaß, 3D-Planung, Fertigung und Montage übernehmen wir.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/garderobe-nach-mass-flur-anthrazit.jpg`,
  imageAlt: "Garderobe nach Maß im Flur in Anthrazit mit Spiegel, Wandborden und Kommode",
};

export const garTestimonialsHeading = "Was unsere Kunden über ihre Garderobe sagen";

export const garFaq = {
  heading: "Häufige Fragen zur Garderobe nach Maß",
  items: [
    {
      question: "Was gehört zu einer Garderobe nach Maß?",
      answer:
        "Ein geschlossener Garderobenschrank, ein offenes Paneel mit Kleiderhaken, eine Sitzbank mit Schuhstauraum sowie Spiegel und Hutablage. Diese Elemente kombinieren wir frei zu einem abgestimmten Möbel, ganz nach dem, was Ihr Flur braucht.",
    },
    {
      question: "Wie tief muss ein Garderobenschrank im Flur mindestens sein?",
      answer:
        "Für die Kleiderstange quer brauchen Sie volle Tiefe, rund 55 bis 60 cm. Mit Längsstange und Haken reichen etwa 30 bis 35 cm, offene Paneele kommen mit 15 bis 25 cm aus. Das sind Orientierungswerte, verbindlich wird es nach dem Aufmaß.",
    },
    {
      question: "Wie plane ich eine Garderobe für einen schmalen oder kleinen Flur?",
      answer:
        "Im schmalen Flur planen wir eine geschlossene, flache Front statt offener Haken, ziehen den Schrank raumhoch bis zur Decke und setzen Schiebetüren statt Drehtüren. Eine Sitzbank mit integriertem Schuhauszug spart zusätzlich Stellfläche.",
    },
    {
      question: "Kann die Garderobe in eine Nische, Dachschräge oder unter die Treppe eingebaut werden?",
      answer:
        "Ja. Wir bauen wandbündig und millimetergenau in die Nische, lassen die Fronten der Dachschräge folgen oder nutzen die Fläche unter der Treppe. Für Schräge und Treppe finden Sie eigene, ausführlichere Seiten im selben Bereich.",
    },
    {
      question: "Wie viel Bewegungsfläche sollte vor der Garderobe frei bleiben?",
      answer:
        "Als Orientierung dient die DIN 18040-2: genug Platz, um Türen zu öffnen und sich anzuziehen. Steht eine Sitzbank davor, kalkulieren wir deren Tiefe und den Türschwenk beim Aufmaß mit ein.",
    },
    {
      question: "Was kostet eine Garderobe nach Maß?",
      answer:
        "Einen Festpreis nennen wir nicht, weil jede Garderobe ein Einzelstück ist. Den Preis bestimmen Größe, Material und Dekor, Ausstattung und die Einbausituation. Nach dem kostenlosen Aufmaß bekommen Sie ein individuelles Angebot, ohne versteckte Zuschläge.",
    },
    {
      question: "Schiebetüren oder Drehtüren, was eignet sich für den Flur besser?",
      answer:
        "Im engen Flur sind Schiebetüren im Vorteil, weil vor dem Schrank kein Platz zum Aufschwenken frei bleiben muss. Ist genug Raum da und wollen Sie den kompletten Innenraum auf einen Griff sehen, sind Drehtüren die bessere Wahl.",
    },
    {
      question: "Welche Ausstattung sollte eine gut organisierte Garderobe haben?",
      answer:
        "Bewährt haben sich Kleiderstange, ein Schuhauszug oder Schrägboden, Schubladen für Kleinkram, Haken für den schnellen Zugriff und eine Hutablage oben. LED-Beleuchtung planen wir auf Wunsch mit ein.",
    },
    {
      question: "Welche Materialien und Dekore eignen sich für die Garderobe im Flur?",
      answer:
        "Massivholz oder robuste, pflegeleichte Dekore vertragen den Flur-Alltag am besten. Wichtiger als die Optik ist die Kante: Wir verleimen sie fugenlos und feuchtigkeitsbeständig mit PU, damit Schuhe, Taschen und Kinderwagen ihr nichts anhaben.",
    },
    {
      question: "Wie messe ich meinen Flur richtig aus, oder übernimmt das Fast?",
      answer:
        "Grobe Vorabmaße helfen fürs erste Gespräch, verbindlich brauchen Sie sie aber nicht. Im Montagegebiet rund um Espelkamp nehmen wir kostenlos vor Ort Aufmaß, millimetergenau und inklusive Schrägen, Steckdosen und Vorsprüngen.",
    },
    {
      question: "Liefert und montiert Fast bundesweit?",
      answer:
        "Geliefert wird bundesweit. Aufmaß und Montage durch unser eigenes Team bieten wir im Umkreis von rund 200 km um Espelkamp an, also in ganz OWL und zum Beispiel in Minden, Lübbecke, Osnabrück und Bielefeld.",
    },
  ],
};

const garTypes = garElemente.segments.map((s) => s.title);

/**
 * JSON-LD for the Garderobe product child. Same scope/convention as the pillar
 * and the Kleiderschrank/Regal siblings (Service, not Product-with-price):
 * Service (provider=Organization, serviceType, areaServed, hasOfferCatalog),
 * BreadcrumbList (4 levels), FAQPage (1:1 to visible FAQ), ItemList. No
 * offers/aggregateRating (Preise sind immer individuell, siehe FACTS.md).
 */
export const garJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Garderobe nach Maß",
    serviceType: "Maßgefertigte Garderoben",
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
      name: "Garderoben nach Maß",
      itemListElement: garTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Garderobe: ${name}` },
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
      { "@type": "ListItem", position: 4, name: "Garderobe nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: garFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Garderobe nach Maß: Elemente",
    itemListElement: garTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
