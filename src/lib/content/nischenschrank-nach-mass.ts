/**
 * Content for the `/einbauschraenke-nach-mass/nischenschrank-nach-mass/` page:
 * the "Nischenschrank nach Maß" cluster child (product) under the Einbauschränke
 * pillar (`/einbauschraenke-nach-mass/`). Winkel laut Cluster-Map: eine
 * vorhandene Nische, Ecke oder Aussparung in Bestandsarchitektur exakt füllen,
 * Akzent auf Aufmaß, schiefe Wände und Hindernisse. Built from the same library
 * sections as the sibling `kleiderschrank-nach-mass` (MnmHero, MnmIntroStats,
 * SegmentCards, SpecTable ×3, UspHighlight, ProcessSteps, MnmMoebelplaner,
 * FaqSection), so each section carries one topic (ARCHITECTURE.md §1.1).
 * `/wohnmoebel-nach-mass/einbauschrank-wohnzimmer-nach-mass/` leitet per 301
 * hierher (docs/seo/redirects.md Z. 32).
 *
 * Faktentreue (FACTS.md + kundenwissen.md, Kit §8/§9): keine Preise, keine
 * Toleranzen oder Ausgleichsverfahren, keine Fast-Mindest- oder Maximalmaße,
 * keine Lieferzeit in Wochen, keine Heizkörperverkleidung, keine
 * Elektroarbeiten. Heizkörper- und Außenwand-Hinweise nur mit den
 * Verbraucherzentrale-Belegen. Brand voice: Sie-Anrede, keine em-dashes.
 * SpecTable-Zellen (`values`) rendern KEINE Links.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/einbauschraenke-nach-mass/nischenschrank-nach-mass/";
const IMG = "/images/einbauschraenke";

export const nsHero = {
  bgImage: `${IMG}/einbauschrank-nach-mass-wand-zu-wand-grifflos.jpg`,
  imageAlt:
    "Weißer griffloser Einbauschrank nach Maß in einer Wandnische, mit beleuchtetem Eichenfach in der Mitte",
  title: "Nischenschrank nach Maß",
  intro:
    "Ein Nischenschrank nach Maß füllt Ihre Nische, Ecke oder Aussparung exakt aus, auch wenn die Wände schief laufen. Das verbindliche Aufmaß machen wir kostenlos bei Ihnen vor Ort. Danach planen wir in 3D, fertigen in unserer Werkstatt in Espelkamp und bauen mit dem eigenen Montageteam ein. Wand zu Wand, ohne Passleisten.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Einbauschränke nach Maß", href: "/einbauschraenke-nach-mass/" },
    { label: "Nischenschrank nach Maß" },
  ],
};

export const nsIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Schränke nach Maß.",
  heading: "Wo Standardmöbel in der Nische scheitern",
  introBefore: "Viele Nischen, gerade im Altbau, sind oben breiter als unten oder links tiefer als rechts. Ein Möbel aus dem Katalog kennt diese Unterschiede nicht. Wir bauen nach dem",
  introBold: "Aufmaß vor Ort",
  introAfter: ". So passt der Schrank an jeder Stelle.",
  bandImage: `${IMG}/einbauschrank-nach-mass-anthrazit-fenster.jpg`,
  bandAlt:
    "Einbauschrank nach Maß in Anthrazit mit beleuchtetem offenem Regalfach neben einem bodentiefen Fenster",
  col1Title: "Kostenloses Aufmaß vor Ort",
  col1Body: "Wir messen Breite, Höhe und Tiefe an mehreren Stellen, dazu Winkel, Sockelleiste, Steckdosen und Heizkörper. Ihre eigene Messung reicht für die Vorplanung. Verbindlich ist unser Aufmaß.",
  col1CtaLabel: "Kostenloses Aufmaß anfragen",
  col1CtaHref: "#anfrage",
  col2Body:
    "Als Meisterbetrieb in Familienhand fertigen wir in Espelkamp jedes Teil in der eigenen Werkstatt. Planung, Fertigung und Montage bleiben bei uns. Die Übersicht über [alle Einbauschränke nach Maß](/einbauschraenke-nach-mass/) zeigt weitere Bauformen.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body: "Zum Aufmaß und zum Einbau kommen wir im Umkreis von rund 200 km um Espelkamp zu Ihnen. Dazu gehört ganz OWL mit Minden, Lübbecke und Bielefeld, ebenso Osnabrück.",
  col3CtaLabel: "Nischenschrank im Möbelplaner skizzieren",
  col3CtaHref: "/moebelplaner/",
};

/** SegmentCards: Nischentypen (Kit §3 Aufgabe 1). Intro trägt die Abgrenzung zum Kleiderschrank, eine Karte den Dachschrägen-Link. */
export const nsVarianten = {
  heading: "Welche Nische haben Sie?",
  intro:
    "Ob ein Schrank gut in die Nische passt, hängt an zwei Fragen: Wie tief ist sie, und wie viel Platz bleibt davor zum Öffnen? Fünf Situationen begegnen uns immer wieder. Soll gleich die ganze Wand zum Schrank werden, ist der [Einbau-Kleiderschrank nach Maß](/einbauschraenke-nach-mass/kleiderschrank-nach-mass/) die bessere Wahl.",
  segments: [
    { title: "Raumhohe Wandnische", body: "Die Aussparung reicht vom Boden bis zur Decke, ob im Schlafzimmer, im Flur oder im Wohnraum. Wir machen daraus einen geschlossenen Schrank mit Fachböden, Auszügen oder Kleiderstange, der die Nische komplett ausfüllt." },
    { title: "Brüstungs- und Fensternische", body: "Unter dem Fenster oder neben einer Brüstung bleibt oft nur die halbe Raumhöhe. Genau dafür passt ein niedriger Schrank mit Klappe oder Schubkästen. Steht dort ein Heizkörper, bleibt er frei. Wo der Schrank dann Platz findet, klären wir beim Aufmaß." },
    { title: "Eck- und Restnische", body: "Die Lücke neben der Tür, die Ecke hinter einem Wandvorsprung, das Reststück am Ende der Wand. Mit einem schmalen Schrank oder einem offenen Regal wird daraus Stauraum. Neben der Tür prüfen wir, ob Türblatt und Türrahmen genug Platz lassen." },
    { title: "Kamin- und Schornsteinnische", body: "In Altbauten in OWL liegen sie oft links und rechts vom Schornstein. Gleich tief sind die beiden Seiten selten. Hier zahlt sich das Aufmaß vor Ort aus: Wir messen jede Nische einzeln und planen jeden Schrank passend für seine Seite." },
    {
      title: "Nische unter der Schräge",
      body: "Liegt Ihre Nische unter dem Dach, bestimmt die Schräge Höhe und Fronten. Dafür bauen wir den [Schrank unter der Dachschräge](/einbauschraenke-nach-mass/einbauschrank-dachschraege/).",
    },
  ],
};

