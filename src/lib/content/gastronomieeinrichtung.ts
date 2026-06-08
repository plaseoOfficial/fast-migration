/**
 * Content for the `/gastronomieeinrichtung/` page. A B2B acquisition landing
 * page for "Gastronomieeinrichtung" (Möbel nach Maß für Restaurants, Cafés,
 * Bars, Hotels und Kantinen). Reuses the same library sections as the Privat
 * page recipe (see docs/sections/CATALOG.md); only the copy is swapped.
 * Eigenständiger Gewerbe-Ast, ergänzt das B2B-Pillar.
 *
 * Voice = Fast Systemmöbel (sachlich-handwerklich, "aus einer Hand", Sie-Form).
 * Fakten (FACTS.md): seit 1996 (Gründung Rahden-Tonnenheide, ab 2001 Espelkamp),
 * Meisterbetrieb (KEIN Jahr), Familie Fast in 2. Generation (Andreas & Peter seit
 * 2010), über 1.000 m² Fertigung, Homag-/CNC-Technologie, ~200 km Montageradius,
 * Lieferung bundesweit. WICHTIG (Kunden-Discovery 2026-06-06): Gastro-Leistung =
 * NUR Möbelbau + präzise Technik-Aussparungen; die Technik (Kühlung, Zapfanlage,
 * Spülen) installiert der Fachbetrieb des Kunden — KEIN Technik-Einbau durch Fast.
 * Gewerbe → keine Finanzierung. Außenmöbel/Biergarten: ja.
 */

export const gastroHero = {
  bgImage: "/images/2025/11/DSC_9938.jpg",
  imageAlt:
    "Gastronomieeinrichtung nach Maß: massive Holztheke für ein Restaurant von Fast Systemmöbel",
  title: "Gastronomieeinrichtung nach Maß aus Espelkamp",
  intro:
    "Im Gastraum zählt jeder Quadratmeter. Wir planen und bauen Ihre Gastronomieeinrichtung nach Maß: Theken, Rückbuffets, Sitzbänke und Hotelmöbel, ausgelegt auf den täglichen Dauereinsatz. Gefertigt im eigenen Meisterbetrieb in Espelkamp, montiert von unserem Team in OWL und bundesweit geliefert.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Gewerbe", href: "/gewerbe/" },
    { label: "Gastronomieeinrichtung" },
  ],
};

export const gastroIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Möbel nach Maß.",
  heading: "Gastronomieeinrichtung, die Ihren Betrieb trägt",
  introBefore:
    "Von der ersten",
  introBold: "Planung",
  introAfter:
    " bis zur fertigen Montage – alles aus einer Hand.",
  bandImage: "/images/2025/11/IMG_2673-scaled.jpg",
  bandAlt: "Maßgefertigte Theke und Service-Station in einem Gastronomiebetrieb",
  col1Title: "Gastraum planen",
  col1Body:
    "Wir entwickeln Ihre Einrichtung nach Grundriss, Laufweg und Gästezahl: Theke, Rückbuffet, Sitzbank und Ausgabebereich, millimetergenau geplant und auf den Stoßbetrieb ausgelegt.",
  col1CtaLabel: "Gastro-Projekt unverbindlich anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Vom einzelnen Bartresen bis zur kompletten Einrichtung bekommen Sie alles aus einer Hand: Beratung, Aufmaß, 3D-Planung, Fertigung und Montage. Als Meisterbetrieb arbeiten wir ohne Zwischenhändler.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montageradius um Espelkamp",
  col3Body:
    "Wir montieren im Umkreis von rund 200 km, etwa in Minden, Lübbecke, Bielefeld, Hannover und Osnabrück. Größere Objekte und Hotels liefern wir bundesweit.",
  col3CtaLabel: "Ihre Gastronomie selbst planen",
  col3CtaHref: "/moebelplaner/",
};

