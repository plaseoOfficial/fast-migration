import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { MnmProcess } from "@/components/sections/privat/MnmProcess";
import { MnmWeitereLeistungen } from "@/components/sections/privat/MnmWeitereLeistungen";
import { MnmTypische } from "@/components/sections/privat/MnmTypische";
import { MnmWarum } from "@/components/sections/privat/MnmWarum";
import { MnmGeschichte } from "@/components/sections/privat/MnmGeschichte";
import { MnmMoebelplaner } from "@/components/sections/privat/MnmMoebelplaner";
import { ExpandingImageCta } from "@/components/sections/shared/ExpandingImageCta";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  mnmHero,
  mnmIntroStats,
  mnmProcess,
  mnmTypische,
  mnmWarum,
  mnmGeschichte,
  mnmCtas,
  mnmTestimonialsHeading,
  mnmFaq,
  mnmWeitereCards,
} from "@/lib/content/moebel-nach-mass";
import { SITE_URL } from "@/lib/content";
import { buildServicePageJsonLd } from "@/lib/seo/jsonld";

const DESCRIPTION =
  "Individuelle Maßmöbel für Küche, Bad, Wohnraum und Homeoffice. Millimetergenau geplant und gefertigt im Meisterbetrieb. Beratung kostenlos.";

export const metadata: Metadata = {
  title: "Möbel nach Maß aus Espelkamp: Planung, Fertigung, Montage",
  description: DESCRIPTION,
  alternates: { canonical: "/moebel-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Möbel nach Maß aus Espelkamp: Planung, Fertigung, Montage",
    description: DESCRIPTION,
    url: "/moebel-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

const jsonLd = buildServicePageJsonLd({
  pageUrl: `${SITE_URL}/moebel-nach-mass/`,
  name: "Möbel nach Maß",
  description: DESCRIPTION,
  breadcrumb: mnmHero.breadcrumb,
  faq: mnmFaq.items,
  serviceType: "Möbel nach Maß",
});

export default function MoebelNachMassPage() {
  return (
    <PrivatPageLayout>
      {/* Structured data: LocalBusiness + Service + BreadcrumbList + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MnmHero {...mnmHero} />
      <MnmIntroStats {...mnmIntroStats} />

      {/* Maßmöbel expanding CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...mnmCtas.intro} />
        </div>
      </section>

      <MnmProcess {...mnmProcess} />
      <MnmWeitereLeistungen cards={mnmWeitereCards} />
      <MnmTypische {...mnmTypische} />
      <MnmWarum {...mnmWarum} />
      <MnmGeschichte {...mnmGeschichte} />
      <MnmMoebelplaner />
      <TestimonialsSection heading={mnmTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...mnmCtas.final} />
        </div>
      </section>

      <FaqSection heading={mnmFaq.heading} items={mnmFaq.items} />
    </PrivatPageLayout>
  );
}
