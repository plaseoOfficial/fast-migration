import type { Metadata } from "next";
import type { ServiceCard } from "@/types/mnm";
import { PrivatPageLayout } from "@/components/layouts/PrivatPageLayout";
import { MnmHero } from "@/components/sections/privat/MnmHero";
import { MnmIntroStats } from "@/components/sections/privat/MnmIntroStats";
import { MnmWeitereLeistungen } from "@/components/sections/privat/MnmWeitereLeistungen";
import { MnmTypische } from "@/components/sections/privat/MnmTypische";
import { MnmWarum } from "@/components/sections/privat/MnmWarum";
import { MnmGeschichte } from "@/components/sections/privat/MnmGeschichte";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import { SpecTable } from "@/components/sections/shared/SpecTable";
import { SegmentCards } from "@/components/sections/shared/SegmentCards";
import { UspHighlight } from "@/components/sections/shared/UspHighlight";
import { LeistungAnfrage } from "@/components/sections/shared/LeistungAnfrage";
import { planerPreis } from "@/lib/content/anfrage";
import { AnfrageStreifen } from "@/components/sections/shared/AnfrageStreifen";
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
  dachTestimonialsHeading,
  dachFaq,
  dachJsonLd,
} from "@/lib/content/einbauschrank-dachschraege";
import { stripJsonLdLinks } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Drempelschrank nach Maß für Kniestock & Dachschräge",
  description:
    "Drempelschrank und Kniestockschrank nach Maß vom Meisterbetrieb: passgenau an Ihre Schräge geplant, gefertigt, montiert. Kostenloses Aufmaß.",
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
    title: "Dachschrägenschrank & Drempelschrank nach Maß | Fast Systemmöbel",
    description:
      "Drempelschrank und Dachschrägenschrank nach Maß vom Meisterbetrieb in Espelkamp. Passgenau an Kniestock und Schräge geplant, gebaut und montiert.",
    url: "/einbauschraenke-nach-mass/einbauschrank-dachschraege/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

/**
 * Silo-konforme Karten für MnmWeitereLeistungen: kein Cross-Silo in den Gewerbe-
 * Bereich (internal-linking.md Silo-Integrität). Der keyword-reiche Up-Link zeigt
 * auf den Cluster-Pillar /einbauschraenke-nach-mass/ (parent), dazu die Schwester
 * /einbauschraenke-nach-mass/garderobe-nach-mass/ und der Trust-Link /referenzen/. /kontakt/ und /moebelplaner/
 * werden über IntroStats, den Anfrageblock (Möbelplaner-Zeile) und die
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
    title: "Garderobe nach Maß",
    description:
      "Läuft der Flur unter die Schräge, planen wir die Garderobe nach demselben Prinzip: Fronten und Fächer folgen dem Winkel, Jacken und Schuhe finden ihren festen Platz.",
    href: "/einbauschraenke-nach-mass/garderobe-nach-mass/",
    moreLabel: "Flurgarderobe nach Maß",
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

      {/* Anfrageblock: ersetzt den ersten Bild-Aufruf */}
      <LeistungAnfrage
        variante="privat"
        seite="Schrank für Dachschräge"
        ueberschrift="Ihren Schrank unter der Dachschräge planen wir bei Ihnen vor Ort"
        preisZeile={planerPreis("dachschraege")}
      />

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
      <TestimonialsSection heading={dachTestimonialsHeading} />

      {/* Streifen: ersetzt den zweiten Bild-Aufruf, springt zum Anfrageblock */}
      <AnfrageStreifen variante="privat" />

      <FaqSection
        heading={dachFaq.heading}
        items={dachFaq.items}
        ctaLabel="Weitere Fragen? Jetzt anfragen"
        ctaHref="/kontakt/"
      />
    </PrivatPageLayout>
  );
}
