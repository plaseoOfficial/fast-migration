import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, ChevronRightIcon } from "@/components/icons";

interface NavCard {
  heading: string;
  href: string;
  image: string;
  imageAlt: string;
}

interface UeberNavCardsProps {
  cards: NavCard[];
}

export function UeberNavCards({ cards }: UeberNavCardsProps) {
  return (
    <section
      className="w-full"
      style={{ fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.heading}
            href={card.href}
            className="group relative isolate flex min-h-[420px] flex-col justify-between overflow-hidden border border-white/20 p-8 lg:min-h-[620px] lg:p-10"
          >
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="z-0 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 z-[1]"
              style={{ backgroundColor: "rgba(61,61,61,0.45)" }}
              aria-hidden="true"
            />

            {/* Top row: heading + arrow */}
            <div className="relative z-10 flex items-start justify-between">
              <h3
                className="font-medium text-white"
                style={{ fontSize: "clamp(22px, 3vw, 37px)", lineHeight: "1.1", letterSpacing: "-1px" }}
              >
                {card.heading}
              </h3>
              <ArrowUpRightIcon className="h-7 w-auto text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            {/* Bottom: Mehr erfahren */}
            <span className="relative z-10 inline-flex items-center gap-2 text-[15px] font-medium text-white">
              <span className="underline underline-offset-4">Mehr erfahren</span>
              <ChevronRightIcon className="h-3 w-auto" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
