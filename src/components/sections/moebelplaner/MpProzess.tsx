import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function MpProzess() {
  return (
    <section
      className="py-12 lg:py-[46px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left column */}
          <Reveal>
            {/* Heading */}
            <h2
              className={cn(
                "text-[32px] leading-[1.05] font-medium tracking-[-1.5px]",
                "lg:text-[59px] lg:leading-[59px] lg:tracking-[-4px]"
              )}
              style={{
                color: "rgb(23,33,33)",
                fontWeight: 500,
              }}
            >
              Von der Planung bis zur Montage
            </h2>

            {/* Paragraph */}
            <p
              className="mt-5 text-[16px] leading-[28px]"
              style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
            >
              Zu allererst planen Sie kostenlos und unverbindlich direkt auf
              unserer Seite. Im zweiten Schritt melden wir uns bei Ihnen, gehen
              Ihre Planung gemeinsam durch und klären offene Fragen zu Maßen,
              Materialien und Konfiguration. Den letzten Schritt übernehmen wir:
              Fertigung in Espelkamp und Montage durch unser eigenes Team.
            </p>

            {/* Decorative dots */}
            <div className="mt-6 flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: "rgb(237,168,33)" }}
              />
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: "rgb(237,168,33)" }}
              />
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: "rgb(237,168,33)" }}
              />
            </div>
          </Reveal>

          {/* Right column — image */}
          <Reveal className="w-full">
            <Image
              src="/images/2025/11/20161103_150622294_iOS-scaled.jpg"
              alt="Maßgefertigter Einbauschrank"
              width={612}
              height={400}
              className="h-[260px] w-full object-cover lg:h-[400px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
