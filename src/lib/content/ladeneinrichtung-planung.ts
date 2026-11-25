/**
 * Content for the `/ladenbau/ladeneinrichtung-planung/` page: the "Ladeneinrichtung
 * planen" Ratgeber (cluster-article) under the Ladenbau pillar (`/ladenbau/`,
 * Gewerbe-Silo `ladenbau`). Route laut keyword-map im Cluster (wie
 * `/kuechen-nach-mass/kueche-planen/`, `/hauswirtschaftsraum/planen/`).
 *
 * Built from shared library sections so each section carries one topic
 * (ARCHITECTURE.md §1.1), Section-Satz nach dem HWR-Ratgeber `planen` (Vorlage,
 * Textdichte-Obergrenze): MnmHero · ProcessSteps (9 Schritte) · Anfrageblock ·
 * SpecTable (Zonen) · SegmentCards (Kasse) · SpecTable (Wer macht was) ·
 * SpecTable (DIN 18040-1) · SegmentCards (Fehler) · SpecTable (Checkliste) ·
 * UspHighlight (Werkstatt) · Streifen · FaqSection.
 * Winkel (Cluster-Map ladenbau.md): der Entscheidungsweg des Ladeninhabers,
 * branchenneutral. NICHT der Fast-Ablauf als Verkaufstext (→ Pillar, verlinkt),
 * NICHT Boutique-Tiefe, keine Möbel-Specs, keine €/m², keine Wochenzahlen.
 *
 * Faktentreue (FACTS.md + kundenwissen.md, Kit §8/§9b): Elektro, Genehmigung,
 * Brandschutz nur mit Wer/Wann, nie als Fast-Leistung; DIN-18040-1-Werte nur die
 * auf nullbarriere.de geprüften (Kit §7b); ArbStättV nur qualitativ; MixMarkt nur
 * im belegten Umfang; kein Musterversand, kein Showroom; Aufmaß kostenlos (auch
 * Gewerbe), Montage mit eigenem Team deutschlandweit auf Anfrage.
 * Brand voice: Sie-Anrede, konkret, keine em-dashes (BRAND_VOICE.md).
 *
 * Copy: Authoring-Engine 2026-11-25 (wf_4c6220ad-fb3), Chefredakteur pass=true,
 * wortgleich übernommen. Einzige Orchestrator-Änderung: FAQ „Worauf kommt es je
 * nach Branche an?“ ohne den Satz mit dem Link auf `/ladenbau/boutique-einrichten/`
 * (Seite im selben Lauf nicht gebaut, kein toter Link).
 * Bilder: kein Laden-Planungsmotiv im Bestand (Kit §9b-9). Beratungs- und
 * Teamfotos als Platzhalter (bilder.md §3, Ausnahme Team/Beratung), Alt-Texte
 * beschreiben das Motiv; Tausch-Vorschläge siehe REVIEW.md.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/ladenbau/ladeneinrichtung-planung/";

/** Page metadata (page.tsx liest sie). Title ≤ 60 Z., Description ≤ 155 Z. */
export const ladenPlanungMeta = {
  metaTitle: "Ladeneinrichtung planen: 9 Schritte bis zur Eröffnung",
  metaDescription: "Ladenplanung Schritt für Schritt: Fläche, Ware, Zonen, Laufweg, Möbel, Licht, CI, Budget, Zeitplan. Dazu Kassenplatz, Fehler und Checkliste.",
};

export const ladenPlanungHero = {
  bgImage: "/images/schrank-unter-treppe/beratung-planung-nach-mass.jpg",
  imageAlt: "Beratungsgespräch am Holztisch: eine Frau im schwarzen Blazer und ein Mann besprechen gemeinsam Unterlagen",
  title: "Ladeneinrichtung planen: Wie gehe ich Schritt für Schritt vor?",
  intro: "Eine Ladeneinrichtung planen Sie von der Fläche aus. Zuerst nehmen Sie Ausgangslage und Mietvorgaben auf, klären Sortiment und Warenmengen, teilen Zonen ein und legen den Kundenlauf fest. Dann kommen Möbel und Material, Licht und Corporate Design. Budget und Zeitplan ergeben sich daraus. Einen verbindlichen Termin nennt der Ladenbauer nach Aufmaß und Freigabe der Planung.",
  breadcrumb: [
    {
      label: "Fast Systemmöbel",
      href: "/",
    },
    {
      label: "Gewerbe",
      href: "/gewerbe/",
    },
    {
      label: "Ladenbau",
      href: "/ladenbau/",
    },
    {
      label: "Ladeneinrichtung planen",
    },
  ],
};

