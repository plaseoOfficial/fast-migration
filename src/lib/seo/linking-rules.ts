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
}

export const PAGES: PageNode[] = [
  // Level 0
  { slug: "/", type: "homepage", silo: "", audience: "neutral", parent: null, built: true, contentModule: "home" },

  // Privat silo
  { slug: "/moebel-nach-mass/", type: "pillar-hub", silo: "moebel", audience: "privat", parent: "/", built: true, contentModule: "moebel-nach-mass" },
  { slug: "/kuechen-nach-mass/", type: "cluster-pillar", silo: "kuechen", audience: "privat", parent: "/moebel-nach-mass/", built: true, contentModule: "kuechen-nach-mass" },
  // Planned privat sibling clusters (hub→cluster MUSS, blocked until built)
  { slug: "/einbauschraenke-nach-mass/", type: "cluster-pillar", silo: "einbauschraenke", audience: "privat", parent: "/moebel-nach-mass/", built: false },
  { slug: "/badmoebel-nach-mass/", type: "cluster-pillar", silo: "badmoebel", audience: "privat", parent: "/moebel-nach-mass/", built: false },
  { slug: "/wohnmoebel-nach-mass/", type: "cluster-pillar", silo: "wohnmoebel", audience: "privat", parent: "/moebel-nach-mass/", built: false },
  // Planned kuechen spokes (cluster→product/ratgeber MUSS, blocked until built)
  { slug: "/kuechen-nach-mass/kueche-nach-mass-kosten/", type: "ratgeber-pillar", silo: "kuechen", audience: "privat", parent: "/kuechen-nach-mass/", built: false },
  { slug: "/kuechen-nach-mass/kueche-planen/", type: "cluster-article", silo: "kuechen", audience: "privat", parent: "/kuechen-nach-mass/", built: false },
  { slug: "/kuechen-nach-mass/l-kueche-nach-mass/", type: "product", silo: "kuechen", audience: "privat", parent: "/kuechen-nach-mass/", built: false },
  { slug: "/kuechen-nach-mass/kuechenzeile-nach-mass/", type: "product", silo: "kuechen", audience: "privat", parent: "/kuechen-nach-mass/", built: false },

  // Gewerbe silo (flat URLs; clusters of the Gewerbe hub by topic, not by nesting)
  { slug: "/gewerbe/", type: "pillar-hub", silo: "gewerbe", audience: "gewerbe", parent: "/", built: true },
  { slug: "/gewerbe/ladenbau/", type: "cluster-pillar", silo: "ladenbau", audience: "gewerbe", parent: "/gewerbe/", built: true, contentModule: "ladenbau" },
  { slug: "/bueroeinrichtung/", type: "cluster-pillar", silo: "buero", audience: "gewerbe", parent: "/gewerbe/", built: true, contentModule: "bueroeinrichtung" },
  { slug: "/gastronomieeinrichtung/", type: "cluster-pillar", silo: "gastronomie", audience: "gewerbe", parent: "/gewerbe/", built: true, contentModule: "gastronomieeinrichtung" },
  { slug: "/serienmoebel/", type: "cluster-pillar", silo: "serienmoebel", audience: "gewerbe", parent: "/gewerbe/", built: true, contentModule: "serienmoebel", mustExempt: ["/moebelplaner/"] },
  { slug: "/praxiseinrichtung/", type: "cluster-pillar", silo: "praxis", audience: "gewerbe", parent: "/gewerbe/", built: true, contentModule: "praxiseinrichtung" },

  // Conversion + brand (neutral)
  { slug: "/moebelplaner/", type: "conversion", silo: "", audience: "neutral", parent: "/", built: true },
  { slug: "/kontakt/", type: "conversion", silo: "", audience: "neutral", parent: "/", built: true },
  { slug: "/ueber-uns/", type: "brand", silo: "", audience: "neutral", parent: "/", built: true, contentModule: "ueber-uns" },

  // Planned neutral trust/info pages (backlog targets)
  { slug: "/referenzen/", type: "brand", silo: "", audience: "neutral", parent: "/", built: true, contentModule: "referenzen" },
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
 */
export type SymbolicTarget =
  | "parent"
  | "own-children"
  | "sibling-clusters"
  | "own-cluster-spokes"
  | "own-ratgeber";

export interface TargetRule {
  /** Concrete slug (leading "/") or a SymbolicTarget keyword. */
  target: string | SymbolicTarget;
  /** Human note / rationale (shown in audit + agent output). */
  why?: string;
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
  must: TargetRule[];
  soll: TargetRule[];
  darfNicht: ForbiddenRule[];
}

export const RULES: Record<PageType, TypeRule> = {
  homepage: {
    maxBodyLinks: 15,
    maxNavFooter: 20,
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
    must: [
      { target: "parent", why: "Aufwärtslink zum Cluster-Pillar (Breadcrumb)" },
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
  "/ueber-uns/": {
    exact: ["Über uns"],
    partial: ["Unsere Geschichte", "der Meisterbetrieb"],
    brand: ["Über Fast Systemmöbel"],
    descriptive: ["mehr über uns", "das Team kennenlernen"],
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

/** Footer body = pillar-hubs + legal only (principle 4: no link graves). */
export const FOOTER_ALLOWED_TYPES: PageType[] = ["pillar-hub", "conversion", "legal"];
