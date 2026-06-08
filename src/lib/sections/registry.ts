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
import { ReferenzenHero } from "@/components/sections/shared/ReferenzenHero";
import { ReferenzenGrid } from "@/components/sections/shared/ReferenzenGrid";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";

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
import { KontaktFormularHero } from "@/components/sections/kontakt/KontaktFormularHero";
import { KontaktPanel } from "@/components/sections/kontakt/KontaktPanel";
import { KontaktStandort } from "@/components/sections/kontakt/KontaktStandort";

// Über uns sections
import { UeberHero } from "@/components/sections/ueber/UeberHero";
import { UeberTimeline } from "@/components/sections/ueber/UeberTimeline";
import { UeberWofuer } from "@/components/sections/ueber/UeberWofuer";
import { UeberLogos } from "@/components/sections/ueber/UeberLogos";
import { UeberValues } from "@/components/sections/ueber/UeberValues";
import { UeberNavCards } from "@/components/sections/ueber/UeberNavCards";
import { UeberFallbeispiel } from "@/components/sections/ueber/UeberFallbeispiel";

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
  referenzenHeroSample,
  referenzenGridSample,
  kontaktFormularHeroSample,
  noProps,
} from "./samples";
import {
  ueberHero,
  ueberTimeline,
  ueberWofuer,
  ueberLogos,
  ueberValues,
  ueberNavCards,
  ueberFallbeispiel,
} from "@/lib/content/ueber-uns";
import {
  gewerbeIntroStats,
  gewerbeLadenGastro,
  gewerbeLeistungen,
  gewerbeWarum,
} from "@/lib/content/gewerbe";
import {
  gastroProcess,
  gastroSegments,
  gastroUsp,
} from "@/lib/content/gastronomieeinrichtung";

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
  defineSection(meta("home-testimonials"), SharedTestimonialsSection, homeTestimonials),
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
  defineSection(meta("shared-referenzen-hero"), ReferenzenHero, referenzenHeroSample),
  defineSection(meta("shared-referenzen-grid"), ReferenzenGrid, referenzenGridSample),
  defineSection(meta("shared-process-steps"), ProcessSteps, gastroProcess),
  defineSection(meta("shared-segment-cards"), SegmentCards, gastroSegments),
  defineSection(meta("shared-usp-highlight"), UspHighlight, gastroUsp),

  // Gewerbe
  defineSection(meta("gewerbe-intro-stats"), GewerbeIntroStats, gewerbeIntroStats),
  defineSection(meta("gewerbe-laden-gastro"), GewerbeLadenGastro, gewerbeLadenGastro),
  defineSection(meta("gewerbe-leistungen"), GewerbeLeistungen, gewerbeLeistungen),
  defineSection(meta("gewerbe-warum"), GewerbeWarum, gewerbeWarum),

  // Möbelplaner
  defineSection(meta("mp-schritte"), MpSchritte, noProps),
  defineSection(meta("mp-intro"), MpIntro, noProps),
  defineSection(meta("mp-prozess"), MpProzess, noProps),

  // Kontakt
  defineSection(meta("kontakt-formular-hero"), KontaktFormularHero, kontaktFormularHeroSample),
  defineSection(meta("kontakt-panel"), KontaktPanel, noProps),
  defineSection(meta("kontakt-standort"), KontaktStandort, noProps),

  // Über uns
  defineSection(meta("ueber-hero"), UeberHero, ueberHero),
  defineSection(meta("ueber-timeline"), UeberTimeline, ueberTimeline),
  defineSection(meta("ueber-wofuer"), UeberWofuer, ueberWofuer),
  defineSection(meta("ueber-logos"), UeberLogos, { logos: ueberLogos }),
  defineSection(meta("ueber-values"), UeberValues, ueberValues),
  defineSection(meta("ueber-nav-cards"), UeberNavCards, { cards: ueberNavCards }),
  defineSection(meta("ueber-fallbeispiel"), UeberFallbeispiel, ueberFallbeispiel),
];
