/**
 * Content for the `/hauswirtschaftsraum/planen/` page: the "Hauswirtschaftsraum
 * planen" Ratgeber (cluster-article) under the HWR pillar (`/hauswirtschaftsraum/`).
 * Modulname = letztes URL-Segment (`planen`), damit `lastmod.ts` und die
 * Ops-Werkzeuge (CONTENT_PFAD_MUSTER) das Modul finden. Exporte tragen das
 * Präfix `hwrPlanen`, damit sie nicht mit `kueche-planen` (`planen*`) verwechselt
 * werden.
 *
 * Built from shared library sections (MnmHero, ProcessSteps, SpecTable ×3,
 * SegmentCards ×2, UspHighlight, MnmMoebelplaner, FaqSection) so each section
 * carries one topic (ARCHITECTURE.md §1.1): Reihenfolge · Anschlüsse ·
 * Raumform · Zonen/Checkliste · Feuchte/Lüftung/Boden · typische Fehler ·
 * Werkstatt-Einschub. Winkel (Cluster-Map + Kit §2): der ZEITPUNKT. Anschlüsse
 * werden vor der Rohinstallation festgelegt, die Möbel richten sich danach.
 * Informational/AEO mit weichem CTA, KEIN Pillar-Klon (keine Vergleichstabelle,
 * kein Kostenblock, kein Prozess Beratung→Montage) und keine Produkt-Tiefe.
 *
 * Faktentreue (FACTS.md + kundenwissen.md, Kit §8/§9b): keine Preise, keine
 * m²-Richtwerte, keine Fast-Maße, Normen nur als Name, Gewerke (Elektro,
 * Sanitär, Lüftung, Boden) nicht als Fast-Leistung, Geräte kundeneigen.
 * Brand voice: Sie-Anrede, konkret, keine em-dashes (BRAND_VOICE.md).
 *
 * Bilder: Es gibt kein HWR-Foto im Bestand (Kit §9b-7). Platzhalter aus dem
 * Bestand, Alt-Texte beschreiben das tatsächliche Motiv (docs/seo/bilder.md);
 * Tausch-Vorschläge siehe REVIEW.md.
 *
 * Copy: Authoring-Engine Lauf 3 2026-11-12 (wf_36b86645-da6), Chefredakteur
 * pass=true. Bestand = Lauf-2-Copy plus Chef-Fixes (Kit §10c) plus vier
 * Orchestrator-Glättungen (Kit §10d); die QC&Fix-Fassung ist wortgleich
 * übernommen, danach nur die zwei optionalen Chef-Fixes (Feuchte-Intro,
 * „vor unserem Aufmaß“ in Schritt 7). Bilder: Schritte = Beratungsfoto,
 * Werkstatt = Teamfoto (bilder.md §3, Ausnahme Team/Beratung).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/hauswirtschaftsraum/planen/";

export const hwrPlanenHero = {
  bgImage: "/images/einbauschraenke/kleiderschrank-nach-mass-weiss-offen.jpg",
  imageAlt:
    "Weißer Einbauschrank nach Maß mit raumhohen Türen, beleuchteter Kleiderstange und offenen Fächern mit gefalteten Handtüchern",
  title: "Hauswirtschaftsraum planen: Was muss wann feststehen?",
  intro:
    "Einen Hauswirtschaftsraum (HWR) planen Sie in dieser Reihenfolge: Bedarf auflisten, Lage wählen, Raum aufmessen. Bevor der Innenausbau beginnt, müssen die Gerätestandplätze und damit Wasser, Abwasser, Strom und Lüftung feststehen. Danach ordnen Sie die Zonen, vom Waschen über Trocknen und Falten bis zum Verstauen; Vorrat, Reinigung und Technik liegen daneben. Erst dann folgen die Möbel nach Maß. Sie richten sich nach den Anschlüssen.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Hauswirtschaftsraum einrichten", href: "/hauswirtschaftsraum/" },
    { label: "Hauswirtschaftsraum planen" },
  ],
};

/**
 * ProcessSteps (shared): die 7-Schritte-HowTo-Reihenfolge (Kit §3 B). Speist die
 * sichtbaren Schritte UND das HowTo-JSON-LD. Schritt 6 trägt den Up-Link zum Pillar.
 */
