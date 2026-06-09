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
  kuechenHero,
  kuechenIntroStats,
  kuechenProcess,
  kuechenTypische,
  kuechenWarum,
  kuechenWarum2,
  kuechenGeschichte,
  kuechenMoebelplaner,
  kuechenCtas,
  kuechenTestimonialsHeading,
  kuechenFaq,
  kuechenJsonLd,
} from "@/lib/content/kuechen-nach-mass";

export const metadata: Metadata = {
  title: "Küchen nach Maß aus Espelkamp: Planung, Fertigung, Montage",
  description:
    "Küchen nach Maß vom Meisterbetrieb in Espelkamp. Zentimetergenau geplant, in eigener Fertigung gebaut, vom eigenen Team montiert. Kostenloses Aufmaß vor Ort.",
  alternates: { canonical: "/kuechen-nach-mass/" },
  openGraph: {
    title: "Küchen nach Maß aus Espelkamp: Planung, Fertigung, Montage",
    description:
      "Küchen nach Maß vom Meisterbetrieb in Espelkamp. Zentimetergenau geplant, gebaut und montiert.",
    url: "/kuechen-nach-mass/",
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

/**
 * Silo-konforme Karten für MnmWeitereLeistungen: die Default-Gewerbe-Karte
 * (/gewerbe/) ist hier entfernt: ein Privat-Cluster-Pillar verlinkt nicht in
 * den Gewerbe-Silo (internal-linking.md Silo-Integrität). Der Up-Link zum Hub
 * /moebel-nach-mass/ trägt einen keyword-reichen Anker statt "Mehr Infos hier".
 */
const WEITERE_LEISTUNGEN_CARDS: ServiceCard[] = [
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Möbel nach Maß",
    description:
      "Jedes Stück ein Unikat. Ob Küche, Bad oder Wohnraum: Wir fertigen passgenaue Möbel, die sich exakt nach Ihrem Stil, Ihrem Alltag und Ihrem Raum richten.",
    href: "/moebel-nach-mass/",
    moreLabel: "Alle Möbel nach Maß",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-22.svg",
    title: "Raumkonzepte",
    description:
      "Wir denken Räume ganzheitlich. Durchdachte Konzepte verbinden Architektur, Licht, Materialien und Möbel zu einer harmonischen Einheit – vom ersten Entwurf bis zur Montage.",
    href: "#",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-07.svg",
    title: "Fertigung",
    description:
      "Moderne Homag-Technik und handwerkliche Qualitätskontrolle sorgen dafür, dass jedes Bauteil exakt passt. Von Einzelmöbeln bis zu kompletten Räumen.",
    href: "#",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-09.svg",
    title: "Montage",
    description:
      "Unsere Monteure arbeiten sauber, termingerecht und millimetergenau. Die finale Passung wird vor Ort abgestimmt – bis jedes Detail sitzt.",
    href: "#",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Referenzprojekte",
    description:
      "Realisierte Küchen nach Maß aus unserer Werkstatt: grifflose Fronten, Kochinseln und Stauraum bis unter die Decke — zentimetergenau eingebaut.",
    href: "/referenzen/",
    moreLabel: "Küchenprojekte ansehen",
  },
];

export default function KuechenNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kuechenJsonLd) }}
      />

      <MnmHero {...kuechenHero} />
      <MnmIntroStats {...kuechenIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...kuechenCtas.intro} />
        </div>
      </section>

      <MnmProcess {...kuechenProcess} />
      <MnmWeitereLeistungen cards={WEITERE_LEISTUNGEN_CARDS} />
      <MnmTypische {...kuechenTypische} />
      <MnmWarum {...kuechenWarum} imageColumns={2} />
      <MnmWarum {...kuechenWarum2} reverse imageColumns={1} />
      <MnmGeschichte {...kuechenGeschichte} />
      <MnmMoebelplaner {...kuechenMoebelplaner} />
      <TestimonialsSection heading={kuechenTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...kuechenCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {kuechenCtas.phone.label}{" "}
            <a
              href={kuechenCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {kuechenCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={kuechenFaq.heading}
        items={kuechenFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
