/**
 * Content for the `/badmoebel-nach-mass/` page: the "Badmöbel nach Maß" cluster
 * pillar under the `/moebel-nach-mass/` hub. Built from the Privat library
 * sections (same composition as einbauschraenke-nach-mass) plus a SpecTable
 * comparison section (Kit §3 Modul 5). Copy follows the Fast Systemmöbel brand
 * voice (Sie-Anrede, handwerklich, konkret, belegt, keine em-dashes). See
 * docs/seo/brand/BRAND_VOICE.md and docs/seo/brand/FACTS.md.
 *
 * Bilder: vorerst Platzhalter aus /images/einbauschraenke/ (Vorlage-Assets);
 * Alt-Texte beschreiben bereits die gewünschten Bad-Motive. Vor Launch gegen
 * echte Badmöbel-Fotos tauschen (siehe REVIEW.md Bild-Vorschläge).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/badmoebel-nach-mass/";
const IMG = "/images/einbauschraenke";

export const badHero = {
  bgImage: `${IMG}/einbauschrank-nach-mass-wand-zu-wand-grifflos.jpg`,
  imageAlt:
    "Badmöbel nach Maß in einem hellen Bad: Waschtisch mit Unterschrank und passendem Spiegelschrank, feuchtigkeitsbeständig verarbeitet von Fast Systemmöbel",
  title: "Badmöbel nach Maß aus Espelkamp",
  intro:
    "Wir planen und fertigen Ihre Badmöbel nach Maß, auf den Millimeter genau für Ihr Bad. Beratung, 3D-Planung, Fertigung und Montage aus unserem Meisterbetrieb in Espelkamp, das Aufmaß vor Ort kostet nichts. Die Kanten? Mit PU-Technik verschlossen, fugenlos und feuchtigkeitsbeständig.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Badmöbel nach Maß" },
  ],
};

export const badIntroStats = {
  since: "seit 1996",
  sinceSub: "Fertigen wir Möbel nach Maß.",
  heading: "Badmöbel nach Maß, die genau in Ihr Bad passen",
  introBefore:
    "Fast Systemmöbel aus Espelkamp plant Ihr Bad von der ersten Idee bis zur Montage. Wir nehmen uns Zeit für das Aufmaß bei Ihnen und nutzen jeden",
  introBold: "Zentimeter",
  introAfter:
    ". Waschtisch, Unterschrank und Schränke schließen exakt an Wand, Nische und Anschlüsse an. Keine Passleisten, kein verschenkter Stauraum, auch bei schmalen Bädern und Dachschrägen.",
  bandImage: `${IMG}/kleiderschrank-nach-mass-weiss-offen.jpg`,
  bandAlt: "Waschtischunterschrank nach Maß mit geöffneten Auszügen und passgenauer Einteilung",
  col1Title: "Badmöbel planen",
  col1Body:
    "Wir planen Ihr Bad um Sie herum: Raumhöhe, Nische, Dachschräge, Becken, Armatur und Anschlüsse fließen in die Planung ein. Danach teilen wir Fächer, Auszüge und Beleuchtung ein. Bei den Fronten haben Sie freie Wahl: lackiertes MDF im RAL-Farbton, Dekor oder Massivholz.",
  col1CtaLabel: "Jetzt Badmöbel anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Jede Front, jeder Korpus, jeder Auszug entsteht in unserer eigenen Werkstatt in Espelkamp, wo alle unsere [Möbel nach Maß](/moebel-nach-mass/) gebaut werden. Kein Zwischenhändler, kein festes Rastermaß. Die Schnittkanten verleimen wir mit PU-Technik, fugenlos und feuchtigkeitsbeständig. Im Bad zählt genau das: Spritzwasser und Wasserdampf arbeiten dort jeden Tag an den Möbeln.",
  counterTarget: 72,
  counterDuration: 2000,
  counterSuffix: "K+",
  col3Title: "gefertigte Einzelteile",
  col3Body:
    "Mehr als 72.000 gefertigte Einzelteile haben unsere Fertigung schon verlassen. Die Homag-Technik arbeitet jedes Bauteil millimetergenau aus, danach prüft die Hand des Tischlers, ob alles sitzt. Deshalb schließt Ihr Badmöbel sauber mit Wand und Becken ab.",
  col3CtaLabel: "Badmöbel online planen",
  col3CtaHref: "/moebelplaner/",
};

export const badCtas = {
  intro: {
    image: `${IMG}/begehbare-ankleide-nach-mass-weiss.jpg`,
    heading: "Ihre Badmöbel nach Maß beginnen mit einem Gespräch",
    linkText: "Sprechen Sie mit uns über Ihr Bad",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/einbauschrank-dachschraege-nach-mass.jpg`,
    heading: "Ihr Bad verdient Möbel, die genau passen.",
    linkText: "Jetzt kostenloses Aufmaß anfragen",
    href: "/kontakt/",
  },
  /** Tertiary conversion path (Playbook §6): phone as a trust anchor, clickable on mobile. */
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/**
 * Fünf Schritte als nummerierte Steps statt Fließtext (Sektions-Politik Ben
 * 2026-07-24: Aufzählungen nie als Textwand in eine Sektion pressen).
 */
