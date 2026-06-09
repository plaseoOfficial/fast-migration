/**
 * Content for the `/praxiseinrichtung/` page. A B2B acquisition landing page for
 * "Praxiseinrichtung nach Maß" (custom furniture for medical practices, therapy
 * centres and law/tax firms). Cluster-Pillar im Gewerbe-Silo, baut auf dieselben
 * Library-Sections wie /gastronomieeinrichtung/ (ProcessSteps + SegmentCards +
 * UspHighlight); nur die Copy ist praxisspezifisch.
 *
 * Voice = Fast Systemmöbel (sachlich-handwerklich, "aus einer Hand", Sie-Form).
 * Fakten (FACTS.md): Gründung 1996 in Rahden-Tonnenheide. Fertigung seit 2001 in
 * Espelkamp. Meisterbetrieb (KEIN Jahr), Familie Fast in 2. Generation (Andreas &
 * Peter seit 2010), über 1.000 m² Fertigung, CNC-Technik, ~200 km Montageradius,
 * Lieferung darüber hinaus bundesweit. Discovery (2026-06-08): Segmente gleichgewichtig;
 * Hygiene NUR über Material/Verarbeitung (fugenarm, wischdesinfektionsbeständig,
 * PU-Kante), KEIN RKI-/Norm-Zertifikat; Leistung = NUR Möbel + präzise Aussparungen
 * für Geräte/Sanitär, Installation durch Fachbetrieb; Gewerbe -> keine Finanzierung.
 */

export const praxisHero = {
  bgImage: "/images/2025/11/DSC07156-scaled.jpg",
  imageAlt:
    "Beratungsgespräch zur Praxiseinrichtung mit Materialmustern bei Fast Systemmöbel",
  title: "Praxiseinrichtung nach Maß aus Espelkamp",
  intro:
    "Möbel, die exakt zu Ihren Räumen, Abläufen und Hygieneanforderungen passen, statt Katalogware in festen Rastermaßen. Geplant, gefertigt und montiert aus einer Hand, vom Meisterbetrieb in Espelkamp.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Gewerbe", href: "/gewerbe/" },
    { label: "Praxiseinrichtung" },
  ],
};

export const praxisIntroStats = {
  since: "seit 1996",
  sinceSub: "Richten wir Praxen und Kanzleien ein.",
  heading: "Praxismöbel, die zu Ihrem Alltag passen",
  introBefore: "Von der ersten",
  introBold: "Planung",
  introAfter: " bis zur fertigen Montage, alles aus einer Hand.",
  bandImage: "/images/2025/11/DSC_9843.jpg",
  bandAlt: "Besprechungsraum mit Tisch nach Maß für Beratung und Planung",
  col1Title: "Praxis planen",
  col1Body:
    "Wir entwickeln Ihre Einrichtung nach Grundriss, Hygieneanforderung und Patientenfluss. Tresen, Behandlungszimmer und Wartebereich planen wir millimetergenau.",
  col1CtaLabel: "Praxisprojekt unverbindlich anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Vom einzelnen Anmeldetresen bis zur kompletten Praxis bekommen Sie alles aus einer Hand: Beratung, Aufmaß, 3D-Planung, Fertigung und Montage, ohne Subunternehmer.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montageradius um Espelkamp",
  col3Body:
    "Komplette Praxen mit Möbeln und Montage realisieren wir im Umkreis von rund 200 km, etwa in Minden, Lübbecke, Bielefeld und Osnabrück. Einzelne Möbel liefern wir bundesweit.",
  col3CtaLabel: "Ihre Praxis selbst planen",
  col3CtaHref: "/moebelplaner/",
};

