import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmMoebelplaner } from "@/components/sections/privat/MnmMoebelplaner";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  ekMeta,
  ekHero,
  ekKostenbloecke,
  ekLaufmeter,
  ekSituationen,
  ekPlanerAngebot,
  ekVergleich,
  ekFehler,
  ekSparen,
  ekWerkstatt,
  ekAblauf,
  ekMoebelplaner,
  ekFaq,
  ekJsonLd,
} from "@/lib/content/einbauschrank-kosten";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: ekMeta.metaTitle,
  description: ekMeta.metaDescription,
  alternates: { canonical: "/einbauschraenke-nach-mass/einbauschrank-kosten/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: ekMeta.metaTitle,
    description: ekMeta.ogDescription,
    url: "/einbauschraenke-nach-mass/einbauschrank-kosten/",
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

export default function EinbauschrankKostenPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(ekJsonLd)) }}
      />

      <MnmHero {...ekHero} />
      <SpecTable {...ekKostenbloecke} />
      <SegmentCards {...ekLaufmeter} />
      <SegmentCards {...ekSituationen} />
      <SpecTable {...ekPlanerAngebot} />
      <SpecTable {...ekVergleich} />
      <SegmentCards {...ekFehler} />
      <SegmentCards {...ekSparen} />
      <UspHighlight {...ekWerkstatt} />
      <ProcessSteps {...ekAblauf} />
      <MnmMoebelplaner {...ekMoebelplaner} />

      <FaqSection
        heading={ekFaq.heading}
        items={ekFaq.items}
        ctaLabel="Kostenlose Beratung anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
