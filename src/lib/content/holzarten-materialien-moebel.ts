/**
 * Content for the `/ratgeber/holzarten-materialien-moebel/` page: the
 * "Holzarten für Möbel" Ratgeber, the first article under `/ratgeber/<slug>/`
 * (Strategie v2 §6). The `/ratgeber/` index is parked, so the breadcrumb shows
 * "Ratgeber" as plain text. Built from the same shared library sections as the
 * Küchen-Ratgeber `kueche-planen` (MnmHero, SpecTable ×4, SegmentCards ×3,
 * ContrastCols, UspHighlight, MnmMoebelplaner, FaqSection) so each section
 * carries one topic (ARCHITECTURE.md §1.1). Informational/AEO with a soft CTA:
 * Entscheidung nach Möbeltyp, Holzarten-Vergleich, Begriffe, Massivholz vs.
 * Platte, Oberflächen, Pflege, Raumklima, typische Fehler.
 * Copy von der Authoring-Engine (Writer → Humanizer → QC&Fix → Chefredakteur),
 * Lauf 1 vom 2026-10-21: Code-Gates grün, Chefredakteur pass=false wegen
 * Wiederholung (FAQ zu Esstisch, Küche und Nachdunkeln gestrichen, 13 → 10).
 * Lauf 2 vom 2026-10-22: Code-Gates grün, Chefredakteur pass=false wegen eines
 * Rechtslage-Satzes in der Formaldehyd-FAQ. Lauf 3 vom 2026-11-05 (Bestand mit
 * den Chef-Fixes, heikle Stellen im Kit §9f gesperrt): Code-Gates grün,
 * Chefredakteur pass=true.
 *
 * Faktentreue (FACTS.md + kundenwissen.md, Kit §8/§9): Holzwissen ist
 * allgemeines Fachwissen, kein Fast-Sortiment. Keine Holzart-, Öl- oder
 * Plattenmarken als Fast-Angebot, keine Preise oder Preisrelationen, keine
 * Brinell-Zahlen, keine Emissionswerte für Fast-Platten, kein Musterversand.
 * PU-Kante nur „fugenlos, feuchtigkeitsbeständig". 40 bis 60 % Luftfeuchte nur
 * als allgemeine Faustregel. Formaldehyd-Grenzwert als Rechtslage für alle
 * Hersteller, belegt mit der Verordnung (EU) 2023/1464 (eur-lex).
 * Brand voice: Sie-Anrede, keine em-dashes (BRAND_VOICE.md).
 *
 * Inline-Links rendern in Hero-`intro`, SpecTable-/SegmentCards-/ContrastCols-
 * `intro`, Karten-`body`, ContrastCols-`points`, UspHighlight-/Planer-`body` und
 * FAQ-`answer`. SpecTable-Zellen (`values`) rendern KEINE Links.
 *
 * Bilder: Bestandsfotos aus dem Repo, Alt-Texte beschreiben das Motiv
 * (docs/seo/bilder.md). Artenfotos gibt es nicht (Kit §9b-5), Vorschläge siehe
 * REVIEW.md des Pakets.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/ratgeber/holzarten-materialien-moebel/";
const PUBLISHED = "2026-11-05";

export const holzMeta = {
  metaTitle: "Holzarten für Möbel: Eiche, Buche, Nussbaum im Vergleich",
  metaDescription:
    "Eiche, Buche, Nussbaum oder Kiefer? Härte, Optik und Pflege der wichtigsten Möbelhölzer, dazu Massivholz, Furnier, MDF und Spanplatte ehrlich verglichen.",
  ogDescription:
    "Welche Holzart passt zu welchem Möbel? Zehn Möbelhölzer nach Härte, Optik und Alterung, dazu Massivholz, Furnier, MDF und Spanplatte. Erklärt von einem Meisterbetrieb, der selbst fertigt.",
};

export const holzHero = {
  bgImage: "/images/schrank-unter-treppe/stauraum-unter-treppe-eiche-lamellen-nach-mass.jpg",
  imageAlt: "Raumhohe Lamellenwand aus Eichenholz mit dahinterliegender Holztreppe und Pflanztrog, warm beleuchtet",
  title: "Welche Holzart passt zu welchem Möbel?",
  intro:
    "Für stark beanspruchte Möbel wie Esstisch oder Arbeitsplatte eignen sich harte Laubhölzer: Eiche, Esche und Buche. Nussbaum und Kirsche bringen warme, dunkle Töne ins Spiel, Ahorn und Birke sorgen für Helles. Kiefer und Fichte sind weich. Da ist schnell mal eine Delle drin. Bei Korpussen und Lackfronten sind Furnier, MDF oder beschichtete Spanplatte oft formstabiler als Massivholz.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Ratgeber" },
    { label: "Holzarten für Möbel" },
  ],
};

/** SpecTable: Entscheidung nach Möbeltyp (Kit §3 Aufgabe 1, Tabelle A). Trägt den Link zur Küchen-Leistung. */
export const holzMoebeltyp = {
  heading: "Was passt zu Esstisch, Küche, Schrank und Regal?",
  intro:
    "Welches Material passt, entscheidet die Beanspruchung. Ein Esstisch muss Teller, Ellenbogen und Spielzeugautos aushalten. Eine Schrankseite fast nichts. Wenn Sie eine [maßgefertigte Küche](/kuechen-nach-mass/) planen, wählen Sie Fronten, Korpus und Arbeitsplatte getrennt. Da dürfen auch ungewöhnliche Materialien zusammenkommen.",
  firstColLabel: "Möbel",
  columns: ["Empfehlung", "Oberfläche", "Worauf achten"],
  highlightColumn: 0,
  rows: [
    {
      label: "Esstisch",
      values: [
        "Eiche, Esche oder Buche, massiv oder furniert",
        "Geölt punktuell ausbesserbar, lackiert fleckunempfindlicher",
        "Massive Platte beweglich befestigen",
      ],
    },
    {
      label: "Küchenfronten",
      values: [
        "Lack auf MDF, Schichtstoff, Echtholzfurnier oder Massivholz-Rahmen",
        "Je nach Material, Holz lackiert oder geölt",
        "Dampf an Geschirrspüler und Spüle: Die Kante muss dicht sein",
      ],
    },
    {
      label: "Arbeitsplatte aus Holz",
      values: [
        "Eiche oder Buche, auch Esche, als massive Leimholzplatte",
        "Geölt, regelmäßig nachpflegen",
        "Wasser an Spüle und Kochfeld nicht stehen lassen",
      ],
    },
    {
      label: "Einbau- und Kleiderschrank",
      values: [
        "Korpus aus beschichteter Spanplatte, Fronten nach Wunsch",
        "Korpus mit Melamin-Dekor, Fronten furniert, lackiert oder geölt",
        "Formstabil auch bei raumhohen Türen, Holzoptik über die Fronten",
      ],
    },
    {
      label: "Bücherregal",
      values: [
        "Multiplex, Tischlerplatte oder ausreichend starkes Massivholz",
        "Frei wählbar, je nach Optik",
        "Fichte und Kiefer nur für kurze Böden, lange biegen sich durch",
      ],
    },
    {
      label: "Badmöbel",
      values: [
        "Holz mit geschlossener Oberfläche oder Platte mit Kantenschutz",
        "Lack oder Versiegelung",
        "Spritzwasser abwischen, regelmäßig lüften",
      ],
    },
    {
      label: "Kinderzimmer",
      values: [
        "Buche, Eiche oder robuste Dekorplatte",
        "Emissionsarm und gut abwischbar",
        "Neue Möbel anfangs häufiger lüften",
      ],
    },
  ],
};

