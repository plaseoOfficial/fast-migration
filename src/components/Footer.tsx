import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, FOOTER_LOGO_SRC } from "@/lib/content";
import { InstagramIcon, LinkedinIcon, FacebookIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "rgb(61,61,61)", color: "rgb(220,220,220)" }}
    >
      <div className="mx-auto max-w-[1224px] px-6 py-16 lg:py-20">
        {/* Centered social header */}
        <div className="flex flex-col items-center text-center mb-14 lg:mb-16">
          <h3
            className="mb-8 text-white"
            style={{
              fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
              fontSize: "clamp(30px, 3.6vw, 48px)",
              lineHeight: 1,
              letterSpacing: "-1px",
              fontWeight: 500,
            }}
          >
            Folg uns auf Social Media!
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/fastsystemmobel/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-16 w-16 items-center justify-center rounded-md bg-[rgb(17,17,17)] text-white transition-colors hover:bg-[rgb(237,168,33)] hover:text-[rgb(61,61,61)]"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a
              href="https://de.linkedin.com/in/andreas-fast-089245143"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-16 w-16 items-center justify-center rounded-md bg-[rgb(17,17,17)] text-white transition-colors hover:bg-[rgb(237,168,33)] hover:text-[rgb(61,61,61)]"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/fastsystemmobel/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-16 w-16 items-center justify-center rounded-md bg-[rgb(17,17,17)] text-white transition-colors hover:bg-[rgb(237,168,33)] hover:text-[rgb(61,61,61)]"
            >
              <FacebookIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Logo + link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-4">
            <Image
              src={FOOTER_LOGO_SRC}
              alt="Fast Systemmöbel"
              width={160}
              height={56}
              className="h-14 w-auto brightness-0 invert"
            />
          </div>

          <FooterColumn title="Links" links={FOOTER_LINKS.links} className="lg:col-span-2" />
          <FooterColumn title="Leistungen" links={FOOTER_LINKS.leistungen} className="lg:col-span-2" />
          <FooterColumn title="Einsatzgebiete" links={FOOTER_LINKS.einsatzgebiete} className="lg:col-span-2" />
          <FooterColumn title="Rechtliches" links={FOOTER_LINKS.rechtliches} className="lg:col-span-2" />
        </div>

        <div
          className="pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          style={{
            fontFamily: "var(--font-open-sans), Arial, sans-serif",
            fontSize: 12,
            color: "rgba(220,220,220,0.7)",
          }}
        >
          <p>&copy; {year} Fast Systemmöbel. Alle Rechte vorbehalten.</p>
          <p>Möbel nach Maß seit 1996 — Espelkamp</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  className,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
  className?: string;
}) {
  return (
    <div className={className}>
      <h4
        className="mb-4 text-white"
        style={{
          fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
          fontSize: 20,
          fontWeight: 600,
          lineHeight: 1,
        }}
      >
        {title}
      </h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="hover:text-[rgb(237,168,33)] transition-colors"
              style={{
                fontFamily: "var(--font-open-sans), Arial, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                lineHeight: "26px",
                color: "rgba(220,220,220,0.85)",
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
