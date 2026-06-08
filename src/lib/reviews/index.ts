import { fetchFeaturableReviews } from "./featurable";
import { FALLBACK_REVIEWS } from "./fallback";
import type { Review, ReviewsData } from "./types";

export type { Review, ReviewsData } from "./types";

/** Only show "good" reviews — 4 and 5 stars. */
const MIN_RATING = 4;
/** Drop star-only reviews; the wall needs words. */
const MIN_TEXT_LENGTH = 1;
/** Keep the marquee tasteful even when a business has hundreds of reviews. */
const MAX_REVIEWS = 18;

function byNewestFirst(a: Review, b: Review): number {
  const ta = a.createdAt ? Date.parse(a.createdAt) : 0;
  const tb = b.createdAt ? Date.parse(b.createdAt) : 0;
  return tb - ta;
}

function curate(reviews: Review[]): Review[] {
  return reviews
    .filter((r) => r.rating >= MIN_RATING && r.text.trim().length >= MIN_TEXT_LENGTH)
    .sort(byNewestFirst)
    .slice(0, MAX_REVIEWS);
}

/**
 * The single entry point every page uses. Pulls the live Featurable feed when
 * `FEATURABLE_WIDGET_ID` is configured, filters to recent 4–5★ reviews with
 * text, and falls back to the curated static list otherwise.
 *
 * Result is ISR-cached (see `fetchFeaturableReviews`), so new five-star reviews
 * roll in automatically without a redeploy.
 *
 * To go live: create a free widget at https://featurable.com/app/widgets,
 * connect your Google Business Profile, and set `FEATURABLE_WIDGET_ID` in the
 * environment (see `.env.example`).
 */
export async function getReviews(): Promise<ReviewsData> {
  const widgetId = process.env.FEATURABLE_WIDGET_ID;

  if (widgetId) {
    const live = await fetchFeaturableReviews(widgetId);
    if (live) {
      const curated = curate(live.reviews);
      if (curated.length > 0) {
        return { ...live, reviews: curated };
      }
    }
  }

  return { ...FALLBACK_REVIEWS, reviews: curate(FALLBACK_REVIEWS.reviews) };
}