/** SpecTable: Holzarten im Vergleich (Kit §3 Aufgabe 2, Tabelle B). Härte nur als Stufe, keine Brinell-Zahlen. */
export const holzArten = {
  heading: "Die wichtigsten Holzarten für Möbel im Vergleich",
  intro:
    "Zu den harten Möbelhölzern zählen Eiche, Esche und Buche. Mittelhart sind Ahorn, Birke, Kirsche und Nussbaum, weich dagegen Kiefer und Fichte. Die Tabelle ordnet zehn Hölzer nach Härte, Farbe und Alterung. Die Stufen sind ein Richtwert aus allgemeinem Holzwissen. Dasselbe Holz fällt je nach Wuchsgebiet und Schnitt mal härter, mal weicher aus.",
  firstColLabel: "Holzart",
  columns: ["Gruppe und Härte", "Farbe und Maserung", "Mit der Zeit", "Passt gut für", "Hinweis"],
  rows: [
    {
      label: "Eiche",
      values: [
        "Laubholz, hart",
        "Hell- bis gelbbraun, deutliche Poren",
        "Dunkelt leicht nach, wird goldener",
        "Tische, Fronten, Arbeitsplatten",
        "Sortierungen von astrein bis Wildeiche",
      ],
    },
    {
      label: "Buche",
      values: [
        "Laubholz, hart",
        "Hell rötlich, feinporig, gleichmäßig",
        "Dunkelt leicht nach",
        "Stühle, Tischgestelle, Kinderzimmer",
        "Arbeitet stark, nicht für außen",
      ],
    },
    {
      label: "Esche",
      values: [
        "Laubholz, hart",
        "Sehr hell, markant gemasert",
        "Vergilbt leicht",
        "Tische, helle Fronten",
        "Zäh und elastisch",
      ],
    },
    {
      label: "Ahorn",
      values: [
        "Laubholz, mittel",
        "Fast weiß, fein und seidig",
        "Vergilbt unter Licht",
        "Helle Fronten, Kontraste",
        "Offenporig behandelt fleckempfindlich",
      ],
    },
    {
      label: "Birke",
      values: [
        "Laubholz, mittel",
        "Hell gelblich, ruhig",
        "Vergilbt leicht",
        "Skandinavisch helle Möbel",
        "Oft als Furnier oder Multiplex",
      ],
    },
    {
      label: "Kirsche",
      values: [
        "Laubholz, mittel",
        "Rötlich, feine Maserung",
        "Dunkelt deutlich zu Rotbraun",
        "Wohn- und Esszimmer",
        "Lichtschatten unter Deko möglich",
      ],
    },
    {
      label: "Nussbaum",
      values: [
        "Laubholz, mittel",
        "Schoko- bis graubraun, lebhaft",
        "Hellt eher auf, wird wärmer",
        "Repräsentative Möbel, Akzente",
        "Europäisch und amerikanisch verschieden im Ton",
      ],
    },
    {
      label: "Kiefer",
      values: [
        "Nadelholz, weich",
        "Gelblich, astig, harzreich",
        "Dunkelt stark gelb-orange",
        "Landhausmöbel, Regale",
        "Druckempfindlich, Harz kann austreten",
      ],
    },
    {
      label: "Fichte",
      values: [
        "Nadelholz, weich",
        "Sehr hell, schlicht",
        "Vergilbt",
        "Rückwände, einfache Regale",
        "Für Tischplatten im Alltag zu weich",
      ],
    },
    {
      label: "Lärche",
      values: [
        "Nadelholz, weich bis mittel",
        "Rötlich, kräftige Jahresringe",
        "Dunkelt nach",
        "Landhausmöbel, außen",
        "Kernholz sehr witterungsbeständig",
      ],
    },
  ],
};

