/**
 * Content for the `/bueroeinrichtung/konferenzraum-einrichten/` page: the
 * "Konferenzraum einrichten" Ratgeber (cluster-article) under the Büroeinrichtung
 * pillar (`/bueroeinrichtung/`, Gewerbe-Silo `buero`). Route laut keyword-map.md
 * im Cluster (wie `/kuechen-nach-mass/kueche-planen/`), nicht unter /ratgeber/.
 * Section set from the cluster-article Vorlage `kueche-planen` (MnmHero,
 * ProcessSteps, SpecTable, SegmentCards, UspHighlight, MnmMoebelplaner als
 * weicher CTA, FaqSection), erweitert um zwei SpecTables (Tischlänge, Akustik) und
 * einen zweiten SegmentCards-Block (Maß oder Serie), damit jede Sektion ein Thema trägt.
 * Winkel laut Cluster-Map buero.md: How-to Konferenzraum (Platzbedarf, Tischform,
 * Technik, Akustik, Licht, Stauraum). NICHT der Konferenztisch als Kaufprodukt,
 * NICHT die Büroplanung (→ bueroplanung, verlinkt).
 *
 * Faktentreue (FACTS.md + kundenwissen.md): Maße sind DGUV-Richtwerte (215-441,
 * Akustik-Beispielraum 215-443), keine Fast-Zusage; keine Tischtiefe, kein Lux-Wert,
 * keine Preise, keine Lieferzeit, keine Elektroinstallation durch Fast. Montage
 * ~200 km um Espelkamp mit eigenem Team, darüber hinaus Lieferung. Sie-Form, keine
 * em-dashes (BRAND_VOICE.md).
 *
 * Copy: Authoring-Engine aus dem Research-Kit
 * (docs/seo/research/konferenzraum-einrichten.kit.md), Lauf 2026-11-04, plus die
 * Chefredakteur-Fixes dieses Laufs (Schritt 1 und 5, Formen-Zeile 6, FAQ 2, 8, 9,
 * krMass-Intro); Retry-Lauf 2026-11-11 auf diesem Bestand, Chefredakteur pass.
 * Bilder: Büro-Pool, Alt-Texte beschreiben das Motiv.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/bueroeinrichtung/konferenzraum-einrichten/";
const IMG = "/images/bueroeinrichtung";
const DGUV_441 =
  "https://publikationen.dguv.de/regelwerk/dguv-informationen/224/bueroraumplanung-hilfen-fuer-das-systematische-planen-und-gestalten-von-bueros";
const DGUV_443 =
  "https://publikationen.dguv.de/regelwerk/dguv-informationen/2950/akustik-im-buero-hilfen-fuer-die-akustische-gestaltung-von-bueros";

export const krHero = {
  bgImage: `${IMG}/bueroeinrichtung-konferenzraum-glastisch.jpg`,
  imageAlt: "Konferenzraum mit Glastisch, schwarzen Lederstühlen und Bildschirm vor einer Backsteinwand",
  title: "Konferenzraum einrichten: Platz, Technik und Akustik planen",
  intro:
    "Einen Konferenzraum richten Sie in dieser Reihenfolge ein: Nutzung und Personenzahl klären, Raum und Anschlüsse skizzieren, Tischform wählen. Die Tischgröße folgt dem Platzbedarf: je Besprechungsplatz rund 80 cm Breite und 80 cm Tiefe, dazu die Gänge. Technik und Kabelwege müssen feststehen, bevor der Tisch gefertigt wird. Dann folgen Akustik (zuerst die Decke), Licht und Stauraum, zuletzt Aufmaß und 3D-Planung.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Gewerbe", href: "/gewerbe/" },
    { label: "Büroeinrichtung", href: "/bueroeinrichtung/" },
    { label: "Konferenzraum einrichten" },
  ],
};

/** ProcessSteps (shared): die 7 HowTo-Schritte (Kit §2). Treibt sichtbare Schritte + HowTo-JSON-LD. */
export const krProcess = {
  eyebrow: "In sieben Schritten",
  heading: "So richten Sie Ihren Besprechungsraum ein",
  image: `${IMG}/besprechungstisch-nach-mass-massivholz.jpg`,
  imageAlt: "Besprechungstisch aus Massivholz mit schwarzen Stühlen und Bildschirm an einer dunklen Wand",
  steps: [
    {
      title: "Nutzung und Personenzahl klären",
      description:
        "Welche Besprechungen finden hier statt? Wie viele Personen sitzen im Normalfall am Tisch, wie viele im Höchstfall? Kommen Kunden ins Haus, gibt es hybride Meetings mit Kamera? Wird das ganze Büro neu geordnet, fangen Sie mit der [Büroplanung](/bueroeinrichtung/bueroplanung/) an.",
    },
    {
      title: "Raum skizzieren und Anschlüsse erfassen",
      description:
        "Zeichnen Sie den Grundriss mit Fenstern, Türen und Heizkörpern. Tragen Sie ein, wo Steckdosen und Datenanschlüsse sitzen und von welcher Seite die Sonne hereinfällt. Ein Aufmaß ist das noch nicht, aber eine gute Vorbereitung darauf.",
    },
    {
      title: "Tischform wählen",
      description:
        "Die Form richtet sich danach, wie Sie sich besprechen. Legen Sie sie vor der Tischgröße fest, denn davon hängt ab, wie sich die Plätze verteilen. Welche Form zu welchem Meeting passt, sehen Sie in der Übersicht unten.",
    },
    {
      title: "Tischgröße und Gänge bestimmen",
      description:
        "Sie rechnen vom Platz je Person am Tisch aus und schlagen die Gänge hinter den Stühlen drauf. Für die Gangbreite zählt die höchste Belegung aus Schritt 1. Richtwerte und Mindestlängen finden Sie in den Tabellen unten.",
    },
    {
      title: "Technik und Kabelwege festlegen",
      description:
        "Legen Sie fest, wo Display, Kamera und übrige Geräte Platz finden und wo das Anschlussfeld im Tisch sitzt. Das muss feststehen, bevor der Tisch gefertigt wird. Die Geräte bringen Sie selbst mit, wir planen die Möbel darum herum.",
    },
    {
      title: "Akustik und Licht planen",
      description:
        "Bei der Akustik fangen Sie mit der Decke an. Wandflächen und Möbelfronten ergänzen sie. Das Licht planen Sie gleich mit, damit Gesichter und Präsentation gut zu sehen sind.",
    },
    {
      title: "Stauraum festlegen, dann Aufmaß und 3D-Planung",
      description:
        "Für Geschirr und Moderationsmaterial planen Sie ein Sideboard oder [Büroschränke nach Maß](/bueroeinrichtung/bueroschraenke-nach-mass/) ein. Deren Fronten dürfen nicht in Stuhl- oder Gangflächen aufgehen. Dann messen wir kostenlos auf und zeigen Ihnen den Raum in 3D, bevor wir fertigen.",
    },
  ],
};

