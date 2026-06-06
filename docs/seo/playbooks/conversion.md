# Seitentyp-Playbook: Conversion

> Die Abschluss-Seite: Formular/Aktion zuerst, Reibung minimal, Text bewusst kurz. Hier wird der Lead geholt — nicht erklärt, nicht gerankt. | Korridor: **300–600 W** (Hard-Cap nach oben — der Tiefe-Agent **blockt bei Über-Länge**) | Schema: **LocalBusiness + ContactPoint** (+ BreadcrumbList; FAQPage nur 0–3 Einträge, optional)

Beispiel-Seiten Fast: `/kontakt/`, `/moebelplaner/`.

---

## 0 · Wann dieser Typ greift (Auswahl über Spalte „Seitentyp" der URL-Master)

Die Engine wählt dieses Playbook automatisch, wenn die URL-Master-Spalte „Seitentyp" = **Conversion** ist. Das gilt für Seiten, deren **einziger Job die Handlung** ist (Anfrage absenden, Planer öffnen, anrufen, Route planen):

- **Kontakt-Seite** (`/kontakt/`) — Formular + NAP + Standort.
- **Tool-/Aktions-Seite** (`/moebelplaner/`) — Einstieg in den externen 3D-Planer (`https://moebelplaner.fast-systemmoebel.de/`); die Seite verkauft den Klick, nicht das Produkt.
- Künftig: Termin-/Beratungs-Buchung, Standort-/Anfahrt-Seite, Newsletter-/Download-Abschluss, Karriere-Bewerbung (Job-Apply).

**Abgrenzung schon hier:** Sobald eine Seite primär *informieren, vergleichen oder Vertrauen aufbauen* soll, ist sie **nicht** Conversion (dann Leistung/Produkt/Ratgeber/Referenz). Conversion ist der **letzte Klick**, nicht der Weg dorthin. Im Zweifel gilt: Würde die Seite ohne das Formular/den Button noch einen Sinn haben? Wenn ja → falscher Typ.

---

## 1 · Such-Intent & Job-to-be-done — WAS WILL DER NUTZER SEHEN/TUN

**Dominanter Intent: T (transactional) + N (navigational).** Der Nutzer ist **entscheidungsnah oder bereits überzeugt** — er sucht nicht mehr Argumente, er sucht die **Aktion**. Typische Queries: „fast systemmöbel kontakt", „fast systemmöbel telefon", „möbelplaner fast", „fast systemmöbel espelkamp adresse / öffnungszeiten / anfahrt". Brand- und Brand+Aktion-lastig, niedriges Suchvolumen, aber **höchste Conversion-Rate im Silo**.

**Job-to-be-done — die Frage hinter der Suche (Micro-Intents):**
1. „**Wie nehme ich jetzt Kontakt auf?**" → Formular sofort sichtbar, above the fold, minimale Felder.
2. „**Kann ich auch einfach anrufen?**" → Telefonnummer als klickbarer `tel:`-Link, prominent (05771 9138312).
3. „**Wann habt ihr offen / wann erreiche ich jemanden?**" → Öffnungszeiten klar (Mo–Fr 06:00–17:00, Sa+So geschlossen).
4. „**Wo seid ihr / wie komme ich hin?**" → Adresse (Alte Waldstraße 32, 32339 Espelkamp) + Karte/Anfahrt.
5. „**Was passiert, nachdem ich abschicke?**" → Mikro-Erwartung („Wir melden uns werktags zurück", keine Fristzahl erfinden).
6. (Planer) „**Wie funktioniert der Möbelplaner und was bringt er mir?**" → 1–2 Sätze Nutzen + direkter Einstiegs-Button zum externen Tool.
7. „**Ist das die richtige, echte Firma?**" → NAP-Konsistenz + Standort-Beweis als Vertrauens-Mini-Anker (kein Langtext).

**Konsequenz für den Aufbau:** Der Nutzer hat die Kaufentscheidung im Kopf schon getroffen oder ist sehr nah dran. Jeder zusätzliche Satz, jeder weitere Block ist **Reibung**, die die Conversion senkt. Tiefe ist hier kein Qualitätssignal, sondern ein **Conversion-Killer**.

---

## 2 · Pflicht-Bausteine (INTENT-ABGELEITET, nicht generisch)

Jeder Baustein leitet sich direkt aus einem Micro-Intent aus §1 ab — nichts ist „weil man das so macht" dabei.

