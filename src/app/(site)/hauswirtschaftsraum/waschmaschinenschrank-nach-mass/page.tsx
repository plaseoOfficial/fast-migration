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
  wmsHero,
  wmsIntroStats,
  wmsBauformen,
  wmsMasse,
  wmsTechnik,
  wmsWarum,
  wmsAusstattung,
  wmsProcess,
  wmsKosten,
  wmsTestimonialsHeading,
  wmsFaq,
  wmsJsonLd,
} from "@/lib/content/waschmaschinenschrank-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

const TITLE = "Waschmaschinenschrank nach Maß | Fast Systemmöbel";
const DESCRIPTION =
  "Waschmaschinenschrank nach Maß vom Meisterbetrieb Espelkamp: Waschturm oder nebeneinander, um Ihre Geräte gebaut, Lüftung mitgeplant. Kostenloses Aufmaß.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: TITLE,
    description: DESCRIPTION,
    url: "/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function WaschmaschinenschrankNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(wmsJsonLd)) }}
      />

      <MnmHero {...wmsHero} />
      <MnmIntroStats {...wmsIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Waschmaschinenschrank"
        ueberschrift="Ihren Waschmaschinenschrank planen wir bei Ihnen vor Ort"
      />

      <SpecTable {...wmsBauformen} />
      <SpecTable {...wmsMasse} />
      <SegmentCards {...wmsTechnik} />
      <UspHighlight {...wmsWarum} />
      <SegmentCards {...wmsAusstattung} />
      <ProcessSteps {...wmsProcess} />
      <SpecTable {...wmsKosten} />
      <TestimonialsSection heading={wmsTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={wmsFaq.heading}
        items={wmsFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
