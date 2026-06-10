/**
 * Content for the `/ladenbau/` page — a B2B acquisition landing page
 * for "Ladenbau nach Maß" (custom shop fitting). It reuses the same library
 * sections as the canonical Privat page (see docs/sections/CATALOG.md → the
 * "Privat Page Recipe"); only the copy is swapped for the commercial segment
 * (retail, gastronomy, services) within the ~200 km radius around Espelkamp.
 *
 * Voice = Fast Systemmöbel (sachlich-handwerklich, "aus einer Hand"), not plaseo.
 * Facts are real: seit 1996 (Rahden-Tonnenheide; Fertigung Espelkamp ab 2001),
 * Meisterbetrieb (ohne Jahr), 1.000 m² Fertigung, Homag-Technologie, ~200 km
 * Montageradius, Lieferung deutschlandweit, PU-Kantenverleimung, Familie Fast
 * (Johann Fast Gründer; Andreas & Peter Fast seit 2010, 2. Generation).
 *
 * SEO-Content-Lauf (leistung): Research-Kit docs/seo/research/ladenbau.kit.md,
 * Discovery vom Kunden bestätigt (volles Shopkonzept inkl. Innenausbau/Licht/
 * Schaufenster, Serien-/Filialfähigkeit, CI + eigene Gestaltungsvorschläge).
 *
 * HANDOFF (Dev/Design, NICHT Teil des Content-Scopes):
 *  - `ladenMoebelplaner` (neu) muss in page.tsx verdrahtet werden:
 *    `<MnmMoebelplaner {...ladenMoebelplaner} />` (analog gastronomieeinrichtung).
 *  - Interne Pflichtlinks brauchen Render-Slots: /serienmoebel/ ("Ladeneinrichtung
 *    in Serie"), /gastronomieeinrichtung/, /praxiseinrichtung/, /bueroeinrichtung/,
 *    /referenzen/, /moebelplaner/, /kontakt/ — Anker stehen im Copytext bereit.
 *  - Korridor-Tiefe (2.400–2.800 W) braucht Tabellen-Sektionen (Vergleich
 *    Tischler/System/Möbelhaus + Kostentreiber) = Design-Build (STRUKTUR-BEDARF).
 */

import type { ServiceCard } from "@/types/mnm";

/**
 * "Weitere Leistungen"-Karten (shared MnmWeitereLeistungen). Überschreibt den
 * Default bewusst: der zeigt auf /moebel-nach-mass/ (Privat-Silo) und würde die
 * Silo-Integrität verletzen. Trägt stattdessen den Pflicht-Up-Link /gewerbe/
 * (kontextuell, zusätzlich zum Breadcrumb) und den SOLL-Trust-Link /referenzen/.
 */
export const ladenWeitereLeistungen: { cards: ServiceCard[] } = {
  cards: [
    {
      icon: "/images/2024/03/interior-design-white-icons-08.svg",
      title: "Gewerbeeinrichtung",
      description:
        "Ladenbau ist Teil unserer Gewerbeeinrichtung: vom einzelnen Möbel bis zur kompletten Objekteinrichtung für Handel, Gastronomie und Dienstleistung.",
      href: "/gewerbe/",
    },
    {
      icon: "/images/2024/03/interior-design-white-icons-07.svg",
      title: "Planung & 3D-Visualisierung",
      description:
        "Beratung, Aufmaß und technische 3D-Planung. Sie sehen Materialien, Farben und Anordnung, bevor wir mit der Fertigung beginnen.",
    },
    {
      icon: "/images/2024/03/interior-design-white-icons-09.svg",
      title: "Fertigung & Montage",
      description:
        "Fertigung im eigenen Werk in Espelkamp auf Homag-Technologie, Montage durch unser eigenes Team im Umkreis von rund 200 km.",
    },
    {
      icon: "/images/2024/03/interior-design-white-icons-15.svg",
      title: "Corporate Design",
      description:
        "Logo, Farben und Material nach Ihren Vorgaben am Point of Sale, auf Wunsch mit eigenen Gestaltungsvorschlägen von uns.",
    },
    {
      icon: "/images/2024/03/interior-design-white-icons-22.svg",
      title: "Referenzen",
      description:
        "Umgesetzte Projekte aus Einzelhandel und Gewerbe, von der Verkaufstheke bis zur kompletten Shopfläche.",
      href: "/referenzen/",
    },
  ],
};

