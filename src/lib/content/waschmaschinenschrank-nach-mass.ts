/**
 * Content for the `/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/` page:
 * the "Waschmaschinenschrank nach Maß" cluster child (product) under the HWR
 * pillar (`/hauswirtschaftsraum/`). Winkel (Cluster-Map): Waschmaschine und
 * Trockner VERBAUT, also der Schrank um die kundeneigenen Geräte: Bauform zur
 * Nische, Maße inkl. Anschlüsse, Technik (Wärme, Feuchte, Schwingung, Zugang),
 * Ausstattung, Kostenfaktoren. NICHT: HWR-Gesamtplanung (→ Ratgeber
 * `planen`, noch nicht gebaut), allgemeiner HWR-Schrank, Vorrat, Putzschrank.
 *
 * Built from the Privat library sections plus shared sections (SpecTable ×3,
 * SegmentCards ×2, UspHighlight, ProcessSteps) so each section carries one topic
 * (ARCHITECTURE.md §1.1). Komposition nach der Vorlage-Schwesterseite
 * `waschtischunterschrank-nach-mass` (Produkt, Geräte-/Anschluss-Verbau im
 * Feuchtbereich); zusätzlich eine Bauform-Tabelle statt Montage-Karten und ein
 * Technik-Block als Herzstück (Kit §3-4).
 *
 * Faktentreue (FACTS.md + kundenwissen.md, Kit §8/§9b): keine Preise, keine
 * Lieferzeit, keine Fast-Maße (nur übliche GERÄTEmaße, Datenblatt verbindlich),
 * keine Verbau-Technik als Fast-Bauteil, keine Gewerke als Fast-Leistung, Geräte
 * werden nicht verkauft, Zwischenbausatz = Geräte-Zubehör. PU-Kante nur
 * „fugenlos, feuchtigkeitsbeständig“. Brand voice: Sie, keine em-dashes.
 *
 * Bilder: Es gibt kein Waschmaschinen-/HWR-Foto im Bestand (Kit §9b-9).
 * Platzhalter aus dem Bestand, Alt-Texte beschreiben das tatsächliche Motiv
 * (docs/seo/bilder.md); Tausch-Vorschläge siehe REVIEW.md.
 *
 * Copy: Authoring-Engine Lauf 2 2026-10-29 (wf_f5a40cf2-9dd), QC&Fix-Fassung
 * wortgleich übernommen, Chefredakteur pass=true. Danach nur zwei Eingriffe:
 * FAQ 6 „nennen wir nicht“ (optionaler Chef-Fix) und in col1Body der Satz mit
 * dem Link auf den Ratgeber `/hauswirtschaftsraum/planen/` entfernt, weil der
 * Ratgeber noch nicht gebaut ist. Mit dem Ratgeber-Paket beidseitig nachtragen
 * (Anker „Hauswirtschaftsraum planen“, Kit §7).
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/hauswirtschaftsraum/waschmaschinenschrank-nach-mass/";
const IMG = "/images/einbauschraenke";

export const wmsHero = {
  bgImage: `${IMG}/einbauschrank-nach-mass-anthrazit-regalnische.jpg`,
  imageAlt: "Einbauschrank nach Maß in Anthrazit mit offener Regalnische, Wand zu Wand",
  title: "Waschmaschinenschrank nach Maß, gebaut um Ihre Geräte",
  intro:
    "Ein Waschmaschinenschrank nach Maß ist der Verbau um die Waschmaschine und den Trockner, die Sie schon haben, millimetergenau in Nische, Hauswirtschaftsraum oder Waschküche. Luftwege und Anschlüsse planen wir von Anfang an mit. Wir fertigen ihn in unserem Tischler-Meisterbetrieb in Espelkamp und bauen ihn mit eigenem Team ein.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Hauswirtschaftsraum einrichten", href: "/hauswirtschaftsraum/" },
    { label: "Waschmaschinenschrank nach Maß" },
  ],
};

export const wmsIntroStats = {
  since: "seit 1996",
  sinceSub: "Fertigen wir Möbel nach Maß.",
  heading: "Ein Schrank, in dem Ihre Geräte arbeiten können",
  introBefore:
    "Beim Schleudern rüttelt die Waschmaschine, der Trockner gibt Wärme ab. Da passt kein dichter Kasten drumherum. Wir bauen Ihnen einen Schrank",
  introBold: "mit Luft und freiem Zugang zum Flusensieb",
  introAfter: ", genau auf Ihre Nische zugeschnitten.",
  bandImage: `${IMG}/garderobe-flur-nach-mass-anthrazit.jpg`,
  bandAlt: "Garderobenschrank nach Maß in Anthrazit mit offener Kleidernische im Flur",
  col1Title: "Erst die Anschlüsse, dann der Schrank",
  col1Body:
    "Wo Wasserhahn, Abfluss und Steckdose sitzen, bestimmt die Schranktiefe und die Aussparungen. Ist der Raum noch im Rohbau, legen Sie die Anschlüsse vor dem Innenausbau fest.",
  col1CtaLabel: "Waschmaschinenschrank anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Jedes Teil fertigen wir im Familienbetrieb selbst, für genau eine Nische: Ihre. Soll es mehr werden als der Geräteverbau? Dann planen wir gern weiter bis zum kompletten [Hauswirtschaftsraum nach Maß](/hauswirtschaftsraum/).",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Im Umkreis von rund 200 km um Espelkamp messen wir kostenlos auf und bauen den Schrank ein, etwa in Minden, Lübbecke, Bielefeld oder Osnabrück. Wohnen Sie weiter weg, liefern wir deutschlandweit.",
  col3CtaLabel: "Schrank online vorplanen",
  col3CtaHref: "/moebelplaner/",
};

export const wmsCtas = {
  intro: {
    image: `${IMG}/einbauschrank-nach-mass-anthrazit-fenster.jpg`,
    heading: "Erzählen Sie uns von Ihrer Nische",
    linkText: "Beratung zum Waschmaschinenschrank anfragen",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/begehbare-ankleide-nach-mass-eck.jpg`,
    heading: "Ein fester Platz für Waschmaschine und Trockner",
    linkText: "Kostenloses Aufmaß für Ihre Nische anfragen",
    href: "/kontakt/",
  },
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

/**
 * SpecTable (shared): Bauform zur Nische (Kit §3-2, Varianten-Achsen gebündelt).
 * Turm-Sicherung = Verbindungs-/Zwischenbausatz des Geräteherstellers.
 */
