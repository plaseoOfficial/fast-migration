/**
 * Content for the `/einbauschraenke-nach-mass/einbauschrank-kosten/` page: the
 * "Einbauschrank Kosten" Ratgeber im Cluster `einbauschraenke` (node type
 * `ratgeber-pillar`, parent `/einbauschraenke-nach-mass/`). Einziges Zuhause des
 * Keywords: `/ratgeber/massmoebel-kosten-schrank/` leitet per 301 hierher
 * (docs/seo/redirects.md Z. 25). Built from the same shared library sections as
 * the Ratgeber `holzarten-materialien-moebel` (MnmHero, SpecTable ×3,
 * SegmentCards ×4, UspHighlight, ProcessSteps, MnmMoebelplaner, FaqSection), so
 * each section carries one topic (ARCHITECTURE.md §1.1).
 *
 * Faktentreue (FACTS.md + kundenwissen.md, Kit §8/§9): Preise sind individuell.
 * Euro-Zahlen nur als gerundete Beispiele aus dem eigenen Möbelplaner, freigegeben
 * 2026-11-25 (FACTS.md, Ausnahme Planer; Werte wie PLANER_BEISPIELE in
 * anfrage.ts). Keine Wettbewerberzahlen,
 * keine Preisrelationen, kein Stundensatz, keine Lieferzeit in Wochen.
 * § 35a EStG ohne Euro-Betrag, mit Beleg-Link (gesetze-im-internet.de).
 * Brand voice: Sie-Anrede, keine em-dashes (BRAND_VOICE.md).
 *
 * Inline-Links rendern in Hero-`intro`, SpecTable-/SegmentCards-`intro`,
 * Karten-`body`, UspHighlight-/Planer-`body`, Schritt-`description` und
 * FAQ-`answer`. SpecTable-Zellen (`values`) rendern KEINE Links, deshalb sind
 * die Einbausituationen (Kit §3 Tabelle B) als Karten gesetzt.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/einbauschraenke-nach-mass/einbauschrank-kosten/";
const PUBLISHED = "2026-11-18";
const IMG = "/images/einbauschraenke";

export const ekMeta = {
  metaTitle: "Einbauschrank Kosten: Wovon der Preis nach Maß abhängt",
  metaDescription: "Was kostet ein Einbauschrank nach Maß? Was den Preis treibt, wie Sie Laufmeterpreise und Angebote vergleichen und wo sich sparen lässt.",
  ogDescription: "Einen Pauschalpreis gibt es nicht, eine klare Preislogik schon: welche Kostenblöcke einen Einbauschrank nach Maß ausmachen, was im Laufmeterpreis stecken muss und wann aus der Schätzung ein Angebot wird.",
};

export const ekHero = {
  bgImage: `${IMG}/einbauschrank-dachschraege-nach-mass.jpg`,
  imageAlt: "Weißer Einbauschrank nach Maß mit Holzdeckplatte, Doppeltür und Schubladenreihe unter einer Dachschräge",
  title: "Was kostet ein Einbauschrank nach Maß?",
  intro:
    "Einen Pauschalpreis gibt es nicht. Jeder Einbauschrank nach Maß ist ein Unikat. Den Preis bestimmen Größe und Korpus, Fronten, Türsystem, Innenausstattung und die Einbausituation, dazu kommen Lieferung und Montage. Beispielpreise aus unserem Möbelplaner finden Sie weiter unten. Verbindlich wird Ihr Preis erst nach dem kostenlosen Aufmaß vor Ort.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Einbauschränke nach Maß", href: "/einbauschraenke-nach-mass/" },
    { label: "Einbauschrank Kosten" },
  ],
};

/** SpecTable: Tabelle A, Kostenblöcke (Kit §3 Aufgabe 3). Zellen ohne Links, ohne Preisrelationen. */
export const ekKostenbloecke = {
  heading: "Wovon der Preis eines Einbauschranks abhängt",
  intro: "Ein Einbauschrank nach Maß setzt sich aus sechs Kostenblöcken zusammen. Je Block sehen Sie, was ihn treibt, worauf Sie im Angebot achten und wo Sie selbst steuern. Einen pauschalen Zuschlag für Sondermaße berechnen wir nicht. Bei uns ergibt sich der Preis aus Material und Aufwand.",
  firstColLabel: "Kostenblock",
  columns: ["Was ihn treibt", "Worauf Sie im Angebot achten", "Wo Sie steuern können"],
  highlightColumn: 2,
  rows: [
    { label: "Größe und Korpus", values: ["Breite, Höhe bis zur Decke und Tiefe bestimmen Plattenmenge und Fertigungszeit", "Sind Blenden zur Decke und zu den Wänden mitgerechnet?", "Die Tiefe nach dem Inhalt wählen, nicht nach dem Maximum"] },
    { label: "Fronten und Oberfläche", values: ["Dekor, Lack, Furnier, Massivholz, Glas oder Spiegel, mit Griff oder grifflos", "Sind Material, Oberfläche und Kante je Front benannt?", "Festlegen, welche Fronten wirklich Lack, Glas oder Spiegel brauchen"] },
    { label: "Türsystem und Beschläge", values: ["Drehtür, Schiebe- oder Schwebetür, Klappen: Laufsystem, Türgröße, Zahl der Beschläge", "Ist die Dämpfung beim Schließen genannt, etwa Soft-Close?", "Das Türsystem nach dem Platz vor dem Schrank wählen"] },
    { label: "Innenausstattung", values: ["Fachböden, Kleiderstangen, Schubkästen mit Vollauszug, Hosenauszug, Kleiderlift, LED-Licht", "Ist erkennbar, wie viele Auszüge und welche Extras enthalten sind?", "Kleiderlift oder LED nur dort, wo Sie sie auch nutzen"] },
    { label: "Einbausituation", values: ["Schräge, Treppe, schiefe Altbauwand, Steckdosen, Sockelleisten, Fenster oder Balken", "Ist das Einpassen an Wand, Decke und Boden ausdrücklich enthalten?", "Kaum. Der Raum gibt das Maß vor, das Aufmaß zeigt den Aufwand"] },
    { label: "Lieferung und Montage", values: ["Zahl und Größe der Bauteile, Weg in den Raum, Arbeit beim Einpassen", "Wer montiert: der Betrieb selbst oder ein Subunternehmer?", "Den Raum zum Montagetermin frei und gut zugänglich halten"] },
  ],
};