export const badProcessSteps = {
  eyebrow: "So läuft es ab",
  heading: "Ihre Badmöbel, alles aus einer Hand",
  image: `${IMG}/einbauschrank-montage-espelkamp.jpg`,
  imageAlt: "Monteure von Fast Systemmöbel montieren Badmöbel nach Maß vor Ort",
  steps: [
    {
      title: "Beratung",
      description:
        "Bei Ihnen zu Hause oder in unserem Büro. Wir hören erst einmal zu: Was soll Ihr Bad leisten?",
    },
    {
      title: "Aufmaß vor Ort",
      description:
        "Kostenlos bei Ihnen. Nische, Schräge, Becken, Armatur und Anschlüsse erfassen wir millimetergenau.",
    },
    {
      title: "3D-Planung",
      description:
        "Sie sehen Einteilung, Fronten und Oberfläche vorab und ändern, bevor das erste Bauteil entsteht.",
    },
    {
      title: "Fertigung",
      description:
        "Nach Ihrer Freigabe fertigen wir jedes Teil selbst in unserer Werkstatt in Espelkamp. Made in Germany.",
    },
    {
      title: "Montage",
      description:
        "Unser Montageteam baut zum verbindlichen Termin ein und richtet alles sauber an Wand und Becken aus.",
    },
  ],
};

/** Objekt-Taxonomie: drives the MnmTypische rows AND the JSON-LD OfferCatalog / ItemList. */
export const badTypische = {
  heading: "Badmöbel nach Maß für jeden Grundriss im Bad",
  image1: `${IMG}/begehbare-ankleide-nach-mass-eck.jpg`,
  image1Alt: "Badschrank nach Maß als raumhoher Hochschrank mit offenen und geschlossenen Fächern",
  image2: `${IMG}/einbauschrank-nach-mass-anthrazit-regalnische.jpg`,
  image2Alt: "Spiegelschrank nach Maß mit LED-Beleuchtung, bündig in eine Nische eingebaut",
  row1: [
    {
      title: "Waschtisch nach Maß",
      description:
        "Die Waschtischplatte in genau Ihrer Breite, von Wand zu Wand oder als Doppelwaschtisch fürs Familienbad. Den Ausschnitt für Ihr Aufsatz- oder Einbaubecken arbeiten wir passgenau ein.",
    },
    {
      title: "Waschtischunterschrank nach Maß",
      description:
        "Der Korpus unter dem Becken, hängend oder stehend. Die Auszüge planen wir um den Siphon herum, mit Vollauszug und Soft-Close, der Stauraum bleibt voll nutzbar.",
    },
    {
      title: "Badschrank nach Maß",
      description:
        "Stauraum abseits des Waschplatzes: Hochschrank, Hängeschrank oder Sideboard für Handtücher und Vorräte, passgenau in die Nische gebaut, bei Bedarf raumhoch bis unter die Decke.",
    },
  ],
  row2: [
    {
      title: "Spiegelschrank nach Maß",
      description:
        "Spiegel, Stauraum und Licht in einem Möbel. Mit LED-Beleuchtung, Steckdose im Inneren und Türen, die bündig in Ihre Nische einbauen, ohne ins Bad zu ragen.",
    },
    {
      title: "Badmöbel aus Massivholz",
      description:
        "Wer Holz im Bad möchte, bekommt Massivholz mit passender Oberfläche, geölt oder lackiert. Sauber verarbeitet hält es der Feuchtigkeit stand und bringt Wärme in den Raum.",
    },
    {
      title: "Badmöbel für kleine Bäder",
      description:
        "In schmalen Bädern, Nischen und unter Dachschrägen holen wir jeden Zentimeter Stauraum heraus. Hängende Möbel lassen den Boden frei, auf Wunsch planen wir unterfahrbar und barrierefrei.",
    },
  ],
};