export const wmsBauformen = {
  heading: "Welche Bauform passt zu Ihrer Nische?",
  intro:
    "Das entscheiden zwei Dinge: die Breite Ihrer Nische und die Geräte, die Sie schon haben. Die fünf Varianten lassen sich auch kombinieren, zum Beispiel ein Waschturm mit Seitenschrank daneben.",
  firstColLabel: "Bauform",
  columns: ["Passt, wenn …", "Darauf achten"],
  highlightColumn: 0,
  rows: [
    {
      label: "Nebeneinander unter Arbeitsplatte",
      values: [
        "Ihre Nische breit genug für zwei Geräte ist und Sie obendrauf eine Fläche zum Falten möchten.",
        "Geht nur mit Frontladern. Ob Ihr Gerät mit oder ohne Deckplatte unter eine Arbeitsplatte passt, steht im Datenblatt.",
      ],
    },
    {
      label: "Waschturm im Hochschrank",
      values: [
        "die Nische schmal ist und beide Geräte übereinander stehen sollen.",
        "Nur mit Geräten, die zueinander passen, und dem Zwischenbausatz des Geräteherstellers, der den Turm sichert. Den Trockner bedienen Sie oben.",
      ],
    },
    {
      label: "Einzelgerät mit Seitenschrank",
      values: [
        "nur eine Maschine dasteht und daneben Platz für Waschmittel und Wäschekorb bleibt.",
        "Die Gerätetür muss ganz aufgehen, ohne an Seitenschrank oder Griff zu stoßen. Den Türanschlag prüfen wir beim Aufmaß.",
      ],
    },
    {
      label: "Überbauschrank über den Geräten",
      values: [
        "über Waschmaschine oder Turm noch Wandfläche frei ist, die sonst leer bliebe.",
        "Zwischen Gerät und Hängeschrank bleibt Luft, damit die Wärme abziehen kann. Die Höhe richten wir nach Ihrer Reichweite.",
      ],
    },
    {
      label: "Verbau für Toplader",
      values: [
        "Sie einen Toplader haben und die Nische schmal ist.",
        "Der Deckel öffnet nach oben. Darüber kommt deshalb eine Klappe oder ein offenes Fach, keine feste Platte.",
      ],
    },
  ],
};

