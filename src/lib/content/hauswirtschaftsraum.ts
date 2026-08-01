/**
 * Content for the `/hauswirtschaftsraum/` page: the "Hauswirtschaftsraum
 * einrichten" cluster pillar under the `/moebel-nach-mass/` hub. Same
 * composition as wohnmoebel-nach-mass / badmoebel-nach-mass (Privat library
 * sections + SpecTable comparison, Kit §3 Modul 9). Copy follows the Fast
 * Systemmöbel brand voice (Sie-Anrede, handwerklich, konkret, belegt, keine
 * em-dashes). See docs/seo/brand/BRAND_VOICE.md und docs/seo/brand/FACTS.md;
 * Research-Kit unter docs/seo/research/hauswirtschaftsraum.kit.md.
 *
 * Winkel (Cluster-Map): der HWR/die Waschküche als Funktionsraum-System
 * (Waschen, Vorrat, Reinigung, Technik) nach Maß. Preise immer individuell.
 * Geräte werden nicht verkauft — Möbel entstehen um kundeneigene Geräte.
 *
 * Cluster-Kinder (HWR-Schrank / Waschmaschinenschrank / Vorratsschrank /
 * Besenschrank / planen) sind noch nicht gebaut (built:false) → im Verteiler
 * nur beschreibend, ohne Links (launch clean). Beim Bau der Spokes hier
 * beidseitig nachverdrahten.
 *
 * Bilder: vorerst Platzhalter aus /images/einbauschraenke/ (Vorlage-Assets);
 * Alt-Texte beschreiben bereits die gewünschten HWR-Motive. Vor Launch gegen
 * echte HWR-/Waschküchen-Fotos tauschen (siehe REVIEW.md Bild-Vorschläge).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/hauswirtschaftsraum/";
const IMG = "/images/einbauschraenke";

export const hwrHero = {
  bgImage: `${IMG}/einbauschrank-nach-mass-wand-zu-wand-grifflos.jpg`,
  imageAlt:
    "Hauswirtschaftsraum nach Maß von Fast Systemmöbel mit raumhohen Hochschränken, verbauter Waschmaschine und Trockner, Arbeitsfläche und Stauraum für Wäsche und Vorrat",
  title: "Hauswirtschaftsraum einrichten nach Maß vom Tischler in Espelkamp",
  intro:
    "Einen Hauswirtschaftsraum einrichten heißt, Waschen, Vorräte, Putzmittel und Geräte an einem Ort zu bündeln, statt sie über Küche und Bad zu verteilen. Als Tischler-Meisterbetrieb in Espelkamp planen, fertigen und montieren wir Ihren HWR nach Maß, damit jede Wand und Nische arbeitet, statt Platz zu verschenken.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Hauswirtschaftsraum einrichten" },
  ],
};

export const hwrIntroStats = {
  since: "seit 1996",
  sinceSub: "fertigen wir Möbel nach Maß.",
  heading: "Ein Hauswirtschaftsraum, der jeden Zentimeter nutzt",
  introBefore:
    "Waschküche, Vorratskammer und Abstellraum in einem, so viel muss ein HWR aufnehmen. Wir messen bei Ihnen vor Ort auf und holen jeden",
  introBold: "Zentimeter",
  introAfter:
    " heraus, von Wand zu Wand und bis unter die Decke. So finden Waschmaschine, Vorrat, Putzmittel und Bügelwäsche ihren festen Platz, auch wenn der Raum klein oder schmal ist.",
  bandImage: `${IMG}/kleiderschrank-nach-mass-weiss-offen.jpg`,
  bandAlt: "Hauswirtschaftsraum nach Maß mit offenen und geschlossenen Fächern für Wäsche, Vorrat und Putzmittel",
  col1Title: "Hauswirtschaftsraum planen",
  col1Body:
    "Wir planen Ihren HWR um Ihren Alltag herum, nicht um ein fertiges Raster. Welche Zonen Sie zum Waschen, für Vorrat und Reinigung brauchen, welche Fronten und Materialien dazu passen, entscheiden Sie.",
  col1CtaLabel: "Jetzt HWR anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Jede Front und jeder Korpus entsteht in unserer eigenen Werkstatt in Espelkamp, wo alle [Möbel nach Maß](/moebel-nach-mass/) von Fast gebaut werden. Die Schnittkanten verschließen wir fugenlos mit PU-Kantenverleimung. Das bleibt feuchtigkeitsbeständig, gerade dort, wo Wasseranschluss und Waschmaschine für Feuchtigkeit sorgen.",
  counterTarget: 72,
  counterDuration: 2000,
  counterSuffix: "K+",
  col3Title: "gefertigte Einzelteile",
  col3Body:
    "Mehr als 72.000 Einzelteile hat unsere Fertigung verlassen, jedes millimetergenau für ein bestimmtes Möbel zugeschnitten, viele für den Feuchtraum HWR.",
  col3CtaLabel: "HWR online planen",
  col3CtaHref: "/moebelplaner/",
};

export const hwrCtas = {
  intro: {
    image: `${IMG}/begehbare-ankleide-nach-mass-weiss.jpg`,
    heading: "Ihr Hauswirtschaftsraum nach Maß beginnt mit einem Gespräch",
    linkText: "Sprechen Sie mit uns über Ihren HWR",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/einbauschrank-dachschraege-nach-mass.jpg`,
    heading: "Ihr Hauswirtschaftsraum verdient Möbel, die genau passen.",
    linkText: "Jetzt kostenloses Aufmaß anfragen",
    href: "/kontakt/",
  },
  /** Tertiary conversion path (Playbook §6): phone as a trust anchor, clickable on mobile. */
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/**
 * Fünf Schritte als nummerierte Steps statt Fließtext (Sektions-Politik Ben
 * 2026-07-24: Aufzählungen nie als Textwand in eine Sektion pressen).
 */
