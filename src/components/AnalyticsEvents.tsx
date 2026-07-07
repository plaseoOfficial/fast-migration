"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Site-weites Event-Tracking über einen delegierten Klick-Listener:
 * eine Einbaustelle im RootLayout deckt alle bestehenden und künftigen
 * Sektionen ab, ohne jede Komponente einzeln zu instrumentieren.
 *
 * Erfasst wird nur das Interaktionsziel (Linkziel/Beschriftung), nie
 * Eingabedaten — DSGVO-konform ohne personenbezogene Daten.
 */

const SOCIAL_NETZWERKE: Record<string, string> = {
  "instagram.com": "Instagram",
  "linkedin.com": "LinkedIn",
  "facebook.com": "Facebook",
};

function kurz(text: string | null | undefined, max = 80): string {
  const t = (text ?? "").replace(/\s+/g, " ").trim();
  return t.length > max ? `${t.slice(0, max - 1)}…` : t;
}

function trackeKlick(target: EventTarget | null) {
  if (!(target instanceof Element)) return;
  const seite = window.location.pathname;
  if (seite.startsWith("/library")) return; // interne Showcase nicht zählen

  // FAQ-Akkordeon: aria-expanded ohne haspopup (Header-Menüs haben haspopup)
  const knopf = target.closest("button[aria-expanded]");
  if (knopf && !knopf.hasAttribute("aria-haspopup")) {
    if (knopf.getAttribute("aria-expanded") === "false") {
      trackEvent("FAQ geöffnet", { seite, frage: kurz(knopf.textContent) });
    }
    return;
  }

  const link = target.closest("a[href]");
  if (!link) return;
  const href = link.getAttribute("href") ?? "";
  const label = kurz(link.textContent) || kurz(link.getAttribute("aria-label"));

  if (href.startsWith("tel:")) {
    trackEvent("Telefon geklickt", { seite });
    return;
  }
  if (href.startsWith("mailto:")) {
    trackEvent("E-Mail geklickt", { seite });
    return;
  }

  let url: URL;
  try {
    url = new URL(href, window.location.origin);
  } catch {
    return;
  }
  const host = url.hostname.replace(/^www\./, "");

  if (host === "moebelplaner.fast-systemmoebel.de") {
    trackEvent("Möbelplaner geöffnet", { seite, label });
    return;
  }
  if (host.endsWith("google.com") && url.pathname.startsWith("/maps")) {
    trackEvent("Google Maps geöffnet", { seite });
    return;
  }
  for (const [domain, netzwerk] of Object.entries(SOCIAL_NETZWERKE)) {
    if (host === domain || host.endsWith(`.${domain}`)) {
      trackEvent("Social geklickt", { seite, netzwerk });
      return;
    }
  }
  if (url.origin === window.location.origin) {
    if (url.pathname === "/kontakt/" || url.pathname === "/kontakt") {
      trackEvent("Kontakt-CTA geklickt", { seite, label });
    }
    return;
  }
  // Sonstige ausgehende Links (Partner, Impressums-Links, …)
  trackEvent("Externer Link geklickt", { seite, ziel: host });
}

export function AnalyticsEvents() {
  useEffect(() => {
    const handler = (e: MouseEvent) => trackeKlick(e.target);
    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
