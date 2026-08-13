# Research-Kit: Küche planen (/kueche-planen/)

## 1 · Wortzahl-Korridor → **1.600–2.100 W · Ziel ~1.800 W** (SERP-Median 431) — verbindlich, kein Raten
Voller Slug: `/kuechen-nach-mass/kueche-planen/` · Archetyp: **Ratgeber (Planungs-/HowTo)** · Intent: **I (informational)**, Recherche-Phase.
**Korridor-Politik (Ben, 2026-07-15) — überschreibt die Engine/Playbook-Defaults:** Ziel ~1.800 W, Korridor **1.600–2.100**. Die Engine hatte deterministisch **2000–2400** gesetzt (Ratgeber-Archetyp-Min 2000), die Playbook-Defaults (2.400–3.200) und DEPTH.md (2.000–3.500) gelten als **überschrieben**. Regel „Boden nie unter den SERP-Median bei gleichem Intent": Median 431 W, die **echten redaktionellen Sieger** (kuechen-atlas 1235, kuechenspezialisten 1058) liegen bei 1.058–1.235 W — beide **unter** 2.100, also **kein Anheben** des Korridors nötig; unser Boden 1.600 liegt bereits deutlich über allen echten Content-Treffern. Der niedrige Median entsteht durch tool-lastige Konfigurator-Landingpages (Höffner 140, Roller 261, Nolte 233) und wird bewusst nicht als Boden genommen.
**Writer-Hinweis (Zähl-Bias ~8 %):** Gegen das **ZIEL ~1.800 W planen**, NICHT gegen den Boden — Zähl-Werkzeuge liegen ~8 % auseinander, wer auf 1.600 schreibt, unterläuft im Gate leicht den Korridor. Kurze, dichte Chunks mit hohem Mehrwert statt Wortmasse; Tiefe kommt aus den Depth-Modulen (§3), nicht aus wässrigen Absätzen. Anti-Fülltext-Klausel (Gate 5): lieber 1.800 starke als 2.300 wässrige Wörter.

## 2 · Intent & Job-to-be-done (was will der Nutzer sehen/tun)
**JTBD:** „Ich will VOR Beratung/Konfigurator selbst verstehen, wie man eine Küche systematisch plant — Raum ausmessen, richtige Form wählen, Ergonomie/Arbeitsdreieck einhalten, Budget grob einschätzen, typische Fehler vermeiden — um informiert und selbstbewusst ins Beratungsgespräch zu gehen." Er will die Antwort in **einer** Quelle vollständig, sonst Pogo-Sticking.
**Micro-Intents (aus Rohrecherche, alle bedienen):**
1. Schritt-für-Schritt-Ablauf verstehen (Reihenfolge: Aufmaß → Form → Arbeitsdreieck/Ergonomie → Geräte → Material → Beleuchtung → Budget).
2. Maße & Mindestabstände klären (Arbeitsdreieck, 120 cm Bewegungsfreiheit, Arbeitshöhe berechnen).
3. Passende Küchenform für den eigenen Grundriss finden (Zeile, L, U, G, Insel).
4. Budget grob einordnen + Beratung/Aufmaß als kostenlos einordnen (KEINE €-Zahlen, siehe §8).
5. Typische Planungsfehler vermeiden (z. B. Geräte/Fronten vor Grundriss fixieren).
6. Küche selbst ausmessen + Anschlüsse (Wasser, Strom, Abwasser, Lüftung) vorab prüfen.
7. Wann Profi/Tischler statt Online-Konfigurator (unser Winkel, §6).
**Ton (Playbook §7):** lehrend & großzügig, „Sie", neutral-ratgebend, scanbar; Fast-Stimme nur im Praxis-Einschub + Soft-CTA. Ehrlichkeit als Tonmittel („wann sich Maß NICHT lohnt").

