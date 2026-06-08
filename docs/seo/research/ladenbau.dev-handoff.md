# Ladenbau (`/gewerbe/ladenbau/`) — Dev-Handoff für Ben

> **Wir liefern nur Content.** Die Copy ist fertig in `src/lib/content/ladenbau.ts`
> (2.029 W · 16 FAQ · FACTS-sauber, Discovery vom Kunden bestätigt). Alle bereits
> in `page.tsx` gerenderten Sections (`ladenHero`, `ladenIntroStats`, `ladenProcess`,
> `ladenTypische`, `ladenWarum`, `ladenGeschichte`, `ladenCtas`, `ladenFaq`) sind mit
> dem Einsetzen **sofort live** — kein Wiring nötig.
>
> Damit die Seite ihr volles Potenzial erreicht, gibt es unten **Design-/Dev-Schritte**.
> Jeder Punkt: *was · wo (file:line) · warum*. Reihenfolge = Aufwand/Wirkung.

---

## 1 · Möbelplaner-Block verdrahten — Quick-Win (2 Zeilen)

Neuer Content-Export `ladenMoebelplaner` ist vorhanden, wird aber **noch nicht gerendert**
→ die Seite zeigt aktuell den **generischen Privat-Default-Text** des Möbelplaners.

- **Datei:** `src/app/(site)/gewerbe/ladenbau/page.tsx`
- **Import (~L16–26)** um `ladenMoebelplaner,` ergänzen.
- **L80:** `<MnmMoebelplaner />` → `<MnmMoebelplaner {...ladenMoebelplaner} />`
- **Vorbild:** `src/app/(site)/gastronomieeinrichtung/page.tsx` (Import L23 + Render L82).

**Effekt:** ladenbau-spezifischer Möbelplaner-Text **und** der interne Pflicht-Link
auf `/moebelplaner/` (Kit §7) sind live.

---

## 2 · Interne Pflicht-Links als echte `<Link>` rendern

Die **Anker-Texte stehen bereits im Content**, aber die Body-Sections
(`MnmTypische`, `MnmWarum`, `MnmProcess`, `MnmGeschichte`) rendern **keine** In-Content-Links
(0 `href` im Output). Damit sind die Silo- und Serien-Pflichtlinks aktuell nur Text.

| Ziel | Anker (steht im Content) | Status / Slot |
|---|---|---|
| `/serienmoebel/` | „Ladeneinrichtung in Serie" (`ladenTypische.row2[2]`, FAQ 15) | **fehlt** → Slot nötig |
| `/gastronomieeinrichtung/` | „Gastronomieeinrichtung nach Maß" (`row2[0]`, FAQ 6) | **fehlt** → Slot nötig |
| `/praxiseinrichtung/` | „Praxiseinrichtung" (`row2[1]`, FAQ 6) | **fehlt** → Slot nötig |
| `/bueroeinrichtung/` | „Büroeinrichtung nach Maß" (`row2[1]`, FAQ 6) | **fehlt** → Slot nötig |
| `/referenzen/` | „Referenzen" (`ladenGeschichte` Abs. 3) | **fehlt** → Slot nötig |
| `/moebelplaner/` | über `ladenMoebelplaner`-CTA | **erledigt mit Punkt 1** |
| `/kontakt/` | CTAs (IntroStats, ExpandingImageCta) | rendert bereits ✅ |
| `/gewerbe/` (hoch) | Breadcrumb | rendert bereits ✅ |

**Empfohlener Slot:** die **„Weitere Leistungen"-Karten** (`MnmWeitereLeistungen`,
`page.tsx` L76 — aktuell **ohne Props**) als Karten mit `href` auf die Geschwister-Cluster
`/gastronomieeinrichtung/`, `/praxiseinrichtung/`, `/bueroeinrichtung/` **und** `/serienmoebel/`.
Alternativ optionale Inline-Link-Props in `MnmTypische`/`MnmWarum`.
Danach: `npm run audit:links` (+ ggf. `intern-verlinkung`-Agent).

---

## 3 · Neue Sektionen für volle SEO-Tiefe (STRUKTUR-BEDARF)

