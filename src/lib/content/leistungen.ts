/**
 * Content for the `/alle-leistungen/` overview page (brand/neutral, Typ `brand` im
 * Linking-Modell). Pure copy, no imports, so the `audit:links` script can load
 * it with Node type-stripping like every other content module.
 *
 * DIE LISTE SELBST STEHT HIER NICHT. Sie wird beim Rendern automatisch aus
 * `PAGES` in `src/lib/seo/linking-rules.ts` gebaut (nur `built: true`,
 * gruppiert über `audience` + `parent`), siehe
 * `src/app/(site)/alle-leistungen/leistungen-data.ts`:
 *   - Titel   = `ANCHORS[slug].exact[0]` (Fallback: Meta-Title der Seite ohne
 *               „| Fast Systemmöbel“, sonst der Slug)
 *   - Satz    = Nutzen-Satz aus der Meta-Description der Seite
 *               (`export const metadata` in ihrer page.tsx), Fallback: nur Titel
 * Eine neue Seite erscheint also ohne Handarbeit, sobald sie in PAGES mit
 * `built: true` steht.
 *
 * `LEISTUNGEN_OVERRIDES` ist nur für Feinschliff: wenn der automatisch
 * abgeleitete Titel/Satz einer Seite schlecht liest, hier per Slug
 * überschreiben. Leer lassen ist der Normalfall.
 *
 * Fakten nur aus docs/seo/brand/FACTS.md: Fertigung in Espelkamp, Lieferung
 * bundesweit, Montage durch das eigene Team im Umkreis von rund 200 km,
 * kostenloses Aufmaß. Sie-Anrede, keine Gedankenstriche (BRAND_VOICE.md).
 */

export const PAGE_PATH = "/alle-leistungen/";

export const MOEBELPLANER_URL = "https://moebelplaner.fast-systemmoebel.de/";

export const leistungenMeta = {
  title: "Unsere Leistungen: Möbel nach Maß und Gewerbe | Fast",
  description:
    "Alle Leistungen von Fast Systemmöbel im Überblick: Küchen, Bad, Einbauschränke und Wohnmöbel nach Maß sowie Einrichtung für Büro, Laden, Gastro und Praxis.",
};

export const leistungenHero = {
  title: "Unsere Leistungen",
  bgImage: "/images/serienmoebel/serie-galerie-cnc-halle.jpg",
  intro:
    "Wir planen und fertigen Möbel nach Maß in unserem Meisterbetrieb in Espelkamp, für Ihr Zuhause und für Ihr Unternehmen. Privatkunden beliefern wir bundesweit, im Umkreis von rund 200 km um Espelkamp montiert unser eigenes Team.",
  breadcrumb: [
    { label: "Fast Systemmöbel", href: "/" },
    { label: "Leistungen" },
  ],
};

export type LeistungenAudience = "privat" | "gewerbe";

/** Per-audience copy. `lead` may contain `[Anker](/ziel/)` inline-link markers. */
export const leistungenSections: Record<
  LeistungenAudience,
  { id: string; heading: string; jumpLabel: string; lead: string; hubCtaLabel: string }
> = {
  privat: {
    id: "privat",
    heading: "Privat",
    jumpLabel: "Privat",
    lead: "Für Ihr Zuhause: Küche, Bad, Einbauschrank, Wohnzimmer und Hauswirtschaftsraum, jeweils auf den Millimeter in Ihren Raum geplant. Den Einstieg in alle Bereiche finden Sie unter [Möbel nach Maß](/moebel-nach-mass/).",
    hubCtaLabel: "Zur Übersicht Möbel nach Maß",
  },
  gewerbe: {
    id: "gewerbe",
    heading: "Gewerbe",
    jumpLabel: "Gewerbe",
    lead: "Für Büro, Laden, Gastronomie und Praxis sowie Möbel in Serie. Wie wir Projekte für Unternehmen planen und umsetzen, lesen Sie unter [Gewerbeeinrichtung](/gewerbe/).",
    hubCtaLabel: "Zur Übersicht Gewerbeeinrichtung",
  },
};

export const leistungenAbschluss = {
  heading: "Ihr Vorhaben steht nicht in der Liste?",
  body: "Jedes Möbel bei uns ist eine Einzelanfertigung. Planen Sie selbst im Online-Möbelplaner oder schildern Sie uns Ihr Projekt, das Aufmaß vor Ort ist kostenlos.",
  planerLabel: "Möbel online planen",
  kontaktLabel: "Beratung anfragen",
  kontaktHref: "/kontakt/",
  trust:
    "Was wir schon gebaut haben, zeigen unsere [Referenzen](/referenzen/). Wer hinter den Möbeln steht, lesen Sie unter [Über uns](/ueber-uns/).",
};

/** Optional manual polish per slug. Normally empty: the list fills itself. */
export const LEISTUNGEN_OVERRIDES: Record<string, { title?: string; text?: string }> = {
  // Automatisch käme nur „Geplant, gefertigt und vom eigenen Team montiert.“
  // Ergänzt um den zweiten Satz derselben Meta-Description.
  "/einbauschraenke-nach-mass/": {
    text: "Geplant, gefertigt und vom eigenen Team montiert, auch für Dachschrägen und Nischen.",
  },
};

/** Small label shown next to guide-type entries (cluster-article / ratgeber-pillar). */
export const RATGEBER_LABEL = "Ratgeber";
