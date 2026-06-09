/**
 * Content for `/referenzen/` — the reference hub (aggregator).
 *
 * The page bundles realised projects from both pillars (Privat "Möbel nach Maß"
 * and Gewerbe/Objekt) as a filterable image mosaic (ItemList/CollectionPage).
 * Each project tile links to the matching cluster page today; once individual
 * project detail pages exist (e.g. `/gewerbe/ladenbau/referenzen/...`) the `href`
 * is repointed there and the project is additionally embedded as a teaser block
 * on that cluster page.
 *
 * IMAGES: every photo below was visually verified to actually depict the project
 * it is labelled as (people/team photos are deliberately excluded). Categories
 * are limited to the ones we can back with real photos — Gastronomie and Praxis
 * are intentionally omitted until genuine project photos exist (no faking).
 *
 * Internal links (silo-neutral brand page, so it may link into both pillars):
 *   /moebel-nach-mass/, /kuechen-nach-mass/  (Privat)
 *   /bueroeinrichtung/, /gewerbe/ladenbau/, /serienmoebel/  (Gewerbe/Objekt)
 *   /kontakt/ (conversion), /moebelplaner/ (conversion)
 */
import type { ReferenzCategory, ReferenzProject } from "@/components/sections/shared/ReferenzenGrid";
import type { ReferenzHeroImage } from "@/components/sections/shared/ReferenzenHero";

export const PAGE_PATH = "/referenzen/";

export const referenzenHero = {
  title: "Unsere Projekte – privat und gewerblich",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Referenzen" },
  ],
  intro:
    "Über 25 Jahre Maßanfertigung, gebündelt an einem Ort: realisierte Küchen, Wohnmöbel, Büro- und Objekteinrichtungen aus unserer Werkstatt in Espelkamp. Jedes Projekt zeigt, wie aus Planung, Handwerk und Montage ein fertiger Raum wird.",
  // Collage of real, verified projects across both pillars (mobile 2×2, desktop strip).
  images: [
    { src: "/images/2025/11/ThabarSebastian_kueche2.jpeg", alt: "Offene Küche nach Maß mit Kochinsel" },
    { src: "/images/2025/11/DSC_9814.jpg", alt: "Sideboard nach Maß in Betonoptik" },
    { src: "/images/2025/11/DSC_9747.jpg", alt: "Konferenzraum mit Tisch nach Maß" },
    { src: "/images/2025/11/DSC_0001.jpg", alt: "Büromöbel nach Maß am Fenster" },
  ] satisfies ReferenzHeroImage[],
};