/**
 * ProcessSteps (shared): die 9-Schritte-HowTo-Reihenfolge (Kit §3, gesperrt).
 * Speist die sichtbaren Schritte UND das HowTo-JSON-LD.
 */
export const ladenPlanungSchritte = {
  eyebrow: "In neun Schritten",
  heading: "In welcher Reihenfolge planen Sie Ihren Laden?",
  image: "/images/schrank-unter-treppe/team-fast-systemmoebel-espelkamp.jpg",
  imageAlt: "Das Team von Fast Systemmöbel steht auf einer Wiese vor Bäumen, die Werkstatt-Mitarbeiter in roten Firmen-T-Shirts",
  steps: [
    {
      title: "Ausgangslage aufnehmen",
      description: "Messen Sie die Fläche aus oder besorgen Sie den Grundriss. Notieren Sie Stützen, Fenster, Türen, Anschlüsse für Strom, Wasser und Kühlmöbel, den Lieferzugang und Möbel, die bleiben. Dann in den Mietvertrag schauen: Was dürfen Sie umbauen, was bauen Sie beim Auszug zurück?",
    },
    {
      title: "Sortiment und Warenmengen klären",
      description: "Wie zeigen Sie Ihre Ware? Hängend, liegend, gestapelt, gekühlt oder hinter Glas. Wie viel davon steht gleichzeitig auf der Fläche, und wie oft kommt Nachschub? Und wechselt das Sortiment mit der Saison? Davon hängt ab, wie flexibel die Möbel später sein müssen.",
    },
    {
      title: "Zonen einteilen",
      description: "Hinter dem Eingang bleibt eine freie Fläche, die Dekompressionszone: Hier kommen Kunden an. Dahinter verteilen Sie Hauptware, Mittelraum, Aktionsfläche, Kasse und Lager. Manche Branchen bringen eigene Zonen mit, eine Boutique etwa die Umkleide. Was jede Zone leisten muss, zeigt die Tabelle unten.",
    },
    {
      title: "Kundenlauf und Sichtachsen festlegen",
      description: "Legen Sie den Hauptgang als Rundgang ohne Sackgassen an. Viele Kunden halten sich nach rechts (Rechtsdrall). Niedrige Möbel im Mittelraum lassen die Sichtachse zur Rückwand frei. Als Arbeitsstätte braucht der Laden Verkehrs- und Fluchtwege, die nach der [Arbeitsstättenverordnung](https://www.gesetze-im-internet.de/arbst_ttv_2004/anhang.html) sicher begehbar sind.",
    },
    {
      title: "Möbel und Material wählen",
      description: "Wählen Sie Möbel nach Belastung und Reinigung, nicht nur nach der Optik. An Theke und Regal stoßen täglich Körbe, Kartons und der Wischmopp an. PU-Kantenverleimung schließt diese Kanten fugenlos und feuchtigkeitsbeständig. Umbaubar geplant, nehmen die Möbel auch das nächste Sortiment auf.",
    },
    {
      title: "Licht festlegen",
      description: "Legen Sie das Licht spätestens vor der Freigabe der Planung fest, denn Leitungen und Leuchten im Möbel müssen vor der Fertigung feststehen. Planen Sie drei Ebenen: Grundlicht, Akzentlicht auf der Ware, Licht in Regal und Theke. Wählen Sie die Lichtfarbe zur Ware.",
    },
    {
      title: "Corporate Design einbinden",
      description: "Logo, Farben und Materialien richten sich nach Ihrem Corporate Design. Haben Sie noch keines, machen wir eigene Gestaltungsvorschläge. Schaufenster und Eingang sind die erste Fläche, auf der Passanten Ihre Marke sehen. Oft schon von der anderen Straßenseite aus.",
    },
    {
      title: "Budget und Prioritäten setzen",
      description: "Die Kosten folgen aus den Schritten davor: Umfang, Material, Licht und Technik in den Möbeln, Innenausbau, Sonderanfertigungen nach CI, Montage im laufenden Betrieb. Trennen Sie, was zur Eröffnung stehen muss und was warten kann. Ein belastbares Angebot gibt es nach dem Aufmaß.",
    },
    {
      title: "Zeitplan rückwärts rechnen",
      description: "Rechnen Sie vom Eröffnungstermin rückwärts. Am Anfang stehen Fläche, Mietvertrag und Genehmigung, dann Aufmaß, 3D-Planung und Freigabe. Danach wird gefertigt, parallel laufen Boden, Wand, Decke und Elektro. Zum Schluss kommen Möbelmontage und Warenbestückung. Den verbindlichen Termin nennen wir nach Aufmaß und Freigabe.",
    },
  ],
};

