import type { Metadata } from "next";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { MnmMoebelplaner } from "@/components/sections/privat/MnmMoebelplaner";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { ExpandingImageCta } from "@/components/sections/shared/ExpandingImageCta";
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
  kzMoebelplaner,
  kzCtas,
  kzTestimonialsHeading,
  kzFaq,
  kzJsonLd,
} from "@/lib/content/kuechenzeile-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Küchenzeile nach Maß aus Espelkamp | Fast Systemmöbel",
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
    title: "Küchenzeile nach Maß aus Espelkamp | Fast Systemmöbel",
    description:
      "Einzeilige Küche nach Maß vom Meisterbetrieb in Espelkamp. Wand zu Wand ohne Passleisten geplant, gebaut und montiert.",
    url: "/kuechen-nach-mass/kuechenzeile-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function KuechenzeileNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(kzJsonLd)) }}
      />

      <MnmHero {...kzHero} />
      <MnmIntroStats {...kzIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...kzCtas.intro} />
        </div>
      </section>

      <SegmentCards {...kzZielgruppen} />
      <SpecTable {...kzMasse} />
      <UspHighlight {...kzGeraete} />
      <SegmentCards {...kzFronten} />
      <ProcessSteps {...kzProcess} />
      <SpecTable {...kzKostenFaktoren} />
      <MnmMoebelplaner {...kzMoebelplaner} />
      <TestimonialsSection heading={kzTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...kzCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {kzCtas.phone.label}{" "}
            <a
              href={kzCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {kzCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={kzFaq.heading}
        items={kzFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
