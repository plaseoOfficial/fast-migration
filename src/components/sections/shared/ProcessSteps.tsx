import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  eyebrow?: string;
  heading: string;
  image: string;
  imageAlt: string;
  steps: ProcessStep[];
  /** Optional small note below the steps, e.g. a scope clarification. */
  note?: string;
  /**
   * Drop the steps column down on desktop so step 01 lines up with the heading
   * rather than the eyebrow. Default false (keeps existing pages byte-identical).
   */
  offsetSteps?: boolean;
}

/**
 * Numbered process steps: heading + image on the left, a vertical list of
 * numbered steps on the right. Breaks a dense "how it works" paragraph into
 * scannable, single-sentence steps. Generalised from the Möbelplaner — Schritte
 * pattern; props-driven and reusable across service pages.
 */
export function ProcessSteps({
  eyebrow,
  heading,
  image,
  imageAlt,
  steps,
  note,
  offsetSteps = false,
}: ProcessStepsProps) {
  return (
    <section
      className="py-12 lg:py-[84px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: Eyebrow + Heading + Image */}
          <div>
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
              className={cn(
                "text-[34px] leading-[1.05] font-medium tracking-[-1.5px]",
                "lg:text-[59px] lg:leading-[59px] lg:tracking-[-2px]"
              )}
              style={{ color: "rgb(61,61,61)", fontWeight: 500 }}
            >
              {heading}
            </h2>

            <Reveal className="relative mt-8 h-[240px] w-full sm:h-[280px] md:h-[340px] lg:h-[460px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
          </div>

          {/* Right: numbered steps */}
          <div className={cn("flex flex-col", offsetSteps && "lg:mt-16")}>
            {steps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 90}
                className={cn(
                  "flex gap-5 py-6",
                  index !== 0 && "border-t border-black/10"
                )}
              >
                <span
                  className="shrink-0 text-[22px] font-medium leading-[1] tabular-nums"
                  style={{ color: "rgb(237,168,33)", fontWeight: 500 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="text-[22px] font-medium leading-[1.3]"
                    style={{ color: "rgb(61,61,61)", fontWeight: 500 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-2 text-[14px] font-medium leading-[23.8px]"
                    style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
                  >
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}

            {note && (
              <p
                className="mt-4 text-[14px] leading-[22px]"
                style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
              >
                {note}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
