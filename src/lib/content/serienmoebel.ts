/**
 * Content for the `/serienmoebel/` page, a B2B acquisition landing page for
 * "Möbel Serienfertigung" (serial furniture production to drawing/CAD). It is
 * the cluster pillar of the Serienmöbel silo (Gewerbe) and reuses the same
 * library sections as the canonical Privat page (see docs/sections/CATALOG.md →
 * "Privat Page Recipe"); only the copy is swapped for the serial-production
 * segment: purchasing and project management at multi-store retail, hotellerie,
 * care facilities and offices that order identical furniture in small to large
 * quantities, plus contract manufacturing (Lohnfertigung) for other workshops.
 *
 * Positioning (Discovery 2026-06-08, Max): full quantity range "kleine bis
 * große Serien" (no rigid minimum, scales high); Mustermöbel/Erstmuster-Freigabe
 * is the STANDARD flow; fulfilment is delivery-first (bundesweit), Montage only a
 * regional ~200 km add-on; NO named reference projects (not released); no machine
 * models / daily output / ±mm figures (not confirmed).
 *
 * Voice = Fast Systemmöbel (sachlich-handwerklich, "aus einer Hand", B2B,
 * Sie-Form). Facts checked against docs/seo/brand/FACTS.md: seit 1996
 * (Rahden-Tonnenheide; Espelkamp ab 2001), Meisterbetrieb (ohne Jahr), rund
 * 1.000 m² Fertigung, Homag-/CNC-Technik, 4.000+ Projekte, 72.000+ Teile,
 * Familie 2. Gen. (Andreas & Peter Fast), PU-Kantenverleimung (24-h-Wassertest),
 * eigenes Montageteam, ~200 km Montageradius, Lieferung bundesweit, Made in
 * Germany. No invented numbers, prices, lead times, awards or claims. Zero em-dashes.
 * Research-Kit: docs/seo/research/serienmoebel.kit.md (out of PR).
 */

export const serienHero = {
  bgImage: "/images/2025/11/DSC06206-scaled.jpg",
  imageAlt: "Möbel Serienfertigung nach Maß im Meisterbetrieb Fast Systemmöbel",
  title: "Möbel-Serienfertigung nach Maß",
  intro:
    "Sie brauchen viele gleiche Möbel, nicht ein Einzelstück. Wir fertigen Ihre Serie nach Zeichnung und CAD-Daten, zentimetergenau und in seriengleicher Qualität, ob kleine Auflage oder große Stückzahl. Geplant, gefertigt und geprüft aus einer Hand im eigenen Meisterbetrieb in Espelkamp, geliefert bundesweit.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Gewerbe", href: "/gewerbe/" },
    { label: "Serienmöbel" },
  ],
};

export const serienIntroStats = {
  since: "seit 1996",
  sinceSub: "Fertigen wir Möbel in Serie.",
  heading: "Serienfertigung, die jedes Stück gleich gut macht",
  introBefore:
    "Ob Filialhandel, Hotellerie, Pflege oder Büro. Wir setzen Ihre Stückzahlen nach Zeichnung um, von der ersten",
  introBold: "Mustermöbel-Freigabe",
  introAfter:
    " bis zur letzten Lieferung. Jedes Möbel hält die gleichen Maße, die gleiche Oberfläche und die gleiche Qualität.",
  bandImage: "/images/2025/11/DSC07129-Kopie-scaled.jpg",
  bandAlt: "Korpusserie in der CNC-Fertigung von Fast Systemmöbel",
  col1Title: "Serie anfragen",
  col1Body:
    "Sie senden uns Ihre Zeichnung oder CAD-Daten. Wir prüfen die Fertigbarkeit, bauen ein Mustermöbel zur Freigabe und produzieren danach die volle Stückzahl. Korpusse, Schränke, Fronten, Theken und Module entstehen seriengleich auf Homag- und CNC-Technik.",
  col1CtaLabel: "Jetzt Serienanfrage stellen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Von der Musterfreigabe bis zur Auslieferung kommt alles aus einer Hand: Arbeitsvorbereitung, Fertigung, Qualitätskontrolle und Lieferung. Sie haben einen festen Ansprechpartner und beschaffen identische Möbel in kleinen wie großen Stückzahlen, ohne mehrere Lieferanten zu koordinieren.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Umkreis um Espelkamp",
  col3Body:
    "Geliefert wird bundesweit in ganz Deutschland. Im Umkreis von rund 200 km um Espelkamp montieren wir auf Wunsch mit eigenem Team, etwa in Ostwestfalen-Lippe, Minden, Bielefeld, Hannover und Osnabrück. Ihre Serie planen Sie vorab im Möbelplaner.",
  col3CtaLabel: "Serie online planen",
  col3CtaHref: "/moebelplaner/",
};