export const hwrProcessSteps = {
  eyebrow: "So läuft es ab",
  heading: "Ihr Hauswirtschaftsraum, alles aus einer Hand",
  image: `${IMG}/einbauschrank-montage-espelkamp.jpg`,
  imageAlt: "Monteure von Fast Systemmöbel bauen die Hochschränke eines Hauswirtschaftsraums vor Ort ein",
  steps: [
    {
      title: "Beratung",
      description:
        "Zuerst hören wir zu, bei Ihnen zu Hause oder in unserem Büro. Was soll Ihr HWR leisten, welche Geräte ziehen ein, wie viel Vorrat, Wäsche und Putzmittel müssen unterkommen?",
    },
    {
      title: "Aufmaß vor Ort",
      description:
        "Das Aufmaß machen wir kostenlos bei Ihnen. Wände, Nischen, Anschlüsse und die Maße von Waschmaschine und Trockner erfassen wir genau, damit am Ende jedes Fach sitzt.",
    },
    {
      title: "3D-Planung",
      description:
        "In der technischen 3D-Planung sehen Sie Zonen, Fronten und Einteilung vorab. Wir ändern so lange gemeinsam, bis alles passt, bevor das erste Bauteil in die Fertigung geht.",
    },
    {
      title: "Fertigung",
      description:
        "Nach Ihrer Freigabe fertigen wir jedes Teil selbst in Espelkamp, in Eigenregie und mit fugenloser PU-Kante. Made in Germany, ohne Zulieferer dazwischen.",
    },
    {
      title: "Montage",
      description:
        "Zum verbindlichen Termin baut unser eigenes Montageteam Ihren HWR ein, richtet ihn Wand zu Wand aus und übergibt den Raum sauber und einsatzbereit.",
    },
  ],
};

/** Objekt-Taxonomie: drives the MnmTypische rows AND the JSON-LD OfferCatalog / ItemList.
 * HWR-Funktions-/Möbeltypen (Verteiler, Kit §3 Modul 11). Kinder noch built:false →
 * nur beschreibend, keine Links. */
