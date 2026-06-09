# Seitentyp-Playbook: Produkt

> Die Kaufabsicht-Seite für **ein konkretes, maßgefertigtes Möbel** (Küchenzeile, Kleiderschrank, Waschtisch, Empfangstresen …): zeigt Varianten/Maße, gibt Kosten-Orientierung, klärt technische Specs und holt die Anfrage ab. | Korridor: **1.200–1.800 W** | Schema: **Product + FAQPage + BreadcrumbList (+ LocalBusiness)**

## 0 · Wann dieser Typ greift (Auswahl über Spalte "Seitentyp" der URL-Master)
- **Trigger:** Spalte „Seitentyp" der URL-Master = **`Produktseite`**. Die Engine wählt dieses Ebene-2-Playbook automatisch.
- **URL-Muster:** immer ein **Spoke unter einem Cluster-Pillar**, eine Ebene tiefer (Click-Depth 3): `/<cluster>/<produkt>-nach-mass/`. Beispiele aus der URL-Master: `/kuechen-nach-mass/kuechenzeile-nach-mass/`, `/kuechen-nach-mass/l-kueche-nach-mass/`, `/kuechen-nach-mass/kochinsel-nach-mass/`, `/einbauschraenke-nach-mass/kleiderschrank-nach-mass/`, `/badmoebel-nach-mass/waschtisch-nach-mass/`, `/wohnmoebel-nach-mass/sideboard-nach-mass/`, `/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/`, `/bueroeinrichtung/empfangstresen-nach-mass/`, `/gastronomieeinrichtung/tresen-nach-mass/`.
- **Primär-KW-Signatur:** `<Möbelstück> nach Maß` (selten `<Möbelstück> Schiebetür/Massivholz nach Maß`). Ein **einzelnes Produkt-Entity**, nicht eine Produkt-Gattung.
- **Intent-Marker:** Spalte „Int" = **C** (commercial) oder **T** (transactional). Ist die Spalte **I** → es ist ein Ratgeber, nicht dieses Playbook. Ist es eine Gattung mit eigenen Unter-Produkten (z. B. „Küchen nach Maß") → Cluster-Pillar (`leistung.md`), nicht hier.
- **Faustregel:** „Kann ich genau **dieses eine Möbel** anfragen und bekomme ich dafür Maße, Varianten und einen Preis-Rahmen?" → Produkt. „Will ich erst die ganze Kategorie verstehen?" → Cluster-Pillar/Hub.

## 1 · Such-Intent & Job-to-be-done — WAS WILL DER NUTZER SEHEN/TUN
**Dominanter Intent: C (commercial), bei Nischen-/Long-Tail-Produkten T (transactional).** Der Nutzer ist **weiter unten im Funnel** als beim Cluster-Pillar — er hat das Möbelstück schon gewählt und prüft jetzt: passt das in meinen Raum, was kostet es, kann ich es hier bauen lassen. Job-to-be-done: **„Ich will dieses Möbel auf meinen Raum/mein Budget abgleichen und es dann anfragen."**

Micro-Intents (jede Frage muss die Seite konkret beantworten):
1. **„Welche Varianten/Ausführungen gibt es?"** — Bauformen, Fronten, Materialien, Griff-/Beschlag-Optionen für *genau dieses* Produkt (z. B. L-Küche vs. U-Küche; Kleiderschrank Drehtür vs. Schiebetür).
2. **„Welche Maße sind möglich — passt es in meinen Raum?"** — Standardmaße, Sondermaße, Min/Max, Dachschräge/Nische/Raumhöhe. Maße sind beim Produkt **das** Differenzierungs-Asset.
3. **„Was kostet das ungefähr?"** — Preis-/Kosten-**Orientierung** (Spanne + Treiber), keine Festpreise. Klar als Richtwert markiert.
4. **„Aus welchem Material, wie langlebig, wie pflege ich es?"** — technische Specs, Korpus/Front, Kanten, Pflege.
5. **„Warum bei Fast und nicht von der Stange?"** — Maßvorteil + USP (PU-Kantenverleimung, Eigenfertigung) gegen Standardmöbel/Möbelhaus.
6. **„Wie läuft das ab und wie lange dauert es?"** — Kurz-Prozess + grobe Lieferzeit-Einordnung (nur belegbar/vorsichtig).
7. **„Wie frage ich genau dieses Möbel an?"** — direkter Weg zu Möbelplaner / Kontakt für *dieses* Produkt.

