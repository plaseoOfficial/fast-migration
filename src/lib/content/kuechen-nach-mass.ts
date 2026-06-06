/**
 * Content for the `/kuechen-nach-mass/` page: the "Küchen nach Maß" cluster
 * pillar under the `/moebel-nach-mass/` hub. Built from the Privat library
 * sections. Copy follows the Fast Systemmöbel brand voice (Sie-Anrede,
 * handwerklich, konkret, belegt, keine em-dashes). See docs/seo/brand/BRAND_VOICE.md.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/kuechen-nach-mass/";

export const kuechenHero = {
  bgImage: "/images/2026/05/variante_1778229163946_1-scaled.jpg",
  imageAlt: "Moderne Küche nach Maß mit grifflosen Fronten und Kochinsel",
  title: "Küchen nach Maß aus Espelkamp: zentimetergenau vom Meisterbetrieb",
  intro:
    "Eine Küche von der Stange passt selten wirklich. Wir planen und bauen Ihre Küche nach Maß, auf den Millimeter auf Ihren Raum, Ihren Alltag und Ihre Geräte zugeschnitten. Gefertigt im eigenen Meisterbetrieb in Espelkamp, montiert vom eigenen Team. Wand zu Wand, ohne Passleisten. Ob gerade Küchenzeile, Kochinsel oder schwierige Dachschräge: Sie sagen uns, wie Sie sich Ihre Maßküche vorstellen, ruhig auch die ungewöhnlichen Ideen. Den Rest setzen wir um.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Küchen nach Maß" },
  ],
};

export const kuechenIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Küchen nach Maß.",
  heading: "Ihre Küche nach Maß: präzise geplant, sauber gebaut",
  introBefore:
    "Fast Systemmöbel aus Espelkamp plant Ihre Küche von der ersten Skizze bis zur Montage. Wir nehmen uns Zeit für ein kostenloses Aufmaß vor Ort und nutzen jeden",
  introBold: "Zentimeter",
  introAfter:
    ". So entsteht eine Küche, die genau in Ihren Raum passt, sich an Ihren Alltag anpasst und über Jahre hält.",
  bandImage: "/images/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg",
  bandAlt: "Maßgefertigte U-Küche mit Kochinsel und Stein-Arbeitsplatte",
  col1Title: "Küche planen",
  col1Body:
    "Wir planen Ihre Küche um Sie herum: Grundriss, Laufwege, Stauraum, Arbeitshöhen. Sie erzählen uns, wie Sie kochen und leben, und genau darauf richten wir die Küche aus. Markengeräte planen wir passgenau ein, vom Backofen über das Kochfeld bis zur Dunstabzugshaube. Die Geräte wählen Sie frei. Wir setzen alle gängigen Hersteller ein und bauen die Küche darum herum.",
  col1CtaLabel: "Jetzt Küche anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Jede Front, jeder Korpus, jeder Auszug und jede Arbeitsplatte entsteht in unserer eigenen Fertigung in Espelkamp. Kein Zwischenhändler, kein festes Rastermaß. Unsere Kanten verleimen wir mit PU-Technik, das macht sie nahezu wasserfest. Und Sie haben einen Ansprechpartner, von der ersten Beratung bis zur Montage.",
  counterTarget: 72,
  counterDuration: 2000,
  counterSuffix: "K+",
  col3Title: "gefertigte Einzelteile",
  col3Body:
    "Über 72.000 gefertigte Einzelteile aus unserer Werkstatt. Unsere Homag-Technik fertigt jedes Bauteil millimetergenau, und die handwerkliche Kontrolle sorgt dafür, dass am Ende alles sitzt. So sieht Ihre Küche auch nach Jahren noch aus wie am ersten Tag.",
  col3CtaLabel: "Küche online planen",
  col3CtaHref: "/moebelplaner/",
};

export const kuechenCtas = {
  intro: {
    image: "/images/2025/11/IMG_9387-scaled.jpg",
    heading: "Ihre Küche nach Maß beginnt mit einem Gespräch",
    linkText: "Sprechen Sie mit uns über Ihre Küche",
    href: "/kontakt/",
  },
  final: {
    image: "/images/2025/11/20231204_095459232_iOS-scaled.jpg",
    heading: "Ihre Küche verdient mehr als Standardmaße.",
    linkText: "Jetzt kostenlose Küchenberatung anfragen",
    href: "/kontakt/",
  },
  /** Tertiary conversion path (Playbook §6): phone as a trust anchor, clickable on mobile. */
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

