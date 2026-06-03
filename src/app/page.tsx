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
