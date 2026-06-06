/**
 * Content for the `/bueroeinrichtung/` page. A B2B acquisition landing page
 * for "Büroeinrichtung nach Maß" (custom office furniture). Part of the Gewerbe
 * cluster, it reuses the same library sections as the canonical Privat page
 * (see docs/sections/CATALOG.md → the "Privat Page Recipe"); only the copy is
 * swapped for the commercial office segment (Geschäftsführer, Office-Manager,
 * Architekten) within the ~200 km radius around Espelkamp.
 *
 * Voice = Fast Systemmöbel (sachlich-handwerklich, "aus einer Hand", B2B,
 * Sie-Form). Fakten (gegen docs/seo/brand/FACTS.md geprüft): gegründet 1996 in
 * Rahden-Tonnenheide (Fertigung heute Espelkamp), Meisterbetrieb (ohne Jahr),
 * über 1.000 m² Fertigung, Homag-/CNC-Technologie, ~200 km Montageradius,
 * eigenes Montageteam, kostenloses Aufmaß, Lieferung bundesweit, Made in
 * Germany, Inhaber Johann Fast, Familie Fast (Andreas & Peter seit 2010).
 * KEINE Garantie-Zahl, keine Preise (immer individuell).
 */

export const bueroHero = {
  bgImage: "/images/2025/11/DSC_9747.jpg",
  imageAlt: "Büroeinrichtung nach Maß von Fast Systemmöbel aus Espelkamp",
  title: "Büroeinrichtung nach Maß",
  intro:
    "Vom Schreibtisch bis zur Objekteinrichtung — geplant, gefertigt und montiert im eigenen Meisterbetrieb in Espelkamp.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Gewerbe", href: "/gewerbe/" },
    { label: "Büroeinrichtung" },
  ],
};

export const bueroIntroStats = {
  since: "seit 1996",
  sinceSub: "Fertigen wir Möbel nach Maß.",
  heading: "Büromöbel nach Maß, die zu Ihren Räumen und Abläufen passen",
  introBefore: "Von der ersten",
  introBold: "Planung",
  introAfter:
    " bis zur Montage — kalkuliert nach Grundriss, gefertigt im eigenen Werk, aufgebaut vom eigenen Team.",
  bandImage: "/images/2025/11/IMG_2673-scaled.jpg",
  bandAlt: "Maßgefertigte Büroeinrichtung mit Arbeitsplätzen und Stauraum",
  col1Title: "Büro planen",
  col1Body:
    "Arbeitsplätze, Schränke, Konferenztische — millimetergenau geplant nach Ihrem Grundriss und Ihren Abläufen. Was Sie brauchen, klären wir beim kostenlosen Aufmaß.",
  col1CtaLabel: "Büroprojekt unverbindlich anfragen",
  col1CtaHref: "/kontakt",
  col2Body:
    "Beratung, Planung, Fertigung und Montage aus einer Hand — kein Abstimmen zwischen drei Gewerken. Sie sprechen mit den Leuten, die Ihre Büromöbel bauen.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montageradius rund um Espelkamp",
  col3Body:
    "Montage mit eigenem Team im Umkreis von rund 200 km — Minden, Bielefeld, Osnabrück, Hannover, ganz OWL. Lieferung bundesweit.",
  col3CtaLabel: "Büro im Möbelplaner planen",
  col3CtaHref: "/moebelplaner/",
};

export const bueroProcess = {
  heading: "So läuft Ihre Büroeinrichtung ab: Beratung, Aufmaß, 3D-Planung, Fertigung, Montage",
  paragraph:
    "Ihre Büroeinrichtung entsteht in fünf klaren Schritten. Erstens die Beratung, im Büro oder bei Ihnen vor Ort, in der wir Bedarf, Stil und Budgetrahmen klären. Zweitens das kostenlose Aufmaß vor Ort. Jeder Millimeter zählt, wenn Schränke wandbündig sitzen und Schreibtische ins Raster Ihrer Arbeitsplätze passen sollen. Drittens die 3D-Planung: Sie sehen Ihre künftigen Räume, bevor das erste Brett geschnitten wird. Viertens die Fertigung im eigenen Werk in Espelkamp, alle Teile in Eigenregie. Und fünftens die Montage durch unser eigenes Team, auf Wunsch außerhalb der Geschäftszeiten oder in Etappen, damit Ihr Bürobetrieb so wenig wie möglich gestört wird. Sie haben durchgehend einen festen Ansprechpartner, vom ersten Gespräch bis zur Abnahme, und müssen nichts selbst aufbauen. Ob einzelner Aktenschrank oder komplette Objekteinrichtung, wir liefern robuste Büromöbel nach Maß, die der täglichen Beanspruchung standhalten.",
  paragraphStrong: "Made in Germany.",
  image: "/images/2025/11/IMG_2249.jpg",
  imageAlt: "Maßgefertigter Empfangs- und Arbeitsbereich im Büro",
};

