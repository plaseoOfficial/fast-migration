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
  rtMeta,
  rtHero,
  rtIntroStats,
  rtVarianten,
  rtMasse,
  rtMaterial,
  rtZonen,
  rtProcess,
  rtKosten,
  rtTestimonialsHeading,
  rtFaq,
  rtJsonLd,
} from "@/lib/content/raumteiler-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: rtMeta.metaTitle,
  description: rtMeta.metaDescription,
  alternates: { canonical: "/wohnmoebel-nach-mass/raumteiler-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: rtMeta.metaTitle,
    description: rtMeta.ogDescription,
    url: "/wohnmoebel-nach-mass/raumteiler-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function RaumteilerNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(rtJsonLd)) }}
      />

      <MnmHero {...rtHero} />
      <MnmIntroStats {...rtIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Raumteiler"
        ueberschrift="Ihren Raumteiler planen wir bei Ihnen vor Ort"
      />

      <SegmentCards {...rtVarianten} />
      <SpecTable {...rtMasse} />
      <UspHighlight {...rtMaterial} />
      <SegmentCards {...rtZonen} />
      <ProcessSteps {...rtProcess} />
      <SpecTable {...rtKosten} />
      <TestimonialsSection heading={rtTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={rtFaq.heading}
        items={rtFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