## 3 · Pflicht-Module (intent-abgeleitet) + Tiefe-Blaupause
**Pflicht-Module (ALLE Top-Treffer haben sie / Playbook §2 MUSS):**
1. **Frage-H1 + 40–60-Wort-Direktantwort (TL;DR)** ganz oben — self-contained, KI-zitierbar. `MUSS (AEO-Kern)`
2. **HowTo-Schrittfolge**, durchnummeriert, je Schritt Mini-H3 + Reihenfolge/Maß/Zeitpunkt (6–7 Schritte: Aufmaß & Anschlüsse → Küchenform → Arbeitsdreieck/Ergonomie → Geräte/Zonen platzieren → Material/Fronten/Arbeitsplatte → Beleuchtung → Budget/Angebot). `MUSS (Planungs-Typ) + HowTo-Schema`
3. **≥1 Tabelle** — empfohlen **2**: (a) Küchenform × Raumgröße/Grundriss-Eignung (Zeile/L/U/G/Insel), (b) Maß-/Ergonomie-Checkliste (Arbeitshöhe nach Körpergröße, Mindestabstände, Bewegungsfreiheit). `MUSS`
4. **„Typische Planungsfehler / Worauf achten"-Block** (Liste, 6–8 Fehler). `MUSS`
5. **Ergonomie/Arbeitsdreieck-Abschnitt mit konkreten cm-Angaben** (Arbeitshöhe, Mindestabstände, Bewegungsfreiheit). `MUSS`
6. **Praxis-Einschub aus der Werkstatt** (1 echtes Fast-Detail: Espelkamp/OWL, 3D-Planung, Wand-zu-Wand ohne Passleisten, Nische/Sondermaß). `MUSS (E-E-A-T)`
7. **FAQ-rich ≥10** (Ziel 12–14) mit 2–4-Satz-Direktantworten. `MUSS (AEO-Kern) + FAQPage-Schema`
8. **≥3 interne Kontext-Links** (§7). `MUSS`
9. **1 weicher CTA** am Ende (Möbelplaner/Kontakt, kein Druck). `MUSS`
Optional/SOLL: Stauraum-/Ordnungs-Block (Auszüge, Ecklösungen, Hochschränke); kurzer „Profi vs. Online-Konfigurator"-Absatz.