export const kuechenProcess = {
  heading: "Planung, Fertigung und Montage für Ihre Küche aus einer Hand",
  paragraph:
    "Ihre Küche entsteht in klaren Schritten. Zuerst beraten wir Sie und nehmen vor Ort kostenlos genau Maß. Dann planen wir in 3D, mit Geräten, Anschlüssen und Laufwegen, und Sie sehen Ihre Küche, bevor das erste Bauteil entsteht. Haben Sie freigegeben, fertigen wir auf Homag-Technik in Espelkamp. Zum Schluss montiert unser eigenes Team Ihre Küche, sauber und zum verbindlichen Termin, den wir nach Aufmaß und Freigabe mit Ihnen festlegen. Ein Ansprechpartner von der Beratung bis zur Abnahme, klare Absprachen, eine Hand.",
  paragraphStrong: "Made in Germany.",
  image: "/images/2025/11/20231204_095459232_iOS-scaled.jpg",
  imageAlt: "Maßgefertigte Küche in Grau mit Kochinsel",
};

/** Kitchen types: drive the MnmTypische rows AND the JSON-LD ItemList / hasOfferCatalog. */
export const kuechenTypische = {
  heading: "Küchen nach Maß für jeden Grundriss und Stil",
  image1: "/images/2025/11/ThabarSebastian_kueche2.jpeg",
  image1Alt: "Helle Küche nach Maß mit Essbereich",
  image2: "/images/2025/11/IMG_4797-scaled.jpg",
  image2Alt: "Weiße Küche nach Maß mit Holz-Arbeitsplatte",
  row1: [
    {
      title: "Küchenzeilen",
      description:
        "Klare, gerade Küchenzeilen, die jeden Meter Wand ausnutzen. Wir bauen Wand zu Wand, ohne Passleisten und ohne Lücken. Ideal für offene Wohnküchen und schmale Grundrisse.",
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
        "Apothekerauszüge, Eckschränke und Vorratsschränke bis unter die Decke. Auch unter Dachschrägen und in Nischen wird jeder Zentimeter nutzbar.",
    },
  ],
};

export const kuechenWarum = {
  heading: "Warum eine Küche vom Tischler mehr kann als von der Stange",
  paragraph:
    "Im Küchenstudio kaufen Sie eine Markenküche in festen Rastermaßen, im Möbelhaus Standard von der Stange. Wir bauen Ihre Küche selbst, in Espelkamp, zentimetergenau auf Ihren Raum. Schräge Wände, niedrige Decken, verwinkelte Nischen: für uns kein Sonderfall, sondern Alltag. Wir bauen Wand zu Wand, ohne Passleisten, sodass nichts gestückelt wirkt. Fronten, Materialien und Geräte wählen Sie frei, und auch ungewöhnliche Kombinationen aus Massivholz und anderen Werkstoffen sind möglich. Was andere Küchenstudios als unmöglich abtun, gehört zur Kernkompetenz einer Schreinerküche vom Meisterbetrieb: Wir planen es durch und setzen es um. Wir liefern die handwerkliche Umsetzung und montieren im Umkreis von rund 200 km um Espelkamp mit eigenem Team. Den Weg dorthin können Sie übrigens in unserem Möbelplaner schon einmal selbst durchspielen. Ein Ansprechpartner, ein klares und individuelles Angebot, eine Küche, die genau passt.",
  images: [
    { src: "/images/2026/05/variante_1778229163946_1-scaled.jpg", alt: "Graue Küche nach Maß mit Holzdecke und Insel", width: 600, height: 400 },
    { src: "/images/2025/11/IMG_9387-scaled.jpg", alt: "Küche nach Maß mit grifflosen Fronten und Holzrückwand", width: 600, height: 800 },
    { src: "/images/2025/11/20231204_095459232_iOS-scaled.jpg", alt: "Moderne Küche in Grau mit Kochinsel", width: 600, height: 450 },
    { src: "/images/2025/11/IMG_4797-scaled.jpg", alt: "Weiße Küche nach Maß mit Holz-Arbeitsplatte", width: 600, height: 800 },
    { src: "/images/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg", alt: "U-Küche nach Maß mit Stein-Insel", width: 600, height: 380 },
    { src: "/images/2025/11/ThabarSebastian_kueche2.jpeg", alt: "Helle Küche nach Maß mit Esstisch", width: 600, height: 600 },
  ],
};

