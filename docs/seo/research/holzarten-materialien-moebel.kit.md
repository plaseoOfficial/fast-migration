# Research-Kit: Holzarten Möbel (/ratgeber/holzarten-materialien-moebel/)

## 1 · Wortzahl-Korridor → **1.800–2.300 W · Ziel ~2.000 W** (SERP-Median 2650, geschätzt) — normiert 2026-10-06 (Korridor-Politik)
**Korridor-Politik (Ben, 2026-07-15), vom Research-Lauf W41 normiert:** Grundregel Ziel ~1.800 W, Korridor 1.600–2.100; die Playbook-Defaults (Themen-/Vergleichs-Ratgeber 2.000–2.600) gelten als **überschrieben**. Weil die Top-Treffer zum selben Thema darüber liegen (hausjournal ~3.000, toom ~2.650) und dieses Kit viele Pflicht-Module trägt (3 Tabellen, 10 kompakte Porträts, Material-, Pflege-, Raumklima- und Fehlerblock, FAQ), wird der Korridor **minimal angehoben: 1.800–2.300 W, Ziel ~2.000 W**.
**Warum der Boden NICHT auf den Median 2.650 steigt** (die Regel „Boden nie unter den SERP-Median" gilt nur bei *gleichem Intent* und *gemessenem* Median, beides ist hier nicht erfüllt):
- Die Wortzahlen sind Schätzungen aus Fetch-Zusammenfassungen (nicht gezählt). Die SERP lief US-basiert, obi.at und bauhaus.at waren nicht abrufbar.
- Die langen Treffer haben anderen Intent: heimwerker ~9.000 ist ein Holz-Lexikon inkl. Bauholz, toom und sanier bedienen Heimwerker beim Selberbauen. Unser Leser plant ein Maßmöbel und will eine Materialentscheidung, keine Bearbeitungsanleitung (§6 schließt DIY/Lexikon bewusst aus).
- Lehre aus /ratgeber/ (Strategie v2 §6): ein auf SERP-Länge aufgeblasener Text reproduziert andere Seiten, statt die Frage dichter zu beantworten.

**Verhältnis zu DEPTH.md:** Der Korridor ist Planungsgröße gegen Aufblähen und gegen Dünnheit, **kein blockierendes Gate** (DEPTH.md Regel 3, AGENT-WORKFLOW Phase 1). Fehlt Substanz, benennt QC das fehlende Modul.
**Writer-Hinweis (Zähl-Bias ~8 %):** Gegen das **ZIEL ~2.000 W** planen, NICHT gegen den Boden. Zähl-Werkzeuge liegen ~8 % auseinander. Wer auf 1.800 schreibt, landet leicht darunter. Kurze, dichte Chunks mit hohem Mehrwert statt Wortmasse: Porträts je 2–4 Sätze, FAQ auf **12–14** auswählen (aus den 17 Kandidaten in §5), Tabellen tragen die Vergleichsdichte. **Überholt seit Lauf 1 (2026-10-21): FAQ-Ziel = die 10 bestehenden FAQ im Modul, keine neuen, siehe §9c/§9d.**

**Gewinnbarkeit (Portalanteil):** `signale.json` führt den Portalanteil der Top-10 als **unbelegt**. Die Engine-SERP (US-basiert, nicht Google.de) zeigt **keinen Handwerksbetrieb** unter den 7 Treffern: 3 Baumärkte (toom, obi, bauhaus) und 4 Ratgeber-Publisher (heimwerker, hausjournal, sanier, utopia). Misst der Montagslauf für dieses Keyword ≥ 80 %, gilt die Seite als nicht gewinnbar. Dann vor dem Authoring neu entscheiden.

### SERP-Tiefe (Recherchebeleg der Engine)
- **Messbasis:** 5 Treffer sind gemessen: sanier ~1.300, heimwerker ~9.000, hausjournal ~3.000, toom ~2.650 und utopia ~850. Nicht messbar waren obi.at (404) und bauhaus.at (403).
- **Wie belastbar die Zahlen sind:** Die Wortzahlen sind Schätzungen aus der Fetch-Zusammenfassung. Die Suche lief US-basiert, das Ranking entspricht also nicht Google.de. Ein Featured Snippet ließ sich nicht prüfen.
- **Nachfrage:** „Holzarten Möbel" hat ein Suchvolumen von 880 pro Monat bei 1,00 € CPC. Der Wettbewerbsindex 100 bezieht sich auf Ads und sagt nichts über den organischen Wettbewerb.
  - Nebenkeywords aus der keyword-map: „Massivholz Möbel Vor- und Nachteile", „MDF vs Spanplatte Möbel", „Eiche Buche Nuss Möbel Vergleich", „Holz Küche welches Material".
  - Laut pipeline.yml führt kein anderes Map-Keyword „Holzarten". Es gibt also keine Kannibalisierung.
- **Woraus die Konkurrenz ihre Tiefe holt:**
  - Porträts je Holzart (heimwerker als Lexikon mit 13 Arten).
  - Systematik: Laub/Nadel, Hart/Weich, Kern/Splint (toom).
  - Pro-Listen „heimisch vs. tropisch", Kombinationen und Pflege (hausjournal).
  - Dauerhaftigkeit außen/innen (sanier).
  - **Kaum ein Top-Treffer hat echte Tabellen.** Genau hier differenzieren wir.
- **Untertyp:** Vergleichs-/Orientierungs-Ratgeber. Der Struktur-Fokus aus Playbook §3 ist Orientierung, kein Gate (DEPTH.md).
  - Die Tiefe entsteht aus 3 Tabellen, einem Fehlerblock und FAQ.
  - Die Lexikon-Länge von heimwerker nicht nachbauen. Porträts kompakt halten, je 2–4 Sätze plus Tabellenzeile.
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList`.
  - `HowTo` nur, wenn der Entscheidungsweg (§3, Aufgabe 1) als sichtbare nummerierte Schrittfolge gebaut wird. Dann 1:1.
  - Kein `Product`, `Service` oder `Offer`.
- **Vorschläge für Title, H1 und Meta:**
  - Title: „Holzarten für Möbel: Eiche, Buche, Nussbaum im Vergleich" (56 Zeichen, Gate-Länge prüfen).
  - H1 als Frage: „Welche Holzart passt zu welchem Möbel?"
  - Meta: „Eiche, Buche, Nussbaum oder Kiefer? Härte, Optik und Pflege der wichtigsten Möbelhölzer, dazu Massivholz, Furnier, MDF und Spanplatte ehrlich verglichen."
  - Kein Geo-Limiter in die Meta (laut Memory hemmt er die Klickrate).

## 2 · Intent & Job-to-be-done (was will der Nutzer sehen/tun)
**Intent:** I (informational), Recherchephase vor Möbelkauf oder Maßanfertigung.

**JTBD:** „Ich will verstehen, welches Holz bzw. welches Material (Massivholz, Furnier, MDF, Spanplatte) zu Nutzung, Optik, Pflegeaufwand und Budget meines Möbels passt. Am Ende will ich eine klare Empfehlung je Möbeltyp und wissen, was ich im Beratungsgespräch fragen muss."

**Micro-Intents, alle zu bedienen:**
1. Welche Holzart passt zu meinem Möbel: Eiche, Buche oder Nussbaum? (Entscheidung nach Möbeltyp)
2. Wie hart und kratzfest ist welche Holzart, etwa für Esstisch oder Küche?
3. Wie sieht sie aus? Farbe, Maserung, Nachdunkeln.
4. Weichholz (Kiefer, Fichte) oder Hartholz?
5. Massivholz, Furnier, MDF oder Spanplatte: wann was?
6. Welche Holzart für Küche und Schrank nach Maß?
7. Öl, Wachs oder Lack, und wie pflege ich das?
8. Was kostet welche Holzart? Nur über Kostentreiber beantworten, siehe §8.
9. Nachhaltigkeit, Herkunft und Schadstoffe.

**Erfolgskriterium:** Nach dem Lesen kann der Nutzer
- die Holzart nach Optik und Beanspruchung eingrenzen,
- je Möbelteil begründet zwischen Massiv, Furnier und Platte wählen,
- den Pflegeaufwand einschätzen,
- typische Fehler vermeiden.

**Ton (Playbook §7):** lehrend, „Sie", neutral, gut scanbar. Die Fast-Stimme kommt nur im Praxis-Einschub und im Soft-CTA. Keine Gedankenstriche in der Copy (Konvention aus leistungen.ts/BRAND_VOICE). Ehrlichkeit gezielt einsetzen: offen sagen, wann eine Platte besser ist als Massivholz.

**TL;DR-Kern (40–60 W, oben, zitierfähig):**
- Für stark genutzte Möbel wie Esstisch oder Küchenfront: harte Laubhölzer (Eiche, Esche, Buche).
- Für warme, dunkle Töne Nussbaum und Kirsche, für helle Töne Ahorn und Birke.
- Kiefer und Fichte sind weich und leicht.
- Für Korpusse und Lackfronten sind Furnier, MDF oder beschichtete Spanplatte oft die formstabilere Wahl.

## 3 · Nötige Antworten nach Leseraufgabe; Vergleichsseiten nur als interne Hinweise
Reihenfolge = Seitenaufbau.

**Aufgabe 1: „Schnell zur Richtung"**
- Gleich nach dem TL;DR kommt **Tabelle A: Entscheidung nach Möbeltyp** (Möbel | empfohlene Holzarten/Materialien | Oberfläche | worauf achten):

| Möbel | Empfehlung | Oberfläche | Worauf achten |
|---|---|---|---|
| Esstisch, täglich genutzt | Massiv oder Furnier in Eiche, Esche, Buche | geölt (punktuell ausbesserbar) oder lackiert (fleckunempfindlicher) | Nadelholz nur, wenn Gebrauchsspuren gewollt sind |
| Küchenfronten | Lack auf MDF, Dekor/Schichtstoff, Echtholzfurnier, Massiv-Rahmenfront | je nach Material | Dampf am Geschirrspüler, Spüle; die **Kante** entscheidet |
| Holz-Arbeitsplatte | Eiche, Buche (ggf. Esche) als Massiv-/Leimholzplatte | geölt, regelmäßig nachpflegen | stehendes Wasser an Spüle und Kochfeld |
| Korpus Einbau-/Kleiderschrank | beschichtete Spanplatte oder Platte | Dekor/Melamin | formstabil; Holzwirkung über Furnier- oder Massivfronten |
| Bücherregal, lange Böden | Multiplex, Tischlerplatte oder Massivholz in ausreichender Stärke | frei | Fichte/Kiefer nur bei kurzen Spannweiten. **Keine Zahlen** (siehe §9) |
| Bad | Holz mit geschlossener Oberfläche oder Platte mit Kantenschutz | Lack/Versiegelung | nur Kurzabsatz, Tiefe gehört zur Bad-Seite (§6) |
| Kinderzimmer | harte Laubhölzer oder robuste Dekore | emissionsarme Oberflächen | Emissionen siehe Aufgabe 7 |

- Interner Hinweis: Kein Top-Treffer gibt eine Empfehlung je Möbeltyp. Alle zählen nur auf.

**Aufgabe 2: „Holzarten kennen"**
Kompakte Porträts plus **Tabelle B: Holzarten im Vergleich** (Holzart | Laub/Nadel | Härte | Farbe/Maserung | Farbveränderung | passt für | Hinweis).

- **Spalten-Entscheidung:**
  - **Keine Preis-Spalte** (siehe §8).
  - Härte **nur als Stufe** weich / mittel / hart. **Keine Brinell-Zahlen in der Copy** (Normierung 2026-10-06): Die Werte stammen nur aus SERP-/Wettbewerbertexten, schwanken je nach Quelle um mehrere N/mm², und keine Quelle der EXTERNAL_SOURCE_ALLOWLIST belegt sie. Die Härteprüfung darf als Begriff erklärt werden („Eindruckhärte nach Brinell, DIN EN 1534" als Text ohne Link), die Einordnung bleibt qualitativ.
  - Fußnote zur Tabelle: Die Stufen sind allgemeines Holzwissen, sie schwanken je Wuchsgebiet und Schnitt. Keine Fast-Angabe.

| Holzart | Gruppe | Härte (Stufe) | Farbe/Maserung | Veränderung | passt für | Hinweis |
|---|---|---|---|---|---|---|
| Eiche | Laub | hart | hell- bis gelbbraun, deutliche Poren | dunkelt leicht nach, goldener | Tisch, Fronten, Arbeitsplatte | Gerbsäure: Eisen plus Feuchte ergibt dunkle Flecken; Sortierung astrein bis Wildeiche |
| Buche | Laub | hart | hell rötlich, feinporig, gleichmäßig | leicht; gedämpft rötlicher | Tischgestelle, Stühle, Kinderzimmer | arbeitet bei Feuchtewechsel stark; nicht für außen; Kernbuche = Buche mit rotem Kern, lebhafter |
| Esche | Laub | hart | sehr hell, markant gemasert (ähnlich Eiche) | vergilbt leicht | Tische, helle Fronten | zäh-elastisch; Olivesche = dunkler Braunkern |
| Ahorn | Laub | mittel | fast weiß, fein, seidig | vergilbt unter Licht | helle Fronten, Kontraste | fleckempfindlich bei offenporiger Oberfläche |
| Birke | Laub | mittel | hell gelblich, ruhig | vergilbt leicht | skandinavische Möbel | häufig als Furnier bzw. Birke-Multiplex |
| Kirsche | Laub | mittel | rötlich, fein, edel | dunkelt deutlich zu Rotbraun | Wohn-/Esszimmer | in den ersten Monaten Deko umstellen (sonst Lichtschatten) |
| Nussbaum | Laub | mittel | schoko- bis graubraun, lebhaft | hellt eher auf, wird wärmer | repräsentative Möbel, Akzente | europäisch und amerikanisch unterschiedlich im Ton |
| Kiefer | Nadel | weich | gelblich, astig, harzreich | dunkelt stark gelb-orange | Landhaus, Regale | druckempfindlich, Harzaustritt möglich |
| Fichte | Nadel | weich | sehr hell, schlicht | vergilbt | Konstruktion, Rückwände, einfache Regale | für beanspruchte Tischplatten ungeeignet |
| Lärche | Nadel | weich bis mittel | rötlich, starke Jahresringe | dunkelt nach | Landhaus, außen | witterungsbeständigste heimische Nadelholzart (Kernholz) |

**Aufgabe 3: „Systematik verstehen"**
- Laubholz ist nicht automatisch Hartholz (Linde und Pappel sind weich), Nadelholz ist meist weich.
- Kern- vs. Splintholz kurz erklären.
- Wildeiche und Kernbuche sind **Sortierungen bzw. Wuchsmerkmale, keine eigenen Arten**. Das ist ein starkes AEO-Nugget.

**Aufgabe 4: „Massivholz, Furnier oder Platte"**
Erst Begriffe klären:
- **Massivholz:** tragende und sichtbare Teile durchgehend aus Vollholz, meist aus verleimten Lamellen (Leimholz).
- **Echtholz:** Die Oberfläche ist echtes Holz, oft als Furnier auf einer Platte. Typische Verwechslung (PAA, utopia).
- Keine Normnummer nennen (unsicher).

Danach **Tabelle C** (Material | Aufbau | Stärken | Grenzen | typisch bei Maßmöbeln):

| Material | Aufbau | Stärken | Grenzen | typisch bei Maßmöbeln |
|---|---|---|---|---|
| Massivholz | Vollholz/Leimholz | Echtheit, abschleif- und reparierbar | arbeitet, braucht konstruktiven Aufwand | Tischplatten, Rahmenfronten, Griffe |
| Echtholzfurnier auf Träger | Holz in wenigen Zehntelmillimetern | echtes Holzbild, formstabil, durchgehende Maserung über mehrere Fronten | nur begrenzt abschleifbar | Fronten, Schrankwände |
| MDF | homogene Faserplatte | glatt, fräsbar, ideal für Lack (matt/hochglanz) und grifflose Profile | schwer, Ecken stoßempfindlich | Lackfronten |
| Spanplatte beschichtet | Späne + Melamin-Dekor | maßhaltig, robust, pflegeleicht, viele Dekore | offene Kante nimmt Feuchte auf | Korpusse Küche/Schrank |
| Multiplex | kreuzweise Furnierlagen | sehr formstabil und biegesteif, Schichtkante als Design | Kante muss gewollt sein | lange Böden, Designmöbel |
| Tischlerplatte | Stabmittellage + Deckfurnier | leicht, biegesteif | Stäbe können sich abzeichnen | Fach- und Regalböden |

- **Ehrlich sagen:** Für große Flächen, Korpusse und Lackfronten ist Platte oft die bessere Wahl.
- **Die Schwachstelle der Platte ist die Kante.** Das ist die Brücke zur PU-Kantenverleimung (siehe Praxis-Einschub).

**Aufgabe 5: „Oberfläche und Pflege"**
- Vergleich als Liste oder Mini-Tabelle (Optik | Schutz | Reparierbarkeit | Pflege):
  - Öl, Hartwachsöl: offenporig, natürlich, punktuell ausbesserbar, regelmäßig nachölen.
  - Wachs: weniger belastbar.
  - Lack: geschlossen, pflegeleicht, fleckunempfindlicher, lokal schwer reparierbar.
  - Seife: hell, skandinavisch.
- Pflege-Dos und -Don'ts: nebelfeucht wischen, kein Scheuermittel, kein Dampfreiniger, Untersetzer verwenden.

**Aufgabe 6: „Holz arbeitet"**
- Quellen und Schwinden quer zur Faser. Massive Tischplatten nicht starr verschrauben (Langloch, Gratleiste).
- Raumklima gleichmäßig halten, Richtwert 40–60 % relative Luftfeuchte als allgemeiner Wohnraum-Richtwert.
- Abstand zu Heizkörper und Kamin; Fußbodenheizung trocknet die Luft.
- Holzfeuchte nur qualitativ: technisch auf beheizte Wohnräume getrocknet. Keine Prozentzahl als Fast-Wert.

**Aufgabe 7: „Gesundheit und Herkunft"**
- Formaldehyd stammt aus Bindemitteln von Holzwerkstoffen.
- **Seit 6. August 2026 gilt EU-weit für Möbel und Erzeugnisse auf Holzbasis ein Prüfkammer-Grenzwert von 0,062 mg/m³** (REACH Anhang XVII, Eintrag 77). Beleg siehe 7b.
- Neue Möbel in den ersten Tagen und Wochen häufiger lüften.
- Heimisch vs. tropisch: kurz und neutral, z. B. Teak als witterungsbeständiges Tropenholz. Herkunftsnachweis beim Kauf erfragen.
- Siegel nur generisch („Herkunftssiegel für nachhaltige Forstwirtschaft"), **ohne FSC/PEFC-Namen** (siehe §8).

**Aufgabe 8: „Holzarten kombinieren"** (PAA)
- Ein Leitholz plus höchstens 1–2 Ergänzungen.
- Unterton abstimmen: warm (Kirsche, Nussbaum, geölte Eiche) vs. kühl (Esche, Ahorn, Birke).
- Klarer Kontrast statt „fast gleich".
- Eine lebhafte plus eine ruhige Maserung.
- Den Boden als Bezugsfläche nehmen.

**Aufgabe 9: „Typische Fehler"** (Playbook-MUSS, 6–8 Punkte)
- Holzart nur nach Foto oder Muster wählen und das Nachdunkeln ignorieren.
- Weiches Nadelholz für den Familien-Esstisch.
- Massivholz für jede Fläche verlangen.
- Massive Platte starr befestigen.
- Möbel direkt an Heizquellen stellen.
- Eiche mit Eisen und Feuchte kombinieren.
- „Echtholz" für „Massivholz" halten.
- Geölte Fläche nie nachpflegen.
- Zu viele Holztöne mischen.
- Bei Plattenmöbeln die Kante übersehen.

**Praxis-Einschub (MUSS, E-E-A-T)** – nur belegte Fähigkeiten, keine Anekdote:
- Eigenfertigung in Espelkamp (Fertigung rund 1.000 m², Homag-Technik).
- Plattenwerkstoffe und Beschläge wechseln je Projekt.
- PU-Kantenverleimung verschließt die Kante fugenlos und feuchtigkeitsbeständig.
- 3D-Planung, kostenloses Aufmaß.
- „Ungewöhnliche Materialkombinationen" möglich.

**Soft-CTA:** Möbelplaner als Vorbereitung der persönlichen Planung; Beratung per Telefon oder vor Ort; Kontaktformular als Hauptziel.

## 4 · Begriffe und Entitäten als Recherchehinweise; keine Pflichtliste zum Abhaken
- **Holzarten:**
  - Kern: Eiche, Buche, Nussbaum, Esche.
  - Ergänzend: Ahorn, Kirsche/Kirschbaum, Kiefer, Fichte, Birke, Lärche.
  - Sortierungen: Kernbuche, Wildeiche, Olivesche.
  - Tropenholz nur Teak, einmal und neutral.
- **Systematik:** Laubholz/Nadelholz, Hartholz/Weichholz, Kernholz/Splintholz, Brinell-Härte, Maserung, Poren, Astigkeit, Farbton/Nachdunkeln, Dauerhaftigkeit (DIN EN 350 als Text).
- **Materialien:** Massivholz, Vollholz, Leimholz, Echtholz, Furnier/Echtholzfurnier, MDF, Spanplatte, Dekor/Melamin, Schichtstoff/HPL, Multiplex/Schichtholz, Tischlerplatte.
- **Oberfläche:** Öl, Hartwachsöl, Wachs, Lack (matt/hochglanz), Seife, Oberflächenbehandlung, Kratzfestigkeit.
- **Physik:** Arbeiten des Holzes, Quellen und Schwinden, Holzfeuchte, Raumklima, Fußbodenheizung.
- **Gesundheit:** Formaldehyd, REACH, Emissionen, Lüften.
- **Kosten:** nur „Kostentreiber" (Sortierung, Stärke, Massiv vs. Furnier, Verarbeitungsaufwand), keine Relationen.
- **Fast-Entitäten, konsistent benennen:** Fast Systemmöbel, Meisterbetrieb, Espelkamp, Ostwestfalen-Lippe, Eigenfertigung, PU-Kantenverleimung, 3D-Planung, kostenloses Aufmaß, Möbelplaner.
- **Bewusst NICHT verwenden:** FSC, PEFC (FACTS ❌, Code-Gate-Risiko), „Kantenverleimung" ohne „PU", „wasserfest".

## 5 · Offene Nutzerfragen, soweit sie nach dem Haupttext noch eine Antwort brauchen
FAQ mit mindestens 10, Ziel 12–14. Antworten 2–4 Sätze, jede für sich allein zitierfähig. **Überholt seit Lauf 1 (2026-10-21): Nr. 5, 6 und 9 entfallen (Tabelle A/B und Fehlerkarten tragen sie), Ziel = die 10 bestehenden FAQ, siehe §9c/§9d.**
1. **Welches Holz ist am besten für Möbel?** Es gibt kein bestes Holz, die Beanspruchung entscheidet. Harte Laubhölzer für stark genutzte Flächen, dazu die Optik nach Farbton.
2. **Welche Holzarten sind für Möbel geeignet?** Heimische Laubhölzer (Eiche, Buche, Esche, Ahorn, Birke, Kirsche, Nussbaum) und Nadelhölzer (Kiefer, Fichte, Lärche), zusätzlich Furnier auf Holzwerkstoffen.
3. **Was ist der Unterschied zwischen Massivholz, Vollholz und Echtholz?** Massivholz: durchgehend Holz, auch verleimt. Vollholz: Holz am Stück. Echtholz: echte Holzoberfläche, oft Furnier.
4. **Welches ist das härteste Holz unter den gängigen Möbelhölzern?** Esche, Eiche und Buche. Fichte und Kiefer sind deutlich weicher. Nur als Stufe, keine N/mm²-Werte (siehe §3 Aufgabe 2).
5. **Welche Holzart eignet sich für einen Esstisch?** Eiche, Esche oder Buche. Geölt ist ausbesserbar, lackiert ist fleckunempfindlicher.
6. **Welches Holz eignet sich für Küchenfronten und Arbeitsplatten?** Holzfokus. Bei Arbeitsplatten Eiche/Buche mit Pflegehinweis, bei Fronten die Kante als Knackpunkt. Weitere Materialien nicht vertiefen (gehört zu kueche-planen).
7. **Ist Furnier schlechter als Massivholz?** Nein, es ist anders: formstabiler, echtes Holzbild, nur begrenzt abschleifbar.
8. **MDF oder Spanplatte: Was ist der Unterschied?** MDF ist homogen und lackierbar, Spanplatte beschichtet und maßhaltig für Korpusse. Bei beiden entscheidet die Kante.
9. **Wie stark dunkeln Kirsche, Eiche und Nussbaum nach?** Kirsche stark, Eiche leicht, Nussbaum hellt eher auf. Gegenstände in den ersten Monaten umstellen.
10. **Was bedeutet Wildeiche oder Kernbuche?** Sortierung bzw. Farbkern mit Ästen und Farbspiel, keine eigene Baumart.
11. **Muss ich Massivholzmöbel ölen oder lackieren?** Kurzentscheidung nach Nutzung, Pflegebereitschaft und Reparierbarkeit.
12. **Welche Holzarten passen zusammen?** Leitholz, Unterton, Kontrast, Maserung.
13. **Reißt Massivholz bei Fußbodenheizung?** Ein Risiko besteht bei sehr trockener Luft. Gleichmäßiges Raumklima und eine Konstruktion, die das Arbeiten erlaubt.
14. **Geben Spanplatte und MDF Schadstoffe ab?** Formaldehyd aus Bindemitteln; EU-Grenzwert seit 6.8.2026; lüften.
15. **Welches Holz eignet sich für Gartenmöbel?** Kurz und allgemein: Eichen-Kernholz, Lärche, Robinie, Teak. **Kein Fast-Angebot formulieren.**
16. **Was kostet eine Holzart bei Maßmöbeln?** Kein Preis, keine Rangfolge. Kostentreiber nennen: Sortierung, Stärke, Massiv oder Furnier, Fläche, Verarbeitung. Belastbar wird es erst im individuellen Angebot nach dem kostenlosen Aufmaß.
17. **Welche Materialien verarbeitet Fast Systemmöbel?** Massivholz und branchenübliche hochwertige Plattenwerkstoffe, je nach Projekt. Welche Holzart passt, klären wir in der Beratung. **Keine Holzart-Namen.**

## 6 · Gaps & unser Winkel (wo Fast überholt) + Negativ-Abgrenzung lt. Playbook
**Gaps, die die Konkurrenz offen lässt:**
- **Empfehlung je Möbeltyp statt Aufzählung** (Tabelle A).
- **Ehrlichkeit bei Plattenwerkstoffen:** wann MDF, Spanplatte oder Multiplex besser sind. Kein Wettbewerber traut sich das.
- **Maßmöbel-Bezug:** Korpus vs. Front vs. Platte, Kante als Schwachstelle.
- **Arbeiten des Holzes in der Praxis:** Befestigung, Heizung, Raumklima.
- **Aktuelle Rechtslage Formaldehyd** (seit 08/2026). Bei keinem Top-Treffer vorhanden, dadurch Aktualitätsvorsprung.
- **Echte Tabellen:** Härte als Stufe, Farbveränderung, Einsatz.

**Unser Winkel:**
- „So erklärt es ein Meisterbetrieb, der selbst fertigt." Eigenfertigung Espelkamp/OWL, Plattenwerkstoffe je Projekt, PU-Kantenverleimung als Antwort auf die Kanten-Schwachstelle, 3D-Planung, kostenloses Aufmaß.
- Holzwissen großzügig verschenken. Das Fast-Sortiment nicht über Namen behaupten (§9).

**Negativ-Abgrenzung:**
- **Kein Verkaufstext:** kein starker CTA, kein Service-/Product-Schema (Playbook §11).
- **Kein DIY- oder Lexikon-Content:** keine Bauholz-, Brennholz-, Parkett- oder Terrassen-Tiefe, keine Heimwerker-Bearbeitung (Sägen, Schleifen). Das sind sanier/heimwerker-Muster.
- **Holz im Bad** nur 2–3 Sätze. Die Tiefe gehört zur geplanten `/badmoebel-nach-mass/badmoebel-massivholz/` (Material-Deep-Dive laut Cluster-Map badmoebel).
- **Arbeitsplatten aus Naturstein, Keramik oder Kompaktplatte** nicht hier, Küchenplanung gehört zu `/kuechen-nach-mass/kueche-planen/`.
- **Keine Kostenrechnung.** Kosten gehören zu den Kosten-Ratgebern (Küche, Einbauschrank).
- **Kein „Maßmöbel vs. Möbelhaus"-Vergleich.** Der gehört zu `/ratgeber/massmoebel-vs-von-der-stange/` (seit 2026-10-06 `marke: parken`, unbelegte Nachfrage; Thema trotzdem hier nicht aufmachen).
- **Keine Formulierungen wiederverwenden:**
  - home.ts: „Echtholz, Furnier oder lackierte Front …"
  - kleiderschrank: „Dekor ist günstiger als …"
  - badmoebel: „liegen unter Massivholz …"
  - Grund: Korpus-Dedup, außerdem verstoßen die Preisrelationen gegen kundenwissen.

## 7 · Interne Links (rein/raus, Anker) lt. internal-linking.md — PFLICHT bei Produkt/Ratgeber/Artikel: ≥ 1 gebautes Geschwister (gleicher Cluster) im Fließtext verlinken UND in ≥ 1 indexierter Geschwister-Seite einen Rücklink einplanen (Quelle + Anker nennen; Budget der Quelle prüfen, bei vollem Budget eine Karte/einen schwächeren Link tauschen)

**Graph-Registrierung (Integration)** in `src/lib/seo/linking-rules.ts`:
- `/ratgeber/` ist **nicht im Graph**. Der Index ist laut Ben-Entscheidung vom 2026-08-07 geparkt, bis die Artikel-Schicht steht und 5+ Artikel live sind.
- Neu anlegen:
  - `{ slug: "/ratgeber/", type: "pillar-hub", silo: "ratgeber", audience: "neutral", parent: "/", built: false }`
  - `{ slug: "/ratgeber/holzarten-materialien-moebel/", type: "ratgeber-pillar", silo: "ratgeber", audience: "neutral", parent: "/ratgeber/", built: true, contentModule: "holzarten-materialien-moebel" }`
  - Dazu `sitemap.ts`.
- **Warum `neutral`:** keine Cross-Silo-Warnungen bei Links in mehrere Privat-Cluster, und die Seite erscheint nicht als „Leistung" auf `/leistungen/`.
- **Warum `ratgeber-pillar`:** Budget 8, minInline 3, MIN_INBOUND 3, keine skip-hub-level-Prüfung. `cluster-article` würde bei Links auf Produktseiten anderer Cluster warnen und hat nur Budget 6.
- **Parent-MUSS** läuft als Backlog, das ist kein Fehler.
- **Breadcrumb:** Start → Holzarten, „Ratgeber" höchstens als Text. **Kein Link auf `/ratgeber/`**, das wäre ein dead-link-Fehler. In internal-linking.md eine Backlog-Zeile ergänzen: „Breadcrumb/Up-Link → `/ratgeber/`, sobald der Index gebaut ist".
- **Alternative B**, falls ein klickbarer Breadcrumb gewünscht ist: `parent: "/moebel-nach-mass/"`, ebenfalls `audience: "neutral"`. Dann verlangt der Hub den Link (MUSS own-children). Nachteil: Beim Index-Launch muss der Parent umgehängt werden.
- **Neues ANCHORS-Set:**
  - exact: „Holzarten für Möbel"
  - partial: „Holzarten im Vergleich", „Massivholz, MDF und Spanplatte im Vergleich", „Möbelholz und Plattenwerkstoffe"
  - brand: „Fast Systemmöbel Holzarten-Ratgeber"
  - descriptive: „welches Holz zu welchem Möbel passt", „Ratgeber Holzarten und Materialien"

**Geschwister-Pflicht:** Unter `/ratgeber/` ist kein Geschwister gebaut. Von den übrigen 9 `/ratgeber/`-Slugs sind 6 per 301 auf Silo-Seiten konsolidiert (redirects.md), die anderen stehen im Backlog. **Damit entfällt die Pflicht automatisch** (internal-linking.md). Ersatz sind drei beidseitige Paare mit thematisch passenden gebauten Seiten (unten), die zugleich MIN_INBOUND 3 erfüllen.

**Ausgehend (Budget 8/8, mind. 3 Inline-Marker im Fließtext):**

| # | Ziel | Platzierung | Anker | Rolle |
|---|---|---|---|---|
| 1 | `/moebel-nach-mass/` | Einleitung oder Fazit (Holz wird mit dem Möbel geplant) | „Möbel nach Maß" | thematischer Up-Link zur Leistung |
| 2 | `/kuechen-nach-mass/` | Küchenzeile in Tabelle A bzw. Küchen-Absatz | „maßgefertigte Küche" | Leistung |
| 3 | `/einbauschraenke-nach-mass/kleiderschrank-nach-mass/` | Korpus/Platte (Aufgabe 4) | „Kleiderschrank vom Tischler" | Paar |
| 4 | `/wohnmoebel-nach-mass/buecherregal-nach-mass/` | Multiplex/Tischlerplatte, lange Böden | „Bücherregal nach Maß" | Paar |
| 5 | `/badmoebel-nach-mass/` | Bad-Kurzabsatz | „Badmöbel vom Tischler" | Paar; auf `badmoebel-massivholz` umhängen, sobald gebaut |
| 6 | `/moebelplaner/` | Soft-CTA, als Vorbereitung framen | „Möbelplaner" | MUSS |
| 7 | `/kontakt/` | Soft-CTA bzw. Praxis-Einschub | „Beratungsgespräch vereinbaren" | SOLL |
| 8 | extern eur-lex | siehe 7b | „Verordnung (EU) 2023/1464" | Beleg (zählt ins Budget) |

- **Nicht verlinken:**
  - `kueche-planen` (Budget, Überlappung)
  - Gewerbe-Seiten (Fokus Privat)
  - `/` und Legal

**Eingehend (Rücklinke, MIN_INBOUND 3)**
Budgets geschätzt als eindeutige Body-Ziele ohne Breadcrumb `/` plus externe Links. Mit `npm run audit:links` gegenprüfen. Anker möglichst in bestehende Sätze einbauen (prop-Längen).

| Quelle | Body jetzt/Budget | Stelle | Anker |
|---|---|---|---|
| `/badmoebel-nach-mass/` (Cluster) | ~7/10 | FAQ „Welches Material eignet sich für Badmöbel im Feuchtraum, Massivholz oder MDF?" | „Massivholz, MDF und Spanplatte im Vergleich" |
| `/wohnmoebel-nach-mass/buecherregal-nach-mass/` (Produkt) | ~4/7 | UspHighlight-Body „Korpus und Böden fertigen wir aus Massivholz, MDF oder beschichteten Platten" | Anker auf genau diese Materialnennung |
| `/einbauschraenke-nach-mass/kleiderschrank-nach-mass/` (Produkt) | ~5/7 | Material-Section „…zwischen Dekor, Echtholzfurnier und Lack" oder FAQ zu Materialien | „Ratgeber Holzarten und Materialien" |
| optional Puffer: `/einbauschraenke-nach-mass/` oder `/wohnmoebel-nach-mass/` | ~8/10 bzw. ~7/10 | Material-Erwähnung | partial aus Set |

- **Nicht als Quelle nutzen:**
  - `/moebel-nach-mass/`: skip-hub-level-Warnung, weil der Hub auf eine Ebene-3-Seite unter fremdem Parent zeigen würde. Nur bei Alternative B.
  - `/`: skip-hub-level.
  - `garderobe-nach-mass`: 7/7 voll.
  - `kueche-planen`: über Budget, wegen 2 externer Links.
- Vorher prüfen, ob das jeweilige Prop Inline-Marker rendert (`renderInlineLinks`).

**Backlog-Zeilen ergänzen** (beidseitig, sobald gebaut):
- `/ratgeber/massmoebel-vs-von-der-stange/`, Anker „Maßmöbel oder Möbel von der Stange" (Zeile seit 2026-10-06 geparkt, Backlog-Eintrag nur vormerken)
- `/badmoebel-nach-mass/badmoebel-massivholz/`, Anker „Badmöbel aus Massivholz"
- `/ratgeber/`-Index (Breadcrumb und Up-Link)

## 7b · Belege (Outbound): Norm-/Vorschrift-/Messwert-Angaben mit max. 2 Links je Seite NUR auf Quellen der EXTERNAL_SOURCE_ALLOWLIST (src/lib/seo/linking-rules.ts: gesetze-im-internet.de, baua.de, dguv.de, eur-lex.europa.eu, rki.de, bundesgesundheitsministerium.de, amk.de, amk-ratgeber-kueche.de, verbraucherzentrale.de, nullbarriere.de); Ankertext = Name der Quelle; nie Hersteller/Wettbewerber; nichts erfinden; kostenpflichtige Normen (DIN/EN/ISO) als Text ohne Link

**1 Link (Budget voll mit 7 intern + 1 extern):**
- **„Verordnung (EU) 2023/1464"** → `https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32023R1464`
  - Aussage: REACH Anhang XVII, neuer Eintrag 77. Formaldehyd-Prüfkammer-Grenzwert **0,062 mg/m³ für Möbel und Erzeugnisse auf Holzbasis**, für andere Erzeugnisse 0,080 mg/m³. **Gilt seit 6. August 2026**, für Fahrzeuge ein Jahr später.
  - Inhalt per IHK/UBA-Treffer bestätigt. Die eur-lex-Seite rendert im Fetch nicht (JS), also die URL vor dem Einbau im Browser prüfen.
  - Formulierung als Rechtslage für alle Hersteller, **keine Aussage über die Messwerte von Fast-Platten**.

**Alternative**, nur wenn ein interner Link entfällt:
- **„Verbraucherzentrale"** → `https://www.verbraucherzentrale.de/wissen/umwelt-haushalt/umweltschutz-fuer-kinder/wie-sie-schadstoffe-im-kinderzimmer-und-ihrem-zuhause-vermeiden-7898` (Stand 07.10.2025).
- Wörtlich belegt sind dort:
  - „Bevorzugen Sie Möbel aus Massivholz. Schadstoffe verstecken sich häufig in Holzwerkstoffen …"
  - „Wachse, Hartöle, Holzöle und Lacke können … Oxime oder Lösemittel enthalten."
- Passt zu den Aufgaben 5 und 7. Den Satz zu Holzwerkstoffen nur ausgewogen einsetzen (Rechtslage seit 2026 dazu).

**Normen nur als Text:** Eindruckhärte nach Brinell (DIN EN 1534), Dauerhaftigkeit gegen Pilze (DIN EN 350).

**Nicht verlinken und nicht namentlich zitieren:** sanier, heimwerker, hausjournal, toom, utopia, obi, bauhaus, baunetzwissen, UBA, IHK, Hersteller von Platten, Ölen oder Beschlägen.

## 8 · Do-NOT-claim-Liste (❌ aus FACTS.md, konkret für dieses Thema)
- **Fast-Sortiment nach Holzart:** NICHT „Wir verarbeiten Eiche, Nussbaum …". Konkrete Holzarten sind laut FACTS nicht belegt, kundenwissen sagt „keine Angaben". Nur „Massivholz und branchenübliche hochwertige (Platten-)Materialien, je nach Projekt".
- **Exotische Hölzer als Alleinstellung:** NICHT. Teak nur als allgemeines Beispiel.
- **FSC/PEFC namentlich:** NICHT, auch nicht als allgemeine Erklärung (das Code-Gate meldet FSC). Generisch formulieren.
- **„Regionale Holzherkunft" / „Holz aus OWL":** NICHT.
- **„Umweltzertifiziertes Holz aus nachhaltigem und CO2-neutralem Anbau":** FACTS ✅ (Website-Aussage) und damit belegt, auch wenn kundenwissen allgemein „nicht belegt" sagt. Bei Widerspruch gewinnt FACTS (Rangfolge kundenwissen.md). Nutzung **optional, höchstens 1×, wörtlich**, ohne Siegelnamen und nicht direkt neben der generischen Siegel-Erklärung (Aufgabe 7), sonst stellt sich die Frage „welches Zertifikat?". Die lässt sich nicht beantworten, weil FSC/PEFC gesperrt sind. Weglassen ist ebenso zulässig. Immer nutzbar: Holzreste als Energiequelle, Photovoltaik.
- **Preise:** keine Preise, keine Spannen, keine „ab"-Werte und **keine Relationen** wie „Nussbaum ist teurer als Buche" oder „Dekor günstiger als Furnier" (kundenwissen ratgeber Q3). Keine Preis-Spalte in den Tabellen. Die Möbelplaner-Ausnahme in FACTS gilt nur für die Dachschräge.
- **PU-Kante:** NICHT „wasserfest", kein Tauchtest („24 h unter Wasser"). Nur „fugenlos, feuchtigkeitsbeständig".
- **Keine Fast-Maße:** keine Plattenstärken, Spannweiten, Traglasten oder Holzfeuchte-Prozente als Fast-Spezifikation. **Keine Brinell-Zahlen** (nur Härte-Stufen, siehe §3 Aufgabe 2). 40–60 % relative Luftfeuchte nur als allgemeine Wohnraum-Faustregel, nie als Fast-Wert.
- **Oberflächen bei Fast:** keine Hersteller, keine Ölmarken, keine Aussage wie „wir ölen standardmäßig".
- **Schadstoffe:** keine Emissionswerte oder Siegel für Fast-Produkte („E1", „Blauer Engel" o. Ä. als Fast-Claim).
- **Muster:** kein Musterversand und keine kostenlosen Dekorproben.
- **Geschichte:** NICHT „seit 1996 mit drei Holzarten" (Klon-Content in ueber-uns.ts, nicht belegt), NICHT „1996 in Espelkamp" (es war Rahden-Tonnenheide).
- **Weitere Sperren:**
  - „Meisterbetrieb seit <Jahr>"
  - „5 Jahre Garantie" oder jede Garantiezahl
  - „25+ Jahre"
  - „12+ Mitarbeiter"
  - erfundene Referenzprojekte, Orte oder Anekdoten
