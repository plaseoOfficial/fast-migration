import type { Metadata } from "next";
import type { ServiceCard } from "@/types/mnm";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { MnmWeitereLeistungen } from "@/components/sections/privat/MnmWeitereLeistungen";
import { MnmTypische } from "@/components/sections/privat/MnmTypische";
import { MnmWarum } from "@/components/sections/privat/MnmWarum";
import { MnmGeschichte } from "@/components/sections/privat/MnmGeschichte";
import { MnmMoebelplaner } from "@/components/sections/privat/MnmMoebelplaner";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { ExpandingImageCta } from "@/components/sections/shared/ExpandingImageCta";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  dachHero,
  dachIntroStats,
  dachBegriffe,
  dachProcess,
  dachTypische,
  dachWarum,
  dachVergleich,
  dachPreisFaktoren,
  dachAngebot,
  dachGeschichte,
  dachMoebelplaner,
  dachCtas,
  dachTestimonialsHeading,
  dachFaq,
  dachJsonLd,
} from "@/lib/content/einbauschrank-dachschraege";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Schrank für Dachschräge & Drempelschrank nach Maß, Espelkamp",
  description:
    "Drempelschrank und Schrank für Dachschräge nach Maß vom Meisterbetrieb in Espelkamp: passgenau an den Kniestock gebaut und montiert. Kostenloses Aufmaß.",
  alternates: { canonical: "/einbauschraenke-nach-mass/einbauschrank-dachschraege/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Schrank für Dachschräge & Drempelschrank nach Maß, Espelkamp",
    description:
      "Drempelschrank und Dachschrägenschrank nach Maß vom Meisterbetrieb in Espelkamp. Passgenau an Kniestock und Schräge geplant, gebaut und montiert.",
    url: "/einbauschraenke-nach-mass/einbauschrank-dachschraege/",
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
 * FaqSection verlinkt (Conversion-MUSS, wie beim Pillar).
 */
const WEITERE_LEISTUNGEN_CARDS: ServiceCard[] = [
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Einbauschränke nach Maß",
    description:
      "Der Dachschrägenschrank ist Teil unserer Einbauschränke nach Maß: Kleiderschränke, Nischenschränke und Ankleiden, zentimetergenau von Wand zu Wand geplant.",
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
      "Wir nehmen die Schräge kostenlos vor Ort auf, mit Kniestockhöhe und Winkel, und planen Ihren Schrank in 3D. Sie sehen ihn, bevor das erste Bauteil entsteht.",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-09.svg",
    title: "Fertigung & Montage",
    description:
      "Gefertigt auf Homag-Technik in Espelkamp, montiert von unserem eigenen Team. Die Passung an der Schräge stimmen wir vor Ort ab, bis jedes Detail sitzt.",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Referenzprojekte",
    description:
      "Realisierte Schränke nach Maß aus unserer Werkstatt: Dachschrägen, Drempel und Ankleiden, passgenau eingebaut in ganz OWL.",
    href: "/referenzen/",
    moreLabel: "Schrankprojekte ansehen",
  },
];

export default function EinbauschrankDachschraegePage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(dachJsonLd)) }}
      />

      <MnmHero {...dachHero} />
      <MnmIntroStats {...dachIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...dachCtas.intro} />
        </div>
      </section>

      {/* Begriffs-Glossar — nimmt die Definitionen auf, die IntroStats überfrachtet haben */}
      <SegmentCards {...dachBegriffe} />
      <ProcessSteps {...dachProcess} />
      <MnmWeitereLeistungen cards={WEITERE_LEISTUNGEN_CARDS} />
      <MnmTypische {...dachTypische} />
      <MnmWarum {...dachWarum} imageColumns={1} />
      {/* Ex-dachWarum2, aufgeteilt (§1.1): Vergleich → Preisfaktoren → Angebots-USP */}
      <SpecTable {...dachVergleich} />
      <SegmentCards {...dachPreisFaktoren} />
      <UspHighlight {...dachAngebot} />
      <MnmGeschichte {...dachGeschichte} />
      <MnmMoebelplaner {...dachMoebelplaner} />
      <TestimonialsSection heading={dachTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...dachCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {dachCtas.phone.label}{" "}
            <a
              href={dachCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {dachCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={dachFaq.heading}
        items={dachFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
