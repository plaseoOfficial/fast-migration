import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/**
 * Shell for the static legal pages (Impressum, Datenschutz, AGB): shared Header,
 * a compact beige title band (top padding clears the fixed header), the long-form
 * `.fast-legal` prose container, and the shared Footer. Page `metadata` lives in
 * the route file. Content is passed as semantic markup (h2/h3/h4/p/ul) in children.
 */
export function LegalPageLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        {/* Title band */}
        <section
          className="pt-[128px] pb-12 lg:pt-[168px] lg:pb-16"
          style={{ backgroundColor: "rgba(203,191,181,0.59)" }}
        >
          <div className="mx-auto w-full max-w-[900px] px-6 lg:px-8">
            <h1
              className="text-[36px] leading-[1.1] lg:text-[56px] lg:leading-[1.05]"
              style={{
                fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
                fontWeight: 600,
                letterSpacing: "-1px",
                color: "rgb(23,33,33)",
              }}
            >
              {title}
            </h1>
            {intro ? (
              <p
                className="mt-4 max-w-[640px]"
                style={{
                  fontFamily: "var(--font-open-sans), Arial, sans-serif",
                  fontSize: "16px",
                  lineHeight: "26px",
                  fontWeight: 500,
                  color: "rgb(102,102,102)",
                }}
              >
                {intro}
              </p>
            ) : null}
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-20">
          <div className="fast-legal mx-auto w-full max-w-[900px] px-6 lg:px-8">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
