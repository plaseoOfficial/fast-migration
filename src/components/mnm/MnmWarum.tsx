import Image from "next/image";
import { cn } from "@/lib/utils";

const IMAGES = [
  {
    src: "/images/2025/11/20231204_095459232_iOS-scaled.jpg",
    alt: "Moderne Küche in Grau und Weiß",
    width: 600,
    height: 450,
  },
  {
    src: "/images/2025/11/DSC_0001.jpg",
    alt: "Moderner Schreibtisch",
    width: 600,
    height: 400,
  },
  {
    src: "/images/2025/11/DSC_9814.jpg",
    alt: "Modernes, dunkelgraues Möbel",
    width: 600,
    height: 420,
  },
  {
    src: "/images/2025/11/IMG_4797-scaled.jpg",
    alt: "Moderne Küche mit weißen Schränken",
    width: 600,
    height: 800,
  },
  {
    src: "/images/2025/11/20240126_145240570_iOS-scaled-e1767633226916.jpg",
    alt: "Moderne Küche mit hellen Schränken",
    width: 600,
    height: 380,
  },
  {
    src: "/images/2025/11/20181220_075204314_iOS-scaled.jpg",
    alt: "Moderne Sitzbank mit Holzsitz",
    width: 600,
    height: 450,
  },
] as const;

export function MnmWarum() {
  return (
    <section
      className="py-12 lg:py-[46px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center")}>
          {/* Left — CSS columns masonry collage */}
          <div
            className="[column-count:2] lg:[column-count:3] gap-2 [&>*]:mb-2 [&>*]:break-inside-avoid"
            style={{ columnGap: "8px" }}
          >
            {IMAGES.map((img) => (
              <div key={img.src} className="break-inside-avoid mb-2">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto block"
                  style={{ display: "block" }}
                />
              </div>
            ))}
          </div>

          {/* Right — heading + paragraph + dots */}
          <div className="flex flex-col">
            <h2
              className="text-[34px] leading-[1.05] lg:text-[64px] lg:leading-[64px] font-medium tracking-[-4px] text-left"
              style={{ color: "rgb(23,33,33)", letterSpacing: "-4px" }}
            >
              Warum Maßmöbel aus eigener Fertigung überzeugen
            </h2>

            <p
              className="mt-5 text-[16px] leading-[28px] font-medium"
              style={{ color: "rgb(102,102,102)" }}
            >
              Unsere Möbel nach Maß werden vollständig in Espelkamp gefertigt. Präzision bis ins
              Detail und stabile Konstruktionen sorgen dafür, dass Ihr Möbelstück und der Raum eine
              perfekte Einheit bilden. Ob Kleiderschrank, Kommode, Regal oder maßgefertigtes
              Sideboard – jede Maßanfertigung wird auf Ihre Bedürfnisse zugeschnitten und
              massgeschneidert aufgebaut. Wir setzen auf langlebige Materialien, saubere
              Verarbeitung und eine Montage, die funktional und modern wirkt. Lieferung und Montage
              erfolgen durch unser eigenes Team.
            </p>

            {/* Decorative dots */}
            <div className="flex gap-2 mt-6">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: "rgb(237,168,33)" }}
              />
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: "rgb(237,168,33)" }}
              />
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: "rgb(237,168,33)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
