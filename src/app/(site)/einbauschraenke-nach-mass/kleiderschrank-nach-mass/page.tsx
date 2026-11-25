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
  klHero,
  klIntroStats,
  klVarianten,
  klMasse,
  klMaterial,
  klAusstattung,
  klProcess,
  klKosten,
  klTestimonialsHeading,
  klFaq,
  klJsonLd,
} from "@/lib/content/kleiderschrank-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Kleiderschrank nach Maß | Fast Systemmöbel",
  description:
    "Kleiderschrank nach Maß vom Meisterbetrieb in Espelkamp: raumhoch Wand zu Wand, Dreh- oder Schiebetür, Innenausstattung nach Wunsch. Kostenloses Aufmaß.",
  alternates: { canonical: "/einbauschraenke-nach-mass/kleiderschrank-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Kleiderschrank nach Maß | Fast Systemmöbel",
    description:
      "Kleiderschrank nach Maß vom Meisterbetrieb in Espelkamp. Raumhoch Wand zu Wand, mit individueller Innenausstattung geplant, gefertigt und montiert.",
    url: "/einbauschraenke-nach-mass/kleiderschrank-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function KleiderschrankNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(klJsonLd)) }}
      />

      <MnmHero {...klHero} />
      <MnmIntroStats {...klIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Kleiderschrank"
        ueberschrift="Ihren Kleiderschrank planen wir bei Ihnen vor Ort"
        preisZeile={planerPreis("kleiderschrank")}
      />

      <SegmentCards {...klVarianten} />
      <SpecTable {...klMasse} />
      <UspHighlight {...klMaterial} />
      <SegmentCards {...klAusstattung} />
      <ProcessSteps {...klProcess} />
      <SpecTable {...klKosten} />
      <TestimonialsSection heading={klTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={klFaq.heading}
        items={klFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
