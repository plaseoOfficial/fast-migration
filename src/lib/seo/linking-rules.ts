/**
 * Internal-linking model as machine-readable data — the single source of truth
 * for the `audit:links` script and the `intern-verlinkung` agent.
 *
 * This is the typed encoding of the SEO strategy documented narratively in
 * `docs/seo/internal-linking.md` (silo model, click-depth ≤ 3, hub→cluster→spoke,
 * MUSS/SOLL/DARF-NICHT matrix, anchor diversity, link budgets). Original source:
 * the "07 Interne Verlinkung" planning sheet.
 *
 * Pure data + types only (no React, no runtime deps) so a Node script can import
 * it via `--experimental-strip-types`, exactly like `src/lib/sections/catalog-data.ts`.
 *
 * MAINTENANCE: when a new page ships, add/flip its node here (`built: true`) and
 * set `parent`. The audit then auto-resolves which backlog links became possible.
 */

// ---------------------------------------------------------------------------
// Page graph
// ---------------------------------------------------------------------------

export type PageType =
  | "homepage"
  | "pillar-hub"
  | "cluster-pillar"
  | "product"
  | "ratgeber-pillar"
  | "cluster-article"
  | "conversion"
  | "brand"
  | "legal";

export type Audience = "privat" | "gewerbe" | "neutral";

export interface PageNode {
  /** Canonical path with trailing slash (matches `trailingSlash: true` + sitemap). */
  slug: string;
  type: PageType;
  /** Thematic silo id; "" for neutral pages (home/conversion/brand/legal). */
  silo: string;
  audience: Audience;
  /** Direct parent slug (breadcrumb + up-link source); null for level-0 pages. */
  parent: string | null;
  /** Whether the page exists today. `false` = planned (backlog target). */
  built: boolean;
  /** Content module basename under src/lib/content/ that holds this page's links. */
  contentModule?: string;
  /**
   * MUSS-Targets, die für DIESE Seite bewusst NICHT gelten (Per-Seite-Ausnahme
   * vom typweiten Pflicht-Link). Beispiel: B2B-Serienseiten konvertieren über
   * persönlichen Kontakt (/kontakt/), nicht über den Privat-Möbelplaner.
   */
  mustExempt?: string[];
  /**
   * Eigenes Linkbudget statt `RULES[type].maxBodyLinks`. Nur mit Begründung im
   * Kommentar am Knoten — z. B. /referenzen/: Jede Projektkarte soll auf die
   * genaueste Leistungsseite zeigen, das Budget wächst mit den Projekten.
   */
  maxBodyLinks?: number;
}

