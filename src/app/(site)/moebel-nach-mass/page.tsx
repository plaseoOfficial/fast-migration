import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { MnmProcess } from "@/components/sections/privat/MnmProcess";
import { MnmWeitereLeistungen } from "@/components/sections/privat/MnmWeitereLeistungen";
import { MnmTypische } from "@/components/sections/privat/MnmTypische";
import { MnmWarum } from "@/components/sections/privat/MnmWarum";
import { MnmGeschichte } from "@/components/sections/privat/MnmGeschichte";
import { MnmMoebelplaner } from "@/components/sections/privat/MnmMoebelplaner";
import { ExpandingImageCta } from "@/components/sections/shared/ExpandingImageCta";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  mnmHero,
  mnmIntroStats,
  mnmProcess,
  mnmTypische,
  mnmWarum,
  mnmGeschichte,
  mnmCtas,
  mnmTestimonialsHeading,
  mnmFaq,
  mnmWeitereCards,
} from "@/lib/content/moebel-nach-mass";

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
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function MoebelNachMassPage() {
  return (
    <PrivatPageLayout>
      <MnmHero {...mnmHero} />
      <MnmIntroStats {...mnmIntroStats} />

      {/* Maßmöbel expanding CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...mnmCtas.intro} />
        </div>
      </section>

      <MnmProcess {...mnmProcess} />
      <MnmWeitereLeistungen cards={mnmWeitereCards} />
      <MnmTypische {...mnmTypische} />
      <MnmWarum {...mnmWarum} />
      <MnmGeschichte {...mnmGeschichte} />
      <MnmMoebelplaner />
      <TestimonialsSection heading={mnmTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...mnmCtas.final} />
        </div>
      </section>

      <FaqSection heading={mnmFaq.heading} items={mnmFaq.items} />
    </PrivatPageLayout>
  );
}
