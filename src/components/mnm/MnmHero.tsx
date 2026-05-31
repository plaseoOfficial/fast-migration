import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function MnmHero() {
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
        src="/images/2025/11/WhatsApp-Bild-2025-04-01-um-22.54.05_fab2d495.jpg"
        alt="Einbauschrank nach Maß – Fast Systemmöbel"
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
              className="text-white font-medium text-[36px] leading-[1.1] sm:text-[48px] lg:text-[70px] lg:leading-[84px]"
              style={{ letterSpacing: "-3px" }}
            >
              Möbel nach Maß aus Espelkamp – millimetergenau geplant
            </h1>

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mt-4 flex flex-wrap items-center gap-1"
            >
              <Link
                href="/"
                className="text-[15px] leading-[26px] text-white/70 hover:text-white transition-colors"
              >
                fast.side-boost.com
              </Link>
              <ChevronRightIcon className="h-3 w-auto opacity-60 text-white/70" />
              <Link
                href="/leistungen"
                className="text-[15px] leading-[26px] text-white/70 hover:text-white transition-colors"
              >
                Leistungen
              </Link>
              <ChevronRightIcon className="h-3 w-auto opacity-60 text-white/70" />
              <span
                className="text-[15px] leading-[26px] font-bold text-white"
              >
                Möbel nach Maß
              </span>
            </nav>
          </div>

          {/* Right column: intro paragraph (~30%), bottom-aligned */}
          <div className="mt-6 lg:mt-0 lg:w-[30%] lg:flex-shrink-0">
            <p
              className="font-medium text-white/70"
              style={{ fontSize: "15px", lineHeight: "23.8px" }}
            >
              Standardlösungen finden Sie in jedem Möbelhaus. Wir bei Fast
              Systemmöbel gehen einen Schritt weiter: Wir planen und fertigen
              hochwertige Möbel nach Maß, die sich millimetergenau in Ihre Räume
              einfügen und Ihre Persönlichkeit perfekt unterstreichen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
