/**
 * Content for the `/bueroeinrichtung/` page. A B2B acquisition landing page
 * for "Büroeinrichtung nach Maß" (custom office furniture). Part of the Gewerbe
 * cluster, it reuses the same library sections as the canonical Privat page
 * (see docs/sections/CATALOG.md → the "Privat Page Recipe"); only the copy is
 * swapped for the commercial office segment (Geschäftsführer, Office-Manager,
 * Architekten) within the ~200 km radius around Espelkamp.
 *
 * Voice = Fast Systemmöbel (sachlich-handwerklich, "aus einer Hand", B2B,
 * Sie-Form), not plaseo. Facts are real: seit 1996, Meisterbetrieb seit 2013,
 * über 1.000 m² Fertigung, Homag-/CNC-Technologie, ~200 km Montageradius,
 * eigenes Montageteam, Made in Germany, Inhaber Johann Fast.
 */

export const bueroHero = {
  bgImage: "/images/2025/11/DSC_9747.jpg",
  imageAlt: "Büroeinrichtung nach Maß von Fast Systemmöbel aus Espelkamp",
  title: "Büroeinrichtung nach Maß aus Espelkamp: vom Einzelmöbel bis zum kompletten Büro",
  intro:
    "Ihre Büroräume bestimmen, wie konzentriert Ihr Team arbeitet und wie Besucher Ihr Unternehmen wahrnehmen. Wir planen und fertigen Büromöbel nach Maß. Vom einzelnen Aktenschrank bis zur kompletten Objekteinrichtung. Gebaut im eigenen Meisterbetrieb in Espelkamp und vor Ort in Ihren Räumen montiert.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Gewerbe", href: "/gewerbe/" },
    { label: "Büroeinrichtung" },
  ],
};

export const bueroIntroStats = {
  since: "seit 1996",
  sinceSub: "Richten wir Büros ein.",
  heading: "Büroeinrichtung, die zu Ihren Räumen und Abläufen passt",
  introBefore:
    "Ob Verwaltung, Kanzlei oder Architekturbüro: Wir begleiten Ihr Projekt von der ersten",
  introBold: "Planung",
  introAfter:
    " bis zur fertigen Montage. Exakt nach Grundriss kalkuliert, im eigenen Werk gefertigt und termintreu aufgebaut.",
  bandImage: "/images/2025/11/IMG_2673-scaled.jpg",
  bandAlt: "Maßgefertigte Büroeinrichtung mit Arbeitsplätzen und Stauraum",
  col1Title: "Büro planen",
  col1Body:
    "Wir entwickeln Ihre Büroeinrichtung nach Grundriss, Arbeitswegen und Stauraumbedarf. Arbeitsplätze, Aktenschränke, Konferenztische und Empfangsbereiche. Millimetergenau geplant und auf den täglichen Betrieb ausgelegt.",
  col1CtaLabel: "Jetzt Büroprojekt anfragen",
  col1CtaHref: "/kontakt",
  col2Body:
    "Vom einzelnen Schrank bis zur kompletten Objekteinrichtung erhalten Sie alles aus einer Hand: Beratung, Planung, Fertigung und Montage. So entstehen Arbeitsplätze, die Konzentration fördern, Stauraum schaffen und über Jahre belastbar bleiben.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montageradius rund um Espelkamp",
  col3Body:
    "Wir fertigen in Espelkamp und montieren im Umkreis von rund 200 km. In Ostwestfalen-Lippe, Minden, Bielefeld, Hannover und Osnabrück. Mit eigenem Montageteam, ohne Subunternehmer und mit planbaren Terminen.",
  col3CtaLabel: "Büro online planen",
  col3CtaHref: "/moebelplaner/",
};

