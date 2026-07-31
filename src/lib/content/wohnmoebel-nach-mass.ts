/**
 * Content for the `/wohnmoebel-nach-mass/` page: the "Wohnmöbel nach Maß"
 * cluster pillar under the `/moebel-nach-mass/` hub. Same composition as
 * badmoebel-nach-mass (Privat library sections + SpecTable comparison, Kit §3
 * Modul 5). Copy follows the Fast Systemmöbel brand voice (Sie-Anrede,
 * handwerklich, konkret, belegt, keine em-dashes). See docs/seo/brand/
 * BRAND_VOICE.md und docs/seo/brand/FACTS.md; Research-Kit unter
 * docs/seo/research/wohnmoebel-nach-mass.kit.md.
 *
 * Bilder: vorerst Platzhalter aus /images/einbauschraenke/ (Vorlage-Assets);
 * Alt-Texte beschreiben bereits die gewünschten Wohnmöbel-Motive. Vor Launch
 * gegen echte Wohnmöbel-Fotos tauschen (siehe REVIEW.md Bild-Vorschläge).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/wohnmoebel-nach-mass/";
const IMG = "/images/wohnmoebel";

export const wohnHero = {
  bgImage: `${IMG}/wohnmoebel-nach-mass-tv-wand-kamin.jpg`,
  imageAlt:
    "Wohnzimmer mit TV-Wand nach Maß, integriertem Kamin und offenem Übergang zur Küche",
  title: "Wohnmöbel nach Maß aus dem Meisterbetrieb in Espelkamp",
  intro:
    "Sie wollen Wohnmöbel, die in Ihr Wohnzimmer passen, statt ein Standardregal, um das herum Lücken bleiben. Als Tischler-Meisterbetrieb in Espelkamp planen, fertigen und montieren wir Wohnmöbel nach Maß selbst: von der TV-Wand über die Wohnwand bis zum Sideboard. Alles aus einer Hand.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Wohnmöbel nach Maß" },
  ],
};

export const wohnIntroStats = {
  since: "seit 1996",
  sinceSub: "fertigen wir Möbel nach Maß.",
  heading: "Wohnmöbel nach Maß, die genau in Ihren Wohnraum passen",
  introBefore:
    "Von der Stange passt selten wirklich. Jede Wand hat ihre Länge, jede Nische ihre Tiefe, jede Dachschräge ihren Winkel. Wir messen bei Ihnen vor Ort auf und nutzen jeden",
  introBold: "Zentimeter",
  introAfter:
    ", Wand zu Wand, in der Nische und unter der Schräge. So entsteht ein Möbel, das aussieht, als wäre der Raum darum herum gebaut worden.",
  bandImage: `${IMG}/sideboard-nach-mass-weiss-metallgestell.jpg`,
  bandAlt: "Sideboard nach Maß in Weiß auf schlankem Metallgestell mit offenem Mittelfach",
  col1Title: "Wohnraum planen",
  col1Body:
    "Wir planen Ihre Wohnmöbel um Sie und Ihren Alltag herum, nicht um ein fertiges Raster. Fronten und Materialien wählen Sie frei, von lackiertem MDF über Dekor bis Massivholz.",
  col1CtaLabel: "Jetzt Wohnmöbel anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Jede Front und jeder Korpus entsteht in unserer eigenen Werkstatt in Espelkamp, wo alle [Möbel nach Maß](/moebel-nach-mass/) von Fast gebaut werden. Die Schnittkanten verschließen wir fugenlos mit PU-Kantenverleimung. Das bleibt feuchtigkeitsbeständig und hält, was der Alltag ihm zumutet.",
  counterTarget: 72,
  counterDuration: 2000,
  counterSuffix: "K+",
  col3Title: "gefertigte Einzelteile",
  col3Body:
    "Mehr als 72.000 Einzelteile haben unsere Fertigung schon verlassen, jedes millimetergenau ausgearbeitet und für ein bestimmtes Möbel zugeschnitten.",
  col3CtaLabel: "Wohnmöbel online planen",
  col3CtaHref: "/moebelplaner/",
};

export const wohnCtas = {
  intro: {
    image: `${IMG}/wohnmoebel-nach-mass-wohn-essbereich.jpg`,
    heading: "Ihre Wohnmöbel nach Maß beginnen mit einem Gespräch",
    linkText: "Sprechen Sie mit uns über Ihren Wohnraum",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/tv-wand-nach-mass-wandpolsterung.jpg`,
    heading: "Ihr Wohnraum verdient Möbel, die genau passen.",
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
export const wohnProcessSteps = {
  eyebrow: "So läuft es ab",
  heading: "Ihre Wohnmöbel, alles aus einer Hand",
  image: "/images/einbauschraenke/einbauschrank-montage-espelkamp.jpg",
  imageAlt: "Monteure von Fast Systemmöbel bei der Montage eines Einbaumöbels vor Ort",
  steps: [
    {
      title: "Beratung",
      description:
        "Wir hören erst einmal zu, bei Ihnen zu Hause oder in unserem Büro. Was soll Ihr Wohnraum leisten, was stört am Zuschnitt, welche Möbel schweben Ihnen vor?",
    },
    {
      title: "Aufmaß vor Ort",
      description:
        "Das Aufmaß machen wir kostenlos bei Ihnen. Wand, Nische, Dachschräge und Anschlüsse erfassen wir millimetergenau, damit Ihre Wohnmöbel später ohne Nacharbeit sitzen.",
    },
    {
      title: "3D-Planung",
      description:
        "In der technischen 3D-Planung sehen Sie Einteilung, Fronten und Oberfläche vorab. Wir ändern gemeinsam so lange, bis alles stimmt, bevor das erste Teil in Fertigung geht.",
    },
    {
      title: "Fertigung",
      description:
        "Nach Ihrer Freigabe fertigen wir jedes Bauteil selbst in unserer Werkstatt in Espelkamp, in Eigenregie und mit fugenloser PU-Kante. Made in Germany, kein Zulieferer dazwischen.",
    },
    {
      title: "Montage",
      description:
        "Unser eigenes Montageteam baut Ihre Wohnmöbel zum verbindlichen Termin ein, richtet Wand zu Wand aus und hinterlässt Ihr Wohnzimmer sauber.",
    },
  ],
};

/** Objekt-Taxonomie: drives the MnmTypische rows AND the JSON-LD OfferCatalog / ItemList. */
export const wohnTypische = {
  heading: "Wohnmöbel nach Maß für jeden Raumzuschnitt",
  image1: `${IMG}/garderobe-nach-mass-flur-schrank-kommode.jpg`,
  image1Alt: "Garderobe nach Maß im Flur mit Hochschrank und zwei passenden Kommoden",
  image2: "/images/einbauschraenke/einbauschrank-nach-mass-anthrazit-regalnische.jpg",
  image2Alt: "Regal nach Maß, bündig in eine Nische im Wohnzimmer eingebaut",
  row1: [
    {
      title: "TV-Wand nach Maß",
      description:
        "Die Medienwand rund um Fernseher, Receiver und Soundbar, mit verdeckter Kabelführung sowie Lowboard und Hängeelementen in genau der Breite Ihrer Wand.",
    },
    {
      title: "Wohnwand nach Maß",
      description:
        "Geschlossener Stauraum und offene Flächen als eine Einheit, raumhoch von Wand zu Wand, auf Wunsch mit integrierter TV-Nische und Vitrine.",
    },
    {
      title: "Sideboard nach Maß",
      description:
        "Das niedrige Wohnzimmermöbel mit Schubladen und Türen, ob als Kommode, Anrichte, Highboard oder Lowboard, in genau Ihrer Breite, Höhe und Tiefe.",
    },
    {
      title: "Regal nach Maß",
      description:
        "Offene oder gemischte Fächer als flexible Fläche für Deko, Ordner und Kleinteile, passgenau in die Nische und bis unter die Decke geplant.",
    },
  ],
  row2: [
    {
      title: "Bücherregal nach Maß",
      description:
        "Fachhöhen und Tiefen nach Ihren Büchern, tragfähig geplant und raumhoch bis unter die Decke, auch als Bücherwand in der Nische.",
    },
    {
      title: "Raumteiler nach Maß",
      description:
        "Ein Möbel, das Wohn- und Essbereich zoniert, von beiden Seiten nutzbar ist und Stauraum bietet, ohne den Raum optisch zu verschließen.",
    },
    {
      title: "Einbauschrank im Wohnzimmer",
      description:
        "Geschlossener Stauraum Wand zu Wand, flächenbündig eingebaut, mit Dreh- oder Schiebetür, auch als Eckschrank in der Nische oder unter der Dachschräge.",
    },
  ],
};