- **Nutzbar laut FACTS:**
  - Meisterbetrieb, Espelkamp/OWL
  - Eigenfertigung „alle Teile in Eigenregie"
  - Fertigung rund 1.000 m², Homag-Technik
  - PU-Kantenverleimung
  - 3D-Planung, kostenloses Aufmaß, eigenes Montageteam
  - Ausstellung rund 100 m² in Espelkamp
  - „ungewöhnliche Materialkombinationen"
  - Beschläge und Plattenwerkstoffe je Projekt
  - Holzreste als Energiequelle, Photovoltaik
  - „Sie"-Anrede

## 9 · Offene Punkte / Wissenslücken (was NUR der Kunde weiß; IMMER inkl. Geo-Reichweite „bundesweit oder montage-gebunden?"). Wird NICHT beim Kunden erfragt, sondern vor dem Schreiben gegen FACTS.md + den Antwort-Fundus des Mandanten aufgelöst; alles Unbelegte bleibt Leerstelle und wird nicht behauptet.

> §9 wird nicht beim Kunden nachgefragt (Ben, 2026-07-28). Die Engine hat die Punkte vorsortiert, der Research-Lauf W41 hat sie am 2026-10-06 gegen `kundenwissen.md` + `docs/seo/brand/FACTS.md` (Stand origin/master 4108444) geprüft, mit Quelle versehen und korrigiert. Rangfolge: FACTS gewinnt bei Widerspruch.

