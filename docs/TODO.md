# TODO / Backlog

Allgemeine offene Aufgaben für diese Codebase. (Für interne Verlinkungs-Aufgaben
siehe das spezielle Backlog in [`seo/internal-linking.md`](seo/internal-linking.md).)

## Offen

### Ladenbau `/gewerbe/ladenbau/` — Dev-Schritte zum Content-PR #29

Content ist fertig in `src/lib/content/ladenbau.ts` (2.029 W · 16 FAQ · FACTS-sauber).
Volle Details + Tabellen-Inhalte siehe
[`seo/research/ladenbau.dev-handoff.md`](seo/research/ladenbau.dev-handoff.md).

- [x] **Möbelplaner-Block verdrahtet.** `<MnmMoebelplaner {...ladenMoebelplaner} />`
  gerendert → ladenbau-spezifischer Text + Pflicht-Link auf `/moebelplaner/` live.
- [x] **Interne Pflicht-Links + Branchen-Block gerendert.** Neuer Branchen-Block
  (`SegmentCards`, `ladenSegments`) als Tiefe-/Entity-Fläche. `MnmWeitereLeistungen`
  bekommt eigene gewerbe-konforme Karten (`ladenWeitereLeistungen`) → Pflicht-Up-Link
  `/gewerbe/` (kontextuell, zusätzlich zum Breadcrumb) + SOLL `/referenzen/`; löst
  zugleich den vorigen Privat-Silo-Cross-Link (`/moebel-nach-mass/`) im Default ab.
  Trailing-Slash `/kontakt/` gefixt. `audit:links` für die Seite sauber.
  **Bewusste Abweichung vom Kit §7:** die Geschwister-Cluster-Links
  (`/gastronomieeinrichtung/`, `/praxiseinrichtung/`, `/bueroeinrichtung/`,
  `/serienmoebel/`) werden NICHT lateral gesetzt — `internal-linking.md`
  („A Cluster-Pillar must not link to another silo's clusters") verbietet
  Cluster↔Cluster; Verteilung läuft über den `/gewerbe/`-Hub.
- [~] **Wortzahl auf Korridor bringen — WIRD NICHT MEHR VERFOLGT (Entscheidung 2026-06-16).**
  Aktuell ~2.070 W, Kit-Korridor wäre 2.400–2.800 gewesen. Bewusst so belassen;
  kein Launch-Blocker. Falls später doch gewünscht: ein weiteres Pflicht-Modul
  ergänzen (z. B. `UspHighlight` analog `gastroUsp`), bestehende Sektionen NICHT aufblähen.
- [x] **2 Tabellen-Sektionen für SEO-Tiefe gebaut.** Neue props-getriebene
  `SpecTable`-Sektion (`src/components/sections/shared/SpecTable.tsx`, in
  registry/catalog registriert), 2× genutzt: Vergleich (`ladenVergleich`) +
  Kostentreiber (`ladenKosten`). Zusätzlich Process-Wand → `ProcessSteps`
  (`ladenSteps`) und Warum-/Hero-/IntroStats-Texte auf Budget gekürzt. Keine
  erfundenen Preise (FACTS).
- [ ] **(optional) Schema für neue Tabellen.** `buildLadenbauJsonLd` deckt
  LocalBusiness + Service + Breadcrumb + FAQPage (16 FAQ automatisch) bereits ab.
  Nur nötig, falls die neuen Tabellen zusätzlich ausgezeichnet werden sollen.
- [x] **(separat) URL-Migration** `/gewerbe/ladenbau/` → flaches `/ladenbau/`
  (konsistent mit `/gastronomieeinrichtung/`, `/bueroeinrichtung/`,
  `/praxiseinrichtung/`): Route-Move + Redirect + Nav + `linking-rules.ts` +
  canonical. Live verifiziert (`/ladenbau/` 200, Redirect greift).

## Erledigt

- [x] **Kontaktformular: echter Versand via Server Action.** Umgesetzt (PR #42):
  `src/lib/actions/kontakt.ts` validiert serverseitig + versendet per Resend,
  Honeypot-Spam-Schutz, Fehler-/Erfolgs-State im UI. Live deployed auf `master`.
