import Image from "next/image";
import Link from "next/link";
import type { ServiceCard } from "@/types/mnm";
import { Reveal } from "@/components/Reveal";

const DEFAULT_CARDS: ServiceCard[] = [
  {
    icon: "/images/2024/03/interior-design-white-icons-15.svg",
    title: "Möbel nach Maß",
    description:
      "Jedes Stück ein Unikat. Ob Küche, Bad oder Wohnraum: Wir fertigen passgenaue Möbel, die sich exakt nach Ihrem Stil, Ihrem Alltag und Ihrem Raum richten.",
    href: "/moebel-nach-mass/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-22.svg",
    title: "Raumkonzepte",
    description:
      "Wir denken Räume ganzheitlich. Durchdachte Konzepte verbinden Architektur, Licht, Materialien und Möbel zu einer harmonischen Einheit – vom ersten Entwurf bis zur Montage.",
    href: "#",
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
    href: "/gewerbe/",
  },
  {
    icon: "/images/2024/03/interior-design-white-icons-09.svg",
    title: "Montage",
    description:
      "Unsere Monteure arbeiten sauber, termingerecht und millimetergenau. Die finale Passung wird vor Ort abgestimmt – bis jedes Detail sitzt.",
    href: "#",
  },
];

const DEFAULT_AMPERSAND_TEXT =
  "Jedes Projekt entsteht bei uns aus Erfahrung, Planungssicherheit und moderner Fertigung. Ob Einzelstück oder kompletter Innenausbau – Sie profitieren von Lösungen, die langfristig tragen und handwerklich sauber umgesetzt sind.";

interface MnmWeitereLeistungenProps {
  eyebrow?: string;
  heading?: string;
  /** Defaults to the canonical Fast service cards (also used by the gewerbe page). */
  cards?: ServiceCard[];
  ampersandText?: string;
  moreLabel?: string;
}

export function MnmWeitereLeistungen({
  eyebrow = "LEISTEN? IMMER 100% – WIR FERTIGEN SIE ABER AUCH",
  heading = "Weitere Leistungen von Fast Systemmöbel",
  cards = DEFAULT_CARDS,
  ampersandText = DEFAULT_AMPERSAND_TEXT,
  moreLabel = "Mehr Infos hier",
}: MnmWeitereLeistungenProps) {
  return (
    <section
      className="py-12 lg:py-[84px]"
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
            {eyebrow}
          </p>
          <h2
            className="mx-auto mt-4 text-[28px] leading-[1.15] sm:text-[38px] sm:leading-[1.05] lg:text-[84px] lg:leading-[84px] tracking-[-1px] sm:tracking-[-2px] max-lg:break-words max-lg:hyphens-auto"
            style={{
              fontWeight: 500,
              color: "rgb(61,61,61)",
              maxWidth: "900px",
            }}
          >
            {heading}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Dark cards */}
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 80}
              className="flex flex-col lg:min-h-[430px]"
              style={{
                backgroundColor: "rgb(61,61,61)",
                padding: "40px",
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
                className="mt-6 max-lg:break-words max-lg:hyphens-auto"
                lang="de"
                style={{
                  fontSize: "22px",
                  lineHeight: "22px",
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

              {/* Link (only when the card has a real target) */}
              {card.href && (
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
                  {moreLabel}
                </Link>
              )}
            </Reveal>
          ))}

          {/* White "&" card (cell 6) */}
          <Reveal
            delay={cards.length * 80}
            className="flex flex-col lg:min-h-[430px]"
            style={{
              backgroundColor: "rgb(255,255,255)",
              padding: "40px",
            }}
          >
            {/* Big ampersand */}
            <div
              className="flex-shrink-0 text-[60px] sm:text-[120px] leading-[0.9] lg:text-[200px]"
              style={{
                fontWeight: 500,
                color: "rgb(61,61,61)",
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
                color: "rgb(61,61,61)",
              }}
            >
              {ampersandText}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
