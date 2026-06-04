"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LOGO_SRC, LOGO_ON_DARK_SRC } from "@/lib/content";
import { NAV_ITEMS, type NavItem, type NavLeaf } from "@/lib/nav";
import { MegaPanel, MiniDropdown } from "@/components/header/menus";
import { MenuIcon, CloseIcon, InstagramIcon, LinkedinIcon, ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Escape closes any open menu; click outside the header closes mega/dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  const openNow = (label: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };
  const closeAll = () => setOpenMenu(null);

  const triggerCls = (active: boolean) =>
    cn(
      "inline-flex items-center gap-1 text-[15px] font-medium font-[var(--font-urbanist)] transition-colors",
      active
        ? "text-[rgb(237,168,33)]"
        : scrolled
          ? "text-white hover:text-[rgb(237,168,33)]"
          : "text-[rgb(61,61,61)] hover:text-[rgb(237,168,33)]"
    );

  const panelItems = NAV_ITEMS.filter((i) => i.kind !== "cta");
  const cta = NAV_ITEMS.find((i) => i.kind === "cta");
  const activeMega = NAV_ITEMS.find(
    (i): i is Extract<NavItem, { kind: "mega" }> => i.kind === "mega" && i.label === openMenu
  );

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[rgb(61,61,61)] shadow-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 lg:px-[60px]">
        {/* Logo */}
        <Link href="/" className="flex flex-shrink-0 items-center" onClick={closeAll}>
          <Image
            src={scrolled ? LOGO_ON_DARK_SRC : LOGO_SRC}
            alt="Fast Systemmöbel"
            width={150}
            height={52}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Right cluster: nav + social + Kontakt CTA */}
        <div className="hidden items-center gap-7 lg:flex">
          <nav>
            <ul className="flex items-center gap-7">
              {panelItems.map((item) => {
                if (item.kind === "link") {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={closeAll}
                        className={cn(
                          triggerCls(false),
                          item.highlight && "font-semibold text-[rgb(237,168,33)]"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                const isOpen = openMenu === item.label;
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openNow(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onClick={() => setOpenMenu(isOpen ? null : item.label)}
                      className={triggerCls(isOpen)}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={cn("h-3 w-3 transition-transform", isOpen && "rotate-180")}
                      />
                    </button>

                    {item.kind === "dropdown" && isOpen && (
                      <div
                        className="absolute right-0 top-full pt-3"
                        onMouseEnter={() => openNow(item.label)}
                        onMouseLeave={scheduleClose}
                      >
                        <MiniDropdown items={item.items} onNavigate={closeAll} />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/fastsystemmobel/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
                scrolled
                  ? "border-white/40 text-white hover:bg-white hover:text-[rgb(61,61,61)]"
                  : "border-[rgb(61,61,61)]/30 text-[rgb(61,61,61)] hover:bg-[rgb(61,61,61)] hover:text-white"
              )}
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="https://de.linkedin.com/in/andreas-fast-089245143"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
                scrolled
                  ? "border-white/40 text-white hover:bg-white hover:text-[rgb(61,61,61)]"
                  : "border-[rgb(61,61,61)]/30 text-[rgb(61,61,61)] hover:bg-[rgb(61,61,61)] hover:text-white"
              )}
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>

          {cta && cta.kind === "cta" && (
            <Link href={cta.href} className="fast-btn-pill" onClick={closeAll}>
              {cta.label}
            </Link>
          )}
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Menü"
          className={cn(
            "p-2 transition-colors lg:hidden",
            scrolled ? "text-white" : "text-[rgb(61,61,61)]"
          )}
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>

      {/* Desktop mega panel (centered band below the bar) */}
      {activeMega && (
        <div
          className="absolute inset-x-0 top-full hidden lg:block"
          onMouseEnter={() => openNow(activeMega.label)}
          onMouseLeave={scheduleClose}
        >
          <div className="flex justify-center px-6 pt-3">
            <MegaPanel item={activeMega} onNavigate={closeAll} />
          </div>
        </div>
      )}

      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </header>
  );
}

/** Mobile drawer with a 2-level accordion. Full 3-layer mobile nav is a later step. */
function MobileNav({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-[rgb(61,61,61)] lg:hidden">
      <div className="flex h-24 items-center justify-end px-6">
        <button type="button" aria-label="Schließen" onClick={onClose} className="p-2 text-white">
          <CloseIcon className="h-7 w-7" />
        </button>
      </div>

      <nav className="flex flex-col gap-1 px-6 pb-16">
        {NAV_ITEMS.map((item) => {
          if (item.kind === "cta") {
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="fast-btn-pill mt-4 justify-center"
              >
                {item.label}
              </Link>
            );
          }
          if (item.kind === "link") {
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="border-b border-white/10 py-4 font-[var(--font-urbanist)] text-xl font-medium text-[rgb(237,168,33)]"
              >
                {item.label}
              </Link>
            );
          }
          const isOpen = expanded === item.label;
          const leaves: { title?: string; items: NavLeaf[] }[] =
            item.kind === "mega"
              ? item.columns.map((c) => ({ title: c.title, items: c.items }))
              : [{ items: item.items }];
          return (
            <div key={item.label} className="border-b border-white/10">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setExpanded(isOpen ? null : item.label)}
                className="flex w-full items-center justify-between py-4 font-[var(--font-urbanist)] text-xl font-medium text-white"
              >
                {item.label}
                <ChevronDownIcon
                  className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
                />
              </button>
              {isOpen && (
                <div className="pb-4 pl-1">
                  {leaves.map((group, gi) => (
                    <div key={group.title ?? gi} className="mb-3 last:mb-0">
                      {group.title && (
                        <div className="mb-1 font-[var(--font-poppins)] text-[12px] font-semibold uppercase tracking-wide text-white/50">
                          {group.title}
                        </div>
                      )}
                      <ul className="flex flex-col">
                        {group.items.map((leaf) =>
                          leaf.href ? (
                            <li key={leaf.label}>
                              <Link
                                href={leaf.href}
                                onClick={onClose}
                                className="block py-1.5 text-[15px] text-white/85"
                              >
                                {leaf.label}
                              </Link>
                            </li>
                          ) : (
                            <li
                              key={leaf.label}
                              className="flex items-center gap-2 py-1.5 text-[15px] text-white/35"
                            >
                              {leaf.label}
                              <span className="rounded-full border border-white/15 px-1.5 py-px text-[9px] uppercase text-white/40">
                                bald
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