/** SpecTable (shared): Tabelle 1 Zonen (Kit §3), ohne Zahlen. */
export const ladenPlanungZonen = {
  heading: "Wie teilen Sie die Verkaufsfläche in Zonen auf?",
  intro: "Eine Verkaufsfläche teilen Sie nach Aufgaben auf. Wo viele Kunden vorbeikommen, entsteht eine Heißzone. Abgelegene Ecken bleiben kalt, solange Sie nicht gegensteuern. Die Tabelle passt für die meisten Branchen. Die Möbel richten sich jeweils nach der Aufgabe der Zone.",
  firstColLabel: "Zone",
  columns: ["Aufgabe", "Planungsregel", "Typische Möbel"],
  highlightColumn: 0,
  rows: [
    {
      label: "Eingang und Dekompressionszone",
      values: [
        "Kunden kommen an, werden langsamer und schauen sich um.",
        "Die ersten Meter frei lassen, damit der Blick in den Raum geht.",
        "Wenig: ein Schaufensterpodest, höchstens ein niedriger Aufsteller.",
      ],
    },
    {
      label: "Hauptware und Zielware",
      values: [
        "Zeigt, was Kunden gezielt suchen.",
        "Nach hinten oder an die Rückwand. So führt der Weg am übrigen Sortiment vorbei.",
        "Wandregale und Warenträger mit viel Kapazität, im Lebensmittelhandel Kühlmöbel.",
      ],
    },
    {
      label: "Mittelraum",
      values: [
        "Ergänzt das Sortiment, ohne den Raum zu verstellen.",
        "Niedriger als die Wandregale, Gangbreiten nach der Tabelle zur Barrierefreiheit.",
        "Tische, Podeste, Gondeln, fahrbare Warenträger.",
      ],
    },
    {
      label: "Aktionsfläche",
      values: [
        "Neuheiten, Saisonware und Angebote zeigen.",
        "Im Hauptgang oder in einer kalten Ecke, die dadurch auflebt. Die Ware regelmäßig wechseln.",
        "Podest, Tisch oder mobiler Aufsteller mit eigenem Akzentlicht.",
      ],
    },
    {
      label: "Kasse",
      values: [
        "Bezahlen, einpacken, beraten, den Laden im Blick behalten.",
        "Am Ende des Rundgangs, Einzelheiten im Abschnitt zur Kasse.",
        "Verkaufstheke mit Stauraum, Packfläche und Platz für Impulsware.",
      ],
    },
    {
      label: "Lager und Backoffice",
      values: [
        "Nachschub, Verpackung, Büroarbeit, Pause.",
        "Kurzer Weg zur Verkaufsfläche und zum Lieferzugang, für Kunden nicht einsehbar.",
        "Robuste Regale, Arbeitstisch, Schrank für das Personal.",
      ],
    },
  ],
};

