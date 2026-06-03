import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
    siteName: "fast.side-boost.com",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

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
    <>
      <Header />
      <main className="flex flex-col">
        <ServiceHero
          title="Gewerbeeinrichtung nach Maß – funktionale Lösungen für jedes Objekt"
          breadcrumb={[
            { label: "fast.side-boost.com", href: "/" },
            { label: "Leistungen", href: "/leistungen" },
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
        <MnmWeitereLeistungen />
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
      <Footer />
    </>
  );
}
