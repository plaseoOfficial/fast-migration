import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { MnmWeitereLeistungen } from "@/components/sections/privat/MnmWeitereLeistungen";
import { MnmTypische } from "@/components/sections/privat/MnmTypische";
import { MnmGeschichte } from "@/components/sections/privat/MnmGeschichte";
import { BueroProcessSteps } from "@/components/sections/gewerbe/BueroProcessSteps";
import { BueroVergleich } from "@/components/sections/gewerbe/BueroVergleich";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { SITE_URL } from "@/lib/content";
import { buildServicePageJsonLd } from "@/lib/seo/jsonld";
import {
  bueroHero,
  bueroIntroStats,
  bueroProcessSteps,
  bueroTypische,
  bueroVergleich,
  bueroGeschichte,
  bueroTestimonialsHeading,
  bueroFaq,
  bueroWeitereCards,
} from "@/lib/content/bueroeinrichtung";

const PAGE_PATH = "/bueroeinrichtung";
const DESCRIPTION =
  "Büroeinrichtung nach Maß vom Meisterbetrieb in Espelkamp: Schreibtische, Aktenschränke und Konferenztische – alles aus einer Hand gefertigt und montiert.";

export const metadata: Metadata = {
  title: "Büroeinrichtung nach Maß: Arbeitsplatz, Empfang & Konferenz",
  description: DESCRIPTION,
  alternates: { canonical: "/bueroeinrichtung/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Büroeinrichtung nach Maß: Arbeitsplatz, Empfang & Konferenz",
    description: DESCRIPTION,
    url: "/bueroeinrichtung/",
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

const jsonLd = buildServicePageJsonLd({
  pageUrl: `${SITE_URL}${PAGE_PATH}`,
  name: "Büroeinrichtung nach Maß",
  description: DESCRIPTION,
  breadcrumb: bueroHero.breadcrumb,
  faq: bueroFaq.items,
  serviceType: "Büroeinrichtung nach Maß",
});

export default function BueroeinrichtungPage() {
  return (
    <PrivatPageLayout>
      {/* Structured data: LocalBusiness + Service + BreadcrumbList + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MnmHero {...bueroHero} />
      <MnmIntroStats {...bueroIntroStats} />
      <BueroProcessSteps {...bueroProcessSteps} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage variante="gewerbe" seite="Büroeinrichtung" objektart="Büro" />

      <MnmWeitereLeistungen cards={bueroWeitereCards} />
      <MnmTypische {...bueroTypische} />
      <BueroVergleich {...bueroVergleich} />
      <MnmGeschichte {...bueroGeschichte} />
      <TestimonialsSection heading={bueroTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="gewerbe" />

      <FaqSection heading={bueroFaq.heading} items={bueroFaq.items} />
    </PrivatPageLayout>
  );
}
