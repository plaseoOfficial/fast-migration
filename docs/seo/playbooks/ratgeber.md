# Seitentyp-Playbook: Ratgeber

> Informationaler Tiefen-Content, der eine echte Nutzerfrage erschöpfend beantwortet — und so rankt **und** in KI-Antworten (ChatGPT/Perplexity/AI Overviews) zitiert wird. Verkauft nicht, sondern hilft. | Korridor: **2.000–3.500 W** (intent-abhängig; Kosten- & Planungs-Guides eher oben) | Schema: **HowTo** (Schritt-Anleitungen) **+ FAQPage** + **Article/BlogPosting** + **BreadcrumbList**

---

## 0 · Wann dieser Typ greift (Auswahl über Spalte „Seitentyp" der URL-Master)
Die Engine wählt dieses Playbook, wenn die URL-Master für die Seite **Intent = I (Informational)** trägt und die Seite **keine kaufbare Leistung/kein Produkt** ist, sondern eine **Frage/Aufgabe** beantwortet. Erkennungsmerkmale in der Keyword-Map:

- **Primär-Keyword ist eine Frage oder Aufgabe**, nicht ein Angebot: „*Küche planen*", „*Küche nach Maß Kosten*", „*Einbauschrank Kosten*", „*Hauswirtschaftsraum planen*", „*Konferenzraum einrichten*", „*Ladeneinrichtung Planung*", „*Gastronomieeinrichtung planen*", „*Maßmöbel Wohnzimmer (Ratgeber)*".
- **Slug-Signale:** `…/kueche-planen/`, `…/kueche-nach-mass-kosten/`, `…/einbauschrank-kosten/`, `…/hauswirtschaftsraum/planen/`, `…/bueroplanung/`, `…/gastronomieeinrichtung-planen/`, `…/massmoebel-ratgeber/`, `…/tischlerkueche-vs-kuechenstudio/` (Vergleichs-Ratgeber, auch wenn Intent gemischt C/I).
- **Faustregel:** Sucht der Nutzer **Wissen vor der Entscheidung** („wie viel?", „wie?", „was brauche ich?", „A oder B?") → Ratgeber. Sucht er **das Angebot selbst** („… nach Maß", „… vom Tischler", „… kaufen") → das ist **Leistung/Cluster-Pillar** oder **Produkt**, NICHT Ratgeber.

**Sonderfall Kosten-/Vergleichs-Seiten:** Diese mischen häufig I+C. Sie laufen über das **Ratgeber-Playbook** (Tiefe, Tabellen, Direktantworten), heben aber den CTA um eine Stufe an (siehe §6). Reine Vergleichsseiten mit C-Übergewicht (`tischlerkueche-vs-kuechenstudio`) sind Grenzfälle — Tabelle + Direktantwort kommen aus diesem Playbook, der Verkaufs-Schluss aus dem Leistungs-Playbook.

---

## 1 · Such-Intent & Job-to-be-done — WAS WILL DER NUTZER SEHEN/TUN
**Dominanter Intent: I (Informational), Recherche-Phase.** Der Nutzer steht **vor** der Anfrage, nicht davor zu kaufen. Sein Job-to-be-done: „Ich will diese Sache **verstehen / einschätzen / richtig machen**, bevor ich Geld ausgebe oder jemanden anfrage." Er kommt mit einer offenen Frage und will sie in **einer** Quelle vollständig beantwortet bekommen — sonst klickt er zurück (Pogo-Sticking).

Konkrete Micro-Intents (immer aus dem Primär-Keyword ableiten, nicht generisch):

1. **„Was kostet das wirklich?"** — belastbarer Preisrahmen mit Bandbreiten + den Faktoren, die den Preis treiben (Größe, Material, Geräte, Korpus vs. Front). *(Kosten-Ratgeber)*
2. **„Wie gehe ich Schritt für Schritt vor?"** — eine durchnummerierte, nachvollziehbare Anleitung mit Reihenfolge, Maßen, Zeitpunkten. *(Planungs-Ratgeber → HowTo)*
3. **„Welche Fehler muss ich vermeiden?"** — typische Planungsfehler + wie man sie umgeht (hoher Mehrwert, stark zitierbar).
4. **„Was brauche ich / welche Maße & Anschlüsse?"** — Checkliste mit Mindestmaßen, Abständen, technischen Voraussetzungen (Wasser, Strom, Lüftung).
5. **„A oder B — was ist besser für mich?"** — Entscheidungs-/Vergleichsgrundlage (Tischler vs. Studio vs. Möbelhaus; Maßmöbel vs. Serienware) inkl. Wann-lohnt-sich-was.
6. **„Wie lange dauert das / wann muss ich anfangen?"** — Zeitplan, Lieferzeiten, idealer Planungszeitpunkt (besonders Neubau/Umbau).
7. **„Lohnt sich Maßanfertigung für meinen Fall?"** — Nutzen-/Werthaltigkeit gegen Standardlösung, ehrlich abgewogen.

**Konsequenz:** Wer hierher kommt, will **erst lernen, dann (vielleicht) anfragen.** Jeder Verkaufsdruck zerstört das Vertrauen und damit die Conversion zwei Schritte später. Der Ratgeber **verdient** den Lead durch Hilfsbereitschaft, er erzwingt ihn nicht.

---

## 2 · Pflicht-Bausteine (INTENT-ABGELEITET, nicht generisch)
Jeder Baustein adressiert einen Micro-Intent aus §1. **AEO** = Direktantwort-/Snippet-tauglich, muss so formuliert sein, dass eine KI ihn 1:1 zitieren kann.

| # | Baustein | Adressiert (§1) | AEO? | Pflicht |
|---|---|---|---|---|
| 1 | **Frage-zuerst-H1 + 40–60-Wort-Direktantwort** ganz oben (TL;DR, beantwortet die Hauptfrage, bevor gescrollt wird) | 1–7 | **JA (Kern)** | MUSS |
| 2 | **HowTo-Schrittfolge** (durchnummeriert, je Schritt eigene Mini-Überschrift, Reihenfolge + Maß/Zeitpunkt) — Pflicht bei Planungs-Ratgebern | 2,4,6 | **JA** | MUSS (Planungs-Typ) |
| 3 | **Mindestens eine Tabelle** — Kostenrahmen (Segmente/Bandbreiten), Maß-/Checkliste, oder Vergleich (3 Spalten) | 1,4,5 | **JA** | MUSS (≥1, Kosten/Vergleich ≥2) |
| 4 | **Kostenblock mit Bandbreiten + Preistreibern** (keine Festpreise; „ab"-Werte + Was-beeinflusst-den-Preis-Liste) | 1 | **JA** | MUSS (Kosten-Typ); SOLL sonst |
| 5 | **„Typische Fehler / Worauf achten"-Block** | 3 | JA | MUSS |
| 6 | **Vergleichs-/Entscheidungsblock** (A vs. B vs. C, „wann lohnt sich was") | 5,7 | **JA** | MUSS (Vergleichs-Typ); SOLL sonst |
| 7 | **Checkliste / Maße & technische Voraussetzungen** | 4 | JA | SOLL |
| 8 | **Praxis-Einschub aus der Werkstatt** (1 echtes Detail Espelkamp/OWL, PU-Kantenverleimung, 3D-Planung — Experience-Beleg) | E-E-A-T | nein | MUSS |
| 9 | **FAQ-rich-Block — 10–15 echte W-Fragen** mit je 2–4-Satz-Direktantwort | 1–7 | **JA (Kern)** | MUSS (Pflicht: **≥10**, Ziel 12–15) |
| 10 | **Weiterführende interne Links** (kontextuell zur passenden Leistung/Produkt/Schwester-Ratgeber) | Conversion-Vorbereitung | nein | MUSS (≥3) |
| 11 | **Weicher CTA am Ende** (Einladung zu Planung/Gespräch, kein Druck) | nach dem Lernen | nein | MUSS (1, dezent) |

**Anti-Duplikat:** Jeder Ratgeber erbt aus `playbooks/clusters/<cluster>.md` seinen einzigartigen Winkel. Ein Kosten-Ratgeber liefert **Zahlen/Preistreiber**, der Planungs-Ratgeber **Schritte/Maße**, der Vergleichs-Ratgeber **Entscheidungslogik** — sie dürfen sich thematisch nicht überlappen. Stichwort-Beispiele dürfen sich nicht wiederholen (eigene Maße/Beispiele pro Seite).

---

## 3 · Wortzahl-Korridor (SERP-verankert, mit Begründung)
**Regel:** Korridor = max(SERP-Median bei gleichem Intent, Seitentyp-Untergrenze) … bis SERP-Median × Tiefe-Bonus. **Nie unter SERP-Median bei gleichem Intent.**

| Ratgeber-Untertyp | Gemessener/erwarteter SERP-Median | **Ziel-Korridor** | Begründung |
|---|---|---|---|
| **Kosten-Ratgeber** (z. B. „Küche nach Maß Kosten") | hoch — Top-Treffer haben volle Kosten-/Segment-/Material-Blöcke (vergleichbar zum Küchen-Cluster-Korridor 2.400–3.200) | **2.600–3.500** | Preisthemen sind die tiefsten Informational-SERPs; Sieger liefern 3 Kostensegmente + Preistreiber + FAQ. Oberes Band des Ratgeber-Korridors. |
| **Planungs-/HowTo-Ratgeber** (z. B. „Küche planen", „Hauswirtschaftsraum planen") | hoch (SV 4.000–8.000 bei „Küche planen", starke Konkurrenz) | **2.400–3.200** | Schritt-für-Schritt + Fehler + Checkliste + FAQ erzeugen die Tiefe; Untergrenze nie < 2.000. |
| **Vergleichs-Ratgeber** (z. B. „Tischlerküche vs. Küchenstudio") | mittel | **2.000–2.600** | Entscheidungsstoff ist fokussierter; Tabelle trägt viel Informationsdichte bei weniger Fließtext. |
| **Themen-/Orientierungs-Ratgeber** (z. B. „Maßmöbel Wohnzimmer", „Ladeneinrichtung Planung") | niedrig-mittel | **2.000–2.400** | Untergrenze des Seitentyps; Substanz vor Länge. |

> **Diskrepanz-Hinweis (bewusst dokumentiert):** `DEPTH.md` gibt für **Ratgeber 2.000–3.500** an — das passt. Die Keyword-Map nennt für einzelne Ratgeber-URLs niedrigere Werte (z. B. `kueche-nach-mass-kosten` 1.200–1.800, `kueche-planen` 1.800–2.400). Diese Werte stammen aus einer früheren, **vor-SERP-Schätzung** und sind **zu niedrig**: die echte SERP-Recherche 2026-06-06 zeigt, dass Kosten-/Planungs-SERPs auf dem Niveau der Cluster-Pillars (2.400–3.200) ranken. **Es gilt der hier verankerte Korridor, nicht die alte Keyword-Map-Spalte.** (Analog zur Hub-Diskrepanz: ein kommerzieller Pillar-Hub braucht real 3.200–4.000, nicht die 800–1.200 der dünnen Orientierungs-Hubs.) Die SERP-Analyse pro Seite (Phase 1) misst den echten Median und setzt den finalen Wert; der Brief darf **nie unter** den SERP-Median bei gleichem Intent gehen.

**Anti-Fülltext-Klausel:** Die Länge entsteht durch **Depth-Module** (§2), nicht durch aufgeblähte Absätze. Lieber 2.400 starke Wörter mit echten Zahlen/Maßen/Schritten als 3.000 wässrige. Wiederholung = QC-Fail (Gate 5).

---

## 4 · Schema-Markup (konkrete JSON-LD-Typen)
- **`HowTo`** — Pflicht bei Planungs-/Schritt-Ratgebern. Pro `step`: `name`, `text`; optional `image`, `tool`/`supply` wo sinnvoll. Schritte müssen 1:1 dem sichtbaren HowTo-Block (§2.2) entsprechen.
- **`FAQPage`** — Pflicht. Enthält **alle** sichtbaren FAQ-Einträge (§2.9, ≥10) als `Question`/`acceptedAnswer`. Keine FAQ im Schema, die nicht auch sichtbar ist.
- **`Article` / `BlogPosting`** — der Ratgeber selbst: `headline`, `description`, `author` (Organization „Fast Systemmöbel" bzw. benannte Person, wo belegt), `publisher` (Organization + Logo), `datePublished`/`dateModified` (aktuell halten — Aktualität ist E-E-A-T).
- **`BreadcrumbList`** — Pfad Hub → Cluster-Pillar → Ratgeber (Klicktiefe ≤ 3 sichtbar machen).
- **NICHT** auf Ratgebern: `Service`, `Product`, `Offer`, `AggregateRating` mit Preis — das ist Leistungs-/Produkt-Domäne. Ein Ratgeber bewirbt kein Angebot per Schema.
- **Kombination:** `HowTo` + `FAQPage` + `Article` + `BreadcrumbList` zusammen ausliefern (mehrere `@type`-Blöcke / `@graph`). Konsistent mit `SEO-PLAYBOOK.md` und QC-Gate 8.

---

## 5 · E-E-A-T-Fokus (welche der 4 Säulen trägt dieser Typ am stärksten)
**Tragende Säulen: EXPERTISE + EXPERIENCE** (in dieser Reihenfolge). Der Ratgeber rankt, weil Fast die Frage **besser und ehrlicher** beantwortet als generische Content-Farmen — aus echter Werkstatt-Praxis.

- **Expertise (Hauptlast):** Fachlich korrekte Tiefe, die ein Laie nicht hat — echte Maße, Mindestabstände, technische Voraussetzungen (Wasser/Strom/Lüftung), Material-/Verfahrenswissen. Meisterbetrieb-Bezug. **Konkrete Fast-Belege:** PU-Kantenverleimung (fugenlos, feuchtigkeitsbeständig — echtes USP, gerne als Beleg für „warum Material X für feuchte Räume"), 3D-Planung im Prozess, Eigenfertigung „alle Teile in Eigenregie", Geräte-Marken Bosch accent line / NEFF Collection (wo gerätebezogen).
- **Experience (zweite Last):** Erste-Hand-Formulierungen statt Lehrbuch — „In unserer Werkstatt in Espelkamp sehen wir oft …", „Bei einem Neubau-Projekt in OWL …". Mind. **ein** konkretes Praxis-Detail (§2.8). Das ist der Unterschied zwischen einem zitierfähigen Fachartikel und beliebigem Web-Text.
- **Trust (Stützrolle):** Ehrlichkeit als Trust-Signal — Bandbreiten statt Lockpreise, „lohnt sich nicht, wenn …" offen benennen. NAP/Schema sauber. Aktuelle Jahreszahlen (kein 2025-Rest). **Keine** erfundenen Zahlen/Awards/Zitate (Gate 6, sofort disqualifizierend).
- **Authoritativeness (geringste Last hier):** Owner/Meister-Bezug wo passend; verbotene Claims aus `FACTS.md` strikt meiden („Meisterbetrieb seit 2013", „5 Jahre Garantie", „200 km Radius", exotische Hölzer als Alleinstellung, „eigenes Montageteam" als feste Zusage).

→ Vollständige Abdeckung von `templates/eeat-checklist.md` ist Pflicht; auf Ratgebern liegt der Schwerpunkt-Haken auf **„beantwortet die Top-Nutzerfragen vollständig"** und **„≥1 konkretes Praxis-Detail"**.

---

## 6 · CTA-Stärke & Conversion-Wege (stark/weich)
**CTA-Stärke: WEICH / dezent.** Der Ratgeber konvertiert über **Vertrauen + den richtigen Weiterklick**, nicht über Verkaufsdruck. Genau **ein** Soft-CTA am Ende (Einladung, kein Imperativ-Stakkato).

- **Primärer Conversion-Weg = interner Weiterklick zur passenden Leistung/Produktseite.** Beispiel: Ein Kosten-/Planungs-Ratgeber im Küchen-Silo verlinkt kontextuell auf `/kuechen-nach-mass/` (die kaufbare Leistung). Der Ratgeber **wärmt vor**, die Leistungsseite **schließt ab**.
- **Sekundär:** dezenter Hinweis auf `/moebelplaner/` („Ihre Idee selbst visualisieren") und `/kontakt/` („Fragen? Wir beraten unverbindlich") — als Angebot, nicht als Aufforderung. **Telefon** (05771 9138312) nur passiv/im Kontakt-Hinweis, nicht als aggressiver Call-Now-Button.
- **CTA-Abstufung nach Untertyp:**
  - Themen-/Planungs-Ratgeber: **weich** (Lernen steht im Vordergrund).
  - **Kosten-/Vergleichs-Ratgeber: weich-plus** — der Nutzer ist näher an der Entscheidung; ein etwas präsenterer „Lassen Sie sich Ihr Projekt unverbindlich kalkulieren / planen"-CTA ist erlaubt, bleibt aber unter dem starken CTA der Leistungsseiten.
- **Kein** Formular-Einbau, **keine** Dringlichkeit/Rabatte, **kein** Pop-up. Conversion-Ziel ist der **vorbereitete, vertrauensvolle Klick** weiter ins Silo.

---

## 7 · Ton-Nuance (Abweichung vom BRAND_VOICE-Grundton für DIESEN Typ)
Grundton bleibt: Meisterbetrieb mit ruhigem Handwerksstolz, „Sie", bodenständig-präzise, Beweis statt Behauptung. **Ratgeber-spezifische Verschiebung:**

- **Lehrend & großzügig statt werbend.** Hier darf Fast „Wissen verschenken" — ungefragt erklären, auch wenn es kein direktes Verkaufsargument ist. Der hilfreichste Text gewinnt.
- **Neutraler, ratgebender Ton** — die Stimme tritt etwas zurück. Weniger „wir bauen …", mehr „so geht man vor / das sollten Sie beachten". Markenstolz wird dosiert; im Praxis-Einschub (§2.8) und am CTA darf die Fast-Stimme klar hervortreten.
- **Maximale Klarheit, scanbar.** Kurze Sätze, klare Zwischenüberschriften als Fragen, Aufzählungen, Tabellen. Ein gelegentlicher lakonischer Akzentsatz ist on-brand.
- **Ehrlichkeit als Tonmittel:** offen sagen, wann sich etwas **nicht** lohnt oder wann eine Standardlösung reicht. Diese Selbstkritik baut mehr Vertrauen auf als jedes Superlativ — passt exakt zu „verkauft nicht, sondern erklärt und beweist".
- **Verboten:** Verkaufsfloskeln, Dringlichkeit, „jetzt anfragen!"-Sprache, Superlative ohne Beleg, generische Stockphrasen.

---

## 8 · Interne-Link-Rolle im Silo (eingehend/ausgehend, Anker-Logik)
Der Ratgeber ist **Spoke** unter einem Cluster-Pillar — er fängt Recherche-Traffic auf und leitet ihn nach „oben/seitwärts" zu den kommerziellen Seiten weiter (Topical Authority + Conversion-Vorbereitung).

- **Eingehend (von oben):** Der Cluster-Pillar verlinkt **kontextuell** auf seinen Ratgeber (z. B. `/kuechen-nach-mass/` → `/kuechen-nach-mass/kueche-nach-mass-kosten/` als MUSS-Link; → `/kueche-planen/`, `/tischlerkueche-vs-kuechenstudio/` als SOLL). Breadcrumb stellt die Hierarchie her.
- **Ausgehend (Pflicht, ≥3 kontextuell):**
  1. **Up-Link zum Cluster-Pillar** (die kaufbare Leistung) — der wichtigste, weil Conversion-relevant. Anker: exakt/partiell auf das Leistungs-Keyword („Küche nach Maß", „maßgefertigte Küche").
  2. **Seitwärts zu Schwester-Ratgebern desselben Clusters** (Kosten ↔ Planen ↔ Vergleich) — themenkohärent, beschreibende Anker.
  3. **Conversion-Anker dezent** zu `/moebelplaner/` und/oder `/kontakt/`.
- **Silo-Disziplin:** Ein Küchen-Ratgeber verlinkt **nicht** in das Gewerbe-Silo (und umgekehrt). Cross-Silo nur Hub↔Hub. Keine Links zu Clustern eines anderen Silos.
- **Anker-Vielfalt:** exakt / partiell / beschreibend / Marke+Keyword mischen; max ~10 % generisch; Exact-Match auf eine URL max 2–3× pro Seite. Max. Body-Links auf Ratgeber: an Spoke/Produkt-Niveau orientieren (~5–7).
- **Backlog-Pflicht:** Beim Bau jeden Backlog-Eintrag aus `internal-linking.md` verdrahten, dessen Ziel jetzt existiert — **beidseitig** (z. B. `/faq/`-Link, Schwester-Ratgeber).

---

## 9 · AEO/Zitierbarkeit (Frage-zuerst, Direktantworten, Tabellen, Entitäten)
**Dies ist der Heim-Archetyp der AEO.** Ratgeber sind die Seiten, die in KI-Antworten und AI Overviews zitiert werden — entsprechend hart auf Zitierbarkeit optimieren (QC-Gate 10).

- **Frage-zuerst-Struktur:** H1 = die Nutzerfrage. Direkt darunter eine **eigenständige 40–60-Wort-Direktantwort** (TL;DR), die ohne Kontext zitierbar ist und die Hauptfrage abschließend beantwortet.
- **Self-contained Direktantworten:** Jeder H2/H3 beginnt mit einem Satz, der die Unterfrage **eigenständig** beantwortet (kein „wie oben erwähnt"). KI-Systeme extrahieren Absätze isoliert.
- **Tabellen für Vergleich/Zahlen:** Kostenrahmen, Maß-Checklisten, A-vs-B-Vergleiche als echte HTML-Tabellen — höchste Extraktions- und Snippet-Wahrscheinlichkeit.
- **FAQ als Zitat-Reservoir:** 10–15 W-Fragen mit knappen, vollständigen Antworten = direkter Treibstoff für „People Also Ask" und KI-Antworten.
- **Klare Entitäten konsistent benennen:** „Fast Systemmöbel", „Espelkamp/OWL", „PU-Kantenverleimung", „3D-Planung", „Maßanfertigung/Tischlerküche", Geräte-Marken — damit KI Fast als Quelle erkennt und verknüpft.
- **Faktenpräzision:** Konkrete Zahlen/Maße/Bandbreiten (belegt) statt Geschwurbel — KI bevorzugt präzise, verifizierbare Aussagen. Speist `llms.txt`/`llms-full.txt`.

---

## 10 · QC-Schwerpunkte für diesen Typ (welche Gates besonders hart)
Alle 13 Gates gelten. Für Ratgeber **besonders scharf**:

- **Gate 5 (Umfang/Tiefe):** Korridor §3 zwingend; Pflicht-Depth-Module vorhanden (HowTo bei Planung, ≥1 Tabelle, ≥10 FAQ, Vergleich/Kosten je nach Untertyp). Bei „zu kurz" sagt das Gate **welche** Section fehlt — nicht „schreib mehr".
- **Gate 10 (AEO/Zitierbarkeit):** **Härtester Gate für diesen Typ.** Direktantwort oben vorhanden? H2-Absätze self-contained? ≥1 Tabelle? FAQ ≥10? Entitäten konsistent? Ein Ratgeber ohne saubere AEO ist nicht launch-fähig.
- **Gate 6 (Faktentreue vs. FACTS):** Hart bei Kosten-/Zahlen-Ratgebern — **keine** erfundenen Preise als Festwerte, **keine** verbotenen Claims. Bandbreiten kennzeichnen, Quelle/Logik der Zahlen plausibel.
- **Gate 11 (Korpus-Dedup):** Hoch-Risiko, weil Kosten/Planen/Vergleich desselben Clusters thematisch nah sind. Semantische Überlappung gegen Schwester-Ratgeber **unter Schwelle** halten — eigener Winkel, eigene Beispiele/Maße/FAQ (Differenzierungs-Contract).
- **Gate 8 (Schema):** HowTo-Schritte == sichtbarer HowTo-Block; FAQPage == sichtbare FAQ; kein Product/Offer-Schema.
- **Gate 9/13 (Human-Score / Chefredakteur):** „Würde ein echter Sucher diese Frage hier vollständig beantwortet finden — ohne zurückzuklicken?" Wenn nein → nicht grün.

---

## 11 · NEGATIV-ABGRENZUNG — was dieser Typ bewusst NICHT tut
- **vs. Leistung (Cluster-Pillar):** Der Ratgeber **verkauft nicht**. Kein starker CTA, kein USP-Pitch als Hauptmotiv, kein Service-Schema. Er **erklärt die Frage**; die Leistungsseite **bietet die Lösung an**. „Küche nach Maß Kosten" (Ratgeber) ≠ „Küche nach Maß" (Leistung). Verkaufs-Conversion ist hier ein **Nebenprodukt** des Helfens, nicht das Ziel.
- **vs. Produkt:** Kein Varianten-/Maß-Konfigurator-Fokus, keine technischen Produkt-Specs als Selbstzweck, kein Product-Schema. Maße/Specs erscheinen nur, soweit sie die **Frage** beantworten (z. B. Mindestabstände in einer Planungs-Anleitung).
- **vs. Hub:** Kein bloßer Überblick + Cluster-Karten. Der Ratgeber geht **in die Tiefe einer Frage**, statt breit zu verteilen. Er konkurriert nicht um Orientierung, sondern um eine erschöpfende Antwort.
- **vs. Referenz/Über-uns:** Keine Marken-/Team-/Projekt-Story als Hauptinhalt, kein AboutPage/Organization-Schwerpunkt. Echte Projekte erscheinen nur als **kurzer Experience-Beleg** (§2.8), nicht als erzählerischer Kern. Experience stützt hier die Expertise, statt Marke zu beweisen.
- **vs. Conversion (Kontakt/Planer):** Das **Gegenteil** — der Ratgeber ist **maximal lang und SEO-tief**, die Conversion-Seite ist **bewusst kurz, formular-zuerst, ohne SEO-Fülltext**. Niemals ein Ratgeber-Langtext auf einer Conversion-Seite und niemals ein Formular-Stub als „Ratgeber".
- **Generell NICHT:** dünner SEO-Füll-Blog ohne echte Substanz; Synonym-Umschreibung einer Schwesterseite; Verkaufsdruck/Dringlichkeit; erfundene Zahlen/Awards; Lehrbuch-Ton ohne ein einziges Fast-Praxis-Detail.