export const ladenHero = {
  bgImage: "/images/2025/11/DSC_9965.jpg",
  imageAlt: "Ladenbau nach Maß – individuelle Ladeneinrichtung von Fast Systemmöbel",
  title: "Ladenbau nach Maß",
  intro:
    "Ladenbau nach Maß heißt bei uns: Ihre Verkaufsfläche kommt nicht aus dem Katalog, sondern wird Wand zu Wand für Ihren Grundriss geplant und im eigenen Meisterbetrieb gebaut. Vom einzelnen Verkaufstresen bis zur schlüsselfertigen Shopkonzeption kommen Beratung, 3D-Planung, Fertigung und Montage aus einer Hand.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Gewerbe", href: "/gewerbe/" },
    { label: "Ladenbau" },
  ],
};

export const ladenIntroStats = {
  since: "seit 1996",
  sinceSub: "Richten wir Geschäfte ein.",
  heading: "Ladeneinrichtung nach Maß, die zu Ihrer Marke passt",
  introBefore:
    "Ob Einzelhandel, Boutique, Gastronomie oder Praxis. Wir begleiten Ihr Projekt von der ersten",
  introBold: "Planung",
  introAfter:
    " bis zur fertigen Montage. Maßgefertigte Ladenmöbel statt Systemregal, zugeschnitten auf Ihren Grundriss und Ihre Marke.",
  bandImage: "/images/2025/11/WhatsApp-Bild-2025-01-16-um-12.34.29_b25a14a5.jpg",
  bandAlt: "Maßgefertigte Ladeneinrichtung im Einzelhandel",
  col1Title: "Shop planen",
  col1Body:
    "Wir planen Ihre Ladeneinrichtung exakt nach Grundriss, Customer Journey und Markenauftritt. Verkaufstheken, Wandregale und Kassenzonen entstehen millimetergenau und sind auf den täglichen Betrieb ausgelegt. Was genau Ihre Fläche braucht, klären wir beim kostenlosen Aufmaß vor Ort.",
  col1CtaLabel: "Ladenbau-Projekt anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Vom einzelnen Empfangstresen bis zur schlüsselfertigen Shopkonzeption bekommen Sie alles aus einer Hand: Beratung, 3D-Planung, Fertigung, baulichen Innenausbau, Beleuchtung und Montage. Sie sprechen dabei mit den Leuten, die Ihre Theke später auch bauen, und vermitteln nicht zwischen Händler, Hersteller und Monteur.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montageradius rund um Espelkamp",
  col3Body:
    "Wir fertigen in Espelkamp und montieren im Umkreis von rund 200 km, mit eigenem Montageteam und ohne Subunternehmer. Geliefert wird deutschlandweit. Auf Wunsch bauen wir außerhalb Ihrer Öffnungszeiten auf, dann bleibt Ihr Geschäft so kurz wie möglich zu.",
  col3CtaLabel: "Einsatzgebiet prüfen",
  col3CtaHref: "/kontakt/",
};

/**
 * Process as scannable numbered steps (shared ProcessSteps section). Replaces
 * the former single-paragraph MnmProcess block — the dense how-it-works wall is
 * split into four steps; the furniture enumeration moved to `ladenTypische`.
 */