/** SpecTable (shared): Tischform × Meeting (Kit §3B), nur qualitativ. */
export const krFormen = {
  heading: "Welche Tischform passt zu welchem Meeting?",
  intro:
    "Die Tischform entscheidet, wie die Runde miteinander redet und ob jeder Display und Kamera im Blick hat. Über die Größe sagt sie noch nichts. Die folgt aus dem Platzbedarf.",
  firstColLabel: "Tischform",
  columns: ["Geeignet für"],
  highlightColumn: 0,
  rows: [
    { label: "Rechteck (Boardroom)", values: ["Diskussion auf Augenhöhe und Entscheidungsrunden. Man sitzt sich an den Längsseiten gegenüber."] },
    { label: "U-Form", values: ["Präsentationen mit Display oder Whiteboard an der offenen Seite. Die Mitte bleibt frei."] },
    { label: "Bootsform oder Oval", values: ["Hybride Meetings. Von den Seiten sieht man besser zur Stirnseite und in die Kamera."] },
    { label: "Rund", values: ["Kleine Gruppen und kurze Abstimmungen. Ein Kopfende gibt es hier nicht."] },
    { label: "Theater oder Parlament", values: ["Vorträge und Schulungen, alle schauen nach vorn. Für Diskussionen kaum geeignet."] },
    { label: "Modulare Tische", values: ["Räume, die mal so, mal so genutzt werden. Die Tische stellen Sie je nach Termin um."] },
  ],
};

