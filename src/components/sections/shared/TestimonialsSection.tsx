import Image from "next/image";
import { StarIcon } from "@/components/icons";

interface TestimonialsSectionProps {
  eyebrow?: string;
  heading: string;
}

interface Testimonial {
  avatar: string;
  rating: number;
  quote: string;
  readMore: boolean;
  name: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    avatar: "/images/2026/03/unnamed-2.png",
    rating: 5,
    quote: "Heftiger Laden!",
    readMore: false,
    name: "Fynn Sudermann",
  },
  {
    avatar: "/images/2026/03/unnamed-1.png",
    rating: 5,
    quote: "Klasse Team, hervorragende Arbeit. Kann ich nur jedem empfehlen, der eine individuelle…",
    readMore: true,
    name: "Thorsten Feldhaus",
  },
  {
    avatar: "/images/testimonial-avatar.png",
    rating: 5,
    quote:
      "Wir haben vor einem Jahr Möbel für unsere Büroräume anfertigen lassen und sind vollkommen zufrieden…",
    readMore: true,
    name: "Martin K",
  },
];

export function TestimonialsSection({
  eyebrow = "Sind Sie glücklich, sind wir es auch",
  heading,
}: TestimonialsSectionProps) {
  return (
    <section
      className="py-14 lg:py-[64px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <p
            style={{
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgb(61,61,61)",
            }}
          >
            {eyebrow}
          </p>
          <h2
            className="mt-3 text-[34px] leading-[1.05] lg:text-[65px] lg:leading-[65px]"
            style={{
              fontWeight: 500,
              letterSpacing: "-2px",
              color: "rgb(0,0,0)",
              marginBottom: "48px",
            }}
          >
            {heading}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center text-center p-8 md:p-[50px] md:px-10"
              style={{
                backgroundColor: "rgb(250,250,250)",
              }}
            >
              {/* Avatar */}
              <div className="h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover"
                />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-[2px]" style={{ marginTop: "20px" }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-5 w-5"
                    style={{ color: "rgb(237,168,33)" }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "23.8px",
                  fontWeight: 500,
                  color: "rgb(102,102,102)",
                  marginTop: "16px",
                }}
              >
                {t.quote}
              </p>

              {/* Read More */}
              {t.readMore && (
                <a
                  href="#"
                  style={{
                    fontSize: "16px",
                    color: "rgb(117,117,117)",
                    textDecoration: "underline",
                    marginTop: "4px",
                  }}
                >
                  Mehr lesen
                </a>
              )}

              {/* Name */}
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "rgb(0,0,0)",
                  marginTop: "16px",
                }}
              >
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
