# Seitentyp-Playbook: Leistung

> Die kommerzielle Cluster-Pillar-Seite einer Möbelkategorie: baut Vertrauen auf und führt zur **Anfrage**. Das ist der **häufigste Archetyp** (Mehrzahl der 111 Seiten). | Korridor: **2.400–3.200 Wörter** (intent-verankert, s. §3) | Schema: **Service + FAQPage + BreadcrumbList** (+ optional AggregateOffer-Hinweis im Kosten-Modul, nur belegte Werte)

## 0 · Wann dieser Typ greift (Auswahl über Spalte „Seitentyp" der URL-Master)

Die Engine wählt dieses Ebene-2-Playbook automatisch, wenn **alle** dieser Bedingungen gelten:

- **Seitentyp = „Leistung" / „Cluster-Pillar (commercial)"** in der URL-Master (Tab 02).
- **Intent-Spalte = C (Commercial)** — der Nutzer will eine Kategorie vergleichen und einen Anbieter wählen, kauft aber nicht im Selbstbedienungs-Sinn (kein Warenkorb).
- Die URL ist **Kopf eines Clusters** (sie hat Kinder-Seiten: Produkt-/Ratgeber-/Cluster-Artikel), z. B. `/kuechen-nach-mass/`, `/einbauschraenke-nach-mass/`, `/badmoebel-nach-mass/`, `/wohnmoebel-nach-mass/`, `/hauswirtschaftsraum/`, `/gewerbe/ladenbau/`, `/bueroeinrichtung/`, `/gastronomieeinrichtung/`, `/praxiseinrichtung/`, `/serienmoebel/`.

**Abgrenzung schon hier:** Hat die URL **kein** Kind und ist sie eine Einzel-Variante (z. B. `/kuechen-nach-mass/l-kueche-nach-mass/`) → **Produkt**, nicht Leistung. Steht in der Spalte „Kosten"/„planen"/„vs." → **Ratgeber**. Ist sie der Silo-Kopf **ohne** eigenen kommerziellen Langtext (`/moebel-nach-mass/`, `/gewerbe/`) → **Hub** (Sonderfall, s. §3).

## 1 · Such-Intent & Job-to-be-done — WAS WILL DER NUTZER SEHEN/TUN

**Dominanter Intent: C (Commercial Investigation).** Der Nutzer steht **vor** der Anfrage, nicht beim Kauf. Job-to-be-done: *„Ich brauche [Küche/Schrank/Ladenbau] nach Maß — soll ich das beim Tischler machen lassen, was kostet das ungefähr, wie läuft das ab, und ist DIESER Betrieb der richtige?"* Er will eine **Vorauswahl-Entscheidung** treffen und dann **mit niedrigem Risiko Kontakt aufnehmen**.

Konkrete Micro-Intents (jeder muss auf der Seite eine Antwort finden):

1. **„Was ist das überhaupt und für wen lohnt es sich?"** → Kategorie-Definition + Nutzen von Maßanfertigung vs. Serie.
2. **„Was kostet das ungefähr?"** → Preis-/Kostenorientierung. **Der wichtigste Micro-Intent dieses Typs** — fehlt er, bricht der Besucher ab oder klickt zum Wettbewerber zurück.
3. **„Wie läuft das ab, wenn ich anfrage?"** → Prozess Beratung → Aufmaß → Planung → Fertigung → Montage; Risiko-Abbau.
4. **„Warum dieser Betrieb statt Küchenstudio/Möbelhaus/Online?"** → USP + Vergleich (Entscheidungshilfe).
5. **„Aus welchem Material, in welcher Qualität, wie langlebig?"** → Material-/Qualitätstiefe (PU-Kantenverleimung als echtes USP).
6. **„Können die das wirklich? Haben die das schon gebaut?"** → Beweis: Region OWL, echte Projekte mit Ort, Familienbetrieb seit 1996.
7. **„Wie nehme ich jetzt unverbindlich Kontakt auf?"** → klarer, mehrfacher CTA (Möbelplaner / Anfrage / Telefon).

