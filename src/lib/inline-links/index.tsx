import Link from "next/link";
import type { ReactNode } from "react";
import { parseInlineLinks } from "./parse";

export { INLINE_LINK_RE, parseInlineLinks, stripInlineLinks } from "./parse";
export type { InlineLink, InlineSegment } from "./parse";

/**
 * Rendert einen Copy-String, der [Anker](/ziel/)-Marker enthalten darf.
 * Ohne Marker wird der String unverändert zurückgegeben (byte-identisches
 * Rendering — pixel-perfect-sicher). Interne Ziele werden next/link-<Link>,
 * externe ein normales <a>; Styling: .fast-inline-link (TOKENS.md).
 */
export function renderInlineLinks(text: string): ReactNode {
  const segments = parseInlineLinks(text);
  if (segments.length === 1 && typeof segments[0] === "string") return text;
  return segments.map((seg, i) =>
    typeof seg === "string" ? (
      seg
    ) : seg.href.startsWith("/") ? (
      <Link key={i} href={seg.href} className="fast-inline-link">
        {seg.label}
      </Link>
    ) : (
      <a key={i} href={seg.href} className="fast-inline-link">
        {seg.label}
      </a>
    ),
  );
}
