import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layouts/LegalPageLayout";

export const metadata: Metadata = {
  title: "Impressum | Fast Systemmöbel",
  description:
    "Impressum von Fast Systemmöbel, Inh. Johann Fast, Espelkamp. Angaben gemäß § 5 TMG, Kontakt und Hinweise zur Streitschlichtung.",
  alternates: { canonical: "/impressum/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Impressum | Fast Systemmöbel",
    description: "Angaben gemäß § 5 TMG, Kontakt und Hinweise zur Streitschlichtung.",
    locale: "de_DE",
    type: "website",
    siteName: "fast.side-boost.com",
  },
};

export default function ImpressumPage() {
  return (
    <LegalPageLayout title="Impressum">
      <h2>Angaben gemäß § 5 TMG</h2>
      <address>
        Johann Fast
        <br />
        Fast Systemmöbel
        <br />
        Alte Waldstraße 32
        <br />
        32339 Espelkamp
      </address>

      <h2>Kontakt</h2>
      <p>
        Telefon: 05771- 9138 312
        <br />
        Telefax: 05771- 9138 314
        <br />
        E-Mail: <a href="mailto:anfrage@fast-systemmoebel.de">anfrage@fast-systemmoebel.de</a>
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
        bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalPageLayout>
  );
}
