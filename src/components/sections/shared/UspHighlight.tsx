import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

interface UspHighlightProps {
  eyebrow?: string;
  heading: string;
  body: string;
  /** Optional proof figure, e.g. { value: "4.000+", label: "realisierte Projekte" }. */
  stat?: { value: string; label: string };
  image: string;
  imageAlt: string;
  /** Place the image on the left instead of the right. */
  imageLeft?: boolean;
}

/**
 * Single-USP proof block: one strong claim + a short proof paragraph + an
 * optional stat badge, beside a supporting photo. Use to lift one concrete,
 * provable differentiator out of a dense paragraph into its own airy section.
 */
export function UspHighlight({
  eyebrow,
  heading,
  body,
  stat,
  image,
  imageAlt,
  imageLeft = false,
}: UspHighlightProps) {
  return (
    <section
      className="py-12 lg:py-[84px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Image */}
          <div className={cn("relative h-[280px] w-full md:h-[380px] lg:h-[480px]", imageLeft ? "lg:order-1" : "lg:order-2")}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <Reveal className={imageLeft ? "lg:order-2" : "lg:order-1"}>
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
            <p
              className="mt-5 text-[16px] leading-[28px]"
              style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
            >
              {body}
            </p>

            {stat && (
              <div className="mt-8 flex items-center gap-4">
                <span
                  className="text-[45px] font-medium leading-[1]"
                  style={{ color: "rgb(237,168,33)", fontWeight: 500 }}
                >
                  {stat.value}
                </span>
                <span
                  className="max-w-[260px] text-[14px] leading-[20px]"
                  style={{ color: "rgb(61,61,61)", fontWeight: 500 }}
                >
                  {stat.label}
                </span>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
