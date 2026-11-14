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
  krHero,
  krProcess,
  krFormen,
  krPlatz,
  krTischlaenge,
  krAkustik,
  krFehler,
  krWerkstatt,
  krMass,
  krCta,
  krFaq,
  krJsonLd,
} from "@/lib/content/konferenzraum-einrichten";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Konferenzraum einrichten in 7 Schritten | Fast Systemmöbel",
  description:
    "Konferenzraum einrichten: Platzbedarf je Person, passende Tischform, Technik im Tisch und Akustik. Mit DGUV-Richtwerten, Tabellen und sieben Schritten.",
  alternates: { canonical: "/bueroeinrichtung/konferenzraum-einrichten/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Konferenzraum einrichten in 7 Schritten",
    description:
      "So planen Sie Ihren Besprechungsraum: Tischform, Tischgröße nach Personenzahl, Gangbreiten, Kabelwege und Akustik, Schritt für Schritt erklärt.",
    url: "/bueroeinrichtung/konferenzraum-einrichten/",
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

export default function KonferenzraumEinrichtenPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(krJsonLd)) }}
      />

      <MnmHero {...krHero} />
      <ProcessSteps {...krProcess} />
      <SpecTable {...krFormen} />
      <SpecTable {...krPlatz} />
      <SpecTable {...krTischlaenge} />
      <SpecTable {...krAkustik} />
      <SegmentCards {...krFehler} />
      <UspHighlight {...krWerkstatt} />
      <SegmentCards {...krMass} />
      <MnmMoebelplaner {...krCta} />

      <FaqSection
        heading={krFaq.heading}
        items={krFaq.items}
        ctaLabel="Noch Fragen? Lassen Sie sich beraten"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
