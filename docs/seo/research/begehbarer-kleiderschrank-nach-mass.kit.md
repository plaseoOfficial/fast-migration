# Research-Kit: begehbarer Kleiderschrank nach Maß (/einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/)

## 1 · Wortzahl-Korridor → **1.600–2.100 W · Ziel ~1.800 W** (SERP-Median ~1.350, geschätzt) — normiert 2026-11-17 (Korridor-Politik), Orientierung, kein blockierendes Gate
Voller Slug: `/einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/` (pipeline-Slug `begehbarer-kleiderschrank-nach-mass`) · Archetyp: **Produkt im Cluster einbauschraenke** · Intent: **C (kommerziell) mit Planungsanteil**.
- **Korridor-Politik (Ben, 2026-07-15), vom Research-Lauf W47 normiert:** Ziel ~1.800 W, Korridor **1.600–2.100**. Die Playbook-Defaults gelten als überschrieben. Kurze, dichte Chunks mit hohem Mehrwert statt Wortmasse.
- **Median-Regel geprüft, kein Anheben:** Der Engine-Median (~1.350 W) liegt **unter** 2.100, die Klausel „bei höherem Median gleichen Intents minimal anheben" greift nicht. Er ist zudem nur geschätzt (Fetch-Schätzung, US-Websuche, 5 von 8 Treffern) und wird **nicht** als Boden genommen.
- **Warum nicht der Produkt-Deckel der Geschwister** (kleiderschrank 1.290–1.690, live ~1.590 W; garderobe 1.305–1.705, live ~1.495 W): Diese Seite ist seit dem 301 von `/ratgeber/begehbaren-kleiderschrank-planen/` (redirects.md Z. 27) das **einzige Zuhause** auch der Planungsfrage („reicht mein Raum, welche Form"). Sie trägt dafür zwei Tabellen (Rechenweg Raumtiefe, Kostentreiber), einen Layout-Block mit 5–6 Formen, Ausstattungszonen, Licht/Luft, Prozess und 6–8 FAQ. In dichter Form sind das ~1.700–1.850 W.
- **Obergrenze ist ein Deckel, kein Ziel:** Alles über ~1.950 W ist mit hoher Wahrscheinlichkeit Paraphrase von Kleiderschrank- oder Dachschrägen-Seite (Korpus-Dedup-Gate). Weitere Länge nur aus neuer Ankleide-Substanz (Formen, Raumtiefe, Sonderräume), nie aus Innenmaßen, die die Kleiderschrank-Seite schon trägt.
- **Writer-Hinweis (Zähl-Bias ~8 %):** Gegen das **ZIEL ~1.800 W** planen, **nicht** gegen den Boden 1.600 — die Zähl-Werkzeuge liegen ~8 % auseinander.
- **Keywords:** Primär „begehbarer Kleiderschrank nach Maß" (Ads SV 30, CPC 2,66 €, signale.json). Sekundär aus keyword-map Z. 24: Ankleide nach Maß, Schrankraum nach Maß, Ankleidezimmer Maßanfertigung, begehbarer Schrank Schreiner, walk-in Kleiderschrank nach Maß. **Übernommen aus der gestrichenen Ratgeber-Zeile (keyword-map Z. 103, Ads SV 110):** begehbaren Kleiderschrank planen, Ankleidezimmer planen, begehbarer Kleiderschrank Maße, Walk-in-Closet einrichten. **Übernommen aus Chancen W41:** begehbarer Kleiderschrank mit Schiebetür(en) (je SV 480/Mon) — als Türlösung im Varianten-Block, nicht als Mechanik-Fokus.
- **DoD fürs Authoring:** INTERIM-Redirect in `next.config.ts` Z. 63 zeigt heute auf `/moebel-nach-mass/` → beim Bau auf `/einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/` umstellen. Node in `linking-rules.ts` fehlt noch (§7).

### SERP-Tiefe (Recherchebeleg der Engine, keine Schreibvorgabe)
- **Datenlage ist schwach:** Es gab keinen echten Google.de-SERP. Die Treffer kommen aus einer US-Websuche, und ihre Reihenfolge ist nicht die Google-Reihenfolge. Gemessen wurden 5 von 8 Treffern (Fetch-Schätzung): hoeffner 1.300, diotti 1.600, sanier 1.350, heimwerker 1.450, cabinet 575. Der Median gilt nur als Orientierung.
- **Formate der SERP:**
  - Ratgeber mit H2/H3-Gliederung (diotti, sanier, heimwerker).
  - Herstellerseiten mit Konfigurator und Galerie (Höffner, cabinet).
  - **Keine Tabelle, keine FAQ, keine Preise** bei allen gemessenen Treffern.
- **Was die Konkurrenz an Zahlen nennt:**
  - Gangbreite 90–100 cm.
  - Schranktiefe 60 cm.
  - Mindestfläche 1,50 × 2,10 m bzw. 90 × 90 cm Bewegungsfläche in der Mitte (sanier).
  - 3–4 m² für einen begehbaren Schrank, 6–10 m² für ein Ankleidezimmer.
  - Höffner: Breite 30–800 cm, Höhe 262,5 cm, Kniestock, 6–8 Wochen, Garantie. Diese Angaben sind **nicht** auf Fast übertragbar (siehe §8).
  - **Normierung 2026-11-17:** Diese Liste ist Recherchebeleg, **keine Textquelle**. In den Text dürfen nur 60 cm (Fast-Live-Copy Kleiderschrank) und 90 cm (DIN 18040-2, Allowlist-Beleg) — siehe §3 und §9b. Gang 100 cm, 90 × 90 cm, 1,50 × 2,10 m als Mindestfläche und alle m²-Werte bleiben draußen.
- **Folgerung für die Struktur (Produkt-Playbook):**
  - Lead mit Direktantwort.
  - Varianten-/Layout-Block.
  - **Maß-Tabelle** und **Kosten-Treiber-Tabelle** (beide Pflicht).
  - Ausstattung und Licht.
  - Ein knapper Abschnitt zu Material und PU-Kante.
  - Warum nach Maß.
  - Mini-Prozess in 4 Schritten.
  - FAQ mit 6–8 Fragen.
  - 2 CTA-Zonen.
- Die Tiefe entsteht über die Tabellen, die die Konkurrenz nicht hat, nicht über Wortzahl.

## 2 · Intent & Job-to-be-done (was will der Nutzer sehen/tun)
- **Intent:** C (kommerziell), mit starkem Planungsanteil.
- **Wichtig:** Laut `docs/seo/redirects.md` wird `/ratgeber/begehbaren-kleiderschrank-planen/` per **301 auf diese Seite** geleitet (Kannibalisierung aufgelöst). Die Seite muss deshalb auch die Frage „Reicht mein Raum, welche Maße?“ beantworten. Das kommt kompakt als Maß-Tabelle und Layout-Block, **nicht** als Schritt-für-Schritt-Tutorial (kein HowTo-Schema, keine Selbstbau-Anleitung).
- Die Zeile in `clusters/einbauschraenke.md` „deckt NICHT ab: Maße-Tutorial“ ist durch den Redirect überholt. Gemeint bleibt nur noch: kein Planungs-Ratgeber, aber eine Maß-Tabelle ist Pflicht.
- **Job-to-be-done:** „Ich will wissen, ob mein Raum, meine Nische, mein Abstellraum oder mein Dachzimmer für eine Ankleide reicht, welche Form passt und was den Preis treibt. Dann will ich einen Tischler, der aufmisst, baut und montiert.“
- **Micro-Intents, nach Gewicht:**
  1. Mindestmaß bzw. ob mein Raum reicht.
  2. I/L/U-Form und Parallel-Layout.
  3. Kostenrahmen und Kostentreiber.
  4. Sonderfälle Abstellraum, Nische, Dachschräge, Raumteiler im Schlafzimmer.
  5. Innenaufteilung (Zonen statt Fachmaße).
  6. Offen oder mit Fronten, dazu Licht und Spiegel.
  7. Maßanfertigung gegen Systemschrank.
  8. Ablauf und Region.
- **Der Raum selbst wird zum Schrank.** Das ist der Kern-Winkel laut Cluster-Map und trennt die Seite vom front-basierten Kleiderschrank.

## 3 · Nötige Antworten nach Leseraufgabe; Vergleichsseiten nur als interne Hinweise
| Leseraufgabe | Was der Writer liefern muss (Rohstoff ist fertig) | Modul/Form |
|---|---|---|
| Was ist das, warum Fast | Satz 1: ein begehbarer Kleiderschrank nach Maß macht einen Raum oder Raumteil zum Schrank. Gebaut wird er in der eigenen Werkstatt in Espelkamp, das Aufmaß ist kostenlos, montiert wird vom eigenen Team. | Lead mit 40–60 Wörtern, Direktantwort |
| Reicht mein Raum? | **Rechenweg-Tabelle** („so rechnen Sie nach"), ausdrücklich **Orientierung, kein Fast-Mindestmaß und kein Normwert für Ankleiden**. Nur zwei Bausteine mit Beleg: Hängezone quer **rund 60 cm** tief (wie auf der Kleiderschrank-Seite als Orientierung formuliert, dort steht die Begründung) · Bewegungsfläche **90 cm** (DIN 18040-2 als Herleitung, §7b Beleg 1). Daraus gerechnet: **I-Form** 60 + 90 = rund 1,50 m Raumtiefe · **L-Form** rund 1,50 m in beide Richtungen · **U- bzw. Parallel-Form** 60 + 90 + 60 = rund 2,10 m · **mit Insel/Kommode** zweimal Gang dazu (Tiefe der Insel nach Planung). Abschluss-Satz: genaue Maße klärt das kostenlose Aufmaß. **Gestrichen (normiert 2026-11-17, nur SERP-belegt):** flache Zeile 30–40 cm, „bequem 100–120 cm", m²-Faustwerte, die 3,60-m-Zeile mit angenommener Inseltiefe. | Tabelle, Spaltenkopf = Frage |
| Welche Form passt? | I/einzeilig (schmaler Raum, Nische), L/über Eck (Ecke, Abstellraum), U/dreiseitig (eigenes Zimmer), parallel/zweizeilig (Durchgangsraum), Ankleide hinter dem Bett bzw. als Raumteiler im Schlafzimmer, unter der Dachschräge (1 Satz + Link). | Varianten-Grid oder Kurztabelle |
| Offen oder geschlossen? | Offenes System: Regale, Stangen, Auszüge sichtbar, wirkt luftig, braucht Ordnung. Geschlossene Fronten: staubgeschützt, ruhig. Mischform. Schiebetüren nur dort, wo eine Drehtür in den Gang schlagen würde. Die Mechanik nicht vertiefen, sie gehört zur Kleiderschrank- bzw. Schiebetür-Seite. | Teil des Varianten-Blocks |
| Was kommt hinein? | **Zonen statt Fachmaße:** Langhang, Kurzhang doppelt übereinander, Fächer, Auszüge und Schubladen, Schuhzone, Insel/Kommode als Ablage, Spiegel, Sitzplatz. Konkrete Stangenhöhen und Meter Kleiderstange stehen schon auf der Kleiderschrank-Seite, **nicht wiederholen**. | Liste |
| Licht und Luft | LED in Regal oder Korpus, Bewegungs- oder Türkontakt-Schalter als Option. Eine Ankleide im fensterlosen Abstellraum braucht Luftaustausch (Lüftungsschlitze, offene Bereiche, regelmäßig lüften). Den Elektro-Umfang **nicht als Fast-Leistung zusagen** (§9). | Kurzblock, optional Beleg 2 |
| Was kostet das? | **Ohne €-Zahl.** Treiber-Tabelle: Laufmeter Schrankzeile · Anteil Fronten gegenüber offen · Anzahl Auszüge und Schubladen · Beleuchtung · Sondermaß (Schräge, Nische, Wand zu Wand) · Material und Oberfläche (Dekor, Furnier, Lack, Massivholz). Danach der Weg zum Preis: im Möbelplaner unter „Ankleideraum" eine Vorlage als Ausgangspunkt nehmen und die Anfrage senden (Live-Katalog 2026-11-17), dann das individuelle Angebot nach dem Aufmaß. Eine Preisanzeige nur so formulieren, wie sie auf der Kleiderschrank-Seite steht („erster Möbelpreis, Lieferung und Montage kommen dazu"), ohne Zahl — siehe §9b Nr. 2. Schema `offers` **weglassen**. | Tabelle Treiber → Wirkung |
| Material und Haltbarkeit | Korpus und Front aus Massivholz oder furnierten bzw. beschichteten Platten. PU-Kantenverleimung: fugenlos, feuchtigkeitsbeständig. Beschläge wechseln je Projekt. | Spec-Liste, kompakt |
| Warum nach Maß, warum nicht Pax? | Wand zu Wand ohne Passleisten, bis unter die Decke, Schräge und Nische exakt, Ecken voll nutzbar. Der Systemschrank ist an feste Rastermaße gebunden, das kann bei glatten Räumen genügen. Ehrlich, ohne Herstellerbashing. Pax höchstens in 1 FAQ nennen. | Kurz-USP plus 1 FAQ |
| Wie läuft das? | Beratung (vor Ort oder im Büro) → kostenloses Aufmaß vor Ort → 3D-Planung → Fertigung in Espelkamp → Montage durch das eigene Team. **Keine Wochenzahl.** | Mini-Prozess, 4 Schritte |

**Schreib-Sperren gegen QC-Rot (aus Vorläufen):**
- Die FAQ dürfen die Maß- und Kostentabelle nicht nacherzählen.
- Zahlen in Tabelle, Lead und FAQ müssen identisch sein (z. B. Gang 90 cm überall gleich).
- Keine erfundene Bau- oder Messmethode, etwa wie Licht verkabelt oder wie die Insel befestigt wird.
- Wortgrenzen nur nach `prop-laengen`, nie strenger.
- Die mobile H2 bei langen Komposita („Ankleidezimmer-Maßanfertigung“) vermeiden oder mit einem bedingten Trennstrich versehen.

**Bild:** `begehbare-ankleide-nach-mass-weiss.jpg` und `-eck.jpg` laufen schon auf 4 Seiten (Pillar, Kleiderschrank, HWR, Waschmaschinenschrank). Die drei Dachschrägen-Ankleidebilder stehen auf `einbauschrank-dachschraege`. Ein Bild pro Seite, und das Motiv muss zur Ankleide passen (`docs/seo/bilder.md`). Herkunft oder freies Foto klären (§9).

**Interne Vergleichsseiten (nur zur Dedup-Prüfung, nicht abschreiben):** `kleiderschrank-nach-mass.ts` (Tiefen 60 bzw. 65–68 cm, Stangenhöhen, FAQ Dreh-/Schiebetür, FAQ „Unterschied zur begehbaren Ankleide“) · `einbauschrank-dachschraege.ts` (Kniestock/Drempel messen, IKEA-FAQ, Aufmaß-FAQ an der Schräge) · `garderobe-nach-mass.ts` (90/150 cm nach DIN 18040-2).

## 4 · Begriffe und Entitäten als Recherchehinweise; keine Pflichtliste zum Abhaken
- **Kern:** begehbarer Kleiderschrank nach Maß · Ankleide / Ankleidezimmer / Schrankraum · Maßanfertigung · Tischler/Schreiner · Meisterbetrieb.
- **Maße:** Mindestgröße · Gangbreite / Bewegungsfläche · Schranktiefe · I-, L-, U-Form, parallel · Insel/Kommode · raumhoch · Wand zu Wand.
- **Situation:** Abstellraum umbauen · Nische · Dachschräge/Kniestock · Raumteiler hinter dem Bett.
- **Ausstattung:** Kleiderstange, Lang- und Kurzhang · Auszüge/Schubladen · Schuhregal · Spiegel · LED-Beleuchtung, Bewegungsmelder · offen / Drehtür / Schiebetür.
- **Material:** Dekor · Echtholzfurnier · Lack matt/hochglanz · Massivholz · PU-Kantenverleimung.
- **Prozess:** Aufmaß (kostenlos) · 3D-Planung · Möbelplaner · Montage durch das eigene Team · Angebot.
- **Region:** Fast Systemmöbel · Espelkamp · OWL · Minden, Lübbecke, Bielefeld, Osnabrück (Beispielorte aus FACTS).
- **Wettbewerber und Hersteller** (Höffner, Diotti, Schrankwerk, Meine Möbelmanufaktur, cabinet): **nicht nennen, nicht verlinken**. IKEA Pax höchstens 1× als Systemschrank-Beispiel in der FAQ.
- **Niedrig / weglassen ohne Beleg:** Kleiderlift, Schmuckschublade, Hosenauszug als feste Ausstattung (Beschläge je Projekt).

## 5 · Offene Nutzerfragen, soweit sie nach dem Haupttext noch eine Antwort brauchen
FAQ-Kandidaten (6–8 auswählen). Keine darf eine Tabellenzeile wiederholen, jede braucht eine eigene Zusatzinfo:
1. **Kann ich aus einem Abstellraum oder einer Kammer eine Ankleide machen?** Ja, wenn die Raumtiefe für Gang plus Schrankzeile reicht. Tür, Licht und Luftaustausch mitplanen.
2. **Geht eine Ankleide auch ohne eigenen Raum, etwa im Schlafzimmer?** Ja, als Schrankzeile hinter dem Bett oder als Raumteiler mit Durchgang.
3. **Lohnt sich Maßanfertigung gegenüber einem Systemschrank wie Pax?** Rastermaß gegen Wand zu Wand, Schräge und Decke. Ehrlich: bei glatten Räumen kann ein System genügen.
4. **Offen oder mit Türen, was ist praktischer?** Staub, Optik, Gangbreite. Schiebetür, wo eine Drehtür in den Gang schlägt.
5. **Braucht eine begehbare Ankleide Licht und Lüftung?** Licht ja, fensterlose Räume brauchen Luftaustausch. Den Elektroanschluss nicht als Fast-Leistung zusagen (§9).
6. **Was kostet ein begehbarer Kleiderschrank nach Maß?** Kein €-Betrag: individuell nach Aufmaß, Verweis auf die Treiber und den Möbelplaner (nur Möbelpreis, zzgl. Lieferung und Montage).
7. **Wie läuft das Aufmaß ab, und muss ich vorher selbst messen?** Kostenloses Aufmaß vor Ort. Raumskizze und Fotos helfen beim Erstgespräch. Muss sich von der Aufmaß-FAQ auf der Dachschrägen-Seite unterscheiden.
8. **Bis wohin montiert ihr?** Montage durch das eigene Team im Umkreis von ca. 200 km um Espelkamp.

PAA aus der Recherche: keine. Lieferzeit-FAQ **nicht** aufnehmen, weil es keine belegte Zahl gibt.

## 6 · Gaps & unser Winkel (wo Fast überholt) + Negativ-Abgrenzung lt. Playbook
**Wo Fast vorbeizieht:**
- **Maß-Tabelle mit hergeleiteten Raumtiefen je Form.** Die Konkurrenz nennt nur verstreute Einzelzahlen ohne Herleitung.
- **Ehrliche Kostenorientierung über Treiber.** Die SERP hat gar keine Preise. Wir haben auch keine Zahlen, dafür eine transparente Treiber-Tabelle und den Hinweis, dass der Möbelplaner den Möbelpreis zeigt.
- **FAQ-Block:** Die Konkurrenz hat keinen, damit gehört der AEO-Platz uns.
- **Regionaler Meisterbetrieb mit Eigenfertigung, kostenlosem Aufmaß und eigenem Montageteam.** Die SERP besteht aus Möbelhaus, Konfigurator, Ratgeber und Leadgen-Portal.
- **Sondersituationen aus einer Hand:** Abstellraum, Nische, Dachschräge, Raumteiler. Exakt gefertigt, Wand zu Wand ohne Passleisten.
- **PU-Kantenverleimung** als technischer Qualitätsbeleg (fugenlos, feuchtigkeitsbeständig).

**Negativ-Abgrenzung:**
- Kein Hub bzw. Pillar-Überblick über alle Schranktypen.
- Kein langer USP-Text, keine Vergleichstabelle Tischler gegen Studio gegen Möbelhaus.
- Kein Planungs-Tutorial in Schritten, kein HowTo-Schema.
- Keine Über-uns-Story, keine Galerie als Selbstzweck. Höchstens 1 Praxisdetail, etwa „in unserer Werkstatt in Espelkamp gefertigt“.
- Keine Kleiderschrank-Innenmaße (Tiefen- und Stangen-Details): 1 Satz plus Link zur Kleiderschrank-Seite.
- Keine Schrägen-Konstruktion und kein Kniestock-Messen: 1 Satz plus Link zur Dachschrägen-Seite.
- Keine Schiebetür-Laufsysteme als Schwerpunkt.
- Kein Gewerbe-Bezug (Silo Privat).
- CTA bleibt stark, aber ohne Dringlichkeit.

## 7 · Interne Links (rein/raus, Anker) lt. internal-linking.md
**Registrierung in `linking-rules.ts`:** Node `type: "product"`, `silo: "einbauschraenke"`, `parent: "/einbauschraenke-nach-mass/"`, `built: true`, `contentModule: "begehbarer-kleiderschrank-nach-mass"`. Dazu `sitemap.ts` (0.7).

ANCHORS-Vorschlag:
- exact: „begehbarer Kleiderschrank nach Maß“
- partial: „begehbare Ankleide nach Maß“, „Ankleide nach Maß“, „Ankleidezimmer nach Maß“, „Schrankraum nach Maß“
- brand: „Fast Systemmöbel Ankleide“
- descriptive: „begehbaren Kleiderschrank planen“, „Ankleide nach Maß ansehen“

**Ausgehend (Budget max. 7, minInlineLinks ≥ 2):**
1. ↑ `/einbauschraenke-nach-mass/`: Breadcrumb plus 1 Link im Text, Anker partial oder descriptive („alle Einbauschränke nach Maß“).
2. **Geschwister (Pflicht)** `/einbauschraenke-nach-mass/kleiderschrank-nach-mass/`: in der Abgrenzung oder im Innenaufteilungs-Block, Anker „Einbau-Kleiderschrank nach Maß“ oder „Kleiderschrank vom Tischler“ (z. B. „Stangenhöhen und Schranktiefen im Detail …“).
3. Geschwister `/einbauschraenke-nach-mass/einbauschrank-dachschraege/`: im Layout-Abschnitt Dachschräge, Anker „Schrank unter der Dachschräge“ oder „Kniestockschrank nach Maß“.
4. `/moebelplaner/`: CTA nach der Maß- bzw. Kostentabelle.
5. `/kontakt/`: Abschluss-CTA.
6. Beleg 1 (siehe §7b).
7. Frei lassen, oder Beleg 2 (Lüftung). `/referenzen/` nur, wenn dort ein echtes Ankleide-Projekt steht. Heute steht dort keins, also nicht verlinken.

Nicht verlinken: Schiebetür-, Nischenschrank- und Kosten-Seite (nicht gebaut), `/ratgeber/begehbaren-kleiderschrank-planen/` (Redirect auf diese Seite).

**Eingehend (MIN_INBOUND 3 plus Geschwister-Rücklink):**
- **A · Pillar** `src/lib/content/einbauschraenke-nach-mass.ts`, Karte row2 „Begehbare Ankleide“ (ca. Z. 118–120, heute ohne Link). Marker in die description, z. B. „… geplant um Ihre Wege und Ihre Sachen: die [begehbare Ankleide nach Maß](/einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/) …“. Budget: 7 Body-Ziele bei 8–10 Spielraum, also frei. Erfüllt MUSS `own-cluster-spokes`.
- **B · Geschwister-Rücklink, primär** `src/lib/content/einbauschrank-dachschraege.ts`, Karte row2 „Begehbare Ankleide unterm Dach“ (ca. Z. 182–184). Anker „Ankleide nach Maß“ oder „begehbare Ankleide nach Maß“. Budget: 5/7, **kein Tausch nötig**, und die thematische Passung ist exakt.
- **C · Geschwister-Rücklink, zweiter** `src/lib/content/kleiderschrank-nach-mass.ts` Z. 99, „… für einen ganzen Ankleideraum die begehbare Ankleide“. Den Text-Anker „begehbare Ankleide“ verlinken. Budget **7/7 voll**, daher **tauschen:** im selben Satz den Link `[Kniestockschrank nach Maß](/einbauschraenke-nach-mass/einbauschrank-dachschraege/)` zu reinem Text machen. Die Dachschrägen-Seite behält ihre Eingänge von Pillar, Garderobe, Treppe und Küche mit Dachschräge. Nicht anfassen: den Holzarten-Link (sonst fehlt dem Ratgeber ein Eingang, er fiele auf 2) sowie Parent, Möbelplaner und Kontakt. Ausweichstelle: FAQ Z. 310 „Was ist der Unterschied zu einer begehbaren Ankleide?“.
- Damit gibt es 3 Inhaltsquellen. Strikt Edit → Commit je Datei, danach `npm run audit:links` mit 0 Fehlern.

## 7b · Belege (Outbound): Norm-/Vorschrift-/Messwert-Angaben mit max. 2 Links je Seite NUR auf Quellen der EXTERNAL_SOURCE_ALLOWLIST (src/lib/seo/linking-rules.ts: gesetze-im-internet.de, baua.de, dguv.de, eur-lex.europa.eu, rki.de, bundesgesundheitsministerium.de, amk.de, amk-ratgeber-kueche.de, verbraucherzentrale.de, nullbarriere.de); Ankertext = Name der Quelle; nie Hersteller/Wettbewerber; nichts erfinden; kostenpflichtige Normen (DIN/EN/ISO) als Text ohne Link
- **Beleg 1 (empfohlen):** Gangbreite 90 cm.
  - URL: `https://nullbarriere.de/din18040-2-wohnraum-schlafraum.htm`, Anker „DIN 18040-2 (nullbarriere.de)“. Die URL ist bereits im Repo verwendet (garderobe).
  - Aussage nur so: „Bei barrierefreier Planung gelten nach DIN 18040-2 mindestens 90 cm Bewegungsfläche vor Möbeln, rollstuhlgerecht 150 cm.“
  - Klar machen, dass das kein Ankleide-Standard ist, sondern eine Herleitung.
  - Anders formulieren als auf der Garderoben-Seite (Dedup).
- **Beleg 2 (optional, nur mit Lüftungs-Passage):** `https://www.verbraucherzentrale.de/wissen/energie/heizen-und-warmwasser/heizen-und-lueften-so-gehts-richtig-10426`, Anker „Verbraucherzentrale“. Nur für die Aussage „regelmäßig lüften gegen Feuchte und Schimmel“. Vor dem Einsatz prüfen, dass die Seite das trägt. **Keine** Aussage zu Wandabständen erfinden.
- Für Gangbreiten 100–120 cm, Raumflächen 3–4 bzw. 6–10 m² und die Schranktiefe gibt es keine Allowlist-Quelle. Diese Werte stehen als Erfahrungs- bzw. Rechenwerte ohne Link.

## 8 · Do-NOT-claim-Liste (❌ aus FACTS.md, konkret für dieses Thema)
**Preise und Konditionen:**
- ❌ Jede €-Zahl, Preisspanne, jeder „ab“-Preis oder Laufmeter-Preis für Ankleiden. Es gibt nur einen Planer-Beleg, und der gilt für den Dachschrägen-Schrank. Das Gate blockt außerdem vierstellige €-Beträge. Schema `offers` weglassen.
- ❌ „5 Jahre Garantie“ und jede andere Garantiezahl (es gibt keine freiwillige Garantie). Höffners Garantie nicht übernehmen.
- ❌ Lieferzeit in Wochen, etwa „6–8 Wochen“ von Höffner. Nur „Termin nach Aufmaß und Freigabe“.
- ❌ Fast-eigene Maximalmaße, etwa „Breite bis 800 cm, Höhe 262,5 cm“ von Höffner. Unbelegt.

**Material und Qualität:**
- ❌ „wasserfest“, „24 h unter Wasser“, „kein Wasser durchlässig“ bei der PU-Kante. Nur „fugenlos, feuchtigkeitsbeständig“.
- ❌ Konkrete Beschlag- oder Plattenhersteller als feste Ausstattung, Hersteller-Links.
- ❌ Kleiderlift, Schmuckschublade oder Hosenauszug als Standard.
- ❌ Exotische Holzarten als Alleinstellung, FSC/PEFC beim Namen, „regionale Holzherkunft“.

**Betrieb und Reputation:**
- ❌ „Meisterbetrieb seit <Jahr>“, „25+ Jahre“, „12+ Mitarbeiter“, „1996 in Espelkamp“.
- ❌ Produkt-`aggregateRating`/Reviews.
- ❌ „40 % mehr Stauraum“ als allgemeine Zusage. Das gilt nur für das Referenzprojekt Mittwald.
- ❌ Elektroinstallation (LED-Anschluss, Bewegungsmelder-Verkabelung) als Fast-Leistung, solange unbelegt.
- ❌ „Ankleide komplett im Möbelplaner planbar“. Der Planer deckt Schränke ab (Stand 11-06), keinen ganzen Raum.
- ❌ Montage bundesweit. Montage nur im Umkreis von ca. 200 km.
- ❌ Wettbewerber namentlich abwerten oder verlinken.

## 9 · Offene Punkte / Wissenslücken (was NUR der Kunde weiß; IMMER inkl. Geo-Reichweite „bundesweit oder montage-gebunden?"). Wird NICHT beim Kunden erfragt, sondern vor dem Schreiben gegen FACTS.md + den Antwort-Fundus des Mandanten aufgelöst; alles Unbelegte bleibt Leerstelle und wird nicht behauptet.
### 9a · Beantwortet (gegen kundenwissen.md + FACTS.md + Repo/Live-Abruf aufgelöst, 2026-11-17)
- **Geo-Reichweite (Pflicht) — montage-gebunden:** Eine begehbare Ankleide wird aufgemessen, gefertigt und eingebaut. Kostenloses Aufmaß, Einbau und Montage durch das **eigene Montageteam nur im Radius ~200 km um Espelkamp** (nennbar: ganz OWL, Espelkamp, Minden, Lübbecke, Osnabrück, Bielefeld); **Lieferung deutschlandweit** gilt laut Kunde für jedes Produkt. Im Text die Ankleide als montierte Leistung im Montagegebiet führen; **nie** „bundesweite Montage/bundesweites Aufmaß". Quelle: kundenwissen.md § Geo & Service (einbauschraenke Q1 „merke dir das", badmoebel Q1); FACTS § Geo-Reichweite je Leistung + § Liefer-/Montagegebiet. *(Engine-Frage 1)*
- **Preise:** strikt individuell — keine €-Zahl, Spanne, „ab"- oder Laufmeter-Preis, keine Relation. Kostenfrage nur über die Treiber-Tabelle + individuelles Angebot nach Aufmaß. Die Planer-Preis-Ausnahme (FACTS, Freigabe 2026-10-04) gilt nur mit eigenem Planer-Beleg und deckt bisher nur den Dachschrägen-Schrank; zudem blockt das Authoring-Gate jede vierstellige €-Zahl. → Plan B ohne Zahl. Quelle: FACTS § Preise + Ausnahme; kundenwissen.md § Preise & Termine (einbauschraenke Q8). *(Engine-Frage 2)*
- **Möbelplaner-Umfang — belegt per Live-Abruf 2026-11-17:** Der Katalog von `moebelplaner.fast-systemmoebel.de` hat unter „Wohnwelten" eine eigene Kategorie **„Ankleideraum"** mit Schrank-Vorlagen („Schrank, begehbar und übersichtlich", Bullets „ideale Raum-in-Raum-Lösung", „viele Schubladen, offene Fächer", „offene Fächer, Garderobenstangen, Schubladen"), dazu die Aufforderung „Gern planen wir Ihr Wunschmöbel gemeinsam. Senden Sie uns Ihre Anfrage." → CTA-Formulierung erlaubt: „Im Möbelplaner eine Ankleide-Vorlage als Ausgangspunkt nehmen, Ideen festhalten und uns senden". Positionierung bleibt **Vorbereitung der persönlichen Planung**, nicht „Ankleide komplett selbst planen" (§8 bleibt gültig); primäres Conversion-Ziel bleibt das Kontaktformular. Die im Katalog genannten Vorlagenmaße (z. B. 240 × 300 × 58 cm) und Dekor-/Herstellernamen **nicht** übernehmen. Quelle: Live-Abruf + kundenwissen.md § Möbelplaner & Conversion (kueche-planen Q3). *(Engine-Frage 3)*
- **Material/Fronten:** Massivholz + branchenübliche hochwertige Materialien (FACTS). Die Live-Seite kleiderschrank-nach-mass (gemergt, Ben-Review) formuliert bereits „Korpus und Fronten aus Massivholz oder aus furnierten und beschichteten Platten … Dekor, Echtholzfurnier und Lack in matt oder hochglanz" — **diese Gattungsbegriffe** sind nutzbar, **keine** Holzart-, Dekor- oder Herstellernamen. PU-Kantenverleimung **fugenlos + feuchtigkeitsbeständig**, nie „wasserfest". Beschläge wechseln je Projekt. Quelle: FACTS § Fertigung/Material; kundenwissen.md § Belege (einbauschraenke Q4/Q5); `src/lib/content/kleiderschrank-nach-mass.ts`.
- **Ausstattung als Möbel-Bestandteil:** Kleiderstangen, Einlegeböden, Schubkästen/Auszüge, Spiegeltüren, grifflose Fronten und **LED-Beleuchtung an Stangen und Böden** stehen schon auf der Live-Kleiderschrank-Seite und sind als planbare Ausstattung nutzbar. Quelle: `kleiderschrank-nach-mass.ts` (Ausstattungs-Block). Die Elektroinstallation selbst bleibt Leerstelle (9b Nr. 3).
- **Machbarkeit Sonderräume** (Abstellraum, Nische, Dachschräge, Raumteiler hinter dem Bett, Insel/Kommode): Grundhaltung „alles auf Anfrage / für jedes Problem eine Lösung" — offen und machbar formulieren, keine Positiv-/Negativliste. Quelle: kundenwissen.md § Leistungsumfang (einbauschraenke Q3).
- **Lieferzeit/Termin:** keine Wochenangabe, nur „verbindlicher Termin nach Aufmaß und Freigabe". Quelle: kundenwissen.md § Preise & Termine (einbauschraenke Q2). *(Engine-Frage 9)*
- **„Meisterbetrieb":** nur ohne Jahr. Quelle: kundenwissen.md § Belege; FACTS § Status. *(Engine-Frage 10)*
- **Prozess/Beratungswege:** Beratung per Telefon oder vor Ort → kostenloses Aufmaß vor Ort → 3D-Planung → Fertigung in Espelkamp → Montage durch eigenes Team. Kein Showroom-Versprechen; kein Musterversand, keine Dekorproben. Quelle: FACTS § Prozess/Service; kundenwissen.md § Leistungsumfang (ratgeber Q7, einbauschraenke Q7).
- **Finanzierung:** im Privatbereich ja, dezent erwähnbar (Ankleide = Privat). Quelle: FACTS § Küche-Service; kundenwissen.md § Preise & Termine.
- **Kit-Angaben gegengeprüft (2026-11-17):** Die Bilder `einbauschraenke/begehbare-ankleide-nach-mass-weiss.jpg` (einbauschraenke-nach-mass, kleiderschrank-nach-mass, hauswirtschaftsraum) und `-eck.jpg` (einbauschraenke-nach-mass, hauswirtschaftsraum, waschmaschinenschrank-nach-mass) sind Mehrfach-Bilder in 4 Content-Dateien, wie vom Kit angegeben. Die Dachschrägen-Ankleidebilder (`begehbare-ankleide-dachschraege-nach-mass-glasfront.jpg`, `ankleide-dachschraege-schiebetueren-bronze-nach-mass.jpg`, `begehbarer-kleiderschrank-dachschraege-spitzdach-nach-mass.jpg`) laufen auf `einbauschrank-dachschraege`. `linking-rules.ts` hat noch keinen Node für die Seite; `next.config.ts` Z. 63 leitet die Ratgeber-URL INTERIM auf `/moebel-nach-mass/` (DoD §1). Die Zeilen- und Budget-Angaben in §7 (Pillar Z. 118–120, Dachschräge Z. 182–184, Kleiderschrank Z. 99, Budget 7/7) im Authoring per `audit:links` gegenprüfen.