export const badWarum = {
  heading: "Warum Badmöbel vom Tischler mehr können",
  paragraph:
    "Ein Bad verzeiht keine Näherungswerte. Deshalb kommen wir vor dem ersten Zuschnitt zu Ihnen und messen Nische, Schräge und Anschlüsse selbst, statt Sie Zahlen in eine Maske tippen zu lassen. Ihr vorhandenes Becken, Ihre Armatur, die Lage von Siphon und Wasseranschluss: darum herum bauen wir. Am Ende sitzen die Möbel ohne Blenden und Füllstücke in Wand und Nische. Wie das aussieht, zeigen unsere [Referenzprojekte](/referenzen/).",
  images: [
    {
      src: `${IMG}/einbauschrank-nach-mass-anthrazit-fenster.jpg`,
      alt: "Waschtisch nach Maß mit Unterschrank in Anthrazit, an Fensterwand und Armatur angepasst",
      width: 1280,
      height: 715,
    },
    {
      src: `${IMG}/kleiderschrank-nach-mass-auszuege-spiegel.jpg`,
      alt: "Waschtischunterschrank nach Maß mit ausgezogenen Schubladen um den Siphon herum",
      width: 1280,
      height: 715,
    },
    {
      src: `${IMG}/garderobe-flur-nach-mass-anthrazit.jpg`,
      alt: "Badschrank nach Maß in Anthrazit mit offenen und geschlossenen Fächern für Handtücher",
      width: 1280,
      height: 715,
    },
    {
      src: `${IMG}/raumteiler-eichenlamellen-nach-mass.jpg`,
      alt: "Badmöbel aus Massivholz nach Maß mit warmer Maserung und indirekter Beleuchtung",
      width: 1280,
      height: 715,
    },
  ],
};

/**
 * Vergleichstabelle (shared SpecTable, Kit §3 Modul 5): Tischler vs.
 * Online-Konfigurator vs. Möbelhaus als zitierbarer AEO-Container. Keine Preise.
 */
export const badVergleich = {
  heading: "Maßanfertigung, Online-Konfigurator oder Möbelhaus?",
  intro:
    "Drei Wege zu neuen Badmöbeln, drei Ergebnisse. Was die Maßanfertigung aus der Tischlerei von Konfigurator-Bausatz und Möbelhaus-Serie unterscheidet.",
  firstColLabel: "Kriterium",
  columns: [
    "Maßanfertigung vom Meisterbetrieb (Fast)",
    "Online-Konfigurator",
    "Möbelhaus / Serie",
  ],
  highlightColumn: 0,
  rows: [
    {
      label: "Passgenauigkeit",
      values: [
        "Wand zu Wand nach Aufmaß, auch in Nische und Dachschräge",
        "feste Rastermaße nach Ihren Eingaben",
        "Standardmaße, Lücken werden verblendet",
      ],
    },
    {
      label: "Feuchtigkeitsschutz",
      values: [
        "PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig",
        "je nach Anbieter, oft Standardkante",
        "wechselt von Serie zu Serie",
      ],
    },
    {
      label: "Beratung & Aufmaß",
      values: [
        "persönliche Beratung, Aufmaß vor Ort, 3D-Planung",
        "Selbstplanung in der Eingabemaske",
        "Verkaufsberatung im Markt",
      ],
    },
    {
      label: "Montage",
      values: [
        "eigenes Montageteam im Umkreis von 200 km",
        "Selbstmontage nach Speditionslieferung",
        "externe Monteure gegen Aufpreis",
      ],
    },
    {
      label: "Langlebigkeit",
      values: [
        "passgenau eingebaut, auf tägliche Feuchte ausgelegt",
        "abhängig von Material und Eigenmontage",
        "Qualität je nach Serie verschieden",
      ],
    },
  ],
};

