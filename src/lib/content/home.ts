/**
 * Content for the homepage (`/`) sections.
 *
 * Re-uses the shared constants in `src/lib/content.ts` and adds the copy that
 * previously lived inline inside the home section components. The homepage and
 * the `/library` showcase both feed these objects into the (now props-driven)
 * home sections.
 */
import {
  HERO_INTRO,
  HERO_BODY,
  DISCOVER_BLURBS,
  HOTSPOTS,
  QUALITY_IMAGES,
  PARALLAX_BG,
  HANDWERK_STATS,
  HANDWERK_TABS,
  TESTIMONIAL,
  PARTNER_LOGOS,
  FAQS,
  CTA,
} from "@/lib/content";

export const homeHero = {
  bgImage: "/images/2026/05/variante_1778229165731_5-scaled.jpg",
  title: "Fast Systemmöbel",
  intro: HERO_INTRO,
  body: HERO_BODY,
};

export const homeDiscover = {
  eyebrow: "Für Privatkunden, Planer und Gewerbe",
  heading: "Entdecke Fast Systemmöbel",
  kitchenImage: "/images/2026/05/variante_1778229163946_1-scaled.jpg",
  hotspots: HOTSPOTS,
  teamImage: "/images/2025/11/DSC06340-scaled.jpg",
  teamHeading:
    "Fast verbindet Handwerk und Design zu ganzheitlichen Möbelkonzepten.",
  teamBody:
    "Wir realisieren maßgefertigte Einrichtungen für Wohnräume, Büros, Praxen und Gewerbeflächen, die präzise und langlebig sind. Passgenau auf Ihren Raum abgestimmt.",
  blurbs: DISCOVER_BLURBS,
};

export const homeQuality = {
  headingLines: [
    "Wahre Qualität passt sich",
    "dem Menschen an. Nicht",
    "umgekehrt.",
  ],
  paragraphs: [
    "Ein Tisch, der zu groß oder zu klein ist, ein Regal, das nie ganz passt – kommt Ihnen das bekannt vor? Genau das vermeiden wir. Fast steht für Systemmöbel, die sich an Ihr Leben anpassen – nicht umgekehrt.",
    "Unsere Designer planen mit Ihnen jedes Detail: vom ersten Entwurf bis zur letzten Schraube.",
  ],
  images: QUALITY_IMAGES,
};

export const homeParallax = {
  bgImage: PARALLAX_BG,
  heading: "Qualität, die man nicht erklären muss",
  body: "Echtholz, Furnier oder lackierte Front – das Material entscheidet nicht nur über den Look, sondern über die Lebensdauer. Wir setzen auf langlebige Materialien, hochwertige Beschläge und eine Verarbeitung, die man spürt, sobald man eine Schublade öffnet.",
  quote:
    "Viele unserer Kunden kommen Jahre später wieder – nicht, um zu reklamieren. Sondern weil sie sagen: „Das waren die besten Möbel, die wir je hatten.“",
};

export const homeHandwerk = {
  eyebrow: "Über uns",
  headingLines: ["Handwerk mit System,", "Design mit Seele"],
  stats: HANDWERK_STATS,
  tabs: HANDWERK_TABS,
};

export const homeMoebelplaner = {
  eyebrow:
    "Einfach ausprobieren und visualisieren: Machen Sie sich schon heute ein Bild von Ihrer neuen Einrichtung.",
  heading: "Möbel online planen",
  plannerUrl: "https://moebelplaner.fast-systemmoebel.de/",
  ctaLabel: `${CTA.label} in neuem Tab öffnen`,
  ctaHref: CTA.href,
};

export const homeRaeume = {
  heading: "Räume, die Geschichten erzählen",
  subheading: "Starten Sie Ihr Projekt",
  body: "Wir gestalten Möbel, die sich einfügen, ohne sich zu verstecken. Die den Raum tragen, nicht überladen. Und die selbst in 10 Jahren noch wirken, als wären sie gerade eingebaut.",
  topCtaLabel: "Kontakt",
  topCtaHref: "/kontakt/",
  storyImage: "/images/2025/11/DSC06206-scaled.jpg",
  storyHref: "/ueber-uns/",
  storyTitle: "Unsere Geschichte",
  storyCtaLabel: "Über uns",
  kitchenImage: "/images/2025/11/ThabarSebastian_kueche2.jpeg",
  kitchenCaption: "Rückzugsort",
  bathImage: "/images/2025/11/20230829_030744000_iOS.jpg",
  bathCaption: "Wohnumgebung die Wohlfühlen verspricht",
  badge: "Über 4 Tausend Kunden vertrauen Fast Systemmöbel",
};

export const homeTestimonials = {
  heading: "Was Kunden sagen",
  testimonial: TESTIMONIAL,
  logos: PARTNER_LOGOS,
};

export const homeFaq = {
  eyebrow: "Häufige Fragen",
  heading: "FAQ",
  items: FAQS,
  ctaLabel: "Alle Fragen und Antworten",
  ctaHref: "#",
};
