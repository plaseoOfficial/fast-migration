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
    kind: "dropdown",
    items: [
      { label: "Möbel nach Maß", href: "/moebel-nach-mass" },
      { label: "Küchen nach Maß", href: "/kuechen-nach-mass" },
    ],
  },
  {
    label: "Gewerbe",
    kind: "mega",
    columns: [
      {
        title: "Einrichtung",
        items: [
          { label: "Gewerbeeinrichtung", href: "/gewerbe" },
          { label: "Büroeinrichtung", href: "/bueroeinrichtung" },
          { label: "Gastronomieeinrichtung", href: "/gastronomieeinrichtung" },
        ],
      },
      {
        title: "Speziallösungen",
        items: [
          { label: "Ladenbau nach Maß", href: "/gewerbe/ladenbau" },
          { label: "Serienmöbel", href: "/serienmoebel" },
          { label: "Praxiseinrichtung", href: "/praxiseinrichtung" },
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
  { label: "Möbelplaner", kind: "link", href: "https://moebelplaner.fast-systemmoebel.de/", highlight: true },
  {
    label: "Über uns",
    kind: "dropdown",
    items: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Referenzen", href: "/referenzen" },
    ],
  },
  { label: "Kontakt", kind: "cta", href: "/kontakt" },
];
