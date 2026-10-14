import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { MnmMoebelplaner } from "@/components/sections/privat/MnmMoebelplaner";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { ExpandingImageCta } from "@/components/sections/shared/ExpandingImageCta";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  wwHero,
  wwIntroStats,
  wwVarianten,
  wwMasse,
  wwTechnik,
  wwAbgrenzung,
  wwProcess,
  wwKosten,
  wwMoebelplaner,
  wwCtas,
  wwTestimonialsHeading,
  wwFaq,
  wwJsonLd,
} from "@/lib/content/wohnwand-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Wohnwand nach Maß aus Espelkamp | Fast Systemmöbel",
  description:
    "Wohnwand nach Maß vom Meisterbetrieb in Espelkamp: raumhoch von Wand zu Wand, mit TV-Nische und Vitrine. Kostenloses Aufmaß, eigene Montage.",
  alternates: { canonical: "/wohnmoebel-nach-mass/wohnwand-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Wohnwand nach Maß aus Espelkamp | Fast Systemmöbel",
    description:
      "Raumhohe Wohnwand nach Maß vom Meisterbetrieb in Espelkamp. Schränke und offene Fächer Wand zu Wand ohne Passleisten, geplant, gefertigt und montiert.",
    url: "/wohnmoebel-nach-mass/wohnwand-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function WohnwandNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(wwJsonLd)) }}
      />

      <MnmHero {...wwHero} />
      <MnmIntroStats {...wwIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...wwCtas.intro} />
        </div>
      </section>

      <SegmentCards {...wwVarianten} />
      <SpecTable {...wwMasse} />
      <UspHighlight {...wwTechnik} />
      <SegmentCards {...wwAbgrenzung} />
      <ProcessSteps {...wwProcess} />
      <SpecTable {...wwKosten} />
      <MnmMoebelplaner {...wwMoebelplaner} />
      <TestimonialsSection heading={wwTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...wwCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {wwCtas.phone.label}{" "}
            <a
              href={wwCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {wwCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={wwFaq.heading}
        items={wwFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
