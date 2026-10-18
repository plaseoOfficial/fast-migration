/**
 * Content for the `/wohnmoebel-nach-mass/wohnwand-nach-mass/` page: the
 * "Wohnwand nach Maß" cluster child (product) under the Wohnmöbel pillar
 * (`/wohnmoebel-nach-mass/`). Same section set as the Regal sibling
 * (`regal-nach-mass.ts`, Vorlage für Struktur und Textdichte) so each section
 * carries one topic (ARCHITECTURE.md §1.1). Copy is wohnwand-specific (die
 * raumhohe Gesamt-Wohnwand als System: geschlossen + offen, Wand zu Wand, TV-Nische
 * und Vitrine) to avoid cannibalising the pillar and the sibling product pages
 * (Regal = offene Fläche, Bücherregal = Buch-Maß, Raumteiler = zonierend,
 * TV-Wand = Medienfokus). Cluster-Map: docs/seo/playbooks/clusters/wohnmoebel.md.
 *
 * Copy follows the Fast Systemmöbel brand voice (Sie-Anrede, handwerklich,
 * konkret, belegt, keine em-dashes). See docs/seo/brand/BRAND_VOICE.md und
 * docs/seo/brand/FACTS.md.
 *
 * Copy: Authoring-Engine (Writer/Humanizer/QC/Chefredakteur) aus dem Research-Kit
 * (docs/seo/research/wohnwand-nach-mass.kit.md), Lauf 2026-10-14, Chefredakteur pass.
 * Bildpfade stammen aus dem Wohnmöbel-/Einbauschrank-Pool; die Alt-Texte
 * beschreiben das jeweilige Motiv (docs/seo/bilder.md), Bild-Vorschläge im REVIEW.md.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/wohnmoebel-nach-mass/wohnwand-nach-mass/";
const IMG = "/images/wohnmoebel";

export const wwHero = {
  bgImage: "/images/einbauschraenke/einbauschrank-nach-mass-anthrazit-regalnische.jpg",
  imageAlt:
    "Raumhohe Schrankwand in Anthrazit, Wand zu Wand, mit grifflosen Türen, offenen Mittelfächern und Schubladen",
  title: "Wohnwand nach Maß aus Espelkamp",
  intro:
    "Eine Wohnwand nach Maß ist ein raumhohes Möbel fürs Wohnzimmer, das geschlossene Schränke und offene Fächer verbindet, auf Wunsch mit TV-Nische und Vitrine. Wir passen sie millimetergenau von Wand zu Wand ein, ohne Passleisten. Unser Meisterbetrieb in Espelkamp misst kostenlos bei Ihnen auf, fertigt und montiert sie selbst.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Wohnmöbel nach Maß", href: "/wohnmoebel-nach-mass/" },
    { label: "Wohnwand nach Maß" },
  ],
};

export const wwIntroStats = {
  since: "seit 1996",
  sinceSub: "fertigen wir Möbel nach Maß in eigener Werkstatt.",
  heading: "Ihre Wand, bis in die Ecken genutzt",
  introBefore:
    "Möbelhaus-Wohnwände bestehen aus Elementen fester Breite. An den Seiten bleiben Lücken, oben eine Staubfläche, und das TV-Fach passt zu irgendeinem Fernseher. Bei uns entsteht Ihre Wohnwand für genau eine Wand. Auf den",
  introBold: "Millimeter",
  introAfter: ".",
  bandImage: `${IMG}/wohnmoebel-nach-mass-wohn-essbereich.jpg`,
  bandAlt:
    "Wohn- und Essbereich mit frei stehendem Holzblock für Fernseher und Glaskamin",
  col1Title: "Von Wand zu Wand, bis unter die Decke",
  col1Body:
    "Seitlich und zur Decke schließt die Wohnwand bündig ab, ohne Blende und ohne Spalt. Die Aufteilung in Schränke und offene Fächer folgt Ihrem Alltag, nicht einem Katalog.",
  col1CtaLabel: "Wohnwand nach Maß anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Wer bei uns [maßgefertigte Wohnmöbel](/wohnmoebel-nach-mass/) bestellt, bekommt Korpusse und Fronten aus unserer Werkstatt in Espelkamp. Familie Fast führt den Meisterbetrieb, die zweite Generation arbeitet seit 2010 mit.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Zum Aufmaß und zur Montage kommt unser eigenes Team, im Umkreis von rund 200 km um Espelkamp, etwa nach Minden, Bielefeld oder Osnabrück. Geliefert wird deutschlandweit, eingebaut nur im Montagegebiet.",
  col3CtaLabel: "Wohnwand online vorplanen",
  col3CtaHref: "/moebelplaner/",
};

export const wwCtas = {
  intro: {
    image: `${IMG}/wohnmoebel-nach-mass-wohn-essbereich.jpg`,
    heading: "Welche Wohnwand passt an Ihre Wand? Das klären wir vor Ort.",
    linkText: "Beratungstermin für Ihre Wohnwand vereinbaren",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/tv-wand-nach-mass-wandpolsterung.jpg`,
    heading: "Ihre Wand steht schon. Planen wir die Wohnwand dazu.",
    linkText: "Wohnwand anfragen und kostenlos aufmessen lassen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SegmentCards (shared): Bauformen der Wohnwand (Kit §3 Modul 2, MI 1). */
