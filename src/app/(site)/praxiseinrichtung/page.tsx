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
import { ExpandingImageCta } from "@/components/sections/shared/ExpandingImageCta";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { SITE_URL } from "@/lib/content";
import { buildServicePageJsonLd } from "@/lib/seo/jsonld";
import {
  praxisHero,
  praxisIntroStats,
  praxisProcess,
  praxisSegments,
  praxisUsp,
  praxisTypische,
  praxisWarum,
  praxisGeschichte,
  praxisMoebelplaner,
  praxisCtas,
  praxisTestimonialsHeading,
  praxisFaq,
} from "@/lib/content/praxiseinrichtung";

const PAGE_PATH = "/praxiseinrichtung";
const DESCRIPTION =
  "Praxiseinrichtung nach Maß vom Meisterbetrieb in Espelkamp. Empfangstresen, Behandlungs- und Kanzleimöbel für Ärzte, Therapeuten und Kanzleien. Hygienisch, repräsentativ, im Umkreis von 200 km montiert.";

export const metadata: Metadata = {
  title: "Praxiseinrichtung nach Maß: Ärzte, Therapeuten & Kanzleien",
  description: DESCRIPTION,
  alternates: { canonical: `${PAGE_PATH}/` },
  openGraph: {
    title: "Praxiseinrichtung nach Maß: Ärzte, Therapeuten & Kanzleien",
    description: DESCRIPTION,
    url: `${PAGE_PATH}/`,
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

const jsonLd = buildServicePageJsonLd({
  pageUrl: `${SITE_URL}${PAGE_PATH}`,
  name: "Praxiseinrichtung nach Maß",
  description: DESCRIPTION,
  breadcrumb: praxisHero.breadcrumb,
  faq: praxisFaq.items,
  serviceType: "Praxiseinrichtung nach Maß",
});

export default function PraxiseinrichtungPage() {
  return (
    <PrivatPageLayout>
      {/* Structured data: LocalBusiness + Service + BreadcrumbList + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MnmHero {...praxisHero} />
      <MnmIntroStats {...praxisIntroStats} />

      {/* Intro CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...praxisCtas.intro} />
        </div>
      </section>

      <ProcessSteps {...praxisProcess} />
      <SegmentCards {...praxisSegments} />
      <MnmWeitereLeistungen />
      <MnmTypische {...praxisTypische} />
      <UspHighlight {...praxisUsp} />
      <MnmWarum {...praxisWarum} />
      <MnmGeschichte {...praxisGeschichte} />
      <MnmMoebelplaner {...praxisMoebelplaner} />
      <TestimonialsSection heading={praxisTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...praxisCtas.final} />
        </div>
      </section>

      <FaqSection heading={praxisFaq.heading} items={praxisFaq.items} />
    </PrivatPageLayout>
  );
}