/**
 * SpecTable (shared): Maß-Orientierung (Kit §3-3, PFLICHT). NUR übliche
 * GERÄTEmaße zur Orientierung, keine Fast-Schrankmaße; Zugaben qualitativ.
 */
export const wmsMasse = {
  heading: "Welche Maße braucht Ihr Waschmaschinen\u00ADschrank?",
  intro:
    "Immer etwas mehr als Ihr Gerät. Zu dessen Maßen kommt Platz für Anschlüsse, Luft und die geöffnete Gerätetür. Die Tabelle nennt übliche Gerätemaße zur Orientierung, nicht unsere Schrankmaße. Verbindlich sind das Datenblatt Ihres Geräts und unser Aufmaß.",
  firstColLabel: "Gerät",
  columns: ["Übliche Gerätemaße (rund)", "Beim Aufmaß kommt dazu"],
  highlightColumn: 1,
  rows: [
    {
      label: "Frontlader",
      values: [
        "Breite rund 60 cm, Höhe rund 85 cm, Tiefe je nach Modell etwa 45 bis 65 cm.",
        "Hinten Platz für Schläuche, Stecker und Wasserhahn, seitlich Luft zum Schwingen, unten frei fürs Flusensieb.",
      ],
    },
    {
      label: "Wäschetrockner",
      values: [
        "Breite rund 60 cm, Höhe rund 85 cm, Tiefe etwa 60 bis 65 cm.",
        "Freie Be- und Entlüftung, beim Ablufttrockner eine Öffnung im Schrank für den Abluftschlauch.",
      ],
    },
    {
      label: "Toplader",
      values: [
        "Breite etwa 40 bis 45 cm, Höhe rund 85 bis 90 cm, Tiefe rund 60 cm.",
        "Raum über dem Gerät für den aufgeklappten Deckel, hinten Platz für Schläuche und Stecker.",
      ],
    },
    {
      label: "Waschturm",
      values: [
        "Gesamthöhe rund 1,70 m und mehr, inklusive Zwischenbausatz des Herstellers.",
        "Freie Lüftung für den oberen Trockner, Platz für die Anschlüsse beider Geräte, Raum für beide geöffneten Türen.",
      ],
    },
  ],
};

/**
 * SegmentCards (shared): Technik-Block (Kit §3-4, Herzstück): Wärme/Trocknertyp,
 * Feuchte, Schwingung, Zugang. Fast-Anteil nur „planen wir mit ein“, Belege
 * Verbraucherzentrale (Kit §7b).
 */
