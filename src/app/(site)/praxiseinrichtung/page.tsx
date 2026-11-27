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
import { ContrastCols } from "@/components/sections/shared/ContrastCols";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
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
  praxisTresen,
  praxisVergleich,
  praxisWarum,
  praxisGeschichte,
  praxisTestimonialsHeading,
  praxisFaq,
  praxisWeitereCards,
} from "@/lib/content/praxiseinrichtung";

const PAGE_PATH = "/praxiseinrichtung";
const DESCRIPTION =
  "Praxiseinrichtung und Praxismöbel nach Maß vom Tischler: Empfangstresen, Behandlungszeilen und Praxisschränke, geplant und montiert. Aufmaß kostenlos.";

export const metadata: Metadata = {
  title: "Praxiseinrichtung nach Maß: Praxismöbel und Empfangstresen",
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
    title: "Praxiseinrichtung nach Maß: Praxismöbel und Empfangstresen",
    description: DESCRIPTION,
    url: `${PAGE_PATH}/`,
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

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

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage variante="gewerbe" seite="Praxiseinrichtung" objektart="Praxis" />

      <ProcessSteps {...praxisProcess} />
      <SegmentCards {...praxisSegments} />
      <MnmWeitereLeistungen cards={praxisWeitereCards} />
      <MnmTypische {...praxisTypische} />
      <UspHighlight {...praxisTresen} />
      <UspHighlight {...praxisUsp} />
      <ContrastCols {...praxisVergleich} />
      <MnmWarum {...praxisWarum} />
      <MnmGeschichte {...praxisGeschichte} />
      <TestimonialsSection heading={praxisTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="gewerbe" />

      <FaqSection heading={praxisFaq.heading} items={praxisFaq.items} />
    </PrivatPageLayout>
  );
}
