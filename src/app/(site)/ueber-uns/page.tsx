import type { Metadata } from "next";
import { UeberHero } from "@/components/sections/ueber/UeberHero";
import { UeberTimeline } from "@/components/sections/ueber/UeberTimeline";
import { UeberWofuer } from "@/components/sections/ueber/UeberWofuer";
import { UeberLogos } from "@/components/sections/ueber/UeberLogos";
import { UeberValues } from "@/components/sections/ueber/UeberValues";
import { UeberNavCards } from "@/components/sections/ueber/UeberNavCards";
import { UeberFallbeispiel } from "@/components/sections/ueber/UeberFallbeispiel";
import {
  ueberHero,
  ueberTimeline,
  ueberWofuer,
  ueberLogos,
  ueberValues,
  ueberNavCards,
  ueberFallbeispiel,
} from "@/lib/content/ueber-uns";
import { SITE_URL } from "@/lib/content";
import { buildBrandPageJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Über uns: Fast Systemmöbel, Meisterbetrieb aus Espelkamp",
  description:
    "Vom Garagenstart 1996 zum Meisterbetrieb: Wer hinter Fast Systemmöbel steht, wofür wir stehen und wie wir Möbel nach Maß für Espelkamp und Umgebung planen und fertigen.",
  alternates: { canonical: "/ueber-uns/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Über uns: Fast Systemmöbel, Meisterbetrieb aus Espelkamp",
    description:
      "Vom Garagenstart 1996 zum Meisterbetrieb: Wer hinter Fast Systemmöbel steht, wofür wir stehen und wie wir Möbel nach Maß für Espelkamp und Umgebung planen und fertigen.",
    url: "/ueber-uns/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const jsonLd = buildBrandPageJsonLd({
  pageUrl: `${SITE_URL}/ueber-uns/`,
  breadcrumb: ueberHero.breadcrumb,
});

export default function UeberUnsPage() {
  return (
    <main className="flex flex-col">
      {/* Structured data: LocalBusiness + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UeberHero {...ueberHero} />
      <UeberTimeline {...ueberTimeline} />
      <UeberWofuer {...ueberWofuer} />
      <UeberLogos logos={ueberLogos} />
      <UeberValues {...ueberValues} />
      <UeberNavCards cards={ueberNavCards} />
      <UeberFallbeispiel {...ueberFallbeispiel} />
    </main>
  );
}
