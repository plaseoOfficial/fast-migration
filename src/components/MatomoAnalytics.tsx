"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

/**
 * Open-Source-Kern-Tracker (Matomo 5.14.0, BSD-3), selbst ausgeliefert. Die Cloud-matomo.js
 * brächte Premium-Plugins mit (A/B-Testing, Form-/Crash-/Media-Analytics) und schriebe
 * auf Safari/iOS Testwerte in localStorage. Die Daten gehen weiter an die Cloud (setTrackerUrl).
 */
const MATOMO_SKRIPT = "/matomo/matomo-5.14.0.js";

/** Nur die Live-Domain zählt. localhost, Vercel-Vorschauen und Spiegel bleiben draußen. */
const LIVE_HOSTS = ["www.fast-systemmoebel.de", "fast-systemmoebel.de"];

/**
 * Eigene Besuche abmelden: einmal `?notrack=1` aufrufen setzt den Merker auf diesem
 * Gerät/Browser, `?notrack=0` hebt ihn wieder auf. Er liegt nur dort, wo ihn jemand
 * selbst gesetzt hat; normale Besucher bekommen nichts gespeichert.
 */
const OPT_OUT_KEY = "fast-kein-tracking";

function trackingErlaubt(): boolean {
  if (!LIVE_HOSTS.includes(window.location.hostname)) return false;
  try {
    const notrack = new URLSearchParams(window.location.search).get("notrack");
    if (notrack === "1") localStorage.setItem(OPT_OUT_KEY, "1");
    if (notrack === "0") localStorage.removeItem(OPT_OUT_KEY);
    return localStorage.getItem(OPT_OUT_KEY) !== "1";
  } catch {
    return true; // localStorage gesperrt (z. B. privater Modus) → normal zählen
  }
}

/**
 * Lädt Matomo cookieless (kein Consent-Banner nötig, IP wird anonymisiert) und
 * meldet bei Next.js' client-seitiger Navigation jeden Routenwechsel als eigenen
 * Seitenaufruf — sonst zählte Matomo nur die erste Seite eines Besuchs.
 *
 * Ohne gesetzte NEXT_PUBLIC_MATOMO_*-Variablen, außerhalb der Live-Domain und auf
 * abgemeldeten Geräten (`?notrack=1`) passiert nichts (No-op).
 */
export function MatomoAnalytics() {
  const pathname = usePathname();
  const geladen = useRef(false);
  const ersterPfad = useRef(true);
  const aktiv = useRef(false);

  // Einmalig: Tracker initialisieren + matomo.js laden.
  useEffect(() => {
    if (!MATOMO_URL || !SITE_ID || geladen.current) return;
    geladen.current = true;
    if (!trackingErlaubt()) return;
    aktiv.current = true;

    const _paq = (window._paq = window._paq ?? []);
    _paq.push(["disableCookies"]); // cookieless → DSGVO ohne Einwilligung (immer der ERSTE Befehl)
    _paq.push(["disableBrowserFeatureDetection"]);
    _paq.push(["enableLinkTracking"]);
    _paq.push(["setTrackerUrl", `${MATOMO_URL}matomo.php`]);
    _paq.push(["setSiteId", SITE_ID]);
    _paq.push(["trackPageView"]);

    const s = document.createElement("script");
    s.async = true;
    s.src = MATOMO_SKRIPT;
    document.head.appendChild(s);
  }, []);

  // Folge-Navigationen als Seitenaufrufe melden (die erste Seite zählt oben schon).
  useEffect(() => {
    if (!aktiv.current) return;
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
