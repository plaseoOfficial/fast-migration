import { HeroSection } from "@/components/sections/home/HeroSection";
import { DiscoverSection } from "@/components/sections/home/DiscoverSection";
import { OpeningOverlap } from "@/components/scroll/OpeningOverlap";
import { BereicheSection } from "@/components/sections/home/BereicheSection";
import { QualitySection } from "@/components/sections/home/QualitySection";
import { ParallaxQuote } from "@/components/sections/home/ParallaxQuote";
import { HandwerkSection } from "@/components/sections/home/HandwerkSection";
import { MoebelplanerSection } from "@/components/sections/home/MoebelplanerSection";
import { RaeumeSection } from "@/components/sections/home/RaeumeSection";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/home/FaqSection";
import {
  homeHero,
  homeDiscover,
  homeBereiche,
  homeQuality,
  homeParallax,
  homeHandwerk,
  homeMoebelplaner,
  homeRaeume,
  homeTestimonials,
  homeFaq,
} from "@/lib/content/home";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Signature cross-section moment: the hero pins and recedes while
          Discover slides up and over it. See OpeningOverlap. */}
      <OpeningOverlap>
        <HeroSection {...homeHero} />
        <DiscoverSection {...homeDiscover} />
      </OpeningOverlap>
      <BereicheSection {...homeBereiche} />
      <QualitySection {...homeQuality} />
      <ParallaxQuote {...homeParallax} />
      <HandwerkSection {...homeHandwerk} />
      <MoebelplanerSection {...homeMoebelplaner} />
      <RaeumeSection {...homeRaeume} />
      <TestimonialsSection heading={homeTestimonials.heading} />
      <FaqSection {...homeFaq} />
    </main>
  );
}
