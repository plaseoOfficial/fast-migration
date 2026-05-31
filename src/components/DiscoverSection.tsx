import Image from "next/image";
import { DISCOVER_BLURBS, HOTSPOTS } from "@/lib/content";
import { HotspotLightbulbIcon, HotspotBoxIcon, HotspotLayersIcon } from "@/components/icons";

const HOTSPOT_ICONS = [HotspotBoxIcon, HotspotLightbulbIcon, HotspotLayersIcon];

export function DiscoverSection() {
  return (
    <section
      className="fast-section w-full"
      style={{ backgroundColor: "rgba(203, 191, 181, 0.59)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <p className="fast-eyebrow mb-4 text-center">
          Für Privatkunden, Planer und Gewerbe
        </p>
        <h2
          className="mb-14 text-center"
          style={{
            fontSize: "clamp(36px, 5vw, 65px)",
            lineHeight: 1,
            letterSpacing: "-2px",
            fontWeight: 500,
            color: "rgb(61,61,61)",
          }}
        >
          Entdecke Fast Systemmöbel
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: kitchen photo with hotspots */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md">
              <Image
                src="/images/2026/05/variante_1778229163946_1-scaled.jpg"
                alt="Moderne Küche mit hellen Holzfronten"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              {HOTSPOTS.map((h, i) => {
                const Icon = HOTSPOT_ICONS[i % HOTSPOT_ICONS.length];
                return (
                  <button
                    key={i}
                    type="button"
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    aria-label={h.title}
                  >
                    <Icon className="h-9 w-9 lg:h-11 lg:w-11 drop-shadow-lg transition-transform group-hover:scale-110" />
                    <div className="invisible group-hover:visible absolute left-1/2 top-full mt-2 -translate-x-1/2 w-56 rounded-md bg-white p-3 shadow-lg z-10">
                      <h3
                        className="mb-1"
                        style={{
                          fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
                          fontSize: 20,
                          fontWeight: 500,
                          lineHeight: 1,
                          color: "rgb(61,61,61)",
                        }}
                      >
                        {h.title}
                      </h3>
                      <p className="fast-body-sm text-xs">{h.body}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: horizontal photo of team + intro paragraph */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative h-44 lg:h-56 w-full overflow-hidden rounded-md">
              <Image
                src="/images/2025/11/DSC06340-scaled.jpg"
                alt="Fast Team"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
            <div>
              <h4
                className="mb-4"
                style={{
                  fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
                  fontSize: 22,
                  fontWeight: 500,
                  lineHeight: "28.6px",
                  color: "rgb(61,61,61)",
                }}
              >
                Fast verbindet Handwerk und Design zu ganzheitlichen Möbelkonzepten.
              </h4>
              <p
                className="fast-body"
                style={{ fontSize: 14, lineHeight: "23.8px" }}
              >
                Wir realisieren maßgefertigte Einrichtungen für Wohnräume, Büros, Praxen und
                Gewerbeflächen, die präzise und langlebig sind. Passgenau auf Ihren Raum
                abgestimmt.
              </p>
            </div>
          </div>
        </div>

        {/* 4 blurb cards row — Urbanist h4 18px 500 */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {DISCOVER_BLURBS.map((b) => (
            <div key={b.title}>
              <Image
                src={b.icon}
                alt=""
                width={56}
                height={56}
                className="mb-4 h-14 w-14"
              />
              <h4
                className="mb-2"
                style={{
                  fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: 1,
                  color: "rgb(61,61,61)",
                }}
              >
                {b.title}
              </h4>
              <p
                className="fast-body"
                style={{ fontSize: 14, lineHeight: "23.8px" }}
              >
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
