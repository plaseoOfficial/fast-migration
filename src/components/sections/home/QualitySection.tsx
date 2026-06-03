import Image from "next/image";
import { Fragment } from "react";

interface QualitySectionProps {
  headingLines: string[];
  paragraphs: string[];
  images: string[];
}

export function QualitySection({ headingLines, paragraphs, images }: QualitySectionProps) {
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
            {headingLines.map((line, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h2>
          <div className="lg:col-span-4 flex flex-col gap-4 self-end">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="fast-body" style={{ fontSize: 18, lineHeight: "23.8px" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src) => (
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
