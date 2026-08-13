/**
 * Content for the `/kuechen-nach-mass/kueche-planen/` page: the "Küche planen"
 * Ratgeber (cluster-article) under the Küchen-nach-Maß pillar
 * (`/kuechen-nach-mass/`). Built from shared library sections (MnmHero,
 * ProcessSteps, SpecTable ×2, SegmentCards, UspHighlight, MnmMoebelplaner,
 * FaqSection) so each section carries one topic (ARCHITECTURE.md §1.1). Copy is
 * a planning guide (Aufmaß, Küchenform, Arbeitsdreieck/Ergonomie, typische
 * Fehler, was der Tischler anders macht) — informational/AEO with a soft CTA, NOT
 * a pillar clone and NOT a form-product page (Cluster-Map „deckt NICHT ab").
 * Copy von der Authoring-Engine (Writer → Humanizer → QC&Fix → Chefredakteur),
 * 2026-08-12: 1713 W, 14 FAQ, 0 verbotene Claims, Chefredakteur pass.
 *
 * Faktentreue (FACTS.md + kundenwissen.md): keine Preise/€-Spannen, keine
 * Lieferzeit-Wochen, keine erfundenen Maß-Bandbreiten als Fast-Werte. Ergonomie-cm
 * sind allgemeines Planungswissen, nicht Fast-Fertigungsmaße. Küche ist
 * montage-gebunden (~200 km um Espelkamp, eigenes Team, kein Bausatz).
 * Brand voice: Sie-Anrede, konkret, belegt, keine em-dashes (BRAND_VOICE.md).
 *
 * Bilder: bestehende Fast-Küchenfotos aus dem Pillar-Bestand (Platzhalter, echte
 * Bild-Zuordnung siehe REVIEW.md Bild-Vorschläge). Alt-Texte beschreiben das Motiv.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/kuechen-nach-mass/kueche-planen/";

export const planenHero = {
  bgImage: "/images/2025/11/IMG_9387-scaled.jpg",
  imageAlt:
    "Küche nach Maß mit grifflosen Fronten und Holzrückwand als Beispiel für eine durchdachte Küchenplanung",
  title: "Küche planen: Schritt für Schritt zur eigenen Küche",
  intro:
    "Eine Küche planen Sie am besten von innen nach außen. Erst Raum und Anschlüsse aufmessen, dann die Küchenform zum Grundriss wählen und das Arbeitsdreieck aus Kühlschrank, Spüle und Herd festlegen. Danach teilen Sie Geräte und Stauraum ein, zuletzt kommen Material, Arbeitsplatte und Beleuchtung. Wer sich an diese Reihenfolge hält, umgeht die typischen Fehler und sitzt vorbereitet im Beratungsgespräch.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Küchen nach Maß", href: "/kuechen-nach-mass/" },
    { label: "Küche planen" },
  ],
};

/**
 * ProcessSteps (shared): the 7-step HowTo sequence (Kit §3 Modul 2). Drives
 * both the visible steps and the HowTo-JSON-LD. Reihenfolge = verbindlich:
 * Aufmaß zuerst, Material/Licht/Budget zuletzt.
 */