/** Structured process steps — used by BueroProcessSteps (instead of the monolithic paragraph). */
export const bueroProcessSteps = {
  heading: "Ihr Büroprojekt in fünf klaren Schritten",
  steps: [
    {
      number: "01",
      title: "Beratung",
      description:
        "Im Büro oder bei Ihnen vor Ort — wir klären Bedarf, Stil und Budgetrahmen.",
    },
    {
      number: "02",
      title: "Kostenloses Aufmaß",
      description:
        "Jeder Millimeter zählt, damit Schränke wandbündig sitzen und Schreibtische ins Raster Ihrer Arbeitsplätze passen.",
    },
    {
      number: "03",
      title: "3D-Planung",
      description:
        "Sie sehen Ihre künftigen Räume, bevor das erste Brett geschnitten wird.",
    },
    {
      number: "04",
      title: "Fertigung",
      description:
        "Alle Teile entstehen im eigenen Werk in Espelkamp — in Eigenregie, ohne Subunternehmer.",
    },
    {
      number: "05",
      title: "Montage",
      description:
        "Unser eigenes Team baut auf — auf Wunsch außerhalb der Geschäftszeiten oder in Etappen.",
    },
  ],
};

export const bueroTypische = {
  heading: "Büromöbel nach Maß: Schreibtische, Aktenschränke, Konferenztische, Empfang und mehr",
  image1: "/images/2025/11/IMG_2772-scaled.jpg",
  image1Alt: "Maßgefertigte Arbeitsplätze im Büro",
  image2: "/images/2025/11/DSC06206-scaled.jpg",
  image2Alt: "Aktenschränke und Stauraum nach Maß",
  row1: [
    {
      title: "Schreibtische & Arbeitsplätze nach Maß",
      description:
        "Schreibtische nach Maß, die Technik, Kabel und Stauraum sauber wegräumen. Wir planen ergonomische Arbeitsplätze und auf Wunsch höhenverstellbare Steharbeitsplätze, einzeln oder als ganze Bürozeile, abgestimmt auf Tisch- und Arbeitshöhe Ihres Teams. So lässt sich der Wechsel zwischen Sitzen und Stehen im Alltag wirklich nutzen.",
    },
    {
      title: "Aktenschränke & Stauraum nach Maß",
      description:
        "Büro- und Aktenschränke nach Maß, die jeden Meter Wand nutzen. Vom Ordnerschrank über den Rollcontainer bis zur raumhohen Regalwand, passgenau auf Ihre Räume und Aktenmengen zugeschnitten, auf Wunsch mit abschließbaren Fächern für vertrauliche Unterlagen.",
    },
    {
      title: "Konferenz- & Besprechungstische nach Maß",
      description:
        "Konferenztische nach Maß in der Größe Ihres Raums, mit integrierter Medientechnik und Anschlüssen für Strom und Daten. Stabil gebaut für den täglichen Einsatz im Besprechungsraum, vom kleinen Meetingpoint bis zur großen Tafel für die ganze Abteilung.",
    },
  ],
  row2: [
    {
      title: "Empfangstresen & Thekenbereiche",
      description:
        "Empfangstresen nach Maß, die Besucher führen und für einen guten ersten Eindruck sorgen. Ausgelegt auf Ihr Corporate Design und Ihre Abläufe am Empfang, mit durchdachtem Arbeitsplatz dahinter und Stauraum für alles, was im Sichtbereich nicht herumliegen soll.",
    },
    {
      title: "Teeküchen & Akustiklösungen",
      description:
        "Teeküchen und Büroküchen nach Maß, robust gegen die tägliche Feuchtigkeit, dazu Akustikelemente und Raumteiler, die offene Büros gliedern und den Geräuschpegel senken. So entsteht mehr Ruhe am Arbeitsplatz, ohne dass der Raum seinen offenen Charakter verliert.",
    },
    {
      title: "Einbauschränke & Sonderbau Büro",
      description:
        "Einbauschränke fürs Büro in Nischen, unter Dachschrägen und in Sonderformen. Wo Katalogmöbel aufhören, fertigen wir die passende Lösung im eigenen Werk, oft genau dort, wo Serienmöbel eine Lücke oder eine Passleiste hinterlassen würden.",
    },
  ],
};

