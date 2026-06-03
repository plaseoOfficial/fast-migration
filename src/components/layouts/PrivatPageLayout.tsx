import type { ReactNode } from "react";

/**
 * Page shell for "Privat" service pages (the möbel-nach-mass template family):
 * a flex-column `<main>` for the page's library sections. The shared Header and
 * Footer come from the `(site)` route-group layout, so they are not rendered
 * here. New Privat pages wrap their sections in this layout. Page `metadata`
 * stays in the route file, not here, so it remains page-specific.
 */
export function PrivatPageLayout({ children }: { children: ReactNode }) {
  return <main className="flex flex-col">{children}</main>;
}
