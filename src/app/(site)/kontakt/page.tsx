import type { Metadata } from "next";
import { PartnerCarousel } from "@/components/sections/shared/PartnerCarousel";
import { KontaktFormularHero } from "@/components/sections/kontakt/KontaktFormularHero";
import { KontaktStandort } from "@/components/sections/kontakt/KontaktStandort";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { SITE_URL } from "@/lib/content";
import { buildBrandPageJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Kontakt: Fast Systemmöbel Espelkamp | Beratung anfragen",
  description:
    "Sprechen Sie mit unseren Experten für Möbel nach Maß. Kontaktformular, Öffnungszeiten und Standort in Espelkamp. Kostenlose Beratung.",
  alternates: { canonical: "/kontakt/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Kontakt: Fast Systemmöbel Espelkamp | Beratung anfragen",
    description:
      "Sprechen Sie mit unseren Experten für Möbel nach Maß. Kostenlose Beratung.",
    url: "/kontakt/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const KONTAKT_FAQ_ITEMS = [
  {
    question: "Wie schnell melden Sie sich auf meine Anfrage?",
    answer:
      "Wir melden uns zeitnah nach Eingang Ihrer Anfrage. Bei komplexeren Anliegen – zum Beispiel mit Aufmaß oder Planung vor Ort – stimmen wir direkt einen Termin mit Ihnen ab.",
  },
  {
    question: "Ist eine erste Beratung kostenlos?",
    answer:
      "Ja. Das Erstgespräch, die Bedarfsklärung und eine unverbindliche Einschätzung sind für Sie kostenfrei.",
  },
  {
    question: "Kann ich mir vorher fertige Projekte ansehen?",
    answer:
      "Ja. In unseren Referenzprojekten finden Sie realisierte Küchen, Möbel nach Maß und Gewerbeeinrichtungen – hilfreich, um konkrete Vorstellungen mitzubringen.",
  },
];

/** Trust-CTA im FAQ: Referenzen zum letzten Vertrauensaufbau vor der Anfrage. */
const KONTAKT_FAQ_CTA = { href: "/referenzen/", label: "Referenzprojekte ansehen" };

const jsonLd = buildBrandPageJsonLd({
  pageUrl: `${SITE_URL}/kontakt/`,
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Kontakt" },
  ],
});

export default function KontaktPage() {
  return (
    <main className="flex flex-col">
      {/* Structured data: LocalBusiness + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KontaktFormularHero
        title="Kommen Sie mit unseren Experten in Kontakt"
        breadcrumb={[
          { label: "Fast Systemmöbel", href: "/" },
          { label: "Kontakt" },
        ]}
        bgImage="/images/2025/11/IMG_9387-scaled.jpg"
      />
      <PartnerCarousel />
      <KontaktStandort />
      {/* Weißer Wash: die vorangehende KontaktStandort-Section ist bereits beige. */}
      <FaqSection
        heading="Häufige Fragen vor Ihrer Anfrage"
        items={KONTAKT_FAQ_ITEMS}
        ctaHref={KONTAKT_FAQ_CTA.href}
        ctaLabel={KONTAKT_FAQ_CTA.label}
        backgroundColor="rgb(255,255,255)"
      />
    </main>
  );
}
