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
  rtMeta,
  rtHero,
  rtIntroStats,
  rtVarianten,
  rtMasse,
  rtMaterial,
  rtZonen,
  rtProcess,
  rtKosten,
  rtMoebelplaner,
  rtCtas,
  rtTestimonialsHeading,
  rtFaq,
  rtJsonLd,
} from "@/lib/content/raumteiler-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: rtMeta.metaTitle,
  description: rtMeta.metaDescription,
  alternates: { canonical: "/wohnmoebel-nach-mass/raumteiler-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: rtMeta.metaTitle,
    description: rtMeta.ogDescription,
    url: "/wohnmoebel-nach-mass/raumteiler-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function RaumteilerNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(rtJsonLd)) }}
      />

      <MnmHero {...rtHero} />
      <MnmIntroStats {...rtIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...rtCtas.intro} />
        </div>
      </section>

      <SegmentCards {...rtVarianten} />
      <SpecTable {...rtMasse} />
      <UspHighlight {...rtMaterial} />
      <SegmentCards {...rtZonen} />
      <ProcessSteps {...rtProcess} />
      <SpecTable {...rtKosten} />
      <MnmMoebelplaner {...rtMoebelplaner} />
      <TestimonialsSection heading={rtTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...rtCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {rtCtas.phone.label}{" "}
            <a
              href={rtCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {rtCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={rtFaq.heading}
        items={rtFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
