import Image from "next/image";
import Link from "next/link";

interface DarkCardData {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const DARK_CARDS: DarkCardData[] = [
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Möbel nach Maß",
    description:
      "Jedes Stück ein Unikat. Ob Küche, Bad oder Wohnraum: Wir fertigen passgenaue Möbel, die sich exakt nach Ihrem Stil, Ihrem Alltag und Ihrem Raum richten.",
    href: "/leistungen/moebel-nach-mass/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-22.svg",
    title: "Raumkonzepte",
    description:
      "Wir denken Räume ganzheitlich. Durchdachte Konzepte verbinden Architektur, Licht, Materialien und Möbel zu einer harmonischen Einheit – vom ersten Entwurf bis zur Montage.",
    href: "/leistungen/raumkonzepte/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-07.svg",
    title: "Fertigung",
    description:
      "Moderne Homag-Technik, präzise CNC-Verarbeitung und handwerkliche Qualitätskontrolle sorgen dafür, dass jedes Bauteil exakt passt. Von Einzelmöbeln bis zu kompletten Objekten.",
    href: "#",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-08.svg",
    title: "Objekt- & Gewerbeeinrichtung",
    description:
      "Für Hotels, Büros oder Ladengeschäfte entwickeln wir langlebige Möbelkonzepte, die Design und Funktion vereinen. Robust, zeitlos und auf das Nutzungskonzept abgestimmt.",
    href: "/leistungen/gewerbeeinrichtung/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-09.svg",
    title: "Montage",
    description:
      "Unsere Monteure arbeiten sauber, termingerecht und millimetergenau. Die finale Passung wird vor Ort abgestimmt – bis jedes Detail sitzt.",
    href: "#",
  },
];

export function MnmWeitereLeistungen() {
  return (
    <section
      className="py-16 lg:py-[72px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p
            style={{
              fontSize: "14px",
              lineHeight: "23.8px",
              fontWeight: 500,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgb(61,61,61)",
            }}
          >
            LEISTEN? IMMER 100% – WIR FERTIGEN SIE ABER AUCH
          </p>
          <h2
            className="mx-auto mt-4 text-[38px] leading-[1.05] lg:text-[80px] lg:leading-[80px]"
            style={{
              fontWeight: 500,
              letterSpacing: "-2px",
              color: "rgb(61,61,61)",
              maxWidth: "900px",
            }}
          >
            Weitere Leistungen von Fast Systemmöbel
          </h2>
        </div>

        {/* Cards grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Dark cards */}
          {DARK_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col"
              style={{
                backgroundColor: "rgb(45,45,45)",
                padding: "40px",
                minHeight: "430px",
              }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={60}
                  height={60}
                />
              </div>

              {/* Title */}
              <h3
                className="mt-6"
                style={{
                  fontSize: "25px",
                  lineHeight: "25px",
                  fontWeight: 500,
                  color: "rgb(255,255,255)",
                }}
              >
                {card.title}
              </h3>

              {/* Spacer pushes description to bottom */}
              <div className="flex-1" />

              {/* Description */}
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "31.5px",
                  fontWeight: 500,
                  color: "rgb(243,243,243)",
                  marginTop: "auto",
                }}
              >
                {card.description}
              </p>

              {/* Link */}
              <Link
                href={card.href}
                className="mt-4 inline-block transition-colors hover:text-[rgb(237,168,33)]"
                style={{
                  fontSize: "14px",
                  lineHeight: "23.8px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "rgb(243,243,243)",
                }}
              >
                Mehr Infos hier
              </Link>
            </div>
          ))}

          {/* White "&" card (cell 6) */}
          <div
            className="flex flex-col"
            style={{
              backgroundColor: "rgb(255,255,255)",
              padding: "40px",
              minHeight: "430px",
            }}
          >
            {/* Big ampersand */}
            <div
              className="flex-shrink-0 text-[120px] leading-[0.9] lg:text-[200px]"
              style={{
                fontWeight: 500,
                color: "rgb(0,0,0)",
                fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
              }}
            >
              &amp;
            </div>

            {/* Paragraph pushed to bottom */}
            <p
              className="mt-auto"
              style={{
                fontSize: "18px",
                lineHeight: "31.5px",
                fontWeight: 500,
                color: "rgb(23,33,33)",
              }}
            >
              Jedes Projekt entsteht bei uns aus Erfahrung, Planungssicherheit
              und moderner Fertigung. Ob Einzelstück oder kompletter Innenausbau
              – Sie profitieren von Lösungen, die langfristig tragen und
              handwerklich sauber umgesetzt sind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
