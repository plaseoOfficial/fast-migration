/**
 * Content for the `/einbauschraenke-nach-mass/schrank-unter-treppe/` page:
 * the "Schrank unter der Treppe nach Maß" cluster child under the Einbauschränke
 * pillar (`/einbauschraenke-nach-mass/`). Direkter Zwilling der Dachschräge-Seite
 * (einbauschrank-dachschraege.ts) — gleiche Sections, gleiche Props, gleiches
 * JSON-LD-Schema. Copy ist Treppe-spezifisch (Treppenschrank, Stufenschrank,
 * Stauraum unter der Treppe, keilförmiger Raum, Stufenlinie), um weder die
 * Dachschräge-Schwester (Drempel/Kniestock/Abseite) noch den generischen Pillar
 * ("Einbauschrank nach Maß") zu kannibalisieren.
 *
 * Copy folgt der Fast Systemmöbel Brand Voice (Sie-Anrede, handwerklich, konkret,
 * belegt, keine em-dashes). Siehe docs/seo/brand/BRAND_VOICE.md und
 * docs/seo/brand/FACTS.md. Firmen-/Zahlenfakten (Telefon, Adresse, Geo, 1996,
 * 2. Generation Andreas & Peter Fast, 4.000+ Projekte, 1.000 m² Fertigung,
 * 200 km Montage-Radius, Homag, PU-Kanten) stammen aus dem Pillar-Modul/FACTS.md.
 *
 * Bilder: echte Fast-Projektfotos unter /images/schrank-unter-treppe/
 * (1600×893, fürs Web komprimiert). Alt-Texte beschreiben das reale Motiv.
 */

const SITE = "https://www.fast-systemmoebel.de";
const PATH = "/einbauschraenke-nach-mass/schrank-unter-treppe/";
const IMG = "/images/schrank-unter-treppe";

export const suHero = {
  bgImage: `${IMG}/schrank-unter-treppe-nach-mass-stufen-schubladen.jpg`,
  imageAlt:
    "Schrank unter der Treppe nach Maß mit Schubladen in den Treppenstufen, Spiegel und Einbauschrank",
  title: "Einbauschrank unter der Treppe nach Maß, passgenau vom Tischler aus Espelkamp",
  intro:
    "Wir planen und bauen Ihren Einbauschrank unter der Treppe nach Maß, der jeden Zentimeter unter den Stufen nutzt. Vom Aufmaß der Treppe bis zur Montage alles aus einer Hand, aus dem eigenen Meisterbetrieb in Espelkamp. So wird aus dem dreieckigen Totraum unter der Treppe echter Stauraum, der wirklich passt.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Möbel nach Maß", href: "/moebel-nach-mass/" },
    { label: "Einbauschränke nach Maß", href: "/einbauschraenke-nach-mass/" },
    { label: "Schrank unter der Treppe" },
  ],
};

export const suIntroStats = {
  since: "seit 1996",
  sinceSub: "Bauen wir Schränke nach Maß.",
  heading: "Was ist ein Treppenschrank oder Einbauschrank unter der Treppe?",
  introBefore:
    "Ein Schrank unter der Treppe ist ein Möbel, dessen Korpus und Fronten exakt der",
  introBold: "Stufenlinie",
  introAfter:
    " folgen. Er nutzt den keilförmigen Raum unter der Treppe bis in die flache Ecke ganz hinten, dort, wo ein Standardschrank längst aufhört. Einen einzelnen Fachbegriff gibt es nicht, gebräuchlich sind Treppenschrank, Stufenschrank oder Einbauschrank unter der Treppe.",
  bandImage: `${IMG}/stauraum-unter-treppe-nach-mass-schubladen-led.jpg`,
  bandAlt:
    "Stauraum unter der Treppe nach Maß mit beleuchteten Schubladen-Stufen und offener Regalnische",
  col1Title: "Treppenschrank, Stufenschrank und Stauraum",
  col1Body:
    "Diese Begriffe meinen dasselbe Möbel, nur mit anderem Schwerpunkt. Als Stufenschrank bezeichnet man die Lösung, bei der jede Stufe ein eigenes Schubfach wird. Ein Treppenschrank fasst den ganzen Raum unter der Treppe als geschlossenen Korpus. Genau diesen keilförmigen Raum holen wir mit einem Einbauschrank unter der Treppe zurück, statt ihn zu verschenken.",
  col1CtaLabel: "Treppenschrank anfragen",
  col1CtaHref: "/kontakt/",
  col2Body:
    "Ein Schrank unter der Treppe lebt vom Verlauf der Stufen. Wir messen die Treppe an mehreren Punkten, erfassen jede Stufenhöhe und prüfen, ob die Ecken wirklich im rechten Winkel stehen. Aus diesen Werten fertigen wir Fronten und Korpus so, dass der Treppenschrank fugenlos an der Unterseite der Treppe anschließt. Kein toter Winkel, keine Passleiste, kein verschenkter Zentimeter.",
  counterTarget: 200,
  counterDuration: 2000,
  counterSuffix: " km",
  col3Title: "Montage-Radius um Espelkamp",
  col3Body:
    "Wir kommen zu Ihnen und nehmen die Treppe vor Ort auf, in ganz OWL und im Umkreis von rund 200 km um Espelkamp, zum Beispiel in Minden, Lübbecke, Osnabrück und Bielefeld. Treppen sind für uns Alltag, ob gerade oder gewendelt, im Neubau, im Altbau oder im offenen Wohnraum.",
  col3CtaLabel: "Treppenschrank online planen",
  col3CtaHref: "/moebelplaner/",
};

