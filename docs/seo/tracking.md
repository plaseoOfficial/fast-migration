# Tracking — Events, Zonen & Conversion-Definition

Was gemessen wird, was davon als **Conversion** zählt und was im Matomo-Backend
eingestellt sein muss. Code: `src/lib/analytics.ts` (Versand) und
`src/components/AnalyticsEvents.tsx` (delegierter Klick-Listener).

## 1. Wie ein Event entsteht

Ein einziger Klick-Listener im RootLayout deckt alle Sektionen ab — bestehende
wie künftige. Erfasst wird nur das **Interaktionsziel** (Linkziel, Beschriftung),
nie Eingabedaten. Jeder Event geht gleichzeitig an Vercel Analytics und an Matomo
(cookieless, IP anonymisiert ⇒ kein Consent-Banner nötig).

Matomo-Signatur: `trackEvent(Kategorie, Aktion, Name)`.
**Die Aktion ist der stabile String, auf den Ziele matchen** — Kategorie und Name
dienen der Gruppierung bzw. dem Kontext.

## 2. Event-Katalog

| Aktion (Matomo) | Kategorie | Conversion? |
|---|---|---|
| `Kontaktformular gesendet` | Kontakt | **✅ Ja** — der härteste Lead |
| `Telefon geklickt` | Kontakt | **✅ Ja** |
| `E-Mail geklickt` | Kontakt | **✅ Ja** (sobald eine E-Mail-Adresse online steht) |
| `Möbelplaner geöffnet` | Möbelplaner | **✅ Ja** — Micro-Conversion, eigenes Ziel |
| `Kontaktformular Fehler` | Kontakt | ❌ nein — Fehler-Diagnose |
| `Kontakt-CTA geklickt` | Engagement | ❌ **nein — siehe §4** |
| `FAQ geöffnet` | Engagement | ❌ nein |
| `Social geklickt` | Outbound | ❌ nein |
| `Google Maps geöffnet` | Outbound | ❌ nein |
| `Externer Link geklickt` | Outbound | ❌ nein |

**Faustregel:** Conversion = der Besucher hat einen Kanal geöffnet, über den Fast
ihn erreichen kann. Ein interner Klick, der nur eine weitere Seite lädt, ist es nicht.

## 3. Zonen — woher kam der Klick?

Jeder Link-Event trägt eine `zone`, sobald sich der Klick verorten lässt:

1. **Explizit** — der nächste Vorfahre mit `data-track-zone="…"` gewinnt.
   Aktuell vergeben: `Floating-Button` (`src/components/FloatingActionButtons.tsx`).
2. **Semantisch** — sonst greifen `<header>` → `Header` und `<footer>` → `Footer`.
3. **Ohne Zone** — Klicks im normalen Seiteninhalt; der Event bleibt unverändert.

Die Zone wird dem Matomo-**Namen** vorangestellt, der bisherige Name bleibt als
Zusatz erhalten:

```
Kontakt / Telefon geklickt / Floating-Button · /kuechen-nach-mass/
Kontakt / Telefon geklickt / Header · /kontakt/
Kontakt / Telefon geklickt / /kontakt/            ← Klick im Seiteninhalt
```

So ist in einem Bericht ablesbar, **wie viele Anrufe die Floating-Buttons bringen**
und von welcher Seite aus — ohne die Seiteninfo zu verlieren.

Auswertung in Matomo: *Verhalten → Ereignisse → Ereignis-Namen*, Suche nach
`Floating-Button`. Für einen dauerhaften Bericht ein Segment anlegen:
`Ereignis-Name enthält Floating-Button`.

## 4. Warum „Kontakt-CTA geklickt" keine Conversion ist

Der Event feuert bei **jedem** internen Klick auf `/kontakt/` — Header-Button,
Sektions-CTAs, Mega-Menü-Teaser und seit der Einführung der Floating-Buttons auf
jeder Seite zusätzlich rechts am Bildschirmrand. Das ist ein nützliches
Engagement-Signal (welche Seiten schieben Richtung Kontakt?), aber **keine
Kontaktaufnahme**: der Besucher hat nur eine weitere Seite geöffnet und kann dort
kommentarlos abspringen.

Bliebe der Event ein Ziel, würde er die Conversion-Zahlen dominieren und die
echten Leads — abgeschicktes Formular, Anruf — statistisch unsichtbar machen.
Deshalb liegt er seit der Floating-Button-Einführung in der Kategorie
**`Engagement`** statt `Kontakt`; die Kategorie `Kontakt` bezeichnet damit
ausschließlich echte Kontaktaufnahmen.

**Die Kategorie-Umstellung allein schaltet das Ziel NICHT ab.** Am 2026-08-05 über
die Matomo-API (`Goals.getGoals`, Site-ID 3) geprüft — alle fünf Ziele matchen auf
`event_action`, keines auf die Kategorie:

| Ziel | Name | matcht auf `event_action` (exakt) | Status |
|---|---|---|---|
| 1 | Kontaktformular abgeschickt | `Kontaktformular gesendet` | ✅ behalten |
| 2 | Telefon-Klick | `Telefon geklickt` | ✅ behalten |
| 3 | E-Mail-Klick | `E-Mail geklickt` | ✅ behalten (feuert erst, wenn eine E-Mail-Adresse online steht) |
| 4 | Möbelplaner geöffnet | `Möbelplaner geöffnet` | ✅ behalten |
| 5 | **Kontakt-CTA geklickt** | `Kontakt-CTA geklickt` | ❌ **muss weg** |

Die Kategorie ist für das Matching also irrelevant — **Ziel 5 zählt weiter, bis es
im Backend entfernt wird.** Die Umstellung auf `Engagement` bleibt trotzdem richtig:
sie hält Berichte und Segmente ehrlich und verhindert, dass der Event später über
ein kategoriebasiertes Ziel zurückkehrt.

### Aufgabe im Matomo-Backend (einmalig, zwingend)

1. *Ziele → Ziele verwalten* öffnen.
2. **Ziel 5 „Kontakt-CTA geklickt" löschen** — oder, wenn die Historie im Bericht
   sichtbar bleiben soll, umbenennen in `[inaktiv] Kontakt-CTA` und das Muster auf
   einen nie zutreffenden Wert ändern (z. B. `__deaktiviert__`).
3. Ziele 1–4 unverändert aktiv lassen.

> Der Ziel-Bestand lässt sich jederzeit gegenprüfen:
> ```bash
> set -a && . ./.env.local && set +a
> curl -s -X POST "${NEXT_PUBLIC_MATOMO_URL}index.php" \
>   -d "module=API&method=Goals.getGoals&idSite=${NEXT_PUBLIC_MATOMO_SITE_ID}&format=JSON&token_auth=${MATOMO_TOKEN_AUTH}"
> ```

> Historische Daten bleiben unberührt: Matomo berechnet Ziele zum Zeitpunkt der
> Messung. Der Bruch in der Zeitreihe ist gewollt — vorher wurden Seitenwechsel
> als Leads gezählt, ab jetzt nicht mehr. Beim Vergleich mit Vormonaten
> berücksichtigen.

## 5. Beim Ändern beachten

- **Aktions-Strings sind ein Vertrag.** Wer einen umbenennt, muss das Ziel in
  Matomo nachziehen — sonst zählt es stumm nicht mehr.
- **Neue Zone?** `data-track-zone="…"` an den umschließenden Container, in §3
  eintragen. Kein weiterer Code nötig.
- **Ohne `NEXT_PUBLIC_MATOMO_URL` / `_SITE_ID` passiert nichts** (No-op) — lokale
  Entwicklung und Builds bleiben sauber.
