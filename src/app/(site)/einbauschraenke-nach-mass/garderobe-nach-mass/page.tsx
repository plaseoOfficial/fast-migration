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
  garHero,
  garIntroStats,
  garElemente,
  garMasse,
  garRaeume,
  garMaterial,
  garProcess,
  garKosten,
  garTestimonialsHeading,
  garFaq,
  garJsonLd,
} from "@/lib/content/garderobe-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Garderobe nach Maß | Fast Systemmöbel",
  description:
    "Garderobe nach Maß vom Meisterbetrieb in Espelkamp: Schrank, Sitzbank und Spiegel für den Flur, millimetergenau geplant. Kostenloses Aufmaß, eigene Montage.",
  alternates: { canonical: "/einbauschraenke-nach-mass/garderobe-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Garderobe nach Maß | Fast Systemmöbel",
    description:
      "Garderobe nach Maß vom Meisterbetrieb in Espelkamp. Schrank, Sitzbank und Spiegel für den Flur aus einer Hand geplant, gefertigt und montiert.",
    url: "/einbauschraenke-nach-mass/garderobe-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function GarderobeNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(garJsonLd)) }}
      />

      <MnmHero {...garHero} />
      <MnmIntroStats {...garIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Garderobe"
        ueberschrift="Ihre Garderobe planen wir bei Ihnen vor Ort"
      />

      <SegmentCards {...garElemente} />
      <SpecTable {...garMasse} />
      <SegmentCards {...garRaeume} />
      <UspHighlight {...garMaterial} />
      <ProcessSteps {...garProcess} />
      <SpecTable {...garKosten} />
      <TestimonialsSection heading={garTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={garFaq.heading}
        items={garFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
