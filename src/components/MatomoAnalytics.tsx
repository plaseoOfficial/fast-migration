"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

/** matomo.js-Quelle: bei Matomo Cloud das schnelle CDN, sonst die Instanz selbst. */
function scriptQuelle(basis: string): string {
  try {
    const host = new URL(basis).host;
    if (host.endsWith(".matomo.cloud")) {
      return `https://cdn.matomo.cloud/${host}/matomo.js`;
    }
  } catch {
    /* ungültige URL → Fallback unten */
  }
  return `${basis}matomo.js`;
}

/**
 * Lädt Matomo cookieless (kein Consent-Banner nötig, IP wird anonymisiert) und
 * meldet bei Next.js' client-seitiger Navigation jeden Routenwechsel als eigenen
 * Seitenaufruf — sonst zählte Matomo nur die erste Seite eines Besuchs.
 *
 * Ohne gesetzte NEXT_PUBLIC_MATOMO_*-Variablen passiert nichts (No-op).
 */
export function MatomoAnalytics() {
  const pathname = usePathname();
  const geladen = useRef(false);
  const ersterPfad = useRef(true);

  // Einmalig: Tracker initialisieren + matomo.js laden.
  useEffect(() => {
    if (!MATOMO_URL || !SITE_ID || geladen.current) return;
    geladen.current = true;

    const _paq = (window._paq = window._paq ?? []);
    _paq.push(["disableCookies"]); // cookieless → DSGVO ohne Einwilligung
    _paq.push(["enableLinkTracking"]);
    _paq.push(["setTrackerUrl", `${MATOMO_URL}matomo.php`]);
    _paq.push(["setSiteId", SITE_ID]);
    _paq.push(["trackPageView"]);

    const s = document.createElement("script");
    s.async = true;
    s.src = scriptQuelle(MATOMO_URL);
    document.head.appendChild(s);
  }, []);

  // Folge-Navigationen als Seitenaufrufe melden (die erste Seite zählt oben schon).
  useEffect(() => {
    if (!MATOMO_URL || !SITE_ID) return;
    if (ersterPfad.current) {
      ersterPfad.current = false;
      return;
    }
    if (pathname.startsWith("/library")) return; // interne Showcase nicht zählen
    const _paq = (window._paq = window._paq ?? []);
    _paq.push(["setCustomUrl", window.location.href]);
    _paq.push(["setDocumentTitle", document.title]);
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);
  }, [pathname]);

  return null;
}
