interface ParallaxQuoteProps {
  bgImage: string;
  heading: string;
  body: string;
  quote: string;
}

export function ParallaxQuote({ bgImage, heading, body, quote }: ParallaxQuoteProps) {
  return (
    <section
      className="relative w-full fast-parallax-bg"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(23,33,33,0.46) 0%, rgba(33,33,33,0.66) 57%), url(${bgImage})`,
      }}
    >
      <div className="mx-auto max-w-[1100px] px-6 py-28 lg:py-36 text-center">
        <h2
          className="mb-8 text-white"
          style={{
            fontSize: "clamp(24px, 2.6vw, 32px)",
            lineHeight: 1,
            letterSpacing: "-1px",
            fontWeight: 500,
          }}
        >
          {heading}
        </h2>
        <p
          className="mb-10 mx-auto max-w-[820px] text-white/90"
          style={{
            fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
            fontSize: 15,
            fontWeight: 500,
            lineHeight: "22.5px",
          }}
        >
          {body}
        </p>
        <h4
          className="italic text-white/95 mx-auto max-w-[820px]"
          style={{
            fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
            fontSize: 22,
            fontWeight: 500,
            lineHeight: "28.6px",
          }}
        >
          {quote}
        </h4>
      </div>
    </section>
  );
}
