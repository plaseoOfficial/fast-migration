/**
 * Content for the `/kuechen-nach-mass/` page: the "Küchen nach Maß" cluster
 * pillar under the `/moebel-nach-mass/` hub. Built from the Privat library
 * sections. Copy follows the Fast Systemmöbel brand voice (Sie-Anrede,
 * handwerklich, konkret, belegt, keine em-dashes). See docs/seo/brand/BRAND_VOICE.md.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/kuechen-nach-mass/";

export const kuechenHero = {
  bgImage: "/images/2026/05/variante_1778229165731_5-scaled.jpg",
  imageAlt: "Weiße Küche nach Maß mit raumhoher Schrankwand, zwei Backöfen und Kochinsel mit Barhockern und Licht im Sockel",
  title: "Küchen nach Maß vom Tischler",
  introScrim: true,
  intro:
    "Wir sind Tischler und bauen Ihre Küche selbst: zentimetergenau auf Ihren Raum zugeschnitten, vom Aufmaß bis zur Montage aus einer Hand. Gefertigt in unserem Meisterbetrieb in Espelkamp, eingebaut von unserem eigenen Team, deutschlandweit auf Anfrage.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Küchen nach Maß" },
  ],
};

export const kuechenIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Küchen nach Maß.",
  heading: "Ihre Küche: präzise geplant, sauber gebaut",
  introBefore:
    "Fast Systemmöbel aus Espelkamp plant Ihre Einbauküche nach Maß von der ersten Skizze bis zur Montage. Wir nehmen uns Zeit für ein kostenloses Aufmaß vor Ort und nutzen jeden",
  introBold: "Zentimeter",
  introAfter:
    ". So entsteht eine Küche, die genau in Ihren Raum passt, sich an Ihren Alltag anpasst und über Jahre hält.",
  bandImage: "/images/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg",
  bandAlt: "Helle Küche nach Maß mit Kochinsel und Arbeitsplatte in Marmoroptik",
  col1Title: "Küche planen",
  col1Body:
    "Wir planen Ihre Küche um Sie herum: Grundriss, Laufwege, Stauraum, Arbeitshöhen. Sie erzählen uns, wie Sie kochen und leben, danach richten wir die Küche aus. Markengeräte aller gängigen Hersteller planen wir passgenau ein, vom Backofen bis zur Dunstabzugshaube. Die Geräte wählen Sie frei. Wie Sie sich vorbereiten, zeigt unser Ratgeber, [Ihre Küche Schritt für Schritt zu planen](/kuechen-nach-mass/kueche-planen/).",
  col1CtaLabel: "Jetzt Küche anfragen",
  col1CtaHref: "#anfrage",
  col2Body:
    "Jede Front, jeder Korpus, jeder Auszug und jede Arbeitsplatte entsteht in unserer eigenen Fertigung in Espelkamp, wo auch alle unsere [Möbel nach Maß](/moebel-nach-mass/) gefertigt werden. Kein Zwischenhändler, kein festes Rastermaß. Unsere Kanten verleimen wir mit PU-Technik, das verschließt sie fugenlos und feuchtigkeitsbeständig. Und Sie haben einen Ansprechpartner, von der ersten Beratung bis zur Montage.",
  counterTarget: 72,
  counterDuration: 2000,
  counterSuffix: "K+",
  col3Title: "gefertigte Einzelteile",
  col3Body:
    "Über 72.000 gefertigte Einzelteile aus unserer Werkstatt. Unsere Homag-Technik fertigt jedes Bauteil millimetergenau, und die handwerkliche Kontrolle sorgt dafür, dass am Ende alles sitzt. So sieht Ihre Küche auch nach Jahren noch aus wie am ersten Tag.",
  col3CtaLabel: "Küchenberatung anfragen",
  col3CtaHref: "#anfrage",
};

export const kuechenProcess = {
  heading: "Ihre Küche, alles aus einer Hand",
  paragraph:
    "Erst beraten wir und nehmen vor Ort kostenlos Maß. Dann [planen wir Ihre Küche in 3D](/kuechen-nach-mass/kueche-planen/), mit Geräten, Anschlüssen und Laufwegen, und Sie sehen Ihre Küche, bevor das erste Bauteil entsteht. Nach Ihrer Freigabe fertigen wir auf Homag-Technik in Espelkamp, montiert wird zum verbindlichen Termin von unserem eigenen Team. Ein Ansprechpartner von der Beratung bis zur Abnahme.",
  paragraphStrong: "Made in Germany.",
  image: "/images/2025/11/20231204_095459232_iOS-scaled.jpg",
  imageAlt: "Küche in Anthrazit mit heller Halbinsel und schwarzer Dunstabzugshaube",
};

/** Kitchen types: drive the MnmTypische rows AND the JSON-LD ItemList / hasOfferCatalog. */
export const kuechenTypische = {
  heading: "Küchen nach Maß für jeden Grundriss und Stil",
  image1: "/images/kuechen/kueche-nach-mass-u-form-weiss-eichen-esstisch.jpg",
  image1Alt: "Weiße U-Küche nach Maß mit Esstisch aus Eiche und Glas-Pendelleuchten",
  image2: "/images/kuechen/kueche-nach-mass-marmor-insel-anthrazit.jpg",
  image2Alt: "Offene Küche nach Maß mit anthrazitfarbener Insel und Arbeitsplatten in Marmoroptik, hellen Hochschränken und Pendelleuchten",
  row1: [
    {
      title: "Küchenzeilen",
      description:
        "Die [Küchenzeile nach Maß](/kuechen-nach-mass/kuechenzeile-nach-mass/) nutzt jeden Meter Wand aus. Wir bauen Wand zu Wand, ohne Passleisten und ohne Lücken. Ideal für offene Wohnküchen und schmale Grundrisse.",
    },
    {
      title: "L- und U-Küchen",
      description:
        "Über Eck geplant, für kurze Wege und viel Arbeitsfläche. Jede Ecke passen wir zentimetergenau an, auch dort, wo Wände nicht im rechten Winkel stehen.",
    },
    {
      title: "Kochinseln",
      description:
        "Die Insel als Mittelpunkt: zum Kochen, Arbeiten und Zusammensitzen. Mit integriertem Kochfeld, Stauraum und Sitzplatz, abgestimmt auf Ihre Geräte.",
    },
  ],
  row2: [
    {
      title: "Grifflose Küchen",
      description:
        "Reduziertes Design ohne sichtbare Griffe. Glatte Fronten, ruhige Optik, leicht zu reinigen. Auf Wunsch kombiniert mit Holz oder ungewöhnlichen Materialien.",
    },
    {
      title: "Landhaus und Klassik",
      description:
        "Warme, zeitlose Küchen mit Rahmenfronten und natürlichen Materialien wie Massivholz. Modern interpretiert und von Hand gebaut.",
    },
    {
      title: "Stauraum nach Maß",
      description:
        "Apothekerauszüge, Eckschränke und Vorratsschränke bis unter die Decke. Auch in einer [Küche mit Dachschräge](/kuechen-nach-mass/kueche-mit-dachschraege/) und in Nischen wird jeder Zentimeter nutzbar. Was in der Küche keinen Platz findet, ordnet ein [Hauswirtschaftsraum nach Maß](/hauswirtschaftsraum/) gleich nebenan.",
    },
  ],
};