export const wwVarianten = {
  heading: "Vier Bauformen für Ihre Wohnwand nach Maß",
  intro:
    "Welche Bauform passt, entscheidet Ihr Raum: wie lang die Wand ist, wo Fenster und Türen liegen und wo das Sofa steht. Kombinieren lassen sich die vier auch, etwa über Eck mit TV-Nische.",
  segments: [
    {
      title: "Raumhoch, Wand zu Wand",
      body: "Die klassische Gesamtwand über volle Breite und Höhe. Mehr Stauraum holen Sie aus dieser Wand nicht heraus, und sie wirkt wie aus einem Stück.",
    },
    {
      title: "Über Eck",
      body: "Die Wohnwand läuft um die Ecke, und aus dem Winkel wird Stauraum. Das lohnt sich, wenn Fenster oder Tür eine Wand zu kurz lassen.",
    },
    {
      title: "Schwebend über dem Lowboard",
      body: "Lowboard und Oberschränke hängen an der Wand, darunter bleibt der Boden frei. Das wirkt leichter. Und Saugroboter oder Wischmopp kommen überall hin.",
    },
    {
      title: "Mit TV-Nische und Vitrine",
      body: "Der Fernseher bekommt seine eigene Nische. Daneben steht die Vitrine mit Glastüren, für Gläser oder Sammelstücke. Licht planen wir auf Wunsch gleich mit ein.",
    },
  ],
};