export const hwrPlanenSchritte = {
  eyebrow: "In sieben Schritten",
  // Weiches Trennzeichen (U+00AD): die H2 lief bei 1440 px in die Schritt-Spalte.
  heading: "In welcher Reihenfolge planen Sie Ihren Hauswirtschafts\u00adraum?",
  image: "/images/schrank-unter-treppe/beratung-planung-nach-mass.jpg",
  imageAlt:
    "Beratungsgespräch am Holztisch: eine Frau im schwarzen Blazer und ein Mann besprechen gemeinsam Unterlagen",
  steps: [
    {
      title: "Bedarfsliste schreiben",
      description:
        "Notieren Sie, was alles einziehen soll: Waschmaschine, Trockner, vielleicht Gefriertruhe oder Zweitkühlschrank, dazu Wäschekörbe, Vorrat, Getränkekisten, Putzgeräte, Bügelbrett, Werkzeug. Daraus ergeben sich Platzbedarf und Anschlüsse. Steht der Raum schon fest, sehen Sie gleich, ob er reicht.",
    },
    {
      title: "Lage im Haus festlegen",
      description:
        "Gehen Sie den Wäscheweg einmal im Kopf ab: Wo fällt die Schmutzwäsche an, wo landet die saubere? Kurze Wege zu Schlafräumen, Küche und Nebeneingang sparen Ihnen jeden Tag Schritte. Erdgeschoss oder Keller? Auch das entscheiden Sie hier.",
    },
    {
      title: "Raum aufmessen, Bestand erfassen",
      description:
        "Messen Sie Wände und Fenster aus und skizzieren Sie Türaufschlag, Heizkörper, Zähler und Hausanschlusswand, unterm Dach auch die Schräge. Gerätemaße stehen in den Datenblättern, auch für Geräte, die Sie erst noch kaufen. Schätzen reicht hier nicht.",
    },
    {
      title: "Anschlüsse festlegen, bevor Leitungen liegen",
      description:
        "Bestimmen Sie, wo jedes Gerät, das Ausgussbecken und die Faltfläche stehen. Dort enden die Leitungen. Wasser, Abwasser, Stromkreise, Abluft und Licht legen Sie mit Installateur und Elektriker fest, bevor die Rohinstallation beginnt. Nachträglich versetzen heißt Wände aufschlitzen.",
    },
    {
      title: "Zonen und Wäscheweg anordnen",
      description:
        "Rund um die Fixpunkte aus Schritt 4 ordnen Sie die übrigen Zonen: den Schrank für saubere Wäsche ans Ende des Wegs, Vorrat und Reinigung abseits. So läuft die Wäsche in eine Richtung, ohne Kreuzwege.",
    },
    {
      title: "Möbel und Stauraum planen",
      description:
        "Jetzt erst sind die Möbel dran: raumhoch, so tief, wie es der Inhalt verlangt, die Arbeitsplatte über unterbaufähigen Geräten. Dazu kommen Unterschrank fürs Ausgussbecken, Wäschesammler und Bügelbrettfach, beim [Hauswirtschaftsraum nach Maß](/hauswirtschaftsraum/) auch in Nische oder Schräge.",
    },
    {
      title: "Ausstattung wählen, Planung prüfen lassen",
      description:
        "Leitungen, Abluft und Lichtauslässe liegen seit Schritt 4 fest. Jetzt wählen Sie Leuchten und Bodenbelag, den Belag noch vor unserem Aufmaß. Dort und in der 3D-Planung fallen Kollisionen von Türen, Geräten und Schränken auf, bevor etwas gefertigt ist.",
    },
  ],
};

/**
 * SpecTable (shared): Anschluss-Tabelle (Kit §3 D, MUSS). Kern des Winkels
 * „Zeitpunkt“: wofür, wann festlegen, wer. Gewerke = Fachbetrieb, Fast stimmt
 * die Möbel darauf ab. Normen nur als Name (DIN 18015-2), keine Normzahl.
 */
