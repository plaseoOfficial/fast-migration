/**
 * Content for the `/ratgeber/` page: the "Möbel nach Maß Ratgeber" hub, one
 * level over the cluster pillars (moebel-nach-mass silo) and the neutral
 * counterpart to the /moebel-nach-mass/ service hub. Composition follows the
 * hauswirtschaftsraum / moebel-nach-mass Privat sections (Hero, IntroStats,
 * SpecTable, Warum, UspHighlight, ProcessSteps, SegmentCards, Geschichte,
 * Moebelplaner, WeitereLeistungen card grid = ItemList "Ratgeber-Karten",
 * Testimonials, FAQ). Research-Kit: docs/seo/research/ratgeber.kit.md.
 *
 * Winkel (Kit §6): der einzige echte Ratgeber-Hub im SERP-Set — er ordnet ein
 * und verlinkt in die Tiefe, statt Cluster-Tiefe zu duplizieren (Gate 11).
 * Ton: überblickend-einordnend, weicher CTA. Preise IMMER individuell
 * (FACTS.md); keine Garantie-, Preis-, Lieferzeit- oder Holzart-Behauptungen.
 *
 * Bilder: Platzhalter aus dem Bestand von /moebel-nach-mass/ (/images/2025/11/*);
 * Alt-Texte beschreiben das jeweilige Motiv. Vor Launch ggf. gegen eigene
 * Ratgeber-Motive tauschen (siehe REVIEW.md Bild-Vorschläge).
 */
import type { ServiceCard } from "@/types/mnm";

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/ratgeber/";

export const ratgeberHero = {
  bgImage: "/images/2025/11/WhatsApp-Bild-2025-04-01-um-22.54.05_fab2d495.jpg",
  imageAlt:
    "Raumhoher Einbauschrank nach Maß, gefertigt im Meisterbetrieb von Fast Systemmöbel",
  title: "Möbel nach Maß: der Ratgeber",
  intro:
    "Was Möbel nach Maß von Serienmöbeln unterscheidet, wann sie sich lohnen und wie sie entstehen: Dieser Ratgeber ordnet das für Sie ein und zeigt Lösungen für Küche, Bad, Wohnbereich und Stauraum. Geschrieben aus der Werkstatt von Fast Systemmöbel, Ihrem Meisterbetrieb in Espelkamp.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Ratgeber" },
  ],
};

export const ratgeberIntroStats = {
  since: "seit 1996",
  sinceSub: "planen und fertigen wir nach Maß.",
  heading: "Was sind Möbel nach Maß?",
  introBefore: "Möbel nach Maß werden für Ihren Raum",
  introBold: "geplant",
  introAfter:
    " und in unserem Meisterbetrieb gefertigt, statt fertig aus dem Katalog gewählt. So sitzt jedes Stück millimetergenau in Ihrem Raum, ohne Passleisten und ohne sichtbare Lücken.",
  bandImage: "/images/2025/11/IMG_2772-scaled.jpg",
  bandAlt: "Weiße, maßgefertigte Einbauschränke in einem Flur, Wand zu Wand geplant",
  col1Title: "Individuell geplant",
  col1Body:
    "Jedes Möbelstück entsteht nach Ihren Maßen, passend zu Ihrem Grundriss. Ob raumhoher Einbauschrank, Küche oder Regal nach Maß: Sie bestimmen Aufteilung, Fronten und Material, wir setzen es in unserem Meisterbetrieb in Espelkamp um.",
  col1CtaLabel: "Kostenlose Beratung anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Wir planen und fertigen für [Küche](/kuechen-nach-mass/), Bad, Wohnbereich, Flur und Garderobe, Hauswirtschaftsraum und Gewerbe. Beratung, kostenloses Aufmaß und Montage übernimmt unser eigenes Team, geliefert wird bundesweit.",
  counterTarget: 72,
  counterDuration: 2000,
  counterSuffix: "K+",
  col3Title: "gefertigte Einzelteile",
  col3Body:
    "Aus mehr als 72.000 Einzelteilen entstehen bei uns passgenaue Möbel. Wie das im Alltag aussieht, zeigen die Bereiche und Referenzen weiter unten.",
  col3CtaLabel: "Möbel selbst planen",
  col3CtaHref: "/moebelplaner/",
};

