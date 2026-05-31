import { PARALLAX_BG } from "@/lib/content";

export function ParallaxQuote() {
  return (
    <section
      className="relative w-full fast-parallax-bg"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(23,33,33,0.46) 0%, rgba(33,33,33,0.66) 57%), url(${PARALLAX_BG})`,
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
          Qualität, die man nicht erklären muss
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
          Echtholz, Furnier oder lackierte Front – das Material entscheidet nicht nur über den
          Look, sondern über die Lebensdauer. Wir setzen auf langlebige Materialien, hochwertige
          Beschläge und eine Verarbeitung, die man spürt, sobald man eine Schublade öffnet.
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
          Viele unserer Kunden kommen Jahre später wieder – nicht, um zu reklamieren. Sondern
          weil sie sagen: „Das waren die besten Möbel, die wir je hatten.&ldquo;
        </h4>
      </div>
    </section>
  );
}
