# Research-Kit: Büroschränke nach Maß (/bueroeinrichtung/bueroschraenke-nach-mass/)

## 1 · Wortzahl-Korridor → **1.600–2.100 W · Ziel ~1.800 W** (SERP-Median 1.900, geschätzt) — normiert 2026-10-20 (Korridor-Politik)
**Korridor-Politik (Ben, 2026-07-15), vom Research-Lauf W43 normiert:** Ziel ~1.800 W, Korridor 1.600–2.100. Die Playbook-Defaults gelten als überschrieben. Kurze, dichte Chunks mit hohem Mehrwert statt Wortmasse.
- **Kein Anheben:** Der Engine-Median von 1.900 W liegt schon im Band. Er ist außerdem **geschätzt, nicht gezählt** (`measured:false`, US-SERP) und durch Shop-Elemente aufgebläht: Galerien, Bewertungen, Zahlungsarten, Konfigurator. Nach der Regel „Boden nie unter den Median" müsste der Boden auf 1.900 steigen. Das gilt aber nur bei *gleichem Intent* und *gemessenem* Median, und beides ist hier nicht gegeben. Deshalb bleibt der Boden bei 1.600.
- **Warum nicht der Produkt-Deckel 1.200–1.600** (Präzedenz raumteiler, kuechenzeile, bueromoebel-nach-mass): Die Seite trägt drei Tabellen (Ordner, Fronten, Kostenfaktoren), sechs Bauform-Karten, zwei USP-Blöcke (Vertraulichkeit, Kante), fünf Prozessschritte und 8–10 FAQ. In dichter Form sind das rund 1.700–1.800 W. Unter 1.600 fiele eher die eigene Substanz weg (Ordner-Kapazität, Fronten nach Platz) als Füllstoff.
- **Obergrenze ist ein Deckel, kein Ziel:** Das Geschwister `bueromoebel-nach-mass` hat 1.421 W. Alles über ~1.900 W auf dieser Seite ist mit hoher Wahrscheinlichkeit Paraphrase des Geschwisters oder des Pillars (Korpus-Dedup-Gate, Gate 11). Weitere Länge muss aus neuer Schrank-Substanz kommen: Ordnermaße, Kapazität, Fronten, Vertraulichkeit.

**Verhältnis zu DEPTH.md:** Der Korridor ist eine Planungsgröße gegen Aufblähen und gegen Dünnheit, **kein blockierendes Gate** (DEPTH.md Regel 3, AGENT-WORKFLOW Phase 1). Fehlt Substanz, benennt QC das fehlende Modul.
**Writer-Hinweis (Zähl-Bias ~8 %):** Gegen das **ZIEL ~1.800 W** planen, NICHT gegen den Boden. Zähl-Werkzeuge liegen ~8 % auseinander, wer auf 1.600 schreibt, landet leicht darunter. Für die Länge sorgen Tabellen und FAQ (8–10 aus §5), nicht Prosa. Jede Karte 2–3 Sätze.

**Gewinnbarkeit (Portalanteil):** `signale.json` führt den Portalanteil der Top-10 als **unbelegt** (SV 40, CPC 8,94 €, Wettbewerbsindex 100; Stand Montagslauf 2026-10-19). Die Engine-SERP ist US-basiert und konfigurator-dominiert (form.bar, schrankplaner, passandu, deinschrank, Möbelwerke). Misst der Montagslauf für dieses Keyword ≥ 80 %, die Seite vor dem Authoring neu entscheiden.

### SERP-Tiefe (Recherchebeleg der Engine)
- **Beleg:** Der Wert von 1.900 W ist der Median aus 6 geschätzten Seiten. Gemessen wurde nichts (`measured:false`), meine-moebelmanufaktur wurde nicht abgerufen. In den Wortzahlen stecken Shop- und Konfigurator-Elemente wie Galerien, Bewertungen und Zahlungsarten. Spanne: form.bar 1.300, passandu 1.900, deinschrank 2.500, Möbelwerke 2.750, schrankplaner 3.750.
- **Grenzen der Recherche:** Die WebSearch lief nur mit US-Daten. Es gibt keine echte Google.de-SERP und keine PAA. Ob ein Featured Snippet existiert, ist unbekannt. FAQ und Fragen-Überschriften (H2) müssen deshalb aus den Micro-Intents kommen (§5).
- **Nachfrage:** Laut signale.json vom 2026-08-17 hat `bueroschraenke-nach-mass` ein Suchvolumen von **40**. Die keyword-map nennt 200–400 und überschätzt damit, so wie im ganzen Cluster. Gewinnen lässt sich der Longtail mit „nach Maß“ (Tischler-Nische), nicht der Head-Term gegen Konfigurator-Shops.
- **Einordnung:** Die SERP besteht fast nur aus Konfigurator-Landingpages mit Preis- und Shop-Logik. Diese Tiefe stellt Fast nicht über Preise her, sondern über **Planungswissen, das sich am Ordner ausrichtet**, und über Service: Aufmaß, Eigenfertigung, Montage. Das Geschwister `bueromoebel-nach-mass` liegt bei 1.421 W, die keyword-map nennt 1.000–1.300. Die Länge ergibt sich aus den Modulen in §3. Ein Absatz ohne neue Maße, Optionen oder Fragen wird gestrichen.

## 2 · Intent & Job-to-be-done (was will der Nutzer sehen/tun)
- **Intent: commercial.** Das Möbelstück ist schon gewählt. Der Nutzer prüft, ob es passt, wie viel es fasst, ob es sich abschließen lässt, was die Kosten treibt und wer es baut. Zielgruppe ist B2B: Geschäftsführung, Office-Management, Kanzleien, Steuerbüros, Ingenieurbüros, Praxisverwaltung. Homeoffice ist ein Nebenfall. Anrede „Sie“.
- **Job-to-be-done:** „Ich will meinen Aktenbestand in einem Schrank unterbringen, der genau in meinen Raum passt (wand-zu-wand, raumhoch, Nische, Schräge, Flur), auf Wunsch abschließbar ist und nicht nach Katalograster aussieht. Dann will ich ihn anfragen.“
- **Micro-Intents nach Priorität:**
  1. Wie viel passt rein und welche Maße brauche ich? Der Ordner ist die Maßgabe. **Das ist der Kern.**
  2. Welche Bauform passt zu meinem Raum? Raumhohe Wand, halbhoher Schrank unter dem Fenster, freistehende Schrankzeile, Nische oder Schräge.
  3. Welche Front: Drehtür, Schiebetür, offen oder Auszug? Das hängt vom Platz vor dem Schrank ab.
  4. Lässt er sich abschließen und reicht das für vertrauliche Akten?
  5. Was treibt den Preis? Nur Faktoren, keine Euro-Werte.
  6. Wer misst auf, baut und montiert, und bis wohin?
  7. Wie frage ich an oder plane vor? Über Möbelplaner, Kontakt oder Telefon.
- **Primär-KW:** „Büroschränke nach Maß“ / „Büroschrank nach Maß“. **Sekundär** laut keyword-map: Aktenschrank nach Maß, Einbauschrank Büro nach Maß, raumhoher Büroschrank, Ordnerschrank, Büroschrank Holz individuell.
- **Rahmen-Vorschlag:**
  - H1: „Büroschränke und Aktenschränke nach Maß“. Bewusst nicht das Muster des Geschwisters „… aus Espelkamp“.
  - Title: „Büroschränke nach Maß: Aktenschrank vom Tischler | Fast Systemmöbel“.
  - Meta: Ordner, abschließbar, kostenloses Aufmaß, Montage durch das eigene Team. Kein Geo-Limiter am Schluss, denn laut Memory bremst das die CTR.

## 3 · Nötige Antworten nach Leseraufgabe; Vergleichsseiten nur als interne Hinweise
Die Abschnitte bauen auf denselben Sektionen wie `bueromoebel-nach-mass.ts` auf. Die Inhalte müssen eigenständig sein, denn Gate 11 ist hier das größte Risiko: das Geschwister hat schon eine Karte „Aktenschrank und Büroschrank“ und eine allgemeine Maß- und Kostentabelle.

