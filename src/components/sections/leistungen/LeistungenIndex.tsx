import Link from "next/link";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/icons";
import { Container, fastColors, fastFonts } from "@/components/sections/_shared";
import { renderInlineLinks } from "@/lib/inline-links";
import { cn } from "@/lib/utils";

/**
 * Sections of the `/alle-leistungen/` overview: a jump bar (Privat / Gewerbe), one
 * index section per audience and a closing CTA band. Props-driven; the page
 * feeds the automatically built groups (see leistungen-data.ts).
 *
 * Layout idea: an index, not a card grid. Each audience is a two-column
 * spread on desktop (sticky heading + lead left, the cluster list right), a
 * single column on mobile. Every row is one full-width link (≥ 56px tall).
 */

export interface IndexEntry {
  slug: string;
  title: string;
  text?: string;
  kind: "hub" | "cluster" | "product" | "ratgeber";
}

export interface IndexCluster {
  cluster: IndexEntry;
  children: IndexEntry[];
}

const FOCUS_DARK =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgb(23,33,33)]";
const FOCUS_LIGHT =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgb(237,168,33)]";

// ---------------------------------------------------------------------------
// Jump bar
// ---------------------------------------------------------------------------

export function LeistungenJumpBar({
  intro,
  items,
}: {
  /** Page intro, set on solid ground (not over the hero photo) for contrast. */
  intro: string;
  items: { id: string; label: string; count: number; summary: string }[];
}) {
  return (
    <div style={{ backgroundColor: fastColors.dark, fontFamily: fastFonts.urbanist }}>
      <Container>
        <p className="max-w-[68ch] pt-10 pb-8 text-[17px] font-medium leading-[1.65] text-white/85 lg:pt-14 lg:pb-10 lg:text-[20px]">
          {intro}
        </p>
      </Container>
      <nav aria-label="Bereiche auf dieser Seite" className="border-t border-white/10">
      <Container>
        <ul className="grid grid-cols-1 sm:grid-cols-2">
          {items.map((item, i) => (
            <li
              key={item.id}
              className={cn(
                i > 0 && "border-t border-white/10 sm:border-t-0 sm:border-l sm:border-white/10"
              )}
            >
              <Link
                href={`/alle-leistungen/#${item.id}`}
                className={cn(
                  "group flex min-h-[88px] items-center justify-between gap-6 py-5",
                  i === 0 ? "sm:pr-8" : "sm:pl-8",
                  FOCUS_LIGHT
                )}
              >
                <span className="flex flex-col gap-1">
                  <span className="flex items-baseline gap-3">
                    <span className="text-[28px] font-medium leading-none tracking-[-1px] text-white lg:text-[36px]">
                      {item.label}
                    </span>
                    <span className="text-[15px] font-medium tabular-nums text-white/70">
                      {item.count} Leistungen
                    </span>
                  </span>
                  <span className="text-[15px] leading-[1.5] text-white/70">{item.summary}</span>
                </span>
                <span
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors group-hover:border-[rgb(237,168,33)] group-hover:bg-[rgb(237,168,33)] group-hover:text-[rgb(61,61,61)]"
                  aria-hidden="true"
                >
                  <ChevronDownIcon className="h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      </nav>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Audience section
// ---------------------------------------------------------------------------

function EntryRow({ entry, ratgeberLabel }: { entry: IndexEntry; ratgeberLabel: string }) {
  return (
    <li className="border-t" style={{ borderColor: "rgba(61,61,61,0.14)" }}>
      <Link
        href={entry.slug}
        className={cn(
          "group grid min-h-[56px] grid-cols-[1fr_auto] items-center gap-x-6 py-4",
          FOCUS_DARK
        )}
      >
        <span className="flex flex-col gap-1">
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span
              className="text-[17px] font-semibold leading-[1.35] underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-[rgb(237,168,33)]"
              style={{ color: fastColors.ink }}
            >
              {entry.title}
            </span>
            {entry.kind === "ratgeber" && (
              <span
                className="rounded-full border px-2 py-px text-[12px] font-medium leading-[1.6]"
                style={{ borderColor: "rgba(61,61,61,0.3)", color: fastColors.dark }}
              >
                {ratgeberLabel}
              </span>
            )}
          </span>
          {entry.text && (
            <span className="text-[15px] leading-[1.55]" style={{ color: fastColors.dark }}>
              {entry.text}
            </span>
          )}
        </span>
        <ArrowRightIcon
          className="h-5 w-5 shrink-0 text-[rgb(61,61,61)] transition-transform duration-300 ease-out group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </li>
  );
}

function ClusterBlock({ block, ratgeberLabel }: { block: IndexCluster; ratgeberLabel: string }) {
  const { cluster, children } = block;
  const headingId = `cl-${cluster.slug.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  return (
    <section aria-labelledby={headingId} className="border-t pt-8 pb-10 lg:pt-10 lg:pb-12" style={{ borderColor: fastColors.dark }}>
      <h3 id={headingId} className="m-0">
        <Link
          href={cluster.slug}
          className={cn(
            "group inline-flex min-h-[44px] items-center gap-3 text-[26px] font-medium leading-[1.15] tracking-[-0.5px] lg:text-[34px] lg:tracking-[-1px]",
            FOCUS_DARK
          )}
          style={{ color: fastColors.ink }}
        >
          <span className="underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-[rgb(237,168,33)]">
            {cluster.title}
          </span>
          <ArrowRightIcon
            className="h-6 w-6 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </h3>
      {cluster.text && (
        <p className="mt-2 max-w-[60ch] text-[16px] leading-[1.6]" style={{ color: fastColors.dark }}>
          {cluster.text}
        </p>
      )}
      {children.length > 0 && (
        <ul className="mt-6 flex flex-col border-b" style={{ borderColor: "rgba(61,61,61,0.14)" }}>
          {children.map((entry) => (
            <EntryRow key={entry.slug} entry={entry} ratgeberLabel={ratgeberLabel} />
          ))}
        </ul>
      )}
    </section>
  );
}

export function LeistungenSection({
  id,
  heading,
  lead,
  hub,
  hubCtaLabel,
  clusters,
  loose,
  background,
  ratgeberLabel,
}: {
  id: string;
  heading: string;
  lead: string;
  hub?: IndexEntry;
  hubCtaLabel: string;
  clusters: IndexCluster[];
  loose: IndexEntry[];
  background: "white" | "beige";
  ratgeberLabel: string;
}) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-[96px] py-14 lg:py-[96px]"
      style={{
        backgroundColor: background === "beige" ? fastColors.beige : fastColors.white,
        fontFamily: fastFonts.urbanist,
      }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[128px]">
              <h2
                id={headingId}
                className="text-[44px] font-medium leading-none tracking-[-1.5px] lg:text-[72px] lg:tracking-[-3px]"
                style={{ color: fastColors.ink }}
              >
                {heading}
              </h2>
              <p className="mt-5 max-w-[42ch] text-[16px] font-medium leading-[1.65]" style={{ color: fastColors.dark }}>
                {renderInlineLinks(lead)}
              </p>
              {hub && (
                <Link
                  href={hub.slug}
                  className={cn("fast-btn-outline mt-7 min-h-[44px]", FOCUS_DARK)}
                >
                  {hubCtaLabel}
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>

          <div className="lg:col-span-8">
            {clusters.map((block) => (
              <ClusterBlock key={block.cluster.slug} block={block} ratgeberLabel={ratgeberLabel} />
            ))}
            {loose.length > 0 && (
              <ul className="flex flex-col border-b" style={{ borderColor: "rgba(61,61,61,0.14)" }}>
                {loose.map((entry) => (
                  <EntryRow key={entry.slug} entry={entry} ratgeberLabel={ratgeberLabel} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Closing CTA band
// ---------------------------------------------------------------------------

export function LeistungenAbschluss({
  heading,
  body,
  planerLabel,
  planerHref,
  kontaktLabel,
  kontaktHref,
  trust,
}: {
  heading: string;
  body: string;
  planerLabel: string;
  planerHref: string;
  kontaktLabel: string;
  kontaktHref: string;
  trust: string;
}) {
  return (
    <section
      aria-labelledby="leistungen-abschluss"
      className="py-16 lg:py-[110px]"
      style={{ backgroundColor: fastColors.dark, fontFamily: fastFonts.urbanist }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <h2
            id="leistungen-abschluss"
            className="text-[32px] font-medium leading-[1.1] tracking-[-1px] text-white lg:col-span-6 lg:text-[56px] lg:tracking-[-2px]"
          >
            {heading}
          </h2>
          <div className="lg:col-span-6 lg:pt-3">
            <p className="max-w-[52ch] text-[17px] font-medium leading-[1.65] text-white/85">{body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={planerHref} className={cn("fast-btn-pill min-h-[48px] justify-center", FOCUS_LIGHT)}>
                {planerLabel}
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href={kontaktHref}
                className={cn(
                  "fast-btn-outline min-h-[48px] justify-center !border-white/60 !text-white hover:!border-white hover:!bg-white hover:!text-[rgb(61,61,61)]",
                  FOCUS_LIGHT
                )}
              >
                {kontaktLabel}
              </Link>
            </div>
            <p className="mt-10 max-w-[52ch] border-t border-white/15 pt-6 text-[15px] leading-[1.7] text-white/75 [&_a]:text-white [&_a:hover]:text-[rgb(237,168,33)]">
              {renderInlineLinks(trust)}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