export const hwrPlanenAnschluesse = {
  heading: "Welche Anschlüsse braucht der HWR und bis wann?",
  intro:
    "Ein HWR braucht Wasser, Abwasser, Strom, Licht und, je nach Trockner, eine Abluft. Wo jeder Anschluss sitzt, muss feststehen, bevor die Leitungen in Wand und Estrich verschwinden. Die Arbeiten macht der Fachbetrieb. Wir stimmen die Möbel darauf ab.",
  firstColLabel: "Anschluss",
  columns: ["Wofür", "Wann festlegen", "Wer"],
  rows: [
    {
      label: "Wasser",
      values: [
        "Kaltwasser mit Geräteanschlussventil samt Rückflussverhinderer für die Maschine; am Ausgussbecken bei Bedarf auch Warmwasser.",
        "Vor der Sanitär-Rohinstallation, passend zum späteren Gerätestandplatz.",
        "Installateur (Sanitär)",
      ],
    },
    {
      label: "Abwasser und Siphon",
      values: [
        "Ablauf für Waschmaschine und Ausgussbecken, bei Bedarf auch für das Kondenswasser des Trockners.",
        "Zusammen mit dem Wasser. Die nötige Ablaufhöhe steht in der Geräteanleitung.",
        "Installateur (Sanitär)",
      ],
    },
    {
      label: "Bodenablauf (optional)",
      values: [
        "Sicherheit, falls ein Schlauch platzt oder ein Gerät ausläuft.",
        "Nur im Rohbau. Der Estrich braucht Gefälle zum Ablauf.",
        "Installateur und Estrichleger",
      ],
    },
    {
      label: "Strom und Stromkreise",
      values: [
        "Eigener Stromkreis je Großgerät, dazu Steckdosen für Bügeleisen, Gefriertruhe und Akkusauger. Haushaltstrockner laufen an 230 V, nicht an Starkstrom.",
        "Bevor der Elektriker Leitungen legt, anhand der Typenschilddaten Ihrer Geräte.",
        "Elektriker, Mindestausstattung nach DIN 18015-2",
      ],
    },
    {
      label: "Lüftung und Abluft",
      values: [
        "Abluftleitung nach außen nur für Ablufttrockner; ein Lüftungsgerät im HWR braucht Zugang zum Filter.",
        "Trocknertyp vor dem Innenausbau wählen. Der Wanddurchbruch kommt vor Putz und Fliese.",
        "Lüftungsfachbetrieb oder Installateur",
      ],
    },
    {
      label: "Licht",
      values: [
        "Helles Arbeitslicht über Falt- und Arbeitsfläche, nicht nur eine Deckenleuchte in der Mitte.",
        "Mit der Elektroplanung in Schritt 4, zusammen mit dem Gerätestandplatz.",
        "Elektriker",
      ],
    },
  ],
};

/**
 * SpecTable (shared): Raumform → Anordnung (Kit §3 Tabelle 1, Snippet-Kandidat).
 * Qualitativ, ohne Maße. Deckt die Sonderfälle (Nische, Dachschräge, Keller) mit ab.
 */
export const hwrPlanenRaumformen = {
  heading: "Welche Anordnung passt zu welchem Raum?",
  intro:
    "Welche Anordnung passt, hängt von der Raumform ab und davon, wo die Anschlusswand liegt. Von ihr aus verteilen sich Geräte, Arbeitsfläche und Schränke. Vorgeschrieben ist keine Mindestgröße. Selbst eine Flurnische kann Waschturm und Hochschrank aufnehmen.",
  firstColLabel: "Raumform",
  columns: ["Anordnung", "Worauf achten"],
  highlightColumn: 0,
  rows: [
    {
      label: "Nische, Flur oder unter der Treppe",
      values: [
        "Waschturm aus Maschine und Trockner, daneben ein schmaler Hochschrank für Waschmittel und Putzzeug.",
        "Absperrventil und Steckdosen müssen erreichbar bleiben, wenn die Geräte stehen.",
      ],
    },
    {
      label: "Schmaler Schlauch",
      values: [
        "Einzeilig an der Anschlusswand mit Geräten, Arbeitsplatte und Hochschränken.",
        "Gegenüber nur flache Schränke oder Regale, damit bei offener Gerätetür noch ein Durchgang bleibt.",
      ],
    },
    {
      label: "Quadratischer Raum",
      values: [
        "L-Form: Geräte unter der Arbeitsplatte an einem Schenkel, Schränke am anderen.",
        "Geräte nicht direkt in die Ecke stellen, sonst stößt die Gerätetür an den anderen Schenkel.",
      ],
    },
    {
      label: "Größerer Raum",
      values: [
        "U-Form mit eigener Falt- und Bügelzone, Vorrat und Reinigung auf getrennten Seiten.",
        "Die Raummitte bleibt frei, etwa für den Wäscheständer.",
      ],
    },
    {
      label: "Unter der Dachschräge",
      values: [
        "Hochschränke an die hohe Wand, Geräte und Auszüge unter die Schräge.",
        "Gerätehöhe samt Arbeitsplatte mit der Höhe des Kniestocks vergleichen, also der senkrechten Wand unter der Schräge.",
      ],
    },
    {
      label: "Im Keller",
      values: [
        "Je nach Raumform wie oben, die Geräte nah an der Abwasserleitung.",
        "Abläufe unter der Rückstauebene brauchen Rückstausicherung oder Hebeanlage. Die Feuchte vorab prüfen.",
      ],
    },
  ],
};

