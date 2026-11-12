# Research-Kit: Hauswirtschaftsraum planen (/hauswirtschaftsraum/planen/)

## 1 · Wortzahl-Korridor → **1.600–2.100 W · Ziel ~1.800 W** (SERP-Median ~1.300, geschätzt) — Orientierung, kein blockierendes Gate
Voller Slug: `/hauswirtschaftsraum/planen/` (pipeline-Slug `planen`) · Archetyp: **Ratgeber im Cluster** · Intent: **I (informational)**, Recherche-/Rohbau-Phase.
- **Korridor-Politik (Ben, 2026-07-15) — normiert am 2026-10-13:** Ziel ~1.800 W, Korridor **1.600–2.100**. Die Playbook-Defaults für Planungs-Ratgeber (2.400–3.200) und DEPTH.md gelten als **überschrieben**; kurze, dichte Chunks mit hohem Mehrwert statt Wortmasse. Präzedenz: `kueche-planen` (Ratgeber, 1.600–2.100, Ziel ~1.800).
- **Median-Regel geprüft, kein Anheben:** Der SERP-Median (~1.300 W) liegt **unter** 2.100, die Klausel „bei höherem Median gleichen Intents minimal anheben" greift also nicht. Der Wert ist zudem nur eine Schätzung (`measured=false`, US-Such-Tool, 4 von 7 Treffern auswertbar) und wird ausdrücklich **nicht** als Boden genommen. Die keyword-map (Z. 53) nennt 1.400–1.800 W; das Ziel ~1.800 deckt sich mit ihrer Oberkante.
- **Längen-Grenze zur Pillar:** `/hauswirtschaftsraum/` hat ~1.800 W. Der Ratgeber wird nicht länger, weil er breiter ist, sondern geht in der **Planungstiefe** darüber hinaus (Zeitpunkt, Anschluss-Tabelle, Fehler, Sonderfälle). Jede weitere 100 W muss neue Planungs-Substanz bringen (Anti-Fülltext); lieber 1.800 starke als 2.100 wässrige Wörter.
- **Writer-Hinweis (Zähl-Bias ~8 %):** Gegen das **ZIEL ~1.800 W** planen, **nicht** gegen den Boden 1.600 — die Zähl-Werkzeuge liegen ~8 % auseinander; wer auf 1.600 schreibt, unterläuft im Gate leicht den Korridor.

### SERP-Tiefe (Recherchebeleg der Engine, keine Schreibvorgabe)
- **Belastbarkeit gering.** Das Such-Tool läuft US-only und liefert kein Google.de. Es kamen 7 Treffer, davon waren nur 4 auswertbar: Town & Country 1.150, fertighaus.de 1.300, immoportal 1.300 und Höffner 3.000 (Shop-Kategorie mit Ratgeber-Anhang). Alle Wortzahlen sind Schätzungen eines Fetch-Modells (`measured=false`). Nicht auswertbar waren 2 Foren (hausbau-forum, energiesparhaus.at) und Hornbach (Bot-Schutz). PAA und Featured Snippet wurden nicht beobachtet.
- **Lesart:** Die redaktionellen Sieger sind dünn: rund 1.150–1.300 W, eine Liste, 4–8 FAQ, pauschale Zahlen. Die Länge von Höffner kommt aus Shop-Masse und ist kein Maßstab.
- **Tiefe kommt aus den Modulen** (§3): 7-Schritte-HowTo, 2–3 Tabellen, Fehlerblock, Sonderfälle, Feuchte/Lüftung mit Beleg, ≥10 FAQ. Der Playbook-Strukturfokus für Planungs-Ratgeber (2.400–3.200) ist nur Orientierung und kein Gate (DEPTH.md). Den geschätzten Median nicht als Boden nehmen.
- **Abgrenzung zur Pillar:** `/hauswirtschaftsraum/` hat bereits rund 1.800 W, 14 FAQ, eine Vergleichstabelle und einen Kostenblock. Der Ratgeber muss in der **Planungstiefe** darüber hinausgehen (Reihenfolge, Zeitpunkt, Technik, Fehler), nicht in der Breite.
- **Keywords (keyword-map Z. 53):** Primär „Hauswirtschaftsraum planen“, I, 1.000–2.000, KD mittel. Sekundär: Hauswirtschaftsraum Planung Tipps · HWR einrichten Checkliste · Hauswirtschaftsraum Größe Mindestmaß · Waschküche planen Ausstattung · Hauswirtschaftsraum Anschlüsse Technik · HWR Möbel Schreiner planen lassen. „einrichten“ gehört der Pillar und kommt nicht in Title oder H1.

## 2 · Intent & Job-to-be-done (was will der Nutzer sehen/tun)
- **Intent: I (informational), Recherche-Phase.** Typischer Leser ist ein Bauherr oder Sanierer vor oder während der Rohbau-/Ausbauplanung. Er will wissen, wie er den HWR plant, damit Größe, Anschlüsse, Lüftung und Stauraum von Anfang an stimmen und später nichts aufgestemmt werden muss.
- **JTBD:** „Ich will die richtige Reihenfolge und die Checkliste, bevor Elektriker und Installateur Leitungen legen, damit die Möbel nach Maß passen.“ Danach kommt der Weiterklick zur Umsetzung (Pillar), zum Möbelplaner als Vorbereitung oder zur Beratung bzw. zum kostenlosen Aufmaß.
- **Kern-Insight (unser Hebel):** Der entscheidende Moment ist der **Zeitpunkt**. Anschlusspositionen werden vor der Rohinstallation festgelegt, und die Möbel richten sich danach. Kein Top-Treffer erklärt das.
- **Micro-Intents, jeder braucht eine Antwort:**
  1. Reihenfolge und Zeitpunkt
  2. Größe bzw. reicht mein Raum
  3. Anschlüsse und Steckdosen (inkl. Starkstrom-Irrtum)
  4. Anordnung von Waschmaschine, Trockner, Arbeitsfläche und Schränken
  5. Checkliste: was rein gehört
  6. Kleiner Raum, Nische, Dachschräge
  7. Feuchte, Schimmel, Lüftung, Boden
  8. Lage im Haus (EG oder Keller)
  9. Heizung, Technik, Hausanschlüsse
  10. Kosten und „Maß oder Standard?“, nur kurz
- **Ton (Playbook §7):** „Sie“, lehrend, neutral und scanbar. H2/H3 als Fragen, jeder Abschnitt beginnt mit einem eigenständigen Antwortsatz. Die Fast-Stimme kommt nur im Praxis-Einschub und im Soft-CTA. Ehrlich sagen, wann Standardmöbel reichen.

## 3 · Nötige Antworten nach Leseraufgabe; Vergleichsseiten nur als interne Hinweise
**A · „Wie plane ich einen HWR?“ → Frage-H1 + 40–60-W-Direktantwort (AEO-Kern)**
- Die Direktantwort enthält: Bedarf zuerst, dann Lage und Aufmaß, dann Wasser/Abwasser/Strom/Lüftung **vor dem Innenausbau** festlegen, dann Zonen (Waschen → Trocknen → Falten/Bügeln → Verstauen, plus Vorrat, Reinigung, Technik), zuletzt raumhohe Möbel nach Maß.
- Sie muss ohne Kontext zitierbar sein und braucht keine Zahl.

**B · „In welcher Reihenfolge?“ → HowTo, 7 Schritte, je Mini-H3; Schema `HowTo` 1:1**
1. **Bedarfsliste:** Geräte (Waschmaschine, Trockner, ggf. Zweitkühlschrank/Gefriertruhe), Wäsche, Vorrat, Getränkekisten, Putzgeräte, Bügelbrett, Werkzeug, Technik.
2. **Lage festlegen:** Wege zu Küche, Eingang/Nebeneingang und Schlafräumen (Wäscheweg); EG oder Keller.
3. **Raum aufmessen und Bestand erfassen:** Wände, Fenster, Türaufschlag, Heizkörper, Zähler, Hausanschlusswand, Dachschräge. Gerätemaße aus den **Datenblättern der eigenen Geräte** übernehmen.
4. **Anschlüsse planen, bevor Leitungen gelegt werden:** Tabelle D.
5. **Zonen und Arbeitsablauf anordnen:** E.
6. **Möbel und Stauraum festlegen:** raumhoch, Tiefe nach Inhalt, Arbeitsplatte über den Geräten (Unterbaufähigkeit prüfen), Ausgussbecken, Wäschesammler-Auszug, Bügel-/Faltzone. Hier kommt der Up-Link zur Pillar.
7. **Licht, Boden, Lüftung abschließen und Planung prüfen lassen:** Aufmaß und 3D-Planung, dann Soft-Überleitung.

