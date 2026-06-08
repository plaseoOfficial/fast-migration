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
    "Praxiseinrichtung nach Maß: Empfangstresen und Wartebereich einer Arztpraxis von Fast Systemmöbel",
  title: "Praxiseinrichtung nach Maß aus Espelkamp",
  intro:
    "Praxiseinrichtung nach Maß heißt: Möbel, die exakt zu Ihren Räumen, Abläufen und Hygieneanforderungen passen, statt Katalogware in festen Rastermaßen. Wir planen und fertigen Empfangstresen, Wartezimmer, Behandlungs- und Sprechzimmer, Schränke und Stauraum für Ihre Praxis oder Kanzlei. Gebaut im eigenen Meisterbetrieb in Espelkamp, montiert von unserem Team in Ostwestfalen-Lippe, darüber hinaus liefern wir bundesweit.",
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
  bandImage: "/images/2025/11/DSC07129-Kopie-scaled.jpg",
  bandAlt: "Maßgefertigter Anmelde- und Empfangstresen in einer Arztpraxis",
  col1Title: "Praxis planen",
  col1Body:
    "Wir entwickeln Ihre Einrichtung nach Grundriss, Hygieneanforderung und Patientenfluss. Anmeldetresen, Behandlungszimmer, Wartebereich und Materiallager planen wir millimetergenau und legen sie auf den täglichen Betrieb aus.",
  col1CtaLabel: "Praxisprojekt unverbindlich anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Vom einzelnen Anmeldetresen bis zur kompletten Praxis bekommen Sie alles aus einer Hand: Beratung, Aufmaß, 3D-Planung, Fertigung und Montage. Als Meisterbetrieb arbeiten wir ohne Zwischenhändler und ohne Subunternehmer.",
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
    "Maßgefertigter Anmelde- und Empfangsbereich für eine Praxis mit vorbereiteten Aussparungen",
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
    "In der Praxis wird täglich wischdesinfiziert. Unsere PU-Kantenverleimung verschließt die Kanten fugenlos, sodass keine Spalten bleiben, in denen sich Schmutz und Keime absetzen. Eine Musterkante haben wir 24 Stunden unter Wasser getaucht, ohne dass sie aufquillt. Zusammen mit abwischbaren, robusten Oberflächen halten die Möbel der täglichen Reinigung über Jahre stand, ohne aufgequollene Ränder oder offene Stellen. Das ist kein Aufpreis-Extra, sondern unser Standard in der Fertigung.",
  stat: { value: "24 h", label: "unter Wasser getaucht, ohne aufzuquellen" },
  image: "/images/2025/11/DSC_9843.jpg",
  imageAlt:
    "Fugenlose PU-Kante an einem maßgefertigten Praxismöbel mit reinigbarer Oberfläche",
};

