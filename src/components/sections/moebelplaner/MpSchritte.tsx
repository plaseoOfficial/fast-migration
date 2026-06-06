import Image from "next/image";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Online planen",
    description:
      "Nutzen Sie unseren Online-Möbelplaner kostenlos und unverbindlich. Direkt hier auf dieser Seite.",
  },
  {
    title: "Maß wird übernommen",
    description:
      "Ihre Maße – von Höhe und Breite bis zu Korpus und Sockel – fließen direkt in die Fertigung. Kein Hin und Her, keine Übertragungsfehler.",
  },
  {
    title: "Persönliche Beratung",
    description:
      "Nach Ihrer Planung meldet sich jemand von uns bei Ihnen und bespricht den nächsten Schritt.",
  },
] as const;

export function MpSchritte() {
  return (
    <section
      className="py-12 lg:py-[84px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: Heading + Image */}
          <div>
            <h2
              className={cn(
                "text-[37px] leading-[1.05] font-medium tracking-[-1.5px]",
                "lg:text-[65px] lg:leading-[65px] lg:tracking-[-2px]"
              )}
              style={{
                color: "rgb(61,61,61)",
                fontWeight: 500,
              }}
            >
              In drei Schritten zu Ihren Möbeln nach Maß
            </h2>

            <div className="relative mt-8 h-[240px] sm:h-[280px] md:h-[340px] w-full lg:h-[420px]">
              <Image
                src="/images/2025/11/IMG_9120-scaled.jpg"
                alt="Maßgefertigtes Möbeldetail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: 3 Steps */}
          <div className="flex flex-col gap-0">
            {STEPS.map((step, index) => (
              <div
                key={step.title}
                className={cn(
                  "py-6",
                  index !== 0 && "border-t border-black/10"
                )}
              >
                <h3
                  className="text-[20px] leading-[1] font-medium"
                  style={{ color: "rgb(61,61,61)", fontWeight: 500 }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-[14px] leading-[23.8px] font-medium"
                  style={{ color: "rgb(102,102,102)", fontWeight: 500 }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
