import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface MnmHeroProps {
  bgImage: string;
  imageAlt: string;
  title: string;
  intro: string;
  breadcrumb: BreadcrumbItem[];
}

export function MnmHero({ bgImage, imageAlt, title, intro, breadcrumb }: MnmHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate w-full overflow-hidden",
        "min-h-[520px] lg:min-h-[638px]",
        "flex items-end",
        "pt-[140px] lg:pt-[230px] pb-14"
      )}
      style={{ fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif" }}
    >
      {/* Background image */}
      <Image
        src={bgImage}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-[50%_50%] z-0"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.12) 45%, rgba(0,0,0,0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-8">
          {/* Left column: h1 + breadcrumb (~66%) */}
          <div className="lg:w-[66%]">
            <h1
              className="text-white font-medium text-[26px] leading-[1.15] sm:text-[48px] sm:leading-[1.1] lg:text-[70px] lg:leading-[84px] max-lg:break-words max-lg:hyphens-auto"
              lang="de"
              style={{ letterSpacing: "-3px" }}
            >
              {title}
            </h1>

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mt-4 flex flex-wrap items-center gap-1"
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

          {/* Right column: intro paragraph (~30%), bottom-aligned */}
          <div className="mt-6 lg:mt-0 lg:w-[30%] lg:flex-shrink-0">
            <p
              className="font-medium text-white/70"
              style={{ fontSize: "15px", lineHeight: "23.8px" }}
            >
              {intro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