export const bueroWarum = {
  heading: "Tischler oder Büromöbelhandel? Der Unterschied im Überblick",
  paragraph:
    "Kataloganbieter liefern feste Rastermaße. Wo Ihre Wand 2,87 Meter misst, bleibt am Ende eine Lücke oder eine Passleiste. Wir fertigen Ihre Büroeinrichtung wand-zu-wand — millimetergenau auf Ihre Räume, Beratung, Fertigung und Montage aus einer Hand. Ein Detail, das im Alltag zählt: Unsere PU-Kantenverleimung verschließt Kanten fugenlos und nahezu wasserfest. Schreibtischkanten überstehen Jahre der Beanspruchung, die Teeküche verträgt Feuchtigkeit, nichts platzt an den Rändern ab.",
  images: [
    { src: "/images/2025/11/DSC_9747.jpg", alt: "Moderne Büroeinrichtung nach Maß", width: 600, height: 450 },
    { src: "/images/2025/11/IMG_2673-scaled.jpg", alt: "Arbeitsplätze mit integriertem Stauraum", width: 600, height: 400 },
    { src: "/images/2025/11/DSC06206-scaled.jpg", alt: "Aktenschränke nach Maß im Büro", width: 600, height: 800 },
    { src: "/images/2025/11/IMG_2249.jpg", alt: "Empfangsbereich mit Theke nach Maß", width: 600, height: 420 },
    { src: "/images/2025/11/IMG_2772-scaled.jpg", alt: "Maßgefertigte Schreibtische im Büro", width: 600, height: 380 },
    { src: "/images/2025/11/DSC06340-scaled.jpg", alt: "Konferenzbereich mit Tisch nach Maß", width: 600, height: 450 },
  ],
};

/** Structured comparison data — used by BueroVergleich. */
export const bueroVergleich = {
  heading: "Tischler oder Büromöbelhandel? Der Unterschied im Überblick",
  intro:
    "Kataloganbieter liefern feste Rastermaße. Wo Ihre Wand 2,87 Meter misst, bleibt am Ende eine Lücke oder eine Passleiste. Wir bauen Ihre Büroeinrichtung selbst, komplett in unserem Meisterbetrieb in Espelkamp — millimetergenau auf Ihre Räume, Ihre Abläufe und Ihren Auftritt zugeschnitten.",
  items: [
    "Den ganzen Raum planen statt einzelner Stücke — Arbeitsplätze, Schränke und Empfang als Gesamtkonzept",
    "Wand-zu-Wand gefertigt, ohne Passleisten und ohne Lücken an Nischen oder Dachschrägen",
    "Beratung, Fertigung und Montage aus einer Hand — Sie sprechen mit den Leuten, die Ihre Möbel bauen",
    "Hält der täglichen Beanspruchung über Jahre stand — keine Kompromisse bei Material und Verarbeitung",
  ],
  image: "/images/2025/11/DSC_9747.jpg",
  imageAlt: "Büroeinrichtung nach Maß von Fast Systemmöbel Espelkamp",
  kantenText:
    "Ein Detail, das im Alltag den Unterschied macht: Unsere PU-Kantenverleimung verschließt die Kanten fugenlos und nahezu wasserfest. Eine Musterkante haben wir 24 Stunden unter Wasser getaucht, ohne dass sie aufquillt. Für den Büroalltag bedeutet das: Die Teeküche verträgt Spritzwasser, Schreibtischkanten überstehen Jahre der Beanspruchung, und nichts platzt an den Rändern ab.",
};

