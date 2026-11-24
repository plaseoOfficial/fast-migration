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
  wtHero,
  wtIntroStats,
  wtBecken,
  wtMasse,
  wtMaterialVergleich,
  wtMaterial,
  wtRaum,
  wtProcess,
  wtKosten,
  wtTestimonialsHeading,
  wtFaq,
  wtJsonLd,
} from "@/lib/content/waschtisch-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Waschtisch nach Maß | Fast Systemmöbel",
  description:
    "Waschtischplatte nach Maß vom Meisterbetrieb in Espelkamp: Wand zu Wand, passgenauer Ausschnitt für Ihr Becken, PU-Kante. Kostenloses Aufmaß vor Ort.",
  alternates: { canonical: "/badmoebel-nach-mass/waschtisch-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Waschtisch nach Maß | Fast Systemmöbel",
    description:
      "Waschtischplatte nach Maß vom Meisterbetrieb in Espelkamp. Wand zu Wand, passgenau für Ihr Becken geplant, gefertigt und montiert.",
    url: "/badmoebel-nach-mass/waschtisch-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function WaschtischNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(wtJsonLd)) }}
      />

      <MnmHero {...wtHero} />
      <MnmIntroStats {...wtIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Waschtisch"
        ueberschrift="Ihren Waschtisch planen wir bei Ihnen vor Ort"
      />

      <SegmentCards {...wtBecken} />
      <SpecTable {...wtMasse} />
      <UspHighlight {...wtMaterial} />
      <SpecTable {...wtMaterialVergleich} />
      <SegmentCards {...wtRaum} />
      <ProcessSteps {...wtProcess} />
      <SpecTable {...wtKosten} />
      <TestimonialsSection heading={wtTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={wtFaq.heading}
        items={wtFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