**C · „Wie groß muss er sein?“ → Methode statt m²-Tabelle**
- Keine m²-Richtwerte. Die Wettbewerberzahlen 6–15 / 15–20 / 10 m² sind unbelegt, und kundenwissen verbietet Übernahme und Erfinden.
- Stattdessen in dieser Reihenfolge erklären:
  - Eine gesetzliche Mindestgröße für den HWR im Eigenheim gibt es nicht. Das deckt sich mit der Pillar-FAQ, kein Widerspruch.
  - Die Größe folgt aus dem Bedarf: Stellfläche der Geräte laut Datenblatt, plus Schranktiefen, plus Bewegungsfläche vor den Geräten. Diese ohne cm-Zahl als Regel formulieren: Die Gerätetür muss ganz aufgehen, und davor muss Platz zum Hocken mit dem Wäschekorb bleiben.
  - Was fehlt, holt man über die Höhe zurück.

**Tabelle 1 (MUSS, Snippet-Kandidat) · Raumform → Anordnung (qualitativ, ohne Maße)**

| Raumform | Anordnung | Worauf achten |
|---|---|---|
| Nische / Flurschrank | Waschturm + Hochschrank | — |
| Schlauch | einzeilig an der Anschlusswand, gegenüber flache Schränke/Regale | — |
| Quadratisch | L-Form, Geräte + Arbeitsplatte über Eck | — |
| Größer | U-Form mit Falt-/Bügelzone | — |
| Dachschräge | hohe Wand für Hochschränke, niedrige für Geräte/Auszüge | Kniestockhöhe nicht beziffern |
| Kellerraum | wie Raumform | Rückstau, Feuchte |

**D · „Welche Anschlüsse?“ → Tabelle 2 (MUSS): Anschluss | wofür | wann festlegen | wer**
- **Kaltwasser** mit Geräteanschlussventil (Rückflussverhinderer).
- **Abwasser/Siphon** für Waschmaschine, Ausgussbecken, ggf. Kondenswasser des Trockners. Ablaufhöhe laut Geräteanleitung, keine Zahl.
- **Optional Bodenablauf:** braucht Gefälle im Estrich, nur im Rohbau sinnvoll.
- **Strom:** Elektriker plant **eigene Stromkreise für Großgeräte** (Mindestausstattung nach **DIN 18015-2**, als Text). Steckdosen auch für Bügeleisen, Akku-Ladestation/Staubsauger und Gefriertruhe.
- **Starkstrom-Irrtum korrigieren:** Haushaltstrockner laufen an 230 V; Starkstrom betrifft Herd und Co. Typenschild prüfen.
- **Lüftung:** Ablufttrockner braucht eine Abluftführung nach außen. Kondens- und Wärmepumpentrockner brauchen keine, geben aber Wärme und Feuchte ab, also Fenster oder Lüftung. In Neubauten steht oft das KWL-Zentralgerät im HWR, mit Zugang für den Filterwechsel.
- **Licht:** helles Arbeitslicht über der Falt-/Arbeitsfläche.
- **Spalte „wer“:** Elektro-, Sanitär- und Lüftungsfachbetrieb. Fast stimmt die Möbel darauf ab, siehe §8.

**E · „Wie ordne ich an?“ → Zonen + Wäsche-Workflow**
- Reihenfolge: Sammeln → Waschen → Trocknen → Falten/Bügeln → Verstauen, ohne Kreuzwege.
- Zonen Vorrat, Reinigung und Technik getrennt. Technik bleibt frei zugänglich: Zähler, Hausanschlüsse (**DIN 18012**, als Text), Heizung/Speicher. Wartungsfreiräume laut Hersteller/Netzbetreiber, keine Zahlen erfinden.
- **Waschturm:** Der Trockner kommt oben auf die Waschmaschine, nur mit Verbindungssatz des Geräteherstellers. Bedienhöhe beachten.
- **Erhöhte Geräte** (Sockel/Podest) für rückenschonendes Be- und Entladen. Die Höhe hängt von der Körpergröße ab, ohne cm-Zahl.
- **Faltfläche:** Orientierung wie bei der Küchenarbeitshöhe (AMK: etwa 10–15 cm unter dem Ellenbogen). Nur als Text mit Quellenname, Link nur, wenn er gegen einen §7b-Link getauscht wird. Nicht wortgleich zu `kueche-planen` formulieren.

**F · Sonderfälle (Gap)**
- Kleiner HWR, Nische, Dachschräge, Raum unter der Treppe, Kellerraum.
- Im Keller: Abläufe unterhalb der Rückstauebene brauchen eine Rückstausicherung oder Hebeanlage (DIN 1986-100 / DIN EN 12056-4, als Text). Dazu kommen Feuchte und Wäschetragen.
- Dachschräge und Treppe nur als Text, keine Cross-Silo-Links (§7).

**G · Feuchte, Lüftung, Boden (Gap)**
- Werte mit Beleg (Verbraucherzentrale, §7b): Wohlfühlbereich 40–60 % relative Luftfeuchte; Schimmelgefahr ab etwa 70–80 % direkt an der Wand.
- Wäsche im Raum trocknen heißt lüften oder einen Trockner nutzen.
- Boden robust, pflegeleicht, feuchteunempfindlich (z. B. Fliese, rutschhemmend).
- Wasserschaden: Aquastop, erreichbares Absperrventil, Wassermelder.
- Möbel: Kanten fugenlos und feuchtigkeitsbeständig (PU), Sockel abgestimmt auf den Boden.

**H · „Was gehört rein, was nicht?“**
- Inventar-Checkliste als Liste oder dritte Tabelle (Zone | typischer Inhalt | Möbeltyp).
- Abgrenzung in je 1 Satz:
  - Abstellraum: Lager ohne Anschlüsse.
  - Waschküche: Teilfunktion Waschen/Trocknen.
  - Hausanschlussraum: Technik, nicht verbauen.
- Die Definition HWR/Waschküche steht schon in der Pillar-FAQ, also kurz halten und nicht wiederholen.

**I · Typische Fehler (MUSS, 8–10 Punkte)**
- Möbel vor den Anschlüssen geplant
- Zu wenige Steckdosen, keine eigenen Stromkreise
- Trockner oder Wäscheständer ohne Lüftungskonzept
- Zähler, Hausanschlusswand oder Heizung zugebaut
- Gerätetür oder Raumtür kollidiert
- Gerätehöhe bzw. Unterbaufähigkeit vergessen, Arbeitsplatte passt nicht
- Waschturm ohne Verbindungssatz
- Nur Bodenfläche geplant, Höhe verschenkt
- Keine Abstellfläche für den Wäschekorb
- Kellerablauf ohne Rückstauschutz

**J · Kosten (nur kurz, nicht der Fokus lt. Cluster-Map)**
- Qualitativ trennen: bauseitige Gewerke (Anschlüsse, Elektro, Lüftung, Boden) und Möbel (Umfang, Material, Ausstattung, Einbausituation).
- Anschlüsse im Rohbau festlegen statt später nachrüsten, ohne Preisrelation.
- Individuelles Angebot nach kostenlosem Aufmaß, Up-Link zum Kostenblock der Pillar. **Keine €-Zahl.**

**K · „Maß oder Standard?“ (1 ehrlicher Absatz, keine Tabelle)**
- Standard reicht bei einem rechteckigen Raum mit freier Wand und Standardgeräten.
- Maß lohnt sich bei Nische, Schräge, ungeraden Wänden, Anschlüssen im Weg und raumhoch Wand-zu-Wand ohne Passleisten.
- Die volle Vergleichstabelle steht auf der Pillar und wird **nicht** dupliziert.

