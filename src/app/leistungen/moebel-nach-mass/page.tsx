import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MnmHero } from "@/components/mnm/MnmHero";
import { MnmIntroStats } from "@/components/mnm/MnmIntroStats";
import { ExpandingImageCta } from "@/components/mnm/ExpandingImageCta";
import { MnmProcess } from "@/components/mnm/MnmProcess";
import { MnmWeitereLeistungen } from "@/components/mnm/MnmWeitereLeistungen";
import { MnmTypische } from "@/components/mnm/MnmTypische";
import { MnmWarum } from "@/components/mnm/MnmWarum";
import { MnmGeschichte } from "@/components/mnm/MnmGeschichte";
import { MnmMoebelplaner } from "@/components/mnm/MnmMoebelplaner";
import { MnmTestimonials } from "@/components/mnm/MnmTestimonials";
import { MnmFaq } from "@/components/mnm/MnmFaq";

export const metadata: Metadata = {
  title: "Möbel nach Maß aus Espelkamp: Planung, Fertigung, Montage",
  description:
    "Individuelle Maßmöbel für Küche, Bad, Wohnraum und Homeoffice. Millimetergenau geplant und gefertigt im Meisterbetrieb. Beratung kostenlos.",
  openGraph: {
    title: "Möbel nach Maß aus Espelkamp: Planung, Fertigung, Montage",
    description:
      "Individuelle Maßmöbel für Küche, Bad, Wohnraum und Homeoffice. Millimetergenau geplant und gefertigt im Meisterbetrieb. Beratung kostenlos.",
    locale: "de_DE",
    type: "article",
    siteName: "fast.side-boost.com",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function MoebelNachMassPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MnmHero />
        <MnmIntroStats />

        {/* Maßmöbel expanding CTA — bottom of the intro/stats section (beige) */}
        <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
          <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
            <ExpandingImageCta
              image="/images/2025/11/IMG_6123-scaled.jpg"
              heading="Maßmöbel nach Ihren Vorstellungen"
              linkText="Sprechen Sie mit uns über Ihr Projekt"
              href="/kontakt"
            />
          </div>
        </section>

        <MnmProcess />
        <MnmWeitereLeistungen />
        <MnmTypische />
        <MnmWarum />
        <MnmGeschichte />
        <MnmMoebelplaner />
        <MnmTestimonials />

        {/* Final CTA — bottom of the testimonials section (beige) */}
        <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
          <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
            <ExpandingImageCta
              image="/images/2025/11/DSC_9938.jpg"
              heading="Ihr Raum verdient mehr als Standard."
              linkText="Sprechen Sie mit uns über Ihr Projekt."
              href="/kontakt"
            />
          </div>
        </section>

        <MnmFaq />
      </main>
      <Footer />
    </>
  );
}