export const PAGES: PageNode[] = [
  // Level 0
  { slug: "/", type: "homepage", silo: "", audience: "neutral", parent: null, built: true, contentModule: "home" },

  // Privat silo
  { slug: "/moebel-nach-mass/", type: "pillar-hub", silo: "moebel", audience: "privat", parent: "/", built: true, contentModule: "moebel-nach-mass" },
  { slug: "/kuechen-nach-mass/", type: "cluster-pillar", silo: "kuechen", audience: "privat", parent: "/moebel-nach-mass/", built: true, contentModule: "kuechen-nach-mass" },
  // Planned privat sibling clusters (hub→cluster MUSS, blocked until built)
  { slug: "/einbauschraenke-nach-mass/", type: "cluster-pillar", silo: "einbauschraenke", audience: "privat", parent: "/moebel-nach-mass/", built: true, contentModule: "einbauschraenke-nach-mass" },
  // Einbauschränke spoke (cluster child): Schrank für Dachschräge nach Maß
  { slug: "/einbauschraenke-nach-mass/einbauschrank-dachschraege/", type: "product", silo: "einbauschraenke", audience: "privat", parent: "/einbauschraenke-nach-mass/", built: true, contentModule: "einbauschrank-dachschraege" },
  // Einbauschränke spoke (cluster child): Schrank unter der Treppe nach Maß
  { slug: "/einbauschraenke-nach-mass/schrank-unter-treppe/", type: "product", silo: "einbauschraenke", audience: "privat", parent: "/einbauschraenke-nach-mass/", built: true, contentModule: "schrank-unter-treppe" },
  // Einbauschränke spoke (cluster child): Kleiderschrank nach Maß (Schlafzimmer-Frontlösung)
  { slug: "/einbauschraenke-nach-mass/kleiderschrank-nach-mass/", type: "product", silo: "einbauschraenke", audience: "privat", parent: "/einbauschraenke-nach-mass/", built: true, contentModule: "kleiderschrank-nach-mass" },
  // Einbauschränke spoke (cluster child): Garderobe nach Maß (Flur/Eingangsbereich)
  { slug: "/einbauschraenke-nach-mass/garderobe-nach-mass/", type: "product", silo: "einbauschraenke", audience: "privat", parent: "/einbauschraenke-nach-mass/", built: true, contentModule: "garderobe-nach-mass" },
  { slug: "/badmoebel-nach-mass/", type: "cluster-pillar", silo: "badmoebel", audience: "privat", parent: "/moebel-nach-mass/", built: true, contentModule: "badmoebel-nach-mass" },
  // Badmöbel spoke (cluster child): Waschtisch nach Maß (Platte + Becken)
  { slug: "/badmoebel-nach-mass/waschtisch-nach-mass/", type: "product", silo: "badmoebel", audience: "privat", parent: "/badmoebel-nach-mass/", built: true, contentModule: "waschtisch-nach-mass" },
  // Badmöbel spoke (cluster child): Waschtischunterschrank nach Maß (Korpus unter dem Becken)
  { slug: "/badmoebel-nach-mass/waschtischunterschrank-nach-mass/", type: "product", silo: "badmoebel", audience: "privat", parent: "/badmoebel-nach-mass/", built: true, contentModule: "waschtischunterschrank-nach-mass" },
  // Badmöbel spoke (cluster child): Badschrank nach Maß (Stauraum abseits des Waschplatzes)
  { slug: "/badmoebel-nach-mass/badschrank-nach-mass/", type: "product", silo: "badmoebel", audience: "privat", parent: "/badmoebel-nach-mass/", built: true, contentModule: "badschrank-nach-mass" },
  { slug: "/wohnmoebel-nach-mass/", type: "cluster-pillar", silo: "wohnmoebel", audience: "privat", parent: "/moebel-nach-mass/", built: true, contentModule: "wohnmoebel-nach-mass" },
  // Wohnmöbel spoke (cluster child): Regal nach Maß (offenes Regal, flexible Fläche)
  { slug: "/wohnmoebel-nach-mass/regal-nach-mass/", type: "product", silo: "wohnmoebel", audience: "privat", parent: "/wohnmoebel-nach-mass/", built: true, contentModule: "regal-nach-mass" },
  // Wohnmöbel spoke (cluster child): Bücherregal nach Maß ("Buch als Maßgabe", Fachtiefen/Statik)
  { slug: "/wohnmoebel-nach-mass/buecherregal-nach-mass/", type: "product", silo: "wohnmoebel", audience: "privat", parent: "/wohnmoebel-nach-mass/", built: true, contentModule: "buecherregal-nach-mass" },
  { slug: "/hauswirtschaftsraum/", type: "cluster-pillar", silo: "hauswirtschaftsraum", audience: "privat", parent: "/moebel-nach-mass/", built: true, contentModule: "hauswirtschaftsraum" },
  // Planned kuechen spokes (cluster→product/ratgeber MUSS, blocked until built)
  { slug: "/kuechen-nach-mass/kueche-nach-mass-kosten/", type: "ratgeber-pillar", silo: "kuechen", audience: "privat", parent: "/kuechen-nach-mass/", built: false },
  { slug: "/kuechen-nach-mass/kueche-planen/", type: "cluster-article", silo: "kuechen", audience: "privat", parent: "/kuechen-nach-mass/", built: true, contentModule: "kueche-planen" },
  { slug: "/kuechen-nach-mass/l-kueche-nach-mass/", type: "product", silo: "kuechen", audience: "privat", parent: "/kuechen-nach-mass/", built: false },
  { slug: "/kuechen-nach-mass/kuechenzeile-nach-mass/", type: "product", silo: "kuechen", audience: "privat", parent: "/kuechen-nach-mass/", built: true, contentModule: "kuechenzeile-nach-mass" },
  { slug: "/kuechen-nach-mass/kueche-mit-dachschraege/", type: "product", silo: "kuechen", audience: "privat", parent: "/kuechen-nach-mass/", built: true, contentModule: "kueche-mit-dachschraege" },

  // Gewerbe silo (flat URLs; clusters of the Gewerbe hub by topic, not by nesting)
  { slug: "/gewerbe/", type: "pillar-hub", silo: "gewerbe", audience: "gewerbe", parent: "/", built: true, contentModule: "gewerbe" },
  { slug: "/ladenbau/", type: "cluster-pillar", silo: "ladenbau", audience: "gewerbe", parent: "/gewerbe/", built: true, contentModule: "ladenbau" },
  { slug: "/bueroeinrichtung/", type: "cluster-pillar", silo: "buero", audience: "gewerbe", parent: "/gewerbe/", built: true, contentModule: "bueroeinrichtung" },
  { slug: "/gastronomieeinrichtung/", type: "cluster-pillar", silo: "gastronomie", audience: "gewerbe", parent: "/gewerbe/", built: true, contentModule: "gastronomieeinrichtung" },
  { slug: "/serienmoebel/", type: "cluster-pillar", silo: "serienmoebel", audience: "gewerbe", parent: "/gewerbe/", built: true, contentModule: "serienmoebel", mustExempt: ["/moebelplaner/"] },
  { slug: "/praxiseinrichtung/", type: "cluster-pillar", silo: "praxis", audience: "gewerbe", parent: "/gewerbe/", built: true, contentModule: "praxiseinrichtung" },
  // Büro-Cluster: Produkt-Spokes unter dem Büroeinrichtung-Pillar (verschachtelte URLs)
  { slug: "/bueroeinrichtung/bueroplanung/", type: "product", silo: "buero", audience: "gewerbe", parent: "/bueroeinrichtung/", built: true, contentModule: "bueroplanung" },
  { slug: "/bueroeinrichtung/bueromoebel-nach-mass/", type: "product", silo: "buero", audience: "gewerbe", parent: "/bueroeinrichtung/", built: true, contentModule: "bueromoebel-nach-mass" },

  // Conversion + brand (neutral)
  { slug: "/moebelplaner/", type: "conversion", silo: "", audience: "neutral", parent: "/", built: true },
  { slug: "/kontakt/", type: "conversion", silo: "", audience: "neutral", parent: "/", built: true },
  { slug: "/ueber-uns/", type: "brand", silo: "", audience: "neutral", parent: "/", built: true, contentModule: "ueber-uns" },

  // Planned neutral trust/info pages (backlog targets)
  // Portfolio: Jede Projektkarte verlinkt die genaueste Leistungsseite (Link-Analyse
  // 02.10.2026). Das sind mehr Ziele als die 10 einer Marken-Seite.
  { slug: "/referenzen/", type: "brand", silo: "", audience: "neutral", parent: "/", built: true, contentModule: "referenzen", maxBodyLinks: 14 },
  { slug: "/leistungen/", type: "brand", silo: "", audience: "neutral", parent: "/", built: true, contentModule: "leistungen" }, // Übersicht aller Leistungen; Liste wird aus PAGES generiert (leistungen-data.ts)
  { slug: "/ablauf-massanfertigung/", type: "brand", silo: "", audience: "neutral", parent: "/", built: false },
  { slug: "/liefergebiet-montage/", type: "brand", silo: "", audience: "neutral", parent: "/", built: false },
  { slug: "/faq/", type: "brand", silo: "", audience: "neutral", parent: "/", built: false },

  // Legal (outside content hierarchy)
  { slug: "/impressum/", type: "legal", silo: "", audience: "neutral", parent: "/", built: true },
  { slug: "/datenschutz/", type: "legal", silo: "", audience: "neutral", parent: "/", built: true },
  { slug: "/agb/", type: "legal", silo: "", audience: "neutral", parent: "/", built: true },
];

