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
  garHero,
  garIntroStats,
  garElemente,
  garMasse,
  garRaeume,
  garMaterial,
  garProcess,
  garKosten,
  garMoebelplaner,
  garCtas,
  garTestimonialsHeading,
  garFaq,
  garJsonLd,
} from "@/lib/content/garderobe-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Garderobe nach Maß aus Espelkamp | Fast Systemmöbel",
  description:
    "Garderobe nach Maß vom Meisterbetrieb in Espelkamp: Schrank, Sitzbank und Spiegel für den Flur, millimetergenau geplant. Kostenloses Aufmaß, eigene Montage.",
  alternates: { canonical: "/einbauschraenke-nach-mass/garderobe-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Garderobe nach Maß aus Espelkamp | Fast Systemmöbel",
    description:
      "Garderobe nach Maß vom Meisterbetrieb in Espelkamp. Schrank, Sitzbank und Spiegel für den Flur aus einer Hand geplant, gefertigt und montiert.",
    url: "/einbauschraenke-nach-mass/garderobe-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function GarderobeNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(garJsonLd)) }}
      />

      <MnmHero {...garHero} />
      <MnmIntroStats {...garIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...garCtas.intro} />
        </div>
      </section>

      <SegmentCards {...garElemente} />
      <SpecTable {...garMasse} />
      <SegmentCards {...garRaeume} />
      <UspHighlight {...garMaterial} />
      <ProcessSteps {...garProcess} />
      <SpecTable {...garKosten} />
      <MnmMoebelplaner {...garMoebelplaner} />
      <TestimonialsSection heading={garTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...garCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {garCtas.phone.label}{" "}
            <a
              href={garCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {garCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={garFaq.heading}
        items={garFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
