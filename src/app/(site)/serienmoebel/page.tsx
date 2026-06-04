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
  serienHero,
  serienIntroStats,
  serienProcess,
  serienTypische,
  serienWarum,
  serienGeschichte,
  serienMoebelplaner,
  serienCtas,
  serienTestimonialsHeading,
  serienFaq,
} from "@/lib/content/serienmoebel";

const PAGE_PATH = "/serienmoebel";
const DESCRIPTION =
  "Möbel Serienfertigung nach Maß vom Meisterbetrieb in Espelkamp. Identische Möbel in Serie nach Zeichnung und CAD, seriengleiche Qualität, Lieferung bundesweit, Montage im Umkreis von 200 km.";

export const metadata: Metadata = {
  title: "Serienmöbel & Serienfertigung nach Maß vom Meisterbetrieb",
  description: DESCRIPTION,
  alternates: { canonical: "/serienmoebel/" },
  openGraph: {
    title: "Serienmöbel & Serienfertigung nach Maß vom Meisterbetrieb",
    description: DESCRIPTION,
    url: "/serienmoebel/",
    locale: "de_DE",
    type: "article",
    siteName: "fast.side-boost.com",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

const jsonLd = buildServicePageJsonLd({
  pageUrl: `${SITE_URL}${PAGE_PATH}`,
  name: "Möbel Serienfertigung",
  description: DESCRIPTION,
  breadcrumb: serienHero.breadcrumb,
  faq: serienFaq.items,
  serviceType: "Möbel Serienfertigung",
});

export default function SerienmoebelPage() {
  return (
    <PrivatPageLayout>
      {/* Structured data: LocalBusiness + Service + BreadcrumbList + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MnmHero {...serienHero} />
      <MnmIntroStats {...serienIntroStats} />

      {/* Intro CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...serienCtas.intro} />
        </div>
      </section>

      <MnmProcess {...serienProcess} />
      <MnmWeitereLeistungen />
      <MnmTypische {...serienTypische} />
      <MnmWarum {...serienWarum} />
      <MnmGeschichte {...serienGeschichte} />
      <MnmMoebelplaner {...serienMoebelplaner} />
      <TestimonialsSection heading={serienTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...serienCtas.final} />
        </div>
      </section>

      <FaqSection heading={serienFaq.heading} items={serienFaq.items} />
    </PrivatPageLayout>
  );
}
