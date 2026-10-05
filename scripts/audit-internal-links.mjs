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
  GENERIC_WORDS,
  FOOTER_ALLOWED_TYPES,
  MAX_BRIDGES_PER_PAGE,
  MIN_INBOUND,
  bridgeBetween,
  EXTERNAL_SOURCE_ALLOWLIST,
  MAX_EXTERNAL_PER_PAGE,
} from "../src/lib/seo/linking-rules.ts";
import { INLINE_LINK_RE } from "../src/lib/inline-links/parse.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = resolve(ROOT, "docs/seo/link-audit.json");

// Scharf seit Retrofit 2026-07 (CI-Gate): Seiten ohne Minimum an kontextuellen
// In-Content-Links brechen das Audit.
const MIN_INLINE_SEVERITY = "Fehler";

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
/** Externer Web-Link (http/https/protokoll-relativ) — ohne mailto:/tel:. */
const isWebExternal = (h) => typeof h === "string" && /^(https?:)?\/\//.test(h);

/** Hostname eines externen Links (lowercase, ohne `www.`), oder null. */
function hostOf(href) {
  try {
    return new URL(href.startsWith("//") ? `https:${href}` : href).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return null;
  }
}

/** Host auf der Beleg-Allowlist? Ein Eintrag deckt auch alle Subdomains ab. */
function hostAllowed(host) {
  return !!host && EXTERNAL_SOURCE_ALLOWLIST.some((d) => host === d || host.endsWith(`.${d}`));
}

const PRODUCTISH = ["product", "cluster-article", "ratgeber-pillar"];

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

/** [Anker](/ziel/)-Marker aus einem Copy-String → { href, anchor, inline } (siehe src/lib/inline-links). */
function inlineLinksFromString(text, out) {
  const re = new RegExp(INLINE_LINK_RE.source, "g");
  let m;
  while ((m = re.exec(text)) !== null) out.push({ href: m[2], anchor: m[1], inline: true });
}

/**
 * Recursively walk a data value, collecting { href, anchor } pairs.
 *
 * `crumb` marks links that come from a nested `breadcrumb:` array (convention in
 * 16 of the content modules: `<slug>Hero.breadcrumb`). They stay in the link list —
 * a dead breadcrumb must still be caught — but they are NOT body links and are
 * excluded from the budget in CHECK 5.
 */
function walkValue(val, out, seen = new Set(), crumb = false) {
  if (!val || typeof val !== "object" || seen.has(val)) return;
  seen.add(val);
  if (Array.isArray(val)) {
    for (const v of val) {
      if (typeof v === "string") inlineLinksFromString(v, out);
      else walkValue(v, out, seen, crumb);
    }
    return;
  }
  if (typeof val.href === "string") out.push({ href: val.href, anchor: pickAnchor(val), crumb });
  for (const [k, v] of Object.entries(val)) {
    if (typeof v === "string") inlineLinksFromString(v, out);
    if (typeof v === "string" && /href$/i.test(k) && k.toLowerCase() !== "href") {
      out.push({ href: v, anchor: anchorForHrefKey(val, k), crumb });
    }
  }
  for (const [k, v] of Object.entries(val)) walkValue(v, out, seen, crumb || k === "breadcrumb");
}

