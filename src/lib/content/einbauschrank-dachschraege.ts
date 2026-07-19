/**
 * Content for the `/einbauschraenke-nach-mass/einbauschrank-dachschraege/` page:
 * the "Schrank für Dachschräge nach Maß" cluster child under the Einbauschränke
 * pillar (`/einbauschraenke-nach-mass/`). Built from the Privat library sections
 * plus shared sections (ProcessSteps, SpecTable, SegmentCards, UspHighlight) so
 * each section carries one topic (ARCHITECTURE.md §1.1); copy is
 * Dachschräge-specific (Drempel, Kniestock, Abseite, Schrägenwinkel) to avoid
 * cannibalising the generic pillar text.
 *
 * Copy follows the Fast Systemmöbel brand voice (Sie-Anrede, handwerklich,
 * konkret, belegt, keine em-dashes). See docs/seo/brand/BRAND_VOICE.md and
 * docs/seo/brand/FACTS.md. Firmen-/Zahlenfakten (Telefon, Adresse, Geo, 1996,
 * 2. Generation Andreas & Peter Fast, 4.000+ Projekte, 1.000 m² Fertigung,
 * 200 km Montage-Radius, Homag, PU-Kanten) stammen aus dem Pillar-Modul/FACTS.md.
 *
 * Bilder: echte Fast-Projektfotos unter /images/einbauschrank-dachschraege/
 * (1280×714, fürs Web komprimiert). Alt-Texte beschreiben das reale Motiv.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/einbauschraenke-nach-mass/einbauschrank-dachschraege/";
const IMG = "/images/einbauschrank-dachschraege";

export const dachHero = {
  bgImage: `${IMG}/dachschraegenschrank-nach-mass-trapezform-schlafzimmer.jpg`,
  imageAlt:
    "Dachschrägenschrank nach Maß über die gesamte Wand, trapezförmig an beide Dachschrägen angepasst",
  title: "Schrank für Dachschräge nach Maß aus Espelkamp",
  intro:
    "Wir planen und bauen Ihren Schrank für die Dachschräge nach Maß, der jeden Zentimeter unter der Schräge nutzt. Vom Aufmaß der Schräge bis zur Montage alles aus einer Hand, aus dem eigenen Meisterbetrieb in Espelkamp. So wird aus dem toten Winkel unter dem Dach ein Dachschrägenschrank, der wirklich passt.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Einbauschränke nach Maß", href: "/einbauschraenke-nach-mass/" },
    { label: "Schrank für Dachschräge" },
  ],
};

/**
 * Slim intro (§1.1: 3 Spalten × wenige Sätze). Die Begriffs-Definitionen
 * (Kniestock/Drempel/Abseite, 40–80 cm) leben in dachBegriffe, die
 * Aufmaß-Details in dachProcess Schritt 1 + FAQ "Wie läuft das Aufmaß".
 */
export const dachIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Schränke nach Maß.",
  // Kein Wort > ~14 Zeichen: die 2fr-Mittelspalte hat min-width:auto, ein langes
  // Kompositum wie "Dachschrägenschrank?" (~700px bei 65px) quetscht die Intro-Spalte.
  heading: "Drempelschrank oder Schrank für die Schräge?",
  introBefore:
    "Beides meint dasselbe: ein Schrank, der exakt dem Winkel Ihrer Dachschräge folgt, bis hinunter zum",
  introBold: "Kniestock",
  introAfter: ".",
  bandImage: `${IMG}/begehbare-ankleide-dachschraege-nach-mass-glasfront.jpg`,
  bandAlt:
    "Begehbare Ankleide unter Dachschräge nach Maß mit beleuchteten Glasfront-Schränken und bronzefarbener Kommodeninsel",
  col1Title: "Stauraum statt toter Winkel",
  col1Body:
    "Kniestock, Abseite und die flache Zone unter der Schräge bleiben sonst ungenutzt. Genau diese Bereiche holen wir mit einem Schrank nach Maß zurück.",
  col1CtaLabel: "Dachschräge anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Ein Schrank für die Dachschräge lebt vom Winkel. Aus Kniestockhöhe und Schrägenwinkel fertigen wir Fronten und Korpus, die fugenlos an der Schräge anschließen. Keine Passleiste, kein verschenkter Zentimeter.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Wir nehmen die Schräge bei Ihnen vor Ort auf, in ganz OWL und im Umkreis von rund 200 km um Espelkamp, etwa in Minden, Lübbecke, Osnabrück und Bielefeld.",
  col3CtaLabel: "Dachschräge online planen",
  col3CtaHref: "/moebelplaner/",
};

