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
  wmsHero,
  wmsIntroStats,
  wmsCtas,
  wmsBauformen,
  wmsMasse,
  wmsTechnik,
  wmsWarum,
  wmsAusstattung,
  wmsProcess,
  wmsKosten,
  wmsMoebelplaner,
  wmsTestimonialsHeading,
  wmsFaq,
  wmsJsonLd,
} from "@/lib/content/waschmaschinenschrank-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

const TITLE = "Waschmaschinenschrank nach Maß | Fast Systemmöbel";
const DESCRIPTION =
  "Waschmaschinenschrank nach Maß vom Meisterbetrieb Espelkamp: Waschturm oder nebeneinander, um Ihre Geräte gebaut, Lüftung mitgeplant. Kostenloses Aufmaß.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: TITLE,
    description: DESCRIPTION,
    url: "/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function WaschmaschinenschrankNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(wmsJsonLd)) }}
      />

      <MnmHero {...wmsHero} />
      <MnmIntroStats {...wmsIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...wmsCtas.intro} />
        </div>
      </section>

      <SpecTable {...wmsBauformen} />
      <SpecTable {...wmsMasse} />
      <SegmentCards {...wmsTechnik} />
      <UspHighlight {...wmsWarum} />
      <SegmentCards {...wmsAusstattung} />
      <ProcessSteps {...wmsProcess} />
      <SpecTable {...wmsKosten} />
      <MnmMoebelplaner {...wmsMoebelplaner} />
      <TestimonialsSection heading={wmsTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...wmsCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {wmsCtas.phone.label}{" "}
            <a
              href={wmsCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {wmsCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={wmsFaq.heading}
        items={wmsFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
