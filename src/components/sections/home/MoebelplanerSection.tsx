import Link from "next/link";

interface MoebelplanerSectionProps {
  eyebrow: string;
  heading: string;
  plannerUrl: string;
  ctaLabel: string;
  ctaHref: string;
}

export function MoebelplanerSection({
  eyebrow,
  heading,
  plannerUrl,
  ctaLabel,
  ctaHref,
}: MoebelplanerSectionProps) {
  return (
    <section
      id="leistungen"
      className="fast-section w-full"
      style={{ backgroundColor: "rgba(203, 191, 181, 0.59)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <p className="fast-eyebrow mb-4 text-center">
          {eyebrow}
        </p>
        <h2
          className="mb-12 text-center"
          style={{
            fontSize: "clamp(36px, 5vw, 65px)",
            lineHeight: 1,
            letterSpacing: "-2px",
            fontWeight: 500,
            color: "rgb(61,61,61)",
          }}
        >
          {heading}
        </h2>

        <div className="relative w-full overflow-hidden rounded-md bg-white shadow-md">
          <iframe
            src={plannerUrl}
            title="Fast Möbelplaner"
            loading="lazy"
            allow="fullscreen; clipboard-write"
            className="block w-full h-[78vh] min-h-[600px] border-0"
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="fast-btn-pill"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