export const bueroProcess = {
  heading: "Planung, Fertigung und Montage: Büroeinrichtung aus einer Hand",
  paragraph:
    "Ihre Büroeinrichtung entsteht in klaren Schritten: Aufmaß und Beratung vor Ort, digitale Planung Ihrer Räume, Fertigung auf Homag- und CNC-Technologie und saubere Montage durch unser eigenes Team. Auf Wunsch außerhalb der Geschäftszeiten. Arbeitsplätze, Aktenschränke, Konferenztische, Empfangstresen oder die komplette Objekteinrichtung: Wir liefern robuste Möbel, die dem täglichen Bürobetrieb standhalten.",
  paragraphStrong: "Made in Germany.",
  image: "/images/2025/11/IMG_2249.jpg",
  imageAlt: "Maßgefertigter Empfangs- und Arbeitsbereich im Büro",
};

export const bueroTypische = {
  heading: "Typische Büroprojekte: Einzelmöbel, Arbeitsplätze und Objekteinrichtung",
  image1: "/images/2025/11/IMG_2772-scaled.jpg",
  image1Alt: "Maßgefertigte Arbeitsplätze im Büro",
  image2: "/images/2025/11/DSC06206-scaled.jpg",
  image2Alt: "Aktenschränke und Stauraum nach Maß",
  row1: [
    {
      title: "Schreibtische & Arbeitsplätze",
      description:
        "Arbeitsplätze nach Maß, die Technik, Kabel und Stauraum sauber integrieren. Geplant für konzentriertes Arbeiten, einzeln oder als ganze Bürozeile.",
    },
    {
      title: "Aktenschränke & Stauraum",
      description:
        "Schränke und Regalsysteme nach Maß, die jeden Meter Wand nutzen. Vom Ordnerschrank bis zur raumhohen Schrankwand, passgenau auf Ihre Räume zugeschnitten.",
    },
    {
      title: "Konferenz- & Besprechungstische",
      description:
        "Konferenztische in der Größe Ihres Raums, mit integrierter Medientechnik und Anschlüssen. Stabil gebaut für den täglichen Einsatz.",
    },
  ],
  row2: [
    {
      title: "Empfang & Thekenbereiche",
      description:
        "Empfangstresen und Thekenbereiche, die Besucher führen und einen guten ersten Eindruck schaffen. Markenkonform und auf Ihre Abläufe ausgelegt.",
    },
    {
      title: "Akustik & Raumteiler",
      description:
        "Akustiklösungen und Raumteiler nach Maß, die offene Büros gliedern und den Geräuschpegel senken. Für mehr Ruhe am Arbeitsplatz.",
    },
    {
      title: "Einbauschränke & Sonderbau",
      description:
        "Einbauschränke für Nischen, Dachschrägen und Sonderformen. Wo Katalogmöbel aufhören, fertigen wir die passende Lösung im eigenen Werk.",
    },
  ],
};

export const bueroWarum = {
  heading: "Warum Büroeinrichtung nach Maß statt Möbel von der Stange",
  paragraph:
    "Kataloganbieter liefern feste Rastermaße. Wir bauen Ihre Büroeinrichtung selbst, vollständig in unserem Meisterbetrieb in Espelkamp. Jeder Schreibtisch, jeder Aktenschrank und jeder Konferenztisch wird millimetergenau auf Ihre Räume, Ihre Abläufe und Ihren Auftritt zugeschnitten. Das heißt: keine Kompromisse bei Maßen, Materialien und Belastbarkeit, sondern Möbel, die zu Ihrem Arbeitsalltag passen und über Jahre standhalten. Planung, Fertigung, Lieferung und Montage kommen aus einer Hand. Mit festen Ansprechpartnern und ohne Subunternehmer.",
  images: [
    { src: "/images/2025/11/DSC_9747.jpg", alt: "Moderne Büroeinrichtung nach Maß", width: 600, height: 450 },
    { src: "/images/2025/11/IMG_2673-scaled.jpg", alt: "Arbeitsplätze mit integriertem Stauraum", width: 600, height: 400 },
    { src: "/images/2025/11/DSC06206-scaled.jpg", alt: "Aktenschränke nach Maß im Büro", width: 600, height: 800 },
    { src: "/images/2025/11/IMG_2249.jpg", alt: "Empfangsbereich mit Theke nach Maß", width: 600, height: 420 },
    { src: "/images/2025/11/IMG_2772-scaled.jpg", alt: "Maßgefertigte Schreibtische im Büro", width: 600, height: 380 },
    { src: "/images/2025/11/DSC06340-scaled.jpg", alt: "Konferenzbereich mit Tisch nach Maß", width: 600, height: 450 },
  ],
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
    { value: "2013", label: "Meisterbetrieb" },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 in einer Garage in Espelkamp. Heute fertigen wir auf über 1.000 m² mit moderner Homag- und CNC-Technologie und einem eingespielten Team.",
    "Was im Möbelbau für Privatkunden entstand, kommt im Gewerbe doppelt zum Tragen: Wir kennen die Anforderungen an Belastbarkeit, Termintreue und Funktion, die eine Büroeinrichtung mitbringt, und planen entsprechend praxisnah.",
    "Vom einzelnen Aktenschrank bis zur kompletten Objekteinrichtung fertigen wir in Espelkamp, montieren im Umkreis von rund 200 km und liefern deutschlandweit.",
  ],
};

