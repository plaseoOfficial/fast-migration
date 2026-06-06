Ich habe jetzt alle Pflicht-Grundlagen (Playbook, DEPTH, FACTS, BRAND_VOICE, bestehende Section-Library und den aktuellen Küchen-Content). Letzter Check: das bestehende FAQ rendert real 12 Items (nicht ~6) — ich prüfe, ob es eine `shared-faq`-Section gibt und wie die Vergleichstabelle/Kosten-Module heute fehlen, damit die Spec exakt die Lücke beschreibt.

Die Recherche reicht. Hier die Spec.

---

# DESIGN-SPEC — 3 SEO-Depth-Sections für den Küchen-Pillar `/kuechen-nach-mass/`

**Empfänger:** Design-/Build-Team · **Autor:** SEO-Content-Architekt
**Basis:** `docs/seo/playbooks/leistung.md` (§2 Bausteine 4, 5, 8 · §3 Korridor · §9 AEO · §10 Gates) · `DEPTH.md` (Regel 2 Depth-Module) · `brand/FACTS.md` (Faktentreue) · `brand/BRAND_VOICE.md`
**Pflicht-Regeln (gelten für alle 3):** on-brand, pixel-sauber, props-getrieben (Copy lebt in `src/lib/content/kuechen-nach-mass.ts`), in `registry.ts` + `catalog-data.ts` registrieren, danach `npm run gen:catalog`. Keine Inline-Styles, Token-Contract aus `docs/design-system/TOKENS.md`. Nach Build den `design-qc`-Agent laufen lassen.

## Ausgangslage & Ziel (Diagnose)
Der Küchen-Pillar trägt heute die visuellen Sections (Hero, Intro+Stats, Prozess, Typische, Warum, Geschichte, Möbelplaner, Testimonials, FAQ). Es **fehlen die drei pflichtigen Depth-Module** des Leistung-Playbooks als eigenständige Sections:
- **Baustein 4 (Vergleichstabelle)** existiert nur als Fließtext-Absatz `kuechenWarum` (~150 W, keine Tabelle) → Gate 10 (AEO/Tabelle) und Gate 5 ungedeckt.
- **Baustein 5 (Kosten-/Preismodul, PFLICHT)** fehlt vollständig → Micro-Intent 2 (der wichtigste) unbeantwortet, Gate 5 **rot**.
- **Baustein 8 (FAQ 10–15)** liegt strukturell vor (`kuechenFaq` rendert real 12 Items), ist aber inhaltlich der einzige Tiefenträger. Die Aufgabe formuliert hier den Soll-Stand „10–15 rendert" — das Modul muss als **wiederverwendbare FAQ-rich-Section** das Rendern beliebig vieler Items (Ziel 12–15) sauber leisten und nach Themen gruppieren.

Diese 3 Module heben den Pillar vom content-only-Stand (Aufgabentext: ~35 W der reinen Modul-Lücke) in den **SERP-Korridor 2.400–3.200 W** (Playbook §3). Sie sind **silo-übergreifend wiederverwendbar** für alle Leistungsseiten (Einbauschränke, Badmöbel, Ladenbau, Büro, Gastro, Praxis).

**Faktentreue-Hartstopp (FACTS.md):** keine Preiszahlen, keine Preisspannen (Preise immer individuell) · keine Garantiezahl (nur gesetzliche Gewährleistung) · keine „seit 2013" · ~200 km Montageradius / Lieferung bundesweit / kostenloses Aufmaß / eigenes Montageteam sind belegt und nutzbar · PU-Kantenverleimung (Musterkante 24 h unter Wasser) als echtes USP.

---

## Section 1 — Vergleichstabelle „Maßküche/Tischler vs. Küchenstudio vs. Möbelhaus"

**Component:** `KuechenVergleich` (registry `useCase: "comparison-table"`, `category: "shared"`)

### (a) Zweck + Pflicht-Modul/Intent
Deckt **Playbook-Baustein 4** und **Micro-Intent 4** („Warum dieser Betrieb statt Küchenstudio/Möbelhaus/Online?"). Liefert die wahrscheinlichste Zitat-Tabelle für AI Overviews (Playbook §9) und erfüllt das Tabellen-Pflichtgebot (§2: „mindestens eine Tabelle ist Pflicht"). Ersetzt **nicht** den `kuechenWarum`-Fließtext, sondern überführt dessen Vergleichsaussage in einen scanbaren, eigenständig verständlichen Tabellen-Container.