/** SegmentCards: Begriffe kurz erklärt (Kit §3 Aufgabe 3 + Begriffe aus Aufgabe 4). AEO-Surface. */
export const holzBegriffe = {
  eyebrow: "Kurz erklärt",
  heading: "Begriffe, die beim Holzkauf verwirren",
  intro:
    "Hartholz, Kernbuche, Echtholz: Das klingt eindeutig. Ist es aber oft nicht. Wenn Sie die Begriffe kennen, lesen Sie Produktbeschreibungen und Angebote genauer.",
  segments: [
    {
      title: "Laubholz ist nicht automatisch Hartholz",
      body: "Ob ein Holz hart oder weich ist, hängt von seiner Dichte ab, nicht von der Baumgruppe. Linde und Pappel sind Laubhölzer und trotzdem weich. Schauen Sie deshalb auf die einzelne Holzart.",
    },
    {
      title: "Nadelholz ist meist weich",
      body: "Kiefer und Fichte geben unter Druck schneller nach, Lärche etwas weniger. Bei Rückwänden, einfachen Regalen oder Landhausmöbeln stört das nicht. Kiefer lebt sogar von ihren Ästen und ihrer Patina.",
    },
    {
      title: "Wie Härte gemessen wird",
      body: "Meist misst man die Eindruckhärte nach Brinell (DIN EN 1534). Dabei wird eine Stahlkugel ins Holz gedrückt: Je kleiner der Eindruck, desto härter das Holz. Die Werte schwanken allerdings je nach Quelle. Deshalb nennen wir Stufen statt Zahlen.",
    },
    {
      title: "Kernholz und Splintholz",
      body: "Splintholz ist die äußere, meist hellere Zone direkt unter der Rinde, Kernholz der innere Teil. Bei Eiche, Lärche oder Kirsche ist der Kern dunkler und dauerhafter. Oft zeigt ein Brett beides.",
    },
    {
      title: "Wildeiche und Kernbuche",
      body: "Beides sind Sortierungen, keine eigenen Baumarten. Wildeiche ist Eiche mit Ästen und lebhaftem Farbspiel, Kernbuche ist Buche mit rotbraunem Farbkern. Genauso die Olivesche: eine Esche mit dunklem Braunkern.",
    },
    {
      title: "Massivholz, Vollholz, Echtholz",
      body: "Massivholz besteht durchgehend aus Holz, häufig aus verleimten Lamellen. Vollholz ist Holz am Stück. Echtholz heißt nur, dass die Oberfläche echt ist. Dahinter steckt oft ein Furnier auf einer Platte.",
    },
  ],
};

