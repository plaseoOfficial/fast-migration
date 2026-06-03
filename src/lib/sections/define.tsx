import type { ComponentType } from "react";
import type { SectionEntry, SectionMeta } from "./types";

/**
 * Build a registry entry. The generic `P` ties `sampleProps` to the
 * component's props at the call site (so a mismatch is a type error), then
 * erases to a non-generic `SectionEntry` for storage in the registry array.
 * The `preview` closure captures the typed component + props so the registry
 * array can stay heterogeneous without `any`.
 */
export function defineSection<P extends object>(
  meta: SectionMeta,
  Component: ComponentType<P>,
  sampleProps: P,
): SectionEntry {
  return { ...meta, preview: () => <Component {...sampleProps} /> };
}