Der SERP-Korridor für „Ladenbau nach Maß" ist **2.400–2.800 W** (Archetyp *leistung*).
Content-only erreicht in der bestehenden Prop-Struktur **~2.029 W** — die fehlende Tiefe ist
**tabellen-förmig** und braucht **2 neue Render-Slots**. Pflicht-Tabellen laut Kit §3 (Modul 4+5).

> **Den Tabellen-INHALT liefern wir unten mit.** Du baust nur die Section (Render-Slot),
> wir mappen den Text danach als Props in `ladenbau.ts`. Keine erfundenen Preise (FACTS).

### 3a · Vergleichstabelle „Maßanfertigung vs. System vs. Möbelhaus" (Pflicht-AEO-Container)

| Kriterium | Maßanfertigung vom Meisterbetrieb (Fast) | Systembausatz / Katalogregal | Möbelhaus / Konfektion |
|---|---|---|---|
| Passform | Wand zu Wand ohne Passleisten, jede Nische genutzt | feste Raster, Lücken und Blenden | Standardmaße, selten exakt |
| Material & Langlebigkeit | Massivholz + branchenübliche Materialien, PU-Kante an Stoßkanten | je nach Serie, oft beschichtete Platten | wechselnd, oft auf Privatnutzung ausgelegt |
| Markenbezug (CI) | Logo, Farben, Material nach Ihrem Corporate Design | kaum anpassbar | begrenzt |
| Beratung & Planung | Aufmaß vor Ort + 3D-Planung, ein fester Ansprechpartner | Selbst-/Online-Planung | Verkaufsberatung |
| Fertigung | eigener Meisterbetrieb in Espelkamp, ohne Subunternehmer | industrielle Serie | Zukauf |
| Montage | eigenes Team, auf Wunsch im laufenden Betrieb | Selbstmontage / Fremddienstleister | externe Monteure |

### 3b · Kostentreiber-Tabelle (Antwort auf „Was kostet das?", ohne €-Pauschale)

| Kostenfaktor | Was den Preis bestimmt |
|---|---|
| Raumgröße & Möbelumfang | Lauf-/Flächenmeter, Anzahl Theken, Regale und Tresen |
| Materialwahl | Massivholz, Dekore, Oberflächen, Beschläge |
| Technik & Beleuchtung | integrierte Kassen-/Wäge-Technik, Lichtkonzept |
| Baulicher Innenausbau | Boden, Wand, Decke, Trennwände |
| Corporate Design | Logo-Integration, Sonderfarben, Sonderanfertigungen |
| Montageaufwand | Anfahrt im ~200-km-Radius, Montage im laufenden Betrieb |

**Effekt beider Tabellen:** +~300–500 W echte Substanz + 2 zitierbare AEO-Tabellen
→ Korridor 2.400–2.800 W erreichbar; stärkere Featured-Snippet-/PAA-Chance.

---

## 4 · Schema (Technik — meist kein Handlungsbedarf)

`buildLadenbauJsonLd` liefert bereits **LocalBusiness + Service + BreadcrumbList + FAQPage**;
die jetzt **16 FAQ** fließen über `faq: ladenFaq.items` **automatisch** ins FAQPage-JSON-LD ein.
Kein Eingriff nötig, außer du willst die neuen Tabellen zusätzlich auszeichnen.

---

## 5 · Offen / separat (kein Teil dieses Content-PRs)

- **URL-Migration** `/gewerbe/ladenbau/` → flaches **`/ladenbau/`** (konsistent mit den schon
  flachen Schwester-Hubs `/gastronomieeinrichtung/`, `/bueroeinrichtung/`, `/praxiseinrichtung/`):
  Route-Move + Redirect + Nav + `linking-rules.ts` + canonical. Bewusst **separat** gehalten,
  damit dieser PR reiner Content bleibt.
- Namentlich freigegebenes **Einzelhandels-/Boutique-Referenzprojekt** (falls vorhanden) → wir
  weben es nachträglich in `ladenGeschichte` / Referenz-Anriss ein.