export const wmsTechnik = {
  heading: "Darf der Trockner im Schrank laufen?",
  intro:
    "Ja, wenn der Hersteller den Einbau erlaubt und der Schrank für genau dieses Gerät geplant ist. Vier Punkte klären wir deshalb schon in der Planung. Nicht erst beim Nachbessern.",
  segments: [
    {
      title: "Wärme und Trocknertyp",
      body:
        "Ein Ablufttrockner bläst die feuchte Luft per Schlauch nach draußen, dafür bekommt der Schrank eine Durchführung. Kondens- und Wärmepumpentrockner geben Wärme in den Raum ab. Deren Be- und Entlüftungsöffnungen müssen frei bleiben, so die [Verbraucherzentrale](https://www.verbraucherzentrale.de/wissen/energie/strom-sparen/beim-kauf-eines-waeschetrockners-an-den-stromverbrauch-denken-37984).",
    },
    {
      title: "Feuchte nach dem Waschen",
      body:
        "Nach dem Waschen sollte die Gerätetür offen stehen, bis die Maschine trocken ist, rät die [Verbraucherzentrale](https://www.verbraucherzentrale.de/wissen/umwelt-haushalt/wohnen/wenn-die-waschmaschine-mueffelt-tipps-gegen-ueble-gerueche-109784). Wir planen eine Schranktür, die aufbleiben darf, oder ein offenes Fach. Die Kanten sind mit PU fugenlos verleimt und feuchtigkeitsbeständig.",
    },
    {
      title: "Schwingung beim Schleudern",
      body:
        "Kommt die Trommel auf Touren, arbeitet die ganze Maschine. Darum steht sie frei auf dem Boden, ohne starre Verbindung zum Korpus, mit Luft ringsum. So schlägt sie nirgends an, die Schwingung geht nicht direkt ins Möbel.",
    },
    {
      title: "Zugang zu Sieb und Anschlüssen",
      body:
        "Das Flusensieb sitzt meist vorn unten hinter einer Klappe. Sockel und Front planen wir so, dass diese Klappe frei aufgeht. Wasserhahn und Steckdose bleiben erreichbar. Und kommt der Kundendienst, lässt sich das Gerät herausziehen.",
    },
  ],
};

/** UspHighlight (shared): Warum nach Maß statt Fertigschrank + PU-Kante (Kit §3-7). */
export const wmsWarum = {
  eyebrow: "Warum nach Maß",
  heading: "Kein Rastermaß, in das Ihre Geräte passen müssen",
  body:
    "Beim Fertigschrank aus dem Handel stehen Breite und Tiefe fest. Ihre Geräte müssen sich danach richten. Bei uns läuft es andersherum. Erst messen wir Nische und Geräte, dann bauen wir von Wand zu Wand, ohne Passleisten. Was neben und über den Geräten übrig bleibt, wird Stauraum statt Blende. Den Einbau macht unser eigenes Montageteam.",
  image: "/images/schrank-unter-treppe/montage-tischler-espelkamp.jpg",
  imageAlt:
    "Zwei Monteure von Fast Systemmöbel bauen mit Akkuschrauber und Wasserwaage eine Holzlamellenwand an einer Treppe ein",
};

/** SegmentCards (shared): Ausstattung (Kit §3-5). Besen/Vorrat nur als Abgrenzung andeuten. */
export const wmsAusstattung = {
  heading: "Wohin mit Waschmittel und Wäsche?",
  intro:
    "Rund um die Geräte findet alles Platz, was Sie zum Waschen brauchen, vom Waschmittel bis zum Wäschekorb. Besen, Putzmittel und Vorräte? Die bekommen eigene Schränke, gern gleich mitgeplant.",
  segments: [
    {
      title: "Waschmittelfach",
      body:
        "Neben oder über der Maschine, auf Griffhöhe statt am Boden. Pulver, Flüssigwaschmittel und Weichspüler stehen da, wo Sie beim Befüllen ohnehin hingreifen, und nicht mehr oben auf dem Gerät.",
    },
    {
      title: "Wäschekorb-Auszug",
      body:
        "Die Schmutzwäsche kommt in einen Auszug mit Korb oder Sortierfächern, auf Wunsch gleich nach Farben getrennt. Der Wäschesack im Flur hat ausgedient. Die Wäsche liegt schon direkt neben der Trommel.",
    },
    {
      title: "Arbeitsplatte zum Falten",
      body:
        "Die Platte über nebeneinanderstehenden Geräten trägt der Korpus, nicht die Maschine. Darauf falten Sie die Wäsche gleich aus dem Trockner heraus, statt sie erst durchs Haus zu tragen.",
    },
    {
      title: "Überbau, Auszüge und Fronten",
      body:
        "Ob der Überbau offen bleibt oder Türen bekommt, entscheiden Sie. Dreh-, Falt-, Schiebe- oder Klapptür, Dekor und Griffe suchen wir gemeinsam aus. In die Schubladen im Seitenschrank passen Klammern und Fleckenmittel.",
    },
  ],
};

