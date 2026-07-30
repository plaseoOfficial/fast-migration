# Research-Kit: Hauswirtschaftsraum einrichten (/hauswirtschaftsraum/)

## 1 · Wortzahl-Korridor → **1600–2100 W** (Ziel ~1800) — verbindlich, kein Raten
**Strategie-Entscheidung Ben 2026-07-15 (überschreibt den Playbook-Default 2.400–3.200):** kürzere, dichtere Chunks mit hohem Mehrwert statt Wortmasse — moderne Suche/LLM-Antworten belohnen Substanzdichte, nicht Länge. Anti-Fülltext-Gate gilt unverändert.
Boden 1.600 liegt über dem SERP-Median ~1.500 (heim-handwerk 700 / keeeper 850 / hailo 890 / hornbach 1.200 / kueche.de 1.800 / xxxlutz 1.900 / wohnparc 2.700 / häcker 3.000) — Regel „nie unter SERP-Median bei gleichem Intent" bleibt eingehalten. Die längeren Sieger (wohnparc, häcker) sind Shop-/Herstellerseiten; wir kontern mit redaktioneller Dichte statt Masse. Ratgeber-Tiefe gehört weiterhin an die Kinder `/planen/` + Produkt-Kinder — sonst Kannibalisierung.
**Writer-Hinweis (Zähl-Bias):** Text-Agents überschätzen ihre Wortzahl systematisch (~8 %, Lauf W29). Plane gegen das **Ziel 1.800 W**, nicht gegen den Boden. Alle Pflicht-Bausteine (Prozess, Vergleich, Kostenmodul, 10–15 FAQ, USP, Material) bleiben Pflicht — straffen, nicht streichen.

## 2 · Intent & Job-to-be-done (was will der Nutzer sehen/tun)
**Dominanter Intent: mixed, kommerziell verankert (Commercial Investigation mit starkem Info-Anteil).** Der Nutzer plant vor der Anfrage: er will klären, wie er seinen HWR/seine Waschküche so plant und einrichtet, dass Wäsche, Vorräte, Putzmittel und Geräte festen, erreichbaren Platz haben — und **welcher Anbieter** (Fertigmöbel/Baumarkt/Küchenstudio/Tischler-Maßanfertigung) dafür passt.
**7 Micro-Intents (jeder braucht eine Antwort auf der Seite):**
1. Grundlagen: Was ist ein HWR, Abgrenzung Waschküche/HWR-Küche, lohnt sich das.
2. Größe & Grundriss: Mindestmaße, Flächenrichtwerte (6–15 m²), Layout (U-Form, Schlauch, kompakt).
3. Technik-Anschlüsse: Wasser/Abwasser, Strom, Belüftung/Abluft, Lärmschutz — Grundvoraussetzung.
4. Möbel & Stauraum planen: Schrank-/Regaltypen, Zonierung (Waschen/Vorrat/Putzmittel/Recycling), raumhoch/vertikal.
5. Geräte-Platzierung: Waschmaschine + Trockner nebeneinander vs. Waschturm, Bügel-/Faltfläche.
6. Anbieter & Budget: Fertigmöbel vs. Maßanfertigung, Kostenorientierung, Aufmaß-/Beratungstermin.
7. Optik & Wohnlichkeit: Bodenbelag, Beleuchtung, wohnliche Gestaltung.
**JTBD-Kern (kommerzieller Twist):** „Ich will meinen HWR richtig planen — und Fast soll mir Stauraum + Geräteverbau + Vorrat + Reinigung als System nach Maß bauen, das millimetergenau in meinen (auch kleinen/engen) Raum passt."