/** SegmentCards (shared): Kassen-Abschnitt (Kit §3), Intro = selbsttragende Direktantwort. */
export const ladenPlanungKasse = {
  heading: "Wo kommt die Kasse hin?",
  intro: "Die Kasse gehört ans Ende des Rundgangs, mit freiem Blick auf den Eingang. Beim üblichen Rechtsdrall landet sie deshalb meist links vom Eingang. Davor brauchen Kunden Platz zum Warten und Einpacken.",
  segments: [
    {
      title: "Am Ende des Laufwegs",
      body: "Wer an der Kasse ankommt, hat den Laden schon gesehen. Steht sie dagegen gleich am Anfang des Rundgangs, kürzen Kunden ab und verpassen das Sortiment dahinter.",
    },
    {
      title: "Blick zum Eingang",
      body: "Vom Kassenplatz aus sehen Sie, wer hereinkommt, und können grüßen. Auch wenn Sie allein im Laden stehen, haben Sie Eingang und Schaufenster im Blick.",
    },
    {
      title: "Warte- und Packfläche",
      body: "Vor der Theke stehen Kunden mit Ware in der Hand. Planen Sie dort Platz ein, damit eine Schlange nicht den Hauptgang blockiert. Eine Ablage zum Einpacken gehört dazu. Und Impulsware in Griffweite nutzt die Wartezeit.",
    },
    {
      title: "Durchgang und Bewegungsfläche",
      body: "Wie breit der Durchgang an der Kasse sein muss und wie viel Fläche davor frei bleibt, steht in der Tabelle zur Barrierefreiheit. Rechnen Sie das ein, bevor die Theke ihre endgültige Länge bekommt.",
    },
  ],
};

/** SpecTable (shared): Tabelle 2 „Wer macht was" (Kit §3). Intro trägt „wann Standard reicht". */
export const ladenPlanungRollen = {
  heading: "Was entscheiden Sie selbst, was der Ladenbauer?",
  intro: "Bei der Ladenbau-Planung entscheiden Sie über Ware, Konzept und Budget. Das Technische teilen sich Fachleute. Für einen Pop-up-Store oder eine sehr kurze Mietdauer reichen oft Standardregale. Maß lohnt sich bei einer schwierigen Fläche, einer längeren Miete oder wenn der Laden Ihre Marke zeigen soll. Wie wir arbeiten, von der Beratung über Aufmaß und 3D-Planung bis zur Montage, lesen Sie unter [Ladenbau nach Maß](/ladenbau/).",
  firstColLabel: "Wer",
  columns: ["Entscheidet bzw. klärt", "Wann"],
  rows: [
    {
      label: "Inhaber",
      values: [
        "Sortiment, Warenmengen, Zonen, Budget, Prioritäten und Eröffnungstermin. Gibt die Planung frei.",
        "Von Anfang an. Die Freigabe kommt vor der Fertigung.",
      ],
    },
    {
      label: "Ladenbauer/Tischler",
      values: [
        "Aufmaß, 3D-Planung, Möbel und Material, auf Wunsch Innenausbau, Licht, Schaufenster und Visual Merchandising, Montage.",
        "Ab dem Aufmaß. Gefertigt wird nach Ihrer Freigabe.",
      ],
    },
    {
      label: "Elektrofachkraft",
      values: [
        "Leitungen, Stromkreise und Anschlüsse für Kasse, Kühlmöbel und Beleuchtung.",
        "Früh, noch vor der Freigabe der Planung. Darauf stimmen wir die Lichtpunkte im Möbel ab.",
      ],
    },
    {
      label: "Vermieter",
      values: [
        "Zustimmung zu Umbauten an Wand, Boden und Decke, Rückbau beim Auszug.",
        "Bevor Sie Planung und Termine festmachen.",
      ],
    },
    {
      label: "Bauamt oder Architekt",
      values: [
        "Genehmigung, etwa bei einer Nutzungsänderung, dazu Brandschutz und Fluchtwege.",
        "Sobald die Fläche feststeht, vor festen Terminen für Gewerke und Eröffnung.",
      ],
    },
  ],
};

