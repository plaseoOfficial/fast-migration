import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface UeberHeroProps {
  bgImage: string;
  imageAlt: string;
  title: string;
  intro: string;
  breadcrumb: BreadcrumbItem[];
  /**
   * Top-to-bottom scrim behind the transparent header, for white-on-photo
   * readability. Override per page via a full CSS `background` value.
   */
  headerScrim?: string;
}

const DEFAULT_HEADER_SCRIM =
  "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0) 100%)";

export function UeberHero({ bgImage, imageAlt, title, intro, breadcrumb, headerScrim }: UeberHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate w-full overflow-hidden",
        "min-h-[560px] lg:min-h-[720px]",
        "flex items-center",
        "pt-[150px] lg:pt-[200px] pb-16 lg:pb-24"
      )}
      style={{ fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif" }}
    >
      {/* Background image */}
      <Image
        src={bgImage}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-[50%_50%] z-0"
      />

      {/* Radial vignette overlay (matches the original dark-center wash) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(61,61,61,0.51) 0%, rgba(61,61,61,0.57) 14%, rgba(255,255,255,0) 98%)",
        }}
        aria-hidden="true"
      />

      {/* Top scrim — keeps the transparent header (white logo + nav) readable
          over the photo. Tunable per page via the headerScrim prop. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[200px] lg:h-[280px]"
        style={{ background: headerScrim ?? DEFAULT_HEADER_SCRIM }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
          {/* Left column: h1 + breadcrumb (~62%) */}
          <div className="lg:w-[62%]">
            {/* Page h1, intentionally capped at the h2 step (65px) so it sets
                the top of the heading hierarchy without overpowering the layout. */}
            <h1
              className="text-white font-medium text-[45px] leading-[1.1] lg:text-[65px]"
              style={{ letterSpacing: "-2px" }}
            >
              {title}
            </h1>

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mt-5 flex flex-wrap items-center gap-1"
            >
              {breadcrumb.map((item, index) => {
                const isLast = index === breadcrumb.length - 1;
                return (
                  <Fragment key={index}>
                    {index > 0 && (
                      <ChevronRightIcon className="h-3 w-auto opacity-60 text-white/70" />
                    )}
                    {isLast || !item.href ? (
                      <span className="text-[15px] leading-[26px] font-bold text-white">
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-[15px] leading-[26px] text-white/70 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </Fragment>
                );
              })}
            </nav>
          </div>

          {/* Right column: intro paragraph (~32%) */}
          <div className="mt-7 lg:mt-0 lg:w-[32%] lg:flex-shrink-0">
            <p
              className="font-medium text-white/80"
              style={{ fontSize: "16px", lineHeight: "1.7" }}
            >
              {intro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
