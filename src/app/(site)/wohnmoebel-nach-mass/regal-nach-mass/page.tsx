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
  regHero,
  regIntroStats,
  regVarianten,
  regMasse,
  regMaterial,
  regEinsatz,
  regProcess,
  regKosten,
  regMoebelplaner,
  regCtas,
  regTestimonialsHeading,
  regFaq,
  regJsonLd,
} from "@/lib/content/regal-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Regal nach Maß aus Espelkamp | Fast Systemmöbel",
  description:
    "Regal nach Maß vom Meisterbetrieb in Espelkamp: offenes Regal Wand zu Wand, in Nische, Ecke und bis unter die Decke. Kostenloses Aufmaß, eigene Montage.",
  alternates: { canonical: "/wohnmoebel-nach-mass/regal-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Regal nach Maß aus Espelkamp | Fast Systemmöbel",
    description:
      "Offenes Regal nach Maß vom Meisterbetrieb in Espelkamp. Wand zu Wand, in Nische und Ecke bis unter die Decke geplant, gefertigt und montiert.",
    url: "/wohnmoebel-nach-mass/regal-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function RegalNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(regJsonLd)) }}
      />

      <MnmHero {...regHero} />
      <MnmIntroStats {...regIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...regCtas.intro} />
        </div>
      </section>

      <SegmentCards {...regVarianten} />
      <SpecTable {...regMasse} />
      <UspHighlight {...regMaterial} />
      <SegmentCards {...regEinsatz} />
      <ProcessSteps {...regProcess} />
      <SpecTable {...regKosten} />
      <MnmMoebelplaner {...regMoebelplaner} />
      <TestimonialsSection heading={regTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...regCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {regCtas.phone.label}{" "}
            <a
              href={regCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {regCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={regFaq.heading}
        items={regFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