/** SpecTable: Massivholz, Furnier oder Platte (Kit §3 Aufgabe 4, Tabelle C). Trägt die Links zu Kleiderschrank und Bücherregal. */
export const holzMaterialien = {
  heading: "Massivholz, Furnier, MDF oder Spanplatte?",
  intro:
    "Massivholz ist nicht automatisch die bessere Wahl. Für Korpusse, große Flächen und Lackfronten ist eine Platte oft formstabiler, etwa im [Kleiderschrank vom Tischler](/einbauschraenke-nach-mass/kleiderschrank-nach-mass/). Lange Böden im [Bücherregal nach Maß](/wohnmoebel-nach-mass/buecherregal-nach-mass/) müssen vor allem biegesteif sein. Und jede Platte hat eine heikle Stelle: ihre Kante.",
  firstColLabel: "Material",
  columns: ["Aufbau", "Stärken", "Grenzen", "Typisch bei Maßmöbeln"],
  rows: [
    {
      label: "Massivholz",
      values: [
        "Vollholz oder verleimte Lamellen (Leimholz)",
        "Echt durch und durch, abschleif- und reparierbar",
        "Arbeitet, braucht eine Konstruktion, die das zulässt",
        "Tischplatten, Rahmenfronten, Griffe",
      ],
    },
    {
      label: "Echtholzfurnier",
      values: [
        "Holzschicht von wenigen Zehntelmillimetern auf einer Trägerplatte",
        "Echtes Holzbild, formstabil, Maserung läuft über mehrere Fronten",
        "Nur begrenzt abschleifbar",
        "Fronten, Schrankwände",
      ],
    },
    {
      label: "MDF",
      values: [
        "Homogene, verpresste Holzfaserplatte",
        "Glatt und fräsbar, wie gemacht für Lack und grifflose Profile",
        "Schwer, Ecken stoßempfindlich",
        "Lackfronten, matt oder hochglänzend",
      ],
    },
    {
      label: "Spanplatte, beschichtet",
      values: [
        "Verleimte Späne mit Melamin-Dekor",
        "Maßhaltig, robust, pflegeleicht, viele Dekore",
        "Offene Kante nimmt Feuchte auf",
        "Korpusse von Küche und Schrank",
      ],
    },
    {
      label: "Multiplex",
      values: [
        "Kreuzweise verleimte Furnierlagen",
        "Sehr formstabil und biegesteif, Schichtkante als Gestaltung",
        "Die sichtbare Kante muss gewollt sein",
        "Lange Böden, Designmöbel",
      ],
    },
    {
      label: "Tischlerplatte",
      values: [
        "Mittellage aus Holzstäben, beidseitig Deckfurnier",
        "Leicht und biegesteif",
        "Stäbe können sich auf der Fläche abzeichnen",
        "Fach- und Regalböden",
      ],
    },
  ],
};

