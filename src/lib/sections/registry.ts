import { defineSection } from "./define";
import { SECTION_META } from "./catalog-data";
import type { SectionEntry, SectionMeta } from "./types";

// Home sections
import { HeroSection } from "@/components/sections/home/HeroSection";
import { DiscoverSection } from "@/components/sections/home/DiscoverSection";
import { QualitySection } from "@/components/sections/home/QualitySection";
import { ParallaxQuote } from "@/components/sections/home/ParallaxQuote";
import { HandwerkSection } from "@/components/sections/home/HandwerkSection";
import { MoebelplanerSection } from "@/components/sections/home/MoebelplanerSection";
import { RaeumeSection } from "@/components/sections/home/RaeumeSection";
import { TestimonialsSection as HomeTestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { FaqSection as HomeFaqSection } from "@/components/sections/home/FaqSection";

// Privat sections
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { MnmProcess } from "@/components/sections/privat/MnmProcess";
import { MnmWeitereLeistungen } from "@/components/sections/privat/MnmWeitereLeistungen";
import { MnmTypische } from "@/components/sections/privat/MnmTypische";
import { MnmWarum } from "@/components/sections/privat/MnmWarum";
import { MnmGeschichte } from "@/components/sections/privat/MnmGeschichte";
import { MnmMoebelplaner } from "@/components/sections/privat/MnmMoebelplaner";

// Shared sections
import { ServiceHero } from "@/components/sections/shared/ServiceHero";
import { FaqSection as SharedFaqSection } from "@/components/sections/shared/FaqSection";
import { TestimonialsSection as SharedTestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { PartnerCarousel } from "@/components/sections/shared/PartnerCarousel";
import { ExpandingImageCta } from "@/components/sections/shared/ExpandingImageCta";

// Gewerbe sections
import { GewerbeIntroStats } from "@/components/sections/gewerbe/GewerbeIntroStats";
import { GewerbeLadenGastro } from "@/components/sections/gewerbe/GewerbeLadenGastro";
import { GewerbeLeistungen } from "@/components/sections/gewerbe/GewerbeLeistungen";
import { GewerbeWarum } from "@/components/sections/gewerbe/GewerbeWarum";

// Möbelplaner sections
import { MpSchritte } from "@/components/sections/moebelplaner/MpSchritte";
import { MpIntro } from "@/components/sections/moebelplaner/MpIntro";
import { MpProzess } from "@/components/sections/moebelplaner/MpProzess";

// Kontakt sections
import { KontaktPanel } from "@/components/sections/kontakt/KontaktPanel";
import { KontaktStandort } from "@/components/sections/kontakt/KontaktStandort";

// Content / sample props
import {
  homeHero,
  homeDiscover,
  homeQuality,
  homeParallax,
  homeHandwerk,
  homeMoebelplaner,
  homeRaeume,
  homeTestimonials,
  homeFaq,
} from "@/lib/content/home";
import {
  mnmHero,
  mnmIntroStats,
  mnmProcess,
  mnmTypische,
  mnmWarum,
  mnmGeschichte,
} from "@/lib/content/moebel-nach-mass";
import {
  serviceHeroSample,
  sharedFaqSample,
  sharedTestimonialsSample,
  expandingCtaSample,
  noProps,
} from "./samples";

function meta(id: string): SectionMeta {
  const found = SECTION_META.find((entry) => entry.id === id);
  if (!found) throw new Error(`Unknown section meta id: ${id}`);
  return found;
}

/**
 * The section library. Each entry pairs catalog metadata (use case + category)
 * with the live component and the sample props used to preview it in `/library`.
 */
export const sectionRegistry: SectionEntry[] = [
  // Home
  defineSection(meta("home-hero"), HeroSection, homeHero),
  defineSection(meta("home-discover"), DiscoverSection, homeDiscover),
  defineSection(meta("home-quality"), QualitySection, homeQuality),
  defineSection(meta("home-parallax"), ParallaxQuote, homeParallax),
  defineSection(meta("home-handwerk"), HandwerkSection, homeHandwerk),
  defineSection(meta("home-planner"), MoebelplanerSection, homeMoebelplaner),
  defineSection(meta("home-raeume"), RaeumeSection, homeRaeume),
  defineSection(meta("home-testimonials"), HomeTestimonialsSection, homeTestimonials),
  defineSection(meta("home-faq"), HomeFaqSection, homeFaq),

  // Privat (möbel-nach-mass template)
  defineSection(meta("privat-hero"), MnmHero, mnmHero),
  defineSection(meta("privat-intro-stats"), MnmIntroStats, mnmIntroStats),
  defineSection(meta("privat-process"), MnmProcess, mnmProcess),
  defineSection(meta("privat-weitere-leistungen"), MnmWeitereLeistungen, noProps),
  defineSection(meta("privat-typische"), MnmTypische, mnmTypische),
  defineSection(meta("privat-warum"), MnmWarum, mnmWarum),
  defineSection(meta("privat-geschichte"), MnmGeschichte, mnmGeschichte),
  defineSection(meta("privat-planner-cta"), MnmMoebelplaner, noProps),

  // Shared
  defineSection(meta("shared-service-hero"), ServiceHero, serviceHeroSample),
  defineSection(meta("shared-faq"), SharedFaqSection, sharedFaqSample),
  defineSection(meta("shared-testimonials"), SharedTestimonialsSection, sharedTestimonialsSample),
  defineSection(meta("shared-partner-carousel"), PartnerCarousel, noProps),
  defineSection(meta("shared-image-cta"), ExpandingImageCta, expandingCtaSample),

  // Gewerbe
  defineSection(meta("gewerbe-intro-stats"), GewerbeIntroStats, noProps),
  defineSection(meta("gewerbe-laden-gastro"), GewerbeLadenGastro, noProps),
  defineSection(meta("gewerbe-leistungen"), GewerbeLeistungen, noProps),
  defineSection(meta("gewerbe-warum"), GewerbeWarum, noProps),

  // Möbelplaner
  defineSection(meta("mp-schritte"), MpSchritte, noProps),
  defineSection(meta("mp-intro"), MpIntro, noProps),
  defineSection(meta("mp-prozess"), MpProzess, noProps),

  // Kontakt
  defineSection(meta("kontakt-panel"), KontaktPanel, noProps),
  defineSection(meta("kontakt-standort"), KontaktStandort, noProps),
];
