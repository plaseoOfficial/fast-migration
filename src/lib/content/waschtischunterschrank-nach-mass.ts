/**
 * Content for the `/badmoebel-nach-mass/waschtischunterschrank-nach-mass/` page:
 * the "Waschtischunterschrank nach Maß" cluster child (product) under the
 * Badmöbel pillar (`/badmoebel-nach-mass/`). Object focus = the CORPUS under the
 * basin: hängend vs. stehend, Auszüge um den Siphon, Soft-Close, grifflos,
 * Stauraum am Waschplatz. Platte/Becken live on waschtisch-nach-mass, the
 * material deep-dive on badmoebel-massivholz (Cluster-Map, Anti-Dedup).
 *
 * Built from the Privat library sections plus shared sections (SegmentCards ×2,
 * SpecTable ×2, UspHighlight, ProcessSteps) so each section carries one topic
 * (ARCHITECTURE.md §1.1): Montageart · Maß-Tabelle · PU-Kante/Material ·
 * Ausstattung/Auszüge · Kostenfaktoren.
 *
 * Copy follows the Fast brand voice (Sie, handwerklich, konkret, belegt, keine
 * em-dashes). Facts from docs/seo/brand/FACTS.md + clients/fast/kundenwissen.md.
 * Leerstellen (Kit §9b): keine Fast-Festmaße, keine Beschlagmarken, Becken/Platte
 * NICHT inklusive (Korpus wird um das kundeneigene Becken geplant), keine Dekor-
 * Palette als Zusage, keine Einzel-Referenzen. Maß-/Kosten-Tabellen = allgemeine
 * Orientierung, keine Fast-Vorgabe. Eiche/MDF nur als Kunden-Wahloption/branchen-
 * üblich genannt (Kit §4 WDF), nicht als Fast-Signatur.
 *
 * Copy: Authoring-Engine (Writer/Humanizer/QC/Chefredakteur) aus dem Research-Kit
 * (docs/seo/research/waschtischunterschrank-nach-mass.kit.md), Lauf 2026-10-01,
 * 1549 W, Chefredakteur pass. Bildpfade aus dem Badmöbel-Pool als Platzhalter
 * (siehe REVIEW.md Bild-Vorschläge).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/badmoebel-nach-mass/waschtischunterschrank-nach-mass/";
const IMG = "/images/badmoebel";

export const wuHero = {
  bgImage: `${IMG}/waschtisch-nach-mass-anthrazit-auszug.jpg`,
  imageAlt:
    "Anthrazitfarbener Waschtischunterschrank nach Maß mit ausgezogener Schublade unter dem Waschbecken",
  title: "Waschtischunterschrank nach Maß aus Espelkamp",
  intro:
    "Ein Waschtischunterschrank nach Maß ist der Korpus unter Ihrem Waschbecken, millimetergenau an Wand und Nische gebaut. Die Auszüge führen wir um den Siphon herum, so bleibt der Stauraum voll nutzbar. Wir planen, fertigen und montieren ihn selbst, aus einer Hand, in unserem Meisterbetrieb in Espelkamp.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Badmöbel nach Maß", href: "/badmoebel-nach-mass/" },
    { label: "Waschtischunterschrank nach Maß" },
  ],
};

export const wuIntroStats = {
  since: "seit 1996",
  sinceSub: "Fertigen wir Möbel nach Maß.",
  heading: "Jeder Zentimeter am Waschplatz zählt, auch rund um den Siphon",
  introBefore:
    "Serienmöbel verschenken Platz an Siphon und Wand. Einen Waschbeckenunterschrank nach Maß bauen wir dagegen",
  introBold: "genau um Ihre Anschlüsse",
  introAfter: ", mit ausgesparten Auszügen und Stauraum bis in die hinterste Ecke.",
  bandImage: `${IMG}/waschtisch-nach-mass-weiss-holzplatte.jpg`,
  bandAlt:
    "Waschtischunterschrank nach Maß in Weiß mit Holzplatte und flächenbündigen Fronten",
  col1Title: "Wandhängend oder stehend, wie Ihr Bad es braucht",
  col1Body:
    "Wandhängend bleibt der Boden frei und das Wischen leicht, stehend auf dem Sockel trägt der Schrank schwere Platten. Beides bauen wir nach Maß, mit Auszügen und Fächern genau dort, wo Sie Stauraum brauchen.",
  col1CtaLabel: "Unterschrank anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Jedes Bauteil fertigen wir selbst in Espelkamp, von der PU-verleimten Kante bis zur Front. Die passende [Waschtischplatte nach Maß](/badmoebel-nach-mass/waschtisch-nach-mass/) planen wir auf Wunsch gleich mit, Ihr Unterschrank gehört zu unseren [maßgefertigten Badmöbeln](/badmoebel-nach-mass/). Stauraum abseits des Waschplatzes schafft ein [Badschrank nach Maß](/badmoebel-nach-mass/badschrank-nach-mass/).",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Aufmaß, Einbau und Montage übernehmen wir im Umkreis von rund 200 km um Espelkamp, in ganz OWL und darüber hinaus, etwa in Minden, Lübbecke, Osnabrück und Bielefeld. Fertige Möbel liefern wir auch bundesweit.",
  col3CtaLabel: "Unterschrank online planen",
  col3CtaHref: "/moebelplaner/",
};

export const wuCtas = {
  intro: {
    image: `${IMG}/doppelwaschtisch-nach-mass-anthrazit.jpg`,
    heading: "Ihr Unterschrank beginnt an Ihrem Waschplatz",
    linkText: "Sprechen Sie mit uns über Ihren Waschtischunterschrank",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/badmoebel-nach-mass-sitzbank-holzplatte.jpg`,
    heading: "Holen Sie sich den Stauraum, der um Ihre Anschlüsse passt",
    linkText: "Jetzt kostenloses Aufmaß für Ihren Unterschrank anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SegmentCards (shared): Montageart hängend vs. stehend (Kit §3 Modul 2, MI1). */
