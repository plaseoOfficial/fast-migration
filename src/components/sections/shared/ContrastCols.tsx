import { CloseIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export interface ContrastColumn {
  /** Card heading, e.g. "Katalog- & Systemmöbel". */
  title: string;
  /** Short bullet points (3–5). Kept to one line each. */
  points: string[];
}

interface ContrastColsProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  /** The "downside" column (gray, cross bullets). */
  negative: ContrastColumn;
  /** The "your approach" column (gold-accented, check bullets). */
  positive: ContrastColumn;
}

/** Small gold check, drawn inline so the component stays self-contained. */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 10.5l4 4 8-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Two-column contrast block: a "what you get elsewhere" card beside a gold-
 * accented "what you get from us" card, each a short bulleted list. Turns a
 * dense vs-paragraph (catalogue furniture vs custom joinery) into a scannable,
 * design-packaged comparison. Props-driven and reusable across service pages.
 */
export function ContrastCols({
  eyebrow,
  heading,
  intro,
  negative,
  positive,
}: ContrastColsProps) {
  return (
    <section
      className="py-12 lg:py-[84px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        {/* Header */}
        <Reveal className="max-w-[760px]">
          {eyebrow && (
            <p
              className="mb-3 uppercase"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "2px",
                color: "rgb(61,61,61)",
              }}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className="text-[34px] leading-[1.05] font-medium tracking-[-1.5px] lg:text-[59px] lg:leading-[59px] lg:tracking-[-2px]"
            style={{ color: "rgb(61,61,61)", fontWeight: 500 }}
          >
            {heading}
          </h2>
          {intro && (
            <p
              className="mt-5 text-[16px] leading-[28px]"
              style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
            >
              {intro}
            </p>
          )}
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Negative column */}
          <Reveal className="flex flex-col p-8" style={{ backgroundColor: "rgb(243,243,243)" }}>
            <h3
              className="text-[22px] font-medium leading-[1.3]"
              style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
            >
              {negative.title}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {negative.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CloseIcon className="mt-[3px] h-4 w-4 shrink-0 text-[rgb(102,102,102)]" />
                  <span
                    className="text-[16px] leading-[26px]"
                    style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Positive column */}
          <Reveal delay={120} className="flex flex-col p-8" style={{ backgroundColor: "rgb(255,255,255)" }}>
            <span
              className="mb-4 h-1 w-10 rounded-full"
              style={{ backgroundColor: "rgb(237,168,33)" }}
            />
            <h3
              className="text-[22px] font-medium leading-[1.3]"
              style={{ color: "rgb(61,61,61)", fontWeight: 500 }}
            >
              {positive.title}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {positive.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckIcon className="mt-[3px] h-4 w-4 shrink-0 text-[rgb(237,168,33)]" />
                  <span
                    className="text-[16px] leading-[26px]"
                    style={{ color: "rgb(61,61,61)", fontWeight: 500 }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