/** SpecTable (shared): Tabelle 3 barrierefreie Maße DIN 18040-1 (Kit §7b, nur die geprüften Werte). */
export const ladenPlanungBarrierefrei = {
  heading: "Welche Maße dienen als Orientierung für barrierefreie Wege?",
  intro: "Die folgenden Werte stammen aus der [DIN 18040-1](https://nullbarriere.de/din18040-1-flaechen.htm), Ausgabe 2010-10, und sind als Orientierung gedacht. Mit diesen Maßen kommen Kunden mit Rollstuhl, Rollator oder Kinderwagen durch den Laden und bis an die Kasse. Legen Sie die Gänge fest, bevor Regale und Tische ihren Platz bekommen.",
  firstColLabel: "Bereich",
  columns: ["Orientierungswert"],
  highlightColumn: 0,
  rows: [
    {
      label: "Durchgang an der Kasse",
      values: ["90 cm, ebenso an Service-Schaltern, Kontrollen und Automaten"],
    },
    {
      label: "Bewegungsfläche vor der Kasse",
      values: ["150 × 150 cm, auch vor Service-Schaltern und Bedienelementen"],
    },
    {
      label: "Türen und Durchgänge",
      values: ["90 cm lichte Breite"],
    },
    {
      label: "Verkehrsflächen bis 6 m",
      values: ["120 cm breit, wenn der Weg ohne Richtungswechsel verläuft"],
    },
    {
      label: "Verkehrsflächen allgemein",
      values: ["150 cm breit bis 15 m Länge, danach eine Begegnungsfläche von 180 × 180 cm"],
    },
  ],
};

/** SegmentCards (shared): typische Planungsfehler (Kit §3), ohne Zahlen. */
export const ladenPlanungFehler = {
  heading: "Welche Fehler sollten Sie bei der Ladenplanung vermeiden?",
  intro: "Diese Fehler fallen meist erst nach der Eröffnung auf. Vor der Freigabe korrigieren Sie sie in der Zeichnung. Danach hilft nur ein Umbau.",
  segments: [
    {
      title: "Ware direkt hinter der Tür",
      body: "Wer im Eingang sofort vor Regalen steht, bleibt stehen oder dreht wieder um. Die ersten Meter brauchen Luft. Erst dann kommen Kunden an und überblicken den Raum.",
    },
    {
      title: "Zu hohe Möbel im Mittelraum",
      body: "Hohe Regale in der Raummitte verdecken die Rückwand und alles, was dort steht. Kunden sehen nicht, wie groß der Laden ist. Also gehen sie nicht weiter hinein.",
    },
    {
      title: "Sackgassen im Laufweg",
      body: "Endet ein Gang an einer Wand, kehren Kunden um. Der Rest des Sortiments bleibt liegen. Ein Rundgang ohne Sackgasse führt sie an allem vorbei.",
    },
    {
      title: "Kalte Ecken sich selbst überlassen",
      body: "Ecken abseits des Hauptgangs bleiben leer, wenn dort nur Restware steht. Mit Akzentlicht, Aktionsware oder Neuheiten holen Sie Kunden hinein.",
    },
    {
      title: "Licht zu spät bedacht",
      body: "Kommt das Licht erst nach der Möbelplanung dran, fehlen die Leitungen im Möbel, und Regale stehen im eigenen Schatten. Nachrüsten heißt dann: sichtbare Kabel und Aufbauleuchten.",
    },
    {
      title: "Nur nach Optik ausgesucht",
      body: "Was bei der Eröffnung edel wirkt, zeigt nach einigen Monaten Betrieb Macken und offene Kanten. Dann sieht die Einrichtung älter aus als der Laden. Prüfen Sie jede Oberfläche vor der Freigabe auf Belastung und Reinigung.",
    },
    {
      title: "Fluchtwege zugestellt",
      body: "Aktionsware im Gang, Kartons vor dem Notausgang: Das ist schnell abgestellt. Planen Sie genug Ablage ein, damit Fluchtwege auch an vollen Tagen frei bleiben.",
    },
  ],
};

