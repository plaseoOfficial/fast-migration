import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/shared/ServiceHero";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { ExpandingImageCta } from "@/components/sections/shared/ExpandingImageCta";
import { MpSchritte } from "@/components/sections/moebelplaner/MpSchritte";
import { MpIntro } from "@/components/sections/moebelplaner/MpIntro";
import { MpProzess } from "@/components/sections/moebelplaner/MpProzess";
import { SITE_URL } from "@/lib/content";
import { buildServicePageJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Möbelplaner online: Maßmöbel kostenlos konfigurieren",
  description:
    "Planen Sie Ihre Möbel nach Maß online – kostenlos und unverbindlich. 3D-Konfigurator mit Fertigung im Meisterbetrieb aus Espelkamp.",
  alternates: { canonical: "/moebelplaner/" },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "Möbelplaner online: Maßmöbel kostenlos konfigurieren",
    description:
      "Planen Sie Ihre Möbel nach Maß online – kostenlos und unverbindlich. Fertigung aus Espelkamp.",
    url: "/moebelplaner/",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const BEIGE = "rgba(203, 191, 181, 0.59)";

const FAQ_ITEMS = [
  {
    question: "Ist die Planung im Online-Möbelplaner kostenlos und unverbindlich?",
    answer:
      "Ja. Unser Möbelkonfigurator ist vollständig kostenlos. Sie gehen keine Verpflichtung ein.",
  },
  {
    question: "Was passiert nach meiner Planung?",
    answer:
      "Einer von uns meldet sich bei Ihnen, bespricht Ihre Ideen und erklärt den nächsten Schritt.",
  },
  {
    question: "Welche Möbel kann ich im Planer konfigurieren?",
    answer:
      "Schränke, Kleiderschränke, Regale, Küchenzeilen, Badschränke und viele weitere Möbelstücke. Alle maßgefertigt nach Ihren Vorstellungen.",
  },
  {
    question: "Wie genau ist der Online-Möbelplaner?",
    answer:
      "Die Maße – Höhe, Breite, Korpustiefe, Sockel und Rückwand – fließen direkt in die Fertigung. Unser Team prüft jeden Plan vor der Produktion.",
  },
];

/** Trust-CTA after FAQ: link to reference projects for last-minute confidence. */
const FAQ_TRUST_CTA = { href: "/referenzen/", label: "Referenzprojekte ansehen" };

const jsonLd = buildServicePageJsonLd({
  pageUrl: `${SITE_URL}/moebelplaner/`,
  name: "Möbelplaner online",
  description:
    "Planen Sie Ihre Möbel nach Maß online – kostenlos und unverbindlich. 3D-Konfigurator mit Fertigung im Meisterbetrieb aus Espelkamp.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbelplaner" },
  ],
  faq: FAQ_ITEMS,
  serviceType: "Möbelplanung online",
});

export default function MoebelplanerPage() {
  return (
    <main className="flex flex-col">
      {/* Structured data: LocalBusiness + Service + BreadcrumbList + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceHero
        title="Möbelplaner online – Maßmöbel planen und fertigen lassen in OWL"
        breadcrumb={[
          { label: "Fast Systemmöbel", href: "/" },
          { label: "Möbelplaner" },
        ]}
        bgImage="/images/2025/11/WhatsApp-Bild-2025-04-01-um-22.54.05_fab2d495.jpg"
        intro="Standardlösungen passen selten wirklich. Nicht an die Decke, nicht in die Nische, nicht zu Ihrem Alltag. Ob Schränke, Regale oder maßgefertigte Einbauten – jedes Möbelstück entsteht nach Ihren Maßen."
        cta={{ label: "Zum Möbelplaner", href: "https://moebelplaner.fast-systemmoebel.de/" }}
      />

      <MpSchritte />
      <MpIntro />
      <TestimonialsSection heading="Meisterbetrieb aus Espelkamp seit 1996" />

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

      <MpProzess />
      <FaqSection
        heading="Häufige Fragen zum Möbelplaner"
        items={FAQ_ITEMS}
        ctaHref={FAQ_TRUST_CTA.href}
        ctaLabel={FAQ_TRUST_CTA.label}
      />
    </main>
  );
}