| # | Leseraufgabe | Antwort / Inhalt | Sektion |
|---|---|---|---|
| 1 | „Was ist das, passt es zu mir?“ | Direkte Antwort in 40–60 W. Satz 1: Büroschrank nach Maß = Akten- und Ordnerschrank, der millimetergenau wand-zu-wand in Ihren Raum passt und Ihren Aktenbestand aufnimmt. Gefertigt vom Meisterbetrieb in Espelkamp, Aufmaß und Montage durch das eigene Team. | Hero + IntroStats |
| 2 | „Wie viel passt rein, welche Maße?“ | **Pflicht-Tabelle 1, „Der Ordner als Maßgabe“** (siehe unten), dazu ein Rechenbeispiel. | SpecTable |
| 3 | „Welche Bauform?“ | 5–6 Karten: (a) raumhohe Aktenschrankwand wand-zu-wand ohne Passleisten, oben keine Staubfläche; (b) halbhoher Schrank oder Sideboard als Ablage unter der Fensterbrüstung, Abstellfläche oben; (c) **freistehende Schrankzeile als Raumgliederung** mit Rückseite als Sichtseite und Schiebetüren (Bildbeleg vorhanden, §7); (d) Einbau in Nische, unter der Dachschräge oder um Fenster, Heizkörper und Steckdosen herum; (e) abschließbarer Schrank für vertrauliche Akten; (f) Auszug für Hängeregister oder Container am Platz, nur 1 Satz und dann Link zum Geschwister. | SegmentCards |
| 4 | „Drehtür, Schiebetür, offen?“ | **Tabelle 2, „Fronten im Büro“** (siehe unten). Kriterium ist der Platz vor dem Schrank, nicht der Preis. | SpecTable (2. Tabelle, AEO) |
| 5 | „Abschließbar, Datenschutz?“ | Abschließbar auf Wunsch. Papierakten, die geordnet abgelegt sind, fallen unter die DSGVO (Art. 2 Abs. 1 i. V. m. Art. 4 Nr. 6). Art. 32 verlangt geeignete technische und organisatorische Maßnahmen. Ein abschließbarer Schrank kann **ein Baustein** davon sein. Das nötige Schutzniveau legt das Datenschutzkonzept fest. Kein Konformitäts- oder Sicherheitsversprechen. | UspHighlight |
| 6 | „Hält das im Alltag?“ | Kurz: PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig, **an den Vorderkanten der Fachböden und Fronten**, wo täglich Ordner rein- und rausgehen. Fachbodenbreite und Mittelwände werden auf die Ordnerlast abgestimmt (ohne kg-Werte). Eigenfertigung in Espelkamp, CNC. Andere Worte als beim Geschwister: nicht Schreibtischkante oder Teeküche. | UspHighlight oder Material-Karte |
| 7 | „Was kostet das?“ | **Pflicht-Tabelle 3, Kostenfaktoren ohne €** (siehe unten). Danach individuelles Angebot nach dem kostenlosen Aufmaß. Unter der Tabelle CTA 1 (Höhepunkt der Kaufabsicht). | SpecTable + ExpandingImageCta |
| 8 | „Wie läuft es ab, wie lange?“ | 4–5 Schritte: (1) Aktenbestand und Raum klären (Ordner, Hängemappen, was weggeschlossen werden muss), per Telefon oder vor Ort; (2) kostenloses Aufmaß; (3) 3D-Planung mit Fachaufteilung und Fronten; (4) Fertigung in Espelkamp; (5) Montage durch das eigene Team. Lieferzeit: „Termin nach Aufmaß und Freigabe“. | ProcessSteps |
| 9 | „Wie starte ich?“ | Möbelplaner = **Vorbereitung** (Maße, Fronten, Fächer vorplanen), nicht zum Selbstbestellen. Hauptziel ist die Anfrage über das Kontaktformular. Telefon 05771 9138312. | MnmMoebelplaner + Abschluss-CTA |
| 10 | FAQ | ≥ 6 Fragen, alle schrankspezifisch (§5). Keine Frage aus der FAQ des Geschwisters wiederholen. | FaqSection |

**Tabelle 1, „Der Ordner als Maßgabe“.** Das ist allgemeines Planungswissen als **Orientierung**. Es wird nicht als Fast-eigene Fertigungsbandbreite dargestellt. Vorbild ist der Umgang mit Buchformaten auf `buecherregal-nach-mass`.

| Planungsgröße | Richtwert (ca.) | Was es für den Schrank heißt |
|---|---|---|
| A4-Ordner, stehend | rund 32 cm hoch, 28,5 cm tief; Rücken 8 cm (breit) oder 5 cm (schmal) | Grundlage für Fachhöhe, Innentiefe und Kapazität |
| Lichte Fachhöhe | rund 33–35 cm (Ordner plus Griffluft) | verstellbare Fachböden für Ordner, Stehsammler oder Ablagekörbe |
| Innentiefe | ab rund 30 cm | Außentiefe = innen + Rückwand + Front. Schiebetüren brauchen zusätzliche Lauftiefe. Wird nach dem Aufmaß festgelegt. |
| Ordner je Meter Fachboden | ≈ 12 breite oder ≈ 20 schmale | Fachbreite × Anzahl Fächer = Kapazität |
| „Ordnerhöhe“ (OH) bei Serienschränken | **ohne cm-Werte** (W43: Raster-Zahlen gestrichen, herstellerabhängig und nur aus Wettbewerber-/SERP-Angaben, siehe 9b-4) | nur als Begriff: Serienschränke rechnen in Ordnerhöhen. Nach Maß gibt es kein Raster und der Schrank geht bis zur Decke. |

Rechenbeispiel (AEO): Eine 3 m breite Wand mit 5 Ordnerfächern fasst rund 180 breite Ordner (3 × 12 × 5). Durch Seiten- und Mittelwände sind es etwas weniger. **Keine DIN-Nummer für OH oder Ordner nennen**, weil nicht verifiziert. Das A4-Blatt (210 × 297 mm, DIN EN ISO 216) darf höchstens als Text ohne Link vorkommen.

**Tabelle 2, „Fronten im Büro“** (keine Preisvergleiche):

| Front | Platz vor dem Schrank | Zugriff | Gut für |
|---|---|---|---|
| Drehtüren | Schwenkraum ungefähr so breit wie die Tür | ganzer Schrankteil auf einen Blick | Büro oder Archivraum mit freier Fläche |
| Schiebetüren | kein Schwenkraum | immer nur ein Teil offen | Flur, schmales Büro, Schrankzeile am Gang |
| Offene Fächer | keiner | sofort | laufende Vorgänge, Handablage, gemischt mit geschlossenen Teilen |
| Auszüge/Schubkästen | Auszugsraum | von oben, Hängeregister | Hängemappen, Kleinmaterial |

Abschließbarkeit nur allgemein als „auf Wunsch“ beschreiben, ohne Schlosssystem.

**Tabelle 3, Kostenfaktoren** (Zeilen anders als beim Geschwister, das „Umfang/Material/Größe/Ausstattung/Montage“ hat):
- Aktenmenge → laufende Meter und Fachanzahl
- Höhe und Einbau: halbhoch freistehend oder raumhoch wand-zu-wand; Nische, Schräge, Aussparungen für Fenster, Heizkörper und Steckdose
- Fronten: offen, Dreh-, Schiebetür oder Auszug, auch gemischt
- Innenleben und Schließen: verstellbare Böden, Auszüge, Hängeregister, Schloss
- Oberfläche, inklusive Rückseite als Sichtseite bei freistehender Zeile
- Aufwand vor Ort

**Schema:** Wie bei allen 20 gebauten Produktseiten im Repo **Service + OfferCatalog** (Bauformen als `itemOffered`), dazu BreadcrumbList (Fast › Gewerbe › Büroeinrichtung › Büroschränke nach Maß), FAQPage 1:1 zur sichtbaren FAQ und ItemList. Kein `offers` und kein `aggregateRating`, weil es keinen Preisbeleg gibt. Das Playbook nennt zwar `Product`, ohne offers wäre das aber nur ein halbes Product-Markup. Konsistenz mit `bueromoebel-nach-mass` hat Vorrang.

**Interne Hinweise zu Vergleichsseiten (nie im Text nennen):** schrankplaner zeigt einen 3-Schritt-Prozess, Ausstattungsliste, Musterpaket, Siegel und Garantie. passandu gliedert nach Standort, Innenaufteilung („32 cm“) und Sonderformen und bietet Regal vs. Ordnerschrank. form.bar Aktenschrank: Türtypen inkl. Rollladen, Ordnerhöhe 36 cm, Tiefe ≥ 32 cm, abschließbar. deinschrank: Materialstärken 19/8 mm. Möbelwerke: Maß vs. Standardmaß plus Ergonomie-Ratgeber. **Übernommen werden nur Formate** (Ordner-Maßtabelle, Fronten-Vergleich, Prozess). Keine Zahlen der Wettbewerber zu Dekoren, Garantie, Stärken oder Lieferzeit.

