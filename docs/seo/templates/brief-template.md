<!-- Vorlage für jeden per-Seite-Brief. Die Content-Engine füllt sie pro URL aus → docs/seo/briefs/<slug>.md -->
# Content-Brief: <Seitentitel> (`<url>`)

> Quelle: Content-Engine (SERP + Konkurrenz + WDF*IDF + Brand) · Stand: <Datum>
> Status: [ ] Entwurf  [ ] geprüft (QC)  [ ] vom Kunden freigegeben

## 0 · Meta
- **URL / Slug:** `<url>` / `<slug>`
- **Seitentyp / Pillar:** <Hub | Cluster-Pillar | Produktseite | Ratgeber> / <Privat | Gewerbe>
- **Launch-Phase:** <P1/P2/P3>
- **Primär-Keyword:** `<kw>`
- **Such-Intent:** <C/I/T>
- **Content-Modul:** `src/lib/content/<slug>.ts`
- **Sections (Reuse, aus CATALOG.md):** <z. B. MnmHero · MnmIntroStats · MnmTypische · MnmWarum · MnmGeschichte · FAQ · ExpandingImageCta>

## 1 · Suchintention & Zielgruppe
- **Job-to-be-done:** Was will der Nutzer hinter `<kw>` wirklich erreichen?
- **Persona / Funnel-Phase:** <Wer? B2C/B2B, Recherche vs. Kaufabsicht>
- **Top-5 Nutzerfragen:** 1) … 2) … 3) … 4) … 5) …

## 2 · SERP-Analyse (Google Top 10, DE)
- **Dominante Seitentypen/Formate:** <Ratgeber, Produkt, Kategorie …>
- **Ø Wortzahl Top-10:** <…>
- **Featured Snippet / PAA:** <vorhanden? Format: Liste/Tabelle/Absatz>
- **Pflicht-Abdeckung (was alle Top-3 haben):** …

## 3 · Konkurrenz & Content-Gaps
- **Direkte Wettbewerber im SERP:** …
- **Was sie abdecken / was fehlt:** …
- **Unser Winkel (womit Fast schlägt):** Meisterbetrieb · eigene Fertigung Espelkamp · Aufmaß + Montage aus einer Hand · Region OWL/200 km · eigener Möbelplaner

## 4 · Keyword-Set
- **Primär:** `<kw>`
- **Sekundär (3–8):** …
- **LSI / Entitäten (Pflicht-Begriffe):** …
- **Keywords „aufmachen" (eigene Abschnitte/Sub-Themen):** …

## 5 · WDF*IDF — thematische Pflichtterme
| Term | Wichtigkeit | im Entwurf abgedeckt? |
|---|---|---|
| … | hoch/mittel | ☐ |

## 6 · Content-Tiefe & Umfang
- **Ziel-Wortzahl:** <Korridor, orientiert am SERP-Schnitt + Tiefe-Bonus>
- **Pflicht-Unterthemen:** …
- **Tiefe-Differenzierer (besser/tiefer als SERP):** …

## 7 · Struktur / Outline (→ mappt auf Section-Props)
- **H1:** …
- **Meta-Title (≤ 60 Z.):** …
- **Meta-Description (≤ 155 Z.):** …
- **Abschnitte (H2/H3):** je Abschnitt → Zweck · Kernaussage · Ziel-Keywords · **Section-Prop-Mapping** (welches Feld im Content-Modul)
- **FAQ (≥ 5):** Frage → Kernantwort (speist FAQPage-Schema)

## 8 · E-E-A-T-Elemente (Pflicht — Details in eeat-checklist.md)
- **Experience:** konkretes Projekt/Detail/Region
- **Expertise:** Meisterbetrieb, Prozess, Maschinen (Homag/CNC), Material
- **Trust:** NAP, Garantie, Made in Germany, Aufmaß + eigene Montage
- **Owner/Meister-Bezug:** wo sinnvoll (z. B. Über-uns, Story)
- **Belegbare Zahlen NUR aus `FACTS.md`** (🟡/❓ nicht behaupten)

## 9 · Schema-Markup
- **Typen (aus URL-Master):** …
- **Besonderheiten:** FAQPage (aus §7) · BreadcrumbList · Service/Product/CollectionPage …

## 10 · Interne Verlinkung (laut `internal-linking.md`)
- **Eingehend (von):** …
- **Ausgehend (zu) — ≥ 3 kontextuell:** …
- **Conversion-Links:** `/moebelplaner/` · `/kontakt/`
- **Ankertext-Vorschläge (divers, kein Exact-Match-Spam):** …

## 11 · CTA
- **Primär:** Möbelplaner · **Sekundär:** Kontakt/Telefon-Sticky

## 12 · Brand-Voice-Hinweise für diese Seite (aus `BRAND_VOICE.md`)
- Ton/Perspektive · spezifische Do/Don't für dieses Thema

## 13 · Quellen & Belege
- SERP-/Wettbewerbs-Quellen (URLs) · Datenbelege