export const suCtas = {
  intro: {
    image: `${IMG}/beratung-planung-nach-mass.jpg`,
    heading: "Ihr Schrank unter der Treppe beginnt mit einem Blick auf Ihre Treppe",
    linkText: "Sprechen Sie mit uns über Ihren Raum unter der Treppe",
    href: "/kontakt/",
  },
  final: {
    image: `${IMG}/schrank-unter-treppe-nach-mass-stufen-schubladen.jpg`,
    heading: "Machen Sie aus dem toten Raum unter der Treppe echten Stauraum.",
    linkText: "Jetzt kostenloses Treppen-Aufmaß anfragen",
    href: "/kontakt/",
  },
  /** Tertiary conversion path (Playbook §6): phone as a trust anchor, clickable on mobile. */
  phone: {
    label: "Lieber direkt sprechen? Rufen Sie uns an:",
    number: "05771 9138312",
    href: "tel:+4957719138312",
  },
};

export const suProcess = {
  heading: "So planen wir Ihren Schrank unter der Treppe",
  paragraph:
    "Erst kommen wir zu Ihnen und nehmen die Treppe kostenlos vor Ort auf: jede Stufenhöhe, der Verlauf der Unterseite und jeder Anschluss an Wand und Boden. Dann planen wir in 3D, mit Einteilung, Fronten und passgenauem Verlauf entlang der Stufen, und Sie sehen Ihren Schrank, bevor das erste Bauteil entsteht. Nach Ihrer Freigabe fertigen wir auf Homag-Technik in Espelkamp, montiert wird zum verbindlichen Termin von unserem eigenen Team, das die Passung an der Treppe vor Ort feinjustiert.",
  paragraphStrong: "Made in Germany.",
  image: `${IMG}/montage-tischler-espelkamp.jpg`,
  imageAlt:
    "Monteure von Fast Systemmöbel beim Einbau eines Möbels nach Maß in der Werkstatt in Espelkamp",
};