## 4 · Begriffe und Entitäten als Recherchehinweise; keine Pflichtliste zum Abhaken
- **Natürlich unterbringen:** Büroschrank/Büroschränke nach Maß · Aktenschrank · Ordnerschrank · Ordnerhöhe (OH) · lichte Fachhöhe · Innentiefe · raumhoch/deckenhoch · wand-zu-wand ohne Passleisten · Einbauschrank Büro · Schrankwand · Schrankzeile · Drehtüren/Schiebetüren/offene Fächer · Auszüge/Schubkästen · Hängeregistratur · verstellbare Fachböden · abschließbar · vertrauliche Akten (Personal-, Mandanten-, Patientenakten) · Datenschutz/DSGVO · Aufmaß (kostenlos) · Montage (eigenes Team) · 3D-Planung · Tischler/Meisterbetrieb · Eigenfertigung · PU-Kantenverleimung · Dekor/Furnier/Massivholz/Lack · Dachschräge/Nische · Kanzlei/Praxis/Steuerbüro · Homeoffice (nur am Rand).
- **Fast-Entitäten:** Fast Systemmöbel · Espelkamp · Ostwestfalen-Lippe (OWL; Minden, Lübbecke, Bielefeld, Osnabrück) · Meisterbetrieb (ohne Jahr) · Möbelplaner · eigenes Montageteam · ~200 km Montageradius · Lieferung bundesweit.
- **Normen und Rechtsquellen:** Datenschutz-Grundverordnung (EU) 2016/679, Art. 2, 4 Nr. 6 und 32. Begriff „Möbelfunktionsfläche“ aus der ASR A1.2 nur dann, wenn der Inhalt verifiziert ist (§7b).
- **NICHT in den Text:** Die in der Rohrecherche als „requiredEntities“ geführten Wettbewerber (form.bar, Möbelwerke/Höffner, schrankwerk, schrankplaner, meine-moebelmanufaktur, deinschrank). Das sind Recherchequellen, keine Seitenentitäten. Keine Hersteller von Beschlägen, Schlössern oder Platten.
- **Nur am Rand oder gar nicht:** Konfigurator. Der Möbelplaner wird als Vorplanung positioniert, nicht als Shop. Rabatt, Garantie, Musterpaket, Rollladen (§8/§9).

## 5 · Offene Nutzerfragen, soweit sie nach dem Haupttext noch eine Antwort brauchen
Es gibt keine echte PAA (§1). Die FAQ kommen aus den Micro-Intents. **Nicht doppeln mit der FAQ des Geschwisters** (Welche Büromöbel, Kosten Büromöbel, optisch zusammen, Tischler vs. Serie, PU-Kante, höhenverstellbar, Homeoffice, Kabel, Liefer- und Montagegebiet, Betriebsausgabe).
1. **Wie tief muss ein Büroschrank für Aktenordner sein?** Ein A4-Ordner ist rund 28,5 cm tief, also innen ab rund 30 cm. Die Außentiefe hängt von der Front ab, Schiebetüren brauchen mehr. Festgelegt wird sie nach dem Aufmaß.
2. **Wie viele Ordner passen in einen Aktenschrank?** Je Meter Fachboden ≈ 12 breite oder ≈ 20 schmale Ordner. Beispiel: 3 m × 5 Fächer ≈ 180.
3. **Was heißt „5 OH“, und braucht ein Maßschrank das Raster?** OH ist das Serienraster: Katalogschränke werden in Ordnerhöhen angegeben (keine cm-Werte nennen, siehe 9b-4). Nach Maß sind die Fachhöhen frei und der Schrank geht bis zur Decke. OH dient nur zum Vergleich.
4. **Drehtüren oder Schiebetüren im Büro?** Entscheidend ist der Platz vor dem Schrank: Schwenkraum bei Drehtüren gegenüber Flur oder Gang bei Schiebetüren. Dazu Zugriff und Tiefe.
5. **Kann der Schrank abschließbar sein, und reicht das für den Datenschutz?** Abschließbar auf Wunsch. Er ist ein Baustein im Sinne von Art. 32 DSGVO. Das Schutzniveau legt Ihr Datenschutzkonzept fest. Keine Zertifikatsaussage.
6. **Was kostet ein Aktenschrank nach Maß?** Faktoren aus Tabelle 3, individuelles Angebot nach kostenlosem Aufmaß, keine €.
7. **Geht raumhoch, in eine Nische oder unter die Dachschräge?** Ja, wand-zu-wand ohne Passleisten, auch um Fenster, Heizkörper und Steckdosen herum. Grundlage ist das kostenlose Aufmaß.
8. **Lassen sich Hängeregister und Auszüge einbauen?** Machbarkeit offen formulieren („planen wir auf Anfrage ein“). Auszug auf das Format Ihrer Hängemappen abstimmen. Keine Zahl, kein System.
9. Optional: **Kann eine Schrankzeile frei im Raum stehen und ihn gliedern?** Ja, die Rückseite wird als Sichtseite gefertigt. Keine Akustik-Versprechen, Akustik gehört zu `bueroplanung`.
10. Optional: **Wie lange dauert es bis zur Montage?** Ein verbindlicher Termin steht nach Aufmaß und Freigabe fest. Keine Wochenangabe.

## 6 · Gaps & unser Winkel (wo Fast überholt) + Negativ-Abgrenzung lt. Playbook
**Lücken und Fast-Winkel:**
- **Der Ordner als Maßgabe.** Wettbewerber nennen einzelne Zahlen (32 cm, 36 cm), rechnen aber keine **Kapazität aus dem Aktenbestand** vor. Fast plant vom Bestand zum Schrank: erst zählen, dann bauen. Das ist das stärkste Asset gegen Duplikate und für AEO.
- **Fronten nach Raum statt nach Katalog.** Drehtür, Schiebetür, offen oder Auszug, je nach Platz vor dem Schrank. Kommt in der SERP kaum als Entscheidungshilfe vor.
- **Vertraulichkeit sachlich.** Auf anderen Seiten nur „abschließbar“. Fast ordnet das mit Art. 32 DSGVO ein, ohne zu viel zu versprechen. Das schafft Vertrauen bei Kanzlei, Praxis und Personalabteilung.
- **Ehrliche Kostenorientierung.** Konfiguratoren zeigen Preise ohne Treiber. Fast erklärt die Treiber und bietet ein individuelles Angebot.
- **Service statt Versand.** Kostenloses Aufmaß, Eigenfertigung in Espelkamp und eigenes Montageteam im Umkreis von ~200 km, statt Bausatz zum Selbstaufbau. Dazu Meisterbetrieb und regionaler Bezug (OWL), die in der SERP fehlen.
- **Planungssituationen aus dem Büro.** Fensterbrüstung, Heizkörper, Steckdosen, Flur, Raumgliederung, Dachschräge. Fehlen bei Wettbewerbern weitgehend.
- **PU-Kante an den Fachböden,** wo Ordner täglich reibt. Andere Worte als beim Geschwister.

**Negativ-Abgrenzung (Playbook §11 + Cluster-Map):**
- NICHT Hub oder Pillar: keine 6-Kachel-Übersicht, keine Vergleichstabelle Tischler vs. Möbelhandel, kein voller Prozess (gehört zu `/bueroeinrichtung/`), kein Text mit 2.400 W oder mehr.
- NICHT `bueromoebel-nach-mass`: kein Möbelprogramm über alle Stücke, kein Schreibtisch oder Arbeitsplatz, kein Sitz-Steh-Platz, keine Kabelintegration im Tisch. Rollcontainer und Sideboard nur in ihrer Stauraum-Funktion, mit Link zum Geschwister.
- NICHT `bueroplanung`: keine Zonierung, keine Raumkonzepte, keine Akustik- oder Ergonomie-Methodik. Bei Bedarf dorthin verlinken.
- NICHT Privat-Einbauschrank (Cluster `einbauschraenke`: Kleiderschrank, Dachschrägenschrank): kein Kleider- oder Wohnkontext.
- NICHT `serienmoebel`/`bueromoebel-serienfertigung`: keine Serie oder Großauftrag mit vielen gleichen Schränken. Ganze Etagen gehören zu `objekteinrichtung`.
- NICHT Ratgeber: keine Anleitung „Aktenablage organisieren“, keine Aufbewahrungsfristen nach HGB/AO, kein Leitfaden zum Datenschutz.
- NICHT Referenz: keine Projektgeschichte, kein Kunde, kein Ort.

## 7 · Interne Links (rein/raus, Anker) lt. internal-linking.md — PFLICHT bei Produkt/Ratgeber/Artikel: ≥ 1 gebautes Geschwister (gleicher Cluster) im Fließtext verlinken UND in ≥ 1 indexierter Geschwister-Seite einen Rücklink einplanen (Quelle + Anker nennen; Budget der Quelle prüfen, bei vollem Budget eine Karte/einen schwächeren Link tauschen)

