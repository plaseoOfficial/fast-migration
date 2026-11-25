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
  wohnHero,
  wohnIntroStats,
  wohnProcessSteps,
  wohnTypische,
  wohnWarum,
  wohnUsp,
  wohnVergleich,
  wohnKosten,
  wohnGeschichte,
  wohnTestimonialsHeading,
  wohnFaq,
  wohnJsonLd,
} from "@/lib/content/wohnmoebel-nach-mass";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Wohnmöbel & Wohnzimmermöbel nach Maß | Fast Systemmöbel",
  description:
    "Wohnzimmermöbel nach Maß vom Meisterbetrieb in Espelkamp: Wohnwand, TV-Wand, Sideboard und Regal, passgenau geplant. Kostenloses Aufmaß vor Ort.",
  alternates: { canonical: "/wohnmoebel-nach-mass/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Wohnmöbel & Wohnzimmermöbel nach Maß | Fast Systemmöbel",
    description:
      "Wohnzimmermöbel nach Maß vom Meisterbetrieb in Espelkamp. Millimetergenau geplant, gefertigt und montiert.",
    url: "/wohnmoebel-nach-mass/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

/**
 * Silo-konforme Karten für MnmWeitereLeistungen: ein Privat-Cluster-Pillar
 * verlinkt nicht in den Gewerbe-Silo und nicht lateral zu Schwester-Clustern
 * (internal-linking.md Silo-Integrität). Der Up-Link zum Hub /moebel-nach-mass/
 * trägt einen keyword-reichen Anker. Wohnmöbel-Kinder (TV-Wand, Sideboard …)
 * sind noch nicht gebaut → keine Links (launch clean); beim Bau der Spokes hier
 * beidseitig nachverdrahten.
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

export default function WohnmoebelNachMassPage() {
  return (
    <PrivatPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stripJsonLdLinks(wohnJsonLd)) }}
      />

      <MnmHero {...wohnHero} />
      <MnmIntroStats {...wohnIntroStats} />

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Wohnmöbel"
        ueberschrift="Ihre Wohnmöbel planen wir bei Ihnen vor Ort"
        preisZeile={planerPreis("wohnmoebel")}
      />

      <ProcessSteps {...wohnProcessSteps} />
      <MnmWeitereLeistungen cards={WEITERE_LEISTUNGEN_CARDS} />
      <MnmTypische {...wohnTypische} />
      <MnmWarum {...wohnWarum} imageColumns={2} />
      <UspHighlight {...wohnUsp} />
      <SpecTable {...wohnVergleich} />
      <SegmentCards {...wohnKosten} />
      <MnmGeschichte {...wohnGeschichte} />
      <TestimonialsSection heading={wohnTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={wohnFaq.heading}
        items={wohnFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
