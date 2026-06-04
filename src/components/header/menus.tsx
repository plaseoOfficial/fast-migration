import Image from "next/image";
import Link from "next/link";
import type { NavItem, NavLeaf } from "@/lib/nav";
import { cn } from "@/lib/utils";

/** A single menu link. No href → page not built yet: greyed, non-clickable, "bald" badge. */
function Leaf({ leaf, onNavigate }: { leaf: NavLeaf; onNavigate?: () => void }) {
  if (!leaf.href) {
    return (
      <span
        aria-disabled
        className="flex cursor-default select-none items-center gap-2 py-1 text-[14px] text-white/35"
      >
        {leaf.label}
        <span className="rounded-full border border-white/15 px-1.5 py-px text-[9px] font-medium uppercase tracking-wide text-white/40">
          bald
        </span>
      </span>
    );
  }
  return (
    <Link
      href={leaf.href}
      onClick={onNavigate}
      className="block py-1 text-[14px] text-white/80 transition-colors hover:text-[rgb(237,168,33)]"
    >
      {leaf.label}
    </Link>
  );
}

/** Wide mega panel: cluster columns + an image/CTA teaser. */
export function MegaPanel({
  item,
  onNavigate,
}: {
  item: Extract<NavItem, { kind: "mega" }>;
  onNavigate?: () => void;
}) {
  const wide = item.columns.length >= 4;
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-[rgb(61,61,61)] p-7 shadow-2xl",
        wide
          ? "w-[min(1080px,calc(100vw-3rem))] grid-cols-[repeat(4,minmax(0,1fr))_1.25fr]"
          : "w-[min(760px,calc(100vw-3rem))] grid-cols-[repeat(2,minmax(0,1fr))_1.25fr]",
        "grid gap-7"
      )}
    >
      {item.columns.map((col) => (
        <div key={col.title}>
          <h3 className="mb-3 font-[var(--font-poppins)] text-[13px] font-semibold uppercase tracking-wide text-white">
            {col.title}
          </h3>
          <ul className="flex flex-col">
            {col.items.map((leaf) => (
              <li key={leaf.label}>
                <Leaf leaf={leaf} onNavigate={onNavigate} />
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Teaser */}
      <div className="flex flex-col gap-3">
        <Link
          href={item.teaser.href}
          onClick={onNavigate}
          className="group relative block overflow-hidden rounded-lg"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={item.teaser.image}
              alt={item.teaser.heading}
              fill
              sizes="320px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="font-[var(--font-poppins)] text-[15px] font-semibold text-white">
                {item.teaser.heading}
              </div>
              <p className="mt-1 text-[12px] leading-snug text-white/80">{item.teaser.text}</p>
            </div>
          </div>
        </Link>
        <Link
          href={item.teaser.cta.href}
          onClick={onNavigate}
          className="fast-btn-pill justify-center text-[13px]"
        >
          {item.teaser.cta.label}
        </Link>
      </div>
    </div>
  );
}

/** Narrow dropdown (e.g. "Über uns"): a simple list of trust links. */
export function MiniDropdown({
  items,
  onNavigate,
}: {
  items: NavLeaf[];
  onNavigate?: () => void;
}) {
  return (
    <div className="w-60 rounded-xl border border-white/10 bg-[rgb(61,61,61)] p-3 shadow-2xl">
      <ul className="flex flex-col">
        {items.map((leaf) => (
          <li key={leaf.label}>
            <Leaf leaf={leaf} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </div>
  );
}