/** SegmentCards: Laufmeter-H2 + Prüfliste (Kit §3 Aufgabe 2). Intro trägt den Geschwister-Link Dachschräge (Planer-Rechenbeispiel). */
export const ekLaufmeter = {
  heading: "Was kostet ein Einbauschrank pro Laufmeter?",
  intro:
    "Einen seriösen Pauschalpreis pro Laufmeter gibt es nicht. Hinter einem Meter Einbauschrank steckt in jedem Angebot etwas anderes: andere Höhen, Tiefen, Türen, Innenleben und Fronten, mal mit, mal ohne Mehrwertsteuer, Lieferung, Montage und Aufmaß. Wie der Möbelplaner konkrete Schränke rechnet, zeigt die Tabelle darunter, Beispiele für die Schräge stehen auch beim [Schrank unter der Dachschräge](/einbauschraenke-nach-mass/einbauschrank-dachschraege/). Vergleichbar wird ein Laufmeterpreis erst, wenn diese fünf Punkte geklärt sind.",
  segments: [
    { title: "Höhe und Tiefe", body: "Ein Meter raumhoch ist ein anderer Schrank als ein Meter auf halber Höhe. Fragen Sie, für welche Höhe und Tiefe der Meterpreis gilt. Sonst vergleichen Sie unterschiedliche Plattenmengen." },
    { title: "Türsystem", body: "Drehtür, Schiebetür oder Schwebetür brauchen andere Beschläge und machen verschieden viel Arbeit. Ein Meterpreis ohne Angabe des Türsystems sagt kaum etwas darüber, was später vor Ihnen steht." },
    { title: "Innenleben und Front", body: "Ist der Meter leer gerechnet oder mit Kleiderstange, Fachböden und Auszügen? Und welche Front ist gemeint: Dekor, Lack oder Furnier? Beides gehört in die Angabe. Sonst hängt die Zahl in der Luft." },
    { title: "Mehrwertsteuer, Lieferung und Montage", body: "Steht der Preis brutto oder netto? Sind Lieferung und Montage enthalten oder kommen sie hinzu? Erst wenn beides geklärt ist, lassen sich zwei Meterpreise nebeneinanderlegen." },
    { title: "Aufmaß und Anpassung", body: "Gilt der Preis für Ihre Maße oder für ein Rastermaß? Ist das Einpassen an schiefe Wände, Schräge und Sockelleisten enthalten? Und wer misst? Wer selbst misst, trägt das Risiko für jeden Zentimeter." },
  ],
};

