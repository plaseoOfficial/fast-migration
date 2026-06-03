import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/fast/ServiceHero";
import { PartnerCarousel } from "@/components/fast/PartnerCarousel";
import { KontaktPanel } from "@/components/kontakt/KontaktPanel";
import { KontaktStandort } from "@/components/kontakt/KontaktStandort";

export const metadata: Metadata = {
  title: "Kontakt: Fast Systemmöbel Espelkamp | Beratung anfragen",
  description:
    "Sprechen Sie mit unseren Experten für Möbel nach Maß. Kontaktformular, Öffnungszeiten und Standort in Espelkamp. Kostenlose Beratung.",
  openGraph: {
    title: "Kontakt: Fast Systemmöbel Espelkamp | Beratung anfragen",
    description:
      "Sprechen Sie mit unseren Experten für Möbel nach Maß. Kostenlose Beratung.",
    locale: "de_DE",
    type: "website",
    siteName: "fast.side-boost.com",
  },
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <ServiceHero
          title="Kommen Sie mit unseren Experten in Kontakt"
          breadcrumb={[
            { label: "fast.side-boost.com", href: "/" },
            { label: "Kontakt" },
          ]}
          bgImage="/images/2025/11/DSC06206-scaled.jpg"
        />
        <KontaktPanel />
        <PartnerCarousel />
        <KontaktStandort />
      </main>
      <Footer />
    </>
  );
}