/** Schrank types under the stairs: drive the MnmTypische rows AND the JSON-LD ItemList. */
export const suTypische = {
  heading: "Schränke unter der Treppe für jede Situation",
  image1: `${IMG}/stauraum-unter-treppe-eiche-lamellen-nach-mass.jpg`,
  image1Alt:
    "Stauraum unter der Treppe nach Maß mit Eiche-Lamellen-Front",
  image2: `${IMG}/schrank-unter-treppe-lamellen-nach-mass.jpg`,
  image2Alt:
    "Schrank unter der Treppe nach Maß mit Lamellen-Front als Raumteiler",
  row1: [
    {
      title: "Stufenschrank mit Auszügen",
      description:
        "Bei dieser Lösung wird jede Stufe ein eigenes Schubfach. Was oben leicht erreichbar ist, kommt nach vorne, selten Gebrauchtes nach hinten. So verwandeln wir die Treppe von der Seite in eine ganze Reihe passgenauer Auszüge, ohne einen Zentimeter zu verschenken.",
    },
    {
      title: "Schrank mit Türen unter der Treppe",
      description:
        "Der große, ruhige Korpus für den Raum unter der Treppe. Hinter Dreh- oder Schiebetüren verschwindet, was nicht gesehen werden soll, von der Garderobe bis zum Staubsauger. Die Türen folgen der Stufenlinie und schließen bündig mit der Unterseite der Treppe ab.",
    },
    {
      title: "Apothekerauszug für die tiefe Ecke",
      description:
        "Ganz hinten, wo die Treppe fast den Boden berührt, kommt man mit festen Fächern schlecht heran. Ein Apothekerauszug oder ein Rollelement holt den Stauraum aus der niedrigen Ecke nach vorne, sodass Sie herankommen, ohne sich zu bücken.",
    },
  ],
  row2: [
    {
      title: "Offene Regale und Nische an der Treppe",
      description:
        "Nicht alles muss hinter Türen verschwinden. Offene, dem Stufenverlauf folgende Regalfächer setzen Bücher oder Deko in Szene und lassen den Bereich unter der Treppe luftiger wirken, oft als ruhiger Blickfang im offenen Wohnraum.",
    },
    {
      title: "Garderobe unter der Treppe",
      description:
        "Steht die Treppe im Eingang, wird der Raum darunter zur kompletten Garderobe. Haken, Sitzfläche, Schuhauszüge und geschlossener Stauraum fassen wir in einem Möbel zusammen, das auch im schmalen Flur alles aufnimmt.",
    },
    {
      title: "Sitzbank mit Stauraum",
      description:
        "Wo die Treppe nur wenig Höhe lässt, wird aus dem Podest eine Sitzbank. Unter der Sitzfläche entsteht geschlossener Stauraum, oben eine gemütliche Lese- oder Ankleideecke, genau auf die niedrige Zone unter den Stufen zugeschnitten.",
    },
  ],
};

export const suWarum = {
  heading: "Warum ein Schrank unter der Treppe nach Maß muss",
  paragraph:
    "Unter der Treppe passt kein Standardmaß. Fertigschränke und Modelle von der Stange stehen senkrecht im Raum und enden dort, wo die Stufen tiefer werden, über dem Schrank bleibt der keilförmige Raum offen. Auch ein IKEA-Schrank oder PLATSA lässt die niedrige Ecke ungenutzt. Wir bauen den Schrank stattdessen zentimetergenau bis unter die Stufen, mit Fronten, die dem Verlauf der Treppe exakt folgen. Die tiefe Ecke ganz hinten und die niedrige Zone unter den ersten Stufen werden so vom Problem zur Stellfläche. Genau die verwinkelten Räume, an denen Standardmöbel scheitern, sind für uns Alltag, wie bei allen unseren [maßgefertigten Einbauschränken](/einbauschraenke-nach-mass/).",
  images: [
    {
      src: `${IMG}/stauraum-unter-treppe-nach-mass-schubladen-led.jpg`,
      alt: "Stauraum unter der Treppe nach Maß mit beleuchteten Schubladen-Stufen und offener Regalnische",
      width: 1600,
      height: 893,
    },
  ],
};

export const suWarum2 = {
  heading: "Selber bauen, IKEA oder vom Tischler?",
  paragraph:
    "Einen Schrank unter der Treppe selber bauen kann sich lohnen, wenn die Treppe gerade verläuft, die Ansprüche einfach sind und Sie Zeit und Werkzeug haben. Ein IKEA- oder PLATSA-Bausatz ist günstig, bleibt aber ein senkrechtes Standardmaß, das den keilförmigen Raum unter der Treppe nicht ausnutzt und die tiefe Ecke offen lässt. Sobald Stufenverlauf, niedrige Höhe und eine gewendelte Treppe zusammenkommen, spielt die Maßanfertigung ihre Stärke aus: Sie nutzt jeden Zentimeter und schließt sauber an die Unterseite der Treppe an. Einen Pauschalpreis gibt es dabei nicht, denn jeder Schrank unter der Treppe ist ein Unikat. Der Preis richtet sich nach der Größe, den Fronten und dem Material, der Innenausstattung mit Auszügen und Beleuchtung und der Einbausituation. Eine gewendelte Treppe oder eine schiefe Wand ist aufwändiger als eine gerade Treppe, und Beschläge wie Schiebetüren oder Apothekerauszüge wirken sich aus. Nach dem kostenlosen Aufmaß sagen wir Ihnen offen, was den Preis bei Ihrer Treppe bestimmt, und Sie erhalten ein klares, individuelles Angebot ohne versteckte Kosten. Wie solche Lösungen am Ende aussehen, zeigen unsere [Referenzprojekte](/referenzen/).",
  images: [
    {
      src: `${IMG}/team-fast-systemmoebel-espelkamp.jpg`,
      alt: "Das Team von Fast Systemmöbel, Meisterbetrieb für Möbel nach Maß aus Espelkamp",
      width: 1600,
      height: 900,
    },
  ],
};