export const hwrTypische = {
  heading: "Möbel und Zonen für jeden Hauswirtschaftsraum",
  image1: `${IMG}/begehbare-ankleide-nach-mass-eck.jpg`,
  image1Alt: "Hauswirtschaftsraum nach Maß als raumhohe Hochschrankzeile mit offenen und geschlossenen Fächern",
  image2: `${IMG}/einbauschrank-nach-mass-anthrazit-regalnische.jpg`,
  image2Alt: "Regalsystem nach Maß, bündig in eine Nische im Hauswirtschaftsraum eingebaut",
  row1: [
    {
      title: "HWR-Schrank nach Maß",
      description:
        "Der raumhohe Hochschrank oder Einbauschrank für gemischte Nutzung, von Wand zu Wand geplant. Wäsche, Vorrat und Kleingeräte verschwinden hinter einer ruhigen Front bis unter die Decke.",
    },
    {
      title: "Waschmaschine und Trockner verbaut",
      description:
        "Ein Verbau um Ihre Geräte, nebeneinander unter einer Arbeitsplatte oder als Waschturm übereinander, mit Platz fürs Waschmittel gleich daneben. Die vorhandenen Geräte bleiben, wir planen die Möbel passgenau darum.",
    },
    {
      title: "Vorratsschrank nach Maß",
      description:
        "Der Vorrats- und Speisekammerschrank mit Auszügen und passenden Fachhöhen, von der Konserve bis zum Großgebinde übersichtlich und griffbereit.",
    },
    {
      title: "Besen- und Putzschrank",
      description:
        "Ein schmaler Hochschrank für Besen, Staubsauger, Wischmopp und Putzmittel, alles aufrecht sortiert, oft die Lösung für eine Restnische.",
    },
  ],
  row2: [
    {
      title: "Bügel- und Faltzone",
      description:
        "Eine Arbeitsfläche zum Falten und Bügeln, mit Stauraum für Wäschekorb und Bügelbrett darunter, in der Höhe auf Sie abgestimmt.",
    },
    {
      title: "Recycling und Mülltrennung",
      description:
        "Ausziehbare Trennsysteme für Wertstoffe, sauber im Unterschrank verborgen, damit die Mülltrennung den Raum nicht blockiert.",
    },
    {
      title: "Regale und Stauraum",
      description:
        "Offene oder gemischte Fächer als flexible Fläche, passgenau in die Nische gesetzt, für alles, was schnell zur Hand sein soll.",
    },
  ],
};

export const hwrWarum = {
  heading: "Warum ein Hauswirtschaftsraum vom Tischler mehr kann",
  paragraph:
    "Der Unterschied entsteht vor dem ersten Schnitt. Wir messen Nische, Ecke und die Anschlüsse selbst auf, statt uns auf Rastermaße zu verlassen. Ein raumhoher Hochschrank schließt ohne Passleisten an die Wand an, und auch ein schmaler HWR wird bis in die letzte Ecke nutzbar. Weil rund um Waschmaschine und Wasseranschluss ständig Feuchtigkeit im Spiel ist, verschließen wir die Kanten fugenlos mit PU. Beispiele zeigen die [Referenzprojekte](/referenzen/), mehr [über uns](/ueber-uns/).",
  images: [
    {
      src: `${IMG}/einbauschrank-nach-mass-anthrazit-fenster.jpg`,
      alt: "Hauswirtschaftsraum nach Maß mit Hochschränken, passgenau an eine Fensterwand angearbeitet",
      width: 1280,
      height: 715,
    },
    {
      src: `${IMG}/kleiderschrank-nach-mass-auszuege-spiegel.jpg`,
      alt: "Vorratsschrank im Hauswirtschaftsraum mit ausgezogenen Schubladen und feiner Einteilung",
      width: 1280,
      height: 715,
    },
    {
      src: `${IMG}/garderobe-flur-nach-mass-anthrazit.jpg`,
      alt: "Raumhohe Hochschrankzeile im Hauswirtschaftsraum mit offenen und geschlossenen Fächern",
      width: 1280,
      height: 715,
    },
    {
      src: `${IMG}/raumteiler-eichenlamellen-nach-mass.jpg`,
      alt: "Arbeitsfläche mit Stauraum im Hauswirtschaftsraum nach Maß, kombiniert mit warmer Holzfront",
      width: 1280,
      height: 715,
    },
  ],
};