/** SpecTable (shared): Platzbedarf je Besprechungsplatz + Verkehrswege (Kit §3A, DGUV 215-441). */
export const krPlatz = {
  heading: "Wie viel Platz braucht eine Person am Konferenztisch?",
  intro: `Jeder Platz braucht eine Benutzerfläche, also freien Raum, in dem eine Person am Tisch sitzt und arbeitet. Die Richtwerte dafür stammen aus der [DGUV Information 215-441 Büroraumplanung](${DGUV_441}). Verbindlich wird Ihre Planung erst mit dem Aufmaß vor Ort.`,
  firstColLabel: "Fläche",
  columns: ["Richtwert", "Was es für die Planung heißt"],
  rows: [
    {
      label: "Breite je Platz",
      values: ["80 cm, bei geringem Bedarf an Arbeitsfläche mindestens 70 cm", "Daraus ergibt sich die Mindestlänge des Tisches, die nächste Tabelle zeigt sie."],
    },
    {
      label: "Tiefe je Platz",
      values: ["80 cm; 60 cm bei freiem Zugang von hinten und 80 cm Beinraum unterm Tisch", "Dieser Streifen vor der Tischkante gehört dem Stuhl. Ein Gang hat darin nichts zu suchen."],
    },
    {
      label: "Gang (Verkehrsweg)",
      values: ["freie Breite mindestens 0,90 m bis 5 Personen, 1,00 m bis 20, 1,20 m bis 50", "Zählen Sie alle, die zum Meeting kommen, Gäste eingeschlossen."],
    },
    {
      label: "Barrierefrei",
      values: ["Wege mindestens 1,00 m, Türen mindestens 0,90 m (ASR V3a.2)", "Wichtig, sobald jemand im Rollstuhl oder mit Rollator am Tisch Platz nimmt."],
    },
    {
      label: "Vor Sideboard und Schrank",
      values: ["80 cm Benutzerfläche vor der Front", "Geöffnete Türen dürfen nicht in die Benutzerflächen der Sitzplätze ragen."],
    },
  ],
};

/** SpecTable (shared): Tischlänge = Plätze je Längsseite × 0,80 m (Kit §3A Rechenweg, Framing-Auflage). */
export const krTischlaenge = {
  heading: "Wie lang muss der Konferenztisch sein?",
  intro:
    "Je Platz an der Längsseite braucht der Tisch 0,80 m (DGUV-Benutzerfläche). Das ergibt Mindestlängen bei vollem Platzmaß, keine Empfehlung. Plätze an den Stirnseiten oder die schmalere Platzbreite verkürzen den Tisch. Die Tischtiefe hängt von Technik und Nutzung ab.",
  firstColLabel: "Personen (Verteilung)",
  columns: ["Längsseite mindestens"],
  highlightColumn: 0,
  rows: [
    { label: "6 (3 + 3)", values: ["2,40 m"] },
    { label: "8 (4 + 4)", values: ["3,20 m"] },
    { label: "10 (5 + 5)", values: ["4,00 m"] },
    { label: "12 (6 + 6)", values: ["4,80 m"] },
    { label: "20 (10 + 10)", values: ["8,00 m"] },
  ],
};

/** SpecTable (shared): Akustik-Beispielraum aus DGUV 215-443 Kap. 9.5 (Kit §3D). */
export const krAkustik = {
  heading: "Was hilft gegen Hall im Konferenzraum?",
  intro: `Teppich allein reicht nicht, am meisten bringt die Decke. Das zeigt ein Beispielraum aus der [DGUV Information 215-443 Akustik im Büro](${DGUV_443}). Wie lange Schall nachklingen darf (Nachhallzeit), hängt vom Raumvolumen ab. Je höher der STI, desto besser versteht man Sprache.`,
  firstColLabel: "Variante",
  columns: ["Nachhallzeit bei 250 / 500 / 1.000 / 2.000 Hz", "Sprachverständlichkeit (STI)", "Ergebnis"],
  rows: [
    { label: "Nur Teppichboden, sonst schallhart", values: ["1,6 / 1,6 / 1,1 / 0,9 s", "0,56", "erfüllt ASR A3.7 nicht"] },
    { label: "Teppich plus vollflächige Akustikdecke", values: ["0,6 / 0,5 / 0,5 / 0,5 s", "0,68", "erfüllt ASR A3.7"] },
  ],
};

