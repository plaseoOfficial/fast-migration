import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  ladenPlanungMeta,
  ladenPlanungHero,
  ladenPlanungSchritte,
  ladenPlanungZonen,
  ladenPlanungKasse,
  ladenPlanungRollen,
  ladenPlanungBarrierefrei,
  ladenPlanungFehler,
  ladenPlanungCheckliste,
  ladenPlanungWerkstatt,
  ladenPlanungFaq,
  ladenPlanungJsonLd,
} from "@/lib/content/ladeneinrichtung-planung";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: ladenPlanungMeta.metaTitle,
  description: ladenPlanungMeta.metaDescription,
  alternates: { canonical: "/ladenbau/ladeneinrichtung-planung/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: ladenPlanungMeta.metaTitle,
    description: ladenPlanungMeta.metaDescription,
    url: "/ladenbau/ladeneinrichtung-planung/",
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

export default function LadeneinrichtungPlanungPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(ladenPlanungJsonLd)) }}
      />

      <MnmHero {...ladenPlanungHero} />
      <ProcessSteps {...ladenPlanungSchritte} />

      {/* Anfrageblock: nach dem ersten inhaltlichen Abschnitt */}
      <LeistungAnfrage variante="gewerbe" seite="Ladeneinrichtung planen" objektart="Laden" />

      <SpecTable {...ladenPlanungZonen} />
      <SegmentCards {...ladenPlanungKasse} />
      <SpecTable {...ladenPlanungRollen} />
      <SpecTable {...ladenPlanungBarrierefrei} />
      <SegmentCards {...ladenPlanungFehler} />
      <SpecTable {...ladenPlanungCheckliste} />
      <UspHighlight {...ladenPlanungWerkstatt} />

      {/* Streifen: springt zum Anfrageblock */}
      <AnfrageStreifen variante="gewerbe" />

      <FaqSection
        heading={ladenPlanungFaq.heading}
        items={ladenPlanungFaq.items}
        ctaLabel="Noch Fragen? Lassen Sie sich beraten"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
