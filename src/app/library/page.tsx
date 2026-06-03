import type { Metadata } from "next";
import Link from "next/link";
import { sectionRegistry } from "@/lib/sections/registry";
import type { SectionCategory } from "@/lib/sections/types";
import { LibrarySectionFrame } from "./LibrarySectionFrame";

export const metadata: Metadata = {
  title: "Section Library — Fast Systemmöbel",
  description: "Interne Vorschau aller Library-Sektionen.",
  robots: { index: false, follow: false },
};

const CATEGORY_LABELS: Record<SectionCategory, string> = {
  shared: "Shared (wiederverwendbar)",
  home: "Home",
  privat: "Privat — möbel-nach-mass Vorlage",
  gewerbe: "Gewerbe",
  moebelplaner: "Möbelplaner",
  kontakt: "Kontakt",
};

const CATEGORY_ORDER: SectionCategory[] = [
  "shared",
  "home",
  "privat",
  "gewerbe",
  "moebelplaner",
  "kontakt",
];

export default function LibraryPage() {
  const groups = CATEGORY_ORDER.map((category) => ({
    category,
    entries: sectionRegistry.filter((entry) => entry.category === category),
  })).filter((group) => group.entries.length > 0);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Intro / table of contents */}
      <header className="mx-auto max-w-[1100px] px-6 py-12">
        <p className="text-xs font-medium uppercase tracking-[2px] text-amber-700">
          Interne Vorschau · noindex
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Section Library</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
          Alle {sectionRegistry.length} Sektionen der Library mit Beispielinhalt, gruppiert nach
          Kategorie und Use Case. Jede Sektion ist eine props-getriebene Komponente. Die
          Metadaten (Use Case, Kategorie, Props) stehen auch in{" "}
          <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs">
            docs/sections/CATALOG.md
          </code>
          .
        </p>

        <nav className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.category}>
              <h2 className="text-sm font-semibold text-neutral-900">
                {CATEGORY_LABELS[group.category]}
              </h2>
              <ul className="mt-2 space-y-1">
                {group.entries.map((entry) => (
                  <li key={entry.id}>
                    <Link
                      href={`#${entry.id}`}
                      className="text-sm text-neutral-600 underline-offset-2 hover:text-amber-700 hover:underline"
                    >
                      {entry.displayName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </header>

      {/* Rendered sections */}
      <main>
        {groups.map((group) => (
          <div key={group.category}>
            <div className="bg-neutral-900 px-6 py-3">
              <div className="mx-auto max-w-[1100px]">
                <h2 className="text-sm font-semibold uppercase tracking-[2px] text-white">
                  {CATEGORY_LABELS[group.category]}
                </h2>
              </div>
            </div>
            {group.entries.map((entry) => (
              <LibrarySectionFrame key={entry.id} entry={entry} />
            ))}
          </div>
        ))}
      </main>
    </div>
  );
}
