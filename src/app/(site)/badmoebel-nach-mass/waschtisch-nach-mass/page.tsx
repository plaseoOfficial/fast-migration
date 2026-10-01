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
  wtHero,
  wtIntroStats,
  wtBecken,
  wtMasse,
  wtMaterialVergleich,
  wtMaterial,
  wtRaum,
  wtProcess,
  wtKosten,
  wtMoebelplaner,
  wtCtas,
  wtTestimonialsHeading,
  wtFaq,
  wtJsonLd,
} from "@/lib/content/waschtisch-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Waschtisch nach Maß aus Espelkamp | Fast Systemmöbel",
  description:
    "Waschtischplatte nach Maß vom Meisterbetrieb in Espelkamp: Wand zu Wand, passgenauer Ausschnitt für Ihr Becken, PU-Kante. Kostenloses Aufmaß vor Ort.",
  alternates: { canonical: "/badmoebel-nach-mass/waschtisch-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Waschtisch nach Maß aus Espelkamp | Fast Systemmöbel",
    description:
      "Waschtischplatte nach Maß vom Meisterbetrieb in Espelkamp. Wand zu Wand, passgenau für Ihr Becken geplant, gefertigt und montiert.",
    url: "/badmoebel-nach-mass/waschtisch-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function WaschtischNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(wtJsonLd)) }}
      />

      <MnmHero {...wtHero} />
      <MnmIntroStats {...wtIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...wtCtas.intro} />
        </div>
      </section>

      <SegmentCards {...wtBecken} />
      <SpecTable {...wtMasse} />
      <UspHighlight {...wtMaterial} />
      <SpecTable {...wtMaterialVergleich} />
      <SegmentCards {...wtRaum} />
      <ProcessSteps {...wtProcess} />
      <SpecTable {...wtKosten} />
      <MnmMoebelplaner {...wtMoebelplaner} />
      <TestimonialsSection heading={wtTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...wtCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {wtCtas.phone.label}{" "}
            <a
              href={wtCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {wtCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={wtFaq.heading}
        items={wtFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
