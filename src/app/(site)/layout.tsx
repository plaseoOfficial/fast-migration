import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/**
 * Site chrome shared by every public page. Rendering the Header and Footer here
 * (instead of in each page) guarantees the navigation and footer are identical
 * on all routes in this group and appear automatically on any new page — no
 * per-page wiring. Each page supplies its own <main>. The internal /library
 * showcase lives outside this group and stays chrome-free.
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