**L · Praxis-Einschub (MUSS, E-E-A-T)**
- Allgemeine Werkstatt-Fähigkeit, **keine** Anekdote: Beim kostenlosen Aufmaß erfasst Fast Anschlusspositionen und Gerätemaße mit, plant in der 3D-Planung um die kundeneigenen Geräte und fertigt in Espelkamp mit fugenloser PU-Kante.

**M · FAQ ≥10** → §5. **N · Soft-CTA** (1×, dezent) → §7.

- **Schema:** `HowTo` + `FAQPage` + `Article` (author/publisher Organization „Fast Systemmöbel“, dateModified aktuell) + `BreadcrumbList` (Home › Möbel nach Maß › Hauswirtschaftsraum › planen). **Kein** Service, Product oder Offer.
- **Interne Wettbewerbs-Hinweise (nicht im Text erwähnen):**
  - fertighaus: H2 als Fragen + 4er-FAQ (Größe, Inhalt, Kosten, Wohnfläche)
  - Town & Country: Inventarliste + 5-Schritte-Checkliste
  - Höffner: Zonen, „Waschturm millimetergenau“, 8er-FAQ zur Abgrenzung
  - immoportal: 7-Ideen-Liste, Anschlüsse, Lüftung
  - Wir schlagen sie mit Zeitpunkt, Anschluss-Tabelle, Fehlern, Sonderfällen und belegten Feuchtewerten. Ihre m²- und 5.000-€-Zahlen **nicht** übernehmen.

## 4 · Begriffe und Entitäten als Recherchehinweise; keine Pflichtliste zum Abhaken
- **Kern (natürlich und mehrfach):** Hauswirtschaftsraum/HWR · planen/Planung · Grundriss/Raumaufteilung · Größe · Anschlüsse (Wasser, Abwasser, Strom) · Waschmaschine · Wäschetrockner · Waschturm · Arbeitsplatte über den Geräten · Hochschrank/deckenhoch · Ausgussbecken · Checkliste · Schrank nach Maß
- **Breite (je 1–2×):** Lüftung/Feuchtigkeit/Schimmel · Ablufttrockner vs. Kondens-/Wärmepumpentrockner · Bodenbelag Fliese/rutschhemmend · Bodenablauf · Wäschesammler/Wäschekorb-Auszug · Bügelstation/Faltfläche · Wäscheständer/Ausziehleine · Heizung/Haustechnik/Hausanschlussraum · Zähler · Dachschräge/Nische · Nähe Küche/Schlafzimmer · Keller vs. Erdgeschoss
- **Streifen (1×):** Gefriertruhe/Zweitkühlschrank · Vorrat/Speisekammer · Wohnfläche · Aquastop/Wassermelder · Steckdosen/Smart Home · Waschküche · Abstellraum · Rückstauebene · KWL-Gerät
- **„Starkstrom Trockner“:** aufgreifen, aber als Irrtum klarstellen (§3 D).
- **Entitäten konsistent:** Fast Systemmöbel · Meisterbetrieb in Espelkamp/Ostwestfalen-Lippe (OWL) · PU-Kantenverleimung (fugenlos, feuchtigkeitsbeständig) · 3D-Planung · kostenloses Aufmaß · Möbelplaner (moebelplaner.fast-systemmoebel.de) · Wohnflächenverordnung · Verbraucherzentrale · DIN 18015-2 / DIN 18012 (nur als Name)

## 5 · Offene Nutzerfragen, soweit sie nach dem Haupttext noch eine Antwort brauchen
Ziel sind 12–14 Fragen mit Antworten von 2–4 Sätzen. Die Pillar-FAQ hat 14 Fragen: Definition, Waschküche, Größe, Anschlüsse, Lage, Verbau, kleiner HWR, Boden, Mülltrennung/Vorrat, HWR-Küche, Kosten, Einzelschränke, Dauer, PU. Diese Fragen nicht nur umformulieren, weil das Gate 11 (Korpus-Dedup) reißt.
1. **Ist ein Hauswirtschaftsraum Wohnfläche?** Nach § 2 WoFlV zählt ein Raum innerhalb der Wohnung dazu. Waschküchen, Trockenräume, Heizungs- und Kellerräume sind als Zubehörräume ausgenommen. Die WoFlV gilt verbindlich vor allem für geförderten Wohnraum; Verträge können anders rechnen (DIN 277, als Text).
2. **Braucht ein Wäschetrockner Starkstrom?** Nein, Haushaltstrockner laufen an 230 V; Typenschild prüfen. Es braucht aber einen eigenen Stromkreis.
3. **Wie viele Steckdosen und Stromkreise braucht ein HWR?** Je Großgerät ein eigener Stromkreis, dazu Steckdosen für Bügeln, Laden und Truhe. Keine Normzahl nennen.
4. **Wann im Bauablauf muss ich den HWR planen?** Vor der Elektro- und Sanitär-Rohinstallation.
5. **Braucht der HWR ein Fenster oder reicht eine Lüftung?** Hängt vom Trocknertyp und vom Wäschetrocknen im Raum ab; Feuchtewerte (VZ) nennen.
6. **Wie hoch sollte die Waschmaschine stehen?** Erhöht auf Sockel oder Podest, Höhe nach Körpergröße, ohne cm-Zahl.
7. **Darf der Trockner auf die Waschmaschine?** Nur oben und nur mit dem Verbindungssatz des Herstellers; Bedienhöhe beachten.
8. **Brauche ich ein Ausgussbecken im HWR?** Nutzen: Flecken vorbehandeln, Putzeimer. Wasser und Abwasser früh einplanen.
9. **Ist ein Bodenablauf sinnvoll?** Sicherheit bei Leckage; braucht Gefälle, also nur im Rohbau.
10. **Wie schütze ich den HWR vor Wasserschäden?** Aquastop (wirkt nur mit Strom), Absperrventil, Wassermelder.
11. **Was muss bei Heizung, Zähler und Hausanschlüssen frei bleiben?** Zugang zum Ablesen und Warten, nicht verbauen; Freiräume laut Hersteller/Netzbetreiber.
12. **HWR im Keller oder im Erdgeschoss?** Wäschewege, Feuchte, Rückstauschutz für Abläufe unter der Rückstauebene.
13. **Wie plane ich einen HWR unter der Dachschräge oder in einer Nische?** Hohe Wand für Schränke, niedrige für Geräte und Auszüge; Maßanfertigung, ohne Maße zu nennen.
14. **Was unterscheidet den HWR vom Abstellraum?** Anschlüsse und Hausarbeit gegenüber reinem Lager.
15. **Was sollte ich für Beratung und Aufmaß vorbereiten?** Bedarfsliste, Datenblätter der Geräte, Fotos und Grundriss mit Anschlusspositionen. Das ist die sanfte Brücke zu `/kontakt/`.

Die Kostenfrage nur dann aufnehmen, wenn sie anders gerahmt ist als in der Pillar („Welche Planungsentscheidungen treiben die Kosten?“), sonst weglassen. FAQPage-Schema 1:1 zum sichtbaren Text.

## 6 · Gaps & unser Winkel (wo Fast überholt) + Negativ-Abgrenzung lt. Playbook
**Winkel lt. Cluster-Map:**
- Ratgeber „HWR planen“: Raumgröße, Anschlüsse/Technik (Wasser, Strom, Abluft), Zonierung, Checkliste, typische Fehler, Weg vom Grundriss zur Maß-Ausstattung.
- Dazu als Alleinstellung **Zeitpunkt/Reihenfolge**: Anschlüsse vor Möbeln, Möbel nach Anschlüssen.

**Gaps → so überholen wir:**
- **Lüftung, Feuchte, Boden kaum behandelt:** eigener Abschnitt mit belegten Feuchtewerten, Trocknertypen und Wasserschadenschutz.
- **Konkrete Maße fehlen:** Wir liefern **Methoden statt erfundener Zahlen**: Datenblatt-Maße, Türaufschlag, Bewegungsfläche, Ergonomie-Regel. Das ist ehrlicher und damit Trust.
- **Starkstrom und Steckdosen kaum erklärt:** Irrtum klarstellen, eigene Stromkreise, Norm per Name.
- **Sonderfälle (Dachschräge, Nische, Treppe, Keller/Rückstau) fehlen:** eigener Block.
- **Kein Vergleich Maß vs. Standard:** ehrlicher Absatz „wann Standard reicht“, Tiefe über die Pillar.
- **Kein regionaler Handwerker:** Praxis-Einschub Meisterbetrieb Espelkamp/OWL, Aufmaß inkl. Anschlüssen, Eigenfertigung, PU-Kante. Familie Fast höchstens 1 Satz im CTA.
- **Wohnfläche oft falsch oder pauschal beantwortet:** Primärquelle WoFlV.

