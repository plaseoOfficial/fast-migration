/**
 * Content for the `/serienmoebel/` page, a B2B acquisition landing page for
 * "Möbel Serienfertigung" (serial furniture production to drawing/CAD). It is
 * part of the Gewerbe cluster and reuses the same library sections as the
 * canonical Privat page (see docs/sections/CATALOG.md → the "Privat Page
 * Recipe"); only the copy is swapped for the serial-production segment:
 * purchasing, project management, hotellerie, multi-store retail and care
 * facilities that order identical furniture in medium and large quantities.
 *
 * Voice = Fast Systemmöbel (sachlich-handwerklich, "aus einer Hand", B2B,
 * Sie-Form), not plaseo. Facts are real: seit 1996, Meisterbetrieb seit 2013,
 * über 1.000 m² Fertigung, moderne Homag-/CNC-Technologie, eigenes Montageteam,
 * Montageradius rund 200 km um Espelkamp, Lieferung bundesweit, Made in Germany.
 * No invented numbers, awards or claims. Zero em-dashes.
 */

export const serienHero = {
  bgImage: "/images/2025/11/DSC06206-scaled.jpg",
  imageAlt: "Möbel Serienfertigung nach Maß im Meisterbetrieb Fast Systemmöbel",
  title: "Möbel Serienfertigung nach Maß: identische Qualität in Serie",
  intro:
    "Sie brauchen viele gleiche Möbel, nicht ein Einzelstück. Wir fertigen Ihre Serie nach Zeichnung, zentimetergenau und in seriengleicher Qualität. Geplant, gefertigt und montiert aus einer Hand im eigenen Meisterbetrieb in Espelkamp. Geliefert wird bundesweit.",
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
    "Ob Filialhandel, Hotellerie oder Pflegeeinrichtung. Wir setzen Ihre Stückzahlen nach Zeichnung um, von der ersten",
  introBold: "Mustermöbel-Freigabe",
  introAfter:
    " bis zur letzten Lieferung. Jedes Möbel hält die gleichen Maße, die gleiche Oberfläche und die gleiche Qualität.",
  bandImage: "/images/2025/11/DSC07129-Kopie-scaled.jpg",
  bandAlt: "Korpusserie in der CNC-Fertigung von Fast Systemmöbel",
  col1Title: "Serie anfragen",
  col1Body:
    "Sie senden uns Ihre Zeichnung oder CAD-Daten. Wir prüfen die Fertigbarkeit, bauen auf Wunsch ein Mustermöbel zur Freigabe und produzieren danach die volle Stückzahl. Korpusse, Schränke, Tische und Module entstehen seriengleich auf Homag- und CNC-Technik.",
  col1CtaLabel: "Jetzt Serienanfrage stellen",
  col1CtaHref: "/kontakt",
  col2Body:
    "Von der Musterfreigabe bis zur Auslieferung kommt alles aus einer Hand: Arbeitsvorbereitung, Fertigung, Qualitätskontrolle, Lieferung und Montage. So beschaffen Sie identische Möbel in mittleren und großen Stückzahlen, ohne mehrere Lieferanten zu koordinieren.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montageradius rund um Espelkamp",
  col3Body:
    "Wir fertigen in Espelkamp und montieren im Umkreis von rund 200 km, etwa in Ostwestfalen-Lippe, Minden, Bielefeld, Hannover und Osnabrück. Geliefert wird bundesweit. Ihre Serie planen und prüfen Sie vorab im Möbelplaner.",
  col3CtaLabel: "Serie online planen",
  col3CtaHref: "/moebelplaner/",
};

export const serienProcess = {
  heading: "Von der Zeichnung zur Serie: Planung, Fertigung und Montage aus einer Hand",
  paragraph:
    "Ihre Serie entsteht in klaren Schritten. Zuerst klären wir Stückzahl, Maße und Materialien anhand Ihrer Zeichnung oder CAD-Daten. Auf Wunsch fertigen wir ein Mustermöbel zur Freigabe. Dann produzieren wir die volle Stückzahl auf Homag- und CNC-Technik, jedes Bauteil nach demselben Programm. Vor dem Versand prüft unser Team jede Charge. Wir liefern bundesweit und montieren im Umkreis von rund 200 km mit eigenem Team, ohne Subunternehmer. So bleibt die Qualität über die gesamte Serie konstant.",
  paragraphStrong: "Made in Germany.",
  image: "/images/2025/11/DSC07156-scaled.jpg",
  imageAlt: "Serienteile in der Fertigung mit Homag-Technik",
};

