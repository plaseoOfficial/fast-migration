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
  bsHero,
  bsIntroStats,
  bsTypen,
  bsMasse,
  bsMaterial,
  bsAusstattung,
  bsProcess,
  bsKosten,
  bsMoebelplaner,
  bsCtas,
  bsTestimonialsHeading,
  bsFaq,
  bsJsonLd,
} from "@/lib/content/badschrank-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Badschrank nach Maß aus Espelkamp | Fast Systemmöbel",
  description:
    "Badschrank nach Maß vom Meisterbetrieb Espelkamp: Hoch-, Hänge- oder Einbauschrank, millimetergenau in die Nische, feuchtebeständig. Kostenloses Aufmaß.",
  alternates: { canonical: "/badmoebel-nach-mass/badschrank-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Badschrank nach Maß aus Espelkamp | Fast Systemmöbel",
    description:
      "Badschrank nach Maß vom Meisterbetrieb in Espelkamp. Hochschrank, Hängeschrank oder Einbauschrank, millimetergenau in die Nische geplant und montiert.",
    url: "/badmoebel-nach-mass/badschrank-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function BadschrankNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(bsJsonLd)) }}
      />

      <MnmHero {...bsHero} />
      <MnmIntroStats {...bsIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...bsCtas.intro} />
        </div>
      </section>

      <SegmentCards {...bsTypen} />
      <SpecTable {...bsMasse} />
      <UspHighlight {...bsMaterial} />
      <SegmentCards {...bsAusstattung} />
      <ProcessSteps {...bsProcess} />
      <SpecTable {...bsKosten} />
      <MnmMoebelplaner {...bsMoebelplaner} />
      <TestimonialsSection heading={bsTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...bsCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {bsCtas.phone.label}{" "}
            <a
              href={bsCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {bsCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={bsFaq.heading}
        items={bsFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