/** SpecTable: Beispielpreise aus dem Möbelplaner (gerundet, nachgestellt 2026-11-25, wie PLANER_BEISPIELE in anfrage.ts). */
export const ekPlanerBeispiele = {
  heading: "Beispielpreise aus unserem Möbelplaner",
  intro: "Zur Orientierung, gerechnet in unserem Möbelplaner (Stand November 2026): Schränke in Weiß mit Türen, ohne Griffe und ohne Innenausstattung. Beim Einbauschrank und unter der Schräge zählt die Breite der Nische. Die Werte sind gerundet und zeigen den Möbelpreis inkl. MwSt., Lieferung und Montage kommen dazu. Den genauen Preis nennen wir nach dem Aufmaß.",
  firstColLabel: "Schrank",
  columns: ["1 m breit", "2 m breit", "3 m breit"],
  rows: [
    { label: "Einbauschrank in der Nische, 2,50 m hoch", values: ["rund 1.100 €", "rund 1.500 €", "rund 2.400 €"] },
    { label: "Frei stehender Schrank, 2,30 m hoch", values: ["rund 1.200 €", "rund 1.800 €", "rund 2.500 €"] },
    { label: "Schrank unter der Dachschräge, Kniestock 86 cm, Raumhöhe 2,30 m", values: ["rund 1.200 €", "rund 1.600 €", "im Planer nicht mit Türen möglich"] },
  ],
};

/** SpecTable: Dekor und Ausstattung am selben Schrank (Endpreis mit vier Türen, gerundet). */
export const ekPlanerAusstattung = {
  heading: "Was Dekor und Ausstattung ausmachen",
  intro: "Am Beispiel eines frei stehenden Schranks, 2 m breit und 2,30 m hoch, mit vier Türen, gerechnet in unserem Möbelplaner (Stand November 2026). Gerundet, Möbelpreis inkl. MwSt.",
  firstColLabel: "Ausführung",
  columns: ["Preis oder Aufschlag"],
  rows: [
    { label: "Weiß", values: ["rund 1.800 €"] },
    { label: "Hellgrau", values: ["rund 1.900 €"] },
    { label: "Eiche-Dekor", values: ["rund 2.200 €"] },
    { label: "Ohne Türen, offene Fächer", values: ["rund 1.350 €, die vier Türen machen rund 450 € aus"] },
    { label: "Einlegeboden", values: ["rund 45 € je Stück"] },
    { label: "Frontschubkasten", values: ["rund 60 € je Stück"] },
    { label: "Kleiderstange", values: ["rund 15 € je Stück"] },
    { label: "Innenschubkasten hinter einer Tür", values: ["rund 240 € je Stück"] },
    { label: "Griffe für vier Türen", values: ["rund 20 bis 25 €, ohne Griff ist Standard"] },
  ],
};