export const referenzenGrid = {
  eyebrow: "REFERENZEN AUS WERKSTATT UND OBJEKT",
  heading: "Ausgewählte Projekte – privat und gewerblich",
  leadParagraphs: [
    "Wir fertigen für zwei Welten: maßgefertigte Möbel für Zuhause und komplette Einrichtungen für Büro, Ladenbau und Objekt. Diese Referenzen bündeln Projekte aus beiden Bereichen – vom ersten Aufmaß bis zur montierten Lösung vor Ort.",
    "Filtern Sie nach Bereich und öffnen Sie ein Projekt, das Ihrem Vorhaben ähnelt. Im jeweiligen Leistungsbereich finden Sie weitere Beispiele, technische Details und den konkreten Ablauf.",
  ],
  categories: [
    { key: "all", label: "Übersicht" },
    { key: "kuechen", label: "Küchen" },
    { key: "moebel", label: "Möbel nach Maß" },
    { key: "buero", label: "Büro" },
    { key: "ladenbau", label: "Ladenbau" },
    { key: "serie", label: "Serie" },
  ] satisfies ReferenzCategory[],
  projects: [
    {
      image: "/images/2025/11/ThabarSebastian_kueche2.jpeg",
      imageAlt: "Offene Küche nach Maß mit Kochinsel und grifflosen Fronten",
      category: "Küchen nach Maß",
      categoryKey: "kuechen",
      title: "Offene Wohnküche mit Kochinsel",
      meta: "Privat · Küche",
      description:
        "Grifflose Fronten, eine freistehende Kochinsel und zentimetergenau eingepasster Stauraum bis unter die Decke – als ein durchgehendes Wohnkonzept geplant, gefertigt und montiert.",
      href: "/kuechen-nach-mass/",
    },
    {
      image: "/images/2026/05/variante_1778229163946_1-scaled.jpg",
      imageAlt: "Grifflose Küche nach Maß mit beleuchteter Holzdecke",
      category: "Küchen nach Maß",
      categoryKey: "kuechen",
      title: "Grifflose Küche mit Holzdecke",
      meta: "Privat · Küche",
      description:
        "Ruhige graue Fronten, eine durchgehende Arbeitsplatte und eine hinterleuchtete Holzdecke setzen die Küche in Szene. Geräte sind flächenbündig integriert.",
      href: "/kuechen-nach-mass/",
    },
    {
      image: "/images/2025/11/DSC_9814.jpg",
      imageAlt: "Schwebendes Sideboard nach Maß in Betonoptik in einem Büro",
      category: "Büroeinrichtung",
      categoryKey: "buero",
      title: "Sideboard in Betonoptik",
      meta: "Gewerbe · Büro",
      description:
        "Ein schwebendes Sideboard in Betonoptik mit dunkler Stirnseite – als ruhiger Stauraum im Büro, exakt auf die Wand und den Raum abgestimmt.",
      href: "/bueroeinrichtung/",
    },
    {
      image: "/images/2025/11/20161103_150622294_iOS-scaled.jpg",
      imageAlt: "Maßgefertigter Einbauschrank mit offenen Fächern in Anthrazit",
      category: "Möbel nach Maß",
      categoryKey: "moebel",
      title: "Einbauschrank mit offenen Fächern",
      meta: "Privat · Schlafzimmer",
      description:
        "Ein raumhoher Einbauschrank in Anthrazit verbindet geschlossene Flächen mit offenen Fächern und Schubladen – passgenau von Wand zu Wand gebaut.",
      href: "/moebel-nach-mass/",
    },
    {
      image: "/images/2025/11/DSC_9747.jpg",
      imageAlt: "Konferenzraum mit großem Tisch nach Maß und schwarzen Stühlen",
      category: "Büroeinrichtung",
      categoryKey: "buero",
      title: "Konferenzraum mit Tisch nach Maß",
      meta: "Gewerbe · Büro",
      description:
        "Ein großer Konferenztisch aus Holz, dazu Sideboard und Medienwand – ein repräsentativer Besprechungsraum, abgestimmt auf den Büroalltag.",
      href: "/bueroeinrichtung/",
    },
    {
      image: "/images/2025/11/DSC_0001.jpg",
      imageAlt: "Arbeitsplatz mit Schreibtisch und Stauraum-Korpus am Fenster",
      category: "Büroeinrichtung",
      categoryKey: "buero",
      title: "Arbeitsplatz & Stauraum im Büro",
      meta: "Gewerbe · Büro",
      description:
        "Schreibtisch und Stauraum-Korpus als Einheit direkt am Fenster – funktionale Büromöbel nach Maß mit klaren, robusten Oberflächen.",
      href: "/bueroeinrichtung/",
    },
    {
      image: "/images/2025/11/WhatsApp-Bild-2025-01-16-um-12.34.29_b25a14a5.jpg",
      imageAlt: "Obst- und Gemüseabteilung im MixMarkt Espelkamp mit Holzlamellenwand",
      category: "Ladenbau",
      categoryKey: "ladenbau",
      title: "Ladeneinrichtung MixMarkt Espelkamp",
      meta: "Gewerbe · Ladenbau",
      description:
        "Komplette Ladeneinrichtung für den MixMarkt Espelkamp – von der Holzlamellenwand über die beleuchtete Obst- und Gemüseabteilung bis zu den Warenregalen, geplant und montiert aus einer Hand.",
      href: "/gewerbe/ladenbau/",
    },
    {
      image: "/images/2026/01/csm_Kabine_6550b3ca43.jpg",
      imageAlt: "Umkleidekabine für Arminia Bielefeld mit Sitzbänken und Ablagen",
      category: "Serienmöbel",
      categoryKey: "serie",
      title: "Umkleidekabinen für Arminia Bielefeld",
      meta: "Objekt · Arminia Bielefeld",
      description:
        "Für Arminia Bielefeld haben wir den kompletten Innenausbau der Spieler- und Umkleidekabinen übernommen – seriengleiche Kabinen mit Sitzbänken, Haken und Ablagen, gebaut für den täglichen Profibetrieb.",
      href: "/serienmoebel/",
    },
  ] satisfies ReferenzProject[],
};

export const referenzenCtas = {
  final: {
    image: "/images/2025/11/DSC_9934.jpg",
    heading: "Erst planen, dann in der Werkstatt sehen.",
    linkText: "Möbel jetzt online planen",
    href: "/moebelplaner/",
  },
};

export const referenzenTestimonialsHeading = "Was unsere Kunden über ihre Projekte sagen";

export const referenzenFaq = {
  heading: "Häufige Fragen zu unseren Referenzen",
  items: [
    {
      question: "Sind die gezeigten Projekte echte Aufträge?",
      answer:
        "Ja. Alle Referenzen stammen aus realisierten Projekten unserer Werkstatt in Espelkamp – privat wie gewerblich. Aus Rücksicht auf unsere Kunden nennen wir nicht zu jedem Projekt Namen oder genaue Adressen.",
    },
    {
      question: "Kann ich ein ähnliches Möbelstück bekommen?",
      answer:
        "Fast immer. Jedes Projekt ist eine Maßanfertigung und damit ein Ausgangspunkt, kein Katalogartikel. Wir passen Maße, Materialien und Details an Ihren Raum und Ihr Budget an.",
    },
    {
      question: "Arbeiten Sie nur in Espelkamp?",
      answer:
        "Wir fertigen in Espelkamp, montieren im Umkreis von rund 200 km und liefern deutschlandweit. Viele der gezeigten Projekte sind in Ostwestfalen und der weiteren Region entstanden.",
    },
    {
      question: "Wie komme ich von einer Referenz zu meinem eigenen Projekt?",
      answer:
        "Am schnellsten über ein kurzes Gespräch: Sie zeigen uns, was Ihnen gefällt, wir klären Maße, Material und Ablauf. Alternativ planen Sie erste Ideen direkt im Online-Möbelplaner vor.",
    },
  ],
};
