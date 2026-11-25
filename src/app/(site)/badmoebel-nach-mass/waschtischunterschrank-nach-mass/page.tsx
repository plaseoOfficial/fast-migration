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
  wuHero,
  wuIntroStats,
  wuMontage,
  wuMasse,
  wuMaterial,
  wuAusstattung,
  wuProcess,
  wuKosten,
  wuTestimonialsHeading,
  wuFaq,
  wuJsonLd,
} from "@/lib/content/waschtischunterschrank-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Waschtischunterschrank nach Maß | Fast Systemmöbel",
  description:
    "Waschtischunterschrank nach Maß vom Meisterbetrieb Espelkamp: hängend oder stehend, Auszüge um den Siphon, PU-Kante. Kostenloses Aufmaß vor Ort.",
  alternates: { canonical: "/badmoebel-nach-mass/waschtischunterschrank-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Waschtischunterschrank nach Maß | Fast Systemmöbel",
    description:
      "Waschtischunterschrank nach Maß vom Meisterbetrieb Espelkamp. Hängend oder stehend, Auszüge um den Siphon, feuchtebeständig geplant und montiert.",
    url: "/badmoebel-nach-mass/waschtischunterschrank-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function WaschtischunterschrankNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(wuJsonLd)) }}
      />

      <MnmHero {...wuHero} />
      <MnmIntroStats {...wuIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Waschtischunterschrank"
        ueberschrift="Ihren Waschtischunterschrank planen wir bei Ihnen vor Ort"
        preisZeile={planerPreis("bad")}
      />

      <SegmentCards {...wuMontage} />
      <SpecTable {...wuMasse} />
      <UspHighlight {...wuMaterial} />
      <SegmentCards {...wuAusstattung} />
      <ProcessSteps {...wuProcess} />
      <SpecTable {...wuKosten} />
      <TestimonialsSection heading={wuTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={wuFaq.heading}
        items={wuFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
