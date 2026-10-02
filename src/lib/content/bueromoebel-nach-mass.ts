/**
 * Content for the `/bueroeinrichtung/bueromoebel-nach-mass/` page: the "Büromöbel
 * nach Maß" cluster child (Produkt) under the Büroeinrichtung pillar
 * (`/bueroeinrichtung/`, Gewerbe-Silo `buero`). Built from the shared library
 * sections (SegmentCards, SpecTable, UspHighlight, ProcessSteps) plus the Privat
 * hero/intro/planner sections. Winkel laut Cluster-Map buero.md: das komplette
 * Büromöbel-PROGRAMM aus einer Werkstatt (Einzelstücke + ein Stil), NICHT die
 * Planungs-Dienstleistung (→ /bueroeinrichtung/bueroplanung/, verlinkt) und NICHT
 * die Schrank-Innenleben-Tiefe (→ bueroschraenke-nach-mass, noch nicht gebaut).
 *
 * Voice = Fast Systemmöbel (sachlich-handwerklich, B2B, Sie-Form, keine
 * em-dashes). Fakten gegen docs/seo/brand/FACTS.md + kundenwissen.md geprüft:
 * Meisterbetrieb Espelkamp (ohne Jahr), Eigenfertigung >1.000 m², Homag/CNC,
 * PU-Kantenverleimung (fugenlos/feuchtigkeitsbeständig, NICHT wasserfest),
 * kostenloses Aufmaß, eigenes Montageteam, Montage ~200 km um Espelkamp,
 * Lieferung bundesweit. KEINE Preise, keine erfundenen Maße/mm, keine
 * Garantie-Zahl, keine Finanzierung (Gewerbe), kein "Made in Germany"-Siegel.
 *
 * Copy: Authoring-Engine (Writer/Humanizer/QC/Chefredakteur) aus dem Research-Kit
 * (docs/seo/research/bueromoebel-nach-mass.kit.md), Lauf 2026-09-30, Chefredakteur
 * pass (1421 W, 10 FAQ). Bildpfade sind Platzhalter aus dem Büro-Pool, Alt-Texte
 * beschreiben das jeweilige Motiv (siehe REVIEW.md Bild-Vorschläge).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/bueroeinrichtung/bueromoebel-nach-mass/";
const IMG = "/images/bueroeinrichtung";

export const bmHero = {
  bgImage: `${IMG}/schreibtisch-nach-mass-arbeitsplatz.jpg`,
  imageAlt:
    "Schreibtisch nach Maß mit dunkler Platte und grauem Rollcontainer in einem Büro mit Sichtbetonwänden",
  title: "Büromöbel nach Maß aus Espelkamp",
  intro:
    "Büromöbel nach Maß, das sind Schreibtisch, Aktenschrank, Sideboard und Regal, die millimetergenau in Ihren Raum passen und optisch zusammenspielen. Wir sind ein Meisterbetrieb aus Espelkamp und fertigen das ganze Programm in eigener Werkstatt. Ein Stil, ein Ansprechpartner.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Gewerbe", href: "/gewerbe/" },
    { label: "Büroeinrichtung", href: "/bueroeinrichtung/" },
    { label: "Büromöbel nach Maß" },
  ],
};

export const bmIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Möbel nach Maß, jedes Teil aus eigener Werkstatt.",
  heading: "Ein Büromöbel-Programm aus einer Werkstatt",
  introBefore: "Schreibtisch, Aktenschrank, Sideboard und Regal, alle aus einem",
  introBold: "Auftrag",
  introAfter:
    " und in einem Stil. So passt jedes Stück zum nächsten, statt aus verschiedenen Katalogen zusammengewürfelt zu wirken.",
  bandImage: `${IMG}/bueroeinrichtung-arbeitsplaetze-grossraumbuero.jpg`,
  bandAlt: "Großraumbüro mit Arbeitsplätzen, Rollcontainern und Stauraum nach Maß",
  col1Title: "Millimetergenau statt Rastermaß",
  col1Body:
    "Serienmöbel enden im Raster, den Rest verdecken Blenden. Wir bauen Ihre Büromöbel wand-zu-wand, millimetergenau nach kostenlosem Aufmaß, in Nischen wie unter Dachschrägen.",
  col1CtaLabel: "Büromöbel anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "In Espelkamp fertigen wir jedes Teil selbst, mit PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig. Von der Beratung bis zur Montage bleibt alles Teil Ihrer [Büroeinrichtung](/bueroeinrichtung/) aus einer Hand.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montageradius rund um Espelkamp",
  col3Body:
    "Aufmaß und Montage übernimmt unser eigenes Team, im Umkreis von rund 200 km, in ganz OWL, in Minden, Osnabrück und Bielefeld. Was weiter weg liegt, liefern wir bundesweit.",
  col3CtaLabel: "Büromöbel online planen",
  col3CtaHref: "/moebelplaner/",
};

export const bmCtas = {
  intro: {
    image: `${IMG}/buero-galerie-schrankwand.jpg`,
    heading: "Ihre Büromöbel beginnen mit einem Blick auf Ihren Raum",
    linkText: "Sprechen Sie mit uns über Ihre Büromöbel",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/aktenschrankwand-nach-mass-buero.jpg`,
    heading: "Ihre Büromöbel nach Maß, vom ersten Aufmaß bis zur Montage aus einer Hand.",
    linkText: "Jetzt kostenloses Aufmaß für Ihre Büromöbel anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SegmentCards (shared): Möbeltyp-Lexikon, der Haupttiefenträger der Seite. */
