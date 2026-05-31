// Downloads all assets for the /leistungen/moebel-nach-mass/ clone into public/.
// Preserves the wp-content/uploads/YYYY/MM/ structure under public/images.
// Run: node scripts/download-mnm-assets.mjs
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = "http://fast.side-boost.com";
const ROOT = new URL("..", import.meta.url).pathname;
const PUBLIC = join(ROOT, "public");

// [remoteUrl, localPathRelativeToPublic]
const ASSETS = [
  // Hero / shared
  ["/wp-content/uploads/2025/11/WhatsApp-Bild-2025-04-01-um-22.54.05_fab2d495.jpg", "images/2025/11/WhatsApp-Bild-2025-04-01-um-22.54.05_fab2d495.jpg"],
  // Intro / stats
  ["/wp-content/uploads/2025/11/IMG_2772-scaled.jpg", "images/2025/11/IMG_2772-scaled.jpg"],
  ["/wp-content/uploads/2025/11/IMG_6123-scaled.jpg", "images/2025/11/IMG_6123-scaled.jpg"],
  // Process
  ["/wp-content/uploads/2025/11/20161103_150622294_iOS-scaled.jpg", "images/2025/11/20161103_150622294_iOS-scaled.jpg"],
  // Weitere Leistungen white icons
  ["/wp-content/uploads/2024/03/interior-design-white-icons-15.svg", "images/2024/03/interior-design-white-icons-15.svg"],
  ["/wp-content/uploads/2024/03/interior-design-white-icons-22.svg", "images/2024/03/interior-design-white-icons-22.svg"],
  ["/wp-content/uploads/2024/03/interior-design-white-icons-07.svg", "images/2024/03/interior-design-white-icons-07.svg"],
  ["/wp-content/uploads/2024/03/interior-design-white-icons-08.svg", "images/2024/03/interior-design-white-icons-08.svg"],
  ["/wp-content/uploads/2024/03/interior-design-white-icons-09.svg", "images/2024/03/interior-design-white-icons-09.svg"],
  // Warum (masonry collage)
  ["/wp-content/uploads/2025/11/20231204_095459232_iOS-scaled.jpg", "images/2025/11/20231204_095459232_iOS-scaled.jpg"],
  ["/wp-content/uploads/2025/11/DSC_0001.jpg", "images/2025/11/DSC_0001.jpg"],
  ["/wp-content/uploads/2025/11/DSC_9814.jpg", "images/2025/11/DSC_9814.jpg"],
  ["/wp-content/uploads/2025/11/IMG_4797-scaled.jpg", "images/2025/11/IMG_4797-scaled.jpg"],
  ["/wp-content/uploads/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg", "images/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg"],
  ["/wp-content/uploads/2025/11/20181220_075204314_iOS-scaled.jpg", "images/2025/11/20181220_075204314_iOS-scaled.jpg"],
  // Typische Maßanfertigungen
  ["/wp-content/uploads/2025/11/IMG_9120-scaled.jpg", "images/2025/11/IMG_9120-scaled.jpg"],
  ["/wp-content/uploads/2025/11/IMG_2249.jpg", "images/2025/11/IMG_2249.jpg"],
  // Geschichte gallery
  ["/wp-content/uploads/2024/03/test-img-83485.jpg", "images/2024/03/test-img-83485.jpg"],
  ["/wp-content/uploads/2025/11/DSC07129-Kopie-scaled.jpg", "images/2025/11/DSC07129-Kopie-scaled.jpg"],
  ["/wp-content/uploads/2025/11/20231220_131839984_iOS-scaled.jpg", "images/2025/11/20231220_131839984_iOS-scaled.jpg"],
  // Möbelplaner masked image
  ["/wp-content/uploads/2025/11/20150701_185458257_iOS-scaled.jpg", "images/2025/11/20150701_185458257_iOS-scaled.jpg"],
  // Testimonials avatars
  ["/wp-content/uploads/2026/03/unnamed-2.png", "images/2026/03/unnamed-2.png"],
  ["/wp-content/uploads/2026/03/unnamed-1.png", "images/2026/03/unnamed-1.png"],
  ["/wp-content/plugins/divi-pixel/includes/modules/Testimonial/avatar.png", "images/testimonial-avatar.png"],
  // Final CTA bg
  ["/wp-content/uploads/2025/11/DSC_9938.jpg", "images/2025/11/DSC_9938.jpg"],
];

const exists = (p) => access(p).then(() => true).catch(() => false);

async function download([remote, local]) {
  const url = remote.startsWith("http") ? remote : BASE + remote;
  const dest = join(PUBLIC, local);
  if (await exists(dest)) return { local, status: "exists" };
  const res = await fetch(url);
  if (!res.ok) return { local, status: `ERR ${res.status}` };
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  return { local, status: `ok ${(buf.length / 1024).toFixed(0)}kb` };
}

async function run() {
  const results = [];
  for (let i = 0; i < ASSETS.length; i += 4) {
    const batch = ASSETS.slice(i, i + 4);
    const r = await Promise.all(batch.map(download));
    r.forEach((x) => { results.push(x); console.log(`${x.status.padEnd(12)} ${x.local}`); });
  }
  const errs = results.filter((r) => r.status.startsWith("ERR"));
  console.log(`\nDone: ${results.length} assets, ${errs.length} errors`);
  if (errs.length) process.exitCode = 1;
}
run();