| # | Pflicht-Baustein | Deckt Micro-Intent | AEO/Snippet-tauglich? |
|---|---|---|---|
| 1 | **Formular/Primär-Aktion above the fold** (Kontakt: Felder; Planer: Einstiegs-Button) | 1, 6 | nein (Aktion, kein Text) |
| 2 | **Minimal-Felder** (Name, E-Mail/Telefon, Nachricht; optional Anliegen) — je weniger, desto höher die Rate | 1 | nein |
| 3 | **Klickbare Telefonnummer** `tel:05771 9138312` als Alternativweg | 2 | ja (ContactPoint) |
| 4 | **NAP-Block** (Name, Adresse, Telefon) — exakt nach FACTS.md | 4, 7 | ja (LocalBusiness) |
| 5 | **Öffnungszeiten** (Mo–Fr 06:00–17:00, Sa+So geschlossen) | 3 | ja (openingHours) |
| 6 | **Standort/Anfahrt** (Karte oder Anfahrtshinweis Espelkamp/OWL) | 4 | ja (geo/address) |
| 7 | **Erwartungs-Satz** nach Absenden („Wir melden uns werktags zurück") — 1 Satz | 5 | nein |
| 8 | **Knapper Vertrauens-Anker** (1 Zeile, z. B. Meisterbetrieb seit 1996, Espelkamp) — **kein** Trust-Block, **keine** Story | 7 | bedingt |

**Verboten als Baustein** (das macht ein anderer Typ): Prozess-Erklärung, Vergleichstabelle, Material-Ratgeber, USP-Listen, Referenz-Stories, FAQ-Marathon, Kosten-Tabellen. Wer das hier einbaut, sprengt den Korridor und das Tiefe-Gate blockt.

**Pflicht-FAQ-Anzahl: 0–3 (bewusst niedrig).** Nur falls eine Frage **direkt die Conversion entstört** (z. B. „Ist die Beratung kostenlos?", „Muss ich nach Espelkamp kommen oder geht das remote?"). **Keine** 10–15-FAQ-Block wie bei Ratgeber/Leistung — das wäre Über-Länge und Intent-Bruch. Im Zweifel: lieber 0 FAQ als Fülltext.

---

## 3 · Wortzahl-Korridor (SERP-verankert, mit Begründung)

**Korridor: 300–600 Wörter — mit hartem Cap nach oben.** Das ist der einzige Archetyp, bei dem **mehr Text schlechter** ist.

- **SERP-Realität:** Bei navigational/transactional Brand-Queries („firma kontakt", „firma planer") ranken **kurze, funktionale Seiten**. Es gibt hier **keinen 3.000-Wörter-Wettbewerb** — die SERP belohnt das Erfüllen der Aktion, nicht Textmasse. Der „SERP-Median" als Untergrenze (Regel: `Korridor = max(SERP-Median, Seitentyp-Untergrenze)`) liegt hier **unter** der Seitentyp-Untergrenze, also greift die Untergrenze 300 W.
- **Warum nicht weniger als ~300:** Unter ~300 W fehlt oft NAP + Öffnungszeiten + Erwartungs-Satz vollständig → dünne Trust-Signale, schwaches LocalBusiness-Schema-Fundament.
- **Warum hartes Cap bei ~600:** Jeder Satz über die Pflicht-Bausteine hinaus ist Reibung. **Der Tiefe-Agent blockt hier bei ÜBER-Länge** (umgekehrte Logik zu allen anderen Typen). Ergänzungen wie „Küchen nach Maß und mehr — seit 1996 fertigen wir in Espelkamp …" sind SEO-Fülltext und werden geflaggt.
- **Wichtige System-Diskrepanz (explizit benannt):** Andere Typen ziehen den Korridor *nach oben* an den SERP-Median (Cluster-Pillar real 2.400–3.200 statt der DEPTH.md-Richtwerte; kommerzieller Pillar-Hub real 3.200–4.000 statt der DEPTH.md-Hub-Spanne 800–1.200). **Bei Conversion ist es genau spiegelverkehrt:** Der Korridor wird **nach unten gedeckelt**, nicht nach oben getrieben. Die `nie unter SERP-Median`-Regel führt hier zu keiner Aufblähung, weil der relevante SERP-Median niedrig ist. **Conversion ist die einzige Ausnahme von „mehr Tiefe = besser".**

---

## 4 · Schema-Markup (konkrete JSON-LD-Typen)

- **`LocalBusiness`** (genauer: `FurnitureStore` oder `HomeGoodsStore` als Subtyp von LocalBusiness) — die Kernentität: `name`, `address` (PostalAddress: Alte Waldstraße 32, 32339 Espelkamp), `telephone` (+49 5771 9138312), `email`, `url` (www.fast-systemmoebel.de), `geo`, `openingHoursSpecification` (Mo–Fr 06:00–17:00).
- **`ContactPoint`** (als `contactPoint` von Organization/LocalBusiness) — `telephone`, `contactType: "customer service"`, `areaServed: "DE"`, `availableLanguage: "de"`.
- **`BreadcrumbList`** — Fast Systemmöbel → Kontakt (bzw. → Möbelplaner).
- **`FAQPage`** — **nur**, wenn 1–3 echte Conversion-Entstör-FAQ vorhanden sind; sonst weglassen (kein leeres Schema).
- **`Organization`** (Site-weit, im Layout) trägt `sameAs` (Instagram/Facebook @fastsystemmobel, LinkedIn) — die Conversion-Seite verweist darauf, dupliziert es nicht.

**Schema-Hygiene:** Alle Werte exakt aus FACTS.md. **Keine** `aggregateRating`/`review` ins Schema einbauen, solange die ~4,2★/~14-Bewertungen nicht live gegengeprüft sind (Gate 6/12 sonst rot). Öffnungszeiten = die **vom Kunden bestätigten** Mo–Fr 06:00–17:00 (nicht die alten 09–16 Uhr der Altsite).

---

## 5 · E-E-A-T-Fokus (welche der 4 Säulen trägt dieser Typ am stärksten)

**Tragende Säule: TRUST** (mit Abstand). Conversion lebt davon, dass der Nutzer im Abschluss-Moment **glaubt, hier richtig zu sein** — nicht von Expertise-Tiefe.

- **Trust (Hauptlast):** **NAP-Konsistenz** ist hier das #1-Signal — Adresse, Telefon, Öffnungszeiten **byte-identisch** zu FACTS.md, Impressum und Schema. Echter Standort (Espelkamp/OWL) + Karte = „echte Firma, kein Lead-Sammler". Klare, druckfreie Conversion-Wege (kein Clickbait, keine Fake-Dringlichkeit).
- **Experience (leichter Akzent, 1 Zeile):** „Meisterbetrieb seit 1996, Fertigung in Espelkamp" — ein einziger erdender Satz, **nicht** ausgebaut. (Vorsicht: **nicht** „1996 in Espelkamp" schreiben — Gründung war Rahden-Tonnenheide; Espelkamp ab 2001. Verbotener Claim, Gate 6 blockt sofort.)
- **Expertise / Authoritativeness:** bewusst **schwach** auf dieser Seite — die wurden auf der Leistungs-/Referenz-Seite VOR diesem Klick aufgebaut. Hier nicht wiederholen.