/** SpecTable: Maß-Tabelle als Messanleitung für die Vorplanung (Kit §3 Aufgabe 2). Intro trägt den Möbelplaner-Link. */
export const nsMessen = {
  heading: "So messen Sie Ihre Nische vorab",
  intro:
    "Für eine erste Skizze im [Möbelplaner](/moebelplaner/) reicht eine grobe Messung mit dem Zollstock. Messen Sie jede Strecke an mehreren Stellen, es zählt immer das kleinste Maß. Das verbindliche Aufmaß macht unser Team kostenlos bei Ihnen vor Ort. Gebaut wird nach diesem Aufmaß.",
  firstColLabel: "Was messen",
  columns: ["Wo", "Worauf achten"],
  highlightColumn: 1,
  rows: [
    { label: "Breite", values: ["Oben, in der Mitte und unten, jeweils von Wand zu Wand", "Weichen die Werte voneinander ab, notieren Sie alle drei, nicht nur einen."] },
    { label: "Höhe", values: ["Links, in der Mitte und rechts, vom Boden bis zur Decke", "Deckenkante, Unterzug (Balken unter der Decke) oder Stuck notieren. Sie kosten nutzbare Höhe."] },
    { label: "Tiefe", values: ["Links und rechts, von der Rückwand bis zur Vorderkante", "Vorsprünge an der Rückwand gesondert messen."] },
    { label: "Diagonalen", values: ["Von oben links nach unten rechts und umgekehrt", "Sind beide gleich, ist die Öffnung rechtwinklig. Abweichungen klären wir beim Aufmaß."] },
    { label: "Hindernisse", values: ["Sockelleiste, Steckdosen, Schalter, Heizkörper, Fensterbank, Rohre", "Lage und Höhe über dem Boden notieren. Ein Foto hilft im Gespräch."] },
    { label: "Platz vor der Nische", values: ["Freier Raum vor der Öffnung bis zum nächsten Möbel oder Durchgang", "Davon hängt ab, ob Drehtüren aufgehen oder eine Schiebetür besser passt."] },
  ],
};

