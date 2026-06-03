import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/shared/ServiceHero";
import { PartnerCarousel } from "@/components/sections/shared/PartnerCarousel";
import { KontaktPanel } from "@/components/sections/kontakt/KontaktPanel";
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
  );
}
