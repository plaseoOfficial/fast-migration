/**
 * Shared types for the live Google-reviews integration.
 *
 * The shape mirrors Featurable's public widget API (v1), normalised into a
 * flat `Review` we can render directly. See `featurable.ts` for the fetcher.
 */

export interface Review {
  /** Stable id from the source (used as React key). */
  id: string;
  /** Reviewer display name, e.g. "Thorsten Feldhaus". */
  name: string;
  /** Reviewer profile photo URL (may be empty → we render an initial avatar). */
  photo: string;
  /** Integer star rating 1–5. */
  rating: number;
  /** Review text (may be empty for star-only reviews). */
  text: string;
  /** ISO timestamp the review was created, or null if unknown. */
  createdAt: string | null;
}

export interface ReviewsData {
  reviews: Review[];
  /** Average rating across ALL reviews (not just the filtered subset). */
  averageRating: number;
  /** Total number of Google reviews for the business. */
  totalReviewCount: number;
  /** Link to the public Google profile / "write a review" page, if known. */
  profileUrl: string | null;
  /** True when the data came from the live Featurable API (not the fallback). */
  live: boolean;
}
