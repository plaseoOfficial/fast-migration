/**
 * Content for the `/wohnmoebel-nach-mass/raumteiler-nach-mass/` page: the
 * "Raumteiler nach Maß" cluster child (product) under the Wohnmöbel pillar
 * (`/wohnmoebel-nach-mass/`). Same section set as the Regal sibling
 * (`regal-nach-mass.ts`, Vorlage für Struktur und Textdichte) so each section
 * carries one topic (ARCHITECTURE.md §1.1). Copy is raumteiler-specific (das
 * Möbel, das einen offenen Raum zoniert: frei stehend oder eingespannt, von
 * beiden Seiten nutzbar, Sichtschutz oder Durchblick) to avoid cannibalising the
 * pillar and the sibling product pages (Regal = offene Fläche an der Wand,
 * Bücherregal = Buch-Maß, Wohnwand = geschlossene Gesamtwand).
 * Cluster-Map: docs/seo/playbooks/clusters/wohnmoebel.md.
 *
 * Copy follows the Fast Systemmöbel brand voice (Sie-Anrede, handwerklich,
 * konkret, belegt, keine em-dashes). See docs/seo/brand/BRAND_VOICE.md und
 * docs/seo/brand/FACTS.md.
 *
 * Copy: Authoring-Engine (Writer/Humanizer/QC/Chefredakteur) aus dem Research-Kit
 * (docs/seo/research/raumteiler-nach-mass.kit.md). Bildpfade stammen aus dem
 * Wohnmöbel-/Einbauschrank-Pool; die Alt-Texte beschreiben das jeweilige Motiv
 * (docs/seo/bilder.md), Bild-Vorschläge im REVIEW.md.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/wohnmoebel-nach-mass/raumteiler-nach-mass/";
const IMG = "/images/wohnmoebel";

export const rtMeta = {
  metaTitle: "Raumteiler nach Maß aus Espelkamp | Fast Systemmöbel",
  metaDescription:
    "Raumteiler nach Maß vom Meisterbetrieb in Espelkamp: frei stehend oder raumhoch eingepasst, von beiden Seiten nutzbar. Kostenloses Aufmaß, eigene Montage.",
  ogDescription:
    "Raumteiler nach Maß vom Meisterbetrieb aus Espelkamp: offen als Regal, halboffen oder geschlossen als Sichtschutz, mit Stauraum auf beiden Seiten.",
};

export const rtHero = {
  bgImage: "/images/einbauschraenke/raumteiler-eichenlamellen-nach-mass.jpg",
  imageAlt:
    "Raumhoher Raumteiler aus Holzlamellen mit indirekter Beleuchtung und bepflanztem Trog vor einer offenen Treppe",
  title: "Raumteiler nach Maß aus Espelkamp",
  intro:
    "Ein Raumteiler nach Maß gliedert Ihren offenen Wohnraum in Zonen. Eine neue Wand brauchen Sie dafür nicht. Er ist von beiden Seiten nutzbar, bietet Stauraum und so viel Durchblick, wie Sie möchten. Wir bauen ihn als Meisterbetrieb in Espelkamp selbst, frei stehend oder raumhoch eingepasst, millimetergenau nach dem kostenlosen Aufmaß.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Wohnmöbel nach Maß", href: "/wohnmoebel-nach-mass/" },
    { label: "Raumteiler nach Maß" },
  ],
};

export const rtIntroStats = {
  since: "seit 1996",
  sinceSub: "fertigen wir Möbel nach Maß in eigener Werkstatt.",
  heading: "Ordnung im offenen Grundriss",
  introBefore:
    "Ein großer Wohnraum wirkt hell und weit. Bis der Schreibtisch neben dem Sofa steht. Dann zieht Ihr Raumteiler die Grenze, millimetergenau für Ihren Raum gebaut und von beiden Seiten",
  introBold: "wohnfertig",
  introAfter: ".",
  bandImage: `${IMG}/wohnmoebel-nach-mass-wohn-essbereich.jpg`,
  bandAlt:
    "Wohn- und Essbereich mit frei stehendem Holzblock für Fernseher und Glaskamin",
  col1Title: "Sichtschutz oder Durchblick",
  col1Body:
    "Wo Sie Ruhe brauchen, schließen Fronten den Blick ab. Soll Licht durchkommen, bleiben die Fächer offen. Das legen wir für jede Seite einzeln fest.",
  col1CtaLabel: "Raumteiler nach Maß anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Jeden Raumteiler fertigen wir in unserer Werkstatt in Espelkamp, wie alle unsere [Wohnmöbel nach Maß](/wohnmoebel-nach-mass/). Seit 2010 packt bei Familie Fast die zweite Generation mit an.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Im Umkreis von rund 200 km messen wir kostenlos auf und montieren mit eigenem Team, etwa in Lübbecke, Minden oder Bielefeld. Einen frei stehenden Raumteiler liefern wir darüber hinaus deutschlandweit.",
  col3CtaLabel: "Raumteiler online vorplanen",
  col3CtaHref: "/moebelplaner/",
};

export const rtCtas = {
  intro: {
    image: `${IMG}/wohnmoebel-nach-mass-wohn-essbereich.jpg`,
    heading: "Erzählen Sie uns, was Sie trennen möchten",
    linkText: "Beratung zum Raumteiler anfragen",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/tv-wand-nach-mass-wandpolsterung.jpg`,
    heading: "Planen wir Ihren Raumteiler gemeinsam",
    linkText: "Kostenloses Aufmaß für Ihren Raumteiler anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/** SegmentCards (shared): Bauweisen des Raumteilers (Kit §3 Modul 4, MI 1/2/4). */
