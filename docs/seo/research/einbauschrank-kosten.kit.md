# Research-Kit: Einbauschrank Kosten (/einbauschraenke-nach-mass/einbauschrank-kosten/)

Stand 2026-10-27 · Archetyp ratgeber, Untertyp Kosten (CTA weich-plus) · Cluster `einbauschraenke` · Node-Typ `ratgeber-pillar`, parent `/einbauschraenke-nach-mass/`

## 1 · Wortzahl-Korridor → **1.600–2.100 W · Ziel ~1.800 W** (SERP-Median 1.500) — normiert 2026-10-27 (Korridor-Politik)
**Korridor-Politik (Ben, 2026-07-15), vom Research-Lauf W44 normiert:** Ziel ~1.800 W, Korridor 1.600–2.100. Die Playbook-Defaults gelten als überschrieben. Kurze, dichte Chunks mit hohem Mehrwert statt Wortmasse.
- **Kein Anheben:** Der Engine-Median von 1.500 W liegt unter dem Boden 1.600, die Regel „Boden nie unter den Median“ ist also eingehalten. Die Spitzenwerte (sklopko 3.000, magubo 2.400) sind Lexikon- bzw. Preislisten-Formate mit Euro-Tabellen, die für Fast gesperrt sind. Sie sind kein Maßstab für die Tiefe.
- **Kein Produkt-Deckel:** Anders als die Produkt-Kinder ist das ein Ratgeber mit 4 Tabellen, Laufmeter-H2 mit Prüfliste, Fehler-Block, Spar-Hebeln, Praxis-Einschub und ~10 FAQ. In dichter Form sind das rund 1.700–1.900 W. Die Engine schätzt 1.600–2.200; **über 2.100 W wird gekürzt**, nicht verdichtet aufgefüllt (prop-laengen-Gate, Korpus-Dedup gegen `klKosten`, `garKosten`, `dachPreisFaktoren`, `einbauWarum2`).
- **Gilt auch unter Plan B (§9c):** Wenn die Euro-Werte aus dem Planer wegen des Code-Gates entfallen, ändert sich die Länge kaum. Die Tiefe kommt aus Preislogik und Tabellen, nicht aus Zahlen.

**Verhältnis zu DEPTH.md:** Der Korridor ist eine Planungsgröße gegen Aufblähen und Dünnheit, **kein blockierendes Gate** (DEPTH.md, AGENT-WORKFLOW Phase 1). Fehlt Substanz, benennt QC das fehlende Modul.
**Writer-Hinweis (Zähl-Bias ~8 %):** Gegen das **ZIEL ~1.800 W** planen, NICHT gegen den Boden 1.600. Zähl-Werkzeuge liegen ~8 % auseinander, wer auf 1.600 schreibt, landet leicht darunter. Länge kommt aus Tabellen und FAQ, jede Tabellenzelle kurz, jede FAQ 2–4 Sätze.

**Gewinnbarkeit (Portalanteil):** `signale.json` (Stand 2026-10-19) führt den Portalanteil der Top-10 als **unbelegt** (SV 210/Mon, CPC 2,94 €, Wettbewerbsindex 100, keine GSC-Impressionen). Die Engine-SERP zeigt überwiegend Tischler-/Schreiner-Ratgeber und ein Kostenportal, also eine für einen Meisterbetrieb grundsätzlich gewinnbare SERP. Google.de war nicht abrufbar. Misst der Montagslauf für dieses Keyword ≥ 80 %, die Seite vor dem Authoring neu entscheiden.

### SERP-Tiefe (Recherchebeleg der Engine, Orientierung — kein Gate)
- **Top-8, davon 7 gemessen:** tmf 900 · magubo 2.400 · geling 875 · baucheck 1.500 · schuster 1.500 · clean-invoice 800 · sklopko 3.000. meister-job lieferte 403, ist also nicht gemessen. Die Spanne reicht von 800 bis 3.000 W.
- **Vorbehalt zur Methode:** Google.de war nicht abrufbar, die Rangfolge ist deshalb nicht geprüft. Ein Featured Snippet und PAA wurden nicht beobachtet; die Fragen sind aus den FAQ der Treffer abgeleitet. Darum steht im Text keine Behauptung über die SERP.
- **Muster der SERP:** Die Mehrheit sind Tischler- und Schreiner-Ratgeber. Sie arbeiten mit Preistabellen je Schranktyp (€/lfm, Pauschalen), Beispielrechnungen mit Maßen, Kostenfaktoren, einem Vergleich Möbelhaus/Konfigurator/Tischler und 4–8 FAQ. Kostenportal (baucheck) und Lexikon (7 Tabellen) sind Ausreißer.
- **Folge für uns:** Das Leitformat der SERP (Euro-Tabellen) ist für Fast gesperrt (§8). Die Tiefe entsteht stattdessen aus:
  - der erklärten Preislogik (was in einem Laufmeterpreis steckt),
  - 4 Tabellen ohne fremde Zahlen,
  - einem belegten Wert aus dem Planer,
  - Angebots-Check, Spar-Hebeln und Praxis-Einschub,
  - 10 FAQ.
  
  Daraus ergeben sich von selbst etwa 1.600–2.200 W. Die Länge ist kein Ziel.
- **Nachfrage:** signale.json meldet SV 210, CPC 2,94 €, Wettbewerbsindex 100. GSC-Daten gibt es nicht, weil die Seite neu ist. Die Schätzung der Keyword-Map (1.200–2.000) ist historisch und zu hoch.
- **Keyword-Ownership:** Die Seite übernimmt die Dublette `massmoebel-kosten-schrank` (pipeline.yml 2026-10-27 »streichen«; 301 `/ratgeber/massmoebel-kosten-schrank/` → diese URL, redirects.md Z. 25). Damit gehören alle Sekundär-Keywords beider Map-Zeilen hierher: Einbauschrank nach Maß Preis · Einbauschrank Kosten Schreiner · Einbauschrank Preis/Kosten pro Laufmeter · Maßschrank Kosten/was kostet · Schrank nach Maß Preis · Kleiderschrank nach Maß Preis.

## 2 · Intent & Job-to-be-done (was will der Nutzer sehen/tun)
- **Intent:** gemischt. Die Map sagt I, die WDF-Analyse sagt commercial. Der Nutzer ist kurz vor der Anfrage. Deshalb Ratgeber-Playbook mit CTA weich-plus.
- **JTBD:** Der Nutzer will eine realistische Größenordnung bekommen und verstehen, was den Preis treibt und was im Preis enthalten ist. Danach will er entscheiden, ob sich Maß gegenüber Standard lohnt, und wissen, wie er zu einem verbindlichen Preis kommt.
- **Was er zuerst sehen will:** eine Zahl und was in ihr steckt. Die ehrliche Antwort: Es gibt keinen Pauschal- und keinen Laufmeterpreis. Es gibt ein belegtes Planer-Beispiel, die Kostenblöcke und den Weg zum verbindlichen Preis über das kostenlose Aufmaß.
- **Bausteine der Direktantwort (40–60 W):**
  1. Kein Pauschalpreis, jeder Schrank ist ein Unikat.
  2. Der Preis ergibt sich aus Größe/Korpus, Fronten und Material, Türsystem, Innenausstattung und Einbausituation; Lieferung und Montage kommen hinzu.
  3. Orientierung aus dem Möbelplaner: Ein rund 1,80 m breiter Schrank unter der Dachschräge in Weiß liegt bei etwa 1.400–2.000 € Möbelpreis inkl. MwSt., zzgl. Lieferung und Montage (Stand September 2026).
  4. Verbindlich wird der Preis nach dem kostenlosen Aufmaß vor Ort.
  - **⛔ Baustein 3 und alle Euro-Werte in §3 (Zeilen 1, 2, 4) und §5 FAQ 6 gelten nur unter Plan A.** Standard ist Plan B ohne vierstellige Euro-Zahl (Code-Gate-Konflikt, siehe §9c Punkt 1).