/** SegmentCards (shared): typische Fehler als Checkliste (Kit §2 Module 4+5 zusammengelegt). */
export const krFehler = {
  heading: "Typische Fehler beim Einrichten eines Konferenzraums",
  intro:
    "Hinter jedem dieser Fehler steckt ein Schritt, der übersprungen wurde oder zur falschen Zeit kam. Gehen Sie die Punkte als Checkliste durch, bevor der Tisch in Auftrag geht.",
  segments: [
    {
      title: "Nur für Alltag oder Maximum geplant",
      body: "Ein Tisch für die größte Runde wirkt im Alltag verloren. Ist er auf die übliche Runde zugeschnitten, wird es beim großen Termin eng. Klären Sie also beide Zahlen und wo die Zusatzplätze hinkommen.",
    },
    {
      title: "Präsentationsfläche nicht für alle nutzbar",
      body: "Display, Whiteboard und Flipchart müssen von jedem Platz aus gut zu sehen und zu nutzen sein. Das Kopfende allein reicht nicht. Prüfen Sie die Sichtachsen schon, wenn Sie die Tischform wählen.",
    },
    {
      title: "Tischgröße nach Gefühl",
      body: "Im Katalog sieht der Tisch passend aus. Im Raum stellt er dann die Gänge zu. Rechnen Sie zuerst Plätze und Gänge durch, dann wissen Sie, welcher Tisch hineinpasst.",
    },
    {
      title: "Technik erst nach dem Tisch",
      body: "Steht der Tisch, bevor Display und Anschlüsse geplant sind, laufen die Kabel hinterher quer über den Boden. Auch mit Kabelkanal oder Kabelmatte darüber bleibt das eine Stolperstelle.",
    },
    {
      title: "Sonnenschutz vergessen",
      body: "Scheint die Sonne aufs Display, erkennt kaum jemand die Präsentation. Richten Sie den Sonnenschutz nach der Himmelsrichtung aus, und zwar so, dass er sich direkt im Raum regeln lässt.",
    },
  ],
};

/** UspHighlight (shared): Praxis-Einschub aus der Werkstatt (Kit §6, 9b-4: kein Projekt, keine Anekdote). */
export const krWerkstatt = {
  eyebrow: "Aus der Werkstatt",
  heading: "Was wir beim Aufmaß aufnehmen und in 3D prüfen",
  body:
    "Beim Aufmaß halten wir fest, wo Strom- und Datenanschlüsse liegen und wo Fenster, Heizkörper und Türen sind. In der 3D-Planung gehen wir dann Tisch, Bestuhlung, Gangbreiten und Kabelwege durch. Erst danach fertigen wir in Espelkamp, im Meisterbetrieb der Familie Fast. Tischkanten im Dauereinsatz bekommen bei uns eine PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig. Die Montage übernimmt unser eigenes Team.",
  image: "/images/2025/11/DSC_9965.jpg",
  imageAlt: "Hängendes Sideboard in Holzdekor mit indirekter LED-Beleuchtung an einer weißen Wand",
  stat: { value: "kostenlos", label: "Aufmaß vor Ort" },
};

/** SegmentCards (shared): Wann lohnen sich Maßmöbel? Ehrlich inkl. „lohnt sich nicht, wenn …" (Kit §2 Modul 6). */
export const krMass = {
  heading: "Wann lohnt sich ein Konferenztisch nach Maß?",
  intro:
    "In drei Fällen lohnt sich ein Tisch nach Maß, im vierten tut es auch Serienware. Soll der Konferenzraum zum restlichen Büro passen, planen wir beides zusammen als [maßgefertigte Büroeinrichtung](/bueroeinrichtung/).",
  segments: [
    {
      title: "Der Raum passt in kein Raster",
      body: "Nischen, Stützen, Fensterachsen, ein ungewöhnlicher Zuschnitt. Mit einem Serientisch bleiben dann Zentimeter ungenutzt, oder die Gänge werden zu schmal. Ein Maßtisch folgt dem Grundriss.",
    },
    {
      title: "Die Technik soll im Möbel verschwinden",
      body: "Das Anschlussfeld sitzt in der Tischmitte, Geräte und Kabel stecken im Sideboard, Display und Kamera sind an der Stirnseite. Das klappt, wenn Tisch und Technik zusammen geplant werden. Bei uns passiert das in der 3D-Planung.",
    },
    {
      title: "Ein Stil für Tisch, Sideboard und Wand",
      body: "Tisch, Sideboard und Medienwand kommen bei uns aus einer Werkstatt, in denselben Oberflächen und auf Wunsch passend zu Ihrem Corporate Design. Wo Sie Kunden empfangen, fällt das auf.",
    },
    {
      title: "Wann Serienware reicht",
      body: "Ein Raum ohne Besonderheiten, eine übliche Nutzung: Dann reicht oft ein Serientisch. Das gilt auch, wenn Sie die Aufstellung häufig ändern. Beweglichkeit zählt dann mehr als Passgenauigkeit.",
    },
  ],
};

