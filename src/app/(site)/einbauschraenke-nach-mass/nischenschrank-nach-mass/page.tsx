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
  nsHero,
  nsIntroStats,
  nsVarianten,
  nsMessen,
  nsTueren,
  nsSchief,
  nsProcess,
  nsKosten,
  nsTestimonialsHeading,
  nsFaq,
  nsJsonLd,
} from "@/lib/content/nischenschrank-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Nischenschrank nach Maß | Fast Systemmöbel",
  description:
    "Nischenschrank nach Maß vom Meisterbetrieb in Espelkamp: passgenau in Nische, Ecke oder Aussparung, auch bei schiefen Wänden. Kostenloses Aufmaß vor Ort.",
  alternates: { canonical: "/einbauschraenke-nach-mass/nischenschrank-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Nischenschrank nach Maß | Fast Systemmöbel",
    description:
      "Nischenschrank nach Maß: exakt in Nische, Ecke oder Aussparung, auch bei schiefen Wänden. Aufmaß, Fertigung und Montage aus einer Hand.",
    url: "/einbauschraenke-nach-mass/nischenschrank-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function NischenschrankNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(nsJsonLd)) }}
      />

      <MnmHero {...nsHero} />
      <MnmIntroStats {...nsIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Nischenschrank"
        ueberschrift="Ihren Nischenschrank planen wir bei Ihnen vor Ort"
        preisZeile={planerPreis("einbauschrank")}
      />

      <SegmentCards {...nsVarianten} />
      <SpecTable {...nsMessen} />
      <SpecTable {...nsTueren} />
      <UspHighlight {...nsSchief} />
      <ProcessSteps {...nsProcess} />
      <SpecTable {...nsKosten} />
      <TestimonialsSection heading={nsTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={nsFaq.heading}
        items={nsFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
