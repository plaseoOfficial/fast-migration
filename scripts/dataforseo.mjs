#!/usr/bin/env node
/**
 * dataforseo.mjs — DataForSEO-CLI für den Fast-Systemmöbel-Klon.
 *
 * Liefert Live-Daten (Google DE) zum Validieren der SEO-Annahmen in
 * docs/seo/keyword-map.md und den Research-Kits. Wird primär vom
 * `seo-daten`-Agent (.claude/agents/seo-daten.md) gefahren.
 *
 * Auth: DATAFORSEO_AUTH in .env.local — Base64 von "login:password".
 *
 * Befehle:
 *   balance                    Login + Kontostand (kostenlos)
 *   volume <kw> [<kw> ...]     Suchvolumen/CPC/Wettbewerb (Google Ads, DE)
 *   serp <keyword>             Live-SERP Top-10 + PAA + eigenes Ranking
 *   validate-map               keyword-map.md (SV/Mon-Spalte) gegen Live-Daten
 *                              prüfen → Report + docs/seo/keyword-volume-audit.json
 *
 * Jeder Befehl gibt am Ende die API-Kosten des Laufs aus.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const LOCATION_DE = 2276; // Germany
const LANGUAGE_DE = "de";
const OWN_DOMAIN = "fast-systemmoebel.de";
const MAP_FILE = path.join(ROOT, "docs/seo/keyword-map.md");
const AUDIT_FILE = path.join(ROOT, "docs/seo/keyword-volume-audit.json");

function loadEnvLocal() {
  const file = path.join(ROOT, ".env.local");
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2];
  }
}
loadEnvLocal();

const AUTH = process.env.DATAFORSEO_AUTH;
if (!AUTH) {
  console.error(
    "✗ DATAFORSEO_AUTH fehlt. In .env.local setzen (Base64 von 'login:password').",
  );
  process.exit(1);
}

async function api(method, route, body) {
  const res = await fetch(`https://api.dataforseo.com/v3/${route}`, {
    method,
    headers: {
      Authorization: `Basic ${AUTH}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json();
  if (json.status_code !== 20000) {
    throw new Error(`${route}: ${json.status_code} ${json.status_message}`);
  }
  const task = json.tasks?.[0];
  if (task && task.status_code !== 20000) {
    throw new Error(`${route}: ${task.status_code} ${task.status_message}`);
  }
  return { result: task?.result ?? null, cost: json.cost ?? 0 };
}

const fmt = (n) => (n == null ? "–" : n.toLocaleString("de-DE"));

// ── balance ──────────────────────────────────────────────────────────────────

async function cmdBalance() {
  const { result } = await api("GET", "appendix/user_data");
  const r = result[0];
  console.log(`Login:     ${r.login}`);
  console.log(`Guthaben:  $${(r.money?.balance ?? 0).toFixed(2)}`);
}

// ── volume ───────────────────────────────────────────────────────────────────

async function fetchVolumes(keywords) {
  const { result, cost } = await api(
    "POST",
    "keywords_data/google_ads/search_volume/live",
    [{ keywords, location_code: LOCATION_DE, language_code: LANGUAGE_DE }],
  );
  return { rows: result ?? [], cost };
}

async function cmdVolume(keywords) {
  if (!keywords.length) {
    console.error("✗ volume: mindestens ein Keyword angeben");
    process.exit(1);
  }
  const { rows, cost } = await fetchVolumes(keywords);
  for (const r of rows) {
    console.log(
      `${r.keyword}  ·  SV ${fmt(r.search_volume)}/Mon  ·  Wettb. ${r.competition ?? "–"} (${r.competition_index ?? "–"}/100)  ·  CPC ${r.cpc != null ? `$${r.cpc}` : "–"}`,
    );
  }
  console.log(`\nKosten dieses Laufs: $${cost}`);
}

// ── serp ─────────────────────────────────────────────────────────────────────

async function cmdSerp(keyword) {
  if (!keyword) {
    console.error("✗ serp: ein Keyword angeben");
    process.exit(1);
  }
  const { result, cost } = await api("POST", "serp/google/organic/live/advanced", [
    {
      keyword,
      location_code: LOCATION_DE,
      language_code: LANGUAGE_DE,
      device: "desktop",
      depth: 10,
    },
  ]);
  const items = result?.[0]?.items ?? [];
  const organic = items.filter((i) => i.type === "organic");

  console.log(`SERP (Google DE, Desktop) — "${keyword}"\n`);
  for (const o of organic) {
    console.log(`#${String(o.rank_group).padStart(2)}  ${o.domain}  —  ${o.title}`);
  }

  const paa = items.find((i) => i.type === "people_also_ask");
  if (paa?.items?.length) {
    console.log("\nPeople also ask:");
    for (const q of paa.items) console.log(`  · ${q.title}`);
  }

  const features = [...new Set(items.map((i) => i.type))].filter(
    (t) => t !== "organic",
  );
  if (features.length) console.log(`\nSERP-Features: ${features.join(", ")}`);

  const own = organic.find((o) => o.domain?.endsWith(OWN_DOMAIN));
  console.log(
    own
      ? `\n${OWN_DOMAIN}: Platz ${own.rank_group}`
      : `\n${OWN_DOMAIN}: nicht in den Top ${organic.length}`,
  );
  console.log(`Kosten dieses Laufs: $${cost}`);
}

// ── validate-map ─────────────────────────────────────────────────────────────

function parseKeywordMap() {
  const md = readFileSync(MAP_FILE, "utf8");
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("| `")) continue;
    const cols = line.split("|").map((c) => c.trim());
    const keyword = cols[3] ?? "";
    if (!keyword) continue;
    const svText = cols[4] ?? "";
    const m = svText.replace(/\./g, "").match(/(\d+)\s*[–-]\s*(\d+)/);
    rows.push({
      url: (cols[1] ?? "").replace(/`/g, ""),
      keyword,
      svText,
      svMin: m ? Number(m[1]) : null,
      svMax: m ? Number(m[2]) : null,
      wettbewerb: cols[5] ?? "",
    });
  }
  return rows;
}

function judge(row, live) {
  if (!live || live.search_volume == null) return "keine-daten";
  if (row.svMin == null) return "keine-schaetzung";
  const sv = live.search_volume;
  if (sv >= row.svMin && sv <= row.svMax) return "ok";
  // Toleranz: Schätzungen sind grob — erst ab Faktor 2 außerhalb des
  // Korridors gilt die Annahme als falsch (sonst nur Drift).
  if (sv < row.svMin) return sv < row.svMin / 2 ? "deutlich-niedriger" : "niedriger";
  return sv > row.svMax * 2 ? "deutlich-hoeher" : "hoeher";
}

async function cmdValidateMap() {
  const rows = parseKeywordMap();
  if (!rows.length) {
    console.error(`✗ Keine Keyword-Zeilen in ${path.relative(ROOT, MAP_FILE)} gefunden`);
    process.exit(1);
  }
  console.log(`${rows.length} Keywords aus keyword-map.md — frage Live-Volumen ab …\n`);

  const { rows: live, cost } = await fetchVolumes([
    ...new Set(rows.map((r) => r.keyword)),
  ]);
  const byKw = new Map(live.map((l) => [l.keyword.toLowerCase(), l]));

  const report = rows.map((row) => {
    const l = byKw.get(row.keyword.toLowerCase());
    return {
      ...row,
      live: l
        ? {
            searchVolume: l.search_volume,
            competition: l.competition,
            competitionIndex: l.competition_index,
            cpc: l.cpc,
          }
        : null,
      status: judge(row, l),
    };
  });

  const order = [
    "deutlich-hoeher",
    "deutlich-niedriger",
    "keine-daten",
    "hoeher",
    "niedriger",
    "keine-schaetzung",
    "ok",
  ];
  const counts = {};
  for (const r of report) counts[r.status] = (counts[r.status] ?? 0) + 1;

  for (const status of order) {
    const group = report.filter((r) => r.status === status);
    if (!group.length) continue;
    console.log(`\n── ${status} (${group.length}) ──`);
    for (const r of group) {
      console.log(
        `  ${r.url}\n    "${r.keyword}"  ·  Map: ${r.svText || "–"}  ·  Live: ${fmt(r.live?.searchVolume)}/Mon  ·  Wettb. live: ${r.live?.competition ?? "–"} (${r.live?.competitionIndex ?? "–"}/100)`,
      );
    }
  }

  writeFileSync(
    AUDIT_FILE,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        location: "Germany (2276)",
        language: LANGUAGE_DE,
        source: "keywords_data/google_ads/search_volume/live",
        counts,
        rows: report,
      },
      null,
      2,
    ) + "\n",
  );

  console.log(
    `\nZusammenfassung: ${report.length} Keywords · ${Object.entries(counts)
      .map(([k, v]) => `${k}: ${v}`)
      .join(" · ")}`,
  );
  console.log(`Report: ${path.relative(ROOT, AUDIT_FILE)}`);
  console.log(`Kosten dieses Laufs: $${cost}`);
}

// ── main ─────────────────────────────────────────────────────────────────────

const [cmd, ...args] = process.argv.slice(2);
const commands = {
  balance: () => cmdBalance(),
  volume: () => cmdVolume(args),
  serp: () => cmdSerp(args.join(" ")),
  "validate-map": () => cmdValidateMap(),
};

if (!commands[cmd]) {
  console.error(
    "Verwendung: node scripts/dataforseo.mjs <balance|volume|serp|validate-map> [args]",
  );
  process.exit(1);
}
await commands[cmd]().catch((err) => {
  console.error(`✗ ${err.message}`);
  process.exit(1);
});
