import type { Blurb, TabPanel, CounterStat, PartnerLogo, FaqItem, Testimonial, GalleryCard } from "@/types";

/**
 * Canonical production origin (no trailing slash). Single source for canonical
 * URLs, OpenGraph, sitemap, robots and JSON-LD.
 */
export const SITE_URL = "https://www.fast-systemmoebel.de";

export const CTA = { label: "Möbelplaner", href: "https://moebelplaner.fast-systemmoebel.de/" };

export const HERO_INTRO = "Handgemachte Möbel erzählen unsere Geschichten. Nicht von Maschinen, sondern von Menschen, die Liebe investiert haben.";
export const HERO_BODY = "Bei Fast entsteht jedes Stück in echter Handarbeit. Individuell, funktional, langlebig. Hier ist Standard fehl am Platz.";

export const DISCOVER_BLURBS: Blurb[] = [
  {
    title: "Materialauswahl",
    description: "Eiche, Nussbaum, Linoleum, Stahl. Kombinierte Materialien, um Ihren Charakter wiederzuspiegeln. Damit Sie sich wohlfühlen.",
    icon: "/icons/interior-design-black-icons-10.svg",
  },
  {
    title: "Langlebiges Design",
    description: "Langlebigkeit ist das ehrlichste Nachhaltigkeitsversprechen. Unsere Möbel halten und sind reparabel statt ersetzbar.",
    icon: "/icons/interior-design-black-icons-21.svg",
  },
  {
    title: "Intuitiv",
    description: "Wir planen so, dass sich Räume intuitiv anfühlen – nicht, als müsste man sich ihnen anpassen.",
    icon: "/icons/interior-design-black-icons-20.svg",
  },
  {
    title: "Kulturell frei",
    description: "Jedes Projekt bekommt seine eigene Seele. Durch Ihre Vorstellung und unsere Expertise entstehen bei uns täglich Meisterwerke.",
    icon: "/icons/interior-design-black-icons-07.svg",
  },
];

export const HOTSPOTS = [
  { x: 32, y: 58, title: "Die Arbeitsplatte aus Ihren Vorstellungen", body: "Durchgehende Fläche, fugenarm, robust, visuell ruhig." },
  { x: 56, y: 38, title: "Einbaugeräte", body: "Wir wissen, dass Sie welche brauchen. Aber was, wenn diese bereits perfekt integriert sind?" },
  { x: 78, y: 70, title: "Stauraum", body: "Maximale Nutzung bis zur Decke, kein verlorener Raum." },
];

export const QUALITY_IMAGES = [
  "/images/2025/11/DSC_9747.jpg",
  "/images/2025/11/ThabarSebastian_kueche2.jpeg",
  "/images/2025/11/90d42e7b-fa9d-4a8d-a60e-ca1c5bf55cb3.jpg",
];

export const PARALLAX_BG = "/images/2025/11/IMG_2673-scaled.jpg";

export const HANDWERK_STATS: CounterStat[] = [
  { value: "25", suffix: "+", label: "Erfahrung in Maßanfertigung und Möbelbau" },
  { value: "4000", suffix: "+", label: "realisierte Wohn- und Geschäftsräume in OWL" },
  { value: "12", suffix: "+", label: "Designer, Tischler und Planer mit Leidenschaft" },
];