/** SpecTable (shared): Maß-Orientierung. Qualitativ, keine cm-Werte (Kit §9b-4). */
export const wwMasse = {
  heading: "Welche Maße sind bei einer Wohnwand nach Maß möglich?",
  intro:
    "Eine Wohnwand nach Maß hat keine Katalogmaße. Höhe und Breite gibt Ihre Wand vor, bis unter die Decke und bis in beide Ecken. Die Tiefe richtet sich nach Fernseher, Geräten und allem, was hinter Türen soll. Die übliche Orientierung ist allgemeines Planungswissen, festgelegt wird jedes Maß beim Aufmaß.",
  firstColLabel: "Maß",
  columns: ["Übliche Orientierung", "Bei Fast nach Maß"],
  highlightColumn: 1,
  rows: [
    {
      label: "Höhe",
      values: [
        "Je höher die Wand, desto mehr Stauraum. Ganz oben landet, was man selten braucht.",
        "Raumhoch mit Oberschränken bis an die Decke, oben bündig angeschlossen.",
      ],
    },
    {
      label: "Breite",
      values: [
        "Breite Türen schwingen weit in den Raum. Schmalere Felder lassen vor dem Sofa mehr Platz.",
        "Genau auf Ihre Wandlänge gebaut. Die Türbreiten richten wir nach Sofa und Laufwegen.",
      ],
    },
    {
      label: "Tiefe unten und oben",
      values: [
        "Unten meist tiefer, für Schubladen und Geräte. Oben flacher, damit die Wand nicht wuchtig wirkt.",
        "Für jedes Element einzeln, je nachdem, ob Receiver, Ordner oder Geschirr hineinkommen.",
      ],
    },
    {
      label: "TV-Bereich",
      values: [
        "Faustregel: Bildschirmmitte auf Augenhöhe, vom Sofa aus gesehen.",
        "Die Nische planen wir nach Fernseher und Sitzplatz, auf Wunsch mit Reserve für ein größeres Gerät.",
      ],
    },
    {
      label: "Nische, Ecke und Dachschräge",
      values: [
        "Hier passt Standardware selten. Übrig bleiben Lücken und ungenutzte Schrägen.",
        "Oberschränke folgen der Schräge, über Eck läuft die Wand weiter, eine Nische füllt sie ganz.",
      ],
    },
  ],
};

/** UspHighlight (shared): TV- und Kabelintegration + PU-Kante + Fronten (Kit §3 Modul 5). */
export const wwTechnik = {
  eyebrow: "Technik und Verarbeitung",
  heading: "Die TV-Nische ist Teil der Wohnwand",
  body:
    "Die TV-Nische bekommt Kabeldurchführungen, dazu Fächer für Receiver, Konsole oder Soundbar, mit Luft für die Geräte. Kein Kabel hängt mehr sichtbar an der Wand. Die Kanten verschließen wir mit PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig. Türen planen wir als Dreh-, Klapp- oder Schiebetür, mit Griff oder grifflos, an der Vitrine mit Glas.",
  image: "/images/einbauschraenke/einbauschrank-nach-mass-anthrazit-fenster.jpg",
  imageAlt:
    "Schrankwand in Anthrazit mit beleuchteten offenen Fächern und Schubladen neben einer Fenstertür",
};

/** SegmentCards (shared): Abgrenzung zu den Schwester-Möbeln (Kit §6 Gap, §5 FAQ 6). Sibling-Links. */
export const wwAbgrenzung = {
  heading: "Wohnwand oder ein anderes Möbel?",
  intro:
    "Eine Wohnwand lohnt sich, wenn viel hinter Türen verschwinden soll und Fernseher, Vitrine und offene Ablagen an dieselbe Wand gehören. Passt das nicht zu Ihrem Plan, ist eines dieser Möbel oft die bessere Wahl.",
  segments: [
    {
      title: "Offenes Regal",
      body: "Wer lieber zeigt als verstaut, braucht keine Türen. Ein [offenes Regal nach Maß](/wohnmoebel-nach-mass/regal-nach-mass/) teilt die Wand in frei geplante Fächer.",
    },
    {
      title: "Bücherregal",
      body: "Gehört die Wand vor allem Ihren Büchern, planen wir lieber ein [Bücherregal nach Maß](/wohnmoebel-nach-mass/buecherregal-nach-mass/). Fachtiefe und Fachhöhe richten sich dann nach Ihren Buchformaten.",
    },
    {
      title: "Raumteiler",
      body: "Soll das Möbel frei im Raum stehen und Wohn- und Essbereich trennen, ist ein [Raumteiler nach Maß](/wohnmoebel-nach-mass/raumteiler-nach-mass/) gefragt. Den nutzen Sie von beiden Seiten.",
    },
    {
      title: "TV-Wand und Sideboard",
      body: "Dreht sich alles um den Fernseher, reicht oft eine TV-Wand mit Lowboard. Für niedrigen Stauraum ohne Oberschränke genügt ein Sideboard, beides auch nach Maß.",
    },
  ],
};

