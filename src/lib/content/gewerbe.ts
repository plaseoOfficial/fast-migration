/**
 * Content for the `/gewerbe/` hub page — the orientation hub for the Gewerbe
 * silo (Büro, Praxis, Gastro, Ladenbau, Serienmöbel). All copy lives here so the
 * page and its sections stay props-driven and pixel-identical (same pattern as
 * the Privat/Büro content modules, e.g. `bueroeinrichtung.ts`).
 *
 * Voice = Fast Systemmöbel (sachlich-handwerklich, B2B, Sie-Form, keine Em-Dashes
 * im Fließtext außer dem hier bewusst gesetzten Gedankenstrich „–").
 * Fakten geprüft gegen docs/seo/brand/FACTS.md: gegründet 1996, Meisterbetrieb,
 * Fertigung in Espelkamp, ~200 km Montageradius (eigenes Team), Lieferung
 * bundesweit, kostenloses Aufmaß. KEINE Preise, keine Garantie-Zahl.
 *
 * Hub-FAQ bewusst auf 5 übergreifende Fragen begrenzt — branchenspezifische
 * Fragen leben in den Cluster-FAQs (bueroFaq/praxisFaq/gastroFaq/serienFaq).
 * Siehe ARCHITECTURE.md → „Section-Längen-Budget & Overflow-Entscheidung".
 */

import type { ServiceCard, CategoryItem, MnmFaqItem } from "@/types/mnm";

export const gewerbeHero = {
  title: "Gewerbeeinrichtung nach Maß",
  bgImage: "/images/2025/11/DSC_0001.jpg",
  intro:
    "Gewerbeeinrichtung nach Maß heißt: Objektmöbel, die genau auf Ihre Räume und Abläufe sitzen. Wir planen, fertigen in Espelkamp und montieren bei Ihnen vor Ort. Als Meisterbetrieb aus OWL richten wir Büro, Praxis, Laden und Gastronomie komplett ein.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Gewerbeeinrichtung" },
  ],
};

export const gewerbeIntroStats = {
  since: "seit 1996",
  sinceSub: "Geben wir unser Bestes.",
  // enthält literales "&" → React rendert als &amp; (byte-identisch zur JSX-Vorlage)
  heading: "Individuelle Möbel für Gewerbe & Objektbau",
  introBefore:
    "Fast Systemmöbel aus Espelkamp begleitet Sie genau in dieser entscheidenden",
  introBold: "Bauphase",
  introAfter:
    "– mit präziser Planung, ehrlicher Beratung und handwerklicher Umsetzung, die jeden Quadratmeter nutzt.",
  bandImage: "/images/2025/11/DSC_9934.jpg",
  bandAlt: "Gewerbemöbel – Maßarbeit für Gewerbe und Objektbau",
  col1Title: "Warum Maßarbeit zählt",
  col1Body:
    "In Gewerberäumen entscheidet Qualität über Effizienz. Standardlösungen funktionieren selten. Wir entwickeln Möbel, die exakt zu Ihrem Ablauf, Ihrem Raum und Ihrem Design passen – millimetergenau gefertigt und für den täglichen Einsatz optimiert.",
  col1CtaLabel: "Jetzt individuelle Anfrage stellen",
  col1CtaHref: "/kontakt/",
  col2Title: "Planung bis Montage",
  col2Body:
    "Wir begleiten Sie vollständig: Analyse vor Ort, technische Planung, Fertigung auf modernsten Homag-Systemen und saubere Montage. Für Sie bedeutet das: Ein Ansprechpartner, klare Prozesse, verlässliche Termine.",
  counterTarget: 72,
  counterDuration: 2000,
  counterUnit: "K",
  counterPlus: "+",
  col3Title: "gefertigte Einzelteile",
  col3Body:
    "Unsere Fertigung kombiniert neueste CNC-Technik mit handwerklicher Perfektion. So entstehen Systemmöbel, die langlebig, funktional und ästhetisch überzeugen – in jedem Projekt, jedem Detail.",
  col3CtaLabel: "Entdecken Sie das Gefühl von Qualität",
  col3CtaHref: "/gewerbe/ladenbau/",
};

