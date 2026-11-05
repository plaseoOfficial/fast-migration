import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmMoebelplaner } from "@/components/sections/privat/MnmMoebelplaner";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { ContrastCols } from "@/components/sections/shared/ContrastCols";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  holzMeta,
  holzHero,
  holzMoebeltyp,
  holzArten,
  holzBegriffe,
  holzMaterialien,
  holzOberflaechen,
  holzPflege,
  holzKlima,
  holzWerkstatt,
  holzFehler,
  holzMoebelplaner,
  holzFaq,
  holzJsonLd,
} from "@/lib/content/holzarten-materialien-moebel";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: holzMeta.metaTitle,
  description: holzMeta.metaDescription,
  alternates: { canonical: "/ratgeber/holzarten-materialien-moebel/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: holzMeta.metaTitle,
    description: holzMeta.ogDescription,
    url: "/ratgeber/holzarten-materialien-moebel/",
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

export default function HolzartenMaterialienMoebelPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(holzJsonLd)) }}
      />

      <MnmHero {...holzHero} />
      <SpecTable {...holzMoebeltyp} />
      <SpecTable {...holzArten} />
      <SegmentCards {...holzBegriffe} />
      <SpecTable {...holzMaterialien} />
      <SpecTable {...holzOberflaechen} />
      <ContrastCols {...holzPflege} />
      <SegmentCards {...holzKlima} />
      <UspHighlight {...holzWerkstatt} />
      <SegmentCards {...holzFehler} />
      <MnmMoebelplaner {...holzMoebelplaner} />

      <FaqSection
        heading={holzFaq.heading}
        items={holzFaq.items}
        ctaLabel="Noch Fragen? Lassen Sie sich beraten"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
