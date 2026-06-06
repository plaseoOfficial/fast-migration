Leer. Ich habe alle Informationen, die ich brauche. Ich erstelle jetzt den Brief exakt nach der Template-Struktur (Abschnitte 0-13), verankere alle Intake-Fakten und SERP-Daten, mappe jeden Abschnitt auf die bestehenden Props in `kuechen-nach-mass.ts`, und markiere die Stellen, an denen die Props den Korridor/Intent nicht tragen, als STRUKTUR-BEDARF (Design).

Wichtige Beobachtungen aus dem Modul, die der Brief korrigieren muss (Faktentreue-Gate 6):
- `kuechenFaq` enthält "bis zu 5 Jahre Garantie" → VERBOTEN, muss neu getextet werden.
- `kuechenGeschichte.paragraphs[0]` sagt "1996 in einer Garage in Espelkamp" → falsch (Rahden-Tonnenheide), muss korrigiert werden.
- `kuechenGeschichte.factLines` enthält "Meisterbetrieb seit 2013" → VERBOTEN, muss zu "Meisterbetrieb" ohne Jahr.

Hier ist der fertige Brief:

# Content-Brief: Küchen nach Maß (`/kuechen-nach-mass/`)

> Quelle: Content-Engine (SERP + Konkurrenz + WDF*IDF + Brand) · Stand: 2026-06-06
> Status: [x] Entwurf  [ ] geprüft (QC)  [ ] vom Kunden freigegeben

## 0 · Meta
- **URL / Slug:** `/kuechen-nach-mass/` / `kuechen-nach-mass`
- **Seitentyp / Pillar:** Cluster-Pillar (commercial) / Privat (Kind des Hubs `/moebel-nach-mass/`)
- **Launch-Phase:** P1
- **Primär-Keyword:** `Küche nach Maß` (SV 1.500–3.000/Mon, Wettb. mittel-hoch)
- **Such-Intent:** C (Commercial Investigation)
- **Content-Modul:** `src/lib/content/kuechen-nach-mass.ts`
- **Sections (Reuse, aus CATALOG.md):** MnmHero (`kuechenHero`) · MnmIntroStats (`kuechenIntroStats`) · ExpandingImageCta (`kuechenCtas.intro`) · MnmProcess (`kuechenProcess`) · MnmTypische (`kuechenTypische`) · MnmWarum (`kuechenWarum`) · MnmGeschichte (`kuechenGeschichte`) · MnmMoebelplaner (`kuechenMoebelplaner`) · TestimonialsSection (`kuechenTestimonialsHeading`) · FaqSection (`kuechenFaq`) · ExpandingImageCta (`kuechenCtas.final`)

## 1 · Suchintention & Zielgruppe
- **Job-to-be-done:** „Soll ich die Küche beim Tischler machen lassen statt im Küchenstudio oder Möbelhaus, was kostet das grob, wie läuft das ab, und ist DIESER Betrieb der richtige?" Der Nutzer steht **vor** der Anfrage und trifft eine Vorauswahl-Entscheidung. Er will mit niedrigem Risiko Kontakt aufnehmen, nicht direkt kaufen (kein Warenkorb).
- **Persona / Funnel-Phase:** B2C, Bauherr/Renovierer/Sanierer mit konkretem Raum (schwieriger Grundriss, Neubau, Altbau, Dachschräge); Recherche kurz vor Kaufabsicht. Sekundär: Paare/Familien, die eine Markenküche-Alternative suchen und Wert auf echte Sondermaße + Materialfreiheit legen.
- **Top-5 Nutzerfragen:** 1) Was kostet eine Küche nach Maß vom Schreiner? 2) Lohnt sich eine Maßküche gegenüber einer Serienküche? 3) Wie läuft das ab — von Beratung bis Montage? 4) Tischler oder Küchenstudio — was ist der Unterschied? 5) Passt eine Maßküche in einen schwierigen Grundriss, und kann ich eigene Geräte einbauen lassen?

## 2 · SERP-Analyse (Google Top 10, DE)
- **Dominante Seitentypen/Formate:** kommerzielle Kategorie-/Leistungsseiten von Tischlereien & regionalen Schreinern, dazwischen Küchenstudio-Landingpages; Frage-zuerst-Struktur mit Prozess- und Kostenblock.
- **Ø Wortzahl Top-10:** ~2.000 Wörter (SERP-Median, gemessen 2026-06-06), Spitze ~2.950.
- **Featured Snippet / PAA:** PAA stark ausgeprägt (siehe FAQ-Kandidaten §7); Snippet-Chancen über Frage-H2 + Direktantwort, Vergleichstabelle und Kostenrahmen-Tabelle.
- **Pflicht-Abdeckung (was alle Top-3 haben):** Definition + Nutzen Maß vs. Serie · Preis-/Kostenorientierung · Prozess (Beratung → Aufmaß → Planung → Fertigung → Montage) · Vergleich Tischler vs. Studio vs. Möbelhaus · Material/Arbeitsplatten · Küchen-Formen · FAQ.

