# Research-Kit: Badschrank nach Maß (/badmoebel-nach-mass/badschrank-nach-mass/)

## 1 · Wortzahl-Korridor → **1200–1600 W, Ziel ~1.400 W** (SERP-Median 729) — verbindlich, kein Raten
- **KORREKTUR Lauf 2 (2026-10-01, nach Chefredakteur-Fail Lauf 1):** Messung Lauf 1 = **1625 W (Code) — ~25 W über dem Deckel 1600**. Ziel Lauf 2: **~1.420 W, HART unter 1.600** (Produkt-DECKEL ist bindend, kein Padding). Konkrete Trims: das Synonym „Badezimmerschrank nach Maß" NICHT zusätzlich ausführen (eine beiläufige Nennung genügt), die Trägermaterial-Aufzählung in bsMaterial auf **eine** knappe Markt-Nennung kürzen („am Markt übliche Platten wie MDF, Melaminharz oder HPL … besprechen wir im Einzelfall"), Füllwendungen wie „aus der Praxis" streichen. Substanz (PU-Kante, Massivholz, Maß-/Kostentabelle, FAQ) unangetastet lassen.
- **Grammatik (BLOCKER Lauf 1):** In `bsIntroStats.col1Body` muss es **„Jeden davon bauen wir …"** heißen (Akkusativ maskulin: der Hochschrank/Hängeschrank/Einbauschrank), NICHT „Jede davon".
- **Wiederholungen (Lauf 1):** Die Wendung „Welche Bauform passt" NUR **einmal** verwenden (nicht in `bsTypen.intro` UND `bsFaq`); „in der Beratung" NUR **einmal** (nicht 3×) — variieren mit „klären wir vorab" / „stimmen wir gemeinsam ab".
- **Normiert auf Korridor-Politik (Ben 2026-07-15) — Produkt-DECKEL, Ziel ~1.400 W:** Der SERP-Median (729) liegt **unter** dem Standardband 1.600–2.100, darum greift die Anhebe-/Median-Boden-Klausel **nicht** — es gilt der Produkt-Boden 1.200 als Deckel-Untergrenze; **nicht** auf 1.600–2.100 anheben (Anti-Fülltext). Deckungsgleich mit den Produkt-Präzedenzen `kuechenzeile-nach-mass` (1.200–1.600, Median 1.132) und `waschtischunterschrank-nach-mass` (1.200–1.600, Median 403). Die „leistung/pillar"-Defaults (1.800–2.800) sind hier ausdrücklich überschrieben — dieser Spoke ist kürzer als der Cluster-Pillar `/badmoebel-nach-mass/`.
- **Writer-Hinweis (Zähl-Bias ~8 %):** gegen das **Ziel ~1.400 W** planen, **nicht** gegen den Boden 1.200 — der interne Prop-Zähler misst je nach Mapping ~8 % niedriger; wer auf 1.200 schreibt, fällt sonst unter den Boden.
- SERP-Median gemessen 729 W; Top-Treffer stark gespreizt (deinschrank 3.750 / holz-liebling 2.020 vs. 5 Kurzseiten 300–400 W). Der Median liegt niedrig, die dichten Sieger füllen aber über E-Commerce-Elemente (Konfigurator-Kacheln, Preistabellen, Cross-Sell), die wir als Textseite nicht 1:1 haben. Playbook-Untergrenze Produkt = 1.200. → Korridor **1.200–1.600 W**, jede weitere 100 W muss neue **Maße/Specs/FAQ** bringen (Anti-Fülltext, Gate 5). Nicht Richtung Pillar-Länge (1.800–2.800) aufblähen — das ist der Cluster-Pillar `/badmoebel-nach-mass/`, nicht dieser Spoke.
- Pflicht-Substanz zum Füllen: **≥ 2 Tabellen** (Maß + Kosten-Faktoren), **≥ 6 FAQ** (hier ≥ 10 geliefert), Typen-Grid, Material/PU-Block, Mini-Prozess.

