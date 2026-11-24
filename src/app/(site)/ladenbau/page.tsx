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
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
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
  ladenGeschichte,
  ladenTestimonialsHeading,
  ladenFaq,
} from "@/lib/content/ladenbau";

const PAGE_PATH = "/ladenbau";
const DESCRIPTION =
  "Ladenbau nach Maß aus Espelkamp: Verkaufstheken, Shopkonzepte und maßgefertigte Ladeneinrichtung, geplant, gefertigt und montiert aus einer Hand.";

export const metadata: Metadata = {
  title: "Ladenbau nach Maß: Theke bis Shopkonzept",
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
    title: "Ladenbau nach Maß: Theke bis Shopkonzept",
    description: DESCRIPTION,
    url: `${PAGE_PATH}/`,
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

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

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage variante="gewerbe" seite="Ladenbau" objektart="Laden" />

      <ProcessSteps {...ladenSteps} />
      <MnmWeitereLeistungen cards={ladenWeitereLeistungen.cards} />
      <MnmTypische {...ladenTypische} />
      <SegmentCards {...ladenSegments} />
      <MnmWarum {...ladenWarum} />
      <UspHighlight {...ladenUsp} />
      <SpecTable {...ladenVergleich} />
      <MnmGeschichte {...ladenGeschichte} />
      <SpecTable {...ladenKosten} />
      <TestimonialsSection heading={ladenTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="gewerbe" />

      <FaqSection heading={ladenFaq.heading} items={ladenFaq.items} />
    </PrivatPageLayout>
  );
}