export const wohnWarum = {
  heading: "Warum Wohnmöbel vom Tischler mehr können",
  paragraph:
    "Der Unterschied entsteht, bevor gesägt wird. Wir kommen zu Ihnen und messen Nische, Eckwand, Schräge und Fensterlaibung selbst auf, statt uns auf Rastermaße zu verlassen. Eine Dachschräge bauen wir bis zum letzten nutzbaren Zentimeter aus. Ein raumhoher Schrank schließt Wand zu Wand ab, ohne Passleisten und Lücken. Das kann ein Serienmöbel nicht. Wie unsere Wohnmöbel nach Maß aussehen, zeigen unsere [Referenzprojekte](/referenzen/), und wer dahintersteht, lesen Sie [über uns](/ueber-uns/).",
  images: [
    {
      src: "/images/einbauschraenke/einbauschrank-nach-mass-anthrazit-fenster.jpg",
      alt: "Wohnwand nach Maß in Anthrazit, an eine Fensterwand angepasst",
      width: 1280,
      height: 715,
    },
    {
      src: `${IMG}/garderobe-nach-mass-sitzbank-eiche.jpg`,
      alt: "Garderobenbank nach Maß in Weiß mit Eiche-Sitzfläche und zwei Schubladen",
      width: 1280,
      height: 715,
    },
    {
      src: `${IMG}/garderobe-nach-mass-nische-spiegel.jpg`,
      alt: "Garderobennische nach Maß mit Kleiderstange, Schubladen und Standspiegel",
      width: 1280,
      height: 715,
    },
    {
      src: "/images/einbauschraenke/raumteiler-eichenlamellen-nach-mass.jpg",
      alt: "Raumteiler nach Maß aus Holz mit warmer Maserung und indirekter Beleuchtung",
      width: 1280,
      height: 715,
    },
  ],
};