/**
 * Vergleichstabelle (shared SpecTable, Kit §3 Modul 3): Möbel nach Maß vs.
 * Serienmöbel als zitierbarer AEO-Container — die SERP hat keine echte Tabelle
 * (Snippet-Lücke). Zeile "Langlebigkeit" bewusst OHNE Nachkauf-/Reparier-Claim
 * (Chef-Befund 2026-08-05, Kit §8): "solide Konstruktion, auf Jahre ausgelegt".
 * Keine Preise, keine erfundenen Maße.
 */
export const ratgeberVergleich = {
  heading: "Möbel nach Maß oder von der Stange?",
  intro:
    "Serienmöbel bringen feste Raster mit, Maßarbeit richtet sich nach Ihrem Raum. Die wichtigsten Unterschiede zwischen Möbeln nach Maß und Standardmöbeln auf einen Blick.",
  firstColLabel: "Kriterium",
  columns: ["Möbel nach Maß (Fast)", "Serienmöbel von der Stange"],
  highlightColumn: 0,
  rows: [
    {
      label: "Passform",
      values: [
        "Wand zu Wand ohne Passleisten, jede Nische wird genutzt",
        "feste Standardmaße, sichtbare Lücken und Blenden",
      ],
    },
    {
      label: "Raumnutzung",
      values: [
        "Dachschräge, Nische und Sondermaß werden mitgeplant",
        "schwierige Grundrisse bleiben ungenutzt",
      ],
    },
    {
      label: "Material & Verarbeitung",
      values: [
        "Massivholz und hochwertige Plattenwerkstoffe, PU-Kante fugenlos verschlossen",
        "je nach Serie, oft nur beschichtete Platten",
      ],
    },
    {
      label: "Langlebigkeit",
      values: [
        "solide Konstruktion, auf Jahre ausgelegt",
        "meist auf einen Produktzyklus ausgelegt",
      ],
    },
    {
      label: "Beratung & Planung",
      values: [
        "kostenloses Aufmaß vor Ort, 3D-Planung, ein fester Ansprechpartner",
        "Selbstauswahl oder Verkaufsgespräch im Möbelhaus",
      ],
    },
    {
      label: "Lieferung & Montage",
      values: [
        "eigenes Montageteam im Umkreis, Lieferung bundesweit",
        "Selbstmontage oder Fremddienstleister",
      ],
    },
  ],
};

export const ratgeberWarum = {
  heading: "Warum sich Möbel nach Maß lohnen",
  paragraph:
    "Der große Vorteil von Maßmöbeln: Sie nutzen jeden Zentimeter. Ein Möbel sitzt Wand zu Wand, ohne Passleisten, und meistert Dachschräge, Nische und schwierige Raumsituationen, an denen Standardmöbel scheitern. Gefertigt wird jedes Stück in unserem [Meisterbetrieb](/ueber-uns/) in Espelkamp, aus Massivholz und hochwertigen Plattenwerkstoffen. So bekommen Sie individuelle Möbel, die passgenau sitzen und über Jahre halten, statt nach einem Produktzyklus ersetzt zu werden.",
  images: [
    { src: "/images/2025/11/20231204_095459232_iOS-scaled.jpg", alt: "Moderne Einbauküche nach Maß in Grau und Weiß", width: 600, height: 450 },
    { src: "/images/2025/11/DSC_0001.jpg", alt: "Schreibtisch nach Maß aus eigener Fertigung", width: 600, height: 400 },
    { src: "/images/2025/11/DSC_9814.jpg", alt: "Dunkelgraues Lowboard nach Maß mit klarer Front", width: 600, height: 420 },
    { src: "/images/2025/11/IMG_4797-scaled.jpg", alt: "Küche nach Maß mit weißen, grifflosen Fronten", width: 600, height: 800 },
    { src: "/images/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg", alt: "Helle Küche nach Maß mit Holzakzenten", width: 600, height: 380 },
    { src: "/images/2025/11/20181220_075204314_iOS-scaled.jpg", alt: "Sitzbank nach Maß mit Holzsitzfläche im Eingangsbereich", width: 600, height: 450 },
  ],
};