/**
 * SpecTable (shared): Zonen + Inventar-Checkliste (Kit §3 E + H). Wäscheweg ohne
 * Kreuzwege, Technik bleibt zugänglich (DIN 18012 nur als Name).
 */
export const hwrPlanenZonen = {
  heading: "Was gehört in den HWR? Die Checkliste nach Zonen",
  intro:
    "In einen HWR gehören sechs Zonen: Waschen, Trocknen, Falten, Vorrat, Reinigung und Technik. Was nicht zur Wäsche zählt, liegt abseits ihres Wegs. Dann muss sich niemand mit vollem Korb an der Gefriertruhe vorbeidrücken.",
  firstColLabel: "Zone",
  columns: ["Was hineingehört", "Passende Lösung"],
  rows: [
    {
      label: "Sammeln und Waschen",
      values: [
        "Wäschekörbe, Waschmaschine, Waschmittel, Fleckenmittel, bei Bedarf ein Ausgussbecken.",
        "Wäschesammler als Auszug, Waschmittel griffbereit neben der Maschine.",
      ],
    },
    {
      label: "Trocknen",
      values: [
        "Trockner, Wäscheständer oder Ausziehleine.",
        "Trockner neben der Maschine oder als Waschturm, die Leine über freier Fläche.",
      ],
    },
    {
      label: "Falten und Bügeln",
      values: [
        "Faltfläche, Bügelbrett, Bügeleisen, Steckdose, helles Licht.",
        "Arbeitsplatte etwa 10 bis 15 cm unter dem Ellenbogen, angelehnt an die Empfehlung des Küchenverbands AMK; Bügelbrett im schmalen Fach.",
      ],
    },
    {
      label: "Vorrat",
      values: [
        "Getränkekisten, Konserven, Großpackungen, Zweitkühlschrank oder Gefriertruhe.",
        "Schrank mit Auszügen, unten Stellfläche für Kisten, Steckdose für die Truhe.",
      ],
    },
    {
      label: "Reinigung",
      values: [
        "Staubsauger, Wischmopp, Eimer, Putzmittel, Leiter, Werkzeug.",
        "Schmaler Schrank mit Steckdose für die Ladestation des Akkusaugers.",
      ],
    },
    {
      label: "Technik und Hausanschlüsse",
      values: [
        "Zähler, Hausanschlüsse, Heizung oder Speicher, bei Bedarf das Lüftungsgerät.",
        "Frei zugänglich lassen. Für Hausanschlüsse gilt DIN 18012 als Planungsgrundlage, die nötigen Freiräume nennen Hersteller und Netzbetreiber.",
      ],
    },
  ],
};

/**
 * SegmentCards (shared): Feuchte, Lüftung, Boden, Wasserschaden (Kit §3 G).
 * Feuchtewerte nur mit Beleg (Verbraucherzentrale, Kit §7b #2).
 */
