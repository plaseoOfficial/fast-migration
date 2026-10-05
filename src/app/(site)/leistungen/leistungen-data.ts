/**
 * Builds the `/leistungen/` list automatically from the linking model.
 *
 * Quelle der Liste: `PAGES` (src/lib/seo/linking-rules.ts), nur `built: true`.
 *   Abschnitt = `audience` (privat | gewerbe)
 *   Block     = jede `cluster-pillar` der Audience (Überschrift mit Link)
 *   Zeilen    = alle gebauten Kinder des Clusters (`parent === cluster.slug`)
 *   Seiten, die direkt am Hub hängen und keine Cluster sind, landen in `loose`.
 *
 * Titel: `ANCHORS[slug].exact[0]`, sonst Meta-Title der Seite, sonst Slug.
 * Satz:  Nutzen-Satz aus der Meta-Description der Seite. Gelesen wird die
 *        `export const metadata` der jeweiligen page.tsx (String-Literal oder
 *        eine im selben File definierte Konstante wie `DESCRIPTION`). Kein
 *        Treffer → Eintrag erscheint nur mit Titel.
 * `LEISTUNGEN_OVERRIDES` (src/lib/content/leistungen.ts) überschreibt beides.
 *
 * Läuft nur auf dem Server und nur beim Prerendern (die Route ist
 * `force-static`): zur Build-Zeit liegen die Quelltexte im Projekt.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { ANCHORS, PAGES, type PageNode } from "@/lib/seo/linking-rules";
import {
  LEISTUNGEN_OVERRIDES,
  type LeistungenAudience,
} from "@/lib/content/leistungen";

export type LeistungKind = "hub" | "cluster" | "product" | "ratgeber";

export interface LeistungEntry {
  slug: string;
  title: string;
  /** One benefit sentence; undefined when no description could be read. */
  text?: string;
  kind: LeistungKind;
}

export interface LeistungCluster {
  cluster: LeistungEntry;
  children: LeistungEntry[];
}

export interface LeistungenGroup {
  audience: LeistungenAudience;
  hub?: LeistungEntry;
  clusters: LeistungCluster[];
  /** Built non-cluster pages hanging directly off the hub. */
  loose: LeistungEntry[];
  /** Number of service pages in this group (hub and guides excluded). */
  count: number;
}

const CHILD_TYPES = new Set<PageNode["type"]>(["product", "cluster-article", "ratgeber-pillar"]);

// ---------------------------------------------------------------------------
// Reading page metadata from source (build time)
// ---------------------------------------------------------------------------

interface PageMeta {
  title?: string;
  description?: string;
}

const STRING_RE = String.raw`"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'`;

function pageFileCandidates(slug: string): string[] {
  const segs = slug.split("/").filter(Boolean);
  const root = path.join(/*turbopackIgnore: true*/ process.cwd(), "src", "app");
  return [path.join(root, "(site)", ...segs, "page.tsx"), path.join(root, ...segs, "page.tsx")];
}

function readSource(slug: string): string | undefined {
  for (const file of pageFileCandidates(slug)) {
    try {
      return readFileSync(file, "utf8");
    } catch {
      // try next candidate
    }
  }
  return undefined;
}

