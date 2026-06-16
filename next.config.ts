import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Keep the WordPress/relaunch URL convention: every URL ends with a slash.
  trailingSlash: true,
  images: {
    // Serve AVIF first (≈30–50% smaller than WebP), WebP as the fallback. The
    // hero photo is the mobile LCP element, so the smaller encode directly
    // shaves seconds off LCP on phones. Next falls back to the original JPEG
    // for browsers that support neither.
    formats: ["image/avif", "image/webp"],
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
  // Altsite-Mappings: docs/seo/redirects.md (Sheet Tab 13). Einträge mit
  // "INTERIM" zeigen auf den nächsten gebauten Hub, bis die finale Zielseite
  // live ist — dann auf das dokumentierte Ziel umstellen.
  async redirects() {
    return [
      { source: "/leistungen/moebel-nach-mass", destination: "/moebel-nach-mass/", permanent: true },
      { source: "/leistungen/gewerbeeinrichtung", destination: "/gewerbe/", permanent: true },
      { source: "/leistungen/moebelplaner", destination: "/moebelplaner/", permanent: true },
      { source: "/leistungen", destination: "/", permanent: true },
      // URL-Umzug: Ladenbau ist ein flacher Gewerbe-Cluster (wie /bueroeinrichtung/).
      { source: "/gewerbe/ladenbau/", destination: "/ladenbau/", permanent: true },
      // --- Altsite: Produktkategorien ---
      { source: "/produkte/kuechen.html", destination: "/kuechen-nach-mass/", permanent: true },
      { source: "/produkte/ladenbau.html", destination: "/ladenbau/", permanent: true },
      { source: "/produkte/bueroeinrichtungen.html", destination: "/bueroeinrichtung/", permanent: true },
      { source: "/produkte/badezimmer.html", destination: "/moebel-nach-mass/", permanent: true }, // INTERIM → /badmoebel-nach-mass/
      { source: "/produkte/einbauschraenke.html", destination: "/moebel-nach-mass/", permanent: true }, // INTERIM → /einbauschraenke-nach-mass/
      { source: "/produkte/hwr.html", destination: "/moebel-nach-mass/", permanent: true }, // INTERIM → /hauswirtschaftsraum/
      // --- Altsite: Unternehmens- & Pflichtseiten ---
      { source: "/unternehmen.html", destination: "/ueber-uns/", permanent: true },
      { source: "/kontakt.html", destination: "/kontakt/", permanent: true },
      { source: "/datenschutz.html", destination: "/datenschutz/", permanent: true },
      { source: "/impressum.html", destination: "/impressum/", permanent: true },
      { source: "/agbs.html", destination: "/agb/", permanent: true },
      { source: "/jobs.html", destination: "/ueber-uns/", permanent: true },
      { source: "/unser-standard/qualitaet-nachhaltigkeit.html", destination: "/ueber-uns/", permanent: true },
      { source: "/unser-standard/service-beratung.html", destination: "/ueber-uns/", permanent: true }, // INTERIM → /ablauf-massanfertigung/
      // --- Kannibalisierungs-Auflösung: alte Ratgeber-URLs → Cluster ---
      { source: "/ratgeber/kueche-planen-schritt-fuer-schritt/", destination: "/kuechen-nach-mass/", permanent: true }, // INTERIM → /kuechen-nach-mass/kueche-planen/
      { source: "/ratgeber/kueche-nach-mass-kosten/", destination: "/kuechen-nach-mass/", permanent: true }, // INTERIM → /kuechen-nach-mass/kueche-nach-mass-kosten/
      { source: "/ratgeber/kueche-beim-neubau-planen/", destination: "/kuechen-nach-mass/", permanent: true }, // INTERIM → /kuechen-nach-mass/kueche-im-neubau/
      { source: "/ratgeber/massmoebel-kosten-schrank/", destination: "/moebel-nach-mass/", permanent: true }, // INTERIM → /einbauschraenke-nach-mass/einbauschrank-kosten/
      { source: "/ratgeber/einbauschrank-dachschraege/", destination: "/moebel-nach-mass/", permanent: true }, // INTERIM → /einbauschraenke-nach-mass/einbauschrank-dachschraege/
      { source: "/ratgeber/begehbaren-kleiderschrank-planen/", destination: "/moebel-nach-mass/", permanent: true }, // INTERIM → /einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/
      // --- Kannibalisierungs-Auflösung: nicht gebaute Architektur-Varianten ---
      { source: "/bueroeinrichtung/empfangstresen-nach-mass/", destination: "/ladenbau/", permanent: true }, // INTERIM → /ladenbau/empfangstresen-nach-mass/
      { source: "/bueroeinrichtung/praxiseinrichtung-nach-mass/", destination: "/praxiseinrichtung/", permanent: true },
      { source: "/ladenbau/gastronomieeinrichtung/", destination: "/gastronomieeinrichtung/", permanent: true },
      { source: "/gastronomieeinrichtung/hoteleinrichtung/", destination: "/serienmoebel/", permanent: true }, // INTERIM → /serienmoebel/hotelmoebel-serie/
      { source: "/wohnmoebel-nach-mass/einbauschrank-wohnzimmer-nach-mass/", destination: "/moebel-nach-mass/", permanent: true }, // INTERIM → /einbauschraenke-nach-mass/nischenschrank-nach-mass/
      { source: "/index.php", destination: "/", permanent: true }, // Startseite aus dem alten WordPress-Setup, die in Next.js einfach /index.html ist (und damit auch über / erreichbar).
    ];
  },
};

export default nextConfig;