/** SpecTable: Oberflächen im Vergleich (Kit §3 Aufgabe 5). Allgemein, keine Fast-Standardoberfläche. */
export const holzOberflaechen = {
  heading: "Öl, Wachs, Lack oder Seife: Welche Oberfläche passt?",
  intro:
    "Lack schützt am besten vor Flecken, Öl lässt sich leicht selbst ausbessern. Im Alltag zählt die Oberfläche oft mehr als die Holzart. Von ihr hängt ab, wie oft Sie nachpflegen müssen und ob Sie eine Schramme ohne Hilfe wieder wegbekommen.",
  firstColLabel: "Oberfläche",
  columns: ["Optik und Gefühl", "Schutz", "Ausbessern", "Pflege"],
  rows: [
    {
      label: "Öl und Hartwachsöl",
      values: [
        "Offenporig, natürlich, warm in der Hand",
        "Mittel, Flüssigkeit rasch abwischen",
        "Punktuell anschleifen und nachölen",
        "Je nach Nutzung nachölen",
      ],
    },
    {
      label: "Wachs",
      values: [
        "Seidiger Glanz, sehr natürlich",
        "Gering, empfindlich bei Wasser und Wärme",
        "Gut möglich, Stelle nachwachsen",
        "Häufiger als bei Öl",
      ],
    },
    {
      label: "Lack",
      values: [
        "Geschlossen, matt bis hochglänzend",
        "Hoch, Flecken dringen kaum ein",
        "Lokal schwierig, oft die ganze Fläche",
        "Feucht abwischen, kaum Aufwand",
      ],
    },
    {
      label: "Seife",
      values: [
        "Hell, matt, skandinavisch",
        "Gering, fleckempfindlich",
        "Einfach mit Seifenlauge überarbeiten",
        "Regelmäßig mit Seifenlauge wischen",
      ],
    },
  ],
};

/** ContrastCols: Pflege-Dos und -Don'ts (Kit §3 Aufgabe 5). */
export const holzPflege = {
  eyebrow: "Pflege",
  heading: "So pflegen Sie Holzmöbel",
  intro:
    "Holz verzeiht viel. Scheuermittel und Dampf nicht. Die meisten dieser Regeln gelten für jede Oberfläche, egal ob geölt, geseift oder lackiert. Unterschiede zeigen sich erst beim Nachpflegen.",
  negative: {
    title: "Das schadet der Oberfläche",
    points: [
      "Scheuermilch und kratzende Schwämme: Damit wird jede Oberfläche stumpf",
      "Dampfreiniger, denn Hitze und Feuchte ziehen in Fugen und Kanten",
      "Klatschnass wischen oder Wasser auf der Fläche stehen lassen",
      "Heiße Töpfe und nasse Gläser direkt aufs Holz stellen",
      "Scharfe Reiniger mit Lösemitteln, Alkohol oder Essig",
    ],
  },
  positive: {
    title: "So bleibt sie lange schön",
    points: [
      "Nebelfeucht mit einem weichen Tuch wischen und trocken nachreiben",
      "Gläser, Kochtöpfe und Blumentöpfe auf Untersetzer stellen",
      "Verschüttetes sofort aufnehmen, vor allem auf geölten Flächen",
      "Geölte Flächen nachölen, sobald Wassertropfen nicht mehr abperlen",
      "Ein neues Pflegemittel zuerst an einer verdeckten Stelle ausprobieren",
    ],
  },
};

/** SegmentCards: Holz arbeitet (Kit §3 Aufgabe 6). 40 bis 60 % rel. Luftfeuchte nur als allgemeine Faustregel. */
export const holzKlima = {
  eyebrow: "Raumklima",
  heading: "Holz arbeitet: Raumklima und Konstruktion",
  intro:
    "Holz nimmt Feuchte aus der Raumluft auf und gibt sie wieder ab. Auch im fertigen Möbel noch. Möbelholz wird zwar für beheizte Wohnräume getrocknet. Feine Fugen im Winter sind trotzdem normal, solange die Konstruktion mitspielt.",
  segments: [
    {
      title: "Quellen und Schwinden",
      body: "Quer zur Faser bewegt sich Holz deutlich, längs kaum. Eine breite Tischplatte wird in trockener Heizungsluft etwas schmaler und im feuchten Sommer wieder breiter.",
    },
    {
      title: "Konstruktion, die das Arbeiten erlaubt",
      body: "Eine massive Platte wird nicht starr verschraubt. Langlöcher, Gratleisten oder Nutklötze halten sie sicher und lassen ihr trotzdem Spiel zum Quellen und Schwinden. Ohne dieses Spiel kann sie reißen.",
    },
    {
      title: "Raumklima und Heizung",
      body: "Als Faustregel für Wohnräume gelten 40 bis 60 % relative Luftfeuchte. Rücken Sie Holzmöbel ein Stück von Heizkörper und Kamin ab. Fällt die Luftfeuchte in der Heizperiode deutlich darunter, hilft ein Luftbefeuchter.",
    },
  ],
};

