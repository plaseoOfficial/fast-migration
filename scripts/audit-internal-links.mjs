// Internal-linking auditor — the deterministic engine behind `npm run audit:links`
// and the `intern-verlinkung` agent.
//
// Run with Node's TypeScript type-stripping (Node ≥ 24, see package.json engines):
//   node --experimental-strip-types scripts/audit-internal-links.mjs
//
// What it does:
//   1. Extracts the real internal-link graph from the data modules
//      (src/lib/content/*.ts) plus a regex sweep of nav.ts, content.ts (footer),
//      every src/app/**/page.tsx and src/components/**.tsx.
//   2. Checks it against the machine-readable rules in src/lib/seo/linking-rules.ts
//      (dead links, missing MUSS, forbidden cross-silo / level-jumps, link budgets,
//      anchor diversity, breadcrumb schema, sitemap consistency, backlog reconcile).
//   3. Writes docs/seo/link-audit.json and prints a grouped report.
//      Exits non-zero when any "Fehler" is found (CI gate).
//
// The rules module has no runtime imports, so it loads cleanly here. Content
// modules that import only *types* also load; the one module with a value import
// (home.ts → @/lib/content, which Node can't resolve) falls back to a regex sweep.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve, relative, sep } from "node:path";
import {
  PAGES,
  RULES,
  ANCHORS,
  EXACT_MATCH_CAP,
  GENERIC_MAX_RATIO,
  GENERIC_ANCHORS,
  FOOTER_ALLOWED_TYPES,
} from "../src/lib/seo/linking-rules.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = resolve(ROOT, "docs/seo/link-audit.json");

// ---------------------------------------------------------------------------
// Page-graph helpers
// ---------------------------------------------------------------------------

const BUILT = PAGES.filter((p) => p.built);
const builtSlugs = new Set(BUILT.map((p) => p.slug));
const allSlugs = new Set(PAGES.map((p) => p.slug));
const nodeBySlug = new Map(PAGES.map((p) => [p.slug, p]));

/** Normalise an internal path to its canonical trailing-slash form. */
function normSlug(href) {
  if (typeof href !== "string" || !href.startsWith("/") || href.startsWith("//")) return href;
  let h = href.split("#")[0].split("?")[0];
  if (h === "") return "/";
  if (!h.endsWith("/")) h += "/";
  return h;
}

const isExternal = (h) => /^(https?:)?\/\//.test(h) || /^(mailto|tel):/.test(h);
const isInternal = (h) => typeof h === "string" && h.startsWith("/") && !h.startsWith("//");
const isFragment = (h) => h === "#" || (typeof h === "string" && h.startsWith("#"));

// ---------------------------------------------------------------------------
// Link extraction
// ---------------------------------------------------------------------------

/** All collected links: { href, anchor?, source, scope: "page"|"chrome", file, line? }. */
const links = [];
/** Per built-page outgoing links (page-scoped only), keyed by slug. */
const pageLinks = new Map();

function addPageLink(slug, link) {
  if (!pageLinks.has(slug)) pageLinks.set(slug, []);
  pageLinks.get(slug).push(link);
}

function pickAnchor(obj) {
  for (const k of ["label", "linkText", "title", "text"]) {
    if (typeof obj[k] === "string") return obj[k];
  }
  if (obj.cta && typeof obj.cta.label === "string") return obj.cta.label;
  return undefined;
}

function anchorForHrefKey(obj, key) {
  const base = key.replace(/href$/i, "");
  const candidates = [base + "Label", base + "Text", base.replace(/Cta$/i, "") + "CtaLabel", "ctaLabel", "label"];
  for (const c of candidates) {
    if (typeof obj[c] === "string") return obj[c];
  }
  return undefined;
}

/** Recursively walk a data value, collecting { href, anchor } pairs. */
function walkValue(val, out, seen = new Set()) {
  if (!val || typeof val !== "object" || seen.has(val)) return;
  seen.add(val);
  if (Array.isArray(val)) {
    for (const v of val) walkValue(v, out, seen);
    return;
  }
  if (typeof val.href === "string") out.push({ href: val.href, anchor: pickAnchor(val) });
  for (const [k, v] of Object.entries(val)) {
    if (typeof v === "string" && /href$/i.test(k) && k.toLowerCase() !== "href") {
      out.push({ href: v, anchor: anchorForHrefKey(val, k) });
    }
  }
  for (const v of Object.values(val)) walkValue(v, out, seen);
}

