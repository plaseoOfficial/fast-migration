# Research-Kit: Waschmaschinenschrank nach Maß (/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/)

## 1 · Wortzahl-Korridor → **1.300–1.700 W · Ziel ~1.500 W** (SERP-Median 1.300) — Produkt-DECKEL, Orientierung, kein blockierendes Gate
Voller Slug: `/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/` · Archetyp: **Produkt** (Kind des HWR-Clusters) · Intent: **mixed, kommerziell verankert**.
- **Korridor-Politik (Ben, 2026-07-15) — normiert am 2026-10-13, hier als Produkt-DECKEL:** Das Standardband 1.600–2.100 (Ziel ~1.800) ist für diesen Spoke zu lang: Der einzige Format-Zwilling (schreinerhelden, Handwerker-Leistungsseite) liegt bei 1.300 W, passandu ebenso; ein Anheben auf 1.600+ hieße ~25–60 % über den gemessenen Seiten gleichen Intents und Richtung Pillar-Länge (`/hauswirtschaftsraum/` ~1.800–2.000 W) — Fülltext-Risiko. Deshalb dieselbe Lösung wie bei den Produkt-Präzedenzen mit Median ~1.300: `garderobe-nach-mass` (Median 1.305 → 1.305–1.705, Ziel ~1.450) und `kleiderschrank-nach-mass` (Median 1.290 → 1.290–1.690): **Boden = Median 1.300, Oberkante 1.700, Ziel ~1.500 W**. Der schrankwerk-Wert (~9.000, LLM-Schätzung inkl. Produktdaten) ist ein Ausreißer und zählt nicht.
- **Belastbarkeit:** 2 von 9 Treffern mit messbarem Fließtext gleichen Intents (schreinerhelden, passandu); expresszuschnitt (Rang 1–6) nicht abrufbar (403). Der Korridor ist daher Orientierung, kein Gate (DEPTH.md). keyword-map Z. 50 nennt 900–1.200 W — überholt durch den Präzedenz-Korridor, aber Signal gegen Aufblähen.
- **Writer-Hinweis (Zähl-Bias ~8 %):** Gegen das **Ziel ~1.500 W** planen, **nicht** gegen den Boden 1.300 — der interne Prop-Zähler misst je nach Mapping ~8 % niedriger. Jede weitere 100 W muss neue Maße/Technik/FAQ bringen (Anti-Fülltext); Tiefe kommt aus den Tabellen und dem Technik-Block (§3), nicht aus Absätzen.

### SERP-Tiefe (Recherchebeleg der Engine, keine Schreibvorgabe)
- **Die Messung ist schwach.** Nur 3 von 9 Treffern waren lesbar:
  - schreinerhelden: 1.300 W, Handwerker-Leistungsseite. Das ist unser nächster Format-Zwilling.
  - passandu: 1.300 W, Konfigurator mit Mini-Ratgeber.
  - schrankwerk: ~9.000 W. Der Wert ist eine LLM-Schätzung inklusive Produktdaten, also ein Ausreißer.
  - expresszuschnitt belegt Rang 1–6 mit 6 Varianten-URLs. Alle lieferten 403 und sind nicht gemessen.
- **Was die SERP trotzdem zeigt:**
  - Google belohnt Varianten-Breite. expresszuschnitt hat eigene URLs für Waschküche, Schmutzwäsche-Stauraum, Auszug/Schublade, Tür+Auszug, breit mit Arbeitsfläche und Trockner+Waschmaschine. Diese sechs Achsen deckt unsere Seite gebündelt auf **einer** URL ab, im Varianten-Block (§3-2).
  - Nur **ein** Handwerksbetrieb steht in den Top 9. Ein lokaler Meisterbetrieb mit Technik-Tiefe ist dort unterbesetzt.
  - Was schrankwerk lang macht, können wir nicht nachbauen: Vorlagen-Galerie mit Ab-Preisen, Stilgalerie. Uns fehlen Preise und HWR-Fotos.
- **Tiefe entsteht aus Substanz:**
  - 2 Pflicht-Tabellen (Maß + Kosten), dazu eine Varianten-Tabelle
  - Technik-Block (Luft, Wärme, Schwingung, Zugang)
  - Ausstattung
  - Mini-Prozess
  - ≥ 6 FAQ
  - Der Text endet, wenn die Kaufentscheidung beantwortet ist. Kein Padding.

## 2 · Intent & Job-to-be-done (was will der Nutzer sehen/tun)
**Intent: mixed, kommerziell verankert (C, mit T-Anteil).**
- Der Nutzer hat bereits Waschmaschine und oft Trockner. Er hat auch schon einen Ort: Nische, HWR, Waschküche, Bad.
- Er vergleicht Fertigschrank oder Konfigurator mit dem Tischler.

**JTBD:** „Ich will meine vorhandenen Geräte sauber verbauen, ohne Wärmestau, Feuchteschaden und Wartungsfrust. Ich will wissen, ob Maßanfertigung in meine Nische passt, was den Preis treibt und wie es bis zur Montage läuft. Dann frage ich an."

**Muss sehen (Micro-Intents):**
1. Turm oder nebeneinander: was passt in meine Nische?
2. Welche Maße und Tiefe plane ich, inklusive Schläuche, Stecker und Wasserhahn?
3. Läuft das sicher im Schrank? Lüftung, Trocknertyp, Wärme, Vibration, Zugang zu Flusensieb und Anschlüssen.
4. Wohin mit Waschmittel und Schmutzwäsche, wo ist Platz zum Falten?
5. Was kostet das, und wovon hängt es ab?
6. Warum Maß statt Fertigschrank?
7. Wie laufen Ablauf und Region?

**Muss tun können:**
- Primär: Anfrage über `/kontakt/`, mit Gerätemodell und Nischenmaß.
- Den Möbelplaner zur Vorbereitung nutzen.
- Anrufen: 05771 9138312.

## 3 · Nötige Antworten nach Leseraufgabe; Vergleichsseiten nur als interne Hinweise
Die Reihenfolge ist zugleich die Outline-Empfehlung. Die Vergleichsseiten-Hinweise in Klammern sind intern und gehören nie in die Copy.

1. **Intro mit Direktantwort (40–60 W, AEO).**
   - Satz 1: Ein Waschmaschinenschrank nach Maß ist der Verbau um Ihre **vorhandene** Waschmaschine (und Ihren Trockner), millimetergenau in Nische, HWR oder Waschküche.
   - Dazu: Meisterbetrieb Espelkamp, Eigenfertigung.
2. **„Welche Bauform passt zu Ihrer Nische?" als Varianten-Tabelle** (Bauform | passt, wenn … | darauf achten):
   - **Nebeneinander unter durchgehender Arbeitsplatte.** Passt bei breiter Nische und bringt Falt- und Ablagefläche. Nur mit Frontladern. Ob ein Gerät unterbaufähig ist (Deckplatte), steht im Datenblatt.
   - **Waschturm im Hochschrank.** Passt bei schmaler Nische. Nur mit kompatiblen Geräten und dem Zwischenbausatz des Geräteherstellers. Die Bedienhöhe des Trockners liegt oben.
   - **Einzelgerät mit Seitenschrank.** Platz für Waschmittelfach und Wäschekorb-Auszug daneben.
   - **Überbau- oder Hängeschrank über den Geräten.** Offen oder geschlossen. Als Fronten Dreh-, Falt-, Schiebe- oder Klapptür, nur generisch und ohne Beschlagnamen.
   - **Toplader.** Keine feste Platte direkt darüber, weil der Deckel nach oben öffnet. Lösung: Klappe oder offenes Fach.
   - (Hinweis: Das sind die 6 Varianten-Achsen von expresszuschnitt. passandu behandelt „Maschine oben/unten" und „offen vs. geschlossen".)
