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
  return (
    <section
      id="kontakt"
      className="fast-section w-full"
      style={{ backgroundColor: "rgba(203, 191, 181, 0.59)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Centered top */}
        <div className="mx-auto max-w-[820px] text-center mb-16">
          <h2
            style={{
              fontSize: "clamp(26px, 2.6vw, 35px)",
              lineHeight: "1.3",
              letterSpacing: "-1px",
              fontWeight: 500,
              color: "rgb(61,61,61)",
            }}
          >
            {heading}
          </h2>
          <p
            className="mt-6"
            style={{
              fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              lineHeight: "23.8px",
              color: "rgb(61,61,61)",
            }}
          >
            {subheading}
          </p>
          <p
            className="fast-body mt-4"
            style={{ fontSize: 14, lineHeight: "23.8px" }}
          >
            {body}
          </p>
          <Link
            href={topCtaHref}
            className="mt-6 inline-flex items-center gap-2 transition-colors hover:text-[rgb(237,168,33)]"
            style={{
              fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: "rgb(61,61,61)",
            }}
          >
            {topCtaLabel}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* 3-column showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <Link
            href={storyHref}
            className="lg:col-span-4 group relative aspect-[16/9] lg:aspect-[3/4] overflow-hidden rounded-md bg-[rgb(61,61,61)] block"
          >
            <Image
              src={storyImage}
              alt="Fast Werkstatt"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
            <ArrowUpRightIcon className="absolute top-6 left-6 h-9 w-9 text-white" />
            <div className="absolute bottom-6 left-6 right-6">
              <h4
                className="mb-2 text-white"
                style={{
                  fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
                  fontSize: 22,
                  fontWeight: 500,
                  lineHeight: "28.6px",
                }}
              >
                {storyTitle}
              </h4>
              <span
                className="inline-flex items-center gap-1 text-white/90"
                style={{
                  fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                {storyCtaLabel}
                <ArrowRightIcon className="h-3 w-3" />
              </span>
            </div>
          </Link>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full border-2 border-[rgb(61,61,61)]" />
              <span className="fast-eyebrow">Projekte</span>
            </div>
            <div
              className="select-none leading-none max-w-full overflow-hidden"
              style={{
                fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
                // Floor lowered (120→48px); 16vw slope + 220px max unchanged → desktop identical.
                fontSize: "clamp(48px, 16vw, 220px)",
                letterSpacing: "clamp(-3px, -1vw, -14px)",
                fontWeight: 500,
                color: "rgb(61,61,61)",
              }}
            >
              Fast
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md mt-auto">
              <Image
                src={kitchenImage}
                alt="Fast Küche"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <h4
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
                    fontSize: 18,
                    fontWeight: 500,
                    lineHeight: "23.4px",
                  }}
                >
                  {kitchenCaption}
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative aspect-[3/4] lg:aspect-auto overflow-hidden rounded-md">
            <Image
              src={bathImage}
              alt="Fast Badmöbel"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <h4
              className="absolute bottom-6 left-6 right-6 text-white"
              style={{
                fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
                fontSize: 18,
                fontWeight: 500,
                lineHeight: "23.4px",
              }}
            >
              {bathCaption}
            </h4>
          </div>
        </div>

        {/* Bottom: 5 stars + Über 4 Tausend badge */}
        <div className="mt-10 flex flex-col items-start gap-2">
          <div className="flex items-center gap-1" style={{ color: "rgb(61,61,61)" }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
          </div>
          <h4
            style={{
              fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              lineHeight: 1,
              color: "rgb(61,61,61)",
            }}
          >
            {badge}
          </h4>
        </div>
      </div>
    </section>
  );
}