export const bmMoebeltypen = {
  heading: "Diese Büromöbel fertigen wir nach Maß",
  intro:
    "Vom einzelnen Arbeitsplatz bis zur kompletten Bürozeile fertigen wir jedes Stück nach Maß und stimmen es aufeinander ab. Das ganze Büro planen wir auf Wunsch vorab in der [Büroplanung](/bueroeinrichtung/bueroplanung/):",
  segments: [
    {
      title: "Schreibtisch und Arbeitsplatz",
      body: "Schreibtische nach Maß für einen oder viele Plätze, mit sauber weggeführten Kabeln und passendem Unterbau. Einzeln oder als ganze Bürozeile, abgestimmt auf Ihre Arbeitshöhe.",
    },
    {
      title: "Sitz-Steh-Arbeitsplatz",
      body: "Auf Wunsch planen wir einen Sitz-Steh-Arbeitsplatz in die Zeile ein, damit der Wechsel zwischen Sitzen und Stehen im Alltag leichtfällt. Die Ausführung stimmen wir gemeinsam in der Planung ab.",
    },
    {
      title: "Aktenschrank und Büroschrank",
      body: "Aktenschrank und Büroschrank nach Maß, die jeden Meter Wand nutzen, vom niedrigen Ordnerschrank bis zur raumhohen Schrankwand, auf Wunsch mit abschließbaren Fächern.",
    },
    {
      title: "Sideboard und Lowboard",
      body: "Sideboard und Lowboard als flache Ablage und Stauraum unter Fenster oder an der Wand, auf Wunsch auch als Highboard, in Material und Farbe passend zum übrigen Programm.",
    },
    {
      title: "Regal nach Maß",
      body: "Offene Regale und ganze Regalwände nach Maß, millimetergenau bis an Decke und Seitenwände gebaut, ohne Lücken und ohne Passleisten.",
    },
    {
      title: "Rollcontainer",
      body: "Mobiler Stauraum unter dem Schreibtisch: Rollcontainer nach Maß, in Höhe, Breite und Aufteilung auf den Arbeitsplatz abgestimmt.",
    },
  ],
};