/** SpecTable (shared): Checkliste „Was Sie zum Erstgespräch mitbringen" (Kit §3). */
export const ladenPlanungCheckliste = {
  heading: "Checkliste: Was Sie zum ersten Gespräch mitbringen",
  intro: "Bringen Sie diese Unterlagen mit. Dann wird schon das erste Gespräch zur konkreten Shop-Planung statt zu einer allgemeinen Beratung.",
  firstColLabel: "Unterlage",
  columns: ["Wofür sie gebraucht wird"],
  rows: [
    {
      label: "Fotos",
      values: ["Zeigen uns Raum, Eingang, Fenster und Anschlüsse, bevor jemand vor Ort war."],
    },
    {
      label: "Grobe Maße oder Grundriss",
      values: ["Für eine erste Einschätzung, was auf die Fläche passt. Exakt messen wir beim Aufmaß."],
    },
    {
      label: "Sortiment und Warenmengen",
      values: ["Daraus ergeben sich Art und Anzahl der Warenträger, ob hängend, liegend oder gekühlt."],
    },
    {
      label: "CI-Vorgaben",
      values: ["Logo, Farben und Materialwünsche fließen in die 3D-Planung ein."],
    },
    {
      label: "Wunschtermin",
      values: ["Ausgangspunkt für den Zeitplan, den wir vom Eröffnungstermin aus rückwärts rechnen."],
    },
    {
      label: "Vorgaben aus dem Mietvertrag",
      values: ["Zeigen, wie fest Möbel eingebaut werden dürfen."],
    },
  ],
};

/** UspHighlight (shared): Praxis-Einschub (Kit §3/§6, MixMarkt nur belegter Umfang) + Up-Link Pillar. */
export const ladenPlanungWerkstatt = {
  eyebrow: "Aus der Werkstatt",
  heading: "Warum das Licht vor der Fertigung feststeht",
  body: "Den MixMarkt in Espelkamp haben wir aus einer Hand eingerichtet, von der Planung bis zur Montage: Holzlamellenwand, beleuchtete Obst- und Gemüseabteilung, Warenregale. Bei beleuchteten Möbeln gilt bei uns eine feste Regel: Wo Leuchten sitzen und Kabel laufen, steht fest, bevor das erste Teil zugeschnitten wird. Die Warenträger fertigen wir als Familien- und Meisterbetrieb in der eigenen Tischlerei in Espelkamp. Mehr über die [Ladeneinrichtung vom Tischler](/ladenbau/) lesen Sie auf der Übersichtsseite.",
  image: "/images/schrank-unter-treppe/team-meisterbetrieb-fast-espelkamp.jpg",
  imageAlt: "Drei Männer aus dem Team von Fast Systemmöbel vor einem hellen Rolltor",
  stat: {
    value: "kostenlos",
    label: "Aufmaß vor Ort",
  },
};

/**
 * FaqSection (shared): nur Restfragen, die Schritte und Tabellen NICHT schon
 * beantworten (Kit §5 „Gestrichen"; Lehre Ratgeber-FAQ 10/2026).
 */
