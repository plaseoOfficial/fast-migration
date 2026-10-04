import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

/**
 * `lastmod` für die Sitemap: das Datum des letzten Commits, der den Inhalt einer
 * Seite geändert hat — Seitendatei (`page.tsx`) plus Content-Modul
 * (`src/lib/content/<slug>.ts`), das jüngere Datum gewinnt.
 *
 * Google wertet `lastmod` nur aus, solange es stimmt. Deshalb lieber gar kein
 * Datum als ein geratenes:
 * - Kein Git beim Build (Docker-Image ohne `.git`): kein `lastmod`.
 * - Flacher Klon (Vercel klont mit begrenzter Tiefe): Für Dateien, deren
 *   letzte Änderung vor dem Klonfenster liegt, meldet `git log` den Grenz-Commit
 *   des Klons. Dieses Datum ist falsch, also bleibt `lastmod` für diese Seiten weg.
 *   Frisch geänderte Seiten liegen im Fenster und bekommen ihr echtes Datum, und
 *   nur bei ihnen kommt es darauf an.
 */

const ROOT = process.cwd();

function git(args: string[]): string {
  return execFileSync("git", args, { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
}

let grenzCommits: Set<string> | null = null;
let gitDa: boolean | null = null;

function shallowGrenzen(): Set<string> {
  if (grenzCommits) return grenzCommits;
  grenzCommits = new Set();
  try {
    const datei = git(["rev-parse", "--git-path", "shallow"]);
    const voll = path.isAbsolute(datei) ? datei : path.join(ROOT, datei);
    if (existsSync(voll)) {
      for (const sha of readFileSync(voll, "utf8").split("\n")) if (sha.trim()) grenzCommits.add(sha.trim());
    }
  } catch {
    // kein Git — gitVorhanden() sagt es
  }
  return grenzCommits;
}

function gitVorhanden(): boolean {
  if (gitDa === null) {
    try {
      gitDa = git(["rev-parse", "--is-inside-work-tree"]) === "true";
    } catch {
      gitDa = false;
    }
  }
  return gitDa;
}

/** Letzter Commit einer Datei als ISO-Datum, oder null wenn unbekannt/unsicher. */
function dateiDatum(datei: string): string | null {
  if (!existsSync(path.join(ROOT, datei))) return null;
  try {
    const [sha, datum] = git(["log", "-1", "--format=%H %cI", "--", datei]).split(" ");
    if (!sha || !datum) return null;
    if (shallowGrenzen().has(sha)) return null;
    return new Date(datum).toISOString();
  } catch {
    return null;
  }
}

/** Dateien, die den Inhalt einer Route tragen. */
export function inhaltsDateien(route: string): string[] {
  const teile = route.split("/").filter(Boolean);
  const slug = teile.at(-1) ?? "home";
  const imSite = existsSync(path.join(ROOT, "src/app/(site)", ...teile, "page.tsx"));
  const seite = path.join("src/app", imSite ? "(site)" : "", ...teile, "page.tsx");
  return [seite, `src/lib/content/${slug}.ts`];
}

export function lastModified(route: string): string | undefined {
  if (!gitVorhanden()) return undefined;
  const daten = inhaltsDateien(route)
    .map(dateiDatum)
    .filter((d): d is string => d !== null);
  if (daten.length === 0) return undefined;
  // Ein unsicheres Datum (Grenz-Commit) zählt nicht mit; ist eine der beiden
  // Dateien jünger als das Klonfenster, ist ihr Datum trotzdem das jüngste.
  return daten.sort().at(-1);
}
