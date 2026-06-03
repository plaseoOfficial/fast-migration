import Image from "next/image";
import { cn } from "@/lib/utils";

interface ListItem {
  title: string;
  description: string;
}

const row1Items: ListItem[] = [
  {
    title: "Praxisräume",
    description:
      "Hygienische, funktionale Möbel für Behandlungs- und Funktionsräume.",
  },
  {
    title: "Büros",
    description:
      "Ergonomische Arbeitsplätze, Stauraum und verkabelte Systeme nach Maß.",
  },
  {
    title: "Ladenbau",
    description:
      "Individuelle Einrichtungen, die Marken sichtbar und Räume effizient machen.",
  },
];

const row2Items: ListItem[] = [
  {
    title: "Hotel & Gastro",
    description:
      "Strapazierfähige Lösungen für Empfang, Zimmer, Bar- und Servicebereiche.",
  },
  {
    title: "Empfangstheken",
    description:
      "Repräsentative Theken, abgestimmt auf Raumfluss und Kundenkontakt.",
  },
  {
    title: "Sonderbau",
    description:
      "Individuelle Gewerbemöbel, die nicht in ein Schema passen.",
  },
];

function ItemList({ items }: { items: ListItem[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div
          key={item.title}
          className={cn("py-5", index !== 0 && "border-t border-black/10")}
        >
          <h3
            style={{
              fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
              fontSize: "20px",
              lineHeight: 1,
              fontWeight: 500,
              color: "rgb(0,0,0)",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
              fontSize: "14px",
              lineHeight: "23.8px",
              fontWeight: 500,
              color: "rgb(102,102,102)",
              marginTop: "8px",
            }}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function GewerbeLeistungen() {
  return (
    <section
      className="py-12 lg:py-[57px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        {/* Heading */}
        <h2
          className="text-[32px] leading-[1.05] lg:text-[64px] lg:leading-[64px] mb-10"
          style={{
            fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
            fontWeight: 500,
            letterSpacing: "-3px",
            color: "rgb(23,33,33)",
            maxWidth: "820px",
          }}
        >
          Unsere Leistungen für Gewerbekunden
        </h2>

        {/* Row 1: image left, list right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
          {/* Left: image */}
          <div className="relative h-[260px] lg:h-[360px] overflow-hidden">
            <Image
              src="/images/2025/11/DSC_9814.jpg"
              alt="Gewerbemöbel Detail"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: list */}
          <div>
            <ItemList items={row1Items} />
          </div>
        </div>

        {/* Row 2: list left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: list (on mobile, image renders first via order) */}
          <div className="order-2 lg:order-1">
            <ItemList items={row2Items} />
          </div>

          {/* Right: image (on mobile, rendered first via order) */}
          <div className="relative h-[260px] lg:h-[360px] overflow-hidden order-1 lg:order-2">
            <Image
              src="/images/2025/11/DSC_9747.jpg"
              alt="Maßgefertigte Gewerbeeinrichtung"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