export const serienTypische = {
  heading: "Typische Serienprojekte: für Handel, Hotellerie, Pflege und Industrie",
  image1: "/images/2025/11/DSC06340-scaled.jpg",
  image1Alt: "Filialserie aus identischen Möbeln nach Maß",
  image2: "/images/2026/01/csm_Kabine_6550b3ca43.jpg",
  image2Alt: "Serienmodul für Objektausstattung",
  row1: [
    {
      title: "Filial- und Ladenserien",
      description:
        "Identische Theken, Regale und Einbauten für jede Filiale. Ein Standard, viele Standorte, gleicher Markenauftritt über die gesamte Kette.",
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
        "Korpusse und Schränke in hoher Stückzahl, maßlich exakt reproduziert. Plattenzuschnitt und Kantenanleimen auf CNC-Technik, jedes Teil gleich.",
    },
    {
      title: "Modulare Möbelsysteme",
      description:
        "Systeme aus wiederkehrenden Modulen, frei kombinierbar und nachbestellbar. Sie skalieren die Stückzahl, ohne neu zu planen.",
    },
    {
      title: "Sonderserien nach Zeichnung",
      description:
        "Sonderbauteile und Objektmöbel nach Ihrer Zeichnung oder CAD-Datei. Wir prüfen die Fertigbarkeit und setzen die Serie eins zu eins um.",
    },
  ],
};

export const serienWarum = {
  heading: "Warum Serienfertigung im Meisterbetrieb statt anonymer Massenware",
  paragraph:
    "Die Industrie produziert in festen Rastermaßen und großen Mindestmengen. Wir fertigen Ihre Serie nach Ihrer Zeichnung, zentimetergenau und ab überschaubaren Stückzahlen. Jedes Möbel entsteht auf demselben CNC-Programm, daher sitzen Maße und Oberflächen über die gesamte Serie gleich. Sie bekommen die Präzision moderner Homag-Technik und dazu die Sorgfalt eines Tischler-Meisterbetriebs. Arbeitsvorbereitung, Fertigung, Qualitätskontrolle, Lieferung und Montage kommen aus einer Hand, mit festen Ansprechpartnern und eigenem Montageteam. So bleibt Ihre Serie liefertreu und reproduzierbar, auch bei Nachbestellungen.",
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
  subheading: "VOM GARAGENBETRIEB ZUM PARTNER FÜR SERIENFERTIGUNG.",
  gallery: [
    { src: "/images/2025/11/DSC06340-scaled.jpg", alt: "Werkstatt und Team in Espelkamp", caption: "Fertigung Espelkamp", width: 600, height: 600 },
    { src: "/images/2025/11/DSC07129-Kopie-scaled.jpg", alt: "Korpusserie auf CNC-Technik", caption: "Korpusserie", width: 800, height: 400 },
    { src: "/images/2025/11/DSC07156-scaled.jpg", alt: "Serienteile mit Homag-Technik", caption: "Homag-Technik", width: 600, height: 900 },
    { src: "/images/2026/01/3838_1702_1_m.jpg", alt: "Modulares Möbelsystem in Serie", caption: "Möbelsystem", width: 600, height: 900 },
    { src: "/images/2025/11/DSC06206-scaled.jpg", alt: "Serienmöbel in der Fertigung", caption: "Serie nach Maß", width: 600, height: 900 },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 in einer Garage in Espelkamp. Heute fertigen wir auf über 1.000 m² mit moderner Homag- und CNC-Technologie und einem eingespielten Team.",
    "Was im Möbelbau nach Maß für einzelne Stücke entstand, zahlt sich in der Serie aus. Wir denken in Stückzahlen, in Liefertreue und in konstanter Qualität, ohne den handwerklichen Anspruch aufzugeben.",
    "Von der ersten Mustermöbel-Freigabe bis zur vollen Stückzahl fertigen wir in Espelkamp, montieren im Umkreis von rund 200 km und liefern deutschlandweit.",
  ],
  factLines: [
    "– Made in Germany",
    "– 1.000 m² Fertigung",
    "– Meisterbetrieb seit 2013",
    "– Homag- und CNC-Technologie",
    "– Montage bis 200 km",
    "– Eigenes Montageteam",
  ],
};

