import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { MnmProcess } from "@/components/sections/privat/MnmProcess";
import { MnmWeitereLeistungen } from "@/components/sections/privat/MnmWeitereLeistungen";
import { MnmTypische } from "@/components/sections/privat/MnmTypische";
import { MnmWarum } from "@/components/sections/privat/MnmWarum";
import { MnmGeschichte } from "@/components/sections/privat/MnmGeschichte";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
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
  serienTestimonialsHeading,
  serienFaq,
  serienWeitereCards,
} from "@/lib/content/serienmoebel";

const PAGE_PATH = "/serienmoebel";
const DESCRIPTION =
  "Möbel-Serienfertigung vom Meisterbetrieb in Espelkamp: identische Möbel nach Zeichnung und CAD in seriengleicher Qualität, bundesweit geliefert.";

export const metadata: Metadata = {
  title: "Serienmöbel & Serienfertigung nach Maß vom Meisterbetrieb",
  description: DESCRIPTION,
  alternates: { canonical: "/serienmoebel/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Serienmöbel & Serienfertigung nach Maß vom Meisterbetrieb",
    description: DESCRIPTION,
    url: "/serienmoebel/",
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

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

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage variante="serie" seite="Serienmöbel" />

      <MnmProcess {...serienProcess} />
      <MnmWeitereLeistungen cards={serienWeitereCards} />
      <MnmTypische {...serienTypische} />
      <MnmWarum {...serienWarum} />
      <MnmGeschichte {...serienGeschichte} />
      <TestimonialsSection heading={serienTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="serie" />

      <FaqSection heading={serienFaq.heading} items={serienFaq.items} />
    </PrivatPageLayout>
  );
}