/**
 * "Aus einer Hand"-Proof als eigener USP-Block (Sektions-Politik Ben 2026-07-24:
 * lieber eine Sektion mehr als eine überladene). Nimmt das PU-Kante-/
 * aus-einer-Hand-Argument auf, das sonst den Warum-Absatz übervoll machte.
 * Alle Aussagen belegt (FACTS.md ✅): aus einer Hand, PU-Kante fugenlos/
 * feuchtigkeitsbeständig, ein fester Ansprechpartner.
 */
export const ratgeberUsp = {
  eyebrow: "Aus einer Hand",
  heading: "Planung, Fertigung und Montage bleiben im Haus",
  body:
    "Bei Fast Systemmöbel läuft alles unter einem Dach: Wer Sie berät, plant Ihr Möbel, kennt das Aufmaß und weiß, wie gefertigt und montiert wird. In der eigenen Werkstatt in Espelkamp verschließen wir die Kanten mit der PU-Technik fugenlos und feuchtigkeitsbeständig. So entsteht Ihr Möbel über einen festen Ansprechpartner, ohne Reibungsverluste zwischen Händler, Werk und Monteur.",
  stat: { value: "1", label: "Ansprechpartner für Ihr Projekt" },
  image: "/images/2025/11/IMG_2249.jpg",
  imageAlt: "Maßgefertigte Garderobe mit Stauraum aus eigener Fertigung von Fast Systemmöbel",
};

export const ratgeberProcess = {
  eyebrow: "In fünf Schritten",
  heading: "So entsteht Ihr Möbel nach Maß",
  image: "/images/2025/11/20161103_150622294_iOS-scaled.jpg",
  imageAlt: "Raumhoher, maßgefertigter Einbauschrank in Anthrazit",
  steps: [
    {
      title: "Beratung",
      description:
        "Wir hören zu und klären, was Ihr Raum braucht. Das geht vor Ort bei Ihnen oder im Büro in Espelkamp, telefonisch erreichen Sie uns unter 05771 9138312.",
    },
    {
      title: "Kostenloses Aufmaß vor Ort",
      description:
        "Unser Team nimmt bei Ihnen präzise Maß und prüft Wände, Schrägen und Anschlüsse, damit später jeder Millimeter passt. Im Montagegebiet ist das Aufmaß kostenlos.",
    },
    {
      title: "3D-Planung",
      description:
        "Sie sehen Ihr Möbel digital, mit Maßen, Aufteilung und Materialien, und entscheiden über Fronten, Griffe oder grifflos, bevor das erste Brett geschnitten wird.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Alle Teile entstehen in Eigenregie in unserem Meisterbetrieb, auf über 1.000 m² mit moderner Maschinentechnik, ohne Zwischenhändler.",
    },
    {
      title: "Lieferung & Montage",
      description:
        "Unser eigenes Montageteam baut im Umkreis von rund 200 km auf, geliefert wird bundesweit. Den verbindlichen Termin nennen wir nach Aufmaß und Freigabe.",
    },
  ],
};

export const ratgeberKosten = {
  eyebrow: "Was den Preis bestimmt",
  heading: "Was kosten Möbel nach Maß?",
  intro:
    "Einen Pauschalpreis gibt es bei Maßanfertigung nicht, weil jedes Projekt anders zugeschnitten wird. Ihr Preis entsteht aus Material, Ausstattung und Aufwand. Diese fünf Faktoren bestimmen ihn, das genaue Angebot folgt nach dem kostenlosen Aufmaß.",
  segments: [
    {
      title: "Größe & Fläche",
      body: "Wie viele Meter gebaut werden und wie groß das Möbel ausfällt, bestimmt den Umfang.",
    },
    {
      title: "Material & Fronten",
      body: "Massivholz oder Plattenwerkstoff, die Oberfläche, Hochglanz, Lack oder Dekor wirken sich aus.",
    },
    {
      title: "Ausstattung",
      body: "Innenaufteilung, Beschläge, Kleiderstangen, Auszüge und LED-Beleuchtung kommen hinzu.",
    },
    {
      title: "Einbausituation",
      body: "Dachschräge, Nische oder ein schiefer Altbau-Grundriss erhöhen den Planungs- und Bauaufwand.",
    },
    {
      title: "Montageaufwand",
      body: "Wie aufwendig die Montage vor Ort wird, fließt ins individuelle Angebot ein.",
    },
  ],
};

