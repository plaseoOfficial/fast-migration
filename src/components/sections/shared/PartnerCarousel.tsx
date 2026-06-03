import Image from "next/image";

const logos: { src: string; alt: string }[] = [
  { src: "/images/2026/01/logo.png", alt: "Partner" },
  { src: "/images/2026/01/3838_1702_1_m.jpg", alt: "Partner" },
  { src: "/images/2026/01/cropped-2025-01-15-Logo-WP-StB-scaled-1.jpg", alt: "Steuerberater" },
  { src: "/images/2026/01/monolith-logo.png", alt: "Monolith" },
  { src: "/images/2026/01/lcm-schokoladenmaschinen.svg", alt: "LCM Schokoladenmaschinen" },
  { src: "/images/2026/01/icon07_1.png", alt: "Partner" },
  { src: "/images/2026/01/aufbaugemeinschaft-espelkamp-logo-75-jahre-2048x959-1.png", alt: "Aufbaugemeinschaft Espelkamp" },
  { src: "/images/2026/01/Hell-Blitz-Logo-200px.png.webp", alt: "Hell Blitz" },
  { src: "/images/2026/01/logo-polipol-relaunch.svg", alt: "Polipol" },
  { src: "/images/2026/01/CMC-Logo-100x50-1-2048x962-1.webp", alt: "CMC Engineering" },
  { src: "/images/2026/01/das-mauerwerk_logo.svg", alt: "Das Mauerwerk" },
  { src: "/images/2026/01/logo-elithera-e1724308171765.png", alt: "Elithera" },
  { src: "/images/2026/01/Enderweit-Partner.svg", alt: "Enderweit Partner" },
];

function LogoList() {
  return (
    <>
      {logos.map((logo, i) => (
        <div
          key={i}
          className="flex shrink-0 items-center px-8 lg:px-12"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={48}
            className="h-12 w-auto object-contain opacity-90"
          />
        </div>
      ))}
    </>
  );
}

export function PartnerCarousel() {
  return (
    <section
      className="overflow-hidden py-10 lg:py-12"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="fast-marquee overflow-hidden">
        <div className="fast-marquee-track flex items-center">
          <LogoList />
          <LogoList />
        </div>
      </div>
    </section>
  );
}