export const rtVarianten = {
  heading: "Offen oder geschlossen: Welcher Raumteiler passt zu Ihnen?",
  intro:
    "Welche Bauweise passt, hängt davon ab, wie viel Sichtschutz Sie brauchen. Soll das Möbel gar nicht frei im Raum stehen, sondern an der Wand? Dann planen wir ein [offenes Regal nach Maß](/wohnmoebel-nach-mass/regal-nach-mass/) oder, wenn Sie vor allem geschlossenen Stauraum suchen, eine [Wohnwand nach Maß](/wohnmoebel-nach-mass/wohnwand-nach-mass/).",
  segments: [
    {
      title: "Offenes Regal als Raumteiler",
      body: "Fächer ohne Rückwand, aus beiden Zonen erreichbar. Der Raum bleibt hell, und trotzdem sieht jeder, wo die Leseecke aufhört.",
    },
    {
      title: "Halboffen und asymmetrisch",
      body: "Offene und geschlossene Fächer wechseln sich ab. Auf der einen Seite etwa Schubladen oder eine Teil-Rückwand, auf der anderen offene Ablage.",
    },
    {
      title: "Geschlossen als Sichtschutz",
      body: "Eine durchgehende Rückwand, Türen oder Klappen lassen keinen Blick durch. Gut, wenn Bett oder Schreibtisch verschwinden sollen. Auf Wunsch planen wir ein Schiebeelement ein.",
    },
    {
      title: "Frei stehend oder eingespannt",
      body: "Frei stehend bleibt er ein Möbel, das Sie später umstellen können. Zwischen Boden und Decke eingepasst und gesichert, wirkt er wie eingebaut.",
    },
  ],
};

