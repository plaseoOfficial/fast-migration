/**
 * Content for the `/moebel-nach-mass/` page — the canonical "Privat"
 * service page. New Privat pages copy this module's shape, swap the copy, and
 * feed it into the same library sections (see docs/sections/CATALOG.md → the
 * "Privat Page Recipe").
 */
import type { ServiceCard } from "@/types/mnm";

export const mnmHero = {
  bgImage: "/images/2025/11/WhatsApp-Bild-2025-04-01-um-22.54.05_fab2d495.jpg",
  imageAlt: "Einbauschrank nach Maß – Fast Systemmöbel",
  title: "Möbel nach Maß aus Espelkamp – millimetergenau geplant",
  intro:
    "Standardlösungen finden Sie in jedem Möbelhaus. Wir bei Fast Systemmöbel gehen einen Schritt weiter: Wir planen und fertigen hochwertige Möbel nach Maß, die sich millimetergenau in Ihre Räume einfügen und Ihre Persönlichkeit perfekt unterstreichen.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß" },
  ],
};

export const mnmIntroStats = {
  since: "seit 1996",
  sinceSub: "Geben wir unser Bestes.",
  heading: "Individuelle Möbel nach Maß für jeden Raum präzise planen",
  introBefore:
    "Fast Systemmöbel aus Espelkamp begleitet Sie genau in dieser entscheidenden",
  introBold: "Bauphase",
  introAfter:
    ". Mit präziser Planung, ehrlicher Beratung und handwerklicher Umsetzung, die jeden Quadratmeter nutzt.",
  bandImage: "/images/2025/11/IMG_2772-scaled.jpg",
  bandAlt: "Maßgefertigte Einbauschränke im Flur",
  col1Title: "Maßarbeit planen",
  col1Body:
    "Wir fertigen Möbel nach Maß, die millimetergenau zu Ihrem Raum passen und jede Nische optimal nutzen. Jede Maßanfertigung entsteht individuell nach Ihren Anforderungen. Mit hochwertigen Dekoren, stabilen Konstruktionen und präzisem Aufmaß-Service.",
  col1CtaLabel: "Jetzt individuelle Anfrage stellen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Dabei planen wir jedes Möbelstück so, dass Funktionalität, Stauraum und Alltagstauglichkeit perfekt zusammenspielen. Ob Schrank, Regal, Sideboard oder Kommode: Sie erhalten maßgeschneiderte Möbel, die langlebig gebaut, modern gestaltet und sauber integriert werden – exakt nach Ihren Vorstellungen.",
  counterTarget: 72,
  counterDuration: 2000,
  counterSuffix: "K+",
  col3Title: "gefertigte Einzelteile",
  col3Body:
    "Unsere Fertigung kombiniert neueste CNC-Technik mit handwerklicher Perfektion. So entstehen Systemmöbel, die langlebig, funktional und ästhetisch überzeugen – in jedem Projekt, jedem Detail.",
  col3CtaLabel: "Küchen nach Maß entdecken",
  col3CtaHref: "/kuechen-nach-mass/",
};

export const mnmProcess = {
  heading: "Planung, Fertigung und Montage für Maßmöbel aus einer Hand",
  paragraph:
    "Unsere Maßmöbel entstehen in einem strukturierten Prozess: digitales Planen, professionelles Aufmaß, Fertigung auf Homag-Technologie und saubere Montage durch unser eigenes Team. Dabei kombinieren wir hochwertige Materialien, moderne Dekore und robuste Konstruktionen für maximale Funktionalität. Ob Schrank nach Maß, Regal, Sideboard, Kommode oder Lösungen für Nischen und Dachschrägen – wir entwickeln Möbel, die perfekt in den Raum passen und langfristig zuverlässig funktionieren.",
  paragraphStrong: "Made in Germany.",
  image: "/images/2025/11/20161103_150622294_iOS-scaled.jpg",
  imageAlt: "Maßgefertigter Einbauschrank in Anthrazit",
};

