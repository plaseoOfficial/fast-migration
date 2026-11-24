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
  hwrPlanenHero,
  hwrPlanenSchritte,
  hwrPlanenAnschluesse,
  hwrPlanenRaumformen,
  hwrPlanenZonen,
  hwrPlanenFeuchte,
  hwrPlanenFehler,
  hwrPlanenWerkstatt,
  hwrPlanenFaq,
  hwrPlanenJsonLd,
} from "@/lib/content/planen";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

const TITLE = "Hauswirtschaftsraum planen: Reihenfolge und Checkliste";
const DESCRIPTION =
  "HWR planen in sieben Schritten: welche Anschlüsse vor der Rohinstallation feststehen müssen und welche Anordnung zu Ihrem Raum passt. Mit Checkliste.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/hauswirtschaftsraum/planen/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: TITLE,
    description: DESCRIPTION,
    url: "/hauswirtschaftsraum/planen/",
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

export default function HauswirtschaftsraumPlanenPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(hwrPlanenJsonLd)) }}
      />

      <MnmHero {...hwrPlanenHero} />
      <ProcessSteps {...hwrPlanenSchritte} />

      {/* Anfrageblock: nach dem ersten inhaltlichen Abschnitt */}
      <LeistungAnfrage
        variante="privat"
        seite="Hauswirtschaftsraum planen"
        ueberschrift="Ihren Hauswirtschaftsraum planen wir bei Ihnen vor Ort"
      />
      <SpecTable {...hwrPlanenAnschluesse} />
      <SpecTable {...hwrPlanenRaumformen} />
      <SpecTable {...hwrPlanenZonen} />
      <SegmentCards {...hwrPlanenFeuchte} />
      <SegmentCards {...hwrPlanenFehler} />
      <UspHighlight {...hwrPlanenWerkstatt} />
      {/* Streifen: springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={hwrPlanenFaq.heading}
        items={hwrPlanenFaq.items}
        ctaLabel="Noch Fragen? Lassen Sie sich beraten"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