### (b) Inhaltsstruktur / Props
```ts
export const kuechenVergleich = {
  heading: string;            // Frage-zuerst H2, z.B. "Maßküche, Küchenstudio oder Möbelhaus: Was passt zu Ihnen?"
  intro: string;              // 2–4 Sätze Direktantwort ÜBER der Tabelle (AEO-Snippet)
  columns: [                  // genau 3 Spalten, feste Reihenfolge
    { key: "massküche"; label: "Maßküche vom Tischler"; highlight: true },
    { key: "studio";    label: "Küchenstudio" },
    { key: "moebelhaus"; label: "Möbelhaus / Serie" },
  ];
  rows: Array<{
    criterion: string;        // Zeilenkriterium (Entity in <th scope="row">)
    massküche: string;        // je Zelle 1 kurzer Satz / Stichphrase
    studio: string;
    moebelhaus: string;
  }>;
  note?: string;              // faire Einordnung unter der Tabelle (kein Bashing, Playbook §7)
  cta?: { label; href };      // weicher In-Content-CTA, z.B. -> /kontakt/
};
```
**Rendering-Anforderung:** echtes `<table>` mit `<caption>` (= `heading`/Kurzform) und `<th scope="col">`/`<th scope="row">` (semantisch korrekt → KI-/Snippet-parsebar, A11y). Hervorhebung der „Maßküche"-Spalte via `highlight`-Flag (on-brand Akzent, kein neues Farbtoken). Mobil: horizontal scrollbar **oder** Stacked-Cards pro Spalte — pixel-sauber an TOKENS.md, vom Design-Team festzulegen.

### (c) Welcher Content rein soll (FACTS-konform)
**5–6 Kriterienzeilen** (Playbook §2 nennt: Passgenauigkeit, Material, Beratung, Preis, Langlebigkeit):
- **Passgenauigkeit:** „Wand zu Wand, zentimetergenau, ohne Passleisten" / „feste Rastermaße, Passleisten" / „Standardmaße von der Stange".
- **Material & Geräte:** „frei wählbar, auch ungewöhnliche Kombinationen aus Massivholz und anderen Werkstoffen; alle gängigen Gerätehersteller" / „Markenprogramm in festem Rahmen" / „begrenztes Sortiment".
- **Fertigung:** „Eigenfertigung in Espelkamp, ein Ansprechpartner" / „Bestellung beim Hersteller" / „Lager-/Serienware".
- **Schwierige Grundrisse / Dachschräge:** „Kernkompetenz, planen wir durch" / „im Rahmen des Rasters" / „kaum möglich".
- **Langlebigkeit / Verarbeitung:** „PU-Kantenverleimung, nahezu wasserfest; auf lange Haltbarkeit gebaut" / „herstellerabhängig" / „auf Preis optimiert".
- **Kosten/Preis-Zeile (FACTS-Hartstopp):** **keine Zahlen.** Formulierung als Logik: „individuell kalkuliert, Sie zahlen für Passung und Langlebigkeit, nicht für einen Stückpreis" / „Programmpreis im Studio" / „günstiger Einstiegspreis, Standard". → leitet textlich auf Section 2 über.
- **Montage:** „eigenes Team, ~200 km um Espelkamp; Lieferung bundesweit" (belegt).

`note`: faire Einordnung — „Jede Variante hat ihre Berechtigung; wir ordnen das im Gespräch ehrlich für Ihren Grundriss ein." (Playbook §7 Souveränität, kein Wettbewerber-Bashing).

### (d) Wortzahl-Beitrag
**~180–260 W** (Tabellenzellen + Intro-Direktantwort + Note). Hohe Infodichte pro Wort (DEPTH Regel 3: Substanz statt Padding).

### (e) AEO/Snippet-Nutzen
**Höchster Zitat-Wert der Seite** (Playbook §9): saubere, beschriftete, eigenständig verständliche Tabelle = bevorzugter Container für AI Overviews / PAA „Tischler oder Küchenstudio". Intro liefert die 2–4-Satz-Direktantwort darüber. Entitäten (Maßküche, Küchenstudio, Möbelhaus, PU-Kantenverleimung, Espelkamp) konsistent → Entity-Erkennung.

### (f) Wiederverwendbarkeit
**Voll generisch** über `columns`/`rows`-Props → 1:1 für jede Leistungsseite: Einbauschränke (Tischler vs. Baumarkt vs. Möbelhaus), Badmöbel, Ladenbau (Tischler vs. Ladenbauer vs. Systemmöbler) usw. Sample für `/library` + `catalog-data.ts` aus den Küchen-Props ableiten (analog `sharedFaqSample` in `samples.ts`).

---

## Section 2 — Kostenfaktoren-/Orientierungs-Modul (OHNE Preiszahlen)