export const mnmTypische = {
  heading: "Typische Maßanfertigungen – passgenaue Möbel für Ihr Zuhause",
  image1: "/images/2025/11/IMG_9120-scaled.jpg",
  image1Alt: "Maßgefertigtes Möbeldetail",
  image2: "/images/2025/11/IMG_2249.jpg",
  image2Alt: "Maßgefertigte Garderobe mit Stauraum",
  row1: [
    {
      title: "Küchen",
      description:
        "Klare Linien, funktionale Wege, perfekt integrierte Stauraumlösungen für jeden Küchenraum.",
    },
    {
      title: "Bad",
      description:
        "Präzise Planung für kleine und große Bäder: Stauraum, Lichtführung und harmonische Materialien.",
    },
    {
      title: "Garderoben",
      description:
        "Durchdachte Garderoben mit optimaler Aufteilung für Alltag, Familie und saisonale Ordnung.",
    },
  ],
  row2: [
    {
      title: "Wohnbereiche",
      description:
        "Wohnräume, die Struktur geben: Möbel, Akzente und Proportionen mit klarer Wirkung.",
    },
    {
      title: "Homeoffice",
      description:
        "Arbeitsbereiche, die Ruhe, Ergonomie und Stauraum verbinden – auch auf kleinsten Flächen.",
    },
    {
      title: "Stauraum",
      description:
        "Individuelle Lösungen, die jeden Zentimeter nutzen – für Nischen, Dachschrägen und Sonderbereiche.",
    },
  ],
};

export const mnmWarum = {
  heading: "Warum Maßmöbel aus eigener Fertigung überzeugen",
  paragraph:
    "Unsere Möbel nach Maß werden vollständig in Espelkamp gefertigt. Präzision bis ins Detail und stabile Konstruktionen sorgen dafür, dass Ihr Möbelstück und der Raum eine perfekte Einheit bilden. Ob Kleiderschrank, Kommode, Regal oder maßgefertigtes Sideboard – jede Maßanfertigung wird auf Ihre Bedürfnisse zugeschnitten und massgeschneidert aufgebaut. Wir setzen auf langlebige Materialien, saubere Verarbeitung und eine Montage, die funktional und modern wirkt. Lieferung und Montage erfolgen durch unser eigenes Team.",
  images: [
    { src: "/images/2025/11/20231204_095459232_iOS-scaled.jpg", alt: "Moderne Küche in Grau und Weiß", width: 600, height: 450 },
    { src: "/images/2025/11/DSC_0001.jpg", alt: "Moderner Schreibtisch", width: 600, height: 400 },
    { src: "/images/2025/11/DSC_9814.jpg", alt: "Modernes, dunkelgraues Möbel", width: 600, height: 420 },
    { src: "/images/2025/11/IMG_4797-scaled.jpg", alt: "Moderne Küche mit weißen Schränken", width: 600, height: 800 },
    { src: "/images/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg", alt: "Moderne Küche mit hellen Schränken", width: 600, height: 380 },
    { src: "/images/2025/11/20181220_075204314_iOS-scaled.jpg", alt: "Moderne Sitzbank mit Holzsitz", width: 600, height: 450 },
  ],
};

export const mnmGeschichte = {
  heading: "Unsere Geschichte – Qualität aus fast drei Jahrzehnten",
  subheading: "VOM GARAGENBETRIEB ZUM MODERNEN MÖBELHERSTELLER.",
  gallery: [
    { src: "/images/2025/11/IMG_9120-scaled.jpg", alt: "Moderner Badschrank", caption: "IMG_9120", width: 600, height: 600 },
    { src: "/images/2024/03/test-img-83485.jpg", alt: "Modernes Wohnzimmer", caption: "Luxor Collection", width: 800, height: 400 },
    { src: "/images/2025/11/DSC07129-Kopie-scaled.jpg", alt: "Zwei Personen blättern", caption: "DSC07129 Kopie", width: 600, height: 900 },
    { src: "/images/2025/11/WhatsApp-Bild-2025-04-01-um-22.54.05_fab2d495.jpg", alt: "Moderner Ankleidebereich", caption: "WhatsApp Bild 2025-04-01", width: 600, height: 900 },
    { src: "/images/2025/11/20231220_131839984_iOS-scaled.jpg", alt: "Modernes Büro mit Holzlamellenwand", caption: "20231220_131839984_iOS", width: 600, height: 900 },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 in einer Garage in Espelkamp.",
    "Aus ersten Küchen entstand ein Meisterbetrieb mit über 1.000 m² Fertigungsfläche, modernen Homag-Maschinen und einem eingespielten Team. Heute fertigen wir Maßmöbel, die millimetergenau geplant, hochwertig verarbeitet und zuverlässig montiert werden.",
    "Jede Maßanfertigung verbindet Funktionalität und Design – vom Einbauschrank bis zum Sideboard. Unsere Möbel werden in Espelkamp gefertigt, im Umkreis von 200 km montiert und deutschlandweit geliefert.",
  ],
  factLines: [
    "– Made in Germany",
    "– 1.000 m² Fertigung",
    "– Meisterbetrieb seit 2013",
    "– Homag-Technologie",
    "– Aufbau bis 200 km",
    "– Lieferung bundesweit",
  ],
};