// ---------------------------------------------------------------------------
// Link rules per page type (MUSS / SOLL / DARF NICHT + budgets)
// ---------------------------------------------------------------------------

/**
 * A link target is either a concrete slug ("/kontakt/") or a symbolic keyword
 * the audit resolves against the page graph:
 *  - "parent"            → the node's direct parent slug
 *  - "own-children"      → every built node whose parent === this slug
 *  - "sibling-clusters"  → other cluster-pillars sharing the same parent hub
 *  - "own-cluster-spokes"→ built product/ratgeber/article nodes under this cluster
 *  - "own-ratgeber"      → built ratgeber-pillar nodes under this cluster
 *  - "sibling-spokes"    → built product/ratgeber/article nodes with the SAME
 *                          parent as this node (Geschwister im eigenen Cluster)
 */
export type SymbolicTarget =
  | "parent"
  | "own-children"
  | "sibling-clusters"
  | "own-cluster-spokes"
  | "own-ratgeber"
  | "sibling-spokes";

export interface TargetRule {
  /** Concrete slug (leading "/") or a SymbolicTarget keyword. */
  target: string | SymbolicTarget;
  /** Human note / rationale (shown in audit + agent output). */
  why?: string;
  /**
   * Mindestanzahl der aufgelösten Ziele, die verlinkt sein müssen. Fehlt das Feld,
   * gilt „alle“. Beispiel: `sibling-spokes` mit `min: 1` = mindestens ein
   * Geschwister, nicht jedes. Greift nur, wenn das Ziel überhaupt etwas auflöst
   * (Seite ohne gebaute Geschwister → keine Pflicht).
   */
  min?: number;
}

/** Forbidden link patterns (DARF NICHT). */
export type ForbiddenRule =
  | "cross-silo" // links into another silo (privat↔gewerbe or cluster↔cluster) except hub↔hub
  | "skip-hub-level" // jumps a hierarchy level (e.g. homepage → product)
  | "legal-in-body" // body link to /impressum, /datenschutz, /agb
  | "exceed-budget"; // more body links than maxBodyLinks

export interface TypeRule {
  maxBodyLinks: number;
  maxNavFooter: number;
  /** Minimum echter kontextueller In-Content-Links ([Anker](/ziel/)-Marker im Fließtext). */
  minInlineLinks: number;
  must: TargetRule[];
  soll: TargetRule[];
  darfNicht: ForbiddenRule[];
}