/**
 * Vergleichstabelle (shared SpecTable, Kit §3 Modul 5): Tischler vs.
 * Online-Konfigurator vs. Möbelhaus als zitierbarer AEO-Container. Keine Preise.
 */
export const wohnVergleich = {
  heading: "Maßanfertigung, Online-Konfigurator oder Möbelhaus?",
  intro:
    "Es gibt drei Wege zu neuen Wohnmöbeln, und sie führen zu drei verschiedenen Ergebnissen. Diese Übersicht zeigt, worin sich die Maßanfertigung vom Meisterbetrieb unterscheidet.",
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
        "Wand zu Wand nach Aufmaß, auch in Nische und unter Dachschräge",
        "feste Rastermaße nach Ihren Eingaben",
        "Standardmaße, Restlücken werden verblendet",
      ],
    },
    {
      label: "Material & Verarbeitung",
      values: [
        "Massivholz, MDF oder Dekor, Kanten fugenlos mit PU verleimt",
        "je nach Anbieter, oft Standardkante",
        "wechselt von Serie zu Serie",
      ],
    },
    {
      label: "Beratung & Aufmaß",
      values: [
        "persönliche Beratung, kostenloses Aufmaß vor Ort, 3D-Planung",
        "Selbstplanung in der Eingabemaske",
        "Verkaufsberatung im Markt",
      ],
    },
    {
      label: "Montage",
      values: [
        "eigenes Montageteam im Umkreis von rund 200 km",
        "Selbstmontage nach Speditionslieferung",
        "externe Monteure gegen Aufpreis",
      ],
    },
    {
      label: "Ansprechpartner",
      values: [
        "eine feste Person von der Beratung bis zur Abnahme",
        "Callcenter oder Chat statt Gesicht",
        "wechselnde Zuständigkeit je Abteilung",
      ],
    },
  ],
};