## 2 · Intent & Job-to-be-done
- **Dominanter Intent: commercial (C).** Nutzer hat den Möbeltyp „Badschrank" schon gewählt und prüft: passt der in meine Situation, woraus, was kostet er grob, kann ich ihn hier bauen lassen. Weiter unten im Funnel als der Pillar.
- **JTBD:** *„Ich brauche im Bad Stauraum abseits des Waschplatzes (Handtücher, Vorräte, Kosmetik) und will einen Schrank, der millimetergenau in meine Nische/Wand/Dachschräge passt, im Feuchtraum nicht aufquillt — und ich will das vor der Anfrage seriös einschätzen können."*
- **Micro-Intents:** (1) Welcher Schranktyp für welche Situation — Hochschrank vs. Hängeschrank vs. raumhoher Einbauschrank? (2) Welche Maße sind möglich, passt es in Nische/Dachschräge/schmale Wand? (3) Woraus, wie feuchtigkeitsbeständig, wie pflegeleicht? (4) Was kostet das ungefähr / wovon hängt der Preis ab? (5) Ausstattung: Einlegeböden, Auszüge, Wäschekippe, Griffe/grifflos? (6) Wie läuft Aufmaß → Planung → Montage, wie schnell? (7) Warum Fast (Meisterbetrieb) statt Online-Konfigurator/Standardmöbel?
- **Cluster-Winkel (verbindlich, Anti-Dup):** **Stauraum ABSEITS des Waschplatzes** — Hochschrank, Hängeschrank, raumhoher Einbauschrank im Bad. **Deckt NICHT ab:** Unterschrank am Becken (→ waschtischunterschrank), Spiegel/Licht (→ spiegelschrank), Material-Deep-Dive (→ badmoebel-massivholz), kleine-Bäder-How-to (→ Ratgeber), Kostenrechnung im Detail (→ Kosten-Ratgeber).

