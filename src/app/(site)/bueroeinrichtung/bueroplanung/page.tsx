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
  bpHero,
  bpIntroStats,
  bpDefinition,
  bpAnlaesse,
  bpProcess,
  bpFlaechen,
  bpZonen,
  bpThemen,
  bpKosten,
  bpMoebelplaner,
  bpCtas,
  bpTestimonialsHeading,
  bpFaq,
  bpJsonLd,
} from "@/lib/content/bueroplanung";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Büroplanung nach Maß aus Espelkamp | Fast Systemmöbel",
  description:
    "Büroplanung vom Meisterbetrieb in Espelkamp: Flächen, Zonen und Arbeitsplätze geplant, gefertigt und montiert aus einer Hand. Kostenloses Aufmaß vor Ort.",
  alternates: { canonical: "/bueroeinrichtung/bueroplanung/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Büroplanung nach Maß aus Espelkamp | Fast Systemmöbel",
    description:
      "Büro planen lassen vom Meisterbetrieb in Espelkamp: Flächen, Zonen und Arbeitsplätze aus einer Hand geplant, gefertigt und montiert.",
    url: "/bueroeinrichtung/bueroplanung/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function BueroplanungPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(bpJsonLd)) }}
      />

      <MnmHero {...bpHero} />
      <MnmIntroStats {...bpIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...bpCtas.intro} />
        </div>
      </section>

      <UspHighlight {...bpDefinition} />
      <SegmentCards {...bpAnlaesse} />
      <ProcessSteps {...bpProcess} />
      <SpecTable {...bpFlaechen} />
      <SegmentCards {...bpZonen} />
      <UspHighlight {...bpThemen} imageLeft />
      <SpecTable {...bpKosten} />
      <MnmMoebelplaner {...bpMoebelplaner} />
      <TestimonialsSection heading={bpTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...bpCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {bpCtas.phone.label}{" "}
            <a
              href={bpCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {bpCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={bpFaq.heading}
        items={bpFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