/**
 * Vergleichstabelle (shared SpecTable, Kit §3 Modul 9): Maßanfertigung vom
 * Meisterbetrieb vs. Küchenstudio/Möbelhaus vs. Baumarkt-Fertigmöbel als
 * zitierbarer AEO-Container. Keine Preise, keine erfundenen Maße.
 */
export const hwrVergleich = {
  heading: "Maßanfertigung, Küchenstudio oder Fertigmöbel aus dem Baumarkt?",
  intro:
    "Es gibt drei Wege zu einem eingerichteten Hauswirtschaftsraum, und am Ende stehen drei sehr unterschiedliche Ergebnisse. Diese Übersicht zeigt, worin sich die Maßanfertigung vom Meisterbetrieb unterscheidet.",
  firstColLabel: "Kriterium",
  columns: [
    "Maßanfertigung vom Meisterbetrieb (Fast)",
    "Küchenstudio / Möbelhaus",
    "Fertigmöbel aus dem Baumarkt",
  ],
  highlightColumn: 0,
  rows: [
    {
      label: "Passgenauigkeit",
      values: [
        "Wand zu Wand nach Aufmaß, auch in schmalen und niedrigen Räumen um jede Nische geplant",
        "Standardschränke im Raster, Restlücken werden mit Blenden kaschiert",
        "feste Maße von der Stange, Lücken und Luft nach oben bleiben",
      ],
    },
    {
      label: "Feuchtebeständige Kante",
      values: [
        "Kanten fugenlos mit PU verleimt, ausgelegt für die Nähe zu Wasser und Waschmaschine",
        "je nach Programm, meist Standard-Umleimer",
        "einfache Umleimer, offene Nähte an den Schnittstellen möglich",
      ],
    },
    {
      label: "Raumausnutzung",
      values: [
        "raumhoch bis unter die Decke, Höhe und Tiefe frei bestimmt",
        "bis zur Standardhöhe, Aufsatzschränke nur als Zubehör",
        "nur genormte Höhen, der obere Raum bleibt ungenutzt",
      ],
    },
    {
      label: "Beratung & Aufmaß",
      values: [
        "persönliche Beratung, kostenloses Aufmaß vor Ort, technische 3D-Planung",
        "Verkaufsberatung im Ausstellungsraum",
        "Selbstbedienung, kein Aufmaß, keine Planung",
      ],
    },
    {
      label: "Montage",
      values: [
        "eigenes Montageteam im Umkreis von rund 200 km um Espelkamp",
        "externe Monteure, meist gegen Aufpreis",
        "Selbstaufbau nach Anleitung",
      ],
    },
  ],
};

/**
 * "Aus einer Hand"-USP als eigener Proof-Block (Sektions-Politik Ben 2026-07-24).
 */
export const hwrUsp = {
  eyebrow: "Aus einer Hand",
  heading: "Planung, Fertigung und Montage bleiben bei uns im Haus",
  body:
    "Bei Fast Systemmöbel läuft alles unter einem Dach, deshalb geht an keiner Schnittstelle Verantwortung verloren. Wer Sie berät, plant auch Ihren Hauswirtschaftsraum, kennt das Aufmaß und weiß, wie die Möbel gefertigt und eingebaut werden. So entsteht Ihr HWR über einen festen Ansprechpartner, statt dass sich Händler, Werk und Monteur später den Schwarzen Peter zuschieben.",
  stat: { value: "1", label: "Ansprechpartner für Ihr Projekt" },
  image: `${IMG}/sonderanfertigung-nach-mass-weinwand.jpg`,
  imageAlt: "Individuell geplanter Hauswirtschaftsraum nach Maß als Beispiel für Lösungen aus einer Hand",
};

/**
 * Vier Preisfaktoren als Karten statt Fließtext-Aufzählung (Sektions-Politik
 * Ben 2026-07-24). Keine Preise, keine Pauschalen (FACTS.md).
 */
