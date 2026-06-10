import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

interface ExpandingImageCtaProps {
  image: string;
  heading: string;
  linkText: string;
  href: string;
  className?: string;
}

export function ExpandingImageCta({
  image,
  heading,
  linkText,
  href,
  className,
}: ExpandingImageCtaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden min-h-[360px] lg:min-h-[578px] flex flex-col justify-end items-start p-6 sm:p-8 lg:p-[60px]",
        className
      )}
      style={{ fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif" }}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={heading}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 1224px"
        priority={false}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.05) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <Reveal className="relative z-10 flex flex-col items-start">
        <h2
          className="text-white font-medium text-[28px] sm:text-[40px] leading-[1.1] lg:text-[65px] lg:leading-[71.5px] max-w-full lg:max-w-[60%] tracking-[-1px] sm:tracking-[-2px]"
        >
          {heading}
        </h2>

        <Link
          href={href}
          className="mt-6 inline-flex items-center text-white font-medium text-[18px] lg:text-[20px] leading-[34px] underline underline-offset-2 transition-opacity hover:opacity-75 group"
        >
          <span>{linkText}</span>
          <ArrowRightIcon className="inline-block h-[1em] w-auto ml-2 align-middle transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </div>
  );
}
