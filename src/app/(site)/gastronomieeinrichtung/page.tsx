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
  gastroHero,
  gastroIntroStats,
  gastroProcess,
  gastroSegments,
  gastroUsp,
  gastroTypische,
  gastroWarum,
  gastroGeschichte,
  gastroMoebelplaner,
  gastroCtas,
  gastroTestimonialsHeading,
  gastroFaq,
  gastroWeitereCards,
} from "@/lib/content/gastronomieeinrichtung";

const PAGE_PATH = "/gastronomieeinrichtung";
const DESCRIPTION =
  "Gastronomieeinrichtung nach Maß vom Meisterbetrieb in Espelkamp. Theken, Rückbuffets, Sitzbänke und Hotelmöbel, geplant, gefertigt und im Umkreis von 200 km montiert. Lieferung bundesweit.";

export const metadata: Metadata = {
  title: "Gastronomieeinrichtung nach Maß: Theke, Bar & Hotel",
  description: DESCRIPTION,
  alternates: { canonical: "/gastronomieeinrichtung/" },
  openGraph: {
    title: "Gastronomieeinrichtung nach Maß: Theke, Bar & Hotel",
    description: DESCRIPTION,
    url: "/gastronomieeinrichtung/",
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

const jsonLd = buildServicePageJsonLd({
  pageUrl: `${SITE_URL}${PAGE_PATH}`,
  name: "Gastronomieeinrichtung nach Maß",
  description: DESCRIPTION,
  breadcrumb: gastroHero.breadcrumb,
  faq: gastroFaq.items,
  serviceType: "Gastronomieeinrichtung nach Maß",
});

export default function GastronomieeinrichtungPage() {
  return (
    <PrivatPageLayout>
      {/* Structured data: LocalBusiness + Service + BreadcrumbList + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MnmHero {...gastroHero} />
      <MnmIntroStats {...gastroIntroStats} />

      {/* Intro CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...gastroCtas.intro} />
        </div>
      </section>

      <ProcessSteps {...gastroProcess} />
      <SegmentCards {...gastroSegments} />
      <MnmWeitereLeistungen cards={gastroWeitereCards} />
      <MnmTypische {...gastroTypische} />
      <UspHighlight {...gastroUsp} />
      <MnmWarum {...gastroWarum} />
      <MnmGeschichte {...gastroGeschichte} />
      <MnmMoebelplaner {...gastroMoebelplaner} />
      <TestimonialsSection heading={gastroTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...gastroCtas.final} />
        </div>
      </section>

      <FaqSection heading={gastroFaq.heading} items={gastroFaq.items} />
    </PrivatPageLayout>
  );
}