export const ratgeberGeschichte = {
  heading: "Ein Meisterbetrieb aus Espelkamp",
  subheading: "Vom Garagenbetrieb zum Möbelhersteller",
  anchorImage: "/images/2025/11/DSC_9965.jpg",
  anchorImageAlt:
    "Lowboard nach Maß mit indirekter LED-Beleuchtung aus der Fertigung von Fast Systemmöbel",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "200 km", label: "Montageradius" },
    { value: "bundesweit", label: "Lieferung" },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 als Familienbetrieb in einer Garage in Rahden-Tonnenheide. 2001 zog die Fertigung nach Espelkamp, seither wachsen Betrieb und Maschinenpark stetig.",
    "Heute führt die Familie Fast den Meisterbetrieb in zweiter Generation und fertigt mit handwerklicher Präzision auf über 1.000 m² Made in Germany. Wir montieren mit eigenem Team im Umkreis von rund 200 km um Espelkamp und liefern darüber hinaus bundesweit.",
    "Wie das in der Praxis aussieht, zeigen unsere [realisierten Projekte](/referenzen/) aus der Werkstatt in Espelkamp, von der Küche über den Einbauschrank bis zur kompletten Geschäftseinrichtung.",
  ],
};

export const ratgeberMoebelplaner = {
  heading: "Möbel nach Maß online planen",
  body:
    "Mit unserem Möbelplaner stellen Sie Schränke, Küche, Bad oder Wohnmöbel selbst zusammen und sehen Maße und Oberflächen direkt im 3D-Konfigurator. Den Rest übernehmen wir: kostenloses Aufmaß, Beratung, Fertigung in Espelkamp und Montage. Lieber gleich sprechen? [Stellen Sie Ihre Anfrage](/kontakt/) oder rufen Sie an unter 05771 9138312.",
  ctaLabel: "Möbelplaner ausprobieren",
  ctaHref: "/moebelplaner/",
  image: "/images/2025/11/20150701_185458257_iOS-scaled.jpg",
  imageAlt: "Empfangstheke nach Maß in einem Empfangsbereich, gefertigt von Fast Systemmöbel",
};

/** Final-CTA + intro-CTA expanding image blocks (shared ExpandingImageCta). */
export const ratgeberCtas = {
  intro: {
    image: "/images/2025/11/IMG_6123-scaled.jpg",
    heading: "Ihr Raum verdient mehr als Möbel von der Stange.",
    linkText: "Sprechen Sie mit uns über Ihr Projekt",
    href: "/kontakt/",
  },
  final: {
    image: "/images/2025/11/DSC_9938.jpg",
    heading: "Möbel nach Maß beginnen mit einem Gespräch.",
    linkText: "Kostenlose Beratung anfragen",
    href: "/kontakt/",
  },
};

/**
 * Ratgeber-Karten-Grid (Kit §3 Modul 2, Herzstück = ItemList): eine Karte je
 * Bereich mit eigenständiger Beschreibung + Link auf die GEBAUTE Zielseite
 * (Kit §7). Silo-Disziplin: nur Hub↔Hub in den Gewerbe-Bereich (/gewerbe/),
 * keine Gewerbe-Cluster. 8 Karten + Ampersand-Kachel = sauberes 3×3-Grid
 * (Möbelplaner-Karte entfällt bewusst, der Planer hat eine eigene Sektion —
 * Chef-Befund 2026-08-05).
 */