/**
 * SegmentCards (shared): Begriffs-Glossar. Nimmt die Definitionen auf, die
 * vorher IntroStats überfrachtet haben (Kniestock/Drempel/Abseite, 40–80 cm,
 * Neubau/Altbau/Spitzboden). AEO-Surface für "Was ist ein Drempel?".
 */
export const dachBegriffe = {
  heading: "Kniestock, Drempel und Abseite kurz erklärt",
  intro:
    "Diese Begriffe begegnen Ihnen unter dem Dach ständig, ob im Neubau, im Altbau oder im ausgebauten Spitzboden.",
  segments: [
    {
      title: "Kniestock",
      body: "Die niedrige Wand an der Traufseite, auf der die Dachschräge aufsetzt. Meist ist sie zwischen etwa 40 und 80 Zentimeter hoch.",
    },
    {
      title: "Drempel",
      body: "Ein anderes Wort für den Kniestock. Ein Drempelschrank stellt sich genau in diese niedrige Zone und macht sie zu Stauraum.",
    },
    {
      title: "Abseite",
      body: "Der flache Raum hinter der Schräge. Ohne Ausbau bleibt er ungenutzt, mit Türen oder Auszügen wird er zugänglich.",
    },
  ],
};

export const dachCtas = {
  intro: {
    image: `${IMG}/drempelschrank-kniestock-nach-mass-betonoptik.jpg`,
    heading: "Ihr Dachschrägenschrank beginnt mit einem Blick auf Ihre Schräge",
    linkText: "Sprechen Sie mit uns über Ihre Dachschräge",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/dachschraegenschrank-nach-mass-trapezform-schlafzimmer.jpg`,
    heading: "Machen Sie aus dem toten Winkel unter dem Dach echten Stauraum.",
    linkText: "Jetzt kostenloses Dachschräge-Aufmaß anfragen",
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
 * ProcessSteps (shared): the dense "how it works" paragraph, split into four
 * numbered steps so each step carries one stage of the Ablauf. No copy dropped.
 */
export const dachProcess = {
  eyebrow: "Ablauf",
  heading: "So planen wir Ihren Schrank für die Dachschräge",
  image: `${IMG}/begehbarer-kleiderschrank-dachschraege-spitzdach-nach-mass.jpg`,
  imageAlt:
    "Begehbarer Kleiderschrank unter dem Spitzdach nach Maß mit beidseitigen offenen Regalen und Kommodeninsel",
  steps: [
    {
      title: "Aufmaß vor Ort",
      description:
        "Erst kommen wir zu Ihnen und nehmen die Schräge kostenlos vor Ort auf: Kniestockhöhe, Schrägenwinkel und jeder Anschluss an Wand und Boden.",
    },
    {
      title: "3D-Planung",
      description:
        "Dann planen wir in 3D, mit Einteilung, Fronten und passgenauem Verlauf entlang der Schräge. Sie sehen Ihren Schrank, bevor das erste Bauteil entsteht.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Nach Ihrer Freigabe fertigen wir auf Homag-Technik in unserer eigenen Werkstatt in Espelkamp. Made in Germany.",
    },
    {
      title: "Montage zum verbindlichen Termin",
      description:
        "Montiert wird von unserem eigenen Team, das die Passung an der Schräge vor Ort feinjustiert.",
    },
  ],
};

/** Schrank types under the slope: drive the MnmTypische rows AND the JSON-LD ItemList. */
export const dachTypische = {
  heading: "Dachschrägenschränke für jede Situation unterm Dach",
  image1: `${IMG}/einbauschrank-dachschraege-nach-mass-eckregal-beleuchtet.jpg`,
  image1Alt:
    "Einbauschrank an Dachschräge nach Maß in Anthrazit mit beleuchtetem offenem Eckregal",
  image2: `${IMG}/einbauschrank-dachschraege-nach-mass-weiss-kniestock.jpg`,
  image2Alt:
    "Weißer Einbauschrank unter der Dachschräge nach Maß am Kniestock mit LED-Lichtleiste und Holzwand",
  row1: [
    {
      title: "Kleiderschrank an der Dachschräge",
      description:
        "Nutzt die volle Höhe bis unter die Schräge: Stangen, wo der Raum hoch ist, Fächer und Auszüge in den flachen Zonen.",
    },
    {
      title: "Drempelschrank am Kniestock",
      description:
        "Macht die Abseite zugänglich statt sie hinter Rigips zu verstecken, mit Türen bis genau zum Beginn der Schräge.",
    },
    {
      title: "Schiebetüren an der Schräge",
      description:
        "Gleiten platzsparend zur Seite, wo eine Drehtür ansteht. Der Weg vor dem Schrank bleibt frei, auch im schmalen Dachzimmer.",
    },
  ],
  row2: [
    {
      title: "Begehbare Ankleide unterm Dach",
      description:
        "Ein ganzer Ankleidebereich, geplant um Ihre Wege und die Höhen der Schräge, bis in die niedrigen Seiten hinein.",
    },
    {
      title: "Ausziehbare Elemente für die tiefe Schräge",
      description:
        "Auszüge und Rollelemente holen den Stauraum aus der tiefen Schräge nach vorne, statt ihn tot liegen zu lassen.",
    },
    {
      title: "Offene Regale in der Schräge",
      description:
        "Dem Winkel folgende Fächer setzen Bücher und Deko in Szene und lassen ein niedriges Dachzimmer luftiger wirken.",
    },
  ],
};

export const dachWarum = {
  heading: "Warum ein Schrank für die Dachschräge nach Maß muss",
  paragraph:
    "Unter dem Dach passt kein Standardmaß. Fertigschränke und Modelle von der Stange enden dort, wo die Schräge beginnt, und über dem Schrank bleibt ein toter Winkel offen. Wir bauen den Schrank stattdessen zentimetergenau bis unter die Schräge, als [maßgefertigten Einbauschrank](/einbauschraenke-nach-mass/), mit Fronten, die dem Winkel exakt folgen. Kniestock, Abseite und die flache Zone ganz hinten werden so vom Problem zur Stellfläche. Genau die verwinkelten Räume, an denen Standardmöbel scheitern, sind für uns Alltag.",
  images: [
    {
      src: `${IMG}/schrank-fuer-dachschraege-nach-mass-anthrazit-regalfaecher.jpg`,
      alt: "Schrank für Dachschräge nach Maß in Anthrazit mit offenen Regalfächern seitlich an der Schräge",
      width: 1280,
      height: 714,
    },
  ],
};

/**
 * SpecTable (shared): the "Selber bauen / IKEA / Tischler" third of the former
 * dachWarum2 paragraph as a scannable 3-column comparison. Cell copy keeps the
 * original claims (incl. the IKEA/PAX sentence moved out of dachWarum).
 */
export const dachVergleich = {
  heading: "Selber bauen, IKEA oder vom Tischler?",
  intro:
    "Sobald Winkel, Kniestockhöhe und Nische zusammenkommen, spielt die Maßanfertigung ihre Stärke aus: Sie nutzt jeden Zentimeter und schließt sauber an die Schräge an.",
  firstColLabel: "Kriterium",
  columns: ["Selber bauen", "IKEA & PAX", "Maßanfertigung vom Tischler"],
  highlightColumn: 2,
  rows: [
    {
      label: "Passform an der Schräge",
      values: [
        "Kann sich lohnen, wenn die Schräge gerade verläuft und die Ansprüche einfach sind.",
        "Steht senkrecht im Raum und endet dort, wo die Schräge beginnt. Die Schräge bleibt ungenutzt.",
        "Fronten und Korpus folgen dem Winkel exakt und schließen fugenlos an die Schräge an.",
      ],
    },
    {
      label: "Kniestock & toter Winkel",
      values: [
        "Niedrige Zonen sauber auszubauen braucht Erfahrung im Umgang mit Winkeln.",
        "Der tote Winkel über und neben dem Schrank bleibt offen.",
        "Kniestock und Abseite werden mit Drempelschrank und Auszügen zu Stauraum.",
      ],
    },
    {
      label: "Aufwand & Zeit",
      values: [
        "Setzt voraus, dass Sie Zeit und Werkzeug haben.",
        "Schneller Aufbau nach Bausatz.",
        "Aufmaß, 3D-Planung, Fertigung und Montage übernehmen wir komplett.",
      ],
    },
    {
      label: "Preis",
      values: [
        "Materialkosten, dafür viel Eigenleistung.",
        "Günstig, bezahlt aber mit verschenktem Stauraum.",
        "Individuelles Angebot nach dem kostenlosen Aufmaß, jeder Schrank ein Unikat.",
      ],
    },
  ],
};

/**
 * SegmentCards (shared): the price-factor sentences of the former dachWarum2
 * paragraph as one card per factor. 3×2 grid, symmetric.
 */
export const dachPreisFaktoren = {
  heading: "Was den Preis Ihres Schranks bestimmt",
  intro:
    "Einen Pauschalpreis gibt es nicht, denn jeder Schrank unter der Dachschräge ist ein Unikat. Der Preis richtet sich nach diesen Faktoren:",
  segments: [
    {
      title: "Größe",
      body: "Je mehr Meter Schräge der Schrank füllt, desto mehr Material und Fertigungszeit stecken darin.",
    },
    {
      title: "Fronten & Material",
      body: "Die Wahl der Fronten und des Materials prägt Optik und Preis Ihres Dachschrägenschranks.",
    },
    {
      title: "Innenausstattung",
      body: "Auszüge, Rollelemente und Beleuchtung holen mehr aus der Schräge heraus und wirken sich auf den Preis aus.",
    },
    {
      title: "Einbausituation",
      body: "Anschlüsse an Wand und Boden, Gauben und Balken bestimmen den Aufwand beim Einpassen.",
    },
    {
      title: "Winkel & Wände",
      body: "Ein steiler Winkel oder eine schiefe Wand ist aufwändiger als eine flache, gerade Schräge.",
    },
    {
      title: "Beschläge",
      body: "Beschläge wie Schiebetüren wirken sich aus, sparen im schmalen Dachzimmer aber Platz.",
    },
  ],
};

/**
 * UspHighlight (shared): the offer/trust close of the former dachWarum2
 * paragraph, incl. the [Beispielprojekte](/referenzen/) inline link and the
 * Kupfer photo that illustrated dachWarum2.
 */
export const dachAngebot = {
  eyebrow: "Kostenloses Aufmaß",
  heading: "Klares Angebot ohne versteckte Kosten",
  body:
    "Nach dem kostenlosen Aufmaß sagen wir Ihnen offen, was den Preis bei Ihrer Schräge bestimmt, und Sie erhalten ein klares, individuelles Angebot ohne versteckte Kosten. Wie fertige Dachschrägenschränke aussehen, zeigen unsere [Beispielprojekte](/referenzen/).",
  image: `${IMG}/dachschraegenschrank-schiebetuer-nach-mass-kupfer.jpg`,
  imageAlt:
    "Dachschrägenschrank mit Schiebetür nach Maß in Kupferoptik mit offenen Regalen und Kommode",
};

export const dachGeschichte = {
  heading: "Schrankhandwerk aus fast drei Jahrzehnten",
  subheading: "Vom Garagenbetrieb zum Meisterbetrieb",
  anchorImage: `${IMG}/ankleide-dachschraege-schiebetueren-bronze-nach-mass.jpg`,
  anchorImageAlt:
    "Begehbare Ankleide unter Dachschräge nach Maß mit bronzefarbenen Schiebetüren und offenen Regalen",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "4.000+", label: "Projekte" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "200 km", label: "Montage-Radius" },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 als Ein-Mann-Betrieb in einer Garage in Rahden-Tonnenheide. 2001 zog die Fertigung nach Espelkamp, und aus dem Gründungsbetrieb von Johann Fast wurde ein Familienunternehmen.",
    "Heute führen Andreas und Peter Fast den Betrieb mit, die zweite Generation, seit 2010 fest im Unternehmen. Mehr als 4.000 Projekte zeigen, was dabei entstanden ist: ein Meisterbetrieb mit über 1.000 m² Fertigung, moderner Homag-Technik und einem festen Team. Darunter unzählige Dachschrägen, Drempel und Altbau-Schrägen, die wir zu passgenauem Stauraum gemacht haben.",
    "Jeder Schrank entsteht bei uns im Haus. Gefertigt in Espelkamp, montiert im Umkreis von rund 200 km, freistehende Schränke liefern wir deutschlandweit.",
  ],
};

export const dachMoebelplaner = {
  heading: "Ihre Dachschräge online vorplanen, den Rest übernehmen wir",
  body:
    "Mit unserem Möbelplaner stellen Sie Ihren Schrank für die Dachschräge online zusammen. Maße, Fronten, Einteilung und Auszüge sehen Sie direkt im 3D-Konfigurator, so haben Sie sofort ein Bild von Ihrem Dachschrägenschrank vor Augen. Den Rest übernehmen wir: kostenloses Aufmaß der Schräge vor Ort, Beratung, Fertigung in Espelkamp und Montage durch unser eigenes Team. Aus Ihrer Online-Planung wird ein Schrank unter der Dachschräge nach Maß.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/einbauschrank-dachschraege-anthrazit-hochglanz.jpg`,
  imageAlt:
    "Einbauschrank an der Dachschräge nach Maß in Anthrazit-Hochglanz mit offenem Regalfach in der Schräge",
};

export const dachTestimonialsHeading = "Was unsere Kunden über ihre Dachschrägenschränke sagen";

export const dachFaq = {
  heading: "Häufige Fragen zu Schränken für die Dachschräge",
  items: [
    {
      question: "Was ist ein Drempelschrank?",
      answer:
        "Ein Drempelschrank ist ein niedriger Schrank direkt am Kniestock, also an der niedrigen Wand, auf der die Dachschräge aufsetzt. Der Bereich hinter der Schräge heißt Abseite und bleibt ohne Schrank meist ungenutzt. Ein Drempelschrank nach Maß macht genau diese niedrige Zone zugänglich, mit Türen oder Auszügen, die bis zum Beginn der Schräge reichen. So gewinnen Sie Stauraum, wo sonst nur toter Winkel wäre.",
    },
    {
      question: "Was kostet ein Schrank für die Dachschräge?",
      answer:
        "Einen Pauschalpreis gibt es nicht, denn jeder Schrank unter der Dachschräge ist ein Unikat. Der Preis richtet sich nach der Größe, den Fronten und dem Material, der Innenausstattung wie Auszügen und Beleuchtung und der Einbausituation. Ein steiler Winkel oder eine schiefe Wand ist aufwändiger als eine gerade, flache Schräge, und Beschläge wie Schiebetüren wirken sich aus. Nach einem kurzen Gespräch und dem kostenlosen Aufmaß erhalten Sie ein klares, individuelles Angebot ohne versteckte Kosten.",
    },
    {
      question: "Schiebetür oder Drehtür an der Dachschräge?",
      answer:
        "Das hängt vom Platz vor dem Schrank ab. Schiebetüren gleiten zur Seite und brauchen keinen Raum zum Aufschwenken, das ist im schmalen Dachzimmer oft die bessere Wahl. Drehtüren öffnen weiter und geben den Innenraum ganz frei, brauchen davor aber Bewegungsfläche. Bei sehr niedrigen Zonen am Kniestock setzen wir häufig Auszüge statt Türen ein. Beim Aufmaß empfehlen wir Ihnen die Lösung, die zu Ihrer Schräge und Ihrem Raum passt.",
    },
    {
      question: "Kann man den Raum ganz hinten unter der Schräge nutzen?",
      answer:
        "Ja. Gerade die tiefe Zone, in der die Schräge fast den Boden berührt, lässt sich mit ausziehbaren Elementen nutzen. Auszüge und Rollelemente holen den Stauraum aus der Abseite nach vorne, sodass Sie herankommen, ohne sich zu bücken. Feste, offene Fächer eignen sich für die etwas höheren Bereiche. So bleibt kein toter Winkel unter der Schräge ungenutzt.",
    },
    {
      question: "Passt ein IKEA-Schrank an die Dachschräge oder muss es Maßanfertigung sein?",
      answer:
        "Ein IKEA- oder PAX-Schrank ist günstig, steht aber senkrecht im Raum und endet dort, wo die Schräge beginnt. Über dem Schrank bleibt der Winkel unter dem Dach offen. Solange die Schräge hoch genug ansetzt und Sie mit dem verschenkten Platz leben können, kann ein Standardschrank reichen. Sobald Sie die Höhe bis unter die Schräge, den Kniestock oder eine Nische wirklich nutzen wollen, führt an einer Maßanfertigung kein Weg vorbei, weil nur sie dem Winkel folgt.",
    },
    {
      question: "Wie läuft das Aufmaß bei einer Schräge?",
      answer:
        "Das Aufmaß ist kostenlos und findet bei Ihnen vor Ort statt. Wir messen die Schräge an mehreren Punkten, erfassen die Kniestockhöhe und den Winkel und prüfen, ob die Ecken wirklich im rechten Winkel stehen. Auch Anschlüsse an Fenster, Gauben und Balken nehmen wir auf. Aus diesen Werten planen wir Ihren Schrank so, dass er fugenlos an der Schräge anschließt. Eingebaut wird anschließend von unserem eigenen Team im Umkreis von rund 200 km um Espelkamp.",
    },
  ],
};

const dachSchrankTypes = [...dachTypische.row1, ...dachTypische.row2].map((t) => t.title);

/**
 * JSON-LD for the Dachschräge cluster child. Same scope/convention as the pillar
 * (einbauschraenke-nach-mass.ts): Service (provider=Organization, serviceType,
 * areaServed, hasOfferCatalog), BreadcrumbList (4 levels), FAQPage (1:1 to the
 * visible FAQ), ItemList. No Product with an invented price, no AggregateRating
 * (Preise sind immer individuell, siehe FACTS.md).
 */
export const dachJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Schrank für Dachschräge nach Maß",
    serviceType: "Maßgefertigte Dachschrägenschränke",
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
      name: "Schränke für Dachschrägen nach Maß",
      itemListElement: dachSchrankTypes.map((name) => ({
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
      { "@type": "ListItem", position: 3, name: "Einbauschränke nach Maß", item: `${SITE}/einbauschraenke-nach-mass/` },
      { "@type": "ListItem", position: 4, name: "Schrank für Dachschräge", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dachFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Schränke für Dachschrägen nach Maß: Typen",
    itemListElement: dachSchrankTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