/** SpecTable: Türen in der Nische (Kit §3 Aufgabe 4). Schiebetür-Mechanik nicht vertiefen. */
export const nsTueren = {
  heading: "Welche Tür passt in die Nische?",
  intro: "In der Nische entscheiden zwei Dinge über die Tür: der Platz davor und die Laibung, also die seitlichen Wände der Nische. Eine Drehtür muss weit genug aufgehen, damit Auszüge an der Laibung vorbeikommen. Wird das knapp, zeigt die Tabelle, welche Tür weniger Raum braucht.",
  firstColLabel: "Tür",
  columns: ["Platz vor der Nische", "Zugang", "In der Nische beachten"],
  highlightColumn: 2,
  rows: [
    { label: "Drehtür", values: ["Braucht Aufschlagraum in Türbreite", "Volle Öffnung, jedes Fach erreichbar", "Öffnungswinkel an der Laibung, den prüfen wir beim Aufmaß"] },
    { label: "Schiebe- oder Schwebetür", values: ["Kein Aufschlagraum nötig", "Immer nur ein Teil gleichzeitig offen", "Das Laufsystem kostet etwas Innentiefe"] },
    { label: "Falttür", values: ["Wenig Aufschlagraum, die Flügel falten sich", "Breiter Zugang über fast die ganze Front", "Offene Flügel stehen etwas in den Raum davor"] },
    { label: "Klappe", values: ["Wenig, die Klappe öffnet nach oben oder unten", "Ein Fach in voller Breite offen", "Passt zu halbhohen Nischen unter dem Fenster"] },
    { label: "Offene Fächer", values: ["Keiner, es gibt keine Tür", "Sofort griffbereit", "Inhalt bleibt sichtbar, Staub auch"] },
  ],
};

/** UspHighlight: schiefe Wände + Aufmaß statt Selbstvermessung (Kit §3 Aufgabe 3 + „Schreiner oder Konfigurator"). */
export const nsSchief = {
  eyebrow: "Aufmaß statt Rastermaß",
  heading: "Wenn in der Nische nichts im Lot steht",
  body: "Beim Aufmaß prüfen wir, ob die Wände im Lot stehen und die Ecken rechtwinklig sind. Jede Abweichung berücksichtigen wir in der 3D-Planung, gefertigt wird Wand zu Wand ohne Passleisten. Bestellen Sie über einen Online-Konfigurator, gehen Ihre eigenen Messwerte direkt in die Fertigung. Ist einer davon falsch, tragen Sie das Risiko. Bei uns misst, wer auch baut.",
  image: `${IMG}/garderobe-flur-nach-mass-anthrazit.jpg`,
  imageAlt: "Garderobenschrank nach Maß in Anthrazit mit offener Kleidernische im Flur",
};

