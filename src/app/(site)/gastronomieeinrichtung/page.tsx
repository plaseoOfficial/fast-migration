import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { MnmWeitereLeistungen } from "@/components/sections/privat/MnmWeitereLeistungen";
import { MnmTypische } from "@/components/sections/privat/MnmTypische";
import { MnmWarum } from "@/components/sections/privat/MnmWarum";
import { MnmGeschichte } from "@/components/sections/privat/MnmGeschichte";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
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
  gastroTestimonialsHeading,
  gastroFaq,
  gastroWeitereCards,
} from "@/lib/content/gastronomieeinrichtung";

const PAGE_PATH = "/gastronomieeinrichtung";
const DESCRIPTION =
  "Theken, Tresen, Rückbuffets und Sitzbänke für Gastronomie und Hotel nach Maß: gebaut im Meisterbetrieb in Espelkamp, mit kostenlosem Aufmaß und Montage.";

export const metadata: Metadata = {
  title: "Gastronomieeinrichtung nach Maß: Thekenbau & Hotelmöbel",
  description: DESCRIPTION,
  alternates: { canonical: "/gastronomieeinrichtung/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Gastronomieeinrichtung nach Maß: Thekenbau & Hotelmöbel",
    description: DESCRIPTION,
    url: "/gastronomieeinrichtung/",
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

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

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage variante="gewerbe" seite="Gastronomie" objektart="Gastronomie" />

      <ProcessSteps {...gastroProcess} />
      <SegmentCards {...gastroSegments} />
      <MnmWeitereLeistungen cards={gastroWeitereCards} />
      <MnmTypische {...gastroTypische} />
      <UspHighlight {...gastroUsp} />
      <MnmWarum {...gastroWarum} />
      <MnmGeschichte {...gastroGeschichte} />
      <TestimonialsSection heading={gastroTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="gewerbe" />

      <FaqSection heading={gastroFaq.heading} items={gastroFaq.items} />
    </PrivatPageLayout>
  );
}
