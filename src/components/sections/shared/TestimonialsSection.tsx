import Image from "next/image";
import { StarIcon, GoogleGIcon } from "@/components/icons";
import { getReviews } from "@/lib/reviews";
import type { Review } from "@/lib/reviews";
import { Reveal } from "@/components/Reveal";

interface TestimonialsSectionProps {
  heading: string;
  eyebrow?: string;
}

const DARK = "rgb(61,61,61)";
const MUTED = "rgb(102,102,102)";
const GOLD = "rgb(237,168,33)";

/** German "1,0"-style one-decimal number, e.g. 4.9 → "4,9". */
function formatAverage(value: number): string {
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

/** Coarse German relative time, e.g. "vor 3 Monaten". Empty when unknown. */
function relativeTime(iso: string | null): string {
  if (!iso) return "";
  const then = Date.parse(iso);
  if (Number.isNaN(then)) return "";
  const days = Math.max(0, Math.floor((Date.now() - then) / 86_400_000));
  if (days < 7) return "vor Kurzem";
  if (days < 14) return "vor 1 Woche";
  if (days < 30) return `vor ${Math.floor(days / 7)} Wochen`;
  const months = Math.floor(days / 30);
  if (months < 2) return "vor 1 Monat";
  if (months < 12) return `vor ${months} Monaten`;
  const years = Math.floor(days / 365);
  return years < 2 ? "vor 1 Jahr" : `vor ${years} Jahren`;
}

function ReviewCard({ review }: { review: Review }) {
  const initial = review.name.trim().charAt(0).toUpperCase() || "G";
  const when = relativeTime(review.createdAt);

  return (
    <article
      className="flex w-[300px] flex-shrink-0 flex-col rounded-lg bg-white p-6 shadow-sm lg:w-[340px]"
      style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
    >
      <div className="flex items-center gap-3">
        {review.photo ? (
          <Image
            src={review.photo}
            alt={review.name}
            width={44}
            height={44}
            className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-lg font-semibold text-white"
            style={{ backgroundColor: DARK }}
          >
            {initial}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p
            className="truncate font-medium"
            style={{ fontSize: 16, color: DARK }}
          >
            {review.name}
          </p>
          {when && (
            <p style={{ fontSize: 14, color: MUTED }}>{when}</p>
          )}
        </div>
        <GoogleGIcon className="h-5 w-5 flex-shrink-0" aria-label="Google" />
      </div>

      <div className="mt-3 flex items-center gap-[2px]" style={{ color: GOLD }}>
        {Array.from({ length: Math.round(review.rating) }).map((_, i) => (
          <StarIcon key={i} className="h-[18px] w-[18px]" />
        ))}
      </div>

      <p
        className="mt-3 line-clamp-5"
        style={{ fontSize: 14, lineHeight: 1.7, color: MUTED }}
      >
        {review.text}
      </p>
    </article>
  );
}

export async function TestimonialsSection({
  heading,
  eyebrow,
}: TestimonialsSectionProps) {
  const { reviews, averageRating, totalReviewCount, profileUrl } =
    await getReviews();

  // Duplicate the list so the marquee can loop seamlessly (translateX -50%).
  const looped = [...reviews, ...reviews];

  return (
    <section
      className="fast-section w-full overflow-hidden"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-open-sans), Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6">
        {/* Header */}
        <Reveal className="flex flex-col items-center text-center">
          {eyebrow && (
            <p
              style={{
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: DARK,
              }}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className="mt-3 text-center tracking-[-2px] lg:tracking-[-5px]"
            style={{
              fontSize: "clamp(32px, 9vw, 120px)",
              lineHeight: 1,
              fontWeight: 500,
              color: DARK,
            }}
          >
            {heading}
          </h2>

          {/* Google rating badge */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <GoogleGIcon className="h-6 w-6" aria-label="Google" />
            <span style={{ fontSize: 18, fontWeight: 600, color: DARK }}>
              {formatAverage(averageRating)}
            </span>
            <span className="flex items-center gap-[2px]" style={{ color: GOLD }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
            </span>
            <span style={{ fontSize: 14, color: MUTED }}>
              {totalReviewCount} Google-Rezensionen
            </span>
          </div>
        </Reveal>
      </div>

      {/* Auto-scrolling review wall (pauses on hover, freezes for reduced motion) */}
      <div className="fast-marquee relative mt-12 w-full">
        <div className="fast-marquee-track items-stretch gap-5 px-3 lg:gap-6">
          {looped.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>

      {profileUrl && (
        <div className="mt-10 flex justify-center px-6">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-[10px] shadow-sm transition-shadow hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
            style={{ fontSize: 14, fontWeight: 500, color: DARK }}
          >
            <GoogleGIcon className="h-5 w-5" aria-hidden />
            Alle Bewertungen auf Google ansehen
          </a>
        </div>
      )}
    </section>
  );
}