**Negativ-Abgrenzung:**
- **vs. Pillar `/hauswirtschaftsraum/`:** kein Verkaufs- oder USP-Pitch, keine Prozess-Sektion „Beratung → Montage“ (die steht in der Pillar), keine Wiederholung der Vergleichstabelle und des Kostenblocks, kein starker CTA, kein Service-Schema.
- **vs. Produkt-Kinder** (Schrank, Waschmaschinenschrank, Vorratsschrank, Besenschrank, noch nicht gebaut): keine Einzeltyp-Tiefe wie Waschturm-Verbau-Details, Vorrats-Fachraster oder Putzschrank-Halterungen. Nur Planungs-Anriss.
- **vs. Cluster `kuechen`:** keine Küchen- oder Schattenküchen-Planung. Die HWR-Küche nur 1 Satz, falls überhaupt (steht in der Pillar-FAQ).
- **vs. Cluster `einbauschraenke`:** Dachschräge und Treppe als HWR-Situation, nicht als Wohnraum-Schrank.
- **Generell:** keine m²-Tabelle, kein €-Betrag, kein Lehrbuch ohne Praxis-Detail, kein Fülltext.

## 7 · Interne Links (rein/raus, Anker) lt. internal-linking.md
**Registrierung in `linking-rules.ts`:**
- **Modul-Name (Nachtrag 2026-10-13):** Der pipeline-Slug ist `planen`; nach CONTENT_PFAD_MUSTER ergäbe das `src/lib/content/planen.ts` — zu generisch für ein Repo mit mehreren Planungs-Ratgebern. Empfehlung wie unten `hauswirtschaftsraum-planen` (analog `kueche-planen`); die Entscheidung trifft der Authoring-Lauf, die Abweichung gehört dann in REVIEW.md.
- Node: `{ slug: "/hauswirtschaftsraum/planen/", type: "cluster-article", silo: "hauswirtschaftsraum", audience: "privat", parent: "/hauswirtschaftsraum/", built: true, contentModule: "hauswirtschaftsraum-planen" }`. Das ist analog zu `kueche-planen`.
- Damit gilt: Budget **6** Body-Links (verschiedene interne Ziele + externe), `minInlineLinks` 2. Playbook-Ziel sind ≥3 kontextuelle Links. MUSS: parent.
- Neues `ANCHORS`-Set:
  - exact „Hauswirtschaftsraum planen“
  - partial „HWR planen“, „Hauswirtschaftsraum-Planung“, „Waschküche planen“
  - brand „Fast Systemmöbel HWR-Ratgeber“
  - descriptive „so planen Sie Ihren Hauswirtschaftsraum“, „Checkliste für die HWR-Planung“
- Sitemap ergänzen. Den Code-Kommentar zu „Kinder built:false“ in der Pillar (`page.tsx` + `hwrTypische`) aktualisieren.
- **Anker-Kollision:** Das Pillar-Set enthält descriptive „Hauswirtschaftsraum planen und einrichten“. Sobald diese Seite live ist, entfernen oder umbenennen (z. B. „Hauswirtschaftsraum komplett einrichten“). Sonst gibt es eine Warnung `ziel-zu-allgemein`, weil der Anker zur Unterseite passt, aber auf den Hub zeigt.

**Ausgehend (inline als `[Anker](/ziel/)`), geplant 3 interne + 2 externe = 5 von 6:**

| Ziel | Wo | Anker | Status |
|---|---|---|---|
| `/hauswirtschaftsraum/` | Schritt 6 + Absatz K | „Hauswirtschaftsraum nach Maß“, „HWR nach Maß“; exact „Hauswirtschaftsraum einrichten“ max 2× | MUSS (parent) |
| `/moebelplaner/` | Schritt 7 bzw. Soft-CTA, als Vorbereitung | „HWR-Schränke im Möbelplaner vorab skizzieren“, nicht „selbst fertig planen“ | SOLL |
| `/kontakt/` | Soft-CTA / FAQ 15 | „kostenloses Aufmaß anfragen“ / „Beratung anfragen“ | Conversion |

- Ein Platz bleibt frei, z. B. `/referenzen/` („Referenzprojekte“). Das ist kein Muss.
- **Kein** Link auf `/kuechen-nach-mass/kueche-planen/`, `/einbauschraenke-nach-mass/einbauschrank-dachschraege/` oder `/schrank-unter-treppe/`: Das wäre Cross-Silo. Die Brücke Küchen↔HWR gilt nur Pillar↔Pillar. Diese Themen nur als Text.

**Geschwister-Pflicht (Ratgeber, redaktionell):**
- Stand `PAGES`: Im Cluster `hauswirtschaftsraum` ist **kein** Geschwister gebaut. `schrank-nach-mass`, `waschmaschinenschrank-nach-mass`, `vorratsschrank-nach-mass` und `besenschrank-nach-mass` sind nicht einmal registriert.
- Damit **entfallen Geschwister-Link und Geschwister-Rücklink automatisch** (internal-linking.md „Ohne gebautes Geschwister entfällt die Pflicht“). Nicht auf built:false-Ziele verlinken, also clean launchen. In REVIEW.md vermerken.
- **Backlog-Zeile in internal-linking.md ergänzen.** Wenn ein Produkt-Kind live geht, beidseitig verdrahten:

| Ratgeber-Stelle | Ziel |
|---|---|
| Zone Waschen / Waschturm | waschmaschinenschrank |
| Zone Vorrat | vorratsschrank |
| Zone Reinigung | besenschrank |
| Schritt 6 | schrank-nach-mass |

  Jedes Kind verlinkt zurück mit „Ratgeber: Hauswirtschaftsraum planen“. Laut Memory gehört der Geschwister-Rücklink ins Paket der später gebauten Seite.

**Eingehend (MIN_INBOUND 3 Inhaltsquellen; Breadcrumb, Nav und Footer zählen nicht):**
1. **`/hauswirtschaftsraum/` → planen = MUSS.** Ohne diesen Link meldet das Audit einen **Fehler** (`own-cluster-spokes` der Cluster-Pillar).
   - Inline in die Pillar-FAQ-Antworten „Wie groß muss ein Hauswirtschaftsraum sein?“ und/oder „Welche Anschlüsse braucht ein Hauswirtschaftsraum?“ (`hwrFaq`), z. B. „… Schritt für Schritt im Ratgeber [Hauswirtschaftsraum planen](/hauswirtschaftsraum/planen/)“.
   - Budget der Pillar: 5 von 10 belegt (moebel-nach-mass, kontakt, moebelplaner, referenzen, ueber-uns). Es ist Platz, kein Tausch nötig.
2. **`/moebelplaner/` → planen:** Satz in `moebelplaner/page.tsx` Z. 52 analog zum `kueche-planen`-Link, z. B. „… für den Hauswirtschaftsraum hilft vorab unser Ratgeber [HWR planen](/hauswirtschaftsraum/planen/)“.
   - Budget Conversion: 5. Belegt sind kueche-planen, referenzen, kontakt, plus `/`, falls es kein Crumb ist. Nach dem Link also 4–5 von 5, mit `npm run audit:links` gegenprüfen.
3. **Dritte Quelle:** `/kontakt/` (Conversion, Budget 5; belegt ist nur `/referenzen/` und ggf. `/`). Ein Satz zur Gesprächsvorbereitung mit Anker „Checkliste für die HWR-Planung“.
   - Alternativ die Warnung `inbound` (2 < 3) bis zum ersten HWR-Produkt-Kind hinnehmen und in REVIEW.md dokumentieren.
   - `/leistungen/` listet die Seite automatisch aus `PAGES`. Ob das Audit das als Inhaltsquelle zählt, ist unsicher, deshalb nicht einplanen.
   - `/moebel-nach-mass/` → planen ist **verboten** (skip-hub-level).

