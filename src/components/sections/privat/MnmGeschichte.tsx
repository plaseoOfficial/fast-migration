import Image from "next/image";

interface Stat {
  value: string;
  label: string;
}

interface MnmGeschichteProps {
  heading: string;
  subheading: string;
  anchorImage: string;
  anchorImageAlt: string;
  stats: Stat[];
  paragraphs: string[];
}

export function MnmGeschichte({
  heading,
  subheading,
  anchorImage,
  anchorImageAlt,
  stats,
  paragraphs,
}: MnmGeschichteProps) {
  return (
    <section
      className="py-12 lg:py-[84px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">

        {/* Eyebrow + Heading */}
        <div className="mb-8 lg:mb-10">
          <p
            className="uppercase"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "2px",
              color: "rgb(61,61,61)",
            }}
          >
            {subheading}
          </p>
          <h2
            className="mt-3 text-[28px] leading-[1.15] sm:text-[38px] sm:leading-[1.05] lg:text-[65px] lg:leading-[65px] font-medium tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] max-lg:break-words max-lg:hyphens-auto"
            lang="de"
            style={{ color: "rgb(61,61,61)" }}
          >
            {heading}
          </h2>
        </div>

        {/* Anchor photo — full container width */}
        <div className="relative w-full h-[240px] sm:h-[360px] lg:h-[480px] overflow-hidden">
          <Image
            src={anchorImage}
            alt={anchorImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1224px"
          />
        </div>

        {/* Stats strip */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 py-8 lg:py-10 gap-y-8 border-b"
          style={{ borderColor: "rgba(61,61,61,0.15)" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="text-[37px] lg:text-[45px] leading-none font-medium tracking-[-1px]"
                style={{ color: "rgb(61,61,61)" }}
              >
                {stat.value}
              </span>
              <span
                className="mt-2 uppercase text-[12px] font-medium"
                style={{ letterSpacing: "2px", color: "rgb(102,102,102)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Story text — 2 columns, odd paragraphs left, even right */}
        <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col gap-5">
            {paragraphs.filter((_, i) => i % 2 === 0).map((para) => (
              <p
                key={para.slice(0, 30)}
                className="text-[16px] leading-[28px] font-medium"
                style={{ color: "rgb(102,102,102)" }}
              >
                {para}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {paragraphs.filter((_, i) => i % 2 === 1).map((para) => (
              <p
                key={para.slice(0, 30)}
                className="text-[16px] leading-[28px] font-medium"
                style={{ color: "rgb(102,102,102)" }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