export const planenProcess = {
  eyebrow: "In sieben Schritten",
  heading: "So planen Sie Ihre Küche Schritt für Schritt",
  image: "/images/2025/11/20231204_095459232_iOS-scaled.jpg",
  imageAlt: "Moderne Küche nach Maß in Grau mit Kochinsel als Ergebnis einer durchdachten Planung",
  steps: [
    {
      title: "Raum aufmessen und Anschlüsse prüfen",
      description:
        "Messen Sie jede Wand in Länge und Höhe, dazu Fenster, Türen, Heizkörper, Nischen und Vorsprünge. Notieren Sie auch, wo Wasser, Abwasser, Starkstrom und die Abluft liegen. Am Anfang steht der Grundriss, nicht das Wunschgerät.",
    },
    {
      title: "Küchenform zum Grundriss wählen",
      description:
        "Küchenzeile, L-Form, U-Form, G-Form oder Insel: Welche Form passt, hängt von Raumgröße, Fensterlage und Ihren Laufwegen ab. Die Übersicht weiter unten ordnet jede Küchenform ihrer typischen Raumsituation zu.",
    },
    {
      title: "Arbeitsdreieck und Ergonomie festlegen",
      description:
        "Kühlschrank, Spüle und Herd ordnen Sie mit kurzen, freien Wegen zueinander an, das ist das Arbeitsdreieck. Die Arbeitshöhe richtet sich nach Ihrer Körpergröße. Davon hängt ab, wie rückenschonend sich die Küche später bedienen lässt.",
    },
    {
      title: "Geräte und Zonen platzieren",
      description:
        "Legen Sie feste Zonen für Vorräte, Spülen, Vorbereiten und Kochen fest und ordnen Sie Backofen, Kochfeld, Kühlschrank und Dunstabzug hinein. Die Geräte wählen Sie frei bei jedem Hersteller, wir planen sie passgenau ein.",
    },
    {
      title: "Material, Fronten und Arbeitsplatte wählen",
      description:
        "Jetzt kommen Fronten, Oberflächen und Arbeitsplatte an die Reihe, abgestimmt auf Nutzung und Optik. Robuste, pflegeleichte Materialien zahlen sich im Alltag aus. Unsere Kanten verleimen wir fugenlos, das macht sie feuchtigkeitsbeständig.",
    },
    {
      title: "Beleuchtung einplanen",
      description:
        "Kombinieren Sie Grundlicht, Arbeitslicht über den Arbeitsflächen und Akzentlicht. Vor allem die Zone zwischen Ober- und Unterschränken braucht eigenes Licht, damit Sie nicht im eigenen Schatten schneiden.",
    },
    {
      title: "Budget einordnen und Angebot einholen",
      description:
        "Stecken Sie einen Rahmen ab und lassen Sie sich nach einem kostenlosen Aufmaß ein individuelles Angebot erstellen. So sehen Sie früh, was Ihre Wünsche im konkreten Raum bedeuten. Einen belastbaren Preis nennt seriös niemand ohne Aufmaß.",
    },
  ],
};

/**
 * SpecTable (shared): Küchenform × Grundriss-Eignung (Kit §3 Modul 3a). AEO-Surface
 * für „welche Küchenform passt". Nur Auswahl-Überblick, KEINE Form-Produktberatung
 * in die Tiefe (die gehört den Produkt-Kindern). Trägt einen Up-Link zum Pillar.
 */
export const planenFormen = {
  heading: "Welche Küchenform passt zu welchem Grundriss?",
  intro:
    "Die Form richtet sich nach Raumzuschnitt und Laufwegen. Diese Übersicht ordnet die gängigen Küchenformen ihrer typischen Raumsituation zu. Wie sich Ihre Form als [maßgefertigte Küche](/kuechen-nach-mass/) am genauesten umsetzen lässt, klärt sich beim Aufmaß.",
  firstColLabel: "Küchenform",
  columns: ["Passt zu", "Stärke", "Worauf achten"],
  highlightColumn: 0,
  rows: [
    {
      label: "Küchenzeile",
      values: [
        "Schmale und kleine Räume, Singleküche oder offene Wohnküche an einer Wand.",
        "Nutzt eine Wand voll aus, klarer Ablauf auf wenig Fläche.",
        "Die Arbeitsfläche ist begrenzt, ordnen Sie die Zonen sorgfältig.",
      ],
    },
    {
      label: "L-Form",
      values: [
        "Quadratische bis rechteckige Räume und offene Grundrisse.",
        "Kurze Wege über Eck, gut für ein sauberes Arbeitsdreieck.",
        "Die Ecke braucht eine durchdachte Schranklösung, sonst wird sie zum toten Winkel.",
      ],
    },
    {
      label: "U-Form",
      values: [
        "Mittelgroße bis große Räume mit drei nutzbaren Wänden.",
        "Viel Arbeitsfläche und Stauraum, alles in Reichweite.",
        "Genug Abstand zwischen den Schenkeln einplanen, damit Auszüge frei öffnen.",
      ],
    },
    {
      label: "G-Form",
      values: [
        "Größere Räume, in denen ein Tresen oder eine Halbinsel Sinn ergibt.",
        "Zusätzliche Ablage und Sitzfläche durch den vierten Schenkel.",
        "Bei zu wenig Platz wirkt sie schnell eng, Bewegungsfreiheit hat Vorrang.",
      ],
    },
    {
      label: "Inselküche",
      values: [
        "Große, offene Räume mit reichlich Bewegungsfläche ringsum.",
        "Kochinsel als kommunikativer Mittelpunkt, Arbeiten mitten im Raum.",
        "Anschlüsse und Abluft zur Insel müssen früh geplant werden.",
      ],
    },
  ],
};

/**
 * SpecTable (shared): Ergonomie/Maß-Checkliste (Kit §3 Modul 5). Allgemeines
 * Planungs-/Ergonomiewissen (Framing-Auflage Kit §9b): NICHT als Fast-eigene
 * Maß-Bandbreiten framen. Barrierefrei/altersgerecht ist belegt (kundenwissen).
 */
