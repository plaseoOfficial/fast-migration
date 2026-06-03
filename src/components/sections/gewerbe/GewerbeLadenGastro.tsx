import Image from "next/image";
import { cn } from "@/lib/utils";

function YellowDots() {
  return (
    <div className="mt-6 flex items-center gap-2">
      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgb(237,168,33)" }} />
      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgb(237,168,33)" }} />
      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgb(237,168,33)" }} />
    </div>
  );
}

export function GewerbeLadenGastro() {
  return (
    <section
      className="py-10 lg:py-[46px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">

        {/* ── Row 1: Ladeneinrichtung text + big image ── */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left: heading, paragraphs, dots */}
          <div>
            <h2
              className={cn(
                "text-[32px] leading-[1.05] font-medium",
                "lg:text-[59px] lg:leading-[59px]"
              )}
              style={{ color: "rgb(23,33,33)", letterSpacing: "-4px", fontWeight: 500 }}
            >
              Ladeneinrichtung, die zu Ihrem Objekt passt
            </h2>

            <p
              className="mt-5 text-[16px] leading-[28px]"
              style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
            >
              Wir wissen, dass jede Ladeneinrichtung einzigartig ist und eine einzigartige
              Erscheinung benötigt, um Kunden anzuwerben, Wohlbefinden auszustrahlen und zum
              Kauf anzuregen.
            </p>

            <p
              className="mt-5 text-[16px] leading-[28px]"
              style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
            >
              Wir fertigen Möbel, die diese Anforderungen perfekt abbilden. Von robusten
              Oberflächen über intelligenten Stauraum bis zu wunderschönen Auslegetischen. Alles
              entsteht in unserer Produktion in Espelkamp und wird exakt nach Ihren Wünschen
              abgestimmt.
            </p>

            <YellowDots />
          </div>

          {/* Right: big image */}
          <div className="relative h-[260px] w-full lg:h-[330px]">
            <Image
              src="/images/2025/11/WhatsApp-Bild-2025-01-16-um-12.34.29_b25a14a5.jpg"
              alt="Ladeneinrichtung – OBST & GEMÜSE Markt"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ── Row 2: 3-image masonry + Gastro text ── */}
        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:mt-[40px] lg:grid-cols-2 lg:gap-16">

          {/* Left: three-column image mosaic */}
          <div className="grid grid-cols-3 gap-3">
            <div className="relative h-[160px] w-full lg:h-[200px]">
              <Image
                src="/images/2025/11/20230829_030744000_iOS.jpg"
                alt="Modernes Bad mit Holzwaschtisch"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[160px] w-full lg:h-[200px]">
              <Image
                src="/images/2025/11/DSC07129-Kopie-scaled.jpg"
                alt="Zwei Personen blättern"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[160px] w-full lg:h-[200px]">
              <Image
                src="/images/2025/11/20181220_075204314_iOS-scaled.jpg"
                alt="Moderne Sitzbank mit Holzsitz"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Gastro heading, paragraphs, dots */}
          <div>
            <h2
              className={cn(
                "text-[32px] leading-[1.05] font-medium",
                "lg:text-[64px] lg:leading-[64px]"
              )}
              style={{ color: "rgb(23,33,33)", letterSpacing: "-4px", fontWeight: 500 }}
            >
              Gastromöbel, die magisch anziehen
            </h2>

            <p
              className="mt-4 text-[16px] leading-[28px]"
              style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
            >
              Ob Restaurant, Café, Hotel oder gastronomischer Betrieb – wir planen und fertigen{" "}
              <strong style={{ color: "rgb(23,33,33)", fontWeight: 700 }}>
                Gastro Möbel nach Maß
              </strong>
              , die exakt zu Ihrem Konzept, Ihren Abläufen und Ihrem Raum passen. Von der ersten
              Idee bis zur Umsetzung erhalten Sie bei uns alles aus einer Hand.
            </p>

            <p
              className="mt-4 text-[16px] leading-[28px]"
              style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
            >
              Unsere{" "}
              <strong style={{ color: "rgb(23,33,33)", fontWeight: 700 }}>
                individuellen Gastro Möbel
              </strong>{" "}
              sind funktional, robust und auf den täglichen Einsatz ausgelegt. Langlebige
              Materialien, durchdachte Details und eine klare Gestaltung sorgen dafür, dass Design
              und Belastbarkeit kein Widerspruch sind.
            </p>

            <p
              className="mt-4 text-[16px] leading-[28px]"
              style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
            >
              Wir beraten Sie ganzheitlich und nehmen uns bewusst Zeit, Ihre Anforderungen im
              Detail zu verstehen. Die Planung erfolgt praxisnah, damit die Einrichtung nicht nur
              gut aussieht, sondern auch funktioniert.
            </p>

            <YellowDots />
          </div>
        </div>

      </div>
    </section>
  );
}