## 7b · Belege (Outbound): Norm-/Vorschrift-/Messwert-Angaben mit max. 2 Links je Seite NUR auf Quellen der EXTERNAL_SOURCE_ALLOWLIST (src/lib/seo/linking-rules.ts: gesetze-im-internet.de, baua.de, dguv.de, eur-lex.europa.eu, rki.de, bundesgesundheitsministerium.de, amk.de, amk-ratgeber-kueche.de, verbraucherzentrale.de, nullbarriere.de); Ankertext = Name der Quelle; nie Hersteller/Wettbewerber; nichts erfinden; kostenpflichtige Normen (DIN/EN/ISO) als Text ohne Link

| # | Aussage | URL (am 2026-10-13 abgerufen) | Anker |
|---|---|---|---|
| 1 | Wohnfläche = Räume, die ausschließlich zur Wohnung gehören (§ 2 Abs. 1). **Nicht** dazu gehören Zubehörräume wie Kellerräume, Abstellräume außerhalb der Wohnung, **Waschküchen, Trockenräume, Heizungsräume**, Garagen (§ 2 Abs. 3 Nr. 1). Für FAQ 1. | https://www.gesetze-im-internet.de/woflv/__2.html | „§ 2 Wohnflächenverordnung“ |
| 2 | Wohlfühlbereich „18 bis 22 Grad … relative Luftfeuchtigkeit von 40 bis 60 Prozent“. Schimmel „ab einer relativen Luftfeuchte von etwa 70 bis 80 Prozent direkt vor einer Wand“. Stoßlüften im Winter 3–5 Minuten. Für Abschnitt G / FAQ 5. | https://www.verbraucherzentrale.de/wissen/energie/heizen-und-warmwasser/heizen-und-lueften-so-gehts-richtig-10426 | „Verbraucherzentrale“ |

- **Zu Link 2:** Die Seite erwähnt das Wäschetrocknen nicht ausdrücklich. Nur die Zahlen der Quelle zuschreiben, die Folgerung für den HWR formulieren wir selbst.
- **Ersatzquelle**, falls 1 oder 2 wegfällt: Verbraucherzentrale, Wasserschaden durch Waschmaschinen, https://www.verbraucherzentrale.de/wissen/geld-versicherungen/weitere-versicherungen/waschmaschinen-wann-die-versicherung-bei-einem-wasserschaden-zahlt-8327. Belegt: „Der Aquastop funktioniert nur, wenn das Gerät an den Strom angeschlossen ist“; bei längerer Abwesenheit ohne Aquastop den Wasserzulauf sperren.
- **Ergonomie:** AMK (Arbeitshöhe etwa 10–15 cm unter dem Ellenbogen) nur als Quellenname im Text. Ein Link nur im Tausch gegen #2, sonst sind es drei.
- **Nur als Text ohne Link:** DIN 18015-2 (Elektro-Mindestausstattung), DIN 18012 (Hausanschlusseinrichtungen), DIN 1986-100 / DIN EN 12056-4 (Rückstau), DIN 277 (Flächen). **Keine** Normzahlen nennen, die nicht geprüft sind.
- **Keine** Hersteller-Links (Gerätehersteller zu Waschturm-Bausätzen, Trockner-Datenblätter) und **keine** Wettbewerber.
- Externe Links zählen ins Body-Budget (6).

## 8 · Do-NOT-claim-Liste (❌ aus FACTS.md, konkret für dieses Thema)
- ❌ **Keine €-Beträge, Spannen, „ab“-Werte oder Preisrelationen.** Das gilt auch für die „ca. 5.000 €“ der SERP. Die Möbelplaner-Preisausnahme gilt nur für den belegten Dachschrägen-Schrank und ist nicht übertragbar.
- ❌ **Keine m²-Richtwerte als Fakt oder Fast-Aussage** (6–15 / 15–20 / 10 m² stammen von Wettbewerbern). Keine erfundenen Fast-Maße wie Podesthöhe, Gangbreite in cm oder Schranktiefen als „Standard“. Allgemeine Ergonomie nur mit Quellenname und nicht als Fast-Maßangabe.
- ❌ **„wasserfest“, Tauchtest, „kein Wasser dringt ein“**: gesperrt. Nur „PU-Kantenverleimung, fugenlos, feuchtigkeitsbeständig“.
- ❌ **Fast führt Elektro-, Sanitär-, Lüftungs- oder Bodenarbeiten aus**: nicht belegt. Formulierung: „stimmen wir mit Ihrem Elektriker/Installateur ab“.
- ❌ **Fast verkauft oder liefert Waschmaschine, Trockner oder Geräte**: Geräte werden nicht verkauft. Die Möbel entstehen um die **kundeneigenen** Geräte. Auch Ausgussbecken/Armatur als Fast-Lieferung ist unbelegt.
- ❌ **Konkrete Verbau-Technik als Fast-Lösung** (Vibrationsdämpfung, Lüftungsgitter, Wärmeabfuhr): nicht belegt, nur „in der Planung berücksichtigt“.
- ❌ **Hersteller-, Beschlag-, Platten- oder Holzartnamen**, FSC/PEFC, „regionale Holzherkunft“.
- ❌ **HWR-Referenzprojekt mit Ort oder Kunde**, erfundene Werkstatt-Anekdote. „40 % mehr Stauraum“ gilt nur für das Mittwald-Einbauschrank-Projekt und wird **nicht** auf den HWR übertragen.
- ❌ **Lieferzeit in Wochen.** Nur „verbindlicher Termin nach Aufmaß und Freigabe“.
- ❌ **„Meisterbetrieb seit <Jahr>“**, „5 Jahre Garantie“ oder jede Garantiezahl, „25+ Jahre“, „12+ Mitarbeiter“, „1996 in Espelkamp“ (richtig ist Rahden-Tonnenheide).
- ❌ **Möbelplaner als „HWR komplett selbst planen“.** Nur als Vorbereitung der persönlichen Planung.
- ❌ **Bundesweite Montage oder bundesweites Aufmaß.**
- ❌ **Fotos anderer Räume** (Kleiderschrank, Ankleide) mit HWR-Alt-Text. Alt-Text beschreibt das Bild (bilder.md).
- ✅ **Nutzbar:** Meisterbetrieb (ohne Jahr) · Eigenfertigung in Espelkamp, „alle Teile in Eigenregie“ · PU-Kantenverleimung fugenlos/feuchtigkeitsbeständig · kostenloses Aufmaß vor Ort · 3D-Planung · eigenes Montageteam · Wand-zu-Wand ohne Passleisten · raumhoch · Möbel um kundeneigene Geräte · Montage ~200 km um Espelkamp, Lieferung deutschlandweit · Finanzierung im Privatbereich · Familie Fast (Johann; Andreas & Peter seit 2010) · Tel. 05771 9138312 (nur passiv).