**Registrierung in `src/lib/seo/linking-rules.ts`:**
```ts
{ slug: "/bueroeinrichtung/bueroschraenke-nach-mass/", type: "product", silo: "buero", audience: "gewerbe", parent: "/bueroeinrichtung/", built: true, contentModule: "bueroschraenke-nach-mass" },
```
ANCHORS-Set (Vorschlag):
- exact: „Büroschränke nach Maß“
- partial: „Aktenschrank nach Maß“, „Büroschrank nach Maß“, „Ordnerschrank nach Maß“, „maßgefertigte Büroschränke“
- brand: „Büroschränke von Fast Systemmöbel“
- descriptive: „Stauraum fürs Büro nach Maß“, „zu den Büroschränken nach Maß“

Dazu `sitemap.ts`: `{ path: "/bueroeinrichtung/bueroschraenke-nach-mass/", priority: 0.7 }`. Nicht in Nav oder Footer, wie bei den Geschwistern.

**Ausgehend (Produkt-Budget max 7, gezählt werden verschiedene Ziele plus externe Links; Breadcrumb und `tel:` zählen nicht). Plan = 7/7:**

| # | Ziel | Stelle | Anker |
|---|---|---|---|
| 1 | `/bueroeinrichtung/` (parent, MUSS) | Breadcrumb + 1× im Text (IntroStats col2) | „maßgefertigte Büroeinrichtung“ oder „Büros einrichten lassen“. **Nicht** „Büromöbel nach Maß“ verwenden: das ist im ANCHORS-Set des Pillars als partial gelistet, aber der exakte Anker des Geschwisters, und löst `ziel-zu-allgemein` aus. |
| 2 | `/bueroeinrichtung/bueromoebel-nach-mass/` (**Geschwister-Pflicht**) | Karte „Container am Platz“ oder Bauformen-Intro: „Schreibtisch und Rollcontainer im selben Stil: [maßgefertigte Büromöbel](…)“ | „maßgefertigte Büromöbel“ / „unser Büromöbel-Programm“ |
| 3 | `/bueroeinrichtung/bueroplanung/` (2. Geschwister) | Prozessschritt 1 oder Kapazitätsblock: „Wie viel Stauraum wohin gehört, klären wir bei Bedarf in der [Büroplanung](…)“ | „Büro planen lassen“ / „Büroplanung“ |
| 4 | `/moebelplaner/` (MUSS) | MnmMoebelplaner + IntroStats col3 | „Möbelplaner“ / „Schrank online vorplanen“ |
| 5 | `/kontakt/` (MUSS) | IntroStats col1, beide ExpandingImageCtas, FaqSection | „Beratung anfragen“ / „kostenloses Aufmaß anfragen“ |
| 6 | `/referenzen/` (SOLL Trust) | Material- oder Bauformen-Karte | „Referenzprojekte“ |
| 7 | extern: EUR-Lex DSGVO | Vertraulichkeitsblock (§7b) | „Art. 32 DSGVO (EUR-Lex)“ |

Inline-Mindestmaß (≥ 2 `[Anker](/ziel/)`-Marker) ist damit erfüllt. **Keine Links** zu `/einbauschraenke-nach-mass/*`, `/wohnmoebel-nach-mass/raumteiler-nach-mass/` oder `/praxiseinrichtung/`. Das wären Links in fremde Silos, und es gibt keine passende Brücke (die Brücke Empfang Praxis↔Büro gilt nur zwischen den beiden Pillars).

**Eingehend (Ziel: MIN_INBOUND 3 plus Rücklink von einem Geschwister). Stand des Budgets: master 45aa605, gezählt wie in `audit-internal-links.mjs` (Set der Ziele ohne Breadcrumb, plus externe Links):**
1. **Rücklink vom Geschwister, PFLICHT:** `src/lib/content/bueromoebel-nach-mass.ts` → `bmMoebeltypen.segments[2]` („Aktenschrank und Büroschrank“), Satz am Ende anhängen: „… wie wir Akten- und Ordnerschränke im Detail planen, zeigen unsere [Büroschränke nach Maß](/bueroeinrichtung/bueroschraenke-nach-mass/).“ **Budget aktuell 5/7** (bueroeinrichtung, bueroplanung, kontakt, moebelplaner, referenzen), danach 6/7. Kein Tausch nötig. Den veralteten Kopfkommentar dort anpassen („bueroschraenke-nach-mass, noch nicht gebaut“).
2. **Pillar, MUSS own-cluster-spokes, sonst Audit-Fehler:** `src/lib/content/bueroeinrichtung.ts` → `bueroTypische.row1[1]` („Aktenschränke & Stauraum nach Maß“), Marker in die Beschreibung, z. B. „…passgenau auf Ihre Räume und Aktenmengen zugeschnitten, als [Aktenschrank nach Maß](/bueroeinrichtung/bueroschraenke-nach-mass/) auf Wunsch mit abschließbaren Fächern.“ **Budget aktuell 9/10** (7 interne Ziele + 2 DGUV-Links), danach **10/10 = voll**. Künftige Kinder (Konferenztisch, Empfang) brauchen dort einen Tausch.
3. **Dritte Quelle:** `src/lib/content/referenzen.ts`, Karte „Sideboard in Betonoptik“ (Beschreibung: „ruhiger Stauraum im Büro“). `href` von `/bueroeinrichtung/bueromoebel-nach-mass/` auf die neue Seite umstellen. Laut Cluster-Map gehört „Sideboard als Stauraum“ hierher. `bueromoebel` behält seine Inbound-Quelle über die Karte „Arbeitsplatz & Stauraum im Büro“. Referenzen-Budget 14: aktuell 13 Ziele, danach 14 = am Limit. Mit `npm run audit:links` gegenprüfen. Der Hinweis `anker-relevanz` (Titel ohne Zielbegriff) wandert mit; Titel optional anpassen, z. B. „Sideboard-Stauraum in Betonoptik“.
4. **NICHT** `bueroplanung.ts` als Quelle nehmen. Das **Budget dort ist 7/7 voll** (5 intern + DGUV 215-441 + ArbStättV). Ein Link ginge nur per Tausch, und dort gibt es keinen schwächeren Link als den SOLL-Link zu `/referenzen/`.

**Bild:** `public/images/bueroeinrichtung/bueroschrankwand-nach-mass-grau.jpg` wird **noch auf keiner Seite genutzt** und erfüllt Regel 3 (ein Bild gehört auf eine Seite). Ich habe es angesehen: Es zeigt eine freistehende, dunkelgraue Schrankzeile mit Schiebetüren, etwa brusthoch, entlang einer Glaswand, oben Ablagekörbe, Ziegelwand, Holzboden. Alt-Vorschlag: „Freistehende Büroschrankzeile nach Maß mit dunkelgrauen Schiebetüren entlang einer Glaswand“. **Nicht „raumhoch“ nennen.** Als Hero nur bedingt geeignet: rechts ist es hell (Fenster), nach bilder.md braucht der Hero dort eine ruhige, dunkle Fläche. Besser in Bauformen- oder USP-Slot. `aktenschrankwand-nach-mass-buero.jpg` und `buero-galerie-schrankwand.jpg` liegen schon auf je 2 Seiten (Pillar + Geschwister), also nicht wiederverwenden.

## 7b · Belege (Outbound): Norm-/Vorschrift-/Messwert-Angaben mit max. 2 Links je Seite NUR auf Quellen der EXTERNAL_SOURCE_ALLOWLIST (src/lib/seo/linking-rules.ts: gesetze-im-internet.de, baua.de, dguv.de, eur-lex.europa.eu, rki.de, bundesgesundheitsministerium.de, amk.de, amk-ratgeber-kueche.de, verbraucherzentrale.de, nullbarriere.de); Ankertext = Name der Quelle; nie Hersteller/Wettbewerber; nichts erfinden; kostenpflichtige Normen (DIN/EN/ISO) als Text ohne Link
- **Link 1 (verifiziert 2026-10-20):** `https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679`, Anker „Art. 32 DSGVO (EUR-Lex)“. Geprüft wurde:
  - Art. 2 Abs. 1: Die DSGVO gilt auch für nichtautomatisierte Verarbeitung, wenn die Daten in einem Dateisystem gespeichert sind.
  - Art. 4 Nr. 6: Ein Dateisystem ist jede strukturierte Sammlung, die nach bestimmten Kriterien zugänglich ist.
  - Art. 32 Abs. 1: geeignete technische und organisatorische Maßnahmen.

  Zulässige Aussage: „Geordnet abgelegte Papierakten mit personenbezogenen Daten fallen unter die DSGVO. Art. 32 verlangt geeignete technische und organisatorische Maßnahmen, ein abschließbarer Schrank kann einer davon sein.“ **Nicht** „DSGVO-konform“ oder „erfüllt die DSGVO“.
