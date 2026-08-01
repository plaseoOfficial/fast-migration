/**
 * Content for the `/einbauschraenke-nach-mass/` page: the "Einbauschränke nach
 * Maß" cluster pillar under the `/moebel-nach-mass/` hub. Built from the Privat
 * library sections (same composition as kuechen-nach-mass). Copy follows the
 * Fast Systemmöbel brand voice (Sie-Anrede, handwerklich, konkret, belegt, keine
 * em-dashes). See docs/seo/brand/BRAND_VOICE.md and docs/seo/brand/FACTS.md.
 *
 * Bilder: echte Fast-Projektfotos unter /images/einbauschraenke/ (fürs Web
 * komprimiert). Alt-Texte beschreiben das reale Motiv.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/einbauschraenke-nach-mass/";
const IMG = "/images/einbauschraenke";

export const einbauHero = {
  bgImage: `${IMG}/einbauschrank-nach-mass-wand-zu-wand-grifflos.jpg`,
  imageAlt: "Einbauschrank nach Maß, grifflos und Wand zu Wand eingebaut, mit beleuchtetem Eichenfach",
  title: "Einbauschränke nach Maß, zentimetergenau aus Espelkamp",
  intro:
    "Wir planen und bauen Ihren Einbauschrank nach Maß, zentimetergenau auf Ihren Raum zugeschnitten. Vom Aufmaß bis zur Montage alles aus einer Hand, aus dem eigenen Meisterbetrieb in Espelkamp. So wird jede Wand, jede Nische und jede Dachschräge zu Stauraum, der wirklich passt.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Einbauschränke nach Maß" },
  ],
};

export const einbauIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Schränke nach Maß.",
  heading: "Ihr Einbauschrank: präzise geplant, sauber gebaut",
  introBefore:
    "Fast Systemmöbel aus Espelkamp plant Ihren Einbauschrank von der ersten Skizze bis zur Montage. Wir nehmen uns Zeit für ein kostenloses Aufmaß vor Ort und nutzen jeden",
  introBold: "Zentimeter",
  introAfter:
    ". So entsteht ein Schrank, der genau in Ihren Raum passt, sich an Ihren Alltag anpasst und über Jahre hält, ohne Passleisten und ohne verschenkten Platz.",
  bandImage: `${IMG}/kleiderschrank-nach-mass-weiss-offen.jpg`,
  bandAlt: "Kleiderschrank nach Maß in Weiß mit offenem Garderobenbereich und geschlossenen Fronten",
  col1Title: "Einbauschrank planen",
  col1Body:
    "Wir planen Ihren Schrank um Sie herum: Raumhöhe, Nischen, Dachschrägen, Einteilung und Stauraum. Sie erzählen uns, was hinein soll, danach richten wir den Schrank aus. Fächer, Auszüge, Kleiderstangen und Beleuchtung teilen wir passgenau ein, vom Deckenanschluss bis zum Sockel. Die Fronten wählen Sie frei.",
  col1CtaLabel: "Jetzt Einbauschrank anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Jede Front, jeder Korpus und jeder Auszug entsteht in unserer eigenen Fertigung in Espelkamp, wo auch alle unsere [individuellen Möbel](/moebel-nach-mass/) gefertigt werden. Kein Zwischenhändler, kein festes Rastermaß. Unsere Kanten verleimen wir mit PU-Technik, das verschließt sie fugenlos und feuchtigkeitsbeständig. Und Sie haben einen Ansprechpartner, von der ersten Beratung bis zur Montage.",
  counterTarget: 72,
  counterDuration: 2000,
  counterSuffix: "K+",
  col3Title: "gefertigte Einzelteile",
  col3Body:
    "Über 72.000 gefertigte Einzelteile aus unserer Werkstatt. Unsere Homag-Technik fertigt jedes Bauteil millimetergenau, und die handwerkliche Kontrolle sorgt dafür, dass am Ende alles sitzt. So schließt Ihr Einbauschrank sauber mit Wand und Decke ab, auch nach Jahren noch.",
  col3CtaLabel: "Einbauschrank online planen",
  col3CtaHref: "/moebelplaner/",
};

export const einbauCtas = {
  intro: {
    image: `${IMG}/begehbare-ankleide-nach-mass-weiss.jpg`,
    heading: "Ihr Einbauschrank nach Maß beginnt mit einem Gespräch",
    linkText: "Sprechen Sie mit uns über Ihren Schrank",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/einbauschrank-dachschraege-nach-mass.jpg`,
    heading: "Ihr Stauraum verdient mehr als Standardmaße.",
    linkText: "Jetzt kostenlose Schrankberatung anfragen",
    href: "/kontakt/",
  },
  /** Tertiary conversion path (Playbook §6): phone as a trust anchor, clickable on mobile. */
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