export const HANDWERK_TABS: TabPanel[] = [
  {
    title: "Farben",
    background: "/images/2025/11/IMG_9387-scaled.jpg",
    cards: [
      { title: "Materialharmonie", description: "Wir kombinieren Holz, Lack und Stoff so, dass Farben wirken, ohne zu dominieren.", icon: "/icons/interior-design-black-icons-14.svg" },
      { title: "Stimmungsplanung", description: "Farbkonzepte entstehen bei uns aus Raumlicht und Nutzung – nicht aus dem Zufall.", icon: "/icons/interior-design-black-icons-18.svg" },
      { title: "Oberflächenveredelung", description: "Lack, Öl oder Furnier – jede Oberfläche bekommt die Behandlung, die ihren Charakter stärkt.", icon: "/icons/interior-design-black-icons-20.svg" },
    ],
  },
  {
    title: "Möbel",
    background: "/images/2025/11/DSC_9938.jpg",
    cards: [
      { title: "Individuell gefertigt", description: "Jedes Möbelstück wird individuell entworfen – abgestimmt auf Stil, Raum und Nutzung.", icon: "/icons/interior-design-black-icons-23.svg" },
      { title: "Materialehrlichkeit", description: "Wir verwenden Holz, Metall und Glas in ehrlicher Verarbeitung – ohne Kompromisse bei Qualität.", icon: "/icons/interior-design-black-icons-08.svg" },
      { title: "Zeitlose Geborgenheit", description: "Unsere Designs überdauern Moden. Was bleibt, ist Handwerk, das jeden Tag Freude macht.", icon: "/icons/interior-design-black-icons-26.svg" },
    ],
  },
  {
    title: "Licht",
    background: "/images/2025/11/DSC_9965.jpg",
    cards: [
      { title: "Integrierte Beleuchtung", description: "Licht wird bei uns Teil des Möbels – nicht nachträgliches Accessoire.", icon: "/icons/interior-design-black-icons-07.svg" },
      { title: "Stimmung & Fokus", description: "Ob Akzent oder Arbeitslicht: Wir planen Lichtzonen nach Nutzung und Atmosphäre.", icon: "/icons/interior-design-black-icons-15.svg" },
      { title: "Energieeffizienz", description: "Effiziente Systeme sparen Strom, ohne auf Wirkung zu verzichten.", icon: "/icons/interior-design-black-icons-23.svg" },
    ],
  },
  {
    title: "Räume",
    background: "/images/2025/11/WhatsApp-Bild-2025-01-16-um-12.34.29_b25a14a5.jpg",
    cards: [
      { title: "Beständige Ästhetik", description: "Möbel für Hotellerie und Gastronomie, die täglicher Beanspruchung standhalten.", icon: "/icons/interior-design-black-icons-21.svg" },
      { title: "Markenidentität im Raum", description: "Wir übersetzen Markencharakter in Form, Farbe und Material.", icon: "/icons/interior-design-black-icons-20.svg" },
      { title: "Gästeführung & Atmosphäre", description: "Räume, die Orientierung geben und zum Verweilen einladen – vom Empfang bis zum Rückzugsort.", icon: "/icons/interior-design-black-icons-08.svg" },
    ],
  },
  {
    title: "Technologie",
    background: "/images/2025/11/DSC_9843.jpg",
    cards: [
      { title: "Verborgene Systeme", description: "Kabel, Technik, Steuerung – elegant integriert statt sichtbar montiert.", icon: "/icons/interior-design-black-icons-22.svg" },
      { title: "Smart-Home-Kompatibilität", description: "Unsere Möbel lassen sich mit modernen Smart-Home-Systemen koppeln – von Beleuchtung bis Entertainment.", icon: "/icons/interior-design-black-icons-15.svg" },
      { title: "Nachhaltige Effizienz", description: "Technologie, die Komfort steigert und Ressourcen spart.", icon: "/icons/interior-design-black-icons-01.svg" },
    ],
  },
  {
    title: "Planung",
    background: "/images/2025/11/20230814_155316228_iOS-scaled.jpg",
    cards: [
      { title: "Fluss & Funktion", description: "Wir planen Wege, Blickachsen und Stauraum so, dass Räume sich intuitiv anfühlen.", icon: "/icons/interior-design-black-icons-23.svg" },
      { title: "Klare Zonen", description: "Kochen, Arbeiten, Wohnen – wir schaffen klare Übergänge, ohne den offenen Charakter zu verlieren.", icon: "/icons/interior-design-black-icons-09.svg" },
      { title: "Modulares Denken", description: "Unsere Möbel wachsen mit – erweiterbar, neu kombinierbar, zukunftssicher.", icon: "/icons/interior-design-black-icons-12.svg" },
    ],
  },
  {
    title: "Gewerbe",
    background: "/images/2025/11/20181220_075204314_iOS-scaled.jpg",
    cards: [
      { title: "Nachhaltiges Bauen", description: "Nachhaltige Materialien und modulare Systeme ermöglichen langlebige Geschäftseinrichtungen, die sich anpassen statt veralten.", icon: "/icons/interior-design-black-icons-06.svg" },
      { title: "Flexible Raumgestaltung", description: "Vom Empfang bis zum Meetingraum – wir gestalten Arbeitswelten, die Kommunikation fördern und Produktivität steigern.", icon: "/icons/interior-design-black-icons-17.svg" },
      { title: "Technische Integration", description: "Auf Wunsch integrieren wir Licht, Medientechnik und Akustik direkt ins Möbeldesign – für ein durchdachtes Gesamterlebnis.", icon: "/icons/interior-design-black-icons-13.svg" },
    ],
  },
  {
    title: "Zuhause",
    background: "/images/2025/11/DSC_9747.jpg",
    cards: [
      { title: "Nachhaltige Lösungen", description: "Unsere Möbel entstehen aus Massivholz und hochwertigen Plattenmaterialien – langlebig, reparabel, durchdacht.", icon: "/icons/interior-design-black-icons-21.svg" },
      { title: "Raumausnutzung", description: "Jeder Raum hat Potenzial – auch kleine. Wir planen millimetergenau, damit Ihre Möbel perfekt passen.", icon: "/icons/interior-design-black-icons-20.svg" },
      { title: "Küchendesign im Wandel", description: "Küchen sind heute Lebensräume. Wir verbinden Ästhetik, Stauraum und Funktion zu einem durchgehenden Möbelkonzept.", icon: "/icons/interior-design-black-icons-03.svg" },
    ],
  },
];