/** Final-CTA + intro-CTA expanding image blocks (shared ExpandingImageCta). */
export const mnmCtas = {
  intro: {
    image: "/images/2025/11/IMG_6123-scaled.jpg",
    heading: "Maßmöbel nach Ihren Vorstellungen",
    linkText: "Sprechen Sie mit uns über Ihr Projekt",
    href: "/kontakt/",
  },
  final: {
    image: "/images/2025/11/DSC_9938.jpg",
    heading: "Ihr Raum verdient mehr als Standard.",
    linkText: "Kostenlose Beratung anfragen",
    href: "/kontakt/",
  },
};

/** Testimonials + FAQ now render via the shared service sections. */
export const mnmTestimonialsHeading = "Was unseren Kunden dazu sagen";

export const mnmFaq = {
  heading: "Häufige Fragen zu unseren Raumkonzepten",
  items: [
    {
      question: "Arbeiten Sie nur in Espelkamp?",
      answer:
        "Wir fertigen in Espelkamp, montieren im Umkreis von ca. 200 km und liefern deutschlandweit.",
    },
    {
      question: "Gibt es eine Garantie?",
      answer: "Ja, unsere Möbel nach Maß erhalten bis zu 5 Jahre Garantie.",
    },
    {
      question: "Sind Maßmöbel pflegeleicht?",
      answer: "Ja. Unsere Dekore und Materialien sind robust und leicht zu reinigen.",
    },
    {
      question: "Welche Möbel fertigen Sie?",
      answer:
        "Schränke und Regale, Sideboards, Kommoden, Dachschrägen-Lösungen, Kleiderschränke und mehr Stauraum.",
    },
    {
      question: "Wie läuft die Planung ab?",
      answer:
        "Mit Aufmaß-Service, digitalem Planen und klarer Abstimmung bis zur fertigen Maßanfertigung.",
    },
  ],
};

/**
 * "Weitere Leistungen" cards for the möbel-nach-mass HUB. Per the internal-
 * linking silo model the hub links down to its cluster pillars — here the
 * "Küchen nach Maß" cluster. See docs/seo/internal-linking.md.
 */
export const mnmWeitereCards: ServiceCard[] = [
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Küchen nach Maß",
    description:
      "Zentimetergenaue Küchen vom Meisterbetrieb. Geplant, gefertigt und montiert aus einer Hand, passgenau auf Ihren Raum.",
    href: "/kuechen-nach-mass/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-22.svg",
    title: "Raumkonzepte",
    description:
      "Wir planen den ganzen Raum: Architektur, Licht, Materialien und Möbel als Einheit. Vom Entwurf bis zur Montage.",
    href: "/moebelplaner/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-07.svg",
    title: "Fertigung",
    description:
      "Moderne Homag-Technik, präzise CNC-Verarbeitung und handwerkliche Qualitätskontrolle. Von Einzelmöbeln bis zu kompletten Objekten.",
    href: "/ueber-uns/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-08.svg",
    title: "Objekt- & Gewerbeeinrichtung",
    description:
      "Für Hotels, Büros oder Ladengeschäfte entwickeln wir langlebige Möbelkonzepte, die Design und Funktion vereinen.",
    href: "/gewerbe/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-09.svg",
    title: "Montage",
    description:
      "Unsere Monteure arbeiten sauber, termingerecht und millimetergenau. Die finale Passung wird vor Ort abgestimmt.",
    href: "/kontakt/",
  },
];