const HREF_RE = /href\s*[:=]\s*\{?\s*["'`]([^"'`{}\s]+)["'`]/g;

/** Regex sweep of a source file → [{ href, line }]. */
function regexLinks(absPath) {
  const text = readFileSync(absPath, "utf8");
  const out = [];
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    let m;
    HREF_RE.lastIndex = 0;
    while ((m = HREF_RE.exec(line)) !== null) out.push({ href: m[1], line: i + 1 });
  });
  return out;
}

/** Extract a built page's own links from its content module (import → walk). */
async function extractModule(node) {
  const abs = resolve(ROOT, `src/lib/content/${node.contentModule}.ts`);
  const file = relative(ROOT, abs);
  try {
    const mod = await import(pathToFileURL(abs).href);
    const out = [];
    for (const v of Object.values(mod)) walkValue(v, out);
    for (const l of out) {
      const link = { ...l, source: node.slug, scope: "page", file };
      links.push(link);
      addPageLink(node.slug, link);
    }
    return out.length;
  } catch {
    // Fallback: regex sweep (e.g. home.ts has an unresolvable value import).
    for (const l of regexLinks(abs)) {
      const link = { href: l.href, anchor: undefined, source: node.slug, scope: "page", file, line: l.line };
      links.push(link);
      addPageLink(node.slug, link);
    }
    return -1; // signals partial (no anchors)
  }
}

/** Recursively list files under a dir matching a predicate. */
function listFiles(dir, pred, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return acc;
  }
  for (const name of entries) {
    const abs = resolve(dir, name);
    const st = statSync(abs);
    if (st.isDirectory()) listFiles(abs, pred, acc);
    else if (pred(abs)) acc.push(abs);
  }
  return acc;
}

/** Map a src/app page-file path to its route slug (drops (group) segments). */
function pageFileToSlug(absPath) {
  const rel = relative(resolve(ROOT, "src/app"), absPath).split(sep);
  const segs = rel.filter((s) => s && s !== "page.tsx" && !(s.startsWith("(") && s.endsWith(")")));
  return "/" + (segs.length ? segs.join("/") + "/" : "");
}

// ---------------------------------------------------------------------------
// Findings
// ---------------------------------------------------------------------------

const findings = [];
const add = (severity, check, message, extra = {}) => findings.push({ severity, check, message, ...extra });

// ---------------------------------------------------------------------------
// MUSS/SOLL target resolution
// ---------------------------------------------------------------------------

function resolveTargets(target, node) {
  if (typeof target === "string" && target.startsWith("/")) {
    return builtSlugs.has(normSlug(target)) ? [normSlug(target)] : [];
  }
  switch (target) {
    case "parent":
      return node.parent && builtSlugs.has(node.parent) ? [node.parent] : [];
    case "own-children":
      return BUILT.filter((p) => p.parent === node.slug).map((p) => p.slug);
    case "sibling-clusters":
      return BUILT.filter((p) => p.parent === node.parent && p.slug !== node.slug && p.type === "cluster-pillar").map((p) => p.slug);
    case "own-cluster-spokes":
      return BUILT.filter((p) => p.parent === node.slug && ["product", "cluster-article", "ratgeber-pillar"].includes(p.type)).map((p) => p.slug);
    case "own-ratgeber":
      return BUILT.filter((p) => p.parent === node.slug && p.type === "ratgeber-pillar").map((p) => p.slug);
    default:
      return [];
  }
}

/** Does this target resolve to something planned-but-unbuilt? (→ backlog, not an error.) */
function targetIsBacklog(target, node) {
  if (typeof target === "string" && target.startsWith("/")) {
    return allSlugs.has(normSlug(target)) && !builtSlugs.has(normSlug(target));
  }
  // symbolic: backlog if there is a planned child/sibling but no built one
  const built = resolveTargets(target, node);
  if (built.length) return false;
  switch (target) {
    case "own-children":
      return PAGES.some((p) => p.parent === node.slug && !p.built);
    case "own-cluster-spokes":
      return PAGES.some((p) => p.parent === node.slug && !p.built && ["product", "cluster-article", "ratgeber-pillar"].includes(p.type));
    case "own-ratgeber":
      return PAGES.some((p) => p.parent === node.slug && !p.built && p.type === "ratgeber-pillar");
    case "parent":
      return !!node.parent && !builtSlugs.has(node.parent);
    default:
      return false;
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const partialPages = new Set(); // pages extracted via regex (no anchors)

async function main() {
  // --- Extraction: content modules (page-scoped) ---
  for (const node of BUILT) {
    if (node.contentModule) {
      const n = await extractModule(node);
      if (n === -1) partialPages.add(node.slug);
    }
  }

  // --- Extraction: regex sweep of chrome + page.tsx ---
  const navFile = resolve(ROOT, "src/lib/nav.ts");
  const contentFile = resolve(ROOT, "src/lib/content.ts");
  for (const { abs, source, scope } of [
    { abs: navFile, source: "header-nav", scope: "chrome" },
    { abs: contentFile, source: "footer-global", scope: "chrome" },
  ]) {
    for (const l of regexLinks(abs)) links.push({ href: l.href, source, scope, file: relative(ROOT, abs), line: l.line });
  }

  const pageFiles = listFiles(resolve(ROOT, "src/app"), (p) => p.endsWith(`${sep}page.tsx`));
  for (const abs of pageFiles) {
    const slug = pageFileToSlug(abs);
    if (slug.startsWith("/library")) continue; // internal showcase, excluded
    const file = relative(ROOT, abs);
    for (const l of regexLinks(abs)) {
      const link = { href: l.href, source: slug, scope: "page", file, line: l.line };
      links.push(link);
      if (builtSlugs.has(slug)) addPageLink(slug, link);
    }
  }

  const componentFiles = listFiles(resolve(ROOT, "src/components"), (p) => p.endsWith(".tsx"));
  for (const abs of componentFiles) {
    const file = relative(ROOT, abs);
    for (const l of regexLinks(abs)) {
      if (l.href === "#" || isInternal(l.href) || isFragment(l.href)) {
        links.push({ href: l.href, source: `component:${file.split(sep).pop()}`, scope: "chrome", file, line: l.line });
      }
    }
  }

  // === CHECK 1: dead / placeholder / unknown internal links ===
  for (const link of links) {
    const { href } = link;
    if (isExternal(href)) continue;
    if (isFragment(href)) {
      add("Fehler", "dead-link", `Platzhalter-Link \`${href}\` (kein Ziel).`, loc(link));
    } else if (isInternal(href)) {
      const s = normSlug(href);
      if (builtSlugs.has(s)) {
        if (s !== href) add("Hinweis", "canonical", `\`${href}\` → kanonisch \`${s}\` (Trailing-Slash, vermeidet Redirect-Hop).`, loc(link));
      } else if (allSlugs.has(s)) {
        add("Fehler", "dead-link", `Link auf noch nicht gebaute Seite \`${s}\` — bis zum Launch der Zielseite entfernen.`, loc(link));
      } else {
        add("Fehler", "dead-link", `Unbekanntes internes Ziel \`${href}\` (existiert nicht im Seiten-Graph).`, loc(link));
      }
    }
  }

  // === Per-page checks (built pages with page-scoped links) ===
  for (const node of BUILT) {
    const outgoing = pageLinks.get(node.slug) || [];
    const rule = RULES[node.type];
    if (!rule) continue;
    const targetSet = new Set(outgoing.filter((l) => isInternal(l.href)).map((l) => normSlug(l.href)));
    const hasModule = !!node.contentModule || outgoing.length > 0;

    // CHECK 2: missing MUSS
    for (const t of rule.must) {
      const resolved = resolveTargets(t.target, node);
      if (!resolved.length) {
        if (targetIsBacklog(t.target, node)) {
          add("Hinweis", "muss-backlog", `${node.slug}: MUSS-Link \`${label(t.target)}\` noch blockiert (Ziel ungebaut). ${t.why ?? ""}`.trim(), { page: node.slug });
        }
        continue;
      }
      const missing = resolved.filter((r) => !targetSet.has(r) && r !== node.slug);
      if (missing.length && hasModule) {
        add("Fehler", "missing-muss", `${node.slug}: fehlender MUSS-Link → ${missing.map((m) => `\`${m}\``).join(", ")}. ${t.why ?? ""}`.trim(), { page: node.slug, suggestAnchors: missing.map((m) => suggestAnchors(m, node)) });
      }
    }

    // CHECK 3: missing SOLL (Warnung)
    for (const t of rule.soll) {
      const resolved = resolveTargets(t.target, node);
      if (!resolved.length) continue;
      const missing = resolved.filter((r) => !targetSet.has(r) && r !== node.slug);
      if (missing.length && hasModule) {
        add("Hinweis", "missing-soll", `${node.slug}: empfohlener SOLL-Link fehlt → ${missing.map((m) => `\`${m}\``).join(", ")}. ${t.why ?? ""}`.trim(), { page: node.slug });
      }
    }

    // CHECK 4: forbidden links (DARF NICHT)
    for (const l of outgoing) {
      if (!isInternal(l.href)) continue;
      const t = nodeBySlug.get(normSlug(l.href));
      if (!t || t.slug === node.slug) continue;
      if (rule.darfNicht.includes("legal-in-body") && t.type === "legal") {
        add("Warnung", "darf-nicht", `${node.slug}: Body-Link auf Rechtsseite \`${t.slug}\` (nur im Footer erlaubt).`, loc(l));
      }
      if (rule.darfNicht.includes("skip-hub-level") && ["product", "cluster-article", "ratgeber-pillar"].includes(t.type) && t.parent !== node.slug) {
        add("Warnung", "darf-nicht", `${node.slug}: Hub-Ebenen-Übersprung → \`${t.slug}\` (Ebene 3). Über den Cluster-Pillar verlinken.`, loc(l));
      }
      if (rule.darfNicht.includes("cross-silo") && isCrossSilo(node, t)) {
        add("Warnung", "darf-nicht", `${node.slug}: möglicher Cross-Silo-Link → \`${t.slug}\` (${t.silo || t.audience}). Nur bei echtem semantischem Bezug erlaubt.`, loc(l));
      }
    }

    // CHECK 5: link budget
    const bodyCount = targetSet.size + outgoing.filter((l) => isExternal(l.href)).length;
    if (node.contentModule && bodyCount > rule.maxBodyLinks) {
      add("Warnung", "budget", `${node.slug}: ${bodyCount} Body-Links > Budget ${rule.maxBodyLinks} (PageRank-Verdünnung).`, { page: node.slug });
    }

    // CHECK 6: anchor diversity (only where we have real anchors)
    if (node.contentModule && !partialPages.has(node.slug)) {
      checkAnchors(node, outgoing);
    }
  }

  // === CHECK 7: breadcrumb schema on level ≥ 2 pages ===
  for (const node of BUILT) {
    if (!["cluster-pillar", "product", "ratgeber-pillar", "cluster-article"].includes(node.type)) continue;
    const slugSegs = node.slug.replace(/^\/|\/$/g, "");
    const candidates = [
      resolve(ROOT, `src/app/(site)/${slugSegs}/page.tsx`),
      resolve(ROOT, `src/app/${slugSegs}/page.tsx`),
    ];
    const abs = candidates.find((c) => safeExists(c));
    if (!abs) continue;
    const src = readFileSync(abs, "utf8");
    if (!/BreadcrumbList|buildServicePageJsonLd|buildLadenbauJsonLd/.test(src)) {
      add("Warnung", "breadcrumb-schema", `${node.slug}: kein BreadcrumbList-JSON-LD (Pflicht ab Ebene 2, Prinzip 7).`, { page: node.slug, file: relative(ROOT, abs) });
    }
  }

  // === CHECK 8: sitemap consistency ===
  const sitemapSrc = readFileSync(resolve(ROOT, "src/app/sitemap.ts"), "utf8");
  const sitemapPaths = new Set([...sitemapSrc.matchAll(/path:\s*"([^"]+)"/g)].map((m) => normSlug(m[1])));
  for (const node of BUILT) {
    if (node.type === "homepage") continue;
    if (!sitemapPaths.has(node.slug)) {
      add("Hinweis", "sitemap", `${node.slug} ist gebaut, fehlt aber in src/app/sitemap.ts.`, { page: node.slug });
    }
  }

  // === CHECK 9: footer = pillar-hubs + legal only ===
  for (const link of links.filter((l) => l.source === "footer-global" && isInternal(l.href))) {
    const t = nodeBySlug.get(normSlug(link.href));
    if (t && !FOOTER_ALLOWED_TYPES.includes(t.type)) {
      add("Hinweis", "footer", `Footer verlinkt \`${t.slug}\` (Typ ${t.type}) — Footer sollte nur Pillar-Hubs/Conversion/Legal enthalten (Prinzip 4).`, loc(link));
    }
  }

  // === CHECK 10: backlog reconciliation ===
  try {
    const backlog = readFileSync(resolve(ROOT, "docs/seo/internal-linking.md"), "utf8");
    const backlogSection = backlog.split(/##\s*Backlog/i)[1]?.split(/##\s*Done/i)[0] ?? "";
    const slugRe = /`(\/[a-z0-9-/]+\/)`/g;
    const nowBuilt = new Set();
    for (const m of backlogSection.matchAll(slugRe)) {
      const s = normSlug(m[1]);
      if (builtSlugs.has(s)) nowBuilt.add(s);
    }
    if (nowBuilt.size) {
      add("Hinweis", "backlog", `Im Backlog erwähnte, jetzt gebaute Ziele (Verlinkung prüfen): ${[...nowBuilt].map((s) => `\`${s}\``).join(", ")}.`);
    }
  } catch {
    /* doc optional */
  }

  report();
}

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function loc(link) {
  return { file: link.file, line: link.line, href: link.href };
}

function label(target) {
  return typeof target === "string" ? target : `[${target}]`;
}

function isCrossSilo(from, to) {
  if (from.audience === "neutral" || to.audience === "neutral") return false;
  // hub ↔ hub is always allowed (Ebene 0–1)
  if (from.type === "pillar-hub" && to.type === "pillar-hub") return false;
  // own parent / own child within the silo is fine
  if (to.slug === from.parent || to.parent === from.slug) return false;
  // different audience, or different silo within same audience → cross-silo
  if (from.audience !== to.audience) return true;
  return to.silo !== "" && to.silo !== from.silo;
}

function suggestAnchors(slug, node) {
  const set = ANCHORS[slug];
  if (!set) return { target: slug, options: [] };
  const options = [...(set.partial || []), ...(set.descriptive || []), ...(set.exact || [])].slice(0, 4);
  return { target: slug, options };
}

function checkAnchors(node, outgoing) {
  const internal = outgoing.filter((l) => isInternal(l.href) && l.anchor);
  if (!internal.length) return;
  // exact-match cap per target
  const byTarget = new Map();
  for (const l of internal) {
    const s = normSlug(l.href);
    if (!byTarget.has(s)) byTarget.set(s, []);
    byTarget.get(s).push(l.anchor);
  }
  for (const [s, anchorsList] of byTarget) {
    const exact = (ANCHORS[s]?.exact || []).map((a) => a.toLowerCase());
    const exactHits = anchorsList.filter((a) => exact.includes(a.toLowerCase())).length;
    if (exactHits > EXACT_MATCH_CAP) {
      add("Warnung", "anchor-diversity", `${node.slug}: Exact-Match-Anker auf \`${s}\` ${exactHits}× (> ${EXACT_MATCH_CAP}). Anker variieren.`, { page: node.slug });
    }
  }
  // generic ratio
  const generic = internal.filter((l) => GENERIC_ANCHORS.includes(l.anchor.trim().toLowerCase())).length;
  if (generic / internal.length > GENERIC_MAX_RATIO) {
    add("Warnung", "anchor-diversity", `${node.slug}: ${Math.round((generic / internal.length) * 100)}% generische Anker (> ${GENERIC_MAX_RATIO * 100}%).`, { page: node.slug });
  }
}

