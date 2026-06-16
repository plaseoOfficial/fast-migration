import Image from "next/image";

interface HeroSectionProps {
  bgImage: string;
  title: string;
  intro: string;
  body: string;
}

export function HeroSection({ bgImage, title, intro, body }: HeroSectionProps) {
  return (
    <section
      data-hero
      className="relative w-full overflow-hidden"
      style={{
        height: "min(805px, 100vh)",
        minHeight: 640,
      }}
    >
      {/* The hero photo is the mobile LCP element. It's rendered with next/image
          (priority) instead of a CSS background-image so it's served as a
          responsive, device-sized AVIF/WebP and preloaded with fetchpriority
          high — the original full-size "-scaled.jpg" (≈800 KiB) was pushing LCP
          past 6 s on phones.

          The image sits on an absolutely-positioned child layer, not on the
          <section> itself. A position:fixed element (the header) sitting over a
          section that carries its own background triggers a Chrome compositing
          bug where the header's background stops repainting on scroll (the bar
          shows up see-through). Painting on a child avoids that. The light top
          fade is kept as a gradient overlay on top of the image. */}
      <div aria-hidden className="absolute inset-0 fast-fade">
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgb(243,243,243) 0%, rgba(255,255,255,0) 23%)",
          }}
        />
      </div>
      {/* Centered massive title — Poppins 144px 500 −10px */}
      <h1
        className="absolute left-0 right-0 select-none text-center fast-rise"
        style={{
          top: "38%",
          animationDelay: "0.15s",
          // Floor lowered (56→36px) and nowrap dropped so the title wraps instead of
          // clipping on phones. Slope (11vw) and 144px max are unchanged, so desktop
          // (≥~1309px viewport, where the 144px cap already applies) renders identically.
          fontSize: "clamp(36px, 11vw, 144px)",
          lineHeight: 1,
          letterSpacing: "clamp(-2px, -0.7vw, -10px)",
          fontWeight: 500,
          color: "rgb(243,243,243)",
        }}
      >
        {title}
      </h1>

      {/* Bottom-left white paragraphs — Poppins 18px 500 lh 28.8 */}
      <div className="absolute left-0 right-0 bottom-[12%]">
        <div className="mx-auto max-w-[1440px] px-6 lg:pl-[174px] lg:pr-[72px]">
          <div className="max-w-[530px] fast-rise" style={{ animationDelay: "0.35s" }}>
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
