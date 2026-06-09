import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon, StarIcon } from "@/components/icons";

interface RaeumeSectionProps {
  heading: string;
  subheading: string;
  body: string;
  topCtaLabel: string;
  topCtaHref: string;
  storyImage: string;
  storyHref: string;
  storyTitle: string;
  storyCtaLabel: string;
  kitchenImage: string;
  kitchenCaption: string;
  bathImage: string;
  bathCaption: string;
  badge: string;
}

export function RaeumeSection({
  heading,
  subheading,
  body,
  topCtaLabel,
  topCtaHref,
  storyImage,
  storyHref,
  storyTitle,
  storyCtaLabel,
  kitchenImage,
  kitchenCaption,
  bathImage,
  bathCaption,
  badge,
}: RaeumeSectionProps) {
  const poppins = "var(--font-poppins), Helvetica, Arial, sans-serif";

  return (
    <section
      id="kontakt"
      className="fast-section w-full"
      style={{ backgroundColor: "rgba(203, 191, 181, 0.59)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header — big bold heading + supporting text (left-aligned) */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className="max-w-[820px]"
            style={{
              fontSize: "clamp(36px, 5vw, 65px)",
              lineHeight: 1,
              letterSpacing: "-2px",
              fontWeight: 500,
              color: "rgb(61,61,61)",
            }}
          >
            {heading}
          </h2>
          <div className="max-w-[440px] shrink-0">
            <p
              style={{
                fontFamily: poppins,
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "23.8px",
                color: "rgb(61,61,61)",
              }}
            >
              {subheading}
            </p>
            <p className="fast-body mt-3" style={{ fontSize: 14, lineHeight: "1.7" }}>
              {body}
            </p>
            <Link
              href={topCtaHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[rgb(61,61,61)] px-6 py-[11px] transition-colors hover:bg-[rgb(61,61,61)] hover:text-white"
              style={{
                fontFamily: poppins,
                fontSize: 15,
                fontWeight: 500,
                color: "rgb(61,61,61)",
              }}
            >
              {topCtaLabel}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Staggered gallery — photo + caption only */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-start lg:gap-10">
          {/* Unsere Geschichte → Über uns */}
          <Link
            href={storyHref}
            className="group relative block aspect-[4/5] overflow-hidden rounded-md bg-[rgb(61,61,61)] sm:col-span-2 lg:col-span-1"
          >
            <Image
              src={storyImage}
              alt={storyTitle}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <ArrowUpRightIcon className="absolute top-5 right-5 h-7 w-7 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-7 left-7 right-7">
              <h3
                className="mb-2 text-white"
                style={{ fontFamily: poppins, fontSize: 23, fontWeight: 500, lineHeight: "29px" }}
              >
                {storyTitle}
              </h3>
              <span
                className="inline-flex items-center gap-1 text-white/90 transition-colors group-hover:text-[rgb(237,168,33)]"
                style={{ fontFamily: poppins, fontSize: 15, fontWeight: 500 }}
              >
                {storyCtaLabel}
                <ArrowRightIcon className="h-3 w-3" />
              </span>
            </div>
          </Link>

          {/* Rückzugsort (offset down for rhythm) */}
          <div className="group relative aspect-[4/5] overflow-hidden rounded-md bg-[rgb(61,61,61)] lg:mt-20">
            <Image
              src={kitchenImage}
              alt={kitchenCaption}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <h3
              className="absolute bottom-7 left-7 right-7 text-white"
              style={{ fontFamily: poppins, fontSize: 19, fontWeight: 500, lineHeight: "25px" }}
            >
              {kitchenCaption}
            </h3>
          </div>

          {/* Wohnumgebung (offset down) */}
          <div className="group relative aspect-[4/5] overflow-hidden rounded-md bg-[rgb(61,61,61)] lg:mt-10">
            <Image
              src={bathImage}
              alt={bathCaption}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <h3
              className="absolute bottom-7 left-7 right-7 text-white"
              style={{ fontFamily: poppins, fontSize: 19, fontWeight: 500, lineHeight: "25px" }}
            >
              {bathCaption}
            </h3>
          </div>
        </div>

        {/* Trust — understated, left-aligned */}
        <div className="mt-16 flex items-center gap-3">
          <div className="flex items-center gap-1" style={{ color: "rgba(61,61,61,0.55)" }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-3.5 w-3.5" />
            ))}
          </div>
          <span
            className="fast-body"
            style={{ fontSize: 14, lineHeight: 1.4 }}
          >
            {badge}
          </span>
        </div>
      </div>
    </section>
  );
}
