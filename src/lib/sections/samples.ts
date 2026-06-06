/**
 * Sample props used to render sections in `/library` and to document them in
 * the catalog. Library sections reuse the real page content; the cross-page
 * "shared" sections get representative samples here.
 */
import { mnmCtas, mnmFaq } from "@/lib/content/moebel-nach-mass";
import { referenzenGrid, referenzenHero } from "@/lib/content/referenzen";

export const serviceHeroSample = {
  title: "Gewerbeeinrichtung nach Maß – funktionale Lösungen für jedes Objekt",
  breadcrumb: [
    { label: "fast.side-boost.com", href: "/" },
    { label: "Gewerbeeinrichtung" },
  ],
  bgImage: "/images/2025/11/DSC_0001.jpg",
  intro:
    "Wir entwickeln Gewerbeeinrichtungen, die exakt zu Ihren Abläufen passen. Präzise geplant, in Espelkamp gefertigt und vor Ort montiert.",
  cta: { label: "Zum Möbelplaner", href: "#moebelplaner" },
};

export const sharedFaqSample = {
  heading: mnmFaq.heading,
  items: mnmFaq.items,
};

export const sharedTestimonialsSample = {
  heading: "Was unseren Kunden dazu sagen",
};

export const expandingCtaSample = mnmCtas.final;

export const referenzenHeroSample = {
  title: referenzenHero.title,
  breadcrumb: referenzenHero.breadcrumb,
  images: referenzenHero.images,
  intro: referenzenHero.intro,
};

export const referenzenGridSample = {
  eyebrow: referenzenGrid.eyebrow,
  heading: referenzenGrid.heading,
  leadParagraphs: referenzenGrid.leadParagraphs,
  categories: referenzenGrid.categories,
  projects: referenzenGrid.projects,
};

export const kontaktFormularHeroSample = {
  title: "Kommen Sie mit unseren Experten in Kontakt",
  breadcrumb: [
    { label: "fast.side-boost.com", href: "/" },
    { label: "Kontakt" },
  ],
  bgImage: "/images/2025/11/DSC06206-scaled.jpg",
};

/** Empty props for the prop-less, page-specific sections. */
export const noProps = {} as Record<string, never>;
