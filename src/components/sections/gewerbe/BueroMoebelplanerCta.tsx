import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

interface BueroMoebelplanerCtaProps {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export function BueroMoebelplanerCta({ heading, body, ctaLabel, ctaHref, image, imageAlt }: BueroMoebelplanerCtaProps) {
  return (
    <section
      className="py-12 lg:py-[84px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            <h2
              className="text-[28px] leading-[1.15] sm:text-[34px] sm:leading-[1.05] lg:text-[65px] lg:leading-[65px] font-medium tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px]"
              style={{ color: "rgb(61,61,61)" }}
            >
              {heading}
            </h2>
            <p
              className="mt-5 text-[16px] leading-[1.7] font-medium"
              style={{ color: "rgb(102,102,102)" }}
            >
              {body}
            </p>
            <Link
              href={ctaHref}
              className="mt-6 inline-flex items-center text-[20px] font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
              style={{ color: "rgb(61,61,61)" }}
            >
              {ctaLabel}
              <ArrowRightIcon className="inline-block h-[1em] w-auto ml-2 align-middle" />
            </Link>
          </div>

          {/* Right: image */}
          <div className="w-full">
            <Image
              src={image}
              alt={imageAlt}
              width={560}
              height={420}
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