export const serienProcess = {
  heading: "Von der Zeichnung zur fertigen Serie",
  paragraph:
    "Zuerst klären wir Stückzahl, Maße, Materialien und Oberflächen anhand Ihrer Zeichnung oder CAD-Daten. Wir prüfen die Fertigbarkeit und bauen ein Mustermöbel zur Freigabe. Erst nach Ihrer Freigabe startet die volle Stückzahl, jedes Bauteil auf Homag- und CNC-Technik nach demselben Programm. Vor dem Versand prüft unser Team jede Charge auf Maß und Oberfläche. Geliefert wird bundesweit, auf Wunsch in Etappen, etwa Filiale für Filiale oder Etage für Etage.",
  paragraphStrong: "Made in Germany.",
  image: "/images/2025/11/DSC07156-scaled.jpg",
  imageAlt: "Serienteile in der Fertigung mit Homag-Technik",
};

export const serienTypische = {
  heading: "Was wir in Serie fertigen",
  image1: "/images/2025/11/DSC06340-scaled.jpg",
  image1Alt: "Filialserie aus identischen Möbeln nach Maß",
  image2: "/images/2026/01/csm_Kabine_6550b3ca43.jpg",
  image2Alt: "Serienmodul für Objektausstattung",
  row1: [
    {
      title: "Filial- und Ladenserien",
      description:
        "Identische Theken, Regale, Kassentische und Einbauten für jede Filiale. Ein Standard, viele Standorte, gleicher Markenauftritt über die gesamte Kette.",
    },
    {
      title: "Hotelzimmer in Serie",
      description:
        "Komplette Zimmerausstattung in Serie: Schränke, Betten, Schreibtische und Paneele. Pro Etage gleich aufgebaut und schnell montiert.",
    },
    {
      title: "Pflege- und Senioreneinrichtungen",
      description:
        "Robuste Möbel für Pflegeheime und Seniorenresidenzen. Pflegeleichte Oberflächen, gleiche Ausstattung Zimmer für Zimmer, langlebig gebaut.",
    },
  ],
  row2: [
    {
      title: "Korpus- und Schrankserien",
      description:
        "Korpusse, Schränke und Schubkästen in hoher Stückzahl, maßlich exakt reproduziert. Plattenzuschnitt und Kantenanleimen auf CNC-Technik, jedes Teil gleich.",
    },
    {
      title: "Modulare Möbelsysteme",
      description:
        "Systeme aus wiederkehrenden Modulen, frei kombinierbar und jederzeit nachbestellbar. Sie skalieren die Stückzahl, ohne neu zu planen.",
    },
    {
      title: "Sonderserien & Lohnfertigung",
      description:
        "Sonderbauteile und Objektmöbel nach Ihrer Zeichnung oder CAD-Datei. Auch als Lohnfertigung für Tischlereien, denen für eine Serie Kapazität fehlt.",
    },
  ],
};

