import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

// Decorative yellow line motif — a right-triangle of increasing-width bars
const LINE_WIDTHS = [20, 32, 46, 60, 74, 88, 102, 116, 128, 140, 152, 164, 174, 184];

function YellowLineMotif() {
  return (
    <div
      className="pointer-events-none flex flex-col items-end gap-[6px]"
      aria-hidden="true"
    >
      {LINE_WIDTHS.map((w, i) => (
        <div
          key={i}
          className="h-[3px] bg-[rgb(237,168,33)]"
          style={{ width: `${w}px` }}
        />
      ))}
    </div>
  );
}

interface MnmMoebelplanerProps {
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  imageAlt?: string;
}

export function MnmMoebelplaner({
  heading = "Möbel nach Maß einfach online planen und konfigurieren",
  body = "Mit unserem Möbelkonfigurator können Sie Ihre Möbel nach Maß online planen – schnell, übersichtlich und millimetergenau. Ob Schrank nach Maß, Regal, Sideboard oder Kommode: Sie konfigurieren Maße, Dekore, Einlegeböden oder Schubladen bequem von zuhause. Der 3D-Konfigurator zeigt jede Anpassung sofort an und macht individuelle Möbel nach Maß für Sie direkt sichtbar. Nach der Konfiguration übernehmen wir den Feinschliff: Aufmaß, Beratung, Materialien und die fachgerechte Montage. So verbinden wir präzise Online-Planung mit echter handwerklicher Maßanfertigung.",
  ctaLabel = "Jetzt Möbel online planen",
  ctaHref = "/moebelplaner/",
  image = "/images/2025/11/20150701_185458257_iOS-scaled.jpg",
  imageAlt = "Moderner Empfangsbereich",
}: MnmMoebelplanerProps) {
  return (
    <section
      className="bg-[rgb(61,61,61)] pt-12 lg:pt-[46px] pb-0 overflow-hidden"
      style={{ fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif" }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — text column (vertically centered against the image on desktop) */}
          <div className="pb-12 lg:pb-0">
            <h2
              className="text-white font-medium text-[28px] leading-[1.15] sm:text-[34px] sm:leading-[1.05] lg:text-[65px] lg:leading-[65px] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px]"
            >
              {heading}
            </h2>

            <p
              className="mt-5 text-white text-[16px] leading-[28px] font-medium"
            >
              {body}
            </p>

            <Link
              href={ctaHref}
              className="mt-6 inline-flex items-center text-white text-[20px] font-medium underline underline-offset-4 hover:text-[rgb(237,168,33)] transition-colors"
            >
              {ctaLabel}
              <ArrowRightIcon className="inline-block h-[1em] w-auto ml-2 align-middle" />
            </Link>
          </div>

          {/* Right — image + yellow line motif */}
          <div className="self-end flex flex-col">
            {/* Yellow line motif — right-aligned, sits above / beside image bottom */}
            <div className="flex justify-end mb-4 pr-0">
              <YellowLineMotif />
            </div>

            {/* Main image — touches section bottom */}
            <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[460px] rounded-tl-[8px] lg:rounded-tl-[8px] overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
