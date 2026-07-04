# Fast Systemmöbel — Projekt-Übersicht (Wissens-Handoff)

> Stand: 2026-06-16 · Status: **LIVE in Produktion** · Diese Datei ist ein
> in sich geschlossener Wissens-Handoff. Sie soll einer anderen KI (oder einem
> Menschen) ohne weiteres Vorwissen erklären, **was dieses Projekt ist, wie es
> entstand, in welchem Zustand es ist und was noch geplant ist.**

---

## 1. Steckbrief

| Feld | Wert |
|---|---|
| **Projekt** | Pixel-perfekter Rebuild der Website von **Fast Systemmöbel** (Tischler-/Meisterbetrieb, Möbel nach Maß, gegr. 1996) |
| **Ziel** | Migration der alten WordPress-Seite auf einen modernen, sauberen Next.js-Stack mit starker SEO-Architektur |
| **Live-Domain** | https://www.fast-systemmoebel.de (Apex `fast-systemmoebel.de` → 308 auf `www`) |
| **Hosting** | Vercel · Projekt `fast` · Team `plaseo-dev` · Production aliased auf die Domains |
| **Git-Repo** | `plaseoOfficial/fast-migration` (GitHub, public) · Default-Branch `master` |
| **Stack** | Next.js 16.2.1 (App Router, React 19.2.4), TypeScript strict, Tailwind CSS v4 (oklch-Tokens), shadcn/ui, GSAP + Lenis (Scroll-Animationen), Resend (Mail), Matomo + Vercel Analytics |
| **Paketmanager** | **pnpm** (`pnpm@10.33.0`, `--frozen-lockfile` auf Vercel) · Node 24 |
| **Assets** | WP-Mediathek im öffentlichen GCS-Bucket `fast_wp_bucket`, eingebunden via `next.config` `remotePatterns` |
| **Umfang** | ~175 Commits · 53 Section-Komponenten · 11 Content-Module · 13 Live-Seiten + 3 Rechtsseiten |

---

## 2. Wie wir angefangen haben

Das Projekt startete aus dem Open-Source-Template **`ai-website-cloner-template`**
(von JCodesMore) — einem vorgerüsteten Next.js + shadcn/ui + Tailwind-v4-Gerüst
mit einer `/clone-website`-Skill-Pipeline zum Reverse-Engineering beliebiger
Websites.

Der Ablauf war:
1. **Template-Scaffold** (Initial-Commits): Next.js-Basis, Clone-Skills, CI-Quality-Gates.
2. **Reverse-Engineering** der alten Fast-Systemmöbel-WordPress-Seite: Design-Tokens,
   Komponenten-Inventar, Layout & Assets extrahiert (siehe `docs/research/`).
3. **Aufbau einer modularen Section-Library** statt Seiten einzeln zu klonen — das ist
   die zentrale Architektur-Entscheidung (siehe §4).
4. Schrittweiser Aufbau der Seiten, Site-Chrome (Header/Footer + Mega-Nav), Design-System,
   SEO-Modell, Animationen, Formular, Analytics — bis zum Go-Live.

Das Repo wurde später von `my-clone` zu `fast-migration` umbenannt; Produktion läuft im
Vercel-Projekt `fast` (nicht `my-clone`).

---

## 3. Architektur (das Wichtigste in Kürze)

**Leitidee: EINE modulare Section-Library, die alle Seiten teilen.** Seiten sind nur
Kompositionen aus registrierten, props-getriebenen Sektionen — kein Copy-Paste pro Seite.

- **Sektionen** liegen unter `src/components/sections/{home,privat,shared,gewerbe,moebelplaner,kontakt}`
  plus `_shared/`-Primitiven. Wiederverwendbare Sektionen sind **props-driven**; ihre Texte
  liegen getrennt in **Content-Modulen** unter `src/lib/content/`.
- **Registry:** Jede Sektion ist in `src/lib/sections/registry.ts` mit `useCase` + `category`
  registriert; eine durchsuchbare Galerie gibt es unter der internen Route `/library`
  (nicht indexiert). Katalog-Doku: `docs/sections/CATALOG.md`.
