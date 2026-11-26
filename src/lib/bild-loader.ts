// Eigener next/image-Loader (next.config.ts → images.loaderFile).
// Liefert statt /_next/image die beim Build erzeugten WebP-Varianten aus
// public/_bild/. Hintergrund und Regel: src/lib/bild-varianten.mjs.
import { bildVariante } from "./bild-varianten.mjs";

interface LoaderArgs {
  src: string;
  width: number;
  quality?: number;
}

export default function bildLoader({ src, width }: LoaderArgs): string {
  // `next dev` erzeugt keine Varianten: dort das Original laden. Das ?w= hält
  // die Breite in der URL, sonst warnt Next, der Loader ignoriere sie.
  if (process.env.NODE_ENV === "development") {
    return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
  }
  return bildVariante(src, width);
}
