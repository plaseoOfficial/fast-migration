import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export function KontaktStandort() {
  return (
    <section
      className="py-12 lg:py-[57px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <Reveal>
          {/* Eyebrow */}
          <p
            className="text-center text-[14px] font-medium uppercase text-black"
            style={{ letterSpacing: "2px" }}
          >
            STANDORT
          </p>

          {/* H2 */}
          <h2
            className="mt-2 mb-10 text-center text-[44px] leading-[1.0] font-medium text-black sm:text-[72px] lg:text-[120px] lg:leading-[120px] tracking-[-2px] sm:tracking-[-3px] lg:tracking-[-5px]"
          >
            Wir freuen uns auf Sie!
          </h2>
        </Reveal>

        {/* Location block — info card + full team photo, two columns at lg
            so the whole team stays visible (no crop, nothing overlaid). */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[360px_1fr] lg:items-start lg:gap-10">
          {/* Image — full 3:2 team photo, uncropped */}
          <div className="relative aspect-[3/2] w-full lg:order-2">
            <Image
              src="/images/2025/11/DSC06206-scaled.jpg"
              alt="Team von Fast Systemmöbel"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          {/* Info card — left column at lg, below the photo on mobile */}
          <Reveal
            className="w-full px-8 py-8 lg:order-1 lg:px-10 lg:py-10"
            style={{ backgroundColor: "rgba(231,224,218,0.96)" }}
          >
            <h4
              className="mb-4 text-[28px] leading-[1.1] font-medium text-black lg:text-[50px] lg:leading-[60px] tracking-[-1px] lg:tracking-[-2px]"
            >
              Unser Standort
            </h4>

            <address
              className="not-italic text-[20px] leading-[32px] font-medium text-black"
              style={{ fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif" }}
            >
              Alte Waldstraße 32,
              <br />
              32339 Espelkamp
            </address>

            <Link
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47b0a7e010fcc05b:0x7383530031d88616?sa=X&ved=1t:8290&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[20px] font-medium text-black underline"
              style={{ fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif" }}
            >
              Zu Google Maps
              <ArrowRightIcon className="ml-2 inline-block h-[1em] w-auto align-middle" />
            </Link>

            {/* Öffnungszeiten */}
            <div className="mt-6 border-t border-black/15 pt-5">
              <p
                className="mb-2 text-[14px] font-medium uppercase text-black/60"
                style={{ letterSpacing: "2px" }}
              >
                Öffnungszeiten
              </p>
              <div className="flex justify-between text-[18px] leading-[30px] font-medium text-black">
                <span>Mo&ndash;Fr</span>
                <span>6:00 &ndash; 17:00 Uhr</span>
              </div>
              <div className="flex justify-between text-[18px] leading-[30px] font-medium text-black/60">
                <span>Sa&ndash;So</span>
                <span>Geschlossen</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
