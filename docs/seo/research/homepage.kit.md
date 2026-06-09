# Research-Kit — Homepage `/` (Brand-Landing + Autoritäts-Hub)

> **Zweck:** Die Homepage ist die wichtigste Seite der Site: Brand-Landing für „Fast
> Systemmöbel"-Suchen **und** der interne Link-Hub, der Autorität ins ganze Silo verteilt.
> Dieses Kit hält fest, was eine **1A-SEO-Homepage 2026** braucht, mappt es auf Fast und
> trennt **Content-Arbeit** (jetzt) von **Dev-Handoff** (Schema/Meta/Link-Slots).
> Stand: 2026-06-09. Alle Zahlen/Claims gegen [`../brand/FACTS.md`](../brand/FACTS.md) geprüft.

## Ziel-Keyword & Intent
- **Primär:** „Möbel nach Maß Meisterbetrieb" (Keyword-Map, 600–1.000 SV) + Brand „Fast Systemmöbel".
- **Intent:** gemischt — Brand-Navigational (kennt Fast schon → schnell orientieren & routen) **und**
  kommerziell (Möbel nach Maß). Hero darf emotional/Brand bleiben (Kundenwunsch); die
  Keyword-Substanz trägt der Body.

## Was 2026 auf eine 1A-SEO-Homepage gehört (Best Practice)
1. **Above-the-fold beantwortet in <5 Sek.:** Was macht die Firma? Wo? Was soll ich tun?
   Trust sofort sichtbar (Sterne, #Bewertungen, Jahre im Geschäft, Meisterbetrieb, echte Fotos).
2. **Klarer Value-Proposition / H1** mit Marken-Zweck (+ Keyword, soweit Marke es zulässt).
3. **E-E-A-T / Entity:** Marke als klare Entität — Familienbetrieb-Story, echte Zahlen,
   Team-/Projektfotos, Standort. Google bewertet Brands als Knowledge-Graph-Entitäten.
4. **Autoritäts-Hub:** prominente interne Links in alle wichtigen Leistungs-/Silo-Seiten,
   thematisch gruppiert (Privat / Gewerbe). Flache Hierarchie ≤3 Klicks. → speist **Sitelinks**.
5. **Trust-Block:** Bewertungen, echte Fotos, Referenzen/Logos, Garantie-/Service-Versprechen.
6. **Prozess/Ablauf** transparent (Beratung → Aufmaß → Planung → Fertigung → Montage).
7. **FAQ in Q&A-Form** (gut für AI-Snippets & `FAQPage`-Schema).
8. **NAP + klare CTAs** (Kontakt / tap-to-call / Möbelplaner).
9. **Schema-Trio:** `Organization` + `LocalBusiness` + `WebSite`(+`SearchAction`) + `FAQPage`.
10. **Technik:** Core Web Vitals (LCP ≤2,5 s), mobil-first, Title 50–60 Z., Meta 150–160 Z.
11. **Freshness:** Stats/Testimonials regelmäßig aktualisieren.

## Mapping auf Fast — Ist-Stand & Maßnahmen

| Element | Ist-Stand Homepage | Maßnahme | Scope |
|---|---|---|---|
| Hero | „Fast Systemmöbel" + emotionaler O-Ton | bleibt (Brand-Landing, Kundenwunsch) | — |
| Value-Prop / „Wer/Was/Wo" | nur im Discover-Eyebrow | Discover-Teamtext verdichtet: Familienbetrieb 2. Gen., Meisterbetrieb Espelkamp/OWL, Leistungen, bundesweit | **Content ✓** |
| Trust-Zahlen | „25+ / 4.000+ / 12+" (2 davon **Falsch-Claims**) | → **30+ (seit 1996) / 4.000+ / 72.000+** (FACTS-konform) | **Content ✓** |
| Familienbetrieb-Story | nur Teaser „Unsere Geschichte" → /ueber-uns | Familie als Rahmen im Body + eigener Home-Teaser „Familie Fast" | **Content + Dev** |
| Prozess/Ablauf | knapp | Aufmaß (kostenlos) + 3D-Planung + eigene Montage in Quality + FAQ | **Content ✓** |
| Lokal + Liefergebiet | fehlte | Espelkamp/OWL + bundesweit + ~200 km Montage (Minden/Bielefeld/Osnabrück/Hannover) | **Content ✓** |
| Gewerbe-Silo | nur Footer | Gewerbe im Body + FAQ sichtbar; Links in Silos | **Content ✓ / Links Dev** |
| FAQ | 4 → **6** (Q&A) | bundesweit/Montage + Gewerbe ergänzt | **Content ✓** |
| Interne Links Home→Silos | nur Footer/Teaser | Link-Slots in Discover/Service-Übersicht in /moebel-nach-mass/, /gewerbe/ etc. | **Dev-Handoff** |
| Schema | **keins** | `Organization` + `LocalBusiness`(NAP, Öffnungszeiten, geo, sameAs) + `WebSite`+`SearchAction` + `FAQPage` | **Dev-Handoff** |
| Meta | nur globaler Root-Title | Home-spezifisch: Title, Description, Canonical `/`, OG | **Dev-Handoff** |

## FACTS-konforme Bausteine (nutzbar)
- **Seit 1996** (gegr. Rahden-Tonnenheide), heute **Espelkamp**, Alte Waldstraße 32 · **2026 = 30 Jahre**.
- **Familienbetrieb, 2. Generation:** Gründer **Johann Fast**; Söhne **Andreas & Peter Fast** seit **2010**, rücken in die Geschäftsführung. *(Familie als Rahmen — keine privaten Details ohne Freigabe.)*
- **Meisterbetrieb** (Meisterbrief-Jahr noch offen → kein „seit <Jahr>").
- **~1.000 m²**, Homag/CNC · **4.000+ Projekte** · **72.000+ Einzelteile**.
- **Eigenes Montageteam**, **kostenloses Aufmaß**, **3D-Planung**.
- **Lieferung bundesweit**; **Montage ~200 km um Espelkamp** (Minden, Bielefeld, Osnabrück, Hannover, ganz OWL).
- **PU-Kantenverleimung** (fugenlos, feuchtigkeitsbeständig) — starkes USP.
- Trust: Google ~4,2★/~14 (live prüfen) · Presse Bürgermeister-Besuch 2023 · Partner-Logos.

## Verbotene Claims (nicht schreiben)
„25+ Jahre" · „12+ Mitarbeiter" (real ~5–10) · „Meisterbetrieb seit <Jahr>" · „5 Jahre Garantie" ·
erfundene Preise · exotische Hölzer als Alleinstellung · FSC/PEFC namentlich.

## Dev-Handoff (für Umsetzung außerhalb content-only)
1. **Home-spezifische Metadata** in `src/app/(site)/page.tsx`: Title (~„Fast Systemmöbel: Möbel nach Maß aus Espelkamp seit 1996"), Description 150–160 Z., `alternates.canonical: "/"`, OpenGraph.
2. **JSON-LD** (neu): `Organization` (logo, sameAs: Instagram/Facebook/LinkedIn) + `LocalBusiness`/`FurnitureStore` (NAP, openingHours, areaServed, geo) + `WebSite` mit `potentialAction` (SearchAction) + `FAQPage` aus `FAQS`.
3. **Neue Section „Familie Fast"** (Home-Teaser): kurze 2.-Generation/Meisterbetrieb-Story + Foto + CTA → /ueber-uns. Copy liefert Content; Foto via Intake.
4. **Interne Link-Slots Home→Silos**: Discover/Service-Übersicht mit Links in /moebel-nach-mass/, /gewerbe/ (+ Unter-Silos) — für Sitelinks & Silo-Fluss. Danach `npm run audit:links`.

## Quellen
- [What Homepage Structure Works Best for SEO in 2026 — thetechtales](https://www.thetechtales.in/blog/what-homepage-structure-works-best-for-seo-in-2026/)
- [How to Optimize Your Homepage for SEO in 2026 — Vazoola](https://www.vazoola.com/resources/homepage-seo)
- [High-Converting Local Business Website 2026 — Synup](https://www.synup.com/en/how-to/create-high-converting-local-business-website)
- [Local Service Pages That Convert — Passionfruit](https://www.getpassionfruit.com/blog/local-service-pages-that-convert)
- [Brand SERP Optimization — Hashmeta](https://hashmeta.com/blog/brand-serp-optimization-how-to-control-and-own-your-search-results/)
- [Home Page Schema Recommendations — Full Stack Agency](https://thefullstackagency.com/blog/home-page-schema-and-structured-data-recommendations/)
- [Entity SEO: Building Your Brand's Knowledge Graph — HigherVisibility](https://www.highervisibility.com/seo/learn/entity-seo/)
