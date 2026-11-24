/**
 * Gemeinsame Gestaltung der hellen Formularkarte, genutzt vom Anfrageblock
 * (`LeistungAnfrage`) und vom Kontaktformular (`KontaktFormularHero`), damit die
 * Anfrage an beiden Stellen gleich aussieht. Nur Tokens aus
 * docs/design-system/TOKENS.md, dazu das Gold der Buttons rgb(249,178,51).
 *
 * Karte: weiß auf beigem bzw. Foto-Grund, eckig, ohne Rahmen und Schatten.
 * Felder: rgb(243,243,243) mit 1-px-Rand rgb(102,102,102); Fokus und Fehler als
 * 2-px-Rand in rgb(61,61,61). Fehlertext dunkel, mit Symbol (nicht nur Farbe).
 */

export const FORM_INK = "rgb(61,61,61)";
export const FORM_GOLD = "rgb(249,178,51)";
export const FORM_CARD_BG = "rgb(255,255,255)";

export const FORM_URBANIST: React.CSSProperties = {
  fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
};

export const FORM_LABEL_CLASS = "block text-[14px] font-medium mb-1.5 text-[rgb(61,61,61)]";
export const FORM_HINT_CLASS = "font-normal text-[rgb(102,102,102)]";
export const FORM_FIELD_CLASS =
  "block w-full min-h-[48px] rounded-none border border-[rgb(102,102,102)] bg-[rgb(243,243,243)] px-4 py-3 text-[16px] font-normal text-[rgb(61,61,61)] outline-none placeholder:text-[rgb(102,102,102)] focus-visible:border-[rgb(61,61,61)] focus-visible:ring-2 focus-visible:ring-[rgb(61,61,61)] aria-[invalid=true]:border-[rgb(61,61,61)] aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-[rgb(61,61,61)]";
export const FORM_ERROR_CLASS = "flex items-start gap-2 text-[15px] font-semibold text-[rgb(61,61,61)]";

/** Kleines Warnsymbol vor Fehlermeldungen: Der Fehler zeigt sich nicht nur über Farbe. */
export function FehlerSymbol() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" className="mt-[2px] shrink-0">
      <circle cx="9" cy="9" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M9 4.5v5.5M9 12.2v1.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