- **H1:** »Was kostet ein Einbauschrank nach Maß?« Der Title beginnt mit »Einbauschrank Kosten: …«. Die Meta endet nicht mit dem Geo-Limiter »im Umkreis von 200 km« (dämpft die CTR, 3× belegt).
- **Ton:** lehrend und ehrlich. Offen sagen, wann sich Maß nicht lohnt. Die Fast-Stimme tritt nur im Praxis-Einschub und im CTA hervor.
- **Schema:** Article + FAQPage (alle sichtbaren FAQ) + BreadcrumbList (Home › Möbel nach Maß › Einbauschränke nach Maß › Einbauschrank Kosten). HowTo nur, wenn der Ablauf-Block 1:1 als Schritte übernommen wird. Kein Product/Offer/Service/AggregateRating, kein Preis und keine priceRange im Schema.

## 3 · Nötige Antworten nach Leseraufgabe; Vergleichsseiten nur als interne Hinweise

| # | Leseraufgabe | Was beantwortet sein muss | Modul | Beleglage |
|---|---|---|---|---|
| 1 | Budget grob einschätzen | Kein Pauschalpreis, dazu ein Planer-Beispiel mit allen Bedingungen (Breite, Weiß/Platinweiss, Türen ohne Griff, inkl. MwSt., zzgl. Lieferung und Montage, Stand 09/2026) | Direktantwort, Tabelle B | FACTS, Planer-Beleg 17.09.2026 |
| 2 | Laufmeterpreise aus dem Netz einordnen | Eigene H2 »Was kostet ein Einbauschrank pro Laufmeter?«. Erster Satz: Ein seriöser Pauschalpreis pro Meter existiert nicht, weil Höhe, Tiefe, Türsystem, Innenleben, Front, MwSt., Lieferung, Montage und Aufmaß je Angebot anders drinstecken. Dazu eine **Prüfliste** »Was ein Laufmeterpreis enthalten muss, um vergleichbar zu sein«. Im Fließtext steht das Planer-Beispiel mit Link zum Dachschrägen-Geschwister. | H2 + Prüfliste | eigene Logik, keine Fremdzahlen |
| 3 | Preistreiber verstehen | **Tabelle A, Kostenblöcke.** Spalten: Kostenblock · Was ihn treibt · Worauf Sie im Angebot achten · Wo Sie steuern können. Zeilen: Größe & Korpus (Breite, raumhoch, Tiefe) · Fronten & Oberfläche (Dekor, Lack, Furnier, Massivholz, Glas/Spiegel, Griff/grifflos) · Türsystem & Beschläge (Dreh-, Schiebe-/Schwebetür, Klappen) · Innenausstattung (Fachboden, Kleiderstange, Schubkasten/Vollauszug, Hosenauszug, Kleiderlift, LED) · Einbausituation (gerade Wand, Schräge, Treppe, schiefe Altbauwand, Steckdosen/Sockelleisten/Fenster/Balken) · Lieferung & Montage | Tabelle A | Sprache des Aufwands, keine Preisrelationen |
| 4 | Eigene Situation zuordnen | **Tabelle B, Einbausituationen** mit 4 Zeilen und je einem Link. Gerade Wand im Schlafzimmer → Kleiderschrank. Flur → Garderobe. Dachschräge/Kniestock → **einzige Zeile mit Zahl** (1,80 m ≈ 1.400–2.000 € je nach Höhe der Schräge; 2,80 m ≈ 3.000 €; Möbelpreis inkl. MwSt., zzgl. Lieferung und Montage). Unter der Treppe → Treppenschrank. Spalten: Situation · Was den Aufwand bestimmt · Preisorientierung (sonst »individuell nach Aufmaß«) · Mehr dazu | Tabelle B | 1 Zahl aus FACTS |
| 5 | Wissen, was im Preis steckt | **Tabelle C, Möbelplaner-Schätzung vs. Angebot nach Aufmaß.** Posten: Möbel · MwSt. · Lieferung · Montage · Aufmaß · Anpassung an Schräge/schiefe Wand. Planer: Möbelpreis inkl. MwSt., Lieferung und Montage zzgl., Maße selbst eingegeben. Angebot: auf das Aufmaß gerechnet; Montage macht das eigene Team; welche Posten einzeln ausgewiesen sind, steht im Angebot | Tabelle C | FACTS; Ausweis der Posten = Leerstelle |
| 6 | Alternativen abwägen | **Tabelle D, Kostenposten-Vergleich:** Standardschrank (Möbelhaus/IKEA PAX) · Online-Konfigurator mit Versand · Tischler vor Ort. Zeilen: Passform (Rastermaß + Passblenden / auf eigene Messung / auf Aufmaß, Wand zu Wand) · Aufmaß (selbst / selbst / kostenlos vor Ort) · Planung · Montage (»je nach Anbieter« bei Fremden) · Anpassung an Schräge/Altbau · eigene Zeit und eigenes Werkzeug | Tabelle D | qualitativ, keine Fremd-Konditionen |
| 7 | Angebote prüfen | Block **»Typische Fehler beim Preisvergleich«** (MUSS), 3 Fehler plus Angebots-Check: (a) Angebote mit unterschiedlichem Leistungsumfang vergleichen → Check-Fragen: Aufmaß enthalten? Lieferung und Montage? brutto oder netto? Front, Material, Kante? Anzahl Auszüge? Anpassung an Wand/Schräge? Kostenanschlag oder verbindlicher Preis? (b) Altbau-Wände und Anschlüsse unterschätzen (zeigen sich erst beim Aufmaß; ein Standardschrank braucht dann Passblenden). (c) Innenleben erst nach dem Kauf planen (Hängelängen, Nachrüsten) | Fehler-Block | § 649 BGB nur als Text |
| 8 | Sparen | **5 Spar-Hebel:** (1) Varianten im Möbelplaner vergleichen, der Preis wird live angezeigt. (2) Innenleben nach Nutzung priorisieren: Auszüge dort, wo täglich gegriffen wird, Fachböden für Kisten. (3) Sonderoberflächen gezielt einsetzen, denn jede zusätzliche Oberfläche ist ein eigener Kostenblock. (4) Möbel bündeln: ein Aufmaß, eine Montage, ein Ansprechpartner (Küche + Einbauschrank aus einer Hand ist freigegeben, nur als Text, kein Küchen-Link). (5) Nicht an Kante und Verarbeitung sparen, Verweis auf den Praxis-Einschub | Spar-Block | kundenwissen, FACTS |
| 9 | Vertrauen | **Praxis-Einschub »Aus der Werkstatt in Espelkamp«:** Was im Preis steckt, das man nicht sieht. Fertigung auf Homag-Technik, 1.000 m². PU-Kantenverleimung (fugenlos, feuchtigkeitsbeständig). 3D-Planung vor der Fertigung, damit Anpassungen nicht erst bei der Montage auffallen. Eigenes Montageteam. Referenz Espelkamp-Mittwald: raumhoch, versteckte Fugen, Massivholzgriffe, integrierte Beleuchtung, »40 % mehr Stauraum«, **nur für dieses Projekt** | Praxis | FACTS (2026-10-04), ueber-uns.ts Z. 166–170 |
| 10 | Nächster Schritt | **»Wann aus der Schätzung ein Preis wird«**, 5 Schritte: Planer-Skizze (optional) → Gespräch am Telefon oder vor Ort → kostenloses Aufmaß → 3D-Planung + individuelles Angebot → Freigabe, Fertigung in Espelkamp, Montage zum vereinbarten Termin. Kurz halten, weil alle Geschwister schon Prozessblöcke haben (Dedup). Danach der CTA | Ablauf + CTA | FACTS Prozess |