→ Die Pflicht-Bausteine in §2 sind **1:1 aus diesen sieben Micro-Intents abgeleitet** — keine generische Modul-Liste.

## 2 · Pflicht-Bausteine (INTENT-ABGELEITET, nicht generisch)

| # | Baustein | leitet ab aus Micro-Intent | AEO/Snippet-tauglich |
|---|---|---|---|
| 1 | **Intro/Hero mit Kategorie-Definition + Nutzenversprechen** (Primär-Keyword in H1 + ersten 100 Wörtern; Direktantwort „Was ist X nach Maß?") | 1 | ✅ Direktantwort |
| 2 | **USP-Block** (3–5 konkrete Stärken, jede mit Beleg: Meisterbetrieb seit 1996, Eigenfertigung, PU-Kantenverleimung (fugenlos, feuchtigkeitsbeständig), Familienbetrieb) | 4, 5 | teilweise |
| 3 | **Prozess-Block — 5 Schritte: Beratung → Aufmaß → Planung (3D) → Fertigung → Montage** (nummeriert, je Schritt 2–4 Sätze) | 3 | ✅ Listen-/HowTo-tauglich |
| 4 | **Vergleichstabelle** „Tischler/Maßanfertigung vs. Küchenstudio/Möbelhaus vs. Online/Serie" (Kriterien: Passgenauigkeit, Material, Beratung, Preis, Langlebigkeit) | 4 | ✅ Tabelle |
| 5 | **Preis-/Kostenmodul — PFLICHT** (Kostenrahmen ehrlich gestaffelt, was den Preis treibt, „warum keine Pauschale"; verweist auf Kosten-Ratgeber der Cluster-Kinder) | 2 | ✅ Tabelle/Direktantwort |
| 6 | **Material-/Qualitätsmodul** (Massivholz + branchenübliche Materialien, PU-Kantenverleimung, Langlebigkeit — fachlich, belegt) | 5 | teilweise |
| 7 | **Trust-/Referenz-Anriss** (Region OWL/Espelkamp, ein konkretes Projektdetail mit Ort, Familie Fast) — **kurz**, Tiefe gehört auf die Referenz-Seite (§11) | 6 | nein |
| 8 | **FAQ-Block: 10–15 echte Fragen** (Kosten, Lieferzeit, Aufmaß, Materialwahl, Montagegebiet, Ablauf, Garantie/Gewährleistung — **keine** erfundene Garantiezahl) | 1–7 | ✅ FAQPage + PAA |
| 9 | **Starker CTA-Block** (mind. 2 Conversion-Wege: Möbelplaner + Kontakt; Telefon sichtbar) | 7 | nein |

**Pflicht-FAQ-Anzahl: 10–15** (E-E-A-T-Checkliste verlangt ≥5; dieser Typ liegt deutlich höher, weil FAQ hier Haupt-Tiefenträger **und** Conversion-Vorbereiter ist). **Mindestens eine Tabelle** ist Pflicht (Vergleich); das Kostenmodul liefert idealerweise die zweite. Snippet-Strategie: Baustein 1, 3, 4, 5, 8 sind die zitierbaren Kerne (s. §9).

## 3 · Wortzahl-Korridor (SERP-verankert, mit Begründung)

**Korridor: 2.400–3.200 Wörter.**

Herleitung über die Regel *Korridor = max(SERP-Median bei gleichem Intent, Seitentyp-Untergrenze) … SERP-Median × Tiefe-Bonus*:

- **Gemessener SERP-Median** für „küche/küchen nach maß" (Leistung/commercial, Google.de, 2026-06-06): **~2.000 Wörter**, Spitze 2.950.
- DEPTH.md nennt für „Cluster-Pillar (commercial)" den Richtwert **1.800–2.800**.
- Untergrenze des Korridors = `max(2.000, 1.800) = ~2.000`; wir setzen sie bewusst auf **2.400**, weil **alle** Top-Treffer Preis-, Prozess- und FAQ-Block tragen und die Sieger zusätzlich Vergleichstabelle + Kostentabelle (3 Segmente) + Material-Ratgeber + Referenzprojekte mit Ort führen — diese Pflicht-Bausteine (§2) füllen real nicht unter 2.400.
- Obergrenze = SERP-Spitze (2.950) × moderater Tiefe-Bonus ≈ **3.200**. Darüber droht Verwässerung (Anti-Fülltext, §10).

**⚠️ Diskrepanz-Hinweis (explizit benennen):** DEPTH.md führt für **Hub** nur 800–1.200 Wörter. Das gilt **nur für dünne Orientierungs-Hubs**. Ein **kommerzieller Pillar-Hub mit eigenem Ratgeber-Langtext** — gemessen an „möbel nach maß" (Median 2.900, Spitze 4.500) — braucht real **3.200–4.000 Wörter**. Wenn ein Silo-Kopf wie `/moebel-nach-mass/` faktisch als kommerzieller Pillar mit Langtext gebaut wird (nicht als reine Karten-Verteilseite), liegt er **näher an diesem Leistung-Korridor bzw. darüber** — nicht beim Hub-Richtwert. Diese Entscheidung trifft der Per-Seite-Brief anhand der SERP, nicht das Hub-Playbook pauschal. **Nie unter den SERP-Median bei gleichem Intent.**

Der konkrete Korridor jeder Einzelseite wird vom Brief (Phase 1, SERP-Analyse) gesetzt — dieser Korridor ist die **Default-Verankerung**, falls die SERP keinen höheren Median zeigt.

## 4 · Schema-Markup (konkrete JSON-LD-Typen)

- **`Service`** — `serviceType` = Leistung (z. B. „Küche nach Maß"), `provider` = Organization „Fast Systemmöbel" (NAP aus FACTS.md: Alte Waldstraße 32, 32339 Espelkamp, +49 5771 9138312), `areaServed` = OWL/bundesweit (nur belegt), `hasOfferCatalog` mit den Cluster-Kindern als Items.
- **`FAQPage`** — die 10–15 FAQ aus Baustein 8, 1:1 zum sichtbaren Text (kein verstecktes/abweichendes Schema → QC-Gate 8/12).
- **`BreadcrumbList`** — Hub → diese Leistung (Click-Depth-Beleg, §8).
- **Optional, nur wenn belegt:** `Offer`/`AggregateOffer` im Kostenmodul **nur mit einer ehrlichen Preisspanne**, nie mit erfundenem Festpreis. Im Zweifel weglassen — Faktentreue-Gate (6) schlägt sonst an.
- **Nicht hier:** `Product` (gehört zum Produkt-Archetyp), `HowTo` als Primär-Schema (gehört zum Ratgeber — der Prozess-Block bleibt sichtbarer Listen-Content, kein HowTo-Schema, sonst Intent-Konflikt). Organization-Markup kommt zentral aus dem Layout, nicht doppelt pro Seite.

## 5 · E-E-A-T-Fokus (welche der 4 Säulen trägt am stärksten)

**Tragende Säulen: Expertise + Trust** (beide gleich stark; Experience flankiert).

- **Expertise (Kern):** Meisterbetrieb + vollständiger Prozess (Beratung → Aufmaß → Planung 3D → Fertigung → Montage). Material-/Technik-Tiefe: **PU-Kantenverleimung** (fugenlos, feuchtigkeitsbeständig), Massivholz + branchenübliche Materialien, Eigenfertigung „alle Teile in Eigenregie". Vollständige Beantwortung der Top-Nutzerfragen (FAQ).
- **Trust (gleich stark, conversion-entscheidend):** **NAP konsistent** (Alte Waldstraße 32, 32339 Espelkamp · 05771 9138312 · www.fast-systemmoebel.de), klare Conversion-Wege ohne Druck, vollständiges Schema, **keine erfundene Garantie** (es gibt KEINE freiwillige Garantie — Qualität/Langlebigkeit ohne Garantiezahl darstellen, AGB nennen nur gesetzliche Gewährleistung).
- **Experience (flankierend):** mind. ein konkretes Praxis-Detail mit Region (OWL/Espelkamp), Erste-Hand-Ton („In unserer Werkstatt in Espelkamp …"), Realbilder mit beschreibenden `alt`-Texten.
- **Authoritativeness (Anriss, nicht Schwerpunkt):** Familie Fast (Johann Fast Gründer; Andreas & Peter Fast 2. Generation seit 2011), seit 1996 (Gründung in Rahden-Tonnenheide, **nicht** Espelkamp — Fertigung heute Espelkamp). Tiefe Trust-Story bleibt der Referenz-Seite vorbehalten (§11).

**Verbotene Claims auf jeden Fall meiden:** „Meisterbetrieb seit 2013", „5 Jahre Garantie", „200 km Radius", „25+ Jahre", „12+ Mitarbeiter", FSC/PEFC namentlich, „eigenes Montageteam" als feste Zusage, exotische Holzarten als Alleinstellung.

## 6 · CTA-Stärke & Conversion-Wege (stark/weich)

**CTA-Stärke: STARK** — das ist der konversionsstärkste SEO-Typ. Ziel ist die **Anfrage**, nicht der Direktverkauf.

- **Primärer Weg: Möbelplaner** (`https://moebelplaner.fast-systemmoebel.de/` bzw. interne `/moebelplaner/`-Landingpage) — niedrigschwelliger Einstieg „selbst loslegen".
- **Sekundärer Weg: Kontakt/Anfrage** (`/kontakt/`) — für „lieber direkt sprechen".
- **Tertiär: Telefon sichtbar** (05771 9138312) — Vertrauensanker, klickbar auf Mobile.
- **Platzierung:** mindestens **3 CTA-Anker** über die Seite verteilt (nach Intro/USP, nach Prozess oder Kosten, im FAQ/Abschluss). Jede starke Leistungsseite verlinkt **Möbelplaner UND Kontakt** (internal-linking-Regel).
- **Ton des CTA:** einladend, kein Druck, kein Clickbait/Dringlichkeit („Jetzt unverbindlich anfragen", nicht „Nur noch heute!"). Vertrauen schlägt Dringlichkeit (BRAND_VOICE).

## 7 · Ton-Nuance (Abweichung vom BRAND_VOICE-Grundton)

Grundton bleibt: Meisterbetrieb mit ruhigem Handwerksstolz, „Sie", Beweis statt Behauptung. **Für diesen Typ leicht verschoben:**

- **Etwas verbindlicher/einladender** als der reine Erklär-Ton der Ratgeber — die Seite **darf zur Anfrage führen**, ohne zu drücken. „Wir beraten Sie", „Lassen Sie uns Ihren Raum gemeinsam planen."
- **Konkreter Nutzen aus Kundensicht** im Vordergrund („passt millimetergenau", „kein Stückwerk, eine Hand") — verkaufen heißt hier: greifbaren Vorteil zeigen, nicht Adjektive häufen.
- **Souverän bei Preis & Vergleich:** offen über Kosten sprechen, den Wettbewerb fair einordnen (kein Bashing von Küchenstudio/Möbelhaus) — Souveränität schafft mehr Vertrauen als Selbstlob.
- **Weiterhin tabu:** Superlativ-Floskeln ohne Beleg, generische Stockphrasen („maßgeschneiderte Lösungen für höchste Ansprüche"), erfundene Zahlen.

## 8 · Interne-Link-Rolle im Silo (eingehend/ausgehend, Anker-Logik)

**Rolle: Cluster-Pillar — Verteilzentrum des Clusters (Ebene 1, unter dem Hub).**

- **Eingehend (rein):** vom **Pillar-Hub** (`/moebel-nach-mass/` bzw. `/gewerbe/`), von der **Homepage** (SOLL), von **Geschwister-Produkt-/Ratgeber-Seiten** desselben Clusters (Kind → Pillar als Up-Link).
- **Ausgehend (raus):** **nach unten** zu allen **Produkt-Kindern** (Varianten) und **Ratgeber-Kindern** (Kosten-, planen-, vs.-Artikel) des eigenen Clusters; **nach oben** zum direkten Hub (Breadcrumb + 1 kontextueller In-Content-Link); **zu den Conversion-Zielen** Möbelplaner + Kontakt (Pflicht); SOLL zu `/referenzen/` und Ablauf-/Liefergebiet-Seiten, sobald gebaut.
- **Silo-Integrität:** **niemals** in den anderen Silo querverlinken (Privat-Cluster ↔ Gewerbe-Cluster) — Ausnahme nur Hub↔Hub. Eine Leistungsseite verlinkt nicht zu Clustern eines fremden Silos.
- **Link-Budget:** **8–10 Body-Links** (Cluster-Pillar-Limit), davon ≥3 kontextuell.
- **Anker-Logik:** Anker variieren — Exact-Match („Küche nach Maß") max. 2–3× pro URL, dazu partial („maßgefertigte Küche"), brand+keyword, beschreibend; ≤10 % generisch. Zu Kindern beschreibende/partial Anker (z. B. „Was eine Maßküche kostet", „L-Küche nach Maß planen"), nicht stur Exact-Match.
- **Backlog beachten:** noch nicht gebaute Kinder als pending im internal-linking-Backlog führen, beim Bau **beidseitig** nachverdrahten; **keine Dead-Links** (launch clean).

## 9 · AEO/Zitierbarkeit (Frage-zuerst, Direktantworten, Tabellen, Entitäten)

- **Frage-zuerst-Aufbau:** H2/H3 als echte Nutzerfragen formulieren („Was kostet eine Küche nach Maß?", „Wie läuft eine Maßanfertigung ab?") — direkt darunter eine **2–4-Sätze-Direktantwort**, dann Tiefe. So zitierbar für AI Overviews / Perplexity / ChatGPT.
- **Tabellen als Antwort-Container:** die Vergleichstabelle (Tischler vs. Studio vs. Möbelhaus) und der Kostenrahmen sind die wahrscheinlichsten Zitat-Snippets — sauber, beschriftet, eigenständig verständlich.
- **Klare Entitäten:** Marke „Fast Systemmöbel", Ort „Espelkamp/OWL", Leistung „[Kategorie] nach Maß", Verfahren „PU-Kantenverleimung", Personen „Familie Fast" konsistent benennen → stärkt Entity-Erkennung.
- **FAQ als AEO-Doppelnutzen:** die 10–15 FAQ bedienen PAA **und** FAQPage-Schema **und** liefern KI-zitierbare Q&A-Paare.
- **llms.txt-tauglich:** kurze, faktendichte Direktantworten + Tabellen erleichtern die Aufnahme in `llms.txt`/`llms-full.txt`.
- Geprüft durch **QC-Gate 10 (AEO/Zitierbarkeit)**.

## 10 · QC-Schwerpunkte für diesen Typ (welche Gates besonders hart)

Alle 13 Gates gelten; für „Leistung" sind diese **besonders hart**:

- **Gate 5 (Umfang/Tiefe):** Korridor 2.400–3.200 **und** alle Pflicht-Depth-Module vorhanden (Prozess, Vergleichstabelle, Kostenmodul, 10–15 FAQ). Fehlt das **Kostenmodul** → Gate rot (intent-pflicht).
- **Gate 6 (Faktentreue):** härtester Stopp. Ein einziger ❌-Claim (Garantie, „seit 2013", 200 km, exotische Hölzer, „eigenes Montageteam") → sofortiger Hard Stop, nie live.
- **Gate 7 (interne Links/CTA):** starker CTA + Möbelplaner UND Kontakt + ≥3 kontextuelle Links + Up-Link zum Hub; kein Cross-Silo.
- **Gate 8/12 (Schema/Technical):** Service + FAQPage + Breadcrumb vorhanden; FAQ-Schema deckt sich exakt mit sichtbarem Text; Title/Desc-Länge, H-Hierarchie, alt-Texte.
- **Gate 10 (AEO):** Frage-zuerst + Direktantworten + ≥1 Tabelle.
- **Gate 11 (Korpus-Dedup):** Cluster-Pillars teilen viel Vokabular („nach Maß", „Meisterbetrieb", Prozess) → hohe Überlappungsgefahr mit Schwester-Clustern. Differenzierung über **kategoriespezifische** Inhalte (eigene Maße, Materialien, Anwendungsfälle, Kostenbeispiele, FAQ) — Cluster-Differenzierungs-Map (Ebene 2b) zwingend befolgt.
- **Gate 13 (Chefredakteur):** Dient die Seite dem Nutzer **und** konvertiert sie? Holistisch.

## 11 · NEGATIV-ABGRENZUNG — was dieser Typ bewusst NICHT tut

- **vs. Hub:** Eine Leistungsseite ist **kein** reiner Karten-Verteiler. Sie hat eigenen kommerziellen Langtext, Kostenmodul, FAQ, starken CTA. Der Hub orientiert breit und verteilt; er **konkurriert nicht in der Tiefe** mit seinen Kindern. (Sonderfall kommerzieller Pillar-Hub mit Langtext: s. §3 — der nähert sich diesem Typ an, bleibt aber breiter/silo-übergreifend.)
- **vs. Produkt:** Die Leistungsseite behandelt die **ganze Kategorie** („Küchen nach Maß"), nicht **eine Variante** („L-Küche nach Maß"). Sie nennt **keinen** Festpreis und kein `Product`-Schema, sondern Service-Schema + Kostenrahmen. Detail-Specs/Maße einer einzelnen Bauform gehören aufs Produkt-Kind.
- **vs. Ratgeber (wichtigste Abgrenzung neben Referenz):** Die Leistungsseite **erklärt nicht erschöpfend „wie man plant"** und **verkauft** offen (starker CTA, commercial). Der Ratgeber ist informational, hat **schwachen** CTA, HowTo/FAQ-Schema und maximale Erklär-Tiefe. Die Leistungsseite **verlinkt** zu den Ratgeber-Kindern (Kosten, planen, vs.), statt deren Tiefe selbst zu duplizieren — sonst Kannibalisierung.
- **vs. Referenz/Trust (besonders scharf trennen):** Die Leistungsseite **beweist nicht ausführlich mit Projektgalerie/Team/Story** — sie nutzt Trust nur als **kurzen Anriss** (ein Projektdetail mit Ort, Familie Fast) zur **Conversion-Vorbereitung**. Die Referenz-Seite ist **weicher** CTA, Experience-/Authority-Fokus, Organization/AboutPage-Schema, ausführliche echte Projekte und Team/Zahlen. **Leistung = „wir bauen Ihnen X, so läuft es, fragen Sie an"; Referenz = „seht, was wir schon gebaut haben und wer wir sind".** Trust-Tiefe wandert auf die Referenz-Seite, die Leistungsseite **verlinkt** dorthin.
- **vs. Conversion:** Die Leistungsseite ist **kein** Formular-First-Minimaltext. Sie trägt vollen SEO-Langtext und führt **zum** Conversion-Ziel (Möbelplaner/Kontakt), ersetzt es aber nicht.
