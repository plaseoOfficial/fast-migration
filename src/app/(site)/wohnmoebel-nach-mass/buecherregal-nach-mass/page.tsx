import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { planerPreis } from "@/lib/content/anfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  buchHero,
  buchIntroStats,
  buchVarianten,
  buchMasse,
  buchMaterial,
  buchStatik,
  buchProcess,
  buchKosten,
  buchTestimonialsHeading,
  buchFaq,
  buchJsonLd,
} from "@/lib/content/buecherregal-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Bücherregal nach Maß | Fast Systemmöbel",
  description:
    "Bücherregal nach Maß vom Meisterbetrieb in Espelkamp: Fächer nach Buchformat, tragfähig geplant, bis unter die Decke. Kostenloses Aufmaß, eigene Montage.",
  alternates: { canonical: "/wohnmoebel-nach-mass/buecherregal-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Bücherregal nach Maß | Fast Systemmöbel",
    description:
      "Bücherregal nach Maß vom Meisterbetrieb in Espelkamp. Fachtiefen nach Buchformat, tragfähig und raumhoch geplant, gefertigt und montiert.",
    url: "/wohnmoebel-nach-mass/buecherregal-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function BuecherregalNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(buchJsonLd)) }}
      />

      <MnmHero {...buchHero} />
      <MnmIntroStats {...buchIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Bücherregal"
        ueberschrift="Ihr Bücherregal planen wir bei Ihnen vor Ort"
        preisZeile={planerPreis("regalwand")}
      />

      <SegmentCards {...buchVarianten} />
      <SpecTable {...buchMasse} />
      <UspHighlight {...buchMaterial} />
      <SpecTable {...buchStatik} />
      <ProcessSteps {...buchProcess} />
      <SpecTable {...buchKosten} />
      <TestimonialsSection heading={buchTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={buchFaq.heading}
        items={buchFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