**Ein Ort je Fakt** (das Chef-Gate fällt durch, wenn FAQ die Tabellen wiederholen):
- Die Planer-Zahl steht nur in der Direktantwort, im Fließtext der Laufmeter-H2 und in Tabelle B, nicht in den FAQ.
- Was enthalten ist, steht nur in Tabelle C.
- Der Vergleich mit Standard/IKEA steht nur in Tabelle D.
- § 35a steht nur in FAQ 6.
- Die Mittwald-Referenz steht nur im Praxis-Einschub.

**Vergleichsseiten (nur intern, nicht zitieren):**
- tmf: Preistabellen für 10 Typen und 5 Projekte, Vergleich von 3 Anbieterarten.
- magubo: 3 Beispielrechnungen, Zubehörpreise, Angebots-Check, Finanzierung.
- geling: FAQ inkl. IKEA PAX.
- schuster: Checkliste für den Beratungstermin.
- sklopko: Selbstbau vs. Schreiner, häufige Fehler.

Übernommen werden nur Formate (Check, Vergleich, Fehler), nie Zahlen oder Formulierungen.

## 4 · Begriffe und Entitäten als Recherchehinweise; keine Pflichtliste zum Abhaken
- **Kernbegriffe** (natürlich in H2 und Erstsätzen): Einbauschrank Kosten · Einbauschrank nach Maß Preis · Laufmeter/laufender Meter · Kostenfaktoren/Preistreiber · Maßanfertigung · Tischler (»Schreiner« einmal als Synonym) · Aufmaß · Montage · Lieferung · Dachschräge · Schiebe-/Schwebetüren · Nische · Innenausstattung · Fronten · Möbelplaner · Angebot · inkl. MwSt./brutto.
- **Nur allgemein erklären, nicht als Fast-Spezifikation:**
  - Spanplatte, MDF, Melamin/Dekor, Lack, Furnier, Massivholz als Gattungen von Kostentreibern. Keine Holzart (Eiche, Nussbaum) als Fast-Angebot.
  - Vollauszug, Soft-Close, Kleiderlift ohne Hersteller.
  - Kante: nur die PU-Kante als Fast-Merkmal, keinen Vergleich mit ABS.
  - Stundensatz nur als Frage im Angebots-Check, ohne Zahl.
  - Kostenanschlag (§ 649 BGB) und Arbeitskosten/Handwerkerleistung (§ 35a EStG).
- **Entitäten:** Fast Systemmöbel · Espelkamp · OWL (Minden, Lübbecke, Osnabrück, Bielefeld) · Meisterbetrieb (ohne Jahr) · PU-Kantenverleimung · 3D-Planung · Homag-Technik · eigenes Montageteam · Möbelplaner · IKEA PAX, Möbelhaus und Online-Konfigurator nur als Gattung bzw. Vergleichskategorie (kein Link).
- **Bewusst weglassen (gegen die WDF-Liste):**
  - Wettbewerbernamen (schrankwerk.de, meine-moebelmanufaktur.de, deinschrank.de, schrankplaner.de, Hornbach), weil Konkurrenz weder genannt noch verlinkt wird.
  - Handwerkskammer/Meisterpflicht, weil die HWK-Mitgliedschaft nicht belegt ist und das dem Leser nichts bringt.
  - Lebensdauer oder Wertbeständigkeit in Jahren.
  - Altmöbelentsorgung und Anfahrt als Leistung (unbelegt; nur als Check-Frage).

## 5 · Offene Nutzerfragen, soweit sie nach dem Haupttext noch eine Antwort brauchen
10 FAQ. Jede Antwort hat 2–4 Sätze und einen eigenständigen ersten Satz.

1. **Was kostet ein Einbauschrank mit Schiebetüren?** Keine Zahl. Den Aufwand treiben Laufsystem, große Türflügel, Front (Spiegel/Glas) und die Breite, weil sie die Zahl der Türen bestimmt. Vorteil: Vor dem Schrank wird kein Schwenkbereich gebraucht. Der Planer zeigt, wie sich die Wahl auf den Preis auswirkt; verbindlich wird es nach dem Aufmaß. Keine Relation zur Drehtür.
2. **Was kostet ein Einbauschrank in einer Nische?** Das Bestandsmaß ist selten im Lot, die Anpassung von Wand zu Wand bestimmt den Aufwand. Die Fläche ist oft kleiner. Preis individuell nach Aufmaß.
3. **Was kostet eine begehbare Ankleide nach Maß?** Hier wird der Raum selbst zum Schrank. Die Kosten wachsen mit der Wandlänge, dem Innenleben, Beleuchtung und Spiegel. Offene Bereiche haben weniger Frontfläche. Keine Zahl.
4. **Wann lohnt sich ein Einbauschrank nach Maß nicht?** Ehrliche Antwort: bei gerader Wand, wenn ein Rastermaß passt, bei einer Übergangslösung oder wenn der Preis allein entscheidet. Lohnend ist Maß bei Schräge, Nische, Treppe, raumhohem Schrank oder schiefen Wänden.
5. **Lohnt es sich, einen Einbauschrank selbst zu bauen?** Kosten entstehen durch Material, Zuschnitt, Kantenbearbeitung, Beschläge, Werkzeug und Zeit. Selbstbau lohnt bei gerader Wand und einfachen Ansprüchen; Winkel und Schrägen sind schwierig. Wortwahl anders als in `dachVergleich` und `suWarum2`.
6. **Kann ich die Kosten für den Einbau steuerlich absetzen?** Nach § 35a EStG mindern Handwerkerleistungen im eigenen Haushalt (Renovierung/Erhaltung/Modernisierung) die Einkommensteuer um 20 % der Arbeitskosten, höchstens um 1.200 € im Jahr. Materialkosten zählen nicht. Voraussetzung sind eine Rechnung und Zahlung auf das Konto des Betriebs. Den Einzelfall klärt die Steuerberatung. (Link §7b)
7. **Kann ich einen Einbauschrank nach Maß finanzieren?** Im Privatbereich ist eine Finanzierung möglich, die Konditionen klärt das Gespräch. Kein Zins, keine Rate, kein Partner.
8. **Wie lange dauert es von der Anfrage bis zur Montage?** Keine Wochenzahl. Den Termin gibt es nach Aufmaß und Freigabe der 3D-Planung.
9. **Was sollte ich zum ersten Gespräch vorbereiten?** Grobe Breite und Höhe, Fotos der Wand mit Steckdosen, Schräge und Fenster, eine Liste mit dem Inhalt (Hängelängen, Schuhe, Wäsche), das gewünschte Türsystem und einen Budgetrahmen, optional eine Planer-Skizze. Ein genaues Maß ist nicht nötig, das liefert das kostenlose Aufmaß.
10. **Montiert Fast auch außerhalb von Ostwestfalen?** Aufmaß und Montage durch das eigene Team gibt es im Umkreis von rund 200 km um Espelkamp, geliefert wird bundesweit. Keine Aussage zu den Lieferkosten.