export const wuMontage = {
  heading: "Wandhängend oder stehend, zwei Wege zum Unterschrank",
  intro:
    "Welche Montageart passt, hängt von Ihrem Bad ab, vom Boden, von der Wand, vom Gewicht der Platte. Beide Bauweisen fertigen wir nach Maß.",
  segments: [
    {
      title: "Wandhängend",
      body: "Der Schrank schwebt über dem Boden, das Bad wirkt luftig und der Wischmopp kommt überall hin. Gerade in kleinen Bädern hält das die Fläche frei. Wir verankern ihn sicher an einer tragfähigen Wand.",
    },
    {
      title: "Stehend auf Sockel",
      body: "Auf einem Sockel trägt der Unterschrank auch schwere Naturstein- oder Massivholzplatten, ganz ohne tragende Wand. Den Sockel gleichen wir an schiefe Böden an, damit die Front sauber in der Flucht steht.",
    },
    {
      title: "Um den Siphon geplant",
      body: "Ob hängend oder stehend, die Auszüge sparen wir um Siphon und Ablauf aus, mit U-förmigen Schüben oder dem Prinzip Schubkasten-in-Schubkasten. So geht kein Fach an das Rohr verloren.",
    },
    {
      title: "Für Nische und Dachschräge",
      body: "Zwischen zwei Wänden, in der Nische oder unter der Schräge bauen wir Wand zu Wand, ganz ohne Passleisten. Sondermaße sind bei uns Alltag und kein Aufpreis auf ein Rastermaß.",
    },
  ],
};

