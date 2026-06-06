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
  title: "Möbel nach Maß, millimetergenau aus Espelkamp",
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
  heading: "Möbel nach Maß für jeden Raum",
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
  heading: "Maßmöbel, alles aus einer Hand",
  paragraph:
    "Maßmöbel entstehen in klaren Schritten: digitales Planen, professionelles Aufmaß, Fertigung auf Homag-Technik und saubere Montage durch unser eigenes Team. Ob Schrank, Regal, Sideboard, Kommode oder Lösung für Nische und Dachschräge: Wir bauen Möbel, die passgenau sitzen und über Jahre zuverlässig funktionieren.",
  paragraphStrong: "Made in Germany.",
  image: "/images/2025/11/20161103_150622294_iOS-scaled.jpg",
  imageAlt: "Maßgefertigter Einbauschrank in Anthrazit",
};

export const mnmTypische = {
  heading: "Möbel nach Maß für Ihr Zuhause",
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
    "Ihre Möbel nach Maß fertigen wir vollständig in Espelkamp. Stabile Konstruktionen und Präzision bis ins Detail sorgen dafür, dass Möbel und Raum eine Einheit bilden. Ob Kleiderschrank, Kommode, Regal oder Sideboard: Jedes Stück wird auf Ihre Bedürfnisse zugeschnitten, aus langlebigen Materialien sauber verarbeitet. Lieferung und Montage übernimmt unser eigenes Team.",
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
  heading: "Qualität aus fast drei Jahrzehnten",
  subheading: "Vom Garagenbetrieb zum modernen Möbelhersteller",
  anchorImage: "/images/2024/03/test-img-83485.jpg",
  anchorImageAlt: "Maßmöbel aus eigener Fertigung — Fast Systemmöbel Espelkamp",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "200 km", label: "Montage-Radius" },
    { value: "bundesweit", label: "Lieferung" },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 in einer Garage in Rahden-Tonnenheide. 2001 zog die Fertigung nach Espelkamp.",
    "Aus ersten Küchen entstand ein Meisterbetrieb mit über 1.000 m² Fertigungsfläche, modernen Homag-Maschinen und einem eingespielten Team. Heute fertigen wir Maßmöbel, die millimetergenau geplant, hochwertig verarbeitet und zuverlässig montiert werden.",
    "Jede Maßanfertigung verbindet Funktionalität und Design – vom Einbauschrank bis zum Sideboard. Unsere Möbel werden in Espelkamp gefertigt, im Umkreis von 200 km montiert und deutschlandweit geliefert.",
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
