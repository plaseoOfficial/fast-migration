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
  wwHero,
  wwIntroStats,
  wwVarianten,
  wwMasse,
  wwTechnik,
  wwAbgrenzung,
  wwProcess,
  wwKosten,
  wwTestimonialsHeading,
  wwFaq,
  wwJsonLd,
} from "@/lib/content/wohnwand-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Wohnwand nach Maß | Fast Systemmöbel",
  description:
    "Wohnwand nach Maß vom Meisterbetrieb in Espelkamp: raumhoch von Wand zu Wand, mit TV-Nische und Vitrine. Kostenloses Aufmaß, eigene Montage.",
  alternates: { canonical: "/wohnmoebel-nach-mass/wohnwand-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Wohnwand nach Maß | Fast Systemmöbel",
    description:
      "Raumhohe Wohnwand nach Maß vom Meisterbetrieb in Espelkamp. Schränke und offene Fächer Wand zu Wand ohne Passleisten, geplant, gefertigt und montiert.",
    url: "/wohnmoebel-nach-mass/wohnwand-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function WohnwandNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(wwJsonLd)) }}
      />

      <MnmHero {...wwHero} />
      <MnmIntroStats {...wwIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Wohnwand"
        ueberschrift="Ihre Wohnwand planen wir bei Ihnen vor Ort"
        preisZeile={planerPreis("regalwand")}
      />

      <SegmentCards {...wwVarianten} />
      <SpecTable {...wwMasse} />
      <UspHighlight {...wwTechnik} />
      <SegmentCards {...wwAbgrenzung} />
      <ProcessSteps {...wwProcess} />
      <SpecTable {...wwKosten} />
      <TestimonialsSection heading={wwTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={wwFaq.heading}
        items={wwFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
