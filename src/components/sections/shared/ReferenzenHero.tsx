import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ReferenzHeroImage {
  src: string;
  alt: string;
}

interface ReferenzenHeroProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
  /** 1 image → full-bleed; 2–4 images → collage (mobile 2×2, desktop strip). */
  images: ReferenzHeroImage[];
  intro?: string;
}

const DEFAULT_HEADER_SCRIM =
  "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0) 100%)";

/**
 * Reference-hub hero. Like `ServiceHero` in typography and layout, but the
 * background is a collage of project photos (a thin dark seam between them)
 * rather than a single image — so the hub shows a few real projects at a glance.
 * A layered scrim (left + bottom + top) keeps the white title and breadcrumb
 * legible over bright photos. Falls back to a clean full-bleed image when only
 * one is passed.
 */
export function ReferenzenHero({ title, breadcrumb, images, intro }: ReferenzenHeroProps) {
  const isCollage = images.length > 1;

  return (
    <section
      className={cn(
        "relative isolate w-full overflow-hidden",
        "min-h-[480px] lg:min-h-[638px]",
        "flex items-end",
        "pt-[140px] lg:pt-[230px] pb-14"
      )}
      style={{ fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif" }}
    >
      {/* Background — collage grid (or single full-bleed image) */}
      {isCollage ? (
        <div
          className="absolute inset-0 z-0 grid grid-cols-2 grid-rows-2 gap-[2px] lg:grid-cols-4 lg:grid-rows-1"
          style={{ backgroundColor: "rgb(45,45,45)" }}
          aria-hidden="true"
        >
          {images.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          priority
          className="z-0 object-cover object-[50%_50%]"
        />
      )}

      {/* Left + bottom scrim — guarantees the title/breadcrumb punch through */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.08) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 z-[1] h-[60%]"
        style={{
          background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top scrim — readable transparent header (white logo + nav) over photos */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[200px] lg:h-[280px]"
        style={{ background: DEFAULT_HEADER_SCRIM }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-8">
          {/* Left: h1 + breadcrumb (~66%) */}
          <div className="lg:w-[66%]">
            <h1
              className="text-white font-medium text-[28px] leading-[1.15] sm:text-[44px] sm:leading-[1.1] lg:text-[70px] lg:leading-[84px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-3px] max-lg:break-words max-lg:hyphens-auto"
              lang="de"
            >
              {title}
            </h1>

            <nav aria-label="Breadcrumb" className="mt-4 flex flex-wrap items-center gap-1">
              {breadcrumb.map((item, index) => {
                const isLast = index === breadcrumb.length - 1;
                return (
                  <span key={index} className="flex items-center gap-1">
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
                  </span>
                );
              })}
            </nav>
          </div>

          {/* Right: optional intro (~30%), bottom-aligned */}
          {intro && (
            <div className="mt-6 lg:mt-0 lg:w-[30%] lg:flex-shrink-0">
              <p
                className="font-medium text-white/70"
                style={{ fontSize: "15px", lineHeight: "23.8px" }}
              >
                {intro}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
