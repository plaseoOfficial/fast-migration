# Seitentyp-Playbook: Hub

> Wofür dieser Typ da ist: **Orientierung geben und Autorität auf die Cluster-Kinder verteilen** — der Einstieg ins Silo, der den Nutzer schnell zur richtigen Unterseite leitet und gleichzeitig selbst genug eigenen Mehrwert trägt, um zu ranken. | Korridor: **800–1.200 W (dünner Orientierungs-Hub) bzw. 3.200–4.000 W (kommerzieller Pillar-Hub) — siehe §3** | Schema: **CollectionPage · LocalBusiness · BreadcrumbList** (Pillar-Hub zusätzlich **FAQPage**, bei Ratgeber-Hub **ItemList**)

## 0 · Wann dieser Typ greift (Auswahl über Spalte „Seitentyp" der URL-Master)

Greift, wenn die URL-Master in Spalte „Seitentyp" **„Pillar-Hub"** (oder Ratgeber-Hub) führt. Konkret die Top-Ebenen, die **mehrere Cluster bündeln**, nicht eine einzelne Leistung verkaufen:

- `/moebel-nach-mass/` — Pillar-Hub Privat (bündelt Küchen, Einbauschränke, Badmöbel, Wohnmöbel, HWR).
- `/gewerbe/` — Pillar-Hub Gewerbe (bündelt Ladenbau, Büro, Gastro, Serienmöbel, Praxis).
- `/ratgeber/` — Ratgeber-Hub (bündelt alle Ratgeber-Artikel; informational statt commercial).