/** ProcessSteps: Mini-Prozess (Vollprozess liegt beim Pillar). */
export const nsProcess = {
  eyebrow: "Ablauf",
  heading: "So kommt der Schrank in Ihre Nische",
  image: `${IMG}/einbauschrank-montage-espelkamp.jpg`,
  imageAlt:
    "Zwei Monteure von Fast Systemmöbel montieren ein maßgefertigtes Möbel und richten es mit der Wasserwaage aus",
  steps: [
    { title: "Beratung und kostenloses Aufmaß", description: "Am Telefon, in unserem Büro in Espelkamp oder bei Ihnen besprechen wir, was in die Nische soll. Beim kostenlosen Aufmaß erfassen wir Maße, Winkel und Hindernisse." },
    { title: "Technische 3D-Planung", description: "Aus Ihren Wünschen und unserem Aufmaß entsteht die technische 3D-Planung. Darin sehen Sie Türen, Einteilung und den Anschluss an jede Wand und geben den Plan frei." },
    { title: "Fertigung in Espelkamp", description: "In unserer eigenen Werkstatt entsteht jedes Teil, aus Massivholz oder aus beschichteten und furnierten Platten. Die Kanten sind fugenlos und feuchtigkeitsbeständig PU-verleimt." },
    { title: "Montage durch unser eigenes Team", description: "Den Termin nennen wir, sobald Aufmaß und Freigabe stehen. Dann baut unser Montageteam den Schrank ein und schließt ihn an die Nischenwände an." },
  ],
};

/** SpecTable: Kostenfaktoren ohne Euro (Kit §3 Aufgabe „Was kostet das?"). Intro trägt den Link zum Kosten-Ratgeber (Batch-Geschwister). */
export const nsKosten = {
  heading: "Was kostet ein Nischenschrank?",
  intro:
    "Jede Nische bekommt ihr eigenes Angebot. Der Preis entsteht aus Material und Aufwand, und die sechs Faktoren unten bestimmen, wie viel davon in Ihrem Schrank steckt. Verbindlich wird er nach dem kostenlosen Aufmaß. Wie sich die Kosten eines Einbauschranks grundsätzlich zusammensetzen, steht im [Ratgeber zu den Einbauschrank-Kosten](/einbauschraenke-nach-mass/einbauschrank-kosten/).",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    { label: "Breite und Höhe", values: ["Eine raumhohe Wandnische braucht deutlich mehr Material und Fertigungszeit als ein halbhoher Schrank unter dem Fenster."] },
    { label: "Abweichung der Wände", values: ["Je stärker Lot und Winkel abweichen, desto mehr Planungs- und Fertigungsaufwand steckt im Schrank."] },
    { label: "Hindernisse", values: ["Jedes Hindernis braucht eigene Planung und Anpassung, ob Sockelleiste, Fensterbank, Rohr oder Steckdose."] },
    { label: "Türart", values: ["Jede Türart braucht ihre eigenen Beschläge, ob Drehtür, Schiebetür, Falttür oder Klappe. Offene Fächer sparen diesen Posten."] },
    { label: "Innenausstattung", values: ["Mit Auszügen, einer ausziehbaren Kleiderstange oder LED-Beleuchtung kommen mehr Teile und mehr Montage dazu."] },
    { label: "Material und Front", values: ["Massivholz, Furnier oder beschichtete Platte, mit Griff oder grifflos: Das bestimmt Materialkosten und Aufwand."] },
  ],
};

export const nsTestimonialsHeading = "Das sagen Kunden über unsere Arbeit";

