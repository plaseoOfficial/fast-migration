import Image from "next/image";
import { cn } from "@/lib/utils";

interface MnmProcessProps {
  heading: string;
  paragraph: string;
  paragraphStrong: string;
  image: string;
  imageAlt: string;
}

export function MnmProcess({ heading, paragraph, paragraphStrong, image, imageAlt }: MnmProcessProps) {
  return (
    <section
      className="py-12 lg:py-[46px] lg:pb-14"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left column */}
          <div>
            {/* Heading */}
            <h2
              className={cn(
                "text-[34px] leading-[1.05] font-medium",
                "lg:text-[59px] lg:leading-[59px]"
              )}
              style={{
                color: "rgb(23,33,33)",
                letterSpacing: "-4px",
                fontWeight: 500,
              }}
            >
              {heading}
            </h2>

            {/* Paragraph */}
            <p
              className="mt-5 text-[16px] leading-[28px]"
              style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
            >
              {paragraph}{" "}
              <strong style={{ color: "rgb(23,33,33)", fontWeight: 700 }}>{paragraphStrong}</strong>
            </p>

            {/* Decorative dots */}
            <div className="mt-6 flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: "rgb(237,168,33)" }}
              />
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: "rgb(237,168,33)" }}
              />
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: "rgb(237,168,33)" }}
              />
            </div>
          </div>

          {/* Right column — image */}
          <div className="w-full">
            <Image
              src={image}
              alt={imageAlt}
              width={560}
              height={420}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