export const serienWarum = {
  heading: "Warum Serienfertigung im Meisterbetrieb",
  paragraph:
    "Die Industrie produziert anonym in festen Rastermaßen und großen Mindestmengen. Wir fertigen Ihre Serie nach Zeichnung, zentimetergenau und ohne starre Mindestmenge, von der kleinen Auflage bis zur großen Stückzahl. Jedes Möbel entsteht auf demselben CNC-Programm, daher sitzen Maße und Oberflächen über die ganze Serie gleich, mit der Präzision moderner Homag-Technik und der Sorgfalt eines Meisterbetriebs. Unsere PU-Kantenverleimung macht die Kanten nahezu wasserfest, geprüft im 24-Stunden-Wassertest. Arbeitsvorbereitung, Fertigung, Qualitätskontrolle und Lieferung bleiben in einer Hand, auch bei Nachbestellungen reproduzierbar.",
  images: [
    { src: "/images/2025/11/DSC06206-scaled.jpg", alt: "Serienmöbel in der Fertigung", width: 600, height: 450 },
    { src: "/images/2025/11/DSC07129-Kopie-scaled.jpg", alt: "Korpusserie auf CNC-Technik", width: 600, height: 800 },
    { src: "/images/2025/11/DSC07156-scaled.jpg", alt: "Serienteile mit Homag-Technik", width: 600, height: 400 },
    { src: "/images/2025/11/DSC06340-scaled.jpg", alt: "Werkstatt und Team in Espelkamp", width: 600, height: 420 },
    { src: "/images/2026/01/3838_1702_1_m.jpg", alt: "Modulares Möbelsystem in Serie", width: 600, height: 380 },
    { src: "/images/2026/01/csm_Kabine_6550b3ca43.jpg", alt: "Serienmodul für die Objektausstattung", width: 600, height: 450 },
  ],
};

export const serienGeschichte = {
  heading: "Ein Meisterbetrieb, der Serien liefert",
  subheading: "Vom Garagenbetrieb zum Partner für Serienfertigung",
  anchorImage: "/images/2025/11/DSC07129-Kopie-scaled.jpg",
  anchorImageAlt: "Serienfertigung mit Homag-Technologie bei Fast Systemmöbel in Espelkamp",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "72.000+", label: "Gefertigte Teile" },
    { value: "bundesweit", label: "Lieferung" },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 in einer Garage in Rahden-Tonnenheide. 2001 zog die Fertigung nach Espelkamp, wo wir heute auf rund 1.000 m² mit moderner Homag- und CNC-Technologie und einem eingespielten Team arbeiten.",
    "Heute steht mit Andreas und Peter Fast die zweite Generation im Betrieb. Über 4.000 Projekte und mehr als 72.000 gefertigte Einzelteile stecken in unserer Erfahrung mit Maß und Stückzahl.",
    "Was im Möbelbau nach Maß für einzelne Stücke entstand, zahlt sich in der Serie aus. Wir denken in Stückzahlen, Liefertreue und konstanter Qualität, ohne den handwerklichen Anspruch aufzugeben. Von der ersten Mustermöbel-Freigabe bis zur vollen Stückzahl fertigen wir in Espelkamp und liefern bundesweit.",
  ],
};

export const serienMoebelplaner = {
  heading: "Ihre Serie online planen und konfigurieren",
  body:
    "Mit unserem Möbelplaner stimmen Sie Ihre Serie vorab ab. Maße, Materialien, Fronten und Module sehen Sie direkt im 3D-Konfigurator. So klären Sie das Mustermöbel, bevor die Stückzahl in die Fertigung geht. Danach übernehmen wir den Rest: Fertigbarkeitsprüfung, Arbeitsvorbereitung, Serienproduktion, Qualitätskontrolle und Lieferung. Aus Ihrer Online-Planung wird eine reproduzierbare Serie nach Maß.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: "/images/2026/01/3838_1702_1_m.jpg",
  imageAlt: "Modulares Möbelsystem für die Serienfertigung",
};

