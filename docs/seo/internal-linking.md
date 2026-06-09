# Internal Linking — Silo Model & Backlog

> **Read this whenever you add or finish a page.** We launch *clean*: no dead
> links. Links that can't be wired yet (target page not built) live in the
> **Backlog** below. When a new page appears, wire every backlog link whose
> target now exists — in **both** directions — and add new pending links for the
> new page's still-missing targets.
>
> Source of the full model: `~/Downloads/Fast Systemmöbel - Website Planung - 07 Interne Verlinkung.csv`.
>
> **Machine-readable + automated:** the model is encoded in
> [`src/lib/seo/linking-rules.ts`](../../src/lib/seo/linking-rules.ts) (page graph, MUSS/SOLL/DARF-NICHT,
> anchor sets, budgets). Run **`npm run audit:links`** to audit the real link graph against it, or use the
> **`intern-verlinkung`** agent to control, insert and monitor links + find anchors. When a page ships,
> flip its node to `built: true` in `linking-rules.ts` so the audit auto-resolves newly unblocked links.

## URL architecture (flat silos)

Old `/leistungen/*` URLs are retired (308 redirects in `next.config.ts`).

```
/                         Homepage (authority distributor)
├─ /moebel-nach-mass/     Pillar-Hub (Privat)
│   └─ /kuechen-nach-mass/   Cluster-Pillar ✓ built
│       └─ (product / ratgeber / cluster-article pages — planned)
├─ /gewerbe/              Pillar-Hub (Gewerbe)
│   ├─ /gewerbe/ladenbau/         Cluster-Pillar ✓ built
│   ├─ /bueroeinrichtung/         Cluster-Pillar ✓ built (flat URL)
│   ├─ /gastronomieeinrichtung/   Cluster-Pillar ✓ built (flat URL)
│   ├─ /serienmoebel/             Cluster-Pillar ✓ built (flat URL)
│   └─ /praxiseinrichtung/        Cluster-Pillar ✓ built (flat URL)
├─ /moebelplaner/         Conversion landing page
├─ /kontakt/              Conversion
└─ /ueber-uns/            Brand/authority page (E-E-A-T; links out to both hubs)
```

> Gewerbe clusters use **flat URLs** (`/bueroeinrichtung/`, not `/gewerbe/bueroeinrichtung/`),
> matching the flat-IA relaunch. They are clusters of the Gewerbe hub by topic, not by URL nesting.

**Built today:** `/`, `/moebel-nach-mass/`, `/kuechen-nach-mass/`, `/gewerbe/`, `/gewerbe/ladenbau/`, `/bueroeinrichtung/`, `/gastronomieeinrichtung/`, `/serienmoebel/`, `/praxiseinrichtung/`, `/moebelplaner/`, `/kontakt/`, `/ueber-uns/`, `/referenzen/`.

## Rules (condensed)

- **Click-depth ≤ 3.** Hub → Cluster → Product. Each child links **up** to its direct parent (breadcrumb + 1 contextual in-content link).
- **Silo integrity.** Privat silos don't link to Gewerbe silos (and vice versa), except hub↔hub (Ebene 0–1). A Cluster-Pillar must not link to another silo's clusters.
- **Contextual > boilerplate.** ≥3 contextual in-body links per page. Footer = only Pillar-Hubs + legal (no link-graves).
- **Anchor diversity.** Vary anchors: exact ("Küchen nach Maß"), partial ("maßgefertigte Küche"), brand+keyword, descriptive, max ~10% generic. Exact-match anchor to one URL: max 2–3× per page.
- **Conversion targets.** Every strong page links to `/moebelplaner/` and `/kontakt/`. Dofollow internal links only.
- **Max body links:** Hub 10–12 · Cluster-Pillar 8–10 · Product 5–7 · Conversion 3–5.

## Backlog — pending internal links (blocked until target exists)

