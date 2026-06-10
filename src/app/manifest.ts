import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fast Systemmöbel",
    short_name: "Fast",
    description:
      "Maßmöbel vom Meisterbetrieb in Espelkamp. Planung, Fertigung und Montage aus einer Hand.",
    start_url: "/",
    display: "browser",
    background_color: "#f3f3f3",
    theme_color: "#3d3d3d",
    icons: [
      { src: "/seo/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/seo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
