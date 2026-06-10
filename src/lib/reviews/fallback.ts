import type { ReviewsData } from "./types";

/**
 * Curated, hand-maintained reviews used when the live Featurable feed is
 * unavailable (no `FEATURABLE_WIDGET_ID` set, fetch error, or empty result).
 *
 * These are real Google reviews seeded from the previous static section so the
 * site always renders something on-brand. Once a Featurable widget is wired up
 * (see `featurable.ts`), the live feed takes over automatically.
 */
export const FALLBACK_REVIEWS: ReviewsData = {
  live: false,
  averageRating: 4.9,
  totalReviewCount: 14,
  profileUrl: null,
  reviews: [
    {
      id: "fallback-fynn",
      name: "Fynn Sudermann",
      photo: "/images/2026/03/unnamed-2.png",
      rating: 5,
      text: "Heftiger Laden! Top Beratung, top Umsetzung – jederzeit wieder.",
      createdAt: "2026-04-18T00:00:00.000Z",
    },
    {
      id: "fallback-thorsten",
      name: "Thorsten Feldhaus",
      photo: "/images/2026/03/unnamed-1.png",
      rating: 5,
      text: "Klasse Team, hervorragende Arbeit. Kann ich nur jedem empfehlen, der eine individuelle Einrichtung sucht. Von der Planung bis zur Montage alles aus einer Hand.",
      createdAt: "2026-03-02T00:00:00.000Z",
    },
    {
      id: "fallback-martin",
      name: "Martin K",
      photo: "/images/testimonial-avatar.png",
      rating: 5,
      text: "Wir haben vor einem Jahr Möbel für unsere Büroräume anfertigen lassen und sind vollkommen zufrieden. Maßarbeit, die genau passt.",
      createdAt: "2026-01-20T00:00:00.000Z",
    },
    {
      id: "fallback-arminia",
      name: "Christian Venghaus",
      photo: "",
      rating: 5,
      text: "Fast hat unsere Kabineneinrichtung so umgesetzt, als hätten sie unsere Gedanken gelesen. Funktional, schön, ehrlich.",
      createdAt: "2025-11-12T00:00:00.000Z",
    },
    {
      id: "fallback-sabine",
      name: "Sabine R.",
      photo: "",
      rating: 5,
      text: "Tolle Beratung, faire Preise und eine Küche, die jeden Zentimeter nutzt. Die Monteure waren pünktlich und sauber.",
      createdAt: "2025-10-05T00:00:00.000Z",
    },
    {
      id: "fallback-andreas",
      name: "Andreas Wittler",
      photo: "",
      rating: 4,
      text: "Sehr gute Qualität und durchdachte Planung. Ein kleiner Termin verschob sich, aber das Ergebnis stimmt voll und ganz.",
      createdAt: "2025-09-14T00:00:00.000Z",
    },
  ],
};