export const planenErgonomie = {
  heading: "Ergonomie und Maße: die wichtigsten Orientierungswerte",
  intro:
    "Diese Werte sind allgemeine Planungsrichtwerte, keine festen Vorgaben. Die genauen Maße legen wir beim Aufmaß fest, abgestimmt auf Ihre Körpergröße und den Raum. Auch eine altersgerechte, unterfahrbare Planung mit angepassten Höhen lässt sich so von Anfang an berücksichtigen.",
  firstColLabel: "Thema",
  columns: ["Orientierung", "Warum es zählt"],
  rows: [
    {
      label: "Arbeitshöhe",
      values: [
        "Nach Körpergröße, als Faustwert rund 10 bis 15 Zentimeter unter dem Ellenbogen.",
        "Die passende Höhe schont den Rücken beim Schneiden und Arbeiten.",
      ],
    },
    {
      label: "Arbeitsdreieck",
      values: [
        "Kurze, freie Wege zwischen Kühlschrank, Spüle und Herd.",
        "Diese drei Stationen bestimmen den Ablauf bei fast jedem Handgriff.",
      ],
    },
    {
      label: "Bewegungsfreiheit",
      values: [
        "Vor Arbeitszeilen als grobe Orientierung rund 120 Zentimeter Gang.",
        "So bleiben Auszüge und Geräte auch bei geöffneter Tür nutzbar.",
      ],
    },
    {
      label: "Arbeitszonen",
      values: [
        "Feste Bereiche für Vorräte, Spülen, Vorbereiten und Kochen.",
        "Klare Zonen sparen Wege und halten im Alltag Ordnung.",
      ],
    },
    {
      label: "Stauraum",
      values: [
        "Auszüge statt Drehböden, Ecklösungen und Hochschränke bis unter die Decke.",
        "Auszüge machen auch tiefe und hohe Schränke bis nach hinten nutzbar.",
      ],
    },
  ],
};

/**
 * SegmentCards (shared): die typischen Planungsfehler (Kit §3 Modul 4) als
 * scanbare Karten. AEO-Surface für „welche Fehler bei der Küchenplanung".
 */
export const planenFehler = {
  heading: "Typische Fehler bei der Küchenplanung",
  intro:
    "Die meisten Ärgernisse entstehen früh, in der Reihenfolge der Planung. Diese Punkte sollten Sie wie eine Checkliste im Blick behalten.",
  segments: [
    {
      title: "Geräte vor dem Grundriss festlegen",
      body: "Wer zuerst das Wunschgerät kauft, zwängt die Küche später darum herum. Erst der Raum, dann die Ausstattung.",
    },
    {
      title: "Die Ecke vergessen",
      body: "In L- und U-Küchen wird die Ecke schnell zum toten Winkel. Eine Ecklösung mit Auszug oder Karussell hält sie nutzbar.",
    },
    {
      title: "Zu wenig Stauraum",
      body: "Am Ende fehlt oft Platz. Hochschränke bis zur Decke und durchdachte Auszüge holen spürbar mehr aus dem Raum.",
    },
    {
      title: "Zu wenige Steckdosen",
      body: "Kleingeräte brauchen Strom direkt an der Arbeitsfläche. Anschlüsse lieber großzügig einplanen als später mühsam nachrüsten.",
    },
    {
      title: "Licht zu spät bedenken",
      body: "Ohne eigenes Arbeitslicht stehen Sie im eigenen Schatten. Grund-, Arbeits- und Akzentlicht gehören von Anfang an in die Planung.",
    },
    {
      title: "Arbeitshöhe von der Stange",
      body: "Eine Standardhöhe passt selten zu jedem. An Ihrer Körpergröße ausgerichtet, arbeitet es sich deutlich rückenschonender.",
    },
    {
      title: "Passleisten und tote Zentimeter",
      body: "Serienmaße lassen Lücken zur Wand, die Passleisten kaschieren. Eine Küche nach Maß schließt Wand zu Wand ohne Passleisten ab.",
    },
  ],
};

/**
 * UspHighlight (shared): der Praxis-/E-E-A-T-Einschub (Kit §3 Modul 6, §6 Winkel).
 * „Was der Tischler anders macht" — dosiert, ehrlich. Trägt den kontextuellen
 * Up-Link zum Pillar (min-inline).
 */
