# Tracking — Events, Zonen & Conversion-Definition

Was gemessen wird, was davon als **Conversion** zählt und wie die Matomo-Ziele
dazu konfiguriert sind. Code: `src/lib/analytics.ts` (Versand) und
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

**Wichtig zum Verständnis:** die Ziele matchen auf die **Aktion**, nicht auf die
Kategorie. Die Umstellung auf `Engagement` allein hätte das Ziel deshalb nicht
abgeschaltet — es musste im Backend gelöscht werden. Die Umstellung bleibt
trotzdem richtig: sie hält Berichte und Segmente ehrlich und verhindert, dass der
Event später über ein kategoriebasiertes Ziel zurückkehrt.

### Ziel-Bestand (Site-ID 3, Stand 2026-08-05)

| Ziel | Name | matcht auf `event_action` (exakt) |
|---|---|---|
| 1 | Kontaktformular abgeschickt | `Kontaktformular gesendet` |
| 2 | Telefon-Klick | `Telefon geklickt` |
| 3 | E-Mail-Klick | `E-Mail geklickt` |
| 4 | Möbelplaner geöffnet | `Möbelplaner geöffnet` |

**Ziel 5 „Kontakt-CTA geklickt" wurde am 2026-08-05 gelöscht** (`Goals.deleteGoal`,
per API bestätigt: 4 aktive Ziele, Ziel 5 nicht mehr vorhanden). Die Zahlen davor
zeigen, warum — Conversions je Ziel und Monat, letzte drei Monate:

| Ziel | −2 | −1 | akt. |
|---|---|---|---|
| Kontaktformular abgeschickt | 4 | 7 | 1 |
| Telefon-Klick | 0 | 1 | 1 |
| E-Mail-Klick | 1 | 0 | 0 |
| Möbelplaner geöffnet | 7 | 19 | 3 |
| ~~Kontakt-CTA geklickt~~ | ~~22~~ | ~~25~~ | ~~8~~ |

Im Vormonat standen **25 CTA-Klicks gegen 8 echte Leads** (Formular + Telefon) —
rund drei Viertel der gemeldeten „Conversions" waren reine Seitenwechsel.

> **Falls das Ziel je wiederhergestellt werden soll**, war es so definiert:
> `match_attribute: event_action` · `pattern_type: exact` ·
> `pattern: "Kontakt-CTA geklickt"` · `case_sensitive: 0` · `allow_multiple: 0` ·
> `revenue: 0`

### ⚠️ Achtung beim Lead-Trend — der Rückgang ist ein Messartefakt

Matomo hat die **bereits archivierten Zeiträume nicht neu berechnet**. Am
2026-08-05 nach dem Löschen geprüft: die Gesamt-Conversions der Vormonate
enthalten die CTA-Klicks unverändert weiter (34 / 52 / 13). Ab jetzt zählen nur
noch echte Leads — der Trend **sieht** deshalb aus wie ein Einbruch, obwohl sich
nichts verschlechtert hat.

Vergleichsbasis für Berichte (Portfolio-Snapshot, Retainer-Reporting) — die
zweite Spalte ist die ehrliche:

| Monat | wie archiviert (mit CTA) | echte Leads |
|---|---|---|
| 2026-06 | 34 | **12** |
| 2026-07 | 52 | **27** |
| 2026-08 (bis 05.) | 13 | **5** |

Ab 2026-08-05 sind gemeldete und echte Zahl identisch. **Bei jedem Vergleich mit
Zeiträumen vor diesem Datum die rechte Spalte verwenden** — sonst wird eine
Bereinigung als Leistungsabfall gelesen. Betrifft insbesondere den
Portfolio-Snapshot, der Ziel-Conversions als Lead-KPI zieht.

Ziel-Bestand jederzeit gegenprüfen:

```bash
set -a && . ./.env.local && set +a
curl -s -X POST "${NEXT_PUBLIC_MATOMO_URL}index.php" \
  -d "module=API&method=Goals.getGoals&idSite=${NEXT_PUBLIC_MATOMO_SITE_ID}&format=JSON&token_auth=${MATOMO_TOKEN_AUTH}"
```

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