**Gestrichen, weil der Haupttext sie trägt:** pro Laufmeter (H2) · Dachschräge (Tabelle B + FAQ auf der Schwesterseite) · Montage enthalten / Aufmaß kostenlos / Planer verbindlich / brutto-netto (Tabelle C) · Tischler vs. IKEA PAX (Tabelle D) · Spartipps (Spar-Block) · Angebote vergleichen (Fehler-Block) · Warum kein Festpreis (Direktantwort).

## 6 · Gaps & unser Winkel (wo Fast überholt) + Negativ-Abgrenzung lt. Playbook

| Lücke in der SERP | Fast-Winkel | Beleg |
|---|---|---|
| Spannen von 600 bis 3.000 €/lfm ohne Erklärung | Erklären, warum Laufmeterpreise nicht vergleichbar sind, plus Prüfliste. Transparenz ohne erfundene Zahl | eigene Logik |
| Unklar, was netto/brutto, Montage, Aufmaß ist | Tabelle C: Planer-Preis inkl. MwSt., zzgl. Lieferung und Montage. Aufmaß kostenlos | FACTS |
| Kaum echte Beispiele | Ein echter, datierter Planer-Wert mit vollständiger Konfiguration statt fremder Musterrechnungen | FACTS 17.09. |
| Kante und Fertigung als Faktor fehlen | PU-Kantenverleimung, Homag, 1.000 m², 3D-Planung | FACTS |
| Kein Gesamtkosten-Vergleich inkl. Montage | Tabelle D nach Kostenposten statt nach Preis | qualitativ |
| Aufmaß-Kosten unklar | Im Montagegebiet kostenlos vor Ort. Keine Fremd-Konditionen nennen | FACTS |
| Lieferzeit und Angebotsweg fehlen | »Wann aus der Schätzung ein Preis wird«: Termin nach Aufmaß und Freigabe | kundenwissen |
| Sparhebel sind dünn | Planer mit Live-Preis, Innenleben priorisieren, Möbel bündeln, § 35a | FACTS, kundenwissen, EStG |
| Regionaler Bezug fehlt | Aufmaß und Montage vor Ort in OWL durch das eigene Team. Keine regionalen Preise | FACTS |

**Negativ-Abgrenzung:**
- **Gegenüber dem Pillar:** keine Verkaufsseite. Kein Service-Schema, kein USP-Pitch als Hauptmotiv, kein starker CTA, keine Kartenübersicht aller Schranktypen.
- **Gegenüber den Produkten:** keine Beratung zu Innenleben und Design (→ kleiderschrank), keine Schiebetür-Mechanik, keine Dachschrägen-Konstruktion und kein Kniestock (→ dachschraege), keine Flurlösungen (→ garderobe), keine Treppen-Konstruktion (→ treppe), keine Maß-Tabelle (Kleiderstangenhöhen und Tiefen stehen schon auf kleiderschrank).
- **Dedup-Pflicht:** Nicht nachbauen dürfen:
  - die Kostenfaktor-Tabellen der Geschwister: `klKosten` (5 Zeilen), `garKosten` (4), `dachPreisFaktoren` (6 Karten),
  - den Pillar-Absatz `einbauWarum2` und die Pillar-FAQ »Was kostet ein Einbauschrank nach Maß?«,
  - die Kosten-FAQ von treppe,
  - die Tabelle Selbstbau/IKEA/Tischler (`dachVergleich`, `suWarum2`).
  
  Eigene Achse: Tabelle A mit den Spalten »Worauf im Angebot achten« und »Wo Sie steuern können«, Tabelle B nach Einbausituation, Tabelle D nach Kostenposten.
- **Gegenüber der Referenzseite:** Mittwald steht nur als kurzer Erfahrungsbeleg auf der Seite.
- **Cluster-Map veraltet:** Der Satz »Kannibalisierung mit dem Ratgeber-Hub `massmoebel-kosten-schrank` … beide verlinken« gilt seit 2026-10-27 nicht mehr (gestrichen, 301 auf diese Seite). Im selben PR anpassen.

## 7 · Interne Links (rein/raus, Anker) lt. internal-linking.md — PFLICHT bei Produkt/Ratgeber/Artikel: ≥ 1 gebautes Geschwister (gleicher Cluster) im Fließtext verlinken UND in ≥ 1 indexierter Geschwister-Seite einen Rücklink einplanen (Quelle + Anker nennen; Budget der Quelle prüfen, bei vollem Budget eine Karte/einen schwächeren Link tauschen)

**Regeln für `ratgeber-pillar`:** Budget 8 Body-Links (verschiedene interne Ziele + externe Links), minInlineLinks 3, MUSS parent + `/moebelplaner/`, SOLL `/kontakt/`, MIN_INBOUND 3. Kein Cross-Silo: kein `/kuechen-nach-mass/*` (für diese Seite gibt es keine Brücke), kein `/referenzen/` (Budget).

**Ausgehend (7 intern + 1 extern = 8/8):**

| Ziel | Rolle | Anker | Platz |
|---|---|---|---|
| `/einbauschraenke-nach-mass/` | MUSS parent (Breadcrumb + 1 im Kontext) | »Einbauschrank vom Tischler« (partial) | Intro von Tabelle D oder CTA |
| `/einbauschraenke-nach-mass/einbauschrank-dachschraege/` | Geschwister **im Fließtext** | »Schrank unter der Dachschräge« (partial) | Fließtext der Laufmeter-H2 beim Planer-Beispiel, außerdem Zeile Dachschräge in Tabelle B (gleiches Ziel, zählt einmal) |
| `/einbauschraenke-nach-mass/kleiderschrank-nach-mass/` | Geschwister | »maßgefertigter Kleiderschrank« | Tabelle B, gerade Wand |
| `/einbauschraenke-nach-mass/garderobe-nach-mass/` | Geschwister | »Garderobenschrank nach Maß« | Tabelle B, Flur |
| `/einbauschraenke-nach-mass/schrank-unter-treppe/` | Geschwister | »Treppenschrank nach Maß« | Tabelle B, Treppe |
| `/moebelplaner/` | MUSS | »Möbelplaner« (exact) | Spar-Hebel 1 |
| `/kontakt/` | SOLL | »Kostenlose Beratung anfragen« / »Angebot anfordern« | Weicher Plus-CTA am Ende |
| extern § 35a EStG | Beleg | »§ 35a EStG« | FAQ 6 |

SpecTable, SegmentCards und FaqSection rendern `[Anker](/ziel/)` korrekt. Mindestens 3 Marker stehen im Modul, davon mindestens 1 im Fließtext.

**Eingehend (MIN_INBOUND 3; Budgets gezählt als verschiedene Ziele ohne Breadcrumb, inkl. Karten in page.tsx):**

| Quelle | Feld | Anker | Budget |
|---|---|---|---|
| `/einbauschraenke-nach-mass/` | `einbauWarum2.paragraph` (content/einbauschraenke-nach-mass.ts ~Z. 145, H2 »Was ein Einbauschrank nach Maß kostet«); Satz anhängen | »Ratgeber zu den Einbauschrank-Kosten« | 8 → 9/10. **Pflicht im selben PR**, weil MUSS `own-ratgeber` sonst einen Audit-Fehler auslöst |
| `/einbauschraenke-nach-mass/einbauschrank-dachschraege/` (Rücklink Geschwister) | `dachPreisFaktoren.intro` (~Z. 268) | »Kosten für einen Einbauschrank« | 6 → 7/7 (danach voll, kein Tausch nötig) |
| `/einbauschraenke-nach-mass/kleiderschrank-nach-mass/` | `klKosten.intro` (~Z. 231) | »Einbauschrank Kosten« (exact) | 6 → 7/7 (danach voll) |
| optional `/garderobe-nach-mass/` oder `/schrank-unter-treppe/` | `garKosten.intro` bzw. FAQ »Was kostet ein Schrank unter der Treppe?« | »was ein Einbauschrank nach Maß kostet« | je 6 → 7/7 |

