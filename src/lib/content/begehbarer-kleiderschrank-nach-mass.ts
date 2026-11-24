/**
 * Content for the `/einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/`
 * page: the "begehbarer Kleiderschrank nach Maß" cluster child (product) under
 * the Einbauschränke pillar (`/einbauschraenke-nach-mass/`). Winkel laut
 * Cluster-Map: der Raum selbst wird zum Schrank (Ankleidezimmer, Schrankraum,
 * I/L/U/parallel, Insel, Licht, Spiegel). Einziges Zuhause des Themas:
 * `/ratgeber/begehbaren-kleiderschrank-planen/` leitet per 301 hierher
 * (docs/seo/redirects.md Z. 27), deshalb ein kompakter Planungs-Block
 * (Rechenweg Raumtiefe, Formen) ohne Schritt-Tutorial und ohne HowTo-Schema.
 * Built from the same library sections as the sibling `kleiderschrank-nach-mass`
 * (MnmHero, MnmIntroStats, SegmentCards ×3, SpecTable ×2, UspHighlight ×2,
 * ProcessSteps, MnmMoebelplaner, FaqSection), each section one topic
 * (ARCHITECTURE.md §1.1).
 *
 * Faktentreue (FACTS.md + kundenwissen.md, Kit §8/§9): keine Preise, keine
 * Fast-Mindestmaße oder Fertigungsgrenzen, nur 60 cm (Hängezone, wie auf der
 * Kleiderschrank-Seite) und 90 cm (DIN 18040-2 als Herleitung) als
 * Orientierung. Keine Elektroinstallation als Fast-Leistung, keine erfundene
 * Lüftungstechnik, keine Lieferzeit in Wochen, kein Projektbeispiel.
 * Brand voice: Sie-Anrede, keine em-dashes. SpecTable-Zellen rendern KEINE Links.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/";
const IMG = "/images/einbauschraenke";

export const bkHero = {
  bgImage: `${IMG}/begehbare-ankleide-nach-mass-weiss.jpg`,
  imageAlt:
    "Begehbare Ankleide nach Maß in Weiß mit offenen Regalfächern, Schubladen, Kleiderstangen und Ablage, beleuchtet von Deckenspots",
  title: "Begehbarer Kleiderschrank nach Maß",
  intro:
    "Ein begehbarer Kleiderschrank nach Maß macht aus einem Raum oder einem Teil davon einen Schrank: das Ankleidezimmer, die Kammer, den Bereich hinter dem Bett. Wir planen ihn nach Ihrer Garderobe und Ihrem Grundriss und bauen ihn in unserer Werkstatt in Espelkamp. Montiert wird er von unserem eigenen Team. Das Aufmaß vor Ort ist kostenlos.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Einbauschränke nach Maß", href: "/einbauschraenke-nach-mass/" },
    { label: "Begehbarer Kleiderschrank nach Maß" },
  ],
};

export const bkIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Schränke nach Maß.",
  heading: "Ankleide nach Maß: Ihr Schrank zum Hineingehen",
  introBefore: "In einer Ankleide stehen Sie mitten in Ihrer Garderobe. Kleidung, Schuhe und Taschen liegen offen oder hinter Fronten, alles auf einen",
  introBold: "Blick",
  introAfter: ". Dafür nutzen wir die Wände im Raum, bis unter die Decke.",
  bandImage: `${IMG}/kleiderschrank-nach-mass-auszuege-spiegel.jpg`,
  bandAlt: "Kleiderschrank nach Maß mit offenen Regalfächern, ausgezogenen Schubladen und Standspiegel",
  col1Title: "Ecken und Höhe voll genutzt",
  col1Body: "Die Ecken einer L- oder U-Form bleiben bei uns kein toter Winkel, sie werden zu Stauraum. Ganz oben unter der Decke liegen Fächer für alles, was Sie nur ein paarmal im Jahr brauchen.",
  col1CtaLabel: "Ankleide anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Planung, Fertigung und Montage bleiben in einer Hand: bei Familie Fast, als Meisterbetrieb in Espelkamp. Jedes Teil Ihrer Ankleide entsteht in unserer Werkstatt. Was wir sonst bauen, zeigt die Übersicht über [alle Einbauschränke nach Maß](/einbauschraenke-nach-mass/).",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body: "Zum Aufmaß und zur Montage kommen wir im Umkreis von rund 200 km um Espelkamp zu Ihnen: in ganz OWL, nach Minden, Lübbecke und Bielefeld, auch nach Osnabrück. Eingebaut wird immer von unserem eigenen Montageteam.",
  col3CtaLabel: "Ankleide im Möbelplaner skizzieren",
  col3CtaHref: "/moebelplaner/",
};

export const bkCtas = {
  intro: {
    image: `${IMG}/begehbare-ankleide-nach-mass-eck.jpg`,
    heading: "Zeigen Sie uns den Raum, wir planen die Ankleide",
    linkText: "Sprechen Sie mit uns über Ihre Ankleide",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/einbauschrank-nach-mass-wand-zu-wand-grifflos.jpg`,
    heading: "Ihre Ankleide beginnt mit dem Aufmaß vor Ort",
    linkText: "Kostenloses Aufmaß für Ihre Ankleide anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SegmentCards: Formen der Ankleide (Kit §3 „Welche Form passt?"). Eine Karte trägt den Dachschrägen-Link. */