/** SpecTable (shared): Maß-Orientierung. NUR "nach Maß / auf Wunsch", keine erfundenen mm (Kit §9b). */
export const bmMasse = {
  heading: "Maße: was bei Büromöbeln nach Maß möglich ist",
  intro:
    "Feste Millimeterwerte nennen wir bewusst nicht, weil jedes Stück nach Ihrem Raum gebaut wird. Die Tabelle zeigt, worauf es beim Maß ankommt. Verbindlich wird es nach dem kostenlosen Aufmaß, dann planen wir wand-zu-wand ohne Passleisten.",
  firstColLabel: "Maß",
  columns: ["Bei Fast nach Maß"],
  highlightColumn: 0,
  rows: [
    {
      label: "Höhe",
      values: ["Auf Ihre Räume abgestimmt, vom flachen Sideboard bis zur raumhohen Schrankwand, passgenau bis unter die Decke."],
    },
    {
      label: "Breite",
      values: ["Wand-zu-Wand gefertigt, ohne Lücken und Passleisten, auch über Ecken und in Nischen hinweg."],
    },
    {
      label: "Tiefe",
      values: ["Nach Nutzung und Raum geplant, bei Bedarf schlanker für schmale Büros, Flure und das Homeoffice."],
    },
    {
      label: "Sondersituation",
      values: ["Dachschräge, Nische und schiefe Wand nutzen wir gezielt aus, statt sie mit Blenden zu verschenken."],
    },
  ],
};

/** UspHighlight (shared): PU-Kante + Technik-/Kabelintegration (Content-Gaps laut Kit). */
export const bmTechnik = {
  eyebrow: "Verarbeitung und Technik",
  heading: "PU-Kante und Kabel, die im Büroalltag zählen",
  body:
    "Die Korpuskanten verschließen wir mit PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig. Gerade im Büro zählt das dort, wo täglich etwas abbekommt: An der Schreibtischkante und in der Teeküche hält das Möbel Stöße und Feuchtigkeit stand. Strom, Daten und Kabelführung planen wir gleich in der 3D-Planung mit, damit die Technik im Schreibtisch oder Sideboard verschwindet.",
  image: `${IMG}/schreibtisch-nach-mass-betonoptik-buero.jpg`,
  imageAlt: "Schreibtisch nach Maß mit Platte in Betonoptik und offenem Regal dahinter",
};

/** SegmentCards (shared): Material und Oberflächen. Nur belegte Kategorien (Kit §9a). */
export const bmMaterial = {
  heading: "Material, Oberfläche und Kante",
  intro:
    "Wie Ihre Büromöbel am Ende wirken, entscheiden Front, Oberfläche und Kante. Welche davon zu Ihnen passt, klären wir in der Beratung. Fest zu unserem Handwerk gehören Massivholz und die PU-Kantenverleimung.",
  segments: [
    {
      title: "Fronten und Oberflächen",
      body: "Gängige Kategorien sind Holzdekor, Echtholzfurnier, Massivholz und Lackfronten, auf Wunsch auch in RAL-Farben. Welche zu Ihrem Büro passt, hängt von Optik, Nutzung und Budget ab.",
    },
    {
      title: "Ein Stil über alle Stücke",
      body: "Weil alles aus einer Werkstatt kommt, ziehen wir ein Material- und Farbkonzept über das ganze Programm, vom Schreibtisch bis zum Regal. Auf Wunsch nehmen wir Ihr Corporate Design auf.",
    },
    {
      title: "Kante und Verarbeitung",
      body: "Die Korpuskanten schließen wir mit PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig, damit an stark genutzten Möbeln keine offenen Fugen aufreißen.",
    },
  ],
};

/** ProcessSteps (shared): Mini-Prozess (Vollprozess liegt beim Pillar und bei bueroplanung). */
export const bmProcess = {
  eyebrow: "Ablauf",
  heading: "So entstehen Ihre Büromöbel",
  image: `${IMG}/besprechungstisch-nach-mass-massivholz.jpg`,
  imageAlt: "Besprechungstisch aus Massivholz nach Maß mit Bildschirm an der Wand",
  steps: [
    {
      title: "Beratung und kostenloses Aufmaß",
      description:
        "Wir besprechen Nutzung, Stil und Umfang, bei Ihnen oder bei uns. Danach vermessen wir Ihre Räume millimetergenau, das Aufmaß vor Ort ist kostenlos.",
    },
    {
      title: "3D-Planung",
      description:
        "Aus den Maßen entsteht die 3D-Planung mit Fronten, Aufteilung und Technik. Sie sehen Ihre Büromöbel vor der Fertigung und ändern in Ruhe, bis alles stimmt.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Nach Ihrer Freigabe fertigen wir jedes Teil selbst, in unserer Werkstatt in Espelkamp, auf CNC-Technik und in Tischlerqualität.",
    },
    {
      title: "Montage durch unser eigenes Team",
      description:
        "Unser eigenes Montageteam liefert und baut auf, kein Bausatz und keine reine Lieferung. Die Passung justieren wir vor Ort, bis jede Fuge sitzt.",
    },
  ],
};