export const kuechenWarum = {
  heading: "Tischler oder Küchenstudio?",
  paragraph:
    "Im Küchenstudio wählen Sie meist aus dem Programm eines Herstellers, in dessen Rastermaßen. Für einen rechteckigen Raum mit freien Wänden passt das oft gut. Der Tischler lohnt sich, wenn der Raum nicht ins Raster passt: schräge Wände, Nischen, Pfeiler, niedrige Decken, oder wenn die Küche Wand zu Wand ohne Passleisten sitzen soll. Wir messen selbst auf, fertigen jedes Teil in Espelkamp und bauen es mit unserem eigenen Team ein. Fronten, Materialien und Geräte wählen Sie frei. Wie das aussieht, zeigen unsere [Referenzen](/referenzen/).",
  images: [
    { src: "/images/2025/11/IMG_4797-scaled.jpg", alt: "Weiße Küche mit schwarzen Griffen, Holz-Arbeitsplatte und Metrofliesen", width: 600, height: 800 },
    { src: "/images/2025/11/IMG_6123-scaled.jpg", alt: "Kochfeld in einer Holz-Arbeitsplatte vor Sprossenfenstern", width: 600, height: 450 },
  ],
};

export const kuechenWarum2 = {
  heading: "Aus einer Hand, bis vor Ihre Tür",
  paragraph:
    "Auch ungewöhnliche Wünsche planen wir durch und setzen sie um, das gehört zu einer Schreinerküche vom Meisterbetrieb. Unser eigenes Montageteam baut Ihre Küche ein, deutschlandweit auf Anfrage. Ein Ansprechpartner von der Beratung bis zur Abnahme, ein individuelles Angebot und eine Küche, die Wand zu Wand passt.",
  images: [
    { src: "/images/2026/05/variante_1778229163946_1-scaled.jpg", alt: "Graue Küchenzeile nach Maß unter einer beleuchteten Eichendecke", width: 600, height: 335 },
  ],
};

export const kuechenGeschichte = {
  heading: "Küchenhandwerk aus fast drei Jahrzehnten",
  subheading: "Vom Garagenbetrieb zum Meisterbetrieb",
  anchorImage: "/images/schrank-unter-treppe/team-meisterbetrieb-fast-espelkamp.jpg",
  anchorImageAlt: "Drei Männer aus dem Team von Fast Systemmöbel vor einem hellen Rolltor",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "4.000+", label: "Projekte" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "72K+", label: "Gefertigte Einzelteile" },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 als Ein-Mann-Betrieb in einer Garage in Rahden-Tonnenheide. 2001 zog die Fertigung nach Espelkamp, und aus dem Gründungsbetrieb von Johann Fast wurde ein Familienunternehmen.",
    "Heute führen Andreas und Peter Fast den Betrieb mit, die zweite Generation, seit 2010 fest im Unternehmen. Mehr als 4.000 Projekte zeigen, was dabei entstanden ist: ein Meisterbetrieb mit über 1.000 m² Fertigung, moderner Homag-Technik und einem festen Team. Wir planen, fertigen und montieren Küchen nach Maß, die auf den Millimeter sitzen.",
    "Jede Küche entsteht bei uns im Haus. Gefertigt in Espelkamp, eingebaut von unserem eigenen Team, deutschlandweit auf Anfrage.",
  ],
};