export const gastroProcess = {
  eyebrow: "In fünf Schritten",
  heading: "Vom Aufmaß bis zur Montage",
  image: "/images/2025/11/IMG_2772-scaled.jpg",
  imageAlt:
    "Maßgefertigte Bar mit Rückbuffet und vorbereiteten Technik-Aussparungen",
  steps: [
    {
      title: "Beratung & kostenloses Aufmaß",
      description:
        "Wir kommen zu Ihnen, nehmen vor Ort Maß und klären, was Ihr Gastraum braucht.",
    },
    {
      title: "3D-Planung",
      description:
        "Sie sehen Ihren Gastraum digital, inklusive Aussparungen und Maßen für Ihre Technik, bevor das erste Brett geschnitten ist.",
    },
    {
      title: "Fertigung in Espelkamp",
      description:
        "Alle Teile entstehen in Eigenregie in unserem Meisterbetrieb, ohne Zwischenhändler.",
    },
    {
      title: "Montage durch unser Team",
      description:
        "Auf Wunsch am Ruhetag, nachts oder in Etappen, damit Ihr Betrieb so kurz wie möglich schließt.",
    },
    {
      title: "Gemeinsame Abnahme",
      description:
        "Wir übergeben fertig und nehmen mit Ihnen ab. Ein fester Ansprechpartner begleitet Sie vom ersten Gespräch an.",
    },
  ],
  note:
    "Klar abgegrenzt: Wir bauen den Tresen als Möbelstück und arbeiten Aussparungen für Kühlung, Zapfanlage oder Spüle präzise ein. Die Technik selbst installiert Ihr Fachbetrieb.",
};

export const gastroSegments = {
  eyebrow: "Für Ihren Betrieb",
  heading: "Für welche Gastronomie wir planen",
  intro:
    "Jeder Betrieb stellt eigene Anforderungen an Laufwege, Hygiene und Belastbarkeit. Diese nehmen wir in die Planung auf.",
  segments: [
    {
      title: "Restaurant & Bistro",
      body: "Theken, Sitzbänke und feste Bestuhlung, ausgelegt auf Laufwege und Stoßbetrieb im Service.",
    },
    {
      title: "Café & Bar",
      body: "Bartresen und Rückbuffet mit kurzen Wegen, damit der Ablauf auch im vollen Haus flüssig bleibt.",
    },
    {
      title: "Hotel & Lobby",
      body: "Empfangstresen, Lobby- und Zimmermöbel in Serie, einheitlich gefertigt vom ersten bis zum letzten Zimmer.",
    },
    {
      title: "Kantine & Betriebsgastronomie",
      body: "Ausgabetheken und Bestuhlung aus pflegeleichten Materialien, gebaut für hohe Frequenz zur Mittagszeit.",
    },
    {
      title: "Terrasse & Biergarten",
      body: "Wetterfeste Außenmöbel und Außenbestuhlung, passend zu Material und Konzept Ihres Außenbereichs.",
    },
  ],
};

export const gastroUsp = {
  eyebrow: "Gebaut für den Dauereinsatz",
  heading: "Kanten, die kein Wasser durchlässt",
  body:
    "Unsere PU-Kantenverleimung verschließt die Kanten fugenlos und nahezu wasserfest. Eine Musterkante haben wir 24 Stunden unter Wasser getaucht, ohne dass sie aufquillt. Verschüttete Getränke, tägliche Reinigung und Spritzwasser am Rückbuffet hinterlassen so keine aufgequollenen Ränder.",
  stat: { value: "24 h", label: "unter Wasser getaucht, ohne aufzuquellen" },
  image: "/images/2025/11/DSC_9843.jpg",
  imageAlt: "Massivholz-Oberfläche eines maßgefertigten Thekenmöbels mit dichter PU-Kante",
};

