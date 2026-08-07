#!/usr/bin/env node
/**
 * Rendert ein Foto mit gebrandetem Fast-Overlay zu einem fertigen GBP-Post-Bild.
 *
 * Beispiel:
 *   node render-overlay.mjs --image foto.png \
 *     --headline "Einbauschrank nach Maß" \
 *     --subline "Wand zu Wand. Raumhoch. Millimetergenau." \
 *     --variant beige --ratio 4:3 --out post.png
 *
 * Farben, Schrift und Logo kommen aus dem Repo (docs/design-system/TOKENS.md,
 * public/images/**). Nichts davon hier hardcoden ändern, ohne TOKENS.md zu prüfen.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, isAbsolute } from "node:path";
import { tmpdir } from "node:os";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, "../../../..");
const CACHE = resolve(HERE, ".cache");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// --- Design-Tokens (docs/design-system/TOKENS.md §1) ---------------------
const TOKEN = {
  dark: "rgb(61,61,61)",
  text: "rgb(102,102,102)",
  beige: "rgb(231,224,218)", // fast-beige-solid
  yellow: "rgb(237,168,33)",
  inkOnDark: "rgba(220,220,220,0.85)",
};

const LOGO = {
  // weisses Logo für dunkle Flächen, farbiges für die Beige-Fläche
  white: resolve(REPO, "public/images/2026/04/logo_fast_angepasst-1.svg"),
  color: resolve(REPO, "public/images/2025/11/logo_fast-systemmoebel.svg"),
};

const POPPINS = [
  { weight: 300, url: "https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLDz8V1s.ttf" },
  { weight: 400, url: "https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrFJA.ttf" },
  { weight: 500, url: "https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLGT9V1s.ttf" },
];

const RATIO = {
  "4:3": { w: 1200, h: 900 },  // GBP-Post im Feed
  "1:1": { w: 1080, h: 1080 }, // Fotoraster im Profil
};

// --- Argumente -----------------------------------------------------------
function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 2) {
    if (!argv[i].startsWith("--")) fail(`Unerwartetes Argument: ${argv[i]}`);
    out[argv[i].slice(2)] = argv[i + 1];
  }
  return out;
}

function fail(msg) {
  console.error(`\nFEHLER: ${msg}\n`);
  process.exit(1);
}

const args = parseArgs(process.argv.slice(2));
const image = args.image && (isAbsolute(args.image) ? args.image : resolve(process.cwd(), args.image));
const headline = args.headline;
const subline = args.subline ?? "";
const variant = args.variant ?? "beige";
const ratio = args.ratio ?? "4:3";
const out = args.out && (isAbsolute(args.out) ? args.out : resolve(process.cwd(), args.out));

if (!image || !headline || !out) fail("--image, --headline und --out sind Pflicht.");
if (!existsSync(image)) fail(`Bild nicht gefunden: ${image}`);
if (!["beige", "dunkel"].includes(variant)) fail(`--variant muss beige oder dunkel sein.`);
if (!RATIO[ratio]) fail(`--ratio muss 4:3 oder 1:1 sein.`);
if (!existsSync(CHROME)) {
  fail(`Google Chrome nicht gefunden unter ${CHROME}\n` +
       `Das Skript rendert mit headless Chrome. Ohne Chrome kein Overlay.`);
}

// Zeichenzahl ist ein grober Stellvertreter für die echte Grenze (Pixelbreite
// neben dem Logo). Breite Glyphen können auch darunter überlaufen — nach dem
// Rendern immer ansehen.
const LIMIT = { headline: 34, subline: 62 };
for (const [feld, wert] of [["headline", headline], ["subline", subline]]) {
  if (wert.length > LIMIT[feld] && args.force === undefined) {
    fail(`${feld} ist ${wert.length} Zeichen, erlaubt sind ${LIMIT[feld]}.\n` +
         `Im Thumbnail (~300px) bricht das um und wird unlesbar. Kürzen —\n` +
         `oder mit --force true bewusst überschreiben und das Ergebnis prüfen.`);
  }
}

// --- Schrift besorgen (einmalig, danach aus .cache) ----------------------
function fontFaces() {
  mkdirSync(CACHE, { recursive: true });
  return POPPINS.map(({ weight, url }) => {
    const file = resolve(CACHE, `poppins-${weight}.ttf`);
    if (!existsSync(file)) {
      console.error(`Lade Poppins ${weight} …`);
      execFileSync("curl", ["-sfL", "-o", file, url]);
    }
    const b64 = readFileSync(file).toString("base64");
    return `@font-face{font-family:'Poppins';font-style:normal;font-weight:${weight};src:url(data:font/ttf;base64,${b64}) format('truetype');}`;
  }).join("\n");
}

function dataUri(path, mime) {
  return `data:${mime};base64,${readFileSync(path).toString("base64")}`;
}

// --- Layout --------------------------------------------------------------
const { w, h } = RATIO[ratio];
const pad = ratio === "1:1" ? 64 : 72;
const logo = variant === "beige" ? LOGO.color : LOGO.white;
const logoW = ratio === "1:1" ? 150 : 176;
const headSize = ratio === "1:1" ? 38 : variant === "beige" ? 40 : 46;
const subSize = ratio === "1:1" ? 17 : variant === "beige" ? 18 : 19;
const bandH = ratio === "1:1" ? 230 : 210;

if (!existsSync(logo)) fail(`Logo nicht gefunden: ${logo}`);

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Bei 1:1 stapelt das Logo unter den Text, sonst wird es vom quadratischen
// Beschnitt angeschnitten.
const stacked = ratio === "1:1";

const beigeBody = `
  <div class="photo"></div>
  <div class="accent"></div>
  <div class="band ${stacked ? "stacked" : ""}">
    <div class="copy">
      <h1>${esc(headline)}</h1>
      ${subline ? `<p>${esc(subline)}</p>` : ""}
    </div>
    <img class="logo" src="${dataUri(logo, "image/svg+xml")}" alt="Fast Systemmöbel">
  </div>`;

const dunkelBody = `
  <div class="scrim"></div>
  <div class="block ${stacked ? "stacked" : ""}">
    <div class="copy">
      <div class="rule"></div>
      <h1>${esc(headline)}</h1>
      ${subline ? `<p>${esc(subline)}</p>` : ""}
    </div>
    <img class="logo" src="${dataUri(logo, "image/svg+xml")}" alt="Fast Systemmöbel">
  </div>`;

const html = `<meta charset="utf-8">
<style>
${fontFaces()}
* { margin:0; padding:0; box-sizing:border-box; }
html, body { width:${w}px; height:${h}px; overflow:hidden; }
.canvas {
  position:relative; width:${w}px; height:${h}px;
  font-family:'Poppins', sans-serif;
  background:${TOKEN.beige} url('${dataUri(image, "image/png")}') center/cover no-repeat;
}
.logo { width:${logoW}px; flex:none; }

/* --- Variante dunkel --- */
.scrim {
  position:absolute; inset:0;
  background:linear-gradient(to bottom,
    rgba(61,61,61,0) 55%, rgba(61,61,61,0.42) 76%, rgba(61,61,61,0.86) 100%);
}
.block {
  position:absolute; left:${pad}px; right:${pad}px; bottom:${pad - 8}px;
  display:flex; align-items:flex-end; justify-content:space-between; gap:40px;
}
.block.stacked { flex-direction:column; align-items:flex-start; gap:24px; }
.block .rule { width:44px; height:3px; background:${TOKEN.yellow}; margin-bottom:20px; }
.block h1 { font-size:${headSize}px; font-weight:500; line-height:1.15; letter-spacing:-1px; color:#fff; }
.block p { margin-top:14px; font-size:${subSize}px; font-weight:300; line-height:1.5; color:${TOKEN.inkOnDark}; }

/* --- Variante beige --- */
.photo {
  position:absolute; top:0; left:0; right:0; height:${h - bandH}px;
  background:url('${dataUri(image, "image/png")}') center bottom/cover no-repeat;
}
.accent { position:absolute; left:0; right:0; bottom:${bandH}px; height:4px; background:${TOKEN.yellow}; }
.band {
  position:absolute; left:0; right:0; bottom:0; height:${bandH}px;
  background:${TOKEN.beige};
  display:flex; align-items:center; justify-content:space-between;
  padding:0 ${pad}px; gap:40px;
}
.band.stacked { flex-direction:column; align-items:flex-start; justify-content:center; gap:20px; }
.band h1 { font-size:${headSize}px; font-weight:500; line-height:1.15; letter-spacing:-1px; color:${TOKEN.dark}; }
.band p { margin-top:10px; font-size:${subSize}px; font-weight:400; line-height:1.5; color:${TOKEN.text}; }
</style>
<div class="canvas">${variant === "beige" ? beigeBody : dunkelBody}</div>`;

// --- Rendern -------------------------------------------------------------
const work = resolve(tmpdir(), `fast-gbp-${process.pid}`);
mkdirSync(work, { recursive: true });
const page = resolve(work, "page.html");
writeFileSync(page, html);

try {
  execFileSync(CHROME, [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--virtual-time-budget=8000",
    `--window-size=${w},${h}`,
    `--screenshot=${out}`,
    `file://${page}`,
  ], { stdio: ["ignore", "ignore", "ignore"] });
} finally {
  rmSync(work, { recursive: true, force: true });
}

if (!existsSync(out)) fail("Chrome hat kein Bild geschrieben.");
console.log(`OK  ${out}  (${w}×${h}, Variante ${variant})`);
console.log(`Jetzt ansehen und prüfen: Schrift = Poppins (nicht Helvetica), Logo vollständig, Text lesbar.`);
