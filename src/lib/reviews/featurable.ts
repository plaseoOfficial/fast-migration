import type { Review, ReviewsData } from "./types";

/**
 * Featurable public widget API (v1). A widget is a free Google-reviews feed you
 * create at https://featurable.com/app/widgets after connecting your Google
 * Business Profile. The endpoint is public (no API key) and returns ALL synced
 * reviews — which is how we get around the Google Places API's 5-review cap.
 *
 * Response shape (v1):
 *   {
 *     success: boolean,
 *     profileUrl: string | null,
 *     totalReviewCount: number,
 *     averageRating: number,
 *     reviews: Array<{
 *       reviewId: string | null,
 *       reviewer: { displayName, profilePhotoUrl, isAnonymous },
 *       starRating: number,
 *       comment: string,
 *       createTime: string | null,
 *       updateTime: string | null,
 *     }>
 *   }
 */

const ENDPOINT = "https://featurable.com/api/v1/widgets";

/** How long (seconds) a fetched feed is cached before ISR refetches it. */
const REVALIDATE_SECONDS = 60 * 60 * 6; // 6 hours

interface FeaturableReviewV1 {
  reviewId: string | null;
  reviewer?: {
    displayName?: string;
    profilePhotoUrl?: string;
    isAnonymous?: boolean;
  };
  starRating?: number;
  comment?: string;
  createTime?: string | null;
}

interface FeaturableResponseV1 {
  success: boolean;
  profileUrl?: string | null;
  totalReviewCount?: number;
  averageRating?: number;
  reviews?: FeaturableReviewV1[];
}

function mapReview(raw: FeaturableReviewV1, index: number): Review {
  return {
    id: raw.reviewId ?? `featurable-${index}`,
    name: raw.reviewer?.displayName || "Google-Nutzer",
    photo: raw.reviewer?.profilePhotoUrl || "",
    rating: raw.starRating ?? 0,
    text: raw.comment ?? "",
    createdAt: raw.createTime ?? null,
  };
}

/**
 * Fetch and normalise the live Featurable feed. Returns `null` on any failure
 * (missing id, network error, non-OK status, malformed payload) so the caller
 * can fall back to the curated static list.
 */
export async function fetchFeaturableReviews(
  widgetId: string,
): Promise<ReviewsData | null> {
  try {
    const res = await fetch(`${ENDPOINT}/${widgetId}`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: ["google-reviews"] },
    });
    if (!res.ok) return null;

    const data = (await res.json()) as FeaturableResponseV1;
    if (!data.success || !Array.isArray(data.reviews)) return null;

    return {
      live: true,
      profileUrl: data.profileUrl ?? null,
      averageRating: data.averageRating ?? 0,
      totalReviewCount: data.totalReviewCount ?? data.reviews.length,
      reviews: data.reviews.map(mapReview),
    };
  } catch {
    return null;
  }
}