export const gastroTypische = {
  heading: "Was wir für die Gastronomie fertigen",
  image1: "/images/2025/11/IMG_2673-scaled.jpg",
  image1Alt: "Maßgefertigte Theke in einem Restaurant",
  image2: "/images/2025/11/DSC_9938.jpg",
  image2Alt: "Bar mit Rückbuffet nach Maß",
  row1: [
    {
      title: "Theke, Bartresen und Empfang",
      description:
        "Der Mittelpunkt im Service. Wir bauen den Tresen als Möbelstück mit robusten Oberflächen und durchdachtem Stauraum und arbeiten Aussparungen für Ihre Technik millimetergenau ein. So hat jede Bewegung hinter der Theke ihren Platz, von der Kasse bis zum Gläserregal.",
    },
    {
      title: "Rückbuffet und Buffettheke",
      description:
        "Arbeitszeilen hinter der Theke mit kurzen Wegen. Geplant für Gläser, Geschirr und Maschinen und auf einen schnellen Ablauf im Stoßbetrieb ausgelegt, damit Ihr Team auch im vollen Haus nicht ins Stocken gerät.",
    },
    {
      title: "Sitzbank und feste Bestuhlung",
      description:
        "Wandbänke, Bankettierung und feste Sitzgruppen, strapazierfähig gepolstert und exakt auf Ihren Grundriss und Ihre Tischabstände gebaut. So bringen Sie mehr Gäste unter, ohne dass es eng wirkt.",
    },
  ],
  row2: [
    {
      title: "Hotelmöbel und Lobby",
      description:
        "Zimmermöbel, Empfangstresen und Lobby-Einrichtung in Serie. Einheitlich gefertigt für viele Zimmer und ausgelegt auf den Gästebetrieb, vom ersten bis zum letzten Zimmer im selben Stil.",
    },
    {
      title: "Kantine und Ausgabe",
      description:
        "Ausgabetheken und Bestuhlung für Kantinen und Betriebsrestaurants aus Massivholz und pflegeleichten Materialien, hygienisch verarbeitet und leicht zu reinigen, gebaut für hohe Frequenz zur Mittagszeit.",
    },
    {
      title: "Außenbereich und Sonderbau",
      description:
        "Wetterfeste Außenmöbel und Außenbestuhlung für Terrasse und Biergarten, dazu Wandverkleidung, Garderobe und Sonderlösungen. Auch ungewöhnliche Maße und Formen setzen wir um, wo Serienmöbel an ihre Grenzen kommen.",
    },
  ],
};

export const gastroWarum = {
  heading: "Tischlerei statt Gastro-Online-Shop",
  paragraph:
    "Im Gastro-Online-Shop und im Möbelhaus kaufen Sie Serienmöbel aus dem Katalog: feste Maße, begrenzte Materialien, Beratung und Aufbau meist getrennt. Wo Ihre Wand 4,12 Meter misst, bleibt am Ende eine Lücke oder eine Passleiste. Wir bauen stattdessen jede Theke, jedes Rückbuffet und jede Sitzbank selbst in Espelkamp, passgenau von Wand zu Wand. Planung, Fertigung, Lieferung und Montage liegen bei einem Ansprechpartner, mit eigenem Montageteam und ohne Subunternehmer.",
  images: [
    { src: "/images/2025/11/DSC_9938.jpg", alt: "Bar mit Rückbuffet nach Maß", width: 600, height: 450 },
    { src: "/images/2025/11/IMG_2772-scaled.jpg", alt: "Maßgefertigter Bartresen mit vorbereiteten Technik-Aussparungen", width: 600, height: 800 },
    { src: "/images/2025/11/IMG_2673-scaled.jpg", alt: "Restauranttheke aus Massivholz nach Maß", width: 600, height: 400 },
    { src: "/images/2025/11/DSC07156-scaled.jpg", alt: "Wandbank und feste Bestuhlung im Gastraum", width: 600, height: 800 },
    { src: "/images/2025/11/DSC_9843.jpg", alt: "Massivholz-Oberfläche eines maßgefertigten Thekenmöbels", width: 600, height: 380 },
    { src: "/images/2025/11/IMG_6123-scaled.jpg", alt: "Hotellobby mit Empfangstresen nach Maß", width: 600, height: 450 },
  ],
};