export const einbauProcess = {
  heading: "Ihr Einbauschrank, alles aus einer Hand",
  paragraph:
    "Erst beraten wir und nehmen vor Ort kostenlos Maß. Dann planen wir in 3D, mit Einteilung, Fronten und Anschluss an Wand und Decke, und Sie sehen Ihren Schrank, bevor das erste Bauteil entsteht. Nach Ihrer Freigabe fertigen wir auf Homag-Technik in Espelkamp, montiert wird zum verbindlichen Termin von unserem eigenen Team. Ein Ansprechpartner von der Beratung bis zur Abnahme.",
  paragraphStrong: "Made in Germany.",
  image: `${IMG}/einbauschrank-montage-espelkamp.jpg`,
  imageAlt: "Monteure von Fast Systemmöbel bauen einen Einbauschrank nach Maß vor Ort ein",
};

/** Schrank types: drive the MnmTypische rows AND the JSON-LD OfferCatalog / ItemList. */
export const einbauTypische = {
  heading: "Einbauschränke nach Maß für jeden Raum und Grundriss",
  image1: `${IMG}/begehbare-ankleide-nach-mass-eck.jpg`,
  image1Alt: "Begehbare Ankleide nach Maß über Eck mit offenen Regalen und Auszügen",
  image2: `${IMG}/einbauschrank-nach-mass-anthrazit-regalnische.jpg`,
  image2Alt: "Einbauschrank nach Maß in Anthrazit mit offener Regalnische, Wand zu Wand",
  row1: [
    {
      title: "Kleiderschränke nach Maß",
      description:
        "Vom Boden bis zur Decke, Wand zu Wand: der Kleiderschrank, der jeden Zentimeter Ihres Schlafzimmers nutzt. Einteilung, Kleiderstangen, Auszüge und Fächer planen wir genau nach Ihrer Garderobe.",
    },
    {
      title: "Einbauschränke für Dachschrägen",
      description:
        "Wo Standardschränke aufhören, fangen wir an. Unser [Drempelschrank nach Maß](/einbauschraenke-nach-mass/einbauschrank-dachschraege/) nutzt auch die niedrigen Zonen ganz unten aus, mit passgenauen Fronten, die der Schräge exakt folgen. Kein toter Winkel, kein verschenkter Stauraum.",
    },
    {
      title: "Nischenschränke",
      description:
        "Jede Nische ist anders, unser Schrank passt sich an. Wir bauen zentimetergenau zwischen die Wände, auch dort, wo nichts im rechten Winkel steht. So wird aus einer Restfläche voller Stauraum.",
    },
  ],
  row2: [
    {
      title: "Flur und Garderobe nach Maß",
      description:
        "Schmale Flure sind unser Spezialgebiet. Garderobe, Schuhschrank und Stauraum fassen wir in einem ruhigen, geschlossenen Möbel zusammen, das auch bei wenig Platz alles aufnimmt.",
    },
    {
      title: "Begehbare Ankleide",
      description:
        "Ein eigener Ankleidebereich, geplant um Ihre Wege und Ihre Sachen. Offene Regale, Auszüge, Stangen und Beleuchtung, aufeinander abgestimmt in einem Raumkonzept aus einer Hand.",
    },
    {
      title: "Schiebe- und Schwebetüren",
      description:
        "Wo eine Drehtür keinen Platz findet, gleiten Schiebe- oder Schwebetüren lautlos zur Seite. Wir stimmen Beschläge, Fronten und Führung so ab, dass die Türen über Jahre leicht laufen.",
    },
  ],
};

