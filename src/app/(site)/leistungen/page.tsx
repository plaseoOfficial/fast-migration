import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/shared/ServiceHero";
import {
  LeistungenAbschluss,
  LeistungenJumpBar,
  LeistungenSection,
} from "@/components/sections/leistungen/LeistungenIndex";
import { HashLanding } from "@/components/sections/leistungen/HashLanding";
import { SITE_URL } from "@/lib/content";
import {
  MOEBELPLANER_URL,
  PAGE_PATH,
  RATGEBER_LABEL,
  leistungenAbschluss,
  leistungenHero,
  leistungenMeta,
  leistungenSections,
} from "@/lib/content/leistungen";
import { buildBrandPageJsonLd, stripJsonLdLinks } from "@/lib/seo/jsonld";
import { getLeistungenGroups } from "./leistungen-data";

// The list is built from source files at build time (leistungen-data.ts).
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: leistungenMeta.title,
  description: leistungenMeta.description,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: leistungenMeta.title,
    description: leistungenMeta.description,
    url: PAGE_PATH,
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

const SUMMARY: Record<"privat" | "gewerbe", string> = {
  privat: "Möbel nach Maß für Ihr Zuhause",
  gewerbe: "Einrichtung für Unternehmen",
};

export default function LeistungenPage() {
  const groups = getLeistungenGroups();
  const pageUrl = `${SITE_URL}${PAGE_PATH}`;

  // Breadcrumb + Organization from the shared brand helper, plus a
  // CollectionPage whose ItemList mirrors the rendered list (same order).
  const brand = buildBrandPageJsonLd({ pageUrl, breadcrumb: leistungenHero.breadcrumb });
  const listed = groups.flatMap((g) => [
    ...(g.hub ? [g.hub] : []),
    ...g.clusters.flatMap((c) => [c.cluster, ...c.children]),
    ...g.loose,
  ]);
  const jsonLd = stripJsonLdLinks({
    ...brand,
    "@graph": [
      ...brand["@graph"],
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: leistungenHero.title,
        description: leistungenMeta.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#leistungen` },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#leistungen`,
        name: "Leistungen von Fast Systemmöbel",
        numberOfItems: listed.length,
        itemListElement: listed.map((entry, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: entry.title,
          url: `${SITE_URL}${entry.slug}`,
        })),
      },
    ],
  });

  return (
    <main className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HashLanding />

      <ServiceHero
        title={leistungenHero.title}
        breadcrumb={leistungenHero.breadcrumb}
        bgImage={leistungenHero.bgImage}
      />

      <LeistungenJumpBar
        intro={leistungenHero.intro}
        items={groups.map((g) => ({
          id: leistungenSections[g.audience].id,
          label: leistungenSections[g.audience].jumpLabel,
          count: g.count,
          summary: SUMMARY[g.audience],
        }))}
      />

      {groups.map((g, i) => {
        const copy = leistungenSections[g.audience];
        return (
          <LeistungenSection
            key={g.audience}
            id={copy.id}
            heading={copy.heading}
            lead={copy.lead}
            hub={g.hub}
            hubCtaLabel={copy.hubCtaLabel}
            clusters={g.clusters}
            loose={g.loose}
            background={i % 2 === 0 ? "white" : "beige"}
            ratgeberLabel={RATGEBER_LABEL}
          />
        );
      })}

      <LeistungenAbschluss
        heading={leistungenAbschluss.heading}
        body={leistungenAbschluss.body}
        planerLabel={leistungenAbschluss.planerLabel}
        planerHref={MOEBELPLANER_URL}
        kontaktLabel={leistungenAbschluss.kontaktLabel}
        kontaktHref={leistungenAbschluss.kontaktHref}
        trust={leistungenAbschluss.trust}
      />
    </main>
  );
}