export const praxisTypische = {
  heading: "Was wir für Praxen und Kanzleien bauen",
  image1: "/images/2025/11/DSC07156-scaled.jpg",
  image1Alt: "Maßgefertigter Empfangstresen mit reinigbarer Hygieneoberfläche",
  image2: "/images/2026/01/csm_Kabine_6550b3ca43.jpg",
  image2Alt: "Behandlungsraum mit fugenarmen Einbaumöbeln nach Maß",
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

export const praxisWarum = {
  heading: "Tischler statt Standard-Praxismöbel",
  paragraph:
    "Im Möbelhaus und beim Systemanbieter kaufen Sie Praxismöbel aus dem Katalog: feste Rastermaße, begrenzte Materialien, Beratung und Aufbau meist getrennt. Wo Ihre Wand 3,84 Meter misst, bleibt am Ende eine Lücke oder eine Passleiste. Wir bauen stattdessen jeden Tresen, jeden Behandlungsschrank und jedes Aktenmöbel selbst in Espelkamp, passgenau von Wand zu Wand und mit Materialien, die für Hygiene und Dauereinsatz ausgelegt sind. Planung, Fertigung, Lieferung und Montage liegen bei einem Ansprechpartner, mit eigenem Montageteam und ohne Subunternehmer.",
  images: [
    { src: "/images/2025/11/DSC07156-scaled.jpg", alt: "Empfangstresen in einer Arztpraxis nach Maß", width: 600, height: 450 },
    { src: "/images/2026/01/csm_Kabine_6550b3ca43.jpg", alt: "Behandlungsraum mit Einbaumöbeln nach Maß", width: 600, height: 800 },
    { src: "/images/2025/11/20230814_155316228_iOS-scaled.jpg", alt: "Empfangsbereich einer Praxis mit Holzlamellenwand", width: 600, height: 800 },
    { src: "/images/2025/11/DSC_9843.jpg", alt: "Materialschrank mit reinigbaren, fugenarmen Fronten", width: 600, height: 420 },
    { src: "/images/2025/11/DSC07129-Kopie-scaled.jpg", alt: "Anmeldetresen nach Maß mit abschließbarem Stauraum", width: 600, height: 380 },
    { src: "/images/2025/11/IMG_6123-scaled.jpg", alt: "Beratungsraum einer Kanzlei mit Aktenschrank nach Maß", width: 600, height: 450 },
  ],
};

export const praxisGeschichte = {
  heading: "Ein Meisterbetrieb für Praxen und Kanzleien",
  subheading: "Vom Garagenbetrieb zum Partner für Praxen",
  anchorImage: "/images/2025/11/DSC07156-scaled.jpg",
  anchorImageAlt:
    "Empfangstresen nach Maß für eine Arztpraxis, gefertigt von Fast Systemmöbel in Espelkamp",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "200 km", label: "Montage-Radius" },
    { value: "4.000+", label: "Projekte gefertigt" },
  ],
  paragraphs: [
    "Angefangen hat Fast Systemmöbel 1996 als Ein-Mann-Betrieb in einer Garage in Rahden-Tonnenheide. 2001 zog die Fertigung nach Espelkamp. Heute führt die Familie Fast den Betrieb in zweiter Generation und fertigt auf über 1.000 m² mit moderner CNC-Technik.",
    "In Ostwestfalen-Lippe haben wir bereits Praxen und Kanzleien eingerichtet, vom einzelnen Anmeldetresen bis zur kompletten Praxis. Wir kennen die Anforderungen an Hygiene, Reinigbarkeit, Diskretion und Termintreue, die ein Praxisprojekt mitbringt, und planen entsprechend.",
    "Zur Planung gehört für uns mehr als die Möbel selbst. Wir denken Patienten- und Personalwege mit, halten den Empfang übersichtlich und legen Stauraum dorthin, wo er im Alltag gebraucht wird. Beispielprojekte finden Sie in unseren Referenzen.",
  ],
};

/** Online configurator block (shared MnmMoebelplaner), leads into /moebelplaner/. */
export const praxisMoebelplaner = {
  heading: "Ihre Praxiseinrichtung online planen",
  body:
    "Mit unserem Möbelplaner stellen Sie Tresen, Schränke und Wartebereich online zusammen und sehen Maße, Fronten und Oberflächen direkt im 3D-Konfigurator. Den Rest übernehmen wir: kostenloses Aufmaß, Beratung, Fertigung und Montage. Lieber gleich sprechen? Rufen Sie uns an unter 05771 9138312.",
  ctaLabel: "Möbelplaner ausprobieren",
  ctaHref: "/moebelplaner/",
  image: "/images/2026/01/csm_Kabine_6550b3ca43.jpg",
  imageAlt: "Behandlungsraum mit Einbaumöbeln nach Maß",
};

/** Final-CTA + intro-CTA expanding image blocks (shared ExpandingImageCta). */
export const praxisCtas = {
  intro: {
    image: "/images/2025/11/DSC07129-Kopie-scaled.jpg",
    heading: "Ihre Praxis verdient mehr als Standardmöbel.",
    linkText: "Sprechen Sie mit uns über Ihr Praxisprojekt",
    href: "/kontakt/",
  },
  final: {
    image: "/images/2025/11/IMG_6123-scaled.jpg",
    heading: "Vom Anmeldetresen bis zum Behandlungsraum.",
    linkText: "Praxisprojekt jetzt unverbindlich anfragen",
    href: "/kontakt/",
  },
};

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
        "Praxismöbel werden täglich wischdesinfiziert. Wir bauen deshalb fugenarm und verschließen die Kanten mit fugenloser PU-Verleimung, sodass keine Spalten bleiben, in denen sich Schmutz und Keime sammeln. Dazu kommen robuste, abwischbare Oberflächen wie HPL. Eine Musterkante haben wir 24 Stunden unter Wasser getaucht, ohne dass sie aufquillt.",
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