| From (page) | Should link to | Type | Blocked until |
|---|---|---|---|
| `/kuechen-nach-mass/` | `/kuechen-nach-mass/kueche-nach-mass-kosten/` | MUSS (cost ratgeber) | Kosten-Ratgeber built |
| `/kuechen-nach-mass/` | Product pages (Küchenzeile / L-Küche / Kochinsel nach Maß) | MUSS (spokes) | Product pages built |
| `/kuechen-nach-mass/` | `/kuechen-nach-mass/kueche-planen/`, `/kuechen-nach-mass/tischlerkueche-vs-kuechenstudio/` | SOLL (cluster articles) | Articles built |
| `/kuechen-nach-mass/` | `/ablauf-massanfertigung/` | SOLL (trust) | Page built |
| `/kuechen-nach-mass/` (MnmWeitereLeistungen) | privat-only cards (drop cross-silo `/gewerbe/` discovery card) | cleanup | sibling privat clusters built |
| `/kuechen-nach-mass/` (FaqSection) + `/moebel-nach-mass/`, `/gewerbe/`, `/moebelplaner/` | `/faq/` ("Zum FAQ", currently `#`) | SOLL | `/faq/` built |
| `/moebel-nach-mass/` | sibling cluster pillars (Einbauschränke / Badmöbel / Wohnmöbel nach Maß) | MUSS (hub→clusters) | clusters built |
| `/` (Homepage) | flat hub links `/moebel-nach-mass/`, `/gewerbe/`, `/moebelplaner/`, `/kontakt/` (MUSS) + SOLL `/kuechen-nach-mass/`, `/referenzen/`, `/ablauf-massanfertigung/` | MUSS/SOLL | homepage nav/links still use `#`-anchors → update during homepage relaunch pass |
| Header nav "Leistungen" dropdown | hub + cluster links | nav | dropdown not yet populated |
| `/moebelplaner/`, `/kontakt/` | `/ablauf-massanfertigung/`, `/liefergebiet-montage/` | MUSS | pages built |
| `/ueber-uns/` (UeberNavCards "FAQ" card, currently `#`) | `/faq/` | SOLL | `/faq/` built |
| Gewerbe clusters (`/bueroeinrichtung/`, `/gastronomieeinrichtung/`, `/serienmoebel/`, `/praxiseinrichtung/`) | their product / ratgeber spokes (e.g. Konferenztisch, Empfangstresen, …) | MUSS (cluster→product) | spoke pages built |
| Gewerbe clusters (FaqSection "Zum FAQ", currently `#`) | `/faq/` | SOLL | `/faq/` built |
| Gewerbe clusters | `/referenzen/`, `/ablauf-massanfertigung/`, `/liefergebiet-montage/` | SOLL (trust) | pages built |
| City pages (`/einsatzgebiete/*` or flat city×service) | relevant clusters | new silo | city pages migrated/built |

### ⚠️ Interim retargets — REVERT when the real target page ships

These links point at a *built but not ideal* page to avoid dead `#` links at launch.
When the proper target page is built, repoint them (and drop this row):

| Where (file · field) | Currently (interim) | Repoint to when built |
|---|---|---|
| `moebel-nach-mass.ts` · `mnmWeitereCards` "Raumkonzepte" | `/moebelplaner/` | a `/raumkonzepte/` (or room-concept) page |
| `moebel-nach-mass.ts` · `mnmWeitereCards` "Fertigung" | `/ueber-uns/` | `/ablauf-massanfertigung/` |
| `moebel-nach-mass.ts` · `mnmWeitereCards` "Montage" | `/kontakt/` | `/liefergebiet-montage/` |

## Done (wired)

- **Gewerbe hub → clusters** (`/gewerbe/` MnmWeitereLeistungen cards): `/bueroeinrichtung/`, `/praxiseinrichtung/`, `/gastronomieeinrichtung/`, `/gewerbe/ladenbau/`, `/serienmoebel/`. *(hub → clusters, silo distribution)*
- **Each Gewerbe cluster → `/gewerbe/`** (breadcrumb "Gewerbe" up-link, Ebene 1→0 within silo).
- **Each Gewerbe cluster → `/moebelplaner/`** (IntroStats col3 CTA + MnmMoebelplaner CTA) **and `/kontakt/`** (IntroStats col1, both ExpandingImageCtas, FaqSection) — conversion targets.
- `/kuechen-nach-mass/` → `/moebel-nach-mass/` (breadcrumb + MnmWeitereLeistungen card "Möbel nach Maß").
- `/kuechen-nach-mass/` → `/moebelplaner/` (MnmMoebelplaner CTA + IntroStats col3 contextual).
- `/kuechen-nach-mass/` → `/kontakt/` (IntroStats col1, both ExpandingImageCtas, FaqSection CTA).
- `/moebel-nach-mass/` → `/kuechen-nach-mass/` (MnmWeitereLeistungen card "Küchen nach Maß"). *(hub → cluster)*
- Footer (all pages) → Pillar-Hubs `/moebel-nach-mass/`, `/gewerbe/`, `/moebelplaner/` only.
- **Header "Über uns" dropdown → `/ueber-uns/`** (nav leaf now live).
- `/ueber-uns/` → `/moebel-nach-mass/` (UeberWofuer "Unsere Leistungen" + UeberNavCards "Leistungen" card). *(authority → Privat hub)*
- `/ueber-uns/` → `/referenzen/` (UeberValues "Beispielprojekte" — repointed from the interim `/gewerbe/` now that `/referenzen/` ships). *(authority → trust hub)*
- `/ueber-uns/` → `/kontakt/` (UeberNavCards "Kontakt" card) — conversion target.

### `/referenzen/` launch (2026-06)

- **`/referenzen/` shipped** as the neutral trust **Referenz-Hub (Aggregator)**: a CollectionPage/ItemList
  bundling realised projects from **both** pillars. Type `brand`, silo-neutral → may link into Privat *and*
  Gewerbe (no silo violation). `built: true` + `contentModule: "referenzen"` in `linking-rules.ts`; added to
  `sitemap.ts` (prio 0.7). New reusable `ReferenzenGrid` section (category `shared`, useCase `reference-grid`).