export const suGeschichte = {
  heading: "Schrankhandwerk aus fast drei Jahrzehnten",
  subheading: "Vom Garagenbetrieb zum Meisterbetrieb",
  anchorImage: `${IMG}/team-meisterbetrieb-fast-espelkamp.jpg`,
  anchorImageAlt:
    "Fast Systemmöbel: Meisterbetrieb für Möbel nach Maß aus Espelkamp, seit 1996",
  stats: [
    { value: "1996", label: "Gegründet" },
    { value: "4.000+", label: "Projekte" },
    { value: "1.000 m²", label: "Eigene Fertigung" },
    { value: "200 km", label: "Montage-Radius" },
  ],
  paragraphs: [
    "Fast Systemmöbel begann 1996 als Ein-Mann-Betrieb in einer Garage in Rahden-Tonnenheide. 2001 zog die Fertigung nach Espelkamp, und aus dem Gründungsbetrieb von Johann Fast wurde ein Familienunternehmen.",
    "Heute führen Andreas und Peter Fast den Betrieb mit, die zweite Generation, seit 2010 fest im Unternehmen. Mehr als 4.000 Projekte zeigen, was dabei entstanden ist: ein Meisterbetrieb mit über 1.000 m² Fertigung, moderner Homag-Technik und einem festen Team. Darunter unzählige Treppen, Stufen und verwinkelte Ecken, die wir zu passgenauem Stauraum gemacht haben.",
    "Jeder Schrank entsteht bei uns im Haus. Gefertigt in Espelkamp, montiert im Umkreis von rund 200 km, freistehende Schränke liefern wir deutschlandweit.",
  ],
};

export const suMoebelplaner = {
  heading: "Ihren Raum unter der Treppe online vorplanen, den Rest übernehmen wir",
  body:
    "Mit unserem Möbelplaner stellen Sie Ihren Schrank unter der Treppe online zusammen. Maße, Fronten, Einteilung und Auszüge sehen Sie direkt im 3D-Konfigurator, so haben Sie sofort ein Bild von Ihrem Treppenschrank vor Augen. Den Rest übernehmen wir: kostenloses Aufmaß der Treppe vor Ort, Beratung, Fertigung in Espelkamp und Montage durch unser eigenes Team. Aus Ihrer Online-Planung wird ein Schrank unter der Treppe nach Maß.",
  ctaLabel: "Zum Möbelplaner",
  ctaHref: "/moebelplaner/",
  image: `${IMG}/aufmass-planung-nach-mass.jpg`,
  imageAlt:
    "Planung eines Möbels nach Maß bei Fast Systemmöbel, Beratung am Musterplan",
};

export const suTestimonialsHeading = "Was unsere Kunden über ihre Schränke unter der Treppe sagen";

