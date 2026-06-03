import Image from "next/image";
import { cn } from "@/lib/utils";

interface WarumImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface MnmWarumProps {
  heading: string;
  paragraph: string;
  images: WarumImage[];
}

export function MnmWarum({ heading, paragraph, images }: MnmWarumProps) {
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
            {images.map((img) => (
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
              {heading}
            </h2>

            <p
              className="mt-5 text-[16px] leading-[28px] font-medium"
              style={{ color: "rgb(102,102,102)" }}
            >
              {paragraph}
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