/** SegmentCards: Tabelle B, Einbausituationen (Kit §3 Aufgabe 4) als Karten, je ein Geschwister-Link. Keine Euro-Zahl. */
export const ekSituationen = {
  heading: "Was Ihre Einbausituation für den Preis bedeutet",
  intro: "Wo der Schrank hinkommt, entscheidet über einen großen Teil der Arbeit. An einer geraden Wand ist wenig anzupassen. Eine Schräge oder Treppe verlangt Zuschnitte, die nur an genau dieser Stelle passen. Ihren Preis nennen wir deshalb erst nach dem Aufmaß. Die verlinkten Seiten gehen je Situation ins Detail.",
  segments: [
    {
      title: "Gerade Wand im Schlafzimmer",
      body: "Der einfachste Fall beim Einpassen: Wand zu Wand, vom Boden bis zur Decke. Hier geben vor allem Breite, Türsystem und Innenleben den Ausschlag. Was ein [maßgefertigter Kleiderschrank](/einbauschraenke-nach-mass/kleiderschrank-nach-mass/) innen alles aufnehmen kann, zeigt die Seite dazu.",
    },
    {
      title: "Flur und Eingang",
      body: "Im Flur ist die Tiefe meist knapp, und Türen, Heizkörper und Lichtschalter geben die Maße vor. Den Aufwand bestimmen diese Aussparungen und was dazukommt, etwa Schuhfächer oder eine Sitzbank. Lösungen für schmale Flure zeigt der [Garderobenschrank nach Maß](/einbauschraenke-nach-mass/garderobe-nach-mass/).",
    },
    {
      title: "Dachschräge und Kniestock",
      body: "Korpus und Fronten folgen hier dem Winkel des Dachs. Den Aufwand treiben die Höhe der Schräge, die Breite und die Anschlüsse an Wand und Boden. Ein Rechenbeispiel aus unserem Möbelplaner für genau diesen Fall finden Sie beim [Schrank unter der Dachschräge](/einbauschraenke-nach-mass/einbauschrank-dachschraege/).",
    },
    {
      title: "Unter der Treppe",
      body: "Unter der Treppe hat jedes Fach eine andere Höhe. Wie viel Arbeit darin steckt, hängt an Form und Steigung der Treppe und an der Frage, ob Sie von vorne oder von der Seite herankommen. Wie sich der Raum unter den Stufen nutzen lässt, zeigt der [Treppenschrank nach Maß](/einbauschraenke-nach-mass/schrank-unter-treppe/).",
    },
  ],
};

/** SpecTable: Tabelle C, Möbelplaner-Schätzung vs. Angebot nach Aufmaß (Kit §3 Aufgabe 5). */
export const ekPlanerAngebot = {
  heading: "Schätzung im Möbelplaner oder Angebot: Was steckt drin?",
  intro: "Geben Sie im Möbelplaner Maße und Ausstattung ein, sehen Sie sofort einen Preis. Das ist eine Schätzung, gerechnet auf Ihre eigenen Maße. Das Angebot rechnen wir nach dem Aufmaß, mit allem, was Ihr Raum verlangt. Der Unterschied im Überblick:",
  firstColLabel: "Posten",
  columns: ["Schätzung im Möbelplaner", "Angebot nach Aufmaß"],
  highlightColumn: 1,
  rows: [
    { label: "Möbel", values: ["Möbelpreis für die Maße und Ausstattung, die Sie eingeben", "Gerechnet auf die Maße aus dem Aufmaß und Ihre Ausstattung"] },
    { label: "Mehrwertsteuer", values: ["Im angezeigten Möbelpreis enthalten", "Im Angebot angegeben"] },
    { label: "Lieferung", values: ["Nicht enthalten, kommt hinzu", "Welche Posten einzeln ausgewiesen sind, sehen Sie im Angebot"] },
    { label: "Montage", values: ["Nicht enthalten, kommt hinzu", "Durch unser eigenes Montageteam, deutschlandweit auf Anfrage"] },
    { label: "Aufmaß", values: ["Entfällt, Sie geben eigene Maße ein", "Kostenlos vor Ort durch uns, deutschlandweit auf Anfrage"] },
    { label: "Anpassung an Schräge und Wand", values: ["So genau wie Ihre eigenen Maße", "Schräge, schiefe Wände und Anschlüsse sind erfasst und eingeplant"] },
  ],
};

