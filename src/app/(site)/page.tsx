import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { DiscoverSection } from "@/components/sections/home/DiscoverSection";
import { QualitySection } from "@/components/sections/home/QualitySection";
import { ParallaxQuote } from "@/components/sections/home/ParallaxQuote";
import { HandwerkSection } from "@/components/sections/home/HandwerkSection";
import { MoebelplanerSection } from "@/components/sections/home/MoebelplanerSection";
import { RaeumeSection } from "@/components/sections/home/RaeumeSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { Footer } from "@/components/Footer";
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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <HeroSection {...homeHero} />
        <DiscoverSection {...homeDiscover} />
        <QualitySection {...homeQuality} />
        <ParallaxQuote {...homeParallax} />
        <HandwerkSection {...homeHandwerk} />
        <MoebelplanerSection {...homeMoebelplaner} />
        <RaeumeSection {...homeRaeume} />
        <TestimonialsSection {...homeTestimonials} />
        <FaqSection {...homeFaq} />
      </main>
      <Footer />
    </>
  );
}