function safeExists(p) {
  try {
    statSync(p);
    return true;
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

function report() {
  const order = { Fehler: 0, Warnung: 1, Hinweis: 2 };
  findings.sort((a, b) => order[a.severity] - order[b.severity]);
  const counts = { Fehler: 0, Warnung: 0, Hinweis: 0 };
  for (const f of findings) counts[f.severity]++;

  const payload = {
    summary: {
      pagesBuilt: BUILT.length,
      pagesPlanned: PAGES.length - BUILT.length,
      linksFound: links.length,
      partialExtraction: [...partialPages],
      counts,
    },
    findings,
  };
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(payload, null, 2));

  const C = { Fehler: "\x1b[31m", Warnung: "\x1b[33m", Hinweis: "\x1b[36m", reset: "\x1b[0m", dim: "\x1b[2m" };
  console.log(`\nInterne Verlinkung — Audit`);
  console.log(`${C.dim}${BUILT.length} gebaute Seiten · ${links.length} Links · Report: ${relative(ROOT, OUT)}${C.reset}\n`);
  for (const sev of ["Fehler", "Warnung", "Hinweis"]) {
    const group = findings.filter((f) => f.severity === sev);
    if (!group.length) continue;
    console.log(`${C[sev]}${sev} (${group.length})${C.reset}`);
    for (const f of group) {
      const where = f.file ? ` ${C.dim}${f.file}${f.line ? `:${f.line}` : ""}${C.reset}` : "";
      console.log(`  • [${f.check}] ${f.message}${where}`);
    }
    console.log("");
  }
  console.log(`${counts.Fehler} Fehler · ${counts.Warnung} Warnungen · ${counts.Hinweis} Hinweise\n`);

  if (counts.Fehler > 0) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 2;
});