export const RULES: Record<PageType, TypeRule> = {
  homepage: {
    maxBodyLinks: 15,
    maxNavFooter: 20,
    minInlineLinks: 2,
    must: [
      { target: "/moebel-nach-mass/", why: "Primärer Privat-Hub" },
      { target: "/gewerbe/", why: "Primärer Gewerbe-Hub" },
      { target: "/moebelplaner/", why: "Haupt-CTA / Conversion" },
      { target: "/kontakt/", why: "Conversion-Ziel" },
    ],
    soll: [
      { target: "/kuechen-nach-mass/", why: "Stärkstes P1-Cluster" },
      { target: "/referenzen/", why: "Trust" },
      { target: "/ablauf-massanfertigung/", why: "Prozessvertrauen" },
    ],
    darfNicht: ["skip-hub-level", "legal-in-body"],
  },
  "pillar-hub": {
    maxBodyLinks: 12,
    maxNavFooter: 20,
    minInlineLinks: 3,
    must: [
      { target: "parent", why: "Breadcrumb-Aufwärtslink" },
      { target: "own-children", why: "Hub & Spoke — alle eigenen Cluster-Pillars" },
      { target: "/moebelplaner/", why: "Conversion-CTA" },
      { target: "/kontakt/", why: "Conversion-CTA" },
    ],
    soll: [
      { target: "/ablauf-massanfertigung/", why: "Prozess-Trust" },
      { target: "/referenzen/", why: "Social Proof" },
    ],
    darfNicht: ["cross-silo", "skip-hub-level", "exceed-budget"],
  },
  "cluster-pillar": {
    maxBodyLinks: 10,
    maxNavFooter: 20,
    minInlineLinks: 3,
    must: [
      { target: "parent", why: "Aufwärtslink zum Pillar-Hub (Breadcrumb)" },
      { target: "own-cluster-spokes", why: "Vollständige Spoke-Abdeckung (Produktseiten)" },
      { target: "own-ratgeber", why: "Eigener Kosten-/Ratgeber-Pillar" },
      { target: "/moebelplaner/", why: "Conversion-CTA" },
    ],
    soll: [
      { target: "/referenzen/", why: "Trust" },
      { target: "/kontakt/", why: "Conversion" },
    ],
    darfNicht: ["cross-silo", "exceed-budget"],
  },
  product: {
    maxBodyLinks: 7,
    maxNavFooter: 20,
    minInlineLinks: 2,
    must: [
      { target: "parent", why: "Aufwärtslink zum Cluster-Pillar (Breadcrumb)" },
      { target: "sibling-spokes", min: 1, why: "Mind. 1 Geschwister im eigenen Cluster (Querverlinkung; Rücklink beim Geschwister nachtragen)" },
      { target: "/moebelplaner/", why: "Primärer CTA" },
      { target: "/kontakt/", why: "Conversion-Fallback" },
    ],
    soll: [
      { target: "own-ratgeber", why: "Kosten-Ratgeber des Clusters" },
      { target: "/ablauf-massanfertigung/", why: "Vertrauensaufbau" },
      { target: "/referenzen/", why: "Social Proof" },
    ],
    darfNicht: ["cross-silo", "exceed-budget"],
  },
  "ratgeber-pillar": {
    maxBodyLinks: 8,
    maxNavFooter: 20,
    minInlineLinks: 3,
    must: [
      { target: "parent", why: "Aufwärtslink zum Cluster-Pillar (Breadcrumb)" },
      { target: "own-cluster-spokes", why: "Informational → Transaktional überführen" },
      { target: "/moebelplaner/", why: "Conversion am Textende" },
    ],
    soll: [
      { target: "/ablauf-massanfertigung/", why: "Prozessvertrauen" },
      { target: "/kontakt/", why: "Conversion" },
    ],
    darfNicht: ["cross-silo", "exceed-budget"],
  },
  "cluster-article": {
    maxBodyLinks: 6,
    maxNavFooter: 20,
    minInlineLinks: 2,
    must: [
      { target: "parent", why: "Aufwärtslink zum Cluster-Pillar (Breadcrumb)" },
      { target: "own-cluster-spokes", why: "Mind. 1 Produktseite im Cluster" },
    ],
    soll: [
      { target: "own-ratgeber", why: "Synergielink zum Cluster-Ratgeber" },
      { target: "/moebelplaner/", why: "CTA" },
    ],
    darfNicht: ["cross-silo", "skip-hub-level", "exceed-budget"],
  },
  conversion: {
    maxBodyLinks: 5,
    maxNavFooter: 20,
    minInlineLinks: 1,
    must: [
      { target: "/ablauf-massanfertigung/", why: "Erwartungsmanagement" },
    ],
    soll: [
      { target: "/referenzen/", why: "Last-Minute-Vertrauen" },
      { target: "/liefergebiet-montage/", why: "Regionale Qualifikation" },
    ],
    darfNicht: ["cross-silo", "exceed-budget"],
  },
  brand: {
    maxBodyLinks: 10,
    maxNavFooter: 20,
    minInlineLinks: 2,
    must: [],
    soll: [
      { target: "/moebel-nach-mass/", why: "Authority → Privat-Hub" },
      { target: "/gewerbe/", why: "Authority → Gewerbe-Hub" },
      { target: "/kontakt/", why: "Conversion" },
    ],
    darfNicht: ["legal-in-body"],
  },
  legal: {
    maxBodyLinks: 1,
    maxNavFooter: 20,
    minInlineLinks: 0,
    must: [{ target: "/", why: "Einziger erlaubter Ausgangslink" }],
    soll: [],
    darfNicht: ["cross-silo", "skip-hub-level"],
  },
};

