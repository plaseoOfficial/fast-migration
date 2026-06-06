interface BueroVergleichProps {
  heading: string;
  intro: string;
  items: string[];
  kantenText: string;
  /** unused props from content spread — kept for type compatibility */
  image?: string;
  imageAlt?: string;
}

export function BueroVergleich({ heading, intro, items, kantenText }: BueroVergleichProps) {
  return (
    <section
      className="py-12 lg:py-[84px]"
      style={{
        backgroundColor: "rgb(61,61,61)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-5 sm:px-6 lg:px-8">

        {/* Row 1: heading left / intro right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
          <h2
            className="text-[28px] leading-[1.15] sm:text-[34px] sm:leading-[1.05] lg:text-[65px] lg:leading-[65px] font-medium tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px]"
            style={{ color: "#ffffff" }}
          >
            {heading}
          </h2>
          <div className="flex flex-col justify-end">
            <p
              className="text-[16px] leading-[1.7] font-medium"
              style={{ color: "rgba(220,220,220,0.85)" }}
            >
              {intro}
            </p>
          </div>
        </div>

        {/* Row 2: 4 advantage columns */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.30)" }}
        >
          {items.map((item, i) => {
            const parts = item.split(" — ");
            const title = parts[0];
            const detail = parts.slice(1).join(" — ");
            return (
              <div
                key={i}
                className={`py-6 lg:py-8 pr-6 lg:pr-8 flex flex-col gap-3 border-b sm:border-b-0 lg:border-r${i > 0 ? " pl-6 lg:pl-8" : ""}`}
                style={{ borderColor: "rgba(255,255,255,0.30)" }}
              >
                <span
                  className="text-[22px] font-medium leading-[1]"
                  style={{ color: "rgb(237,168,33)" }}
                >
                  0{i + 1}
                </span>
                <p
                  className="text-[16px] leading-[1.7] font-medium"
                  style={{ color: "#ffffff" }}
                >
                  {title}
                </p>
                {detail && (
                  <p
                    className="text-[14px] leading-[1.7] font-medium"
                    style={{ color: "rgba(220,220,220,0.85)" }}
                  >
                    {detail}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote: PU-Kante */}
        <p
          className="mt-8 lg:mt-10 text-[12px] leading-[1.7] font-medium max-w-[640px]"
          style={{ color: "rgba(220,220,220,0.85)" }}
        >
          {kantenText}
        </p>

      </div>
    </section>
  );
}
