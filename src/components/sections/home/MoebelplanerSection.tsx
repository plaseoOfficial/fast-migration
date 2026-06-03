import Link from "next/link";
import { CTA } from "@/lib/content";

const PLANNER_URL = "https://moebelplaner.fast-systemmoebel.de/";

export function MoebelplanerSection() {
  return (
    <section
      id="leistungen"
      className="fast-section w-full"
      style={{ backgroundColor: "rgba(203, 191, 181, 0.59)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <p className="fast-eyebrow mb-4 text-center">
          Einfach ausprobieren und visualisieren: Machen Sie sich schon heute ein Bild von Ihrer
          neuen Einrichtung.
        </p>
        <h2
          className="mb-12 text-center"
          style={{
            fontSize: "clamp(36px, 5vw, 65px)",
            lineHeight: 1,
            letterSpacing: "-2px",
            fontWeight: 500,
            color: "rgb(61,61,61)",
          }}
        >
          Möbel online planen
        </h2>

        <div className="relative w-full overflow-hidden rounded-md bg-white shadow-md">
          <iframe
            src={PLANNER_URL}
            title="Fast Möbelplaner"
            loading="lazy"
            allow="fullscreen; clipboard-write"
            className="block w-full h-[78vh] min-h-[600px] border-0"
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={CTA.href}
            target="_blank"
            rel="noreferrer"
            className="fast-btn-pill"
          >
            {CTA.label} in neuem Tab öffnen
          </Link>
        </div>
      </div>
    </section>
  );
}