export const bueroMoebelplaner = {
  heading: "Ihre Büromöbel online planen und konfigurieren",
  body:
    "Mit unserem Möbelplaner stellen Sie Schränke, Regale und weitere Büromöbel online zusammen. Maße, Dekore, Einlegeböden und Schubladen sehen Sie direkt im 3D-Konfigurator. So bekommen Sie sofort ein Bild von Ihrem Möbel. Danach übernehmen wir den Rest: Aufmaß vor Ort, Beratung, Fertigung und Montage. Aus Ihrer Online-Planung wird Büroeinrichtung nach Maß.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: "/images/2025/11/DSC06206-scaled.jpg",
  imageAlt: "Aktenschrank nach Maß für das Büro",
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
    heading: "Vom Aktenschrank bis zur Objekteinrichtung: wir bauen es nach Maß.",
    linkText: "Sprechen Sie mit uns über Ihr Büroprojekt.",
    href: "/kontakt",
  },
};

/** Testimonials + FAQ render via the shared service sections. */
export const bueroTestimonialsHeading = "Was unsere Gewerbekunden sagen";

export const bueroFaq = {
  heading: "Häufige Fragen zur Büroeinrichtung nach Maß",
  items: [
    {
      question: "Für welche Büroarten und Branchen planen Sie?",
      answer:
        "Für Verwaltungen, Kanzleien, Architektur- und Ingenieurbüros, Praxen und Dienstleister. Vom einzelnen Möbelstück über Arbeitsplätze bis zur kompletten Objekteinrichtung.",
    },
    {
      question: "Wie läuft ein Büroprojekt bei Ihnen ab?",
      answer:
        "Erstgespräch und Aufmaß vor Ort, Planung mit Material- und Kostenübersicht, Fertigung in Espelkamp, Montage durch unser eigenes Team. Klar strukturiert und termintreu, mit festem Ansprechpartner.",
    },
    {
      question: "Montieren Sie auch im laufenden Betrieb?",
      answer:
        "Ja. Auf Wunsch montieren wir außerhalb Ihrer Geschäftszeiten oder in Etappen, damit Ihr Bürobetrieb so wenig wie möglich gestört wird.",
    },
    {
      question: "Welche Materialien nutzen Sie und bieten Sie Akustiklösungen an?",
      answer:
        "Wir arbeiten mit robusten Plattenwerkstoffen, Echtholzfurnieren und Massivholz, dazu langlebige Beschläge. Für offene Büros planen wir Akustikelemente und Raumteiler nach Maß, die den Geräuschpegel senken.",
    },
    {
      question: "Was unterscheidet Sie von Kataloganbietern?",
      answer:
        "Wir sind ein Meisterbetrieb mit eigener Fertigung. Statt fester Rastermaße bauen wir millimetergenau nach Maß. Mit robusten Materialien, festen Ansprechpartnern und eigenem Montageteam, ohne Subunternehmer.",
    },
    {
      question: "In welchem Umkreis liefern und montieren Sie?",
      answer:
        "Wir fertigen in Espelkamp, montieren im Umkreis von rund 200 km, etwa in Ostwestfalen-Lippe, Minden, Bielefeld, Hannover und Osnabrück, und liefern deutschlandweit.",
    },
  ],
};
