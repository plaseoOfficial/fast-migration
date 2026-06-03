import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/**
 * Page shell for "Privat" service pages (the möbel-nach-mass template family):
 * the shared Header, a flex-column `<main>`, and the shared Footer. New Privat
 * pages wrap their library sections in this layout. Page `metadata` stays in
 * the route file, not here, so it remains page-specific.
 */
export function PrivatPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </>
  );
}