export const bkFormen = {
  heading: "Welche Form passt zu Ihrem Raum?",
  intro: "Meist gibt der Raum die Form vor. Es kommt darauf an, wie breit er ist, wo Tür und Fenster liegen und ob Sie hindurchgehen müssen. Jede dieser Formen bauen wir nach Maß, auch kombiniert.",
  segments: [
    { title: "I-Form, einzeilig", body: "Eine Schrankzeile an einer Wand, davor der Gang. Das passt in schmale Räume und tiefe Nischen. Oft wird mit genau dieser Form aus einer Kammer eine Ankleide." },
    { title: "L-Form, über Eck", body: "Zwei Schrankzeilen treffen sich in einer Ecke. Das passt in quadratische Abstellräume und Zimmerecken, wenn die Tür an der freien Seite liegt. Vor den Schränken bleibt eine freie Fläche zum Umziehen." },
    { title: "U-Form, dreiseitig", body: "Schränke an drei Wänden, der Eingang an der vierten. Das ist das klassische Ankleidezimmer mit dem meisten Stauraum. Dafür braucht der Raum genug Tiefe für zwei Schrankzeilen und den Gang dazwischen." },
    { title: "Parallel, zweizeilig", body: "Zwei Schrankzeilen stehen sich gegenüber, der Gang läuft mittig hindurch. Das passt zu Durchgangsräumen, etwa zwischen Schlafzimmer und Bad, wenn an beiden Enden eine Tür bleibt." },
    { title: "Hinter dem Bett, als Raumteiler", body: "Das geht auch ohne eigenen Raum. Im Schlafzimmer trennt eine Schrankwand einen Bereich ab, das Bett steht davor. Dahinter liegt die Ankleide, erreichbar über einen seitlichen Durchgang." },
    {
      title: "Unter der Dachschräge",
      body: "Im Dachzimmer reicht die Ankleide bis in die niedrige Zone am Kniestock. Wie wir Schräge und Kniestock lösen, zeigt der [Schrank unter der Dachschräge](/einbauschraenke-nach-mass/einbauschrank-dachschraege/).",
    },
  ],
};

/** SpecTable: Rechenweg Raumtiefe (Kit §3 „Reicht mein Raum?"). Nur 60 cm + 90 cm als Bausteine; Intro trägt den DIN-Beleg. */
export const bkRaumtiefe = {
  heading: "Reicht mein Raum für eine Ankleide?",
  intro:
    "So rechnen Sie selbst nach: Eine Schrankzeile mit Kleiderbügeln braucht rund 60 cm Tiefe, der Gang davor mindestens 90 cm. Diesen Wert leiten wir aus [DIN 18040-2 (nullbarriere.de)](https://nullbarriere.de/din18040-2-wohnraum-schlafraum.htm) ab: Für barrierefreies Wohnen fordert sie mindestens 90 cm Bewegungsfläche vor Möbeln, rollstuhlgerecht 150 cm. Eine Ankleide-Norm ist das nicht. Genaue Maße klären wir beim kostenlosen Aufmaß.",
  firstColLabel: "Form",
  columns: ["So rechnen Sie", "Raumtiefe rund"],
  highlightColumn: 1,
  rows: [
    { label: "I-Form, einzeilig", values: ["60 cm Schrankzeile plus 90 cm Gang", "1,50 m"] },
    { label: "L-Form, über Eck", values: ["Je Wand 60 cm Schrankzeile plus 90 cm Gang", "1,50 m in beide Richtungen"] },
    { label: "U-Form oder parallel", values: ["60 cm Schrankzeile, 90 cm Gang, 60 cm Schrankzeile gegenüber", "2,10 m"] },
    { label: "Mit Insel oder Kommode", values: ["Zwischen Schrank und Insel auf beiden Seiten je 90 cm Gang", "Schrankzeilen plus zweimal 90 cm plus Inseltiefe nach Planung"] },
  ],
};