/**
 * "Aus einer Hand"-USP als eigener Proof-Block (Sektions-Politik Ben 2026-07-24).
 */
export const wohnUsp = {
  eyebrow: "Aus einer Hand",
  heading: "Planung, Fertigung und Montage bleiben bei uns im Haus",
  body:
    "Weil bei Fast Systemmöbel alles zusammenbleibt, geht an keiner Schnittstelle Verantwortung verloren. Wer Sie berät, plant Ihre Wohnmöbel, kennt das Aufmaß und weiß, wie das Möbel gefertigt und montiert wird. Ihre Wohnzimmermöbel nach Maß entstehen so durch eine Hand, mit einem festen Ansprechpartner statt Schuldzuweisungen zwischen Händler, Werk und Monteur.",
  stat: { value: "1", label: "Ansprechpartner für Ihr Projekt" },
  image: "/images/einbauschraenke/sonderanfertigung-nach-mass-weinwand.jpg",
  imageAlt: "Individuell geplantes Wohnmöbel nach Maß als Beispiel für Sonderlösungen aus einer Hand",
};

/**
 * Vier Preisfaktoren als Karten statt Fließtext-Aufzählung (Sektions-Politik
 * Ben 2026-07-24). Keine Preise, keine Pauschalen (FACTS.md).
 */
export const wohnKosten = {
  eyebrow: "Kosten",
  heading: "Was Wohnmöbel nach Maß kosten",
  intro:
    "Einen Pauschalpreis gibt es bei einer Maßanfertigung nicht, denn kein Wohnzimmer gleicht dem anderen. Vier Faktoren bestimmen den Preis. Nach dem kostenlosen Aufmaß erhalten Sie ein individuelles Angebot, das genau Ihr Möbel abbildet. Für private Wohnprojekte ist auf Wunsch auch eine Finanzierung möglich.",
  segments: [
    {
      title: "Umfang",
      body: "Ein einzelnes Sideboard schlägt anders zu Buche als eine raumhohe Wohnwand über die ganze Wand. Länge, Höhe und Anzahl der Elemente sind der größte Hebel.",
    },
    {
      title: "Material",
      body: "Beschichtete Platten und lackiertes MDF liegen unter Massivholz. Auch die gewählte Oberfläche, ob schlicht matt oder mit Glanz, wirkt sich aus.",
    },
    {
      title: "Ausstattung",
      body: "Auszüge, Soft-Close-Beschläge, Schiebetüren oder eine integrierte Beleuchtung erhöhen den Komfort und fließen in den Preis ein. Alles ist auf Anfrage planbar.",
    },
    {
      title: "Einbausituation",
      body: "Eine gerade Wand ist schneller gebaut als ein Eckschrank in der Nische oder ein Ausbau unter der Dachschräge. Der Montageaufwand zählt mit.",
    },
  ],
};

export const wohnGeschichte = {
  heading: "Möbelhandwerk aus fast drei Jahrzehnten",
  subheading: "Vom Garagenbetrieb zum Meisterbetrieb",
  anchorImage: `${IMG}/garderobe-nach-mass-flur-anthrazit.jpg`,
  anchorImageAlt:
    "Garderobe nach Maß in Anthrazit mit Kommode, Ablagen und Spiegel im Flur",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "4.000+", label: "Projekte" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "200 km", label: "Montage-Radius" },
  ],
  paragraphs: [
    "Angefangen hat Fast Systemmöbel 1996 klein, als Ein-Mann-Betrieb in einer Garage in Rahden-Tonnenheide. Fünf Jahre später zog die Fertigung nach Espelkamp, und aus dem Handwerker wurde ein Familienbetrieb.",
    "Heute ist die zweite Generation an Bord: Andreas und Peter Fast sind seit 2010 im Unternehmen und rücken Schritt für Schritt in die Geschäftsführung. Dahinter stehen über 4.000 Projekte und mehr als 1.000 m² eigene Fertigung, dazu ein Meisterbetrieb, der weiß, was er verspricht.",
    "Jedes Möbel entsteht bei uns im Haus, in Eigenregie in Espelkamp gefertigt und im Umkreis von rund 200 km montiert, in ganz OWL rund um Minden, Lübbecke, Osnabrück und Bielefeld. Freistehende Wohnmöbel liefern wir darüber hinaus deutschlandweit.",
  ],
};

