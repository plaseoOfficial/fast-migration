import { track } from "@vercel/analytics";

declare global {
  interface Window {
    /** Matomo-Befehlswarteschlange (siehe MatomoAnalytics). */
    _paq?: unknown[][];
  }
}

type EventWert = string | number | boolean | null;
type EventProps = Record<string, EventWert>;

/**
 * Matomo-Event-Kategorie je Aktion — nur für die Gruppierung in den Berichten.
 * Die Aktion selbst (= der Event-Name) ist das, woran die Ziele/Goals matchen.
 */
const MATOMO_KATEGORIE: Record<string, string> = {
  "Kontaktformular gesendet": "Kontakt",
  "Kontaktformular Fehler": "Kontakt",
  "Telefon geklickt": "Kontakt",
  "E-Mail geklickt": "Kontakt",
  "Kontakt-CTA geklickt": "Kontakt",
  "Möbelplaner geöffnet": "Möbelplaner",
  "FAQ geöffnet": "Engagement",
  "Social geklickt": "Outbound",
  "Google Maps geöffnet": "Outbound",
  "Externer Link geklickt": "Outbound",
};

/** Reihenfolge, in der ein aussagekräftiger Event-"Name" aus den Props gewählt wird. */
const NAME_KEYS = ["label", "netzwerk", "frage", "ziel", "seite"] as const;

/**
 * Zentrales Event-Tracking: feuert denselben Event an Vercel Analytics UND an
 * Matomo (cookieless). Eine Signatur — beide Systeme bleiben automatisch synchron.
 *
 * Signaturgleich zum bisherigen `track` aus @vercel/analytics, daher ein
 * 1:1-Ersatz an den bestehenden Aufrufstellen.
 */
export function trackEvent(aktion: string, props?: EventProps): void {
  // 1) Vercel Analytics — unverändertes Verhalten wie zuvor.
  track(aktion, props);

  // 2) Matomo — trackEvent(category, action, [name]).
  if (typeof window === "undefined") return;
  const _paq = (window._paq = window._paq ?? []);
  const kategorie = MATOMO_KATEGORIE[aktion] ?? "Interaktion";

  let name: string | undefined;
  for (const key of NAME_KEYS) {
    const wert = props?.[key];
    if (wert != null && wert !== "") {
      name = String(wert);
      break;
    }
  }

  _paq.push(name ? ["trackEvent", kategorie, aktion, name] : ["trackEvent", kategorie, aktion]);
}