/** SpecTable (shared): Maß-Orientierung qualitativ, KEINE cm-Werte (Kit §9c Leerstelle 6). */
export const rtMasse = {
  heading: "Wie hoch und wie tief sollte ein Raumteiler sein?",
  intro:
    "Höhe und Tiefe eines Raumteilers hängen davon ab, wie viel Sicht zwischen den Zonen bleiben soll und was in die Fächer kommt. Die Tabelle zeigt, woran man sich üblicherweise orientiert. Ein Standardmaß gibt es bei uns nicht. Wir planen millimetergenau nach dem kostenlosen Aufmaß vor Ort.",
  firstColLabel: "Maß",
  columns: ["Übliche Orientierung", "Bei Fast nach Maß"],
  highlightColumn: 1,
  rows: [
    {
      label: "Höhe",
      values: [
        "Halbhoch mit Blickkontakt, brusthoch als Sichtschutz im Sitzen, raumhoch für eine klare Trennung.",
        "Jede Höhe, die Ihr Raum hergibt, bis direkt unter die Decke.",
      ],
    },
    {
      label: "Tiefe",
      values: [
        "Ein beidseitig nutzbarer Raumteiler braucht mehr Tiefe als ein Deko-Regal, mit Schubladen und Türen noch mehr.",
        "Auf Wunsch geteilt: flache Ablage auf der einen, tiefe Schubladen auf der anderen Seite.",
      ],
    },
    {
      label: "Fachbreite und Böden",
      values: [
        "Offene Böden biegen sich bei großer Spannweite durch, deshalb begrenzt man die Fachbreite.",
        "Fächer frei eingeteilt. Zwischenwände verkürzen die Spannweite und geben dem frei stehenden Korpus Halt.",
      ],
    },
    {
      label: "Standsicherheit",
      values: [
        "Je höher ein Raumteiler im Verhältnis zur Tiefe, desto eher braucht er eine Kippsicherung.",
        "Standfest geplant, bei Bedarf dezent an Decke oder Wand gesichert.",
      ],
    },
    {
      label: "Dachschräge und Nische",
      values: [
        "Unter einer Schräge oder einem Deckenbalken braucht der Raumteiler eine abgestufte oder schräge Oberkante.",
        "Vor Ort aufgemessen und auf den Millimeter zugeschnitten, seitlich auch bündig in eine Nische gesetzt.",
      ],
    },
  ],
};

/** UspHighlight (shared): zwei Schauseiten + PU-Kante an Plattenkanten (Kit §3 Modul 7, §10a). */
export const rtMaterial = {
  eyebrow: "Material und Verarbeitung",
  heading: "Ein Raumteiler hat keine Rückseite",
  body:
    "Einen Raumteiler sieht man von beiden Seiten, also bekommt er zwei Schauseiten. Auch hinter Schubladen schauen Sie von der anderen Seite auf eine fertige Fläche. Jede Plattenkante verschließen wir fugenlos und feuchtigkeitsbeständig mit PU-Kantenverleimung, auch an den Stirnseiten, die frei im Raum stehen. Den Korpus bauen wir aus Massivholz oder Plattenwerkstoff.",
  image: "/images/einbauschraenke/einbauschrank-nach-mass-anthrazit-fenster.jpg",
  imageAlt:
    "Schrankwand in Anthrazit mit grifflosen Türen, beleuchteten offenen Fächern und Schubladen neben einer Fensterfront",
};

/** SegmentCards (shared): Zonen, die ein Raumteiler trennt (Kit §3 Modul 3, MI 5). */
export const rtZonen = {
  heading: "Welche Bereiche lassen sich mit einem Raumteiler trennen?",
  intro:
    "Ein Raumteiler lohnt sich überall, wo in einem Raum zwei Nutzungen aneinanderstoßen. Welche zwei es sind, entscheidet über Höhe und Bauweise.",
  segments: [
    {
      title: "Wohn- und Essbereich",
      body: "Halbhoch und offen, damit Sie vom Sofa aus den Esstisch im Blick behalten. Zum Tisch hin nehmen Schubladen Tischwäsche und Besteck auf.",
    },
    {
      title: "Homeoffice",
      body: "Auf der Schreibtischseite offene Fächer für Ordner und Drucker, zum Wohnbereich eine geschlossene Rückwand. Nach Feierabend ist die Arbeit aus den Augen.",
    },
    {
      title: "Schlaf- und Ankleidebereich",
      body: "Raumhoch und geschlossen schirmt er im Loft oder großen Schlafzimmer das Bett ab. Auf der anderen Seite wird er mit Kleiderstange zur Ankleide.",
    },
    {
      title: "Eingang und Flur",
      body: "Führt die Haustür direkt ins Wohnzimmer, schafft der Raumteiler einen Eingangsbereich. Zur Tür hin Garderobe und Schuhfach, zum Raum hin offene Fächer.",
    },
  ],
};

