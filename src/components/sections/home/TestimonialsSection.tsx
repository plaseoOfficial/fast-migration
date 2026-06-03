import Image from "next/image";
import type { PartnerLogo, Testimonial } from "@/types";
import { StarIcon } from "@/components/icons";

interface TestimonialsSectionProps {
  heading: string;
  testimonial: Testimonial;
  logos: PartnerLogo[];
}

export function TestimonialsSection({ heading, testimonial, logos }: TestimonialsSectionProps) {
  const stars = Array.from({ length: testimonial.rating });
  const looped = [...logos, ...logos];

  return (
    <section
      className="fast-section w-full"
      style={{ backgroundColor: "rgba(203, 191, 181, 0.59)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <h2
          className="mb-12 text-center"
          style={{
            fontSize: "clamp(56px, 9vw, 120px)",
            lineHeight: 1,
            letterSpacing: "-5px",
            fontWeight: 500,
            color: "rgb(61,61,61)",
          }}
        >
          {heading}
        </h2>

        <div className="mx-auto max-w-[820px] bg-white rounded-md shadow-sm p-8 lg:p-12 mb-16">
          <div className="flex items-start gap-6">
            <div className="relative flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20">
              <Image
                src={testimonial.logo}
                alt={testimonial.org}
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div
                className="flex items-center gap-1 mb-3"
                style={{ color: "rgb(237,168,33)" }}
              >
                {stars.map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
                <span
                  className="ml-2 fast-body-sm"
                  style={{ fontSize: 12, color: "rgb(102,102,102)" }}
                >
                  ({testimonial.rating}/5)
                </span>
              </div>
              <p
                className="mb-4 fast-body-sm"
                style={{ fontSize: 16, lineHeight: "27.2px", color: "rgb(61,61,61)" }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
                    fontSize: 18,
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "rgb(61,61,61)",
                  }}
                >
                  {testimonial.org}
                </h4>
                <p className="fast-body-sm mt-1">{testimonial.name}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fast-marquee relative w-full overflow-hidden">
          <div className="fast-marquee-track gap-12 lg:gap-16 items-center">
            {looped.map((logo, i) => (
              <div
                key={`${logo.src}-${i}`}
                className="relative flex-shrink-0 h-14 w-32 lg:h-16 lg:w-40 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="160px"
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
