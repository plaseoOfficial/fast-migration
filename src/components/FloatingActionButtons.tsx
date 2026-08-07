"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneIcon, MessageIcon } from "@/components/icons";

/** Zentrale Telefonnummer — identisch zu Kontaktseite und Leistungsseiten. */
const TELEFON_HREF = "tel:+4957719138312";

/**
 * Die Hero-Sektion der aktuellen Seite. Die Startseite markiert ihre Hero mit
 * `data-hero` (sie steckt im `OpeningOverlap`-Wrapper, ist also kein direktes
 * Kind von `<main>`); auf allen anderen Seiten ist die Hero die erste
 * `<section>` direkt im `<main>`. `querySelector` liefert bei einer Selektorliste
 * das erste Element in Dokumentreihenfolge — auf der Startseite also die Hero.
 */
const HERO_SELECTOR = "main [data-hero], main > section";

/** Fallback ohne auffindbare Hero: knapp eine Bildschirmhöhe Scroll. */
const FALLBACK_RATIO = 0.8;

/**
 * Scroll-Distanz, ab der die Hero durch ist. Jede Hero sitzt ganz oben im
 * Dokument, also ist ihre eigene Höhe exakt die Schwelle: `scrollY >= Höhe`
 * heißt, die Hero ist oben aus dem Viewport raus und die erste Sektion steht.
 *
 * Bewusst Geometrie statt IntersectionObserver: die Startseiten-Hero wird von
 * `OpeningOverlap` gepinnt (GSAP setzt `position: fixed`) und bleibt für einen
 * Observer damit dauerhaft „sichtbar", obwohl die Discover-Sektion längst
 * darübergeschoben ist. `offsetHeight` bleibt vom Pin unberührt.
 */
function heroThreshold(hero: HTMLElement | null) {
  return hero ? hero.offsetHeight : window.innerHeight * FALLBACK_RATIO;
}

/**
 * Feste Kontakt-Leiste an der rechten Bildschirmkante, vertikal mittig — dasselbe
 * Muster, das bei TB Jaguar und Family Umzügen messbar Leads bringt, hier in Fasts
 * Formsprache: goldener Telefon-Button (Anruf = die harte Conversion), darunter ein
 * dunkler Button zur Beratungsanfrage. Beim Hover fährt links das Label aus.
 *
 * Zwei Kanäle statt drei: Fast hat weder WhatsApp noch eine öffentliche E-Mail —
 * ein Button ohne dahinterliegenden Kanal wäre eine Sackgasse.
 *
 * SICHTBARKEIT: Über der Hero soll nichts stören — die Leiste fährt erst von rechts
 * ein, wenn die Hero durchgescrollt ist und die erste Sektion steht (Schwelle:
 * `heroThreshold`). Scrollt man zurück nach oben, fährt sie wieder aus. Im
 * versteckten Zustand macht `inert` die Links weder klick- noch fokussierbar,
 * damit sie nicht per Tab erreichbar sind, während sie unsichtbar sind.
 *
 * `z-40` hält die Leiste unter dem Header (`z-50`) und dem mobilen Menü (`z-60`).
 *
 * TRACKING: `data-track-zone="Floating-Button"` — `AnalyticsEvents` liest die Zone
 * beim Klick aus und stellt sie dem Matomo-Event-Namen voran, damit im Bericht
 * sichtbar ist, welche Leads über diese Leiste kamen (siehe docs/seo/tracking.md).
 */
export function FloatingActionButtons() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  // Nach jedem Seitenwechsel neu messen: die Hero ist dann eine andere.
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(HERO_SELECTOR);
    let threshold = heroThreshold(hero);

    const update = () => setVisible(window.scrollY >= threshold);
    const remeasure = () => {
      threshold = heroThreshold(hero);
      update();
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", remeasure);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", remeasure);
    };
  }, [pathname]);

  return (
    <div
      data-track-zone="Floating-Button"
      inert={!visible}
      className={`fixed top-1/2 right-0 z-40 flex -translate-y-1/2 flex-col transition-[translate,opacity] duration-300 ease-out motion-reduce:transition-none ${
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
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