/** ProcessSteps (shared): Mini-Prozess (Vollprozess liegt beim Pillar). */
export const rtProcess = {
  eyebrow: "Ablauf",
  heading: "In vier Schritten zum Raumteiler",
  image: "/images/einbauschraenke/einbauschrank-montage-espelkamp.jpg",
  imageAlt:
    "Zwei Monteure von Fast Systemmöbel richten einen Lamellen-Raumteiler aus Holz vor einer offenen Treppe aus",
  steps: [
    {
      title: "Beratung und kostenloses Aufmaß",
      description:
        "Zuerst klären wir, welche Bereiche entstehen sollen und was offen bleiben darf. Dann messen wir bei Ihnen Boden, Decke und Wände aus. Kostenlos.",
    },
    {
      title: "Technische 3D-Planung",
      description:
        "In 3D sehen Sie Ihren Raumteiler aus beiden Blickrichtungen, mit jedem Fach und jeder Front, bevor wir die erste Platte zuschneiden.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Sobald Sie die Planung freigeben, bekommen Sie einen verbindlichen Montagetermin. Dann fertigen wir Korpus und Fronten an unseren eigenen Maschinen.",
    },
    {
      title: "Montage durch unser eigenes Team",
      description:
        "Unser Team stellt ihn bei Ihnen lotrecht auf, auch auf unebenem Boden. Eingespannt schließt er bündig an die Decke an.",
    },
  ],
};

/** SpecTable (shared): Kostentreiber. KEINE Preise/€-Zahlen (Kit §8). */
export const rtKosten = {
  heading: "Was kostet ein Raumteiler nach Maß?",
  intro:
    "Der Preis eines Raumteilers nach Maß hängt vor allem von Größe, Bauweise, Material, Ausstattung und Einbausituation ab. Weil kein Raumteiler dem anderen gleicht, gibt es keinen Pauschalpreis. Nach dem kostenlosen Aufmaß erhalten Sie ein Angebot für genau Ihren Entwurf. Als Privatkunde können Sie auf Wunsch finanzieren.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Größe und Raumhöhe",
      values: ["Ein raumhoher, breiter Raumteiler braucht mehr Material und Fertigungszeit als ein halbhoher."],
    },
    {
      label: "Offen oder geschlossen",
      values: ["Jede Tür und jede Klappe bringt Material und Beschläge mit, die ein offenes Fach nicht braucht."],
    },
    {
      label: "Material und Oberfläche",
      values: ["Massivholz oder Plattenwerkstoff, dazu eine Oberfläche, die beim Raumteiler rundum fertig sein muss, nicht nur vorn."],
    },
    {
      label: "Ausstattung",
      values: ["Schubladen brauchen Auszüge, ein Schiebeelement Laufschienen. Beides rechnen wir einzeln ein."],
    },
    {
      label: "Einbausituation und Montage",
      values: ["Frei stehend ist am einfachsten. Dachschräge, Balken oder raumhohes Einspannen verlangen mehr Anpassung und Montagezeit."],
    },
  ],
};