**Registrierung im selben PR:**
- Node in `PAGES`: `{ slug: "/einbauschraenke-nach-mass/einbauschrank-kosten/", type: "ratgeber-pillar", silo: "einbauschraenke", audience: "privat", parent: "/einbauschraenke-nach-mass/", built: true, contentModule: "einbauschrank-kosten" }`
- `ANCHORS`: exact »Einbauschrank Kosten« · partial »Kosten für einen Einbauschrank«, »was ein Einbauschrank nach Maß kostet«, »Einbauschrank-Preis« · brand »Fast Systemmöbel Kostenratgeber Einbauschrank« · descriptive »Ratgeber zu den Einbauschrank-Kosten«, »wovon der Preis eines Einbauschranks abhängt«
- `sitemap.ts`
- Liste »Built today« in internal-linking.md
- Cluster-Map-Absatz (§6)

**Neue Backlog-Zeilen:**
- Diese Seite → `nischenschrank-nach-mass`, `begehbarer-kleiderschrank-nach-mass`, `kleiderschrank-schiebetuer-nach-mass`, sobald gebaut (Platz: FAQ 1–3). Dann ein Ziel tauschen, weil das Budget voll ist.
- `/ablauf-massanfertigung/` und `/faq/` (SOLL).

**Reihenfolge:** Shared-Edits (linking-rules, Rücklinks, sitemap) erst nach dem Chef-Verdikt, Commits strikt nacheinander. Am Ende `npm run audit:links` mit 0 Fehlern.

## 7b · Belege (Outbound): Norm-/Vorschrift-/Messwert-Angaben mit max. 2 Links je Seite NUR auf Quellen der EXTERNAL_SOURCE_ALLOWLIST (src/lib/seo/linking-rules.ts: gesetze-im-internet.de, baua.de, dguv.de, eur-lex.europa.eu, rki.de, bundesgesundheitsministerium.de, amk.de, amk-ratgeber-kueche.de, verbraucherzentrale.de, nullbarriere.de); Ankertext = Name der Quelle; nie Hersteller/Wettbewerber; nichts erfinden; kostenpflichtige Normen (DIN/EN/ISO) als Text ohne Link
1. **§ 35a EStG** → `https://www.gesetze-im-internet.de/estg/__35a.html`. Anker »§ 35a EStG«, steht in FAQ 6. Am 2026-10-27 geprüft:
   - Abs. 3: 20 % der Aufwendungen, höchstens 1.200 €, für Renovierung, Erhaltung und Modernisierung.
   - Abs. 4: Haushalt in EU/EWR.
   - Abs. 5: nur Arbeitskosten, keine Materialkosten; Rechnung und Zahlung auf das Konto des Leistungserbringers.
   
   Nicht behaupten, dass ein Einbauschrank-Einbau sicher begünstigt ist oder dass Fast Arbeitskosten getrennt ausweist (§9).
2. **§ 649 BGB (Kostenanschlag)**, `https://www.gesetze-im-internet.de/bgb/__649.html`, am 2026-10-27 geprüft. Bei einer wesentlichen Überschreitung eines unverbindlichen Kostenanschlags kann der Besteller kündigen, und der Unternehmer muss die Überschreitung unverzüglich anzeigen. **Nur als Text ohne Link** im Angebots-Check, weil das Body-Budget mit 7 intern + 1 extern voll ist. Als Link nur, wenn ein Geschwister-Link entfällt.
- Weitere Belege sind nicht nötig. »inkl. MwSt.« stammt aus dem Planer-Beleg, ein Link zum Steuersatz ist unnötig. Keine DIN, keine Verbraucherzentrale-Seite ohne geprüfte konkrete URL.

## 8 · Do-NOT-claim-Liste (❌ aus FACTS.md, konkret für dieses Thema)
- **Euro-Werte:** ⛔ Standard ist **Plan B ohne vierstellige Euro-Zahl** (Code-Gate, §9c Punkt 1). Nur unter Plan A gilt:
  - Erlaubt ist nur der Planer-Beleg: 1,80 m Dachschräge ≈ 1.400–2.000 € je nach Höhe der Schräge, 2,80 m ≈ 3.000 €. Immer mit »Schätzung«, »Möbelpreis inkl. MwSt.«, »zzgl. Lieferung und Montage« und Stand 09/2026.
  - Nie als »ab«-Preis oder Festpreis.
  - Kein €/lfm aus diesen Werten herausrechnen und nicht auf 2 m, 3 m oder 4 m hochrechnen.
  - Keine Preise je Ausstattungsstufe (Basis/Komfort/Premium) und keine Preise für Zubehör.
- **Keine Zahlen von Wettbewerbern:** 2.860 €, 4.200 €, 6.130 €, 600–3.000 €/lfm, 70–90 € Aufmaß, Zubehörpreise. Regel aus kundenwissen: »nie von Wettbewerber-Seiten übernehmen«.
- **Keine Preisrelationen:** nicht »günstiger/teurer als«, keine %-Aufschläge für Dachschräge oder Schiebetür, nicht »Maß kostet X-mal PAX«, nicht »günstiger, weil kein Zwischenhandel«, nicht »regional günstiger«. Kein pauschaler Zuschlag für Sondermaße. Aufwand beschreiben statt Preis vergleichen. Die live stehende Formulierung »Dekor ist günstiger als …« (kleiderschrank) nicht übernehmen.
- **Unbelegte Kostenposten:** kein Stundensatz, keine Anfahrtspauschale, nicht »Lieferung oder Anfahrt kostenlos«, kein Angebot für Demontage oder Entsorgung, keine »Festpreisgarantie« oder »verbindlicher Kostenvoranschlag« als Fast-Zusage. »ohne versteckte Kosten« steht live, aber nicht in FACTS, also nicht ausbauen.
- **Lieferzeit:** keine Wochenzahl.
- **Garantie und Lebensdauer:** keine Garantie (»5 Jahre« ist falsch), keine Lebensdauer in Jahren, keine Gewährleistung als USP.
- **PU-Kante:** nur »fugenlos« und »feuchtigkeitsbeständig«. Nicht »wasserfest«, kein 24-h-Tauchtest, nicht »lässt kein Wasser durch«.
- **Material und Hersteller:** keine Hersteller oder Serien (Beschläge, Laufsysteme, Plattenwerkstoffe), keine Holzart als Angebot. Belegt sind nur Massivholz und branchenübliche hochwertige Materialien. Kein Musterversand, keine Dekorproben.
- **Firmenangaben:** »Meisterbetrieb« ohne Jahr. Nicht »1996 in Espelkamp«, nicht »25+ Jahre«, nicht »12+ Mitarbeiter«. Keine HWK- oder Innung-Mitgliedschaft, keine Awards, kein FSC/PEFC, keine »regionale Holzherkunft«.
- **Referenzen:** keine weiteren Anekdoten mit Ort. Mittwald mit »40 % mehr Stauraum« nur für dieses Projekt, nie als allgemeine Zusage.
- **Möbelplaner:** nicht als »plan es selbst«-Ersatz positionieren. Nicht »nennt keinen Sofortpreis« (widerspricht FACTS).
- **Finanzierung:** nur »im Privatbereich möglich«, ohne Zins, Rate, Partner oder »0 %«.
- **Aufmaß:** »kostenlos« nur mit Bezug auf das Montagegebiet. »unverbindlich« ist nicht belegt; besser »kostenlos«.
- **Google-Bewertung:** nur nach Live-Prüfung.
- **Konkurrenz:** keine Wettbewerbernamen oder -links. IKEA PAX nur als Vergleichskategorie.