**Component:** `KuechenKosten` (registry `useCase: "cost-factors"`, `category: "shared"`)

### (a) Zweck + Pflicht-Modul/Intent
Deckt **Playbook-Baustein 5 (PFLICHT)** und **Micro-Intent 2** — laut Playbook §1 „der wichtigste Micro-Intent dieses Typs; fehlt er, bricht der Besucher ab". Beantwortet „Was kostet das ungefähr?" **ohne Preiszahl**, indem es transparent zeigt, **welche Faktoren** den Preis treiben und **warum es keine Pauschale** gibt — und führt zum individuellen Angebot. Gate 5 ist ohne dieses Modul **rot**.

### (b) Inhaltsstruktur / Props
```ts
export const kuechenKosten = {
  heading: string;            // Frage-zuerst: "Was kostet eine Küche nach Maß?"
  intro: string;              // Direktantwort 2–4 Sätze: "individuell, kein Pauschalpreis, hängt von ... ab"
  factorsHeading?: string;    // "Was den Preis Ihrer Küche bestimmt"
  factors: Array<{            // 5–7 Kostenfaktoren als Liste/Grid
    label: string;            // z.B. "Größe & Grundriss"
    description: string;      // 1–2 Sätze, wie der Faktor wirkt
    icon?: string;            // optional, nur vorhandene Lucide/Brand-Icons
  }>;
  whyNoFlatRate: { heading: string; body: string };  // "Warum wir keine Pauschale nennen"
  orientation?: string;       // ehrliche Logik OHNE Zahl: "Sie zahlen für Passung, Material, Langlebigkeit"
  cta: { label; href };       // STARK -> /kontakt/ ("individuelles Angebot nach kostenlosem Aufmaß")
  plannerCta?: { label; href }; // -> /moebelplaner/ (niedrigschwellig selbst loslegen)
  // Verweis-Anker auf künftiges Kosten-Ratgeber-Kind (internal-linking-Backlog, pending bis gebaut)
};
```
**Kein `Offer`/`AggregateOffer`-Schema** (Playbook §4: nur mit belegter Preisspanne — die gibt es nicht → weglassen, sonst Faktentreue-Gate 6).

### (c) Welcher Content rein soll (FACTS-konform — Faktoren statt Preise!)
**`intro` (Direktantwort):** „Eine Küche nach Maß kalkulieren wir immer individuell. Einen Pauschalpreis gibt es nicht, weil jede Küche anders zugeschnitten ist. Der Preis ergibt sich aus diesen Faktoren." (deckt sich 1:1 mit bestehender FAQ-Antwort → konsistent, kein Widerspruch).

**`factors` (5–7, je 1–2 Sätze, KEINE Zahlen):**
1. **Größe & Grundriss** — Laufmeter, Anzahl Schränke, schwierige Grundrisse/Dachschrägen.
2. **Fronten & Materialien** — Massivholz oder branchenübliche Werkstoffe, Oberflächen, ungewöhnliche Kombinationen.
3. **Arbeitsplatte** — Materialwahl und Verarbeitung.
4. **Geräte** — frei wählbar, alle gängigen Hersteller; Umfang und Ausstattung wirken auf den Preis.
5. **Ausstattung & Beschläge** — Auszüge, Apothekerauszüge, Eckschrank-Mechaniken, grifflose Technik.
6. **Aufwand für Maßanfertigung** — Einzelfertigung statt Serie, Wand-zu-Wand ohne Passleisten.
7. **Montagegebiet** — Montage durch eigenes Team im ~200-km-Umkreis; Lieferung bundesweit.

**`whyNoFlatRate`:** „Jede Maßküche entsteht einzeln. Erst nach Beratung und kostenlosem Aufmaß vor Ort steht fest, was Ihre Küche braucht. Darum nennen wir keine Pauschale, sondern ein klares, individuelles Angebot ohne versteckte Kosten." (FACTS: kostenloses Aufmaß ✅, „individuelles Angebot" ✅).

**`orientation` (Wert-Logik, keine Zahl):** „Sie zahlen für exakte Passung, freie Material- und Gerätewahl und eine Verarbeitung, die lange hält — unter anderem durch unsere nahezu wasserfeste PU-Kantenverleimung." 

**Verboten in dieser Section:** jede € / „ab"-Angabe / Quadratmeter- oder Laufmeterpreis / Preisspanne (FACTS-Hartstopp, Gate 6 = sofortiger Hard Stop).

