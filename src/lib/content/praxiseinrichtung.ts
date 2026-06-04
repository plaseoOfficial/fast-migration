/**
 * Content for the `/praxiseinrichtung/` page. A B2B acquisition landing page
 * for "Praxiseinrichtung nach Maß" (custom practice and office furniture). Part
 * of the Gewerbe cluster, it reuses the same library sections as the canonical
 * Privat page (see docs/sections/CATALOG.md → the "Privat Page Recipe"); only
 * the copy is swapped for the medical, therapy and legal segment within the
 * ~200 km radius around Espelkamp. This page routes qualified leads into the
 * online furniture configurator (/moebelplaner/).
 *
 * Voice = Fast Systemmöbel (sachlich-handwerklich, "aus einer Hand"), not plaseo.
 * Facts are real: seit 1996, Meisterbetrieb seit 2013, 1.000 m² Fertigung,
 * Homag-Technologie, ~200 km Montageradius, Made in Germany.
 */

export const praxisHero = {
  bgImage: "/images/2025/11/DSC07156-scaled.jpg",
  imageAlt: "Praxiseinrichtung nach Maß – Empfangstresen und Wartebereich von Fast Systemmöbel",
  title: "Praxiseinrichtung nach Maß aus Espelkamp – für Ärzte, Therapeuten und Kanzleien",
  intro:
    "Ihre Praxis und Ihre Kanzlei brauchen mehr als Möbel von der Stange. Wir planen und fertigen Empfangstresen, Behandlungsmöbel, Wartebereiche und Büromöbel zentimetergenau nach Maß. Gebaut im eigenen Meisterbetrieb in Espelkamp, montiert von unserem eigenen Team direkt in Ihren Räumen.",
  breadcrumb: [
    { label: "fast.side-boost.com", href: "/" },
    { label: "Gewerbe", href: "/gewerbe/" },
    { label: "Praxiseinrichtung" },
  ],
};

export const praxisIntroStats = {
  since: "seit 1996",
  sinceSub: "Richten wir Praxen und Kanzleien ein.",
  heading: "Praxiseinrichtung, die zu Ihren Abläufen und Ihrem Anspruch passt",
  introBefore:
    "Ob Arztpraxis, Therapiezentrum, Anwalts- oder Steuerkanzlei. Wir begleiten Ihr Projekt von der ersten",
  introBold: "Planung",
  introAfter:
    " bis zur fertigen Montage. Hygienisch reinigbar, repräsentativ gestaltet und auf ruhige Abläufe ausgelegt.",
  bandImage: "/images/2025/11/DSC07129-Kopie-scaled.jpg",
  bandAlt: "Maßgefertigter Empfangstresen in einer Arztpraxis",
  col1Title: "Praxis planen",
  col1Body:
    "Wir entwickeln Ihre Einrichtung exakt nach Grundriss, Hygieneanforderung und Patientenfluss. Anmeldetresen, Behandlungsschränke, Wartezimmer und Materiallager planen wir millimetergenau und legen sie auf den täglichen Betrieb aus.",
  col1CtaLabel: "Jetzt Praxisprojekt anfragen",
  col1CtaHref: "/kontakt",
  col2Body:
    "Vom einzelnen Anmeldetresen bis zur kompletten Praxis erhalten Sie alles aus einer Hand: Beratung, 3D-Planung, Fertigung und Montage. So entstehen Räume, die Diskretion wahren, das Team entlasten und über Jahre dem Praxisalltag standhalten.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montageradius rund um Espelkamp",
  col3Body:
    "Wir fertigen in Espelkamp und montieren im Umkreis von rund 200 km, in Ostwestfalen-Lippe, Niedersachsen und darüber hinaus. Mit eigenem Montageteam, ohne Subunternehmer und mit planbaren Terminen außerhalb Ihrer Sprechzeiten.",
  col3CtaLabel: "Einrichtung online planen",
  col3CtaHref: "/moebelplaner/",
};

export const praxisProcess = {
  heading: "Planung, Fertigung und Montage – Praxiseinrichtung aus einer Hand",
  paragraph:
    "Ihre Praxiseinrichtung entsteht in einem klaren Prozess: Aufmaß und Beratung vor Ort, digitale 3D-Planung Ihrer Räume, Fertigung auf Homag-Technologie und saubere Montage durch unser eigenes Team, auf Wunsch außerhalb der Sprechzeiten. Anmeldetresen, Behandlungsmöbel, Wartezimmer, Beratungsräume oder Hygiene- und Materialschränke: Wir liefern reinigbare, belastbare Einrichtungen, die dem täglichen Praxisbetrieb standhalten.",
  paragraphStrong: "Made in Germany.",
  image: "/images/2025/11/DSC_0001.jpg",
  imageAlt: "Maßgefertigter Anmelde- und Empfangsbereich für eine Praxis",
};