/** ProcessSteps (shared): Mini-Prozess (Vollprozess liegt beim Pillar). */
export const wwProcess = {
  eyebrow: "Ablauf",
  heading: "Von der Beratung bis zur fertigen Wohnwand",
  image: "/images/einbauschraenke/einbauschrank-montage-espelkamp.jpg",
  imageAlt:
    "Zwei Monteure richten eine Lamellenwand aus Holz vor einem Raum-in-Raum-Element mit Glaswand aus",
  steps: [
    {
      title: "Beratung und kostenloses Aufmaß",
      description:
        "Wir klären, was in die Wohnwand soll, vom Fernseher bis zum Geschirr. Dann messen wir Wand, Decke und Ecken kostenlos bei Ihnen auf.",
    },
    {
      title: "Technische 3D-Planung",
      description:
        "Wir zeichnen die Wohnwand in 3D, Schrank für Schrank, mit TV-Nische und Fronten. Sie prüfen alles in Ruhe und geben dann frei.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "In der eigenen Werkstatt schneiden wir Korpusse und Fronten zu, verleimen die Kanten und bohren für die Beschläge. Den Montagetermin bekommen Sie verbindlich.",
    },
    {
      title: "Montage durch unser eigenes Team",
      description:
        "Unser Montageteam baut die Wohnwand stehend oder hängend auf, richtet sie an Wänden und Decke aus und justiert die Fronten. Fertig.",
    },
  ],
};

/** SpecTable (shared): Kostentreiber. KEINE Preise/€-Zahlen (Kit §8). */
export const wwKosten = {
  heading: "Was kostet eine Wohnwand nach Maß?",
  intro:
    "Was eine Wohnwand nach Maß kostet, ergibt sich aus fünf Faktoren: Größe, Anteil an Türen und Schubladen, Material, Ausstattung und Einbausituation. Einen Katalogpreis gibt es nicht, jede Planung rechnen wir einzeln. Ihr Angebot bekommen Sie nach dem kostenlosen Aufmaß, auf Wunsch auch mit Finanzierung.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Größe und laufende Meter",
      values: ["Jeder laufende Meter braucht Korpusse, Fronten und Werkstattzeit. Raumhoch kommen Oberschränke dazu."],
    },
    {
      label: "Anteil geschlossen und offen",
      values: ["Türen, Klappen und Schubladen brauchen Front und Beschlag. Offene Fächer machen weniger Arbeit."],
    },
    {
      label: "Material und Fronten",
      values: ["Massivholz oder Plattenwerkstoff und die Oberfläche der Fronten wirken sich direkt auf den Preis aus."],
    },
    {
      label: "Ausstattung",
      values: ["Licht, Glastüren an der Vitrine oder Kabelwege für die TV-Nische bedeuten zusätzliche Teile und Arbeit."],
    },
    {
      label: "Einbausituation und Montage",
      values: ["Schwebende Montage braucht die passende Wandbefestigung, Schräge, Ecke oder schiefe Wände zusätzliche Anpassung."],
    },
  ],
};

export const wwMoebelplaner = {
  heading: "Erst skizzieren, dann gemeinsam planen",
  body:
    "Wie breit, wie hoch, wie viel hinter Türen? Das probieren Sie im [Möbelplaner](/moebelplaner/) in Ruhe aus, mit grob gemessener Wandbreite und Raumhöhe. Ihren Entwurf nehmen wir als Ausgangspunkt für die Beratung. Das Feinmaß kommt beim Aufmaß, Bau und Montage bleiben bei uns.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/wohnmoebel-nach-mass-tv-wand-kamin.jpg`,
  imageAlt:
    "Wohnzimmer mit holzverkleideter TV-Wand, eingelassenem Kamin und offenem Regal im Hintergrund",
};

export const wwTestimonialsHeading = "Was Kunden über die Arbeit mit uns sagen";

