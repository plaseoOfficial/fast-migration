import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fastContainer, type FastContainerVariant } from "./tokens";

interface ContainerProps {
  /** `home` = max-w-1280, `mnm` (privat) = max-w-1224. Defaults to `mnm`. */
  variant?: FastContainerVariant;
  className?: string;
  children: ReactNode;
}

/**
 * Centered, max-width content wrapper shared by library sections and new pages.
 * Renders a plain `<div>` so it is a drop-in for the literal wrapper divs used
 * across the cloned pages.
 */
export function Container({ variant = "mnm", className, children }: ContainerProps) {
  return <div className={cn(fastContainer[variant], className)}>{children}</div>;
}