// ---------------------------------------------------------------------------
// Anchor-text variants per target (diversity source + suggestion pool)
// ---------------------------------------------------------------------------

export interface AnchorSet {
  /** Exact-match (max EXACT_MATCH_CAP per page to one URL). */
  exact: string[];
  /** Partial-match variants. */
  partial: string[];
  /** Brand + keyword. */
  brand: string[];
  /** Descriptive / navigational. */
  descriptive: string[];
}

export const ANCHORS: Record<string, AnchorSet> = {
  "/moebel-nach-mass/": {
    exact: ["Möbel nach Maß"],
    partial: ["maßgefertigte Möbel", "individuelle Möbel"],
    brand: ["Fast Systemmöbel Möbel nach Maß"],
    descriptive: ["Möbel nach Maß für Zuhause", "zum Möbel-Bereich", "alle Möbel nach Maß"],
  },
  "/gewerbe/": {
    exact: ["Gewerbeeinrichtung"],
    partial: ["gewerbliche Einrichtung", "Objekteinrichtung"],
    brand: ["Fast Systemmöbel Gewerbe"],
    descriptive: ["Gewerbliche Einrichtung & Ladenbau", "zum Gewerbe-Bereich"],
  },
  "/kuechen-nach-mass/": {
    exact: ["Küchen nach Maß"],
    partial: ["maßgefertigte Küche", "individuelle Küche", "Maßküche vom Tischler"],
    brand: ["Fast Systemmöbel Küchen"],
    descriptive: ["unsere Küchenangebote", "zum Küchenbereich", "alle Küchen nach Maß"],
  },
  "/kuechen-nach-mass/kueche-planen/": {
    exact: ["Küche planen"],
    partial: ["Küche Schritt für Schritt planen", "Küchenplanung"],
    brand: ["Fast Systemmöbel Küchenplanung"],
    descriptive: ["so planen Sie Ihre Küche", "unser Ratgeber zur Küchenplanung", "Küchenplanungs-Ratgeber"],
  },
  "/kuechen-nach-mass/kuechenzeile-nach-mass/": {
    exact: ["Küchenzeile nach Maß"],
    partial: ["maßgefertigte Küchenzeile", "Küchenzeile vom Tischler", "einzeilige Küche nach Maß"],
    brand: ["Fast Systemmöbel Küchenzeile"],
    descriptive: ["Küchenzeile auf Ihre Wand planen", "Küchenzeile ansehen"],
  },
  "/kuechen-nach-mass/kueche-mit-dachschraege/": {
    exact: ["Küche mit Dachschräge"],
    partial: ["Dachschrägen-Küche nach Maß", "Küche unterm Dach", "Küche mit Dachschräge nach Maß", "Küche unter der Dachschräge"],
    brand: ["Fast Systemmöbel Dachschrägen-Küche"],
    descriptive: ["Küche für die Dachschräge planen", "Dachschrägen-Küche ansehen"],
  },
  "/moebelplaner/": {
    exact: ["Möbelplaner"],
    partial: ["Möbel online planen", "online konfigurieren"],
    brand: ["Fast Möbelplaner"],
    descriptive: ["Jetzt Möbel online planen", "Küche online konfigurieren", "selbst planen"],
  },
  "/kontakt/": {
    exact: ["Kontakt"],
    partial: ["Beratung anfragen", "Angebot anfordern"],
    brand: [],
    descriptive: ["Kostenlose Beratung anfragen", "Beratungsgespräch vereinbaren", "jetzt anfragen"],
  },
  "/einbauschraenke-nach-mass/einbauschrank-dachschraege/": {
    exact: ["Schrank für Dachschräge nach Maß"],
    partial: ["Dachschrägenschrank nach Maß", "Schrank unter der Dachschräge", "Drempelschrank nach Maß", "Kniestockschrank nach Maß"],
    brand: ["Fast Systemmöbel Dachschrägenschrank"],
    descriptive: ["Dachschrägenschrank ansehen", "Schrank für die Dachschräge planen"],
  },
  "/einbauschraenke-nach-mass/schrank-unter-treppe/": {
    exact: ["Schrank unter der Treppe nach Maß"],
    partial: ["Treppenschrank nach Maß", "Stauraum unter der Treppe", "Stufenschrank nach Maß"],
    brand: ["Fast Systemmöbel Treppenschrank"],
    descriptive: ["Schrank unter der Treppe ansehen", "Raum unter der Treppe planen"],
  },
  "/einbauschraenke-nach-mass/kleiderschrank-nach-mass/": {
    exact: ["Kleiderschrank nach Maß"],
    partial: ["maßgefertigter Kleiderschrank", "Kleiderschrank vom Tischler", "Einbau-Kleiderschrank nach Maß"],
    brand: ["Fast Systemmöbel Kleiderschrank"],
    descriptive: ["Kleiderschrank nach Maß planen", "Kleiderschrank ansehen"],
  },
  "/einbauschraenke-nach-mass/garderobe-nach-mass/": {
    exact: ["Garderobe nach Maß"],
    partial: ["Garderobenschrank nach Maß", "Flurgarderobe nach Maß", "Garderobe für den Flur"],
    brand: ["Fast Systemmöbel Garderobe"],
    descriptive: ["Garderobe im Flur planen", "Garderobe nach Maß ansehen"],
  },
  "/referenzen/": {
    exact: ["Referenzen"],
    partial: ["Referenzprojekte", "Referenzprojekte ansehen"],
    brand: [],
    descriptive: ["Unsere Referenzprojekte", "Arbeiten ansehen", "Beispielprojekte"],
  },
  "/ablauf-massanfertigung/": {
    exact: ["Ablauf der Maßanfertigung"],
    partial: ["So funktioniert die Maßanfertigung", "Herstellungsprozess"],
    brand: [],
    descriptive: ["Wie läuft eine Maßanfertigung ab?", "So entsteht Ihr Möbel"],
  },
  "/leistungen/": {
    exact: ["Alle Leistungen"],
    partial: ["Leistungen im Überblick", "unsere Leistungen"],
    brand: ["Leistungen von Fast Systemmöbel"],
    descriptive: ["Alle Leistungen ansehen"],
  },
  "/ueber-uns/": {
    exact: ["Über uns"],
    partial: ["Unsere Geschichte", "der Meisterbetrieb"],
    brand: ["Über Fast Systemmöbel"],
    descriptive: ["mehr über uns", "das Team kennenlernen"],
  },
  "/badmoebel-nach-mass/": {
    exact: ["Badmöbel nach Maß"],
    partial: ["maßgefertigte Badmöbel", "Badmöbel vom Tischler", "Waschtisch und Badschrank nach Maß"],
    brand: ["Fast Systemmöbel Badmöbel"],
    descriptive: ["alle Badmöbel nach Maß", "zum Badmöbel-Bereich"],
  },
  "/badmoebel-nach-mass/waschtisch-nach-mass/": {
    exact: ["Waschtisch nach Maß"],
    partial: ["Waschtischplatte nach Maß", "maßgefertigter Waschtisch", "Waschtisch mit Becken nach Maß"],
    brand: ["Fast Systemmöbel Waschtisch"],
    descriptive: ["Waschtisch nach Maß planen", "passende Waschtischplatte nach Maß"],
  },
  "/badmoebel-nach-mass/waschtischunterschrank-nach-mass/": {
    exact: ["Waschtischunterschrank nach Maß"],
    partial: ["Waschbeckenunterschrank nach Maß", "maßgefertigter Waschtischunterschrank", "Unterschrank fürs Waschbecken nach Maß"],
    brand: ["Fast Systemmöbel Waschtischunterschrank"],
    descriptive: ["Unterschrank am Waschplatz nach Maß", "Waschtischunterschrank planen"],
  },
  "/badmoebel-nach-mass/badschrank-nach-mass/": {
    exact: ["Badschrank nach Maß"],
    partial: ["maßgefertigter Badschrank", "Badschrank vom Tischler", "Bad-Hochschrank nach Maß"],
    brand: ["Fast Systemmöbel Badschrank"],
    descriptive: ["Badschrank nach Maß planen", "Stauraum fürs Bad nach Maß"],
  },
  "/wohnmoebel-nach-mass/": {
    exact: ["Wohnmöbel nach Maß"],
    partial: ["maßgefertigte Wohnmöbel", "Wohnmöbel vom Tischler", "Wohnwand und Sideboard nach Maß"],
    brand: ["Fast Systemmöbel Wohnmöbel"],
    descriptive: ["alle Wohnmöbel nach Maß", "zum Wohnmöbel-Bereich"],
  },
  "/wohnmoebel-nach-mass/regal-nach-mass/": {
    exact: ["Regal nach Maß"],
    partial: ["maßgefertigtes Regal", "Regal vom Tischler", "offenes Regal nach Maß"],
    brand: ["Fast Systemmöbel Regal"],
    descriptive: ["Regal nach Maß planen", "zum Regal nach Maß"],
  },
  "/wohnmoebel-nach-mass/buecherregal-nach-mass/": {
    exact: ["Bücherregal nach Maß"],
    partial: ["maßgefertigtes Bücherregal", "Bücherwand nach Maß", "Bücherregal vom Tischler"],
    brand: ["Fast Systemmöbel Bücherregal"],
    descriptive: ["Bücherregal individuell planen", "zum Bücherregal nach Maß"],
  },
  "/hauswirtschaftsraum/": {
    exact: ["Hauswirtschaftsraum einrichten"],
    partial: ["Hauswirtschaftsraum nach Maß", "HWR nach Maß", "Waschküche nach Maß"],
    brand: ["Fast Systemmöbel Hauswirtschaftsraum"],
    descriptive: ["Hauswirtschaftsraum planen und einrichten", "zum Hauswirtschaftsraum-Bereich"],
  },
  "/einbauschraenke-nach-mass/": {
    exact: ["Einbauschränke nach Maß"],
    partial: ["maßgefertigte Einbauschränke", "Einbauschrank vom Tischler", "Schrank nach Maß"],
    brand: ["Fast Systemmöbel Einbauschränke"],
    descriptive: ["alle Einbauschränke nach Maß", "zum Einbauschrank-Bereich"],
  },
  "/ladenbau/": {
    exact: ["Ladenbau nach Maß"],
    partial: ["individueller Ladenbau", "Ladeneinrichtung vom Tischler"],
    brand: ["Fast Systemmöbel Ladenbau"],
    descriptive: ["unsere Ladenbau-Leistungen", "zum Ladenbau-Bereich"],
  },
  "/bueroeinrichtung/": {
    exact: ["Büroeinrichtung"],
    partial: ["Büromöbel nach Maß", "maßgefertigte Büroeinrichtung"],
    brand: ["Fast Systemmöbel Büroeinrichtung"],
    descriptive: ["Büros einrichten lassen", "zur Büroeinrichtung"],
  },
  "/gastronomieeinrichtung/": {
    exact: ["Gastronomieeinrichtung"],
    partial: ["Gastro-Möbel nach Maß", "Einrichtung für Gastronomie"],
    brand: ["Fast Systemmöbel Gastronomie"],
    descriptive: ["Gastronomie einrichten lassen", "zur Gastronomieeinrichtung"],
  },
  "/serienmoebel/": {
    exact: ["Serienmöbel"],
    partial: ["Möbel in Serie", "Serienfertigung für Objektausstatter"],
    brand: ["Fast Systemmöbel Serienfertigung"],
    descriptive: ["Möbel in Serie fertigen lassen", "zur Serienfertigung"],
  },
  "/praxiseinrichtung/": {
    exact: ["Praxiseinrichtung"],
    partial: ["Praxismöbel nach Maß", "Einrichtung für Praxen"],
    brand: ["Fast Systemmöbel Praxiseinrichtung"],
    descriptive: ["Praxis einrichten lassen", "zur Praxiseinrichtung"],
  },
  "/bueroeinrichtung/bueroplanung/": {
    exact: ["Büroplanung"],
    partial: ["Büro planen lassen", "professionelle Büroplanung"],
    brand: ["Büroplanung von Fast Systemmöbel"],
    descriptive: ["Ihr Büro planen lassen", "zur Büroplanung"],
  },
  "/bueroeinrichtung/bueromoebel-nach-mass/": {
    exact: ["Büromöbel nach Maß"],
    partial: ["maßgefertigte Büromöbel", "individuelle Büromöbel"],
    brand: ["Büromöbel von Fast Systemmöbel"],
    descriptive: ["unser Büromöbel-Programm", "zu den Büromöbeln nach Maß"],
  },
};

