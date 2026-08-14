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
  dsHero,
  dsIntroStats,
  dsBegriffe,
  dsFormen,
  dsMasse,
  dsLoesungen,
  dsProcess,
  dsKostenFaktoren,
  dsKombi,
  dsMoebelplaner,
  dsCtas,
  dsTestimonialsHeading,
  dsFaq,
  dsJsonLd,
} from "@/lib/content/kueche-mit-dachschraege";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Küche mit Dachschräge nach Maß | Espelkamp",
  description:
    "Küche mit Dachschräge nach Maß aus Espelkamp: grad-genau geplant, Stauraum bis zum Kniestock, Wand zu Wand ohne Passleisten. Kostenloses Aufmaß vor Ort.",
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
    title: "Küche mit Dachschräge nach Maß | Espelkamp",
    description:
      "Dachschrägen-Küche nach Maß vom Meisterbetrieb in Espelkamp. Grad-genau geplant, gebaut und vom eigenen Team montiert.",
    url: "/kuechen-nach-mass/kueche-mit-dachschraege/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

export default function KuecheMitDachschraegePage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(dsJsonLd)) }}
      />

      <MnmHero {...dsHero} />
      <MnmIntroStats {...dsIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...dsCtas.intro} />
        </div>
      </section>

      <SegmentCards {...dsBegriffe} />
      <SegmentCards {...dsFormen} />
      <SpecTable {...dsMasse} />
      <SegmentCards {...dsLoesungen} />
      <ProcessSteps {...dsProcess} />
      <SpecTable {...dsKostenFaktoren} />
      <UspHighlight {...dsKombi} />
      <MnmMoebelplaner {...dsMoebelplaner} />
      <TestimonialsSection heading={dsTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...dsCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {dsCtas.phone.label}{" "}
            <a
              href={dsCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {dsCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={dsFaq.heading}
        items={dsFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
