import Image from "next/image";
import { cn } from "@/lib/utils";

const GALLERY_ITEMS = [
  {
    src: "/images/2025/11/IMG_9120-scaled.jpg",
    alt: "Moderner Badschrank",
    caption: "IMG_9120",
    width: 600,
    height: 600,
  },
  {
    src: "/images/2024/03/test-img-83485.jpg",
    alt: "Modernes Wohnzimmer",
    caption: "Luxor Collection",
    width: 800,
    height: 400,
  },
  {
    src: "/images/2025/11/DSC07129-Kopie-scaled.jpg",
    alt: "Zwei Personen blättern",
    caption: "DSC07129 Kopie",
    width: 600,
    height: 900,
  },
  {
    src: "/images/2025/11/WhatsApp-Bild-2025-04-01-um-22.54.05_fab2d495.jpg",
    alt: "Moderner Ankleidebereich",
    caption: "WhatsApp Bild 2025-04-01",
    width: 600,
    height: 900,
  },
  {
    src: "/images/2025/11/20231220_131839984_iOS-scaled.jpg",
    alt: "Modernes Büro mit Holzlamellenwand",
    caption: "20231220_131839984_iOS",
    width: 600,
    height: 900,
  },
] as const;

const FACT_LINES = [
  "– Made in Germany",
  "– 1.000 m² Fertigung",
  "– Meisterbetrieb seit 2013",
  "– Homag-Technologie",
  "– Aufbau bis 200 km",
  "– Lieferung bundesweit",
] as const;

const TEXT_PARAGRAPHS = [
  "Fast Systemmöbel begann 1996 in einer Garage in Espelkamp.",
  "Aus ersten Küchen entstand ein Meisterbetrieb mit über 1.000 m² Fertigungsfläche, modernen Homag-Maschinen und einem eingespielten Team. Heute fertigen wir Maßmöbel, die millimetergenau geplant, hochwertig verarbeitet und zuverlässig montiert werden.",
  "Jede Maßanfertigung verbindet Funktionalität und Design – vom Einbauschrank bis zum Sideboard. Unsere Möbel werden in Espelkamp gefertigt, im Umkreis von 200 km montiert und deutschlandweit geliefert.",
] as const;

export function MnmGeschichte() {
  return (
    <section
      className="py-12 lg:py-[57px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-[36px] leading-[1.05] lg:text-[84px] lg:leading-[84px] font-medium text-black mx-auto"
            style={{
              letterSpacing: "-3px",
              maxWidth: "1000px",
            }}
          >
            Unsere Geschichte – Qualität aus fast drei Jahrzehnten
          </h2>
          <p
            className="mt-4 text-[18px] font-medium text-center uppercase"
            style={{
              lineHeight: "23.8px",
              letterSpacing: "4px",
              color: "rgb(61,61,61)",
            }}
          >
            VOM GARAGENBETRIEB ZUM MODERNEN MÖBELHERSTELLER.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div
          className={cn(
            "mt-10",
            "columns-2 md:columns-3 lg:columns-5 gap-3",
            "[&>figure]:mb-3 [&>figure]:break-inside-avoid"
          )}
        >
          {GALLERY_ITEMS.map((item) => (
            <figure key={item.src} className="relative group m-0">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="object-cover w-full"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              {/* Hover caption overlay */}
              <figcaption
                className={cn(
                  "absolute inset-0 flex items-center justify-center",
                  "bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                )}
              >
                <h4
                  className="text-white font-medium text-center px-2"
                  style={{
                    fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
                    fontSize: "24px",
                    lineHeight: "1.2",
                  }}
                >
                  {item.caption}
                </h4>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Lower 2-col block */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: text paragraphs */}
          <div className="flex flex-col gap-4">
            {TEXT_PARAGRAPHS.map((para) => (
              <p
                key={para.slice(0, 30)}
                className="font-medium"
                style={{
                  fontSize: "16px",
                  lineHeight: "28px",
                  fontWeight: 500,
                  color: "rgb(23,33,33)",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Right: dark fact box */}
          <div
            className="p-10 lg:p-12"
            style={{ backgroundColor: "rgb(45,45,45)" }}
          >
            <ul className="flex flex-col">
              {FACT_LINES.map((line) => (
                <li
                  key={line}
                  className="font-medium"
                  style={{
                    fontSize: "16px",
                    lineHeight: "32px",
                    fontWeight: 500,
                    color: "rgb(255,255,255)",
                  }}
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