### (d) Wortzahl-Beitrag
**~280–360 W** (Intro + 7 Faktoren à 1–2 Sätze + „warum keine Pauschale" + Orientierung). Stärkster einzelner Tiefen-Block neben FAQ.

### (e) AEO/Snippet-Nutzen
Sehr hoch: „Was kostet eine Küche nach Maß?" ist Top-PAA. Frage-zuerst-H2 + Direktantwort = zitierfähig. Die Faktor-Liste ist als **HowTo-freie, geordnete Liste** snippet-tauglich und differenziert sauber gegen den (noch zu bauenden) Kosten-Ratgeber, **ohne** dessen Tiefe zu duplizieren (Playbook §11: Leistung verlinkt, Ratgeber erklärt erschöpfend → Kannibalisierungs-Schutz).

### (f) Wiederverwendbarkeit
**Voll generisch.** „Kostenfaktoren statt Preise" gilt für **jede** Leistungsseite (FACTS: Preise immer individuell, alle Kategorien). Props (`factors`, `whyNoFlatRate`, `orientation`) sind kategorie-agnostisch → direkt für Einbauschränke, Badmöbel, Ladenbau, Büro, Gastro, Praxis nutzbar. Das ist das wertvollste neue Shared-Modul der Library, weil es das härteste Gate (5) seitentyp-weit löst.

---

## Section 3 — FAQ-rich-Section (10–15 Items, gruppiert)

**Component:** `KuechenFaqRich` — vorzugsweise **Erweiterung der bestehenden `Shared — FAQ`** (`useCase: "faq"`), nicht ein zweites FAQ. Falls Gruppierung das pixel-perfekte Markup der bestehenden FAQ bricht, separate `category: "shared"`-Variante mit eigener `useCase: "faq-rich"`.

### (a) Zweck + Pflicht-Modul/Intent
Deckt **Playbook-Baustein 8 (FAQ 10–15, PFLICHT)**, speist alle 7 Micro-Intents nach und ist laut Playbook der **Haupt-Tiefenträger UND Conversion-Vorbereiter**. AEO-Doppelnutzen: PAA + FAQPage-Schema + KI-zitierbare Q&A-Paare. **Pflicht-Anzahl 10–15** (E-E-A-T-Checkliste verlangt ≥5; dieser Typ liegt höher).

### (b) Inhaltsstruktur / Props
Bestehende Section rendert eine flache `items: { question; answer }[]`-Liste (links Intro+Arrow-Link, rechts Accordion mit rotierendem Pfeil). Erweiterung **abwärtskompatibel**:
```ts
export const kuechenFaq = {
  heading: string;
  intro?: string;                  // bestehender Default-Wortlaut
  ctaLabel?; ctaHref?;             // bestehend
  // NEU, optional: thematische Gruppierung für 12–15 Items
  groups?: Array<{
    label: string;                 // "Kosten & Angebot" | "Ablauf & Montage" | "Material & Qualität" | "Planung & Grundriss"
    items: Array<{ question; answer }>;
  }>;
  items?: Array<{ question; answer }>;  // Fallback: flache Liste (Rückwärtskompatibilität)
};
```
**Rendering:** Wenn `groups` gesetzt → gruppierte Accordions mit Zwischenüberschrift je Gruppe (alle Items als `<h3>`/Button für H-Hierarchie); sonst flache Liste wie bisher. **FAQPage-Schema muss exakt dem sichtbaren Text entsprechen** (Gate 8/12) — `kuechenJsonLd` flacht `groups` zu `mainEntity` ein (`groups.flatMap(g => g.items)`), damit Schema = sichtbarer Text bleibt.

### (c) Welcher Content rein soll (FACTS-konform)
Die **12 bestehenden Items beibehalten** (faktentreu, gut) und auf **14–15 erhöhen**, thematisch in 4 Gruppen ordnen:
- **Kosten & Angebot:** „Was kostet eine Küche nach Maß?" · „Warum oft teurer als von der Stange?" · „Gibt es eine Finanzierung?" (FACTS: Finanzierung ✅; keine Preiszahl).
- **Ablauf & Montage:** „Wie lange dauert es von Planung bis fertige Küche?" (verbindlicher Termin nach Aufmaß/Freigabe — **keine** erfundene Wochenzahl, FACTS) · „Wie läuft das Aufmaß ab?" (NEU, kostenloses Aufmaß vor Ort) · „Montieren Sie vor Ort, wie weit liefern Sie?" (~200 km Montage / Lieferung bundesweit).
- **Material & Qualität:** „Welche Materialien und Arbeitsplatten?" · „Eigene Markengeräte einbaubar?" · „Wie langlebig, wie pflege ich sie?" (PU-Kantenverleimung, Musterkante 24 h unter Wasser; **gesetzliche Gewährleistung, keine Garantiezahl**).
- **Planung & Grundriss:** „Unterschied Maßküche vs. Serienküche?" · „Lohnt sich eine Maßküche?" · „Tischler oder Küchenstudio?" · „Passt sie unter eine Dachschräge / in schwierigen Grundriss?".
- **2–3 NEUE Items** zum Aufstocken auf 14–15 (alle FACTS-belegt): „Kann ich vorab selbst planen?" (→ Möbelplaner, interner Link) · „Können Sie eine bestehende Küche erweitern/anpassen?" · „Bauen Sie auch ungewöhnliche Sonderwünsche?" (FACTS: „die verrücktesten Vorstellungen", echte Sondermaße).

