import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { planerPreis } from "@/lib/content/anfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  ekMeta,
  ekHero,
  ekKostenbloecke,
  ekLaufmeter,
  ekPlanerBeispiele,
  ekPlanerAusstattung,
  ekSituationen,
  ekPlanerAngebot,
  ekVergleich,
  ekFehler,
  ekSparen,
  ekWerkstatt,
  ekAblauf,
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

      {/* Anfrageblock: nach dem ersten inhaltlichen Abschnitt */}
      <LeistungAnfrage
        variante="privat"
        seite="Einbauschrank Kosten"
        ueberschrift="Ihren Einbauschrank planen wir bei Ihnen vor Ort"
        preisZeile={planerPreis("einbauschrank")}
      />
      <SegmentCards {...ekLaufmeter} />
      <SpecTable {...ekPlanerBeispiele} />
      <SpecTable {...ekPlanerAusstattung} />
      <SegmentCards {...ekSituationen} />
      <SpecTable {...ekPlanerAngebot} />
      <SpecTable {...ekVergleich} />
      <SegmentCards {...ekFehler} />
      <SegmentCards {...ekSparen} />
      <UspHighlight {...ekWerkstatt} />
      <ProcessSteps {...ekAblauf} />
      {/* Streifen: springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={ekFaq.heading}
        items={ekFaq.items}
        ctaLabel="Kostenlose Beratung anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
