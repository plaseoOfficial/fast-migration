import type { SectionEntry } from "@/lib/sections/types";

/**
 * Wraps one library section with a metadata label bar (display name, use case,
 * category, client/server) and renders the section beneath it at full width.
 */
export function LibrarySectionFrame({ entry }: { entry: SectionEntry }) {
  return (
    <section id={entry.id} className="scroll-mt-16 border-t border-black/10">
      <div className="sticky top-0 z-20 flex flex-wrap items-center gap-2 border-b border-black/10 bg-white/90 px-5 py-2.5 backdrop-blur">
        <span className="text-sm font-semibold text-neutral-900">{entry.displayName}</span>
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-[11px] text-neutral-500">
          #{entry.id}
        </code>
        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-medium text-amber-800">
          {entry.useCase}
        </span>
        <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-[11px] font-medium text-neutral-700">
          {entry.category}
        </span>
        {entry.isClient && (
          <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[11px] font-medium text-sky-700">
            client
          </span>
        )}
        <span className="ml-auto text-[11px] text-neutral-400">
          {entry.usedOn.join(" · ")}
        </span>
      </div>
      <div className="overflow-hidden">{entry.preview()}</div>
    </section>
  );
}