/** SpecTable: Tabelle D, Kostenposten-Vergleich (Kit §3 Aufgabe 6). Intro trägt den Parent-Link. */
export const ekVergleich = {
  heading: "Standardschrank, Konfigurator oder Tischler?",
  intro:
    "Das Preisschild zeigt nur einen Teil der Kosten, denn jeder der drei Wege lässt andere Posten bei Ihnen. Beim Standardschrank und beim Online-Konfigurator messen und planen Sie selbst. Beim [Einbauschrank vom Tischler](/einbauschraenke-nach-mass/) oder Schreiner liegen Aufmaß, Planung und Montage in einer Hand.",
  firstColLabel: "Kostenposten",
  columns: ["Standardschrank aus dem Möbelhaus", "Online-Konfigurator mit Versand", "Tischler vor Ort"],
  highlightColumn: 2,
  rows: [
    { label: "Passform", values: ["Rastermaß wie bei PAX, Lücken schließen Passblenden", "Gefertigt nach Ihrer eigenen Messung", "Nach Aufmaß, Wand zu Wand und bis zur Decke"] },
    { label: "Aufmaß", values: ["Sie messen selbst", "Sie messen selbst und geben die Maße online ein", "Vor Ort durch den Tischler, bei uns kostenlos"] },
    { label: "Planung", values: ["Sie kombinieren Module aus dem Sortiment", "Sie planen im Konfigurator selbst", "Gemeinsam mit Ihnen, bei uns als 3D-Planung"] },
    { label: "Montage", values: ["Selbst aufbauen oder Aufbauservice, je nach Anbieter", "Je nach Anbieter", "Bei uns durch das eigene Montageteam"] },
    { label: "Schräge und Altbau", values: ["Mit Passblenden an Schräge und schiefer Wand", "Winkel und Wand müssen Sie selbst exakt messen", "Misst der Tischler vor Ort mit und plant sie ein"] },
    { label: "Eigene Zeit und Werkzeug", values: ["Aufbau, Werkzeug und Zeit liegen bei Ihnen", "Messen und, je nach Anbieter, der Aufbau", "Abstimmen und freigeben, den Rest übernehmen wir"] },
  ],
};

/** SegmentCards: Typische Fehler beim Preisvergleich + Angebots-Check (Kit §3 Aufgabe 7, MUSS). */
export const ekFehler = {
  heading: "Typische Fehler beim Preisvergleich",
  intro: "Günstig oder teuer? Das lässt sich erst sagen, wenn klar ist, was in einem Angebot drinsteckt. Drei Fehler verzerren den Vergleich besonders oft.",
  segments: [
    { title: "Angebote mit unterschiedlichem Umfang vergleichen", body: "Zwei Summen sagen wenig, wenn verschiedene Leistungen dahinterstehen. Klären Sie neben Maßen, Türen und Ausstattung auch diese Fragen: Ist ein Stundensatz für Arbeiten vor Ort angesetzt? Ist die Anfahrt eingerechnet? Ist es ein Kostenanschlag oder ein verbindlicher Preis? Zeichnet sich ab, dass ein Kostenanschlag wesentlich überschritten wird, muss der Betrieb das nach § 649 BGB unverzüglich anzeigen. Sie können dann kündigen." },
    { title: "Altbauwände und Anschlüsse unterschätzen", body: "Kaum eine Altbauwand steht im Lot. Steckdosen, Sockelleisten, Fenster oder Heizungsrohre sitzen selten dort, wo ein Schrank sie gebrauchen kann, und das zeigt sich meist erst beim Aufmaß. Ein Standardschrank braucht dann Passblenden. Ein Preis ohne Aufmaß kann diese Anpassung gar nicht enthalten, weil noch niemand die Wand gesehen hat." },
    { title: "Innenleben erst nach dem Kauf planen", body: "Wer zuerst den Korpus bestellt und danach überlegt, was hinein soll, merkt oft zu spät, dass lange Mäntel unter der Stange keinen Platz haben oder Schubkästen fehlen. Nachrüsten kostet dann ein zweites Mal Zeit und Material. Legen Sie Hängelängen, Schuhe und Wäsche fest, bevor geplant wird." },
  ],
};

