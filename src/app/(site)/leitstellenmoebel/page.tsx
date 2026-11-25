import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { ContrastCols } from "@/components/sections/shared/ContrastCols";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { UeberWerkstattFilm } from "@/components/sections/ueber/UeberWerkstattFilm";
import { SITE_URL } from "@/lib/content";
import { buildServicePageJsonLd } from "@/lib/seo/jsonld";
import {
  leitstellenHero,
  leitstellenIntroStats,
  leitstellenPlanung,
  leitstellenFertigung,
  leitstellenSerie,
  leitstellenUmfang,
  leitstellenAblauf,
  leitstellenFilm,
  leitstellenFaq,
} from "@/lib/content/leitstellenmoebel";

const PAGE_PATH = "/leitstellenmoebel";
const TITLE = "Leitstellenmöbel nach Maß: Leitstand und Kontrollraum";
const DESCRIPTION =
  "Leitstellenmöbel und Leitstandmöbel aus der eigenen Tischlerei, nach Ihrer Zeichnung gefertigt. Mehrere gleiche Arbeitsplätze, Montage auf Anfrage.";

export const metadata: Metadata = {
  title: TITLE,
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
    title: TITLE,
    description: DESCRIPTION,
    url: `${PAGE_PATH}/`,
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

const jsonLd = buildServicePageJsonLd({
  pageUrl: `${SITE_URL}${PAGE_PATH}`,
  name: "Leitstellenmöbel nach Maß",
  description: DESCRIPTION,
  breadcrumb: leitstellenHero.breadcrumb,
  faq: leitstellenFaq.items,
  serviceType: "Leitstellenmöbel",
});

export default function LeitstellenmoebelPage() {
  return (
    <PrivatPageLayout>
      {/* Structured data: LocalBusiness + Service + BreadcrumbList + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MnmHero {...leitstellenHero} />
      <MnmIntroStats {...leitstellenIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage variante="leitstelle" seite="Leitstellenmöbel" />

      <SegmentCards {...leitstellenPlanung} />
      <UspHighlight {...leitstellenFertigung} />
      <UspHighlight {...leitstellenSerie} imageLeft />
      <ContrastCols {...leitstellenUmfang} />
      <ProcessSteps {...leitstellenAblauf} />
      <UeberWerkstattFilm {...leitstellenFilm} />

      {/* Streifen: springt zum Anfrageblock */}
      <AnfrageStreifen variante="leitstelle" />

      <FaqSection heading={leitstellenFaq.heading} items={leitstellenFaq.items} />
    </PrivatPageLayout>
  );
}
