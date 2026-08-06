import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { MnmWeitereLeistungen } from "@/components/sections/privat/MnmWeitereLeistungen";
import { MnmWarum } from "@/components/sections/privat/MnmWarum";
import { MnmGeschichte } from "@/components/sections/privat/MnmGeschichte";
import { MnmMoebelplaner } from "@/components/sections/privat/MnmMoebelplaner";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { ExpandingImageCta } from "@/components/sections/shared/ExpandingImageCta";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  ratgeberHero,
  ratgeberIntroStats,
  ratgeberVergleich,
  ratgeberWarum,
  ratgeberUsp,
  ratgeberProcess,
  ratgeberKosten,
  ratgeberGeschichte,
  ratgeberMoebelplaner,
  ratgeberCtas,
  ratgeberWeitereCards,
  ratgeberTestimonialsHeading,
  ratgeberFaq,
  ratgeberJsonLd,
} from "@/lib/content/ratgeber";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Möbel nach Maß: Ratgeber, Kosten, Ablauf & Material",
  description:
    "Der Ratgeber zu Möbeln nach Maß vom Meisterbetrieb in Espelkamp: Unterschied zu Serienmöbeln, Kosten, Ablauf und Material. Aufmaß kostenlos vor Ort.",
  alternates: { canonical: "/ratgeber/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Möbel nach Maß: Ratgeber, Kosten, Ablauf & Material",
    description:
      "Der Ratgeber zu Möbeln nach Maß vom Meisterbetrieb in Espelkamp: Unterschied zu Serienmöbeln, Kosten, Ablauf und Material.",
    url: "/ratgeber/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function RatgeberPage() {
  return (
    <PrivatPageLayout>
      {/* Structured data: CollectionPage + ItemList + BreadcrumbList + LocalBusiness + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(ratgeberJsonLd)) }}
      />

      <MnmHero {...ratgeberHero} />
      <MnmIntroStats {...ratgeberIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...ratgeberCtas.intro} />
        </div>
      </section>

      {/* Ratgeber-Karten (Herzstück / ItemList): Verteiler in die Cluster */}
      <MnmWeitereLeistungen
        eyebrow="Bereiche"
        heading="Möbel nach Maß für jeden Bereich"
        ampersandText="Ob einzelnes Möbel oder komplette Einrichtung: Wir planen, fertigen und montieren aus einer Hand, für Privaträume genauso wie fürs Gewerbe."
        cards={ratgeberWeitereCards}
      />

      <SpecTable {...ratgeberVergleich} />
      <MnmWarum {...ratgeberWarum} />
      <UspHighlight {...ratgeberUsp} />
      <ProcessSteps {...ratgeberProcess} />
      <SegmentCards {...ratgeberKosten} />
      <MnmGeschichte {...ratgeberGeschichte} />
      <MnmMoebelplaner {...ratgeberMoebelplaner} />
      <TestimonialsSection heading={ratgeberTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...ratgeberCtas.final} />
        </div>
      </section>

      <FaqSection heading={ratgeberFaq.heading} items={ratgeberFaq.items} />
    </PrivatPageLayout>
  );
}
