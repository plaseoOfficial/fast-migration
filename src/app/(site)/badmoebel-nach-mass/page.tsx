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
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import {
  badHero,
  badIntroStats,
  badProcess,
  badTypische,
  badWarum,
  badVergleich,
  badWarum2,
  badGeschichte,
  badMoebelplaner,
  badCtas,
  badTestimonialsHeading,
  badFaq,
  badJsonLd,
} from "@/lib/content/badmoebel-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Badmöbel nach Maß aus Espelkamp: Planung & Montage",
  description:
    "Badmöbel nach Maß vom Meisterbetrieb in Espelkamp: Waschtisch, Unterschrank und Spiegelschrank, feuchtigkeitsbeständig verarbeitet. Kostenloses Aufmaß vor Ort.",
  alternates: { canonical: "/badmoebel-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Badmöbel nach Maß aus Espelkamp: Planung & Montage",
    description:
      "Badmöbel nach Maß vom Meisterbetrieb in Espelkamp. Millimetergenau geplant, gefertigt und montiert.",
    url: "/badmoebel-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

/**
 * Silo-konforme Karten für MnmWeitereLeistungen: ein Privat-Cluster-Pillar
 * verlinkt nicht in den Gewerbe-Silo und nicht lateral zu Schwester-Clustern
 * (internal-linking.md Silo-Integrität). Der Up-Link zum Hub /moebel-nach-mass/
 * trägt einen keyword-reichen Anker. Bad-Kinder (Waschtisch, Spiegelschrank …)
 * sind noch nicht gebaut → keine Links (launch clean); beim Bau der Spokes hier
 * beidseitig nachverdrahten.
 */
const WEITERE_LEISTUNGEN_CARDS: ServiceCard[] = [
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Möbel nach Maß",
    description:
      "Jedes Stück ein Unikat. Ob Bad, Küche oder Wohnraum: Wir fertigen passgenaue Möbel, die sich exakt nach Ihrem Stil, Ihrem Alltag und Ihrem Raum richten.",
    href: "/moebel-nach-mass/",
    moreLabel: "Alle Möbel nach Maß",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-22.svg",
    title: "Raumkonzepte",
    description:
      "Wir denken Räume ganzheitlich. Durchdachte Konzepte verbinden Architektur, Licht, Materialien und Möbel zu einer harmonischen Einheit – vom ersten Entwurf bis zur Montage.",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-07.svg",
    title: "Fertigung",
    description:
      "Moderne Homag-Technik und handwerkliche Qualitätskontrolle sorgen dafür, dass jedes Bauteil exakt passt. Von Einzelmöbeln bis zu kompletten Räumen.",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-09.svg",
    title: "Montage",
    description:
      "Unsere Monteure arbeiten sauber, termingerecht und millimetergenau. Die finale Passung wird vor Ort abgestimmt – bis jedes Detail sitzt.",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Referenzprojekte",
    description:
      "Realisierte Möbel nach Maß aus unserer Werkstatt: passgenaue Einbauten, Stauraumlösungen und Sonderanfertigungen — millimetergenau eingebaut.",
    href: "/referenzen/",
    moreLabel: "Projekte ansehen",
  },
];

export default function BadmoebelNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(badJsonLd)) }}
      />

      <MnmHero {...badHero} />
      <MnmIntroStats {...badIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...badCtas.intro} />
        </div>
      </section>

      <MnmProcess {...badProcess} />
      <MnmWeitereLeistungen cards={WEITERE_LEISTUNGEN_CARDS} />
      <MnmTypische {...badTypische} />
      <MnmWarum {...badWarum} imageColumns={2} />
      <SpecTable {...badVergleich} />
      <MnmWarum {...badWarum2} reverse imageColumns={1} />
      <MnmGeschichte {...badGeschichte} />
      <MnmMoebelplaner {...badMoebelplaner} />
      <TestimonialsSection heading={badTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...badCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {badCtas.phone.label}{" "}
            <a
              href={badCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {badCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={badFaq.heading}
        items={badFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