export const ladenSteps = {
  eyebrow: "In vier Schritten",
  heading: "Ladenbau, alles aus einer Hand",
  image: "/images/2025/11/DSC_0001.jpg",
  imageAlt: "Maßgefertigter Empfangs- und Thekenbereich",
  offsetSteps: true,
  steps: [
    {
      title: "Beratung & kostenloses Aufmaß",
      description:
        "Wir hören zu, nehmen Ihre Fläche vor Ort auf und klären Sortiment, Warenfluss und Ihr Corporate Design.",
    },
    {
      title: "Technische 3D-Planung",
      description:
        "Sie sehen Materialien, Farben und Anordnung Ihrer Verkaufsfläche, bevor etwas gebaut wird, und geben die Planung frei.",
    },
    {
      title: "Fertigung im eigenen Werk",
      description:
        "Wir fertigen in Espelkamp auf Homag-Technologie, mit PU-Kantenverleimung an den stark belasteten Stoßkanten. Made in Germany.",
    },
    {
      title: "Montage durch unser Team",
      description:
        "Unser eigenes Team montiert bei Ihnen, auf Wunsch außerhalb Ihrer Öffnungszeiten. Ein fester Ansprechpartner begleitet Sie bis zur Abnahme.",
    },
  ],
  note: "Einen verbindlichen Termin nennen wir nach Aufmaß und Freigabe, nicht ins Blaue hinein.",
};

export const ladenTypische = {
  heading: "Welche Ladenmöbel wir nach Maß bauen",
  image1: "/images/2025/11/DSC_9934.jpg",
  image1Alt: "Beleuchtete Ladenregale nach Maß mit integriertem Lichtkonzept",
  image2: "/images/2025/11/20181220_075204314_iOS-scaled.jpg",
  image2Alt: "Gastronomie-Einrichtung nach Maß",
  row1: [
    {
      title: "Verkaufstheke & Kassenzone",
      description:
        "Die Verkaufstheke ist der Mittelpunkt jeder Fläche und am Point of Sale am stärksten beansprucht. Wir bauen Ladentheken mit durchdachtem Stauraum, robusten Oberflächen und integrierter Kassen- und Wäge-Technik, an den Stoßkanten mit fugenloser, feuchtigkeitsbeständiger PU-Kantenverleimung. So hat hinter der Theke jeder Handgriff seinen Platz, von der Kasse bis zur Verpackung.",
    },
    {
      title: "Ladenregale & Wandsysteme",
      description:
        "Verkaufsregale und Wandsysteme, die Ihre Ware in Szene setzen: flexibel bestückbar, modular erweiterbar und exakt auf Sortiment und Fläche zugeschnitten. So bleibt Ihre Warenpräsentation übersichtlich und lässt sich umbauen, wenn das Sortiment wechselt oder die Saison dreht.",
    },
    {
      title: "Schaufenster & Shopkonzept",
      description:
        "Von der Schaufenstergestaltung über Mittelraummöbel und Vitrinen bis zur kompletten Shopkonzeption mit Lichtkonzept und Innenausbau. Ein stimmiges Konzept, das Ihre Marke im Raum erlebbar macht und die Verweildauer Ihrer Kunden erhöht.",
    },
  ],
  row2: [
    {
      title: "Vitrinen & Präsentationsmöbel",
      description:
        "Vitrinen, Mittelraummöbel und Präsentationstische, die einzelne Stücke gezielt in Szene setzen und Ihre Ware zum Anfassen einladen.",
    },
    {
      title: "Umkleide & Anprobe",
      description:
        "Umkleidekabinen und Anprobebereiche, blickdicht und solide gebaut, als fester und belastbarer Teil Ihrer Ladeneinrichtung.",
    },
    {
      title: "Stauraum & Backoffice",
      description:
        "Rückwärtige Schränke sowie Lager- und Stauraumlösungen, die Nachschub und Verpackung griffbereit halten, ohne die Verkaufsfläche zu verstellen.",
    },
  ],
};

/**
 * Branchen-Block (shared SegmentCards). Pflicht-Modul lt. Research-Kit §3 als
 * Tiefe-/Entity-Fläche (Branchen-Begriffe aus der WDF·IDF-Liste). BEWUSST OHNE
 * Links auf die Geschwister-Cluster: internal-linking.md §"Silo integrity"
 * verbietet Cluster→Cluster lateral; die Verteilung läuft über den /gewerbe/-Hub.
 */
