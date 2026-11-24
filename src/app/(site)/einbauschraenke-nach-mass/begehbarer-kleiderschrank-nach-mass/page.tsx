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
  bkHero,
  bkIntroStats,
  bkFormen,
  bkRaumtiefe,
  bkFronten,
  bkMaterial,
  bkZonen,
  bkLicht,
  bkProcess,
  bkKosten,
  bkTestimonialsHeading,
  bkFaq,
  bkJsonLd,
} from "@/lib/content/begehbarer-kleiderschrank-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Begehbarer Kleiderschrank nach Maß | Fast Systemmöbel",
  description:
    "Begehbarer Kleiderschrank nach Maß vom Meisterbetrieb in Espelkamp: Ankleide in I-, L- oder U-Form, offen oder mit Fronten. Kostenloses Aufmaß vor Ort.",
  alternates: { canonical: "/einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Begehbarer Kleiderschrank nach Maß | Fast Systemmöbel",
    description:
      "Begehbarer Kleiderschrank nach Maß: Ankleidezimmer in I-, L- oder U-Form, geplant, gefertigt und montiert vom Meisterbetrieb in Espelkamp.",
    url: "/einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function BegehbarerKleiderschrankNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(bkJsonLd)) }}
      />

      <MnmHero {...bkHero} />
      <MnmIntroStats {...bkIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Begehbarer Kleiderschrank"
        ueberschrift="Ihren begehbaren Kleiderschrank planen wir bei Ihnen vor Ort"
      />

      <SegmentCards {...bkFormen} />
      <SpecTable {...bkRaumtiefe} />
      <SegmentCards {...bkFronten} />
      <UspHighlight {...bkMaterial} />
      <SegmentCards {...bkZonen} />
      <UspHighlight {...bkLicht} />
      <ProcessSteps {...bkProcess} />
      <SpecTable {...bkKosten} />
      <TestimonialsSection heading={bkTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={bkFaq.heading}
        items={bkFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
