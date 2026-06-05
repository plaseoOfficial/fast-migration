import { ArrowRightIcon } from "@/components/icons";

export function MpIntro() {
  return (
    <section
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
      className="pt-12 lg:pt-[57px] pb-8"
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        {/* 3-col header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.2fr] gap-10 items-start">
          {/* Col 1: eyebrow */}
          <div>
            <h4
              style={{
                color: "rgba(117,117,117,0.5)",
                fontSize: "30px",
                lineHeight: "30px",
                fontWeight: 500,
              }}
            >
              seit 1996
            </h4>
            <p
              style={{
                color: "rgba(117,117,117,0.5)",
                fontSize: "16px",
                fontWeight: 500,
                marginTop: "6px",
              }}
            >
              Geben wir unser Bestes.
            </p>
          </div>

          {/* Col 2: H2 */}
          <h2
            style={{
              color: "rgb(0,0,0)",
              fontWeight: 500,
              letterSpacing: "-3px",
              fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
            }}
            className="text-[26px] leading-[1.15] sm:text-[34px] sm:leading-[1.05] lg:text-[66px] lg:leading-[66px] max-lg:break-words max-lg:hyphens-auto"
            lang="de"
          >
            Möbelplanung online – mit Fertigung aus Espelkamp
          </h2>

          {/* Col 3: intro paragraph */}
          <p
            style={{
              color: "rgb(102,102,102)",
              fontSize: "18px",
              lineHeight: "28.8px",
              fontWeight: 500,
            }}
          >
            Konfiguratoren gibt es viele. Was die meisten nicht bieten: jemand
            der Ihre Planung gründlich durchdenkt, Tipps zu Einlegeböden,
            Schubladen und Materialstärke gibt, die Maße prüft und die Möbel
            direkt in Espelkamp fertigt.
          </p>
        </div>

        {/* Iframe embed */}
        <div id="moebelplaner" className="mt-10">
          <iframe
            src="https://moebelplaner.fast-systemmoebel.de"
            title="Möbelplaner"
            className="w-full h-[520px] lg:h-[666px]"
            style={{ border: 0 }}
          />

          {/* Fallback link */}
          <p className="mt-3">
            <a
              href="https://moebelplaner.fast-systemmoebel.de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgb(102,102,102)",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "underline",
                fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
              }}
            >
              Möbelplaner in neuem Tab öffnen
              <ArrowRightIcon className="inline-block h-[1em] w-auto ml-2 align-middle" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
