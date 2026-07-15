import type { Metadata } from "next";
import type { ServiceCard } from "@/types/mnm";
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
  suHero,
  suIntroStats,
  suProcess,
  suTypische,
  suWarum,
  suWarum2,
  suGeschichte,
  suMoebelplaner,
  suCtas,
  suTestimonialsHeading,
  suFaq,
  suJsonLd,
} from "@/lib/content/schrank-unter-treppe";

export const metadata: Metadata = {
  title: "Schrank unter der Treppe nach Maß aus Espelkamp: Planung & Montage",
  description:
    "Schrank unter der Treppe nach Maß vom Meisterbetrieb in Espelkamp: Treppen- und Stufenschränke, passgenau an die Treppe geplant, gefertigt und vom eigenen Team montiert. Kostenloses Aufmaß.",
  alternates: { canonical: "/einbauschraenke-nach-mass/schrank-unter-treppe/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Schrank unter der Treppe nach Maß aus Espelkamp: Planung & Montage",
    description:
      "Schränke unter der Treppe nach Maß vom Meisterbetrieb in Espelkamp. Passgenau an die Treppe geplant, gebaut und montiert.",
    url: "/einbauschraenke-nach-mass/schrank-unter-treppe/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

/**
 * Silo-konforme Karten für MnmWeitereLeistungen: kein Cross-Silo in den Gewerbe-
 * Bereich (internal-linking.md Silo-Integrität). Der keyword-reiche Up-Link zeigt
 * auf den Cluster-Pillar /einbauschraenke-nach-mass/ (parent), dazu der Hub
 * /moebel-nach-mass/ und der Trust-Link /referenzen/. /kontakt/ und /moebelplaner/
 * werden über IntroStats, die beiden ExpandingImageCtas, MnmMoebelplaner und die
 * FaqSection verlinkt (Conversion-MUSS, wie bei der Dachschräge-Schwester).
 */
const WEITERE_LEISTUNGEN_CARDS: ServiceCard[] = [
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Einbauschränke nach Maß",
    description:
      "Der Schrank unter der Treppe ist Teil unserer Einbauschränke nach Maß: Kleiderschränke, Nischenschränke und Ankleiden, zentimetergenau von Wand zu Wand geplant.",
    href: "/einbauschraenke-nach-mass/",
    moreLabel: "Alle Einbauschränke nach Maß",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-22.svg",
    title: "Möbel nach Maß",
    description:
      "Jedes Stück ein Unikat. Ob Küche, Schrank oder Wohnraum: Wir fertigen passgenaue Möbel, die sich exakt nach Ihrem Stil, Ihrem Alltag und Ihrem Raum richten.",
    href: "/moebel-nach-mass/",
    moreLabel: "Alle Möbel nach Maß",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-07.svg",
    title: "Aufmaß & 3D-Planung",
    description:
      "Wir nehmen die Treppe kostenlos vor Ort auf, mit jeder Stufenhöhe und dem Verlauf der Unterseite, und planen Ihren Schrank in 3D. Sie sehen ihn, bevor das erste Bauteil entsteht.",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-09.svg",
    title: "Fertigung & Montage",
    description:
      "Gefertigt auf Homag-Technik in Espelkamp, montiert von unserem eigenen Team. Die Passung an der Treppe stimmen wir vor Ort ab, bis jedes Detail sitzt.",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Referenzprojekte",
    description:
      "Realisierte Schränke nach Maß aus unserer Werkstatt: Treppen, Stufen und Ankleiden, passgenau eingebaut in ganz OWL.",
    href: "/referenzen/",
    moreLabel: "Schrankprojekte ansehen",
  },
];

export default function SchrankUnterTreppePage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(suJsonLd) }}
      />

      <MnmHero {...suHero} />
      <MnmIntroStats {...suIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...suCtas.intro} />
        </div>
      </section>

      <MnmProcess {...suProcess} />
      <MnmWeitereLeistungen cards={WEITERE_LEISTUNGEN_CARDS} />
      <MnmTypische {...suTypische} />
      <MnmWarum {...suWarum} imageColumns={1} />
      <MnmWarum {...suWarum2} reverse imageColumns={1} />
      <MnmGeschichte {...suGeschichte} />
      <MnmMoebelplaner {...suMoebelplaner} />
      <TestimonialsSection heading={suTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...suCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {suCtas.phone.label}{" "}
            <a
              href={suCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {suCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={suFaq.heading}
        items={suFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