/** SpecTable (shared): Maß-Orientierung. NUR allgemeines Planungswissen (Kit §9b-1), keine Fast-Range. */
export const wuMasse = {
  heading: "Maße eines Waschtischunterschranks, zur Orientierung",
  intro:
    "Feste Standardmaße führen wir nicht, jeder Korpus entsteht nach Aufmaß. Die Werte hier sind übliche Spannen zur Einordnung. Verbindlich wird alles erst, wenn wir kostenlos bei Ihnen vor Ort gemessen haben.",
  firstColLabel: "Maß",
  columns: ["Übliche Spanne", "Bei Fast nach Maß"],
  highlightColumn: 1,
  rows: [
    {
      label: "Breite",
      values: [
        "Vom schmalen Gäste-WC bis zum breiten Doppelwaschtisch, je nach Waschplatz.",
        "Millimetergenau von Wand zu Wand, abgestimmt auf Ihr Becken.",
      ],
    },
    {
      label: "Höhe (Korpus)",
      values: [
        "Richtet sich nach der Komforthöhe des Beckens, die Korpushöhe liegt oft bei rund 40 bis 60 cm.",
        "Auf Ihre Körpergröße und das gewählte Becken abgestimmt.",
      ],
    },
    {
      label: "Tiefe",
      values: [
        "Meist rund 35 bis 50 cm, flach für schmale Bäder, tiefer für mehr Stauraum.",
        "Frei nach Aufmaß, für enge Bäder auch besonders flach.",
      ],
    },
    {
      label: "Auszüge und Siphon",
      values: [
        "Der Siphon kostet Serienmöbel oft eine ganze Schublade.",
        "Ausgesparte Auszüge rund um den Siphon, Stauraum bis in die Ecke.",
      ],
    },
  ],
};

/** UspHighlight (shared): Material/PU-Kante + Warum Fast (Kit §3 Modul 5/7). */
export const wuMaterial = {
  eyebrow: "Material und Feuchtraum",
  heading: "Eine fugenlose Kante für den feuchten Raum",
  body:
    "Am Waschplatz spritzt und dampft es jeden Tag. Darum verschließen wir die Kanten mit PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig, so bildet sich keine offene Fuge, in die Nässe kriecht. Wasserfest ist Holz damit nicht, für den Badalltag aber gut gerüstet. Korpus und Fronten fertigen wir aus Massivholz oder branchenüblichen hochwertigen Platten, selbst in unserer Werkstatt in Espelkamp. Mit etwas Wandabstand bleibt die Rückseite belüftet.",
  image: `${IMG}/waschtisch-nach-mass-holz-led-spiegel.jpg`,
  imageAlt:
    "Waschtischunterschrank nach Maß aus Holz mit beleuchtetem Spiegel über dem Becken",
};

/** SegmentCards (shared): Ausstattung/Auszüge (Kit §3 Modul 4, MI3). Aufzählbares als Grid. */
export const wuAusstattung = {
  heading: "Ein Innenleben, das zu Ihrem Alltag passt",
  intro:
    "Das Innere planen wir Fach für Fach. Genau das entscheidet, wie viel wirklich hineinpasst und wie schnell Sie finden, was Sie suchen.",
  segments: [
    {
      title: "Auszüge um den Siphon",
      body: "U-förmig ausgesparte Auszüge oder Schubkasten-in-Schubkasten führen den Stauraum sauber am Ablaufrohr vorbei. So verlieren Sie keine Schublade an den Siphon, anders als bei Möbeln von der Stange.",
    },
    {
      title: "Soft-Close und grifflos",
      body: "Die Auszüge laufen auf gedämpften Soft-Close-Beschlägen und schließen leise. Auf Wunsch grifflos mit Push-to-open für eine ruhige Front, oder mit einem Griff, der sich auch mit nassen Händen gut fassen lässt.",
    },
    {
      title: "Innenaufteilung",
      body: "Fächer und Einsätze für Handtücher, Kosmetik und Putzmittel, statt eines großen leeren Fachs. So bekommt der Föhn seinen festen Platz, und beim Öffnen kippt nichts durcheinander.",
    },
    {
      title: "Fronten und Oberfläche",
      body: "Front, Dekor und Oberfläche stimmen wir gemeinsam ab, passend zu Platte und Bad, von matt bis Hochglanz. Muster und Oberflächen zeigen wir Ihnen in der persönlichen Beratung, einen festen Dekorkatalog versprechen wir nicht.",
    },
  ],
};

