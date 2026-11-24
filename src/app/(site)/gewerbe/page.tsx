import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/shared/ServiceHero";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
import { MnmWeitereLeistungen } from "@/components/sections/privat/MnmWeitereLeistungen";
import { GewerbeIntroStats } from "@/components/sections/gewerbe/GewerbeIntroStats";
import { GewerbeLadenGastro } from "@/components/sections/gewerbe/GewerbeLadenGastro";
import { GewerbeLeistungen } from "@/components/sections/gewerbe/GewerbeLeistungen";
import { GewerbeWarum } from "@/components/sections/gewerbe/GewerbeWarum";
import {
  gewerbeHero,
  gewerbeIntroStats,
  gewerbeLadenGastro,
  gewerbeLeistungen,
  gewerbeWarum,
  gewerbeClusterCards,
  gewerbeTestimonialsHeading,
  gewerbeFaq,
} from "@/lib/content/gewerbe";
import { SITE_URL } from "@/lib/content";
import { buildServicePageJsonLd } from "@/lib/seo/jsonld";

const DESCRIPTION =
  "Funktionale Gewerbeeinrichtung nach Maß für Büro, Praxis, Ladenbau und Gastro. Geplant, in Espelkamp gefertigt und vor Ort montiert.";

export const metadata: Metadata = {
  title: "Gewerbeeinrichtung nach Maß: Büro, Praxis & Ladenbau",
  description: DESCRIPTION,
  alternates: { canonical: "/gewerbe/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Gewerbeeinrichtung nach Maß: Büro, Praxis & Ladenbau",
    description:
      "Funktionale Gewerbeeinrichtung nach Maß für Büro, Praxis, Ladenbau und Gastro.",
    url: "/gewerbe/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const jsonLd = buildServicePageJsonLd({
  pageUrl: `${SITE_URL}/gewerbe/`,
  name: "Gewerbeeinrichtung nach Maß",
  description: DESCRIPTION,
  breadcrumb: gewerbeHero.breadcrumb,
  faq: gewerbeFaq.items,
  serviceType: "Gewerbeeinrichtung nach Maß",
});

export default function GewerbeeinrichtungPage() {
  return (
    <main className="flex flex-col">
      {/* Structured data: LocalBusiness + Service + BreadcrumbList + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceHero {...gewerbeHero} />

      <GewerbeIntroStats {...gewerbeIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage variante="gewerbe" seite="Gewerbe" />

      <GewerbeLadenGastro {...gewerbeLadenGastro} />
      <MnmWeitereLeistungen cards={gewerbeClusterCards} />
      <GewerbeLeistungen {...gewerbeLeistungen} />
      <GewerbeWarum {...gewerbeWarum} />
      <TestimonialsSection heading={gewerbeTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="gewerbe" />

      <FaqSection heading={gewerbeFaq.heading} items={gewerbeFaq.items} ctaHref="/kontakt/" />
    </main>
  );
}