## 2 · Pflicht-Bausteine (INTENT-ABGELEITET, nicht generisch)
Jeder Baustein ist aus genau einem Micro-Intent (§1) abgeleitet. **AEO** = Snippet-/KI-zitier-tauglich (Frage-zuerst, Direktantwort, Tabelle).

1. **Produkt-Intro mit Direktantwort** (→ MI 1/5): 40–60-Wörter-Lead, der in Satz 1 sagt, was das Produkt ist + Maßvorteil + Fast-Bezug. **[AEO]**
2. **Varianten-/Ausführungs-Block** (→ MI 1): Bauformen, Fronten, Materialien, Beschläge — produktspezifisch, als Grid oder kurze Tabelle. **[AEO bei Tabelle]**
3. **Maß-Block** (→ MI 2): **Pflicht** — Standard- & Sondermaße, Min/Max, Sondersituationen (Nische, Dachschräge, Raumhöhe). Als **Maß-Tabelle**. *Das ist das stärkste Anti-Duplikat-Asset.* **[AEO]**
4. **Kosten-Orientierungs-Block** (→ MI 3): Preis**spanne** + 3–5 **Preistreiber** für *dieses* Produkt. Klar als Richtwert/„ab"-Orientierung, nie Festpreis. Als Mini-Tabelle (z. B. Ausführung → Rahmen). **[AEO]**
5. **Technik-/Material-Specs** (→ MI 4): Korpus, Front, **PU-Kantenverleimung** (fugenlos/feuchtigkeitsbeständig), Beschläge, Pflege/Langlebigkeit. Spec-Liste. **[AEO bei Spec-Tabelle]**
6. **Warum nach Maß / Warum Fast** (→ MI 5): Maß vs. Standard, kurzer USP-Block (Eigenfertigung, Meisterbetrieb). Kein Pillar-USP-Roman — komprimiert.
7. **Mini-Prozess** (→ MI 6): 3–4 Schritte (Beratung → 3D-Planung → Fertigung → Montage „auf Wunsch"). Knapp; Vollprozess liegt beim Cluster-Pillar.
8. **FAQ-Block** (→ alle MI): **Pflicht ≥ 6 FAQ** für dieses eine Produkt (Maße/Kosten/Material/Ablauf/Sondersituation). Mehrere Produkte ⇒ **eigene** Fragen je Produkt, kein Copy-Paste. **[AEO]**
9. **Kontextueller Aufstieg + Querverweis** (→ MI 7 + Silo): Link **hoch** zum Cluster-Pillar (Breadcrumb + 1 in-content) und ggf. zu 1 Schwester-Produkt + 1 passendem Ratgeber.
10. **Conversion-Block** (→ MI 7): **stark** — Möbelplaner + Kontakt, produktbezogen formuliert.

**Pflicht-FAQ-Anzahl: ≥ 6** (Cluster-Pillar liegt bei 10–15; Produkt darf schlanker sein, aber nie unter 6, sonst kein FAQPage-Mehrwert).
**Pflicht-Tabellen: ≥ 2** (Maß-Tabelle + Kosten-Tabelle sind beide obligatorisch).

## 3 · Wortzahl-Korridor (SERP-verankert, mit Begründung)
**Korridor: 1.200–1.800 Wörter.** Quelle: DEPTH.md Produkt-Richtwert (1.200–1.800) und URL-Master-Spalte „Wortzahl" (überwiegend 800–1.500, Spitzen bis 1.800). Wir setzen die **Untergrenze auf 1.200**, weil 800–1.000 mit zwei Pflicht-Tabellen + 6 FAQ kaum substanziell zu füllen sind, ohne dünn zu wirken.

**Verankerungs-Regel (aus SYSTEM/DEPTH):** Korridor = `max(SERP-Median bei gleichem Intent; Seitentyp-Untergrenze) … SERP-Median × Tiefe-Bonus`. **Nie unter den SERP-Median bei gleichem Intent.** Die Brief-Engine misst den echten Top-10-Median pro Produkt-KW und hebt den Korridor an, falls die SERP dichter ist.

**Wichtige Abgrenzung zu §2 der Recherche-Korridore:** Die gemessenen 2.400–4.000-W-Korridore für „küchen nach maß" / „möbel nach maß" gelten für **Cluster-Pillar/Hub-Intent (Gattung)**, **nicht** für Produkt-Spokes. Ein Produkt-KW wie „Kochinsel nach Maß" hat eine **engere, kaufnähere SERP** mit deutlich kürzeren Top-Treffern — den Pillar-Korridor hier zu übernehmen würde die Seite mit Fülltext aufblähen und gegen Regel 3 (Anti-Fülltext) verstoßen. Produkt bleibt **kompakt-dicht**: jede zusätzliche 100 Wörter müssen neue Maße/Specs/FAQ bringen, nie Wiederholung des Pillar-Texts.

## 4 · Schema-Markup (konkrete JSON-LD-Typen)
- **`Product`** (Pflicht): `name`, `description`, `brand` (Fast Systemmöbel), `category`, `material`, `manufacturer` (Organization → Fast). **`offers`** als `AggregateOffer` mit `priceCurrency: "EUR"`, `lowPrice`/`highPrice` (= die kommunizierte Kosten-Orientierung, **konsistent zum Kosten-Block**), `availability`, `priceValidUntil`, `seller` (Organization). **Kein erfundener Festpreis** — Spanne = AggregateOffer; sind keine Preise belegbar, `offers` weglassen statt erfinden (Faktentreue-Gate). Keine erfundenen `aggregateRating`/`review` ohne echte Bewertungen (FACTS: ~4,2★ nur als Organization-Signal, nicht pro Produkt).
- **`FAQPage`** (Pflicht): exakt die ≥ 6 sichtbaren FAQ — 1:1 zwischen Markup und Seite, keine versteckten Fragen.
- **`BreadcrumbList`** (Pflicht): Home → Hub → Cluster-Pillar → Produkt (spiegelt den Silo-Pfad).
- **`LocalBusiness`** (kontextuell, laut URL-Master oft gelistet): NAP konsistent (Alte Waldstr. 32, 32339 Espelkamp · 05771 9138312) — nur 1× pro Seite / sauber in Organization eingehängt, kein Doppel-Markup.
- **Bei Gewerbe-Produkten** (`/gastronomieeinrichtung/tresen-nach-mass/` etc.) ergänzt die URL-Master teils **`Service`** — dann Product **+** Service nur, wenn das Produkt zugleich als Leistung vermarktet wird; im Zweifel Product führend.

## 5 · E-E-A-T-Fokus (welche der 4 Säulen trägt am stärksten)
**Tragende Säule: Expertise** — dicht gefolgt von **Trust**. Beim Produkt entscheidet **Fach-/Material-/Maß-Tiefe** den Eindruck „die können genau dieses Möbel bauen".
- **Expertise (führend):** echte Maße, Korpus-/Frontaufbau, Beschlag-Optionen, **PU-Kantenverleimung** als technischer Beleg (fugenlos/feuchtigkeitsbeständig), 3D-Planung. Fachlich korrekt, produktspezifisch — kein Lehrbuch-Allgemeinplatz.
- **Trust (eng dahinter):** **transparente Kosten-Orientierung** (Spanne + Treiber statt Festpreis-Lockvogel) ist hier der stärkste Trust-Hebel; konsistente NAP; ehrliche Lieferzeit-Einordnung; keine erfundenen Garantie-/Rating-Zahlen.
- **Experience:** mind. 1 Praxis-Detail / Raumsituation (Dachschräge, Nische in OWL-Altbau, „in unserer Werkstatt in Espelkamp gefertigt").
- **Authoritativeness:** Eigenfertigung („alle Teile in Eigenregie"), Meisterbetrieb, Familie Fast — komprimiert, nicht als Über-uns-Block.
Belege ausschließlich aus FACTS.md (✅/🟢). **Verboten:** Festpreis-Versprechen, „5 Jahre Garantie", erfundene Holzarten als Alleinstellung, Produkt-`aggregateRating`.

## 6 · CTA-Stärke & Conversion-Wege (stark/weich)
**Stark.** Produkt = höchste Kaufabsicht im Silo → klarer Abschluss-Druck (ohne Clickbait/Dringlichkeit).
- **Primär:** **Möbelplaner** (`https://moebelplaner.fast-systemmoebel.de/`) — produktbezogen formuliert („Diese Küchenzeile selbst planen").
- **Sekundär:** **Kontakt** (`/kontakt/`) — „Anfrage für dieses Möbel" / Beratung.
- **Tertiär:** **Telefon** 05771 9138312 (sichtbar, klickbar).
- **Platzierung:** 1 CTA nach dem Maß-/Kosten-Block (Peak der Kaufabsicht) + 1 Abschluss-CTA. **2 starke CTA-Zonen**, nicht in jedem Block (kein Banner-Spam).
- **Body-Link-Budget (internal-linking.md): max 5–7** — knapp halten, Conversion-Links priorisieren.

## 7 · Ton-Nuance (Abweichung vom BRAND_VOICE-Grundton)
Grundton bleibt: handwerklich-stolz, ruhig, „Sie", Beweis statt Behauptung. **Produkt-Abweichung:**
- **Konkreter & spezifischer** als jeder andere Typ: Zahlen, Maße, Materialien in fast jedem Absatz. Lieber „Korpus 19 mm, Front auf Wunsch furniert" als „hochwertige Verarbeitung".
- **Etwas verkaufsnäher**, aber weiter erklärend-beratend — der Nutzen aus Kundensicht steht vorn („passt millimetergenau in Ihre Nische").
- **Kompakter Rhythmus:** kurze Absätze, viel Scan-Struktur (Tabellen, Listen). Weniger Erzähl-Prosa als bei Referenz/Über-uns.
- **Kosten ehrlich-entspannt:** „Als Orientierung …", „Der Preis hängt vor allem von … ab" — nie Festpreis-Suggestion, nie Druck.

## 8 · Interne-Link-Rolle im Silo (eingehend/ausgehend, Anker-Logik)
**Rolle: Spoke / Blatt** — empfängt Autorität vom Cluster-Pillar, gibt sie an Conversion weiter; Endpunkt der Silo-Hierarchie (Click-Depth 3).
- **Eingehend:** vom **Cluster-Pillar** (Spoke-Liste/„Unsere Produkte") + ggf. 1 thematischem Ratgeber + 1 Schwester-Produkt.
- **Ausgehend (Pflicht):** **hoch zum Cluster-Pillar** (Breadcrumb + 1 in-content „zurück zur Übersicht"), **Conversion** (Möbelplaner + Kontakt), optional 1 Schwester-Produkt + 1 Ratgeber (z. B. Kosten-/Planungs-Ratgeber des Clusters).
- **Silo-Integrität:** **niemals** in einen fremden Silo verlinken (Privat-Produkt → kein Gewerbe-Cluster, und umgekehrt). Querverweise nur **innerhalb desselben Cluster-Silos**.
- **Anker-Logik:** Exact-Match auf den Cluster-Pillar max 2–3×; ansonsten partial/descriptive Anker („zurück zur Küchen-Übersicht", „maßgefertigte Küche"). Schwester-Produkt-Anker beschreibend („auch als L-Küche planbar").

## 9 · AEO/Zitierbarkeit (Frage-zuerst, Direktantworten, Tabellen, Entitäten)
- **Frage-zuerst-Struktur:** Maß-, Kosten- und Material-Block jeweils mit H2/H3 als Frage („Welche Maße sind möglich?", „Was kostet eine Kochinsel nach Maß?").
- **Direktantwort in Satz 1** jedes Blocks (40–60 Wörter, eigenständig zitierbar) — KI-Overviews ziehen genau diese.
- **Tabellen als Pflicht-Asset:** Maß-Tabelle + Kosten-Tabelle sind die höchstdichten, am häufigsten zitierten Elemente — sauber strukturiert (Spaltenkopf = Frage-Dimension).
- **Entitäten klar benennen:** Produkt-Entity (z. B. „Kochinsel"), Material-Entities (Massivholz, Furnier, PU-Kante), Hersteller-Entity (Fast Systemmöbel, Espelkamp/OWL), Geräte-Marken nur wo belegt (Bosch accent line, NEFF Collection).
- **FAQ** spiegeln echte Suchfragen (Brief §1) — nicht der Verkaufstext umformuliert.
- Speist `llms.txt`/`llms-full.txt`; geprüft durch QC-Gate 10.

## 10 · QC-Schwerpunkte für diesen Typ (welche Gates besonders hart)
- **Gate 6 Faktentreue (HÄRTESTE hier):** Preis-/Maß-/Lieferzeit-Angaben sind das größte Erfindungs-Risiko. Jede Zahl muss belegbar oder klar als unverbindliche Orientierung markiert sein. Schema-`offers` **muss** mit dem sichtbaren Kosten-Block übereinstimmen. **Ein erfundener Festpreis/Garantiezeitraum = Hard Stop.**
- **Gate 11 Korpus-Dedup (zweithärteste):** Schwester-Produkte desselben Clusters (Küchenzeile/L-Küche/Kochinsel; Kleiderschrank Dreh-/Schiebetür) sind das **Haupt-Duplikat-Risiko** des ganzen Projekts. Pflicht: Differenzierungs-Map (`clusters/<cluster>.md`) **vor** dem Schreiben; jede Produktseite mit **eigenen** Maßen/Varianten/Beispielen/FAQ; Synonym-Umschreibung = Fail.
- **Gate 8 Schema/Technik:** Product + FAQPage + Breadcrumb valide; AggregateOffer-Felder vollständig & konsistent; FAQ-Markup = sichtbare FAQ.
- **Gate 5 Tiefe & Umfang:** im 1.200–1.800-Korridor, beide Pflicht-Tabellen + ≥ 6 FAQ vorhanden, **kein Padding** (nicht mit Pillar-Text aufblähen).
- **Gate 7 interne Links/CTA:** Aufstieg zum Cluster-Pillar vorhanden, Conversion-Links gesetzt, Silo nicht durchbrochen, ≤ 7 Body-Links.

## 11 · NEGATIV-ABGRENZUNG — was dieser Typ bewusst NICHT tut
- **NICHT Hub:** kein breiter Orientierungs-Überblick, keine Cluster-Karten-Verteilung, keine Sammlung mehrerer Themen. Hub verteilt — Produkt schließt ab.
- **NICHT Leistung/Cluster-Pillar:** behandelt **eine Produkt-Variante**, nicht die ganze Gattung. **Kein** vollständiger USP-Roman, **keine** große Tischler-vs-Studio-vs-Möbelhaus-Vergleichstabelle, **kein** 2.400–4.000-W-Langtext. Der Produkt-USP-Block ist eine **komprimierte** Version dessen, was beim Pillar ausführlich steht — bewusst kürzer, um Dedup/Kannibalisierung zu vermeiden. Verkauft das *Produkt*, nicht die *Leistung*.
- **NICHT Ratgeber:** **kein** schwacher CTA, **keine** neutrale „so planen Sie"-Anleitung als Hauptzweck. Produkt hat **starken** CTA und Kaufabsicht; Wissens-Tiefe nur so weit, wie sie den Kauf stützt. „Wie plane ich eine Küche?" → Ratgeber verlinken, nicht selbst ausführen.
- **NICHT Referenz/Über-uns:** **keine** Marken-/Familien-Story, **keine** Projekt-Galerie als Selbstzweck, **kein** Team-/Werkstatt-Porträt. Experience nur als 1 Praxis-Detail, das die Produkt-Kompetenz belegt — nicht als Erzählung.
- **NICHT Conversion (Kontakt/Planer):** Produkt **hat** SEO-Substanz (Maße, Specs, FAQ, Korridor 1.200–1.800) — die Conversion-Seite ist bewusst kurz (300–600 W, Formular zuerst). Produkt verkauft *vor* dem Formular; Conversion *ist* das Formular.