export const serienMoebelplaner = {
  heading: "Ihre Serie online planen und konfigurieren",
  body:
    "Mit unserem Möbelplaner stimmen Sie Ihre Serie vorab ab. Maße, Materialien, Fronten und Module sehen Sie direkt im 3D-Konfigurator. So klären Sie das Mustermöbel, bevor die Stückzahl in die Fertigung geht. Danach übernehmen wir den Rest: Fertigbarkeitsprüfung, Arbeitsvorbereitung, Serienproduktion, Qualitätskontrolle, Lieferung und Montage. Aus Ihrer Online-Planung wird eine reproduzierbare Serie nach Maß.",
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
    href: "/kontakt",
  },
  final: {
    image: "/images/2025/11/DSC06206-scaled.jpg",
    heading: "Ihre Serie nach Zeichnung, seriengleich gefertigt.",
    linkText: "Sprechen Sie mit uns über Ihr Serienprojekt.",
    href: "/kontakt",
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
        "Wir fertigen ab überschaubaren mittleren Stückzahlen bis hin zu großen Serien. Eine starre Mindestmenge wie in der Industrie gibt es bei uns nicht. Nennen Sie uns Ihre geplante Stückzahl, dann prüfen wir Fertigung und Termin und nennen Ihnen einen verbindlichen Rahmen.",
    },
    {
      question: "Wie sichern Sie Liefertreue bei größeren Serien?",
      answer:
        "Vor Produktionsstart nennen wir Ihnen einen verbindlichen Liefertermin. Wir planen die Fertigung in Espelkamp mit eigenem Team und ohne Subunternehmer. Auf Wunsch liefern wir in Etappen, etwa Filiale für Filiale oder Etage für Etage, damit Ihr Zeitplan steht.",
    },
    {
      question: "Wie bleibt die Qualität über die gesamte Serie konstant?",
      answer:
        "Jedes Bauteil läuft über dasselbe CNC-Programm, daher sind Maße und Oberflächen reproduzierbar. Wir arbeiten nach freigegebenem Mustermöbel und prüfen jede Charge vor dem Versand. So sieht das letzte Möbel aus wie das erste.",
    },
    {
      question: "Liefern Sie bundesweit?",
      answer:
        "Ja. Wir liefern deutschlandweit. Im Umkreis von rund 200 km um Espelkamp montieren wir mit eigenem Team, etwa in Ostwestfalen-Lippe, Minden, Bielefeld, Hannover und Osnabrück. Für Standorte außerhalb des Radius klären wir Lieferung und Montage individuell.",
    },
    {
      question: "Fertigen Sie nach unserer eigenen Zeichnung oder CAD-Datei?",
      answer:
        "Ja. Sie senden uns Ihre Zeichnung oder CAD-Daten, wir prüfen die Fertigbarkeit und setzen die Serie eins zu eins um. Auf Wunsch entwickeln wir die Konstruktion gemeinsam mit Ihnen weiter und liefern ein Mustermöbel zur Freigabe.",
    },
    {
      question: "Was unterscheidet Sie von industrieller Massenware?",
      answer:
        "Die Industrie produziert anonym in festen Rastermaßen und großen Mindestmengen. Wir sind ein Tischler-Meisterbetrieb mit CNC-Präzision. Wir fertigen seriengleich nach Ihrer Zeichnung, ab kleineren Stückzahlen, mit festen Ansprechpartnern und eigenem Montageteam.",
    },
  ],
};
