import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Seite nicht gefunden: Fast Systemmöbel Espelkamp",
};

/** Die stärksten Einstiege für verirrte Besucher (Silo-Hubs + Konversion). */
const WEITER_LINKS = [
  { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
  { label: "Küchen nach Maß", href: "/kuechen-nach-mass/" },
  { label: "Referenzprojekte", href: "/referenzen/" },
  { label: "Kontakt aufnehmen", href: "/kontakt/" },
];

/**
 * Globale 404-Seite. Liegt außerhalb der (site)-Gruppe (Next-Konvention:
 * Root-not-found fängt alle unmatched URLs), deshalb werden Header + Footer
 * hier explizit gerendert. Der Hero ist bewusst dunkel (rgb(61,61,61) wie der
 * gescrollte Header-Zustand): auf Nicht-Home-Routen sitzt der fixe Header
 * transparent mit weißem Chrome über der Seite und braucht dunklen Grund.
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        {/* Dunkler Hero — gleiche Metrik wie ServiceHero, nur ohne Foto */}
        <section
          className="relative isolate flex min-h-[480px] w-full items-end overflow-hidden pt-[140px] pb-14 lg:min-h-[638px] lg:pt-[230px]"
          style={{
            backgroundColor: "rgb(61,61,61)",
            fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
          }}
        >
          <div className="relative z-10 mx-auto w-full max-w-[1224px] px-6 lg:px-8">
            <div className="lg:w-[66%]">
              <p
                className="fast-eyebrow fast-rise"
                style={{ color: "rgba(220,220,220,0.85)", animationDelay: "0.05s" }}
              >
                Fehler 404
              </p>
              <h1
                className="fast-rise mt-3 text-[28px] font-medium leading-[1.15] tracking-[-1px] text-white sm:text-[44px] sm:leading-[1.1] sm:tracking-[-2px] lg:text-[70px] lg:leading-[84px] lg:tracking-[-3px] max-lg:break-words max-lg:hyphens-auto"
                style={{ animationDelay: "0.1s" }}
                lang="de"
              >
                Diese Seite gibt es nicht
              </h1>
              <p
                className="fast-rise mt-5 max-w-[560px] text-[16px] leading-[1.7]"
                style={{ color: "rgba(220,220,220,0.85)", animationDelay: "0.25s" }}
              >
                Die Adresse ist veraltet oder vertippt. Was Sie suchen, finden Sie
                über die Startseite oder die Seiten direkt hier unten.
              </p>
              <div className="fast-rise mt-6" style={{ animationDelay: "0.4s" }}>
                <Link href="/" className="fast-btn-pill">
                  Zur Startseite
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Beige Weiterführung — Standard-Wash + Section-Rhythmus */}
        <section
          className="fast-section w-full"
          style={{ backgroundColor: "rgba(203,191,181,0.59)" }}
        >
          <div className="mx-auto max-w-[920px] px-6 text-center">
            <p className="fast-eyebrow mb-3">Weiter geht es hier</p>
            <h2
              className="mb-10"
              style={{
                fontSize: "clamp(36px, 5vw, 65px)",
                lineHeight: 1,
                letterSpacing: "-2px",
                fontWeight: 500,
                color: "rgb(61,61,61)",
              }}
            >
              Die meistbesuchten Seiten
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {WEITER_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="fast-btn-outline">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