## 9 · Offene Punkte / Wissenslücken (was NUR der Kunde weiß; IMMER inkl. Geo-Reichweite „bundesweit oder montage-gebunden?"). Wird NICHT beim Kunden erfragt, sondern vor dem Schreiben gegen FACTS.md + den Antwort-Fundus des Mandanten aufgelöst; alles Unbelegte bleibt Leerstelle und wird nicht behauptet.
### 9a · Beantwortet (gegen kundenwissen.md + FACTS.md aufgelöst, 2026-10-13)
- **Geo-Reichweite (Pflicht) — montage-gebunden:** Kostenloses Aufmaß, Einbau und Montage **nur im Radius ~200 km um Espelkamp** (nennbar: ganz OWL, Espelkamp, Minden, Lübbecke, Osnabrück, Bielefeld), eigenes Montageteam; **Lieferung deutschlandweit**. Das Planungswissen des Ratgebers gilt allgemein, die Umsetzung (Aufmaß, Montage) wird im Soft-CTA regional verankert. **Nie** „bundesweite Montage/bundesweites Aufmaß". Quelle: kundenwissen.md § Geo & Service (hauswirtschaftsraum Q1 „merke dir das"); FACTS § Geo-Reichweite je Leistung + § Liefer-/Montagegebiet.
- **Geräte:** Fast verkauft **keine** Waschmaschinen/Trockner/Geräte; die Möbel werden um die **kundeneigenen** Geräte geplant und gebaut („Fast plant nur"). Quelle: kundenwissen.md § Leistungsumfang (hauswirtschaftsraum Q2/Q3); Altbestand inbox/discovery/hauswirtschaftsraum.md Q2/Q3.
- **Preise:** strikt individuell nach Aufmaß — keine Zahlen, Spannen, „ab"-Werte, Relationen; Kostenfrage nur qualitativ über Kostenfaktoren + individuelles Angebot. Die Planer-Preis-Ausnahme (FACTS, Dachschrägen-Schrank) ist **nicht** übertragbar. Quelle: FACTS § Preise; kundenwissen.md § Preise & Termine (hauswirtschaftsraum Q5).
- **Lieferzeit/Termin:** keine Wochenangabe, nur „verbindlicher Termin nach Aufmaß/Freigabe". Quelle: kundenwissen.md § Preise & Termine; FACTS.
- **Finanzierung:** im Privatbereich ja (HWR = Privat), dezent erwähnbar. Quelle: FACTS § Küche-Service; kundenwissen.md § Preise & Termine (Discovery-Q6 zur Seite blieb leer, die seitenübergreifende Regel deckt sie ab).
- **Prozess/Beratungswege:** Beratung per Telefon oder vor Ort → kostenloses Aufmaß vor Ort → 3D-Planung → Eigenfertigung Espelkamp → Montage durch eigenes Team. **Kein Showroom** behaupten. Quelle: FACTS § Prozess/Service; kundenwissen.md § Leistungsumfang (ratgeber Q7).
- **Möbelplaner:** deckt Schränke ab; nur als **Vorbereitung der persönlichen Planung** verlinken, nie als „HWR komplett selbst planen"; primäres Conversion-Ziel bleibt die Anfrage über das Kontaktformular. Quelle: kundenwissen.md § Möbelplaner & Conversion (kueche-planen Q3).
- **Angepasste Arbeitshöhen / altersgerecht:** grundsätzlich ja (seitenübergreifend festgelegt) — im Ratgeber nur allgemein („Höhen individuell planbar"), **ohne** cm-Werte und **ohne** Norm-Barrierefrei-Zusage. Quelle: kundenwissen.md § Leistungsumfang (kueche-planen Q4).
- **Material/Feuchte:** PU-Kantenverleimung, **fugenlos + feuchtigkeitsbeständig**; Massivholz + branchenübliche hochwertige Materialien. Nie „wasserfest"/Tauchtest. Quelle: FACTS § Fertigung/Material.
- **Machbarkeit Sonderfälle** (Nische, Dachschräge, Keller, unter der Treppe): Grundhaltung „alles auf Anfrage / für jedes Problem eine Lösung", offen formulieren statt Positiv-/Negativlisten. Quelle: kundenwissen.md § Leistungsumfang.
- **Musterversand:** keiner, keine Dekorproben. Quelle: kundenwissen.md § Leistungsumfang.

### 9b · Leerstelle — nicht behaupten (je Leerstelle eine Writer-Anweisung; im REVIEW.md unter »Offene Fakten (nicht behauptet)«)
1. **HWR-Praxisbeispiel/Referenz mit Ort:** keins freigegeben (kundenwissen.md § Belege). → **Weglassen**; der Praxis-Einschub (§3 L) beschreibt nur die allgemeine Werkstatt-Fähigkeit (Aufmaß erfasst Anschlüsse + Gerätemaße, 3D-Planung um die kundeneigenen Geräte, Fertigung in Espelkamp) — keine Anekdote, kein Ort, keine Kundenstimme.
2. **Ausführung der Gewerke** (Elektro, Sanitär, Lüftung/Abluftdurchbruch, Bodenablauf, Boden) durch Fast: unbelegt (Discovery-Q2 zur Anschluss-Frage unbeantwortet). → **Allgemein formulieren:** „legen Sie mit Ihrem Elektriker/Installateur fest — wir stimmen die Möbel darauf ab"; Aussparungen und Zugänge **im Möbel** sind ok, Gewerke als Fast-Leistung nie.
3. **Verbau-Technik als Fast-Lösung** (Entkopplung/Vibration, Lüftungsöffnungen, Wärmeabfuhr beim Waschturm im Schrank): unbelegt. → Nur Planungsgrundsatz + Verbraucherzentrale-Beleg; Fast-Anteil ausschließlich „berücksichtigen wir in der Planung". Einzeltyp-Tiefe gehört ohnehin dem Produkt-Kind `waschmaschinenschrank-nach-mass`.
4. **Sockel/Podest für erhöhte Geräte und integriertes Ausgussbecken als Fast-Leistung:** nicht bestätigt. → **Machbar formulieren** („auf Anfrage, prüfen wir in der Beratung"), keine Zusage, keine Höhe in cm; Becken/Armatur nie als Fast-Lieferung.
5. **Fast-eigene Maße** (m²-Richtwerte, Schranktiefen, Gangbreiten, Podesthöhen): keine (kundenwissen.md § Belege: „keine Maß-Bandbreiten erfinden"). → Bei der **Methode** bleiben (§3 C/E: Datenblatt + Türaufschlag + Bewegungsfläche); Wettbewerber-m² (6–15/15–20/10 m²) nie übernehmen; allgemeine Ergonomie nur mit Quellenname (AMK), nie als Fast-Maß.
6. **Normwerte** (DIN 18015-2 Stromkreis-Anzahl, DIN 18012 Freiräume, Rückstauebene/DIN 1986-100): Inhalt nicht gegen den Normtext geprüft. → Normen **nur als Name + Grundsatz** nennen, **keine** Normzahl; Detailfrage an den Fachbetrieb verweisen.
7. **Echtes HWR-Foto:** In `public/images` gibt es kein HWR-/Waschmaschinen-Motiv (geprüft 2026-10-13). → Nur ein Bild verwenden, dessen Alt-Text das Motiv ehrlich beschreibt, sonst **ohne Bild** (docs/seo/bilder.md); fehlendes HWR-Foto im REVIEW.md vermerken (keine Rückfrage vorab).
8. **Google-Bewertungen** (falls als Trust erwogen): FACTS-Wert ~4,2★/~14 ist ungeprüft. → Im Ratgeber **weglassen**; höchstens Organisations-Trust nach Live-Gegenprüfung im Authoring.

**Offene Leerstellen: 8.** Geo-Frage aufgelöst (montage-gebunden ~200 km, Lieferung deutschlandweit).

## 10 · Authoring-Briefing (Authoring-Lauf 2026-10-28, W44) — verbindlich für Writer/QC/Chef
**Wissensstand:** §9a/§9b am 2026-10-28 erneut gegen FACTS.md + kundenwissen.md geprüft. Seit 2026-10-13 kam nur Büro-Wissen (kundenwissen § Büro) und die Arminia-Loge (FACTS) hinzu, beides ohne Bezug zum HWR. Die 8 Leerstellen aus §9b gelten unverändert und werden nicht behauptet. Keine `inbox/discovery/planen.md` vorhanden.

**Modul und Route:** `src/lib/content/planen.ts` (Exporte `hwrPlanen*`), Route `/hauswirtschaftsraum/planen/` (keyword-map Z. 53, Präzedenz `kueche-planen`). Abweichung von §7: Modulname `planen` statt `hauswirtschaftsraum-planen`, weil `src/lib/seo/lastmod.ts` das Modul aus dem letzten URL-Segment ableitet und die Ops-Werkzeuge `src/lib/content/<pipeline-slug>.ts` erwarten.

**Struktur ist fixiert** (Keys/Anzahl nicht ändern, nur Werte betexten): Hero · 7 Schritte · Anschluss-Tabelle (6 Zeilen × Wofür/Wann festlegen/Wer) · Raumform-Tabelle (6 Zeilen) · Zonen-Checkliste (6 Zeilen) · Feuchte-Karten (4) · Fehler-Karten (9) · Werkstatt-Einschub (Praxis + „Maß oder Standard?“) · Möbelplaner-CTA · FAQ (9). Tabellen-Zeilen-Labels dürfen umformuliert werden, die Reihenfolge der Themen bleibt. **`image`/`imageAlt`/`bgImage` NICHT ändern** (Orchestrator-Bildwahl, Alt beschreibt das tatsächliche Motiv, bilder.md).

**Links — Body-Budget 6, in diesem Paket genau diese 5 Ziele, sonst keine:**
| Ziel | Stelle | Anker |
|---|---|---|
| `/hauswirtschaftsraum/` | Schritt 6 (description) **und** Werkstatt-`body` | „Hauswirtschaftsraum nach Maß“, „HWR nach Maß“ (exact „Hauswirtschaftsraum einrichten“ höchstens 1×) |
| `/moebelplaner/` | Möbelplaner-`body` | „Möbelplaner“ (Vorbereitung, nie „selbst fertig planen“) |
| `/kontakt/` | FAQ „vorbereiten“ und/oder Möbelplaner-`body` | „kostenloses Aufmaß anfragen“ / „Beratung anfragen“ |
| extern | FAQ „Wohnfläche“ | [§ 2 Wohnflächenverordnung](https://www.gesetze-im-internet.de/woflv/__2.html) |
| extern | Feuchte-`intro` oder Karte „Luftfeuchte“ | [Verbraucherzentrale](https://www.verbraucherzentrale.de/wissen/energie/heizen-und-warmwasser/heizen-und-lueften-so-gehts-richtig-10426) |
- **Kein** Link auf `/referenzen/`, `/moebel-nach-mass/`, Küchen-/Einbauschrank-/Bad-Seiten oder ungebaute HWR-Kinder (Waschmaschinenschrank, Vorratsschrank, Besenschrank, HWR-Schrank). Der freie 6. Platz ist für den Waschmaschinenschrank reserviert, der im Folgepaket nachverdrahtet wird.
- Link-Marker-Format: `[Anker](/pfad/)` im Fließtext. AMK nur als Text ohne Link.

**FAQ (9 Slots):** Nur Restfragen, die Schritte, Tabellen und Karten NICHT schon beantworten. Gestrichen, weil die Tabellen/Karten sie tragen: Starkstrom-Trockner + Steckdosen/Stromkreise (Anschluss-Tabelle), Zeitpunkt im Bauablauf (Hero + Schritte), Fenster oder Lüftung + Wasserschaden (Feuchte-Karten), Bodenablauf (Anschluss-Tabelle), Heizung/Zähler frei halten (Zonen-Tabelle), Dachschräge/Nische (Raumform-Tabelle). Keine FAQ-Antwort wiederholt eine Tabellenzelle. Pillar-FAQ-Fragen (Definition, Waschküche, Größe, Anschlüsse, Lage, Verbau, kleiner HWR, Boden, Mülltrennung, HWR-Küche, Kosten, Einzelschränke, Dauer, PU) nicht umformulieren; „Wie viel Platz braucht ein HWR?“ beantwortet die METHODE (Datenblatt + Türaufschlag + Bewegungsfläche + Höhe), nicht „es gibt keine Mindestgröße“ als Kernaussage.

**Dichte-Obergrenzen** (`prop-laengen.mjs` gegen `kueche-planen.ts`, Vorlage-Max +10 %): Hero-`intro` ≤ 60 W · Schritt-`description` ≤ 38 W · Tabellen-/Karten-`intro` ≤ 40 W · Karten-`body` ≤ 30 W · Werkstatt- und Möbelplaner-`body` ≤ 65 W · FAQ-`answer` ≤ 55 W · Tabellenzellen ≤ 20 W. Gesamtziel ~1.800 W (Orientierung).

**H1/Meta:** H1 nennt „Hauswirtschaftsraum planen“, ohne „einrichten“ (gehört der Pillar). Zusätzlich am Ende einen Block `### meta` mit `metaTitle:` (≤ 60 Zeichen inkl. „| Fast Systemmöbel“ optional) und `metaDescription:` (≤ 155 Zeichen) liefern.

## 10a · Ergebnis Lauf 1 (2026-10-28) und Regeln für den Retry
**Lauf 1:** Engine `wf_e83f516a-b98`, Code-Gates grün (0 verbotene Claims, Meta 0, 9 FAQ, 2.200 W Engine-Zählung), **Chefredakteur pass=false** → kein Paket. Befunde: (1) BLOCKER: Schritt 7 „Boden, Licht und Lüftung abschließen … Zuletzt legen Sie Bodenbelag, Arbeitslicht und Lüftung fest“ widersprach dem Kernwinkel (Anschlüsse vor der Rohinstallation) und ging so ins HowTo-Schema. (2) Zirkel: Schritt 4 setzte Gerätestandplätze voraus, die erst Schritt 5 festlegte; Licht-Zeile „sobald die Lage der Arbeitsfläche klar ist“. (3) optional: Fehler-Karte 9 ohne Abhilfe, Dopplungen (Technik frei, Türaufschlag, raumhoch, Datenblatt), „als Familienbetrieb“ angeklebt.
**Draft für den Retry:** Alle Chef-Fixes sind eingearbeitet (Schritt 4 legt Gerätestandplatz + Faltfläche fest, Schritt 5 ordnet die übrigen Zonen, Schritt 7 = „Ausstattung wählen, Planung prüfen lassen“, Licht-Zeile „in Schritt 4, zusammen mit dem Gerätestandplatz“, Fehler 9 mit Rückstausicherung/Hebeanlage, Fehler 4 und 7 gekürzt, „als Familienbetrieb“ gestrichen). Komplette Integration als `research-cache/planen.draft.patch`, Verdikt und Vorgehen in `research-cache/planen.draft.md`.
**Sperr-Regeln für den Retry (Writer/QC/Chef):**
- Nach Schritt 4 wird nichts mehr „festgelegt“, was Leitungen, Abluft, Lichtauslässe oder Steckdosen betrifft. Schritt 7 bleibt ein Auswahl- und Prüfschritt. Jede Aussage zur Reihenfolge muss zu Hero, Schritt 4 und der Anschluss-Tabelle passen.
- Bestand erhalten: keine neuen FAQ, keine neuen Rechts- oder Normsätze (WoFlV-FAQ nicht erweitern), keine neue Substanz in Fehler-Karten. Die Seite darf nicht wachsen.
- Sobald `waschmaschinenschrank-nach-mass` gebaut wird, gehört die Waschturm-Tiefe dorthin (Cluster-Map): Die FAQ „Darf der Trockner auf die Waschmaschine?“ wird dann kurz und verlinkt den Waschmaschinenschrank (im Paket der späteren Seite).

## 10b · Lauf 2 (2026-10-29, W44) — Bestand erhalten, nichts ergänzen
**Ausgangslage:** `src/lib/content/planen.ts` ist mit der Lauf-1-Fassung (QC&Fix, wortgleich) **plus allen Chef-Fixes** gefüllt (siehe §10a). Das ist der **zu erhaltende Bestand**, kein Platzhalter. Auftrag an Writer, Humanizer und QC&Fix: den Bestand übernehmen und nur dort eingreifen, wo ein Satz gegen §8, §9b, §10 oder §10a verstößt. Jede Änderung ist gleich lang oder kürzer. Keine neuen Sätze, keine neuen Zahlen, Normen, Rechtsaussagen, Methoden oder Beispiele. Länge des Bestands: rund 2.030 Copy-Wörter, damit im Korridor; die Seite darf nicht wachsen.

**Gesperrte Stellen — wortgleich lassen, weder erweitern noch ergänzen** (abgenommen und belegt):
- FAQ „Ist ein Hauswirtschaftsraum Wohnfläche?“: Antwort samt Link auf § 2 Wohnflächenverordnung unverändert. Keinen weiteren Rechts- oder Geltungssatz anhängen.
- Feuchte-Karte „Luftfeuchte und Lüften“: 40 bis 60 Prozent und 70 bis 80 Prozent nur so, wie die Verbraucherzentrale sie nennt (§7b #2). Keine weiteren Werte.
- Feuchte-Karte „Schutz vor Wasserschäden“: Der Aquastop-Satz ist von der Verbraucherzentrale belegt (§7b Ersatzquelle). Nicht verallgemeinern, nicht erweitern.
- Normen nur als Name, so wie sie stehen: DIN 18015-2 (Strom-Zeile), DIN 18012 (Technik-Zeile), DIN 1986-100 und DIN EN 12056-4 (Fehler 9), DIN 277 (Wohnfläche-FAQ). Keine Normzahl, keine neue Norm.
- AMK-Ergonomie (Faltfläche „etwa 10 bis 15 cm unter dem Ellenbogen“) nur als Quellenname, kein Fast-Maß.
- Hero, Schritt 4, Schritt 7, Licht-Zeile und Lüftungs-Zeile: Reihenfolge-Logik ist abgenommen. Nach Schritt 4 wird nichts mehr „festgelegt“, was Leitungen, Abluft, Lichtauslässe oder Steckdosen betrifft (§10a).

**Konsistenz-Prüfung (Chef liest holistisch):** Jede Reihenfolge-Aussage muss zu Hero, Schritt 4, Schritt 7 und der Anschluss-Tabelle passen. Fast-Anteil bei Technik nur „wir stimmen die Möbel darauf ab / prüfen wir in der Beratung“, nie WIE Fast Luft führt, Geräte entkoppelt oder Leitungen verlegt.

**Geschwister in diesem Batch:** Der Waschmaschinenschrank (`/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/`) wird **nach** dieser Seite gemergt und ist für dieses Paket **nicht gebaut**. Deshalb kein Link auf ihn. Die FAQ „Darf der Trockner auf die Waschmaschine?“ bleibt in diesem Paket wie im Bestand; gekürzt und verlinkt wird sie im Paket des Waschmaschinenschranks (§10a).

## 10c · Ergebnis Lauf 2 (2026-10-29) und Regeln für den nächsten Versuch
**Lauf 2:** Engine `wf_3d465495-bc5`, Code-Gates grün (0 verbotene Claims, Meta 0, 9 FAQ, 2.244 W), **Chefredakteur pass=false** → kein Paket, 2. roter Versuch (14 Tage Sperre). Die Lauf-1-Blocker sind behoben, die gesperrten Stellen blieben wortgleich. Neuer Blocker im Bestand: Schritt 6 plante „Platz für Ausgussbecken“ erst nach der Leitungsfestlegung in Schritt 4. Anschluss-Tabelle und FAQ 5 verlangen die Becken-Entscheidung aber vor der Rohinstallation. Empfohlen: Der Hero nennt die Gerätestandplätze als Anker der Anschlüsse. Optional: Verlängerungen auf den Bestand zurücksetzen.
**Draft (neu):** `research-cache/planen.draft.patch` = Lauf-2-Copy plus Fix 1 bis 3. Laut Chef „nach Fix 1 live-fähig“.
**Sperr-Regeln zusätzlich zu §10a/§10b:**
- **Fixpunkt-Liste vollständig halten:** Alles, was Leitungen braucht (Geräte, Ausgussbecken, Faltfläche mit Steckdose, Lüftungsgerät), steht in Schritt 4 als Standplatz fest. Spätere Schritte nennen solche Elemente nur noch als Möbel (z. B. „Unterschrank fürs Ausgussbecken“), nie als neuen Platz.
- Der Hero nennt die Gerätestandplätze als Anker: „Bevor der Innenausbau beginnt, müssen die Gerätestandplätze und damit Wasser, Abwasser, Strom und Lüftung feststehen.“
- **Rebase-Pflicht:** Seit dem Waschmaschinenschrank-Paket (2026-10-29) gibt es auf master die Kontakt-FAQ „Was sollte ich für das Gespräch vorbereiten?“ (Link auf den Waschmaschinenschrank), einen Möbelplaner-FAQ-Satz (Waschmaschinenschrank), den Knoten im Sitemap/linking-rules und die Pillar-Karte. Der Ratgeber-Patch hängt seine Links dort an, statt die FAQ neu anzulegen. Mit diesem Paket kommen beidseitig dazu: Waschmaschinenschrank `col1Body` → hierher („Hauswirtschaftsraum planen“) und die gekürzte FAQ „Darf der Trockner auf die Waschmaschine?“ → Waschmaschinenschrank (Wortlaut in waschmaschinenschrank-nach-mass.kit.md §10b).

## 10d · Lauf 3 (2026-11-12, W46) — Bestand erhalten, nur live-störende Befunde
**Wissensstand:** §9a/§9b am 2026-11-12 erneut gegen FACTS.md + kundenwissen.md geprüft. Seit 2026-10-29 kam nur Ladenbau-Wissen hinzu (kundenwissen § Ladenbau), ohne HWR-Bezug. Die 8 Leerstellen aus §9b gelten unverändert. Keine `inbox/discovery/planen.md`.

**Ausgangslage:** Das Modul (`modulePath`, liegt bewusst außerhalb von `src/`) ist der **zu erhaltende Bestand**: Lauf-2-Copy plus Chef-Fix 1 bis 3 (§10c), dazu vom Orchestrator holistisch geprüft und an vier Stellen geglättet:
- Hero: „Erst dann folgen die Möbel nach Maß“ statt „kommen zuletzt“ (Schritt 7 kommt nach den Möbeln).
- Schritt 5: „Rund um die Fixpunkte aus Schritt 4 ordnen Sie die übrigen Zonen“ (Schritt 4 setzt jedes Gerät, auch Truhe und Akkusauger, dazu Ausgussbecken und Faltfläche; Schritt 5 setzt nichts mehr, was Leitungen braucht).
- Schritt 7: Kollisionen „von Türen, Geräten und Schränken … bevor etwas gefertigt ist“ (Leitungen liegen seit Schritt 4 fest und werden in Schritt 7 nicht mehr verschoben). Möbelplaner-Text: Anschlüsse „erfassen“ wir beim Aufmaß (nicht „prüfen“, sie liegen dann schon).
- FAQ Keller: Rückstauschutz „für tiefe Abläufe“, passend zur Raumform-Zeile „Im Keller“.

**Geschwister gebaut (ändert §10/§10b):** `/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/` ist seit 2026-10-29 live. Die FAQ „Darf der Trockner auf die Waschmaschine?“ ist im Bestand bereits auf den Wortlaut aus waschmaschinenschrank-nach-mass.kit.md §10b gekürzt und verlinkt den [Waschmaschinenschrank nach Maß](/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/). Das ist der Pflicht-Geschwister-Link und der 6. Body-Link (Budget 6 voll: Pillar, Möbelplaner, Kontakt, Waschmaschinenschrank, § 2 WoFlV, Verbraucherzentrale). **Keinen weiteren Link hinzufügen.** Die Waschturm-Tiefe (Bedienhöhe im Schrank, Fach darüber) gehört der Produktseite und kommt hier nicht zurück. Den Rücklink von der Produktseite setzt der Orchestrator.

**Auftrag an Writer, Humanizer und QC&Fix:** Bestand übernehmen. Eingreifen nur, wo ein Satz gegen §8, §9b, §10, §10a, §10c oder die Reihenfolge-Logik verstößt. Jede Änderung ist gleich lang oder kürzer. Keine neuen Sätze, keine neuen Zahlen, Normen, Rechtsaussagen, Methoden, Beispiele oder FAQ. Die gesperrten Stellen aus §10b gelten unverändert wortgleich (WoFlV-FAQ, Luftfeuchte-Karte, Aquastop-Karte, Normen nur als Name, AMK-Satz, Hero/Schritt 4/Schritt 7/Licht-Zeile/Lüftungs-Zeile), dazu jetzt die gekürzte Waschturm-FAQ samt Link.

**Längenmaß:** Maßgeblich sind ausschließlich die `prop-laengen`-Grenzen aus §10 (Vorlage kueche-planen +10 %). Der Korridor in §1 ist Orientierung, kein Abnahmekriterium; der Bestand liegt bei rund 2.200 Engine-Wörtern und darf nicht wachsen.

**Nicht Teil der Copy-Abnahme:** Bildpfade, `imageAlt`/`bgImage` (Bildwahl macht der Orchestrator nach bilder.md; der Bild-Befund aus Lauf 2 ist bekannt), Metadata-Umsetzung in page.tsx, Rücklinks aus anderen Seiten, JSON-LD-Daten.

**Für den Chefredakteur:** pass=false nur für Befunde, die live stören (falscher Rat, Widerspruch zwischen Abschnitten, Faktenverstoß gegen §8/§9b, toter oder verbotener Link). Stil- und Dichte-Hinweise als „nicht blockierend“ führen. Reihenfolge-Prüfung: Alles mit Leitungen steht in Schritt 4 fest; Schritt 5 bis 7 nennen solche Elemente nur noch als Möbel oder Auswahl.
