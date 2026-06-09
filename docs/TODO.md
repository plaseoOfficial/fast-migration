# TODO / Backlog

Allgemeine offene Aufgaben für diese Codebase. (Für interne Verlinkungs-Aufgaben
siehe das spezielle Backlog in [`seo/internal-linking.md`](seo/internal-linking.md).)

## Offen

- [ ] **Kontaktformular: echter Versand via Server Action.** Das Formular in
  `src/components/sections/kontakt/KontaktFormularHero.tsx` setzt aktuell nur
  clientseitig `submitted = true` (Fake) und verschickt nichts. Eine Next.js 16
  Server Action ergänzen, die die Felder (Vorname, Nachname, Email, Telefon,
  Nachricht) entgegennimmt, **serverseitig validiert** und **per E-Mail
  versendet** (an die Fast-Adresse). Inklusive: Fehler-/Erfolgs-State im UI,
  Spam-Schutz (z. B. Honeypot) und Beibehaltung der Erfolgsmeldung
  „Danke! Wir melden uns."

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
- [ ] **Wortzahl auf Korridor bringen.** Aktuell ~2.070 W, Kit-Korridor verbindlich
  2.400–2.800. Es fehlen ~330 W — NICHT bestehende Sektionen aufblähen, sondern
  ein weiteres Pflicht-Modul ergänzen (empfohlen: `UspHighlight` für die PU-Kante
  analog `gastroUsp`, + ggf. Material-/Innenausbau-Block).
- [x] **2 Tabellen-Sektionen für SEO-Tiefe gebaut.** Neue props-getriebene
  `SpecTable`-Sektion (`src/components/sections/shared/SpecTable.tsx`, in
  registry/catalog registriert), 2× genutzt: Vergleich (`ladenVergleich`) +
  Kostentreiber (`ladenKosten`). Zusätzlich Process-Wand → `ProcessSteps`
  (`ladenSteps`) und Warum-/Hero-/IntroStats-Texte auf Budget gekürzt. Keine
  erfundenen Preise (FACTS).
- [ ] **(optional) Schema für neue Tabellen.** `buildLadenbauJsonLd` deckt
  LocalBusiness + Service + Breadcrumb + FAQPage (16 FAQ automatisch) bereits ab.
  Nur nötig, falls die neuen Tabellen zusätzlich ausgezeichnet werden sollen.
- [ ] **(separat) URL-Migration** `/gewerbe/ladenbau/` → flaches `/ladenbau/`
  (konsistent mit `/gastronomieeinrichtung/`, `/bueroeinrichtung/`,
  `/praxiseinrichtung/`): Route-Move + Redirect + Nav + `linking-rules.ts` +
  canonical. Bewusst getrennt vom Content-PR gehalten.

## Erledigt

<!-- abgeschlossene Aufgaben hierher verschieben -->