## 9 · Offene Punkte / Wissenslücken (was NUR der Kunde weiß; IMMER inkl. Geo-Reichweite „bundesweit oder montage-gebunden?"). Wird NICHT beim Kunden erfragt, sondern vor dem Schreiben gegen FACTS.md + den Antwort-Fundus des Mandanten aufgelöst; alles Unbelegte bleibt Leerstelle und wird nicht behauptet.

| # | Punkt | Auflösung |
|---|---|---|
| 1 | **Geo-Reichweite** | **Gelöst: montagegebunden.** Aufmaß (kostenlos) und Einbau durch das eigene Team im Umkreis von rund 200 km um Espelkamp (OWL, Minden, Lübbecke, Osnabrück, Bielefeld), Lieferung bundesweit (FACTS, kundenwissen einbauschraenke Q1, badmoebel Q1). Außerhalb gibt es keine Aussage zur Montage durch Fast; Lieferkosten sind eine Leerstelle. |
| 2 | Weitere Preisbelege (gerade Wand mit Dreh- oder Schiebetür, 2–3 Breiten) | Leerstelle. Laut FACTS gelten andere Zahlen »nur mit eigenem Planer-Beleg«. Optional vor dem Schreiben einen Beleg ziehen: Konfiguration wie am 17.09. (Korpus und Front Platinweiss, Türen ohne Griff), Datum, Screenshot in REVIEW.md. Ohne Beleg bleiben die Zeilen in Tabelle B »individuell nach Aufmaß« und in der Direktantwort steht das Dachschrägen-Beispiel. |
| 3 | Kosten und Ausweis von Lieferung und Montage im Angebot, brutto oder netto im Angebot, Kostenanschlag oder Festpreis | Leerstelle. Nur sicher: Planer-Preis inkl. MwSt., zzgl. Lieferung und Montage; Montage macht das eigene Team. Formulierung: »welche Posten einzeln ausgewiesen sind, sehen Sie im Angebot«. |
| 4 | Anfahrt, Demontage und Entsorgung des Altschranks, kostenpflichtige 3D-Planung | Leerstelle, nicht erwähnen; Anfahrt höchstens als neutrale Check-Frage. |
| 5 | Arbeitskosten getrennt auf der Rechnung (wichtig für § 35a) | Leerstelle. FAQ 6 nur zur Rechtslage, mit Verweis auf die Steuerberatung. |
| 6 | Selbstmontage oder Bausatz bei Einbauschränken | Leerstelle; »kein Bausatz« ist nur für Küchen belegt. Weder anbieten noch ausschließen. |
| 7 | Finanzierung für Einbauschränke | FACTS sagt »ja im Privatbereich (z. B. Küche)«. Allgemein »im Privatbereich möglich« verwenden, ohne Konditionen. |
| 8 | Lieferzeit | Gelöst: keine Wochen, Termin nach Aufmaß und Freigabe. |
| 9 | Stundensatz, regionales Preisniveau | Leerstelle, weglassen. |
| 10 | Konflikt bei der Mittwald-Referenz | kundenwissen (07/2026): »keine Einbauschrank-Referenz mit Ort«. FACTS (2026-10-04, Max): bestätigt. FACTS gewinnt; die Referenz bleibt auf den Wortlaut von ueber-uns.ts beschränkt. |
| 11 | Konflikt beim Möbelplaner | `klMoebelplaner` (kleiderschrank) sagt, der Planer »nennt keinen Sofortpreis«; FACTS (2026-10-04) sagt, der Planer zeigt Preise. Auf dieser Seite gilt FACTS. In REVIEW.md als Befund für die Optimierung notieren, die Schwesterseite nicht in diesem PR ändern. |
| 12 | Cluster-Map, Abschnitt Kosten | Veraltet (massmoebel-kosten-schrank gestrichen); im PR anpassen (§6). |

> **Aufgelöst im Research-Lauf 2026-10-27 (W44, §9-Politik Ben 2026-07-28):** gegen `clients/fast/kundenwissen.md` + `docs/seo/brand/FACTS.md`, **keine** Kundenrückfrage. Die Engine-Tabelle oben bleibt als Herkunft stehen; verbindlich für den Writer sind 9a, 9b und **9c (Sperren)**.

