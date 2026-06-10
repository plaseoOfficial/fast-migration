import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

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
  /** When true: text column left, image collage right (desktop). */
  reverse?: boolean;
  /** Number of image columns. Default 3. Use 1 to stack images vertically full-width. */
  imageColumns?: 1 | 2 | 3;
}

export function MnmWarum({ heading, paragraph, images, reverse = false, imageColumns = 3 }: MnmWarumProps) {
  const imageCol = (
    <Reveal>
      <div
        className={cn(
          "gap-2 [&>*]:mb-2 [&>*]:break-inside-avoid",
          imageColumns === 1
            ? "[column-count:1]"
            : "[column-count:2]",
          imageColumns === 3
            ? "lg:[column-count:3]"
            : imageColumns === 2
            ? "lg:[column-count:2]"
            : "lg:[column-count:1]"
        )}
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
    </Reveal>
  );

  const textCol = (
    <Reveal delay={120} className="flex flex-col">
      <h2
        className="text-[28px] leading-[1.15] sm:text-[34px] sm:leading-[1.05] lg:text-[65px] lg:leading-[65px] font-medium tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] text-left"
        style={{ color: "rgb(61,61,61)" }}
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
        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgb(237,168,33)" }} />
        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgb(237,168,33)" }} />
        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgb(237,168,33)" }} />
      </div>
    </Reveal>
  );

  return (
    <section
      className="py-12 lg:py-[84px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center")}>
          {reverse ? (
            <>
              {textCol}
              {imageCol}
            </>
          ) : (
            <>
              {imageCol}
              {textCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