/** ProcessSteps (shared): Mini-Prozess (Vollprozess liegt beim Pillar). */
export const wuProcess = {
  eyebrow: "Ablauf",
  heading: "So entsteht Ihr Waschtischunterschrank",
  image: `/images/einbauschraenke/einbauschrank-montage-espelkamp.jpg`,
  imageAlt:
    "Zwei Monteure von Fast Systemmöbel richten ein maßgefertigtes Möbel mit der Wasserwaage aus",
  steps: [
    {
      title: "Beratung und kostenloses Aufmaß",
      description:
        "Zuerst sprechen wir über Becken, Stauraum und Bad, am Telefon oder bei Ihnen zu Hause. Dann messen wir kostenlos vor Ort und erfassen die Anschlussposition.",
    },
    {
      title: "Technische 3D-Planung",
      description:
        "Aus dem Aufmaß wird eine technische 3D-Planung. Sie sehen Auszüge, Fronten und Aussparungen, bevor der erste Span fällt, und ändern mit, bis jedes Maß sitzt.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Nach Ihrer Freigabe fertigen unsere Tischler jedes Bauteil selbst in unserer Werkstatt in Espelkamp, mit ausgesparten Auszügen und PU-verleimten Kanten.",
    },
    {
      title: "Montage durch unser eigenes Team",
      description:
        "Zum verbindlichen Termin baut unser eigenes Montageteam den Unterschrank ein, hängt oder stellt ihn sicher auf und richtet ihn aus. Kein fremder Subunternehmer kommt ins Haus.",
    },
  ],
};

/** SpecTable (shared): Kostentreiber. KEINE Preise/€-Zahlen (Kit §8). Finanzierung privat belegt (FACTS). */
export const wuKosten = {
  heading: "Was den Preis Ihres Unterschranks bestimmt",
  intro:
    "Einen Pauschalpreis nennen wir bewusst nicht, weil jeder Unterschrank anders ausfällt. Ihr Angebot rechnen wir nach dem kostenlosen Aufmaß individuell, im Privatbereich ist auf Wunsch auch eine Finanzierung möglich. Diese Faktoren geben den Ausschlag.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Breite und Korpusgröße",
      values: ["Je breiter und höher, desto mehr Korpus und Frontfläche, und desto mehr Zeit in der Fertigung."],
    },
    {
      label: "Anzahl der Auszüge",
      values: ["Jeder zusätzliche Auszug, besonders ausgespart um den Siphon, erhöht den Aufwand."],
    },
    {
      label: "Front und Oberfläche",
      values: ["Dekor, Furnier oder Lack, matt oder Hochglanz, unterscheiden sich im Aufwand."],
    },
    {
      label: "Griffsystem",
      values: ["Griff, grifflos mit Push-to-open oder gedämpfte Beschläge schlagen unterschiedlich zu Buche."],
    },
    {
      label: "Montageart und Einbau",
      values: ["Wandmontage, Sockel, Nische oder schiefe Wand verlangen mehr Anpassung als eine gerade Wand."],
    },
  ],
};

export const wuMoebelplaner = {
  heading: "Ihren Unterschrank online vorplanen, den Rest machen wir",
  body:
    "Im [Möbelplaner](/moebelplaner/) skizzieren Sie Maße, Fronten und Auszüge selbst und bekommen ein Gefühl für Ihren Unterschrank. Der Konfigurator ersetzt kein Aufmaß und nennt keinen Sofortpreis. Aufmaß, 3D-Planung, Fertigung und Montage übernehmen wir.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/badmoebel-nach-mass-led-spiegel-dusche.jpg`,
  imageAlt: "Waschtischunterschrank nach Maß mit beleuchtetem Spiegel neben einer bodengleichen Dusche",
};

export const wuTestimonialsHeading = "Das sagen unsere Kunden über ihre Badmöbel";

