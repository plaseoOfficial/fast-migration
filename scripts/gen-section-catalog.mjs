// Generates docs/sections/CATALOG.md from the section registry metadata.
//
// Run with Node's TypeScript type-stripping (Node ≥ 22.6):
//   node --experimental-strip-types scripts/gen-section-catalog.mjs
// On Node ≥ 23 / 24 the flag is unnecessary:
//   node scripts/gen-section-catalog.mjs
//
// Reads the pure-data module src/lib/sections/catalog-data.ts (no React refs),
// so it never pulls a .tsx component into Node.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { SECTION_META } from "../src/lib/sections/catalog-data.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = resolve(ROOT, "docs/sections/CATALOG.md");

const CATEGORY_ORDER = ["shared", "home", "privat", "gewerbe", "moebelplaner", "kontakt", "ueber"];
const CATEGORY_LABELS = {
  shared: "Shared (cross-page, reusable)",
  home: "Home",
  privat: "Privat — möbel-nach-mass template",
  gewerbe: "Gewerbe",
  moebelplaner: "Möbelplaner",
  kontakt: "Kontakt",
  ueber: "Über uns",
};

// The canonical "Privat" service-page section order (the möbel-nach-mass recipe).
const PRIVAT_RECIPE = [
  ["MnmHero", "privat-hero"],
  ["MnmIntroStats", "privat-intro-stats"],
  ["ExpandingImageCta inside <section beige className=\"pb-12 lg:pb-16\">", "shared-image-cta"],
  ["MnmProcess", "privat-process"],
  ["MnmWeitereLeistungen", "privat-weitere-leistungen"],
  ["MnmTypische", "privat-typische"],
  ["MnmWarum", "privat-warum"],
  ["MnmGeschichte", "privat-geschichte"],
  ["MnmMoebelplaner", "privat-planner-cta"],
  ["TestimonialsSection (shared)", "shared-testimonials"],
  ["ExpandingImageCta inside <section beige className=\"pb-14 lg:pb-[64px]\">", "shared-image-cta"],
  ["FaqSection (shared)", "shared-faq"],
];

function table(rows) {
  return rows.map((r) => `| ${r.join(" | ")} |`).join("\n");
}

const lines = [];
lines.push("# Section Library — Catalog");
lines.push("");
lines.push(
  "> Auto-generated from `src/lib/sections/catalog-data.ts`. Do not edit by hand —",
);
lines.push("> run `node --experimental-strip-types scripts/gen-section-catalog.mjs`.");
lines.push("");
lines.push(
  `**${SECTION_META.length} sections** across ${CATEGORY_ORDER.length} categories. ` +
    "Browse them rendered at `/library`. Each section is a props-driven component; " +
    "`category` = audience/origin, `useCase` = the job it does.",
);
lines.push("");

// Index
lines.push("## Index");
lines.push("");
for (const category of CATEGORY_ORDER) {
  const entries = SECTION_META.filter((s) => s.category === category);
  if (!entries.length) continue;
  lines.push(`- **${CATEGORY_LABELS[category]}** — ${entries.map((e) => `[${e.displayName}](#${e.id})`).join(", ")}`);
}
lines.push("");

// Sections
lines.push("## Sections");
lines.push("");
for (const category of CATEGORY_ORDER) {
  const entries = SECTION_META.filter((s) => s.category === category);
  if (!entries.length) continue;
  lines.push(`### ${CATEGORY_LABELS[category]}`);
  lines.push("");
  for (const s of entries) {
    lines.push(`#### ${s.displayName}`);
    lines.push("");
    lines.push(`\`#${s.id}\` — ${s.description}`);
    lines.push("");
    lines.push(table([
      ["Use case", "Category", "Client", "Used on"],
      ["---", "---", "---", "---"],
      [
        `\`${s.useCase}\``,
        `\`${s.category}\``,
        s.isClient ? "yes" : "no",
        s.usedOn.map((u) => `\`${u}\``).join(" · "),
      ],
    ]));
    lines.push("");
    if (s.propsSummary.length) {
      lines.push(table([
        ["Prop", "Type", "Required"],
        ["---", "---", "---"],
        ...s.propsSummary.map((p) => [`\`${p.name}\``, `\`${p.type}\``, p.required ? "yes" : "no"]),
      ]));
      lines.push("");
    } else {
      lines.push("_Prop-less (page-specific content)._");
      lines.push("");
    }
    if (s.screenshot) {
      lines.push(`![${s.displayName}](${s.screenshot})`);
      lines.push("");
    }
  }
}

// Privat recipe
lines.push("## Privat Page Recipe");
lines.push("");
lines.push(
  "When a page is marked **Privat**, build it from this canonical section order " +
    "(derived from `/moebel-nach-mass`). Create the route inside the `(site)` group " +
    "(`src/app/(site)/<slug>/page.tsx`) so it inherits the shared Header + Footer, wrap " +
    "the sections in `PrivatPageLayout` (now just `<main className=\"flex flex-col\">`), and " +
    "keep page `metadata` in the route file. The two CTA blocks are `ExpandingImageCta` " +
    "wrapped in a beige `<section>` with the noted padding.",
);
lines.push("");
lines.push(table([
  ["#", "Section", "Library id"],
  ["---", "---", "---"],
  ...PRIVAT_RECIPE.map((r, i) => [String(i + 1), r[0], `\`#${r[1]}\``]),
]));
lines.push("");

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, lines.join("\n"));
console.log(`Wrote ${OUT} (${SECTION_META.length} sections).`);