export const ladenPlanungFaq = {
  heading: "Weitere Fragen zur Ladenplanung",
  items: [
    {
      question: "Brauche ich einen fertigen Grundriss, bevor ich einen Ladenbauer anfrage?",
      answer: "Nein. Für das erste Gespräch reichen Fotos und grobe Maße. Was sonst noch hilft, steht in der Checkliste oben. Exakt gemessen wird beim Aufmaß vor Ort, danach planen wir in 3D. Aufmaß und Montage übernimmt unser eigenes Team, deutschlandweit auf Anfrage. Ob und wann wir bei Ihnen aufmessen, klären wir im ersten Gespräch. Sie können direkt ein [kostenloses Aufmaß anfragen](/kontakt/).",
    },
    {
      question: "Warum gibt es keinen verlässlichen Quadratmeterpreis für eine Ladeneinrichtung?",
      answer: "Weil Durchschnittswerte pro Quadratmeter sehr verschiedene Läden in einen Topf werfen: andere Branchen, nur Möbel oder schlüsselfertig mit Boden, Decke und Licht, mit oder ohne vorhandene Einrichtung. Für Ihre Fläche sagt so eine Zahl wenig. Belastbarer sind Ihre Prioritäten aus Schritt 8 und ein Angebot nach dem Aufmaß.",
    },
    {
      question: "Wie früh vor der Eröffnung sollte ich mit der Planung beginnen?",
      answer: "Sobald die Fläche feststeht und bevor der Eröffnungstermin und die Termine der anderen Gewerke fix sind. Dann richten sich Elektro, Boden und Möbel nach einer gemeinsamen Planung. Eine Wochenzahl nennen wir vorab nicht, den verbindlichen Termin gibt es nach Aufmaß und Freigabe.",
    },
    {
      question: "Was muss ich bei einer gemieteten Ladenfläche vorher klären?",
      answer: "Halten Sie mit dem Vermieter schriftlich fest, welche Eingriffe in Wand, Boden und Decke erlaubt sind, ob Einbauten des Vormieters bleiben dürfen und in welchem Zustand Sie die Fläche beim Auszug zurückgeben. Davon hängt ab, ob Möbel fest mit dem Bau verbunden werden oder frei stehen und sich wieder abbauen lassen.",
    },
    {
      question: "Muss meine Ladeneinrichtung barrierefrei sein?",
      answer: "Das hängt vom Landesbaurecht und von der Genehmigung für Ihre Fläche ab. Fragen Sie beim Bauamt oder bei Ihrem Architekten nach. Als Planungsmaßstab dient die DIN 18040-1, ihre Werte stehen in der Tabelle oben. Barrierefreie Lösungen planen wir auf Wunsch mit ein.",
    },
    {
      question: "Kann ich Materialien und Oberflächen vor der Fertigung sehen?",
      answer: "In der Beratung vor Ort und in der 3D-Planung stimmen wir Materialien und Oberflächen mit Ihnen ab. Gefertigt wird erst, wenn Sie die Planung freigegeben haben. Bis dahin lässt sich jede Oberfläche noch tauschen. Muster verschicken wir nicht.",
    },
    {
      question: "Kann ich während des Umbaus geöffnet bleiben?",
      answer: "Ja, das lässt sich einplanen. Unser eigenes Montageteam arbeitet auf Wunsch im laufenden Betrieb oder außerhalb der Öffnungszeiten. Vorher legen Sie fest, welche Bereiche wann für Kunden offen bleiben und wohin die Ware in der Zwischenzeit kommt.",
    },
    {
      question: "Wie viel Platz braucht das Lager?",
      answer: "Eine feste Quote gibt es nicht. Es kommt auf Liefertakt, Warenmengen und Verpackung an. Wer selten beliefert wird, braucht mehr Lager. Fehlt es, landet der Nachschub auf der Verkaufsfläche oder im Gang.",
    },
    {
      question: "Was ändert sich, wenn ich mehrere Filialen einrichten will?",
      answer: "Dann planen Sie die erste Filiale als Konzept, das sich wiederholen lässt: dieselben Möbeltypen und Materialien, angepasst an den Grundriss jedes Standorts. Filialisten beliefern wir auch in Serie.",
    },
    {
      question: "Worauf kommt es je nach Branche an?",
      answer: "Mode: Die Ware hängt, dazu kommen Umkleiden. Lebensmittel: Kühlmöbel, leicht zu reinigende Oberflächen und Licht, unter dem Obst und Gemüse frisch aussehen. Fachhandel: ein Beratungsplatz, an dem Sie mit Kunden in Ruhe Ware ansehen.",
    },
  ],
};

/** HowTo steps derive from the visible ProcessSteps (single source of truth). */
const ladenPlanungHowToSteps = ladenPlanungSchritte.steps.map((s, i) => ({
  "@type": "HowToStep",
  position: i + 1,
  name: s.title,
  text: s.description,
}));

const ORG = {
  "@type": "Organization",
  name: "Fast Systemmöbel",
  url: `${SITE}/`,
};

/**
 * JSON-LD for the planning Ratgeber (cluster-article). Per AGENT-WORKFLOW.md +
 * Kit §6: HowTo + Article + FAQPage + BreadcrumbList. No Service/Product/Offer.
 * Inline-link markers in copy are stripped for ld+json in page.tsx.
 */
export const ladenPlanungJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: ladenPlanungHero.title,
    description: ladenPlanungHero.intro,
    step: ladenPlanungHowToSteps,
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ladenPlanungHero.title,
    description: ladenPlanungHero.intro,
    mainEntityOfPage: `${SITE}${PATH}`,
    datePublished: "2026-11-25",
    dateModified: "2026-11-25",
    author: ORG,
    publisher: ORG,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Gewerbe", item: `${SITE}/gewerbe/` },
      { "@type": "ListItem", position: 3, name: "Ladenbau", item: `${SITE}/ladenbau/` },
      { "@type": "ListItem", position: 4, name: "Ladeneinrichtung planen", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ladenPlanungFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];