export const wwFaq = {
  heading: "Häufige Fragen zur Wohnwand nach Maß",
  items: [
    {
      question: "Passt eine Wohnwand nach Maß unter eine Dachschräge, in eine Nische oder über Eck?",
      answer:
        "Ja, genau dort zahlt sich das Aufmaß aus. Wir erfassen Winkel, Nischentiefe und Mauervorsprünge, dazu jede Steckdose und die Antennendose. Die Wohnwand planen wir so, dass alle Anschlüsse erreichbar bleiben.",
    },
    {
      question: "Kann eine Wohnwand nach Maß auch schwebend an der Wand hängen?",
      answer:
        "Ja, wenn die Wand es trägt. Ob Ihre Wand Schränke, Fernseher und Inhalt hält, prüfen wir beim Aufmaß. Trockenbau braucht oft eine andere Befestigung als Mauerwerk.",
    },
    {
      question: "Aus welchem Material wird eine Wohnwand nach Maß gebaut?",
      answer:
        "Aus Massivholz oder hochwertigen Plattenwerkstoffen. Korpus und Fronten müssen dabei nicht gleich sein, und an der Vitrine kommt Glas dazu. Welche Oberfläche zu Ihrem Wohnzimmer passt, legen wir in der Beratung fest.",
    },
    {
      question: "Wie robust ist eine Wohnwand im Alltag mit Kindern?",
      answer:
        "Am Möbel leiden zuerst die Kanten. Die fugenlose PU-Kante lässt keine Ritze für Schmutz und ist feuchtigkeitsbeständig. Hohe stehende Elemente sichern wir zusätzlich an der Wand, damit nichts kippt. Für stark beanspruchte Fronten empfehlen wir eine strapazierfähige Oberfläche.",
    },
    {
      question: "Wie lange dauert es, bis meine Wohnwand steht?",
      answer:
        "Eine pauschale Wochenzahl nennen wir nicht, dafür ist jede Wohnwand in Umfang und Ausstattung zu verschieden. Sobald Sie nach dem Aufmaß die 3D-Planung freigegeben haben, bekommen Sie von uns den verbindlichen Montagetermin.",
    },
    {
      question: "Kann ich meine Wohnwand später erweitern?",
      answer:
        "Ja, am einfachsten, wenn Sie es schon bei der Planung sagen. Dann planen wir die Wohnwand so, dass später ein Element dazukommen kann. Ob sich eine fertige Wohnwand nachträglich ergänzen lässt, prüfen wir vor Ort.",
    },
    {
      question: "Kann ich vor der Planung zu Ihnen nach Espelkamp kommen?",
      answer:
        "Gern. Unsere Ausstellung in Espelkamp hat rund 100 m², einen Termin bekommen Sie unter 05771 9138312. Oder wir beraten Sie bei Ihnen zu Hause, direkt vor der Wand, an die Ihre Wohnwand kommt.",
    },
  ],
};

const wwTypes = wwVarianten.segments.map((s) => s.title);

/**
 * JSON-LD for the Wohnwand product child. Same scope/convention as the pillar
 * and the Regal sibling (Service, not Product-with-price): Service
 * (provider=Organization, serviceType, areaServed, hasOfferCatalog),
 * BreadcrumbList (4 levels), FAQPage (1:1 to visible FAQ), ItemList. No
 * offers/aggregateRating (Preise sind immer individuell, siehe FACTS.md).
 */
export const wwJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wohnwand nach Maß",
    serviceType: "Maßgefertigte Wohnwände",
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
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: 52.3833, longitude: 8.6167 },
        geoRadius: "200000",
      },
      { "@type": "Country", name: "DE" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wohnwände nach Maß",
      itemListElement: wwTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Wohnwand: ${name}` },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Wohnmöbel nach Maß", item: `${SITE}/wohnmoebel-nach-mass/` },
      { "@type": "ListItem", position: 4, name: "Wohnwand nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: wwFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Wohnwand nach Maß: Ausführungen",
    itemListElement: wwTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
