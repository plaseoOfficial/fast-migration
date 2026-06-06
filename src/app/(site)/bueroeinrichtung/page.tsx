import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { MnmProcess } from "@/components/sections/privat/MnmProcess";
import { MnmWeitereLeistungen } from "@/components/sections/privat/MnmWeitereLeistungen";
import { MnmTypische } from "@/components/sections/privat/MnmTypische";
import { MnmWarum } from "@/components/sections/privat/MnmWarum";
import { MnmGeschichte } from "@/components/sections/privat/MnmGeschichte";
import { MnmMoebelplaner } from "@/components/sections/privat/MnmMoebelplaner";
import { ExpandingImageCta } from "@/components/sections/shared/ExpandingImageCta";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { SITE_URL } from "@/lib/content";
import { buildServicePageJsonLd } from "@/lib/seo/jsonld";
import {
  bueroHero,
  bueroIntroStats,
  bueroProcess,
  bueroTypische,
  bueroWarum,
  bueroGeschichte,
  bueroMoebelplaner,
  bueroCtas,
  bueroTestimonialsHeading,
  bueroFaq,
} from "@/lib/content/bueroeinrichtung";

const PAGE_PATH = "/bueroeinrichtung";
const DESCRIPTION =
  "Büroeinrichtung nach Maß vom Meisterbetrieb in Espelkamp. Schreibtische, Aktenschränke, Konferenztische und komplette Objekteinrichtungen, geplant, gefertigt und im Umkreis von 200 km montiert.";

export const metadata: Metadata = {
  title: "Büroeinrichtung nach Maß aus Espelkamp: Büromöbel vom Meisterbetrieb",
  description: DESCRIPTION,
  alternates: { canonical: "/bueroeinrichtung/" },
  openGraph: {
    title: "Büroeinrichtung nach Maß aus Espelkamp: Büromöbel vom Meisterbetrieb",
    description: DESCRIPTION,
    url: "/bueroeinrichtung/",
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

const jsonLd = buildServicePageJsonLd({
  pageUrl: `${SITE_URL}${PAGE_PATH}`,
  name: "Büroeinrichtung nach Maß",
  description: DESCRIPTION,
  breadcrumb: bueroHero.breadcrumb,
  faq: bueroFaq.items,
  serviceType: "Büroeinrichtung nach Maß",
});

export default function BueroeinrichtungPage() {
  return (
    <PrivatPageLayout>
      {/* Structured data: LocalBusiness + Service + BreadcrumbList + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MnmHero {...bueroHero} />
      <MnmIntroStats {...bueroIntroStats} />

      {/* Intro CTA. Bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...bueroCtas.intro} />
        </div>
      </section>

      <MnmProcess {...bueroProcess} />
      <MnmWeitereLeistungen />
      <MnmTypische {...bueroTypische} />
      <MnmWarum {...bueroWarum} />
      <MnmGeschichte {...bueroGeschichte} />
      <MnmMoebelplaner {...bueroMoebelplaner} />
      <TestimonialsSection heading={bueroTestimonialsHeading} />

      {/* Final CTA. Bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...bueroCtas.final} />
        </div>
      </section>

      <FaqSection heading={bueroFaq.heading} items={bueroFaq.items} />
    </PrivatPageLayout>
  );
}