export const hwrPlanenFeuchte = {
  heading: "Wie planen Sie Lüftung, Boden und Schutz vor Feuchte?",
  intro:
    "Feuchte haben Sie im HWR im Griff, wenn Sie Lüftung, Trocknertyp und Boden zusammen planen und ein Leck früh bemerken. Unser Beitrag sind Möbel mit fugenlos verleimten, feuchtigkeitsbeständigen PU-Kanten.",
  segments: [
    {
      title: "Luftfeuchte und Lüften",
      body:
        "Die [Verbraucherzentrale](https://www.verbraucherzentrale.de/wissen/energie/heizen-und-warmwasser/heizen-und-lueften-so-gehts-richtig-10426) nennt 40 bis 60 Prozent relative Luftfeuchte als Wohlfühlbereich. Schimmel droht ab etwa 70 bis 80 Prozent direkt an der Wand. Wer Wäsche im Raum trocknet, muss lüften.",
    },
    {
      title: "Trocknertyp",
      body:
        "Kondens- und Wärmepumpentrockner kommen ohne Abluftleitung aus. Wärme und Feuchte geben sie trotzdem an den Raum ab. Ein Fenster oder eine Lüftung braucht der HWR also auch mit ihnen.",
    },
    {
      title: "Bodenbelag",
      body:
        "Fliese mit rutschhemmender Oberfläche verträgt Nässe und bleibt auch feucht trittsicher. Den Belag wählen Sie vor unserem Aufmaß, denn bei raumhohen Möbeln zählt die Höhe ab fertigem Boden.",
    },
    {
      title: "Schutz vor Wasserschäden",
      body:
        "Planen Sie Aquastop, ein erreichbares Absperrventil und einen Wassermelder am Boden ein. Viele Aquastop-Systeme schützen nur, solange das Gerät Strom hat. Vor dem Urlaub drehen Sie den Zulauf zu.",
    },
  ],
};

/** SegmentCards (shared): typische Planungsfehler (Kit §3 I) als scanbare Checkliste. */
export const hwrPlanenFehler = {
  heading: "Welche Fehler sollten Sie bei der HWR-Planung vermeiden?",
  intro:
    "Viele Planungsfehler im HWR entstehen, weil Anschlüsse, Türen und Gerätemaße zu spät feststehen. Auf dem Papier behebt ein Strich jeden davon. Nach dem Einbau braucht es Werkzeug. Gehen Sie die Liste deshalb vor der Rohinstallation durch.",
  segments: [
    {
      title: "Möbel vor den Anschlüssen geplant",
      body:
        "Wer zuerst Schränke aussucht, findet die Steckdose später hinter einer Rückwand wieder. Erst müssen Wasser, Abfluss und Strom feststehen, dann planen Sie die Möbel drumherum.",
    },
    {
      title: "Zu wenige Stromkreise und Steckdosen",
      body:
        "Laufen Waschmaschine und Trockner gleichzeitig an einem Kreis, kann die Sicherung rausfliegen. Und an der Faltfläche fehlt oft die Steckdose fürs Bügeleisen.",
    },
    {
      title: "Trocknen ohne Lüftungskonzept",
      body:
        "Ein Wäscheständer im fensterlosen Raum oder ein Trockner ohne Abluft und Lüftung treibt die Feuchte hoch. Sie schlägt sich an kalten Wänden nieder. Genau dort fängt Schimmel an.",
    },
    {
      title: "Zähler und Heizung zugebaut",
      body:
        "Ein Schrank vor Zähler, Hausanschlusswand oder Heizung sperrt Ableser und Kundendienst aus. Diese Flächen bleiben frei.",
    },
    {
      title: "Raumtür und Gerätetür kollidieren",
      body:
        "Schlägt die Raumtür gegen die offene Gerätetür, wird jeder Waschgang zum Rangieren. Die Türaufschläge von Raum und Geräten gehören deshalb ins Aufmaß.",
    },
    {
      title: "Unterbaufähigkeit vergessen",
      body:
        "Nicht jede Maschine passt unter eine Arbeitsplatte. Ob sie unterbaufähig ist und wie hoch sie baut, steht im Datenblatt. Erst dann kommt die Platte.",
    },
    {
      title: "Die Höhe verschenkt",
      body:
        "Schränke, die weit unter der Decke aufhören, kosten Stauraum. Obendrauf sammelt sich dann nur Staub.",
    },
    {
      title: "Kein Platz für den Wäschekorb",
      body:
        "Steht der volle Korb auf dem Boden, bücken Sie sich bei jeder Ladung. Eine freie Ablage in Griffhöhe neben der Maschine erspart Ihnen das.",
    },
    {
      title: "Kellerablauf ohne Rückstauschutz",
      body:
        "Bei Starkregen kann Abwasser bis zur Rückstauebene zurückdrücken und tiefer liegende Abläufe fluten. Planen Sie eine Rückstausicherung oder Hebeanlage ein. Grundlage dafür sind DIN 1986-100 und DIN EN 12056-4.",
    },
  ],
};

