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
    "Als Familienbetrieb in zweiter Generation fertigen wir seit 1996 maßgefertigte Einrichtungen – für Wohnräume, Büros, Praxen, Ladengeschäfte und Gastronomie. Präzise, langlebig und passgenau auf Ihren Raum abgestimmt, geplant und gebaut in unserem Meisterbetrieb in Espelkamp und geliefert bundesweit.",
  blurbs: DISCOVER_BLURBS,
};

export const homeBereiche = {
  eyebrow: "Privat & Gewerbe",
  heading: "Zwei Welten, ein Anspruch: Maßarbeit",
  intro:
    "Vom Zuhause bis zum Unternehmen – Fast plant, fertigt und montiert Einrichtungen, die exakt zu Ihrem Raum passen. Wählen Sie Ihren Bereich und entdecken Sie, was möglich ist.",
  groups: [
    {
      label: "Für Zuhause",
      title: "Möbel nach Maß für Privatkunden",
      body: "Küche, Schrank, Bad und Wohnbereich – durchgängig geplant, in einer Werkstatt gefertigt und vom eigenen Team montiert.",
      cta: { label: "Alle Möbel nach Maß", href: "/moebel-nach-mass/" },
      cards: [
        {
          title: "Küchen nach Maß",
          image: "/images/2026/05/variante_1778229163946_1-scaled.jpg",
          alt: "Küche nach Maß in Grau mit Holzarbeitsplatte",
          href: "/kuechen-nach-mass/",
        },
        {
          title: "Einbauschränke & Ankleiden",
          image: "/images/2025/11/IMG_2772-scaled.jpg",
          alt: "Weißer Einbauschrank entlang eines Flurs",
          href: "/moebel-nach-mass/",
        },
        {
          title: "Badmöbel nach Maß",
          image: "/images/2025/11/IMG_9120-scaled.jpg",
          alt: "Badmöbel nach Maß mit Holz-Waschtisch und Aufsatzbecken",
          href: "/moebel-nach-mass/",
        },
        {
          title: "Wohnen & Sideboards",
          image: "/images/2025/11/DSC_9814.jpg",
          alt: "Maßgefertigtes Sideboard in Betonoptik",
          href: "/moebel-nach-mass/",
        },
      ],
    },
    {
      label: "Für Unternehmen",
      title: "Gewerbe- & Objekteinrichtung",
      body: "Büro, Laden, Gastronomie oder Praxis – funktional geplant, robust gebaut und termintreu umgesetzt, auch in Serie.",
      cta: { label: "Zum Gewerbe-Bereich", href: "/gewerbe/" },
      cards: [
        {
          title: "Büroeinrichtung",
          image: "/images/2025/11/DSC_9747.jpg",
          alt: "Konferenzraum mit Büroeinrichtung nach Maß",
          href: "/bueroeinrichtung/",
        },
        {
          title: "Ladenbau",
          image: "/images/2025/11/WhatsApp-Bild-2025-01-16-um-12.34.29_b25a14a5.jpg",
          alt: "Ladenbau mit Verkaufsregalen im Lebensmittelmarkt",
          href: "/ladenbau/",
        },
        {
          title: "Gastronomie",
          image: "/images/2025/11/DSC_9938.jpg",
          alt: "Gastronomieeinrichtung – Regaldetail mit indirekter Beleuchtung",
          href: "/gastronomieeinrichtung/",
        },
        {
          title: "Praxiseinrichtung",
          image: "/images/2025/11/DSC07156-scaled.jpg",
          alt: "Materialberatung für eine Praxiseinrichtung",
          href: "/praxiseinrichtung/",
        },
      ],
    },
  ],
  footnote: {
    text: "Noch unsicher, wo Ihr Projekt am besten aufgehoben ist?",
    primary: { label: "Online im Möbelplaner starten", href: "/moebelplaner/" },
    secondary: { label: "Kontakt aufnehmen", href: "/kontakt/" },
    trust: { label: "Referenzen ansehen", href: "/referenzen/" },
  },
};

export const homeQuality = {
  headingLines: [
    "Wahre Qualität passt sich",
    "dem Menschen an. Nicht",
    "umgekehrt.",
  ],
  paragraphs: [
    "Ein Tisch, der zu groß oder zu klein ist, ein Regal, das nie ganz passt – kommt Ihnen das bekannt vor? Genau das vermeiden wir. Fast steht für Systemmöbel, die sich an Ihr Leben anpassen – nicht umgekehrt.",
    "Nach einem kostenlosen Aufmaß planen unsere Designer mit Ihnen jedes Detail in 3D – vom ersten Entwurf bis zur letzten Schraube. Gefertigt und montiert wird in einer Hand, von unserem eigenen Team.",
  ],
  images: QUALITY_IMAGES,
};

export const homeParallax = {
  bgImage: PARALLAX_BG,
  heading: "Qualität, die man nicht erklären muss",
  body: "Echtholz, Furnier oder lackierte Front – das Material entscheidet nicht nur über den Look, sondern über die Lebensdauer. Wir setzen auf langlebige Materialien, hochwertige Beschläge und eine Verarbeitung, die man spürt, sobald man eine Schublade öffnet. Alles entsteht in unserer eigenen Werkstatt in Espelkamp.",
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
  eyebrow: "Einfach ausprobieren und visualisieren",
  heading: "Möbel online planen",
  plannerUrl: "https://moebelplaner.fast-systemmoebel.de/",
  ctaLabel: `${CTA.label} in neuem Tab öffnen`,
  ctaHref: CTA.href,
};

export const homeRaeume = {
  heading: "Räume, die Geschichten erzählen",
  subheading: "Starten Sie Ihr Projekt",
  body: "Wir gestalten Möbel, die sich einfügen, ohne sich zu verstecken. Die den Raum tragen, nicht überladen. Und die selbst in 10 Jahren noch wirken, als wären sie gerade eingebaut. Geliefert wird bundesweit – im Umkreis von rund 200 km um Espelkamp montiert unser eigenes Team, von Minden über Bielefeld bis Osnabrück und Hannover.",
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
};

export const homeFaq = {
  eyebrow: "Häufige Fragen",
  heading: "FAQ",
  items: FAQS,
};
