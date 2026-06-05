import Image from "next/image";

interface UeberFallbeispielProps {
  eyebrow: string;
  heading: string;
  image: string;
  imageAlt: string;
  quote: string;
}

const BEIGE = "rgba(203,191,181,0.59)";
const PANEL = "rgb(247,244,240)";

function QuoteMark() {
  return (
    <svg width="44" height="36" viewBox="0 0 44 36" fill="rgb(23,33,33)" aria-hidden="true">
      <path d="M0 36V19.8C0 8.9 6.1 1.7 17.3 0L19.3 4.9C12.9 6.7 9.8 10.3 9.5 14.9H18V36H0Zm26 0V19.8C26 8.9 32.1 1.7 43.3 0L45.3 4.9C38.9 6.7 35.8 10.3 35.5 14.9H44V36H26Z" />
    </svg>
  );
}

export function UeberFallbeispiel({
  eyebrow,
  heading,
  image,
  imageAlt,
  quote,
}: UeberFallbeispielProps) {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: BEIGE,
        fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1350px] px-6 py-16 lg:px-10 lg:py-20">
        {/* Eyebrow */}
        <p
          className="text-center font-bold uppercase"
          style={{ fontSize: "14px", letterSpacing: "2px", color: "rgb(61,61,61)" }}
        >
          {eyebrow}
        </p>

        {/* Heading */}
        <h2
          className="mx-auto mt-6 max-w-[1100px] text-center font-medium"
          style={{
            fontSize: "clamp(40px, 7vw, 100px)",
            lineHeight: "1",
            letterSpacing: "-5px",
            color: "rgb(61,61,61)",
          }}
        >
          {heading}
        </h2>

        {/* Image + quote */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:mt-16">
          <div className="relative aspect-[3/4] w-full overflow-hidden md:aspect-auto md:min-h-[420px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div
            className="flex flex-col justify-center p-8 lg:p-14"
            style={{ backgroundColor: PANEL }}
          >
            <QuoteMark />
            <p
              className="mt-8 font-medium"
              style={{ fontSize: "clamp(20px, 2vw, 26px)", lineHeight: "1.4", color: "rgb(23,33,33)" }}
            >
              {quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