export const praxisProcess = {
  eyebrow: "In fünf Schritten",
  heading: "Vom Aufmaß bis zur Montage",
  image: "/images/2025/11/DSC_0001.jpg",
  imageAlt:
    "Maßgefertigtes Funktionsmöbel mit Klappmechanik und integrierter Arbeitsfläche",
  steps: [
    {
      title: "Beratung & kostenloses Aufmaß",
      description:
        "Wir kommen zu Ihnen, nehmen vor Ort Maß und klären, was Empfang, Behandlung und Wartebereich brauchen.",
    },
    {
      title: "3D-Planung",
      description:
        "Sie sehen Ihre Praxis digital, mit Maßen, Materialien und Aussparungen für Ihre Geräte, bevor das erste Brett geschnitten ist.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Alle Teile entstehen in Eigenregie in unserem Meisterbetrieb, ohne Zwischenhändler und ohne Subunternehmer.",
    },
    {
      title: "Montage außerhalb der Sprechzeiten",
      description:
        "Auf Wunsch montiert unser Team abends, am Wochenende oder in Etappen, damit Ihre Praxis so kurz wie möglich schließt.",
    },
    {
      title: "Gemeinsame Abnahme",
      description:
        "Wir übergeben fertig und nehmen mit Ihnen ab. Ein fester Ansprechpartner begleitet Sie vom ersten Gespräch an.",
    },
  ],
  note:
    "Klar abgegrenzt: Wir bauen die Möbel und arbeiten Aussparungen und Maße für Behandlungseinheit, Sterilisator oder Waschtisch präzise ein. Die Geräte- und Sanitärtechnik installiert Ihr Fachbetrieb.",
};

export const praxisSegments = {
  eyebrow: "Für Ihre Fachrichtung",
  heading: "Welche Praxen und Kanzleien wir einrichten",
  intro:
    "Jede Fachrichtung stellt eigene Anforderungen an Hygiene, Diskretion und Abläufe. Diese nehmen wir in die Planung auf.",
  segments: [
    {
      title: "Arztpraxis & Facharztpraxis",
      body: "Empfang, Sprech- und Behandlungszimmer für Haus- und Fachärzte, ausgelegt auf Patientenfluss und reinigbare Oberflächen.",
    },
    {
      title: "Zahnarztpraxis",
      body: "Anmeldung, Behandlungszeilen und Stauraum, fugenarm verarbeitet und auf die Aussparungen Ihrer Behandlungseinheit abgestimmt.",
    },
    {
      title: "Physiotherapie & Therapie",
      body: "Empfang, Behandlungsräume und Materialschränke für Praxen mit hoher Frequenz und kurzen Wegen zwischen den Räumen.",
    },
    {
      title: "Heilpraktiker & Naturheilkunde",
      body: "Ruhige, wohnliche Einrichtung für Empfang und Behandlung, in einer Optik, die Vertrauen schafft und zu Ihrem Konzept passt.",
    },
    {
      title: "Anwalts- & Steuerkanzlei",
      body: "Beratungsräume, Aktenschränke und Arbeitsplätze mit diskretem, abschließbarem Stauraum für vertrauliche Unterlagen.",
    },
    {
      title: "MVZ & Gemeinschaftspraxis",
      body: "Einheitliche Einrichtung über mehrere Räume und Standorte, in Serie gefertigt und vom ersten bis zum letzten Zimmer im selben Stil.",
    },
  ],
};

export const praxisUsp = {
  eyebrow: "Gebaut für die Hygiene",
  heading: "Kanten ohne Fuge, in der sich Keime sammeln",
  body:
    "In der Praxis wird täglich wischdesinfiziert. Unsere PU-Kantenverleimung verschließt die Kanten fugenlos, sodass keine Spalten bleiben, in denen sich Schmutz und Keime absetzen. Zusammen mit abwischbaren, robusten Oberflächen halten die Möbel der täglichen Reinigung über Jahre stand, ohne aufgequollene Ränder. Das ist kein Aufpreis-Extra, sondern unser Standard.",
  image: "/images/2025/11/IMG_9120-scaled.jpg",
  imageAlt:
    "Waschtisch-Unterschrank nach Maß mit reinigbaren, grifflosen Fronten",
};