/** SpecTable (shared): Kostenfaktoren. KEINE Preise/€-Zahlen (Kit §8). */
export const bmKosten = {
  heading: "Was den Preis Ihrer Büromöbel bestimmt",
  intro:
    "Einen festen Preis nennen wir nicht, weil jedes Programm anders geplant ist. Diese fünf Faktoren bestimmen ihn. Den genauen Wert erhalten Sie als individuelles Angebot nach dem kostenlosen Aufmaß.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Umfang und Stückzahl",
      values: ["Ob einzelner Schreibtisch oder ganzes Programm aus Schreibtisch, Aktenschrank, Sideboard und Regal macht den größten Unterschied."],
    },
    {
      label: "Material und Oberfläche",
      values: ["Dekor, Furnier, Massivholz und Lackfront liegen preislich weit auseinander und prägen Optik wie Preis am stärksten."],
    },
    {
      label: "Größe und Sondermaß",
      values: ["Wand-zu-Wand, raumhoch, Nische oder Dachschräge verlangen mehr Material und Anpassung als ein Standardmaß."],
    },
    {
      label: "Ausstattung und Technik",
      values: ["Abschließbare Fächer, Auszüge und integrierte Kabelführung erhöhen den Aufwand in Planung und Fertigung."],
    },
    {
      label: "Montageaufwand",
      values: ["Montage in Etappen oder außerhalb Ihrer Geschäftszeiten braucht mehr Zeit vor Ort."],
    },
  ],
};

export const bmMoebelplaner = {
  heading: "Ihre Büromöbel online vorplanen, den Rest übernehmen wir",
  body:
    "Mit unserem [Möbelplaner](/moebelplaner/) planen Sie Schränke und Büromöbel online vor: Maße, Oberflächen und Einlegeböden im 3D-Konfigurator, in Ruhe von zu Hause oder vom Schreibtisch aus. Was Sie planen, nehmen wir auf. Alles Weitere liegt bei uns: kostenloses Aufmaß, Beratung, Fertigung in Espelkamp und Montage durch unser eigenes Team.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/bueroeinrichtung-empfang-kuechenzeile.jpg`,
  imageAlt: "Empfangsbereich mit Küchenzeile und Holzlamellen-Wand nach Maß",
};

export const bmTestimonialsHeading = "Was unsere Gewerbekunden über ihre Büromöbel sagen";

