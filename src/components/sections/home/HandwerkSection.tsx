import { Fragment } from "react";
import type { CounterStat, TabPanel } from "@/types";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "./StatCounter";
import { HandwerkTopics } from "./HandwerkTopics";

interface HandwerkSectionProps {
  eyebrow: string;
  headingLines: string[];
  stats: CounterStat[];
  tabs: TabPanel[];
}

/**
 * Homepage "Über uns". An editorial intro (heading + count-up stats) flows into
 * a pinned, horizontally-scrolling journey through the craft topics — the
 * section curves organically out of the dark quote panel above it. The heavy
 * lifting (pin + horizontal scrub, count-up) lives in the client children;
 * this orchestrator stays a Server Component.
 */
export function HandwerkSection({
  eyebrow,
  headingLines,
  stats,
  tabs,
}: HandwerkSectionProps) {
  return (
    <section
      id="ueber-uns"
      className="w-full"
      // Opaque equivalent of the beige wash (over white) — matches the other
      // homepage sections; straight edge (no rounded seam) per design feedback.
      style={{ backgroundColor: "rgb(224, 217, 211)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 pt-24 pb-14 lg:pt-28">
        <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="fast-eyebrow mb-3">{eyebrow}</p>
            <h2
              style={{
                fontSize: "clamp(28px, 2.8vw, 37px)",
                lineHeight: "1.3",
                letterSpacing: "-1px",
                fontWeight: 500,
                color: "rgb(61,61,61)",
              }}
            >
              {headingLines.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </Reveal>
      </div>

      <HandwerkTopics tabs={tabs} />
    </section>
  );
}
