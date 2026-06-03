/**
 * Content for the `/kuechen-nach-mass/` page — the "Küchen nach Maß" cluster
 * pillar under the `/moebel-nach-mass/` hub. Built from the Privat library
 * sections. Copy follows the plaseo brand voice (direct, concrete, local,
 * active, short sentences, no em-dashes). See ARCHITECTURE.md → Privat recipe.
 */

const SITE = "https://fast.side-boost.com";
const PATH = "/kuechen-nach-mass/";

export const kuechenHero = {
  bgImage: "/images/2026/05/variante_1778229163946_1-scaled.jpg",
  imageAlt: "Moderne Küche nach Maß mit grifflosen Fronten und Kochinsel",
  title: "Küchen nach Maß aus Espelkamp: zentimetergenau vom Meisterbetrieb",
  intro:
    "Eine Küche von der Stange passt selten genau. Wir planen und bauen Ihre Küche nach Maß. Zentimetergenau auf Ihren Raum, Ihren Alltag und Ihre Geräte. Gefertigt im eigenen Meisterbetrieb in Espelkamp, montiert von unserem eigenen Team.",
  breadcrumb: [
    { label: "fast.side-boost.com", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Küchen nach Maß" },
  ],
};

export const kuechenIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Küchen nach Maß.",
  heading: "Ihre Küche nach Maß: präzise geplant, sauber gebaut",
  introBefore:
    "Fast Systemmöbel aus Espelkamp plant Ihre Küche von der ersten Skizze bis zur Montage. Wir nehmen uns Zeit für ein genaues Aufmaß und nutzen jeden",
  introBold: "Zentimeter",
  introAfter:
    ". So entsteht eine Küche, die exakt in Ihren Raum passt und jahrelang hält.",
  bandImage: "/images/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg",
  bandAlt: "Maßgefertigte U-Küche mit Kochinsel und Stein-Arbeitsplatte",
  col1Title: "Küche planen",
  col1Body:
    "Wir planen Ihre Küche nach Maß: Grundriss, Wege, Stauraum, Geräte. Sie sagen uns, wie Sie kochen und leben. Wir bauen die Küche darum herum. Markengeräte planen wir passgenau ein, vom Backofen bis zur Dunstabzugshaube.",
  col1CtaLabel: "Jetzt Küche anfragen",
  col1CtaHref: "/kontakt",
  col2Body:
    "Jede Front, jeder Auszug und jede Arbeitsplatte entsteht in unserer eigenen Fertigung in Espelkamp. Kein Zwischenhändler, kein Standardmaß. Sie haben einen Ansprechpartner von der Planung bis zur Montage.",
  counterTarget: 72,
  counterDuration: 2000,
  counterSuffix: "K+",
  col3Title: "gefertigte Einzelteile",
  col3Body:
    "Unsere CNC- und Homag-Technik fertigt jedes Bauteil millimetergenau. Die handwerkliche Kontrolle sorgt dafür, dass am Ende alles sitzt. So sieht Ihre Küche auch nach Jahren noch gut aus.",
  col3CtaLabel: "Küche online planen",
  col3CtaHref: "/moebelplaner/",
};

export const kuechenCtas = {
  intro: {
    image: "/images/2025/11/IMG_9387-scaled.jpg",
    heading: "Ihre Traumküche nach Maß",
    linkText: "Sprechen Sie mit uns über Ihre Küche",
    href: "/kontakt",
  },
  final: {
    image: "/images/2025/11/20231204_095459232_iOS-scaled.jpg",
    heading: "Ihre Küche verdient mehr als Standardmaße.",
    linkText: "Jetzt kostenlose Küchenberatung anfragen",
    href: "/kontakt",
  },
};

export const kuechenProcess = {
  heading: "Planung, Fertigung und Montage für Ihre Küche aus einer Hand",
  paragraph:
    "Ihre Küche entsteht in klaren Schritten. Zuerst beraten wir Sie und nehmen vor Ort genau Maß. Dann planen wir digital, inklusive Geräte und Anschlüsse. Wir fertigen auf Homag-Technik in Espelkamp. Zum Schluss montiert unser eigenes Team Ihre Küche sauber und termingerecht. Ein Ansprechpartner, klare Termine, kein Subunternehmer.",
  paragraphStrong: "Made in Germany.",
  image: "/images/2025/11/20231204_095459232_iOS-scaled.jpg",
  imageAlt: "Maßgefertigte Küche in Grau mit Kochinsel",
};