export const gastroGeschichte = {
  heading: "Ein Meisterbetrieb für den Gastraum",
  subheading: "Vom Garagenbetrieb zum Partner für Gastronomie",
  anchorImage: "/images/2025/11/IMG_6123-scaled.jpg",
  anchorImageAlt:
    "Hotellobby mit Empfangstresen nach Maß, gefertigt von Fast Systemmöbel in Espelkamp",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "200 km", label: "Montage-Radius" },
    { value: "4.000+", label: "Projekte gefertigt" },
  ],
  paragraphs: [
    "Angefangen hat Fast Systemmöbel 1996 als Ein-Mann-Betrieb in einer Garage in Rahden-Tonnenheide. 2001 zog die Fertigung nach Espelkamp. Heute führt die Familie Fast den Betrieb in zweiter Generation und fertigt auf über 1.000 m² mit moderner CNC-Technik.",
    "In Ostwestfalen-Lippe haben wir bereits Gastronomiebetriebe eingerichtet, vom einzelnen Bartresen bis zur Hoteleinrichtung. Wir wissen, was eine Einrichtung im Gastraum aushalten muss: Belastbarkeit, Hygiene und Termintreue über Jahre. Beispielprojekte finden Sie in unseren Referenzen.",
  ],
};

export const gastroMoebelplaner = {
  heading: "Ihre Gastro-Möbel online planen",
  body:
    "Mit unserem Möbelplaner stellen Sie einzelne Elemente online zusammen und sehen Maße, Oberflächen und Fronten direkt im 3D-Konfigurator. Den Rest übernehmen wir: kostenloses Aufmaß, Beratung, Fertigung und Montage. Lieber gleich sprechen? Rufen Sie uns an unter 05771 9138312.",
  ctaLabel: "Möbelplaner ausprobieren",
  ctaHref: "/moebelplaner/",
  image: "/images/2025/11/IMG_2772-scaled.jpg",
  imageAlt:
    "Maßgefertigter Bartresen mit vorbereiteten Technik-Aussparungen",
};

export const gastroCtas = {
  intro: {
    image: "/images/2025/11/IMG_2673-scaled.jpg",
    heading: "Ihr Gastraum verdient mehr als Massenware.",
    linkText: "Sprechen Sie mit uns über Ihr Gastro-Projekt",
    href: "/kontakt/",
  },
  final: {
    image: "/images/2025/11/DSC_9938.jpg",
    heading: "Von der Theke bis zur Lobby: nach Maß gebaut.",
    linkText: "Gastronomie-Projekt jetzt unverbindlich anfragen",
    href: "/kontakt/",
  },
};

export const gastroTestimonialsHeading = "Was unsere Gastronomiekunden sagen";

export const gastroFaq = {
  heading: "Häufige Fragen zur Gastronomieeinrichtung nach Maß",
  items: [
    {
      question: "Was kostet eine Gastronomieeinrichtung nach Maß?",
      answer:
        "Einen Pauschalpreis gibt es bei Maßanfertigung nicht, weil jeder Gastraum anders zugeschnitten wird. Den Preis treiben vor allem die Fläche, der Möbelumfang, Sonderanfertigungen wie ein Bartresen, das gewählte Material und der Montageaufwand. Nach dem kostenlosen Aufmaß erhalten Sie ein individuelles Angebot mit klarer Kostenübersicht, das wir Position für Position kalkulieren, statt mit einer runden Hausnummer.",
    },
    {
      question: "Bauen Sie auch die Technik in die Theke ein?",
      answer:
        "Wir bauen den Tresen als Möbelstück und arbeiten Aussparungen und Maße für Ihre Technik präzise ein, etwa für Kühlung, Zapfanlage oder Spüle. Die Technik selbst installiert Ihr Fachbetrieb. So passen Möbel und Gerätetechnik am Ende genau zusammen.",
    },
    {
      question: "Können Sie im laufenden Betrieb oder außerhalb der Öffnungszeiten montieren?",
      answer:
        "Ja. Auf Wunsch montieren wir am Ruhetag, nachts oder in Etappen, damit Ihr Betrieb so kurz wie möglich schließen muss. Den Ablauf stimmen wir vorab mit Ihnen ab.",
    },
    {
      question: "In welchem Gebiet liefern und montieren Sie, auch außerhalb von OWL?",
      answer:
        "Komplette Projekte mit Möbeln und Montage realisieren wir im Umkreis von rund 200 km um Espelkamp, etwa in Minden, Lübbecke, Bielefeld und Osnabrück. Größere Objekte und Hoteleinrichtungen liefern wir bundesweit; an die Montage durch unser Team ist der 200-km-Radius gebunden. Die Logistik klären wir im Angebot.",
    },
  ],
};