/** MnmMoebelplaner (planner-cta, shared) als weicher CTA zu /kontakt/ (Kit §7: kein Möbelplaner auf dieser Seite). */
export const krCta = {
  heading: "Wir sehen uns Ihren Konferenzraum an",
  body:
    "Legen Sie Ihre Skizze aus Schritt 2 bereit, dann wird schon das erste Gespräch konkret. Liegt Ihr Büro im Umkreis von rund 200 km um Espelkamp, kommen wir zum kostenlosen Aufmaß vorbei und montieren selbst. Weiter weg liefern wir. Am Telefon erreichen Sie uns unter 05771 9138312.",
  ctaLabel: "Beratung anfragen",
  ctaHref: "/kontakt/",
  image: "/images/2025/11/DSC07156-scaled.jpg",
  imageAlt: "Beratungsgespräch an einem Holztisch mit aufgeschlagenem Katalog",
};

export const krFaq = {
  heading: "Häufige Fragen zum Konferenzraum",
  items: [
    {
      question: "Wo sollte der Konferenzraum im Büro liegen?",
      answer:
        "Empfangen Sie dort Kunden, liegt der Konferenzraum am besten nah am Empfang. So müssen Gäste nicht durch die Arbeitsbereiche. Die DGUV Information 215-441 rät außerdem zu kurzen Wegen zu Sanitär- und Pausenbereichen.",
    },
    {
      question: "Wie breit muss der Raum für einen Konferenztisch sein?",
      answer:
        "Der Raum braucht Tischtiefe plus 80 cm Benutzerfläche je Sitzseite plus einen Gang auf jeder Seite, über die man die Plätze erreicht. Wie breit der Gang sein muss und wann eine schmalere Benutzerfläche reicht, steht in der Tabelle zum Platzbedarf. Die Tischtiefe legen wir in der Planung fest.",
    },
    {
      question: "Wie kommen Strom und Daten in den Konferenztisch?",
      answer:
        "Über ein Anschlussfeld, dessen Platz und Kabelweg vor der Fertigung feststehen müssen. Geeignet sind laut DGUV Fachbereich AKTUELL FBVW-404 Möbel mit integrierten Steckdosen, USB-Ladesteckdosen und Datenports, dazu kommen gutes WLAN oder genug LAN-Anschlüsse. Klären Sie früh, wer Strom und Daten bis an den Tisch legt. Kabelwege, Aussparungen und Anschlussfelder planen wir in der 3D-Planung ein.",
    },
    {
      question: "Können Möbel die Akustik im Konferenzraum verbessern?",
      answer:
        "Ja, Möbelflächen können Schall schlucken und so die Akustikdecke ergänzen. Laut DGUV Information 215-443 lassen sich Schranktüren, Seiten- und Rückwände schallabsorbierend gestalten, etwa gelocht oder geschlitzt und mit Vlies hinterlegt. Ein Sideboard wird so zur zusätzlichen Absorberfläche. Akustiklösungen planen wir auf Anfrage mit ein.",
    },
    {
      question: "Welche Beleuchtung braucht ein Besprechungsraum?",
      answer:
        "Ein Besprechungsraum braucht Licht, das Gesichter, Whiteboard und Flipchart gut ausleuchtet. Davon hat auch die Kamera etwas. Downlights und Spots, die steil nach unten strahlen, taugen dafür wenig. Planen Sie getrennt schaltbare Leuchtengruppen, bei denen sich Helligkeit und Lichtfarbe anpassen lassen. Warmweiß wirkt wohnlich, Neutralweiß sachlich. Blendfrei muss das Licht in jedem Fall sein.",
    },
    {
      question: "Sind höhenverstellbare Tische im Besprechungsraum sinnvoll?",
      answer:
        "Ja, auch im Besprechungsraum können höhenverstellbare Tische sinnvoll sein. Laut DGUV Fachbereich AKTUELL FBVW-404 sind Möbel, die den Wechsel zwischen Sitzen und Stehen fördern, in Kommunikationsbereichen günstig. Für kurze Abstimmungen kann schon ein Stehtisch neben dem Konferenztisch reichen. Höhenverstellbare und Steh-Lösungen sind bei uns auf Anfrage möglich.",
    },
    {
      question: "Welche Farben und Oberflächen passen in einen Konferenzraum?",
      answer:
        "Große Flächen wie Tischplatte, Schrankfronten und Wände halten Sie besser zurückhaltend. Akzente gehören auf die kleineren Flächen. Wie hell große Möbelflächen sein sollen, entscheiden Sie nach dem Reflexionsgrad, also danach, wie viel Licht sie zurückwerfen. Beides empfiehlt die DGUV Information 215-441. Die Oberflächen fertigen wir nach Ihrem Wunsch.",
    },
    {
      question: "Was kostet die Einrichtung eines Konferenzraums?",
      answer:
        "Die Kosten hängen von Ihrem Raum und Ihrer Ausstattung ab. Eine feste Summe können wir vorab nicht nennen. Ins Gewicht fallen Tischgröße und Form, Material und Oberfläche, die Technik- und Kabelintegration, der Umfang des Stauraums und der Montageaufwand. Displays und Kameras gehören nicht zu unserem Angebot. Ihr Angebot bekommen Sie nach dem kostenlosen Aufmaß.",
    },
    {
      question: "Wie läuft die Einrichtung mit Fast ab?",
      answer:
        "Zuerst beraten wir Sie, vor Ort oder am Telefon. Dann messen wir kostenlos auf. Sobald Sie die 3D-Planung freigegeben haben, fertigen wir in Espelkamp. Aufmaß und Montage mit eigenem Team bieten wir im Umkreis von rund 200 km, sonst liefern wir.",
    },
    {
      question: "Wann steht der Montagetermin fest?",
      answer:
        "Verbindlich wird der Termin nach dem Aufmaß und Ihrer Freigabe der Planung. Vorher nennen wir keine Wochenzahl, denn erst dann wissen wir, was wir fertigen. Ist Ihr Umzug oder Umbau schon terminiert, sagen Sie uns das Datum gleich im ersten Gespräch.",
    },
  ],
};