/**
 * "Aus einer Hand"-USP als eigener Proof-Block (aus dem Warum-Absatz gelöst,
 * Sektions-Politik Ben 2026-07-24).
 */
export const badUsp = {
  eyebrow: "Aus einer Hand",
  heading: "Planung, Fertigung und Montage bleiben bei uns im Haus",
  body:
    "Weil Beratung, Aufmaß, 3D-Planung, Fertigung und Montage bei Fast Systemmöbel zusammenbleiben, geht an keiner Schnittstelle Verantwortung verloren. Vom ersten Gespräch bis zum eingebauten Möbel haben Sie einen persönlichen Ansprechpartner, der Ihr Bad und Ihre Planung kennt.",
  stat: { value: "1", label: "Ansprechpartner für Ihr Projekt" },
  image: `${IMG}/sonderanfertigung-nach-mass-weinwand.jpg`,
  imageAlt: "Individuell geplantes Badmöbel nach Maß als Beispiel für Sonderlösungen aus einer Hand",
};

/**
 * Vier Preisfaktoren als Karten statt Fließtext-Aufzählung (Sektions-Politik
 * Ben 2026-07-24). Keine Preise, keine Pauschalen (FACTS.md).
 */
export const badKosten = {
  eyebrow: "Kosten",
  heading: "Was Badmöbel nach Maß kosten",
  intro:
    "Ein Pauschalpreis? Den gibt es bei einer Maßanfertigung nicht, jedes Bad ist ein Unikat. Vier Faktoren bestimmen den Preis. Nach dem Aufmaß wissen Sie, woran Sie sind: ein individuelles Angebot, klar aufgeschlüsselt, ohne versteckte Kosten.",
  segments: [
    {
      title: "Umfang",
      body: "Ein einzelner Waschtischunterschrank kostet weniger als ein komplettes Bad mit Waschtisch, Hochschrank und Spiegelschrank.",
    },
    {
      title: "Material",
      body: "Beschichtete Platten und lackiertes MDF liegen unter Massivholz, das im Einkauf und in der Verarbeitung aufwändiger ist.",
    },
    {
      title: "Ausstattung",
      body: "Vollauszüge, Soft-Close und LED-Beleuchtung entscheiden im Alltag über den Komfort und fließen in den Preis ein.",
    },
    {
      title: "Einbausituation",
      body: "Eine gerade Wand ist schneller gemacht als Nische, Dachschräge oder die Anpassung an vorhandene Anschlüsse.",
    },
  ],
};

