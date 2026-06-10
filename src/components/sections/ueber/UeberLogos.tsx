import Image from "next/image";
import { Reveal } from "@/components/Reveal";

interface LogoItem {
  src: string;
  alt: string;
}

interface UeberLogosProps {
  logos: LogoItem[];
}

const BEIGE = "rgba(203,191,181,0.59)";

export function UeberLogos({ logos }: UeberLogosProps) {
  return (
    <section className="w-full" style={{ backgroundColor: BEIGE }}>
      {/* Compact logo strip: 32/56px band (spacing steps), tighter than the
          84/48px full-section padding by design. */}
      <div className="mx-auto w-full max-w-[1280px] px-6 py-[32px] lg:py-[56px]">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-20">
          {logos.map((logo, i) => (
            <Reveal
              key={logo.src}
              delay={i * 60}
              y={0}
              className="relative h-12 w-[140px] lg:h-14 lg:w-[160px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="160px"
                className="object-contain"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
