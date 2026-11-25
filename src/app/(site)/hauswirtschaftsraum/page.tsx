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
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { planerPreis } from "@/lib/content/anfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
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
  hwrTestimonialsHeading,
  hwrFaq,
  hwrJsonLd,
} from "@/lib/content/hauswirtschaftsraum";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Hauswirtschaftsraum einrichten nach Maß vom Tischler",
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
    title: "Hauswirtschaftsraum einrichten nach Maß vom Tischler",
    description:
      "Hauswirtschaftsraum nach Maß vom Meisterbetrieb in Espelkamp. Millimetergenau geplant, gefertigt und montiert.",
    url: "/hauswirtschaftsraum/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

/**
 * Silo-konforme Karten für MnmWeitereLeistungen: ein Privat-Cluster-Pillar
 * verlinkt nicht in den Gewerbe-Silo und nicht lateral zu Schwester-Clustern
 * (internal-linking.md Silo-Integrität). Der Up-Link zum Hub /moebel-nach-mass/
 * trägt einen keyword-reichen Anker. Die HWR-Kinder verlinkt das Content-Modul
 * im Fließtext (Waschmaschinenschrank: Verteiler-Karte in hwrTypische; Ratgeber
 * planen: FAQ „Welche Anschlüsse …“); die übrigen Kinder sind noch nicht gebaut
 * → keine Links (launch clean); beim Bau im Content-Modul beidseitig nachverdrahten.
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

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Hauswirtschaftsraum"
        ueberschrift="Ihren Hauswirtschaftsraum planen wir bei Ihnen vor Ort"
        preisZeile={planerPreis("hauswirtschaftsraum")}
      />

      <ProcessSteps {...hwrProcessSteps} />
      <MnmWeitereLeistungen cards={WEITERE_LEISTUNGEN_CARDS} />
      <MnmTypische {...hwrTypische} />
      <MnmWarum {...hwrWarum} imageColumns={2} />
      <UspHighlight {...hwrUsp} />
      <SpecTable {...hwrVergleich} />
      <SegmentCards {...hwrKosten} />
      <MnmGeschichte {...hwrGeschichte} />
      <TestimonialsSection heading={hwrTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={hwrFaq.heading}
        items={hwrFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