export const praxisTypische = {
  heading: "Was wir für Praxen und Kanzleien bauen",
  image1: "/images/2025/11/20150701_185458257_iOS-scaled.jpg",
  image1Alt: "Maßgefertigte Empfangstheke mit Glasregalen",
  image2: "/images/2025/11/20161103_150622294_iOS-scaled.jpg",
  image2Alt: "Schrankwand nach Maß mit offenen Fächern und Schubladen",
  row1: [
    {
      title: "Empfangs- & Anmeldetresen",
      description:
        "Der erste Eindruck Ihrer Praxis. Ein Tresen mit durchdachtem Stauraum, abschließbaren Aktenfächern und reinigbaren Oberflächen, der Diskretion am Empfang ermöglicht. Auf Wunsch planen wir einen unterfahrbaren, barrierefreien Bereich ein.",
    },
    {
      title: "Wartezimmer-Einrichtung",
      description:
        "Sitzbänke, Garderoben und Empfangsmöbel für eine ruhige Wartesituation. Robust für hohe Frequenz und in einer Optik, die Patientinnen und Patienten ankommen lässt.",
    },
    {
      title: "Behandlungs- & Funktionsräume",
      description:
        "Schränke, Arbeitszeilen und Ablagen für Behandlung und Untersuchung. Fugenarm verarbeitet, leicht zu desinfizieren und mit präzisen Aussparungen für Ihre Geräte und Waschtische.",
    },
  ],
  row2: [
    {
      title: "Sprech-, Beratungs- & Kanzleiräume",
      description:
        "Beratungstische, Sideboards und Arbeitsplätze für Sprechzimmer und Kanzleien. Repräsentativ gestaltet, mit diskretem Stauraum für Akten und vertrauliche Unterlagen.",
    },
    {
      title: "Hygiene-, Material- & Aktenschränke",
      description:
        "Lager- und Materialschränke für Verbrauchsmaterial, Instrumente und Akten. Mit abwischbaren Fronten, klarer Ordnung und optionalem Schließsystem.",
    },
    {
      title: "Einbau- & Sonderlösungen",
      description:
        "Nischen, Schrägen und enge Grundrisse nutzen wir gezielt aus. Einbauschränke, Raumteiler und Sonderanfertigungen, wo Standardmöbel an ihre Grenzen kommen.",
    },
  ],
};

/**
 * Contrast block (shared ContrastCols): catalogue/system furniture vs custom
 * joinery from the Meisterbetrieb. Carries the "Tischler statt Standard"
 * argument as scannable bullets so it no longer lives as a prose wall.
 */
export const praxisVergleich = {
  eyebrow: "Der Unterschied",
  heading: "Warum Maßanfertigung statt Katalogware",
  negative: {
    title: "Katalog- & Systemmöbel",
    points: [
      "Feste Rastermaße, an der Wand bleibt eine Lücke oder Passleiste",
      "Begrenzte Auswahl an Materialien und Oberflächen",
      "Beratung, Lieferung und Aufbau oft getrennt",
      "Fugenlose Hygienekanten meist nur gegen Aufpreis",
    ],
  },
  positive: {
    title: "Maß vom Meisterbetrieb Fast",
    points: [
      "Passgenau von Wand zu Wand, ganz ohne Lücke",
      "Materialien für Hygiene und Dauereinsatz, PU-Kante als Standard",
      "Planung, Fertigung und Montage aus einer Hand",
      "Eigenes Montageteam, ohne Subunternehmer",
    ],
  },
};

export const praxisWarum = {
  heading: "Tischler statt Standard-Praxismöbel",
  paragraph:
    "Jeden Tresen, jeden Behandlungsschrank und jedes Aktenmöbel bauen wir selbst in Espelkamp, passgenau von Wand zu Wand und mit Materialien für Hygiene und Dauereinsatz. Planung, Fertigung und Montage bleiben in einer Hand.",
  images: [
    { src: "/images/2025/11/DSC_9747.jpg", alt: "Besprechungstisch nach Maß für Beratungs- und Sprechzimmer", width: 600, height: 400 },
    { src: "/images/2025/11/IMG_2249.jpg", alt: "Einbauschrank nach Maß mit Garderoben-Nische in Eiche", width: 600, height: 800 },
    { src: "/images/2025/11/IMG_2772-scaled.jpg", alt: "Raumhohe Einbauschränke nach Maß", width: 600, height: 800 },
    { src: "/images/2025/11/20230814_155316228_iOS-scaled.jpg", alt: "Einbauschrank nach Maß vor einer Steinwand", width: 600, height: 440 },
    { src: "/images/2025/11/90d42e7b-fa9d-4a8d-a60e-ca1c5bf55cb3.jpg", alt: "Garderobe nach Maß mit Eiche-Lamellen-Nische und Sitzbank", width: 600, height: 800 },
    { src: "/images/2025/11/DSC_9934.jpg", alt: "Offenes Regal nach Maß mit indirekter LED-Beleuchtung", width: 600, height: 400 },
  ],
};

