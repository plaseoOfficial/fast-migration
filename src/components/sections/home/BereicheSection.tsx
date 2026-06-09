import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";

export interface BereichCard {
  title: string;
  image: string;
  alt: string;
  href: string;
}

export interface BereichLink {
  label: string;
  href: string;
}

export interface Bereich {
  /** Small label chip above the group title (e.g. "Für Zuhause"). */
  label: string;
  title: string;
  body: string;
  cta: BereichLink;
  cards: BereichCard[];
}

export interface BereicheFootnote {
  text: string;
  primary: BereichLink;
  secondary: BereichLink;
  trust: BereichLink;
}

interface BereicheSectionProps {
  eyebrow: string;
  heading: string;
  intro: string;
  groups: Bereich[];
  footnote: BereicheFootnote;
}

/**
 * "Zwei Welten" – the homepage's dual-audience overview. Splits the offer into
 * two labeled worlds (Privat / Gewerbe), each a row of photographic cards that
 * route into the respective silo (hub + clusters), plus a closing CTA band into
 * the Möbelplaner / Kontakt. Props-driven; copy lives in src/lib/content/home.ts.
 */
export function BereicheSection({
  eyebrow,
  heading,
  intro,
  groups,
  footnote,
}: BereicheSectionProps) {
  return (
    <section
      className="fast-section w-full"
      style={{ backgroundColor: "rgba(203, 191, 181, 0.59)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <p className="fast-eyebrow">{eyebrow}</p>
          <h2
            className="mt-4"
            style={{
              fontSize: "clamp(36px, 5vw, 65px)",
              lineHeight: 1,
              letterSpacing: "-2px",
              fontWeight: 500,
              color: "rgb(61,61,61)",
            }}
          >
            {heading}
          </h2>
          <p className="fast-body mt-5" style={{ fontSize: 16, lineHeight: "1.7" }}>
            {intro}
          </p>
        </div>

        {/* Two worlds */}
        <div className="mt-16 flex flex-col gap-16">
          {groups.map((group) => (
            <div key={group.label}>
              {/* Group header */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-[640px]">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-full border-2 border-[rgb(61,61,61)]" />
                    <span className="fast-eyebrow">{group.label}</span>
                  </div>
                  <h3
                    className="mt-3"
                    style={{
                      fontFamily:
                        "var(--font-poppins), Helvetica, Arial, sans-serif",
                      fontSize: 24,
                      fontWeight: 500,
                      lineHeight: "31px",
                      color: "rgb(61,61,61)",
                    }}
                  >
                    {group.title}
                  </h3>
                  <p className="fast-body mt-3" style={{ fontSize: 14, lineHeight: "1.7" }}>
                    {group.body}
                  </p>
                </div>
                <Link
                  href={group.cta.href}
                  className="inline-flex shrink-0 items-center gap-2 transition-colors hover:text-[rgb(237,168,33)]"
                  style={{
                    fontFamily:
                      "var(--font-poppins), Helvetica, Arial, sans-serif",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "rgb(61,61,61)",
                  }}
                >
                  {group.cta.label}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>

              {/* Cards */}
              <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
                {group.cards.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group relative aspect-[3/4] overflow-hidden rounded-md bg-[rgb(61,61,61)] block"
                  >
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <ArrowUpRightIcon className="absolute top-4 left-4 h-7 w-7 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h4
                      className="absolute bottom-4 left-4 right-4 text-white"
                      style={{
                        fontFamily:
                          "var(--font-poppins), Helvetica, Arial, sans-serif",
                        fontSize: 18,
                        fontWeight: 500,
                        lineHeight: "23.4px",
                      }}
                    >
                      {card.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA band */}
        <div className="mt-16 flex flex-col items-center gap-5 border-t border-black/10 pt-10 text-center">
          <p
            style={{
              fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              lineHeight: "24px",
              color: "rgb(61,61,61)",
            }}
          >
            {footnote.text}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <Link
              href={footnote.primary.href}
              className="inline-flex items-center gap-2 rounded-full bg-[rgb(61,61,61)] px-5 py-[10px] text-white transition-colors hover:bg-[rgb(237,168,33)]"
              style={{
                fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {footnote.primary.label}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href={footnote.secondary.href}
              className="inline-flex items-center gap-2 transition-colors hover:text-[rgb(237,168,33)]"
              style={{
                fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: "rgb(61,61,61)",
              }}
            >
              {footnote.secondary.label}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href={footnote.trust.href}
              className="inline-flex items-center gap-2 transition-colors hover:text-[rgb(237,168,33)]"
              style={{
                fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: "rgb(102,102,102)",
              }}
            >
              {footnote.trust.label}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
