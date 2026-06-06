/**
 * Header navigation model — single source of truth for the mega-menu.
 *
 * A leaf with no `href` is a page that is not built yet: it renders greyed and
 * non-clickable with a "bald" badge (we launch clean — no dead links, see
 * docs/seo/internal-linking.md). When the target page ships, add its `href` and
 * the link goes live automatically.
 */

export type NavLeaf = { label: string; href?: string };

export type MegaColumn = { title: string; items: NavLeaf[] };

export type MegaTeaser = {
  image: string;
  heading: string;
  text: string;
  href: string;
  cta: { label: string; href: string };
};

export type NavItem =
  | { label: string; kind: "mega"; columns: MegaColumn[]; teaser: MegaTeaser }
  | { label: string; kind: "dropdown"; items: NavLeaf[] }
  | { label: string; kind: "link"; href: string; highlight?: boolean }
  | { label: string; kind: "cta"; href: string };

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Privat",
    kind: "mega",
    columns: [
      {
        title: "Küchen",
        items: [
          { label: "Küchen nach Maß", href: "/kuechen-nach-mass" },
          { label: "Küchenzeile nach Maß" },
          { label: "L-Küche nach Maß" },
          { label: "Kochinsel nach Maß" },
        ],
      },
      {
        title: "Einbauschränke",
        items: [
          { label: "Einbauschränke nach Maß" },
          { label: "Kleiderschrank nach Maß" },
          { label: "Begehbarer Kleiderschrank" },
          { label: "Garderobe nach Maß" },
        ],
      },
      {
        title: "Bad & Wohnen",
        items: [
          { label: "Badmöbel nach Maß" },
          { label: "Wohnmöbel nach Maß" },
          { label: "Sideboard nach Maß" },
          { label: "TV-Möbel nach Maß" },
        ],
      },
      {
        title: "Hauswirtschaftsraum",
        items: [
          { label: "Hauswirtschaftsraum nach Maß" },
          { label: "Vorratsschrank nach Maß" },
        ],
      },
    ],
    teaser: {
      image: "/images/2025/11/ThabarSebastian_kueche2.jpeg",
      heading: "Möbel nach Maß",
      text: "Vom Meisterbetrieb in Espelkamp – individuell geplant und gefertigt.",
      href: "/moebel-nach-mass",
      cta: { label: "Jetzt planen", href: "https://moebelplaner.fast-systemmoebel.de/" },
    },
  },
  {
    label: "Gewerbe",
    kind: "mega",
    columns: [
      {
        title: "Ladenbau",
        items: [
          { label: "Ladenbau nach Maß", href: "/gewerbe/ladenbau" },
          { label: "Verkaufstheke nach Maß" },
          { label: "Shopkonzept" },
        ],
      },
      {
        title: "Büro",
        items: [
          { label: "Büroeinrichtung", href: "/bueroeinrichtung" },
          { label: "Empfangstheke" },
          { label: "Konferenzräume" },
        ],
      },
      {
        title: "Gastronomie",
        items: [
          { label: "Gastronomieeinrichtung", href: "/gastronomieeinrichtung" },
          { label: "Theken & Bars" },
          { label: "Hotelmöbel" },
        ],
      },
      {
        title: "Serienmöbel & Praxis",
        items: [
          { label: "Serienmöbel", href: "/serienmoebel" },
          { label: "Praxiseinrichtung", href: "/praxiseinrichtung" },
          { label: "Objekteinrichtung" },
        ],
      },
    ],
    teaser: {
      image: "/images/2025/11/DSC_0001.jpg",
      heading: "Gewerbeeinrichtung",
      text: "Funktionale Lösungen für Büro, Praxis, Laden und Gastro.",
      href: "/gewerbe",
      cta: { label: "Projekt anfragen", href: "/kontakt" },
    },
  },
  {
    label: "Ratgeber",
    kind: "mega",
    columns: [
      {
        title: "Planung & Kosten",
        items: [
          { label: "Küche planen" },
          { label: "Kosten & Preise" },
          { label: "Ablauf der Maßanfertigung" },
        ],
      },
      {
        title: "Material & Pflege",
        items: [
          { label: "Holzarten im Vergleich" },
          { label: "Oberflächen & Dekore" },
          { label: "Pflege & Reinigung" },
        ],
      },
    ],
    teaser: {
      image: "/images/2025/11/DSC_9965.jpg",
      heading: "Persönliche Beratung",
      text: "Sie wissen nicht weiter? Wir beraten Sie kostenlos und unverbindlich.",
      href: "/kontakt",
      cta: { label: "Zum Möbelplaner", href: "https://moebelplaner.fast-systemmoebel.de/" },
    },
  },
  { label: "Möbelplaner", kind: "link", href: "https://moebelplaner.fast-systemmoebel.de/", highlight: true },
  {
    label: "Über uns",
    kind: "dropdown",
    items: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Team" },
      { label: "Referenzen" },
      { label: "Ablauf der Maßanfertigung" },
      { label: "Liefergebiet & Montage" },
      { label: "FAQ" },
    ],
  },
  { label: "Kontakt", kind: "cta", href: "/kontakt" },
];
