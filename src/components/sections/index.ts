/**
 * Section library — single import surface.
 *
 * Sections are grouped by audience: `home/*`, `privat/*`, `shared/*`. The
 * `_shared/*` primitives (Section, Container, design tokens) support composing
 * new pages from these sections. See `src/lib/sections/registry.ts` for the
 * use-case + category metadata and `docs/sections/CATALOG.md` for the catalog.
 */

// Shared layout primitives + design tokens
export { Section, Container, fastColors, fastFonts, fastContainer } from "./_shared";

// Home sections
export { HeroSection } from "./home/HeroSection";
export { DiscoverSection } from "./home/DiscoverSection";
export { QualitySection } from "./home/QualitySection";
export { ParallaxQuote } from "./home/ParallaxQuote";
export { HandwerkSection } from "./home/HandwerkSection";
export { MoebelplanerSection } from "./home/MoebelplanerSection";
export { RaeumeSection } from "./home/RaeumeSection";
export { TestimonialsSection } from "./home/TestimonialsSection";
export { FaqSection } from "./home/FaqSection";

// Privat (möbel-nach-mass template) sections
export { MnmHero } from "./privat/MnmHero";
export { MnmIntroStats } from "./privat/MnmIntroStats";
export { MnmProcess } from "./privat/MnmProcess";
export { MnmWeitereLeistungen } from "./privat/MnmWeitereLeistungen";
export { MnmTypische } from "./privat/MnmTypische";
export { MnmWarum } from "./privat/MnmWarum";
export { MnmGeschichte } from "./privat/MnmGeschichte";
export { MnmMoebelplaner } from "./privat/MnmMoebelplaner";
export { MnmTestimonials } from "./privat/MnmTestimonials";
export { MnmFaq } from "./privat/MnmFaq";

// Cross-audience shared sections
export { ExpandingImageCta } from "./shared/ExpandingImageCta";
