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
  dsHero,
  dsIntroStats,
  dsBegriffe,
  dsFormen,
  dsMasse,
  dsLoesungen,
  dsProcess,
  dsKostenFaktoren,
  dsKombi,
  dsTestimonialsHeading,
  dsFaq,
  dsJsonLd,
} from "@/lib/content/kueche-mit-dachschraege";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Küche mit Dachschräge nach Maß | Fast Systemmöbel",
  description:
    "Küche mit Dachschräge vom Tischler: kostenloses Aufmaß der Schräge, Fertigung im eigenen Meisterbetrieb in Espelkamp, Montage deutschlandweit auf Anfrage.",
  alternates: { canonical: "/kuechen-nach-mass/kueche-mit-dachschraege/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Küche mit Dachschräge nach Maß | Fast Systemmöbel",
    description:
      "Dachschrägen-Küche nach Maß vom Meisterbetrieb in Espelkamp. Grad-genau geplant, gebaut und vom eigenen Team montiert.",
    url: "/kuechen-nach-mass/kueche-mit-dachschraege/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function KuecheMitDachschraegePage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(dsJsonLd)) }}
      />

      <MnmHero {...dsHero} />
      <MnmIntroStats {...dsIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage variante="kueche" seite="Küche mit Dachschräge" preisZeile={KUECHEN_PREISZEILE} />

      <SegmentCards {...dsBegriffe} />
      <SegmentCards {...dsFormen} />
      <SpecTable {...dsMasse} />
      <SegmentCards {...dsLoesungen} />
      <ProcessSteps {...dsProcess} />
      <SpecTable {...dsKostenFaktoren} />
      <UspHighlight {...dsKombi} />
      <TestimonialsSection heading={dsTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="kueche" />

      <FaqSection
        heading={dsFaq.heading}
        items={dsFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
