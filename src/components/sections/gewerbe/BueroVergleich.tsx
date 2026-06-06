import Image from "next/image";

interface BueroVergleichProps {
  heading: string;
  intro: string;
  items: string[];
  image: string;
  imageAlt: string;
  kantenText: string;
}

export function BueroVergleich({ heading, intro, items, image, imageAlt, kantenText }: BueroVergleichProps) {
  return (
    <section
      className="py-12 lg:py-[84px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: text */}
          <div className="flex flex-col">
            <h2
              className="text-[28px] leading-[1.15] sm:text-[34px] sm:leading-[1.05] lg:text-[65px] lg:leading-[65px] font-medium tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px]"
              style={{ color: "rgb(61,61,61)" }}
            >
              {heading}
            </h2>

            <p
              className="mt-5 text-[16px] leading-[28px] font-medium"
              style={{ color: "rgb(102,102,102)" }}
            >
              {intro}
            </p>

            {/* Feature list */}
            <ul className="mt-8 flex flex-col">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start py-4 border-t"
                  style={{ borderColor: "rgba(0,0,0,0.10)" }}
                >
                  <span
                    className="text-[16px] font-bold shrink-0 mt-px leading-[1.5]"
                    style={{ color: "rgb(237,168,33)" }}
                  >
                    —
                  </span>
                  <span
                    className="text-[15px] leading-[25px] font-medium"
                    style={{ color: "rgb(61,61,61)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* PU-Kante note */}
            <p
              className="mt-8 text-[14px] leading-[1.7] font-medium"
              style={{ color: "rgb(102,102,102)" }}
            >
              {kantenText}
            </p>

            {/* Decorative dots */}
            <div className="flex gap-2 mt-6">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgb(237,168,33)" }} />
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgb(237,168,33)" }} />
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgb(237,168,33)" }} />
            </div>
          </div>

          {/* Right: image */}
          <div className="w-full">
            <Image
              src={image}
              alt={imageAlt}
              width={600}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
