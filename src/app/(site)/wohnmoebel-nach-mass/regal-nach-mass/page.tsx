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
  regHero,
  regIntroStats,
  regVarianten,
  regMasse,
  regMaterial,
  regEinsatz,
  regProcess,
  regKosten,
  regTestimonialsHeading,
  regFaq,
  regJsonLd,
} from "@/lib/content/regal-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Regal nach Maß | Fast Systemmöbel",
  description:
    "Regal nach Maß vom Meisterbetrieb in Espelkamp: offenes Regal Wand zu Wand, in Nische, Ecke und bis unter die Decke. Kostenloses Aufmaß, eigene Montage.",
  alternates: { canonical: "/wohnmoebel-nach-mass/regal-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Regal nach Maß | Fast Systemmöbel",
    description:
      "Offenes Regal nach Maß vom Meisterbetrieb in Espelkamp. Wand zu Wand, in Nische und Ecke bis unter die Decke geplant, gefertigt und montiert.",
    url: "/wohnmoebel-nach-mass/regal-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function RegalNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(regJsonLd)) }}
      />

      <MnmHero {...regHero} />
      <MnmIntroStats {...regIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Regal"
        ueberschrift="Ihr Regal planen wir bei Ihnen vor Ort"
        preisZeile={planerPreis("regal")}
      />

      <SegmentCards {...regVarianten} />
      <SpecTable {...regMasse} />
      <UspHighlight {...regMaterial} />
      <SegmentCards {...regEinsatz} />
      <ProcessSteps {...regProcess} />
      <SpecTable {...regKosten} />
      <TestimonialsSection heading={regTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={regFaq.heading}
        items={regFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