export const hwrKosten = {
  eyebrow: "Kosten",
  heading: "Was ein Hauswirtschaftsraum nach Maß kostet",
  intro:
    "Einen festen Pauschalpreis kann Ihnen bei einer Maßanfertigung niemand seriös nennen, weil jeder Hauswirtschaftsraum anders zugeschnitten ist. Vier Faktoren bestimmen, was Ihr HWR kostet. Nach dem kostenlosen Aufmaß erhalten Sie ein individuelles Angebot, das genau Ihren Raum abbildet, für private Projekte auf Wunsch mit Finanzierung.",
  segments: [
    {
      title: "Raumgröße und Umfang",
      body: "Eine einzelne Schrankzeile schlägt anders zu Buche als ein HWR, der über mehrere Wände geht. Länge, Höhe und die Zahl der Elemente sind der größte Hebel.",
    },
    {
      title: "Material",
      body: "Beschichtete Platten und lackiertes MDF liegen preislich unter Massivholz. Auch die gewählte Front und Oberfläche spielt mit hinein.",
    },
    {
      title: "Ausstattung",
      body: "Auszüge, gedämpfte Beschläge, eine Beleuchtung im Schrank, Trennsysteme für die Mülltrennung oder eine Arbeitsplatte zum Falten erhöhen Komfort und Preis. Was davon zu Ihnen passt, klären wir gemeinsam.",
    },
    {
      title: "Einbausituation",
      body: "Ein Geräteverbau um Waschmaschine und Trockner oder ein Ausbau in einer Dachschräge kostet mehr Aufwand als eine gerade Wand. Der Montageaufwand zählt mit.",
    },
  ],
};

export const hwrGeschichte = {
  heading: "Möbelhandwerk aus fast drei Jahrzehnten",
  subheading: "Vom Garagenbetrieb zum Meisterbetrieb",
  anchorImage: `${IMG}/einbauschrank-nach-mass-anthrazit-regalnische.jpg`,
  anchorImageAlt:
    "Hauswirtschaftsraum nach Maß mit Hochschränken und Regalnische, gefertigt von Fast Systemmöbel in Espelkamp",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "4.000+", label: "Projekte" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "200 km", label: "Montage-Radius" },
  ],
  paragraphs: [
    "Klein angefangen hat Fast Systemmöbel 1996, in einer Garage in Rahden-Tonnenheide, als Ein-Mann-Betrieb. Der Umzug nach Espelkamp kam fünf Jahre später, und mit ihm wurde aus dem einzelnen Handwerker ein Familienbetrieb.",
    "Heute trägt die zweite Generation mit: Andreas und Peter Fast sind seit 2010 im Unternehmen und übernehmen Schritt für Schritt die Geschäftsführung. Hinter jedem Auftrag stehen mehr als 4.000 Projekte und über 1.000 m² eigene Fertigung, auch hinter Ihrem Hauswirtschaftsraum, wo Wasser und Feuchte der Verarbeitung mehr abverlangen als ein trockener Wohnraum.",
    "Jedes Möbel entsteht bei uns im Haus, in Eigenregie in Espelkamp. Montiert wird im Umkreis von rund 200 km, in ganz OWL rund um Minden, Lübbecke, Osnabrück und Bielefeld. Freistehende HWR-Möbel liefern wir darüber hinaus deutschlandweit.",
  ],
};

export const hwrMoebelplaner = {
  heading: "Ihren Hauswirtschaftsraum online planen und konfigurieren",
  body:
    "Sie wollen sich zuerst selbst ein Bild machen? Mit unserem Möbelplaner stellen Sie Ihre HWR-Möbel online zusammen und sehen Fronten, Einteilung und Proportionen direkt im 3D-Konfigurator. Ihre Vorplanung schicken Sie uns, den Rest, vom Aufmaß über die Fertigung bis zur Montage, übernehmen wir persönlich.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/einbauschrank-nach-mass-wand-zu-wand-grifflos.jpg`,
  imageAlt: "Hauswirtschaftsraum nach Maß, grifflos und von Wand zu Wand geplant",
};

export const hwrTestimonialsHeading = "Was unsere Kunden über ihre Möbel nach Maß sagen";