export const praxisTypische = {
  heading: "Typische Projekte – für Arztpraxen, Therapie und Kanzleien",
  image1: "/images/2025/11/DSC07156-scaled.jpg",
  image1Alt: "Maßgefertigter Empfangstresen mit Hygieneoberfläche",
  image2: "/images/2026/01/csm_Kabine_6550b3ca43.jpg",
  image2Alt: "Funktionsraum mit Einbaumöbeln nach Maß",
  row1: [
    {
      title: "Empfangs- und Anmeldetresen",
      description:
        "Der erste Eindruck Ihrer Praxis. Tresen mit durchdachtem Stauraum, abschließbaren Aktenfächern und reinigbaren Oberflächen, der Diskretion und einen ruhigen Empfang ermöglicht.",
    },
    {
      title: "Behandlungs- und Funktionsraum-Möbel",
      description:
        "Schränke, Arbeitszeilen und Ablagen für Behandlung und Untersuchung. Fugenarm verarbeitet, leicht zu desinfizieren und exakt auf Ihre Geräte und Abläufe abgestimmt.",
    },
    {
      title: "Wartezimmer-Einrichtung",
      description:
        "Sitzbänke, Garderoben und Empfangsmöbel für eine ruhige Wartesituation. Robust für hohe Frequenz und in einer Optik, die Vertrauen schafft.",
    },
  ],
  row2: [
    {
      title: "Kanzlei- und Büromöbel",
      description:
        "Beratungsräume, Aktenschränke und Arbeitsplätze für Anwalts- und Steuerkanzleien. Repräsentativ gestaltet, mit diskretem Stauraum für vertrauliche Unterlagen.",
    },
    {
      title: "Hygiene- und Materialschränke",
      description:
        "Lager- und Materialschränke für Verbrauchsmaterial, Akten und Geräte. Mit abwischbaren Fronten, klarer Ordnung und optionalem Schließsystem.",
    },
    {
      title: "Einbau- und Sonderlösungen",
      description:
        "Nischen, Schrägen und enge Grundrisse nutzen wir gezielt aus. Einbauschränke und Sonderanfertigungen, wo Standardmöbel an ihre Grenzen kommen.",
    },
  ],
};

export const praxisWarum = {
  heading: "Warum Praxiseinrichtung nach Maß statt Möbel von der Stange",
  paragraph:
    "Möbelhändler liefern Kataloglösungen in festen Rastermaßen. Wir bauen Ihre Einrichtung selbst, vollständig in unserem Meisterbetrieb in Espelkamp. Jeder Tresen, jeder Behandlungsschrank und jedes Aktenmöbel wird millimetergenau auf Ihren Grundriss, Ihre Hygieneanforderungen und Ihren Auftritt zugeschnitten. Das heißt: reinigbare Oberflächen, fugenarme Verarbeitung, abschließbarer Stauraum und ruhige Abläufe statt Kompromisse. Planung, Fertigung, Lieferung und Montage kommen aus einer Hand, mit festen Ansprechpartnern und ohne Subunternehmer.",
  images: [
    { src: "/images/2025/11/DSC07156-scaled.jpg", alt: "Empfangstresen in einer Praxis", width: 600, height: 450 },
    { src: "/images/2026/01/csm_Kabine_6550b3ca43.jpg", alt: "Funktionsraum mit Einbaumöbeln", width: 600, height: 800 },
    { src: "/images/2025/11/20230814_155316228_iOS-scaled.jpg", alt: "Empfangsbereich mit Holzlamellenwand", width: 600, height: 800 },
    { src: "/images/2025/11/DSC_9843.jpg", alt: "Materialschrank mit reinigbaren Fronten", width: 600, height: 420 },
    { src: "/images/2025/11/DSC07129-Kopie-scaled.jpg", alt: "Anmeldetresen nach Maß", width: 600, height: 380 },
    { src: "/images/2025/11/IMG_6123-scaled.jpg", alt: "Beratungsraum mit Aktenschrank", width: 600, height: 450 },
  ],
};

export const praxisGeschichte = {
  heading: "Ein Meisterbetrieb, der Praxen und Kanzleien versteht",
  subheading: "VOM GARAGENBETRIEB ZUM PARTNER FÜR PRAXISEINRICHTUNG.",
  gallery: [
    { src: "/images/2025/11/DSC06340-scaled.jpg", alt: "Werkstatt und Team in Espelkamp", caption: "Werkstatt Espelkamp", width: 600, height: 600 },
    { src: "/images/2025/11/DSC07156-scaled.jpg", alt: "Empfangstresen in einer Praxis", caption: "Empfangstresen", width: 800, height: 400 },
    { src: "/images/2026/01/csm_Kabine_6550b3ca43.jpg", alt: "Funktionsraum mit Einbaumöbeln", caption: "Funktionsraum", width: 600, height: 900 },
    { src: "/images/2025/11/DSC07129-Kopie-scaled.jpg", alt: "Anmeldetresen nach Maß", caption: "Anmeldetresen", width: 600, height: 900 },
    { src: "/images/2025/11/IMG_6123-scaled.jpg", alt: "Beratungsraum mit Aktenschrank", caption: "Beratungsraum", width: 600, height: 900 },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 in einer Garage in Espelkamp. Heute fertigen wir auf über 1.000 m² mit moderner Homag-Technologie und einem eingespielten Team.",
    "Was im Möbelbau für Privatkunden entstand, kommt in der Praxiseinrichtung doppelt zum Tragen: Wir kennen die Anforderungen an Hygiene, Reinigbarkeit, Termintreue und Diskretion, die ein Praxisprojekt mitbringt, und planen entsprechend praxisnah.",
    "Vom einzelnen Anmeldetresen bis zur kompletten Praxis fertigen wir in Espelkamp, montieren im Umkreis von rund 200 km und liefern deutschlandweit.",
  ],
  factLines: [
    "– Made in Germany",
    "– 1.000 m² Fertigung",
    "– Meisterbetrieb seit 2013",
    "– Homag-Technologie",
    "– Montage bis 200 km",
    "– Eigenes Montageteam",
  ],
};

