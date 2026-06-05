import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

interface MnmGeschichteProps {
  heading: string;
  subheading: string;
  gallery: GalleryItem[];
  paragraphs: string[];
  factLines: string[];
}

export function MnmGeschichte({ heading, subheading, gallery, paragraphs, factLines }: MnmGeschichteProps) {
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
            className="text-[28px] leading-[1.15] sm:text-[36px] sm:leading-[1.05] lg:text-[84px] lg:leading-[84px] font-medium text-black mx-auto"
            style={{
              letterSpacing: "-3px",
              maxWidth: "1000px",
            }}
          >
            {heading}
          </h2>
          <p
            className="mt-4 text-[18px] font-medium text-center uppercase"
            style={{
              lineHeight: "23.8px",
              letterSpacing: "4px",
              color: "rgb(61,61,61)",
            }}
          >
            {subheading}
          </p>
        </div>

        {/* Masonry Gallery */}
        <div
          className={cn(
            "mt-10",
            "columns-1 md:columns-2 lg:columns-3 xl:columns-5 gap-3",
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
            {paragraphs.map((para) => (
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
              {factLines.map((line) => (
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