/** SegmentCards: Offen, mit Fronten, Mischform (Kit §3 „Offen oder geschlossen?"). Schiebetür nur als Türlösung, keine Mechanik. */
export const bkFronten = {
  heading: "Offen, mit Fronten oder beides",
  intro: "Ob Ihre Kleidung offen liegt oder hinter Fronten verschwindet, entscheidet Ihr Alltag. Wie viel Staub kommt in den Raum, wie ordentlich bleibt es, wie breit ist der Gang?",
  segments: [
    { title: "Offenes System", body: "Regale, Stangen und Auszüge liegen offen, Sie greifen direkt zu. Die Ankleide wirkt luftig und braucht keinen Platz, um Türen zu öffnen. Dafür sieht man jede Unordnung. Und auf offenen Böden setzt sich Staub ab." },
    { title: "Mit Fronten", body: "Hinter Türen bleibt die Kleidung vor Staub geschützt. Der Raum wirkt ruhig, auch wenn innen nicht alles gefaltet ist. Wo eine Drehtür in den Gang schlagen würde, setzen wir Schiebetüren ein, auf Wunsch mit Spiegel oder Glas." },
    { title: "Mischform", body: "Offen, was Sie täglich greifen. Geschlossen, was Saison hat oder Staub fängt. Hemden und Schuhe bleiben also sichtbar, Wintermäntel und Wäsche kommen hinter Fronten. Wie Sie aufteilen, legen wir in der Planung gemeinsam fest." },
  ],
};

/** UspHighlight: Material + Passform (Kit §3 „Material und Haltbarkeit" + „Warum nach Maß"). */
export const bkMaterial = {
  eyebrow: "Material und Verarbeitung",
  heading: "Wand zu Wand gebaut, innen wie außen sauber",
  body: "Korpus und Fronten bauen wir aus Massivholz oder aus furnierten und beschichteten Platten, mit Dekor, Echtholzfurnier oder Lack als Oberfläche. In einer offenen Ankleide sieht man auch die Innenseiten, deshalb wählen Sie die Oberfläche dort gleich mit. Die Kanten verschließen wir per PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig. Wo eine Schrankzeile an Wände stößt, bauen wir Wand zu Wand, ohne Passleisten, auch an schiefen Wänden.",
  image: `${IMG}/einbauschrank-nach-mass-anthrazit-fenster.jpg`,
  imageAlt:
    "Einbauschrank nach Maß in Anthrazit mit beleuchtetem offenem Regalfach neben einem bodentiefen Fenster",
};

/** SegmentCards: Ausstattungszonen (Kit §3 „Was kommt hinein?"). Intro trägt den Geschwister-Link Kleiderschrank (Stangenhöhen im Detail). */
export const bkZonen = {
  heading: "Was in die Ankleide gehört",
  intro:
    "Wir teilen die Ankleide in Zonen ein, und zwar nach dem, was Sie besitzen. Ein festes Fachraster gibt es nicht. Stangenhöhen und Schranktiefen im Detail stehen beim [Einbau-Kleiderschrank nach Maß](/einbauschraenke-nach-mass/kleiderschrank-nach-mass/).",
  segments: [
    { title: "Lang- und Kurzhang", body: "Mäntel und Kleider hängen in voller Länge, Hemden und Jacken doppelt übereinander. Wie viel Stange Sie für beides brauchen, klären wir vor der Planung mit Ihnen." },
    { title: "Fächer, Auszüge, Schubladen", body: "Pullover und Shirts liegen in Fächern, Wäsche, Socken und Gürtel in Schubladen und Auszügen. Schweres kommt nach unten, Leichtes nach oben. So müssen Sie sich selten strecken." },
    { title: "Schuhzone", body: "Schuhe bekommen ein eigenes Regal, gern nahe der Tür. Die ziehen Sie ja zuletzt an. Stiefel brauchen mehr Höhe als Sneaker, deshalb teilen wir die Fächer nach Ihrem Bestand ein." },
    { title: "Insel oder Kommode", body: "Auf Wunsch steht in der Mitte eine Insel oder Kommode. Oben ist Ablage zum Falten und für Schmuck, darunter liegen Schubladen. Rundherum braucht sie Platz für den Gang." },
    { title: "Spiegel und Sitzplatz", body: "Ein großer Spiegel zeigt das ganze Outfit, in eine Front eingesetzt oder an der Stirnseite. Auf einer Sitzbank ziehen Sie bequem die Schuhe an. Beides planen wir auf Wunsch mit ein." },
  ],
};

