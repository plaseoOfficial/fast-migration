import type { Metadata } from "next";
import { PartnerCarousel } from "@/components/sections/shared/PartnerCarousel";
import { KontaktFormularHero } from "@/components/sections/kontakt/KontaktFormularHero";
import { KontaktStandort } from "@/components/sections/kontakt/KontaktStandort";

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
    <main className="flex flex-col">
      <KontaktFormularHero
        title="Kommen Sie mit unseren Experten in Kontakt"
        breadcrumb={[
          { label: "fast.side-boost.com", href: "/" },
          { label: "Kontakt" },
        ]}
        bgImage="/images/2025/11/DSC06206-scaled.jpg"
      />
      <PartnerCarousel />
      <KontaktStandort />
    </main>
  );
}
