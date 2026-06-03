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
  kuechenHero,
  kuechenIntroStats,
  kuechenProcess,
  kuechenTypische,
  kuechenWarum,
  kuechenGeschichte,
  kuechenMoebelplaner,
  kuechenCtas,
  kuechenTestimonialsHeading,
  kuechenFaq,
  kuechenJsonLd,
} from "@/lib/content/kuechen-nach-mass";

export const metadata: Metadata = {
  title: "Küchen nach Maß aus Espelkamp: Planung, Fertigung, Montage",
  description:
    "Küchen nach Maß vom Meisterbetrieb in Espelkamp. Zentimetergenau geplant, in eigener Fertigung gebaut, vom eigenen Team montiert. Beratung kostenlos.",
  alternates: { canonical: "/kuechen-nach-mass/" },
  openGraph: {
    title: "Küchen nach Maß aus Espelkamp: Planung, Fertigung, Montage",
    description:
      "Küchen nach Maß vom Meisterbetrieb in Espelkamp. Zentimetergenau geplant, gebaut und montiert.",
    url: "/kuechen-nach-mass/",
    locale: "de_DE",
    type: "article",
    siteName: "fast.side-boost.com",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function KuechenNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kuechenJsonLd) }}
      />

      <MnmHero {...kuechenHero} />
      <MnmIntroStats {...kuechenIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...kuechenCtas.intro} />
        </div>
      </section>

      <MnmProcess {...kuechenProcess} />
      <MnmWeitereLeistungen />
      <MnmTypische {...kuechenTypische} />
      <MnmWarum {...kuechenWarum} />
      <MnmGeschichte {...kuechenGeschichte} />
      <MnmMoebelplaner {...kuechenMoebelplaner} />
      <TestimonialsSection heading={kuechenTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...kuechenCtas.final} />
        </div>
      </section>

      <FaqSection
        heading={kuechenFaq.heading}
        items={kuechenFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt"
      />
    </PrivatPageLayout>
  );
}