export const kuechenGeschichte = {
  heading: "Küchenhandwerk aus fast drei Jahrzehnten",
  subheading: "VOM GARAGENBETRIEB ZUM MEISTERBETRIEB FÜR KÜCHEN NACH MASS.",
  gallery: [
    { src: "/images/2026/05/variante_1778229163946_1-scaled.jpg", alt: "Graue Küche nach Maß mit Insel", caption: "Grifflose Inselküche", width: 800, height: 500 },
    { src: "/images/2025/11/IMG_9387-scaled.jpg", alt: "Küche nach Maß mit Holzrückwand", caption: "Küche mit Holzrückwand", width: 600, height: 800 },
    { src: "/images/2025/11/20231204_095459232_iOS-scaled.jpg", alt: "Graue Küche mit Kochinsel", caption: "Graue Inselküche", width: 600, height: 450 },
    { src: "/images/2025/11/ThabarSebastian_kueche2.jpeg", alt: "Helle Wohnküche mit Essbereich", caption: "Offene Wohnküche", width: 600, height: 600 },
    { src: "/images/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg", alt: "U-Küche mit Stein-Insel", caption: "U-Küche mit Stein", width: 600, height: 500 },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 als Ein-Mann-Betrieb in einer Garage in Rahden-Tonnenheide. 2001 zog die Fertigung nach Espelkamp, und aus dem Gründungsbetrieb von Johann Fast wurde ein Familienunternehmen.",
    "Heute führen Andreas und Peter Fast den Betrieb mit, die zweite Generation, seit 2010 fest im Unternehmen. Mehr als 4.000 Projekte zeigen, was dabei entstanden ist: ein Meisterbetrieb mit über 1.000 m² Fertigung, moderner Homag-Technik und einem festen Team. Wir planen, fertigen und montieren Küchen nach Maß, die auf den Millimeter sitzen.",
    "Jede Küche entsteht bei uns im Haus. Gefertigt in Espelkamp, montiert im Umkreis von rund 200 km, geliefert deutschlandweit.",
  ],
  factLines: [
    "– Made in Germany",
    "– 1.000 m² Fertigung",
    "– Meisterbetrieb",
    "– Homag-Technologie",
    "– Montage bis 200 km",
    "– Lieferung bundesweit",
  ],
};

export const kuechenMoebelplaner = {
  heading: "Ihre Küche online planen und konfigurieren",
  body:
    "Mit unserem Möbelplaner stellen Sie Ihre Küche online zusammen. Maße, Fronten, Auszüge und Geräte sehen Sie direkt im 3D-Konfigurator, so haben Sie sofort ein Bild von Ihrer Küche vor Augen. Den Rest übernehmen wir: kostenloses Aufmaß vor Ort, Beratung, Fertigung in Espelkamp und Montage durch unser eigenes Team. Aus Ihrer Online-Planung wird eine Küche nach Maß.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: "/images/2025/11/IMG_9387-scaled.jpg",
  imageAlt: "Küche nach Maß mit grifflosen Fronten",
};

export const kuechenTestimonialsHeading = "Was unsere Küchenkunden sagen";

