import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, FOOTER_LOGO_SRC } from "@/lib/content";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/fastsystemmobel/" },
  { label: "LinkedIn", href: "https://de.linkedin.com/in/andreas-fast-089245143" },
  { label: "Facebook", href: "https://www.facebook.com/fastsystemmobel/" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "rgb(61,61,61)", color: "rgb(220,220,220)" }}
    >
      <div className="mx-auto max-w-[1224px] px-6 pt-16 lg:pt-20">
        {/* Top: brand block (left) + link columns (right) */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
          {/* Brand block */}
          <div className="lg:max-w-[340px]">
            <Image
              src={FOOTER_LOGO_SRC}
              alt="Fast Systemmöbel"
              width={160}
              height={56}
              className="h-14 w-auto brightness-0 invert"
            />
            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-open-sans), Arial, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                lineHeight: "24px",
                color: "rgba(220,220,220,0.7)",
              }}
            >
              Maßmöbel vom Meisterbetrieb in Espelkamp. Planung, Fertigung und
              Montage aus einer Hand. Seit 1996.
            </p>
            <p
              className="mt-8"
              style={{
                fontFamily: "var(--font-open-sans), Arial, sans-serif",
                fontSize: 12,
                color: "rgba(220,220,220,0.55)",
              }}
            >
              &copy; {year} Fast Systemmöbel. Möbel nach Maß seit 1996.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:flex lg:gap-x-12">
            <FooterColumn title="Menü" links={FOOTER_LINKS.links} />
            <FooterColumn title="Leistungen" links={FOOTER_LINKS.leistungen} />
            <FooterColumn title="Social" links={SOCIAL_LINKS} />
            <FooterColumn title="Rechtliches" links={FOOTER_LINKS.rechtliches} />
          </div>
        </div>

        {/* Oversized brand watermark — clipped at the bottom edge */}
        <div aria-hidden className="relative mt-12 h-[13vw] min-h-[84px] lg:mt-16">
          <span
            className="absolute bottom-0 left-0 block translate-y-[26%] whitespace-nowrap"
            style={{
              fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
              fontSize: "clamp(48px, 12vw, 160px)",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.05em",
              color: "rgba(255,255,255,0.06)",
            }}
          >
            Fast Systemmöbel
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h4
        className="mb-4 text-white"
        style={{
          fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
          fontSize: 15,
          fontWeight: 600,
          lineHeight: 1,
        }}
      >
        {title}
      </h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => {
          const external = link.href.startsWith("http");
          const linkStyle = {
            fontFamily: "var(--font-open-sans), Arial, sans-serif",
            fontSize: 14,
            fontWeight: 500,
            lineHeight: "26px",
            color: "rgba(220,220,220,0.85)",
          } as const;
          return (
            <li key={link.label}>
              {external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[rgb(237,168,33)]"
                  style={linkStyle}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="transition-colors hover:text-[rgb(237,168,33)]"
                  style={linkStyle}
                >
                  {link.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
