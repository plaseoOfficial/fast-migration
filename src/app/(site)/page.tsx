import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { DiscoverSection } from "@/components/sections/home/DiscoverSection";
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
import { buildHomeJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = buildHomeJsonLd({
  faq: homeFaq.items.map((item) => ({ question: item.q, answer: item.a })),
});

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Structured data: WebSite + Organization + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection {...homeHero} />
      <DiscoverSection {...homeDiscover} />
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
