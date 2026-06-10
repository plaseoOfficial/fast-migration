import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

interface WofuerColumn {
  title: string;
  body: string;
}

interface UeberWofuerProps {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  columns: WofuerColumn[];
}

const BEIGE = "rgba(203,191,181,0.59)";

export function UeberWofuer({
  heading,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  columns,
}: UeberWofuerProps) {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: BEIGE,
        fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-[48px] lg:px-8 lg:py-[84px]">
        {/* Heading + CTA row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            className="font-medium"
            style={{
              fontSize: "clamp(45px, 5vw, 65px)",
              lineHeight: "1.1",
              letterSpacing: "0",
              color: "rgb(61,61,61)",
            }}
          >
            {heading}
          </h2>
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2 text-[15px] font-medium text-[rgb(61,61,61)] hover:text-[rgb(237,168,33)]"
          >
            {ctaLabel}
            <ArrowRightIcon className="h-4 w-auto transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Image + two text columns */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:min-h-[180px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </Reveal>

          {columns.map((col, i) => (
            <Reveal key={col.title} delay={120 + i * 120}>
              <h3
                className="font-medium"
                style={{ fontSize: "18px", lineHeight: "1.3", color: "rgb(61,61,61)" }}
              >
                {col.title}
              </h3>
              <p
                className="mt-3"
                style={{ fontSize: "16px", lineHeight: "1.7", color: "rgb(102,102,102)" }}
              >
                {col.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