export const bmFaq = {
  heading: "Häufige Fragen zu Büromöbeln nach Maß",
  items: [
    {
      question: "Welche Büromöbel fertigt Fast nach Maß?",
      answer:
        "Schreibtisch und Arbeitsplatz, Sitz-Steh-Arbeitsplatz, Aktenschrank und Büroschrank, Sideboard und Lowboard, Regal und Rollcontainer. Alles als zusammenpassendes Programm aus einer Werkstatt, nicht als einzeln zusammengekaufte Katalogstücke.",
    },
    {
      question: "Was kosten Büromöbel nach Maß?",
      answer:
        "Einen Pauschalpreis gibt es nicht, weil jedes Programm anders geplant ist. Der Preis hängt von Umfang und Stückzahl, Material, Größe und Sondermaß, Ausstattung und Montageaufwand ab. Nach dem kostenlosen Aufmaß erhalten Sie ein individuelles Angebot.",
    },
    {
      question: "Passen Schreibtisch, Aktenschrank und Regal optisch zusammen?",
      answer:
        "Ja. Weil alles aus einer Werkstatt und einem Auftrag kommt, ziehen wir ein Material- und Farbkonzept über alle Stücke. So wirkt das Büro einheitlich, obwohl jedes Möbel einzeln nach Maß gefertigt ist.",
    },
    {
      question: "Was unterscheidet Büromöbel vom Tischler von Serienmöbeln?",
      answer:
        "Serienmöbel gibt es nur in Standard-Rastermaßen. An Nischen, Ecken und schiefen Altbauwänden behilft sich die Serie mit Blenden und Passleisten. Als Meisterbetrieb fertigen wir jedes Stück millimetergenau wand-zu-wand, in Eigenfertigung und mit frei wählbaren Materialien.",
    },
    {
      question: "Was ist PU-Kantenverleimung und warum ist sie im Büro wichtig?",
      answer:
        "Bei der PU-Kantenverleimung verschließen wir die Kanten fugenlos und feuchtigkeitsbeständig. Das zahlt sich im Büro aus: An viel genutzten Schreibtischkanten reißt über die Jahre nichts auf, und Feuchtigkeit aus der Teeküche kriecht nicht in die Platte.",
    },
    {
      question: "Gibt es höhenverstellbare Schreibtische nach Maß?",
      answer:
        "Einen Sitz-Steh-Arbeitsplatz planen wir auf Wunsch individuell in Ihre Bürozeile ein. Die genaue Ausführung stimmen wir gemeinsam in der Planung ab, passend zu Ihrer Arbeitshöhe und dem übrigen Programm.",
    },
    {
      question: "Gibt es Büromöbel nach Maß auch fürs Homeoffice?",
      answer:
        "Ja. Wir fertigen dasselbe Programm fürs Homeoffice-Arbeitszimmer wie fürs Gewerbebüro. Gerade in kleinen Räumen nutzt die Maßanfertigung Nischen und Dachschrägen aus, an denen Standardmöbel scheitern.",
    },
    {
      question: "Kann ich Kabel und Technik in die Möbel integrieren lassen?",
      answer:
        "Ja. Strom, Daten und Kabelführung nehmen wir in der 3D-Planung gleich mit auf, damit später kein Kabel offen unter dem Tisch hängt. Wie genau das aussieht, klären wir gemeinsam.",
    },
    {
      question: "Werden die Büromöbel geliefert und montiert, und in welchem Gebiet?",
      answer:
        "Lieferung und Montage übernimmt unser eigenes Team, kein Bausatz zum Selbstaufbau. Aufmaß und Montage bieten wir im Umkreis von rund 200 km um Espelkamp und in ganz OWL an. Weiter entfernt liefern wir bundesweit.",
    },
    {
      question: "Lassen sich Büromöbel nach Maß als Betriebsausgabe absetzen?",
      answer:
        "Für Gewerbe und Selbstständige gelten maßgefertigte Büromöbel in der Regel als Betriebsausgabe oder Anschaffung. Die steuerlichen Details klärt Ihr Steuerberater, das können und wollen wir nicht ersetzen.",
    },
  ],
};

const bmTypes = bmMoebeltypen.segments.map((s) => s.title);

/**
 * JSON-LD for the Büromöbel-nach-Maß child. Service (not Product-with-price, wie
 * das Kit vorgibt): Service (provider=Organization, serviceType, areaServed,
 * hasOfferCatalog), BreadcrumbList (4 levels), FAQPage (1:1 zu sichtbarer FAQ),
 * ItemList. Kein offers/aggregateRating (Preise immer individuell, FACTS.md).
 */
export const bmJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Büromöbel nach Maß",
    serviceType: "Maßgefertigte Büromöbel",
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
      name: "Büromöbel nach Maß",
      itemListElement: bmTypes.map((name) => ({
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
      { "@type": "ListItem", position: 2, name: "Gewerbe", item: `${SITE}/gewerbe/` },
      { "@type": "ListItem", position: 3, name: "Büroeinrichtung", item: `${SITE}/bueroeinrichtung/` },
      { "@type": "ListItem", position: 4, name: "Büromöbel nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bmFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Büromöbel nach Maß: Möbeltypen",
    itemListElement: bmTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