/** Online configurator block (shared MnmMoebelplaner), leads into /moebelplaner/. */
export const praxisMoebelplaner = {
  heading: "Ihre Praxiseinrichtung online planen und konfigurieren",
  body:
    "Mit unserem Möbelplaner stellen Sie Tresen, Schränke und Wartebereich online zusammen. Maße, Fronten, Oberflächen und Stauraum sehen Sie direkt im 3D-Konfigurator. So bekommen Sie sofort ein Bild Ihrer Einrichtung. Danach übernehmen wir den Rest: Aufmaß vor Ort, Beratung, Fertigung und Montage. Aus Ihrer Online-Planung wird eine Praxiseinrichtung nach Maß.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: "/images/2026/01/csm_Kabine_6550b3ca43.jpg",
  imageAlt: "Funktionsraum mit Einbaumöbeln nach Maß",
};

/** Final-CTA + intro-CTA expanding image blocks (shared ExpandingImageCta). */
export const praxisCtas = {
  intro: {
    image: "/images/2025/11/DSC07129-Kopie-scaled.jpg",
    heading: "Ihre Praxis verdient mehr als Möbel von der Stange.",
    linkText: "Sprechen Sie mit uns über Ihr Praxisprojekt",
    href: "/kontakt",
  },
  final: {
    image: "/images/2025/11/IMG_6123-scaled.jpg",
    heading: "Vom Anmeldetresen bis zum Funktionsraum – wir bauen es nach Maß.",
    linkText: "Sprechen Sie mit uns über Ihre Praxiseinrichtung.",
    href: "/kontakt",
  },
};

/** Testimonials + FAQ render via the shared service sections. */
export const praxisTestimonialsHeading = "Was unsere Praxis- und Kanzleikunden sagen";

export const praxisFaq = {
  heading: "Häufige Fragen zur Praxiseinrichtung nach Maß",
  items: [
    {
      question: "Für welche Branchen richten Sie ein?",
      answer:
        "Für Arztpraxen aller Fachrichtungen, Therapie- und Behandlungszentren sowie Anwalts- und Steuerkanzleien. Vom einzelnen Anmeldetresen bis zur kompletten Einrichtung von Empfang, Behandlung, Wartezimmer und Beratungsräumen.",
    },
    {
      question: "Welche Materialien eignen sich für Hygiene und Reinigung?",
      answer:
        "Wir verarbeiten reinigbare, robuste Oberflächen wie beschichtete Dekorplatten, HPL und versiegelte Materialien. Fugenarm gebaut und desinfektionsmittelbeständig, damit Ihre Möbel den Hygieneanforderungen im Praxisalltag standhalten.",
    },
    {
      question: "Wie sorgen Sie für eine repräsentative Einrichtung?",
      answer:
        "Empfang und Wartebereich prägen den ersten Eindruck. Wir stimmen Materialien, Farben und Formen auf Ihren Auftritt ab und planen diskreten Stauraum ein. So entsteht ein Raum, der Vertrauen schafft und Kompetenz ausstrahlt.",
    },
    {
      question: "Montieren Sie auch außerhalb der Sprechzeiten?",
      answer:
        "Ja. Mit eigenem Montageteam montieren wir auf Wunsch abends, am Wochenende oder in Etappen. So bleibt Ihre Praxis oder Kanzlei so wenig wie möglich geschlossen. Wir liefern und montieren im Umkreis von rund 200 km um Espelkamp.",
    },
    {
      question: "Wie läuft ein Projekt von der Planung bis zum Konfigurator ab?",
      answer:
        "Sie starten im Möbelplaner und stellen Ihre Einrichtung online zusammen oder fragen direkt an. Danach folgen Erstgespräch und Aufmaß, eine Planung mit Material- und Kostenübersicht, die Fertigung in Espelkamp und die Montage vor Ort. Klar strukturiert und termintreu.",
    },
    {
      question: "Was unterscheidet Sie von Standard-Praxismöbeln?",
      answer:
        "Wir sind ein Meisterbetrieb mit eigener Fertigung. Statt Katalogware in festen Rastermaßen bauen wir millimetergenau nach Maß, mit reinigbaren Materialien, abschließbarem Stauraum, festen Ansprechpartnern und eigenem Montageteam.",
    },
  ],
};