export const ladenSegments = {
  eyebrow: "Für Ihre Branche",
  heading: "Für welche Branchen wir Läden bauen",
  intro:
    "Jede Branche stellt eigene Anforderungen an Warenfluss, Belastbarkeit und Auftritt. Vom Modegeschäft bis zur Filialkette planen wir Ihre Ladeneinrichtung passend zu Sortiment und Marke.",
  segments: [
    {
      title: "Einzelhandel & Boutique",
      body: "Verkaufstheken, Wandregale und Präsentationsflächen für Mode, Schmuck, Buch oder Concept Store, abgestimmt auf Sortiment, Laufwege und Warenpräsentation.",
    },
    {
      title: "Lebensmittel & Markt",
      body: "Robuste Theken, Regale und Kühlmöbel-Umbauten für den Lebensmitteleinzelhandel, gebaut für hohe Frequenz und tägliche Reinigung am Point of Sale.",
    },
    {
      title: "Gastronomie & Hotellerie",
      body: "Tresen, Rückbuffets und Lobby-Möbel für Café, Restaurant und Hotel, langlebig gebaut für den Dauereinsatz.",
    },
    {
      title: "Praxis & Gesundheit",
      body: "Anmeldetresen und Einrichtung für Arztpraxen, Therapie- und Pflegebereiche, reinigbar und auf ruhige Abläufe ausgelegt.",
    },
    {
      title: "Büro & Dienstleister",
      body: "Empfangstresen und Büromöbel für Kanzleien, Agenturen und Dienstleister, die Kompetenz ausstrahlen und Abläufe ordnen.",
    },
    {
      title: "Filialisten & Ketten",
      body: "Wiederholbare Markeninseln und komplette Filialausstattung in gleichbleibender Qualität über jeden Standort hinweg.",
    },
  ],
};

/**
 * USP-Beweis-Block (shared UspHighlight). Hebt den stärksten, belegbaren
 * Differenzierer (PU-Kantenverleimung, fugenlos/feuchtigkeitsbeständig) aus dem Warum-Absatz
 * in eine eigene luftige Sektion. Material-Pflichtbaustein lt. Research-Kit §3/§4.
 */
export const ladenUsp = {
  eyebrow: "Gebaut für den Kundenverkehr",
  heading: "Eine Kante ohne Fuge, gebaut für harten Alltag",
  body:
    "An Theken, Regalen und Tresen bekommen die Kanten täglich Stöße, Spritzwasser und Reinigung ab, genau dort entscheidet sich die Langlebigkeit. Die stark beanspruchten Stoßkanten verleimen wir im PU-Verfahren: Das verschließt sie fugenlos und feuchtigkeitsbeständig, statt sie nur aufzukleben. Zusammen mit Massivholz und hochwertigen Trägermaterialien bleibt Ihre Ladeneinrichtung über Jahre formstabil, auch dort, wo am Point of Sale am meisten los ist.",
  image: "/images/2025/11/IMG_9120-scaled.jpg",
  imageAlt:
    "Saubere Massivholz-Kante mit dichter Kantenverleimung an einem maßgefertigten Möbel",
};

export const ladenWarum = {
  heading: "Maßanfertigung statt Systemregal",
  paragraph:
    "Systemanbieter liefern Konfektion aus dem Katalog, ein Möbelhaus verkauft, was im Lager steht. Wir bauen Ihre Ladeneinrichtung selbst im Meisterbetrieb in Espelkamp, ohne Subunternehmer: Wand zu Wand ohne Passleisten, aus Massivholz und hochwertigen Materialien, die dem Kundenverkehr über Jahre standhalten. Gefertigt wird auf eigenem Maschinenpark mit Homag-Technologie, die Qualität kontrollieren wir selbst, und gerichtet wird sich nach Ihrem Corporate Design.",
  images: [
    { src: "/images/2025/11/DSC_9965.jpg", alt: "Moderne Ladeneinrichtung", width: 600, height: 450 },
    { src: "/images/2025/11/DSC_9938.jpg", alt: "Maßgefertigte Ladeneinrichtung vom Tresen bis zur Shopfläche", width: 600, height: 400 },
    { src: "/images/2025/11/20230814_155316228_iOS-scaled.jpg", alt: "Empfangsbereich mit Holzlamellenwand", width: 600, height: 800 },
    { src: "/images/2025/11/DSC_9843.jpg", alt: "Integrierte Technik im Möbel", width: 600, height: 420 },
    { src: "/images/2025/11/DSC_0001.jpg", alt: "Maßgefertigter Empfangs- und Thekenbereich", width: 600, height: 380 },
    { src: "/images/2025/11/20181220_075204314_iOS-scaled.jpg", alt: "Gastronomie-Mobiliar nach Maß", width: 600, height: 450 },
  ],
};