/** UspHighlight: Licht und Luft (Kit §3 „Licht und Luft"). Elektro nicht als Fast-Leistung, keine Lüftungstechnik. */
export const bkLicht = {
  eyebrow: "Licht und Luft",
  heading: "Licht und Luft im Ankleideraum",
  body: "Eine Ankleide hat oft kein Fenster. Deshalb gehört die Beleuchtung bei uns zur Planung: LED an Kleiderstangen und in Regalböden, geschaltet zum Beispiel über Bewegungsmelder oder Türkontakt. Den Stromanschluss stimmen Sie mit Ihrem Elektriker ab. Ohne Fenster braucht der Raum außerdem Luftaustausch, sonst wird die Kleidung muffig. Daran denken wir schon beim Entwurf. Regelmäßig lüften sollten Sie trotzdem.",
  image: `${IMG}/kleiderschrank-nach-mass-weiss-offen.jpg`,
  imageAlt:
    "Kleiderschrank nach Maß in Weiß, raumhoch bis zur Decke, mit offenem Garderobenbereich und geschlossenen Fronten",
};

/** ProcessSteps: Mini-Prozess (Vollprozess liegt beim Pillar). */
export const bkProcess = {
  eyebrow: "Ablauf",
  heading: "So entsteht Ihre Ankleide",
  image: `${IMG}/einbauschrank-montage-espelkamp.jpg`,
  imageAlt:
    "Zwei Monteure von Fast Systemmöbel montieren ein maßgefertigtes Möbel und richten es mit der Wasserwaage aus",
  steps: [
    { title: "Beratung und kostenloses Aufmaß", description: "Am Telefon oder bei Ihnen zu Hause sprechen wir über Raum und Garderobe. Danach messen wir kostenlos vor Ort auf, mit Türen, Fenstern und Schrägen." },
    { title: "Technische 3D-Planung", description: "Aus dem Aufmaß entsteht eine 3D-Planung der ganzen Ankleide. Sie sehen Form, Zonen und Fronten vorab und sagen uns, was wir ändern sollen." },
    { title: "Fertigung in Espelkamp", description: "Nach Ihrer Freigabe fertigen wir alle Teile in unserer Werkstatt in Espelkamp. Den verbindlichen Montagetermin bekommen Sie dann von uns." },
    { title: "Montage durch unser eigenes Team", description: "Unser eigenes Montageteam baut die Ankleide bei Ihnen ein und schließt die Schrankzeilen sauber an Wand und Decke an. Selbst aufbauen müssen Sie nichts." },
  ],
};

/** SpecTable: Kostentreiber ohne Euro (Kit §3 „Was kostet das?"). Intro trägt den Link zum Kosten-Ratgeber (Batch-Geschwister). */
export const bkKosten = {
  heading: "Was den Preis einer Ankleide bestimmt",
  intro:
    "Was eine Ankleide kostet, hängt an Ihrem Raum und an Ihrer Ausstattung. Einen Pauschalpreis gibt es bei uns deshalb nicht. Sie bekommen nach dem kostenlosen Aufmaß ein Angebot. Diese sechs Punkte bewegen den Preis. Wie sich die Kosten zusammensetzen, erklärt der [Ratgeber zu den Einbauschrank-Kosten](/einbauschraenke-nach-mass/einbauschrank-kosten/).",
  firstColLabel: "Kostentreiber",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    { label: "Laufmeter Schrankzeile", values: ["Jeder Meter Schrankzeile bedeutet Korpus, Böden und Fertigungszeit. Eine U-Form hat deutlich mehr Laufmeter als eine I-Form."] },
    { label: "Fronten oder offen", values: ["Fronten kosten Material und Beschläge, offene Fächer nicht. Die Mischform liegt dazwischen."] },
    { label: "Auszüge und Schubladen", values: ["Jeder Auszug braucht Beschläge und Montagezeit. Fächer und Stangen sind einfacher."] },
    { label: "Beleuchtung", values: ["LED an Stangen und in Böden kommt als Ausstattung am Möbel dazu."] },
    { label: "Sondermaß", values: ["Schräge, Nische oder schiefe Wände brauchen mehr Anpassung als ein rechtwinkliger Raum."] },
    { label: "Material und Oberfläche", values: ["Dekor auf beschichteter Platte ist die schlichteste Wahl. Echtholzfurnier, Lack und Massivholz brauchen mehr Material und Arbeit."] },
  ],
};

