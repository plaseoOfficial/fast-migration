"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, CTA, LOGO_SRC } from "@/lib/content";
import { MenuIcon, CloseIcon, InstagramIcon, LinkedinIcon, ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[rgb(61,61,61)] shadow-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 lg:px-[60px]">
        {/* Logo (left) */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src={LOGO_SRC}
            alt="Fast Systemmöbel"
            width={150}
            height={52}
            priority
            className={cn("h-12 w-auto transition-all", scrolled && "brightness-0 invert")}
          />
        </Link>

        {/* Right cluster: nav + CTA + social icons */}
        <div className="hidden lg:flex items-center gap-7">
          <nav className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "inline-flex items-center gap-1 text-[15px] font-medium font-[var(--font-urbanist)] transition-colors hover:text-[rgb(237,168,33)]",
                  scrolled ? "text-white" : "text-[rgb(61,61,61)]"
                )}
              >
                {link.label}
                {link.hasDropdown && <ChevronDownIcon className="h-3 w-3" />}
              </Link>
            ))}
          </nav>

          <Link href={CTA.href} className="fast-btn-pill">
            {CTA.label}
          </Link>

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
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Menü"
          className={cn("lg:hidden p-2 transition-colors", scrolled ? "text-white" : "text-[rgb(61,61,61)]")}
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-[rgb(61,61,61)] lg:hidden">
          <div className="flex h-24 items-center justify-end px-6">
            <button
              type="button"
              aria-label="Schließen"
              onClick={() => setOpen(false)}
              className="text-white p-2"
            >
              <CloseIcon className="h-7 w-7" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6 px-6 pt-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl text-white font-medium font-[var(--font-urbanist)]"
              >
                {link.label}
              </Link>
            ))}
            <Link href={CTA.href} className="fast-btn-pill mt-6" onClick={() => setOpen(false)}>
              {CTA.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