/** SegmentCards: 5 Spar-Hebel (Kit §3 Aufgabe 8). Hebel 1 trägt den Möbelplaner-Link. */
export const ekSparen = {
  heading: "Wo Sie beim Einbauschrank sparen können",
  intro: "Beim Maßschrank spart, wer früh weiß, was er braucht. Vier Hebel bewegen den Preis. An einer Stelle sollten Sie dagegen nicht sparen.",
  segments: [
    {
      title: "Varianten vorab vergleichen",
      body: "Im [Möbelplaner](/moebelplaner/) ändert sich der Möbelpreis direkt mit, wenn Sie Breite, Höhe oder Front umstellen. So sehen Sie, welche Entscheidung wie viel ausmacht. Die Skizze bringen Sie mit ins Gespräch, den Rest planen wir zusammen.",
    },
    { title: "Innenleben nach Nutzung", body: "Auszüge lohnen sich dort, wo Sie täglich greifen, etwa bei Wäsche und Socken. Für Kisten, Koffer und selten Genutztes reichen Fachböden. So bezahlen Sie Komfort nur dort, wo Sie ihn auch spüren." },
    { title: "Sonderoberflächen gezielt einsetzen", body: "Jede zusätzliche Oberfläche bringt eigenes Material und einen eigenen Arbeitsgang mit, also einen eigenen Kostenblock. Spiegel, Glas oder eine zweite Farbe wirken an einer Stelle am stärksten. Nicht an jeder Tür." },
    { title: "Möbel bündeln", body: "Planen Sie mehrere Möbel, etwa Einbauschrank und Küche, bleibt es bei einem Aufmaß, einer Montage und einem Ansprechpartner. Beides fertigen wir aus einer Hand in Espelkamp." },
    { title: "Nicht an Kante und Verarbeitung sparen", body: "Beim Preisvergleich fallen Kante und Verarbeitung kaum auf. Im Alltag haben Sie sie jeden Tag in der Hand. Wer hier spart, merkt es später, und dann ist kaum noch etwas zu machen. Was wir an dieser Stelle investieren, lesen Sie im nächsten Abschnitt." },
  ],
};

/** UspHighlight: Praxis-Einschub „Aus der Werkstatt in Espelkamp" (Kit §3 Aufgabe 9). Mittwald nur im Wortlaut von ueber-uns.ts. */
export const ekWerkstatt = {
  eyebrow: "Aus der Werkstatt in Espelkamp",
  heading: "Was im Preis steckt, das man nicht sieht",
  body: "Vieles, was einen Maßschrank ausmacht, sieht man später kaum. Wir fertigen in unserer Werkstatt auf 1.000 m² mit Homag-Technik und schließen die Kanten per PU-Kantenverleimung, fugenlos und feuchtigkeitsbeständig. Vor der Fertigung steht die 3D-Planung, damit eine schiefe Wand oder ein Balken nicht erst beim Einbau auffällt. Für eine Familie in Espelkamp-Mittwald haben wir einen raumhohen Einbauschrank mit versteckten Fugen, Massivholzgriffen und integrierter Beleuchtung geplant. Ergebnis: 40 % mehr Stauraum.",
  image: "/images/serienmoebel/serienfertigung-homag-plattenaufteilung.jpg",
  imageAlt: "Plattenmaterial an der Homag-Anlage, vorbereitet für die Serienfertigung",
};

