import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServiceHeroProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
  bgImage: string;
  intro?: string;
  cta?: { label: string; href: string };
}

export function ServiceHero({ title, breadcrumb, bgImage, intro, cta }: ServiceHeroProps) {
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
      {/* Background image */}
      <Image
        src={bgImage}
        alt={title}
        fill
        priority
        className="object-cover object-[50%_50%] z-0"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.34) 0%, rgba(0,0,0,0.14) 45%, rgba(0,0,0,0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-8">
          {/* Left column: h1 + optional CTA pill + breadcrumb (~66%) */}
          <div className="lg:w-[66%]">
            <h1
              className="text-white font-medium text-[28px] leading-[1.15] sm:text-[44px] sm:leading-[1.1] lg:text-[70px] lg:leading-[84px] max-lg:break-words max-lg:hyphens-auto"
              lang="de"
              style={{ letterSpacing: "-3px" }}
            >
              {title}
            </h1>

            {/* Optional CTA pill */}
            {cta && (
              <div className="mt-6">
                <Link
                  href={cta.href}
                  className="inline-flex items-center rounded-[50px] bg-[rgb(237,168,33)] px-5 py-2.5 text-[15px] font-medium text-[rgb(61,61,61)] hover:bg-[rgb(61,61,61)] hover:text-[rgb(237,168,33)] transition-colors"
                  style={{ fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif" }}
                >
                  {cta.label}
                </Link>
              </div>
            )}

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mt-4 flex flex-wrap items-center gap-1"
            >
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

          {/* Right column: optional intro paragraph (~30%), bottom-aligned */}
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
