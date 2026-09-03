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
  klHero,
  klIntroStats,
  klVarianten,
  klMasse,
  klMaterial,
  klAusstattung,
  klProcess,
  klKosten,
  klMoebelplaner,
  klCtas,
  klTestimonialsHeading,
  klFaq,
  klJsonLd,
} from "@/lib/content/kleiderschrank-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Kleiderschrank nach Maß aus Espelkamp | Fast Systemmöbel",
  description:
    "Kleiderschrank nach Maß vom Meisterbetrieb in Espelkamp: raumhoch Wand zu Wand, Dreh- oder Schiebetür, Innenausstattung nach Wunsch. Kostenloses Aufmaß.",
  alternates: { canonical: "/einbauschraenke-nach-mass/kleiderschrank-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Kleiderschrank nach Maß aus Espelkamp | Fast Systemmöbel",
    description:
      "Kleiderschrank nach Maß vom Meisterbetrieb in Espelkamp. Raumhoch Wand zu Wand, mit individueller Innenausstattung geplant, gefertigt und montiert.",
    url: "/einbauschraenke-nach-mass/kleiderschrank-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function KleiderschrankNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(klJsonLd)) }}
      />

      <MnmHero {...klHero} />
      <MnmIntroStats {...klIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...klCtas.intro} />
        </div>
      </section>

      <SegmentCards {...klVarianten} />
      <SpecTable {...klMasse} />
      <UspHighlight {...klMaterial} />
      <SegmentCards {...klAusstattung} />
      <ProcessSteps {...klProcess} />
      <SpecTable {...klKosten} />
      <MnmMoebelplaner {...klMoebelplaner} />
      <TestimonialsSection heading={klTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...klCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {klCtas.phone.label}{" "}
            <a
              href={klCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {klCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={klFaq.heading}
        items={klFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