**Konkrete Belege für Fast (sparsam dosiert):** NAP exakt · Öffnungszeiten Mo–Fr 06:00–17:00 · Standort Alte Waldstraße 32, Espelkamp · optional der eine Erdungs-Satz „Familienbetrieb, seit 1996". **Keine** Zahlen-Schlacht (4.000 Projekte / 72K Teile gehören auf Referenz/Leistung, nicht hierher).

---

## 6 · CTA-Stärke & Conversion-Wege (stark/weich)

**CTA-Stärke: maximal — aber die Aktion IST die Seite.** Anders als bei Leistung (CTA als Block *am Ende*) ist hier die Conversion-Aktion das **Hauptelement above the fold**. Es gibt keinen „Inhalt + CTA", es gibt nur die Aktion plus minimal stützenden Kontext.

- **Primär-Conversion je Seite:**
  - `/kontakt/` → **Kontaktformular** (above the fold) als Haupt-Conversion.
  - `/moebelplaner/` → **„Möbelplaner öffnen"-Button** zum externen Tool (`https://moebelplaner.fast-systemmoebel.de/`) als Haupt-Conversion. Klar als externer Wechsel kennzeichnen.
- **Sekundär-Wege (gleichwertig sichtbar, für andere Präferenzen):**
  - **Telefon** `tel:05771 9138312` — für „lieber sofort sprechen".
  - **E-Mail** info@fast-systemmoebel.de — für „schriftlich, ohne Formular".
  - **Anfahrt/Standort** — für „komme vorbei".