export const hwrFaq = {
  heading: "Häufige Fragen zum Hauswirtschaftsraum nach Maß",
  items: [
    {
      question: "Was ist ein Hauswirtschaftsraum und was gehört alles hinein?",
      answer:
        "Der Hauswirtschaftsraum, kurz HWR, ist der Raum, in dem alles rund um den Haushalt zusammenläuft: Waschmaschine und Trockner, Vorräte, Putzmittel, die Mülltrennung und meist eine Bügel- und Faltfläche. Statt diese Dinge in Küche und Bad zu verteilen, bekommen sie hier einen festen, erreichbaren Platz.",
    },
    {
      question: "Ist ein Hauswirtschaftsraum dasselbe wie eine Waschküche?",
      answer:
        "Nicht ganz. Eine Waschküche ist der Ort zum Waschen und Trocknen und damit eine Teilfunktion. Der Hauswirtschaftsraum ist breiter und nimmt zusätzlich Vorräte, Reinigung und Stauraum auf. In der Praxis planen wir beides zusammen, damit der Raum den ganzen Haushalt trägt.",
    },
    {
      question: "Wie groß muss ein Hauswirtschaftsraum sein?",
      answer:
        "Eine feste Mindestgröße gibt es nicht. Entscheidend ist, dass die Möbel den vorhandenen Raum wirklich ausschöpfen. Gerade in einem kleinen oder schmalen HWR holen wir mit Hochschränken bis unter die Decke und einer Planung von Wand zu Wand mehr heraus als Fertigmöbel von der Stange.",
    },
    {
      question: "Welche Anschlüsse braucht ein Hauswirtschaftsraum?",
      answer:
        "Für Waschmaschine und Trockner brauchen Sie Wasser, einen Abfluss und Strom, dazu eine Möglichkeit zur Belüftung gegen Feuchtigkeit. Wo diese Anschlüsse liegen, berücksichtigen wir beim Aufmaß und in der Planung. Die eigentlichen Elektro- und Sanitärarbeiten stimmen wir mit Ihnen und Ihrem Handwerker ab.",
    },
    {
      question: "Wo sollte der Hauswirtschaftsraum idealerweise liegen?",
      answer:
        "Praktisch ist eine Lage nah an Küche oder Bad, weil dort Wasser und Strom ohnehin vorhanden sind. Genauso oft entsteht ein HWR im Keller oder Souterrain. Möglich ist beides, wir planen die Möbel für den Raum, den Sie zur Verfügung haben.",
    },
    {
      question: "Können Waschmaschine und Trockner in die Möbel verbaut werden?",
      answer:
        "Ja. Wir bauen den Verbau um Ihre vorhandenen Geräte herum, nebeneinander unter einer durchgehenden Arbeitsplatte oder als Waschturm übereinander, wenn der Platz schmal ist. Die Geräte kaufen Sie wie gewohnt im Fachhandel, wir planen die Möbel passend darum.",
    },
    {
      question: "Wie richte ich einen kleinen oder schmalen Hauswirtschaftsraum ein?",
      answer:
        "Der Schlüssel ist die Höhe. Wir planen Hochschränke bis unter die Decke, nutzen schmale Nischen mit passgenauen Auszügen und stapeln Waschmaschine und Trockner bei Bedarf als Waschturm. So entsteht auch auf wenigen Quadratmetern geordneter Stauraum für Wäsche, Vorrat und Reinigung.",
    },
    {
      question: "Welcher Bodenbelag eignet sich für den Hauswirtschaftsraum?",
      answer:
        "Sinnvoll ist ein robuster, pflegeleichter und feuchteunempfindlicher Boden, zum Beispiel Fliesen. Den Bodenbelag verlegen wir nicht selbst, aber wir stimmen unsere Möbel darauf ab, sodass Sockel und Übergänge sauber sitzen und der Raum leicht zu reinigen bleibt.",
    },
    {
      question: "Wie lassen sich Mülltrennung und Vorräte sinnvoll unterbringen?",
      answer:
        "Für die Mülltrennung planen wir ausziehbare Trennsysteme im Unterschrank, sodass die Behälter verborgen bleiben. Vorräte kommen in einen Vorratsschrank mit Auszügen und passenden Fachhöhen, von der Konserve bis zum Großgebinde übersichtlich sortiert und mit einem Griff erreichbar.",
    },
    {
      question: "Was ist der Unterschied zwischen einem HWR und einer HWR-Küche?",
      answer:
        "Eine HWR-Küche, oft Schattenküche genannt, ist ein Hauswirtschaftsraum mit zusätzlicher Arbeitszeile, in die sich Kochen und grobe Vorbereitung auslagern lassen, damit die Wohnküche aufgeräumt bleibt. Ein reiner HWR verzichtet darauf und konzentriert sich auf Waschen, Vorrat und Reinigung. Was zu Ihnen passt, klären wir in der Beratung.",
    },
    {
      question: "Was kostet ein Hauswirtschaftsraum nach Maß?",
      answer:
        "Einen festen Preis oder eine Pauschale können wir seriös nicht nennen, weil jeder Raum einzeln geplant wird. Den Preis bestimmen vor allem Raumgröße und Umfang, das Material, die Ausstattung wie Auszüge oder Trennsysteme und die Einbausituation. Nach dem kostenlosen Aufmaß erhalten Sie ein verbindliches, individuelles Angebot.",
    },
    {
      question: "Bauen Sie auch nur einzelne Schränke oder den kompletten Raum?",
      answer:
        "Beides ist möglich. Manche Kunden möchten nur einen passgenauen Hochschrank oder den Verbau um die Waschmaschine, andere den kompletten HWR mit allen Zonen. Was für Sie sinnvoll ist, besprechen wir bei Beratung und Aufmaß, ganz nach Bedarf und Budget.",
    },
    {
      question: "Wie lange dauert es und wie weit fahren Sie zur Montage?",
      answer:
        "Statt eine Wochenzahl zu versprechen, die dann nicht hält, nennen wir Ihnen nach Aufmaß und Freigabe einen verbindlichen Termin. Die Montage übernimmt unser eigenes Team im Umkreis von rund 200 km um Espelkamp, also in ganz OWL. Freistehende Möbel liefern wir zudem deutschlandweit.",
    },
    {
      question: "Was bedeutet PU-Kantenverleimung und warum ist sie im HWR wichtig?",
      answer:
        "Bei der PU-Kantenverleimung wird die Kante mit Polyurethan-Kleber fugenlos mit dem Korpus verbunden, ohne sichtbare Naht. Das bleibt feuchtigkeitsbeständig und ist gerade im Hauswirtschaftsraum sinnvoll, wo rund um Waschmaschine und Wasseranschluss immer wieder Nässe an die Möbel kommt.",
    },
  ],
};