export const einbauWarum = {
  heading: "Warum der Einbauschrank vom Tischler mehr kann",
  paragraph:
    "Ein Online-Konfigurator rechnet mit festen Rastermaßen, das Möbelhaus verkauft Standard von der Stange, mit Passleisten und Lücken. Wir bauen Ihren Einbauschrank in Espelkamp selbst, zentimetergenau auf Ihren Raum. Schräge Wände, niedrige Decken und verwinkelte Nischen sind für uns Alltag, kein Sonderfall. Vor dem Bau nehmen wir bei Ihnen Maß, statt Sie Zahlen in eine Maske eintragen zu lassen. Fronten und Materialien wählen Sie frei, bis hin zu ungewöhnlichen Kombinationen aus Massivholz und anderen Werkstoffen. Wie das aussieht, zeigen unsere [Referenzprojekte](/referenzen/).",
  images: [
    { src: `${IMG}/einbauschrank-nach-mass-anthrazit-fenster.jpg`, alt: "Einbauschrank nach Maß in Anthrazit mit beleuchtetem Regalfach neben bodentiefem Fenster", width: 1280, height: 715 },
    { src: `${IMG}/kleiderschrank-nach-mass-auszuege-spiegel.jpg`, alt: "Ankleide nach Maß mit ausgezogenen Schubladen und Standspiegel", width: 1280, height: 715 },
    { src: `${IMG}/garderobe-flur-nach-mass-anthrazit.jpg`, alt: "Garderobenschrank nach Maß in Anthrazit mit offener Kleidernische im Flur", width: 1280, height: 715 },
    { src: `${IMG}/raumteiler-eichenlamellen-nach-mass.jpg`, alt: "Raumteiler aus Eichenlamellen nach Maß mit indirekter Beleuchtung", width: 1280, height: 715 },
  ],
};

export const einbauWarum2 = {
  heading: "Was ein Einbauschrank nach Maß kostet",
  paragraph:
    "Einen Pauschalpreis gibt es bei einer Maßanfertigung nicht, denn jeder Schrank ist ein Unikat. Der Preis richtet sich nach der Größe, den Fronten, dem Material, der Innenausstattung mit Auszügen und Beleuchtung und der Einbausituation. Eine gerade Wand ist einfacher zu bauen als eine Dachschräge oder eine schiefe Nische. Auch Beschläge wie Schiebe- oder Schwebetüren wirken sich aus. Wir sagen Ihnen offen, was den Preis bestimmt, und nach dem kostenlosen Aufmaß erhalten Sie ein klares, individuelles Angebot, ohne versteckte Kosten.",
  images: [
    { src: `${IMG}/sonderanfertigung-nach-mass-weinwand.jpg`, alt: "Sonderanfertigung nach Maß: beleuchtete Weinwand als Beispiel für individuelle Lösungen", width: 1280, height: 715 },
    { src: `${IMG}/einbauschrank-dachschraege-nach-mass.jpg`, alt: "Einbauschrank nach Maß, passgenau an eine Dachschräge angepasst", width: 1280, height: 715 },
  ],
};

export const einbauGeschichte = {
  heading: "Schrankhandwerk aus fast drei Jahrzehnten",
  subheading: "Vom Garagenbetrieb zum Meisterbetrieb",
  anchorImage: `${IMG}/einbauschrank-nach-mass-anthrazit-regalnische.jpg`,
  anchorImageAlt: "Deckenhoher Einbauschrank nach Maß in Anthrazit mit offener Regalnische, Fast Systemmöbel Espelkamp",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "4.000+", label: "Projekte" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "200 km", label: "Montage-Radius" },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 als Ein-Mann-Betrieb in einer Garage in Rahden-Tonnenheide. 2001 zog die Fertigung nach Espelkamp, und aus dem Gründungsbetrieb von Johann Fast wurde ein Familienunternehmen.",
    "Heute führen Andreas und Peter Fast den Betrieb mit, die zweite Generation, seit 2010 fest im Unternehmen. Mehr als 4.000 Projekte zeigen, was dabei entstanden ist: ein Meisterbetrieb mit über 1.000 m² Fertigung, moderner Homag-Technik und einem festen Team. Wir planen, fertigen und montieren Einbauschränke nach Maß, die auf den Millimeter sitzen.",
    "Jeder Schrank entsteht bei uns im Haus. Gefertigt in Espelkamp, montiert im Umkreis von rund 200 km, freistehende Schränke liefern wir deutschlandweit.",
  ],
};

