# Dev-Handoff — Homepage `/` (1A-SEO-Ausbau)

> Die **Content-Arbeit** (Copy-Vertiefung, Fakten-Fix, FAQ, Familie-als-Rahmen) ist erledigt
> und gemergt (siehe `src/lib/content.ts`, `src/lib/content/home.ts`). Was hier steht, ist die
> **Dev-Arbeit**, die eine Homepage erst wirklich 1A macht — bewusst aus dem content-only-Scope
> ausgelagert. Reihenfolge = Impact. Blueprint: [`homepage.kit.md`](homepage.kit.md).

## 1 · Home-spezifische Metadata (`src/app/(site)/page.tsx`)
Aktuell erbt die Homepage nur den globalen Root-Title. Ergänzen:
```ts
export const metadata: Metadata = {
  title: "Fast Systemmöbel: Möbel nach Maß aus Espelkamp seit 1996", // 50–60 Z.
  description: "Möbel nach Maß vom Meisterbetrieb in Espelkamp – Küchen, Einbauschränke & Gewerbeeinrichtung. Familienbetrieb seit 1996, eigene Fertigung, bundesweite Lieferung.", // 150–160 Z.
  alternates: { canonical: "/" },
  openGraph: { /* title, description, url "/", type "website", siteName, locale de_DE */ },
};
```

## 2 · JSON-LD (neu auf der Homepage)
Muster siehe `src/lib/seo/jsonld.ts` (z.B. `buildReferenzenJsonLd`). Auf `/` ausgeben:
- **`Organization`** — name, url, logo, `sameAs` (Instagram/Facebook @fastsystemmobel, LinkedIn), founder „Johann Fast", foundingDate „1996".
- **`LocalBusiness`** (bzw. `FurnitureStore`) — NAP (Alte Waldstraße 32, 32339 Espelkamp), telephone 05771 9138312, `openingHours` (**09:00–16:00, Termine nach Vereinbarung** — Wochentage noch offen), `areaServed` (~200 km / OWL + bundesweite Lieferung), `geo`.
- **`WebSite`** + `potentialAction` → `SearchAction` (Sitelinks-Searchbox, falls Suche existiert).
- **`FAQPage`** aus `FAQS` (`src/lib/content.ts`).
> ⚠️ Öffnungszeiten gegen FACTS prüfen (Kunde nannte einmal 06–17, Altsite 09–16 → **09–16 verwenden**, Wochentage offen).

## 3 · Neue Section „Familie Fast" (Home-Teaser)
Kleiner Abschnitt zwischen `HandwerkSection` und `RaeumeSection`, der die 2.-Generation-Story
anreißt und auf `/ueber-uns/` weiterführt. Foto folgt aus dem Intake
([`INTAKE-homepage-familie-fast.md`](../brand/INTAKE-homepage-familie-fast.md)).
**Fertige Copy (FACTS-konform, „Familie als Rahmen", keine privaten Details):**
```ts
export const homeFamilie = {
  eyebrow: "Familienbetrieb seit 1996",
  heading: "Zwei Generationen, ein Anspruch",
  body:
    "Was Johann Fast 1996 in einer Garage in Rahden-Tonnenheide begann, führt heute die zweite Generation weiter: Andreas und Peter Fast. Über die Jahre dieselbe Haltung – Möbel nach Maß, die halten, und ein Wort, das gilt. Vom ersten Aufmaß bis zur Montage bleibt alles in einer Hand, im Meisterbetrieb in Espelkamp.",
  ctaLabel: "Unsere Geschichte",
  ctaHref: "/ueber-uns/",
  image: "/images/2025/11/DSC06340-scaled.jpg", // Platzhalter → Familienfoto aus Intake
  imageAlt: "Das Team von Fast Systemmöbel in Espelkamp",
};
```
> Sobald Fasts Intake da ist (Namen/Rollen bestätigt, Foto, evtl. ein Zitat), Copy + Bild final schärfen.

## 4 · Interne Link-Slots Home → Silos (für Sitelinks & Silo-Fluss)
`npm run audit:links` meldet für `/` fehlende SOLL-Links. Die Homepage ist der Link-Hub →
sichtbare Links in die wichtigsten Ziele einbauen (z.B. in `DiscoverSection` oder einer
Service-Übersicht):
- **`/kuechen-nach-mass/`** — stärkstes P1-Cluster (Pflicht-Kandidat).
- **`/moebel-nach-mass/`** und **`/gewerbe/`** — Pillar-Hubs Privat & Gewerbe.
- **`/referenzen/`** — Trust/Social-Proof.
Danach `npm run audit:links` erneut laufen lassen (Ziel: keine `missing-soll` für `/`).
Außerdem: `homeFaq.ctaHref` steht auf `"#"` (toter Anker) → sinnvolles Ziel setzen oder CTA entfernen.

## 5 · Technik-Check
Core Web Vitals (LCP ≤ 2,5 s, CLS, INP), mobil-first, Bilder als next/image mit Maßen,
Hero-Bild priorisiert. Title/Meta-Längen wie oben.
