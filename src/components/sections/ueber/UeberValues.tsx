import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

interface ValueBlock {
  title: string;
  body: string;
}

interface UeberValuesProps {
  figure: string;
  figureAlt: string;
  missionHeading: string;
  ctaLabel: string;
  ctaHref: string;
  values: ValueBlock[];
}

const BEIGE = "rgba(203,191,181,0.59)";

function RulerIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 8.5h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z"
        stroke="rgb(61,61,61)"
        strokeWidth="1.6"
      />
      <path d="M6.5 8.5v3M10 8.5v4M13.5 8.5v3M17 8.5v4" stroke="rgb(61,61,61)" strokeWidth="1.6" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="34" height="28" viewBox="0 0 34 28" fill="rgb(61,61,61)" aria-hidden="true">
      <path d="M0 28V15.4C0 6.9 4.7 1.3 13.4 0l1.6 3.8C10.1 5.2 7.6 8 7.4 11.6H14V28H0Zm20 0V15.4C20 6.9 24.7 1.3 33.4 0L35 3.8C30.1 5.2 27.6 8 27.4 11.6H34V28H20Z" />
    </svg>
  );
}

function ValueItem({ title, body, kind }: ValueBlock & { kind: "ruler" | "quote" }) {
  return (
    <div>
      {kind === "ruler" ? <RulerIcon /> : <QuoteIcon />}
      <h3
        className="mt-4 font-medium"
        style={{ fontSize: "22px", lineHeight: "1.3", color: "rgb(61,61,61)" }}
      >
        {title}
      </h3>
      <p
        className="mt-3"
        style={{ fontSize: "16px", lineHeight: "1.7", color: "rgb(102,102,102)" }}
      >
        {body}
      </p>
    </div>
  );
}

export function UeberValues({
  figure,
  figureAlt,
  missionHeading,
  ctaLabel,
  ctaHref,
  values,
}: UeberValuesProps) {
  const [innovation, tradition, leidenschaft] = values;

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: BEIGE,
        fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-[48px] lg:px-8 lg:py-[84px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
          {/* Left quarter: Innovation + Mission */}
          <div className="flex flex-col lg:justify-between lg:gap-16">
            <ValueItem {...innovation} kind="ruler" />
            <div>
              <h2
                className="font-medium"
                style={{
                  fontSize: "clamp(37px, 4vw, 45px)",
                  lineHeight: "1",
                  color: "rgb(61,61,61)",
                }}
              >
                {missionHeading}
              </h2>
              <Link
                href={ctaHref}
                className="group mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[rgb(61,61,61)] hover:text-[rgb(237,168,33)]"
              >
                {ctaLabel}
                <ArrowRightIcon className="h-4 w-auto transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Center half: figure */}
          <div className="relative order-first min-h-[360px] lg:order-none lg:col-span-2 lg:min-h-[560px]">
            <Image
              src={figure}
              alt={figureAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-bottom"
            />
          </div>

          {/* Right quarter: Tradition + Leidenschaft */}
          <div className="flex flex-col lg:justify-between lg:gap-16">
            <ValueItem {...tradition} kind="quote" />
            <ValueItem {...leidenschaft} kind="quote" />
          </div>
        </div>
      </div>
    </section>
  );
}