- **Outbound (forward) links wired** on `/referenzen/`: breadcrumb → `/`; pillar links → `/moebel-nach-mass/`
  + `/gewerbe/`; project cards → `/kuechen-nach-mass/`, `/moebel-nach-mass/`, `/gewerbe/ladenbau/`,
  `/bueroeinrichtung/`, `/gastronomieeinrichtung/`, `/praxiseinrichtung/`; CTAs → `/kontakt/` + `/moebelplaner/`.
  (9 distinct targets, within the brand body-link budget of 10.)
- **`/ueber-uns/` "Beispielprojekte" → `/referenzen/`** (repointed from interim `/gewerbe/`).
### Reverse SOLL trust-links → `/referenzen/` (2026-06-Pass)

Wired via `MnmWeitereLeistungen cards`-Prop (neue silo-konforme Karten-Arrays je Content-Modul):

- **`/kuechen-nach-mass/`** → `/referenzen/` Anker: „Küchenprojekte ansehen" (`WEITERE_LEISTUNGEN_CARDS`-Karte in `kuechen-nach-mass/page.tsx`)
- **`/moebel-nach-mass/`** → `/referenzen/` Anker: „Projekte ansehen" (`mnmWeitereCards` in `moebel-nach-mass.ts`)
- **`/bueroeinrichtung/`** → `/referenzen/` Anker: „Projekte ansehen" (`bueroWeitereCards` in `bueroeinrichtung.ts`)
- **`/gastronomieeinrichtung/`** → `/referenzen/` Anker: „Projekte ansehen" (`gastroWeitereCards` in `gastronomieeinrichtung.ts`)
- **`/serienmoebel/`** → `/referenzen/` Anker: „Projekte ansehen" (`serienWeitereCards` in `serienmoebel.ts`)
- **`/praxiseinrichtung/`** → `/referenzen/` Anker: „Projekte ansehen" (`praxisWeitereCards` in `praxiseinrichtung.ts`)

Gleichzeitig ersetzt die neue Karten-Array-Übergabe die Default-Cards (die fälschlicherweise auf `/moebel-nach-mass/` — Privat-Silo — zeigten) für alle Gewerbe-Cluster.

- **Mixmarkt project card → `/gewerbe/ladenbau/`** (in-silo cluster). Repoint to a future
  `/gewerbe/ladenbau/referenzen/mixmarkt/` detail page when that ships (and embed the project as a teaser on
  the Ladenbau cluster page) — the aggregator's intended hub→detail wiring.

> **Reverse SOLL trust-links → `/referenzen/` (Status nach 2026-06-Pass):**
> 6 von 8 wired (see "Done" block below). Noch offen: `/moebelplaner/` und `/kontakt/`.
> Beide Seiten haben hardcodierte Komponenten ohne Content-Props (`MpSchritte`, `MpIntro`,
> `MpProzess`, `KontaktFormularHero`, `KontaktStandort`). Ein Link ist dort nur durch eine
> Markup-Änderung möglich — das verstößt gegen den Architektur-Grundsatz (nur Daten-Props).
> Lösung: bei der nächsten strukturellen Überarbeitung dieser Seiten einen props-fähigen
> "Trust-Link"-Slot ergänzen (z. B. optionale `trustLinks`-Prop in `FaqSection` oder ein
> neuer schlanker `TrustBadge`-Abschnitt vor dem FAQ-Block).

### Wired in the `audit:links` pass (2026-06)

- **Homepage** `homeRaeume`: `#kontakt` → `/kontakt/`, `#ueber-uns` → `/ueber-uns/` (dead placeholders removed).
- **Footer Menü** (`FOOTER_LINKS.links`): Home → `/`, Leistungen → `/moebel-nach-mass/`, Über uns → `/ueber-uns/`, Kontakt → `/kontakt/`. *(Ratgeber/FAQ stay `#` until those pages ship.)*
- **`/gewerbe/ladenbau/`** breadcrumb up-link fixed: retired `/leistungen/gewerbeeinrichtung` → `/gewerbe/` (canonical, no redirect hop; satisfies the cluster→hub MUSS).
- **Dead `/project/mixmarkt/`** repointed in-silo: `/moebel-nach-mass/` IntroStats col3 → `/kuechen-nach-mass/`; `/gewerbe/` IntroStats col3 → `/gewerbe/ladenbau/`.
- **`/moebelplaner/`** hero CTA `#moebelplaner` → external planner URL.
- **`/ueber-uns/` added to `sitemap.ts`** (was built but unlisted).
- Removed unused legacy `NAV_LINKS` (phantom `#` placeholders).
- Canonical trailing-slash fixes for `/kontakt`, `/moebel-nach-mass` in touched modules.

> Still open (need a render slot / target page, surfaced by `npm run audit:links`):
> Homepage body MUSS-links to the two hubs + `/moebelplaner/` (header nav covers them site-wide; a
> contextual in-body link still to be placed); strong pages link to the **external** planner, not the
> internal `/moebelplaner/` page (judgment call); legal pages → `/`; the remaining `#` are genuinely
> backlog-blocked (`/faq/`, `/ratgeber/`, city pages, cookie policy); broader canonical sweep of `nav.ts`.
