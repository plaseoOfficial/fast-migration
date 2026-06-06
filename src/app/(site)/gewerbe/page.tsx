import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/shared/ServiceHero";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { ExpandingImageCta } from "@/components/sections/shared/ExpandingImageCta";
import { MnmWeitereLeistungen } from "@/components/sections/privat/MnmWeitereLeistungen";
import { MnmMoebelplaner } from "@/components/sections/privat/MnmMoebelplaner";
import { GewerbeIntroStats } from "@/components/sections/gewerbe/GewerbeIntroStats";
import { GewerbeLadenGastro } from "@/components/sections/gewerbe/GewerbeLadenGastro";
import { GewerbeLeistungen } from "@/components/sections/gewerbe/GewerbeLeistungen";
import { GewerbeWarum } from "@/components/sections/gewerbe/GewerbeWarum";

export const metadata: Metadata = {
  title: "Gewerbeeinrichtung nach Maß: Büro, Praxis & Ladenbau",
  description:
    "Funktionale Gewerbeeinrichtung nach Maß für Büro, Praxis, Ladenbau und Gastro. Geplant, in Espelkamp gefertigt und vor Ort montiert.",
  openGraph: {
    title: "Gewerbeeinrichtung nach Maß: Büro, Praxis & Ladenbau",
    description:
      "Funktionale Gewerbeeinrichtung nach Maß für Büro, Praxis, Ladenbau und Gastro.",
    locale: "de_DE",
    type: "article",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

/**
 * Hub -> cluster down-links: the "Weitere Leistungen" cards on the Gewerbe hub
 * point to the Gewerbe service clusters (silo distribution). Same mechanism as
 * the Privat hub linking down to /kuechen-nach-mass/. Props-only, no markup
 * change. Icons reuse the existing interior-design icon set.
 */
const GEWERBE_CLUSTER_CARDS = [
  {
    icon: "/images/2024/03/interior-design-white-icons-08.svg",
    title: "Büroeinrichtung nach Maß",
    description:
      "Arbeitsplätze, Stauraum, Konferenz- und Empfangsbereiche. Geplant, gefertigt und montiert für Büros, die zu Ihren Abläufen passen.",
    href: "/bueroeinrichtung/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Praxiseinrichtung nach Maß",
    description:
      "Empfangstresen, Behandlungs- und Wartebereiche für Ärzte, Therapeuten und Kanzleien. Hygienisch, repräsentativ und zentimetergenau gebaut.",
    href: "/praxiseinrichtung/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-22.svg",
    title: "Gastronomieeinrichtung nach Maß",
    description:
      "Theken, Tresen und Mobiliar für Restaurant, Café, Bar und Hotel. Strapazierfähig gebaut für den Dauereinsatz, bundesweit geliefert.",
    href: "/gastronomieeinrichtung/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-09.svg",
    title: "Ladenbau nach Maß",
    description:
      "Verkaufstheken, Warenträger und komplette Shopkonzepte. Vom einzelnen Tresen bis zur fertigen Verkaufsfläche aus einer Hand.",
    href: "/gewerbe/ladenbau/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-07.svg",
    title: "Serienmöbel & Serienfertigung",
    description:
      "Identische Möbel in Serie, zentimetergenau nach Zeichnung. Seriengleiche Qualität für Filialen, Hotellerie und Pflegeeinrichtungen.",
    href: "/serienmoebel/",
  },
];

const FAQ_ITEMS = [
  {
    question: "Arbeiten Sie nur in Espelkamp?",
    answer:
      "Wir fertigen in Espelkamp, montieren im Umkreis von ca. 200 km und liefern deutschlandweit.",
  },
  {
    question: "Sind Maßmöbel pflegeleicht?",
    answer:
      "Ja. Unsere Dekore und Materialien sind robust und leicht zu reinigen.",
  },
  {
    question: "Welche Möbel fertigen Sie?",
    answer:
      "Schränke und Regale, Sideboards, Kommoden, Dachschrägen-Lösungen, Kleiderschränke und mehr Stauraum.",
  },
  {
    question: "Wie läuft die Planung ab?",
    answer:
      "Mit Aufmaß-Service, digitalem Planen und klarer Abstimmung bis zur fertigen Maßanfertigung.",
  },
];

export default function GewerbeeinrichtungPage() {
  return (
    <main className="flex flex-col">
      <ServiceHero
        title="Gewerbeeinrichtung nach Maß – funktionale Lösungen für jedes Objekt"
        breadcrumb={[
          { label: "Fast Systemmöbel", href: "/" },
          { label: "Gewerbeeinrichtung" },
        ]}
        bgImage="/images/2025/11/DSC_0001.jpg"
        intro="Wir entwickeln Gewerbeeinrichtungen, die exakt zu Ihren Abläufen passen. Präzise geplant, in Espelkamp gefertigt und vor Ort montiert. Für Räume, die funktionieren, Mitarbeiter entlasten und täglich zuverlässig arbeiten."
      />

      <GewerbeIntroStats />

      {/* Gewerbemöbel expanding CTA — bottom of intro/stats (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta
            image="/images/2025/11/DSC_9965.jpg"
            heading="Gewerbemöbel nach Ihren Vorstellungen"
            linkText="Sprechen Sie mit uns über Ihr Projekt"
            href="/kontakt"
          />
        </div>
      </section>

      <GewerbeLadenGastro />
      <MnmWeitereLeistungen cards={GEWERBE_CLUSTER_CARDS} />
      <GewerbeLeistungen />
      <GewerbeWarum />
      <MnmMoebelplaner />
      <TestimonialsSection heading="Was unsere Kunden dazu sagen" />

      {/* Final CTA (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-14 lg:pb-[64px]">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta
            image="/images/2025/11/DSC_9938.jpg"
            heading="Ihr Raum verdient mehr als Standard."
            linkText="Sprechen Sie mit uns über Ihr Projekt."
            href="/kontakt"
          />
        </div>
      </section>

      <FaqSection heading="Häufige Fragen zur Gewerbeeinrichtung" items={FAQ_ITEMS} />
    </main>
  );
}