- **Kandidat 2, nicht verifiziert:** ASR A1.2 „Raumabmessungen und Bewegungsflächen“ auf baua.de, Begriff „Möbelfunktionsfläche“ (Platz zum Öffnen von Türen und Auszügen). baua.de hat den automatischen Abruf mit 403 geblockt, Inhalt und Werte sind also ungeprüft. **Nur verlinken, wenn jemand das PDF manuell prüft.** Sonst den Platzbedarf vor dem Schrank ohne Quelle und ohne Zahl beschreiben. Wegen des Budgets (7/7, §7) müsste ein Link dafür ohnehin `/referenzen/` ersetzen. Empfehlung: weglassen.
- **Nicht nochmal verlinken:** DGUV 215-441 und ArbStättV (stehen schon auf `bueroplanung`), DGUV 215-410 und 215-443 (Pillar). Das sind keine Verbote, aber auf dieser Seite gibt es keine passende Aussage dafür.
- **Als Text ohne Link** (falls überhaupt): DIN EN ISO 216 (A4-Format). **Keine** DIN-Nummer für Ordnerhöhe, Ordnermaße, Sicherheits- oder Feuerschutzschränke nennen, weil nicht verifiziert.

## 8 · Do-NOT-claim-Liste (❌ aus FACTS.md, konkret für dieses Thema)
- **Preise:** keine €-Werte, Spannen, „ab“-Preise, Preise pro Meter, Rabatte oder Aktionen. Auch keine Relationen wie „Schiebetür teurer als Drehtür“ oder „Maß kaum teurer als Serie“. Ausnahme laut FACTS nur bei eigenem Planer-Beleg (§9). Sonst gibt es kein `offers` im Schema.
- **Garantie:** keine Garantie, insbesondere nicht „5 Jahre Garantie“.
- **Siegel:** kein „Made in Germany“-Siegel, kein NTV/DISQ und kein „Testsieger“.
- **Muster:** kein Musterpaket, keine Dekorproben, kein Musterversand.
- **Lieferzeit:** keine Wochenzahl, keine Expresslieferung.
- **Material:** keine Zahl an Dekoren oder Farben (63/16 sind Wettbewerberzahlen), keine Materialstärken (19 mm Korpus, 8 mm Rückwand). Plattenwerkstoffe wechseln je Projekt. Keine Hersteller von Platten, Beschlägen oder Schlössern, keine Holzarten als Alleinstellung.
- **Schließtechnik:** keine konkreten Schließsysteme (Zentralverriegelung als Standard, elektronisches Schloss, Einbindung in die Schließanlage). Nur „abschließbar auf Wunsch“.
- **Schutz:** nicht „DSGVO-konform/-zertifiziert“, „einbruchsicher“, „Sicherheitsschrank“, „feuerfest“, „Brandschutz“ oder Normen wie EN 14450, EN 1143-1, EN 15659/1047.
- **Kante:** nicht „wasserfest“, kein Tauchtest. Nur „fugenlos, feuchtigkeitsbeständig“.
- **Fast-eigene Maße:** keine Mindest- oder Maximalmaße, keine Traglasten in kg je Fachboden. Die Ordnerwerte in §3 sind Orientierung, nicht Fast-Spezifikation.
- **Rollladen- oder Jalousieschrank:** nicht als Angebot nennen, nicht belegt.
- **Firmendaten:** kein „Meisterbetrieb seit <Jahr>“, kein „1996 in Espelkamp“ (Gründung war in Rahden-Tonnenheide), kein „25+ Jahre“, kein „12+ Mitarbeiter“.
- **Finanzierung:** keine Finanzierung und kein Leasing (Gewerbe).
- **Referenzen:** „40 % mehr Stauraum“ gehört nur zum Privatprojekt Espelkamp-Mittwald und wird nicht übertragen. Keine erfundenen Projekte, Kunden, Orte oder Kundenstimmen. Kein Produkt-`aggregateRating`. Google ~4,2★ nur als Signal der Organisation und nur nach Live-Prüfung.
- **Möbelplaner:** kein Selbstbestellen, kein Sofortpreis-Shop.
- **Wettbewerber:** keine Namen im Text.
- **Montage-Zeiten:** „außerhalb der Geschäftszeiten oder in Etappen“ hier nicht als Zusage ausbauen. Steht nur in der Cluster-Map und der Pillar-Copy, nicht in FACTS.

## 9 · Offene Punkte / Wissenslücken (was NUR der Kunde weiß; IMMER inkl. Geo-Reichweite „bundesweit oder montage-gebunden?"). Wird NICHT beim Kunden erfragt, sondern vor dem Schreiben gegen FACTS.md + den Antwort-Fundus des Mandanten aufgelöst; alles Unbelegte bleibt Leerstelle und wird nicht behauptet.
1. **Geo-Reichweite, aufgelöst:** Aufmaß, Einbau und Montage ist **montage-gebunden auf ~200 km um Espelkamp** (OWL, Minden, Lübbecke, Bielefeld, Osnabrück). **Lieferung bundesweit** (FACTS + kundenwissen, gilt für alle Produktbereiche). **Leerstelle:** Wie läuft ein Einbau wand-zu-wand außerhalb des Radius, wenn Fast nicht selbst aufmisst und montiert? Dort nur „Lieferung bundesweit“ schreiben, keinen millimetergenauen Einbau versprechen.
2. **Preise:** Für den Büroschrank gibt es keinen Planer-Beleg. Ohne eigenen gerundeten Planer-Beleg (Ausnahmeweg laut FACTS, gekennzeichnet als Schätzung des Möbelpreises zzgl. Lieferung und Montage) gibt es keine Zahl. Der Kostenblock bleibt bei Faktoren und individuellem Angebot.
3. **Schließtechnik:** Welche Schlossarten möglich sind (Einzelschloss, gleichschließend, zentral), ist unbekannt. Nur „abschließbar auf Wunsch“.
4. **Hängeregistratur und Auszüge:** Typ der Auszüge, Vollauszug und Beschläge unbekannt. Nur „auf Anfrage“, ohne System und ohne Maß.
5. **Frontvarianten über Dreh- und Schiebetür hinaus** (Rollladen, Glas, Akustik- oder Pinnwandfronten): unbekannt, weglassen. Die Schiebetür ist durch das Foto belegt.
6. **Fast-eigene Maße, Materialstärken, Traglasten:** unbekannt. Nur „nach Aufmaß, wand-zu-wand ohne Passleisten“.
7. **Lieferzeit:** keine Angabe. Formulierung: „Termin nach Aufmaß und Freigabe“.
8. **Montage im laufenden Betrieb oder außerhalb der Geschäftszeiten:** nicht in FACTS. Leerstelle, nicht ausbauen.
9. **Herkunft der Projektbilder:** Ob `bueroschrankwand-nach-mass-grau.jpg` ein Fast-Projekt ist, wer der Kunde war, wo es steht und welches Material verwendet wurde, ist unbekannt. Nur das zeigen, was das Bild zeigt (Schiebetüren, freistehend), keine Projektgeschichte. Motive für eine Innenansicht mit Ordnern oder einen abschließbaren Schrank **fehlen**.
10. **Möbelplaner:** deckt „Schränke“ ab (kundenwissen). Ob er Büro-Spezifika abbildet (Ordnerfächer, Schloss, Auszüge für Hängeregister), ist unbekannt. Nur „Maße, Fronten und Fächer vorplanen“ schreiben.
11. **Google-Bewertungen:** Wert vor jeder Nennung live prüfen.
12. **Nachfrage-Erwartung, keine Kundenfrage:** Suchvolumen 40 laut signale gegenüber 200–400 laut keyword-map. Den Erfolg der Seite an Anfragen aus dem „nach Maß“-Longtail und der internen Linkkraft messen, nicht am Head-Term.

> §9 wird nicht beim Kunden nachgefragt (Ben, 2026-07-28). Der Research-Lauf W43 hat die Punkte am 2026-10-20 aufgelöst. Geprüft wurde gegen `kundenwissen.md`, `docs/seo/brand/FACTS.md` (origin/master 45aa605) und die vorhandenen Kunden-Antworten zum Büro-Cluster: **Discovery bueroeinrichtung, Kunde 2026-06-06**, im Kunden-Repo unter `docs/seo/research/bueroeinrichtung.kit.md` §10, im Folgenden „Discovery Büro Q<n>". Rangfolge: FACTS gewinnt bei Widerspruch.