/** HowTo steps derive from the visible ProcessSteps (single source of truth). */
const krHowToSteps = krProcess.steps.map((s, i) => ({
  "@type": "HowToStep",
  position: i + 1,
  name: s.title,
  text: s.description,
}));

/**
 * JSON-LD for the planning Ratgeber (cluster-article), Playbook ratgeber.md:
 * Article + HowTo + FAQPage + BreadcrumbList. Kein Service/Product/Offer.
 * Inline-link markers in copy are stripped for ld+json (stripJsonLdLinks).
 */
export const krJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Konferenzraum einrichten: Platz, Technik und Akustik planen",
    description:
      "Konferenzraum einrichten: Platzbedarf je Person, passende Tischform, Technik im Tisch und Akustik. Mit DGUV-Richtwerten, Tabellen und sieben Schritten.",
    inLanguage: "de-DE",
    mainEntityOfPage: `${SITE}${PATH}`,
    author: { "@type": "Organization", name: "Fast Systemmöbel", url: `${SITE}/` },
    publisher: { "@type": "Organization", name: "Fast Systemmöbel", url: `${SITE}/` },
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Konferenzraum einrichten in sieben Schritten",
    description:
      "Nutzung klären, Raum skizzieren, Tischform wählen, Tischgröße und Gänge bestimmen, Technik vor der Fertigung festlegen, Akustik und Licht planen, Stauraum festlegen, dann Aufmaß und 3D-Planung.",
    step: krHowToSteps,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Gewerbe", item: `${SITE}/gewerbe/` },
      { "@type": "ListItem", position: 3, name: "Büroeinrichtung", item: `${SITE}/bueroeinrichtung/` },
      { "@type": "ListItem", position: 4, name: "Konferenzraum einrichten", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: krFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];