- **Pixel-perfekt:** Bei Refactors bleibt das gerenderte Markup/CSS byte-identisch — nur
  Content ändert sich (über Props), nie Klassen/Styles/Spacing/Farben.
- **Design-System:** Token-Vertrag (Farben, Typo, Spacing, Radien, Schatten, Component-Specs)
  in `docs/design-system/TOKENS.md`. Nach UI-Änderungen prüft der read-only Agent **`design-qc`**
  jede Abweichung mit `Datei:Zeile`.
- **Site-Chrome zentralisiert:** Öffentliche Seiten leben in der Route-Group `src/app/(site)/<slug>/page.tsx`;
  `(site)/layout.tsx` rendert automatisch den gemeinsamen `Header` + `Footer`. Seiten geben nur ihr
  eigenes `<main>` zurück. Die `/library`-Showcase steht bewusst **außerhalb** der Group (chrome-frei).
- **Animationen:** Website-weites Scroll-System mit GSAP + Lenis; Homepage hat eine ruhige,
  „premium" wirkende Hero-Pin-Choreografie („Panel gleitet drüber"-Naht, opakes Beige-Panel).
- **Heading-Hierarchie-Konvention:** Genau eine H1 (Hero), Sektionen führen mit H2; Eyebrows,
  Stats, Zitate, Hover-Labels sind **keine** Headings (→ `<p>`/`<blockquote>`).
- **Body-Hintergrund:** Sektionen liegen standardmäßig auf dem Beige-Wash, nicht weiß; Karten
  sind weiß/dunkel obendrauf.

### Wichtige Verzeichnisse
```
src/app/(site)/<slug>/page.tsx   # öffentliche Seiten (Header/Footer automatisch)
src/app/(site)/layout.tsx        # Site-Chrome
src/app/{impressum,datenschutz,agb}/  # Rechtsseiten (außerhalb der Group)
src/components/sections/**        # die Section-Library (53 Komponenten)
src/lib/content/*.ts             # Texte/Props je Seite (11 Module)
src/lib/sections/registry.ts     # Section-Registry (useCase + category)
src/lib/seo/linking-rules.ts     # maschinenlesbares internes-Link-Modell (SSOT)
docs/design-system/TOKENS.md     # Design-Token-Vertrag
docs/seo/internal-linking.md     # Silo-Strategie (narrativ)
docs/seo/brand/FACTS.md          # Single Source of Truth für Fakten/Content
ARCHITECTURE.md                  # vollständige Architektur-Regeln
AGENTS.md                        # Arbeitsregeln für KI-Agents in diesem Repo
```

---

## 4. Komplette Seitenübersicht

**13 Live-Seiten + 3 Rechtsseiten gebaut; 9 Seiten geplant (Backlog).**
URLs sind flach und tragen Trailing-Slash (`trailingSlash: true`, konsistent mit Sitemap).

### Gebaut & live (`built: true`)