/** ProcessSteps: „Wann aus der Schätzung ein Preis wird" (Kit §3 Aufgabe 10), kurz (Dedup gegen Geschwister-Prozesse). */
export const ekAblauf = {
  eyebrow: "Vom Richtwert zum Angebot",
  heading: "Wann aus der Schätzung ein Preis wird",
  image: "/images/schrank-unter-treppe/beratung-planung-nach-mass.jpg",
  imageAlt:
    "Beratungsgespräch am Holztisch: eine Frau im schwarzen Blazer und ein Mann besprechen gemeinsam Unterlagen",
  steps: [
    { title: "Skizze im Möbelplaner (optional)", description: "Wenn Sie mögen, stellen Sie Ihren Schrank vorab im Möbelplaner zusammen. Die Schätzung zeigt die Größenordnung, und mit der Skizze hat das Gespräch gleich einen Anfang." },
    { title: "Gespräch am Telefon oder vor Ort", description: "Wir sprechen über Raum, Inhalt und Wünsche. Und darüber, ob sich ein Schrank nach Maß in Ihrem Fall überhaupt lohnt." },
    { title: "Kostenloses Aufmaß", description: "Wir messen bei Ihnen vor Ort, mit Schräge, schiefen Wänden und allen Anschlüssen. Ab hier rechnen wir mit echten Maßen statt mit Schätzwerten." },
    { title: "3D-Planung und Angebot", description: "Aus dem Aufmaß entsteht die 3D-Planung, und auf ihr beruht Ihr individuelles Angebot. Jetzt ist die Zeit für Änderungen. Noch ist keine Platte zugeschnitten." },
    { title: "Freigabe, Fertigung, Montage", description: "Sobald Sie die Planung freigeben, geht der Schrank in Espelkamp in die Fertigung. Zum Termin, den wir gemeinsam vereinbaren, baut unser eigenes Montageteam ihn bei Ihnen ein." },
  ],
};