/** Kitchen types: drive the MnmTypische rows AND the JSON-LD ItemList / hasOfferCatalog. */
export const kuechenTypische = {
  heading: "Küchen nach Maß für jeden Grundriss und Stil",
  image1: "/images/2025/11/ThabarSebastian_kueche2.jpeg",
  image1Alt: "Helle Küche nach Maß mit Essbereich",
  image2: "/images/2025/11/IMG_4797-scaled.jpg",
  image2Alt: "Weiße Küche nach Maß mit Holz-Arbeitsplatte",
  row1: [
    {
      title: "Küchenzeilen",
      description:
        "Klare, gerade Küchenzeilen, die jeden Meter Wand nutzen. Ideal für offene Wohnküchen und schmale Grundrisse.",
    },
    {
      title: "L- und U-Küchen",
      description:
        "Über Eck geplant für kurze Wege und viel Arbeitsfläche. Wir passen jede Ecke zentimetergenau an.",
    },
    {
      title: "Kochinseln",
      description:
        "Die Insel als Mittelpunkt: zum Kochen, Arbeiten und Zusammensitzen. Mit integriertem Kochfeld, Stauraum und Sitzplatz.",
    },
  ],
  row2: [
    {
      title: "Grifflose Küchen",
      description:
        "Reduziertes Design ohne sichtbare Griffe. Glatte Fronten, ruhige Optik, leicht zu reinigen.",
    },
    {
      title: "Landhaus und Klassik",
      description:
        "Warme, zeitlose Küchen mit Rahmenfronten und natürlichen Materialien. Modern interpretiert, handwerklich gebaut.",
    },
    {
      title: "Stauraum nach Maß",
      description:
        "Apothekerauszüge, Eckschränke, Vorratsschränke bis zur Decke. Jeder Zentimeter wird nutzbar.",
    },
  ],
};

export const kuechenWarum = {
  heading: "Warum eine Küche vom Tischler mehr kann als von der Stange",
  paragraph:
    "Im Küchenstudio kaufen Sie eine Markenküche in festen Rastermaßen. In der Möbelkette bekommen Sie Standard. Wir bauen Ihre Küche selbst, in Espelkamp, zentimetergenau auf Ihren Raum. Schräge Wände, niedrige Decken oder Nischen sind für uns kein Problem, sondern Alltag. Sie wählen Fronten, Materialien und Geräte frei. Wir liefern die handwerkliche Umsetzung und montieren im Umkreis von 200 km mit eigenem Team. Ein Ansprechpartner, klare Preise, eine Küche, die exakt passt.",
  images: [
    { src: "/images/2026/05/variante_1778229163946_1-scaled.jpg", alt: "Graue Küche nach Maß mit Holzdecke und Insel", width: 600, height: 400 },
    { src: "/images/2025/11/IMG_9387-scaled.jpg", alt: "Küche nach Maß mit grifflosen Fronten und Holzrückwand", width: 600, height: 800 },
    { src: "/images/2025/11/20231204_095459232_iOS-scaled.jpg", alt: "Moderne Küche in Grau mit Kochinsel", width: 600, height: 450 },
    { src: "/images/2025/11/IMG_4797-scaled.jpg", alt: "Weiße Küche nach Maß mit Holz-Arbeitsplatte", width: 600, height: 800 },
    { src: "/images/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg", alt: "U-Küche nach Maß mit Stein-Insel", width: 600, height: 380 },
    { src: "/images/2025/11/ThabarSebastian_kueche2.jpeg", alt: "Helle Küche nach Maß mit Esstisch", width: 600, height: 600 },
  ],
};

export const kuechenGeschichte = {
  heading: "Küchenhandwerk aus fast drei Jahrzehnten",
  subheading: "VOM GARAGENBETRIEB ZUM MEISTERBETRIEB FÜR KÜCHEN NACH MASS.",
  gallery: [
    { src: "/images/2026/05/variante_1778229163946_1-scaled.jpg", alt: "Graue Küche nach Maß mit Insel", caption: "Grifflose Inselküche", width: 800, height: 500 },
    { src: "/images/2025/11/IMG_9387-scaled.jpg", alt: "Küche nach Maß mit Holzrückwand", caption: "Küche mit Holzrückwand", width: 600, height: 800 },
    { src: "/images/2025/11/20231204_095459232_iOS-scaled.jpg", alt: "Graue Küche mit Kochinsel", caption: "Graue Inselküche", width: 600, height: 450 },
    { src: "/images/2025/11/ThabarSebastian_kueche2.jpeg", alt: "Helle Wohnküche mit Essbereich", caption: "Offene Wohnküche", width: 600, height: 600 },
    { src: "/images/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg", alt: "U-Küche mit Stein-Insel", caption: "U-Küche mit Stein", width: 600, height: 500 },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 in einer Garage in Espelkamp.",
    "Aus den ersten Küchen wurde ein Meisterbetrieb mit über 1.000 m² Fertigung, moderner Homag-Technik und einem festen Team. Heute planen, fertigen und montieren wir Küchen nach Maß, die zentimetergenau sitzen.",
    "Jede Küche entsteht bei uns im Haus. Gefertigt in Espelkamp, montiert im Umkreis von 200 km, geliefert deutschlandweit.",
  ],
  factLines: [
    "– Made in Germany",
    "– 1.000 m² Fertigung",
    "– Meisterbetrieb seit 2013",
    "– Homag-Technologie",
    "– Montage bis 200 km",
    "– Lieferung bundesweit",
  ],
};

