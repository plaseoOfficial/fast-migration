// Downloads remaining assets for /kontakt/, /leistungen/gewerbeeinrichtung/, /leistungen/moebelplaner/.
// Skips files already present. Run: node scripts/download-pages2-assets.mjs
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = "http://fast.side-boost.com";
const ROOT = new URL("..", import.meta.url).pathname;
const PUBLIC = join(ROOT, "public");

const FILES = [
  // Kontakt
  "/wp-content/uploads/2025/11/DSC06206-scaled.jpg",
  "/wp-content/uploads/2025/11/DSC07156-scaled.jpg",
  "/wp-content/uploads/2025/11/IMG_9387-scaled.jpg",
  // Gewerbe
  "/wp-content/uploads/2025/11/DSC_0001.jpg",
  "/wp-content/uploads/2025/11/DSC_9934.jpg",
  "/wp-content/uploads/2025/11/DSC_9965.jpg",
  "/wp-content/uploads/2025/11/DSC_9747.jpg",
  "/wp-content/uploads/2025/11/DSC_9814.jpg",
  "/wp-content/uploads/2025/11/WhatsApp-Bild-2025-01-16-um-12.34.29_b25a14a5.jpg",
  "/wp-content/uploads/2025/11/20230829_030744000_iOS.jpg",
  // Möbelplaner (mostly already present; included for safety)
  "/wp-content/uploads/2025/11/IMG_9120-scaled.jpg",
  // Partner logos (kontakt carousel) — reused from homepage, included for safety
  "/wp-content/uploads/2026/01/logo.png",
  "/wp-content/uploads/2026/01/3838_1702_1_m.jpg",
  "/wp-content/uploads/2026/01/cropped-2025-01-15-Logo-WP-StB-scaled-1.jpg",
  "/wp-content/uploads/2026/01/monolith-logo.png",
  "/wp-content/uploads/2026/01/lcm-schokoladenmaschinen.svg",
  "/wp-content/uploads/2026/01/icon07_1.png",
  "/wp-content/uploads/2026/01/aufbaugemeinschaft-espelkamp-logo-75-jahre-2048x959-1.png",
  "/wp-content/uploads/2026/01/Hell-Blitz-Logo-200px.png.webp",
  "/wp-content/uploads/2026/01/logo-polipol-relaunch.svg",
  "/wp-content/uploads/2026/01/CMC-Logo-100x50-1-2048x962-1.webp",
  "/wp-content/uploads/2026/01/das-mauerwerk_logo.svg",
  "/wp-content/uploads/2026/01/logo-elithera-e1724308171765.png",
  "/wp-content/uploads/2026/01/Enderweit-Partner.svg",
];

const exists = (p) => access(p).then(() => true).catch(() => false);

async function download(remote) {
  const local = "images" + remote.replace("/wp-content/uploads", "");
  const dest = join(PUBLIC, local);
  if (await exists(dest)) return { local, status: "exists" };
  const res = await fetch(BASE + remote);
  if (!res.ok) return { local, status: `ERR ${res.status}` };
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  return { local, status: `ok ${(buf.length / 1024).toFixed(0)}kb` };
}

const results = [];
for (let i = 0; i < FILES.length; i += 4) {
  const r = await Promise.all(FILES.slice(i, i + 4).map(download));
  r.forEach((x) => { results.push(x); console.log(`${x.status.padEnd(12)} ${x.local}`); });
}
const errs = results.filter((r) => r.status.startsWith("ERR"));
console.log(`\nDone: ${results.length}, downloaded ${results.filter(r=>r.status.startsWith("ok")).length}, ${errs.length} errors`);
if (errs.length) process.exitCode = 1;