export const gewerbeLadenGastro = {
  ladenHeading: "Ladeneinrichtung, die zu Ihrem Objekt passt",
  ladenParagraphs: [
    "Wir wissen, dass jede Ladeneinrichtung einzigartig ist und eine einzigartige Erscheinung benötigt, um Kunden anzuwerben, Wohlbefinden auszustrahlen und zum Kauf anzuregen.",
    "Wir fertigen Möbel, die diese Anforderungen perfekt abbilden. Von robusten Oberflächen über intelligenten Stauraum bis zu wunderschönen Auslegetischen. Alles entsteht in unserer Produktion in Espelkamp und wird exakt nach Ihren Wünschen abgestimmt.",
  ],
  ladenImage:
    "/images/2025/11/WhatsApp-Bild-2025-01-16-um-12.34.29_b25a14a5.jpg",
  ladenImageAlt: "Ladeneinrichtung – OBST & GEMÜSE Markt",
  mosaic: [
    {
      src: "/images/2025/11/20230829_030744000_iOS.jpg",
      alt: "Modernes Bad mit Holzwaschtisch",
    },
    {
      src: "/images/2025/11/DSC07129-Kopie-scaled.jpg",
      alt: "Zwei Personen blättern",
    },
    {
      src: "/images/2025/11/20181220_075204314_iOS-scaled.jpg",
      alt: "Moderne Sitzbank mit Holzsitz",
    },
  ],
  gastroHeading: "Gastromöbel, die magisch anziehen",
  // Absatz 1: {lead}{" "}<strong>{bold1}</strong>{mid}
  gastroIntroLead:
    "Ob Restaurant, Café, Hotel oder gastronomischer Betrieb – wir planen und fertigen",
  gastroIntroBold1: "Gastro Möbel nach Maß",
  gastroIntroMid:
    ", die exakt zu Ihrem Konzept, Ihren Abläufen und Ihrem Raum passen. Von der ersten Idee bis zur Umsetzung erhalten Sie bei uns alles aus einer Hand.",
  // Absatz 2: {before}{" "}<strong>{bold}</strong>{" "}{after}
  gastroBody2Before: "Unsere",
  gastroBody2Bold: "individuellen Gastro Möbel",
  gastroBody2After:
    "sind funktional, robust und auf den täglichen Einsatz ausgelegt. Langlebige Materialien, durchdachte Details und eine klare Gestaltung sorgen dafür, dass Design und Belastbarkeit kein Widerspruch sind.",
  gastroBody3:
    "Wir beraten Sie ganzheitlich und nehmen uns bewusst Zeit, Ihre Anforderungen im Detail zu verstehen. Die Planung erfolgt praxisnah, damit die Einrichtung nicht nur gut aussieht, sondern auch funktioniert.",
};

export const gewerbeLeistungen = {
  heading: "Unsere Leistungen für Gewerbekunden",
  image1: "/images/2025/11/DSC_9814.jpg",
  image1Alt: "Gewerbemöbel Detail",
  image2: "/images/2025/11/DSC_9747.jpg",
  image2Alt: "Maßgefertigte Gewerbeeinrichtung",
  row1: [
    {
      title: "Praxisräume",
      description:
        "Hygienische, funktionale Möbel für Behandlungs- und Funktionsräume.",
    },
    {
      title: "Büros",
      description:
        "Ergonomische Arbeitsplätze, Stauraum und verkabelte Systeme nach Maß.",
    },
    {
      title: "Ladenbau",
      description:
        "Individuelle Einrichtungen, die Marken sichtbar und Räume effizient machen.",
    },
  ] satisfies CategoryItem[],
  row2: [
    {
      title: "Hotel & Gastro",
      description:
        "Strapazierfähige Lösungen für Empfang, Zimmer, Bar- und Servicebereiche.",
    },
    {
      title: "Empfangstheken",
      description:
        "Repräsentative Theken, abgestimmt auf Raumfluss und Kundenkontakt.",
    },
    {
      title: "Sonderbau",
      description:
        "Individuelle Gewerbemöbel, die nicht in ein Schema passen.",
    },
  ] satisfies CategoryItem[],
};

export const gewerbeWarum = {
  heading: "Warum Unternehmen uns vertrauen",
  eyebrow: "HANDWERK, TECHNIK UND KLARE PROZESSE.",
  gallery: [
    {
      src: "/images/2025/11/IMG_9120-scaled.jpg",
      alt: "Moderner Badschrank",
      caption: "Maßgefertigter Schrank",
      width: 600,
      height: 600,
    },
    {
      src: "/images/2024/03/test-img-83485.jpg",
      alt: "Modernes Wohnzimmer",
      caption: "Luxor Collection",
      width: 800,
      height: 400,
    },
    {
      src: "/images/2025/11/DSC07129-Kopie-scaled.jpg",
      alt: "Zwei Personen blättern",
      caption: "Persönliche Beratung",
      width: 600,
      height: 900,
    },
    {
      src: "/images/2025/11/WhatsApp-Bild-2025-04-01-um-22.54.05_fab2d495.jpg",
      alt: "Moderner Ankleidebereich",
      caption: "Ankleide nach Maß",
      width: 600,
      height: 900,
    },
    {
      src: "/images/2025/11/20231220_131839984_iOS-scaled.jpg",
      alt: "Modernes Büro mit Holzlamellenwand",
      caption: "Büro mit Holzlamellen",
      width: 600,
      height: 900,
    },
  ],
  bodyParagraph:
    "Gewerbeprojekte brauchen Verlässlichkeit. Termine müssen halten, Qualität muss stimmen, Kommunikation muss klar sein. Als Meisterbetrieb mit eigenem Maschinenpark setzen wir jedes Detail kontrolliert um – von der Planung bis zur Montage. Für Architekten, Arztpraxen, Unternehmen und Gastronomen ist das entscheidend.",
  // "100" + U+00A0 (geschütztes Leerzeichen) + "% …" → byte-identisch zu 100&nbsp;%
  factBox: "100 % Maßfertigung aus Espelkamp",
};