export const kuechenFaq = {
  heading: "Häufige Fragen zu Küchen nach Maß",
  items: [
    {
      question: "Was kostet eine Küche nach Maß vom Schreiner?",
      answer:
        "Der Preis ist immer individuell. Er ergibt sich aus der Größe der Küche, den Fronten, der Arbeitsplatte, den gewählten Geräten und der Ausstattung wie Auszügen und Beschlägen. Einen Pauschalpreis gibt es bei einer Maßanfertigung nicht. Nach einem kurzen Gespräch und dem kostenlosen Aufmaß erstellen wir Ihnen ein klares, individuelles Angebot, ohne versteckte Kosten.",
    },
    {
      question: "Was ist der Unterschied zwischen einer Küche nach Maß und einer Serienküche?",
      answer:
        "Eine Serienküche kommt in festen Rastermaßen und wird mit Passleisten an die Wand angeglichen. Eine Maßküche bauen wir zentimetergenau, Wand zu Wand und ohne Passleisten. Fronten, Materialien und Geräte wählen Sie frei. So nutzen Sie jeden Zentimeter und zahlen nur für das, was Sie wirklich brauchen.",
    },
    {
      question: "Lohnt sich eine Küche nach Maß gegenüber einer Serienküche?",
      answer:
        "Wenn Ihr Raum, Ihr Grundriss oder Ihre Ansprüche vom Standardraster abweichen, lohnt sie sich. Sie nutzen jeden Zentimeter, vermeiden Lücken und Passleisten und bekommen genau die Ausstattung, die zu Ihnen passt. Gerade bei verwinkelten oder kleinen Räumen holen Sie aus einer Maßküche oft mehr Stauraum und Arbeitsfläche heraus als aus einer Standardküche.",
    },
    {
      question: "Tischler oder Küchenstudio: Was passt für mich?",
      answer:
        "Im Küchenstudio kaufen Sie eine Markenküche in festen Rastermaßen. Beim Tischler bekommen Sie eine echte Tischlerküche in Sondermaßen, aus eigener Fertigung, maßgenau auf Ihren Raum gebaut. Ist Ihr Grundriss schwierig oder haben Sie ungewöhnliche Ideen, dann ist der Tischler die passende Adresse. Beides hat seine Berechtigung, und wir ordnen das im Gespräch ehrlich für Sie ein.",
    },
    {
      question: "Warum ist eine Küche nach Maß oft teurer als eine von der Stange?",
      answer:
        "Wir fertigen jede Küche einzeln statt in großer Serie. Dafür bekommen Sie exakte Passung Wand zu Wand, freie Material- und Gerätewahl und eine Verarbeitung, die lange hält, unter anderem durch unsere nahezu wasserfeste PU-Kantenverleimung. Sie zahlen für Wert und Langlebigkeit, nicht für einen Stückpreis.",
    },
    {
      question: "Wie lange dauert es von der Planung bis zur fertigen Küche?",
      answer:
        "Nach Beratung und kostenlosem Aufmaß planen wir Ihre Küche, Sie geben sie frei, dann fertigen wir in Espelkamp. Den verbindlichen Termin für Lieferung und Montage legen wir nach dem Aufmaß und Ihrer Freigabe gemeinsam fest, noch bevor die Produktion startet. So wissen Sie früh, wann Ihre Küche steht.",
    },
    {
      question: "Welche Materialien und Arbeitsplatten sind möglich?",
      answer:
        "Wir arbeiten mit Massivholz und branchenüblichen Materialien. Fronten und Arbeitsplatte wählen Sie frei, auch ungewöhnliche Kombinationen sind möglich. Sagen Sie uns, welche Optik und welche Eigenschaften Ihnen wichtig sind, dann beraten wir Sie zu den passenden Materialien.",
    },
    {
      question: "Kann ich meine eigenen Markengeräte einbauen lassen?",
      answer:
        "Ja. Die Geräte wählen Sie frei, wir planen alle gängigen Hersteller passgenau ein, vom Backofen über das Kochfeld und die Dunstabzugshaube bis zur Spüle. Sie bringen Ihre Wunschgeräte mit, oder wir beraten Sie dazu.",
    },
    {
      question: "Passt eine Küche nach Maß auch in einen schwierigen Grundriss oder unter eine Dachschräge?",
      answer:
        "Genau dafür ist sie da. Schräge Wände, Dachschrägen, Nischen und niedrige Decken nutzen wir gezielt aus. Wir bauen Wand zu Wand dort, wo Standardküchen aufhören, und setzen auch ungewöhnliche Vorstellungen um.",
    },
    {
      question: "Montieren Sie die Küche bei mir vor Ort, und wie weit liefern Sie?",
      answer:
        "Die Montage übernimmt immer unser eigenes Team, im Umkreis von rund 200 km um Espelkamp, zum Beispiel in Minden, Lübbecke, Osnabrück und Bielefeld. Außerhalb dieses Radius liefern wir bundesweit in ganz Deutschland. Wichtig zu wissen: Die Lieferung ist deutschlandweit möglich, die Montage ist an das Gebiet um Espelkamp gebunden.",
    },
    {
      question: "Gibt es eine Finanzierung für meine Küche?",
      answer:
        "Ja, eine Finanzierung ist auf Wunsch möglich. Sprechen Sie uns einfach im Beratungsgespräch darauf an, dann klären wir die Möglichkeiten gemeinsam.",
    },
    {
      question: "Wie langlebig ist eine Küche nach Maß, und wie pflege ich sie?",
      answer:
        "Eine Küche von uns ist auf lange Haltbarkeit gebaut. Dafür sorgen saubere Verarbeitung, hochwertige Beschläge und unsere PU-Kantenverleimung, die die Kanten nahezu wasserfest macht. Zum Beweis tauchen wir eine Musterkante 24 Stunden unter Wasser. Im Alltag genügen milde Reiniger und ein weiches Tuch. Es gilt die gesetzliche Gewährleistung.",
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
