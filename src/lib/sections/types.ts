import { createElement, type ComponentType, type ReactElement } from "react";

/** Audience / origin a section belongs to. */
export type SectionCategory = "home" | "privat" | "gewerbe" | "shared";

/**
 * The job a section does on a page. Sections that share a use case (e.g. the
 * home and privat heroes) are grouped together in the catalog and `/library`.
 */
export type UseCase =
  | "hero"
  | "intro-stats"
  | "discover"
  | "quality"
  | "parallax-quote"
  | "handwerk-tabs"
  | "process"
  | "services-grid"
  | "categories-list"
  | "gallery-masonry"
  | "story"
  | "planner-cta"
  | "planner-embed"
  | "testimonials"
  | "faq"
  | "image-cta";

export interface PropSummary {
  name: string;
  type: string;
  required: boolean;
}

/**
 * Serializable section metadata. Lives in `catalog-data.ts` and is the single
 * source of truth for the markdown catalog — it carries NO React references so
 * it can be consumed by a plain Node script.
 */
export interface SectionMeta {
  /** Stable slug, used as the anchor in `/library` and the catalog (e.g. "privat-hero"). */
  id: string;
  /** Human display name (e.g. "Privat — Hero"). */
  displayName: string;
  useCase: UseCase;
  category: SectionCategory;
  description: string;
  propsSummary: ReadonlyArray<PropSummary>;
  /** Real routes that render this section. */
  usedOn: ReadonlyArray<string>;
  /** Path under docs/design-references for the catalog screenshot reference. */
  screenshot?: string;
  /** True when the component is a Client Component ("use client"). */
  isClient?: boolean;
}

/**
 * A live registry entry = metadata + a pre-bound preview renderer. The preview
 * closure captures the (type-checked) component and its sample props so the
 * registry array can stay non-generic without resorting to `any`.
 */
export interface SectionEntry extends SectionMeta {
  preview: () => ReactElement;
}

/**
 * Build a registry entry. The generic `P` ties `sampleProps` to the component's
 * props at the call site (so a mismatch is a type error), then erases to a
 * non-generic `SectionEntry` for storage in the registry array.
 */
export function defineSection<P>(
  meta: SectionMeta,
  component: ComponentType<P>,
  sampleProps: P,
): SectionEntry {
  return { ...meta, preview: () => createElement(component, sampleProps) };
}
