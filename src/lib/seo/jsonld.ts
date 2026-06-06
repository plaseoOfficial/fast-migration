/**
 * Schema.org JSON-LD builders. The site had no structured data; this module is
 * the first, scoped to the `/gewerbe/ladenbau` B2B landing page. It emits one
 * `@graph` with LocalBusiness, Service, BreadcrumbList and FAQPage so the page
 * is eligible for local, service and FAQ rich results.
 *
 * Pure data (no React, no `any`). Render the output via:
 *   <script type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLadenbauJsonLd(...)) }} />
 *
 * NAP from the live Impressum (https://www.fast-systemmoebel.de/impressum.html):
 * Inhaber Johann Fast, Alte Waldstraße 32, 32339 Espelkamp, Tel. 05771-9138312.
 */
import { SITE_URL } from "@/lib/content";

const ORG_ID = `${SITE_URL}/#organization`;

const SOCIAL_PROFILES = [
  "https://www.instagram.com/fastsystemmobel/",
  "https://de.linkedin.com/in/andreas-fast-089245143",
  "https://www.facebook.com/fastsystemmobel/",
];

/** Espelkamp = midpoint of the delivery/assembly area (public, approximate). */
const SERVICE_AREA = {
  "@type": "GeoCircle",
  geoMidpoint: { "@type": "GeoCoordinates", latitude: 52.3829, longitude: 8.6175 },
  geoRadius: 200000,
} as const;

export interface BreadcrumbCrumb {
  label: string;
  href?: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface LadenbauJsonLdOptions {
  /** Absolute URL of the page (e.g. `${SITE_URL}/gewerbe/ladenbau`). */
  pageUrl: string;
  /** Service name / page subject. */
  name: string;
  description: string;
  breadcrumb: BreadcrumbCrumb[];
  faq: FaqEntry[];
  /**
   * Schema.org `Service.serviceType`. Defaults to "Ladenbau nach Maß" so the
   * original `/gewerbe/ladenbau` page stays byte-identical; the Gewerbe-cluster
   * pages (Büro, Gastro, Serie, Praxis) pass their own type.
   */
  serviceType?: string;
}

/** Alias: the builder is generic across all Gewerbe service-cluster pages. */
export type ServicePageJsonLdOptions = LadenbauJsonLdOptions;

/** Resolve a site-relative path to an absolute URL; pass-through for absolutes. */
function abs(pathOrUrl: string): string {
  return /^https?:\/\//.test(pathOrUrl) ? pathOrUrl : `${SITE_URL}${pathOrUrl}`;
}

export function buildLadenbauJsonLd({
  pageUrl,
  name,
  description,
  breadcrumb,
  faq,
  serviceType = "Ladenbau nach Maß",
}: LadenbauJsonLdOptions) {
  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    name: "Fast Systemmöbel",
    url: SITE_URL,
    logo: abs("/images/2025/11/logo_fast-systemmoebel.svg"),
    image: abs("/images/2025/11/logo_fast-systemmoebel.svg"),
    foundingDate: "1996",
    founder: { "@type": "Person", name: "Johann Fast" },
    telephone: "+49 5771 9138312",
    faxNumber: "+49 5771 9138314",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alte Waldstraße 32",
      addressLocality: "Espelkamp",
      postalCode: "32339",
      addressRegion: "Nordrhein-Westfalen",
      addressCountry: "DE",
    },
    areaServed: SERVICE_AREA,
    sameAs: SOCIAL_PROFILES,
  };

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    serviceType,
    name,
    description,
    provider: { "@id": ORG_ID },
    areaServed: SERVICE_AREA,
    url: pageUrl,
  };

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: breadcrumb.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: crumb.href ? abs(crumb.href) : pageUrl,
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faq.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, service, breadcrumbList, faqPage],
  };
}

/**
 * Preferred name for new Gewerbe service-cluster pages (Büro, Gastro, Serie,
 * Praxis). Same builder as {@link buildLadenbauJsonLd}; pass `serviceType`.
 */
export const buildServicePageJsonLd = buildLadenbauJsonLd;

// ---------------------------------------------------------------------------
// Reference hub (`/referenzen/`) — CollectionPage + ItemList + ImageObject
// ---------------------------------------------------------------------------

export interface ReferenzItem {
  /** Project title (ImageObject.name / ListItem name). */
  name: string;
  /** Site-relative or absolute image URL. */
  image: string;
  description: string;
  /** Page the project links to (cluster today, detail page later). */
  href: string;
}

export interface ReferenzenJsonLdOptions {
  /** Absolute URL of the page (e.g. `${SITE_URL}/referenzen/`). */
  pageUrl: string;
  /** Page subject / CollectionPage name. */
  name: string;
  description: string;
  breadcrumb: BreadcrumbCrumb[];
  projects: ReferenzItem[];
  faq: FaqEntry[];
}

/**
 * Structured data for the reference aggregator: a CollectionPage whose
 * mainEntity is an ItemList of the projects (each an ImageObject), plus a
 * BreadcrumbList and a FAQPage. Mirrors the spec schema set
 * (CollectionPage | ItemList | ImageObject | BreadcrumbList).
 */
export function buildReferenzenJsonLd({
  pageUrl,
  name,
  description,
  breadcrumb,
  projects,
  faq,
}: ReferenzenJsonLdOptions) {
  const itemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#projects`,
    name,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: abs(project.href),
      item: {
        "@type": "ImageObject",
        name: project.name,
        description: project.description,
        contentUrl: abs(project.image),
        url: abs(project.href),
        representativeOfPage: false,
      },
    })),
  };

  const collectionPage = {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": ORG_ID },
    mainEntity: { "@id": `${pageUrl}#projects` },
  };

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: breadcrumb.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: crumb.href ? abs(crumb.href) : pageUrl,
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faq.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [collectionPage, itemList, breadcrumbList, faqPage],
  };
}