export const wuFaq = {
  heading: "Häufige Fragen zum Waschtischunterschrank nach Maß",
  items: [
    {
      question: "Wandhängend oder stehend, was ist besser?",
      answer:
        "Das entscheidet Ihr Bad. Wandhängend bleibt der Boden frei, Wischen geht mühelos und der Schrank wirkt in kleinen Bädern angenehm leicht. Stehend auf einem Sockel trägt er schwere Platten sicher und kommt ohne tragende Wand aus. Beides bauen wir nach Maß.",
    },
    {
      question: "Welche Höhe sollte der Unterschrank haben?",
      answer:
        "Die Höhe richtet sich nach der Komforthöhe des Beckens, meist liegt die Beckenoberkante bei etwa 85 bis 95 cm. Die Korpushöhe planen wir passend dazu und auf Ihre Körpergröße. Starre Vorgaben machen wir dabei nicht.",
    },
    {
      question: "Wie tief sollte ein Waschtischunterschrank sein?",
      answer:
        "Übliche Spannen liegen bei etwa 35 bis 50 cm. Flach für schmale Bäder und einen freien Verkehrsweg, tiefer für mehr Stauraum. Wir fertigen millimetergenau nach Aufmaß und planen für enge Bäder auch besonders flach.",
    },
    {
      question: "Passt der Unterschrank zu meinem vorhandenen Waschbecken?",
      answer:
        "Ja. Wir planen Korpus und Auszüge um Ihr vorhandenes Becken und den Siphon herum. Beim Aufmaß erfassen wir die Ablauf- und Anschlussposition, damit alles sitzt. Das Becken selbst verkaufen wir nicht, wir bauen passgenau darum.",
    },
    {
      question: "Wie werden die Auszüge um den Siphon herum gebaut?",
      answer:
        "Mit ausgesparten, U-förmigen Schüben oder nach dem Prinzip Schubkasten-in-Schubkasten. So führt der Stauraum sauber am Ablaufrohr vorbei, und Sie verlieren keine ganze Schublade an den Siphon wie bei Serienmöbeln.",
    },
    {
      question: "Grifflos oder mit Griff?",
      answer:
        "Beides ist möglich. Grifflos mit Push-to-open ergibt eine ruhige, flächenbündige Front, ein Griff lässt sich auch mit nassen Händen leicht fassen. Gedämpfte Soft-Close-Auszüge planen wir auf Wunsch dazu, damit alles leise schließt.",
    },
    {
      question: "Ist ein Holz-Unterschrank im Bad feuchtigkeitsbeständig?",
      answer:
        "Mit PU-Kantenverleimung verschließen wir die Kanten fugenlos und feuchtigkeitsbeständig, so kommt keine Nässe in die Kante. Mit etwas Wandabstand bleibt die Rückseite belüftet. Wasserfest ist Holz nicht, für den täglichen Gebrauch im Bad aber gut gerüstet.",
    },
    {
      question: "Lässt sich der Unterschrank für Nische oder Dachschräge bauen?",
      answer:
        "Ja. Wir bauen Wand zu Wand ohne Passleisten, auch in die Nische oder unter die Dachschräge. Sondermaße und der Zuschnitt an die Schräge sind für uns Alltag, dafür ist Maßarbeit da.",
    },
    {
      question: "Was kostet ein Waschtischunterschrank nach Maß?",
      answer:
        "Einen festen Preis nennen wir nicht, weil jeder Unterschrank anders ist. Den Ausschlag geben Breite und Korpusgröße, die Anzahl der Auszüge, Front und Oberfläche, das Griffsystem und die Montageart. Nach dem kostenlosen Aufmaß bekommen Sie ein individuelles Angebot.",
    },
    {
      question: "Wird der Unterschrank montiert geliefert und wer baut ihn ein?",
      answer:
        "Im Umkreis von rund 200 km um Espelkamp, durch ganz OWL und darüber hinaus etwa nach Minden, Lübbecke, Osnabrück und Bielefeld, baut unser eigenes Montageteam den Unterschrank vor Ort ein. Fertige, freistehende Möbel liefern wir zusätzlich bundesweit.",
    },
  ],
};

const wuTypes = wuMontage.segments.map((s) => s.title);

/**
 * JSON-LD for the Waschtischunterschrank product child. Same scope/convention as
 * the pillar and sibling product pages (Service, not Product-with-price):
 * Service, BreadcrumbList (4 levels), FAQPage (1:1 to visible FAQ), ItemList.
 * No offers/aggregateRating (Preise immer individuell, siehe FACTS.md).
 */
export const wuJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Waschtischunterschrank nach Maß",
    serviceType: "Maßgefertigte Waschtischunterschränke",
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
      name: "Waschtischunterschränke nach Maß",
      itemListElement: wuTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Waschtischunterschrank: ${name}` },
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
      { "@type": "ListItem", position: 4, name: "Waschtischunterschrank nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: wuFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Waschtischunterschrank nach Maß: Bauformen",
    itemListElement: wuTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