### 9a · ✅ Beantwortet (belegt — nutzbar)
- **Geo-Reichweite (Pflicht):** **montage-gebunden.** Kostenloses Aufmaß und Einbau durch das eigene Team im Umkreis von **~200 km um Espelkamp** (ganz OWL; Minden, Lübbecke, Osnabrück, Bielefeld), Lieferung bundesweit. Für einen Einbauschrank zählt das Montagegebiet; FAQ 10 darf beides nennen, **kein Geo-Limiter in der Meta-Description**. *(kundenwissen § Geo & Service, FACTS „Geo-Reichweite je Leistung“)*
- **Preise:** strikt individuell, keine Spannen, „ab“-Werte oder Relationen. Einzige freigegebene Zahl ist der **Planer-Beleg vom 17.09.2026** (FACTS-Ausnahme, Freigabe Fast über Max 2026-10-04): Schrank unter der Dachschräge 1,80 m breit ≈ 1.400–2.000 € je nach Höhe der Schräge, 2,80 m ≈ 3.000 €, Korpus + Front Platinweiss, Türen ohne Griff, Möbelpreis inkl. MwSt., zzgl. Lieferung und Montage. Andere Zahlen nur mit eigenem, freigegebenem Planer-Beleg. **Achtung Code-Gate → 9c Punkt 1.** *(FACTS „Preise: IMMER individuell“ + Ausnahme, kundenwissen § Preise & Termine)*
- **Kein pauschaler Sondermaß-Zuschlag;** freigegebene Formulierung: „Der Preis entsteht aus Material und Aufwand“ (bei Einbauschränken ohne „Geräte“). *(kundenwissen § Preise & Termine)*
- **Möbelplaner:** zeigt selbst einen Möbelpreis inkl. MwSt., zzgl. Lieferung und Montage → als **Schätzung** benennen, verbindlich nach dem Aufmaß. Positionierung: Vorbereitung der persönlichen Planung, kein „plan es selbst“-Tool; **primäres Conversion-Ziel bleibt die Anfrage über das Kontaktformular** (im Planer springen viele ab). Spar-Hebel 1 also als „Varianten vorab vergleichen, dann mit uns besprechen“ formulieren. *(FACTS Z. 28, kundenwissen § Möbelplaner & Conversion)*
- **Lieferzeit:** keine Wochenzahl, Termin nach Aufmaß und Freigabe der 3D-Planung. *(kundenwissen § Preise & Termine)*
- **Finanzierung:** im Privatbereich möglich (FACTS „ja im Privatbereich, z. B. Küche“, kundenwissen „z. B. Küche, Wohnmöbel“), Einbauschrank = Privatbereich → „im Privatbereich möglich, Details im Gespräch“, ohne Zins, Rate, Partner. *(FACTS, kundenwissen)*
- **Prozess:** Beratung (Telefon oder vor Ort) → kostenloses Aufmaß vor Ort → technische 3D-Planung → Fertigung in Espelkamp → Montage durch das eigene Montageteam. Feste Zusagen. *(FACTS „Prozess / Service“)*
- **Werkstatt-Fakten:** 1.000 m² Fertigung, Homag-Maschinen, 4.000+ Projekte sind vom Kunden bestätigt (2026-06-05) und auf dem Hub live („Homag-Technik“). FACTS führt sie im Abschnitt „Fertigung“ noch als „nicht belegt“; der jüngere Kunden-Bestätigungsblock geht vor. PU-Kantenverleimung nur „fugenlos, feuchtigkeitsbeständig“. *(FACTS „Noch zu klären“ → ✅ bestätigt)*
- **Mittwald-Referenz:** „40 % mehr Stauraum“ ist für den Referenzfall Espelkamp-Mittwald in FACTS bestätigt (Max 2026-10-04) und geht der älteren kundenwissen-Regel „keine Einbauschrank-Referenz mit Ort“ vor. **Wortlaut nur aus `ueber-uns.ts` (`ueberFallbeispiel`, live geprüft 2026-10-27):** raumhoher Einbauschrank, versteckte Fugen, Massivholzgriffe, integrierte Beleuchtung, 40 % mehr Stauraum. Nichts hinzufügen (keine Maße, kein Preis, kein Jahr), nie als allgemeine Zusage. *(FACTS „Status / Qualifikation“)*
- **Ausstellung rund 100 m² in Espelkamp:** FACTS ✅ (Max 2026-10-04), nennbar; die ältere kundenwissen-Notiz „kein Showroom behaupten“ ist damit überholt. Nicht nötig für diese Seite. *(FACTS)*
- **Material:** Massivholz + branchenübliche hochwertige Materialien; Beschläge/Plattenwerkstoffe je Projekt → Spanplatte/MDF/Lack/Furnier nur als Gattungen von Kostentreibern, keine Holzart als Angebot, keine Marken. Kein Musterversand. *(FACTS, kundenwissen § Belege)*
- **Meisterbetrieb:** ohne Jahr. *(FACTS, kundenwissen)*
- **Rechtsbelege (§7b) geprüft 2026-10-27 per Abruf gesetze-im-internet.de:** § 35a Abs. 3 EStG wörtlich „um 20 Prozent der Aufwendungen des Steuerpflichtigen, höchstens jedoch um 1 200 Euro“ für Renovierungs-, Erhaltungs- und Modernisierungsmaßnahmen; Abs. 5 „gilt nur für Arbeitskosten“, Rechnung + „Zahlung auf das Konto des Erbringers der Leistung“. § 649 BGB (Kostenanschlag) laut Engine geprüft. **Zahl 1 200 Euro → 9c Punkt 1.**
- **Redirect (Definition of Done im Authoring-PR):** `next.config.ts` Z. 61 führt `/ratgeber/massmoebel-kosten-schrank/` noch als **INTERIM → `/moebel-nach-mass/`** (Kommentar: Ziel einbauschrank-kosten). Mit dem Bau dieser Seite auf `/einbauschraenke-nach-mass/einbauschrank-kosten/` finalisieren (redirects.md Z. 25 ist die Soll-Quelle; Restposten aus Befund `alt-url-unternehmen-html`).
- **Geschwister im selben Batch:** `nischenschrank-nach-mass` wurde im selben Research-Lauf recherchiert (kit_ready, **nicht gebaut**). FAQ 2 („Nische“) erst verlinken, wenn er `built:true` ist (audit:links guardt). Budget-Zahlen in §7 sind Engine-Stand 2026-10-27 → im Authoring per `audit:links` neu prüfen.

### 9b · ⬜ Leerstelle — nicht behaupten (je eine Ausweich-Anweisung an den Writer) → **8 offen**
1. **Weitere Preisbelege** (gerade Wand, Schiebetür, Nische, 2–3 Breiten): keiner. → Tabelle-B-Zeilen „individuell nach Aufmaß“. Ein neuer Planer-Beleg braucht wie am 17.09./04.10. die Freigabe von Fast; der Writer zieht ihn **nicht** selbst.
2. **Ausweis der Posten im Angebot** (brutto/netto, Lieferung und Montage einzeln, Kostenanschlag oder Festpreis): nicht belegt. → „Welche Posten einzeln ausgewiesen sind, sehen Sie im Angebot.“ Kein „verbindlicher Festpreis“ als Fast-Zusage.
3. **Anfahrt, Demontage/Entsorgung des Altschranks, Kosten der 3D-Planung:** nicht belegt. → weglassen; Anfahrt höchstens als neutrale Check-Frage im Angebots-Check.
4. **Arbeitskosten getrennt auf der Rechnung (§ 35a):** nicht belegt. → FAQ 6 nur zur Rechtslage + Steuerberatung, nicht zusagen, dass Fast Arbeitskosten ausweist oder dass der Einbau sicher begünstigt ist.
5. **Selbstmontage/Bausatz bei Einbauschränken:** nur für Küchen ausgeschlossen. → weder anbieten noch ausschließen.
6. **Stundensatz, regionales Preisniveau:** nicht belegt. → weglassen.
7. **Lieferkosten außerhalb des Montagegebiets:** nicht belegt. → weglassen.
8. **„ohne versteckte Kosten“:** steht live 9× in 5 Content-Modulen, aber nicht in FACTS. → nicht neu verwenden und nicht ausbauen.

### 9c · ⛔ Sperren für Writer und QC (nicht ergänzen, nicht umformulieren)
1. **Euro-Zahlen vs. Code-Gate (Konflikt, Befund W44):** Das Verbotene-Claims-Gate in `docs/seo/engine/authoring-engine.workflow.mjs` (Regex `\b\d{1,3}[\.\s]?\d{3}\s*(€|euro)\b`) wertet **jede** vierstellige Euro-Zahl als „konkrete Preiszahl“ und kennt die FACTS-Ausnahme vom 2026-10-04 nicht. Es trifft „2.000 Euro“, „3.000 €“ und auch „1 200 Euro“ aus § 35a. QC hat dann den Auftrag „ENTFERNEN“, Reste setzen `FACTS_VIOLATION` (= kein Paket).
   - **Plan B (Standard, solange das Gate unverändert ist):** keine vierstelligen Euro-Zahlen in der Copy. Direktantwort und Laufmeter-H2 verweisen auf das **Rechenbeispiel aus dem Möbelplaner auf der Seite [Schrank unter der Dachschräge](/einbauschraenke-nach-mass/einbauschrank-dachschraege/)** und auf die Schätzung im Planer. Tabelle B, Zeile Dachschräge: „Rechenbeispiel aus dem Möbelplaner auf der Dachschrägen-Seite“ statt Zahl. FAQ 6: „20 Prozent der Arbeitskosten, bis zu einem gesetzlichen Höchstbetrag pro Jahr“ + Link § 35a EStG, ohne Euro-Betrag.
   - **Plan A (nur wenn das Gate vor dem Authoring um die FACTS-Ausnahme erweitert wurde — vorher `FORBIDDEN` im Engine-Skript prüfen):** Planer-Beleg exakt wie in 9a mit allen Bedingungen, an den drei Orten aus §3 „Ein Ort je Fakt“; § 35a mit 1 200 Euro.
   - **Nie** die Regex umgehen (Zahlwörter, „2 T€“, Bilder mit Zahlen). Das wäre ein Gate-Bruch, keine Lösung.
