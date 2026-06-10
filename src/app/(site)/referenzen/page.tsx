import type { Metadata } from "next";
import { ReferenzenHero } from "@/components/sections/shared/ReferenzenHero";
import { ReferenzenGrid } from "@/components/sections/shared/ReferenzenGrid";
import { ExpandingImageCta } from "@/components/sections/shared/ExpandingImageCta";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { SITE_URL } from "@/lib/content";
import { buildReferenzenJsonLd } from "@/lib/seo/jsonld";
import {
  PAGE_PATH,
  referenzenHero,
  referenzenGrid,
  referenzenCtas,
  referenzenTestimonialsHeading,
  referenzenFaq,
} from "@/lib/content/referenzen";

const DESCRIPTION =
  "Referenzen von Fast Systemmöbel: realisierte Küchen, Möbel nach Maß und Gewerbeeinrichtung aus Espelkamp – Maßanfertigung seit 1996.";

export const metadata: Metadata = {
  title: "Referenzen: Möbel nach Maß & Gewerbeeinrichtung | Fast",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Referenzen: Möbel nach Maß & Gewerbeeinrichtung | Fast",
    description: DESCRIPTION,
    url: PAGE_PATH,
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

const jsonLd = buildReferenzenJsonLd({
  pageUrl: `${SITE_URL}${PAGE_PATH}`,
  name: referenzenHero.title,
  description: DESCRIPTION,
  breadcrumb: referenzenHero.breadcrumb,
  projects: referenzenGrid.projects.map((project) => ({
    name: project.title,
    image: project.image,
    description: project.description,
    href: project.href,
  })),
  faq: referenzenFaq.items,
});

export default function ReferenzenPage() {
  return (
    <main className="flex flex-col">
      {/* Structured data: CollectionPage + ItemList (ImageObject) + BreadcrumbList + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ReferenzenHero
        title={referenzenHero.title}
        breadcrumb={referenzenHero.breadcrumb}
        images={referenzenHero.images}
        intro={referenzenHero.intro}
      />

      <ReferenzenGrid
        eyebrow={referenzenGrid.eyebrow}
        heading={referenzenGrid.heading}
        leadParagraphs={referenzenGrid.leadParagraphs}
        categories={referenzenGrid.categories}
        projects={referenzenGrid.projects}
      />

      <TestimonialsSection heading={referenzenTestimonialsHeading} />

      {/* Final CTA — to planner (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...referenzenCtas.final} />
        </div>
      </section>

      <FaqSection
        heading={referenzenFaq.heading}
        items={referenzenFaq.items}
        ctaHref={referenzenFaq.ctaHref}
        ctaLabel={referenzenFaq.ctaLabel}
      />
    </main>
  );
}