/**
 * UspHighlight (shared): Praxis-Einschub (Kit §3 L) + ehrlich „Maß oder
 * Standard?“ (Kit §3 K). Allgemeine Werkstatt-Fähigkeit, keine Anekdote.
 */
export const hwrPlanenWerkstatt = {
  eyebrow: "Aus der Werkstatt",
  heading: "Reichen Standardmöbel, oder lohnt sich Maß?",
  body:
    "Bei einem rechteckigen Raum mit freier Wand und Standardgeräten reichen oft Serienschränke. Maß lohnt sich bei Nische, Schräge, schiefen Wänden oder Anschlüssen im Weg. Oder wenn alles raumhoch von Wand zu Wand sitzen soll, ohne Passleisten. Beim kostenlosen Aufmaß erfassen wir Anschlüsse und Gerätemaße und planen in 3D um Ihre Geräte herum. Ihren [HWR nach Maß](/hauswirtschaftsraum/) fertigen wir im Meisterbetrieb in Espelkamp, mit fugenloser PU-Kante.",
  image: "/images/schrank-unter-treppe/team-meisterbetrieb-fast-espelkamp.jpg",
  imageAlt:
    "Drei Männer aus dem Team von Fast Systemmöbel vor einem hellen Rolltor",
  stat: { value: "kostenlos", label: "Aufmaß vor Ort" },
};

/**
 * MnmMoebelplaner (planner-cta, shared): weicher CTA am Textende. Möbelplaner nur
 * als Vorbereitung der persönlichen Planung (kundenwissen.md), nie „HWR komplett
 * selbst planen“. Trägt die Conversion-Links Möbelplaner + Kontakt.
 */
export const hwrPlanenMoebelplaner = {
  heading: "HWR-Schränke vorab skizzieren",
  body:
    "In unserem [Möbelplaner](/moebelplaner/) stellen Sie Hochschränke und Einteilung online zusammen und sehen, wie Ihre Wand aussehen kann. Für den Einstieg reicht das. Für die Planung nicht: Anschlüsse und Türaufschläge erfassen wir selbst, beim Aufmaß vor Ort im Umkreis von rund 200 km um Espelkamp. Die Skizze ist ein guter Gesprächsanfang, wenn Sie [Beratung anfragen](/kontakt/).",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: "/images/einbauschraenke/einbauschrank-nach-mass-wand-zu-wand-grifflos.jpg",
  imageAlt:
    "Weiße, grifflose Schrankwand nach Maß mit beleuchteter Holznische, passgenau zwischen zwei Wänden eingebaut",
};

/**
 * FaqSection (shared): nur Restfragen, die Schritte und Tabellen NICHT schon
 * beantworten (Lehre Ratgeber-FAQ 10/2026: Wiederholung der Tabellen → Chef rot).
 */