export const planenTischler = {
  eyebrow: "Aus der Werkstatt",
  heading: "Was ein Tischler bei der Planung anders macht",
  body:
    "Ein Online-Konfigurator rechnet mit festen Rastermaßen, eine Serienküche ebenso. Als Meisterbetrieb in Espelkamp planen wir Ihre Küche um den echten Raum herum: schiefe Wände, Nischen und Dachschrägen sind für uns Alltag, kein Sonderfall. Wir nehmen ein kostenloses Aufmaß, planen in 3D, fertigen in Eigenregie und bauen Wand zu Wand ohne Passleisten, montiert vom eigenen Team. Wie eine solche [Küche nach Maß](/kuechen-nach-mass/) entsteht, zeigt unsere Übersicht.",
  image: "/images/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg",
  imageAlt: "Maßgefertigte U-Küche mit Kochinsel und Stein-Arbeitsplatte vom Meisterbetrieb Fast Systemmöbel",
  stat: { value: "kostenlos", label: "Aufmaß vor Ort" },
};

/**
 * MnmMoebelplaner (planner-cta, shared): weicher CTA am Textende (Ratgeber =
 * schwacher CTA). Möbelplaner als Vorbereitung der persönlichen Planung
 * (kundenwissen.md). Trägt die Conversion-Links Möbelplaner + Kontakt.
 */
export const planenMoebelplaner = {
  heading: "Küche vorab selbst skizzieren",
  body:
    "Mit unserem [Möbelplaner](/moebelplaner/) ordnen Sie Fronten, Maße und Auszüge online und bekommen ein erstes Bild Ihrer Küche. Verstehen Sie das als Vorbereitung: Das genaue Aufmaß, die Beratung und die Feinplanung übernehmen wir danach gemeinsam mit Ihnen. Am einfachsten schicken Sie uns Ihre Skizze und lassen sich [unverbindlich beraten](/kontakt/). So gehen Sie mit einer klaren Vorstellung ins Gespräch.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: "/images/2026/05/variante_1778229163946_1-scaled.jpg",
  imageAlt: "Grifflose Inselküche nach Maß mit Holzdecke als Anregung für die eigene Küchenplanung",
};

