import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DiscoverSection } from "@/components/DiscoverSection";
import { QualitySection } from "@/components/QualitySection";
import { ParallaxQuote } from "@/components/ParallaxQuote";
import { HandwerkSection } from "@/components/HandwerkSection";
import { MoebelplanerSection } from "@/components/MoebelplanerSection";
import { RaeumeSection } from "@/components/RaeumeSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <DiscoverSection />
        <QualitySection />
        <ParallaxQuote />
        <HandwerkSection />
        <MoebelplanerSection />
        <RaeumeSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