export const bueroGeschichte = {
  heading: "Ein Meisterbetrieb, der Arbeitsräume versteht",
  subheading: "Vom Garagenbetrieb zum Partner für Büroeinrichtung",
  anchorImage: "/images/2025/11/IMG_2673-scaled.jpg",
  anchorImageAlt: "Arbeitsplätze nach Maß — Fast Systemmöbel Espelkamp",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "200 km", label: "Montage-Radius" },
    { value: "bundesweit", label: "Lieferung" },
  ],
  paragraphs: [
    "Fast Systemmöbel startete 1996 als Ein-Mann-Betrieb in Rahden-Tonnenheide. Heute arbeiten wir auf über 1.000 m² in Espelkamp mit moderner Homag- und CNC-Technologie. Geführt von Familie Fast: Gründer Johann und seine Söhne Andreas und Peter, seit 2010 mit an Bord.",
    "Inzwischen haben wir zahlreiche komplette Büros in Ostwestfalen-Lippe eingerichtet — von einzelnen Arbeitsplätzen bis zu Empfang, Schrankwand und Konferenzraum. Ein Betrieb, ein Ansprechpartner, ein Stil über alle Möbel hinweg.",
  ],
};

export const bueroMoebelplaner = {
  heading: "Ihre Büromöbel online planen und konfigurieren",
  body:
    "Stellen Sie Schränke und Büromöbel im 3D-Konfigurator online zusammen — Maße, Oberflächen und Einlegeböden direkt sichtbar. Den Rest übernehmen wir: Aufmaß, Fertigung, Montage. Oder direkt anrufen: 05771 9138312.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: "/images/2025/11/IMG_2772-scaled.jpg",
  imageAlt: "Maßgefertigte Arbeitsplätze im Büro",
};

/** Final-CTA + intro-CTA expanding image blocks (shared ExpandingImageCta). */
export const bueroCtas = {
  intro: {
    image: "/images/2025/11/IMG_2673-scaled.jpg",
    heading: "Ihr Büro verdient mehr als Möbel von der Stange.",
    linkText: "Sprechen Sie mit uns über Ihr Büroprojekt",
    href: "/kontakt",
  },
  final: {
    image: "/images/2025/11/DSC_9747.jpg",
    heading: "Ihr Büroprojekt — wir bauen es nach Maß.",
    linkText: "Jetzt unverbindlich anfragen",
    href: "/kontakt",
  },
};

/** Testimonials + FAQ render via the shared service sections. */
export const bueroTestimonialsHeading = "Was unsere Gewerbekunden sagen";

export const bueroFaq = {
  heading: "Häufige Fragen zur Büroeinrichtung nach Maß",
  items: [
    {
      question: "Was kostet eine Büroeinrichtung nach Maß?",
      answer:
        "Einen Pauschalpreis gibt es bei Maßanfertigung nicht, weil jedes Büro anders zugeschnitten wird. Den Preis bestimmen Größe und Umfang, Materialwahl, Ausstattung und Stückzahl. Nach dem kostenlosen Aufmaß erhalten Sie ein individuelles Angebot, nachvollziehbar kalkuliert Position für Position.",
    },
    {
      question: "Wie läuft eine Büroeinrichtung nach Maß ab, von der Anfrage bis zur Montage?",
      answer:
        "In fünf Schritten: Beratung, kostenloses Aufmaß vor Ort, 3D-Planung Ihrer Räume, Fertigung im eigenen Werk in Espelkamp und Montage durch unser eigenes Team. Sie haben durchgehend einen festen Ansprechpartner und müssen nichts selbst aufbauen.",
    },
    {
      question: "Was unterscheidet Büromöbel vom Tischler von Serienmöbeln?",
      answer:
        "Serienmöbel kommen in festen Rastermaßen — an Nischen oder krummen Wänden bleiben Lücken. Wir fertigen millimetergenau wand-zu-wand, planen den ganzen Raum als Einheit und montieren selbst. Das Ergebnis sitzt passgenau und hält der täglichen Beanspruchung länger stand.",
    },
    {
      question: "In welchem Gebiet liefern und montieren Sie Büroeinrichtungen?",
      answer:
        "Montage mit eigenem Team im Umkreis von rund 200 km — etwa Minden, Bielefeld, Osnabrück, Hannover und ganz OWL. Darüber hinaus liefern wir bundesweit.",
    },
  ],
};