3. **„Welche Maße brauchen Sie?" als PFLICHT-Maß-Tabelle** (Gerät | übliche Gerätemaße, rund, Datenblatt verbindlich | was beim Aufmaß dazukommt):
   - **Frontlader:** B ~60 / H ~85 / T je nach Modell ~45–65 cm
   - **Trockner:** B ~60 / H ~85 / T ~60–65 cm
   - **Toplader:** B ~40–45 / H ~85–90 / T ~60 cm
   - **Waschturm:** Höhe rund 1,70 m und mehr, inklusive Zwischenbausatz
   - **Zugaben nur qualitativ:** Schläuche, Stecker und Wasserhahn hinten; Luft seitlich für das Schwingen; Lüftungsquerschnitt; Öffnungsraum der Gerätetür vorn; Zugang zum Flusensieb unten.
   - Pflicht-Kennzeichnung: „übliche Gerätemaße zur Orientierung, nicht unsere Schrankmaße. Verbindlich sind Ihr Gerätedatenblatt und unser Aufmaß."
   - Die Gerätemaße sind allgemeines Gerätewissen, kein Fast-Katalog. Das folgt der Linie aus dem Waschtischunterschrank-Kit §9b. Ist dem Writer eine Zahl zu unsicher, lässt er sie weg statt sie zu runden.
   - (Hinweis: schrankwerk hat „Maße ermitteln" und „Kompatibilität". Wir lösen das über Datenblatt plus Aufmaß.)