// ---------------------------------------------------------------------------
// Diversity + economy constants (principles 5 + 9)
// ---------------------------------------------------------------------------

/** Max identical exact-match anchors to one URL per page. */
export const EXACT_MATCH_CAP = 3;

/** Max share of generic anchors among a page's links. */
export const GENERIC_MAX_RATIO = 0.1;

/** Anchors that count as "generic" (principle 5). */
export const GENERIC_ANCHORS = ["hier", "mehr erfahren", "mehr", "weiterlesen", "klicken", "mehr dazu"];

// ---------------------------------------------------------------------------
// Outbound (externe Belege) — gilt NUR für Links aus Content-Modulen
// ---------------------------------------------------------------------------

/**
 * Hosts, auf die Inhalts-Text extern verlinken darf (Belege für Norm-, Vorschrifts-
 * und Messwert-Angaben). Ein Eintrag deckt auch alle Subdomains ab
 * (`dguv.de` erlaubt `publikationen.dguv.de`). Hersteller, Wettbewerber, Shops,
 * Verzeichnisse: nie. Social-Profile, Google Maps und der externe Möbelplaner sind
 * Chrome (Header/Footer/Komponenten), kein Content — für sie gilt diese Liste nicht.
 */
export const EXTERNAL_SOURCE_ALLOWLIST = [
  "gesetze-im-internet.de",
  "baua.de",
  "publikationen.dguv.de",
  "dguv.de",
  "eur-lex.europa.eu",
  "rki.de",
  "bundesgesundheitsministerium.de",
  "amk.de",
  "amk-ratgeber-kueche.de",
  "verbraucherzentrale.de",
  "nullbarriere.de",
];

