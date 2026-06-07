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
      "Arbeitsplätze, Stauraum, Konferenz- und Empfangsbereiche für Büros und Kanzleien. Büromöbel nach Maß, geplant und montiert für Ihre Abläufe.",
    href: "/bueroeinrichtung/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Praxiseinrichtung nach Maß",
    description:
      "Empfangstresen, Behandlungs- und Wartebereiche für Ärzte, Therapeuten und Praxen. Hygienisch, repräsentativ und zentimetergenau gebaut.",
    href: "/praxiseinrichtung/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-22.svg",
    title: "Gastronomieeinrichtung nach Maß",
    description:
      "Theken, Tresen und Mobiliar für Restaurant, Café, Bar und Hotel. Strapazierfähig für den Dauereinsatz, bundesweit geliefert.",
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
      "Identische Möbel in Serie, zentimetergenau nach Zeichnung. Serienfertigung für Filialisten, Hotellerie und Pflegeeinrichtungen.",
    href: "/serienmoebel/",
  },
];

const FAQ_ITEMS = [
  {
    question: "Was kostet eine Gewerbeeinrichtung nach Maß?",
    answer:
      "Pauschale Preise gibt es bei Maßanfertigung nicht, jedes Objekt ist anders. Die Kosten hängen von Branche, Fläche, Material, Stückzahl und Ausstattungsgrad ab. Wir kommen für ein kostenloses Aufmaß vor Ort und erstellen Ihnen danach ein individuelles Angebot.",
  },
  {
    question: "Wie läuft eine Gewerbeeinrichtung von der Anfrage bis zur Montage ab?",
    answer:
      "In fünf Schritten: Beratung, kostenloses Aufmaß vor Ort, technische 3D-Planung, Fertigung in Espelkamp und Montage durch unser eigenes Team. Sie haben durchgehend einen Ansprechpartner, von der ersten Idee bis zur Abnahme.",
  },
  {
    question: "Für welche Branchen fertigt Fast Systemmöbel Gewerbeeinrichtungen?",
    answer:
      "Wir richten Büros und Kanzleien, Praxen, Ladenflächen sowie Restaurants, Cafés und Hotels ein. Für Filialisten und Ketten fertigen wir zusätzlich Serienmöbel in jeder Stückzahl. Hotel zählt zur Gastronomie, Kanzleien zur Büroeinrichtung.",
  },
  {
    question: "Was ist der Unterschied zwischen maßgefertigter Gewerbeeinrichtung und Serienware?",
    answer:
      "Serienware vom Möbelhandel kommt mit Standardmaßen und passt selten lückenlos in einen Gewerbegrundriss. Maßanfertigung sitzt auf Ihrem Grundriss, Ihrem Arbeitsablauf und Ihrem Corporate Design. Außerdem hält sie intensiver täglicher Nutzung besser stand.",
  },
  {
    question: "Welche Materialien eignen sich für stark beanspruchte Gewerberäume?",
    answer:
      "Wir arbeiten mit Massivholz und branchenüblichen hochwertigen Materialien. Für stark beanspruchte Kanten setzen wir die PU-Kantenverleimung ein: Sie ist nahezu wasserfest und schützt Theken- und Arbeitsbereiche dauerhaft gegen Feuchtigkeit und tägliche Reinigung.",
  },
  {
    question: "Liefert und montiert Fast Systemmöbel auch außerhalb von OWL?",
    answer:
      "Wir montieren im Umkreis von rund 200 Kilometern um Espelkamp mit unserem eigenen Team. Geliefert wird bundesweit. Wie weit wir für Ihr Projekt fahren, klären wir gern direkt im Beratungsgespräch.",
  },
  {
    question: "Kann Fast Systemmöbel auch größere Stückzahlen für Filialisten fertigen?",
    answer:
      "Ja. Wir fertigen Serienmöbel und Kleinserien in jeder Stückzahl, seriengleich und zentimetergenau nach Zeichnung. Das eignet sich für Filialen, Hotellerie und Pflegeeinrichtungen.",
  },
  {
    question: "Wie stellen Sie sicher, dass die Einrichtung zum Corporate Design passt?",
    answer:
      "Wir stimmen Farb- und Materialkonzept auf Ihre Marke ab und integrieren Logos und Markenelemente in Tresen und Möbel. Das legen wir gemeinsam in der 3D-Planung fest, bevor gefertigt wird. Solche Markenintegrationen setzen wir regelmäßig um.",
  },
  {
    question: "Fertigen Sie auch Empfangstresen, Theken und Vitrinen nach Maß?",
    answer:
      "Ja. Empfangstresen nach Maß, Theken und Vitrinen sind fester Teil unserer Büro-, Praxis-, Laden- und Gastro-Projekte. Wir planen sie passgenau auf Raumfluss und Kundenkontakt.",
  },
  {
    question: "Gibt es ein kostenloses Aufmaß und eine Planung vor dem Auftrag?",
    answer:
      "Ja. Das Aufmaß vor Ort ist kostenlos, danach erstellen wir eine technische 3D-Planung. So sehen Sie Ihre Gewerbeeinrichtung, bevor ein einziges Teil gefertigt wird, und erhalten ein belastbares Angebot.",
  },
  {
    question: "Was sind die Vorteile einer maßgefertigten Gewerbeeinrichtung?",
    answer:
      "Sie nutzen jeden Quadratmeter, die Möbel folgen Ihren Arbeitsabläufen und Ihre Marke wird im Raum sichtbar. Dazu kommt die Langlebigkeit aus echter Handwerksqualität. Keine Kompromisse durch Standardmaße.",
  },
  {
    question: "Kann während des laufenden Betriebs montiert werden?",
    answer:
      "Ja. Wir montieren auf Wunsch phasenweise, am Wochenende oder nachts, damit Ausfallzeiten in Praxis, Gastronomie oder Büro klein bleiben. Den Ablauf stimmen wir vorab mit Ihnen ab.",
  },
];

export default function GewerbeeinrichtungPage() {
  return (
    <main className="flex flex-col">
      <ServiceHero
        title="Gewerbeeinrichtung nach Maß"
        breadcrumb={[
          { label: "Fast Systemmöbel", href: "/" },
          { label: "Gewerbeeinrichtung" },
        ]}
        bgImage="/images/2025/11/DSC_0001.jpg"
        intro="Gewerbeeinrichtung nach Maß heißt: Objektmöbel, die genau auf Ihre Räume und Abläufe sitzen. Wir planen, fertigen in Espelkamp und montieren bei Ihnen vor Ort. Als Meisterbetrieb aus OWL richten wir Büro, Praxis, Laden und Gastronomie komplett ein."
      />

      <GewerbeIntroStats />

      {/* Gewerbemöbel expanding CTA — bottom of intro/stats (beige) */}
      <section style={{ backgroundColor: BEIGE }} className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
          <ExpandingImageCta
            image="/images/2025/11/DSC_9965.jpg"
            heading="Individuelle Einrichtung für Ihr Gewerbe"
            linkText="Sprechen Sie mit uns über Ihr Projekt"
            href="/kontakt/"
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
            href="/kontakt/"
          />
        </div>
      </section>

      <FaqSection heading="Häufige Fragen zur Gewerbeeinrichtung" items={FAQ_ITEMS} />
    </main>
  );
}
