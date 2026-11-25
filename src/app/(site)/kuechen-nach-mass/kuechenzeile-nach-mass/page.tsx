import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { KUECHEN_PREISZEILE } from "@/lib/content/anfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  kzHero,
  kzIntroStats,
  kzZielgruppen,
  kzMasse,
  kzGeraete,
  kzFronten,
  kzProcess,
  kzKostenFaktoren,
  kzTestimonialsHeading,
  kzFaq,
  kzJsonLd,
} from "@/lib/content/kuechenzeile-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Küchenzeile nach Maß vom Tischler | Fast Systemmöbel",
  description:
    "Küchenzeile nach Maß vom Meisterbetrieb in Espelkamp: einzeilige Küche Wand zu Wand ohne Passleisten, für kleine und schmale Räume. Kostenloses Aufmaß.",
  alternates: { canonical: "/kuechen-nach-mass/kuechenzeile-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Küchenzeile nach Maß vom Tischler | Fast Systemmöbel",
    description:
      "Einzeilige Küche nach Maß vom Meisterbetrieb in Espelkamp. Wand zu Wand ohne Passleisten geplant, gebaut und montiert.",
    url: "/kuechen-nach-mass/kuechenzeile-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function KuechenzeileNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(kzJsonLd)) }}
      />

      <MnmHero {...kzHero} />
      <MnmIntroStats {...kzIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage variante="kueche" seite="Küchenzeile nach Maß" preisZeile={KUECHEN_PREISZEILE} />

      <SegmentCards {...kzZielgruppen} />
      <SpecTable {...kzMasse} />
      <UspHighlight {...kzGeraete} />
      <SegmentCards {...kzFronten} />
      <ProcessSteps {...kzProcess} />
      <SpecTable {...kzKostenFaktoren} />
      <TestimonialsSection heading={kzTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="kueche" />

      <FaqSection
        heading={kzFaq.heading}
        items={kzFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