/**
 * Vergleichstabelle (shared SpecTable). Hebt den „warum Maßanfertigung"-Vergleich
 * aus der Fließtext-Sektion heraus in einen zitierbaren AEO-Container. Keine Preise.
 */
export const ladenVergleich = {
  heading: "Maßanfertigung, System oder Möbelhaus?",
  intro:
    "Drei Wege zur Ladeneinrichtung, drei Ergebnisse. Was eine Maßanfertigung vom Meisterbetrieb von Systembausatz und Möbelhaus-Konfektion unterscheidet.",
  firstColLabel: "Kriterium",
  columns: [
    "Maßanfertigung vom Meisterbetrieb (Fast)",
    "Systembausatz / Katalogregal",
    "Möbelhaus / Konfektion",
  ],
  highlightColumn: 0,
  rows: [
    {
      label: "Passform",
      values: [
        "Wand zu Wand ohne Passleisten, jede Nische genutzt",
        "feste Raster, Lücken und Blenden",
        "Standardmaße, selten exakt",
      ],
    },
    {
      label: "Material & Langlebigkeit",
      values: [
        "Massivholz + hochwertige Materialien, PU-Kante an Stoßkanten",
        "je nach Serie, oft beschichtete Platten",
        "wechselnd, oft auf Privatnutzung ausgelegt",
      ],
    },
    {
      label: "Markenbezug (CI)",
      values: [
        "Logo, Farben, Material nach Ihrem Corporate Design",
        "kaum anpassbar",
        "begrenzt",
      ],
    },
    {
      label: "Beratung & Planung",
      values: [
        "Aufmaß vor Ort + 3D-Planung, ein fester Ansprechpartner",
        "Selbst- / Online-Planung",
        "Verkaufsberatung",
      ],
    },
    {
      label: "Fertigung",
      values: [
        "eigener Meisterbetrieb in Espelkamp, ohne Subunternehmer",
        "industrielle Serie",
        "Zukauf",
      ],
    },
    {
      label: "Montage",
      values: [
        "eigenes Team, auf Wunsch im laufenden Betrieb",
        "Selbstmontage / Fremddienstleister",
        "externe Monteure",
      ],
    },
  ],
};

/**
 * Kostentreiber-Tabelle (shared SpecTable). Beantwortet „Was kostet das?" ohne
 * €-Pauschale und nimmt den Preis-Absatz aus der Warum-Sektion auf (FACTS-sauber).
 */
export const ladenKosten = {
  heading: "Was kostet Ladenbau nach Maß?",
  intro:
    "Eine Pauschale pro Quadratmeter nennen wir bewusst nicht, jede Fläche, jedes Sortiment und jeder Ausbaugrad ist anders. Diese sechs Faktoren bestimmen den Preis. Nach dem kostenlosen Aufmaß bekommen Sie ein Angebot, Position für Position kalkuliert.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was den Preis bestimmt"],
  rows: [
    {
      label: "Raumgröße & Möbelumfang",
      values: ["Lauf- und Flächenmeter, Anzahl Theken, Regale und Tresen"],
    },
    {
      label: "Materialwahl",
      values: ["Massivholz, Dekore, Oberflächen, Beschläge"],
    },
    {
      label: "Technik & Beleuchtung",
      values: ["integrierte Kassen- und Wäge-Technik, Lichtkonzept"],
    },
    {
      label: "Baulicher Innenausbau",
      values: ["Boden, Wand, Decke, Trennwände"],
    },
    {
      label: "Corporate Design",
      values: ["Logo-Integration, Sonderfarben, Sonderanfertigungen"],
    },
    {
      label: "Montageaufwand",
      values: ["Anfahrt im rund 200-km-Radius, Montage im laufenden Betrieb"],
    },
  ],
};

