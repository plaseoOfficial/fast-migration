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
  bkHero,
  bkIntroStats,
  bkFormen,
  bkRaumtiefe,
  bkFronten,
  bkMaterial,
  bkZonen,
  bkLicht,
  bkProcess,
  bkKosten,
  bkMoebelplaner,
  bkCtas,
  bkTestimonialsHeading,
  bkFaq,
  bkJsonLd,
} from "@/lib/content/begehbarer-kleiderschrank-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Begehbarer Kleiderschrank nach Maß | Fast Systemmöbel",
  description:
    "Begehbarer Kleiderschrank nach Maß vom Meisterbetrieb in Espelkamp: Ankleide in I-, L- oder U-Form, offen oder mit Fronten. Kostenloses Aufmaß vor Ort.",
  alternates: { canonical: "/einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Begehbarer Kleiderschrank nach Maß | Fast Systemmöbel",
    description:
      "Begehbarer Kleiderschrank nach Maß: Ankleidezimmer in I-, L- oder U-Form, geplant, gefertigt und montiert vom Meisterbetrieb in Espelkamp.",
    url: "/einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function BegehbarerKleiderschrankNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(bkJsonLd)) }}
      />

      <MnmHero {...bkHero} />
      <MnmIntroStats {...bkIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...bkCtas.intro} />
        </div>
      </section>

      <SegmentCards {...bkFormen} />
      <SpecTable {...bkRaumtiefe} />
      <SegmentCards {...bkFronten} />
      <UspHighlight {...bkMaterial} />
      <SegmentCards {...bkZonen} />
      <UspHighlight {...bkLicht} />
      <ProcessSteps {...bkProcess} />
      <SpecTable {...bkKosten} />
      <MnmMoebelplaner {...bkMoebelplaner} />
      <TestimonialsSection heading={bkTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...bkCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {bkCtas.phone.label}{" "}
            <a
              href={bkCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {bkCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={bkFaq.heading}
        items={bkFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