| URL | Typ | Silo / Zielgruppe | Eltern-Seite | Content-Modul | Zweck |
|---|---|---|---|---|---|
| `/` | homepage | neutral | — | `home.ts` | Einstieg; „Zwei Welten" Privat \| Gewerbe (BereicheSection) |
| `/moebel-nach-mass/` | pillar-hub | Privat | `/` | `moebel-nach-mass.ts` | Privat-Haupt-Hub |
| `/kuechen-nach-mass/` | cluster-pillar | Privat / kuechen | `/moebel-nach-mass/` | `kuechen-nach-mass.ts` | stärkstes Privat-Cluster |
| `/gewerbe/` | pillar-hub | Gewerbe | `/` | (inline) | Gewerbe-Haupt-Hub |
| `/ladenbau/` | cluster-pillar | Gewerbe / ladenbau | `/gewerbe/` | `ladenbau.ts` | Gewerbe-Cluster |
| `/bueroeinrichtung/` | cluster-pillar | Gewerbe / buero | `/gewerbe/` | `bueroeinrichtung.ts` | Gewerbe-Cluster |
| `/gastronomieeinrichtung/` | cluster-pillar | Gewerbe / gastronomie | `/gewerbe/` | `gastronomieeinrichtung.ts` | Gewerbe-Cluster |
| `/serienmoebel/` | cluster-pillar | Gewerbe / serienmoebel | `/gewerbe/` | `serienmoebel.ts` | B2B; konvertiert über `/kontakt/`, nicht Möbelplaner (`mustExempt`) |
| `/praxiseinrichtung/` | cluster-pillar | Gewerbe / praxis | `/gewerbe/` | `praxiseinrichtung.ts` | Gewerbe-Cluster |
| `/moebelplaner/` | conversion | neutral | `/` | (inline) | Haupt-CTA / Konfigurator |
| `/kontakt/` | conversion | neutral | `/` | (inline) | Kontaktformular (Resend) |
| `/ueber-uns/` | brand | neutral | `/` | `ueber-uns.ts` | Marke/Trust |
| `/referenzen/` | brand | neutral | `/` | `referenzen.ts` | Social Proof / Projektgalerie |
| `/impressum/` | legal | neutral | `/` | — | Pflichtseite |
| `/datenschutz/` | legal | neutral | `/` | — | Pflichtseite (DSGVO; Matomo cookieless dokumentiert) |
| `/agb/` | legal | neutral | `/` | — | Pflichtseite |

Plus die interne, nicht indexierte Showcase **`/library`**.

### Geplant — Backlog (`built: false`, noch nicht gebaut)

| URL | Typ | Silo | Eltern | Hinweis |
|---|---|---|---|---|
| `/einbauschraenke-nach-mass/` | cluster-pillar | Privat | `/moebel-nach-mass/` | Privat-Geschwister-Cluster (MUSS-Link vom Hub blockiert bis gebaut) |
| `/badmoebel-nach-mass/` | cluster-pillar | Privat | `/moebel-nach-mass/` | dito; Interim-Redirect `/badezimmer.html` zeigt noch auf `/moebel-nach-mass/` |
| `/wohnmoebel-nach-mass/` | cluster-pillar | Privat | `/moebel-nach-mass/` | dito |
| `/kuechen-nach-mass/kueche-nach-mass-kosten/` | ratgeber-pillar | kuechen | `/kuechen-nach-mass/` | Kosten-Ratgeber |
| `/kuechen-nach-mass/kueche-planen/` | cluster-article | kuechen | `/kuechen-nach-mass/` | Ratgeber-Artikel |
| `/kuechen-nach-mass/l-kueche-nach-mass/` | product | kuechen | `/kuechen-nach-mass/` | Produktseite |
| `/kuechen-nach-mass/kuechenzeile-nach-mass/` | product | kuechen | `/kuechen-nach-mass/` | Produktseite |
| `/ablauf-massanfertigung/` | brand | neutral | `/` | Trust-/Prozessseite (von vielen Seiten als MUSS/SOLL verlinkt) |
| `/liefergebiet-montage/` | brand | neutral | `/` | regionale Qualifikation |
| `/faq/` | brand | neutral | `/` | zentrale FAQ |

---

## 5. SEO-Architektur

- **Silo-Modell** mit Click-Depth ≤ 3: `homepage → pillar-hub → cluster-pillar → spoke`.
  Zwei Silos: **Privat** (rund um `/moebel-nach-mass/`) und **Gewerbe** (rund um `/gewerbe/`).
- **Regel: keine lateralen Cluster-Links.** Cluster verlinken NICHT aufeinander, nur über ihren
  Hub (`/gewerbe/` bzw. `/moebel-nach-mass/`). (Manche Research-Kits behaupten das Gegenteil —
  es gilt `internal-linking.md`.)
- **Maschinenlesbares Modell** in `src/lib/seo/linking-rules.ts` (SSOT): Page-Graph + MUSS/SOLL/
  DARF-NICHT je Seitentyp + Link-Budgets + Anker-Sets/-Diversität.
- **Audit:** `pnpm run audit:links` prüft den realen Link-Graph gegen das Modell (Dead-Links,
  fehlende MUSS-Links, Cross-Silo, Budgets, Anker-Diversität). Beim Fertigstellen einer Seite:
  Knoten auf `built: true` setzen → das Audit löst auf, welche Backlog-Links jetzt möglich sind.