export const hwrPlanenFaq = {
  heading: "Weitere Fragen zur HWR-Planung",
  items: [
    {
      question: "Ist ein Hauswirtschaftsraum Wohnfläche?",
      answer:
        "Liegt der HWR innerhalb der Wohnung, zählt er in der Regel zur Wohnfläche. Nach [§ 2 Wohnflächenverordnung](https://www.gesetze-im-internet.de/woflv/__2.html) sind dagegen Zubehörräume wie Kellerräume, Waschküchen, Trockenräume und Heizungsräume ausgenommen. Verbindlich ist die Verordnung vor allem bei gefördertem Wohnraum. Kauf- und Mietverträge können anders rechnen, etwa nach DIN 277.",
    },
    {
      question: "Wie ermittle ich, wie viel Platz mein HWR braucht?",
      answer:
        "Rechnen Sie vom Inhalt aus: Stellfläche der Geräte laut Datenblatt, dazu die Schranktiefen und die Bewegungsfläche. Die Gerätetür muss ganz aufgehen, und davor brauchen Sie Platz, um mit dem Wäschekorb in die Hocke zu gehen. Fehlende Fläche holen Sie über die Höhe zurück. Eine Quadratmeter-Tabelle kennt Ihre Geräte nicht.",
    },
    {
      question: "Wie hoch sollte die Waschmaschine stehen?",
      answer:
        "So hoch, dass Sie die Trommel ohne tiefes Bücken be- und entladen, zum Beispiel auf einem Sockel oder Podest. Die genaue Höhe richtet sich nach Ihrer Körpergröße. Bedienfeld und Waschmittelschublade müssen erreichbar bleiben, und beim Schleudern muss der Sockel fest stehen. Ob er sich ins Möbel integrieren lässt, prüfen wir in der Beratung.",
    },
    {
      question: "Darf der Trockner auf die Waschmaschine?",
      answer:
        "Ja, als Waschturm, aber nur mit dem Verbindungssatz, den der Gerätehersteller dafür anbietet. Er hält den Trockner fest, wenn die Maschine darunter schleudert. Wie sich ein Turm samt Bedienhöhe und Lüftung in einen Schrank einfügt, zeigt der [Waschmaschinenschrank nach Maß](/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/).",
    },
    {
      question: "Brauche ich ein Ausgussbecken im HWR?",
      answer:
        "Nicht Pflicht, aber praktisch: Sie behandeln Flecken vor oder füllen den Putzeimer, ohne in Küche oder Bad zu gehen. Weil das Becken eigene Leitungen braucht, fällt die Entscheidung vor der Rohinstallation. Wie es ins Möbel passt, klären wir in der Beratung. Becken und Armatur kommen vom Sanitärfachbetrieb.",
    },
    {
      question: "HWR im Keller oder im Erdgeschoss?",
      answer:
        "Für kurze Wege ist das Erdgeschoss besser. Den vollen Korb tragen Sie ein Stockwerk weniger, Einkäufe landen ohne Umweg im Vorrat. Der Keller hat oft mehr Platz und hält Schleudergeräusche vom Wohnraum fern, braucht aber ein Lüftungskonzept und für tiefe Abläufe Rückstauschutz. Wer täglich wäscht, merkt jede Treppe.",
    },
    {
      question: "Was unterscheidet den HWR vom Abstellraum?",
      answer:
        "Ein Abstellraum ist reines Lager und kommt ohne Anschlüsse aus. Im HWR wird gearbeitet: gewaschen, getrocknet, gebügelt, geputzt. Deshalb braucht er Wasser, Strom, Lüftung und Licht und muss vor dem Innenausbau geplant sein. Ein Hausanschlussraum wiederum gehört der Technik und wird nicht verbaut.",
    },
    {
      question: "Welche Planungsentscheidungen treiben die Kosten?",
      answer:
        "Die Kosten fallen in zwei Budgets an: die Gewerke am Bau und die Möbel. Am Bau zählt, ob die Leitungen im Rohbau richtig liegen. Dann muss später niemand aufstemmen. Bei den Möbeln entscheiden die Zahl der Wände, das Material und ob Geräte verbaut werden. Den Möbelpreis nennen wir nach dem kostenlosen Aufmaß, als individuelles Angebot.",
    },
    {
      question: "Was sollte ich für Beratung und Aufmaß vorbereiten?",
      answer:
        "Legen Sie bereit: Ihre Bedarfsliste, die Datenblätter von Waschmaschine und Trockner, Fotos des Raums und einen Grundriss mit Wasser, Abfluss, Steckdosen und Zähler. Im Neubau kommen Elektro- und Sanitärplan dazu. Damit können Sie direkt ein [kostenloses Aufmaß anfragen](/kontakt/), und im Gespräch geht es gleich um Ihren Raum.",
    },
  ],
};

/** HowTo steps derive from the visible ProcessSteps (single source of truth). */
const hwrPlanenHowToSteps = hwrPlanenSchritte.steps.map((s, i) => ({
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
 * Kit §3: HowTo + Article + FAQPage + BreadcrumbList. No Service/Product/Offer
 * (this page sells nothing, it explains). Inline-link markers in copy are
 * stripped for ld+json in page.tsx.
 */
export const hwrPlanenJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: hwrPlanenHero.title,
    description: hwrPlanenHero.intro,
    step: hwrPlanenHowToSteps,
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: hwrPlanenHero.title,
    description: hwrPlanenHero.intro,
    mainEntityOfPage: `${SITE}${PATH}`,
    datePublished: "2026-11-12",
    dateModified: "2026-11-12",
    author: ORG,
    publisher: ORG,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Hauswirtschaftsraum einrichten", item: `${SITE}/hauswirtschaftsraum/` },
      { "@type": "ListItem", position: 4, name: "Hauswirtschaftsraum planen", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hwrPlanenFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];