export const serienCtas = {
  intro: {
    image: "/images/2025/11/DSC07129-Kopie-scaled.jpg",
    heading: "Viele gleiche Möbel. Eine konstante Qualität.",
    linkText: "Sprechen Sie mit uns über Ihre Serienanfrage",
    href: "/kontakt/",
  },
  final: {
    image: "/images/2025/11/DSC06206-scaled.jpg",
    heading: "Ihre Serie nach Zeichnung, seriengleich gefertigt.",
    linkText: "Sprechen Sie mit uns über Ihr Serienprojekt.",
    href: "/kontakt/",
  },
};

/** Testimonials + FAQ render via the shared service sections. */
export const serienTestimonialsHeading = "Was unsere Gewerbekunden sagen";

export const serienFaq = {
  heading: "Häufige Fragen zur Möbel Serienfertigung",
  items: [
    {
      question: "Welche Mindest- und Maximalstückzahlen fertigen Sie?",
      answer:
        "Eine starre Mindestmenge wie in der Industrie gibt es bei uns nicht. Wir fertigen kleine Auflagen ebenso wie große Serien und skalieren die Stückzahl mit. Nennen Sie uns Ihre geplante Menge, dann prüfen wir Fertigung und Termin und nennen Ihnen einen verbindlichen Rahmen.",
    },
    {
      question: "Wie läuft die Mustermöbel-Freigabe ab?",
      answer:
        "Bevor die volle Stückzahl startet, fertigen wir ein Erstmuster nach Ihrer Zeichnung. Sie prüfen Maße, Material und Oberfläche und geben es frei. Erst nach dieser Freigabe geht die Serie in Produktion. So sehen Sie das Ergebnis, bevor Stückzahl entsteht.",
    },
    {
      question: "Wie bleibt die Qualität über die gesamte Serie konstant?",
      answer:
        "Jedes Bauteil läuft über dasselbe CNC-Programm, daher sind Maße und Oberflächen reproduzierbar. Wir arbeiten nach freigegebenem Mustermöbel und prüfen jede Charge vor dem Versand. So sieht das letzte Möbel aus wie das erste.",
    },
    {
      question: "Fertigen Sie nach unserer eigenen Zeichnung oder CAD-Datei?",
      answer:
        "Ja. Sie senden uns Zeichnung oder CAD-Daten, wir prüfen die Fertigbarkeit und setzen die Serie eins zu eins um. Wir verarbeiten Span, MDF, Multiplex und Massivholz und verleimen die Kanten mit unserer PU-Kantenverleimung nahezu wasserfest, geprüft im 24-Stunden-Wassertest.",
    },
    {
      question: "Arbeiten Sie mit Architekten, Innenarchitekten und Planern zusammen?",
      answer:
        "Ja. Wir setzen Ausschreibungen, Detailzeichnungen und CAD-Daten direkt um und stimmen Konstruktion und Materialien mit Ihrem Planungsbüro ab. Sie bekommen einen festen Ansprechpartner von der Fertigbarkeitsprüfung bis zur Auslieferung.",
    },
    {
      question: "Was kostet eine Serie und wie kalkuliert sich der Preis?",
      answer:
        "Den Preis bestimmen Stückzahl, Material, Konstruktion und Oberfläche. Eine größere Serie senkt die Kosten pro Stück, weil sich Arbeitsvorbereitung und Programmierung auf mehr Teile verteilen. Feste Listenpreise veröffentlichen wir nicht, Sie erhalten nach Ihrer Anfrage ein individuelles Angebot.",
    },
    {
      question: "Liefern Sie bundesweit, und montieren Sie auch?",
      answer:
        "Wir liefern deutschlandweit. Im Umkreis von rund 200 km um Espelkamp montieren wir auf Wunsch mit eigenem Team. Bei den meisten Serien geht es um die reine Lieferung, die Montage klären wir je nach Standort individuell.",
    },
  ],
};