export const einbauMoebelplaner = {
  heading: "Ihren Einbauschrank online planen und konfigurieren",
  body:
    "Mit unserem Möbelplaner stellen Sie Ihren Schrank online zusammen. Maße, Fronten, Einteilung und Auszüge sehen Sie direkt im 3D-Konfigurator, so haben Sie sofort ein Bild von Ihrem Einbauschrank vor Augen. Den Rest übernehmen wir: kostenloses Aufmaß vor Ort, Beratung, Fertigung in Espelkamp und Montage durch unser eigenes Team. Aus Ihrer Online-Planung wird ein Einbauschrank nach Maß.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/einbauschrank-nach-mass-wand-zu-wand-grifflos.jpg`,
  imageAlt: "Einbauschrank nach Maß, grifflos und Wand zu Wand eingebaut",
};

export const einbauTestimonialsHeading = "Was unsere Kunden über ihre Schränke sagen";

export const einbauFaq = {
  heading: "Häufige Fragen zu Einbauschränken nach Maß",
  items: [
    {
      question: "Was kostet ein Einbauschrank nach Maß?",
      answer:
        "Der Preis ist immer individuell. Er ergibt sich aus der Größe des Schranks, den Fronten, dem Material, der Innenausstattung wie Auszügen und Beleuchtung und der Einbausituation. Eine Dachschräge oder eine schiefe Nische ist aufwändiger als eine gerade Wand. Einen Pauschalpreis gibt es bei einer Maßanfertigung nicht. Nach einem kurzen Gespräch und dem kostenlosen Aufmaß erstellen wir Ihnen ein klares Angebot, ohne versteckte Kosten.",
    },
    {
      question: "Lohnt sich ein Einbauschrank nach Maß gegenüber einem Standardschrank?",
      answer:
        "Wenn Ihr Raum vom Standardmaß abweicht, fast immer. Ein Einbauschrank nach Maß nutzt die volle Höhe bis zur Decke und die volle Breite Wand zu Wand, ohne toten Winkel. Gerade in Altbauten, unter Dachschrägen und in verwinkelten Räumen holt er deutlich mehr Stauraum heraus als ein gekaufter Schrank, und er hält über Jahre.",
    },
    {
      question: "Baut ihr Einbauschränke für Dachschrägen und Nischen?",
      answer:
        "Genau dafür ist ein Schrank nach Maß da. Dachschrägen, Nischen, niedrige Decken und schräge Wände nutzen wir gezielt aus. Wir bauen Wand zu Wand dort, wo Standardschränke aufhören, mit Fronten, die der Schräge exakt folgen, und setzen auch ungewöhnliche Grundrisse um.",
    },
    {
      question: "Wie läuft das Aufmaß ab und wo baut ihr Einbauschränke ein?",
      answer:
        "Das Aufmaß ist kostenlos und findet bei Ihnen vor Ort statt. Wir messen den Raum genau aus, erfassen Schrägen, Nischen und Anschlüsse und besprechen, was der Schrank aufnehmen soll. Unser eigenes Montageteam baut ihn anschließend vor Ort ein, im Umkreis von rund 200 km um Espelkamp, also in ganz OWL und darüber hinaus, zum Beispiel in Minden, Lübbecke, Osnabrück und Bielefeld. Freistehende Schränke liefern wir auch deutschlandweit.",
    },
    {
      question: "Was unterscheidet euch von einem Online-Schrankkonfigurator?",
      answer:
        "Ein Konfigurator rechnet mit den Maßen, die Sie eintippen, und liefert einen Bausatz. Wir kommen zu Ihnen, messen selbst, planen mit Ihnen und bauen den Schrank in unserer eigenen Werkstatt in Espelkamp. Unser Team montiert ihn vor Ort, passt ihn an schräge Wände an und stimmt jedes Detail ab, bis er sitzt. Sie haben von der Beratung bis zur Abnahme einen Ansprechpartner.",
    },
  ],
};

const schrankTypes = [...einbauTypische.row1, ...einbauTypische.row2].map((t) => t.title);

/**
 * JSON-LD for the wardrobe cluster pillar. Same scope as the kitchen pillar:
 * Service (provider=Organization, serviceType, areaServed, hasOfferCatalog),
 * BreadcrumbList, FAQPage, ItemList. No Product, no AggregateRating, no Offer
 * with a price (Preise sind immer individuell, siehe FACTS.md).
 */
export const einbauJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Einbauschrank nach Maß",
    serviceType: "Maßgefertigte Einbauschränke",
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
      name: "Einbauschränke nach Maß",
      itemListElement: schrankTypes.map((name) => ({
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
      { "@type": "ListItem", position: 3, name: "Einbauschränke nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: einbauFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Einbauschränke nach Maß: Typen",
    itemListElement: schrankTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