/** Höchstzahl externer Beleg-Links je Seite (aus Content-Modulen). */
export const MAX_EXTERNAL_PER_PAGE = 2;

/**
 * Wörter ohne Aussage über das Ziel. Ein Anker, der NUR aus solchen Wörtern
 * besteht („Mehr Infos hier", „Jetzt entdecken"), gilt als generisch — auch wenn
 * er nicht wörtlich in GENERIC_ANCHORS steht. Bis 10/2026 prüfte das Audit nur
 * exakte Treffer, und 23-mal „Mehr Infos hier" fiel durch.
 */
export const GENERIC_WORDS = [
  "hier", "mehr", "infos", "info", "informationen", "erfahren", "dazu", "weiter", "weiterlesen",
  "lesen", "klicken", "details", "detail", "entdecken", "ansehen", "anschauen", "jetzt", "link",
  "seite", "zur", "zum", "zu", "sie", "die", "der", "das", "und", "alle", "unsere", "ihre",
];

/**
 * Footer link targets allowed by principle 4 (no link graves): pillar-hubs,
 * conversion, legal, plus the standard footer menu (homepage + brand pages
 * like /ueber-uns/ and /referenzen/ — decision 2026-07-14). Cluster-pillars
 * and deeper pages stay forbidden; they are covered sitewide by the nav
 * dropdowns and would dilute the contextual link signal.
 */
