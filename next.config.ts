import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Keep the WordPress/relaunch URL convention: every URL ends with a slash.
  trailingSlash: true,
  images: {
    // All SVGs are local, trusted assets downloaded from the target site.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      // Live Google-review avatars are served from Google's user-content CDN.
      { protocol: "https", hostname: "*.googleusercontent.com" },
      // WordPress media library, mirrored into a public GCS bucket (media-images/<year>/<month>/…).
      { protocol: "https", hostname: "storage.googleapis.com", pathname: "/fast_wp_bucket/**" },
    ],
  },
  // Flat-IA relaunch: the old /leistungen/* URLs are retired (308 permanent).
  async redirects() {
    return [
      { source: "/leistungen/moebel-nach-mass", destination: "/moebel-nach-mass/", permanent: true },
      { source: "/leistungen/gewerbeeinrichtung", destination: "/gewerbe/", permanent: true },
      { source: "/leistungen/moebelplaner", destination: "/moebelplaner/", permanent: true },
      { source: "/leistungen", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