## 3 · Pflicht-Module (intent-abgeleitet, was ALLE Top-Treffer haben) + Tiefe-Blaupause
**Pflicht-Bausteine (Reihenfolge = Draft-Outline):**
1. **Hero + Definition** — H1 mit „Hauswirtschaftsraum einrichten", Direktantwort „Was ist ein HWR?" in ersten 100 W, Abgrenzung Waschküche/HWR-Küche. (Micro-Intent 1) → AEO-Direktantwort.
2. **Sprungnavigation/Inhaltsverzeichnis** — alle Top-Cluster (wohnparc, häcker, xxxlutz) haben Kapitelstruktur; Jump-Links Pflicht.
3. **„Was gehört in den HWR / Zonenkonzept"** — Zonen Waschen · Vorrat · Reinigung/Putzmittel · Recycling · Bügeln; raumhoch/Wand-zu-Wand. (Micro-Intent 4)
4. **Größe & Grundriss** — Richtwert-Tabelle m²/Layout (6–15 m², U-/L-/Schlauchform), plus eigenes Kapitel „kleiner/enger HWR". (Micro-Intent 2) → Tabelle = Snippet-Kandidat.
5. **Technik/Anschlüsse** — Wasser, Abwasser, Strom/Steckdosen, Belüftung/Abluft, Lärmschutz, Bodenbelag. (Micro-Intent 3)
6. **Geräte-Platzierung** — nebeneinander vs. Waschturm, ergonomische Höhe, Arbeits-/Faltfläche, Bügelzone. (Micro-Intent 5) → Direktantwort.
7. **USP-Block Fast** — Meisterbetrieb Espelkamp/OWL, Eigenfertigung, PU-Kantenverleimung (fugenlos, feuchtigkeitsbeständig — Feuchtraum-Argument), Wand-zu-Wand ohne Passleisten, eigenes Montageteam, kostenloses Aufmaß, 3D-Planung. (Micro-Intent 6b)
8. **Prozess-Block 5 Schritte** — Beratung → kostenloses Aufmaß → 3D-Planung → Fertigung → Montage (eigenes Team). Sichtbarer Listen-Content, **kein** HowTo-Schema. → HowTo-tauglich.
9. **Vergleichstabelle (Pflicht ≥1 Tabelle)** — Tischler-Maßanfertigung vs. Küchenstudio/Möbelhaus vs. Baumarkt-Fertigmöbel: Passgenauigkeit, Feuchtebeständigkeit/Kante, Raumausnutzung (kleine Räume), Beratung, Langlebigkeit, Preis. (Micro-Intent 6a) → Snippet-Kandidat.
10. **Kostenmodul (Pflicht — Gate rot ohne)** — Kostenfaktoren (Raumgröße, Ausbaugrad, Materialien, Geräteverbau, Sondermaße/Dachschräge), „warum keine Pauschale", Preis IMMER individuell → kein Festpreis. Verweist auf Produkt-Kinder für Detailkosten.
11. **Möbel-/Stauraum-Verteiler** — kurze Anrisse der HWR-Möbeltypen mit Links zu Produkt-Kindern (HWR-Schrank, Waschmaschinenschrank, Vorratsschrank, Besenschrank nach Maß). Pillar-Verteilfunktion.
12. **Trust-Anriss** — 1 Detail Region OWL/Espelkamp, Familie Fast (kurz; Tiefe → /referenzen/).
13. **FAQ-Block 10–15 Fragen** → FAQPage-Schema. (Micro-Intent 1–7)
14. **Starker CTA-Block** — Möbelplaner UND Kontakt, Telefon sichtbar; ≥3 CTA-Anker über Seite verteilt.
15. **Bildstrecke** — alle Top-Treffer bildlastig (4–15+ Bilder); beschreibende alt-Texte.

