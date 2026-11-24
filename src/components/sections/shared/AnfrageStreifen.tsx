import { STREIFEN, type AnfrageVariante } from "@/lib/content/anfrage";

interface AnfrageStreifenProps {
  /** Dieselbe Fassung wie beim Anfrageblock auf der Seite. */
  variante: AnfrageVariante;
}

/**
 * Kurzer Streifen am Seitenende (vor den Fragen): eine Zeile Text und ein Sprung
 * zum Anfrageblock (`#anfrage`). Ersetzt den zweiten Bild-Aufruf, kein zweites
 * Formular. Reines Server-Markup. Der Klick wird vom delegierten Listener
 * (AnalyticsEvents) als „Anfrageblock angesteuert“ mit Zone „Anfragestreifen“ gezählt.
 */
export function AnfrageStreifen({ variante }: AnfrageStreifenProps) {
  const { text, linkText } = STREIFEN[variante];
  return (
    <section
      className="py-10 lg:py-12"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
      data-track-zone="Anfragestreifen"
    >
      <div className="mx-auto flex w-full max-w-[1224px] flex-col items-start gap-x-8 gap-y-2 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-[22px] font-medium leading-[1.4]" style={{ color: "rgb(61,61,61)" }}>
          {text}
        </p>
        <a
          href="#anfrage"
          className="inline-flex min-h-[44px] items-center text-[18px] font-medium underline underline-offset-4 transition-colors hover:text-[rgb(237,168,33)]"
          style={{ color: "rgb(61,61,61)" }}
        >
          {linkText}
        </a>
      </div>
    </section>
  );
}