export const ekFaq = {
  heading: "Häufige Fragen zu den Kosten eines Einbauschranks",
  items: [
    { question: "Was kostet ein Einbauschrank mit Schiebetüren?", answer: "Auch für Schiebetüren gibt es keine Pauschale. Bei Schiebe- und Schwebetüren hängt der Aufwand am Laufsystem, an der Größe der Türflügel und an der Front, etwa Spiegel oder Glas. Die Breite bestimmt, wie viele Türen es werden. Vor dem Schrank brauchen Sie keinen Platz zum Aufschwenken. Im schmalen Zimmer ist genau das oft der Grund für die Schiebetür." },
    { question: "Was kostet ein Einbauschrank in einer Nische?", answer: "In der Nische bestimmt vor allem das Einpassen den Aufwand. Bestandswände stehen selten im Lot, der Schrank soll aber von Wand zu Wand sauber anschließen. Dafür ist die Fläche oft kleiner als bei einem Schrank vor einer ganzen Wand. Zur Orientierung aus unserem Möbelplaner (Stand November 2026): Ein Einbauschrank in Weiß mit Türen, 2,50 m hoch, kostet für eine 1 m breite Nische rund 1.100 Euro, für 2 m rund 1.500 Euro und für 3 m rund 2.400 Euro. Das ist der Möbelpreis inkl. MwSt., Lieferung und Montage kommen dazu. Den genauen Preis nennen wir nach dem Aufmaß. Wie wir in Nischen bauen, zeigt der [Einbauschrank für die Nische](/einbauschraenke-nach-mass/nischenschrank-nach-mass/)." },
    { question: "Was kostet eine begehbare Ankleide nach Maß?", answer: "Bei der Ankleide wird der Raum selbst zum Schrank. Die Kosten wachsen deshalb mit der Länge der bestückten Wände, mit dem Innenleben und mit Beleuchtung und Spiegel. Offene Regale haben weniger Frontfläche als geschlossene Schränke. Der Aufwand wandert damit von den Türen ins Innere. Eine Zahl gibt es erst, wenn der Raum vermessen ist. Formen und Raumbedarf zeigt der [Schrankraum nach Maß](/einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/)." },
    { question: "Wann lohnt sich ein Einbauschrank nach Maß nicht?", answer: "Ein Schrank nach Maß lohnt sich nicht, wenn ein Standardmaß ohne Anpassung in den Raum passt oder eine Übergangslösung genügt, etwa für ein paar Jahre in einer Mietwohnung. Dann reicht ein Systemschrank. Maß lohnt sich bei Schräge, Nische, Treppe, raumhohen Schränken und schiefen Wänden, also überall dort, wo Standardmöbel Lücken lassen." },
    { question: "Lohnt es sich, einen Einbauschrank selbst zu bauen?", answer: "Selbst gebaut kostet ein Einbauschrank Material, Zuschnitt, Kantenbearbeitung, Beschläge, Werkzeug und viele Stunden eigene Zeit. Für einen schlichten Schrank an einer geraden Wand kann die Rechnung aufgehen, wenn Sie Werkstatt und Erfahrung mitbringen. Schwierig wird es bei Winkeln, Schrägen und schiefen Wänden. Jeder Fehlschnitt kostet eine neue Platte." },
    {
      question: "Kann ich die Kosten für den Einbau steuerlich absetzen?",
      answer: "Unter Umständen ja. Nach [§ 35a EStG](https://www.gesetze-im-internet.de/estg/__35a.html) mindern Handwerkerleistungen für Renovierung, Erhaltung oder Modernisierung im eigenen Haushalt die Einkommensteuer um 20 Prozent der Arbeitskosten, bis zu einem gesetzlichen Höchstbetrag pro Jahr. Materialkosten zählen nicht. Voraussetzung sind eine Rechnung und die Zahlung auf das Konto des Betriebs. Den Einzelfall klärt Ihre Steuerberatung.",
    },
    { question: "Kann ich einen Einbauschrank nach Maß finanzieren?", answer: "Ja, im Privatbereich ist eine Finanzierung möglich. Die Einzelheiten klären wir mit Ihnen, sobald feststeht, was Ihr Schrank umfasst." },
    { question: "Wie lange dauert es von der Anfrage bis zur Montage?", answer: "Eine pauschale Dauer nennen wir nicht. Den Montagetermin vereinbaren wir mit Ihnen, sobald das Aufmaß genommen ist und Sie die 3D-Planung freigegeben haben." },
    { question: "Was sollte ich zum ersten Gespräch vorbereiten?", answer: "Ein genaues Maß brauchen Sie nicht, das nehmen wir beim Aufmaß vor Ort. Hilfreich sind grobe Breite und Höhe, Fotos der Wand mit Steckdosen, Schräge und Fenster sowie eine Liste, was in den Schrank soll: lange Kleider, Schuhe, Wäsche. Dazu Ihr Wunsch beim Türsystem, ein Budgetrahmen und, falls vorhanden, Ihre Skizze aus dem Möbelplaner." },
    { question: "Montiert Fast auch außerhalb von Ostwestfalen?", answer: "Ja. Aufmaß und Einbau übernimmt unser eigenes Team, deutschlandweit auf Anfrage, also auch weit über Ostwestfalen hinaus. Ob und wann wir bei Ihnen einbauen, klären wir im ersten Gespräch. Liefern können wir bundesweit." },
  ],
};

/**
 * JSON-LD: Article + FAQPage (1:1 zu den sichtbaren FAQ) + BreadcrumbList.
 * Kein Product/Offer/Service, kein Preis und keine priceRange (Kit §2).
 */
export const ekJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ekHero.title,
    description: ekMeta.metaDescription,
    url: `${SITE}${PATH}`,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    inLanguage: "de-DE",
    author: { "@type": "Organization", name: "Fast Systemmöbel", url: `${SITE}/` },
    publisher: {
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
    mainEntityOfPage: `${SITE}${PATH}`,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fast Systemmöbel", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Möbel nach Maß", item: `${SITE}/moebel-nach-mass/` },
      { "@type": "ListItem", position: 3, name: "Einbauschränke nach Maß", item: `${SITE}/einbauschraenke-nach-mass/` },
      { "@type": "ListItem", position: 4, name: "Einbauschrank Kosten", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ekFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];