### 9a · ✅ Beantwortet — gegen `kundenwissen.md` + `FACTS.md` aufgelöst (2026-10-06, W41 Research)
1. **Geo-Reichweite (Pflicht, explizit):** Das Ratgeber-Wissen gilt überall, die Seite verspricht keine Regionalität. Für die **Umsetzung** gilt: Beratung vor Ort, kostenloses Aufmaß, Einbau und Montage sind **montage-gebunden, ~200 km um Espelkamp** (nennbar: ganz OWL, Espelkamp, Minden, Lübbecke, Osnabrück, Bielefeld). **Lieferung deutschlandweit** bei jedem Produkt, **außer Küchen**: die vermisst und montiert Fast immer selbst, nur im Montagegebiet. Telefonberatung geht ortsunabhängig. → **Writer:** Geo nur im Praxis-Einschub bzw. Soft-CTA, nicht in Title/Meta (Geo-Limiter hemmt die CTR). *(kundenwissen.md § Geo & Service; FACTS „Montagegebiet ~200 km" + „Geo-Reichweite je Leistung" + Küche-Service)*
2. **Material-Grundsatz:** „Massivholz + branchenübliche hochwertige Materialien". Plattenwerkstoffe und Beschläge **wechseln je Projekt**, ohne Herstellernamen. → **Writer:** genau so generisch nennen (FAQ 17), keine Holzart- oder Plattenmarke. *(FACTS „KUNDE BESTÄTIGT: Materialien" + „Beschläge / Plattenwerkstoffe" 2026-10-04; kundenwissen.md § Belege, Referenzen, Material)*
3. **Preise:** strikt individuell. Keine Preise, Spannen, „ab"-Werte und **keine Relationen** zwischen Holzarten oder Materialien. Freigegebene Formulierung (kundenwissen, Wortlaut): „der Preis entsteht aus Material, Geräten und Aufwand"; auf dieser Seite ohne „Geräte" sinngemäß nutzbar; verbindlich wird es im individuellen Angebot nach dem kostenlosen Aufmaß. Termin „nach Aufmaß/Freigabe", keine Wochenzahl. Die Planer-Preisausnahme in FACTS gilt nur mit eigenem Planer-Beleg (bisher nur Dachschräge). → **Writer:** FAQ 16 nur über Kostentreiber. *(kundenwissen.md § Preise & Termine; FACTS „Preise: IMMER individuell")*
4. **Möbelplaner:** als **Vorbereitung der persönlichen Planung** positionieren, nicht als „plan es selbst". Hauptziel ist die Anfrage über das Kontaktformular. Der Planer deckt Schränke, Küche, Bad und Wohnmöbel ab. *(kundenwissen.md § Möbelplaner & Conversion)*
5. **Ausstellung:** rund 100 m² in Espelkamp, nennbar (FACTS ✅, bestätigt 2026-10-04; schlägt das ältere „kein Showroom behaupten" aus kundenwissen § Leistungsumfang). Was dort ausgestellt ist, bleibt offen (→ 9b-4). Beratungswege: Telefon oder vor Ort. *(FACTS „Status / Qualifikation"; kundenwissen.md § Leistungsumfang)*
6. **Machbarkeit:** offen formulieren („alles auf Anfrage", „für jedes Problem gibt es eine Lösung"), keine Positiv-/Negativlisten. *(kundenwissen.md § Leistungsumfang)*
7. **Praxis-Einschub, belegte Bausteine:** Meisterbetrieb (ohne Jahr) · Familienbetrieb in 2. Generation · Eigenfertigung „alle Teile in Eigenregie" · **PU-Kantenverleimung** (fugenlos, feuchtigkeitsbeständig, NICHT wasserfest) · 3D-Planung · kostenloses Aufmaß · eigenes Montageteam · Holzreste als Energiequelle, Photovoltaik. **Fertigung rund 1.000 m² / Homag-Maschinen** ist nutzbar (FACTS Z. 35 + Z. 42: vom Kunden bestätigt 2026-06-05). FACTS Z. 94 führt beides noch als „nicht belegt", das ist ein Altstand im selben Dokument. → **Writer:** auf dieser Seite reicht „Eigenfertigung in Espelkamp". Homag nur nennen, wenn es dem Leser etwas erklärt (Plattenzuschnitt, Kantentechnik), sonst weglassen. „Ungewöhnliche Materialkombinationen" stammt aus dem Küchen-Kontext (FACTS Küche-Service) und darf nur dort stehen (Küchenzeile Tabelle A), nicht als allgemeine Fast-Zusage. *(FACTS Fertigung/Material/Qualität, Nachhaltigkeit, Prozess/Service, Familien-Nachfolge)*
8. **Nachhaltigkeitsclaim „umweltzertifiziertes Holz aus nachhaltigem und CO2-neutralem Anbau":** FACTS ✅ (Website-Aussage, ohne FSC/PEFC). kundenwissen sagt allgemein „nicht belegt"; bei Widerspruch gewinnt FACTS. → **Writer:** optional, höchstens 1×, **wörtlich**, im Praxis-Einschub. Nicht neben die generische Siegel-Erklärung (Aufgabe 7) stellen, kein Siegelname. Weglassen ist ebenso zulässig (§8). *(FACTS § Nachhaltigkeit; kundenwissen.md Rangfolge-Hinweis)*

### 9b · ⬜ Leerstelle — nicht behaupten (je eine Ausweich-Anweisung an den Writer)
1. **Welche Holzarten und Furniere Fast konkret verarbeitet:** unbekannt (FACTS Z. 94 „konkrete Holzarten nicht belegt", kundenwissen „keine Angaben"). → **Writer:** Holzwissen großzügig und allgemein vermitteln, nie als Sortiment rahmen („wir verarbeiten Eiche …" ist verboten). Übergang zu Fast nur so: „Welche Holzart zu Ihrem Möbel passt, klären wir in der Beratung."
2. **Oberflächen bei Fast** (Öl, Hartwachsöl, Lack, Seife): unbekannt. Die badmoebel-Live-Copy „geölt oder lackiert" steht nicht in FACTS. → **Writer:** Oberflächen nur als allgemeinen Vergleich erklären, keine Fast-Standardoberfläche, keine Öl- oder Lackmarke.
3. **Preisrelationen zwischen Holzarten/Materialien:** gesperrt (kundenwissen § Preise). → **Writer:** keine Preis-Spalte, keine Sätze wie „Nussbaum ist teurer als Buche" oder „Dekor ist günstiger als Furnier". Nur Kostentreiber (Sortierung, Stärke, Massiv vs. Furnier, Fläche, Verarbeitung) plus Verweis auf das individuelle Angebot nach kostenlosem Aufmaß.
4. **Muster und Ausstellungsinhalt:** Welche Hölzer, Furniere oder Dekore in der Ausstellung zu sehen sind, ist unbekannt. Musterversand und kostenlose Dekorproben gibt es nicht (kundenwissen § Leistungsumfang). → **Writer:** kein „alle Holzarten vor Ort ansehen", kein Musterangebot. Erlaubt ist: „Oberflächen lassen sich im Beratungsgespräch besprechen."
5. **Bilder je Holzart:** Im Repo gibt es keine Artenfotos (geprüft: `public/images/**` enthält nur Projektbilder, die schon an anderen Seiten hängen, z. B. garderobe-…-eiche, waschtisch-…-eiche). → **Writer/Integration:** keine Artengalerie mit fremden Motiven, keinen Alt-Text für ein unpassendes Bild biegen (bilder.md: der Alt-Text beschreibt das Bild). Seite trägt sich über die Tabellen; ein neues, eigenes Werkstatt-/Musterfoto erst einsetzen, wenn es geliefert wird.
6. **Praxis-Anekdote / Referenzprojekt:** kein freigegebenes Einzelprojekt mit Ort (kundenwissen § Belege). → **Writer:** Einschub nur aus belegten Fähigkeiten (9a-7) bauen, keine Häufigkeiten („viele Kunden wählen …"), keine Projektgeschichte.
7. **Emissions- oder Prüfwerte der von Fast verwendeten Platten:** unbekannt. → **Writer:** nur die allgemeine Rechtslage nennen (Verordnung (EU) 2023/1464, REACH Anhang XVII Eintrag 77, seit 6. August 2026, Beleg §7b). Keine Aussage über Fast-Platten, kein „E1", kein „Blauer Engel", kein „schadstofffrei".
8. **Außen- und Gartenmöbel:** nicht im belegten Leistungsspektrum (FACTS Leistungsspektrum). → **Writer:** FAQ 15 nur allgemein beantworten, ohne Angebot und ohne „machen wir nicht". Alternativ die FAQ streichen, um im Korridor zu bleiben.

**Framing-Auflagen (keine Leerstellen, aber verbindlich):**
- **Allgemeine Zahlen:** keine Brinell-Werte (nur Härte-Stufen, §3 Aufgabe 2). „40–60 % relative Luftfeuchte" ist als allgemeine Wohnraum-Faustregel erlaubt, nie als Fast-Wert. Keine Spannweiten, Traglasten, Plattenstärken oder Holzfeuchte-Prozente. Normen (DIN EN 1534, DIN EN 350) nur als Text ohne Link. *(kundenwissen § Belege: keine Maß-Bandbreiten erfinden)*
- **Rechtslage Formaldehyd** ist ein allgemeiner Fakt mit Allowlist-Beleg (eur-lex). URL vor dem Einbau im Browser prüfen (rendert im Fetch nicht).
- **Integration:** Die Artikel-Schicht `/ratgeber/<slug>/` (Route + Template) existiert auf origin/master noch nicht (`src/app/(site)/ratgeber/` fehlt, Stand 2026-10-06). Laut Strategie v2 §6 ist sie Voraussetzung für Ratgeber-Artikel. Der `/ratgeber/`-Index bleibt geparkt. Node/Breadcrumb/Parent siehe §7, Default Variante A.
- **Gewinnbarkeit:** Portalanteil laut signale.json unbelegt; die Engine-SERP zeigt keinen Handwerksbetrieb (§1). Vor dem Authoring den Montagswert lesen.

**Offene Leerstellen: 8** (9b-1 bis 9b-8): Holzart-/Furnier-Sortiment · Fast-Oberflächen · Preisrelationen · Muster/Ausstellungsinhalt · Bilder je Holzart · Praxis-Anekdote · Emissionswerte Fast-Platten · Außen-/Gartenmöbel. Dazu 4 Framing-Auflagen. Die Leerstellen in REVIEW.md unter „Offene Fakten (nicht behauptet)" ausweisen.

### 9c · Authoring-Lauf 2026-10-21 (W43): Stand vor dem Schreiben
- **Wissensstand erneut gegengeprüft:** FACTS.md (Stand origin/master 45aa605, letzte Änderung Arminia-Loge 2026-10-19) und kundenwissen.md (letzte Änderung Büro-Abschnitt 2026-10-20) enthalten nichts Neues zu Holzarten, Oberflächen, Plattenwerkstoffen oder Emissionen. Keine `inbox/discovery/holzarten-materialien-moebel.md`. 9a/9b gelten unverändert, alle 8 Leerstellen bleiben offen.
- **Gewinnbarkeit:** `signale.json` führt `portalanteil_top10` weiterhin als `null` (unbelegt, kein Wert ≥ 80 %). Kein Stopp-Kriterium erfüllt, prio.mjs hat die Seite gewählt.
- **Artikel-Schicht:** Dieses Paket legt die erste Route unter `/ratgeber/<slug>/` an (`src/app/(site)/ratgeber/holzarten-materialien-moebel/page.tsx`). Template = dieselben Bibliotheks-Sektionen wie der Küchen-Ratgeber `kueche-planen` (MnmHero, SpecTable, SegmentCards, ContrastCols, UspHighlight, MnmMoebelplaner, FaqSection). Der Index `/ratgeber/` bleibt geparkt (Breadcrumb „Ratgeber" nur als Text, Variante A aus §7).
- **Writer-Hinweise zur Struktur (Modul ist fertig gescaffoldet, Keys nicht ändern):**
  - Inline-Links `[Anker](/pfad/)` rendern NUR in: Hero-`intro`, SpecTable-`intro`, SegmentCards-`intro`/`body`, ContrastCols-`intro`/`points`, UspHighlight-`body`, MnmMoebelplaner-`body`, FAQ-`answer`. **SpecTable-Zellen (`values`) rendern keine Links**, dort keine Marker setzen.
  - Gesundheit/Herkunft (Aufgabe 7) und Kombinieren (Aufgabe 8) stehen nur in der FAQ, nicht als eigene Sektion. Der eur-lex-Beleg gehört in die FAQ-Antwort zu Schadstoffen.
  - Tabelle B: Zellen kurz halten (3 bis 8 Wörter), keine Brinell-Zahlen.
  - Dichte-Deckel (prop-laengen gegen `kueche-planen.ts`): Hero-`intro` ≤ ~60 W, `intro` der Tabellen/Karten ≤ ~45 W, Karten-`body` ≤ ~30 W, UspHighlight-/Planer-`body` ≤ ~65 W, FAQ-`answer` ≤ ~60 W.
- **Ergebnis Lauf 1 (Engine `wf_2e7af61b-b88`):** Code-Gates grün, Chefredakteur **pass=false** wegen Wiederholung. Die FAQ zu Esstisch, Küchenfronten/Arbeitsplatte und Nachdunkeln wiederholten Tabelle A, Tabelle B und Fehlerkarten fast wörtlich; die FAQ Bad war missverständlich formuliert. **Korrektur-Hinweis für den Writer:** FAQ nur für Fragen, die Tabellen, Begriffe- und Fehlerkarten NICHT schon beantworten (Kandidaten §5 Nr. 5, 6, 9 entfallen, weil Tabelle A/B und Fehler 1/2 sie tragen). Ziel 10 FAQ. Draft mit beiden Fixes: `research-cache/holzarten-materialien-moebel.draft.md` + `.draft.patch`.

### 9d · Authoring-Lauf 2026-10-22 (W43, Retry): zu erhaltender Bestand
- **Wissensstand erneut gegengeprüft:** FACTS.md unverändert (origin/master weiter 45aa605), kundenwissen.md unverändert seit 2026-10-20, keine `inbox/discovery/holzarten-materialien-moebel.md`. 9a/9b gelten, alle 8 Leerstellen bleiben offen. `portalanteil_top10` weiter `null`.
- **Modul = zu erhaltender Bestand.** `src/lib/content/holzarten-materialien-moebel.ts` enthält nicht Platzhalter, sondern die QC&Fix-Fassung aus Lauf 1 **mit beiden Chef-Fixes eingearbeitet**: FAQ Esstisch, Küchenfronten/Arbeitsplatte und Nachdunkeln gestrichen (13 → 10), FAQ Bad mit eindeutigem Subjekt („Lack oder eine Versiegelung schützen Massivholz …") und klarem Verweis „zeigt unsere Badmöbel-Seite". Der Chefredakteur aus Lauf 1 hat alles Übrige wörtlich abgenommen („Alles Übrige unverändert lassen, es ist abgenommen … Nach den beiden Fixes ist die Seite live-ready").
- **Writer-Auftrag:** Bestand erhalten, nur gezielt nachschärfen, wo eine echte Schwäche bleibt. **Keine neue FAQ einfügen, keine gestrichene FAQ zurückholen**, keine Aussage einer Tabellenzeile oder Fehlerkarte in einer anderen Sektion wiederholen. Reine Copy ~2.280 W liegt im Korridor 1.800–2.300 W; nicht aufstocken.
- **Struktur fix:** 10 FAQ, 7 Zeilen Tabelle A, 10 Zeilen Tabelle B, 6 Zeilen Materialtabelle, 4 Zeilen Oberflächen, 6 Begriffe-Karten, 3 Klima-Karten, 6 Fehlerkarten, je 5 Punkte Pflege. Links: 7 intern + 1 eur-lex = Budget 8/8, keine weiteren Links.

### 9e · Ergebnis Lauf 2 (Engine `wf_c14add4e-166`, 2026-10-22) und Hinweise für den nächsten Lauf
- **Ergebnis:** Code-Gates grün (0 verbotene Claims, 0 Meta, 10 FAQ, 2.709 W Engine-Zählung), Chefredakteur **pass=false** wegen genau eines Satzes: QC&Fix hatte an die FAQ Schadstoffe „Der Wert gilt für jedes Möbel, das in der EU verkauft wird, auch für importierte Ware." angehängt. Laut Chef ist das zu weit gefasst: Eintrag 77 regelt das Inverkehrbringen, nicht den Verkauf, und nimmt Erzeugnisse aus (u. a. mit nur natürlich vorkommendem Formaldehyd, gebrauchte Erzeugnisse). Wörtlich: „Mit Fix 1 ist die Seite live-ready." Die übrigen Änderungen gegenüber dem Bestand (Furnier vs. Dekor, Fußbodenheizung ohne Klima-Dopplung, Begriffe-Karte 1, Fehlerkarte 4) wertet der Chef als Verbesserung.
- **Draft mit den Chef-Fixes:** `research-cache/holzarten-materialien-moebel.draft.md` + `.draft.patch` (überschreiben den Lauf-1-Stand). FAQ Schadstoffe endet wieder mit dem Lüften-Satz aus Lauf 1, Möbelplaner ohne „in ganz OWL und", Alt-Text Möbelplaner „Broschüre mit Produktfotos".
- **Writer-/QC-Hinweis:** In der FAQ Schadstoffe **keinen Satz zum Geltungsbereich** der Verordnung ergänzen (wer, was, Importe, Ausnahmen). Die drei Sätze zu Formaldehyd, Grenzwert und Verordnung sind abgenommen, ebenso der Lüften-Satz. Allgemein: keine neuen Rechtslage- oder Norm-Aussagen über §7b hinaus.
- **Sperre:** Zweiter roter Authoring-Versuch. prio.mjs sperrt die Seite 14 Tage für den Bau.

### 9f · Authoring-Lauf 2026-11-05 (W45, nach Ablauf der Sperre): Bestand sperren statt neu schreiben
- **Wissensstand erneut gegengeprüft:** FACTS.md seit 45aa605 unverändert (origin/master eb711f7). kundenwissen.md zuletzt am 2026-11-03 geändert, aber nur § Ladenbau, nichts zu Holzarten, Oberflächen, Plattenwerkstoffen oder Emissionen. Keine `inbox/discovery/holzarten-materialien-moebel.md`. 9a/9b gelten unverändert, alle 8 Leerstellen bleiben offen.
- **Gewinnbarkeit jetzt gemessen:** `signale.json` führt `portalanteil_top10: 0` (vorher `null`). Kein Stopp-Kriterium, prio.mjs hat die Seite gewählt (Score 1.05, SV 880).
- **Modul = abgenommener Bestand.** `src/lib/content/holzarten-materialien-moebel.ts` ist die Fassung aus Lauf 2 mit allen drei Chef-Fixes. Zwei unabhängige Endabnahmen haben den Text geprüft; Lauf 1 scheiterte an drei FAQ-Wiederholungen (gestrichen), Lauf 2 an genau einem Satz, den QC&Fix neu angehängt hatte (gestrichen). Beide Chefs: „nach dem Fix live-ready".
- **Auftrag an Writer, Humanizer und QC&Fix: Bestand erhalten. Nichts ergänzen.**
  - Ändern nur, wo ein konkreter Fehler besteht (Fakt falsch, Satz missverständlich, Widerspruch zwischen Sektionen). Jede Änderung **ersetzt** einen bestehenden Satz und ist **gleich lang oder kürzer**.
  - **Keine neuen Sätze**, keine neuen Fakten, Zahlen, Beispiele oder Fast-Fähigkeiten. **Keine neuen Aussagen zu Rechtslage, Normen, Geltungsbereich, Ausnahmen, Herkunft oder Siegeln.** Genau so ein angehängter Satz hat Lauf 2 gekostet.
  - Keine FAQ hinzufügen oder zurückholen, keine Sektion verlängern, Links unverändert (7 intern + 1 eur-lex = Budget 8/8).
- **Gesperrte Stellen (wörtlich lassen, nichts anhängen, auch der Humanizer nicht):**
  1. `holzFaq` „Geben Spanplatte und MDF Schadstoffe ab?": alle vier Sätze, inklusive Link „Verordnung (EU) 2023/1464" und Lüften-Satz am Ende.
  2. `holzBegriffe` Karte „Wie Härte gemessen wird" (Brinell, DIN EN 1534 als Text ohne Link, „Stufen statt Zahlen").
  3. `holzKlima` Karte „Raumklima und Heizung" (40 bis 60 % nur als Faustregel für Wohnräume).
  4. `holzWerkstatt` `body`, `stat.value` „1.000 m²", `stat.label`, `imageAlt`. Fertigungsfläche und Homag sind vom Kunden bestätigt (FACTS Z. 36 und Z. 43, 2026-06-05). Die Zeile „Nicht belegt: Fertigungsfläche m², Homag" in FACTS Z. 95 ist ein Altstand im selben Dokument (siehe 9a-7). Nicht streichen.
  5. `holzFaq` „Was kostet eine Holzart bei Maßmöbeln?" und „Welche Materialien verarbeitet Fast Systemmöbel?" (Preis- und Sortiments-Leerstelle, 9b-1/9b-3).
  6. `holzMoebelplaner` `body` (Telefon, „bei uns in Espelkamp oder bei Ihnen vor Ort im Umkreis von rund 200 km", Planer als Vorbereitung).
- **Längen:** Maßgeblich ist `prop-laengen.mjs` gegen `kueche-planen.ts`: `intro` ≤ 64 W, `body` ≤ 70 W, `answer` ≤ 61 W. Der Bestand liegt überall darunter. Die „~"-Werte in 9c sind Richtwerte aus dem Scaffold, **kein Abnahmekriterium**. Reiner Copy-Umfang ~2.335 W im Korridor 1.800–2.300 W (+1,5 %), nicht aufstocken.
- **Bekannt und bewusst so (kein neuer Befund):** Die Fehlerkarte „Holz nur nach dem Muster wählen" fasst die Alterung aus Tabelle B als Warnung zusammen, die Fehlerkarte „Weiches Nadelholz für den Familien-Esstisch" die Härte-Stufe als Fehler. Beide hat Chef 2 abgenommen. Doppelpunkt-Konstruktionen darf der Humanizer abbauen, aber nur außerhalb der gesperrten Stellen.
- **Ergebnis Lauf 3 (Engine `wf_1d3070ed-081`, 2026-11-05):** Code-Gates grün (0 verbotene Claims, 0 Meta, 10 FAQ, 2.684 W Engine-Zählung), **Chefredakteur pass=true** ohne Befunde, Status `OK`. Writer änderte 2 Props, der Humanizer 28 (rein sprachlich, auch in gesperrten Stellen), QC&Fix setzte alle gesperrten Stellen wörtlich auf den Bestand zurück. Final gegenüber Bestand: 18 Props sprachlich geglättet, keine neuen Sätze mit neuem Inhalt, keine neue Zahl, keine Link-Änderung. Paket `outbox/2026-11-05-holzarten-materialien-moebel`.