export const planenFaq = {
  heading: "Häufige Fragen zur Küchenplanung",
  items: [
    {
      question: "Wie plane ich meine Küche Schritt für Schritt?",
      answer:
        "Planen Sie in dieser Reihenfolge: erst den Raum aufmessen und die Anschlüsse prüfen, dann die Küchenform wählen, das Arbeitsdreieck festlegen, Geräte und Zonen platzieren, danach Material und Arbeitsplatte und zum Schluss Beleuchtung und Budget. Wer diese Reihenfolge einhält, vermeidet die meisten Planungsfehler.",
    },
    {
      question: "Womit fange ich bei der Küchenplanung an?",
      answer:
        "Mit dem Grundriss und dem Aufmaß, nie mit einem bestimmten Gerät oder einer Front. Erst wenn Raum, Anschlüsse und Laufwege feststehen, bauen Form, Geräte und Material sinnvoll aufeinander auf.",
    },
    {
      question: "Was ist das Arbeitsdreieck in der Küche?",
      answer:
        "Das Arbeitsdreieck beschreibt die Verbindung zwischen den drei Hauptstationen Kühlschrank, Spüle und Herd. Liegen sie mit kurzen, freien Wegen zueinander, läuft das Kochen flüssig. Zu lange oder verstellte Wege kosten bei jedem Handgriff Zeit.",
    },
    {
      question: "Welche Küchenform passt zu meinem Grundriss?",
      answer:
        "Für schmale Räume eignet sich die Küchenzeile, für rechteckige die L-Form, für mittlere bis große Räume die U- oder G-Form und für große, offene Räume die Inselküche. Entscheidend sind Raumgröße, Fensterlage und die Wege, die Sie täglich gehen.",
    },
    {
      question: "Wie messe ich meine Küche richtig aus?",
      answer:
        "Messen Sie Länge und Höhe jeder Wand, dazu Fenster, Türen, Heizkörper, Nischen und Vorsprünge. Halten Sie auch die Position von Wasser, Abwasser, Strom und Abluft fest. Bei einer Küche nach Maß nehmen wir dieses Aufmaß kostenlos bei Ihnen vor Ort.",
    },
    {
      question: "Welche Anschlüsse muss ich vor der Planung prüfen?",
      answer:
        "Wasser und Abwasser für Spüle und Geschirrspüler, Starkstrom für Kochfeld und Backofen, genügend Steckdosen für Kleingeräte und die Abluftführung für den Dunstabzug. Wo diese Anschlüsse liegen, beeinflusst die Anordnung der Zonen stark.",
    },
    {
      question: "Wie finde ich die richtige Arbeitshöhe?",
      answer:
        "Die Arbeitshöhe richtet sich nach Ihrer Körpergröße und liegt als Orientierung rund 10 bis 15 Zentimeter unter dem Ellenbogen. So arbeiten Sie aufrecht und rückenschonend. Beim Aufmaß legen wir die Höhe genau für Sie fest.",
    },
    {
      question: "Welche Abstände und Bewegungsfreiheit sollte ich einplanen?",
      answer:
        "Vor Arbeitszeilen sind rund 120 Zentimeter Gang eine gute Orientierung, damit Auszüge und Geräte auch bei geöffneter Tür nutzbar bleiben. Stehen sich zwei Zeilen gegenüber, sollte der Abstand groß genug sein, um sich beim Kochen nicht in die Quere zu kommen.",
    },
    {
      question: "Welche Fehler sollte ich bei der Küchenplanung vermeiden?",
      answer:
        "Häufige Fehler sind: Geräte vor dem Grundriss festlegen, die Ecke als toten Winkel liegen lassen, zu wenig Stauraum und Steckdosen einplanen und die Beleuchtung vergessen. Wer die Planung in der richtigen Reihenfolge angeht, umgeht die meisten davon.",
    },
    {
      question: "Wie plane ich genug Stauraum ein?",
      answer:
        "Setzen Sie auf Auszüge statt Drehböden, nutzen Sie Ecklösungen und planen Sie Hochschränke bis unter die Decke. In einer Küche nach Maß lassen sich auch Nischen und Dachschrägen als Stauraum ausbauen, statt sie ungenutzt zu lassen.",
    },
    {
      question: "Welches Material eignet sich für Fronten und Arbeitsplatten?",
      answer:
        "Für Fronten sind lackierte oder folierte Oberflächen, Holz und Schichtstoff verbreitet, für Arbeitsplatten Naturstein, Keramik, Kompaktplatte oder robuste Dekorplatten. Wichtiger als die reine Optik ist, wie pflegeleicht und widerstandsfähig das Material im Alltag bleibt.",
    },
    {
      question: "Kann ich meine Küche kostenlos online planen?",
      answer:
        "Ja, mit unserem Möbelplaner stellen Sie Ihre Küche online zusammen und bekommen ein erstes Bild. Ein Online-Tool ersetzt aber nicht das Aufmaß vor Ort, gerade bei schiefen Wänden, Nischen oder Dachschrägen. Sehen Sie die 3D-Planung im Konfigurator als Vorbereitung für das persönliche Gespräch.",
    },
    {
      question: "Wann lohnt sich ein Tischler statt eines Online-Konfigurators?",
      answer:
        "Sobald der Raum vom Standard abweicht: Nischen, Sondermaße, schiefe Wände, Dachschrägen oder der Wunsch nach Wand-zu-Wand ohne Passleisten. Ein Konfigurator arbeitet mit festen Rastern. Wir planen und fertigen jede Küche zentimetergenau in unserer eigenen Werkstatt und montieren sie mit eigenem Team.",
    },
    {
      question: "Sind Beratung und Aufmaß bei Fast kostenlos?",
      answer:
        "Ja. Wir beraten Sie und nehmen das Aufmaß kostenlos vor Ort auf, im Umkreis von rund 200 Kilometern um Espelkamp, also in ganz OWL und darüber hinaus, etwa in Minden, Lübbecke, Osnabrück und Bielefeld. Ein konkreter Preis für die Küche ist immer individuell und ergibt sich erst nach dem Aufmaß.",
    },
  ],
};

/** HowTo steps derive from the visible ProcessSteps (single source of truth). */
const planenHowToSteps = planenProcess.steps.map((s, i) => ({
  "@type": "HowToStep",
  position: i + 1,
  name: s.title,
  text: s.description,
}));

/**
 * JSON-LD for the planning Ratgeber (cluster-article). Per AGENT-WORKFLOW.md:
 * HowTo + FAQPage (+ BreadcrumbList). No Service/Product/Offer (this page sells
 * nothing, it explains). Inline-link markers in copy are stripped for ld+json.
 */
export const planenJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Küche planen: Schritt für Schritt",
    description:
      "Anleitung zur Küchenplanung: Raum aufmessen, Küchenform wählen, Arbeitsdreieck und Ergonomie festlegen, Geräte und Stauraum einteilen, Material und Beleuchtung wählen.",
    step: planenHowToSteps,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Küchen nach Maß", item: `${SITE}/kuechen-nach-mass/` },
      { "@type": "ListItem", position: 4, name: "Küche planen", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: planenFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];
