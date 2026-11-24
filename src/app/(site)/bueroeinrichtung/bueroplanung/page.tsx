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
  bpHero,
  bpIntroStats,
  bpDefinition,
  bpAnlaesse,
  bpProcess,
  bpFlaechen,
  bpZonen,
  bpThemen,
  bpKosten,
  bpTestimonialsHeading,
  bpFaq,
  bpJsonLd,
} from "@/lib/content/bueroplanung";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Büroplanung nach Maß | Fast Systemmöbel",
  description:
    "Büroplanung vom Meisterbetrieb in Espelkamp: Flächen, Zonen und Arbeitsplätze geplant, gefertigt und montiert aus einer Hand. Kostenloses Aufmaß vor Ort.",
  alternates: { canonical: "/bueroeinrichtung/bueroplanung/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Büroplanung nach Maß | Fast Systemmöbel",
    description:
      "Büro planen lassen vom Meisterbetrieb in Espelkamp: Flächen, Zonen und Arbeitsplätze aus einer Hand geplant, gefertigt und montiert.",
    url: "/bueroeinrichtung/bueroplanung/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function BueroplanungPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(bpJsonLd)) }}
      />

      <MnmHero {...bpHero} />
      <MnmIntroStats {...bpIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage variante="gewerbe" seite="Büroplanung" objektart="Büro" />

      <UspHighlight {...bpDefinition} />
      <SegmentCards {...bpAnlaesse} />
      <ProcessSteps {...bpProcess} />
      <SpecTable {...bpFlaechen} />
      <SegmentCards {...bpZonen} />
      <UspHighlight {...bpThemen} imageLeft />
      <SpecTable {...bpKosten} />
      <TestimonialsSection heading={bpTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="gewerbe" />

      <FaqSection
        heading={bpFaq.heading}
        items={bpFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
