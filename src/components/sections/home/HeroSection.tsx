interface HeroSectionProps {
  bgImage: string;
  title: string;
  intro: string;
  body: string;
}

export function HeroSection({ bgImage, title, intro, body }: HeroSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: "min(805px, 100vh)",
        minHeight: 640,
        backgroundImage: `linear-gradient(rgb(243,243,243) 0%, rgba(255,255,255,0) 23%), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Centered massive title — Poppins 144px 500 −10px */}
      <h1
        className="absolute left-0 right-0 select-none text-center whitespace-nowrap"
        style={{
          top: "38%",
          fontSize: "clamp(56px, 11vw, 144px)",
          lineHeight: 1,
          letterSpacing: "clamp(-3px, -0.7vw, -10px)",
          fontWeight: 500,
          color: "rgb(243,243,243)",
        }}
      >
        {title}
      </h1>

      {/* Bottom-left white paragraphs — Poppins 18px 500 lh 28.8 */}
      <div className="absolute left-0 right-0 bottom-[12%]">
        <div className="mx-auto max-w-[1440px] px-6 lg:pl-[174px] lg:pr-[72px]">
          <div className="max-w-[530px]">
            <p
              className="mb-4 text-white"
              style={{
                fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
                fontSize: 18,
                fontWeight: 500,
                lineHeight: "28.8px",
              }}
            >
              {intro}
            </p>
            <p
              className="text-white"
              style={{
                fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
                fontSize: 18,
                fontWeight: 500,
                lineHeight: "28.8px",
              }}
            >
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