export const kuechenTestimonialsHeading = "Was unsere Küchenkunden sagen";

export const kuechenFaq = {
  heading: "Häufige Fragen zu Küchen nach Maß",
  items: [
    {
      question: "Was kostet eine Küche nach Maß vom Schreiner?",
      answer:
        "Eine Küchenzeile nach Maß liegt bei uns meist zwischen 8.000 und 15.000 Euro, eine Küche über Eck oder mit Insel zwischen 15.000 und 30.000 Euro. Darin sind Möbel, Arbeitsplatte und Montage enthalten, Geräte kommen dazu. Der genaue Preis ergibt sich aus der Größe der Küche, den Fronten, der Arbeitsplatte und der Ausstattung wie Auszügen und Beschlägen. Nach einem kurzen Gespräch und dem kostenlosen Aufmaß erstellen wir Ihnen ein klares, individuelles Angebot, ohne versteckte Kosten.",
    },
    {
      question: "Was ist der Unterschied zwischen einer Küche nach Maß und einer Serienküche?",
      answer:
        "Eine Serienküche kommt in festen Rastermaßen und wird mit Passleisten an die Wand angeglichen. Eine Maßküche bauen wir zentimetergenau, Wand zu Wand und ohne Passleisten. Fronten, Materialien und Geräte wählen Sie frei. So nutzen Sie jeden Zentimeter und zahlen nur für das, was Sie wirklich brauchen.",
    },
    {
      question: "Wie lange dauert es von der Planung bis zur fertigen Küche?",
      answer:
        "Nach Beratung und kostenlosem Aufmaß planen wir Ihre Küche, Sie geben sie frei, dann fertigen wir in Espelkamp. Den verbindlichen Termin für Lieferung und Montage legen wir nach dem Aufmaß und Ihrer Freigabe gemeinsam fest, noch bevor die Produktion startet. So wissen Sie früh, wann Ihre Küche steht.",
    },
    {
      question: "Montieren Sie Küchen auch bei mir?",
      answer:
        "Aufmaß und Montage übernimmt immer unser eigenes Team, deutschlandweit auf Anfrage. Zu Hause sind wir rund um Espelkamp, etwa in Minden, Lübbecke, Bielefeld und Osnabrück. Ob und wann wir bei Ihnen einbauen, klären wir im ersten Gespräch.",
    },
    {
      question: "Passt eine Küche nach Maß auch in einen schwierigen Grundriss oder unter eine Dachschräge?",
      answer:
        "Genau dafür ist sie da. Schräge Wände, Dachschrägen, Nischen und niedrige Decken nutzen wir gezielt aus. Wir bauen Wand zu Wand dort, wo Standardküchen aufhören, und setzen auch ungewöhnliche Vorstellungen um. Wie das unterm Dach aussieht, zeigt unsere [Küche mit Dachschräge](/kuechen-nach-mass/kueche-mit-dachschraege/).",
    },
    {
      question: "Was ist eine Tischlerküche?",
      answer:
        "Eine Küche, die ein Tischler oder Schreiner für Ihren Raum plant, selbst fertigt und einbaut. Die Schränke entstehen nach Ihrem Aufmaß statt aus einem Rastersystem. Bei uns kommen Planung, Fertigung und Montage aus einem Betrieb.",
    },
    {
      question: "Kann ich die Geräte selbst kaufen?",
      answer:
        "Ja. Backofen, Kochfeld, Kühlschrank und Geschirrspüler wählen Sie frei, bei allen gängigen Herstellern. Wir planen die Möbel passend um Ihre Geräte und bauen sie bei der Montage mit ein.",
    },
    {
      question: "Kann ich die Küche finanzieren?",
      answer:
        "Ja, für Privatkunden ist eine Finanzierung möglich. Die Einzelheiten besprechen wir mit Ihnen beim Angebot.",
    },
  ],
};

const kitchenTypes = [...kuechenTypische.row1, ...kuechenTypische.row2].map((t) => t.title);

/**
 * JSON-LD for the kitchen cluster pillar. Per the agreed schema scope:
 * Service (provider=Organization, serviceType, areaServed, hasOfferCatalog),
 * BreadcrumbList, FAQPage (real FAQ section exists), ItemList. No Product, no
 * AggregateRating. Rendered in the page via a single ld+json script.
 */
export const kuechenJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Küche nach Maß",
    serviceType: "Maßgefertigte Küchen",
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
    areaServed: { "@type": "Country", name: "DE" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Küchen nach Maß",
      itemListElement: kitchenTypes.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${name} nach Maß` },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Küchen nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: kuechenFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Küchen nach Maß: Typen",
    itemListElement: kitchenTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