export const suFaq = {
  heading: "Häufige Fragen zu Schränken unter der Treppe",
  items: [
    {
      question: "Wie heißt der Schrank unter der Treppe?",
      answer:
        "Einen einzelnen Fachbegriff gibt es nicht. Gebräuchlich sind Treppenschrank, Stufenschrank oder schlicht Einbauschrank unter der Treppe. Als Stufenschrank bezeichnet man meist die Variante, bei der jede Stufe ein eigenes Schubfach wird, als Treppenschrank eher den geschlossenen Korpus, der den ganzen Raum unter der Treppe fasst. Gemeint ist in allen Fällen ein Möbel nach Maß, das dem Verlauf der Stufen folgt.",
    },
    {
      question: "Was kostet ein Schrank unter der Treppe?",
      answer:
        "Einen Pauschalpreis gibt es nicht, denn jeder Schrank unter der Treppe ist ein Unikat. Der Preis richtet sich nach der Größe, den Fronten und dem Material, der Innenausstattung wie Auszügen und Beleuchtung und der Einbausituation. Eine gewendelte Treppe oder eine schiefe Wand ist aufwändiger als eine gerade Treppe, und Beschläge wie Schiebetüren oder Apothekerauszüge wirken sich aus. Nach einem kurzen Gespräch und dem kostenlosen Aufmaß erhalten Sie ein klares, individuelles Angebot ohne versteckte Kosten.",
    },
    {
      question: "Wie heißt der Raum unter der Treppe?",
      answer:
        "Für den Raum unter der Treppe gibt es keinen festen Fachbegriff, oft ist einfach vom Stauraum oder Totraum unter der Treppe die Rede. Es ist der keilförmige, dreieckige Bereich, der unter den Stufen entsteht und meist ungenutzt bleibt. Genau diesen Raum machen wir mit einem Schrank nach Maß nutzbar, bis in die niedrige Ecke ganz hinten.",
    },
    {
      question: "Was stellt man unter die Treppe?",
      answer:
        "Fast alles, was sonst den Wohnraum vollstellt. Im Eingang wird der Raum unter der Treppe zur Garderobe mit Schuhauszügen und Sitzbank. Im Wohnbereich nimmt er Bücher, Deko oder die Hausbar auf, hinter Türen verschwinden Staubsauger, Vorräte oder Akten. Wir planen die Einteilung nach dem, was bei Ihnen hinein soll, und richten Auszüge, Fächer und Türen genau danach aus.",
    },
    {
      question: "Schiebetür, Drehtür oder Auszüge unter der Treppe?",
      answer:
        "Das hängt vom Platz vor der Treppe ab. Schiebetüren gleiten zur Seite und brauchen keinen Raum zum Aufschwenken, das ist im schmalen Flur oft die bessere Wahl. Drehtüren geben den Innenraum ganz frei, brauchen davor aber Bewegungsfläche. Für die tiefe, niedrige Ecke setzen wir häufig Auszüge oder einen Apothekerauszug statt Türen ein, weil man so ohne Bücken herankommt. Beim Aufmaß empfehlen wir Ihnen die Lösung, die zu Ihrer Treppe passt.",
    },
    {
      question: "Kann man die tiefe Ecke ganz hinten unter der Treppe nutzen?",
      answer:
        "Ja. Gerade die Zone, in der die Treppe fast den Boden berührt, lässt sich mit ausziehbaren Elementen nutzen. Auszüge und Rollelemente holen den Stauraum aus der tiefen Ecke nach vorne, sodass Sie herankommen, ohne in den Schrank zu kriechen. Feste, offene Fächer eignen sich für die höheren Bereiche unter den oberen Stufen. So bleibt kein toter Winkel unter der Treppe ungenutzt.",
    },
    {
      question: "Wie läuft das Aufmaß bei einer Treppe?",
      answer:
        "Das Aufmaß ist kostenlos und findet bei Ihnen vor Ort statt. Wir messen die Treppe an mehreren Punkten, erfassen jede Stufenhöhe und den Verlauf der Unterseite und prüfen, ob die Ecken wirklich im rechten Winkel stehen. Auch Anschlüsse an Wand, Geländer und Boden nehmen wir auf. Aus diesen Werten planen wir Ihren Schrank so, dass er fugenlos unter der Treppe anschließt. Eingebaut wird anschließend von unserem eigenen Team im Umkreis von rund 200 km um Espelkamp.",
    },
  ],
};

const suSchrankTypes = [...suTypische.row1, ...suTypische.row2].map((t) => t.title);

/**
 * JSON-LD for the Treppe cluster child. Same scope/convention as the Dachschräge
 * sibling (einbauschrank-dachschraege.ts): Service (provider=Organization,
 * serviceType, areaServed, hasOfferCatalog), BreadcrumbList (4 levels), FAQPage
 * (1:1 to the visible FAQ), ItemList. No Product with an invented price, no
 * AggregateRating (Preise sind immer individuell, siehe FACTS.md).
 */
export const suJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Schrank unter der Treppe nach Maß",
    serviceType: "Maßgefertigte Schränke unter der Treppe",
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
      name: "Schränke unter der Treppe nach Maß",
      itemListElement: suSchrankTypes.map((name) => ({
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
      { "@type": "ListItem", position: 3, name: "Einbauschränke nach Maß", item: `${SITE}/einbauschraenke-nach-mass/` },
      { "@type": "ListItem", position: 4, name: "Schrank unter der Treppe", item: `${SITE}${PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: suFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Schränke unter der Treppe nach Maß: Typen",
    itemListElement: suSchrankTypes.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];