- **Cross-Conversion:** `/kontakt/` darf dezent auf `/moebelplaner/` verweisen („Idee schon konkret? Direkt im Möbelplaner skizzieren") und umgekehrt. **Ein** solcher Verweis — kein Link-Teppich.
- **Kein** weicher CTA, **keine** „Mehr erfahren"-Verteilung tiefer in den Funnel. Die Conversion-Seite leitet **nicht weiter weg** in andere Cluster — das wäre ein Funnel-Leck.

---

## 7 · Ton-Nuance (Abweichung vom BRAND_VOICE-Grundton)

Grundton bleibt: handwerklich-stolz, ehrlich, präzise, „Sie". **Abweichung für diesen Typ:**

- **Maximal knapp, einladend, handlungsorientiert.** Imperativ erlaubt und erwünscht: „Schreiben Sie uns.", „Rufen Sie an.", „Öffnen Sie den Möbelplaner." — kurze, direkte Sätze; gern ein lakonischer Akzent.
- **Warm, nicht werblich.** Der „erklärt und beweist statt verkauft"-Grundsatz wird hier zu „**lädt ein, ohne zu drängen**". Kein Verkaufsdruck, keine Dringlichkeits-Tricks („Nur heute!"), kein Clickbait.
- **Kein Erklär-Modus.** Die ruhige, materialnahe Tiefe des Grundtons (Eiche, PU-Kante, Prozess) gehört **nicht** hierher — das ist die Tonlage der Leistungs-/Produkt-/Ratgeber-Seiten. Hier zählt Reibungsfreiheit über Eloquenz.
- **Ein Satz Wärme erlaubt:** ein menschlicher, persönlicher Ton beim Erwartungs-Satz („Wir melden uns werktags persönlich zurück.") — das ist on-brand (Familienbetrieb) und senkt die Hemmschwelle.

---

## 8 · Interne-Link-Rolle im Silo (eingehend/ausgehend, Anker-Logik)

**Rolle: Funnel-Endpunkt / Conversion-Senke.** Die Conversion-Seite ist im Silo der **Ziel-Knoten**, nicht der Verteiler.

- **Eingehend (viel, gewollt):** Alle Leistungs-, Produkt-, Hub- und Referenz-Seiten verlinken hierher über ihre CTA-Blöcke. Anker: handlungs-/markennah — „Beratung anfragen", „Kontakt aufnehmen", „Im Möbelplaner skizzieren", **nicht** keyword-stuffed („Küche nach Maß Espelkamp kaufen Kontakt"). Jede Seite, deren Funnel hier endet, verlinkt beidseitig laut `internal-linking.md`.
- **Ausgehend (sehr wenig, bewusst):** **Maximal 1–2** Links — und nur (a) der **eine** Cross-Conversion-Link zur Schwester-Conversion-Seite (Kontakt ↔ Möbelplaner) und ggf. (b) ein dezenter Rückverweis auf den thematischen Hub/die zuletzt logische Leistungsseite, falls der Nutzer doch noch zweifelt. **Keine** breite Silo-Verteilung — das würde den Abschluss aufweichen.
- **Anker-Logik:** Eingehende Anker sind **aktions-/CTA-formuliert**; ausgehende (die wenigen) sind **kontext-knapp**. Conversion-Seiten geben **wenig Link-Equity ab** (Endpunkt) und sammeln viel ein.

---

## 9 · AEO/Zitierbarkeit (Frage-zuerst, Direktantworten, Tabellen, Entitäten)

AEO ist hier **schmal, aber präzise** — KI-Assistenten zitieren von Conversion-Seiten v. a. **Fakten-Entitäten** (NAP, Öffnungszeiten, Telefon), nicht Fließtext.

- **Direktantworten als Entitäten:** Telefon, Adresse, Öffnungszeiten als klar ausgezeichnete, einzeln extrahierbare Datenpunkte (im Markup als ContactPoint/LocalBusiness) — so beantwortet eine KI „Wie erreiche ich Fast Systemmöbel?" / „Wann hat Fast Systemmöbel offen?" direkt mit unseren Daten.
- **Frage-zuerst nur falls FAQ:** Wenn die 0–3 Conversion-FAQ vorhanden sind, frage-zuerst formulieren („Ist die Erstberatung kostenlos? — Ja, …") mit knapper Direktantwort. Sonst **keine** künstlichen Fragen erzeugen.
- **Keine Tabellen-Pflicht.** Conversion braucht **keine** Vergleichs-/Kostentabelle (das ist Leistungs-/Produkt-Domäne). Eine schlichte Definitions-Liste (Adresse / Telefon / E-Mail / Zeiten) genügt und ist KI-extrahierbar.
- **Entitäten-Klarheit:** Marke „Fast Systemmöbel", Ort „Espelkamp/OWL", Tool „Möbelplaner" sauber benennen — konsistent mit Organization-Schema (`sameAs`) für eindeutige Entitäts-Auflösung.
- **`llms.txt`:** Conversion-Seiten als „Kontakt/Aktion"-Endpunkte listen, damit KI-Crawler den Handlungs-Endpunkt kennen — aber **nicht** als Wissensquelle gewichten.

---

## 10 · QC-Schwerpunkte für diesen Typ (welche Gates besonders hart)

Reihenfolge nach Schärfe für Conversion (von den 13 Gates in SYSTEM.md):

1. **Gate 5 — Umfang/Tiefe (INVERTIERT, am härtesten):** Hier blockt das Tiefe-Gate bei **Über-Länge**, nicht bei Kürze. Über ~600 W oder ein „nice-to-have"-SEO-Block → **rot, zurück zum Kürzen**. Einziger Typ mit Decken-Prüfung.
2. **Gate 6 — Faktentreue (Hard-Stop):** NAP, Öffnungszeiten, Telefon **exakt** wie FACTS.md. Ein verbotener Claim („1996 in Espelkamp", „5 Jahre Garantie", „200 km Radius") → sofortiger Stopp, nie live.
3. **Gate 12 — Technical-SEO:** `tel:`-Link funktional · NAP byte-identisch zu Impressum + Schema · Title/Desc-Länge · H-Hierarchie sauber (kein H2-Fülltext-Wildwuchs) · Karten-/Bild-`alt`.
4. **Gate 8 — Schema/Technik:** LocalBusiness + ContactPoint vollständig & valide; **kein** leeres FAQPage; **kein** aggregateRating ohne Live-Beleg.
5. **Gate 7 — interne Links/CTA:** Primär-Conversion above the fold · Sekundärwege (Tel/Mail) vorhanden · **maximal** 1–2 ausgehende Links (Funnel-Leck-Check).
6. **Gate 13 — Chefredakteur-Endabnahme:** Holistisch: **Konvertiert die Seite?** Ist die Aktion in <5 Sek. erfassbar, ist die Reibung minimal? (Bei Conversion ist „dient sie dem Nutzer" = „lässt sie ihn schnell abschließen".)

Weniger relevant hier: Gate 3/4 (LSI/WDF*IDF) und Gate 11 (Korpus-Dedup) sind durch die Kürze fast unkritisch — **aber** NAP/Boilerplate auf mehreren Conversion-Seiten darf trotzdem nicht 1:1 dupliziert werden (Kontakt ≠ Möbelplaner im Framing).

---

## 11 · NEGATIV-ABGRENZUNG — was dieser Typ bewusst NICHT tut

Conversion ist der einzige Archetyp, der **gegen Tiefe optimiert**. Jede Versuchung, „noch etwas Nützliches" zu ergänzen, ist hier ein Fehler.

- **NICHT wie Leistung:** keine USP-Listen, kein Prozess-Block (Beratung→Aufmaß→Montage), keine Vergleichstabelle (Tischler vs. Studio vs. Möbelhaus), kein 10–15-FAQ-Block, **kein starker CTA *am Ende* eines langen Textes** — bei Conversion ist die Aktion *der Anfang*, nicht der Schluss. Leistung baut Vertrauen *auf*; Conversion *erntet* es.
- **NICHT wie Produkt:** keine Varianten/Maße/Specs, keine Kosten-Orientierung, kein Product-Schema. Conversion verkauft kein Produkt, sondern den nächsten Schritt.
- **NICHT wie Ratgeber:** keine HowTo-Schritte, keine Direktantwort-Sammlung, keine maximale Tiefe, kein AEO-Langtext. Ratgeber will *ranken & erklären*; Conversion will *abschließen*.
- **NICHT wie Hub:** **keine** breite Verteilung in Cluster-Karten, keine Orientierungs-Navigation. Hub *streut* Link-Equity; Conversion *sammelt* sie als Endpunkt und gibt fast nichts ab.
- **NICHT wie Referenz/Trust (wichtigste Feinabgrenzung):** **keine** Gründer-/Familien-Story, **keine** Projekt-Cases mit Ort, **keine** Team-Vorstellung, **keine** Zahlen-Trophäen (4.000 Projekte / 72K Teile / 1.000 m²). Referenz *beweist über Erzählung*; Conversion nutzt nur **einen** erdenden Trust-Satz und überlässt den Beweis den vorgelagerten Seiten. Faustregel: *Referenz erzählt, warum man Fast vertrauen kann — Conversion setzt voraus, dass man es bereits tut, und macht den Abschluss reibungslos.*
- **NICHT generisch:** kein SEO-Fülltext, keine Keyword-Wiederholung, keine Dringlichkeit/Clickbait, kein „Über uns light". Wenn ein Block nicht **direkt einen Micro-Intent aus §1** bedient → er gehört nicht auf diese Seite.