### 9a · ✅ Beantwortet — gegen `kundenwissen.md` + `FACTS.md` + Discovery Büro aufgelöst (2026-10-20, W43 Research)
1. **Geo-Reichweite (Pflicht, explizit):** Beratung vor Ort, kostenloses Aufmaß, Einbau und Montage sind **montage-gebunden: rund 200 km um Espelkamp**, mit eigenem Team. Nennbar sind ganz OWL, Espelkamp, Minden, Lübbecke, Osnabrück und Bielefeld. **Lieferung deutschlandweit.** Telefonberatung geht ortsunabhängig. Daraus folgt für Punkt 1 der Engine-Liste: Außerhalb des Radius gibt es nur Lieferung. Ein millimetergenauer Einbau wand-zu-wand wird dort **nicht** versprochen. → **Writer:** Geo in Prozess-Schritt 5 und in einer FAQ nennen, nicht in Title oder Meta (Geo-Limiter hemmt die CTR, siehe Memory „Geo-Limiter"). *(FACTS „Montagegebiet ~200 km" + „Geo-Reichweite je Leistung"; kundenwissen.md § Geo & Service; Discovery Büro Q1)*
2. **Büro- und Aktenschränke sind aktives Segment:** Fast bietet alle Büro-Segmente an, ausdrücklich auch „Büro-/Aktenschränke" und „Regalwände". → **Writer:** als Kernleistung formulieren, nicht als Randangebot. *(Discovery Büro Q3)*
3. **Erfahrung:** „Zahlreiche komplette Büroeinrichtungen in OWL umgesetzt" ist als belegte Erfahrung nutzbar, ohne Kundennamen, Orte oder Branchen. Arminia gehört nicht hierher. *(Discovery Büro Q2; FACTS Arminia = Kabine/Loge)*
4. **Abschließbar:** „auf Wunsch mit abschließbaren Fächern für vertrauliche Unterlagen" steht so schon auf dem live Pillar (`bueroeinrichtung.ts` Z. 119) und passt zur Grundhaltung „alles auf Anfrage". → **Writer:** genau so formulieren, ohne Schlosssystem (→ 9b-1). *(Live-Copy Pillar; kundenwissen.md § Leistungsumfang)*
5. **Material:** Es gibt keinen festen Katalog, das Material richtet sich nach Raumdesign und Kundenwunsch. Belegt ist nur „Massivholz + branchenübliche hochwertige Materialien, Oberflächen und Fronten nach Wunsch". Beschläge und Plattenwerkstoffe wechseln je Projekt, keine Herstellernamen. → **Writer:** keine Dekor-, Farb-, Stärken- oder Markenliste. *(Discovery Büro Q6; FACTS „KUNDE BESTÄTIGT: Materialien" + „Beschläge / Plattenwerkstoffe" 2026-10-04; kundenwissen.md § Belege, Referenzen, Material)*
6. **PU-Kantenverleimung:** „fugenlos" und „feuchtigkeitsbeständig" sind nutzbar. Der Bezug auf die Vorderkanten der Fachböden, an denen Ordner täglich reiben, ist eine zulässige Anwendung der belegten Technik. **Nicht** „wasserfest", kein Tauchtest. *(FACTS § Fertigung, Material & Qualität)*
7. **Fertigung:** Eigenfertigung „alle Teile in Eigenregie" in Espelkamp, Meisterbetrieb (ohne Jahr), Familienbetrieb in 2. Generation, Homag-Maschinen und rund 1.000 m² Fertigung (Kunde bestätigt 2026-06-05). → **Writer:** „Eigenfertigung in Espelkamp" reicht. Wird Technik genannt, dann „Homag-Maschinen" (FACTS-Begriff). „CNC" steht zwar in Live-Copy mehrerer Seiten, in FACTS aber nicht. Es kommt aus dem vorbefüllten Intake (`COMPANY_INTAKE.md` Z. 32), also nicht als neuen Claim ausbauen. *(FACTS § KUNDE BESTÄTIGT, Historie, Fertigung)*
8. **Prozess:** Beratung (vor Ort, im Büro oder telefonisch) → **kostenloses Aufmaß vor Ort** → **3D-Planung** → Fertigung → Montage durch das **eigene Montageteam**. *(FACTS § Prozess / Service)*
9. **Preise:** strikt individuell. Keine Preise, Spannen, „ab"-Werte und keine Relationen. Die Planer-Preisausnahme in FACTS gilt nur mit eigenem, gerundetem Planer-Beleg. Für den Büroschrank liegt keiner vor, also **keine Zahl**. Kostenblock = Tabelle 3 (Faktoren) plus individuelles Angebot nach kostenlosem Aufmaß. Kein `offers` im Schema. *(FACTS „Preise: IMMER individuell" + Ausnahme 2026-10-04; kundenwissen.md § Preise & Termine)*
10. **Termin:** „verbindlicher Termin nach Aufmaß und Freigabe", keine Wochenzahl. *(kundenwissen.md § Preise & Termine)*
11. **Finanzierung/Leasing:** auf dieser Seite **nicht** erwähnen, für Gewerbe/Büro ausdrücklich nein. *(Discovery Büro Q7; FACTS Küche-Service; kundenwissen.md § Preise & Termine)*
12. **Machbarkeit Sondersituationen** (Nische, Dachschräge, um Fenster, Heizkörper und Steckdosen herum, freistehende Schrankzeile mit Sichtrückseite): offen als machbar formulieren („für jedes Problem gibt es eine Lösung"), keine Positiv- oder Negativliste. *(kundenwissen.md § Leistungsumfang)*
13. **Möbelplaner:** deckt Schränke ab. Er wird als **Vorbereitung der persönlichen Planung** positioniert, nicht zum Selbstbestellen. Primäres Ziel bleibt die Anfrage über das Kontaktformular. *(kundenwissen.md § Möbelplaner & Conversion)*
14. **Positionierung B2B:** Anrede „Sie", Gewerbe-Kontext. Homeoffice höchstens als Nebensatz, nicht als eigenes Modul. *(Discovery Büro Q8; FACTS Anrede)*

### 9b · ⬜ Leerstelle — nicht behaupten (je eine Ausweich-Anweisung an den Writer)
1. **Schließtechnik** (Einzelschloss, gleichschließend, Zentralverriegelung, elektronisch, Schließanlage): unbekannt. → **Writer:** nur „auf Wunsch abschließbar". Kein System, keine Schlüsselzahl.
2. **Hängeregistratur und Auszüge** (Auszugstyp, Vollauszug, Beschläge, Registerformate): unbekannt. → **Writer:** „Auszüge für Hängeregister planen wir auf Anfrage ein", ohne System und ohne Maß.
3. **Frontvarianten über Dreh-, Schiebetür, offen und Auszug hinaus** (Rollladen, Glas, Akustik- oder Pinnwandfronten): unbekannt. → **Writer:** weglassen. Die Schiebetür ist durch das Foto belegt. Akustiklösungen sind zwar generell Leistung (Discovery Büro Q5), die Ausführung an Schrankfronten aber nicht. Akustik gehört zu `bueroplanung`, hier nur verlinken.
4. **Fast-eigene Maße, Materialstärken, Traglasten:** unbekannt (kundenwissen: keine Maß-Bandbreiten erfinden). → **Writer:** Fast-seitig nur „nach Aufmaß, wand-zu-wand ohne Passleisten". Keine Mindest- oder Maximalmaße, keine kg je Fachboden. **Framing-Auflage zu Tabelle 1 „Der Ordner als Maßgabe":**
   - Erlaubt als allgemeines Format-Orientierungswissen mit „ca.": Ordner-Formatmaße (A4-Ordner rund 32 cm hoch und rund 29 cm tief, breiter Rücken 8 cm, schmaler Rücken 5 cm), die daraus gerechnete Kapazität je Meter (≈ 12 breite oder ≈ 20 schmale Ordner) und das Rechenbeispiel. Ausdrücklich als Rechenhilfe kennzeichnen („vor dem Aufmaß zählen wir Ihren Bestand"), nie als Fast-Spezifikation. Lichte Fachhöhe und Innentiefe nur als Herleitung beschreiben („Ordnerhöhe plus Griffluft"), mit „ca." und ohne „mindestens".
   - **Gestrichen:** die Zeile „Ordnerhöhe (OH) bei Serienschränken ≈ 37–38 cm, 2/3/5 OH = …". Die Werte sind herstellerabhängig und stammen aus Wettbewerber- bzw. SERP-Angaben (form.bar nennt 36 cm), ohne Allowlist-Beleg. OH nur als Begriff erklären („Serienschränke rechnen in Ordnerhöhen, nach Maß entfällt das Raster"), ohne cm. Dasselbe gilt für FAQ 3 in §5.