export const ratgeberWeitereCards: ServiceCard[] = [
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Küchen nach Maß",
    description:
      "Zentimetergenaue Küche nach Maß vom Meisterbetrieb, randlos geplant, bis unter die Dachschräge, geliefert und vom eigenen Team montiert.",
    href: "/kuechen-nach-mass/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Einbauschränke nach Maß",
    description:
      "Kleiderschrank, begehbarer Kleiderschrank und Garderobe fürs Schlafzimmer, mit Dreh- oder Schiebetür, bis zur Decke und unter die Dachschräge geplant.",
    href: "/einbauschraenke-nach-mass/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Badmöbel nach Maß",
    description:
      "Feuchtigkeitsbeständige Badmöbel nach Maß, vom Waschtisch über den Unterschrank bis zum Spiegelschrank, auf jede Nische im Bad zugeschnitten.",
    href: "/badmoebel-nach-mass/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Wohnmöbel nach Maß",
    description:
      "Wohnwand, Sideboard und Regal nach Maß fürs Wohnzimmer, lückenlos geplant, auf Wunsch mit LED-Beleuchtung.",
    href: "/wohnmoebel-nach-mass/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Hauswirtschaftsraum",
    description:
      "Stauraum für Waschküche und Vorratskammer, um Ihre Geräte herum geplant, bis unter die Decke.",
    href: "/hauswirtschaftsraum/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Möbel nach Maß für Zuhause",
    description:
      "Der Überblick über unser Privatangebot für Küche, Bad, Wohnbereich und Stauraum, geplant, gefertigt und montiert aus einer Hand.",
    href: "/moebel-nach-mass/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-08.svg",
    title: "Einrichtung für Gewerbe",
    description:
      "Für Büro, Ladenbau, Gastronomie und Praxis bauen wir langlebige Objektmöbel nach Maß.",
    href: "/gewerbe/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Referenzprojekte",
    description:
      "Realisierte Küchen, Einbauschränke und Wohnmöbel aus unserer Werkstatt in Espelkamp.",
    href: "/referenzen/",
    moreLabel: "Projekte ansehen",
  },
];

export const ratgeberTestimonialsHeading = "Das sagen unsere Kunden";

