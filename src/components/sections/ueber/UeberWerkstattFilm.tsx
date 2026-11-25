import { Reveal } from "@/components/Reveal";

interface UeberWerkstattFilmProps {
  eyebrow: string;
  heading: string;
  body: string;
  /** Kapitel in der Reihenfolge des Films, als Text neben dem Video. */
  chapters: string[];
  video: {
    src: string;
    poster: string;
    /** Beschreibung des Videoinhalts für Screenreader. */
    label: string;
    width: number;
    height: number;
  };
}

/**
 * Über uns: kurzer, stummer Werkstattfilm mit Abspielknopf (kein Autoplay,
 * lädt erst beim Abspielen). Kapitel stehen als echter Text daneben.
 */
export function UeberWerkstattFilm({ eyebrow, heading, body, chapters, video }: UeberWerkstattFilmProps) {
  return (
    <section
      className="w-full bg-white"
      style={{ fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif" }}
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-6 py-[48px] lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-16 lg:px-8 lg:py-[84px]">
        <Reveal>
          <p
            className="text-[14px] font-medium uppercase"
            style={{ letterSpacing: "2px", color: "rgb(61,61,61)" }}
          >
            {eyebrow}
          </p>
          <h2
            className="mt-4 font-medium"
            style={{
              fontSize: "clamp(34px, 4vw, 52px)",
              lineHeight: "1.1",
              color: "rgb(61,61,61)",
            }}
          >
            {heading}
          </h2>
          <p className="mt-5 max-w-prose text-[16px] leading-[28px]" style={{ color: "rgb(85,85,85)" }}>
            {body}
          </p>
          <ol className="mt-6 flex flex-col gap-2">
            {chapters.map((chapter, i) => (
              <li key={chapter} className="flex items-baseline gap-3 text-[15px]" style={{ color: "rgb(61,61,61)" }}>
                <span className="font-medium" style={{ color: "rgb(237,168,33)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {chapter}
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={120}>
          <video
            controls
            muted
            playsInline
            preload="none"
            poster={video.poster}
            width={video.width}
            height={video.height}
            aria-label={video.label}
            className="block h-auto w-full"
          >
            <source src={video.src} type="video/mp4" />
          </video>
        </Reveal>
      </div>
    </section>
  );
}