**Tiefe-Blaupause (wie die Sieger Tiefe erzeugen — nachbauen):**
- **Frage-formulierte H2/H3** (wohnparc: „Ist ein HWR eine Waschküche?", häcker: „HWR oder HWR-Küche: Was ist sinnvoller?") + 2–4-Satz-Direktantwort darunter → PAA/AEO.
- **Zusammenfassungs-/Tipp-Boxen je Funktionsblock** (wohnparc: „Zusammenfassung"-Bullets pro Zone; häcker: 6-Punkte- + 3-Punkte-Tipplisten) → hohe Infodichte ohne Fülltext.
- **Vergleichstabelle mit Pro/Contra** (häcker: HWR vs. HWR-Küche) → Snippet.
- **Strikte Kategorien-Gliederung** (xxxlutz: Vorrat/Mülltrennung/Wäschepflege/Geräte/Kleidung als eigene Kapitel) + Prozess-Block als Conversion-Baustein.
- **Eigenes Sonderkapitel „kleiner Raum"** (hailo, xxxlutz, heim-handwerk) — Pflicht.
- **Fazit-Abschnitt** (wohnparc, häcker) fasst Kernbotschaft + führt zum CTA.

## 4 · WDF*IDF-Termliste als CHECKLISTE (Term · Gewicht · ☐)
**Hoch (Pflicht, mehrfach natürlich einbauen):**
- ☐ Hauswirtschaftsraum / HWR · hoch
- ☐ einrichten · hoch
- ☐ planen · hoch
- ☐ Waschmaschine · hoch
- ☐ Trockner · hoch
- ☐ Stauraum · hoch
- ☐ Hochschrank / Hochschränke · hoch
- ☐ Regal / Regale / Regalsystem · hoch
- ☐ Waschküche · hoch
- ☐ Größe / Quadratmeter (m²) · hoch
- ☐ Anschluss (Wasser / Strom / Abwasser) · hoch
- ☐ Ordnung · hoch
- ☐ Vorräte / Vorratskammer · hoch
- ☐ Putzmittel · hoch
- ☐ Bügeleisen / Bügelbrett · hoch

**Mittel (breit abdecken):**
- ☐ Staubsauger · ☐ Wäschekorb / Wäschesortierer · ☐ Fliesen (Bodenbelag) · ☐ Arbeitsplatte / Arbeitsfläche · ☐ Auszug / Schublade · ☐ Belüftung / Lüftung / Abluft · ☐ Waschturm · ☐ Schrank nach Maß / Maßanfertigung · ☐ Nische · ☐ Speisekammer · ☐ Einbauschrank · ☐ Beleuchtung · ☐ Bodenbelag · ☐ Vorratsschrank · ☐ Besenschrank · ☐ Mülltrennung / Recycling · ☐ Kosten / Preis · ☐ Bügelstation

**Niedrig (1× streifen, wo passend):**
- ☐ Kleiderstange · ☐ Schuhschrank / Garderobe · ☐ Waschtrog / Ausgussbecken · ☐ Wertstofflager · ☐ Hobbyraum · ☐ Schattenküche · ☐ Wärmerückgewinnung · ☐ Smart-Home/Technik

**Pflicht-Entitäten (Entity-Erkennung):** Fast Systemmöbel · Espelkamp/OWL · „[Möbel] nach Maß" · PU-Kantenverleimung · Familie Fast · HWR/Waschküche · Waschturm · Einbauschrank.

## 5 · FAQ-Liste (≥10, fertig formulierbar, aus PAA + Nutzerfragen)
1. **Was ist ein Hauswirtschaftsraum und was gehört alles hinein?** (Definition + Zonen: Waschen, Vorrat, Putzmittel, Recycling, Geräte)
2. **Ist ein Hauswirtschaftsraum dasselbe wie eine Waschküche?** (Abgrenzung: Waschküche = Teilfunktion; HWR breiter)
3. **Wie groß sollte ein Hauswirtschaftsraum mindestens sein?** (Richtwert 6–15 m²; auch klein nutzbar durch raumhohen Ausbau)
4. **Welche Anschlüsse braucht ein Hauswirtschaftsraum?** (Wasser, Abwasser, Strom/Steckdosen, Belüftung/Abluft)
5. **Wo sollte der Hauswirtschaftsraum idealerweise liegen?** (Nähe Küche/Bad wegen Anschlüssen; Keller/Souterrain möglich)
6. **Wie stelle ich Waschmaschine und Trockner am besten auf — nebeneinander oder als Waschturm?** (Platz vs. ergonomische Höhe; Faltfläche)
7. **Welcher Bodenbelag eignet sich für den Hauswirtschaftsraum?** (robust, pflegeleicht, feuchteunempfindlich, z. B. Fliesen)
8. **Wie richte ich einen kleinen oder schmalen Hauswirtschaftsraum platzsparend ein?** (raumhoch, Wand-zu-Wand, schmale Hochschränke, Auszüge)
9. **Fertigmöbel oder Maßanfertigung — welche Schranklösung passt in den HWR?** (Maß nutzt jede Nische/Dachschräge, feuchtebeständige Kante)
10. **Was kostet ein Hauswirtschaftsraum nach Maß?** (Kostenfaktoren, keine Pauschale, individuelles Angebot nach Aufmaß)
11. **Wie integriere ich Mülltrennung und Recycling sinnvoll in den HWR?** (Einbau-Trennsysteme/Auszüge)
12. **Braucht der Hauswirtschaftsraum ein Fenster / wie wird er richtig belüftet?** (Fenster oder Abluft/Lüftung gegen Feuchte)
13. **Was ist der Unterschied zwischen separatem HWR und HWR-Küche (Schattenküche)?**
14. **Lohnt sich ein eigener Hauswirtschaftsraum überhaupt?** (Nutzen: Ordnung, Küche entlastet, Wert)
15. **Wie läuft die Zusammenarbeit mit Fast ab — von Beratung bis Montage?** (5-Schritte-Prozess, kostenloses Aufmaß)
→ FAQPage-Schema 1:1 zum sichtbaren Text.

## 6 · Gaps & unser Winkel (wo Fast überholt) + Negativ-Abgrenzung
**Gaps im SERP (alle Top-Treffer sind bundesweite Portale/Hersteller/Baumärkte — kein lokaler Meisterbetrieb):**
- Kein Handwerks-/Meisterbetrieb-Vertrauenssignal mit Gesicht → **Fast: Familie Fast, Meisterbetrieb Espelkamp/OWL, greifbarer Ansprechpartner.**
- Keine technische Feuchtraum-Tiefe (alle bleiben bei „Fliesen als Boden") → **Fast: PU-Kantenverleimung (fugenlos, feuchtigkeitsbeständig) als Fachargument für die Wasseranschluss-Nähe im HWR — thematisiert kein Wettbewerber.**
- Niemand kombiniert Ratgeber-Tiefe + eigenen Konfigurator → **Fast: Ratgeber-Tiefe + Möbelplaner aus einer Hand.**
- Keine Eigenfertigung vs. Handelsware/Pressspan als Qualitätsargument → **Fast: Eigenfertigung in eigener Werkstatt, „alle Teile in Eigenregie".**
- Ratgeberportale = isolierte Einzelartikel ohne Cluster → **Fast: Pillar-Hub mit Verteilung zu Produkt-Kindern (HWR-Schrank / Waschmaschinenschrank / Vorratsschrank / Besenschrank nach Maß) + Ratgeber `/planen/`.**
- Sonderfälle (Dachschräge, Keller-HWR, Wand-zu-Wand ohne Passleisten) → **Fast: echte Sondermaße, „die verrücktesten Vorstellungen".**

**Negativ-Abgrenzung (Playbook §11 — was diese Seite bewusst NICHT tut):**
- **vs. Ratgeber `/planen/`:** erklärt NICHT erschöpfend „wie man Schritt für Schritt plant / Checkliste zum Download" — verlinkt dorthin. Verkauft offen (starker CTA).
- **vs. Produkt-Kinder:** keine Einzeltyp-Tiefe (Waschturm-Verbau-Details, Vorratssortierung, Putzmittel-Ordnung, konkrete Einzelkosten) — nur Anriss + Link. Kein Festpreis, kein Product-Schema.
- **vs. Hub `/moebel-nach-mass/`:** kein reiner Kartenverteiler — eigener kommerzieller Langtext.
- **vs. Referenz:** keine ausführliche Projektgalerie/Team-Story — nur kurzer Trust-Anriss, Tiefe → /referenzen/.
- **Cluster-Dedup (Gate 11):** Winkel = **HWR/Waschküche als Funktionsraum-System** (Waschen/Vorrat/Reinigung/Technik). NICHT Wohnraum-Einbauschrank (→ Cluster `einbauschraenke`), NICHT Küchen-Vorratshaltung (→ Cluster `kuechen`).

## 7 · Interne Links (rein/raus, Anker) lt. internal-linking.md
**Rolle:** Cluster-Pillar, Privat-Silo, **parent = `/moebel-nach-mass/`** (noch in `linking-rules.ts` zu registrieren: `silo: "hauswirtschaftsraum", audience: "privat", built: true`). Link-Budget **8–10 Body-Links, ≥3 kontextuell**.

**Eingehend (rein) — beim Bau beidseitig nachverdrahten:**
- `/moebel-nach-mass/` → HWR (**MUSS**, hub→cluster; Backlog-Zeile „sibling cluster pillars" um HWR ergänzen). Anker: „Hauswirtschaftsraum nach Maß" / „Hauswirtschaftsraum einrichten".
- Homepage `/` → HWR (**SOLL**). 
- Geschwister-Privat-Cluster `/kuechen-nach-mass/`, `/einbauschraenke-nach-mass/` → HWR (SOLL, Discovery-Karte „Weitere Leistungen").

**Ausgehend (raus):**
- **Nach oben:** `/moebel-nach-mass/` — Breadcrumb + 1 kontextueller In-Content-Link. Anker: „Möbel nach Maß" / „unsere maßgefertigten Möbel".
- **Nach unten zu Produkt-/Ratgeber-Kindern (alle noch `built:false` → Backlog, kein Dead-Link launchen):** `/hauswirtschaftsraum/schrank-nach-mass/` („HWR-Schrank nach Maß"), `/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/` („Waschmaschine und Trockner im Schrank verbauen"), `/hauswirtschaftsraum/vorratsschrank-nach-mass/` („Vorratsschrank nach Maß"), `/hauswirtschaftsraum/besenschrank-nach-mass/` („Besen- und Putzschrank nach Maß"), `/hauswirtschaftsraum/planen/` („Hauswirtschaftsraum planen — Schritt für Schritt"). → **Bis Kinder existieren: als Text/pending führen, nicht verlinken.**
- **Conversion (Pflicht):** `/moebelplaner/` („HWR im Möbelplaner selbst entwerfen") + `/kontakt/` („unverbindlich anfragen"); Telefon 05771 9138312 sichtbar/klickbar.
- **SOLL (pending):** `/referenzen/` („Projekte ansehen"), `/ablauf-massanfertigung/`, `/liefergebiet-montage/`, `/faq/` — verlinken sobald gebaut.

**Silo-Regel:** NIEMALS in den Gewerbe-Silo querverlinken. Anker variieren (Exact „Hauswirtschaftsraum" max 2–3×, dazu partial/beschreibend, ≤10 % generisch).

## 8 · Do-NOT-claim-Liste (❌ aus FACTS.md, konkret für dieses Thema)
- ❌ **Keine erfundenen Preise/Preisspannen** — Preise IMMER individuell; Kostenfrage nur über Kostenfaktoren + „individuelles Angebot nach Aufmaß". (Drittquellen-Spanne 3.500–10.000 € NICHT übernehmen.)
- ❌ **„wasserfest"** / Tauch-Beweis („24 h unter Wasser ohne Aufquellen") — GESPERRT. Nur „fugenlos" + „feuchtigkeitsbeständig" für die PU-Kante.
- ❌ **„5 Jahre Garantie"** / jede Garantiezahl — es gibt KEINE freiwillige Garantie; nur gesetzliche Gewährleistung. Langlebigkeit ohne Zahl darstellen.
- ❌ **„Meisterbetrieb seit 2013" / „seit <Jahr>"** — kein Jahr nennen, nur „Meisterbetrieb".
- ❌ **„1996 in Espelkamp"** — Gründung 1996 in Rahden-Tonnenheide; Fertigung heute Espelkamp.
- ❌ **„25+ Jahre" · „12+ Mitarbeiter"** (real ~5–10) · **FSC/PEFC namentlich** · **„regionale Holzherkunft"** · **exotische Holzarten als Alleinstellung** · konkrete Holzarten (Eiche/Nussbaum) als belegt.
- ❌ **Erfundene Lieferzeit-Wochen** — „verbindlicher Termin nach Aufmaß/Freigabe".
- ✅ **Nutzbar:** Meisterbetrieb · Eigenfertigung/„alle Teile in Eigenregie" · PU-Kantenverleimung (fugenlos, feuchtigkeitsbeständig) · Massivholz + branchenübliche Materialien · eigenes Montageteam · kostenloses Aufmaß vor Ort · 3D-Planung · Wand-zu-Wand ohne Passleisten · Montage ~200 km um Espelkamp, Lieferung bundesweit · 1.000 m² Fertigung / 4.000+ Projekte / 72K+ Einzelteile · Familie Fast (Johann Gründer; Andreas & Peter seit 2010). NAP: Alte Waldstraße 32, 32339 Espelkamp · 05771 9138312.

## 9 · 🔴 Discovery-Fragen an den Kunden (PFLICHT vor dem Schreiben)
1. **Geo-Reichweite (IMMER):** HWR-Einrichtung = montage-gebunden (~200 km um Espelkamp) oder bundesweit? Wird der komplette HWR-Ausbau nur mit eigener Montage angeboten, oder auch reine Lieferung von HWR-Möbeln bundesweit?
2. **Leistungsumfang HWR:** Baut Fast den **kompletten** HWR (inkl. Geräteverbau um Waschmaschine/Trockner, Arbeitsplatte, Waschbecken/Ausgussbecken) — oder nur die Schrank-/Stauraummöbel? Werden Elektro-/Sanitär-Anschlüsse selbst gemacht oder ist Bauseits-Vorleistung nötig?
3. **Geräteverbau:** Werden Waschmaschine/Trockner tatsächlich in Möbel verbaut (Waschturm-Verbau, Belüftung/Vibration gelöst) — und stellt Fast die Geräte oder plant nur um kundeneigene Geräte?
4. **Sondermaß-Referenzen:** Gibt es ein konkretes umgesetztes HWR-/Waschküchen-Projekt mit Ort (OWL) für den Trust-Anriss? Dachschräge/Keller-HWR schon gebaut?
5. **Preis-Startpunkt:** Darf eine grobe „ab-Größenordnung" bzw. ein Rechenbeispiel genannt werden, oder strikt nur „individuell nach Aufmaß"? (Default: individuell.)
6. **Finanzierung:** Gilt die Privatbereich-Finanzierung auch für den HWR-Ausbau?
7. **Cluster-Kinder-Status:** Welche Produkt-Kinder (HWR-Schrank / Waschmaschinenschrank / Vorratsschrank / Besenschrank / `planen`) werden zuerst gebaut, damit interne Links live geschaltet statt als pending geführt werden?

## 10 · Discovery-Antworten AUFGELÖST (gegen FACTS + kundenwissen, 2026-07-30) + Leerstellen
> Wissensstand statt Nachfrage (AGENT-WORKFLOW Schritt 1). Rangfolge: FACTS.md → kundenwissen.md → (kein
> Altbestand inbox/discovery/hauswirtschaftsraum.md vorhanden). Leerstellen unten kommen in REVIEW.md.

- **Q1 Geo:** HWR-Ausbau ist **montage-/einbaugebunden** → Montage, Einbau und kostenloses Aufmaß im **Radius ~200 km um Espelkamp** (ganz OWL, Minden, Lübbecke, Osnabrück, Bielefeld). Freistehende/lieferbare HWR-Möbel darüber hinaus **bundesweit**. *(FACTS Geo-Reichweite; kundenwissen Geo & Service)*
- **Q2 Leistungsumfang:** Fast plant und baut die **Stauraum-/Schrankmöbel und den Möbelverbau nach Maß**; Geräte werden **nicht verkauft**, die Möbel entstehen **um kundeneigene Waschmaschine/Trockner** herum. Grundhaltung „alles auf Anfrage / für jedes Problem eine Lösung". *(kundenwissen Leistungsumfang; FACTS)*
- **Q3 Geräteverbau:** Waschmaschine/Trockner werden in den Möbelverbau integriert (z. B. Waschturm übereinander, Arbeitsplatte darüber, Stauraum für Waschmittel) — um **kundeneigene** Geräte. *(kundenwissen Q2/Q3)*
- **Q5 Preis:** **strikt individuell** — keine Preise/Spannen/„ab"-Werte/Relationen. Kostenfrage nur qualitativ über Kostenfaktoren (Raumgröße/Umfang · Material/Fronten · Ausstattung/Auszüge · Geräteverbau · Einbausituation/Sondermaß) + individuelles Angebot nach kostenlosem Aufmaß. *(kundenwissen Preise; FACTS)*
- **Q6 Finanzierung:** HWR = Privatbereich → Finanzierung auf Wunsch möglich (wie Küche/Wohnmöbel; **nicht** Gewerbe). Nutzbar, dezent. *(kundenwissen; FACTS)*
- **Q7 Cluster-Kinder:** alle Produkt-/Ratgeber-Kinder (`schrank-nach-mass`, `waschmaschinenschrank`, `vorratsschrank`, `besenschrank`, `planen`) sind `built:false` → **keine Links** darauf (launch clean). Möbeltypen im Verteiler nur **beschreibend** nennen (kein href). Beim späteren Bau beidseitig nachverdrahten.

### Leerstellen (nicht behaupten — umschiffen; kommen in REVIEW.md »Offene Fakten«)
| Thema | Leerstelle | So gelöst |
|---|---|---|
| Anschlüsse Elektro/Sanitär | Ob Fast diese selbst ausführt oder bauseitige Vorleistung nötig ist — nicht belegt | Nicht behaupten; Anschlüsse allgemein „in der Planung berücksichtigen", Details in Beratung/beim Aufmaß klären |
| Technik Geräteverbau | Konkrete Lösung für Vibration/Belüftung/Wärme des Waschturms — nicht belegt | Allgemein „in der Planung berücksichtigt"; keine konkreten Bauteile/Techniken behaupten |
| HWR-Referenzprojekt mit Ort | Kein freigegebenes Einzelprojekt (kundenwissen: nur Dachschrägen-Küchen freigegeben) | Trust-Anriss ohne benanntes Projekt: Meisterbetrieb OWL/Espelkamp, Familie Fast, Betriebszahlen (4.000+ Projekte / 1.000 m² / 72K+ Teile). Keine erfundene HWR-Anekdote |
| Maße / m²-Richtwerte | Fast macht keine Maßangaben (kundenwissen: keine Bandbreiten/Mindestmaße erfinden) | **Keine m²-/Layout-Maßtabelle** (überschreibt Kit §3 Modul 4). Raumgröße qualitativ: auch kleine/schmale HWR raumhoch Wand-zu-Wand voll nutzbar. Pflicht-Tabelle = Vergleichstabelle (Modul 9), braucht keine erfundenen Maße |
| Bodenbelag / Belüftung | Fast liefert/verlegt keinen Boden, macht keine Lüftungs-Gewerke | Nur allgemeiner Planungshinweis (robust/feuchteunempfindlich; Fenster oder Lüftung gegen Feuchte); keine Fast-Leistung behaupten |
| Lieferzeit | Keine belegte Wochenangabe | „verbindlicher Termin nach Aufmaß und Freigabe" |