## 3 · Pflicht-Module (intent-abgeleitet) + Tiefe-Blaupause
**Pflicht-Module (in dieser Reihenfolge; jedes aus einem Micro-Intent):**
1. **Produkt-Intro / Direktantwort** [AEO] — 40–60 W: Was ist ein Badschrank nach Maß + Maßvorteil (Nische/Dachschräge/raumhoch) + Fast-Bezug. H1 mit „Badschrank nach Maß".
2. **Typen-/Varianten-Grid** [AEO] — Hängeschrank · Hochschrank · raumhoher Einbauschrank (+ Oberschrank), je 1–2 Sätze wofür (Bodenfreiheit/Reinigung; Handtücher & Vorräte auf kleiner Grundfläche; wandbündig ohne Passleisten). Kein Waschtisch/Spiegelschrank ausführen — nur verweisen.
3. **Maß-Block als Tabelle** [AEO, PFLICHT] — typische Höhen/Breiten/Tiefen je Typ + „millimetergenau, Sondermaß ohne Aufpreis-Logik", Sondersituationen Nische/Dachschräge/über WC/schmale Wand. *Stärkstes Anti-Dup-Asset.*
4. **Material- & Feuchte-Specs** [AEO] — Korpus (Trägermaterial), Fronten (Lack matt/hochglanz, Furnier, Melamin/HPL, Massivholz), **PU-Kantenverleimung: fugenlos + feuchtigkeitsbeständig** (nie „wasserfest"), pflegeleichte Oberfläche, Hinweis Wandabstand/Hinterlüftung im feuchten Raum.
5. **Kosten-Orientierung** [AEO, PFLICHT-Tabelle] — **keine Zahlen**; Tabelle „Preistreiber → Wirkung" (Größe/Typ, Material/Front, Beschläge/Auszüge, Einbau-Situation, Montage). Weg zum individuellen Angebot.
6. **Warum nach Maß / warum Fast** — komprimiert: Meisterbetrieb, Eigenfertigung, PU-Kante, kostenloses Aufmaß, eigenes Montageteam. Kein Pillar-USP-Roman.
7. **Mini-Prozess** — 3–4 Schritte: Beratung/Aufmaß vor Ort → 3D-Planung → Fertigung in Espelkamp → Montage durch eigenes Team.
8. **FAQ-Block** [AEO, ≥ 6, hier ≥ 10] — echte Fragen zu Maßen/Kosten/Material/Feuchte/Montage/Ausstattung.
9. **Aufstieg + Conversion** — hoch zum Pillar (Breadcrumb + in-content) + starke CTA (Möbelplaner/Kontakt/Telefon).

**Tiefe-Blaupause — wie die Sieger Tiefe erzeugen (und was wir übernehmen/lassen):**
- **deinschrank (3.750 W):** 2-Schritt-Anleitung + 4 Typ-Kacheln + Vorteils-Kacheln mit **konkreten Tech-Angaben (19 mm/8 mm)** + langer Ratgeber zu schwierigen Raumsituationen + Aufmaß-Preistabelle. → **Übernehmen:** konkrete Materialstärken/Beschlag-Specs statt Floskeln; Raumsituations-Absatz (Nische/Dachschräge). **Lassen:** die 3 bezahlten Aufmaß-Stufen (99/139 €) — Aufmaß bei Fast ist kostenlos.
- **schrankplaner (2.300 W):** 6 Konfig-Beispiele als Karten + Feature-Block „Ausführung A–Z" (Vollauszug, LED, gedämpfte Schubkästen) + Trust-Kacheln. → **Übernehmen:** Ausstattungs-Feature-Liste (Einlegeböden verstellbar, Soft-Close-Auszüge, Wäschekippe, Griffe/grifflos). **Lassen:** erfundene Sterne/Garantie-Kacheln.
- **holz-liebling (2.020 W, gemessen):** 8 benannte Themen-Blöcke (Details/Varianten/Maße/Aufbau/Materialien/Pflege/Kombinieren/Lieferung) je Fließtext + Bullets + **17er-FAQ**. → **Übernehmen:** klar benannte H2-Blöcke + dichte FAQ. **Unser Tiefe-Hebel gegen alle:** technische PU-Kanten-Erklärung „warum Kanten im Bad aufquellen und wie eine PU-verleimte Kante das verhindert" — im Feld praktisch unbesetzt.

## 4 · WDF*IDF-Termliste als CHECKLISTE (Term · Gewicht · ☐)
| Term | Gewicht | ☐ |
|---|---|---|
| Badschrank nach Maß / Badezimmerschrank nach Maß | hoch | ☐ |
| Maßanfertigung / maßgefertigt / millimetergenau / passgenau | hoch | ☐ |
| Hängeschrank (Bad) | hoch | ☐ |
| Hochschrank / Badhochschrank | hoch | ☐ |
| Einbauschrank (Bad) / raumhoch | hoch | ☐ |
| Stauraum (Handtücher, Vorräte, Kosmetik) | hoch | ☐ |
| Nische / Dachschräge (Raumsituation) | hoch | ☐ |
| feuchtraumgeeignet / feuchtigkeitsbeständig | hoch | ☐ |
| PU-Kantenverleimung / fugenlose Kante | hoch | ☐ |
| 3D-Konfigurator / Möbelplaner / online planen | hoch | ☐ |
| Meisterbetrieb / Eigenfertigung / vom Tischler (Espelkamp/OWL) | hoch | ☐ |
| Einlegeböden (verstellbar) | mittel | ☐ |
| Soft-Close / gedämpfte Auszüge · Push-to-open / grifflos | mittel | ☐ |
| Griffe / Griffvarianten | mittel | ☐ |
| Fronten/Oberflächen: Lack matt/hochglanz, Furnier | mittel | ☐ |
| MDF / Melaminharz / HPL (Trägermaterial) | mittel | ☐ |
| Massivholz (kurz, Deep-Dive → massivholz-Seite) | mittel | ☐ |
| Breite × Höhe × Tiefe (cm-Bereiche) | mittel | ☐ |
| Wandmontage / hängend vs. stehend | mittel | ☐ |
| Kostenloses Aufmaß vor Ort | mittel | ☐ |
| Montage / eigenes Montageteam | mittel | ☐ |
| Pflege / pflegeleicht (nebelfeuchtes Tuch) | niedrig | ☐ |
| Wandabstand / Hinterlüftung (Feuchte) | niedrig | ☐ |
| barrierefrei/altersgerecht (nur wenn belegbar, sonst weglassen) | niedrig | ☐ |
| LED-Beleuchtung (nur kurz; Fokus → spiegelschrank) | niedrig | ☐ |

*Bewusst NICHT bedienen (gehört den Schwesterseiten): Waschtisch/Becken/Ausschnitt, Spiegel/beschlagfrei/entspiegelt, Massivholz-Feuchtevergleich als Hauptthema.*

## 5 · FAQ-Liste (≥10, fertig formulierbar)
1. **Was kostet ein Badschrank nach Maß?** — über Kostenfaktoren beantworten (Größe/Typ, Material/Front, Beschläge, Einbausituation, Montage) + Weg zum individuellen Angebot. **Keine Zahl/Spanne.**
2. **Hochschrank, Hängeschrank oder Einbauschrank — welcher Badschrank passt zu meinem Bad?** (Typ-Differenzierung, Kern-FAQ)
3. **Welche Höhe und Tiefe sollte ein Hängeschrank bzw. Hochschrank im Bad haben?** (Maß-Orientierung)
4. **Passt ein Badschrank nach Maß auch in eine Nische, unter eine Dachschräge oder über die Toilette?** (Sondersituation)
5. **Welches Material eignet sich für einen Badschrank im feuchten Bad?** (Front/Korpus-Optionen, feuchtigkeitsbeständig)
6. **Quellen die Kanten eines Badschranks bei Feuchtigkeit auf — und wie verhindert Fast das?** (PU-Kante fugenlos/feuchtigkeitsbeständig; **nicht** „wasserfest")
7. **Wie wird ein Hängeschrank im Bad sicher an der Wand befestigt?** (Wandmontage)
8. **Kann ich Einlegeböden, Auszüge, Wäschekippe und Griffe frei wählen?** (Ausstattung, inkl. grifflos/Push-to-open)
9. **Montiert Fast den Badschrank selbst oder wird er nur geliefert?** (eigenes Montageteam; Montage ~200 km um Espelkamp, Lieferung bundesweit)
10. **Wie lange dauert es von der Anfrage bis zum fertigen Badschrank?** (verbindlicher Termin **nach Aufmaß/Freigabe**; **keine erfundene Wochenzahl**)
11. **Wie pflege ich die Oberflächen meines Badschranks im Bad?** (nebelfeuchtes Tuch, keine Scheuermittel)
12. **Kann ich den Badschrank auf Waschtisch und Spiegelschrank abstimmen?** (Kombination im Bad; Sibling-Verweis — Link erst wenn Ziel gebaut)
13. **Was unterscheidet einen Badschrank vom Meisterbetrieb von einem reinen Online-Konfigurator?** (USP)
14. **Gibt es kostenloses Aufmaß vor Ort?** (ja, kostenlos — FACTS-belegt)

## 6 · Gaps & unser Winkel + Negativ-Abgrenzung
**Content-Gaps der SERP → unser Winkel:**
- **PU-Kantenverleimung** als technische Antwort auf „aufquellende Kanten im Feuchtraum" — von keinem Wettbewerber explizit kommuniziert. Größter Differenzierer. Formulierung: „fugenlos verschlossen, feuchtigkeitsbeständig".
- **Meisterbetrieb Espelkamp/OWL + Eigenfertigung** („alle Teile in Eigenregie") + **Familie Fast (2. Generation)** statt anonymer Online-Konfigurator/Callcenter.
- **Kostenloses Aufmaß vor Ort + eigenes Montageteam** — reale Handwerksleistung vs. „Lieferung deutschlandweit" der Plattformen. Montage im ~200-km-Radius.
- **Bad-spezifische Aufmaß-Kompetenz:** Rohrleitungen, Heizkörper, Steckdosen als Hindernisse mitdenken (Aussparungen) — fehlt bei fast allen.
- **Feuchte-Handling:** Wandabstand/Hinterlüftung-Hinweis (neutral, kein „schimmelresistent"-Claim).
- **Millimetergenau wandbündig / Sondermaß** ohne Passleisten (Fast baut „Wand-zu-Wand").

**Negativ-Abgrenzung (Playbook §11):**
- **NICHT Pillar/Leistung:** kein voller USP-Roman, keine große Tischler-vs-Studio-vs-Möbelhaus-Vergleichstabelle, kein 1.800 W+-Langtext, kein Material-Deep-Dive (→ `badmoebel-massivholz`). USP komprimiert.
- **NICHT Schwester-Produkt:** kein Waschtisch/Becken (→ waschtisch), kein Unterschrank-am-Becken-Fokus (→ waschtischunterschrank), kein Spiegel/Licht (→ spiegelschrank).
- **NICHT Ratgeber:** keine „kleine Bäder einrichten"-Anleitung (→ kleine-baeder-Ratgeber), keine Detail-Kostenrechnung (→ kosten-Ratgeber); starker CTA, nicht neutral.
- **NICHT Referenz/Über-uns:** keine Familien-Story als Selbstzweck; Experience nur als 1 Praxis-Detail.

## 7 · Interne Links (rein/raus, Anker)
**Body-Link-Budget Produkt: 5–7.** Nur `built:true`-Ziele verlinken (Launch clean, keine Dead-Links).

**Eingehend (wird beim Ship dieser Seite verdrahtet):**
- `/badmoebel-nach-mass/` (Cluster-Pillar) → diese Seite. **MUSS** (cluster→spoke). Backlog-Zeile in internal-linking.md; Pillar-Spoke-Liste/„Unsere Badmöbel" ergänzen.

**Ausgehend (jetzt setzbar, Ziel gebaut):**
- **Hoch zum Pillar `/badmoebel-nach-mass/`** — **MUSS**, 2×: Breadcrumb + 1 in-content „zurück zur Übersicht". Anker: exact „Badmöbel nach Maß" (max 2–3×), sonst partial/descriptive: „maßgefertigte Badmöbel", „zum Badmöbel-Bereich".
- **Conversion `/moebelplaner/`** — MUSS, produktbezogen: „Badschrank selbst planen".
- **Conversion `/kontakt/`** — MUSS: „Badschrank anfragen / Beratung".
- **Telefon** 05771 9138312 (klickbar).

**Backlog (noch NICHT bauen — Ziel `built:false`; als Backlog-Zeile hinterlegen, wire when built):**
- Schwester-Produkte `/badmoebel-nach-mass/spiegelschrank-nach-mass/`, `.../waschtischunterschrank-nach-mass/` (beschreibende Anker „passend zum Spiegelschrank", „Unterschrank am Waschplatz").
- `.../badmoebel-massivholz/` (Material-Deep-Dive), `.../badmoebel-fuer-kleine-baeder/`, `.../badmoebel-nach-mass-kosten/`.
- Trust: `/ablauf-massanfertigung/`, `/liefergebiet-montage/` (beide `built:false`).

**Silo-Integrität:** ausschließlich innerhalb Silo `badmoebel` + neutrale Conversion; **nie** in Küchen/Einbauschränke/Gewerbe verlinken.
**Registry-To-do (nicht Teil des Kits-Texts, aber Voraussetzung):** Node `/badmoebel-nach-mass/badschrank-nach-mass/` (type `product`, silo `badmoebel`, parent `/badmoebel-nach-mass/`) + ANCHORS-Set (exact „Badschrank nach Maß"; partial „maßgefertigter Badschrank", „Badschrank vom Tischler", „Bad-Hochschrank nach Maß"; descriptive „Badschrank nach Maß planen") in `linking-rules.ts` registrieren; `npm run audit:links`.

## 8 · Do-NOT-claim-Liste (❌ aus FACTS.md, konkret für Badschrank)
- ❌ **Erfundene Preise / Preisspannen** („ab X €", „ca. Y €", Preistabelle mit Zahlen) — Preise sind IMMER individuell. Nur Kostenfaktoren + individuelles Angebot. Schema-`offers` weglassen (kein AggregateOffer erfinden).
- ❌ **„5 Jahre Garantie" / jede Garantie-Zahl** — es gibt KEINE freiwillige Garantie, nur gesetzliche Gewährleistung. Stattdessen Qualität/Langlebigkeit ohne Zahl. Kein Produkt-`aggregateRating`/Sterne.
- ❌ **„wasserfest" / „wasserdicht" / „24 h unter Wasser" / „lässt kein Wasser durch"** — gesperrt. Nur **„fugenlos" + „feuchtigkeitsbeständig"**.
- ❌ **„schimmelresistent"** als Materialeigenschaft — nicht belegt; Feuchte nur über PU-Kante + neutralen Lüftungs/Wandabstand-Hinweis.
- ❌ **Erfundene Lieferzeit** („in 3–6 Wochen") — keine belegte Angabe; „verbindlicher Termin nach Aufmaß/Freigabe".
- ❌ **Exotische Hölzer als Alleinstellung / konkrete Holzarten (Eiche, Nussbaum …) als Fast-USP**; ❌ **FSC/PEFC namentlich**; ❌ **„regionale Holzherkunft"**. Nur „Massivholz + branchenübliche hochwertige Materialien", „umweltzertifiziertes Holz" (ohne Siegel-Name).
- ❌ **„Meisterbetrieb seit <Jahr>"** — Jahr ungeklärt; nur „Meisterbetrieb".
- ❌ **„25+ Jahre" / „12+ Mitarbeiter"** (real ~5–10).
- ❌ **Gründung „1996 in Espelkamp"** (war Rahden-Tonnenheide; Espelkamp ab 2001) — auf einer Produktseite ohnehin weglassen.
- ✅ **Nutzbar (Belege):** PU-Kante (fugenlos/feuchtigkeitsbeständig), Eigenfertigung, Meisterbetrieb, 3D-Planung/Möbelplaner, **kostenloses Aufmaß vor Ort**, **eigenes Montageteam**, **Montage ~200 km um Espelkamp / Lieferung bundesweit**, Familie Fast (2. Gen., seit 2010), NAP Alte Waldstr. 32 · 32339 Espelkamp · 05771 9138312. (1.000 m²/Homag/4.000 Projekte/72K Einzelteile bestätigt-nutzbar, aber auf Produktseite sparsam.)

## 9 · Offene Punkte / Wissenslücken (vor dem Schreiben gegen FACTS + Antwort-Fundus auflösen; Unbelegtes bleibt Leerstelle)
- **Geo-Reichweite (PFLICHT):** **montage-gebunden vs. Lieferung — bereits via FACTS aufgelöst:** **Aufmaß + Montage nur im ~200-km-Radius um Espelkamp** (eigenes Montageteam), **Lieferung darüber hinaus bundesweit**. So auf der Seite explizit auflösen; nicht pauschal „deutschlandweit montiert" behaupten.
- **Fast-spezifische Maß-Bereiche** (Min/Max Höhe/Breite/Tiefe für Bad-Hoch-/Hänge-/Einbauschrank): **nicht in FACTS.** → Maß-Tabelle als „typische Orientierungswerte, individuell frei planbar" formulieren, **keine** als verbindlicher Fast-Katalog ausgegebenen Fixmaße. Leerstelle bleibt Leerstelle.
- **Lieferzeit Badschrank:** keine belegte Angabe → „Termin nach Aufmaß/Freigabe", keine Wochenzahl.
- **Preis/Preisspanne:** darf nicht genannt werden (individuell) → nur Kostenfaktoren.
- **Beschlag-/Ausstattungs-Detail** (konkrete Soft-Close-/Push-to-open-Marken, Wäschekippe im Sortiment): nur generisch („auf Wunsch", „frei wählbar"); keine Marken/Modelle behaupten, solange nicht belegt.
- **Bad-Referenzprojekte/Fotos:** kein belegtes Bad-Referenzprojekt (Arminia = Umkleidekabine, nicht Bad) → keine konkrete Referenz/Projekt-Story behaupten; Experience nur als generisches Werkstatt-/OWL-Praxisdetail.
- **Barrierefrei/altersgerecht:** nur einbringen, wenn im Antwort-Fundus belegt; sonst weglassen (nicht erfinden).
- **Öffnungszeiten** (falls genannt): Kunde-bestätigt **Mo–Fr 06:00–17:00** (überschreibt Altsite 09–16); auf Produktseite i. d. R. nicht nötig.

### 9a · Beantwortet (gegen kundenwissen.md + FACTS.md aufgelöst, 2026-09-29)
- **Geo-Reichweite (Pflicht):** Lieferung **bundesweit**; Aufmaß/Einbau/Montage **nur ~200 km um Espelkamp** (montage-gebunden, eigenes Montageteam). Quelle: FACTS § Geo-Reichweite je Leistung; kundenwissen.md § Geo & Service (badmoebel Q1). **Nicht** als „bundesweite Montage" verallgemeinern (Wettbewerber sagen pauschal „Lieferung deutschlandweit" — unser regionales Montage-Versprechen ist der Winkel).
- **Material:** **Massivholz + branchenübliche hochwertige Materialien** belegt (FACTS § Fertigung/Material). **Keine** konkreten Holzarten/Dekor-Namen und **kein** Träger-/Frontmaterial (MDF/Melamin/HPL/Furnier/Lack) als belegtes Fast-Sortiment behaupten — „Fast macht dazu keine Angaben" (kundenwissen.md badmoebel Q3, einbauschraenke Q4/Q5). Materialien allgemein (Markt) erklären ist ok; als belegte **Fast**-Option gilt nur Massivholz.
- **Feuchte/PU-Kante:** PU-Kantenverleimung, **fugenlos + feuchtigkeitsbeständig** (FACTS ✅). **Nie** „wasserfest"/„wasserdicht"/24-h-Tauch (FACTS ❌, gesperrt 2026-06-09), **nie** „schimmelresistent" (unbelegt). Feuchte nur über PU-Kante + neutralen Wandabstand-/Hinterlüftungs-Hinweis. Siehe §8.
- **Beschläge/Ausstattung:** Grundhaltung **„alles auf Anfrage / für jedes Problem eine Lösung"** (kundenwissen.md badmoebel Q4, einbauschraenke Q3). Einlegeböden, Soft-Close-Auszüge, Push-to-open/grifflos, Wäschekippe als **Machbarkeit** („auf Wunsch") ok — **keine** Beschlag-/Auszugs-Marken oder -Serien nennen (kundenwissen.md einbauschraenke Q4/Q5).
- **Preise:** strikt individuell, **keine** Zahlen/Spannen/„ab"-Werte/Relationen; nur Kostenfaktoren + individuelles Angebot (FACTS § Preise; kundenwissen.md § Preise & Termine). **Kein** pauschaler Sondermaß-Zuschlag — „der Preis entsteht aus Material, Ausstattung und Aufwand" ist als Formulierung freigegeben.
- **Lieferzeit:** **keine** Wochenangabe; „verbindlicher Termin nach Aufmaß/Freigabe" (FACTS; kundenwissen.md § Preise & Termine). Wettbewerber-„3–6 Wochen"/„4–6 Wochen" **nicht** übernehmen.
- **Prozess:** Beratung (vor Ort **oder** telefonisch) → **kostenloses Aufmaß vor Ort** → 3D-Planung → Eigenfertigung Espelkamp → Montage durch **eigenes Team** (FACTS § Prozess/Service). Beratungswege nur Telefon/vor Ort — **kein Showroom** behaupten (kundenwissen.md ratgeber Q7).
- **Möbelplaner:** deckt Bad/Schränke ab (kundenwissen.md badmoebel Q6, wohnmoebel Q10) ⇒ CTA „Badschrank selbst planen" belegt; Positionierung = **Vorbereitung der persönlichen Planung**, primäres Conversion-Ziel bleibt das **Kontaktformular/E-Mail** (kundenwissen.md kueche-planen Q3).
- **Meisterbetrieb / Nachhaltigkeit:** „Meisterbetrieb" Espelkamp/OWL **ohne Jahr** (FACTS); Familie Fast (2. Gen., seit 2010). „umweltzertifiziertes Holz aus nachhaltigem, CO2-neutralem Anbau", **kein** FSC/PEFC namentlich, **keine** Reparierbarkeit/„regionale Holzherkunft" (FACTS § Nachhaltigkeit).
- **Kein Musterversand / keine kostenlosen Dekorproben** (kundenwissen.md ratgeber Q6, einbauschraenke Q7) — schrankplaner/passandu bieten Gratismuster; **nicht** übernehmen.
- **Verbotene Wettbewerber-Claims aus der SERP:** „5 Jahre Garantie" (schrankplaner/badicum), erfundene Preisbeispiele, Produkt-`aggregateRating`/Sterne — **nicht** übernehmen (FACTS ❌); siehe §8.

### 9b · Leerstelle — nicht behaupten (je Leerstelle eine Writer-Anweisung)
1. **Fast-spezifische Maß-Bereiche** (Min/Max Höhe/Breite/Tiefe für Bad-Hoch-/Hänge-/Einbauschrank): keine belegten Fast-Katalogwerte (kundenwissen.md badmoebel Q7 — „keine Maß-Bandbreiten erfinden"). → Maß-Tabelle **nur als allgemeine Bad-/Ergonomie-Orientierung** kennzeichnen + „bei Fast Wunschmaß, millimetergenau nach Aufmaß, Wand-zu-Wand ohne Passleisten". **Keine** Wettbewerberzahlen (deinschrank 19/8 mm, cm-Bereiche) als Fast-Specs ausgeben.
2. **Träger-/Front-Portfolio** (MDF/Melamin/HPL/Furnier/Hochglanzlack als Fast-Angebot): unbelegt, welche Fast fertigt. → Materialabschnitt darf Materialien **allgemein (Markt)** erklären; als belegte **Fast**-Option gilt nur **Massivholz**. Andere höchstens „auf Anfrage besprechbar", **nicht** „wir fertigen in MDF/HPL/Hochglanzlack".
3. **Beschlag-/Ausstattungs-Marken** (Soft-Close-/Push-to-open-Hersteller, konkrete Auszugssysteme, Wäschekippe im Standardsortiment): **keine** Marken/Modelle behaupten. → generisch „auf Wunsch/frei wählbar", keine Serien-/Herstellernamen.
4. **Bad-Referenzprojekte/Fotos:** kein freigegebenes Bad-Referenzprojekt (Arminia = **Umkleidekabine**, nicht Bad; kundenwissen.md badmoebel Q2). → **keine** erfundenen Projekt-Anekdoten/Ortsnennungen; die Raumsituationen (Nische, Dachschräge, über WC, schmale Wand) als **allgemeine Lösungswege** formulieren, nicht als konkrete Referenzen. Bildmaterial nur bereits im Repo/auf der Website verwendete Fotos (kundenwissen.md ratgeber Q9).
5. **Barrierefrei/altersgerecht** (unterfahrbar, Griffhöhen): für den Bad-Schrank **nicht** belegt (kundenwissen.md bestätigt es nur für kueche-planen Q4). → im Badschrank-Text **weglassen**; höchstens allgemein „individuelle Höhen planbar" **ohne** Barrierefrei-Zusage.
6. **Google-Bewertungen:** höchstens als **Organisations**-Trust (kein produktbezogenes Rating pro Badschrank), Zahl vor Nutzung **live** gegenprüfen (FACTS 4,2★ „live gegenprüfen"; kundenwissen.md ratgeber Q10).