export const FOOTER_ALLOWED_TYPES: PageType[] = ["pillar-hub", "conversion", "legal", "homepage", "brand"];

// ---------------------------------------------------------------------------
// Brücken: erlaubte Links über die Silogrenze (Entscheidung 2026-10-04)
// ---------------------------------------------------------------------------

/**
 * Das Silo-Modell verbietet Links zwischen Clustern. Für 33 Seiten ist das zu
 * streng: Manche Themen gehören echt zu zwei Clustern (die Theke zu Ladenbau und
 * Gastronomie, die Dachschräge zu Schrank und Küche). Eine Brücke erlaubt genau
 * dieses Seitenpaar in beide Richtungen; jede andere Cross-Silo-Verbindung warnt
 * weiter. Je Seite höchstens MAX_BRIDGES_PER_PAGE Brücken, sonst verwischt das
 * Silo. Quelle: Link-Analyse 02.10.2026, Befund F.
 */
export interface Bridge {
  a: string;
  b: string;
  /** Das gemeinsame Thema, das die Brücke rechtfertigt. */
  thema: string;
}

export const BRIDGES: Bridge[] = [
  { a: "/einbauschraenke-nach-mass/einbauschrank-dachschraege/", b: "/kuechen-nach-mass/kueche-mit-dachschraege/", thema: "Dachschräge" },
  { a: "/ladenbau/", b: "/gastronomieeinrichtung/", thema: "Theke und Tresen" },
  { a: "/serienmoebel/", b: "/gastronomieeinrichtung/", thema: "Hotel und Objekt" },
  { a: "/praxiseinrichtung/", b: "/bueroeinrichtung/", thema: "Empfang" },
  { a: "/kuechen-nach-mass/", b: "/hauswirtschaftsraum/", thema: "Küche und Vorrat" },
];

export const MAX_BRIDGES_PER_PAGE = 2;

/** Brücke zwischen zwei Seiten (Richtung egal), sonst undefined. */
export function bridgeBetween(x: string, y: string): Bridge | undefined {
  return BRIDGES.find((br) => (br.a === x && br.b === y) || (br.a === y && br.b === x));
}

// ---------------------------------------------------------------------------
// Eingehende Links im Inhalt (Link-Analyse 02.10.2026, Befund A + D)
// ---------------------------------------------------------------------------

/**
 * Mindestzahl verschiedener Seiten, die eine Seite im Inhaltsbereich verlinken
 * (ohne Menü, Footer und Breadcrumb). Produktseiten hingen im Oktober 2026 an
 * ein bis zwei Quellen — ihrem Cluster und höchstens einem Geschwister — und
 * bekamen im Linkkraft-Modell zusammen weniger als das Impressum.
 */
export const MIN_INBOUND: Partial<Record<PageType, number>> = {
  "cluster-pillar": 3,
  product: 3,
  "ratgeber-pillar": 3,
  "cluster-article": 3,
};