- **Footer** enthält bewusst nur Pillar-Hubs + Conversion + Legal (kein „Link-Grab").
- **WordPress → Next-Redirects:** ~60 permanente 308-Redirects in `next.config.ts`
  (alte `/leistungen/*`, `/produkte/*.html`, Ratgeber-URLs → flache neue URLs). Quelle:
  `docs/seo/redirects.md`. Einige sind **Interim-Targets**, bis die finale Seite gebaut ist.
- **Strukturierte Daten:** JSON-LD live auf Homepage (inkl. FAQPage) und den Cluster-Seiten
  (LocalBusiness + Service + Breadcrumb + FAQPage).
- **sitemap.ts + robots.ts** vorhanden; `/library` ist disallow. **Google Search Console:
  Property + Sitemap eingereicht** (erledigt).
- **Content-Fakten** werden gegen `docs/seo/brand/FACTS.md` (SSOT) geprüft. Live-Suchvolumina/
  SERP via `node scripts/dataforseo.mjs` (kostet Geld → batchen, nicht loopen).

---

## 6. Funktionen / Integrationen

- **Kontaktformular** (`/kontakt/`): Next.js Server Action `src/lib/actions/kontakt.ts` —
  serverseitige Validierung, Honeypot-Spamschutz, Versand via **Resend**
  (`formular@mail.plaseo.de` → `anfrage@fast-systemmoebel.de`, Reply-To = Absender),
  gebrandete HTML-Mail. Erfolgs-/Fehler-State im UI. **Live.**
- **Analytics (beides live):**
  - **Vercel Analytics** (`<Analytics />` im Root-Layout, cookieless).
  - **Matomo** (Matomo Cloud, EU) — cookieless, IP-Anonymisierung → **kein Consent-Banner nötig**.
  - Zentrale `trackEvent()`-API (`src/lib/analytics.ts`) feuert jeden Event an **beide** Systeme.
  - Globaler Klick-Listener (`AnalyticsEvents.tsx`) trackt Telefon/E-Mail/Maps/Social/FAQ/
    Kontakt/ausgehende Links site-weit; `/library` ausgenommen; keine personenbezogenen Daten.
- **DSGVO:** Kein Cookie-Banner (Matomo cookieless + berechtigtes Interesse). Datenschutzseite
  deckt Matomo, Vercel Analytics, Resend und externe Einbettungen ab.

### Nötige ENV-Variablen (in Vercel gesetzt)
| Variable | Zweck |
|---|---|
| `RESEND_API_KEY` | Mailversand Kontaktformular |
| `KONTAKT_TO_EMAIL` | Empfänger (Default `anfrage@fast-systemmoebel.de`) |
| `NEXT_PUBLIC_MATOMO_URL` / `NEXT_PUBLIC_MATOMO_SITE_ID` | Matomo |
| `FEATURABLE_WIDGET_ID` | (optional) Live Google Reviews — aktuell leer |
| `DATAFORSEO_AUTH` | (nur lokal) SEO-Datenchecks |

---

## 7. Tooling, Commands & Agents

**Commands:** `pnpm dev` · `pnpm build` · `pnpm run check` (lint+typecheck+build) ·
`pnpm run gen:catalog` (Section-Katalog) · `pnpm run audit:links` · `pnpm run seo:data`.

**Repo-spezifische KI-Agents** (`.claude/agents/`):
- `design-qc` — prüft UI gegen das Design-System (Farben/Typo/Spacing/Specs).
- `intern-verlinkung` — kontrolliert/ergänzt interne Links gegen das Silo-Modell, findet Anker.
- `seo-daten` — validiert Keyword-/SERP-Annahmen gegen Live-DataForSEO-Daten.

**Konventionen für KI-Mitarbeit (aus `AGENTS.md`):**
- Bei Chat-Start zuerst `git fetch origin && git merge origin/master` (fertige Seiten landen auf master).
- Vor Seiten-/Section-Arbeit: `ARCHITECTURE.md` + `docs/sections/CATALOG.md` lesen, `/library` ansehen.
- Erst wiederverwenden, dann neu bauen. Neue Section → Komponente + `registry.ts` + `catalog-data.ts` + `gen:catalog`.
- Neue Seite → in `(site)`, Knoten in `linking-rules.ts` registrieren, interne Links beidseitig wiren, `audit:links`.
- **pnpm** verwenden, nicht npm (sonst Lockfile-Drift → Vercel-Build bricht).

---

## 8. Aktueller Stand (2026-06-16)

**Launch-relevant ist alles erledigt — die Seite ist sauber live.** Verifiziert:
Apex→www-Redirect (308), HTTPS 200, `robots.txt` + `sitemap.xml` (200), WP→Next-Redirects
greifen, JSON-LD auf Home + Clustern, Matomo + Vercel Analytics aktiv, Kontaktformular live,
Search Console eingereicht.

**Bewusst nicht weiterverfolgt:** Ladenbau-Wortzahl auf 2.400–2.800 W bringen (bleibt bei
~2.070 W) — Entscheidung 2026-06-16, kein Blocker.

---

## 9. Was weiterhin geplant ist (optional, kein Launch-Blocker)

1. **Backlog-Seiten bauen** (die 9 `built:false`-Knoten aus §4) — der einzige substanzielle
   Rest. Schaltet offene MUSS-Links frei und vertieft die Silos. Reihenfolge-Empfehlung:
   zuerst die viel-verlinkten neutralen Trust-Seiten (`/ablauf-massanfertigung/`, `/faq/`,
   `/liefergebiet-montage/`), dann Privat-Cluster, dann Küchen-Spokes. Danach Interim-Redirects
   (z. B. `/badezimmer.html`) auf die finalen Ziele umbiegen.
2. **`/leistungen/*`-Redirects auf 1 Hop optimieren** (aktuell 2 Hops: Slash-Normalisierung +
   WP→Next). Funktioniert, nur SEO-Feinschliff.
3. **Per-Seite-OG-Images** (aktuell erbt alles das Root-OG-Bild).
4. **Live Google Reviews** aktivieren (`FEATURABLE_WIDGET_ID` setzen), falls gewünscht.

---

## 10. Gotchas / Dinge, die eine andere KI wissen muss

- **„Dies ist NICHT das Next.js, das du kennst."** Das Repo nutzt Next 16 mit teils
  abweichenden Konventionen — vor Code immer die mitgelieferten Docs unter
  `node_modules/next/dist/docs/` prüfen.
- **Pixel-perfekt schlägt Design-QC:** Bei byte-identischen Refactors meldet `design-qc`
  teils vorbestehende Clone-Divergenzen (TOKENS.md §6) — die NICHT „fixen", Pixel-Treue gewinnt.
- **Asset-Dateinamen lügen:** Bilddateinamen entsprechen oft nicht dem Inhalt; vor Verwendung
  ansehen. Es gibt z. B. keine echten Gastro-/Praxis-Projektfotos (teils Platzhalter/Stock nötig).
- **Copy-Längen-Budget:** Headings ≤ ~50 Zeichen, nutzerzentriert (keine Keyword-Listen);
  Keywords in Intro/Eyebrow/Karten auslagern; Textwände splitten statt Sektionen vollstopfen.
- **Heading-Hierarchie** strikt einhalten (eine H1, Sektionen → H2; Eyebrows/Stats/Zitate sind `<p>`).
- **`audit:links`-Regex** erkennt interne Links nur in der Form `{ label, href }` mit lowercase
  `href:` — `ctaHref`/`primaryHref` werden vom Fallback nicht erkannt.
- **Kundendaten-Konvention:** Fakten kommen aus `docs/seo/brand/FACTS.md` — nie raten.
- **Keine Pipeline-/Quality-Gate-Automatik gewünscht** (frühere PRs dazu wurden geschlossen);
  Brand-Voice-Regeln gelten als manuelle Leitlinie. Der `brand-reviewer`-Agent ist plaseo-only,
  nicht für Fast-Copy.
```