/** Resolve `key: "literal"` or `key: IDENT` (IDENT = top-level string const). */
function readField(block: string, fullSource: string, key: string): string | undefined {
  const re = new RegExp(String.raw`\b${key}\s*:\s*(?:${STRING_RE}|([A-Za-z_$][\w$]*)\s*[,\n}])`);
  const m = re.exec(block);
  if (!m) return undefined;
  const literal = m[1] ?? m[2];
  if (literal !== undefined) return literal.replace(/\\(["'\\])/g, "$1");
  const ident = m[3];
  if (!ident) return undefined;
  const constRe = new RegExp(String.raw`const\s+${ident}\s*(?::[^=]+)?=\s*(?:${STRING_RE})`);
  const c = constRe.exec(fullSource);
  const value = c?.[1] ?? c?.[2];
  return value?.replace(/\\(["'\\])/g, "$1");
}

function readPageMeta(slug: string): PageMeta {
  const src = readSource(slug);
  if (!src) return {};
  const start = src.indexOf("export const metadata");
  if (start === -1) return {};
  // Top-level fields come before `openGraph`; cut there so the OG description
  // (often a different wording) is never picked up.
  let block = src.slice(start);
  const og = block.indexOf("openGraph");
  if (og !== -1) block = block.slice(0, og);
  return {
    title: readField(block, src, "title"),
    description: readField(block, src, "description"),
  };
}

// ---------------------------------------------------------------------------
// Turning metadata into list copy
// ---------------------------------------------------------------------------

const upperFirst = (s: string) => (s ? s.charAt(0).toLocaleUpperCase("de-DE") + s.slice(1) : s);

/**
 * Meta descriptions follow "<Leistung> vom Meisterbetrieb in Espelkamp: <Nutzen>.
 * <CTA>." On a list of 30 pages the brand prefix and the CTA would repeat on
 * every line, so we keep only the benefit: the text after the first colon, up
 * to the end of its first sentence. Without a colon: the first sentence.
 */
export function benefitSentence(description: string): string {
  const clean = description.replace(/\s+/g, " ").trim();
  const colon = clean.indexOf(": ");
  const body = colon !== -1 && colon < clean.length - 20 ? clean.slice(colon + 2) : clean;
  const first = body.split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ0-9])/)[0] ?? body;
  return upperFirst(first.trim());
}

function titleFromMeta(metaTitle: string | undefined): string | undefined {
  if (!metaTitle) return undefined;
  return metaTitle.split(" | ")[0].replace(/\s+aus Espelkamp$/, "").trim() || undefined;
}

function titleFromSlug(slug: string): string {
  const last = slug.split("/").filter(Boolean).pop() ?? slug;
  return upperFirst(last.replace(/-/g, " "));
}

function kindOf(node: PageNode): LeistungKind {
  if (node.type === "pillar-hub") return "hub";
  if (node.type === "cluster-pillar") return "cluster";
  if (node.type === "product") return "product";
  return "ratgeber";
}

function toEntry(node: PageNode): LeistungEntry {
  const override = LEISTUNGEN_OVERRIDES[node.slug] ?? {};
  const meta = readPageMeta(node.slug);
  const title =
    override.title ?? ANCHORS[node.slug]?.exact[0] ?? titleFromMeta(meta.title) ?? titleFromSlug(node.slug);
  const text = override.text ?? (meta.description ? benefitSentence(meta.description) : undefined);
  return { slug: node.slug, title, text, kind: kindOf(node) };
}

// ---------------------------------------------------------------------------
// Grouping
// ---------------------------------------------------------------------------

export function getLeistungenGroups(): LeistungenGroup[] {
  const built = PAGES.filter((p) => p.built);
  const audiences: LeistungenAudience[] = ["privat", "gewerbe"];

  return audiences.map((audience) => {
    const own = built.filter((p) => p.audience === audience);
    const hubNode = own.find((p) => p.type === "pillar-hub");
    const clusterNodes = own.filter((p) => p.type === "cluster-pillar");
    const clusterSlugs = new Set(clusterNodes.map((c) => c.slug));

    const clusters: LeistungCluster[] = clusterNodes.map((c) => ({
      cluster: toEntry(c),
      children: own.filter((p) => p.parent === c.slug && CHILD_TYPES.has(p.type)).map(toEntry),
    }));

    // Children whose parent is not one of the clusters (e.g. a product directly
    // under the hub) must not silently disappear.
    const loose = own
      .filter((p) => CHILD_TYPES.has(p.type) && (!p.parent || !clusterSlugs.has(p.parent)))
      .map(toEntry);

    const isService = (e: LeistungEntry) => e.kind !== "ratgeber";
    const count =
      clusters.reduce((n, c) => n + 1 + c.children.filter(isService).length, 0) +
      loose.filter(isService).length;

    return { audience, hub: hubNode ? toEntry(hubNode) : undefined, clusters, loose, count };
  });
}