4. **„Darf der Trockner im Schrank laufen?" als Technik-Block (Spec-Liste, Herzstück der Seite):**
   - **Wärme und Trocknertyp.**
     - Ablufttrockner: Die feuchte Luft muss per Schlauch nach außen. Der Schrank braucht eine Durchführung.
     - Kondens- und Wärmepumpentrockner geben Wärme an den Raum ab, deshalb müssen die Be- und Entlüftungsöffnungen frei bleiben. Beleg: Verbraucherzentrale, §7b.
   - **Feuchte.** Nach dem Waschen sollte die Gerätetür offen stehen, bis die Maschine trocken ist. Die Schrankfront muss das zulassen, etwa durch eine Tür, die offen stehen kann, oder ein offenes Fach (Beleg §7b). Dazu die PU-Kante: fugenlos, feuchtigkeitsbeständig.
   - **Schwingung.** Planungsgrundsatz: Das Gerät steht frei und ist nicht starr mit dem Korpus verbunden. Ringsum bleibt Luft. Keine Bauteile oder Matten als Fast-Standard nennen.
   - **Zugang.** Flusensieb (vorn unten), Wasserhahn und Steckdose bleiben erreichbar. Das Gerät lässt sich zum Service herausziehen.
   - **Turm-Sicherung.** Sie übernimmt der Zwischen- bzw. Verbindungssatz des Geräteherstellers. Der Schrank ersetzt ihn nicht.
   - (Hinweis: Fast-eigene Technik ist eine Leerstelle, siehe §9. Formel: „planen wir von Anfang an mit ein".)
5. **„Wohin mit Waschmittel und Wäsche?" als Ausstattungs-Grid:**
   - Waschmittelfach neben oder über dem Gerät
   - Wäschekorb- bzw. Sortier-Auszug für Schmutzwäsche
   - Arbeitsplatte zum Falten über den Geräten
   - Überbauschrank, Auszüge und Schubladen
   - Grenze: Putzmittel, Besen und Bügelbrett gehören zum Besenschrank, Vorrat zum Vorratsschrank. Nur andeuten, nicht ausführen.
6. **„Was kostet ein Waschmaschinenschrank nach Maß?" als PFLICHT-Kosten-Tabelle ohne Zahlen** (Preistreiber | was ihn beeinflusst):
   - Bauform und Größe: Turm, nebeneinander, raumhoch
   - Material und Fronten
   - Innenausstattung: Auszüge, Wäschekorb, Arbeitsplatte
   - Einbausituation: Nische, Schräge, Bad, Aussparungen für Anschlüsse
   - Montageaufwand
   - Schluss: individuelles Angebot nach kostenlosem Aufmaß; Finanzierung privat möglich.
   - Keine Relationen wie „X günstiger als Y" (kundenwissen).
   - (Hinweis: Die SERP nennt 719–2.498 € bzw. „ab ca. 3.200 €". NICHT übernehmen.)
7. **Warum nach Maß, komprimiert in 3 Punkten:**
   - Ein Fertigschrank oder Bausatz gibt das Rastermaß vor, die Geräte müssen hineinpassen. Bei Fast wird der Schrank um Geräte und Nische gebaut, Wand zu Wand ohne Passleisten.
   - Eigenes Aufmaß inklusive Anschlüsse.
   - Eigenes Montageteam.
   - Keine große Vergleichstabelle, die steht bereits beim Pillar.
8. **Mini-Prozess in 4 Schritten:**
   1. Beratung (Telefon oder vor Ort)
   2. Kostenloses Aufmaß, inklusive Gerätemaße und Lage der Anschlüsse
   3. 3D-Planung
   4. Fertigung in Espelkamp und Montage durch das eigene Team
   - Termin nach Freigabe.
   - (Hinweis: schreinerhelden nennt „3–8 Wochen". NICHT übernehmen.)
9. **„Was Sie zur Anfrage bereithalten", als Conversion-Helfer:**
   - Gerätetyp und Modell bzw. Datenblatt (Frontlader oder Toplader, Trocknerart)
   - Nischenmaße B/H/T
   - Lage von Wasser, Abfluss und Steckdose
   - Foto der Nische
   - Wunsch: Turm oder nebeneinander
10. **FAQ ≥ 6** (§5), danach **2 starke CTA-Zonen:** eine nach Maß- und Kosten-Block, eine am Schluss. Möbelplaner + Kontakt + Telefon.

**Schema:** Repo-Konvention der gebauten Produktseiten (kleiderschrank, badschrank, regal, einbauschrank-dachschraege):
- `Service` + `OfferCatalog` **ohne Preis**
- `BreadcrumbList` (Home → Möbel nach Maß → Hauswirtschaftsraum einrichten → Waschmaschinenschrank nach Maß)
- `FAQPage` 1:1 zu den sichtbaren FAQ
- Kein `offers`/`AggregateOffer`, kein `aggregateRating`

**Bilder:** Im Repo gibt es **kein** Waschmaschinen- oder HWR-Foto. Laut bilder.md: lieber weniger Bilder, ehrlich beschriftet. Kein Kleiderschrank-Foto als „Waschmaschinenschrank" betexten. Bei `MnmWarum` gilt `object-fit: fill`, das Seitenverhältnis muss exakt passen.

## 4 · Begriffe und Entitäten als Recherchehinweise; keine Pflichtliste zum Abhaken
- **Kern:** Waschmaschinenschrank (nach Maß) · Maßanfertigung · Schrank für Waschmaschine und Trockner · Einbauschrank für die Waschmaschine · Hauswirtschaftsraum/HWR · Waschküche · Nische
- **Bauformen:** Waschturm · Zwischenbaurahmen bzw. Zwischenbausatz (Gerätezubehör) · nebeneinander/übereinander · Arbeitsplatte bzw. Ablagefläche · Überbauschrank · offen/geschlossen · Klapp-, Schiebe-, Falt-, Drehtür · Öffnungswinkel
- **Technik:** Belüftung, Lüftungsöffnungen oben/unten · Wärmestau · Feuchtigkeit/Schimmelrisiko · Ablufttrockner, Kondenstrockner, Wärmepumpentrockner · Gerätetiefe · Schläuche, Stecker, Wasserhahn · Zulauf, Ablauf, Steckdose · Körperschall, Vibration, Schleudern · Wartungszugang · Flusensieb · Aufmaß
- **Ausstattung:** Waschmittelfach · Wäschekorb- bzw. Tablarauszug · Schubladen · Fronten, Dekor, Griffe (generisch)
- **Kontext:** Bad · Dachschräge · unter der Treppe · erhöhter Sockel/rückenschonend. Letzteres nur als „auf Anfrage prüfen", siehe §9.
- **Nur am Rand, wenn überhaupt:** Auffangwanne, Wasserstopp. Das sind Gerätezubehör oder Installateur-Themen, keine Fast-Leistung.
- **Fast-Entitäten:** Fast Systemmöbel · Espelkamp/OWL · Meisterbetrieb (Tischler) · PU-Kantenverleimung · Eigenfertigung · eigenes Montageteam · kostenloses Aufmaß · 3D-Planung · Möbelplaner
- **NICHT in die Copy:**
  - Vicco, Fackelmann, Schrankwerk, Möbelwerke, expresszuschnitt. Das sind Wettbewerbs-Entitäten; generisch „Fertigschrank/Bausatz aus dem Handel".
  - Gerätemarken. Geräte sind kundeneigen.
- „Schreiner" höchstens 1× als Synonym. Im Regionalton OWL heißt es „Tischler".

## 5 · Offene Nutzerfragen, soweit sie nach dem Haupttext noch eine Antwort brauchen
Pflicht ≥ 6, Empfehlung 8. **Nicht wortgleich zur Pillar-FAQ.** Der Pillar hat schon „Können Waschmaschine und Trockner in die Möbel verbaut werden?" und „Welche Anschlüsse braucht ein HWR?". Die Antworten gehen über den Haupttext hinaus.

1. **Muss ein Waschmaschinenschrank belüftet werden?** Ja. Wärme und Restfeuchte müssen raus, Be- und Entlüftungsöffnungen bleiben frei. Wir planen Luftwege von Anfang an ein, ohne Bauteilnamen.
2. **Darf der Trockner im geschlossenen Schrank laufen, und welcher Typ eignet sich?** Der Ablufttrockner braucht einen Schlauch nach außen; die Verbraucherzentrale nennt ihn nicht mehr Stand der Technik. Kondens- und Wärmepumpentrockner geben Wärme an den Raum ab. Die Aufstellangaben des Herstellers sind maßgeblich, die Verbraucherzentrale empfiehlt aus Energiegründen den Wärmepumpentrockner.
3. **Wie viel Platz brauche ich hinter und neben den Geräten?** Keine Zahl. Gerätetiefe laut Datenblatt, plus Zugabe für Schläuche, Stecker und Wasserhahn, plus Luft fürs Schwingen. Das Maß wird beim kostenlosen Aufmaß festgelegt.
4. **Kann ich Waschmaschine und Trockner im Schrank übereinander stellen?** Ja, als Waschturm. Voraussetzung: kompatible Geräte und der Zwischenbausatz des Herstellers. Der Schrank wird um den Turm gebaut. Gesamthöhe beachten.
5. **Wird die Maschine im Schrank lauter, oder überträgt sie Vibrationen auf die Möbel?** Das Gerät steht frei auf dem Boden und hat keine starre Verbindung zum Korpus. Ringsum bleibt Luft. Details klären wir in der Planung.
6. **Komme ich an Flusensieb, Wasserhahn und Stecker noch heran?** Ja. Front und Sockel unten bleiben zugänglich, Anschlüsse erreichbar, und das Gerät lässt sich herausziehen.
7. **Passt ein Toplader in einen Waschmaschinenschrank?** Ja, aber ohne feste Platte direkt darüber. Lösung: Klappe oder offenes Fach.
8. **Was kostet ein Waschmaschinenschrank nach Maß?** Preistreiber aus §3-6, individuelles Angebot nach kostenlosem Aufmaß, Finanzierung privat möglich. Keine Zahl.
- **Optional, bei Platz:**
  - „Liefern Sie die Waschmaschine mit?" Nein, wir bauen um Ihre Geräte.
  - „Geht das auch im Bad, unter der Schräge oder unter der Treppe?" Machbar auf Anfrage.
  - „Wie läuft es ab, und wie weit fahren Sie?" Aufmaß und Montage im Umkreis von rund 200 km, Lieferung deutschlandweit, Termin nach Freigabe.
- **Bewusst nicht als FAQ:** HWR-Raumgröße, Bodenbelag, Elektroplanung. Das gehört zu Pillar bzw. Ratgeber `planen`.

## 6 · Gaps & unser Winkel (wo Fast überholt) + Negativ-Abgrenzung lt. Playbook
**Gaps und wie Fast sie füllt:**
- **Lüftung bleibt bei fast allen Treffern vage.** Wir erklären die Trocknertyp-Logik (Abluft vs. Wärme in den Raum) mit Verbraucherzentrale-Beleg. Ohne erfundene Fast-Bauteile.
- **Wartung und Feuchte nach dem Waschgang** (Tür offen stehen lassen, Flusensieb vorn) behandelt kein Treffer als Möbelanforderung. Wir machen daraus ein konkretes Planungsdetail: Front, Sockel, Öffnungsraum.
- **Fertigschrank-Treffer geben Rastermaße vor.** Unser Winkel: „Der Schrank wird um Ihre Geräte gebaut, nicht umgekehrt". Dazu Wand zu Wand ohne Passleisten und eigenes Aufmaß inklusive Anschlüsse.
- **Ablauf Aufmaß bis Montage hat nur schreinerhelden.** Wir: kostenloses Aufmaß, 3D-Planung, Eigenfertigung in Espelkamp, eigenes Montageteam, Termin nach Freigabe.
- **Kantenqualität und Feuchte erwähnt im Feuchtbereich niemand.** Wir: PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig.
- **Preise:** Die SERP zeigt Zahlen, wir dürfen keine. Unser Trust-Hebel sind ehrliche Preistreiber plus kostenloses Aufmaß statt Lockpreis.
- **Sonderfälle** (Nische, Schräge, Treppe, Bad): allgemein als Lösungsweg „machbar auf Anfrage". Keine erfundenen Projekte.

**Negativ-Abgrenzung (Playbook §11 + Cluster-Map):**
- **Nicht Hub/Pillar:** kein HWR-Gesamtüberblick, kein Zonenkonzept, keine Vergleichstabelle Tischler/Studio/Baumarkt (steht auf `/hauswirtschaftsraum/`), kein USP-Roman, keine Familiengeschichte.
- **Nicht Ratgeber `planen`:** keine Raumgröße oder m², keine Zonierung, kein Bodenbelag, keine Elektro- oder Sanitärplanung, keine Download-Checkliste. Die Anfrage-Liste bleibt eine kurze Conversion-Hilfe.
- **Nicht `schrank-nach-mass`** (gemischter HWR-Hochschrank), **nicht `vorratsschrank`** (Lebensmittel), **nicht `besenschrank`** (Putzmittel, Staubsauger, Bügelbrett). Jeweils höchstens ein Halbsatz zur Abgrenzung.
- **Cross-Cluster:**
  - Nicht Bad-Waschtischunterschrank (Waschbecken und Siphon).
  - Nicht Wohnraum-Einbauschrank. Dachschräge und Treppe sind dort eigene Seiten; nur erwähnen, nicht deren Winkel duplizieren, nicht verlinken.
- **Nicht Referenz:** keine Projekt-Anekdote, keine Galerie als Selbstzweck.
- **Dedup gegen den Pillar:** Der Pillar-Text („nebeneinander unter einer durchgehenden Arbeitsplatte oder als Waschturm übereinander … Platz fürs Waschmittel") nicht umformulieren. Die Produktseite liefert die neue Information: Maße, Technik, Varianten-Kriterien, Kosten-Treiber.

## 7 · Interne Links (rein/raus, Anker) lt. internal-linking.md — PFLICHT bei Produkt/Ratgeber/Artikel: ≥ 1 gebautes Geschwister (gleicher Cluster) im Fließtext verlinken UND in ≥ 1 indexierter Geschwister-Seite einen Rücklink einplanen (Quelle + Anker nennen; Budget der Quelle prüfen, bei vollem Budget eine Karte/einen schwächeren Link tauschen)
**Registrierung (im selben PR):**
- `PAGES` in `src/lib/seo/linking-rules.ts`:
  `{ slug: "/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/", type: "product", silo: "hauswirtschaftsraum", audience: "privat", parent: "/hauswirtschaftsraum/", built: true, contentModule: "waschmaschinenschrank-nach-mass" }`
- Eintrag in `sitemap.ts`.
- Neues `ANCHORS`-Set:
  - **exact:** ["Waschmaschinenschrank nach Maß"]. `exact[0]` wird auf `/leistungen/` automatisch zum Titel.
  - **partial:** ["maßgefertigter Waschmaschinenschrank", "Waschmaschinenschrank vom Tischler", "Schrank für Waschmaschine und Trockner", "Waschturm-Schrank nach Maß"]
  - **brand:** ["Fast Systemmöbel Waschmaschinenschrank"]
  - **descriptive:** ["Waschmaschine und Trockner im Schrank verbauen", "Waschmaschinenschrank planen"]

**Ausgehend** (Budget Produkt: max 7 verschiedene Body-Ziele inklusive externer Belege; minInlineLinks ≥ 2 als `[Anker](/ziel/)`-Marker):

| Ziel | Wie | Anker |
|---|---|---|
| `/hauswirtschaftsraum/` | Breadcrumb + 1 Inline-Link, z. B. im Abgrenzungs-Halbsatz der Ausstattung oder im Warum-Block | „Hauswirtschaftsraum nach Maß" / „Waschküche nach Maß" / „zum Hauswirtschaftsraum-Bereich" (exact „Hauswirtschaftsraum einrichten" max 1×) |
| `/moebelplaner/` | Pflicht | „Möbelplaner" / „online konfigurieren". Als Vorbereitung formuliert, nicht als „plan es selbst". |
| `/kontakt/` | Pflicht, primäres Conversion-Ziel | „Beratung anfragen" / „Kostenlose Beratung anfragen" |
| `/referenzen/` | SOLL | „Referenzprojekte" |
| 2 externe Belege | siehe §7b | Name der Quelle |

Summe: 6 von 7. Ein Platz bleibt frei für das erste Geschwister.

**Geschwister-Pflicht: entfällt aktuell, vom Audit automatisch erkannt.**
- Im Cluster `hauswirtschaftsraum` ist **kein** Geschwister gebaut. `schrank-nach-mass`, `vorratsschrank`, `besenschrank` und `planen` stehen nicht einmal in `PAGES`.
- `sibling-spokes` löst leer auf. Es gibt weder einen MUSS-Fehler noch einen Rücklink-Fehler.
- **Vorbereitete Anker** für den Zeitpunkt, an dem ein Geschwister gebaut wird (dann beidseitig im PR des späteren Geschwisters, das Budget hat dafür einen Platz):
  - → besenschrank: „Besen- und Putzschrank nach Maß", im Ausstattungs-Halbsatz zu Putzmitteln und Bügelbrett
  - → vorratsschrank: „Vorratsschrank nach Maß"
  - → schrank-nach-mass: „HWR-Schrank nach Maß"
  - → planen: „Hauswirtschaftsraum planen"
- Läuft ein Cluster-Batch parallel: strikt Seite für Seite editieren und committen. Der Rück-Link gehört ins Paket der späteren Seite.

**Eingehend:**
- **Rücklink im selben PR ist Pflicht.** Ohne ihn erzeugt das Audit einen **Fehler** beim Pillar: Dessen MUSS `own-cluster-spokes` greift, sobald `built: true` gesetzt ist.
  - Quelle: `/hauswirtschaftsraum/`. Budget dort aktuell 5 von 10 verschiedenen Zielen (moebel-nach-mass, kontakt, moebelplaner, referenzen, ueber-uns), also frei, kein Tausch nötig.
  - Stelle: `src/lib/content/hauswirtschaftsraum.ts` → `hwrTypische.row1[1].description` (Karte „Waschmaschine und Trockner verbaut"; MnmTypische rendert Inline-Marker). Anker: „[Waschmaschinenschrank nach Maß](/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/)".
  - Optional dasselbe Ziel in der FAQ-Antwort „Können Waschmaschine und Trockner in die Möbel verbaut werden?" mit Anker „Waschmaschine und Trockner im Schrank verbauen". Das zählt budgetär nur einmal.
  - Die veralteten Kommentare („Kinder noch built:false") in `hauswirtschaftsraum.ts` und `(site)/hauswirtschaftsraum/page.tsx` mitpflegen.
- **MIN_INBOUND = 3 wird nicht erreicht. Erwartbare Audit-Warnung, kein Fehler.**
  - Einzige Quelle ist der Pillar. `/leistungen/` rendert die Seite zwar automatisch, wird vom Audit aber nicht gezählt (die Liste kommt aus PAGES, nicht aus dem Modul).
  - Hub `/moebel-nach-mass/` → Produkt wäre `skip-hub-level`.
  - `/referenzen/` hat kein HWR-Projekt.
  - Die Brücke Küchen ↔ HWR gilt nur für den Pillar.
  - Die Warnung kommt in die REVIEW.md. Sie löst sich mit den HWR-Geschwistern.
  - Eine neue BRIDGE (z. B. `/badmoebel-nach-mass/` ↔ diese Seite, Thema „Waschmaschine im Bad") nur auf Entscheidung von Ben. Nicht eigenmächtig.
- **Silo:** keine Links in Bad-, Einbauschrank- oder Gewerbe-Seiten. Pflicht vor dem PR: `npm run audit:links` mit 0 Fehlern.

## 7b · Belege (Outbound): Norm-/Vorschrift-/Messwert-Angaben mit max. 2 Links je Seite NUR auf Quellen der EXTERNAL_SOURCE_ALLOWLIST (src/lib/seo/linking-rules.ts: gesetze-im-internet.de, baua.de, dguv.de, eur-lex.europa.eu, rki.de, bundesgesundheitsministerium.de, amk.de, amk-ratgeber-kueche.de, verbraucherzentrale.de, nullbarriere.de); Ankertext = Name der Quelle; nie Hersteller/Wettbewerber; nichts erfinden; kostenpflichtige Normen (DIN/EN/ISO) als Text ohne Link
Am 2026-10-13 per Abruf geprüft. Beide Hosts stehen auf der Allowlist.

1. **[Verbraucherzentrale](https://www.verbraucherzentrale.de/wissen/energie/strom-sparen/beim-kauf-eines-waeschetrockners-an-den-stromverbrauch-denken-37984)** (Stand 30.09.2026). Trägt diese Aussagen:
   - Bei Ablufttrocknern muss die feuchte Luft über einen Schlauch nach außen geleitet werden.
   - Ablufttrockner entsprechen nicht mehr dem Stand der Technik.
   - Die Verbraucherzentrale empfiehlt Wärmepumpentrockner.
   - Be- und Entlüftungsöffnungen müssen frei bleiben.
   - Einsatz: Technik-Block bzw. FAQ 1/2. Anker z. B. „Verbraucherzentrale zu Wäschetrocknern".
2. **[Verbraucherzentrale](https://www.verbraucherzentrale.de/wissen/umwelt-haushalt/wohnen/wenn-die-waschmaschine-mueffelt-tipps-gegen-ueble-gerueche-109784)** (Stand 23.09.2026). Trägt diese Aussagen:
   - Dichtung und Waschmittelkammern trocken wischen.
   - Die Tür offen stehen lassen, bis die Maschine ganz getrocknet ist.
   - Das Flusensieb sitzt meist vorn hinter einer Abdeckung und sollte regelmäßig gereinigt werden.
   - Einsatz: Front- und Zugangsplanung bzw. FAQ 6. Anker z. B. „Verbraucherzentrale zur Waschmaschinenpflege".
- **Ersatz, falls ein Link entfällt:** [Verbraucherzentrale zu Feuchtigkeit und Schimmel](https://www.verbraucherzentrale.de/wissen/umwelt-haushalt/wohnen/wie-feuchtigkeit-und-schimmelbildung-zu-vermeiden-sind-6794) (Stand 17.07.2026). Trägt: Wäschetrocknen bringt mehrere Liter Wasser in die Raumluft; höhere Luftfeuchte heißt höheres Schimmelrisiko; Möbel nicht vor kalte Außenwände stellen.
- **Nicht verlinken, nicht nennen:**
  - Herstellerhandbücher, Gerätemarken, Wettbewerber.
  - Elektro-Normen für Feuchträume (DIN VDE). Fast macht keine Elektroarbeiten, also keine Norm-Aussage.
  - Keine Lüftungsquerschnitte oder Abstandswerte als „Vorschrift" ausgeben. Es gibt dafür keinen geprüften Beleg; maßgeblich ist die Aufstellanleitung des jeweiligen Geräts, ohne Link.
- Beide Belege zählen ins Body-Budget von 7 (siehe §7).

## 8 · Do-NOT-claim-Liste (❌ aus FACTS.md, konkret für dieses Thema)
- **Preise:** keine Preise, Spannen, „ab"-Werte oder Relationen. Die SERP-Anker (719–2.498 €, „ab ca. 3.200 €") NICHT übernehmen. Die Planer-Preis-Ausnahme aus FACTS gilt nur mit eigenem Planer-Beleg, und für den Waschmaschinenschrank gibt es keinen. Daher **kein** `offers`/`AggregateOffer`.
- **Lieferzeit:** keine Wochen, auch nicht „3–8 Wochen" aus der SERP. Formel: „verbindlicher Termin nach Aufmaß und Freigabe".
- **Feuchte:** NICHT „wasserfest", „wasserdicht", „nahezu wasserfest", kein Tauchtest, nicht „schimmelsicher" oder „schimmelfrei garantiert". Erlaubt sind nur „fugenlos" und „feuchtigkeitsbeständig" für die PU-Kante.
- **Garantie:** NICHT „5 Jahre Garantie" und keine andere Garantiezahl.
- **Geräte:** Fast verkauft **keine** Geräte. Keine Gerätemarken als Partner und keine Geräteempfehlung durch Fast. Die Empfehlung zum Wärmepumpentrockner nur als Aussage der Verbraucherzentrale.
- **Technik als Fast-Standard:** keine Lüftungsgitter oder cm²-Werte, keine Antivibrationsmatten oder Schwingungsdämpfer, keine Auffangwanne oder Wasserstopp, keine Absturzsicherung oder Kippschutz-Technik, kein „Fast montiert den Zwischenbausatz". Erlaubt ist nur „in der Planung berücksichtigt".
- **Gewerke:** NICHT „wir verlegen Wasser, Abfluss, Strom" und kein Abluft-Mauerdurchbruch durch Fast. Formel: „Elektro- und Sanitärarbeiten stimmen wir mit Ihnen und Ihrem Handwerker ab". Aussparungen und Zugänge **im Möbel** planen: ok.
- **Maße:** keine Fast-Min- oder -Max-Maße. Gerätemaße nur als „übliche Gerätemaße, Datenblatt verbindlich". Keine Abstandszahlen hinter oder neben dem Gerät.
- **Material und Beschläge:** keine Hersteller (Platten, Beschläge), keine Serien, keine Holzarten wie Eiche oder Nussbaum als belegt. Erlaubt: Massivholz und branchenübliche hochwertige Materialien. Kein Musterversand, keine kostenlosen Dekorproben, kein „fester Dekorkatalog".
- **Referenzen:** kein HWR- oder Waschmaschinenschrank-Projekt mit Ort, keine Anekdote („in einem Altbau in Minden …"). Keine produktbezogenen Bewertungen, kein `aggregateRating`.
- **Erhöhter Sockel / Maschine auf Podest:** nicht als sicher machbar zusagen. Nur „prüfen wir in der Beratung".
- **Möbelplaner:** NICHT behaupten, dass er Geräteverbau, Waschturm oder Aussparungen abbildet. Nur „vorplanen bzw. vorbereiten".
- **Unternehmen:** NICHT „Meisterbetrieb seit <Jahr>", „25+ Jahre", „12+ Mitarbeiter", „1996 in Espelkamp" (richtig: Rahden-Tonnenheide), kein FSC/PEFC, keine „regionale Holzherkunft".
- **Erlaubt:**
  - Meisterbetrieb · Eigenfertigung „alle Teile in Eigenregie" in Espelkamp · PU-Kantenverleimung
  - kostenloses Aufmaß vor Ort · 3D-Planung · eigenes Montageteam
  - Montage im Umkreis von rund 200 km, Lieferung deutschlandweit
  - Wand zu Wand ohne Passleisten · Finanzierung im Privatbereich
  - 4.000+ Projekte / 1.000 m² / 72K+ Einzelteile
  - NAP: Alte Waldstraße 32, 32339 Espelkamp, 05771 9138312
  - Anrede „Sie"

## 9 · Offene Punkte / Wissenslücken (was NUR der Kunde weiß; IMMER inkl. Geo-Reichweite „bundesweit oder montage-gebunden?"). Wird NICHT beim Kunden erfragt, sondern vor dem Schreiben gegen FACTS.md + den Antwort-Fundus des Mandanten aufgelöst; alles Unbelegte bleibt Leerstelle und wird nicht behauptet.
### 9a · Beantwortet (gegen kundenwissen.md + FACTS.md aufgelöst, 2026-10-13)
- **Geo-Reichweite (Pflicht) — montage-gebunden:** Kostenloses Aufmaß, Einbau und Montage **nur im Umkreis ~200 km um Espelkamp** (nennbar: ganz OWL, Espelkamp, Minden, Lübbecke, Osnabrück, Bielefeld), eigenes Montageteam; **Lieferung deutschlandweit** (gilt laut Kunde für jedes Produkt). Ein Geräteverbau lebt vom Aufmaß inkl. Anschlusslage — der Text verankert das Angebot deshalb regional und behauptet **keine** bundesweite Montage. Quelle: kundenwissen.md § Geo & Service (hauswirtschaftsraum Q1, badmoebel Q1); FACTS § Geo-Reichweite je Leistung.
- **Geräte:** kundeneigen — Fast verkauft keine Waschmaschinen/Trockner, plant und baut die Möbel um die vorhandenen Geräte („Fast plant nur"). Quelle: kundenwissen.md § Leistungsumfang (hauswirtschaftsraum Q2/Q3); Altbestand inbox/discovery/hauswirtschaftsraum.md Q2/Q3.
- **Preise:** strikt individuell; Kostenfrage nur über Preistreiber + individuelles Angebot nach kostenlosem Aufmaß; kein pauschaler Sondermaß-Zuschlag („der Preis entsteht aus Material, Ausstattung und Aufwand" ist freigegeben). Keine Planer-Preis-Ausnahme (kein Planer-Beleg für diesen Möbeltyp). Quelle: FACTS § Preise; kundenwissen.md § Preise & Termine.
- **Finanzierung:** im Privatbereich ja (HWR = Privat). Quelle: FACTS § Küche-Service; kundenwissen.md § Preise & Termine.
- **Lieferzeit:** keine Wochenangabe, „verbindlicher Termin nach Aufmaß und Freigabe"; SERP-„3–8 Wochen" nicht übernehmen. Quelle: kundenwissen.md § Preise & Termine; FACTS.
- **Prozess/Beratungswege:** Beratung per Telefon oder vor Ort → kostenloses Aufmaß vor Ort (inkl. Gerätemaße + Anschlusslage) → 3D-Planung → Eigenfertigung Espelkamp → Montage durch eigenes Team. Kein Showroom behaupten. Quelle: FACTS § Prozess/Service; kundenwissen.md § Leistungsumfang (ratgeber Q7).
- **Material/Feuchte:** PU-Kantenverleimung **fugenlos + feuchtigkeitsbeständig**; Massivholz + branchenübliche hochwertige Materialien. Nie „wasserfest"/„wasserdicht"/Tauchtest, nie „schimmelsicher". Quelle: FACTS § Fertigung/Material.
- **Machbarkeit Sonderfälle** (Bad, Dachschräge, unter der Treppe, Toplader): Grundhaltung „alles auf Anfrage / für jedes Problem eine Lösung" — machbar formulieren, ohne Positiv-/Negativliste. Quelle: kundenwissen.md § Leistungsumfang.
- **Möbelplaner:** deckt Schränke ab; nur als **Vorbereitung** der persönlichen Planung; primäres Conversion-Ziel = Anfrage über das Kontaktformular. Quelle: kundenwissen.md § Möbelplaner & Conversion.
- **Musterversand:** keiner, keine kostenlosen Dekorproben (Konfiguratoren der SERP bieten sie — nicht übernehmen). Quelle: kundenwissen.md § Leistungsumfang.

### 9b · Leerstelle — nicht behaupten (je Leerstelle eine Writer-Anweisung; im REVIEW.md unter »Offene Fakten (nicht behauptet)«)
1. **Passung bei reiner Lieferung außerhalb 200 km** (misst der Kunde selbst? Fern-Aufmaß?): unbelegt. → Nur „Lieferung deutschlandweit" nennen, **keinen** Fern-Aufmaß-/Selbstaufmaß-Prozess beschreiben; Hauptaussage bleibt das Aufmaß vor Ort im Montagegebiet.
2. **Fast-eigene Lüftungs-/Wärme-/Vibrationslösung** (Bauteile, Öffnungsgrößen, Entkopplung, Matten): unbelegt. → Allgemeine Gerätelogik + Verbraucherzentrale-Beleg (§7b); Fast-Anteil nur „planen wir von Anfang an mit ein"; keine Bauteile, keine cm²-Werte.
3. **Waschturm-Zwischenbausatz** (montiert oder beschafft Fast ihn?): unbelegt. → Bausatz = Zubehör des Geräteherstellers; Fast baut den Schrank um den Turm, **keine** Montage-/Beschaffungszusage.
4. **Elektro/Sanitär/Abluftführung** durch Fast: unbelegt. → „stimmen wir mit Ihnen und Ihrem Handwerker ab"; Aussparungen und Zugänge **im Möbel** planen ist ok, Gewerke nie als Fast-Leistung.
5. **Fast-Maße** (Min/Max, Abstände hinter/neben dem Gerät): keine (kundenwissen.md § Belege). → Maß-Tabelle nur mit üblichen Gerätemaßen, gekennzeichnet „Orientierung, Datenblatt verbindlich, nicht unsere Schrankmaße"; Zugaben qualitativ; Rest „beim kostenlosen Aufmaß"; unsichere Zahl lieber weglassen.
6. **Erhöhter Sockel/Podest** (Statik bei schleuderndem Gerät): unbelegt. → „prüfen wir in der Beratung", keine Zusage, keine Höhe in cm.
7. **Türsysteme, Beschläge, Dekore:** Fast macht keine Angaben (kundenwissen.md einbauschraenke Q4/Q5). → Türarten nur generisch und „auf Wunsch"; keine Marken/Serien; kein Dekorkatalog.
8. **Möbelplaner-Funktionsumfang** (Geräteverbau/Waschturm abbildbar?): unbelegt. → „Schrank und Nischenmaße vorplanen — den Geräteverbau klären wir persönlich beim Aufmaß".
9. **Referenz und Fotos:** kein freigegebenes HWR-Projekt, **kein** Waschmaschinen-/HWR-Foto in `public/images` (geprüft 2026-10-13). → Keine Anekdote, kein Ort; nur Bilder, deren Alt-Text das Motiv ehrlich beschreibt, sonst ohne Bild (bilder.md); fehlendes Foto im REVIEW.md vermerken (keine Rückfrage vorab).
10. **Inbound-Links** (MIN_INBOUND 3, nur der Pillar als Quelle): kein Fakten-, sondern Strukturpunkt. → Erwartbare Audit-Warnung `inbound` im REVIEW.md ausweisen; löst sich mit den HWR-Geschwistern (z. B. Ratgeber `planen`, Kit liegt seit 2026-10-13 vor); neue BRIDGE nur auf Bens Entscheidung.

**Offene Leerstellen: 10** (davon 9 Fakten-Leerstellen + 1 Struktur-Hinweis). Geo-Frage aufgelöst (montage-gebunden ~200 km, Lieferung deutschlandweit).

### 9c · Gewinnbarkeit (Nachtrag Research-Lauf 2026-10-13)
- `signale.json` (Stand 2026-10-12): **Portalanteil unbelegt** — die Auswahl enthält eine Faktorschätzung.
- Die Engine-SERP (US-Tool, schwach) zeigt **8 von 9 URLs bei Online-Konfiguratoren/Shops** (expresszuschnitt Rang 1–6, schrankwerk, passandu) und nur einen Handwerksbetrieb (schreinerhelden, Rang 8). Konfiguratoren zählen in `wettbewerber.yml` als SERP-Gegner, nicht als Portale; ein Meisterbetrieb mit Aufmaß + Montage ist dort unterbesetzt (Winkel §6). Vor dem Authoring den Montags-Portalanteil prüfen; liegt er ≥ 80 %, nicht bauen.
- **Geprüft 2026-10-28 (Authoring-Lauf W44):** `signale.json` führt `portalanteil_top10` für diesen Slug weiterhin als `null` (unbelegt), also nicht ≥ 80 % → bauen.

## 10 · Authoring-Briefing (Authoring-Lauf 2026-10-28, W44) — verbindlich für Writer/QC/Chef
**Wissensstand:** §9a/§9b am 2026-10-28 erneut gegen FACTS.md + kundenwissen.md geprüft. Seit 2026-10-13 kam nur Büro-Wissen und die Arminia-Loge hinzu, beides ohne HWR-Bezug. Die 9 Fakten-Leerstellen aus §9b gelten unverändert. Keine `inbox/discovery/waschmaschinenschrank-nach-mass.md` vorhanden.

**Batch-Stand (ändert §7):** Diese Seite ist Seite 2 im Cluster-Batch hauswirtschaftsraum. Seite 1 ist der Ratgeber **`/hauswirtschaftsraum/planen/`** („Hauswirtschaftsraum planen“, Paket `2026-10-28-planen`), der vor dieser Seite gemergt wird. Damit gibt es ein gebautes Geschwister, und die Geschwister-Pflicht gilt: **mindestens ein Inline-Link auf `/hauswirtschaftsraum/planen/`**. Den Rücklink vom Ratgeber, die Pillar-Karte und die Kontakt-FAQ verdrahtet der Orchestrator.

**Modul und Route:** `src/lib/content/waschmaschinenschrank-nach-mass.ts` (Exporte `wms*`), Route `/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/`.

**Struktur ist fixiert** (Keys/Anzahl nicht ändern, nur Werte betexten): Hero · IntroStats (3 Spalten) · CTA 1 · Bauform-Tabelle (5 Zeilen × Passt, wenn …/Darauf achten; Waschturm-Zeile trägt die Turm-Sicherung über den Verbindungs-/Zwischenbausatz des Geräteherstellers) · Maß-Tabelle (4 Zeilen, nur übliche GERÄTEmaße mit Pflicht-Kennzeichnung) · Technik-Karten (4) · Warum-nach-Maß-Block · Ausstattungs-Karten (4) · 4 Prozess-Schritte + `note` (Anfrage-Checkliste) · Kosten-Tabelle (5 Faktoren, keine Zahl) · Möbelplaner-CTA · Testimonials · CTA 2 + Telefon · FAQ (8). **`image`/`imageAlt`/`bandImage`/`bandAlt`/`bgImage` NICHT ändern** (Orchestrator-Bildwahl, Alt beschreibt das tatsächliche Motiv, bilder.md). Feste Labels (`since`, `col1CtaLabel`, `col3Title`, `col3CtaLabel`, `phone`) bleiben.

**Links — Body-Budget 7, in diesem Paket genau diese 6 Ziele, sonst keine:**
| Ziel | Stelle | Anker |
|---|---|---|
| `/hauswirtschaftsraum/` | `col2Body` (oder Ausstattungs-`intro`) | „Hauswirtschaftsraum nach Maß“ / „Waschküche nach Maß“ |
| `/hauswirtschaftsraum/planen/` | Maß-`intro` oder `col1Body` (Anschlüsse im Raum festlegen) | „Hauswirtschaftsraum planen“ / „Ratgeber zur HWR-Planung“ |
| `/moebelplaner/` | Möbelplaner-`body` | „Möbelplaner“ (nur Vorbereitung; Geräteverbau klären wir beim Aufmaß) |
| `/kontakt/` | Prozess-`note` oder FAQ-Antwort | „Beratung anfragen“ / „kostenlose Beratung anfragen“ |
| extern | Technik-Karte „Wärme und Trocknertyp“ | [Verbraucherzentrale](https://www.verbraucherzentrale.de/wissen/energie/strom-sparen/beim-kauf-eines-waeschetrockners-an-den-stromverbrauch-denken-37984) |
| extern | Technik-Karte „Feuchte“ oder „Zugang“ | [Verbraucherzentrale](https://www.verbraucherzentrale.de/wissen/umwelt-haushalt/wohnen/wenn-die-waschmaschine-mueffelt-tipps-gegen-ueble-gerueche-109784) |
- **Kein** Link auf `/referenzen/` (der 7. Platz bleibt für ein späteres HWR-Geschwister frei), auf Bad-, Einbauschrank- oder Küchenseiten oder auf ungebaute HWR-Kinder.
- Link-Marker-Format: `[Anker](/pfad/)` im Fließtext.

**FAQ (8 Slots):** Jede Antwort bringt etwas, das Tabellen und Technik-Karten NICHT schon sagen (Beispiel: Gerätetür-Öffnungsraum, Bedienhöhe beim Turm, Herstellerangaben als Maßstab), statt die Karte nachzuerzählen. Nicht wortgleich zur Pillar-FAQ „Können Waschmaschine und Trockner in die Möbel verbaut werden?“.

**Dichte-Obergrenzen** (`prop-laengen.mjs` gegen `waschtischunterschrank-nach-mass.ts`, Vorlage-Max +10 %): Hero-`intro` und alle Tabellen-/Karten-`intro` ≤ 48 W · `col1Body`/`col3Body` ≤ 35 W · `col2Body` ≤ 48 W · Karten-`body` ≤ 36 W · Warum- und Möbelplaner-`body` ≤ 65 W · Schritt-`description` ≤ 28 W · `note` ≤ 45 W · FAQ-`answer` ≤ 45 W · Tabellenzellen ≤ 20 W. Gesamtziel ~1.500 W (Orientierung).

**H1/Meta:** H1 nennt „Waschmaschinenschrank nach Maß“. Zusätzlich am Ende einen Block `### meta` mit `metaTitle:` (≤ 60 Zeichen) und `metaDescription:` (≤ 155 Zeichen) liefern.

## 10a · Ergebnis Lauf 1 (2026-10-28) und Regeln für den Retry
**Lauf 1:** Engine `wf_a4e94b1d-e2b`, Code-Gates grün (0 verbotene Claims, Meta 0, 8 FAQ, 1.910 W Engine-Zählung), **Chefredakteur pass=false** → kein Paket. Seite 1 des Batches (`planen`) bekam ebenfalls kein Paket, die Geschwister-Annahme aus §10 gilt also erst, wenn `planen` gemergt ist. Befunde: (1) Faktentreue FAQ 1: „Warme Luft steigt, also planen wir die Luftwege so, dass unten kühlere Luft nachströmt und oben die warme abzieht“ = Fast-eigene Lüftungsmethode, unbelegt (§9b-2), fachlich geräteabhängig. (2) Länge/Füllstellen: 1.910 W über dem Produkt-Deckel; Leersätze in den Kosten-Zeilen 2/3, „Aufwand“ 6×, Anschluss-Motiv 7×. (3) Kleinigkeiten: „Ihre Be- und Entlüftungsöffnungen“ mehrdeutig, Komma-Reihung FAQ 4, Entität „Tischler“ fehlte, Dedup zum Ratgeber (FAQ Waschturm, Karte Trocknertyp).
**Draft für den Retry:** Copy mit allen Chef-Fixes in `research-cache/waschmaschinenschrank-nach-mass.draft.md` (+ Modul/Seite/Integration, siehe dort).
**Sperr-Regeln für den Retry (Writer/QC/Chef):**
- Keine Aussage, WIE Fast Luft führt, kühlt, entkoppelt oder dämpft. Fast-Anteil nur „planen wir von Anfang an mit ein“; Lage und Größe der Öffnungen = Aufstellanleitung des Geräts.
- Die Seite darf nicht wachsen: keine neuen Sätze in Kosten-, Technik- oder Ausstattungs-Karten, FAQ-Antworten erzählen keine Karte nach. „Tischler“ genau einmal.
- Dedup zum Ratgeber `planen`: FAQ „Kann ich Waschmaschine und Trockner übereinander stellen?“ und Technik-Karte „Wärme und Trocknertyp“ dürfen dessen FAQ „Darf der Trockner auf die Waschmaschine?“ und Feuchte-Karte „Trocknertyp“ nicht wiederholen. Die Waschturm-Tiefe gehört hierher; im Paket dieser Seite wird die Ratgeber-FAQ gekürzt und verlinkt hierher.

## 10b · Lauf 2 (2026-10-29, W44) — Bestand erhalten, nichts ergänzen
**Ausgangslage:** Das Modul ist mit der Lauf-1-Fassung (QC&Fix, wortgleich) **plus allen Chef-Fixes** gefüllt (siehe §10a). Das ist der **zu erhaltende Bestand**, kein Platzhalter. Auftrag an Writer, Humanizer und QC&Fix: den Bestand übernehmen und nur dort eingreifen, wo ein Satz gegen §8, §9b, §10, §10a oder diese Regeln verstößt. Jede Änderung ist gleich lang oder kürzer. Keine neuen Sätze, keine neuen Zahlen, Maße, Normen, Methoden oder Beispiele.

**Struktur-Änderung vor Lauf 2 (Orchestrator, ersetzt „FAQ (8)“ in §10):** **6 FAQ statt 8.** Gestrichen wurden „Passt ein Toplader …?“ (wiederholte Bauform-Zeile und Maß-Zeile Toplader) und „Geht das auch im Bad, unter der Dachschräge oder unter der Treppe?“ (Schräge-Aussage widersprach der Raumform-Tabelle des Ratgebers, Luftwege-Satz grenzte an eine Fast-Methode; die Einbausituation trägt die Kosten-Zeile 4). Die FAQ „Wird die Waschmaschine im Schrank lauter?“ ist gekürzt, damit sie die Technik-Karte „Schwingung“ nicht nacherzählt. Keine FAQ wieder hinzufügen. Länge des Bestands jetzt rund 1.710 Copy-Wörter, also am Produkt-Deckel; die Seite darf nicht wachsen.

**Gesperrte Stellen — wortgleich lassen, weder erweitern noch ergänzen:**
- Technik-Karte „Schwingung beim Schleudern“: Dass die Maschine frei auf dem Boden steht, ohne starre Verbindung zum Korpus und mit Luft ringsum, ist Gerätelogik nach Aufstellanleitung und abgenommen. Verboten bleiben Bauteile und Methoden (Matten, Dämpfer, Entkopplungselemente, Luftführung „unten rein, oben raus“, Öffnungsgrößen).
- Technik-Karte „Wärme und Trocknertyp“, FAQ 1 und FAQ 2: Verbraucherzentrale-Aussagen nur so, wie sie in §7b stehen. Lage und Größe von Lüftungsöffnungen = Aufstellanleitung des Geräts. Fast-Anteil nur „planen wir von Anfang an mit ein“.
- Maß-Tabelle: nur die üblichen Gerätemaße, so wie sie stehen, mit der Kennzeichnung „Orientierung, nicht unsere Schrankmaße“. Keine Abstands- oder Zugabe-Zahlen ergänzen.
- „Tischler“ steht genau einmal (Hero). Nicht weiter streuen.

**Geschwister im Batch (Ratgeber `/hauswirtschaftsraum/planen/`):** Der Ratgeber liegt im Repo unter `src/lib/content/planen.ts` und wird vor dieser Seite gemergt. Im Paket dieser Seite kürzt der Orchestrator dessen FAQ „Darf der Trockner auf die Waschmaschine?“ auf: „Ja, als Waschturm, aber nur mit dem Verbindungssatz, den der Gerätehersteller dafür anbietet. Er hält den Trockner fest, wenn die Maschine darunter schleudert. Wie sich ein Turm samt Bedienhöhe und Lüftung in einen Schrank einfügt, zeigt der [Waschmaschinenschrank nach Maß](…).“ Die Waschturm-Tiefe (Bedienhöhe, Fach darüber, Bausatz ersetzt der Schrank nicht) gehört also hierher, der Ratgeber verweist nur. Die Raumform-Zeile „Unter der Dachschräge“ des Ratgebers (Hochschränke an die hohe Wand, Geräte unter die Schräge) nicht widersprechen; Dachschräge auf dieser Seite nur in der Kosten-Zeile „Einbausituation“.

## 10c · Ergebnis Lauf 2 (2026-10-29) — grün, Seite rückt auf Position 1
**Engine `wf_f5a40cf2-9dd`:** Code-Gates grün (0 verbotene Claims, Meta 0, 6 FAQ, 1.747 W Engine-Zählung), **Chefredakteur pass=true**, Status OK. Die Sperren aus §10b hielten: Die gesperrten Stellen blieben wortgleich, die Seite ist nicht gewachsen. Als „akzeptiert“ wertete der Chef einen neuen Satz in der Toplader-Zeile (durch §3-2 belegt).
**Batch-Folge:** Der Ratgeber `planen` war auch in Lauf 2 rot (siehe planen.kit.md §10c) und bekam kein Paket. Damit ist diese Seite Seite 1 ohne `nach=`. Das ändert §10 und §10b:
- Der Satz mit dem Link auf `/hauswirtschaftsraum/planen/` in `col1Body` wurde entfernt, weil der Ratgeber nicht gebaut ist. Die Geschwister-Pflicht entfällt, solange kein Geschwister gebaut ist.
- Eingehend: Pillar-Karte (`hwrTypische`), Kontakt-FAQ „Was sollte ich für das Gespräch vorbereiten?“ (neu) und Möbelplaner-FAQ „Welche Möbel kann ich im Planer konfigurieren?“ (Anker „Schrank für Waschmaschine und Trockner“, nur als Vorskizze, Geräteverbau beim Aufmaß). Damit hat die Seite 3 Quellen.
- Orchestrator-Eingriffe nach der Abnahme: FAQ 6 „nennen wir nicht“ (optionaler Chef-Fix). Ablauf-Bild ersetzt (`schrank-unter-treppe/aufmass-planung-nach-mass.jpg`, ehrlicher Alt-Text), weil das bisherige Montagebild dasselbe Motiv wie der Warum-Block zeigte und einen falschen Alt-Text trug. Weiche Trennstriche in drei H2, weil „Waschmaschinenschrank“ mobil über den Rand lief.
- **Für den späteren Ratgeber-Retry:** Im Paket des Ratgebers kommen der Link aus `col1Body` (Anker „Hauswirtschaftsraum planen“) und die gekürzte Ratgeber-FAQ mit Rücklink hierher (§10b) dazu.

