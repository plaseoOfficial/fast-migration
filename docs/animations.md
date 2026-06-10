# Animations-System

Ruhige, dezente Bewegung über die ganze Website — „smoother & angenehmer", nicht
verspielt. Dieses Dokument ist die **eine Quelle der Wahrheit**: welche Animation
es gibt und in welchem Anwendungsfall sie benutzt wird. Alle Effekte nutzen
**transform + opacity** (GPU), feuern **einmalig** und respektieren
`prefers-reduced-motion`.

## 1. Vokabular (was wir benutzen)

| Rezept | Baustein | Einsatz |
|---|---|---|
| **Reveal (fade-up)** | `Reveal` (`src/components/Reveal.tsx`) | Block blendet beim Reinscrollen ein + steigt ~24px auf (mobil 12px). ~600ms, ease-out, einmalig (Schwelle ~15%). |
| **Stagger-Reveal** | mehrere `<Reveal delay={i*80}>` | Echte Geschwister (Karten, Bilder, Schritte) erscheinen versetzt. ~80ms Schritt; bei langen Listen deckeln. |
| **Hero-Entrance** | CSS-Klassen `fast-rise` / `fast-fade` (`globals.css`) | Above-the-fold: Titel/Intro steigen beim Laden auf, BG blendet ein. Kein JS-Trigger (läuft sofort). Stagger via `style={{ animationDelay }}`. |
| **Count-up** | `StatCounter` (`home/StatCounter.tsx`) bzw. `useCountUp` (privat) | KPI-Zahlen zählen beim Sichtbarwerden hoch. Reduced-Motion → sofort Endwert. |
| **Accordion-Height-Ease** | Grid `grid-template-rows: 0fr→1fr` (`home/FaqSection.tsx`) | FAQ klappt weich auf/zu statt hart zu toggeln. |
| **Bild-Hover-Zoom** | `group-hover:scale-105 duration-700` (+ Pfeil-Opacity) | Konvention für Bild-Karten/-Links. |
| **Smooth-Scroll** | Lenis (`SmoothScroll.tsx`), vom GSAP-Ticker getrieben | Global, immer aktiv. Keine Aktion pro Sektion nötig. |

**Bewusst NICHT website-weit** (exklusiv Home/Über-uns, weil schwer statt ruhig):
GSAP-Pin / Über-uns-Horizontal-Reise / `--parallax`-Drift / `.fast-panel`-Naht-
Rundungen / Opening-Overlap.

## 2. Anwendungsfall → Rezept

| Archetyp | Rezept |
|---|---|
| **Hero** (`*Hero`) | Hero-Entrance: Titel + Intro `fast-rise` gestaffelt, BG `fast-fade`. |
| **Heading + Intro + CTA** | Ein Reveal um den Textblock; CTA/Button leicht verzögert. |
| **Karten-Grid (3–4 Sp.)** | Stagger-Reveal je Karte (`delay={i*80}`). |
| **Stats-/KPI-Band** | Count-up je Zahl + Reveal der Reihe. |
| **Process-Steps** | Bild-Reveal + Stagger-Reveal je Schritt. |
| **Bild-Galerie/Grid** | Stagger-Reveal + Hover-Zoom. |
| **Bild + Text (50/50)** | Bild-Reveal + Text-Reveal (Text ~+120ms). |
| **Spec-/Vergleichstabelle** | Reveal des Blocks (Zeilen optional leicht gestaffelt). |
| **FAQ-Accordion** | Stagger-Reveal der Items + Height-Ease. |
| **Testimonials** | Header-Reveal + Marquee (erledigt). |
| **Timeline** | Stagger-Reveal der Meilensteine. |
| **Logo-Strip** | Dezenter Reveal/Stagger (oder statisch, wenn Marquee). |
| **Werte-/Mission-Karten** | Stagger-Reveal. |

## 3. Leitplanken

- Nur `transform` + `opacity`. Reveals **einmalig**.
- **Reduced-Motion**: alles aus (Reveal-CSS `@media reduce` + `gsap.matchMedia`;
  Count-up zeigt Endwert).
- **Ruhezustand = pixelgenau**: Reveals enden bei `transform:none` → kein Drift
  gegenüber `docs/design-references/`.
- **Nicht überanimieren**: ein Reveal pro logischem Block; Stagger nur für echte
  Geschwister; ruhig/premium, kein Bounce.

## 4. So wendet man es an

`Reveal` ist eine Client-Komponente, die als Wrapper um (auch Server-gerenderte)
Kinder gelegt wird; die Klassen `fast-rise`/`fast-fade` sind reines CSS und
funktionieren in Server-Komponenten. Wrappen ist **additiv** — Content/Props/
Layout bleiben unverändert. Beispiele:

```tsx
// Heading-Block
<Reveal>{/* eyebrow + h2 + intro */}</Reveal>

// Karten-Grid mit Stagger
{cards.map((c, i) => (
  <Reveal key={c.title} delay={i * 80} className="<bisherige Item-Klassen>">
    {/* Karte */}
  </Reveal>
))}

// Hero (Server-Komponente, reines CSS)
<h1 className="… fast-rise" style={{ animationDelay: "0.15s" }}>{title}</h1>
```

Vollständige Section-Abdeckung wird beim Ausrollen gepflegt; neue Sektionen
folgen direkt der §2-Zuordnung.