export const praxisGeschichte = {
  heading: "Ein Meisterbetrieb für Praxen und Kanzleien",
  subheading: "Vom Garagenbetrieb zum Partner für Praxen",
  anchorImage: "/images/2025/11/DSC07129-Kopie-scaled.jpg",
  anchorImageAlt:
    "Materialauswahl im Beratungsgespräch für eine Praxiseinrichtung",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "200 km", label: "Montage-Radius" },
    { value: "4.000+", label: "Projekte gefertigt" },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 als Ein-Mann-Betrieb in einer Garage in Rahden-Tonnenheide, 2001 zog die Fertigung nach Espelkamp. Heute führt die Familie Fast den Betrieb in zweiter Generation.",
    "In Ostwestfalen-Lippe haben wir bereits Praxen und Kanzleien eingerichtet, vom einzelnen Anmeldetresen bis zur kompletten Praxis. Wir kennen die Anforderungen an Hygiene, Diskretion und Termintreue, die ein Praxisprojekt mitbringt.",
    "Zur Planung gehört für uns mehr als die Möbel: Wir denken Patienten- und Personalwege mit und legen Stauraum dorthin, wo er im Alltag gebraucht wird. Beispiele zeigen unsere Referenzen.",
  ],
};

/** Online configurator block (shared MnmMoebelplaner), leads into /moebelplaner/. */
export const praxisMoebelplaner = {
  heading: "Ihre Praxiseinrichtung online planen",
  body:
    "Mit unserem Möbelplaner stellen Sie Tresen, Schränke und Wartebereich online zusammen und sehen Maße, Fronten und Oberflächen direkt im 3D-Konfigurator. Den Rest übernehmen wir: kostenloses Aufmaß, Beratung, Fertigung und Montage. Lieber gleich sprechen? Rufen Sie uns an unter 05771 9138312.",
  ctaLabel: "Möbelplaner ausprobieren",
  ctaHref: "/moebelplaner/",
  image: "/images/2025/11/20231220_131839984_iOS-scaled.jpg",
  imageAlt: "Raumteiler aus Holzlamellen nach Maß",
};

/** Final-CTA + intro-CTA expanding image blocks (shared ExpandingImageCta). */
export const praxisCtas = {
  intro: {
    image: "/images/2025/11/DSC_9814.jpg",
    heading: "Ihre Praxis verdient mehr als Standardmöbel.",
    linkText: "Sprechen Sie mit uns über Ihr Praxisprojekt",
    href: "/kontakt/",
  },
  final: {
    image: "/images/2025/11/DSC_9965.jpg",
    heading: "Vom Anmeldetresen bis zum Behandlungsraum.",
    linkText: "Praxisprojekt jetzt unverbindlich anfragen",
    href: "/kontakt/",
  },
};

/**
 * "Weitere Leistungen"-Karten für /praxiseinrichtung/. Silo-konform: verlinkt
 * auf /gewerbe/ (Hub-Up-Link) und /referenzen/ (SOLL-Trust), NICHT auf /moebel-nach-mass/.
 */
import type { ServiceCard } from "@/types/mnm";

