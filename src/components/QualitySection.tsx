import Image from "next/image";
import { QUALITY_IMAGES } from "@/lib/content";

export function QualitySection() {
  return (
    <section
      className="fast-section w-full"
      style={{ backgroundColor: "rgba(203, 191, 181, 0.59)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          <h2
            className="lg:col-span-8"
            style={{
              fontSize: "clamp(40px, 5.8vw, 84px)",
              lineHeight: "1.1",
              letterSpacing: "-2px",
              fontWeight: 500,
              color: "rgb(61,61,61)",
            }}
          >
            Wahre Qualität passt sich
            <br />
            dem Menschen an. Nicht
            <br />
            umgekehrt.
          </h2>
          <div className="lg:col-span-4 flex flex-col gap-4 self-end">
            <p className="fast-body" style={{ fontSize: 18, lineHeight: "23.8px" }}>
              Ein Tisch, der zu groß oder zu klein ist, ein Regal, das nie ganz passt – kommt
              Ihnen das bekannt vor? Genau das vermeiden wir. Fast steht für Systemmöbel, die
              sich an Ihr Leben anpassen – nicht umgekehrt.
            </p>
            <p className="fast-body" style={{ fontSize: 18, lineHeight: "23.8px" }}>
              Unsere Designer planen mit Ihnen jedes Detail: vom ersten Entwurf bis zur letzten
              Schraube.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {QUALITY_IMAGES.map((src) => (
            <div
              key={src}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-md group"
            >
              <Image
                src={src}
                alt="Fast Möbel Detail"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