/**
 * UspHighlight: Praxis-Einschub (Kit §3, §6 Winkel). Nur belegte Fähigkeiten:
 * PU-Kantenverleimung, Meisterbetrieb, Eigenfertigung in Espelkamp (1.000 m²,
 * FACTS ✅ 2026-06-05), Plattenwerkstoffe je Projekt, kostenloses Aufmaß,
 * 3D-Planung. Trägt den thematischen Up-Link zu /moebel-nach-mass/.
 */
export const holzWerkstatt = {
  eyebrow: "Aus der Werkstatt",
  heading: "Wie wir die Schwachstelle Kante schließen",
  body:
    "Das schönste Furnier nützt wenig, wenn die Plattenkante aufquillt. Darum verschließen wir die Kanten per PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig. Als Meisterbetrieb der Familie Fast fertigen wir alle Teile in Eigenregie in unserer Werkstatt in Espelkamp. Plattenwerkstoffe und Beschläge wählen wir je nach Projekt. Ihre [Möbel nach Maß](/moebel-nach-mass/) planen wir nach einem kostenlosen Aufmaß in 3D. Erst dann schneiden wir die erste Platte zu.",
  image: "/images/serienmoebel/serienfertigung-homag-plattenaufteilung.jpg",
  imageAlt:
    "Homag-Bohrzentrum in der Werkstatt von Fast Systemmöbel, davor zugeschnittene Platten in Weiß und Holzdekor",
  stat: { value: "1.000 m²", label: "Fertigungsfläche in Espelkamp" },
};

/** SegmentCards: typische Fehler bei der Holzwahl (Kit §3 Aufgabe 9, Playbook-MUSS). */
export const holzFehler = {
  heading: "Typische Fehler bei der Holzwahl",
  intro:
    "Die meisten dieser Fehler fallen erst nach Monaten auf. Dann ist am Möbel kaum noch etwas zu ändern. Gehen Sie die Punkte deshalb vor der Bestellung durch.",
  segments: [
    {
      title: "Holz nur nach dem Muster wählen",
      body: "Ein frisches Muster verrät nicht, wie das Möbel in ein paar Jahren aussieht. Kirsche dunkelt deutlich nach, Ahorn vergilbt, Nussbaum hellt auf. Planen Sie das gleich mit ein.",
    },
    {
      title: "Weiches Nadelholz für den Familien-Esstisch",
      body: "Auf Kiefer oder Fichte drückt sich schon ein Kugelschreiber durchs Papier ins Holz. Wer keine Gebrauchsspuren mag, nimmt für den Esstisch lieber ein hartes Laubholz.",
    },
    {
      title: "Massivholz für jede Fläche verlangen",
      body: "Massiv klingt nach Qualität, passt aber nicht überall. Entscheiden Sie Teil für Teil: Eine massive Tischplatte lässt sich nach Jahren abschleifen. Eine hohe Schrankseite muss vor allem gerade bleiben, und das schafft eine Platte zuverlässiger.",
    },
    {
      title: "Bei Plattenmöbeln die Kante übersehen",
      body: "Die beschichtete Fläche ist robust. Die Kante ist es nur, wenn sie dicht verschlossen ist. Wo eine Fuge zwischen Fläche und Kantenband sichtbar ist, kann Feuchte eindringen. Am Waschtisch und neben dem Geschirrspüler fällt das zuerst auf.",
    },
    {
      title: "Eiche mit Eisen und Nässe zusammenbringen",
      body: "Eiche enthält Gerbsäure. Kommt feuchtes Eisen dazu, etwa eine nasse Gusseisenpfanne oder rostige Schrauben, entstehen blauschwarze Flecken, die tief ins Holz ziehen.",
    },
    {
      title: "Zu viele Holztöne mischen",
      body: "Eiche am Boden, Nussbaum am Tisch, Buche im Regal, Kiefer im Schrank: Vier Holztöne in einem Raum wirken schnell zusammengewürfelt. Ruhiger wird es mit weniger Hölzern, die klar aufeinander abgestimmt sind.",
    },
  ],
};

