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
  wuHero,
  wuIntroStats,
  wuMontage,
  wuMasse,
  wuMaterial,
  wuAusstattung,
  wuProcess,
  wuKosten,
  wuMoebelplaner,
  wuCtas,
  wuTestimonialsHeading,
  wuFaq,
  wuJsonLd,
} from "@/lib/content/waschtischunterschrank-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Waschtischunterschrank nach Maß | Fast Systemmöbel",
  description:
    "Waschtischunterschrank nach Maß vom Meisterbetrieb Espelkamp: hängend oder stehend, Auszüge um den Siphon, PU-Kante. Kostenloses Aufmaß vor Ort.",
  alternates: { canonical: "/badmoebel-nach-mass/waschtischunterschrank-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Waschtischunterschrank nach Maß | Fast Systemmöbel",
    description:
      "Waschtischunterschrank nach Maß vom Meisterbetrieb Espelkamp. Hängend oder stehend, Auszüge um den Siphon, feuchtebeständig geplant und montiert.",
    url: "/badmoebel-nach-mass/waschtischunterschrank-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function WaschtischunterschrankNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(wuJsonLd)) }}
      />

      <MnmHero {...wuHero} />
      <MnmIntroStats {...wuIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...wuCtas.intro} />
        </div>
      </section>

      <SegmentCards {...wuMontage} />
      <SpecTable {...wuMasse} />
      <UspHighlight {...wuMaterial} />
      <SegmentCards {...wuAusstattung} />
      <ProcessSteps {...wuProcess} />
      <SpecTable {...wuKosten} />
      <MnmMoebelplaner {...wuMoebelplaner} />
      <TestimonialsSection heading={wuTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...wuCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {wuCtas.phone.label}{" "}
            <a
              href={wuCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {wuCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={wuFaq.heading}
        items={wuFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