export const ratgeberFaq = {
  heading: "Häufige Fragen zu Möbeln nach Maß",
  items: [
    {
      question: "Was sind Möbel nach Maß und für wen lohnen sie sich?",
      answer:
        "Möbel nach Maß werden für Ihren Raum geplant und gefertigt statt aus dem Katalog gewählt. Sie lohnen sich überall dort, wo Standardmaße nicht passen: bei Dachschrägen, Nischen, kleinen oder verwinkelten Räumen, oder wenn ein Möbel randlos Wand zu Wand sitzen und jeden Zentimeter nutzen soll.",
    },
    {
      question: "Was kosten Möbel nach Maß?",
      answer:
        "Einen Pauschalpreis nennen wir nicht, weil jedes Projekt anders zugeschnitten wird. Der Preis entsteht aus Größe, Material und Fronten, Ausstattung, Einbausituation und Montageaufwand. Nach dem kostenlosen Aufmaß erhalten Sie ein individuelles Angebot, das genau Ihr Möbel abbildet und keine Katalogschätzung.",
    },
    {
      question: "Wie läuft die Anfertigung ab, von der Beratung bis zur Montage?",
      answer:
        "In fünf Schritten: Beratung, kostenloses Aufmaß vor Ort, 3D-Planung, Fertigung in unserem Meisterbetrieb in Espelkamp und Montage durch unser eigenes Team. Ein fester Ansprechpartner begleitet Sie vom ersten Gespräch bis zur Abnahme, damit nichts zwischen mehreren Firmen verloren geht.",
    },
    {
      question: "Wie lange dauert die Fertigung?",
      answer:
        "Eine feste Lieferzeit in Wochen nennen wir nicht, weil jedes Projekt andere Materialien und Ausstattungen braucht. Den verbindlichen Termin legen wir nach dem Aufmaß und Ihrer Planungsfreigabe fest. So bekommen Sie ein Datum, das auch hält, statt einer unverbindlichen Schätzung.",
    },
    {
      question: "Muss ich selbst ausmessen oder übernimmt das Fast?",
      answer:
        "Das übernehmen wir. Unser Team nimmt im Montagegebiet kostenlos vor Ort Maß und prüft dabei Wände, Schrägen, Leitungen und Anschlüsse. So passt später jeder Millimeter, und Sie tragen nicht das Risiko eines falsch gemessenen Zentimeters.",
    },
    {
      question: "Lohnen sich Möbel nach Maß besonders bei Dachschrägen und Nischen?",
      answer:
        "Ja. Gerade an Dachschräge, Nische oder Sondermaß spielt Maßarbeit ihre Stärke aus. Der Raum wird bis unter die Schräge und bis in die Ecke genutzt, wo Serienmöbel Lücken lassen. Genau diese schwierigen Stellen planen wir mit ein, statt sie mit Blenden zu kaschieren.",
    },
    {
      question: "Welche Materialien eignen sich, Massivholz oder Plattenwerkstoff?",
      answer:
        "Beides, je nach Einsatz und Budget. Wir arbeiten mit Massivholz und hochwertigen Plattenwerkstoffen und beziehen aus Gründen der Nachhaltigkeit umweltzertifiziertes Holz aus CO2-neutralem Anbau. Die sichtbaren Kanten verschließen wir mit der PU-Technik fugenlos und feuchtigkeitsbeständig, was gerade in Küche und Bad ein Qualitätsvorteil ist.",
    },
    {
      question: "Was unterscheidet einen Meisterbetrieb von einem Online-Konfigurator?",
      answer:
        "Bei uns kommen Beratung, kostenloses Aufmaß vor Ort, Eigenfertigung und ein eigenes Montageteam zusammen. Ein reiner Online-Konfigurator liefert Ware zum Selbstaufbau. Wir planen, bauen und montieren Ihr Möbel und bleiben über einen Ansprechpartner erreichbar, auch nach dem Einbau.",
    },
    {
      question: "Werden die Möbel montiert oder muss ich selbst aufbauen?",
      answer:
        "Unser eigenes Team montiert im Umkreis von rund 200 km um Espelkamp, etwa in Minden, Lübbecke, Bielefeld und Osnabrück. Was weiter weg liegt, liefern wir bundesweit und stimmen die Montage dann individuell mit Ihnen ab. Einen Selbstaufbau-Bausatz gibt es bei uns nicht.",
    },
    {
      question: "Kann ich meine Möbel online selbst planen?",
      answer:
        "Ja. Im Möbelplaner stellen Sie Schränke, Küche, Bad oder Wohnmöbel zusammen und sehen Maße und Oberflächen direkt im 3D-Konfigurator. Das ist ein guter Einstieg. Den Feinschliff mit Aufmaß, technischer Planung und Fertigung übernehmen anschließend wir.",
    },
    {
      question: "Welche Möbel kann man nach Maß fertigen lassen?",
      answer:
        "Küchen, Einbauschränke und begehbare Kleiderschränke, Badmöbel, Wohnmöbel wie Sideboard, Regal und Wohnwand sowie Lösungen für den Hauswirtschaftsraum. Für Privaträume ebenso wie für Büro, Ladenbau, Gastronomie und Praxis im Gewerbe. Was aus Holz und Plattenwerkstoff baubar ist, planen wir individuell.",
    },
    {
      question: "Woran erkenne ich gute Qualität bei Maßmöbeln?",
      answer:
        "An der Verarbeitung: sauber verschlossene Kanten, hier mit fugenloser PU-Technik, solide Beschläge, eine durchdachte Konstruktion und eine Passform, die ohne Passleisten Wand zu Wand sitzt. Wichtig ist auch, dass ein Betrieb selbst aufmisst, fertigt und montiert, statt Teile nur zusammenzukaufen.",
    },
  ],
};

/**
 * JSON-LD für den Ratgeber-Hub (Kit §3): CollectionPage · ItemList
 * (Ratgeber-Karten) · BreadcrumbList · LocalBusiness · FAQPage. KEIN HowTo,
 * KEIN Product/Service (die Tiefe tragen die verlinkten Cluster-/Artikelseiten).
 * Keine Preise, kein AggregateRating (FACTS.md).
 */
export const ratgeberJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE}/#organization`,
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
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}${PATH}#webpage`,
    url: `${SITE}${PATH}`,
    name: "Möbel nach Maß: der Ratgeber",
    description:
      "Ratgeber zu Möbeln nach Maß: Unterschied zu Serienmöbeln, Kosten, Ablauf, Materialien und Lösungen für Küche, Bad, Wohnbereich und Stauraum.",
    isPartOf: { "@id": `${SITE}/#website` },
    publisher: { "@id": `${SITE}/#organization` },
    mainEntity: { "@id": `${SITE}${PATH}#ratgeber-karten` },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE}${PATH}#ratgeber-karten`,
    name: "Möbel nach Maß: Bereiche im Überblick",
    itemListElement: ratgeberWeitereCards.map((card, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: card.title,
      url: card.href ? `${SITE}${card.href}` : undefined,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Ratgeber", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ratgeberFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];
