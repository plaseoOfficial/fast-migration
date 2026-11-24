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
  bmHero,
  bmIntroStats,
  bmMoebeltypen,
  bmMasse,
  bmTechnik,
  bmMaterial,
  bmProcess,
  bmKosten,
  bmTestimonialsHeading,
  bmFaq,
  bmJsonLd,
} from "@/lib/content/bueromoebel-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Büromöbel nach Maß | Fast Systemmöbel",
  description:
    "Büromöbel nach Maß vom Meisterbetrieb in Espelkamp: Schreibtisch, Aktenschrank, Sideboard und Regal als Programm aus einer Werkstatt. Kostenloses Aufmaß.",
  alternates: { canonical: "/bueroeinrichtung/bueromoebel-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Büromöbel nach Maß | Fast Systemmöbel",
    description:
      "Maßgefertigte Büromöbel vom Meisterbetrieb in Espelkamp: Schreibtisch, Schrank, Sideboard und Regal als Programm aus einer Werkstatt, in einem Stil.",
    url: "/bueroeinrichtung/bueromoebel-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function BueromoebelNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(bmJsonLd)) }}
      />

      <MnmHero {...bmHero} />
      <MnmIntroStats {...bmIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage variante="gewerbe" seite="Büromöbel" objektart="Büro" />

      <SegmentCards {...bmMoebeltypen} />
      <SpecTable {...bmMasse} />
      <UspHighlight {...bmTechnik} />
      <SegmentCards {...bmMaterial} />
      <ProcessSteps {...bmProcess} />
      <SpecTable {...bmKosten} />
      <TestimonialsSection heading={bmTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="gewerbe" />

      <FaqSection
        heading={bmFaq.heading}
        items={bmFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