/**
 * Möbelplaner block (shared MnmMoebelplaner section). NEW export — trägt den
 * Pflicht-Link auf /moebelplaner/. Muss in page.tsx verdrahtet werden:
 * `<MnmMoebelplaner {...ladenMoebelplaner} />` (analog gastronomieeinrichtung).
 */
export const ladenMoebelplaner = {
  heading: "Ihre Ladeneinrichtung online vorab planen",
  body:
    "Im Möbelplaner stellen Sie einzelne Elemente Ihrer Ladeneinrichtung selbst zusammen, etwa Theke, Regale und Anordnung. Maße, Oberflächen, Fronten und Auszüge sehen Sie direkt im 3D-Konfigurator, so bekommen Sie schnell eine erste Orientierung für Ihre Fläche. Den Rest übernehmen wir: kostenloses Aufmaß vor Ort, Beratung zu Material und Corporate Design, Fertigung und Montage. Aus Ihrer Online-Planung wird eine Ladeneinrichtung nach Maß. Sie möchten lieber gleich sprechen? Dann erreichen Sie uns telefonisch unter 05771 9138312.",
  ctaLabel: "Ladeneinrichtung selbst planen",
  ctaHref: "/moebelplaner/",
  image: "/images/2025/11/DSC_9814.jpg",
  imageAlt: "Maßgefertigter Verkaufstresen im Einzelhandel",
};

export const ladenGeschichte = {
  heading: "Ein Meisterbetrieb aus OWL, der Geschäftsräume versteht",
  subheading: "Vom Garagenbetrieb zum Partner für Ladenbau",
  anchorImage: "/images/2025/11/20230814_155316228_iOS-scaled.jpg",
  anchorImageAlt: "Maßgefertigter Innenausbau für Geschäftsräume — Fast Systemmöbel Espelkamp",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "200 km", label: "Montage-Radius" },
    { value: "bundesweit", label: "Lieferung" },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 in einer Garage in Rahden-Tonnenheide. 2001 zog die Fertigung nach Espelkamp, wo wir heute auf über 1.000 m² mit Homag-Technologie und einem eingespielten Team arbeiten. Seit 2010 stehen mit Andreas und Peter Fast die Nachkommen des Gründers Johann Fast im Betrieb, ein echter Familienbetrieb in zweiter Generation. Über 72.000 gefertigte Einzelteile stehen für diese Erfahrung.",
    "Was im Möbelbau für Privatkunden entstand, zahlt sich im Gewerbe doppelt aus: Wir kennen die Anforderungen an Belastbarkeit, Termintreue und Funktion, die ein Ladenbau-Projekt mitbringt, und planen entsprechend praxisnah. Für die Umkleide- und Spielerkabine von Arminia Bielefeld haben wir den kompletten Innenausbau übernommen, ein Beleg dafür, dass unsere Einbauten auch hoher Beanspruchung standhalten.",
    "Vom einzelnen Tresen über die Boutique bis zur Filialausstattung in Serie fertigen wir in Espelkamp, montieren im Umkreis von rund 200 km und liefern deutschlandweit. Mehr Projekte aus dem Einzelhandel und Gewerbe finden Sie in unseren Referenzen.",
  ],
};

/** Final-CTA + intro-CTA expanding image blocks (shared ExpandingImageCta). */
export const ladenCtas = {
  intro: {
    image: "/images/2025/11/DSC_9814.jpg",
    heading: "Ihr Geschäft verdient mehr als Standardmöbel.",
    linkText: "Sprechen Sie mit uns über Ihr Ladenbau-Projekt",
    href: "/kontakt/",
  },
  final: {
    image: "/images/2025/11/DSC_9938.jpg",
    heading: "Vom Tresen bis zur Shopfläche.",
    linkText: "Ladenbau-Projekt unverbindlich anfragen.",
    href: "/kontakt/",
  },
};