export const kuechenMoebelplaner = {
  heading: "Ihre Küche online planen und konfigurieren",
  body:
    "Mit unserem Möbelplaner stellen Sie Ihre Küche online zusammen. Maße, Fronten, Auszüge und Geräte sehen Sie direkt im 3D-Konfigurator. So bekommen Sie sofort ein Bild von Ihrer Küche. Danach übernehmen wir den Rest: Aufmaß vor Ort, Beratung, Fertigung und Montage. Aus Ihrer Online-Planung wird eine Küche nach Maß.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: "/images/2025/11/IMG_9387-scaled.jpg",
  imageAlt: "Küche nach Maß mit grifflosen Fronten",
};

export const kuechenTestimonialsHeading = "Was unsere Küchenkunden sagen";

export const kuechenFaq = {
  heading: "Häufige Fragen zu Küchen nach Maß",
  items: [
    {
      question: "Was kostet eine Küche nach Maß?",
      answer:
        "Das hängt von Größe, Material und Geräten ab. Eine Küche nach Maß ist oft günstiger als gedacht, weil Sie nur das bezahlen, was Sie wirklich brauchen. Wir erstellen ein klares Angebot ohne versteckte Kosten. Am genauesten geht das nach einem kurzen Gespräch und dem Aufmaß.",
    },
    {
      question: "Wie lange dauert es von der Planung bis zur fertigen Küche?",
      answer:
        "In der Regel einige Wochen. Nach Beratung und Aufmaß planen wir die Küche, Sie geben sie frei, dann fertigen wir. Den genauen Termin nennen wir Ihnen verbindlich vor Produktionsstart.",
    },
    {
      question: "Kann ich meine eigenen Markengeräte einbauen lassen?",
      answer:
        "Ja. Wir planen Geräte aller gängigen Marken passgenau ein, vom Backofen über das Kochfeld bis zur Spüle. Sie bringen Ihre Wunschgeräte mit oder wir beraten Sie dazu.",
    },
    {
      question: "Passt eine Küche nach Maß auch in einen schwierigen Grundriss?",
      answer:
        "Genau dafür ist sie da. Schräge Wände, Dachschrägen, Nischen oder niedrige Decken nutzen wir gezielt aus. Wir bauen zentimetergenau, wo Standardküchen aufhören.",
    },
    {
      question: "Montieren Sie die Küche auch bei mir vor Ort?",
      answer:
        "Ja, mit eigenem Team. Wir liefern und montieren im Umkreis von rund 200 km um Espelkamp. Deutschlandweite Lieferung ist auf Anfrage möglich.",
    },
    {
      question: "Gibt es eine Garantie auf die Küche?",
      answer:
        "Ja. Auf unsere Küchen nach Maß geben wir bis zu 5 Jahre Garantie. Hochwertige Beschläge und saubere Verarbeitung sorgen dafür, dass die Küche lange hält.",
    },
  ],
};

const kitchenTypes = [...kuechenTypische.row1, ...kuechenTypische.row2].map((t) => t.title);

/**
 * JSON-LD for the kitchen cluster pillar. Per the agreed schema scope:
 * Service (provider=Organization, serviceType, areaServed, hasOfferCatalog),
 * BreadcrumbList, FAQPage (real FAQ section exists), ItemList. No Product, no
 * AggregateRating. Rendered in the page via a single ld+json script.
 */
export const kuechenJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Küche nach Maß",
    serviceType: "Maßgefertigte Küchen",
    url: `${SITE}${PATH}`,
    provider: {
      "@type": "Organization",
      name: "Fast Systemmöbel",
      url: `${SITE}/`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Espelkamp",
        addressRegion: "Nordrhein-Westfalen",
        addressCountry: "DE",
      },
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 52.3833, longitude: 8.6167 },
      geoRadius: "200000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Küchen nach Maß",
      itemListElement: kitchenTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${name} nach Maß` },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Küchen nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: kuechenFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Küchen nach Maß: Typen",
    itemListElement: kitchenTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
