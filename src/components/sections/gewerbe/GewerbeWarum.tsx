import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

interface GewerbeWarumProps {
  heading: string;
  eyebrow: string;
  gallery: GalleryItem[];
  bodyParagraph: string;
  factBox: string;
}

export function GewerbeWarum({
  heading,
  eyebrow,
  gallery,
  bodyParagraph,
  factBox,
}: GewerbeWarumProps) {
  return (
    <section
      className="py-12 lg:py-[57px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        {/* Header — centered */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-[36px] leading-[1.05] lg:text-[84px] lg:leading-[84px] font-medium mx-auto tracking-[-1.5px] lg:tracking-[-3px]"
            style={{
              maxWidth: "1000px",
              color: "rgb(0,0,0)",
            }}
          >
            {heading}
          </h2>
          <p
            className="mt-3 text-[18px] font-medium uppercase tracking-[4px]"
            style={{
              lineHeight: "23.8px",
              color: "rgb(61,61,61)",
            }}
          >
            {eyebrow}
          </p>
        </div>

        {/* Masonry Gallery */}
        <div
          className={cn(
            "mt-10",
            "columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-3",
            "[&>figure]:mb-3 [&>figure]:break-inside-avoid"
          )}
        >
          {gallery.map((item) => (
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
                    fontFamily:
                      "var(--font-urbanist), Helvetica, Arial, sans-serif",
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
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: body text */}
          <p
            className="font-medium"
            style={{
              fontSize: "16px",
              lineHeight: "28px",
              color: "rgb(23,33,33)",
            }}
          >
            {bodyParagraph}
          </p>

          {/* Right: dark fact box — single centered H3, no bullet list */}
          <div
            className="flex items-center justify-center min-h-[160px] px-12 py-[48px] lg:py-[64px]"
            style={{ backgroundColor: "rgb(45,45,45)" }}
          >
            <h3
              className="font-medium text-center"
              style={{
                fontFamily:
                  "var(--font-urbanist), Helvetica, Arial, sans-serif",
                fontSize: "20px",
                lineHeight: "1.3",
                color: "rgb(255,255,255)",
              }}
            >
              {factBox}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