export const nsFaq = {
  heading: "Häufige Fragen zum Nischenschrank nach Maß",
  items: [
    { question: "Muss ich meine Nische selbst ausmessen?", answer: "Nein. Für eine erste Skizze im Möbelplaner genügt Ihre grobe Messung. Verbindlich misst unser Team kostenlos bei Ihnen vor Ort, im Umkreis von rund 200 km um Espelkamp. In die Fertigung geht nur dieses Aufmaß, nicht Ihr Zollstock-Maß." },
    {
      question: "Kann der Schrank in eine Nische mit Heizkörper?",
      answer:
        "Ja, nur nicht vor den Heizkörper. Die [Verbraucherzentrale (Heizkosten-Tipps)](https://verbraucherzentrale.de/wissen/energie/heizen-und-warmwasser/heizung-10-tipps-zum-heizkosten-sparen-13892) rät, Schränke mindestens 30 Zentimeter von der Heizung entfernt aufzustellen und auf Heizkörperverkleidungen zu verzichten. Der Heizkörper bleibt also frei. Wo der Schrank in Ihrer Nische trotzdem Platz findet, klären wir beim Aufmaß.",
    },
    {
      question: "Droht Schimmel, wenn die Nische an einer Außenwand liegt?",
      answer: "Das Risiko gibt es. Laut Verbraucherzentrale gehören Möbel nicht dicht vor kalte Außenwände, weil sich dahinter Schimmel bilden kann. Liegt Ihre Nische an einer Außenwand, sehen wir uns die Wand beim Aufmaß genau an und besprechen mit Ihnen, ob und wie ein Schrank dort sinnvoll ist.",
    },
    { question: "Was passiert mit Steckdosen, Schaltern und der Sockelleiste in der Nische?", answer: "Wir erfassen Steckdosen, Schalter und Sockelleiste beim Aufmaß und planen sie mit ein. Wie der Schrank an diesen Stellen anschließt, sehen Sie vorab in der 3D-Planung. Muss eine Steckdose versetzt werden, ist das ein Fall für einen Elektrofachbetrieb." },
    { question: "Lohnt sich ein Schrank auch in einer sehr flachen Nische?", answer: "Ja. Fehlt die Tiefe für quer hängende Bügel, planen wir Fachböden für Bücher, Wäsche oder Vorräte, eine Kleiderstange längs oder ausziehbar oder ein offenes Regal. Feste Mindestmaße gibt es bei uns nicht, wir bauen nach Aufmaß." },
    { question: "Wie lange dauert es bis zur Montage?", answer: "Eine Wochenzahl nennen wir vorab nicht. Den verbindlichen Montagetermin bekommen Sie, sobald das Aufmaß gemacht ist und Sie die 3D-Planung freigegeben haben. Bis dahin können Sie Ihre Wünsche noch ändern." },
  ],
};

const nsTypes = nsVarianten.segments.map((s) => s.title);

/**
 * JSON-LD wie beim Geschwister Kleiderschrank (Service, nicht Product mit Preis):
 * Service, BreadcrumbList (4 Ebenen), FAQPage (1:1 zu den sichtbaren FAQ),
 * ItemList. Keine offers/aggregateRating (Preise sind individuell, FACTS.md).
 */
export const nsJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nischenschrank nach Maß",
    serviceType: "Maßgefertigte Nischenschränke",
    url: `${SITE}${PATH}`,
    provider: {
      "@type": "Organization",
      name: "Fast Systemmöbel",
      url: `${SITE}/`,
      telephone: "+4957719138312",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Alte Waldstraße 32",
        postalCode: "32339",
        addressLocality: "Espelkamp",
        addressRegion: "Nordrhein-Westfalen",
        addressCountry: "DE",
      },
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 52.3833, longitude: 8.6167 },
      geoRadius: "200000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nischenschränke nach Maß",
      itemListElement: nsTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Nischenschrank: ${name}` },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Einbauschränke nach Maß", item: `${SITE}/einbauschraenke-nach-mass/` },
      { "@type": "ListItem", position: 4, name: "Nischenschrank nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: nsFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nischenschrank nach Maß: Nischentypen",
    itemListElement: nsTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