// Matches plain `href` plus suffixed keys (`ctaHref`, `primaryHref`, `gewerbeHref`, …)
// so the regex fallback sees the same links as the walkValue() module extraction.
const HREF_RE = /(?:^|[^a-zA-Z0-9_])[a-zA-Z0-9_]*[hH]ref\s*[:=]\s*\{?\s*["'`]([^"'`{}\s]+)["'`]/g;

const ANCHOR_KEY_RE = /\b(?:label|linkText|title|text)\s*:\s*["'`]([^"'`]+)["'`]/;

/**
 * Anker zu einem href im Regex-Modus: dieselbe Zeile (`{ label: "…", href: "…" }`)
 * oder bis zu vier Zeilen darüber im selben Objekt (`title: "…",` … `href: "…"`).
 * Ohne das sah das Audit auf der Startseite (home.ts, Regex-Fallback) keinen
 * einzigen Linktext — und die Kachel „Badmöbel nach Maß" → /moebel-nach-mass/
 * blieb unsichtbar (Link-Analyse 02.10.2026, Befund B).
 */
function regexAnchor(lines, i) {
  const same = lines[i].match(ANCHOR_KEY_RE);
  if (same) return same[1];
  for (let j = i - 1; j >= Math.max(0, i - 4); j--) {
    if (/[{}]\s*,?\s*$/.test(lines[j]) && !/:\s*\{\s*$/.test(lines[j])) break; // Objektgrenze
    if (/[hH]ref\s*:/.test(lines[j])) break; // gehört zu einem anderen Link
    const m = lines[j].match(ANCHOR_KEY_RE);
    if (m) return m[1];
  }
  return undefined;
}

/** Regex sweep of a source file → [{ href, line }]. */
function regexLinks(absPath) {
  const text = readFileSync(absPath, "utf8");
  const out = [];
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    let m;
    HREF_RE.lastIndex = 0;
    while ((m = HREF_RE.exec(line)) !== null) out.push({ href: m[1], line: i + 1, anchor: regexAnchor(lines, i) });
    const inlineRe = new RegExp(INLINE_LINK_RE.source, "g");
    while ((m = inlineRe.exec(line)) !== null) out.push({ href: m[2], anchor: m[1], inline: true, line: i + 1 });
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
    // JSON-LD-Exporte (…JsonLd) überspringen: stripJsonLdLinks entfernt dort alle Marker, sie
    // werden nie als Link gerendert und würden FAQ-Links sonst doppelt zählen. Ein gemeinsames
    // `seen` verhindert Doppelzählung, wenn mehrere Exporte dasselbe Objekt referenzieren.
    const seen = new Set();
    for (const [name, v] of Object.entries(mod)) {
      if (/jsonld$/i.test(name)) continue;
      walkValue(v, out, seen);
    }
    for (const l of out) {
      const link = { ...l, source: node.slug, scope: "page", file, fromModule: true };
      links.push(link);
      addPageLink(node.slug, link);
    }
    return out.length;
  } catch {
    // Fallback: regex sweep (e.g. home.ts has an unresolvable value import).
    for (const l of regexLinks(abs)) {
      const link = { ...l, source: node.slug, scope: "page", file, fromModule: true };
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
    case "sibling-spokes":
      return siblingSpokes(node).map((p) => p.slug);
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
    case "sibling-spokes":
      return !!node.parent && PAGES.some((p) => p.parent === node.parent && p.slug !== node.slug && !p.built && PRODUCTISH.includes(p.type));
    default:
      return false;
  }
}

/** Gebaute Geschwister-Spokes (gleicher parent, Produkt/Ratgeber/Artikel, ohne sich selbst). */
function siblingSpokes(node) {
  if (!node.parent) return [];
  return BUILT.filter((p) => p.parent === node.parent && p.slug !== node.slug && PRODUCTISH.includes(p.type));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const partialPages = new Set(); // pages extracted via regex (no anchors)
const externalByPage = {}; // slug → [{ href, host, anchor, inline, allowed, file }] (nur Content-Module)

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
    for (const l of regexLinks(abs)) links.push({ ...l, source, scope, file: relative(ROOT, abs) });
  }

  const pageFiles = listFiles(resolve(ROOT, "src/app"), (p) => p.endsWith(`${sep}page.tsx`));
  for (const abs of pageFiles) {
    const slug = pageFileToSlug(abs);
    if (slug.startsWith("/library")) continue; // internal showcase, excluded
    const file = relative(ROOT, abs);
    for (const l of regexLinks(abs)) {
      const link = { ...l, source: slug, scope: "page", file };
      links.push(link);
      if (builtSlugs.has(slug)) addPageLink(slug, link);
    }
  }

  const componentFiles = listFiles(resolve(ROOT, "src/components"), (p) => p.endsWith(".tsx"));
  for (const abs of componentFiles) {
    const file = relative(ROOT, abs);
    for (const l of regexLinks(abs)) {
      if (l.href === "#" || isInternal(l.href) || isFragment(l.href)) {
        links.push({ ...l, source: `component:${file.split(sep).pop()}`, scope: "chrome", file });
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
      // Per-Seite-Ausnahme: dieser MUSS-Target gilt für diese Seite bewusst nicht.
      if (node.mustExempt?.includes(t.target)) continue;
      const resolved = resolveTargets(t.target, node);
      if (!resolved.length) {
        if (targetIsBacklog(t.target, node)) {
          add("Hinweis", "muss-backlog", `${node.slug}: MUSS-Link \`${label(t.target)}\` noch blockiert (Ziel ungebaut). ${t.why ?? ""}`.trim(), { page: node.slug });
        }
        continue;
      }
      const candidates = resolved.filter((r) => r !== node.slug);
      const missing = candidates.filter((r) => !targetSet.has(r));
      if (typeof t.min === "number") {
        // „mind. N von den aufgelösten Zielen“ (z. B. 1 Geschwister), nicht „alle“.
        const need = Math.min(t.min, candidates.length);
        const have = candidates.length - missing.length;
        if (have < need && hasModule) {
          add("Fehler", "missing-muss", `${node.slug}: MUSS-Link \`${label(t.target)}\` — nur ${have}/${need} verlinkt, Kandidaten: ${missing.map((m) => `\`${m}\``).join(", ")}. ${t.why ?? ""}`.trim(), { page: node.slug, suggestAnchors: missing.map((m) => suggestAnchors(m, node)) });
        }
        continue;
      }
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
      // Geschwister unter demselben Cluster sind kein Ebenen-Sprung: Ein Ratgeber
      // (Ebene 3) verlinkt seine Produktseiten (Ebene 3) — das ist sogar sein MUSS.
      if (rule.darfNicht.includes("skip-hub-level") && ["product", "cluster-article", "ratgeber-pillar"].includes(t.type) && t.parent !== node.slug && t.parent !== node.parent) {
        add("Warnung", "darf-nicht", `${node.slug}: Hub-Ebenen-Übersprung → \`${t.slug}\` (Ebene 3). Über den Cluster-Pillar verlinken.`, loc(l));
      }
      if (rule.darfNicht.includes("cross-silo") && isCrossSilo(node, t) && !bridgeBetween(node.slug, t.slug)) {
        add("Warnung", "darf-nicht", `${node.slug}: möglicher Cross-Silo-Link → \`${t.slug}\` (${t.silo || t.audience}). Nur bei echtem semantischem Bezug erlaubt — dann als Brücke in BRIDGES eintragen.`, loc(l));
      }
    }
    const bridges = [...new Set(outgoing.filter((l) => isInternal(l.href) && !l.crumb).map((l) => normSlug(l.href)))]
      .filter((s) => bridgeBetween(node.slug, s));
    if (bridges.length > MAX_BRIDGES_PER_PAGE) {
      add("Warnung", "bruecke", `${node.slug}: ${bridges.length} Brücken-Links (> ${MAX_BRIDGES_PER_PAGE}) — das Silo verwischt: ${bridges.map((b) => `\`${b}\``).join(", ")}.`, { page: node.slug });
    }

    // CHECK 5: link budget
    // Breadcrumb-Links zählen NICHT mit: sie sind Navigation, nicht Body-Content,
    // stehen auf jeder Seite ab Ebene 2 und sind für das BreadcrumbList-Schema
    // Pflicht. Sie mitzuzählen belastete jede Seite still um einen Budget-Platz —
    // bei /referenzen/ war genau das der Grund für eine Dauer-Warnung (11 > 10),
    // obwohl der elfte „Body-Link" die Breadcrumb auf `/` war. `targetSet` bleibt
    // unverändert: die MUSS-Prüfungen oben dürfen eine Breadcrumb weiterhin als
    // erfüllten Pflicht-Link akzeptieren.
    const bodyTargets = new Set(
      outgoing.filter((l) => isInternal(l.href) && !l.crumb).map((l) => normSlug(l.href)),
    );
    // tel:/mailto: geben keine Linkkraft ab und zählen deshalb nicht mit.
    const bodyCount = bodyTargets.size + outgoing.filter((l) => isExternal(l.href) && !/^(mailto|tel):/.test(l.href)).length;
    const budget = node.maxBodyLinks ?? rule.maxBodyLinks;
    if (node.contentModule && bodyCount > budget) {
      add("Warnung", "budget", `${node.slug}: ${bodyCount} Body-Links > Budget ${budget} (PageRank-Verdünnung).`, { page: node.slug });
    }

    // CHECK 6: anchor diversity (only where we have real anchors)
    if (node.contentModule && !partialPages.has(node.slug)) {
      checkAnchors(node, outgoing);
    }
    // CHECK 13: Linktext sagt etwas über das Ziel / Ziel ist das genaueste
    checkAnchorRelevance(node, outgoing);

    // CHECK 11: Minimum kontextueller In-Content-Links (Marker im Fließtext).
    // Invariante: Modul-Walk (extractModule) und page.tsx-Regex-Sweep dürfen NICHT
    // denselben String sehen — sonst würde ein Marker doppelt zählen. Heute disjunkt
    // (Copy lebt in src/lib/content/*, nur die 2 Conversion-Seiten inlinen Marker in
    // page.tsx). Wenn eine Seite künftig beides tut, hier nach href+anchor deduplizieren.
    const inlineCount = outgoing.filter((l) => l.inline && isInternal(l.href)).length;
    if (hasModule && rule.minInlineLinks > 0 && inlineCount < rule.minInlineLinks) {
      add(MIN_INLINE_SEVERITY, "min-inline", `${node.slug}: nur ${inlineCount}/${rule.minInlineLinks} kontextuelle In-Content-Links ([Anker](/ziel/)-Marker im Fließtext).`, { page: node.slug });
    }

    // CHECK 14: externe Links aus Content-Modulen (Belege, Outbound).
    // Chrome (Social, Maps, externer Möbelplaner in Header/Footer/Komponenten) und
    // page.tsx-Links (z. B. Datenschutz) sind ausgenommen: nur `fromModule`-Links.
    const ext = outgoing.filter((l) => l.fromModule && isWebExternal(l.href));
    if (ext.length) {
      const entries = ext.map((l) => {
        const host = hostOf(l.href);
        return { href: l.href, host, anchor: l.anchor ?? null, inline: !!l.inline, allowed: hostAllowed(host), file: l.file };
      });
      externalByPage[node.slug] = entries;
      for (const e of entries) {
        if (!e.allowed) {
          add("Fehler", "extern", `${node.slug}: externer Link auf \`${e.host ?? e.href}\` — Host nicht auf EXTERNAL_SOURCE_ALLOWLIST (nur Beleg-Quellen; nie Hersteller/Wettbewerber).`, { page: node.slug, file: e.file, href: e.href });
        }
      }
      if (entries.length > MAX_EXTERNAL_PER_PAGE) {
        add("Warnung", "extern", `${node.slug}: ${entries.length} externe Links > ${MAX_EXTERNAL_PER_PAGE} je Seite.`, { page: node.slug });
      }
    }
  }

  // === CHECK 12: eingehende Links im Inhalt (ohne Menü, Footer, Breadcrumb) ===
  // Das Audit prüfte bis 10/2026 nur ausgehende Regeln. Ob eine Seite überhaupt
  // Linkkraft bekommt, sah es nicht: Produktseiten hingen an ein bis zwei
  // Quellen und fielen nie auf (Link-Analyse 02.10.2026, Befund A + D).
  const inbound = new Map();
  for (const [src, list] of pageLinks) {
    for (const l of list) {
      if (!isInternal(l.href) || l.crumb) continue;
      const t = normSlug(l.href);
      if (t === src) continue;
      if (!inbound.has(t)) inbound.set(t, new Set());
      inbound.get(t).add(src);
    }
  }
  for (const node of BUILT) {
    const min = MIN_INBOUND[node.type];
    if (!min) continue;
    const quellen = inbound.get(node.slug) ?? new Set();
    if (quellen.size < min) {
      add("Warnung", "inbound", `${node.slug}: nur ${quellen.size} Seite(n) verlinken im Inhalt (Minimum ${min})${quellen.size ? ` — ${[...quellen].map((q) => `\`${q}\``).join(", ")}` : ""}. Nachverlinken aus thematisch passenden Seiten.`, { page: node.slug });
    }
    // Produktseiten: mind. ein Geschwister im selben Cluster muss zurückverlinken
    // (Gegenstück zum MUSS `sibling-spokes`). Ohne gebaute Geschwister keine Pflicht.
    if (node.type === "product") {
      const sibs = siblingSpokes(node).map((p) => p.slug);
      if (sibs.length && ![...quellen].some((q) => sibs.includes(q))) {
        add("Fehler", "inbound", `${node.slug}: kein Rücklink von einem Geschwister (${sibs.map((x) => `\`${x}\``).join(", ")}). Mind. 1 Geschwister muss diese Seite im Inhalt verlinken.`, { page: node.slug });
      }
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
    // Scan the route file AND the page's content module — some pages build their
    // JSON-LD in the content module and only import the ready object (e.g.
    // `kuechenJsonLd`), so the route file alone won't mention BreadcrumbList.
    let src = readFileSync(abs, "utf8");
    if (node.contentModule) {
      const modPath = resolve(ROOT, `src/lib/content/${node.contentModule}.ts`);
      if (safeExists(modPath)) src += "\n" + readFileSync(modPath, "utf8");
    }
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
      add("Hinweis", "footer", `Footer verlinkt \`${t.slug}\` (Typ ${t.type}) — Footer sollte nur Hubs/Conversion/Brand/Legal enthalten, keine Cluster-/Produkt-Tiefenlinks (Prinzip 4).`, loc(link));
    }
  }

  // === CHECK 10: backlog reconciliation ===
  try {
    const backlog = readFileSync(resolve(ROOT, "docs/seo/internal-linking.md"), "utf8");
    // Backlog table only (stop at the interim-retargets subsection, whose
    // "Currently" column intentionally points at built pages).
    const backlogSection = (backlog.split(/##\s*Backlog/i)[1]?.split(/##\s*Done/i)[0] ?? "").split(/###\s/)[0];
    const slugRe = /`(\/[a-z0-9-/]+\/)`/g;
    const nowBuilt = new Set();
    for (const line of backlogSection.split("\n")) {
      if (!line.trim().startsWith("|")) continue;
      // Only the "Should link to" column (cell 2) — a built slug in the From
      // column just means the source page exists, not that a link is pending.
      const targetCell = line.split("|")[2] ?? "";
      for (const m of targetCell.matchAll(slugRe)) {
        const s = normSlug(m[1]);
        if (builtSlugs.has(s)) nowBuilt.add(s);
      }
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

/** Is `anc` an ancestor of `node` along the parent chain? */
function isAncestor(anc, node) {
  for (let p = node.parent; p; p = nodeBySlug.get(p)?.parent ?? null) {
    if (p === anc.slug) return true;
  }
  return false;
}

function isCrossSilo(from, to) {
  if (from.audience === "neutral" || to.audience === "neutral") return false;
  // hub ↔ hub is always allowed (Ebene 0–1)
  if (from.type === "pillar-hub" && to.type === "pillar-hub") return false;
  // own parent / own child within the silo is fine
  if (to.slug === from.parent || to.parent === from.slug) return false;
  // up-links along the ancestor chain (e.g. product → grandparent pillar-hub,
  // breadcrumb trail) are hierarchy links, never cross-silo
  if (isAncestor(to, from)) return false;
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

// --- CHECK 13: Linktext-Relevanz ------------------------------------------

const FUELLWORTE = new Set(["nach", "mass", "fast", "systemmoebel", "systemmobel", "fuer", "unser", "unsere", "ihren", "ihre", "einem", "einer", "eine", "ohne", "oder", "mit", "vom", "von", "bereich"]);
const UMLAUT = { ä: "ae", ö: "oe", ü: "ue", ß: "ss" };

/** Inhaltswörter eines Textes: klein, Umlaute aufgelöst, ≥ 4 Zeichen, ohne Füllwörter. */
function woerter(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[äöüß]/g, (c) => UMLAUT[c])
    .split(/[^a-z]+/)
    .filter((w) => w.length >= 4 && !FUELLWORTE.has(w) && !GENERIC_WORDS.includes(w));
}

/** Wortstämme (auf 5 Zeichen gekappt) — der strenge Vergleich. */
const staemme = (text) => woerter(text).map((w) => w.slice(0, 5));

const vokabular = new Map();
/** Wortschatz eines Ziels: alle Anker-Varianten plus die Slug-Segmente. */
function vokabularVon(slug) {
  if (!vokabular.has(slug)) {
    const set = ANCHORS[slug];
    const texte = set ? [...set.exact, ...set.partial, ...set.brand, ...set.descriptive] : [];
    texte.push(slug.replace(/[/-]+/g, " "));
    vokabular.set(slug, new Set(texte.flatMap(staemme)));
  }
  return vokabular.get(slug);
}

const istGenerisch = (anchor) => {
  const woerter = anchor.toLowerCase().split(/[^a-zäöüß]+/).filter(Boolean);
  return woerter.length > 0 && woerter.every((w) => GENERIC_WORDS.includes(w));
};

const THEMEN_TYPEN = ["pillar-hub", "cluster-pillar", "product", "ratgeber-pillar", "cluster-article"];

function isDescendant(desc, anc) {
  return isAncestor(anc, desc);
}

function checkAnchorRelevance(node, outgoing) {
  const gemeldet = new Set();
  for (const l of outgoing) {
    if (!isInternal(l.href) || !l.anchor || l.crumb) continue;
    const t = nodeBySlug.get(normSlug(l.href));
    if (!t || t.slug === node.slug) continue;
    const key = `${t.slug}|${l.anchor}`;
    if (gemeldet.has(key)) continue;
    gemeldet.add(key);
    if (istGenerisch(l.anchor)) {
      add("Warnung", "anker-generisch", `${node.slug}: Linktext „${l.anchor}" → \`${t.slug}\` sagt nichts über das Ziel. Vorschlag: ${suggestAnchors(t.slug, node).options.slice(0, 2).map((o) => `„${o}"`).join(" oder ") || "Seitentitel"}.`, loc(l));
      continue;
    }
    if (!THEMEN_TYPEN.includes(t.type)) continue;
    const anker = staemme(l.anchor);
    if (!anker.length) continue;
    const vok = vokabularVon(t.slug);
    const passt = anker.some((w) => vok.has(w));
    // Locker: Komposita enthalten den Stamm mitten im Wort („Wohnküche" → Küchen).
    // Reicht für »sagt etwas über das Ziel«, aber nicht, um ein genaueres Ziel
    // auszuschließen — „Badmöbel" enthält auch „möbel".
    const passtLocker = passt || woerter(l.anchor).some((w) => [...vok].some((v) => w.includes(v)));
    // Genaueres Ziel: ein gebauter Nachfahre des Ziels, zu dem der Anker passt,
    // während er zum verlinkten Ziel selbst nicht passt. Fall 02.10.: Kachel
    // „Badmöbel nach Maß" → /moebel-nach-mass/ statt /badmoebel-nach-mass/.
    if (!passt) {
      const besser = BUILT.filter((p) => isDescendant(p, t) && anker.some((w) => vokabularVon(p.slug).has(w)));
      if (besser.length) {
        add("Warnung", "ziel-zu-allgemein", `${node.slug}: „${l.anchor}" → \`${t.slug}\`, passt aber zu ${besser.slice(0, 2).map((b) => `\`${b.slug}\``).join(" / ")} — auf das genauere Ziel verlinken.`, loc(l));
      } else if (!passtLocker) {
        add("Hinweis", "anker-relevanz", `${node.slug}: Linktext „${l.anchor}" → \`${t.slug}\` enthält keinen Begriff des Ziels.`, loc(l));
      }
    }
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
    // Eigene Kategorie: alle externen Links aus Content-Modulen je Seite, mit Allowlist-Urteil.
    external: {
      allowlist: EXTERNAL_SOURCE_ALLOWLIST,
      maxPerPage: MAX_EXTERNAL_PER_PAGE,
      pages: externalByPage,
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