export const bkMoebelplaner = {
  heading: "Erste Ideen im Möbelplaner festhalten",
  body: "Im Möbelplaner finden Sie unter „Ankleideraum“ Vorlagen für begehbare Schränke. Nehmen Sie eine davon als Ausgangspunkt, notieren Sie, was Ihnen wichtig ist, und senden Sie uns die Anfrage. Den ganzen Raum plant der Möbelplaner nicht. Er hilft Ihnen, Ihre Wünsche zu sortieren. Aufmaß, 3D-Planung und Angebot übernehmen danach wir.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: "/images/schrank-unter-treppe/aufmass-planung-nach-mass.jpg",
  imageAlt: "Zwei Personen blättern an einem Holztisch gemeinsam durch eine Broschüre mit Produktfotos",
};

export const bkTestimonialsHeading = "Was unsere Kunden über ihre Möbel nach Maß sagen";

export const bkFaq = {
  heading: "Häufige Fragen zum begehbaren Kleiderschrank",
  items: [
    { question: "Kann ich aus einem Abstellraum oder einer Kammer eine Ankleide machen?", answer: "Ja, wenn die Raumtiefe für Schrankzeile und Gang reicht. Achten Sie auf die Tür: Schlägt sie nach innen auf, nimmt sie Stauraum weg. Und überlegen Sie vorher, wo Staubsauger, Getränkekisten und Vorräte künftig stehen, die heute in der Kammer lagern." },
    { question: "Geht ein begehbarer Kleiderschrank auch mit Schiebetüren?", answer: "Ja. Schiebetüren eignen sich an der Schrankzeile und als Abschluss der Ankleide zum Schlafzimmer. Sie brauchen keinen Schwenkbereich, der Gang bleibt frei. Dafür ist immer nur ein Teil der Front offen. Mit Spiegel belegt, ersetzt eine Schiebetür den Standspiegel. Welche Lösung passt, klären wir beim Aufmaß." },
    { question: "Lohnt sich Maßanfertigung gegenüber einem Systemschrank wie Pax?", answer: "In einem glatten, rechtwinkligen Raum kann ein Systemschrank reichen. Er arbeitet mit festen Rastermaßen, Lücken zu Wand und Decke schließen Blenden. Nach Maß lohnt es sich, sobald Ecken, Schrägen, Nischen oder Türen die Planung bestimmen oder die Aufteilung genau zu Ihrer Garderobe passen soll." },
    { question: "Was kostet ein begehbarer Kleiderschrank nach Maß?", answer: "Einen festen Betrag nennen wir nicht, weil jede Ankleide nach Raum und Ausstattung anders ausfällt. Nach dem kostenlosen Aufmaß erhalten Sie ein individuelles Angebot für Möbel und Montage. Als Privatkunde können Sie die Ankleide auf Wunsch auch finanzieren." },
    { question: "Muss ich vor dem Aufmaß selbst messen?", answer: "Nein. Das genaue Maß nehmen wir beim kostenlosen Aufmaß vor Ort. Fürs erste Gespräch hilft eine grobe Raumskizze mit Tür und Fenster. Dazu ein paar Fotos und eine Vorstellung, wie viel Lang- und Kurzhang Sie brauchen. Damit können wir schon eine passende Form vorschlagen." },
    { question: "Bis wohin kommen Sie zum Aufmaß und zur Montage?", answer: "Im Umkreis von rund 200 km um Espelkamp kommt unser eigenes Team zum Aufmaß und baut die Ankleide dort auch ein. Ob Ihr Ort dazugehört, sagen wir Ihnen gern am Telefon unter 05771 9138312." },
  ],
};

const bkTypes = bkFormen.segments.map((s) => s.title);

/**
 * JSON-LD wie beim Geschwister Kleiderschrank (Service, nicht Product mit Preis):
 * Service, BreadcrumbList (4 Ebenen), FAQPage (1:1 zu den sichtbaren FAQ),
 * ItemList. Keine offers/aggregateRating, kein HowTo (Kit §6).
 */
export const bkJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Begehbarer Kleiderschrank nach Maß",
    serviceType: "Maßgefertigte begehbare Kleiderschränke und Ankleiden",
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
      name: "Begehbare Kleiderschränke nach Maß",
      itemListElement: bkTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Begehbarer Kleiderschrank: ${name}` },
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
      { "@type": "ListItem", position: 4, name: "Begehbarer Kleiderschrank nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bkFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Begehbarer Kleiderschrank nach Maß: Formen",
    itemListElement: bkTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