export const rtMoebelplaner = {
  heading: "Im Möbelplaner beginnen, vor Ort zu Ende planen",
  body:
    "Im [Möbelplaner](/moebelplaner/) probieren Sie aus, wie breit Ihr Raumteiler werden soll und welche Fächer eine Front bekommen. Fertig geplant ist er damit noch nicht. Beim Termin vor Ort prüfen wir, ob die Idee in Ihrem Raum aufgeht, auch vom Esstisch oder Schreibtisch aus gesehen.",
  ctaLabel: "Raumteiler im Möbelplaner starten",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/arbeitszimmer-nach-mass-schreibtisch-sideboard.jpg`,
  imageAlt:
    "Arbeitszimmer mit Schreibtisch, hellem Sideboard, Besprechungstisch und Wandverkleidung aus Holzlamellen",
};

export const rtTestimonialsHeading = "Was Kunden über unsere Arbeit sagen";

export const rtFaq = {
  heading: "Häufige Fragen zum Raumteiler nach Maß",
  items: [
    {
      question: "Kann ein Raumteiler frei stehen, auch in einer Mietwohnung?",
      answer:
        "Ja. Tiefe und Breite legen wir dann so aus, dass er ohne Bohrloch in Decke oder Wand sicher steht. Wie hoch er dafür werden darf, klären wir in der Planung. Ziehen Sie um, kommt er mit.",
    },
    {
      question: "Nimmt ein Raumteiler dem Raum das Licht?",
      answer:
        "Nur so viel, wie Sie zulassen. Offene Fächer lassen Tageslicht durch, über halbhohe Raumteiler fällt es hinweg. Geschlossene Flächen setzen wir dort, wo Sie Sichtschutz brauchen, etwa unten, und lassen die oberen Fächer offen.",
    },
    {
      question: "Reicht für einen Raumteiler ein Online-Konfigurator?",
      answer:
        "Für die erste Skizze, etwa in unserem Möbelplaner, ja. Ein Konfigurator rechnet aber nur mit dem, was Sie eingeben. Ob der Raumteiler sicher steht, ob ein Balken stört oder der Boden abfällt, prüfen wir als Meisterbetrieb vor Ort.",
    },
    {
      question: "Muss für einen eingepassten Raumteiler die Fußleiste weg?",
      answer:
        "Nein. Wo der Raumteiler an die Wand stößt, bekommt er eine Aussparung, und die Fußleiste bleibt, wo sie ist. Oben folgt er auch einer schiefen Decke. Beides nehmen wir beim Aufmaß auf, Passleisten braucht es nicht.",
    },
    {
      question: "Kann ein Raumteiler ein Kinderzimmer für zwei Kinder teilen?",
      answer:
        "Ja. Jedes Kind bekommt seine Seite mit eigenen Fächern. Kinder klettern gern, deshalb empfehlen wir bei höheren Raumteilern eine Sicherung an Decke oder Wand.",
    },
    {
      question: "Lassen sich Kabel durch den Raumteiler führen?",
      answer:
        "Ja, auf Wunsch. Für eine Leuchte oder den Schreibtisch auf der Arbeitsseite planen wir Kabeldurchführungen gleich mit ein. Wo der Strom herkommt, ob aus der Wand oder einer Bodendose, klären wir beim Aufmaß.",
    },
    {
      question: "Dämpft ein Raumteiler Geräusche im Raum?",
      answer:
        "Ein wenig. Eine geschlossene Rückwand und gut gefüllte Fächer brechen den Schall, der offene Raum hallt dann weniger. Eine echte Trennwand mit Schallschutz ersetzt ein Raumteiler aber nicht.",
    },
    {
      question: "Wie lange warte ich auf einen Raumteiler nach Maß?",
      answer:
        "Das hängt vom Umfang ab. Ein halbhoher, offener Raumteiler ist schneller gebaut als ein raumhoher mit Türen und Schubladen. Darum legen wir uns erst nach Aufmaß und Freigabe fest, dann aber mit einem verbindlichen Termin.",
    },
    {
      question: "Liefern Sie einen Raumteiler auch deutschlandweit?",
      answer:
        "Ja, frei stehende Raumteiler liefern wir deutschlandweit. Raumhoch eingepasste bauen wir nur im Umkreis von rund 200 km um Espelkamp ein, denn sie brauchen Aufmaß und Montage durch unser eigenes Team.",
    },
  ],
};

const rtTypes = rtVarianten.segments.map((s) => s.title);

/**
 * JSON-LD for the Raumteiler product child. Same scope/convention as the Regal
 * and Wohnwand siblings (Service, not Product-with-price): Service
 * (provider=Organization, serviceType, areaServed, hasOfferCatalog),
 * BreadcrumbList (4 levels), FAQPage (1:1 to visible FAQ), ItemList. No
 * offers/aggregateRating (Preise sind immer individuell, siehe FACTS.md).
 */
export const rtJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Raumteiler nach Maß",
    serviceType: "Maßgefertigte Raumteiler",
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
      name: "Raumteiler nach Maß",
      itemListElement: rtTypes.map((name) => ({
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
      { "@type": "ListItem", position: 3, name: "Wohnmöbel nach Maß", item: `${SITE}/wohnmoebel-nach-mass/` },
      { "@type": "ListItem", position: 4, name: "Raumteiler nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: rtFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Raumteiler nach Maß: Bauweisen",
    itemListElement: rtTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
