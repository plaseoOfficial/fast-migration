import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

/**
 * Indexable routes. `/library` is the internal section showcase (noindex) and
 * is intentionally excluded; it is also disallowed in robots.ts.
 */
const ROUTES: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/gewerbe/ladenbau", priority: 0.9 },
  { path: "/leistungen/gewerbeeinrichtung", priority: 0.8 },
  { path: "/leistungen/moebel-nach-mass", priority: 0.8 },
  { path: "/leistungen/moebelplaner", priority: 0.7 },
  { path: "/kontakt", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
