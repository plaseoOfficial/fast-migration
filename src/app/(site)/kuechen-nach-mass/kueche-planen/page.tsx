import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmMoebelplaner } from "@/components/sections/privat/MnmMoebelplaner";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  planenHero,
  planenProcess,
  planenFormen,
  planenErgonomie,
  planenFehler,
  planenTischler,
  planenMoebelplaner,
  planenFaq,
  planenJsonLd,
} from "@/lib/content/kueche-planen";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Küche planen: Anleitung in 7 Schritten | Fast Systemmöbel",
  description:
    "Küche planen Schritt für Schritt: Aufmaß, Küchenform, Arbeitsdreieck, Ergonomie und typische Fehler. Der Planungs-Ratgeber vom Meisterbetrieb aus Espelkamp.",
  alternates: { canonical: "/kuechen-nach-mass/kueche-planen/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Küche planen: Anleitung in 7 Schritten",
    description:
      "Vom Aufmaß bis zur Beleuchtung: So planen Sie Ihre Küche in der richtigen Reihenfolge und vermeiden typische Fehler.",
    url: "/kuechen-nach-mass/kueche-planen/",
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

export default function KuechePlanenPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(planenJsonLd)) }}
      />

      <MnmHero {...planenHero} />
      <ProcessSteps {...planenProcess} />
      <SpecTable {...planenFormen} />
      <SpecTable {...planenErgonomie} />
      <SegmentCards {...planenFehler} />
      <UspHighlight {...planenTischler} />
      <MnmMoebelplaner {...planenMoebelplaner} />

      <FaqSection
        heading={planenFaq.heading}
        items={planenFaq.items}
        ctaLabel="Noch Fragen? Lassen Sie sich beraten"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