/** Testimonials + FAQ render via the shared service sections. */
export const ladenTestimonialsHeading = "Was unsere Gewerbekunden sagen";

export const ladenFaq = {
  heading: "Häufige Fragen zum Ladenbau nach Maß",
  items: [
    {
      question: "Was kostet Ladenbau nach Maß?",
      answer:
        "Eine Pauschale pro Quadratmeter nennen wir bewusst nicht, denn jede Verkaufsfläche, jedes Sortiment und jeder Ausbaugrad ist anders. Den Preis bestimmen vor allem Raumgröße und Möbelumfang, die Materialwahl, Technik und Beleuchtung sowie der Aufwand für baulichen Innenausbau und Corporate Design. Nach dem kostenlosen Aufmaß vor Ort bekommen Sie von uns ein individuelles Angebot mit transparenter Material- und Kostenübersicht, ohne erfundene Richtwerte.",
    },
    {
      question: "Was versteht man unter Ladenbau nach Maß?",
      answer:
        "Ladenbau nach Maß ist die individuell geplante und gefertigte Ladeneinrichtung, im Gegensatz zum Standard- oder Systemregal aus dem Katalog. Statt fertiger Module bauen wir Verkaufstheken, Ladenregale und Empfangstresen passgenau für Ihren Grundriss, Wand zu Wand ohne Passleisten und abgestimmt auf Ihr Sortiment und Ihre Marke.",
    },
    {
      question: "Welche Möbel können im Ladenbau nach Maß gefertigt werden?",
      answer:
        "So gut wie alles, was Ihre Verkaufsfläche braucht: Verkaufstheke und Kassenzone, Ladenregale und Wandsysteme, Mittelraummöbel, Vitrinen und Präsentationsmöbel, Empfangstresen, Umkleidekabinen und Stauraum. Vom Einzelstück bis zur kompletten Geschäftsausstattung kommt alles aus einer Hand.",
    },
    {
      question: "Wie läuft ein Ladenbau-Projekt ab?",
      answer:
        "In vier Schritten: Beratung und kostenloses Aufmaß vor Ort, technische 3D-Planung Ihrer Verkaufsfläche zur Freigabe, Fertigung im eigenen Werk in Espelkamp und Montage durch unser eigenes Team. So sehen Sie Materialien und Anordnung, bevor gebaut wird, und behalten den Überblick über Material und Kosten.",
    },
    {
      question: "Wie lange dauert ein Ladenbau-Projekt von der Anfrage bis zur Eröffnung?",
      answer:
        "Das hängt von Umfang und Ausbaugrad ab, eine einzelne Theke ist schneller fertig als eine komplette Shopkonzeption. Einen verbindlichen Termin nennen wir nach dem Aufmaß und der Freigabe der Planung, nicht ins Blaue hinein. So bekommen Sie eine Zusage, auf die Sie Ihre Neueröffnung oder Ihren Ladenumbau auch wirklich planen können.",
    },
    {
      question: "Für welche Branchen ist Ladenbau nach Maß geeignet?",
      answer:
        "Für Einzelhandel und Boutique, Gastronomie und Hotellerie, Praxis und Gesundheit sowie Büro und Dienstleister. Für die angrenzenden Bereiche finden Sie eigene Seiten zu Gastronomieeinrichtung nach Maß, Praxiseinrichtung und Büroeinrichtung nach Maß.",
    },
    {
      question: "Welche Materialien verwenden Sie, und warum Massivholz und PU-Kantenverleimung?",
      answer:
        "Wir arbeiten mit Massivholz und branchenüblichen, hochwertigen Materialien, die der hohen Beanspruchung im Kundenverkehr standhalten. An den stark belasteten Stoßkanten verleimen wir die Kanten im PU-Verfahren, das macht sie fugenlos und feuchtigkeitsbeständig. Gerade an Theken und Regalen, die täglich Stöße abbekommen, zahlt sich das aus.",
    },
    {
      question: "Übernehmen Sie auch die Planung und eine 3D-Visualisierung vor der Fertigung?",
      answer:
        "Ja. Beratung, Aufmaß und eine technische 3D-Planung gehören zum Prozess. Sie sehen Ihre Ladeneinrichtung mit Materialien, Farben und Anordnung, bevor wir mit der Fertigung beginnen, und geben die Planung frei.",
    },
    {
      question: "Kann ich meine bestehende Ladeneinrichtung umbauen oder ergänzen lassen?",
      answer:
        "Ja. Wir richten nicht nur neu ein, sondern ergänzen und bauen auch bestehende Ladeneinrichtungen um, auf Wunsch im laufenden Betrieb oder außerhalb Ihrer Öffnungszeiten. So bleibt Ihr Geschäft während des Ladenumbaus so kurz wie möglich geschlossen.",
    },
    {
      question: "Passt Ihr Ladenbau zu unserem Corporate Design?",
      answer:
        "Ja. Wir setzen Ihr Corporate Design um, von Farben und Materialien bis zur Logo-Integration am Point of Sale. Liegt das Designkonzept bei Ihnen oder Ihrem Architekten, arbeiten wir danach. Wollen Sie das nicht selbst liefern, machen wir aktiv eigene Gestaltungs- und Materialvorschläge.",
    },
    {
      question: "Wie weit liefern und montieren Sie?",
      answer:
        "Geliefert wird deutschlandweit. Montiert wird im Umkreis von rund 200 km um Espelkamp, in Ostwestfalen-Lippe, Niedersachsen und der Region, mit eigenem Montageteam und ohne Subunternehmer. Ob Ihr Standort im Montagegebiet liegt, klären wir kurz im Erstgespräch.",
    },
    {
      question: "Was unterscheidet Ladenbau nach Maß von Systemregalen aus dem Katalog?",
      answer:
        "Passform, Langlebigkeit und Markenbezug. Maßgefertigte Ladenmöbel sitzen Wand zu Wand ohne Lücken, nutzen jede Nische und sind aus Materialien gebaut, die dem Dauereinsatz standhalten. Ein Systemregal ist Konfektion in festen Rastern. Unsere Ladeneinrichtung ist ein Unikat für Ihre Fläche und Ihre Marke.",
    },
    {
      question: "Was ist der Unterschied zwischen Ladenbau und Ladeneinrichtung?",
      answer:
        "Die Begriffe überschneiden sich stark. Ladeneinrichtung meint die Möbel und Einbauten selbst, also Theke, Regale, Vitrinen und Tresen. Ladenbau ist der weiter gefasste Begriff und schließt bei uns auch Planung, baulichen Innenausbau, Lichtkonzept und Schaufenstergestaltung ein, also das ganze Shopkonzept.",
    },
    {
      question: "Wie beeinflusst die Ladeneinrichtung das Kaufverhalten der Kunden?",
      answer:
        "Eine durchdachte Ladeneinrichtung steuert die Customer Journey: Sie führt Kunden durch den Raum, rückt mit gutem Zoning und Licht die richtige Ware in den Blick und schafft eine Atmosphäre, in der Kunden gern verweilen. Längere Verweildauer und eine klare Warenpräsentation am Point of Sale wirken sich erfahrungsgemäß positiv auf den Umsatz aus.",
    },
    {
      question: "Bauen Sie auch einzelne Stücke wie nur eine Theke, oder nur komplette Läden?",
      answer:
        "Beides. Wir fertigen vom einzelnen Empfangstresen oder der einzelnen Verkaufstheke bis zur schlüsselfertigen Komplett-Einrichtung. Für Filialisten und Einzelhandelsketten liefern wir Ladeneinrichtung auch in Serie, wiederholbar und in gleichbleibender Qualität.",
    },
    {
      question: "Kann ich meine Ladeneinrichtung vorab selbst planen?",
      answer:
        "Ja. Im Möbelplaner können Sie Ihre Ideen für Theke, Regale und Anordnung selbst anlegen und uns als Grundlage fürs Gespräch schicken. Lieber direkt sprechen? Dann nehmen Sie unverbindlich Kontakt auf oder rufen Sie uns unter 05771 9138312 an.",
    },
  ],
};
