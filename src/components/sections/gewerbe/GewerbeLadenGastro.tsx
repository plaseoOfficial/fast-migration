import Image from "next/image";
import { cn } from "@/lib/utils";

function YellowDots() {
  return (
    <div className="mt-6 flex items-center gap-2">
      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgb(237,168,33)" }} />
      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgb(237,168,33)" }} />
      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgb(237,168,33)" }} />
    </div>
  );
}

interface GewerbeLadenGastroProps {
  ladenHeading: string;
  ladenParagraphs: string[];
  ladenImage: string;
  ladenImageAlt: string;
  mosaic: { src: string; alt: string }[];
  gastroHeading: string;
  gastroIntroLead: string;
  gastroIntroBold1: string;
  gastroIntroMid: string;
  gastroBody2Before: string;
  gastroBody2Bold: string;
  gastroBody2After: string;
  gastroBody3: string;
}

export function GewerbeLadenGastro({
  ladenHeading,
  ladenParagraphs,
  ladenImage,
  ladenImageAlt,
  mosaic,
  gastroHeading,
  gastroIntroLead,
  gastroIntroBold1,
  gastroIntroMid,
  gastroBody2Before,
  gastroBody2Bold,
  gastroBody2After,
  gastroBody3,
}: GewerbeLadenGastroProps) {
  return (
    <section
      className="py-10 lg:py-[46px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">

        {/* ── Row 1: Ladeneinrichtung text + big image ── */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left: heading, paragraphs, dots */}
          <div>
            <h2
              className={cn(
                "text-[32px] leading-[1.05] font-medium tracking-[-1.5px]",
                "lg:text-[59px] lg:leading-[59px] lg:tracking-[-4px]"
              )}
              style={{ color: "rgb(23,33,33)", fontWeight: 500 }}
            >
              {ladenHeading}
            </h2>

            {ladenParagraphs.map((text, index) => (
              <p
                key={index}
                className="mt-5 text-[16px] leading-[28px]"
                style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
              >
                {text}
              </p>
            ))}

            <YellowDots />
          </div>

          {/* Right: big image */}
          <div className="relative h-[260px] w-full lg:h-[330px]">
            <Image
              src={ladenImage}
              alt={ladenImageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ── Row 2: 3-image masonry + Gastro text ── */}
        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:mt-[40px] lg:grid-cols-2 lg:gap-16">

          {/* Left: three-column image mosaic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {mosaic.map((img, index) => (
              <div key={index} className="relative h-[160px] w-full lg:h-[200px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right: Gastro heading, paragraphs, dots */}
          <div>
            <h2
              className={cn(
                "text-[32px] leading-[1.05] font-medium tracking-[-1.5px]",
                "lg:text-[64px] lg:leading-[64px] lg:tracking-[-4px]"
              )}
              style={{ color: "rgb(23,33,33)", fontWeight: 500 }}
            >
              {gastroHeading}
            </h2>

            <p
              className="mt-4 text-[16px] leading-[28px]"
              style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
            >
              {gastroIntroLead}{" "}
              <strong style={{ color: "rgb(23,33,33)", fontWeight: 700 }}>
                {gastroIntroBold1}
              </strong>
              {gastroIntroMid}
            </p>

            <p
              className="mt-4 text-[16px] leading-[28px]"
              style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
            >
              {gastroBody2Before}{" "}
              <strong style={{ color: "rgb(23,33,33)", fontWeight: 700 }}>
                {gastroBody2Bold}
              </strong>{" "}
              {gastroBody2After}
            </p>

            <p
              className="mt-4 text-[16px] leading-[28px]"
              style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
            >
              {gastroBody3}
            </p>

            <YellowDots />
          </div>
        </div>

      </div>
    </section>
  );
}