**Tiefe-Blaupause (wie die Sieger Tiefe erzeugen — nachbauen, nicht kopieren):**
- **kuechen-atlas (1235 W, stärkster Treffer):** Intro „Wie funktioniert die Planung?" → granularer 4-Schritte-Guide mit je mehreren Absätzen + eingebauten Praxis-Tipps mit konkreten Maßen (z. B. Ellbogen-Arbeitshöhe „10–15 cm unter Ellbogen") + Cross-Links zu vertiefenden Ratgebern („Küche ausmessen"). → **Lehre: Maße IN die Schritte einbauen, nicht generisch beschreiben.**
- **kuechenspezialisten (1058 W):** Vorteils-Intro → 7-nummerierter Prozess mit Erklärabsätzen je Schritt + eigener Tipp-Block mit Sub-Bullets (Raumgröße/Stauraum) + separater Budget-Abschnitt. → **Lehre: eigener Tipp-Block + Budget-Einordnung als eigene Section.**
- **nobilia (601 W):** Tool-Hub mit druckbarer Vorbereitungs-Checkliste + FAQ-Block mit 8 vollständigen Q&A (Snippet-tauglich). → **Lehre: FAQ als eigenständiger Zitat-Block, ≥10.**
Tiefe = Substanz (Maße, Reihenfolge, Fehler, Abgrenzung), nicht Absatzlänge.

## 4 · WDF*IDF-Termliste als CHECKLISTE (Term · Gewicht · ☐)
| Term | Gewicht | ☐ |
|---|---|---|
| Küche planen / Küchenplanung | hoch | ☐ |
| Arbeitsdreieck (Herd–Spüle–Kühlschrank) | hoch | ☐ |
| Küchenform | hoch | ☐ |
| L-Form / L-Küche | hoch | ☐ |
| U-Form | hoch | ☐ |
| Inselküche / Kochinsel | hoch | ☐ |
| G-Form | mittel | ☐ |
| Küchenzeile / einzeilige Küche | mittel | ☐ |
| Ergonomie | hoch | ☐ |
| Arbeitshöhe (nach Körpergröße) | hoch | ☐ |
| Grundriss | hoch | ☐ |
| Aufmaß / Küche ausmessen | hoch | ☐ |
| Anschlüsse (Wasser, Strom, Abwasser, Lüftung) | mittel | ☐ |
| Budget / Kosten (ohne €-Zahl!) | hoch | ☐ |
| Arbeitsplatte | hoch | ☐ |
| Stauraum (Auszüge, Ecklösungen, Hochschränke) | hoch | ☐ |
| häufige Fehler bei der Küchenplanung | hoch | ☐ |
| Bewegungsfreiheit / 120 cm Mindestabstand | mittel | ☐ |
| Fronten / Material / Oberflächen | mittel | ☐ |
| Beleuchtung (Grund-, Arbeits-, Akzentlicht) | mittel | ☐ |
| Küchengeräte (Backofen, Kochfeld, Kühlschrank, Dunstabzug) | mittel | ☐ |
| Küchenstudio / Beratung | mittel | ☐ |
| Online-/3D-Küchenplaner (Konfigurator) | mittel | ☐ |
| Checkliste Küchenplanung | mittel | ☐ |
| Küche nach Maß / Maßanfertigung | mittel | ☐ |
| Lieferzeit/Montage (ohne Wochenzahl!) | mittel | ☐ |
| Meisterbetrieb / Eigenfertigung (Fast-Angle, dosiert) | niedrig | ☐ |
| PU-Kantenverleimung (Fast-Angle, dosiert) | niedrig | ☐ |
| Wand-zu-Wand ohne Passleisten (Fast-Angle) | niedrig | ☐ |
**Required Entities (konsistent benennen, §9 AEO):** Küchenarbeitsdreieck · Küchenformen L/U/G/Insel/Zeile · Arbeitshöhe/Ergonomie · Aufmaß/Grundriss · Anschlüsse · 3D-/Online-Küchenplaner · Fronten-/Arbeitsplatten-Materialien · Beleuchtungskonzept · Stauraumlösungen · Meisterbetrieb Espelkamp/OWL · Eigenfertigung · PU-Kantenverleimung.

## 5 · FAQ-Liste (≥10, fertig formulierbar, aus PAA + Nutzerfragen)
1. Wie plane ich meine Küche Schritt für Schritt? (kurzer Ablauf: Aufmaß → Form → Arbeitsdreieck → Geräte → Material → Licht → Angebot)
2. Wo fange ich bei der Küchenplanung an — was kommt zuerst? (Grundriss/Aufmaß vor allem anderen, NIE Geräte/Fronten zuerst)
3. Was ist das Küchenarbeitsdreieck und wie richte ich es ein? (Herd–Spüle–Kühlschrank, kurze Wege)
4. Welche Küchenform passt zu meinem Grundriss (Zeile, L-, U-, G-Form, Insel)? (Eignung nach Raumgröße)
5. Wie messe ich meine Küche richtig aus? (Aufmaß: Wände, Fenster, Türen, Nischen, Höhen)
6. Welche Anschlüsse muss ich vor der Planung prüfen? (Wasser, Abwasser, Strom/Starkstrom, Lüftung/Abluft)
7. Wie berechne ich die richtige Arbeitshöhe für meine Küche? (nach Körpergröße/Ellbogenmaß)
8. Welche Mindestabstände und Bewegungsfreiheit muss ich einplanen? (Gangbreite, gegenüberliegende Zeilen)
9. Welche Fehler sollte ich bei der Küchenplanung unbedingt vermeiden? (zu wenig Stauraum, Geräte vor Grundriss, Ecke tot, Licht vergessen)
10. Wie plane ich Stauraum optimal? (Auszüge statt Drehböden, Ecklösungen, Hochschränke)
11. Welches Material eignet sich für Fronten und Arbeitsplatten? (Überblick + Eignung, ohne Preise)
12. Kann ich meine Küche kostenlos online planen (3D-Planer ohne Anmeldung)? (ja, Tools existieren; Grenze zum Profi benennen)
13. Wann lohnt sich ein Tischler/Meisterbetrieb statt Online-Konfigurator? (Sondermaß, Nische, Dachschräge, Wand-zu-Wand)
14. Ist die Beratung bzw. das Aufmaß bei Fast kostenlos? (ja: kostenloses Aufmaß vor Ort — FACTS ✅; Preise sonst individuell, KEINE Zahl)
*(Kosten-/Dauer-Detail bewusst flach halten → Tiefe gehört `kueche-nach-mass-kosten` bzw. `kueche-im-neubau`.)*

## 6 · Gaps & unser Winkel (wo Fast überholt) + Negativ-Abgrenzung
**Winkel dieser Seite (Cluster-Map):** Planungs-Ratgeber **im Maßküchen-/Tischler-Kontext** — Aufmaß/Maße richtig nehmen, Grundriss + Arbeitszonen, typische Planungsfehler, **was der Tischler anders macht** (Nische, Sondermaß, Wand-zu-Wand ohne Passleisten, 3D-Planung), **wann Profi statt Online-Konfigurator**.
**Gaps, die kein Wettbewerber füllt (aus WDF/Gap-Analyse):**
- Kein Top-Treffer verbindet Planung mit echtem **Meisterbetrieb/Eigenfertigung** — alle verkaufen Handelsware. → Fast: „so plant ein Tischler, der selbst fertigt".
- **Sondermaß/Nischen/ungerade Wände/kleine Grundrisse** wird nirgends vertieft, obwohl Aufmaß Standard ist. → unser Kern-Mehrwert.
- **Verarbeitungsqualität** (PU-Kantenverleimung, fugenlos/feuchtigkeitsbeständig) fehlt in allen Material-Kapiteln — dort nur Optik. → dosiert einbauen.
- **Barrierefreie/altersgerechte Planung** (unterfahrbar, Höhen) trotz starkem Ergonomie-Fokus nirgends. → 1 Absatz Differenzierung möglich.
- **Regionalbezug** (Espelkamp/OWL) fehlt bei bundesweiten Portalen — Praxis-Einschub nutzt das.
**Negativ-Abgrenzung (Playbook §11 + Cluster-Map „deckt NICHT ab"):**
- **KEIN** neutraler Generalguide ohne Maß-/Tischler-Fokus → gehört Ratgeber-Hub `kueche-planen-schritt-fuer-schritt`.
- **KEINE** €-Spannen/Kostenrechnung → `kueche-nach-mass-kosten`. Budget hier nur als „grob einordnen + kostenloses Aufmaß".
- **KEIN** Neubau-Timing/Bauphasen → `kueche-im-neubau`.
- **KEINE** Produkt-Formberatung in die Tiefe (Insel-Konstruktion, L-Eckschrank-Detail) → Produkt-Kinder; Formen hier nur als **Auswahl-Überblick** (Tabelle).
- **KEIN** Verkaufspitch/starker CTA, kein Service-/Product-Schema. Verkauft nicht, erklärt.

## 7 · Interne Links (rein/raus, Anker) lt. internal-linking.md
**Eingehend (existiert bereits):** `/kuechen-nach-mass/` → diese Seite = **SOLL (cluster article)**, Zeile 68. Breadcrumb: `/kuechen-nach-mass/` → `/kuechen-nach-mass/kueche-planen/`.
**Ausgehend — Pflicht ≥3 kontextuell (Playbook §8, max ~5–7 Body-Links):**
1. **Up-Link zum Cluster-Pillar** `/kuechen-nach-mass/` — wichtigster (Conversion). Anker exakt/partiell: „Küche nach Maß", „maßgefertigte Küche vom Tischler". `MUSS`
2. **Seitwärts zu Schwester-Ratgebern** desselben Clusters (sofern gebaut): `/kuechen-nach-mass/kueche-nach-mass-kosten/` (Anker beschreibend: „was eine Maßküche kostet") · `/kuechen-nach-mass/tischlerkueche-vs-kuechenstudio/` (Anker: „Tischlerküche oder Küchenstudio"). *(Vor Verdrahtung prüfen, dass Ziel live ist — Kosten-Ratgeber + Vergleich sind als „built" gelistet.)* `SOLL`
3. **Produkt-Kinder kontextuell** wo Form erwähnt wird: `/kuechen-nach-mass/l-kueche-nach-mass/`, `.../kuechenzeile-nach-mass/`, `.../kochinsel-nach-mass/`, `/kueche-mit-dachschraege/` — je passend zum Form-Absatz (beschreibende Anker). `DARF/SOLL`
4. **Conversion dezent:** `/moebelplaner/` (Anker: „Ihre Idee selbst visualisieren / im 3D-Planer testen") + `/kontakt/` (Anker: „unverbindlich beraten lassen / kostenloses Aufmaß"). `MUSS (Conversion)`
5. Wenn FaqSection-Komponent genutzt: `/faq/`-CTA („Zum FAQ") = SOLL (Zeile 70).
**Silo-Disziplin:** NUR Küchen-Silo + Conversion-Hubs. KEINE Links ins Gewerbe-Silo. Anker-Vielfalt exakt/partiell/beschreibend mischen, Exact-Match auf eine URL max 2–3×, max ~10 % generisch.

## 8 · Do-NOT-claim-Liste (❌ aus FACTS.md, konkret für dieses Thema)
- ❌ **Keine konkreten Preise/€-Spannen** für Küche/Küchenplanung — Preise IMMER individuell. Budget nur über Kostenfaktoren + „individuelles Angebot nach Aufmaß".
- ❌ **Keine Lieferzeit-Wochenzahl** („8–16 Wochen" o. Ä.) — Termin nur „nach Aufmaß/Freigabe".
- ❌ **„Meisterbetrieb seit <Jahr>"** / „seit 2013" — nur „Meisterbetrieb" ohne Jahr.
- ❌ **„5 Jahre Garantie"** / jede Garantiezahl — es gibt keine freiwillige Garantie; nur Qualität/Langlebigkeit.
- ❌ **„wasserfest"** / Tauch-Beweis („24 h unter Wasser") — GESPERRT. Nur „PU-Kantenverleimung, fugenlos, feuchtigkeitsbeständig".
- ❌ **Exotische Holzarten als Alleinstellung**, FSC/PEFC namentlich, „regionale Holzherkunft".
- ❌ **Exklusive Geräte-Marken** behaupten (Bosch/NEFF als „unsere Marke") — Geräte kundenseitig frei wählbar.
- ❌ **„12+ Mitarbeiter" / „25+ Jahre" / „1996 in Espelkamp"** (war Rahden-Tonnenheide).
- ❌ **Arminia-Bielefeld-Referenz** NICHT auf Küchen-Seiten (Fast baute die Kabine, keine Küche).
- ✅ **Nutzbar:** kostenloses Aufmaß vor Ort · eigenes Montageteam · 3D-Planung · Eigenfertigung/„alle Teile in Eigenregie" · Wand-zu-Wand ohne Passleisten · Meisterbetrieb Espelkamp/OWL · Finanzierung im Privatbereich · ~200 km Montageradius · „Sie"-Anrede.
- ⚠️ **Küchen sind montage-gebunden** (~200 km um Espelkamp, kein Bausatz) — NICHT „bundesweite Küchenmontage" schreiben. → Discovery-Frage §9.

## 9 · 🔴 Discovery-Fragen an den Kunden (PFLICHT vor dem Schreiben)
1. **Geo-Reichweite (IMMER):** Küchenplanung/-montage nur montage-gebunden ~200 km um Espelkamp, oder Planungsleistung/Fernberatung auch bundesweit? Welche Beispielorte im Text nennen (Espelkamp, Minden, Lübbecke, Osnabrück, Bielefeld, OWL)?
2. **Kostenloses Aufmaß:** Auch bei reiner Küchenplanung/vor Auftrag kostenlos, oder nur nach Beauftragung? (FACTS ✅ „kostenlos", aber Konditionen für die Planungs-Seite bestätigen.)
3. **Online-/3D-Planer:** Sollen wir den eigenen `moebelplaner.fast-systemmoebel.de` aktiv als „selbst planen"-Tool empfehlen, oder als Vorbereitung für die persönliche 3D-Planung positionieren? Kann der Kunde damit eine Küche vorkonfigurieren?
4. **Barrierefreie/altersgerechte Küche:** Bietet Fast das aktiv an (unterfahrbare Zonen, angepasste Höhen)? Falls ja → als Gap-Differenzierer nutzbar; falls nein → weglassen.
5. **Konkrete Praxis-Anekdote:** Ein echtes anonymisiertes Planungsbeispiel aus der Werkstatt (z. B. schwierige Nische/schräge Wand in OWL gelöst) für den Experience-Einschub (§2.6)? Ohne erfundene Details.
6. **Typischer Planungs-Zeitrahmen:** Gibt es eine belegbare Aussage zum Ablauf Beratung→Aufmaß→Freigabe (ohne feste Lieferzeit-Wochenzahl), die wir nennen dürfen?

---

### 9a · ✅ Beantwortet — gegen `kundenwissen.md` + `FACTS.md` aufgelöst (2026-08-04, W32)
> §9 wird nicht mehr beim Kunden nachgefragt (Ben, 2026-07-28), sondern gegen den dauerhaften Antwort-Fundus aufgelöst. Quelle je Punkt notiert.

1. **Geo-Reichweite (Q1):** Küchen sind **montage-gebunden ~200 km um Espelkamp** — Vermessung + Montage macht Fast **immer selbst**, **kein Bausatz, keine reine Geräte-Lieferung**. Beispielorte: Espelkamp, Minden, Lübbecke, Osnabrück, Bielefeld, ganz OWL. → **Writer:** Planungs-Wissen allgemein lehren, Umsetzung/Montage regional verankern; **NICHT** „bundesweite Küchenmontage". *(kundenwissen.md § Geo & Service; FACTS Küche-Service)*
2. **Kostenloses Aufmaß (Q2):** „**kostenloses Aufmaß vor Ort**" nutzbar (im Montagegebiet). Keine einschränkenden Konditionen dranhängen. *(FACTS; kundenwissen.md § Geo & Service)*
3. **Online-/3D-Planer (Q3):** Möbelplaner als **Vorbereitung der persönlichen Planung** positionieren, **nicht** als „plan-es-selbst"-Tool; primäres Conversion-Ziel = **E-Mail über Kontaktformular** (im Planer springen viele ab). Deckt Schränke, Küche, Bad, Wohnmöbel. *(kundenwissen.md § Möbelplaner & Conversion)*
4. **Barrierefreie/altersgerechte Küche (Q4):** **ja** — unterfahrbare Zonen, angepasste Arbeitshöhen machbar → als Gap-Differenzierer (1 Absatz, allgemein) nutzbar; **keine konkreten Maße erfinden**. *(kundenwissen.md § Leistungsumfang)*
6. **Ablauf (Q6, qualitativ):** Belegter Ablauf **Beratung → kostenloses Aufmaß → 3D-Planung → Freigabe → Fertigung → Montage (eigenes Team)** ist beschreibbar. *(FACTS Prozess/Service)*

### 9b · ⬜ Leerstelle — nicht behaupten (je eine Ausweich-Anweisung an den Writer)
1. **Konkrete Praxis-Anekdote (Q5):** kein freigegebenes Einzelprojekt mit Ort/Kunde. → **Writer:** Praxis-Einschub (§3 Modul 6) **nicht** als konkrete Anekdote; nur allgemeiner Werkstatt-/Meisterbetrieb-Bezug (Espelkamp/OWL, 3D-Planung, Wand-zu-Wand ohne Passleisten, Sondermaß/Nische) als **generelle Fähigkeit**. Dachschrägen-Küchen dürfen als Beispiel-**Kategorie** allgemein erwähnt werden („einige realisiert"), ohne erfundene Details. *(kundenwissen.md § Belege — Ausnahme Dachschräge)*
2. **Zeitrahmen-Zahlen (Teil Q6):** keine belegte Wochen-/Tageszahl für Beratung→Freigabe→Montage. → **Writer:** Ablauf nur als **Reihenfolge/Qualität** schildern, **keine Zeitangaben**; „verbindlicher Termin nach Aufmaß/Freigabe". *(FACTS „Lieferzeit Küche: keine belegte Angabe"; kundenwissen.md § Preise & Termine)*

**Framing-Auflage (keine echte Leerstelle):** Die Ergonomie-cm-Angaben aus §3/§5 (Arbeitshöhe, Mindestabstände, 120 cm Bewegungsfreiheit) sind **allgemeines Planungs-/Ergonomie-Wissen** und dürfen so gelehrt werden — aber **nicht** als Fast-eigene Fertigungs-/Maß-Bandbreiten framen (Fast gibt keine Maß-Bandbreiten an). *(kundenwissen.md § Belege — keine Maß-Bandbreiten erfinden)*

**Geo explizit (Pflicht je Seite):** Küche = **montage-gebunden** (~200 km um Espelkamp); Planungs-/Ratgeberwissen allgemein, im Text **keine** „bundesweite Küchenmontage".
**Offene Leerstellen: 2** — konkrete Praxis-Anekdote · belegte Zeitrahmen-Zahlen (+1 Framing-Auflage Ergonomie-Maße).