## 3 · Konkurrenz & Content-Gaps
- **Direkte Wettbewerber im SERP:** regionale Tischlereien/Schreinereien mit Küchen-nach-Maß-Seiten, Küchenstudio-Ketten, Möbelhäuser mit Maß-Angebot, einzelne Maßküchen-Portale.
- **Was sie abdecken / was fehlt:** Sie tragen Prozess + grobe Kostenlogik + Formen. Es fehlt meist: **echte Sondermaße & Wand-zu-Wand ohne Passleisten** als belegter Unterschied, ehrliche Kostenfaktoren-Aufklärung statt Pseudo-Preise, ein **belegbares Qualitäts-USP** (PU-Kantenverleimung), und konsistente **Geo-Trennung** (Lieferung vs. Montage).
- **Unser Winkel (womit Fast schlägt):** Meisterbetrieb · eigene Fertigung Espelkamp (~1.000 m², Homag-Technik, 72.000+ gefertigte Einzelteile, 4.000+ Projekte) · Aufmaß + Montage aus einer Hand mit eigenem Team · **alles individuell machbar** („die verrücktesten Vorstellungen"), echte Sondermaße, **Wand-zu-Wand ohne Passleisten**, ungewöhnliche Materialkombinationen · **PU-Kantenverleimung** (Musterkante 24 h unter Wasser → nahezu wasserfest) · Familie Fast seit 1996 · eigener Möbelplaner.

## 4 · Keyword-Set
- **Primär:** `Küche nach Maß`
- **Sekundär (3–8):** Maßküche · Tischlerküche · Schreinerküche · Einbauküche nach Maß · individuelle Küche · Küche Maßanfertigung · Küche vom Tischler · maßgefertigte Küche
- **LSI / Entitäten (Pflicht-Begriffe):** Aufmaß · 3D-Planung · Arbeitsplatte · Fronten · Korpus · Auszüge/Beschläge · Kochinsel · Küchenzeile · L-Küche/U-Küche · Stauraum · Dunstabzug/Backofen/Kochfeld · Markengeräte · Wand-zu-Wand · Passleisten · Massivholz · Espelkamp/OWL · Meisterbetrieb · PU-Kantenverleimung · Montage · Finanzierung
- **Keywords „aufmachen" (eigene Abschnitte/Sub-Themen):** „Küche vom Tischler vs. Küchenstudio" (Vergleich) · „Was kostet eine Küche nach Maß / Kostenfaktoren" · „Küchenformen nach Maß" · „Materialien & Arbeitsplatten" · „Küche im schwierigen Grundriss / Dachschräge" · „Markengeräte frei wählbar".

## 5 · WDF*IDF — thematische Pflichtterme
| Term | Wichtigkeit | im Entwurf abgedeckt? |
|---|---|---|
| Küche nach Maß / Maßküche | hoch | ☐ |
| Tischlerküche / Schreinerküche / Küche vom Tischler | hoch | ☐ |
| Aufmaß (kostenlos, vor Ort) | hoch | ☐ |
| Arbeitsplatte | hoch | ☐ |
| Fronten / grifflos | hoch | ☐ |
| Kochinsel / Küchenzeile / L-Küche / U-Küche | hoch | ☐ |
| Markengeräte (frei wählbar) | hoch | ☐ |
| Kosten / Kostenfaktoren / individuelles Angebot | hoch | ☐ |
| Beratung → Planung → Fertigung → Montage | hoch | ☐ |
| Wand-zu-Wand ohne Passleisten | hoch | ☐ |
| Massivholz / Materialvielfalt | mittel | ☐ |
| PU-Kantenverleimung / nahezu wasserfest | mittel | ☐ |
| Espelkamp / OWL / Montage ~200 km | mittel | ☐ |
| Stauraum / Auszüge / Beschläge | mittel | ☐ |
| Dachschräge / Nische / schwieriger Grundriss | mittel | ☐ |
| Finanzierung | mittel | ☐ |
| 3D-Planung / Möbelplaner | mittel | ☐ |

## 6 · Content-Tiefe & Umfang
- **Ziel-Wortzahl:** **content-only-Korridor 1.300–1.700 Wörter** (Decke der bestehenden Props). **⚠️ Diskrepanz zum SERP:** Das echte SERP-Ziel liegt bei 2.400–3.200 Wörtern (Playbook-Korridor Leistung). Mit den vorhandenen Props ist dieser Lauf bewusst auf 1.300–1.700 begrenzt; die fehlenden ~900–1.500 Wörter zum SERP-Ziel brauchen 3 neue Design-Sections (siehe STRUKTUR-BEDARF-Markierungen in §7 und §9 → separate Design-Spec).
- **Pflicht-Unterthemen:** Definition + Nutzen Maß vs. Serie · Preis-/Kostenorientierung (Kostenfaktoren, keine Zahlen) · Prozess in 5 Schritten · Vergleich Tischler vs. Studio vs. Möbelhaus · Material/Arbeitsplatten/Fronten · Küchenformen · Markengeräte frei wählbar · Geo (Lieferung bundesweit / Montage ~200 km) · FAQ ≥10.
- **Tiefe-Differenzierer (besser/tiefer als SERP):** echte Sondermaße & **Wand-zu-Wand ohne Passleisten** · **PU-Kantenverleimung** mit 24-h-Wasser-Beweis · Eigenfertigung Espelkamp mit belegten Zahlen · Familie Fast als 2.-Generation-Story · Markengeräte aller gängigen Hersteller frei wählbar · ehrliche Kostenaufklärung statt Pseudo-Preise.

## 7 · Struktur / Outline (→ mappt auf Section-Props)
- **H1:** Küchen nach Maß aus Espelkamp: zentimetergenau vom Meisterbetrieb → **Prop:** `kuechenHero.title`
- **Meta-Title (≤ 60 Z.):** „Küche nach Maß vom Meisterbetrieb | Fast Systemmöbel" (57 Z.)
- **Meta-Description (≤ 155 Z.):** „Küche nach Maß aus Espelkamp: zentimetergenau geplant, in eigener Fertigung gebaut, vom eigenen Team montiert. Markengeräte frei wählbar. Jetzt anfragen." (152 Z.)

**Abschnitte (H2/H3) — je Abschnitt: Zweck · Kernaussage · Ziel-Keywords · Section-Prop-Mapping:**

1. **Hero / Intro (Definition + Nutzenversprechen)** — *Micro-Intent 1*
   - Zweck: Direktantwort „Was ist eine Küche nach Maß?" + Nutzen; Primär-KW in H1 + ersten 100 Wörtern.
   - Kernaussage: Eine Küche von der Stange passt selten genau. Fast plant und baut zentimetergenau auf Raum, Alltag und Geräte; gefertigt im eigenen Meisterbetrieb Espelkamp, montiert vom eigenen Team.
   - Ziel-Keywords: Küche nach Maß, Meisterbetrieb, Espelkamp.
   - **Prop-Mapping:** `kuechenHero.title`, `kuechenHero.intro`, `kuechenHero.breadcrumb` (Breadcrumb = Up-Link zum Hub, **nicht ändern**), `kuechenHero.bgImage`/`imageAlt` (Bildpfad **nicht ändern**).

2. **IntroStats — „Ihre Küche nach Maß: präzise geplant, sauber gebaut"** — *Micro-Intent 1, 4, 5*
   - Zweck: Nutzen + Eigenfertigung + erste Conversion-Anker; 72K-Counter als Beleg.
   - Kernaussage: Planung von erster Skizze bis Montage; genaues Aufmaß; jeder Zentimeter genutzt; Eigenfertigung ohne Zwischenhändler, ein Ansprechpartner. **Markengeräte aller gängigen Hersteller frei wählbar** (Intake: NICHT „wir nutzen Marke X").
   - Ziel-Keywords: Küche planen nach Maß, Einbauküche nach Maß, individuelle Küche.
   - **Prop-Mapping:** `kuechenIntroStats.heading`, `.introBefore`/`.introBold`/`.introAfter`, `.col1Title`/`.col1Body` (+ CTA `col1CtaHref:"/kontakt"` → **Kontakt-Link, behalten**), `.col2Body`, `.col3Title`/`.col3Body` (+ CTA `col3CtaHref:"/moebelplaner/"` → **Möbelplaner-Link, behalten**), `.since`/`.sinceSub`, `.counterTarget:72`/`.counterSuffix:"K+"` (Zahl belegt, **nicht ändern**). Bildpfade `bandImage`/`bandAlt` **nicht ändern**.
   - Hinweis Re-Text: `col1Body` so umtexten, dass „Markengeräte … vom Backofen bis zur Dunstabzugshaube" als **frei wählbar** klingt (alle gängigen Hersteller), nicht als feste Fast-Marke.

3. **ExpandingImageCta (Intro-CTA)** — *Micro-Intent 7*
   - Zweck: früher, weicher Conversion-Anker zur Anfrage.
   - **Prop-Mapping:** `kuechenCtas.intro.heading`, `.linkText`, `.href:"/kontakt"` (**behalten**), `.image` (**nicht ändern**).

4. **Prozess — „Planung, Fertigung und Montage aus einer Hand"** — *Micro-Intent 3*
   - Zweck: 5-Schritte-Ablauf, Risiko-Abbau; AEO-/Listen-tauglich.
   - Kernaussage: Beratung → **kostenloses Aufmaß vor Ort** → 3D-Planung (Geräte + Anschlüsse) → Fertigung auf Homag-Technik in Espelkamp → Montage durch **eigenes Team**. Ein Ansprechpartner, verbindlicher Termin **nach Aufmaß und Freigabe** (KEINE Wochenzahl).
   - Ziel-Keywords: Küche Maßanfertigung, Küche vom Tischler, Aufmaß, Montage.
   - **Prop-Mapping:** `kuechenProcess.heading`, `.paragraph`, `.paragraphStrong:"Made in Germany."`, `.image`/`.imageAlt` (**nicht ändern**).
   - **STRUKTUR-BEDARF (Design): nummerierter 5-Schritte-Prozessblock.** Das Playbook verlangt einen nummerierten Prozess (je Schritt 2–4 Sätze, HowTo-/Listen-tauglich). Die aktuelle `kuechenProcess`-Prop ist nur EIN Fließtext-Absatz und kann den nummerierten Schritt-Block nicht abbilden. → Eigene Design-Section „ProcessSteps" (5 nummerierte Schritte).

5. **MnmTypische — „Küchen nach Maß für jeden Grundriss und Stil" (Küchenformen)** — *Micro-Intent 1, 5*
   - Zweck: Küchenformen/-stile abdecken (Formen-Pflichtmodul), speist ItemList/hasOfferCatalog-Schema.
   - Kernaussage: Küchenzeilen · L- und U-Küchen · Kochinseln · grifflose Küchen · Landhaus/Klassik · Stauraum nach Maß. Hier **Wand-zu-Wand ohne Passleisten** + schwierige Grundrisse (Dachschräge/Nische) verankern.
   - Ziel-Keywords: Küchenzeile, L-Küche, Kochinsel, grifflose Küche.
   - **Prop-Mapping:** `kuechenTypische.heading`, `row1[]`/`row2[]` (je `title`+`description`), `image1`/`image2` + alts (**Bildpfade/Keys nicht ändern**). Diese Titel speisen `kitchenTypes` → ItemList/OfferCatalog; **Titel-Reihe nicht verändern** (Schema-Konsistenz).
   - Hinweis: Sobald Produkt-Kinder (Küchenzeile/L-Küche/Kochinsel nach Maß) gebaut sind, hier beidseitig verlinken (Backlog §10).

6. **MnmWarum — „Warum eine Küche vom Tischler mehr kann als von der Stange" (Vergleich)** — *Micro-Intent 4*
   - Zweck: Entscheidungshilfe Tischler vs. Studio vs. Möbelhaus; Kern-USP.
   - Kernaussage: Küchenstudio = Markenküche in Rastermaßen, Möbelhaus = Standard; Fast baut selbst, zentimetergenau, **Wand-zu-Wand ohne Passleisten**, alles individuell machbar; Fronten/Materialien/Geräte frei wählbar; Montage ~200 km eigenes Team. Wettbewerb **fair** einordnen (kein Bashing). „Klare Preise" statt „klare Preise" → besser „klares, individuelles Angebot" (keine Preiszahl).
   - Ziel-Keywords: Küche vom Tischler, Tischlerküche, Schreinerküche, maßgefertigte Küche.
   - **Prop-Mapping:** `kuechenWarum.heading`, `.paragraph`, `.images[]` (6 Bilder, **Pfade/Maße nicht ändern**).
   - **STRUKTUR-BEDARF (Design): Vergleichstabelle „Tischler/Maß vs. Küchenstudio vs. Möbelhaus/Serie"** (Kriterien: Passgenauigkeit, Material-/Gerätefreiheit, Beratung, Preislogik, Langlebigkeit). Pflicht-Tabelle des Leistungstyps (Gate 5/10) und wahrscheinlichstes Zitat-Snippet. `kuechenWarum` ist nur Fließtext + Bildergrid → Tabelle nicht abbildbar. → Eigene Design-Section „ComparisonTable".

7. **STRUKTUR-BEDARF (Design): Preis-/Kostenmodul — PFLICHT (fehlt komplett in den Props)** — *Micro-Intent 2 (wichtigster)*
   - Zweck: Kostenorientierung ehrlich beantworten; ohne dieses Modul bricht der Besucher ab (Gate 5 rot).
   - Kernaussage: **Preise immer individuell**, KEINE Zahlen/Spannen. Stattdessen ehrlich die **Kostenfaktoren** erklären: Größe/Laufmeter, Fronten, Arbeitsplatte, Geräte (frei wählbar), Ausstattung/Beschläge, Grundriss-Aufwand. **Finanzierung auf Wunsch möglich** (keine Partner-Namen). „Warum kein Pauschalpreis" + Verweis auf späteren Kosten-Ratgeber.
   - Ziel-Keywords: Küche nach Maß Kosten, was kostet eine Maßküche, Küche vom Schreiner Preis.
   - **Es gibt keine passende Prop** im Modul. → Eigene Design-Section „CostFactors" (Direktantwort + Faktoren-Liste/Tabelle, AEO-tauglich). Dies ist eine der 3 fehlenden Design-Sections.

8. **MnmGeschichte — „Küchenhandwerk aus fast drei Jahrzehnten" (Trust-Anriss + E-E-A-T)** — *Micro-Intent 6*
   - Zweck: kurzer Trust-Anriss (Region, Familie, Eigenfertigung) — Tiefe bleibt der Referenz-Seite vorbehalten.
   - Kernaussage: Gründung **1996 in Rahden-Tonnenheide** (KORREKTUR, s. u.), 2001 Umzug Espelkamp; Familie Fast (Johann Gründer; Andreas & Peter 2. Generation seit 2011); ~1.000 m² Fertigung, Homag-Technik, Eigenfertigung. Geo sauber: gefertigt Espelkamp, Montage ~200 km, Lieferung bundesweit.
   - Ziel-Keywords: Meisterbetrieb, Espelkamp, OWL, Küche nach Maß.
   - **Prop-Mapping:** `kuechenGeschichte.heading`, `.subheading`, `.gallery[]` (**Pfade/Captions nicht ändern**), `.paragraphs[]`, `.factLines[]`.
   - **PFLICHT-KORREKTUREN (Gate 6, Faktentreue — sofortiger Hard Stop sonst):**
     - `paragraphs[0]` = „Fast Systemmöbel begann 1996 in einer Garage in **Espelkamp**." → **ändern auf „Rahden-Tonnenheide"** (Espelkamp erst 2001). FALSCH-CLAIM.
     - `factLines` enthält **„– Meisterbetrieb seit 2013"** → **ersetzen durch „– Meisterbetrieb"** (ohne Jahreszahl). VERBOTENER CLAIM.
     - Übrige factLines bestätigt nutzbar: Made in Germany, 1.000 m² Fertigung, Homag-Technologie, Montage bis 200 km, Lieferung bundesweit.

9. **MnmMoebelplaner — „Ihre Küche online planen und konfigurieren"** — *Micro-Intent 7*
   - Zweck: niedrigschwelliger Primär-Conversion-Weg (Möbelplaner) + 3D-Planung.
   - **Prop-Mapping:** `kuechenMoebelplaner.heading`, `.body`, `.ctaLabel`, `.ctaHref:"/moebelplaner/"` (**behalten**), `.image`/`.imageAlt` (**nicht ändern**).

10. **TestimonialsSection** — *Trust*
    - **Prop-Mapping:** `kuechenTestimonialsHeading`. Inhalt der Testimonials selbst nur verwenden, wenn belegt; **Arminia-Bielefeld-Referenz hier NICHT verwenden** (Intake: Fast baute dort die Kabine, keine Küche). Keine erfundenen Zitate (Gate 6).

11. **FaqSection — „Häufige Fragen zu Küchen nach Maß"** — *Micro-Intent 1–7*
    - Zweck: Haupt-Tiefenträger + FAQPage-Schema + PAA-Abdeckung; muss **≥10** Fragen tragen.
    - **Prop-Mapping:** `kuechenFaq.heading`, `kuechenFaq.items[]` (Frage/Antwort) → speist `kuechenJsonLd` FAQPage (Schema spiegelt sichtbaren Text 1:1, Gate 8).
    - **STRUKTUR-/CONTENT-BEDARF: aktuell nur 6 FAQ-Items → auf ≥10 erweitern.** Die `items[]`-Liste ist erweiterbar (Schema mappt automatisch über `.map`), also content-seitig machbar — KEIN Design-Bedarf, aber Pflicht-Erweiterung.
    - **PFLICHT-KORREKTUR (Gate 6 — Hard Stop sonst):** FAQ „Gibt es eine Garantie auf die Küche?" → Antwort enthält **„bis zu 5 Jahre Garantie"** = VERBOTENER CLAIM (es gibt KEINE freiwillige Garantie). **Neu texten:** Frage zu Qualität/Langlebigkeit umformulieren (z. B. „Wie langlebig ist eine Küche nach Maß?") und über gesetzliche Gewährleistung + PU-Kantenverleimung/Verarbeitung antworten, OHNE Garantiezahl.
    - **PFLICHT-KORREKTUR Lieferzeit-FAQ:** „Wie lange dauert es …" enthält aktuell „In der Regel einige Wochen" → KEINE Wochenangabe behaupten (Intake). Auf „verbindlichen Termin nach Aufmaß und Freigabe" umstellen.
    - **FAQ-Set (≥10, aus PAA + Intake) — Frage → Kernantwort:**
      1. **Was kostet eine Küche nach Maß vom Schreiner?** → Immer individuell; Preis ergibt sich aus Größe, Fronten, Arbeitsplatte, Geräten und Ausstattung. Kein Pauschalpreis; nach Aufmaß ein klares, individuelles Angebot. (KEINE Zahl.)
      2. **Lohnt sich eine Küche nach Maß gegenüber einer Serienküche?** → Wenn Raum, Grundriss oder Ansprüche vom Raster abweichen: ja. Sie zahlen nur, was Sie brauchen, und nutzen jeden Zentimeter.
      3. **Was ist der Unterschied zwischen Maßküche und Serienküche?** → Serie = feste Rastermaße + Passleisten; Maß = zentimetergenau, **Wand-zu-Wand ohne Passleisten**, freie Material- und Gerätewahl.
      4. **Schreiner/Tischler oder Küchenstudio — was passt für mich?** → Studio = Markenküche in Rastern; Tischler = echte Sondermaße + Eigenfertigung. Faire Einordnung, kein Bashing.
      5. **Warum ist eine Maßküche teurer als von der Stange?** → Einzelfertigung statt Massenraster; dafür exakte Passung, freie Materialwahl, Langlebigkeit. Wert statt Stückpreis.
      6. **Wie lange dauert es von der Planung bis zur fertigen Küche?** → Verbindlicher Termin **nach Aufmaß und Freigabe** vor Produktionsstart. (KEINE Wochenzahl.)
      7. **Welche Materialien und Arbeitsplatten sind möglich?** → Massivholz und branchenübliche hochwertige Materialien; auch ungewöhnliche Kombinationen. Freie Wahl bei Fronten und Arbeitsplatte. (KEINE feste Listen-Behauptung.)
      8. **Kann ich meine eigenen Markengeräte einbauen lassen?** → Ja. Geräte **aller gängigen Hersteller frei wählbar**, passgenau eingeplant — Backofen, Kochfeld, Dunstabzug, Spüle.
      9. **Passt eine Küche nach Maß in einen schwierigen Grundriss / unter eine Dachschräge?** → Genau dafür gemacht: schräge Wände, Nischen, niedrige Decken werden gezielt genutzt.
      10. **Montieren Sie die Küche bei mir vor Ort?** → Ja, immer durch **eigenes Team**. Montage im Umkreis von ~200 km um Espelkamp; **Lieferung bundesweit**. Klar trennen: Lieferung deutschlandweit, Montage montage-gebunden.
      11. **Gibt es eine Finanzierung?** → Auf Wunsch möglich. (Keine Partner-Namen.)
      12. **Wie langlebig ist eine Küche nach Maß / gibt es Gewährleistung?** → Lange haltbar dank sauberer Verarbeitung und **PU-Kantenverleimung** (nahezu wasserfest; Musterkante 24 h unter Wasser getaucht). Es gilt die gesetzliche Gewährleistung. (KEINE Garantiezahl.)
    - **Link im FAQ:** „Zum FAQ" zeigt aktuell auf `#` → bleibt pending bis `/faq/` gebaut (Backlog). FAQ-CTA-Link zu `/kontakt/` behalten.

12. **ExpandingImageCta (Final-CTA)** — *Micro-Intent 7*
    - **Prop-Mapping:** `kuechenCtas.final.heading`, `.linkText` („kostenlose Küchenberatung anfragen" passt zu kostenlosem Aufmaß), `.href:"/kontakt"` (**behalten**), `.image` (**nicht ändern**).

- **FAQ (≥10):** siehe Abschnitt 11 oben (12 Fragen spezifiziert) → speist FAQPage-Schema 1:1.

## 8 · E-E-A-T-Elemente (Pflicht)
- **Experience:** „In unserer Werkstatt in Espelkamp …"; konkretes Detail Wand-zu-Wand ohne Passleisten; Region OWL (Espelkamp, Minden, Lübbecke, Osnabrück, Bielefeld); Realbilder mit beschreibenden alt-Texten (bereits in Props).
- **Expertise:** Meisterbetrieb · vollständiger Prozess (Beratung → kostenloses Aufmaß → 3D-Planung → Fertigung → Montage) · **PU-Kantenverleimung** mit 24-h-Wasser-Beweis · Eigenfertigung ~1.000 m², Homag-Technik, 72.000+ Einzelteile, 4.000+ Projekte · Massivholz + branchenübliche Materialien.
- **Trust:** NAP konsistent (Alte Waldstraße 32, 32339 Espelkamp · 05771 9138312) · klare Conversion-Wege ohne Druck · vollständiges Schema · **keine erfundene Garantie** (nur gesetzliche Gewährleistung) · kostenloses Aufmaß · eigenes Montageteam.
- **Owner/Meister-Bezug:** Familie Fast (Johann Gründer; Andreas & Peter 2. Generation seit 2011) als Anriss; tiefe Story der Referenz-/Über-uns-Seite vorbehalten.
- **Belegbare Zahlen NUR aus FACTS.md:** 1996 Gründung (Rahden-Tonnenheide), 2001 Espelkamp, ~1.000 m², Homag, 72.000+ Einzelteile, 4.000+ Projekte, ~200 km Montage, kostenloses Aufmaß, eigenes Montageteam. **Verboten:** „seit 2013", „5 Jahre Garantie", „25+ Jahre", „12+ Mitarbeiter", erfundene Preise, exotische Hölzer als Alleinstellung, FSC/PEFC namentlich, Wochen-Lieferzeit.

## 9 · Schema-Markup
- **Typen (vorhanden in `kuechenJsonLd`):** `Service` (provider=Organization, serviceType, areaServed=GeoCircle 200 km, hasOfferCatalog aus `kitchenTypes`) · `BreadcrumbList` (Startseite → Möbel nach Maß → Küchen nach Maß) · `FAQPage` (mapped aus `kuechenFaq.items`) · `ItemList` (Küchen-Typen).
- **Besonderheiten:** FAQPage muss sich nach FAQ-Erweiterung (≥10) und den Faktenkorrekturen **exakt** mit dem sichtbaren Text decken (Gate 8). Kein `Product`, keine `AggregateRating`, **kein erfundener Offer-Festpreis** (Preise individuell). `areaServed` GeoCircle 200 km bewusst belassen; Lieferung bundesweit gehört in den Fließtext, nicht in das GeoCircle-Schema.
- **STRUKTUR-BEDARF (Design) Hinweis:** Werden Vergleichstabelle / Kostenmodul / Prozessblock als neue Sections gebaut, bleibt das Schema content-seitig unverändert (kein HowTo-Schema für den Prozess — Intent-Konflikt laut Playbook §4).

## 10 · Interne Verlinkung (laut `internal-linking.md`)
- **Eingehend (von):** `/moebel-nach-mass/` (Hub → Cluster, bereits verdrahtet) · Homepage (SOLL, pending bis Homepage-Relaunch) · künftige Geschwister-/Produkt-/Ratgeber-Kinder (Up-Link).
- **Ausgehend (zu) — ≥3 kontextuell, Cluster-Pillar-Budget 8–10 Body-Links:**
  - **Up-Link Hub:** `/moebel-nach-mass/` (Breadcrumb in `kuechenHero` + 1 kontextueller In-Content-Link, z. B. in IntroStats/Warum) — **bereits via Breadcrumb + MnmWeitereLeistungen-Karte verdrahtet**.
  - **Conversion (Pflicht):** `/moebelplaner/` (`kuechenIntroStats.col3CtaHref`, `kuechenMoebelplaner.ctaHref`) UND `/kontakt/` (`kuechenIntroStats.col1CtaHref`, beide `kuechenCtas`, FAQ-CTA) — **vorhanden**.
- **Pending (Backlog, NICHT als Dead-Link setzen — erst beim Bau beidseitig verdrahten):** `/kuechen-nach-mass/kueche-nach-mass-kosten/` (MUSS, aus dem Kostenmodul §7.7 verlinken) · Produkt-Kinder Küchenzeile/L-Küche/Kochinsel nach Maß (MUSS, aus MnmTypische) · `/kuechen-nach-mass/kueche-planen/` + `/tischlerkueche-vs-kuechenstudio/` (SOLL) · `/referenzen/`, `/ablauf-massanfertigung/` (SOLL) · `/faq/` („Zum FAQ" steht auf `#`).
- **Conversion-Links:** `/moebelplaner/` · `/kontakt/`
- **Ankertext-Vorschläge (divers, Exact-Match max. 2–3×):** „Küche nach Maß" (exact, sparsam) · „maßgefertigte Küche" / „Küche vom Tischler" (partial) · „Möbel nach Maß bei Fast Systemmöbel" (brand+kw, zum Hub) · „Ihre Küche im Möbelplaner zusammenstellen" (beschreibend) · „unverbindlich anfragen" (Conversion). Cross-Silo (Gewerbe) **verboten**; `MnmWeitereLeistungen` ggf. cross-silo Gewerbe-Karte entfernen, sobald Privat-Geschwister gebaut sind (Backlog-Cleanup).

## 11 · CTA
- **Primär:** Möbelplaner (`/moebelplaner/` — IntroStats col3 + MnmMoebelplaner). **Sekundär:** Kontakt/Anfrage (`/kontakt/` — IntroStats col1, beide ExpandingImageCtas, FAQ-CTA). **Tertiär:** Telefon 05771 9138312 sichtbar/klickbar. Mind. 3 CTA-Anker verteilt (nach Intro/USP, nach Prozess/Kosten, im FAQ/Abschluss). Ton: einladend, kein Druck („Jetzt unverbindlich anfragen", nicht „Nur heute!").

## 12 · Brand-Voice-Hinweise für diese Seite
- **Anrede „Sie"; Perspektive „Wir".** Handwerklich-stolz, bodenständig, präzise, regional (Espelkamp/OWL). **Keine em-dashes** (Halbgeviertstrich verboten) — Punkte/Kommata statt Gedankenstrich.
- **Beweis statt Behauptung:** jede Qualitätsaussage mit konkretem Detail (Maß, Material, Prozess, PU-Kante, Ort). Souverän bei Preis & Vergleich, kein Wettbewerber-Bashing.
- **Ton-Nuance Leistung:** etwas verbindlicher/einladender als reiner Erklär-Ton, darf zur Anfrage führen. Nutzen aus Kundensicht zeigen („passt millimetergenau", „kein Stückwerk, eine Hand", „Wand-zu-Wand ohne Passleisten").
- **Do/Don't dieses Thema:** DO „die verrücktesten Vorstellungen setzen wir um", echte Sondermaße, Markengeräte frei wählbar. DON'T Garantiezahl, Wochen-Lieferzeit, Preiszahlen, „seit 2013", Arminia-Bielefeld auf dieser Seite, generische Stockphrasen („maßgeschneiderte Lösungen für höchste Ansprüche").
- **Humanizer (Pflicht-Stage vor QC):** Satzlängen variieren, KI-Floskeln/Übergänge raus, aktiv statt passiv, ein kurzer Akzent-Satz erlaubt; Informationsgehalt/Keywords/Links unverändert lassen.

## 13 · Quellen & Belege
- **SERP:** Google.de „küche nach maß" / „küchen nach maß", gemessen 2026-06-06 — Median ~2.000 W, Spitze ~2.950; PAA-Set (siehe §7/§1).
- **Kanon:** `docs/seo/brand/FACTS.md` (Fakten/Verbote) · `docs/seo/brand/BRAND_VOICE.md` (Stimme) · `docs/seo/playbooks/leistung.md` (Korridor/Module/Schema/CTA) · `docs/seo/DEPTH.md` · `docs/seo/templates/humanizer.md` · `docs/seo/internal-linking.md` · `docs/seo/keyword-map.md`.
- **Kunden-Intake Küche (2026-06-06, führend):** USP Sondermaße/Wand-zu-Wand ohne Passleisten · Materialvielfalt/freie Wahl · Markengeräte frei wählbar · Montage immer durch Fast (~200 km), Lieferung bundesweit · Finanzierung möglich · keine Wochen-/Preiszahlen · Arminia NICHT auf Küchen-Seite · E-E-A-T-Gold (Familie Fast, 1996 Rahden-Tonnenheide → 2001 Espelkamp, ~1.000 m², Homag, 72.000+ Einzelteile, 4.000+ Projekte, PU-Kantenverleimung, kostenloses Aufmaß).
- **Modul-Belegstelle:** `src/lib/content/kuechen-nach-mass.ts` — zu korrigierende Falsch-Claims: `kuechenGeschichte.paragraphs[0]` („Garage in Espelkamp" → Rahden-Tonnenheide), `kuechenGeschichte.factLines` („Meisterbetrieb seit 2013" → „Meisterbetrieb"), `kuechenFaq` Garantie-Item („bis zu 5 Jahre Garantie" → streichen) und Lieferzeit-Item („einige Wochen" → „nach Aufmaß und Freigabe").

---

**3 fehlende Design-Sections (separate Design-Spec, schalten SERP-Ziel 2.400–3.200 W frei):**
1. **ProcessSteps** — nummerierter 5-Schritte-Prozessblock (Beratung → Aufmaß → 3D-Planung → Fertigung → Montage), HowTo-/Listen-tauglich.
2. **ComparisonTable** — Vergleichstabelle Tischler/Maß vs. Küchenstudio vs. Möbelhaus/Serie (Pflicht-Tabelle, AEO-Zitat-Snippet).
3. **CostFactors** — Preis-/Kostenmodul (Kostenfaktoren + „warum kein Pauschalpreis" + Finanzierung-Hinweis, KEINE Zahlen), wichtigster fehlender Pflicht-Baustein.