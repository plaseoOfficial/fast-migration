#!/usr/bin/env node
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC = join(ROOT, 'public');

const HOST = 'http://fast.side-boost.com';

// All unique asset URLs from the live site
const URLS = [
  // Logos
  '/wp-content/uploads/2025/11/logo_fast-systemmoebel.svg',
  '/wp-content/uploads/2026/04/logo_fast_angepasst-1.svg',
  // Hero / discover / quality images
  '/wp-content/uploads/2026/05/variante_1778229163946_1-scaled.jpg',
  '/wp-content/uploads/2025/11/DSC06340-scaled.jpg',
  '/wp-content/uploads/2025/11/DSC_9747.jpg',
  '/wp-content/uploads/2025/11/ThabarSebastian_kueche2.jpeg',
  '/wp-content/uploads/2025/11/90d42e7b-fa9d-4a8d-a60e-ca1c5bf55cb3.jpg',
  // Parallax bg
  '/wp-content/uploads/2025/11/IMG_2673-scaled.jpg',
  // Handwerk tab bgs
  '/wp-content/uploads/2025/11/IMG_9387-scaled.jpg',
  '/wp-content/uploads/2025/11/DSC_9938.jpg',
  '/wp-content/uploads/2025/11/DSC_9965.jpg',
  '/wp-content/uploads/2025/11/WhatsApp-Bild-2025-01-16-um-12.34.29_b25a14a5.jpg',
  '/wp-content/uploads/2025/11/DSC_9843.jpg',
  '/wp-content/uploads/2025/11/20230814_155316228_iOS-scaled.jpg',
  '/wp-content/uploads/2025/11/20181220_075204314_iOS-scaled.jpg',
  // Räume etc
  '/wp-content/uploads/2025/11/20230829_030744000_iOS.jpg',
  '/wp-content/uploads/2025/11/DSC06206-scaled.jpg',
  '/wp-content/uploads/2025/11/IMG_9120-scaled.jpg',
  '/wp-content/uploads/2025/11/DSC07156-scaled.jpg',
  '/wp-content/uploads/2025/11/20161103_150622294_iOS-scaled.jpg',
  // Testimonial
  '/wp-content/uploads/2025/11/arminia-wappen-2021.svg',
  // Möbelplaner sec
  '/wp-content/uploads/2026/01/csm_Kabine_6550b3ca43.jpg',
  // Partner logos carousel
  '/wp-content/uploads/2026/01/logo.png',
  '/wp-content/uploads/2026/01/3838_1702_1_m.jpg',
  '/wp-content/uploads/2026/01/cropped-2025-01-15-Logo-WP-StB-scaled-1.jpg',
  '/wp-content/uploads/2026/01/monolith-logo.png',
  '/wp-content/uploads/2026/01/lcm-schokoladenmaschinen.svg',
  '/wp-content/uploads/2026/01/icon07_1.png',
  '/wp-content/uploads/2026/01/aufbaugemeinschaft-espelkamp-logo-75-jahre-2048x959-1.png',
  '/wp-content/uploads/2026/01/Hell-Blitz-Logo-200px.png.webp',
  '/wp-content/uploads/2026/01/logo-polipol-relaunch.svg',
  '/wp-content/uploads/2026/01/CMC-Logo-100x50-1-2048x962-1.webp',
  '/wp-content/uploads/2026/01/das-mauerwerk_logo.svg',
  '/wp-content/uploads/2026/01/logo-elithera-e1724308171765.png',
  '/wp-content/uploads/2026/01/Enderweit-Partner.svg',
];

// Divi-pixel icon SVGs that the site embeds
const ICONS = [
  '01','03','06','07','08','09','10','12','13','14','15','17','18','20','21','22','23','26'
].map(n => `https://demo.divi-pixel.com/interior-design/wp-content/uploads/sites/42/2024/03/interior-design-black-icons-${n}.svg`);

const targets = [
  ...URLS.map(u => ({ url: HOST + u, dest: join(PUBLIC, 'images', u.replace(/^\/wp-content\/uploads\//, '')) })),
  ...ICONS.map(u => ({ url: u, dest: join(PUBLIC, 'icons', u.split('/').pop()) })),
];

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function download(item) {
  if (await exists(item.dest)) return { ...item, status: 'skip' };
  await mkdir(dirname(item.dest), { recursive: true });
  try {
    const res = await fetch(item.url);
    if (!res.ok) return { ...item, status: 'fail', code: res.status };
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(item.dest, buf);
    return { ...item, status: 'ok', size: buf.length };
  } catch (e) {
    return { ...item, status: 'err', error: e.message };
  }
}

async function runBatch(items, n = 4) {
  const results = [];
  for (let i = 0; i < items.length; i += n) {
    const batch = items.slice(i, i + n);
    const out = await Promise.all(batch.map(download));
    out.forEach(r => console.log(`[${r.status}] ${r.url.replace(HOST,'').slice(-60)}`));
    results.push(...out);
  }
  return results;
}

const results = await runBatch(targets);
const ok = results.filter(r => r.status === 'ok').length;
const skip = results.filter(r => r.status === 'skip').length;
const fail = results.filter(r => r.status !== 'ok' && r.status !== 'skip');
console.log(`\nDone: ${ok} downloaded, ${skip} cached, ${fail.length} failed.`);
if (fail.length) console.log('Failures:', fail.map(f => f.url).join('\n'));
