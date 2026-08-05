import Link from "next/link";
import { PhoneIcon, MessageIcon } from "@/components/icons";

/** Zentrale Telefonnummer — identisch zu Kontaktseite und Leistungsseiten. */
const TELEFON_HREF = "tel:+4957719138312";

/**
 * Feste Kontakt-Leiste an der rechten Bildschirmkante, vertikal mittig — dasselbe
 * Muster, das bei TB Jaguar und Family Umzüge messbar Leads bringt, hier in Fasts
 * Formsprache: goldener Telefon-Button (Anruf = die harte Conversion), darunter ein
 * dunkler Button zur Beratungsanfrage. Beim Hover fährt links das Label aus.
 *
 * Zwei Kanäle statt drei: Fast hat weder WhatsApp noch eine öffentliche E-Mail —
 * ein Button ohne dahinterliegenden Kanal wäre eine Sackgasse.
 *
 * Reine Links, kein State ⇒ Server Component. Einmal im `(site)`-Layout gerendert
 * und damit auf jeder öffentlichen Seite präsent. `z-40` hält die Leiste unter dem
 * Header (`z-50`) und dem mobilen Menü (`z-60`).
 *
 * TRACKING: `data-track-zone="Floating-Button"` — `AnalyticsEvents` liest die Zone
 * beim Klick aus und stellt sie dem Matomo-Event-Namen voran, damit im Bericht
 * sichtbar ist, welche Leads über diese Leiste kamen (siehe docs/seo/tracking.md).
 */
export function FloatingActionButtons() {
  return (
    <div
      data-track-zone="Floating-Button"
      className="fixed top-1/2 right-0 z-40 flex -translate-y-1/2 flex-col"
    >
      {/* Anruf — Fast-Gelb */}
      <a
        href={TELEFON_HREF}
        aria-label="Jetzt anrufen: 05771 9138312"
        className="group/fab relative flex size-12 items-center justify-center bg-[rgb(237,168,33)] text-[rgb(61,61,61)] shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-all hover:brightness-95 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(61,61,61)] motion-reduce:transition-none lg:size-14"
      >
        <PhoneIcon className="size-5" />
        <span className="pointer-events-none absolute right-full flex h-full items-center bg-[rgb(237,168,33)] px-0 font-[var(--font-poppins)] text-[15px] font-medium whitespace-nowrap text-[rgb(61,61,61)] opacity-0 shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover/fab:px-5 group-hover/fab:opacity-100 motion-reduce:transition-none">
          Anrufen
        </span>
      </a>

      {/* Beratung anfragen — Fast-Dunkel */}
      <Link
        href="/kontakt/"
        aria-label="Beratung anfragen"
        className="group/fab relative flex size-12 items-center justify-center bg-[rgb(61,61,61)] text-[rgb(237,168,33)] shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-all hover:brightness-125 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(237,168,33)] motion-reduce:transition-none lg:size-14"
      >
        <MessageIcon className="size-5" />
        <span className="pointer-events-none absolute right-full flex h-full items-center bg-[rgb(61,61,61)] px-0 font-[var(--font-poppins)] text-[15px] font-medium whitespace-nowrap text-[rgb(237,168,33)] opacity-0 shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover/fab:px-5 group-hover/fab:opacity-100 motion-reduce:transition-none">
          Beratung
        </span>
      </Link>
    </div>
  );
}

export default FloatingActionButtons;