### 9b · Leerstelle — nicht behaupten (je Leerstelle eine Writer-Anweisung; im REVIEW.md unter »Offene Fakten (nicht behauptet)«)
1. **Ankleide als reine Lieferung ohne Montage:** unbelegt, ob Fast eine Ankleide auch nur liefert. → **Weglassen**; die Seite spricht nur von Aufmaß, Fertigung und Montage im Montagegebiet.
2. **Preisanzeige des Planers für Ankleide-Vorlagen:** Der Live-Katalog führt die Ankleide-Vorlagen mit Preis-Anfrage-Link; ob nach der Konfiguration ein Möbelpreis erscheint, ist nicht geprüft. → Nur „Vorlage nehmen, Ideen festhalten, Anfrage senden"; **keine** Zusage einer Preisanzeige speziell für die Ankleide, keine Zahl.
3. **Elektroinstallation** (LED-Anschluss, Bewegungsmelder/Türkontakt-Verkabelung, Steckdosen): unbelegt, ob Fast das ausführt. → **Allgemein formulieren:** „Beleuchtung planen wir mit ein" bzw. LED als Ausstattung des Möbels; den Anschluss stimmen Kunde und Elektriker ab. Nie „inkl. Elektroinstallation". *(Engine-Frage 4)*
4. **Lüftung in fensterlosen Räumen** als Fast-Lösung (Lüftungsschlitze, Abstände): unbelegt. → Nur den Planungsgrundsatz nennen (Luftaustausch mitdenken, regelmäßig lüften; optional Beleg Verbraucherzentrale nach §7b, vorher prüfen, dass die Seite das trägt), Fast-Anteil nur „berücksichtigen wir in der Planung". Keine erfundene Bau- oder Abstandsangabe.
5. **Insel/Kommode, Sitzbank, Glasfronten als gebaute Fast-Projekte:** Die Dachschrägen-Bilder zeigen Kommodeninsel und Glasfronten, ein freigegebener Projektbezug fehlt. → **Machbar formulieren** („auf Wunsch mit Insel oder Kommode") ohne „wie in unserem Projekt …"; keine Projekt-Anekdote aus den Bildern ableiten. *(Engine-Frage 5)*
6. **Eigenes, ungenutztes Ankleide-Foto:** In `public/images` gibt es keins; alle Ankleide-Motive laufen schon auf anderen Seiten (Pool-Problem laut `docs/seo/bilder.md`). Herkunft der Fotos (eigene Projekte oder Pool) ist nicht dokumentiert. → **Ein** Bild, dessen Alt-Text das Motiv ehrlich beschreibt (kein Dachschrägen-Motiv, wenn der Absatz nicht von der Schräge handelt); Mehrfachnutzung im REVIEW.md vermerken. Lieber ohne Bild als mit unpassendem Motiv. *(Engine-Frage 6)*
7. **Realisiertes Ankleide-Projekt mit Ort:** keins freigegeben (kundenwissen.md § Belege, einbauschraenke Q6). Die Mittwald-Referenz (`ueber-uns.ts`, „40 % mehr Stauraum") ist ein **Einbauschrank**, keine Ankleide. → **Kein** Projektbeispiel, kein Ort, keine Kundenstimme, kein `/referenzen/`-Link; höchstens „in unserer Werkstatt in Espelkamp gefertigt". *(Engine-Frage 7)*
8. **Fast-eigene Fertigungsgrenzen und Mindestmaße** (max. Höhe/Breite einer Zeile ohne Stoß, Mindest-Raumtiefe aus Fast-Sicht, Inseltiefe): keine (kundenwissen.md § Belege: „keine Maß-Bandbreiten erfinden"). → Nur die Rechenweg-Tabelle aus §3 mit 60 cm (Live-Copy) + 90 cm (DIN-Herleitung) als Orientierung; SERP-Werte (100–120 cm, m²-Faustwerte, 30–40 cm flache Zeile, Höffner-Maße) **nie** übernehmen; Abschluss immer „genaue Maße beim kostenlosen Aufmaß". *(Engine-Frage 8)*
9. **Google-Bewertungen** (falls als Trust erwogen): FACTS-Wert ~4,2★/~14 ist ungeprüft. → **Weglassen**, kein `aggregateRating`.

**Offene Leerstellen: 9.** Geo-Frage aufgelöst (montage-gebunden ~200 km um Espelkamp, eigenes Montageteam; Lieferung deutschlandweit). Engine-Fragen 1, 2, 3, 9, 10 beantwortet; 4–8 als Leerstellen geführt.

## 10 · Authoring-Briefing (Lauf 2026-11-18, W47 — verbindlich für Writer, Humanizer, QC und Chefredakteur)
**Route:** `/einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/`. Batch einbauschraenke, Seite 3 von 3: Der Kosten-Ratgeber `/einbauschraenke-nach-mass/einbauschrank-kosten/` wird im selben Batch gebaut und **vor** dieser Seite gemergt. Der Link darauf in `bkKosten.intro` ist gesetzt und bleibt (§7 „Kosten-Seite nicht gebaut" ist damit überholt). Nischenschrank wird nicht verlinkt (Budget voll, kein Paar in der Cluster-Map).

**10a · Struktur (fest, Modul `src/lib/content/begehbarer-kleiderschrank-nach-mass.ts`, Keys nicht ändern):** `bkHero` (Direktantwort) · `bkIntroStats` · `bkCtas` · `bkFormen` = 6 Formen (I, L, U, parallel, hinter dem Bett/Raumteiler, unter der Dachschräge als 1 Satz + Link) · `bkRaumtiefe` = Rechenweg-Tabelle nach §3 (nur 60 cm + 90 cm als Bausteine: I ≈ 1,50 m, L ≈ 1,50 m in beide Richtungen, U/parallel ≈ 2,10 m, mit Insel zweimal Gang dazu, Inseltiefe nach Planung) · `bkFronten` = offen / mit Fronten / Mischform (Schiebetür nur als Türlösung dort, wo eine Drehtür in den Gang schlüge) · `bkMaterial` = Material + Passform · `bkZonen` = 5 Zonen statt Fachmaße · `bkLicht` = Licht und Luft · `bkProcess` = 4 Schritte · `bkKosten` = Treiber ohne Euro · `bkMoebelplaner` = Kategorie „Ankleideraum" als Ausgangspunkt, Anfrage senden · `bkTestimonialsHeading` · `bkFaq` = **6 FAQ**: Abstellraum/Kammer (§5 Nr. 1), mit Schiebetüren (Sekundär-Keyword W41, Türlösung, keine Mechanik), Maß vs. Systemschrank wie Pax (Nr. 3), Kosten (Nr. 6, kurz, ohne Zahl, ohne die Treiber-Tabelle nachzuerzählen), Aufmaß/vorher selbst messen (Nr. 7, anders als die Aufmaß-FAQ der Dachschrägen-Seite), Montagegebiet (Nr. 8). Gestrichen, weil Blöcke sie tragen: ohne eigenen Raum (→ Karte „Hinter dem Bett"), offen oder Türen (→ `bkFronten`), Licht und Lüftung (→ `bkLicht`).

**10b · Links (Budget 7/7 voll, keine weiteren Ziele):** Parent in `bkIntroStats.col2Body`, Dachschräge in der Karte „Unter der Dachschräge", Kleiderschrank in `bkZonen.intro`, DIN 18040-2 (nullbarriere.de) in `bkRaumtiefe.intro`, Kosten-Ratgeber in `bkKosten.intro`, Möbelplaner/Kontakt über die CTA-Felder und `bkMoebelplaner`. Kein Verbraucherzentrale-Link (Beleg 2 entfällt aus Budgetgründen), kein Link auf Nischenschrank, Garderobe, Treppe, `/referenzen/`.

**10c · Wortmaß:** Maßgeblich ist allein `prop-laengen` gegen die Vorlage `kleiderschrank-nach-mass.ts`: Hero-/Sektions-`intro` ≤ 57 W, `body` ≤ 67 W, `answer` ≤ 51 W, Schritt-`description` ≤ 26 W, `col1Body` ≤ 33 W, `col2Body` ≤ 36 W, `col3Body` ≤ 35 W, `introBefore` ≤ 28 W. Richtwerte: Tabellenzelle ca. 5–14 W, Karten-`body` ca. 25–40 W. Kein Kit-Wert ist ein Abnahmekriterium; der Korridor §1 ist Orientierung.

**10d · Konsistenz- und Leerstellen-Sperren:**
- Zahlen identisch an jeder Stelle: Hängezone rund 60 cm, Gang mindestens 90 cm (DIN 18040-2 als Herleitung, rollstuhlgerecht 150 cm), I ≈ 1,50 m, U/parallel ≈ 2,10 m. Keine anderen Maße (keine 100–120 cm, keine m²-Werte, keine 30–40 cm, keine Fast-Mindestmaße), immer mit „genaue Maße beim kostenlosen Aufmaß". Die DIN-Aussage anders formulieren als auf der Garderoben-Seite.
- Licht: LED als Ausstattung des Möbels („Beleuchtung planen wir mit ein"), den Anschluss stimmen Kunde und Elektriker ab; nie „inkl. Elektroinstallation", keine Verkabelungsmethode. Luft: nur der Planungsgrundsatz (Luftaustausch mitdenken, regelmäßig lüften), Fast-Anteil nur „berücksichtigen wir in der Planung"; **nie das WIE** (keine Lüftungsschlitze als Fast-Lösung, keine Abstände, keine Luftführung).
- Insel, Kommode, Sitzbank, Glasfront nur machbar formulieren („auf Wunsch"), kein Projektbeispiel, kein Ort, keine Kundenstimme.
- Möbelplaner: Vorlage als Ausgangspunkt, Ideen festhalten, Anfrage senden; **keine** Zusage einer Preisanzeige für Ankleide-Vorlagen, nicht „komplett im Planer planbar", keine Vorlagenmaße aus dem Katalog.
- Keine Kleiderschrank-Innenmaße (Stangenhöhen, Tiefen 65–68 cm, Meter Kleiderstange) wiederholen: ein Satz + Link genügt.
- Montage nur im Umkreis von rund 200 km; keine reine Lieferung ohne Montage anbieten (§9b-1).
- Lange H2-Komposita vermeiden („Ankleidezimmer-Maßanfertigung") oder kurz halten (mobil 390 px).

**10e · Abnahme-Hinweis für den Chefredakteur:** Bildwahl, Alt-Texte, Schema und Breadcrumbs setzt der Orchestrator, sie sind nicht Teil der Copy-Abnahme. pass=false nur für live-störende Befunde (Faktenfehler, Leerstellen-Verstoß, Widerspruch zwischen Abschnitten, Wiederholung, fehlende Nutzerantwort); reine Stilwünsche als nicht blockierend vermerken.