const hwrObjektTypen = [...hwrTypische.row1, ...hwrTypische.row2].map((t) => t.title);

/**
 * JSON-LD for the utility-room cluster pillar. Same scope as the bathroom and
 * living-room pillars: Service (provider=Organization, serviceType, areaServed,
 * hasOfferCatalog), BreadcrumbList, FAQPage, ItemList. No Product, no
 * AggregateRating, no Offer with a price (Preise sind immer individuell, siehe
 * FACTS.md).
 */
export const hwrJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hauswirtschaftsraum einrichten nach Maß",
    serviceType: "Maßgefertigte Hauswirtschaftsraum-Einrichtung",
    url: `${SITE}${PATH}`,
    provider: {
      "@type": "Organization",
      name: "Fast Systemmöbel",
      url: `${SITE}/`,
      telephone: "+4957719138312",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Alte Waldstraße 32",
        postalCode: "32339",
        addressLocality: "Espelkamp",
        addressRegion: "Nordrhein-Westfalen",
        addressCountry: "DE",
      },
    },
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: 52.3833, longitude: 8.6167 },
        geoRadius: "200000",
      },
      { "@type": "Country", name: "DE" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hauswirtschaftsraum nach Maß",
      itemListElement: hwrObjektTypen.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Hauswirtschaftsraum einrichten", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hwrFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hauswirtschaftsraum nach Maß: Möbel und Zonen",
    itemListElement: hwrObjektTypen.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