/** ProcessSteps (shared): Mini-Prozess (Kit §3-8) + Anfrage-Checkliste als note (Kit §3-9). */
export const wmsProcess = {
  eyebrow: "Ablauf",
  heading: "So entsteht Ihr Waschmaschinen\u00ADschrank",
  image: "/images/schrank-unter-treppe/aufmass-planung-nach-mass.jpg",
  imageAlt:
    "Beratungsgespräch am Holztisch: zwei Personen blättern gemeinsam in einer Broschüre mit Möbelbeispielen",
  steps: [
    {
      title: "Beratung",
      description:
        "Am Telefon oder bei Ihnen vor Ort sprechen wir über Ihre Geräte und die Nische. Und darüber, was außer der Maschine noch in den Schrank soll.",
    },
    {
      title: "Kostenloses Aufmaß",
      description:
        "Wir kommen vorbei und messen Nische, Geräte und die Lage der Anschlüsse aus. Dann gleichen wir alles mit dem Datenblatt ab.",
    },
    {
      title: "3D-Planung",
      description:
        "Die 3D-Planung zeigt Ihnen den Schrank mit Aussparungen, Fächern und Fronten, bevor wir das erste Teil zuschneiden. Änderungen machen wir dort, nicht am fertigen Schrank.",
    },
    {
      title: "Fertigung und Montage",
      description:
        "Sobald Sie die Planung freigeben, fertigen wir alle Teile in Espelkamp und nennen Ihnen einen verbindlichen Termin. An dem Tag bauen unsere eigenen Monteure den Schrank ein.",
    },
  ],
  note:
    "Das hilft uns bei Ihrer Anfrage: Gerätetyp und Modell, am besten mit Datenblatt; Breite, Höhe und Tiefe der Nische samt Foto; die Lage von Wasser, Abfluss und Steckdose. Und ob Ihnen Turm oder nebeneinander lieber ist. Damit können Sie direkt [Beratung anfragen](/kontakt/).",
};

/** SpecTable (shared): Kostentreiber. KEINE Preise/€-Zahlen (Kit §8). Finanzierung privat belegt. */
export const wmsKosten = {
  heading: "Was kostet ein Waschmaschinenschrank nach Maß?",
  intro:
    "Der Preis entsteht aus Material, Ausstattung und Aufwand, und den Aufwand bestimmt beim Geräteverbau vor allem Ihre Nische. Eine Preisliste gibt es deshalb nicht. Die Zahl nennen wir Ihnen im individuellen Angebot nach dem kostenlosen Aufmaß, für Privatkunden auf Wunsch mit Finanzierung.",
  firstColLabel: "Kostenfaktor",
  columns: ["Was ihn beeinflusst"],
  highlightColumn: 0,
  rows: [
    {
      label: "Bauform und Größe",
      values: [
        "Waschturm im Hochschrank, zwei Geräte nebeneinander oder ein raumhoher Schrank mit Überbau brauchen unterschiedlich viel Material und Fertigungszeit.",
      ],
    },
    {
      label: "Material und Fronten",
      values: [
        "Massivholz oder branchenübliche Plattenwerkstoffe, die Oberfläche der Fronten, offene Fächer oder Türen.",
      ],
    },
    {
      label: "Innenausstattung",
      values: [
        "Wäschekorb-Auszug, Schubladen, Waschmittelfach und Arbeitsplatte zum Falten.",
      ],
    },
    {
      label: "Einbausituation",
      values: [
        "Unter Dachschräge oder Treppe und im Bad müssen wir mehr anpassen, ebenso bei Aussparungen für die Anschlüsse.",
      ],
    },
    {
      label: "Montageaufwand",
      values: ["Ein enger Kellerabgang oder viel Einpassarbeit vor Ort verlängern die Montage."],
    },
  ],
};

export const wmsMoebelplaner = {
  heading: "Online vorskizzieren, den Verbau planen wir mit Ihnen",
  body:
    "Im [Möbelplaner](/moebelplaner/) planen Sie Schrank und Nischenmaße vor, samt Fächern und Fronten. Den eigentlichen Geräteverbau mit Luftwegen, Aussparungen und vielleicht einem Waschturm klären wir persönlich beim Aufmaß. Ihren Entwurf nehmen wir dabei gern als Ausgangspunkt.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/kleiderschrank-nach-mass-auszuege-spiegel.jpg`,
  imageAlt: "Ankleide nach Maß mit ausgezogenen Schubladen und Standspiegel",
};