export const badGeschichte = {
  heading: "Möbelhandwerk aus fast drei Jahrzehnten",
  subheading: "Vom Garagenbetrieb zum Meisterbetrieb",
  anchorImage: `${IMG}/einbauschrank-nach-mass-anthrazit-regalnische.jpg`,
  anchorImageAlt:
    "Badmöbel nach Maß in Anthrazit mit offener Regalnische, gefertigt von Fast Systemmöbel in Espelkamp",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "4.000+", label: "Projekte" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "200 km", label: "Montage-Radius" },
  ],
  paragraphs: [
    "Fast Systemmöbel hat 1996 klein angefangen, als Ein-Mann-Betrieb in einer Garage in Rahden-Tonnenheide. Fünf Jahre später zog die Fertigung nach Espelkamp, und aus dem Gründungsbetrieb von Johann Fast wurde ein Familienunternehmen.",
    "Inzwischen ist die zweite Generation an Bord: Andreas und Peter Fast, seit 2010 mit im Unternehmen. Hinter jedem Auftrag stehen mehr als 4.000 Projekte, über 1.000 m² eigene Fertigung und ein festes Team. Auch hinter Ihrem Bad, wo die Feuchte der Verarbeitung mehr abverlangt als im Wohnraum.",
    "Jedes Möbel entsteht bei uns im Haus, gefertigt in Espelkamp und montiert im Umkreis von rund 200 km, in ganz OWL und darüber hinaus, etwa in Minden, Lübbecke, Osnabrück und Bielefeld. Freistehende Badmöbel liefern wir deutschlandweit.",
  ],
};

export const badMoebelplaner = {
  heading: "Ihre Badmöbel online planen und konfigurieren",
  body:
    "Mit unserem Möbelplaner stellen Sie Ihre Badmöbel online zusammen. Maße, Fronten, Einteilung, Auszüge: alles sehen Sie direkt im 3D-Konfigurator und spielen Varianten durch, bevor Sie sich festlegen. Den Rest übernehmen wir, vom Aufmaß bei Ihnen bis zur Montage. So wird aus Ihrer Online-Planung ein fertig montiertes Badmöbel.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/einbauschrank-nach-mass-wand-zu-wand-grifflos.jpg`,
  imageAlt: "Badmöbel nach Maß, grifflos und Wand zu Wand in ein Bad eingebaut",
};

export const badTestimonialsHeading = "Was unsere Kunden über ihre Möbel sagen";