/**
 * MnmMoebelplaner: weicher CTA am Textende (Ratgeber). Möbelplaner als
 * Vorbereitung der persönlichen Planung (kundenwissen.md); trägt die
 * Conversion-Links Möbelplaner + Kontakt.
 */
export const holzMoebelplaner = {
  heading: "Erst das Möbel skizzieren, dann das Holz wählen",
  body:
    "Holz wählt sich leichter, wenn das Möbel schon Form hat. Im [Möbelplaner](/moebelplaner/) bereiten Sie Maße, Einteilung und Fronten online vor. Holz und Oberfläche besprechen wir danach persönlich mit Ihnen: am Telefon unter 05771 9138312, bei uns in Espelkamp oder bei Ihnen vor Ort im Umkreis von rund 200 km. Sie wissen schon, was Ihr Möbel aushalten muss? Dann können Sie direkt ein [Beratungsgespräch vereinbaren](/kontakt/).",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: "/images/schrank-unter-treppe/aufmass-planung-nach-mass.jpg",
  imageAlt: "Zwei Personen blättern an einem Holztisch gemeinsam durch eine Broschüre mit Produktfotos",
};

export const holzFaq = {
  heading: "Häufige Fragen zu Holzarten und Materialien",
  items: [
    {
      question: "Eiche, Buche oder Nussbaum: Welches Holz ist am besten für Möbel?",
      answer:
        "Das eine beste Holz gibt es nicht, es kommt auf Beanspruchung und Optik an. Eiche ist hart, deutlich gemasert und verzeiht Gebrauchsspuren. Buche ist ähnlich hart und ruhiger im Bild, reagiert aber stärker auf Feuchtewechsel. Nussbaum ist etwas weicher. Dafür bringt er einen dunklen, warmen Ton mit. Der passt zu Möbeln, die im Raum den Akzent setzen sollen.",
    },
    {
      question: "Kann ich Holzmöbel im Bad verwenden?",
      answer:
        "Ja, wenn Oberfläche und Kanten mit der Feuchte klarkommen. Lack oder eine Versiegelung schützen Massivholz im Bad am sichersten. Bei Plattenmöbeln kommt es vor allem auf dicht verschlossene Kanten an. Wie wir [Badmöbel vom Tischler](/badmoebel-nach-mass/) für den Feuchtraum auslegen, zeigt unsere Badmöbel-Seite.",
    },
    {
      question: "Ist Furnier schlechter als Massivholz?",
      answer:
        "Nein, nur anders. Furnier ist echtes Holz, Dekor dagegen ein bedrucktes, mit Harz getränktes Papier, das Holz nur abbildet. Weil die dünne Holzschicht auf einer Trägerplatte sitzt, verzieht sich die Fläche auch bei großen Fronten kaum. Bei tiefen Macken zieht Furnier allerdings den Kürzeren: Es lässt sich nur begrenzt abschleifen, Massivholz mehrfach.",
    },
    {
      question: "MDF oder Spanplatte: Was ist der Unterschied?",
      answer:
        "MDF besteht aus fein verpressten Holzfasern und ist durchgehend homogen. Darum lässt sich eine MDF-Front profilieren und samt Kante lackieren. Spanplatte zeigt an der Schnittkante grobe Späne und bekommt dort ein Kantenband. In einem Möbel vertragen sich beide gut: der Korpus aus beschichteter Spanplatte, die Lackfronten aus MDF.",
    },
    {
      question: "Welche Holzarten passen zusammen?",
      answer:
        "Wählen Sie ein Leitholz und ergänzen Sie höchstens ein bis zwei weitere Töne. Achten Sie dabei auf den Unterton: Kirsche, Nussbaum und geölte Eiche wirken warm, Esche, Ahorn und Birke eher kühl. Ein klarer Kontrast sieht besser aus als zwei Hölzer, die sich fast gleichen. Eine lebhafte Maserung verträgt eine ruhige daneben. Und der Boden gibt die Richtung vor.",
    },
    {
      question: "Reißt Massivholz bei Fußbodenheizung?",
      answer:
        "Nicht zwangsläufig. Heikel wird es in zwei Fällen: bei sehr trockener Luft in der Heizperiode und bei Möbeln, die mit geschlossenem Sockel direkt auf dem warmen Boden stehen. Darunter staut sich Wärme, und das Holz kann unten stärker austrocknen als oben. Füße oder ein Sockel mit Luftspalt entschärfen das. Ob die Luft im Winter zu trocken wird, zeigt ein Hygrometer.",
    },
    {
      question: "Geben Spanplatte und MDF Schadstoffe ab?",
      answer:
        "Spanplatte und MDF können Formaldehyd abgeben, wenn sie mit formaldehydhaltigen Bindemitteln verpresst sind. Seit dem 6. August 2026 gilt dafür ein EU-weiter Grenzwert: Bei Möbeln und Erzeugnissen auf Holzbasis darf die Konzentration in der Prüfkammer 0,062 mg/m³ nicht überschreiten. Geregelt ist das in der [Verordnung (EU) 2023/1464](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32023R1464). Neue Möbel sollten Sie in den ersten Wochen trotzdem häufiger lüften.",
    },
    {
      question: "Woran erkenne ich nachhaltig erzeugtes Möbelholz?",
      answer:
        "Fragen Sie beim Kauf, woher das Holz kommt, und lassen Sie sich einen Nachweis zeigen. Herkunftssiegel für nachhaltige Forstwirtschaft belegen, dass es aus kontrolliert bewirtschafteten Wäldern stammt. Eiche, Buche, Esche, Ahorn und Kiefer wachsen in Europa. Tropenholz wie Teak ist vor allem wegen seiner Witterungsbeständigkeit gefragt. Gerade hier sollten Sie auf dem Nachweis bestehen.",
    },
    {
      question: "Was kostet eine Holzart bei Maßmöbeln?",
      answer:
        "Einen Preis je Holzart nennen wir bewusst nicht. Das Holz allein sagt wenig über den Endpreis. Bei Maßmöbeln setzt er sich aus Material und Aufwand zusammen: Sortierung, Materialstärke, Massivholz oder Furnier, Fläche und Verarbeitung. Eine belastbare Zahl bekommen Sie mit dem individuellen Angebot nach dem kostenlosen Aufmaß.",
    },
    {
      question: "Welche Materialien verarbeitet Fast Systemmöbel?",
      answer:
        "Wir verarbeiten Massivholz und branchenübliche hochwertige Plattenwerkstoffe. Was davon zum Einsatz kommt, hängt vom Möbel ab und davon, wo es steht: Ein Waschtisch muss anderes aushalten als ein Bücherregal. Alles entsteht in unserer eigenen Werkstatt in Espelkamp. Welche Holzart zu Ihrem Möbel und zur gewünschten Optik passt, klären wir mit Ihnen in der Beratung.",
    },
  ],
};

/**
 * JSON-LD für den Ratgeber: Article + BreadcrumbList + FAQPage (Kit §1,
 * Playbook Ratgeber §4). Kein HowTo (keine nummerierte Schrittfolge sichtbar),
 * kein Product/Service/Offer. Breadcrumb ohne `/ratgeber/`-Eintrag, solange der
 * Index nicht gebaut ist. Inline-Link-Marker werden beim Rendern entfernt.
 */
export const holzJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: holzHero.title,
    description: holzMeta.metaDescription,
    inLanguage: "de-DE",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    mainEntityOfPage: `${SITE}${PATH}`,
    image: `${SITE}${holzHero.bgImage}`,
    author: { "@type": "Organization", name: "Fast Systemmöbel", url: `${SITE}/` },
    publisher: {
      "@type": "Organization",
      name: "Fast Systemmöbel",
      url: `${SITE}/`,
      logo: { "@type": "ImageObject", url: `${SITE}/images/2025/11/logo_fast-systemmoebel.svg` },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Holzarten für Möbel", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: holzFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];
