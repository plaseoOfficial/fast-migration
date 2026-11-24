import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { DiscoverSection } from "@/components/sections/home/DiscoverSection";
import { OpeningOverlap } from "@/components/scroll/OpeningOverlap";
import { BereicheSection } from "@/components/sections/home/BereicheSection";
import { QualitySection } from "@/components/sections/home/QualitySection";
import { ParallaxQuote } from "@/components/sections/home/ParallaxQuote";
import { HandwerkSection } from "@/components/sections/home/HandwerkSection";
import { MoebelplanerSection } from "@/components/sections/home/MoebelplanerSection";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
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
      {/* Anfrageblock, neutrale Fassung: nach dem Handwerks-Beleg. Der große Möbelplaner-Abschnitt darunter bleibt. */}
      <LeistungAnfrage variante="neutral" seite="Startseite" />
      <MoebelplanerSection {...homeMoebelplaner} />
      <RaeumeSection {...homeRaeume} />
      <TestimonialsSection heading={homeTestimonials.heading} />
      <AnfrageStreifen variante="neutral" />
      <FaqSection {...homeFaq} />
    </main>
  );
}