export const wohnMoebelplaner = {
  heading: "Ihre Wohnmöbel online planen und konfigurieren",
  body:
    "Sie wollen sich erst einmal selbst ein Gefühl verschaffen? Mit unserem Möbelplaner stellen Sie Ihre Wohnmöbel online zusammen und sehen Maße, Fronten und Einteilung direkt im 3D-Konfigurator. Ihre Vorplanung schicken Sie uns, den Rest, vom Aufmaß bis zur Montage, übernehmen wir persönlich.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/arbeitszimmer-nach-mass-schreibtisch-sideboard.jpg`,
  imageAlt: "Arbeitszimmer nach Maß mit Schreibtisch, Besprechungstisch und Sideboard",
};

export const wohnTestimonialsHeading = "Was unsere Kunden über ihre Möbel sagen";

export const wohnFaq = {
  heading: "Häufige Fragen zu Wohnmöbeln nach Maß",
  items: [
    {
      question: "Was kosten Wohnmöbel nach Maß (TV-Wand, Wohnwand, Sideboard, Regal)?",
      answer:
        "Einen festen Preis oder eine Pauschale können wir seriös nicht nennen, weil jedes Möbel individuell geplant wird. Den Preis bestimmen vor allem der Umfang, das Material, die Ausstattung wie Auszüge oder Beleuchtung und die Einbausituation. Nach dem kostenlosen Aufmaß erhalten Sie ein verbindliches, individuelles Angebot.",
    },
    {
      question: "Lohnt sich Möbel nach Maß gegenüber Möbeln von der Stange?",
      answer:
        "Wenn Ihr Raum vom Standard abweicht, fast immer. Serienmöbel lassen Lücken an Wand, Ecke oder Schräge, die verblendet werden. Ein Möbel nach Maß nutzt genau diese Flächen und schließt Wand zu Wand ab. Sie zahlen für passgenauen Stauraum statt für verschenkten Platz.",
    },
    {
      question: "Wer misst meinen Raum oder meine Nische für die Maßmöbel aus?",
      answer:
        "Das übernehmen wir. Nach dem ersten Gespräch kommen wir zum kostenlosen Aufmaß vor Ort und erfassen Wand, Nische, Ecke und Dachschräge millimetergenau. Sie müssen selbst nichts ausmessen, und Fehler beim Zuschnitt sind so ausgeschlossen.",
    },
    {
      question: "Wie lange dauert Fertigung und Lieferung?",
      answer:
        "Das hängt vom Umfang und der aktuellen Auslastung ab. Statt eine Wochenzahl zu versprechen, die dann nicht hält, nennen wir Ihnen nach dem Aufmaß und Ihrer Freigabe einen verbindlichen Termin für Fertigung und Montage, auf den Sie sich verlassen können.",
    },
    {
      question: "Ist die Montage inklusive und wie weit fahren Sie?",
      answer:
        "Ihre Wohnmöbel baut unser eigenes Montageteam ein, im Umkreis von rund 200 km um Espelkamp, also in ganz OWL und den angrenzenden Regionen. Freistehende Möbel wie ein Sideboard liefern wir darüber hinaus deutschlandweit. Was montiert werden muss, ist an das Montagegebiet gebunden.",
    },
    {
      question: "Welche Materialien und Oberflächen gibt es?",
      answer:
        "Vom Massivholz über lackiertes MDF bis zu beschichteten Platten ist vieles möglich, Fronten und Materialien wählen Sie frei. Ob eher matt oder mit Glanz, klären wir in der Beratung anhand Ihres Raums. So passt die Oberfläche zu Nutzung und Wohnstil.",
    },
    {
      question: "Können Wohnmöbel für Dachschrägen oder schwierige Nischen gebaut werden?",
      answer:
        "Ja, genau dafür ist Maßanfertigung da. Dachschrägen, schmale Nischen und schiefe Ecken gehören für uns zum Alltag. Den Winkel und die Tiefe erfassen wir beim Aufmaß, danach fertigen wir den Korpus exakt passend, sodass kein Zentimeter ungenutzt bleibt.",
    },
    {
      question: "Was unterscheidet einen Tischler-Meisterbetrieb vom Online-Konfigurator?",
      answer:
        "Beim Konfigurator planen Sie selbst in einer Eingabemaske und montieren am Ende selbst. Bei uns beraten wir persönlich, messen vor Ort auf, planen in 3D und montieren mit eigenem Team. Sie haben einen festen Ansprechpartner statt Callcenter, und die Möbel sitzen ohne Passleisten.",
    },
    {
      question: "Kann ein Regal oder Einbauschrank als Raumteiler dienen?",
      answer:
        "Ja. Ein Raumteiler nach Maß gliedert zum Beispiel Wohn- und Essbereich, ist von beiden Seiten nutzbar und bietet Stauraum, ohne den Raum zu verschließen. Ob offen, halboffen oder mit geschlossenen Fächern, planen wir nach Ihrer gewünschten Raumwirkung.",
    },
    {
      question: "Was bedeutet PU-Kantenverleimung und warum ist sie wichtig?",
      answer:
        "Bei der PU-Kantenverleimung wird die Kante mit Polyurethan-Kleber fugenlos mit dem Korpus verbunden, ohne sichtbare Naht. Das sieht sauber aus und ist feuchtigkeitsbeständig, sodass an der Kante nichts eindringt und Ihre Wohnmöbel auch nach Jahren stabil bleiben.",
    },
    {
      question: "Welche Gewährleistung und Qualität gibt es auf maßgefertigte Wohnmöbel?",
      answer:
        "Für Ihre Wohnmöbel gilt die gesetzliche Gewährleistung wie für jede Neuanfertigung. Wichtiger für den Alltag ist die Bauweise: massive Korpusse, fugenlose PU-Kante und in Eigenregie gefertigte Bauteile sorgen dafür, dass ein Möbel nach Maß über Jahre formstabil bleibt und nicht nach der ersten Saison arbeitet. Eine Garantiezahl versprechen wir bewusst nicht, sondern die Verarbeitung eines Meisterbetriebs.",
    },
    {
      question: "Wie viel Vorlauf brauche ich bei Umzug oder Renovierung?",
      answer:
        "Planen Sie lieber früh mit uns, statt kurz vor dem Umzugstermin. Sobald Wände und Anschlüsse stehen, kommen wir zum kostenlosen Aufmaß und nennen Ihnen nach Ihrer Freigabe einen verbindlichen Termin für Fertigung und Montage. So sind Ihre Wohnmöbel nach Maß fertig, wenn Sie den Raum wirklich brauchen, ohne dass Sie auf gut Glück Wochen schätzen müssen.",
    },
  ],
};

const wohnObjektTypen = [...wohnTypische.row1, ...wohnTypische.row2].map((t) => t.title);

/**
 * JSON-LD for the living-room-furniture cluster pillar. Same scope as the
 * bathroom pillar: Service (provider=Organization, serviceType, areaServed,
 * hasOfferCatalog), BreadcrumbList, FAQPage, ItemList. No Product, no
 * AggregateRating, no Offer with a price (Preise sind immer individuell, siehe
 * FACTS.md).
 */
export const wohnJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wohnmöbel nach Maß",
    serviceType: "Maßgefertigte Wohnmöbel",
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
      name: "Wohnmöbel nach Maß",
      itemListElement: wohnObjektTypen.map((name) => ({
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
      { "@type": "ListItem", position: 3, name: "Wohnmöbel nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: wohnFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Wohnmöbel nach Maß: Objekttypen",
    itemListElement: wohnObjektTypen.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