export const praxisWeitereCards: ServiceCard[] = [
  {
    icon: "/images/2024/03/interior-design-white-icons-08.svg",
    title: "Gewerbeeinrichtung",
    description:
      "Praxiseinrichtung ist Teil unserer Gewerbeeinrichtung: Vom Anmeldetresen bis zur kompletten Einrichtung für Praxen, Kanzleien und Büros.",
    href: "/gewerbe/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-07.svg",
    title: "Planung & 3D-Visualisierung",
    description:
      "Kostenloses Aufmaß, technische 3D-Planung mit Aussparungen für Geräte und Waschtische. Sie sehen Ihre Praxis digital, bevor das erste Brett geschnitten ist.",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-09.svg",
    title: "Fertigung & Montage",
    description:
      "Alle Teile entstehen im eigenen Werk in Espelkamp. Montage durch unser eigenes Team auf Wunsch außerhalb der Sprechzeiten, damit Ihre Praxis so kurz wie möglich schließt.",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Referenzprojekte",
    description:
      "Realisierte Praxis- und Gewerbeprojekte aus unserem Meisterbetrieb: Empfangstresen, Behandlungsräume und Kanzleimöbel nach Maß, fertig eingebaut.",
    href: "/referenzen/",
    moreLabel: "Projekte ansehen",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-22.svg",
    title: "Möbelplaner",
    description:
      "Tresen, Schränke und Wartezimmermöbel online konfigurieren: Maße, Fronten und Oberflächen direkt im 3D-Konfigurator sichtbar.",
    href: "/moebelplaner/",
  },
];

/** Testimonials + FAQ render via the shared service sections. */
export const praxisTestimonialsHeading = "Was unsere Praxis- und Kanzleikunden sagen";

export const praxisFaq = {
  heading: "Häufige Fragen zur Praxiseinrichtung nach Maß",
  items: [
    {
      question: "Was kostet eine Praxiseinrichtung nach Maß?",
      answer:
        "Einen Pauschalpreis gibt es bei Maßanfertigung nicht, weil jede Praxis anders zugeschnitten wird. Den Preis bestimmen vor allem die Größe und Anzahl der Räume, der Möbelumfang, das Material und Sonderlösungen wie ein langer Empfangstresen. Nach dem kostenlosen Aufmaß erhalten Sie ein individuelles Angebot, das wir Position für Position kalkulieren, statt mit einer runden Hausnummer.",
    },
    {
      question: "Wie hygienisch sind die Möbel, und welche Materialien verwenden Sie?",
      answer:
        "Praxismöbel werden täglich wischdesinfiziert. Wir bauen deshalb fugenarm und verschließen die Kanten mit fugenloser PU-Verleimung, sodass keine Spalten bleiben, in denen sich Schmutz und Keime sammeln. Dazu kommen robuste, abwischbare Oberflächen wie HPL.",
    },
    {
      question: "Bauen Sie auch Geräte und Sanitärtechnik ein?",
      answer:
        "Wir bauen die Möbel und arbeiten Aussparungen und Maße für Behandlungseinheit, Sterilisator oder Waschtisch präzise ein. Die Installation der Geräte- und Sanitärtechnik übernimmt Ihr Fachbetrieb. So passen Möbel und Technik am Ende genau zusammen.",
    },
    {
      question: "Können Sie außerhalb der Sprechzeiten oder im laufenden Betrieb montieren?",
      answer:
        "Ja. Mit eigenem Montageteam montieren wir auf Wunsch abends, am Wochenende oder in Etappen, damit Ihre Praxis so kurz wie möglich schließt. Auch eine bestehende Praxis modernisieren wir so, dass der Betrieb möglichst weiterläuft.",
    },
    {
      question: "Für welche Fachrichtungen fertigen Sie Praxismöbel?",
      answer:
        "Für Arztpraxen aller Fachrichtungen, Zahnarztpraxen, Physiotherapie und Therapiezentren, Heilpraktiker sowie Anwalts- und Steuerkanzleien. Auch Gemeinschaftspraxen und medizinische Versorgungszentren richten wir ein, dort oft einheitlich über mehrere Räume.",
    },
    {
      question: "In welchem Gebiet liefern und montieren Sie?",
      answer:
        "Komplette Praxen mit Möbeln und Montage realisieren wir im Umkreis von rund 200 km um Espelkamp, etwa in Minden, Lübbecke, Bielefeld und Osnabrück. Einzelne Möbel liefern wir darüber hinaus bundesweit; an die Montage durch unser Team ist der Radius gebunden.",
    },
  ],
};
