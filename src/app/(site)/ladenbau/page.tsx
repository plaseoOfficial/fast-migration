import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { MnmWeitereLeistungen } from "@/components/sections/privat/MnmWeitereLeistungen";
import { MnmTypische } from "@/components/sections/privat/MnmTypische";
import { MnmWarum } from "@/components/sections/privat/MnmWarum";
import { MnmGeschichte } from "@/components/sections/privat/MnmGeschichte";
import { MnmMoebelplaner } from "@/components/sections/privat/MnmMoebelplaner";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { ExpandingImageCta } from "@/components/sections/shared/ExpandingImageCta";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { SITE_URL } from "@/lib/content";
import { buildLadenbauJsonLd } from "@/lib/seo/jsonld";
import {
  ladenHero,
  ladenIntroStats,
  ladenSteps,
  ladenWeitereLeistungen,
  ladenTypische,
  ladenSegments,
  ladenWarum,
  ladenUsp,
  ladenVergleich,
  ladenKosten,
  ladenMoebelplaner,
  ladenGeschichte,
  ladenCtas,
  ladenTestimonialsHeading,
  ladenFaq,
} from "@/lib/content/ladenbau";

const PAGE_PATH = "/ladenbau";
const DESCRIPTION =
  "Ladenbau nach Maß vom Meisterbetrieb in Espelkamp: Verkaufstheken, Ladeneinrichtung und Shopkonzepte – geplant, gefertigt und im Umkreis von 200 km montiert.";

export const metadata: Metadata = {
  title: "Ladenbau nach Maß aus Espelkamp: Theke bis Shopkonzept",
  description: DESCRIPTION,
  alternates: { canonical: `${PAGE_PATH}/` },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Ladenbau nach Maß aus Espelkamp: Theke bis Shopkonzept",
    description: DESCRIPTION,
    url: `${PAGE_PATH}/`,
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

const jsonLd = buildLadenbauJsonLd({
  pageUrl: `${SITE_URL}${PAGE_PATH}`,
  name: "Ladenbau nach Maß",
  description: DESCRIPTION,
  breadcrumb: ladenHero.breadcrumb,
  faq: ladenFaq.items,
});

export default function LadenbauPage() {
  return (
    <PrivatPageLayout>
      {/* Structured data: LocalBusiness + Service + BreadcrumbList + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MnmHero {...ladenHero} />
      <MnmIntroStats {...ladenIntroStats} />

      {/* Intro CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...ladenCtas.intro} />
        </div>
      </section>

      <ProcessSteps {...ladenSteps} />
      <MnmWeitereLeistungen cards={ladenWeitereLeistungen.cards} />
      <MnmTypische {...ladenTypische} />
      <SegmentCards {...ladenSegments} />
      <MnmWarum {...ladenWarum} />
      <UspHighlight {...ladenUsp} />
      <SpecTable {...ladenVergleich} />
      <MnmGeschichte {...ladenGeschichte} />
      <SpecTable {...ladenKosten} />
      <MnmMoebelplaner {...ladenMoebelplaner} />
      <TestimonialsSection heading={ladenTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...ladenCtas.final} />
        </div>
      </section>

      <FaqSection heading={ladenFaq.heading} items={ladenFaq.items} />
    </PrivatPageLayout>
  );
}