export const RAEUME_CARDS: GalleryCard[] = [
  { title: "Unsere Geschichte", description: "Über uns", image: "/images/2025/11/DSC06340-scaled.jpg" },
  { title: "Rückzugsort", description: "Eine Küche ist kein Ort zum Kochen. Es ist der Mittelpunkt des Hauses – dort, wo Gespräche entstehen, Kinder lachen und das Leben stattfindet.", image: "/images/2025/11/IMG_2673-scaled.jpg" },
  { title: "Wohnumgebung die Wohlfühlen verspricht", description: "Ein maßgefertigter Einbauschrank ist mehr als Stauraum – er ist Ordnung, Ruhe, Struktur.", image: "/images/2025/11/20230829_030744000_iOS.jpg" },
];

export const TESTIMONIAL: Testimonial = {
  rating: 5,
  quote: "Fast hat unsere Kabineneinrichtung so umgesetzt, als hätten sie unsere Gedanken gelesen. Funktional, schön, ehrlich.",
  org: "Arminia Bielefeld",
  name: "Christian Venghaus",
  logo: "/images/2025/11/arminia-wappen-2021.svg",
};

export const PARTNER_LOGOS: PartnerLogo[] = [
  { src: "/images/2026/01/logo.png", alt: "Partner" },
  { src: "/images/2026/01/3838_1702_1_m.jpg", alt: "Partner" },
  { src: "/images/2026/01/cropped-2025-01-15-Logo-WP-StB-scaled-1.jpg", alt: "Steuerberater Partner" },
  { src: "/images/2026/01/monolith-logo.png", alt: "Monolith" },
  { src: "/images/2026/01/lcm-schokoladenmaschinen.svg", alt: "LCM Schokoladenmaschinen" },
  { src: "/images/2026/01/icon07_1.png", alt: "Partner" },
  { src: "/images/2026/01/aufbaugemeinschaft-espelkamp-logo-75-jahre-2048x959-1.png", alt: "Aufbaugemeinschaft Espelkamp" },
  { src: "/images/2026/01/Hell-Blitz-Logo-200px.png.webp", alt: "Hell Blitz" },
  { src: "/images/2026/01/logo-polipol-relaunch.svg", alt: "Polipol" },
  { src: "/images/2026/01/CMC-Logo-100x50-1-2048x962-1.webp", alt: "CMC Engineering" },
  { src: "/images/2026/01/das-mauerwerk_logo.svg", alt: "Das Mauerwerk" },
  { src: "/images/2026/01/logo-elithera-e1724308171765.png", alt: "Elithera" },
  { src: "/images/2026/01/Enderweit-Partner.svg", alt: "Enderweit Partner" },
];

