import type { Metadata } from "next";
import type { ServiceCard } from "@/types/mnm";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
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
  hwrHero,
  hwrIntroStats,
  hwrProcessSteps,
  hwrTypische,
  hwrWarum,
  hwrUsp,
  hwrVergleich,
  hwrKosten,
  hwrGeschichte,
  hwrMoebelplaner,
  hwrCtas,
  hwrTestimonialsHeading,
  hwrFaq,
  hwrJsonLd,
} from "@/lib/content/hauswirtschaftsraum";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Hauswirtschaftsraum einrichten nach Maß aus Espelkamp",
  description:
    "Hauswirtschaftsraum einrichten nach Maß vom Meisterbetrieb in Espelkamp: Stauraum, Waschmaschinen-Verbau, Vorrat und Reinigung. Kostenloses Aufmaß vor Ort.",
  alternates: { canonical: "/hauswirtschaftsraum/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Hauswirtschaftsraum einrichten nach Maß aus Espelkamp",
    description:
      "Hauswirtschaftsraum nach Maß vom Meisterbetrieb in Espelkamp. Millimetergenau geplant, gefertigt und montiert.",
    url: "/hauswirtschaftsraum/",
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
 * trägt einen keyword-reichen Anker. HWR-Kinder (HWR-Schrank, Waschmaschinen-
 * schrank …) sind noch nicht gebaut → keine Links (launch clean); beim Bau der
 * Spokes hier beidseitig nachverdrahten.
 */
const WEITERE_LEISTUNGEN_CARDS: ServiceCard[] = [
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Möbel nach Maß",
    description:
      "Jedes Stück ein Unikat. Ob Wohnraum, Küche oder Bad: Wir fertigen passgenaue Möbel, die sich exakt nach Ihrem Stil, Ihrem Alltag und Ihrem Raum richten.",
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

export default function HauswirtschaftsraumPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(hwrJsonLd)) }}
      />

      <MnmHero {...hwrHero} />
      <MnmIntroStats {...hwrIntroStats} />

      {/* Beratungs-CTA — bottom of the intro/stats section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...hwrCtas.intro} />
        </div>
      </section>

      <ProcessSteps {...hwrProcessSteps} />
      <MnmWeitereLeistungen cards={WEITERE_LEISTUNGEN_CARDS} />
      <MnmTypische {...hwrTypische} />
      <MnmWarum {...hwrWarum} imageColumns={2} />
      <UspHighlight {...hwrUsp} />
      <SpecTable {...hwrVergleich} />
      <SegmentCards {...hwrKosten} />
      <MnmGeschichte {...hwrGeschichte} />
      <MnmMoebelplaner {...hwrMoebelplaner} />
      <TestimonialsSection heading={hwrTestimonialsHeading} />

      {/* Final CTA — bottom of the testimonials section (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta {...hwrCtas.final} />
          {/* Tertiary CTA (Playbook §6): phone as a trust anchor, clickable on mobile. */}
          <p
            className="mt-6 text-center text-[18px] leading-[31.5px] font-medium"
            style={{ color: "rgb(61,61,61)" }}
          >
            {hwrCtas.phone.label}{" "}
            <a
              href={hwrCtas.phone.href}
              className="font-semibold underline transition-colors hover:text-[rgb(237,168,33)]"
            >
              {hwrCtas.phone.number}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={hwrFaq.heading}
        items={hwrFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
