// Erzeugt je Rasterbild in public/ verkleinerte WebP-Fassungen in public/_bild/<breite>/.
//
// Läuft automatisch bei `next build` (Aufruf aus next.config.ts), egal mit
// welchem Build-Befehl. Von Hand: `node scripts/bild-varianten.mjs`.
// Regel, Breiten und Hintergrund: src/lib/bild-varianten.mjs.
//
// Zwischenspeicher: .next/cache/bild-varianten/<inhalts-hash>-<breite>.webp.
// Vercel stellt .next/cache vor jedem Build wieder her, deshalb wird nur ein
// neues oder geändertes Bild neu gerechnet. Scheitert ein Bild, scheitert der
// Build: ohne Varianten würde der Loader auf fehlende Dateien zeigen.
import { createHash } from "node:crypto";
import { copyFile, mkdir, readdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import { availableParallelism } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";
import { BILD_BREITEN, BILD_ORDNER, BILD_QUALITAET, hatVarianten } from "../src/lib/bild-varianten.mjs";

async function dateienUnter(ordner, auslassen) {
  const liste = [];
  let eintraege;
  try {
    eintraege = await readdir(ordner, { withFileTypes: true });
  } catch (e) {
    if (e.code === "ENOENT") return liste;
    throw e;
  }
  for (const e of eintraege) {
    const voll = path.join(ordner, e.name);
    if (e.isDirectory()) {
      if (voll !== auslassen) liste.push(...(await dateienUnter(voll, auslassen)));
    } else if (e.isFile()) {
      liste.push(voll);
    }
  }
  return liste;
}

async function mtime(datei) {
  try {
    return (await stat(datei)).mtimeMs;
  } catch {
    return -1;
  }
}

async function schreibeAtomar(ziel, inhalt) {
  await mkdir(path.dirname(ziel), { recursive: true });
  const tmp = `${ziel}.${process.pid}.tmp`;
  await writeFile(tmp, inhalt);
  await rename(tmp, ziel);
}

async function kopiereAtomar(quelle, ziel) {
  await mkdir(path.dirname(ziel), { recursive: true });
  const tmp = `${ziel}.${process.pid}.tmp`;
  await copyFile(quelle, tmp);
  await rename(tmp, ziel);
}

export async function erzeugeBildVarianten({ root = process.cwd(), log = console.log } = {}) {
  // next build lädt die Konfiguration in mehreren Prozessen; die Kinder erben
  // diese Variable und überspringen die Arbeit.
  if (process.env.BILD_VARIANTEN_FERTIG === "1") return;
  const start = Date.now();
  const publicOrdner = path.join(root, "public");
  const zielOrdner = path.join(publicOrdner, BILD_ORDNER);
  const cacheOrdner = path.join(root, ".next", "cache", "bild-varianten");

  const quellen = (await dateienUnter(publicOrdner, zielOrdner)).filter((d) => hatVarianten(d));
  const erwartet = new Set();
  const genutzteHashes = new Set();
  let aktuell = 0;
  let ausCache = 0;
  let neu = 0;

  async function bearbeite(quelle) {
    const rel = path.relative(publicOrdner, quelle).split(path.sep).join("/");
    const ziele = BILD_BREITEN.map((b) => ({ b, datei: path.join(zielOrdner, String(b), `${rel}.webp`) }));
    for (const z of ziele) erwartet.add(z.datei);

    const quellZeit = await mtime(quelle);
    const zielZeiten = await Promise.all(ziele.map((z) => mtime(z.datei)));
    const inhalt = await readFile(quelle);
    const hash = createHash("sha1").update(inhalt).digest("hex").slice(0, 20);
    genutzteHashes.add(hash);
    if (zielZeiten.every((t) => t >= quellZeit)) {
      aktuell++;
      return;
    }

    let basis;
    for (const z of ziele) {
      const cacheDatei = path.join(cacheOrdner, `${hash}-${z.b}.webp`);
      if ((await mtime(cacheDatei)) >= 0) {
        ausCache++;
      } else {
        try {
          basis ??= sharp(inhalt, { failOn: "none" }).rotate();
          const webp = await basis
            .clone()
            .resize({ width: z.b, withoutEnlargement: true })
            .webp({ quality: BILD_QUALITAET })
            .toBuffer();
          await schreibeAtomar(cacheDatei, webp);
        } catch (e) {
          throw new Error(`Bildvariante ${z.b} px für public/${rel} gescheitert: ${e.message}`, { cause: e });
        }
        neu++;
      }
      await kopiereAtomar(cacheDatei, z.datei);
    }
  }

  const offen = [...quellen];
  const parallel = Math.max(1, Math.min(4, availableParallelism()));
  await Promise.all(
    Array.from({ length: parallel }, async () => {
      while (offen.length) await bearbeite(offen.shift());
    }),
  );

  // Varianten gelöschter oder umbenannter Bilder entfernen.
  let entfernt = 0;
  for (const datei of await dateienUnter(zielOrdner)) {
    if (!erwartet.has(datei)) {
      await rm(datei, { force: true });
      entfernt++;
    }
  }
  // Zwischenspeicher auf die aktuell genutzten Bilder begrenzen.
  for (const datei of await dateienUnter(cacheOrdner)) {
    if (!genutzteHashes.has(path.basename(datei).split("-")[0])) await rm(datei, { force: true });
  }

  process.env.BILD_VARIANTEN_FERTIG = "1";
  const sek = ((Date.now() - start) / 1000).toFixed(1);
  log(
    `Bildvarianten: ${quellen.length} Bilder × ${BILD_BREITEN.length} Breiten → public/${BILD_ORDNER}/ ` +
      `(${neu} neu gerechnet, ${ausCache} aus Zwischenspeicher, ${aktuell} Bilder schon aktuell, ${entfernt} entfernt) in ${sek} s`,
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  erzeugeBildVarianten().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
