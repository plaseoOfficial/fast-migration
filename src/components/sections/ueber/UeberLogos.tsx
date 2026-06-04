import Image from "next/image";

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
      <div className="mx-auto w-full max-w-[1350px] px-6 py-10 lg:py-12">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-20">
          {logos.map((logo) => (
            <div key={logo.src} className="relative h-12 w-[140px] lg:h-14 lg:w-[160px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