export const wmsTestimonialsHeading = "Das sagen unsere Kunden über ihre Möbel nach Maß";

export const wmsFaq = {
  heading: "Häufige Fragen zum Waschmaschinen\u00ADschrank nach Maß",
  items: [
    {
      question: "Muss ein Waschmaschinenschrank belüftet werden?",
      answer:
        "Ja, Wärme und Restfeuchte müssen raus. Wo die Öffnungen liegen und wie groß sie sein müssen, steht in der Aufstellanleitung Ihres Geräts, wir planen sie von Anfang an mit ein. Später dürfen weder Wäschekorb noch Front sie verstellen. Legen Sie die Anleitung zur Beratung bereit.",
    },
    {
      question: "Welcher Trockner eignet sich für den Einbau im Schrank?",
      answer:
        "Grundsätzlich alle drei Bauarten, solange das Gerät für den Einbau freigegeben ist. Ablufttrockner entsprechen laut Verbraucherzentrale nicht mehr dem Stand der Technik. Aus Energiegründen rät sie zum Wärmepumpentrockner. Bleibt es beim Ablufttrockner, stimmen wir die Abluftführung nach außen mit Ihnen und Ihrem Handwerker ab.",
    },
    {
      question: "Kann ich Waschmaschine und Trockner im Schrank übereinander stellen?",
      answer:
        "Ja, als Waschturm, sofern beide Geräte zueinander passen. Gesichert wird der Turm mit dem Zwischenbausatz des Geräteherstellers, den unser Schrank nicht ersetzt. Wichtig ist die Höhe: Erreichen Sie oben Tür und Flusensieb des Trockners, und passt darüber noch ein Fach? Das prüfen wir beim Aufmaß.",
    },
    {
      question: "Wird die Waschmaschine im Schrank lauter?",
      answer:
        "Nicht, solange sie nirgends am Möbel anschlägt. Leiser macht der Schrank sie aber auch nicht zwingend. Ruhig läuft sie, wenn sie nach Anleitung waagerecht ausgerichtet ist.",
    },
    {
      question: "Liefern Sie Waschmaschine und Trockner mit?",
      answer:
        "Nein, Geräte verkaufen wir nicht. Sie behalten Ihre vorhandenen oder kaufen neue, wo Sie möchten. Steht ein Gerätewechsel an, nennen Sie uns das neue Modell bitte vor der Planung, dann bauen wir den Schrank nach dessen Datenblatt.",
    },
    {
      question: "Wie viel Platz brauche ich hinter und neben den Geräten?",
      answer:
        "Eine feste Zahl nennen wir nicht, maßgeblich ist das Datenblatt Ihres Geräts. Sitzen Wasserhahn und Steckdose direkt hinter der Maschine, sparen wir die Rückwand dort aus, statt den ganzen Schrank tiefer zu bauen. Das genaue Maß legen wir beim Aufmaß fest.",
    },
  ],
};

const wmsBauformNamen = wmsBauformen.rows.map((r) => r.label);

/**
 * JSON-LD for the Waschmaschinenschrank product child. Same scope/convention as
 * the sibling product pages (Service, not Product-with-price): Service +
 * OfferCatalog ohne Preis, BreadcrumbList (4 levels), FAQPage (1:1 to visible
 * FAQ), ItemList der Bauformen. No offers/aggregateRating (FACTS.md).
 */
export const wmsJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Waschmaschinenschrank nach Maß",
    serviceType: "Maßgefertigte Waschmaschinenschränke",
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
      name: "Waschmaschinenschränke nach Maß",
      itemListElement: wmsBauformNamen.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Waschmaschinenschrank: ${name}` },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Hauswirtschaftsraum einrichten", item: `${SITE}/hauswirtschaftsraum/` },
      { "@type": "ListItem", position: 4, name: "Waschmaschinenschrank nach Maß", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: wmsFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Waschmaschinenschrank nach Maß: Bauformen",
    itemListElement: wmsBauformNamen.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