/**
 * Hub → Cluster down-links: die „Weitere Leistungen"-Karten auf dem Gewerbe-Hub
 * zeigen auf die Gewerbe-Cluster (Silo-Verteilung). Icons aus dem bestehenden
 * interior-design-Icon-Set.
 */
export const gewerbeClusterCards: ServiceCard[] = [
  {
    icon: "/images/2024/03/interior-design-white-icons-08.svg",
    title: "Büroeinrichtung nach Maß",
    description:
      "Arbeitsplätze, Stauraum, Konferenz- und Empfangsbereiche für Büros und Kanzleien. Büromöbel nach Maß, geplant und montiert für Ihre Abläufe.",
    href: "/bueroeinrichtung/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Praxiseinrichtung nach Maß",
    description:
      "Empfangstresen, Behandlungs- und Wartebereiche für Ärzte, Therapeuten und Praxen. Hygienisch, repräsentativ und zentimetergenau gebaut.",
    href: "/praxiseinrichtung/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-22.svg",
    title: "Gastronomieeinrichtung nach Maß",
    description:
      "Theken, Tresen und Mobiliar für Restaurant, Café, Bar und Hotel. Strapazierfähig für den Dauereinsatz, bundesweit geliefert.",
    href: "/gastronomieeinrichtung/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-09.svg",
    title: "Ladenbau nach Maß",
    description:
      "Verkaufstheken, Warenträger und komplette Shopkonzepte. Vom einzelnen Tresen bis zur fertigen Verkaufsfläche aus einer Hand.",
    href: "/gewerbe/ladenbau/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-07.svg",
    title: "Serienmöbel & Serienfertigung",
    description:
      "Identische Möbel in Serie, zentimetergenau nach Zeichnung. Serienfertigung für Filialisten, Hotellerie und Pflegeeinrichtungen.",
    href: "/serienmoebel/",
  },
];

export const gewerbeIntroCta = {
  image: "/images/2025/11/DSC_9965.jpg",
  heading: "Individuelle Einrichtung für Ihr Gewerbe",
  linkText: "Sprechen Sie mit uns über Ihr Projekt",
  href: "/kontakt/",
};

export const gewerbeFinalCta = {
  image: "/images/2025/11/DSC_9938.jpg",
  heading: "Ihr Raum verdient mehr als Standard.",
  linkText: "Sprechen Sie mit uns über Ihr Projekt.",
  href: "/kontakt/",
};

export const gewerbeTestimonialsHeading = "Was unsere Kunden dazu sagen";

export const gewerbeFaq = {
  heading: "Häufige Fragen zur Gewerbeeinrichtung",
  items: [
    {
      question: "Was kostet eine Gewerbeeinrichtung nach Maß?",
      answer:
        "Pauschale Preise gibt es bei Maßanfertigung nicht, jedes Objekt ist anders. Die Kosten hängen von Branche, Fläche, Material, Stückzahl und Ausstattungsgrad ab. Wir kommen für ein kostenloses Aufmaß vor Ort und erstellen Ihnen danach ein individuelles Angebot.",
    },
    {
      question:
        "Wie läuft eine Gewerbeeinrichtung von der Anfrage bis zur Montage ab?",
      answer:
        "In fünf Schritten: Beratung, kostenloses Aufmaß vor Ort, technische 3D-Planung, Fertigung in Espelkamp und Montage durch unser eigenes Team. Sie haben durchgehend einen Ansprechpartner, von der ersten Idee bis zur Abnahme.",
    },
    {
      question: "Für welche Branchen fertigt Fast Systemmöbel Gewerbeeinrichtungen?",
      answer:
        "Wir richten Büros und Kanzleien, Praxen, Ladenflächen sowie Restaurants, Cafés und Hotels ein. Für Filialisten und Ketten fertigen wir zusätzlich Serienmöbel in jeder Stückzahl. Hotel zählt zur Gastronomie, Kanzleien zur Büroeinrichtung.",
    },
    {
      question:
        "Was ist der Unterschied zwischen maßgefertigter Gewerbeeinrichtung und Serienware?",
      answer:
        "Serienware vom Möbelhandel kommt mit Standardmaßen und passt selten lückenlos in einen Gewerbegrundriss. Maßanfertigung sitzt auf Ihrem Grundriss, Ihrem Arbeitsablauf und Ihrem Corporate Design. Außerdem hält sie intensiver täglicher Nutzung besser stand.",
    },
    {
      question: "Liefert und montiert Fast Systemmöbel auch außerhalb von OWL?",
      answer:
        "Wir montieren im Umkreis von rund 200 Kilometern um Espelkamp mit unserem eigenen Team. Geliefert wird bundesweit. Wie weit wir für Ihr Projekt fahren, klären wir gern direkt im Beratungsgespräch.",
    },
  ] satisfies MnmFaqItem[],
};
