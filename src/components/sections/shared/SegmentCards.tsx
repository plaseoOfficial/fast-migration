import { Reveal } from "@/components/Reveal";

export interface Segment {
  title: string;
  body: string;
}

interface SegmentCardsProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  segments: Segment[];
}

/**
 * Light card grid for audience/segment coverage (e.g. "for which businesses do
 * we plan"). Each card carries a title + one short sentence on a white surface,
 * so a list that would otherwise be buried in prose becomes scannable and adds
 * an SEO entity surface. Props-driven and reusable.
 */
export function SegmentCards({
  eyebrow,
  heading,
  intro,
  segments,
}: SegmentCardsProps) {
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
        <div className="max-w-[760px]">
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
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {segments.map((segment, i) => (
            <Reveal
              key={segment.title}
              delay={i * 80}
              className="flex flex-col p-8"
              style={{ backgroundColor: "rgb(243,243,243)" }}
            >
              <span
                className="mb-4 h-1 w-10 rounded-full"
                style={{ backgroundColor: "rgb(237,168,33)" }}
              />
              <h3
                className="text-[22px] font-medium leading-[1.3]"
                style={{ color: "rgb(61,61,61)", fontWeight: 500 }}
              >
                {segment.title}
              </h3>
              <p
                className="mt-3 text-[16px] leading-[26px]"
                style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
              >
                {segment.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