**Verboten:** Garantiezahl, „5 Jahre", Lieferzeit in Wochen, Preiszahlen.

### (d) Wortzahl-Beitrag
Heute ~12 Items × ~55 W ≈ **~660 W**; mit 14–15 Items + Gruppen-Labels **~750–820 W**. Der größte einzelne Tiefen-Block der Seite.

### (e) AEO/Snippet-Nutzen
Maximal: jede Frage als echte Nutzerfrage (H3) + 2–4-Satz-Direktantwort = direkt PAA-/AI-Overview-zitierbar. FAQPage-Schema deckungsgleich mit Text (Gate 8/12 grün). Gruppen-Labels stärken thematische Klarheit für llms.txt.

### (f) Wiederverwendbarkeit
**Maximal** — die FAQ-rich-Section ist das im DEPTH.md (Regel 2) und Playbook für **jeden** Seitentyp vorgeschriebene Pflicht-Depth-Modul. Die optionale `groups`-Erweiterung ist abwärtskompatibel: bestehende Seiten (`/moebel-nach-mass`, `/gewerbe`, `/moebelplaner`) nutzen weiter `items`, neue Pillars nutzen `groups`. Eine Section, alle Leistungsseiten.

---

## Wortzahl-Gesamtwirkung
Neue Substanz aus den 3 Modulen: Vergleich **~220 W** + Kosten **~320 W** + FAQ-Aufstockung **~+120 W** (über den bestehenden ~660 W) = **~660 W zusätzlich**. Zusammen mit dem bestehenden Pillar-Text bringt das den Korridor sicher in **2.400–3.200 W** (Playbook §3). Substanz statt Fülltext (DEPTH Regel 3) — alle Inhalte tragen neue Information (Kriterien, Faktoren, Antworten), kein Padding.

## QC- & Wiring-Hinweise (Pflicht beim Bau)
- **Gate 5 (Tiefe):** alle 3 Module vorhanden + Korridor erreicht. **Gate 6 (Faktentreue):** keine Preiszahl / keine Garantiezahl / keine Lieferzeit-Wochen — härtester Hard Stop. **Gate 8/12 (Schema):** FAQPage `mainEntity` = sichtbarer FAQ-Text (bei `groups` flatten). **Gate 10 (AEO):** ≥1 echte Tabelle (Section 1) + Frage-zuerst-H2 mit Direktantwort in Section 1 & 2.
- **CTA (Playbook §6):** Section 2 trägt einen der mind. 3 verteilten CTAs (Kontakt + Möbelplaner). Section 1 weicher In-Content-CTA.
- **Interne Links (Playbook §8, internal-linking-Backlog):** Kosten-Modul und FAQ verlinken auf das künftige Kosten-Ratgeber-Kind und den Möbelplaner; bis das Ratgeber-Kind existiert als **pending** im Backlog führen, **keine Dead-Links** (launch clean), beim Bau beidseitig nachverdrahten.
- **Library:** alle 3 in `registry.ts` + `catalog-data.ts` registrieren, Samples in `src/lib/sections/samples.ts` (analog `sharedFaqSample`), `node --experimental-strip-types scripts/gen-section-catalog.mjs` laufen lassen, danach `design-qc`-Agent + visueller Diff gegen `docs/design-references/`.
- **Cluster-Dedup (Gate 11):** Vergleichs- und Kosten-Inhalte **kategoriespezifisch** halten (Küchen-eigene Kriterien/Faktoren), damit die wiederverwendbaren Module bei Einbauschränken/Bad/Ladenbau nicht in Korpus-Überlappung kippen.

**Relevante Dateien:** Content `/Users/maxwiebe/Desktop/Claude code Kundenprojekte/fast-migration-content/src/lib/content/kuechen-nach-mass.ts` · Library-Registry `src/lib/sections/registry.ts` + `catalog-data.ts` + Samples `src/lib/sections/samples.ts` · Design-Tokens `docs/design-system/TOKENS.md` · QC-Agent `.claude/agents/design-qc.md`.