export const FAQS: FaqItem[] = [
  {
    q: "Für wen ist Fast Systemmöbel der richtige Partner?",
    a: "Unsere Kunden sind Menschen und Unternehmen, die Räume gestalten wollen – funktional, ästhetisch, langlebig. Wir arbeiten für Privatkunden, Innenausbauer und Betriebe, die Qualität und Individualität schätzen. Ob Küche, Bad, Garderobe oder Praxis: Wir denken in Lösungen, nicht in Produktkategorien.",
  },
  {
    q: "Warum sollte ich meine Möbel bei Fast fertigen lassen – und nicht im Möbelhaus kaufen?",
    a: "Weil Standardlösungen nie wirklich passen. Bei uns wird jedes Möbel millimetergenau nach Ihren Räumen, Wünschen und Gewohnheiten geplant. Sie bestimmen Materialien, Maße, Aufteilung und Design – wir liefern die handwerkliche Perfektion dazu. Statt Kompromisse zu machen, bekommen Sie langlebige Möbel, die wirken, als wären sie schon immer Teil Ihres Hauses gewesen.",
  },
  {
    q: "Was kostet ein Möbel nach Maß – lohnt sich das überhaupt?",
    a: "Mehr, als man denkt. Weniger, als man glaubt. Der Preis richtet sich nach Größe, Material und Aufwand. Doch im Vergleich zu Serienmöbeln bekommen Sie Qualität, die Jahrzehnte hält – keine Wegwerfware. Unsere Planung ist effizient, unsere Fertigung präzise. So entsteht Wert, der bleibt: ein Möbelstück, das exakt Ihren Raum nutzt und kein Millimeter verschenkt.",
  },
  {
    q: "Wie läuft das Projekt von der ersten Idee bis zur Montage ab?",
    a: "Strukturiert, transparent und persönlich. Nach einem Erstgespräch vor Ort oder im Showroom erstellen wir eine detaillierte Planung mit Materialvorschlägen und Visualisierung. Nach Ihrer Freigabe übernimmt unser Meisterteam die Fertigung. Lieferung und Montage erfolgen durch unsere eigenen Monteure – ohne Subunternehmer, ohne Überraschungen.",
  },
];

export const FOOTER_LINKS = {
  links: [
    { label: "Home", href: "/" },
    { label: "Leistungen", href: "/moebel-nach-mass/" },
    { label: "Über uns", href: "/ueber-uns/" },
    { label: "Ratgeber", href: "#" },
    { label: "Möbelplaner", href: "https://moebelplaner.fast-systemmoebel.de/" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "/kontakt/" },
  ],
  leistungen: [
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Gewerbe", href: "/gewerbe/" },
    { label: "Möbelplaner", href: "https://moebelplaner.fast-systemmoebel.de/" },
  ],
  einsatzgebiete: [
    { label: "Bielefeld", href: "#" },
    { label: "Espelkamp", href: "#" },
    { label: "Hannover", href: "#" },
    { label: "Minden", href: "#" },
  ],
  rechtliches: [
    { label: "Impressum", href: "/impressum/" },
    { label: "Datenschutz", href: "/datenschutz/" },
    { label: "AGBS", href: "/agb/" },
    { label: "Cookie-Richtlinie (EU)", href: "#" },
  ],
};

export const LOGO_SRC = "/images/2025/11/logo_fast-systemmoebel.svg";
/** White wordmark with yellow accents, for dark backgrounds (scrolled header, footer). */
export const LOGO_ON_DARK_SRC = "/images/2026/04/logo_fast_angepasst-1.svg";
export const FOOTER_LOGO_SRC = "/images/2026/04/logo_fast_angepasst-1.svg";