**Zwei Spielarten, eine Logik:**
- **Dünner Orientierungs-Hub** — wenn das Hauptkeyword keinen eigenen kommerziellen SERP-Wettbewerb hat (z. B. `/gewerbe/` mit Brand-/Navigations-Keyword „Möbel nach Maß Gewerbe", `/ratgeber/` als Index). Hier zählt schnelle Weiterleitung; Korridor unten.
- **Kommerzieller Pillar-Hub** — wenn das Hauptkeyword ein hartes commercial SERP hat (z. B. `/moebel-nach-mass/` für „Möbel nach Maß", Median 2.900 W). Hier muss der Hub **selbst** ein vollwertiger Ratgeber-Langtext sein, der die Spitze schlägt. Korridor oben.

**Nicht** Hub: einzelne Cluster-Pillars wie `/kuechen-nach-mass/` (→ Leistung-Playbook), Produktseiten, Anwendungs-/Ratgeber-Artikel, Conversion- oder Referenz-Seiten.

## 1 · Such-Intent & Job-to-be-done — WAS WILL DER NUTZER SEHEN/TUN

**Dominanter Intent:** **C (commercial investigation) mit starker I-Beimischung** — der Nutzer steht früher im Trichter als auf einer Cluster-Pillar. Beim Pillar-Hub recherchiert er die *Kategorie* („Möbel nach Maß — was geht, was kostet das, für wen lohnt sich das, an wen wende ich mich?"), nicht ein konkretes Produkt. Ratgeber-Hub = überwiegend **I**.

**Micro-Intents (die Frage hinter der Suche):**
1. *„Was fällt überhaupt unter ‚Möbel nach Maß' — welche Räume/Möbelarten macht so ein Betrieb?"* → Cluster-Überblick mit klaren Karten und Beschreibung.
2. *„Welche Unterkategorie betrifft mich — wo muss ich weiterklicken?"* → schnelle, eindeutige Verteilung (Küche vs. Schrank vs. Bad …).
3. *„Lohnt sich Maßanfertigung gegenüber Möbelhaus/von der Stange?"* → Einordnung Maß vs. Serie (eigener Mehrwert, KEINE Tiefe-Konkurrenz zu `/ratgeber/massmoebel-vs-von-der-stange/`).
4. *„Was kostet so etwas grob — bin ich hier richtig vom Budget her?"* → grobe Kosten-Orientierung **auf Kategorie-Ebene** (Spannen, „ab"-Logik), Detail liegt in den Kosten-Ratgebern.
5. *„Wie läuft das ab — vom ersten Kontakt bis zur Montage?"* → kompakter Prozess-Überblick (Beratung → 3D-Planung → Fertigung → Montage).
6. *„Wer ist dieser Betrieb — kann ich dem vertrauen?"* → kurzer Trust-Anriss (Meisterbetrieb, Espelkamp/OWL, seit 1996, Familie Fast) + Verweis auf Über-uns/Referenzen.
7. *„Wo finde ich Beispiele / wie fange ich an?"* → weicher Weg zu Referenzen, Möbelplaner, Kontakt.

**Job-to-be-done:** *„Verschaffe mir in 30 Sekunden den Überblick über alles, was ihr nach Maß macht, sortiere mich in die richtige Schublade ein, und gib mir genug Vertrauen + groben Rahmen, dass ich mit gutem Gefühl tiefer klicke."*

## 2 · Pflicht-Bausteine (INTENT-ABGELEITET, nicht generisch)

Jeder Baustein folgt direkt aus einem Micro-Intent oben. **Pflicht für jeden Hub:**

- **Orientierungs-Intro (H1 + Hero-Absatz)** — beantwortet Micro-Intent 1 in den ersten 2–3 Sätzen: was umfasst diese Kategorie, für wen, von wem (Fast, Espelkamp/OWL). *AEO-tauglich: Direktantwort „Was sind Möbel nach Maß?" zuerst.*
- **Cluster-Karten-Grid (das Herzstück)** — eine Karte je Kind-Cluster mit **eigenständiger 1–2-Satz-Beschreibung** (kein Dummy), klarem Anker-Link, Bild + beschreibendem `alt`. Beantwortet Micro-Intent 2 (Verteilung). *Snippet-tauglich als ItemList.*
- **Maß vs. Serie — Kurz-Einordnung** — beantwortet Micro-Intent 3 mit **3–5 Sätzen + 1 kompakter Vergleichszeile/Mini-Tabelle**, dann Link zum Tiefen-Ratgeber. *AEO-tauglich (Vergleichstabelle).*
- **Prozess-Überblick (4–5 Schritte)** — Beratung → 3D-Planung → Fertigung (Espelkamp) → Montage. Kompakt; die Tiefe liegt auf `/ablauf-massanfertigung/`. *Snippet-tauglich (HowTo-Liste, aber als Überblick, nicht als HowTo-Schema).*
- **Trust-Anriss** — 3–4 Belege (Meisterbetrieb, seit 1996, Familienbetrieb Fast, PU-Kantenverleimung als Qualitätsbeweis) + Link zu Über-uns/Referenzen.
- **Conversion-Block (weich)** — Möbelplaner + Kontakt als Einstiegspfade, ohne Druck.
- **FAQ** — Pflicht beim **Pillar-Hub**, **mind. 5** (Ziel 6–8) auf **Kategorie-Ebene** („Was kostet Möbel nach Maß ungefähr?", „Wie lange dauert die Fertigung?", „Liefern Sie auch außerhalb OWL?", „Maß oder von der Stange?"). Beim dünnen Orientierungs-Hub optional (3–5). *AEO-Kern: FAQPage-Schema.*

**Zusätzlich Pflicht beim kommerziellen Pillar-Hub (z. B. `/moebel-nach-mass/`):**
- **Eigener Ratgeber-Langtext** — 2–4 substanzielle Erklär-Blöcke, die der Kategorie eigenen Mehrwert geben, **ohne** den Kindern die Tiefe wegzunehmen (z. B. „Wann lohnt sich Maßanfertigung wirklich?", „Materialien & Verarbeitung im Überblick", „Wie planen wir Ihr Projekt?", „Kostenrahmen pro Kategorie"). Hier kommt die Wortzahl her — nicht aus aufgeblähten Cluster-Beschreibungen.
- **Kosten-Orientierungstabelle** — grobe Spannen je Kind-Kategorie (z. B. Küche / Schrank / Bad ab €), klar als Richtwert markiert, Detail-Link je Zeile.

**Pflicht-FAQ-Anzahl:** Pillar-Hub ≥ 5 (FAQPage); Orientierungs-Hub ≥ 3 (FAQPage empfohlen, sobald ≥ 5 sinnvoll sind).

## 3 · Wortzahl-Korridor (SERP-verankert, mit Begründung)

Regel: **Korridor = max(SERP-Median bei gleichem Intent, Seitentyp-Untergrenze) … SERP-Median × Tiefe-Bonus — nie unter SERP-Median bei gleichem Intent.**

| Hub-Spielart | Beispiel | Korridor | Begründung |
|---|---|---|---|
| **Dünner Orientierungs-Hub** | `/gewerbe/`, `/ratgeber/` (Index) | **800–1.200 W** | DEPTH.md-Richtwert. Greift nur, wenn das Keyword **kein** hartes commercial SERP hat (Navigations-/Brand-Intent). Aufgabe ist Verteilung, nicht Ranken auf ein Money-Keyword. |
| **Kommerzieller Pillar-Hub** | `/moebel-nach-mass/` | **3.200–4.000 W** | SERP „moebel nach mass": Median **2.900**, Spitze **4.500**. Korridor = max(2.900, …) … 2.900 × Tiefe-Bonus. Die Top-Treffer sind selbst vollwertige Ratgeber-Pillar mit Kosten-/Prozess-/FAQ-Block. Unter dem Median = chancenlos. |

**⚠️ Diskrepanz explizit benennen (Pflicht-Hinweis):** DEPTH.md nennt für „Hub" pauschal **800–1.200 W** und die `architecture.md` setzt `/moebel-nach-mass/` auf **1.400–2.000 W**. Beide Werte gelten **nur für den dünnen Orientierungs-Hub**. Ein **kommerzieller Pillar-Hub** mit eigenem Ratgeber-Langtext (wie `/moebel-nach-mass/` real ranken muss) braucht **3.200–4.000 W** — das ist die SERP-verankerte Realität, sie schlägt den generischen DEPTH-Richtwert und den (zu niedrigen) Architektur-Wert. Wenn die SERP-Analyse im Brief einen commercial Median > 2.000 misst, wird `/moebel-nach-mass/` **als Pillar-Hub behandelt**, nicht als Orientierungs-Hub. **Maßgeblich ist immer der frisch im Brief gemessene SERP-Median, nicht die Tabelle.**

**Anti-Fülltext:** Beim Pillar-Hub kommt die Länge aus den **eigenen Ratgeber-Blöcken + Tabellen + FAQ**, nie aus aufgeblähten Cluster-Karten. Lieber 3.200 starke Wörter als 4.000 wässrige (DEPTH Regel 3 = QC-Gate 5).

## 4 · Schema-Markup (konkrete JSON-LD-Typen)

- **CollectionPage** — Kerntyp des Hubs; signalisiert „diese Seite bündelt eine Sammlung von Unterseiten".
- **ItemList** (innerhalb/neben CollectionPage) — die Cluster-Karten als geordnete Liste mit `url` + `name` je Kind → maschinenlesbare Verteilungsstruktur, Snippet-Chance.
- **BreadcrumbList** — Position im Silo (`Home › Möbel nach Maß` bzw. `Home › Möbel nach Maß › Gewerbe`).
- **LocalBusiness** — NAP konsistent (Alte Waldstr. 32, 32339 Espelkamp · 05771 9138312 · `www.fast-systemmoebel.de`), `areaServed` OWL/bundesweit, Öffnungszeiten Mo–Fr 06:00–17:00.
- **FAQPage** — **Pflicht beim Pillar-Hub** (≥ 5 Q/A); beim Orientierungs-Hub sobald ≥ 5 FAQ vorhanden.
- **Ratgeber-Hub** zusätzlich: ItemList der Artikel; **kein** HowTo (das tragen die Artikel selbst).

**Nicht** hier: Product, Service als Haupttyp (gehören auf Produkt-/Leistungsseiten), HowTo (gehört auf Ratgeber).

## 5 · E-E-A-T-Fokus (welche der 4 Säulen trägt am stärksten)

**Tragende Säule: Authoritativeness (Autorität als Themen-Heimat) — flankiert von Trust.** Der Hub ist die „Inhaltsverzeichnis-Autorität" des Silos: Er beweist, dass Fast die **gesamte** Kategorie beherrscht (Breite), und verteilt diese Autorität auf die Kinder.

Konkrete Belege für Fast (nur ✅/🟢 aus FACTS.md):
- **Breite des Leistungsspektrums** — Küchen, Einbauschränke, Badmöbel, Wohnmöbel, HWR (Privat) bzw. Ladenbau, Büro, Gastro, Serie, Praxis (Gewerbe): belegt die Themen-Autorität.
- **Meisterbetrieb seit 1996** (Gründung Rahden-Tonnenheide, heute Fertigung Espelkamp — **nicht** „1996 in Espelkamp"!), **Familienbetrieb Fast** (Johann Fast; Andreas & Peter Fast als 2. Generation seit 2011) → Authoritativeness + Trust.
- **PU-Kantenverleimung** (Musterkante 24 h unter Wasser) als ein konkreter Qualitätsbeweis statt Adjektiv-Marketing (Experience).
- **NAP + Schema + klare Conversion-Wege ohne Druck** (Trust).

Bewusst **knapp** dosieren: Der Hub *zeigt* Autorität durch Vollständigkeit + 3–4 harte Belege; die ausführliche Experience-/Trust-Story trägt **Referenz/Über-uns**. **Keine** erfundenen Zahlen/Awards (sofort disqualifizierend, QC-Gate 6).

## 6 · CTA-Stärke & Conversion-Wege (stark/weich)

**Weich.** Der Hub konvertiert primär **intern** — der wichtigste „Klick" ist der Weg zur richtigen Cluster-/Produktseite, nicht das Kontaktformular. Harter Verkaufsdruck wäre intent-fremd (Nutzer ist in der Orientierungsphase).

- **Primärer Conversion-Weg = interne Verteilung:** Cluster-Karten als deutlichste Handlungsaufforderung.
- **Sekundär (weich):** **Möbelplaner** (`https://moebelplaner.fast-systemmoebel.de/` bzw. `/moebelplaner/`) als spielerischer Einstieg + **Kontakt** (`/kontakt/`) für „lieber direkt sprechen".
- **Telefon** (05771 9138312) sichtbar, aber nicht aufdringlich.
- **Kein** „Jetzt anfragen"-Druckmuster, keine Dringlichkeit/Clickbait (BRAND_VOICE DON'T). Ton: einladend, nicht drängend.
- Max. Body-Links: **10–12** (internal-linking.md) — der Hub darf am meisten ausgehende Links haben.

## 7 · Ton-Nuance (Abweichung vom BRAND_VOICE-Grundton)

Grundton bleibt (handwerklich-stolz, Sie, Beweis statt Behauptung). Hub-Abweichung:
- **Überblickend & einordnend statt verkaufend.** Der Hub *sortiert* den Nutzer ein („Suchen Sie eher … oder …?"), er argumentiert nicht zum Abschluss.
- **Breiter, weniger tief** als die Cluster-Pillar: Er nennt das *Was* und delegiert das *Wie/Detail* per Link. Sprachlich erkennbar an einordnenden Sätzen und klaren Weichenstellungen.
- **Ruhig-souverän** — der Ton einer Heimat-Seite, die alles im Griff hat, ohne jedes Detail auszubreiten. Beim Pillar-Hub darf der Ratgeber-Langtext sachlich-erklärend werden (näher am Ratgeber-Ton), ohne ins Lehrbuchhafte zu kippen.
- Weiterhin: **keine** Stockphrasen („maßgeschneiderte Lösungen für höchste Ansprüche"), jede Qualitätsaussage mit konkretem Detail.

## 8 · Interne-Link-Rolle im Silo (eingehend/ausgehend, Anker-Logik)

Der Hub ist der **Autoritäts-Verteiler (Ebene 1)** seines Silos — die Klammer zwischen Homepage (Ebene 0) und Cluster-Pillars (Ebene 2).

**Eingehend:**
- Von **Homepage** (Ebene 0 → 1, MUSS).
- Von **Footer** auf allen Seiten (Pillar-Hubs + Legal — der Hub gehört in den Footer, die Kinder nicht).
- **Up-Link von jeder Cluster-Pillar** des Silos (Breadcrumb + 1 kontextueller In-Body-Link). Beispiel: `/kuechen-nach-mass/` → `/moebel-nach-mass/`; jede Gewerbe-Cluster → `/gewerbe/`.
- **Hub ↔ Hub** erlaubt (Ebene 0–1): `/moebel-nach-mass/` ↔ `/gewerbe/` dürfen sich verlinken (einzige zulässige Silo-Brücke).

**Ausgehend (Pflicht — der Kernjob):**
- **Eine kontextuelle Verlinkung zu JEDER Kind-Cluster** des Silos (MUSS, beidseitig). `/moebel-nach-mass/` → Küchen / Einbauschränke / Badmöbel / Wohnmöbel / HWR; `/gewerbe/` → Ladenbau / Büro / Gastro / Serie / Praxis.
- **Weich** zu Conversion: `/moebelplaner/`, `/kontakt/`.
- **Soll** zu Trust/Prozess: `/referenzen/`, `/ablauf-massanfertigung/` (sobald gebaut).
- **Soll** zum passenden Tiefen-Ratgeber (z. B. Maß-vs-Serie-Block → `/ratgeber/massmoebel-vs-von-der-stange/`).

**Silo-Disziplin:** Hub verlinkt **nur seine eigenen Cluster** + Conversion + Hub↔Hub. **Keine** Links in fremde Silo-Cluster (kein Privat-Hub → Gewerbe-Cluster). Cross-Silo-„Discovery"-Karten entfernen (s. Backlog-Cleanup `/kuechen-nach-mass/`).

**Anker-Logik:** Cluster-Karten = **exakte/partielle Match-Anker** auf das Kind-Keyword („Küchen nach Maß", „maßgefertigte Einbauschränke"). Anker variieren (exakt / partiell / deskriptiv / brand+keyword), max. ~10 % generisch, exakt-match auf eine URL max. 2–3×.

## 9 · AEO/Zitierbarkeit (Frage-zuerst, Direktantworten, Tabellen, Entitäten)

Der Hub ist für KI-Suche **die definierende Antwort** auf „Was umfasst Kategorie X bei Anbieter Y / in OWL?" — er muss als zitierbare Übersicht gebaut sein:
- **Frage-zuerst-Intro:** „**Was sind Möbel nach Maß?**" → 2–3-Satz-Direktantwort sofort darunter (extrahierbar).
- **ItemList der Cluster** = maschinenlesbare „Diese Kategorie enthält: …"-Struktur → ideal für AI-Overview-Zusammenfassungen.
- **Vergleichs-/Kosten-Tabelle** (Maß vs. Serie; Kostenrahmen je Kategorie) → hohe Infodichte, direkt zitierbar.
- **FAQ mit echten Kategorie-Fragen** → FAQPage-Schema, jede Antwort eigenständig zitierfähig (40–60 Wörter, in sich verständlich).
- **Klare Entitäten:** Fast Systemmöbel · Espelkamp/OWL · Meisterbetrieb · Möbel nach Maß · die Kind-Kategorien als benannte Entitäten → stärkt das Entity-Verständnis des gesamten Silos.
- Speist `llms.txt`/`llms-full.txt` als Silo-Inhaltsverzeichnis.

## 10 · QC-Schwerpunkte für diesen Typ (welche Gates besonders hart)

- **Gate 11 (Korpus-Dedup) — am härtesten.** Hub-Risiko #1: Der Hub klaut seinen Kindern die Tiefe und überschneidet sich mit der Cluster-Pillar. Streng prüfen: Beschreibt der Hub die Cluster nur **anreißend** (Was) und überlässt das Wie/Detail/Maße/Preise den Kindern? Überlappung mit `/kuechen-nach-mass/` & Co. muss niedrig sein.
- **Gate 5 (Umfang/Tiefe).** Richtigen Korridor wählen (Orientierungs- vs. Pillar-Hub, §3). Beim Pillar-Hub: SERP-Median nicht unterschreiten **und** trotzdem kein Fülltext — der Mehrwert muss *eigen* sein (Maß-vs-Serie, Kostenrahmen, Prozess, FAQ), nicht aus Kind-Inhalten geliehen.
- **Gate 7 (interne Links/CTA).** Jede Kind-Cluster verlinkt? Beidseitig? Silo-Integrität gewahrt (keine Fremd-Silo-Cluster, Hub↔Hub ok)? Anker-Diversität?
- **Gate 8 (Schema).** CollectionPage + ItemList + BreadcrumbList vorhanden und korrekt; FAQPage beim Pillar-Hub.
- **Gate 6 (Faktentreue).** Breiten-Aussagen über das Leistungsspektrum müssen FACTS.md decken; keine verbotenen Claims (kein „1996 in Espelkamp", kein „5 Jahre Garantie", kein „12+ Mitarbeiter").
- **Gate 10 (AEO).** Frage-zuerst-Intro + ItemList + ≥ 1 Tabelle + FAQ vorhanden.

## 11 · NEGATIV-ABGRENZUNG — was dieser Typ bewusst NICHT tut

- **NICHT verkaufen wie eine Leistung-Seite.** Kein starker CTA, kein Conversion-Sog, **keine** ausgebaute USP-/Prozess-/Vergleichs-Argumentation zum Abschluss. Das ist Aufgabe der **Cluster-Pillar (Leistung)** wie `/kuechen-nach-mass/` (Service+FAQPage, starker CTA). Der Hub *verteilt*, die Leistung *konvertiert*.
- **NICHT in die Tiefe einer Cluster-Pillar gehen.** Keine vollständige Material-, Maß-, Detail- oder Vergleichs-Tiefe pro Möbelart — das würde die Kinder kannibalisieren (Gate 11). Der Hub bleibt eine Ebene über dem Detail. *(Ausnahme: der kommerzielle Pillar-Hub liefert eigenen Ratgeber-Langtext — aber kategorie-übergreifend, nicht pro Kind-Möbelart.)*
- **NICHT die Produkt-Seite ersetzen.** Keine Varianten/Maße/Specs/Konfigurator einzelner Produkte (das ist Produkt-Playbook, Product-Schema).
- **NICHT die Referenz/Über-uns-Story tragen.** Trust nur als 3–4-Satz-Anriss + Link; die echte Projekt-/Team-/Experience-Story gehört auf Referenz/Über-uns (AboutPage/Organization).
- **NICHT die Ratgeber-Tiefe duplizieren.** Maß-vs-Serie, Kosten, Holzarten werden nur **angerissen + verlinkt**, nie ausgelagert in voller Ratgeber-Tiefe (das tragen `/ratgeber/*` mit HowTo/FAQ). Der Pillar-Hub-Langtext bleibt einordnend/kategorisch, nicht Schritt-für-Schritt-Anleitung.
- **NICHT die Conversion-Seite sein.** Kein Formular-zuerst, kein Minimal-Text — das ist Conversion-Playbook (`/kontakt/`, `/moebelplaner/`, LocalBusiness/ContactPoint).
