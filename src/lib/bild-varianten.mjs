// Bildvarianten: eine Regel für Loader (Browser) und Erzeuger (Build).
//
// Warum: Vercel beantwortet /_next/image für jede noch nicht zwischengespeicherte
// Bild-Breite mit 402 OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED, sobald das
// Optimierungs-Kontingent des Teams aufgebraucht ist. Im November 2026 fehlten
// dadurch je nach Gerät Bilder auf allen 47 Seiten. Deshalb erzeugt der Build
// die Breiten selbst (scripts/bild-varianten.mjs) und der Loader
// (src/lib/bild-loader.ts) zeigt direkt auf diese statischen Dateien.
//
// Reines JavaScript ohne Node-Importe: wird im Browser-Bundle, in
// next.config.ts und im Erzeuger-Skript gleichermaßen geladen.

/** Ordner unter public/, in den der Build die Varianten schreibt (nicht im Git). */
export const BILD_ORDNER = "_bild";

/** Erzeugte Breiten in Pixeln. Größere Anfragen bekommen die größte Variante. */
export const BILD_BREITEN = [256, 384, 640, 828, 1200, 1920, 2560];

/** WebP-Qualität, wie der frühere Next-Standard (q=75). */
export const BILD_QUALITAET = 75;

/** Rasterformate, für die Varianten entstehen. SVG und alles andere bleibt unverändert. */
export const BILD_ENDUNGEN = [".jpg", ".jpeg", ".png", ".webp"];

/** Kleinste erzeugte Breite, die mindestens `breite` Pixel hat. */
export function variantenBreite(breite) {
  return BILD_BREITEN.find((b) => b >= breite) ?? BILD_BREITEN[BILD_BREITEN.length - 1];
}

/** True, wenn für diesen Pfad unter public/ Varianten erzeugt werden. */
export function hatVarianten(pfad) {
  const klein = pfad.toLowerCase();
  return BILD_ENDUNGEN.some((endung) => klein.endsWith(endung));
}

/**
 * URL der Variante für ein lokales Bild, z. B.
 * "/images/kuechen/kueche.jpg", 828 → "/_bild/828/images/kuechen/kueche.jpg.webp".
 * Fremde URLs, SVGs und schon umgeschriebene Pfade kommen unverändert zurück.
 */
export function bildVariante(src, breite) {
  if (!src.startsWith("/") || src.startsWith("//") || src.startsWith(`/${BILD_ORDNER}/`)) return src;
  const pfad = src.split(/[?#]/, 1)[0];
  if (!hatVarianten(pfad)) return src;
  return `/${BILD_ORDNER}/${variantenBreite(breite)}${pfad}.webp`;
}