2. **FAQ 6 (§ 35a) Wortlaut-Sperre:** nur die vier belegten Punkte (20 % der Arbeitskosten, Höchstbetrag, nur Arbeitskosten, Rechnung + Überweisung) plus „Einzelfall klärt die Steuerberatung“. **QC ergänzt keine weitere Rechtslage** (keine Haushaltsnahe-Dienstleistung-Abgrenzung, kein Neubau-Ausschluss, keine Kombination mit Förderung). Lehre aus holzarten 2026-10-22: QC fügte einen Rechtslage-Satz an, Chef rot.
3. **FAQ 4 ohne Preisrelation:** nicht „wenn der Preis allein entscheidet“ (impliziert „Maß ist teurer“, kundenwissen: keine Relationen). Stattdessen: „wenn ein Standardmaß ohne Anpassung in den Raum passt oder eine Übergangslösung genügt“.
4. **Ein Ort je Fakt** (§3) bleibt verbindlich; die „Gestrichen“-Liste in §5 nicht wieder auffüllen (Chef-rot-Muster tabellenlastiger Ratgeber).
5. **IKEA/PAX** nur als Vergleichskategorie in Tabelle D (so auch live auf dachschraege und schrank-unter-treppe), ohne Link, ohne Preis, ohne Abwertung.

## 10 · Authoring-Briefing (Lauf 2026-11-18, W47 — verbindlich für Writer, Humanizer, QC und Chefredakteur)
**Route:** `/einbauschraenke-nach-mass/einbauschrank-kosten/` (keyword-map Z. 30 und redirects.md Z. 25; die Map geht der Ratgeber-Regel `/ratgeber/<slug>/` vor). Batch einbauschraenke, Seite 1 von 3 (danach nischenschrank-nach-mass, begehbarer-kleiderschrank-nach-mass).

**10a · Struktur (fest, im Modul `src/lib/content/einbauschrank-kosten.ts`, Keys nicht ändern):**
`ekMeta` (metaTitle beginnt mit „Einbauschrank Kosten:", max. 60 Zeichen; metaDescription max. 155 Zeichen, ohne Geo-Limiter) · `ekHero` (H1 + Direktantwort, §2) · `ekKostenbloecke` = Tabelle A · `ekLaufmeter` = Laufmeter-H2, Intro + 5 Prüfpunkte als Karten · `ekSituationen` = Tabelle B **als 4 Karten** (SpecTable-Zellen rendern keine Links, darum Karten) · `ekPlanerAngebot` = Tabelle C · `ekVergleich` = Tabelle D · `ekFehler` = Fehler-Block (3 Karten, Check-Fragen in Karte 1) · `ekSparen` = 5 Spar-Hebel · `ekWerkstatt` = Praxis-Einschub · `ekAblauf` = 5 Schritte „Wann aus der Schätzung ein Preis wird" · `ekMoebelplaner` = weicher Plus-CTA · `ekFaq` = 10 FAQ in der Reihenfolge von §5.

**10b · Plan B ist gesetzt (FORBIDDEN im Engine-Skript am 2026-11-18 geprüft, unverändert):** keine Euro-Zahl auf der ganzen Seite, auch keine dreistellige, kein „Euro"-Betrag bei § 35a („bis zu einem gesetzlichen Höchstbetrag pro Jahr"). Planer-Rechenbeispiel nur als Verweis auf die Dachschrägen-Seite (Hero, `ekLaufmeter.intro`, Karte „Dachschräge und Kniestock"). Keine Zahlwörter als Ersatz.

**10c · Links (Budget 8/8 voll, keine weiteren Ziele):** genau die Marker im Scaffold behalten: Parent in `ekVergleich.intro`, Dachschräge in `ekLaufmeter.intro` + Karte Dachschräge, Kleiderschrank/Garderobe/Treppe je in ihrer Karte, Möbelplaner in Spar-Hebel 1, § 35a EStG in FAQ 6. `/kontakt/` kommt über den CTA der FAQ-Sektion (page.tsx), nicht als weiterer Marker. **Kein** Link auf Nischenschrank oder begehbaren Kleiderschrank (noch nicht gebaut, die Rücklinks setzt der Orchestrator in deren Paketen in FAQ 2 bzw. 3), kein Link auf `/referenzen/`, `/kuechen-nach-mass/` oder `/ueber-uns/`.

**10d · Wortmaß:** Maßgeblich ist allein `prop-laengen` gegen die Vorlage `holzarten-materialien-moebel.ts`: `intro` ≤ 63 W, Karten-`body` ≤ 70 W, `answer` ≤ 66 W, Schritt-`description` ≤ 70 W, `metaDescription` ≤ 22 W, `ogDescription` ≤ 29 W. Richtwerte für Dichte: Tabellenzelle ca. 6–14 W, Karten-`body` ca. 20–40 W, FAQ-`answer` ca. 35–55 W. Kein Kit-Wert ist ein Abnahmekriterium, der Korridor §1 ist Orientierung; die Seite soll eher bei ~1.900 W als bei 2.200 W landen.

**10e · Konsistenz-Sperren (holistisch, Chef-rot-Muster aus Vorläufen):**
- Der Weg zum Preis ist überall derselbe: (optional) Skizze im Möbelplaner → Gespräch am Telefon oder vor Ort → kostenloses Aufmaß → 3D-Planung und individuelles Angebot → Freigabe, Fertigung in Espelkamp, Montage durch das eigene Team zum vereinbarten Termin. Hero, Tabelle C, Spar-Hebel 1, Ablauf und FAQ 8/9 dürfen dem nicht widersprechen.
- Ein Ort je Fakt (§3) bleibt verbindlich: was Tabelle C trägt (Planer-Preis inkl. MwSt., Lieferung/Montage zzgl., Aufmaß kostenlos), steht in keiner FAQ erneut; der Standard/IKEA-Vergleich nur in Tabelle D; Mittwald nur in `ekWerkstatt` und nur im Wortlaut „raumhoher Einbauschrank mit versteckten Fugen, Massivholzgriffen und integrierter Beleuchtung … 40 % mehr Stauraum", ohne weitere Details.
- Bei Leerstellen (§9b) nie das WIE beschreiben: nicht, wie Fast Posten im Angebot ausweist, wie Montage oder Anfahrt berechnet wird, ob Arbeitskosten getrennt stehen. Formel: „Welche Posten einzeln ausgewiesen sind, sehen Sie im Angebot."
- „ohne versteckte Kosten", „Festpreis", „verbindlicher Kostenvoranschlag", „unverbindlich", Stundensatz, Lieferzeit in Wochen: nicht verwenden.
- § 649 BGB nur als Text im Angebots-Check (Karte 1 von `ekFehler`), ohne Link, ohne Rechtsfolgen-Ausbau über den Satz in §7b hinaus.
- FAQ 6 (§ 35a) und FAQ 4 nach §9c Punkt 2/3; QC ergänzt dort keine weiteren Sätze zu Rechtslage, Geltungsbereich oder Zahlen.
- Lange H2-Komposita vermeiden (mobil 390 px), z. B. nicht „Einbauschrankkostenübersicht".

**10f · Abnahme-Hinweis für den Chefredakteur:** Bildwahl, Alt-Texte, Schema und Breadcrumbs setzt der Orchestrator, sie sind nicht Teil der Copy-Abnahme. pass=false nur für live-störende Befunde (Faktenfehler, Leerstellen-Verstoß, Widerspruch zwischen Abschnitten, Wiederholung, fehlende Nutzerantwort); reine Stilwünsche als nicht blockierend vermerken.