5. **Montage im laufenden Betrieb oder außerhalb der Geschäftszeiten:** nicht in FACTS oder kundenwissen belegt. → **Writer:** weglassen, nicht als Zusage ausbauen.
6. **Herkunft des Projektbilds** `public/images/bueroeinrichtung/bueroschrankwand-nach-mass-grau.jpg` (Kunde, Ort, Material, ob Fast-Projekt): unbekannt. Geprüft am 2026-10-20: Das Bild wird in `src/` noch auf keiner Seite verwendet. → **Writer/Integration:** nur zeigen und beschreiben, was zu sehen ist (freistehende Schrankzeile mit dunkelgrauen Schiebetüren entlang einer Glaswand). Keine Projektgeschichte, nicht „raumhoch", kein Material. Für eine Innenansicht mit Ordnern oder einen abschließbaren Schrank gibt es kein Motiv, also keinen Alt-Text für ein unpassendes Bild biegen (bilder.md).
7. **Möbelplaner-Funktionsumfang für Büro** (Ordnerfächer, Schloss, Hängeregister-Auszug): unbekannt. → **Writer:** nur „Maße, Fronten und Fächer vorplanen".
8. **Google-Bewertungen:** Stand unbekannt (FACTS ~4,2★/~14 = Aggregator, „live gegenprüfen"). → **Writer:** weglassen oder nur nach Live-Prüfung als Organisations-Signal. Kein Produkt-`aggregateRating`.
9. **Schutzniveau Vertraulichkeit** (Sicherheitsschrank, Einbruch- oder Feuerschutz, „DSGVO-konform"): nicht belegt. → **Writer:** nur die Formulierung aus §7b (Art. 32 DSGVO, „ein Baustein"), kein Konformitäts- oder Sicherheitsversprechen, keine EN-Norm.
10. **Referenzprojekt Büroschrank:** Es gibt kein freigegebenes Einzelprojekt mit Ort (kundenwissen § Belege). → **Writer:** keine Anekdote, keine Projektzahl. „40 % mehr Stauraum" gehört zum Privatprojekt Espelkamp-Mittwald und wird nicht übertragen. Trust nur über Discovery Büro Q2 (9a-3) und den Link zu `/referenzen/`.

**Offene Leerstellen: 10** (9b-1 bis 9b-10): Schließtechnik · Hängeregister/Auszugssystem · weitere Frontvarianten inkl. Akustikfront · Fast-Maße/Stärken/Traglasten (mit Framing-Auflage Tabelle 1, OH-Zeile gestrichen) · Montage im laufenden Betrieb · Bildherkunft/fehlende Innenansicht · Planer-Funktionsumfang Büro · Google-Bewertungen · Schutzniveau Vertraulichkeit · Referenzprojekt. Geo aufgelöst (montage-gebunden ~200 km, Lieferung bundesweit). In REVIEW.md unter „Offene Fakten (nicht behauptet)" ausweisen.

## 10 · Authoring-Briefing (Lauf 2026-11-04, Batch buero Seite 1 von 2) — VERBINDLICH für Writer, QC und Chef

**Discovery-Antworten / Wissensstand:** §9a gilt unverändert (gegen FACTS.md + kundenwissen.md am 2026-11-04 erneut geprüft; seit dem 2026-10-20 kam nur der Ladenbau-Abschnitt in kundenwissen.md dazu, der diese Seite nicht betrifft). §9b-Leerstellen gelten. Zusätzlich gesperrt: **keine Aussage zu Traglast, Durchbiegen, „Ordnerlast", Fachbodenstärke oder wie Fast Fachböden/Mittelwände dimensioniert** (das WIE ist eine Leerstelle, auch nicht als Methode umschreiben). Keine Aussage, ob ein bestehender Schrank später erweitert werden kann.

**Modul = `src/lib/content/bueroschraenke-nach-mass.ts` (Struktur fest, nur Texte).** Sektionsfolge und Inhalt je Sektion — jedes Thema hat genau EINEN Ort, an dem es ausgeführt wird:
1. `bsHero` — H1 „Büroschränke und Aktenschränke nach Maß" (oder sehr nah daran, ≤ 45 Zeichen). `intro` = Direktantwort ≤ 40 W (Was ist das + Ordner als Maßgabe + Meisterbetrieb Espelkamp, Aufmaß und Montage eigenes Team).
2. `bsIntroStats` — heading + introBefore/introBold/introAfter (zusammen ein Satz, introAfter ≤ 18 W). col1 = „vom Aktenbestand zum Schrank" (≤ 24 W), col2 = Eigenfertigung + Link `[maßgefertigte Büroeinrichtung](/bueroeinrichtung/)` (≤ 28 W), col3 = Montageradius rund 200 km / darüber hinaus Lieferung (≤ 30 W, **andere Worte als bueromoebel-nach-mass col3**). sinceSub ≤ 12 W. CTA-Labels konkret (kein „mehr erfahren").
3. `bsCtas.intro` — heading + linkText (Beratung/Aufmaß, kein Preis).
4. `bsOrdner` (SpecTable „Der Ordner als Maßgabe") — **genau 3 Zeilen**: A4-Ordner stehend (rund 32 cm hoch, rund 28,5 cm tief, Rücken 8 cm breit oder 5 cm schmal) · lichte Fachhöhe (rund 33–35 cm = Ordner plus Griffluft, verstellbare Fachböden) · Ordner je Meter Fachboden (≈ 12 breite oder ≈ 20 schmale). `intro` stellt klar: allgemeine Formatwerte als Rechenhilfe, keine Fast-Spezifikation, verbindlich nach dem kostenlosen Aufmaß. **Innentiefe, Ordnerhöhe (OH) und das Rechenbeispiel stehen NICHT in der Tabelle** (sie gehören in FAQ 1, 2, 3). Tabellenzellen ≤ 18 W.
5. `bsBauformen` (SegmentCards, 6 Karten, body je ≤ 40 W): (1) raumhohe Aktenschrankwand wand-zu-wand ohne Passleisten, bis zur Decke · (2) halbhoher Aktenschrank unter der Fensterbrüstung mit Abstellfläche · (3) freistehende Schrankzeile, die den Raum gliedert, Rückseite als Sichtseite, Schiebetüren (keine Akustik-Aussage) · (4) Nische, Dachschräge, um Fenster, Heizkörper und Steckdosen herum · (5) abschließbare Fächer für Personal-, Mandanten- oder Patientenakten, „auf Wunsch", mit Verweis auf den Datenschutz-Block weiter unten (dort steht die Einordnung, hier nicht) · (6) Container und Sideboard am Arbeitsplatz, 1–2 Sätze + Link `[maßgefertigte Büromöbel](/bueroeinrichtung/bueromoebel-nach-mass/)`. Keine Rollladen-, Glas- oder Akustikfronten.
6. `bsFronten` (SpecTable, 4 Zeilen Drehtüren/Schiebetüren/Offene Fächer/Auszüge × Platz vor dem Schrank/Zugriff/Gut für) — Kriterium ist der Platz, nicht der Preis. Zellen ≤ 12 W. Auszüge „Gut für": Hängeregistratur und Kleinmaterial. Kein Schlosssystem.
7. `bsVertraulich` (UspHighlight, body ≤ 55 W) — sachlich nach §7b: geordnet abgelegte Papierakten mit personenbezogenen Daten fallen unter die DSGVO; Art. 32 verlangt geeignete technische und organisatorische Maßnahmen; ein abschließbarer Schrank kann einer davon sein; das Schutzniveau legt Ihr Datenschutzkonzept fest. Link-Anker exakt `[Art. 32 DSGVO (EUR-Lex)](…)` behalten. Nie „DSGVO-konform", „sicher", „einbruch-/feuerfest".
8. `bsMaterial` (SegmentCards, 3 Karten, body je ≤ 40 W): (1) Oberflächen und Fronten nach Raumdesign, kein fester Katalog, Massivholz und branchenübliche hochwertige Materialien · (2) PU-Kantenverleimung an den Vorderkanten von Fachböden und Fronten, wo Ordner täglich reiben: fugenlos, feuchtigkeitsbeständig (andere Worte als bueromoebel: keine Schreibtischkante, keine Teeküche) · (3) Eigenfertigung in Espelkamp: alle Teile in Eigenregie, Meisterbetrieb (ohne Jahr), Homag-Maschinen (nicht „CNC").
9. `bsProcess` (5 Schritte, description je ≤ 26 W): (1) Aktenbestand und Raum klären, telefonisch oder vor Ort, + Link `[Büroplanung](/bueroeinrichtung/bueroplanung/)` für die Frage, wie viel Stauraum wohin gehört · (2) kostenloses Aufmaß vor Ort · (3) 3D-Planung mit Fachaufteilung und Fronten · (4) Fertigung in Espelkamp nach Ihrer Freigabe · (5) Montage durch das eigene Team im Umkreis von rund 200 km; weiter entfernt Lieferung, **kein** Einbau-Versprechen dort.
10. `bsKosten` (SpecTable, 6 Zeilen aus §3 Tabelle 3, Zellen ≤ 18 W, heading als Frage „Was kostet ein Büroschrank nach Maß?") — keine €-Werte, keine Relationen („teurer als").
11. `bsMoebelplaner` (body ≤ 48 W) — Planer als **Vorbereitung**: Maße, Fronten und Fächer vorplanen; Aufmaß, Beratung, Fertigung, Montage übernimmt Fast. Link `[Möbelplaner](/moebelplaner/)` behalten.
12. `bsTestimonialsHeading` — eine Zeile.
13. `bsCtas.final` + `bsCtas.phone.label`.
14. `bsFaq` — **genau 6 Fragen, answer je ≤ 36 W**, keine davon aus der FAQ von bueromoebel-nach-mass (Kosten, Liefergebiet, optisch zusammen, Tischler vs. Serie, PU-Kante …):
   1. Was bedeutet „OH" bei Aktenschränken, und braucht ein Schrank nach Maß dieses Raster? (Serienschränke rechnen in Ordnerhöhen, **ohne cm**; nach Maß sind die Fachhöhen frei, der Schrank geht bis zur Decke.)
   2. Wie tief muss ein Büroschrank für Aktenordner sein? (Ordner rund 28,5 cm tief → innen ab rund 30 cm; Außentiefe = innen + Rückwand + Front; Schiebetüren brauchen zusätzliche Lauftiefe; festgelegt nach dem Aufmaß.)
   3. Wie viele Ordner passen in eine Schrankwand? (**einziger Ort für das Rechenbeispiel**: 3 m × 5 Fächer × 12 ≈ 180 breite Ordner, durch Seiten- und Mittelwände etwas weniger.)
   4. Was sollte ich vor dem Aufmaß vorbereiten? (Bestand in laufenden Metern, breite/schmale Ordner, Hängemappen, was abgeschlossen werden muss, Fotos der Wand mit Fenstern, Heizkörpern, Steckdosen.)
   5. Lassen sich Auszüge für Hängeregister einbauen? („planen wir auf Anfrage ein", Format der Hängemappen beim Aufmaß aufnehmen; kein System, kein Maß.)
   6. Wann steht der Montagetermin fest? (verbindlicher Termin nach Aufmaß und Freigabe, keine Wochenzahl.)
   **Kein FAQ-Satz wiederholt einen Tabellenwert oder eine Kartenaussage**; wo nötig auf die Tabelle verweisen. Datenschutz, Kosten und Liefergebiet stehen NICHT in der FAQ (eigene Sektionen bzw. Geschwister-FAQ).
15. Zusätzlich einen Block `### meta` mit `metaTitle:` (≤ 60 Zeichen, Muster „Büroschränke nach Maß vom Tischler | Fast Systemmöbel"), `metaDescription:` (≤ 155 Zeichen: Ordner als Maßgabe, abschließbar, kostenloses Aufmaß, Montage durch eigenes Team; **kein Geo-Limiter am Schluss**), `ogDescription:` (≤ 155 Zeichen).
- `imageAlt`/`bandAlt` NICHT ausgeben oder ändern (die setzt die Integration nach Bildsichtung).

**Links — exakt diese 6 Ziele, keine weiteren (Budget 7, Platz 7 ist für den Rücklink aus `konferenzraum-einrichten` reserviert, Batch Seite 2):** `/bueroeinrichtung/` (col2Body) · `/bueroeinrichtung/bueromoebel-nach-mass/` (Bauform-Karte 6) · `/bueroeinrichtung/bueroplanung/` (Prozessschritt 1) · `/moebelplaner/` (Möbelplaner-Sektion + col3CtaHref) · `/kontakt/` (CTAs, hrefs bestehen schon) · EUR-Lex (Vertraulich-Block). **Abweichung von §7:** `/referenzen/` wird hier nicht verlinkt (SOLL, Budget). Kein Link auf `/bueroeinrichtung/konferenzraum-einrichten/` (noch nicht gebaut). Anker nie „Büromöbel nach Maß" für `/bueroeinrichtung/`.

**Wortumfang:** ~1.500–1.800 W sichtbarer Text reichen; Länge entsteht aus Tabellen und Karten, nicht aus Prosa. Die Wortgrenzen je Prop oben sind harte Obergrenzen (Textdichte-Gate gegen die Vorlage `bueromoebel-nach-mass`).


## 10a · Retry-Hinweis (nach Lauf 2026-11-04, ROT)
Chefredakteur pass=false mit 4 Copy-Befunden (col1Body Bestand → Breite/Höhe, Bauform-Titel „Einbauschrank …" ins Privat-Silo, Kostenzeile „Höhe und Einbau", Ordner-Intro „Formatmaße"). Alle vier sind in `bueroschraenke-nach-mass.draft.patch` gefixt, Integration komplett (check grün). **Retry:** Modul mit dem Draft seeden, alle Props als Bestand sperren (nur ändern, wenn ein neuer Befund es verlangt). Sperren zusätzlich: Breite und Höhe kommen aus dem Raum, aus dem Bestand nur die Fächerzahl; kein „Einbauschrank" ohne Büro-Bezug; Kostenzeilen nennen die Bauformen genau so getrennt wie die Bauform-Karten. Wortgrenzen in §10 gelten nur bis zum `prop-laengen`-Limit (answer ≤ 40 W, description ≤ 28 W), nicht strenger. Platz 7 im Budget hält der Draft für den Rücklink aus `konferenzraum-einrichten` frei (steht im Konferenzraum-Draft).

## 10b · Retry-Lauf 2026-11-11 (W46) — VERBINDLICH für Writer, Humanizer, QC und Chef; geht §10 vor, wo beide sich widersprechen

**Bestand = das übergebene Modul.** Es ist die abgenommene Fassung aus Lauf 1 mit allen vier Chef-Fixes, dazu zwei Konsistenz-Glättungen vor diesem Lauf (Hero: „der genau in Ihren Raum passt" statt „wand-zu-wand", weil die Seite auch freistehende und halbhohe Bauformen führt; Kostenzeile heißt „Bauform und Einbau"). Aufgabe dieses Laufs ist **prüfen und nur gezielt ersetzen**, nicht neu schreiben:
- Eine Prop wird nur geändert, wenn ein konkreter Befund es verlangt (Faktenfehler, Widerspruch zu einer anderen Sektion, Verstoß gegen §8/§9b, KI-Floskel). Der Ersatz ist **gleich lang oder kürzer**. **Keine neuen Sätze** zu Rechtslage, Datenschutz, Normen, Geltungsbereich, Maßen oder Zahlen.
- **Wörtlich gesperrt (nicht umformulieren, nicht ergänzen):** `bsVertraulich.body` komplett (DSGVO/Art. 32, „ein Baustein", „legt Ihr Datenschutzkonzept fest, nicht der Tischler") · `bsOrdner.intro` + alle `bsOrdner.rows` (Ordnerwerte = Rechenhilfe) · `bsIntroStats.col1Body` · `bsBauformen.segments[3].title` „Aktenschrank für Nische und Dachschräge" · `bsKosten.rows[1]` · FAQ 2 und 3 (Innentiefe „ab rund 30 cm", Rechenbeispiel 3 × 12 × 5 ≈ 180) · alle Links und Anker.
- **Wortgrenzen:** Die Zahlen in §10 sind Richtwerte („ca."), **kein Abnahmekriterium**. Maßgeblich ist allein das Textdichte-Gate `prop-laengen` gegen `bueromoebel-nach-mass`: Hero-/Sektions-`intro` ≤ 41 W · `col1Body` ≤ 24 · `col2Body` ≤ 29 · `col3Body` ≤ 31 · Karten-/USP-`body` ≤ 57 · Schritt-`description` ≤ 28 · FAQ-`answer` ≤ 40. Der Bestand liegt überall darunter.
- **Nicht Teil der Copy-Abnahme:** Bildpfade, `imageAlt`/`bandAlt`, Metadata, Knoten/Sitemap/Rücklinke. Das setzt die Integration nach Bildsichtung (Bild-Vorschläge gehen an Ben ins REVIEW). Metadata-Bestand: Title „Büroschränke nach Maß vom Tischler | Fast Systemmöbel" · Description „Büro- und Aktenschränke nach Maß, geplant nach Ihren Ordnern und auf Wunsch abschließbar. Kostenloses Aufmaß, Montage durch unser eigenes Team." → im `### meta`-Block unverändert zurückgeben, außer ein Befund verlangt es.
- **Links:** genau die 6 Ziele aus §10. Kein Link auf `/bueroeinrichtung/konferenzraum-einrichten/` (diese Seite ist Batch-Seite 1).
- **Chef:** pass=false nur für Befunde, die live wirklich stören (falsche/unbelegte Aussage, Widerspruch, Silo-/Kannibalisierungs-Signal, fehlender CTA). Stil-Hinweise ohne Fehler als „nicht blockierend" kennzeichnen.
