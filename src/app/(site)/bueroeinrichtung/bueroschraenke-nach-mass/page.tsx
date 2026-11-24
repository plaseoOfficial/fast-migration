import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  bsHero,
  bsIntroStats,
  bsOrdner,
  bsBauformen,
  bsFronten,
  bsVertraulich,
  bsMaterial,
  bsProcess,
  bsKosten,
  bsTestimonialsHeading,
  bsFaq,
  bsJsonLd,
} from "@/lib/content/bueroschraenke-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Büroschränke nach Maß vom Tischler | Fast Systemmöbel",
  description:
    "Büro- und Aktenschränke nach Maß, geplant nach Ihren Ordnern und auf Wunsch abschließbar. Kostenloses Aufmaß, Montage durch unser eigenes Team.",
  alternates: { canonical: "/bueroeinrichtung/bueroschraenke-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Büroschränke nach Maß vom Tischler | Fast Systemmöbel",
    description:
      "Aktenschrank, raumhohe Schrankwand oder freistehende Schrankzeile: Wir planen vom Ordnerbestand aus, messen kostenlos auf und bauen ohne Passleisten.",
    url: "/bueroeinrichtung/bueroschraenke-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function BueroschraenkeNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(bsJsonLd)) }}
      />

      <MnmHero {...bsHero} />
      <MnmIntroStats {...bsIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage variante="gewerbe" seite="Büroschränke" objektart="Büro" />

      <SpecTable {...bsOrdner} />
      <SegmentCards {...bsBauformen} />
      <SpecTable {...bsFronten} />
      <UspHighlight {...bsVertraulich} />
      <SegmentCards {...bsMaterial} />
      <ProcessSteps {...bsProcess} />
      <SpecTable {...bsKosten} />
      <TestimonialsSection heading={bsTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="gewerbe" />

      <FaqSection
        heading={bsFaq.heading}
        items={bsFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
