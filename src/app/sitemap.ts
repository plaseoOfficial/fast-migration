import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

/**
 * Indexable routes (flat-IA, trailing slash to match `trailingSlash: true` and
 * the canonical URLs). `/library` is the internal section showcase (noindex)
 * and is intentionally excluded; it is also disallowed in robots.ts.
 */
const ROUTES: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/moebel-nach-mass/", priority: 0.9 },
  { path: "/kuechen-nach-mass/", priority: 0.8 },
  { path: "/gewerbe/", priority: 0.8 },
  { path: "/gewerbe/ladenbau/", priority: 0.8 },
  { path: "/bueroeinrichtung/", priority: 0.8 },
  { path: "/gastronomieeinrichtung/", priority: 0.8 },
  { path: "/serienmoebel/", priority: 0.8 },
  { path: "/praxiseinrichtung/", priority: 0.8 },
  { path: "/ueber-uns/", priority: 0.6 },
  { path: "/referenzen/", priority: 0.7 },
  { path: "/moebelplaner/", priority: 0.7 },
  { path: "/kontakt/", priority: 0.6 },
  { path: "/impressum/", priority: 0.3 },
  { path: "/datenschutz/", priority: 0.3 },
  { path: "/agb/", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
