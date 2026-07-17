/**
 * Parser für die Inline-Link-Marker-Syntax in Content-Modul-Copy:
 *   "Wir planen Ihre [Küche nach Maß](/kuechen-nach-mass/) gleich mit."
 *
 * Pure data + types only (kein React, keine Imports), damit das Audit-Skript
 * (`scripts/audit-internal-links.mjs`) ihn via --experimental-strip-types
 * importieren kann — Renderer und Audit teilen sich EINE Syntax-Quelle.
 * Nur Links, bewusst kein Markdown (kein Bold, keine Listen, kein Nesting).
 */

export interface InlineLink {
  label: string;
  href: string;
}

export type InlineSegment = string | InlineLink;

/** `[Anker](/ziel/)` bzw. `[Anker](https://…)`. Label ohne eckige Klammern, href ohne Leerzeichen/Klammern. */
export const INLINE_LINK_RE = /\[([^[\]]+)\]\((\/[^)\s]*|https?:\/\/[^)\s]+)\)/g;

/**
 * Zerlegt einen Copy-String in Text- und Link-Segmente.
 * Fehlgeformte Marker bleiben Literaltext; ohne Marker kommt `[text]` zurück.
 */
export function parseInlineLinks(text: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  let last = 0;
  const re = new RegExp(INLINE_LINK_RE.source, "g");
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) segments.push(text.slice(last, m.index));
    segments.push({ label: m[1], href: m[2] });
    last = m.index + m[0].length;
  }
  if (last < text.length) segments.push(text.slice(last));
  if (segments.length === 0) segments.push(text);
  return segments;
}

/** Copy-String ohne Marker — der reine Lesetext. */
export function stripInlineLinks(text: string): string {
  return text.replace(new RegExp(INLINE_LINK_RE.source, "g"), "$1");
}