export const badFaq = {
  heading: "Häufige Fragen zu Badmöbeln nach Maß",
  items: [
    {
      question: "Was kostet ein Badmöbel oder Waschtisch nach Maß?",
      answer:
        "Der Preis ist immer individuell. Er richtet sich nach dem Umfang, nach Material und Oberfläche, nach der Ausstattung mit Beschlägen und nach der Einbausituation. Statt einer Pauschale bekommen Sie nach dem Aufmaß ein Angebot, in dem jede Position nachvollziehbar ist.",
    },
    {
      question: "Was ist der Unterschied zwischen Waschtisch, Waschtischunterschrank, Badschrank und Spiegelschrank?",
      answer:
        "Der Waschtisch ist die Platte mit dem Ausschnitt für Ihr Aufsatz- oder Einbaubecken. Der Waschtischunterschrank ist der Korpus darunter, hängend oder stehend. Der Badschrank schafft Stauraum abseits des Waschplatzes, als Hoch- oder Hängeschrank. Und der Spiegelschrank verbindet Spiegel, Ablage und Licht über dem Becken. Alle vier fertigen wir nach Maß und stimmen sie aufeinander ab. So wirkt Ihr Bad als Einheit.",
    },
    {
      question: "Welches Material eignet sich für Badmöbel im Feuchtraum, Massivholz oder MDF?",
      answer:
        "Beides, wenn es sauber verarbeitet ist. Wir fertigen aus Massivholz genauso wie aus lackiertem MDF und beschichteten Platten, je nach Optik und Budget. Entscheidend im Feuchtraum ist der Kantenschutz. Bei uns heißt das PU-Kantenverleimung, sie verschließt die Schnittkanten fugenlos. Wasserfest versprechen wir nicht, aber so gebaut halten die Möbel der alltäglichen Feuchte im Bad über Jahre stand. Welches Material zu Ihnen passt, klären wir in der Beratung.",
    },
    {
      question: "Kann man Badmöbel für ein kleines Bad oder eine Nische maßanfertigen lassen?",
      answer:
        "Gerade dann lohnt sich die Maßanfertigung am meisten. In einem kleinen Bad zählt jeder Zentimeter, und Serienmöbel lassen an Nischen und Wänden Lücken. Wir nutzen die volle Breite und Raumhöhe und planen hängende Möbel, die den Boden frei lassen. Das lässt den Raum größer wirken. Auch schmale Restflächen neben WC oder Dusche werden so zu nutzbarem Stauraum.",
    },
    {
      question: "Lassen sich Badmöbel für Dachschrägen bauen?",
      answer:
        "Ja, Dachschrägen sind bei uns Alltag. Auch die niedrigen Zonen unter der Schräge nutzen wir, mit Fronten und Korpussen, die dem Verlauf exakt folgen. Beim Aufmaß erfassen wir den Winkel genau, in der 3D-Planung sehen Sie das Ergebnis, bevor wir bauen.",
    },
    {
      question: "Können die Möbel an mein vorhandenes Waschbecken, meine Armatur und den Siphon angepasst werden?",
      answer:
        "Ja, das ist bei uns der Normalfall. Beim Termin vor Ort nehmen wir Becken, Armatur und die Lage der Anschlüsse mit auf. In den Waschtisch arbeiten wir den Beckenausschnitt exakt ein, im Unterschrank planen wir die Auszüge um den Siphon herum. Neue Sanitärobjekte müssen Sie nicht kaufen. Wir richten uns nach dem, was schon an Ihrer Wand hängt.",
    },
    {
      question: "Wie läuft die Maßanfertigung ab, von der Beratung bis zur Montage?",
      answer:
        "In fünf Schritten: Beratung bei Ihnen oder im Büro, Aufmaß vor Ort, 3D-Planung, Fertigung in unserer eigenen Werkstatt und Montage. Dabei haben Sie durchgehend einen persönlichen Ansprechpartner.",
    },
    {
      question: "Kostet das Aufmaß etwas, und montieren Sie die Möbel selbst?",
      answer:
        "Das Aufmaß ist kostenlos und findet bei Ihnen vor Ort statt. Montiert wird von unserem eigenen Team, im Umkreis von rund 200 km um Espelkamp, also in ganz OWL und darüber hinaus. Freistehende Badmöbel liefern wir auch deutschlandweit. Eine pauschale Lieferzeit nennen wir nicht, den verbindlichen Termin legen wir nach Aufmaß und Freigabe fest.",
    },
    {
      question: "Kann ich online selbst planen oder brauche ich eine persönliche Beratung?",
      answer:
        "Beides geht. Mit unserem [Möbelplaner](/moebelplaner/) entwerfen Sie Ihre Badmöbel selbst im 3D-Konfigurator, oder Sie planen mit uns im Gespräch und beim Termin vor Ort. Viele Kunden starten online und feilen danach mit uns an den Details. Beide Wege führen zum selben Ergebnis.",
    },
    {
      question: "Wie pflege ich Holz-Badmöbel im Bad richtig?",
      answer:
        "Lassen Sie Spritzwasser nicht lange stehen und wischen Sie Fronten und Platte mit einem weichen, leicht feuchten Tuch ab, ein mildes Reinigungsmittel genügt. Nach dem Duschen kurz lüften, damit der Dampf abzieht. Geölte Massivholzflächen freuen sich ab und zu über eine Nachpflege mit passendem Öl, lackierte und beschichtete Oberflächen sind besonders unempfindlich. So bleiben die Möbel lange robust und ansehnlich.",
    },
  ],
};

const badObjektTypen = [...badTypische.row1, ...badTypische.row2].map((t) => t.title);

/**
 * JSON-LD for the bathroom-furniture cluster pillar. Same scope as the wardrobe
 * pillar: Service (provider=Organization, serviceType, areaServed,
 * hasOfferCatalog), BreadcrumbList, FAQPage, ItemList. No Product, no
 * AggregateRating, no Offer with a price (Preise sind immer individuell, siehe
 * FACTS.md).
 */
export const badJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Badmöbel nach Maß",
    serviceType: "Maßgefertigte Badmöbel",
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
      name: "Badmöbel nach Maß",
      itemListElement: badObjektTypen.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Badmöbel nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: badFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Badmöbel nach Maß: Objekttypen",
    itemListElement: badObjektTypen.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
