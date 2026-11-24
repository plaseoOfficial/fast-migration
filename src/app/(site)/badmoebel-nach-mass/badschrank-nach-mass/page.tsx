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
  bsHero,
  bsIntroStats,
  bsTypen,
  bsMasse,
  bsMaterial,
  bsAusstattung,
  bsProcess,
  bsKosten,
  bsTestimonialsHeading,
  bsFaq,
  bsJsonLd,
} from "@/lib/content/badschrank-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Badschrank nach Maß | Fast Systemmöbel",
  description:
    "Badschrank nach Maß vom Meisterbetrieb Espelkamp: Hoch-, Hänge- oder Einbauschrank, millimetergenau in die Nische, feuchtebeständig. Kostenloses Aufmaß.",
  alternates: { canonical: "/badmoebel-nach-mass/badschrank-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Badschrank nach Maß | Fast Systemmöbel",
    description:
      "Badschrank nach Maß vom Meisterbetrieb in Espelkamp. Hochschrank, Hängeschrank oder Einbauschrank, millimetergenau in die Nische geplant und montiert.",
    url: "/badmoebel-nach-mass/badschrank-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function BadschrankNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(bsJsonLd)) }}
      />

      <MnmHero {...bsHero} />
      <MnmIntroStats {...bsIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Badschrank"
        ueberschrift="Ihren Badschrank planen wir bei Ihnen vor Ort"
      />

      <SegmentCards {...bsTypen} />
      <SpecTable {...bsMasse} />
      <UspHighlight {...bsMaterial} />
      <SegmentCards {...bsAusstattung} />
      <ProcessSteps {...bsProcess} />
      <SpecTable {...bsKosten} />
      <TestimonialsSection heading={bsTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={bsFaq.heading}
        items={bsFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
