# Bilder & Alt-Texte

Regeln für jedes Bild, das auf einer öffentlichen Seite landet. Gilt für neue Seiten
und für jeden Austausch auf Bestandsseiten.

Anlass: Ein Audit am 2026-07-31 über alle Content-Module hat gezeigt, dass ein Pool
generischer Fotos über alle Seiten verteilt wurde und der Alt-Text dabei **dem
Seitenthema angepasst wurde statt dem Bildinhalt**. Beispiele aus dem Bestand:

- `IMG_2772-scaled.jpg` zeigt eine **weiße Einbauschrankwand in einem Flur**.
  Auf `/bueroeinrichtung/` hieß sie „Maßgefertigte Schreibtische im Büro",
  auf `/gastronomieeinrichtung/` „Maßgefertigter Bartresen mit Technik-Aussparungen".
- `IMG_2673-scaled.jpg` zeigt eine **private Wohnküche**.
  Auf `/gastronomieeinrichtung/` hieß sie „Restauranttheke aus Massivholz nach Maß".
- `DSC_9938.jpg` zeigt ein **Regaldetail mit Visitenkarte**.
  Auf `/gastronomieeinrichtung/` hieß es „massive Holztheke für ein Restaurant".

---

## 1. Der Alt-Text beschreibt das Bild, nicht die Seite

**Das ist die wichtigste Regel.** Wenn ein Bild nicht zeigt, worum es auf der Seite geht,
ist der Fehler das Bild — nicht der Alt-Text.

```ts
// FALSCH — die Seite handelt von Gastronomie, das Bild zeigt eine Wohnküche
{ src: "/images/…/IMG_2673.jpg", alt: "Restauranttheke aus Massivholz nach Maß" }

// RICHTIG — beschreibt, was zu sehen ist
{ src: "/images/…/IMG_2673.jpg", alt: "Wohnküche nach Maß mit Kochinsel und Barhockern" }

// AM BESTEN — passendes Bild für die Seite verwenden
{ src: "/images/gastronomie/gastro-tresen-restaurant-eiche.jpg",
  alt: "Tresen aus Eiche nach Maß in einem Restaurant, mit Rückbuffet" }
```

Prüffrage vor dem Commit: *Würde jemand, der nur den Alt-Text hört, das Bild
wiedererkennen?* Wenn nein, ist er falsch.

Das ist kein reines SEO-Thema: Google gleicht Bildinhalt und Alt-Text ab, und
Screenreader-Nutzer bekommen sonst eine falsche Beschreibung vorgelesen.

## 2. Keine Referenz-Behauptung ohne Beleg im Bild

Die Leistungsseiten führen Bilder als Referenzen. Ein Foto einer privaten Wohnküche
auf der Gastro-Seite behauptet ein Restaurant-Projekt, das das Bild nicht zeigt.
Wenn kein passendes Projektfoto existiert: lieber weniger Bilder, ehrlich beschriftet,
als ein passend gelogener Alt-Text. Fehlendes Material wird beim Kunden angefragt.

## 3. Ein Bild gehört auf eine Seite

Bis zum Audit lag `DSC_9747.jpg` auf sechs Seiten gleichzeitig, `IMG_2772` und
`IMG_2673` auf je fünf. Das verteilt kein thematisches Signal, sondern verwässert es,
und erzwingt genau die widersprüchlichen Alt-Texte aus Regel 1.

Ausnahmen sind unkritisch und beabsichtigt: Team-, Beratungs- und Werkstattfotos auf
`/ueber-uns/` plus einer Leistungsseite.

**Werkstattmotive auf `/leitstellenmoebel/` (2026-11-25).** Die Leitstellen-Seite nutzt Werkstattmotive mit
eigenem Zuschnitt, eigener Datei unter `public/images/leitstellenmoebel/` und eigenem Alt-Text, der den
Ausschnitt benennt (Quelle jeweils ein Hallenfoto, das auch auf `/serienmoebel/` steht). Der Alt-Text
beschreibt die Fertigung („Fertigungshalle“, „Werkhalle“, „Bearbeitungszentrum“). Der Werkstattfilm
(`/videos/werkstatt-fast-systemmoebel-espelkamp.mp4`) läuft dort wie auf Über uns.

| Datei | Ausschnitt aus | Alt-Text |
|---|---|---|
| `leitstellenmoebel-fertigung-bearbeitungszentrum-halle.jpg` | Hallenbild Bearbeitungszentrum, 2:1 zugeschnitten | Homag-Bearbeitungszentrum in der Fertigungshalle von Fast Systemmöbel in Espelkamp |
| `leitstellenmoebel-fertigung-bearbeitungszentrum-detail.jpg` | dasselbe, Maschine im Detail | Bearbeitungszentrum von Homag mit Bedienmonitor und einliegender Platte in der Werkhalle |
| `leitstellenmoebel-fertigung-bohranlage-detail.jpg` | Hochformat Bohr- und Bearbeitungsanlage | Homag-Bohr- und Bearbeitungsanlage mit Plattenzuschnitten im Vordergrund in der Werkhalle |
| `leitstellenmoebel-fertigung-plattenzuschnitte-detail.jpg` | derselbe Bildunterteil | Zuschnitte in Holzdekor und Anthrazit auf Rollwagen und Tisch vor einer Homag-Anlage |
| `leitstellenmoebel-fertigung-cnc-absaugung-detail.jpg` | CNC-Halle quer | Homag-CNC-Bearbeitungszentrum mit Absaugschlauch und Bedienpult in der Werkhalle in Espelkamp |

## 4. Sprechende Dateinamen

```
DSC_9965.jpg                                    ->  nichtssagend
ladenbau-fischtheke-holzlamellen-nach-mass.jpg  ->  gut
```

Kleinbuchstaben, Bindestriche, **keine Umlaute** (`warentraeger`, nicht `warenträger`).
Die Bildersuche liest den Dateinamen mit; `DSC_9965` sagt nichts.

Ablage nach Thema: `public/images/<seite-oder-thema>/`, z. B. `public/images/ladenbau/`.

## 5. Technisch

- **1600 px** an der langen Kante reicht für alle Einsätze, JPEG **q82–84**, progressiv.
  Zielgröße 150–350 KB.
- **Seitenverhältnis prüfen, bevor ein Bild in einen bestehenden Slot geht.**
  Manche Sections rendern mit `object-fit: fill` — dort verzerrt ein falsches
  Verhältnis das Bild sichtbar. Betrifft aktuell `MnmWarum`: Die `width`/`height`
  im Content-Modul geben das Verhältnis vor, das Bild muss exakt darauf zugeschnitten
  werden. Sections mit `object-cover` (Hero, CTA) beschneiden dagegen unkritisch.
- **Hero-Motive brauchen rechts einen ruhigen, dunklen Bereich.** Der Verlauf in
  `MnmHero` deckt nur die linke Seite ab (`linear-gradient(90deg, …0.50 0%, …0 80%)`);
  auf hellem Bildinhalt wird der Intro-Text rechts unlesbar.
- **Auslieferung ohne `/_next/image`** (seit 26.11.2026). Vercel beantwortete die
  Bildoptimierung für jede noch nicht zwischengespeicherte Breite mit 402
  (Kontingent erschöpft), je nach Gerät fehlten Bilder auf allen Seiten. Jetzt
  erzeugt `next build` je Bild in `public/` sieben WebP-Breiten nach
  `public/_bild/<breite>/` (`scripts/bild-varianten.mjs`, nicht im Git), und der
  Loader `src/lib/bild-loader.ts` zeigt darauf. Für neue Bilder ist nichts zu tun:
  Bild nach `public/images/` legen, `next/image` wie bisher nutzen. Kein
  `unoptimized`-Prop nötig. `next dev` lädt die Originale direkt.
- Nach einem Bildtausch unter **gleichem Dateinamen** rechnet der Build die Varianten
  neu, Browser halten die alte Fassung aber bis zu einer Woche. Deshalb ein geändertes
  Motiv unter neuem Namen ablegen.

## 6. Vor dem Commit

- [ ] Bild geöffnet und angesehen — nicht nur den Dateinamen gelesen
- [ ] Alt-Text beschreibt das Motiv, nicht das Seitenthema
- [ ] Dateiname sprechend, klein, ohne Umlaute
- [ ] Seitenverhältnis passt zum Slot (bei `object-fit: fill` exakt)
- [ ] Bild liegt nicht schon auf einer anderen Seite
- [ ] `pnpm run check` grün

## Offener Punkt

`ExpandingImageCta` setzt `alt={heading}` (`ExpandingImageCta.tsx:33`) — der Alt-Text
ist damit die CTA-Überschrift, z. B. „Ihr Geschäft verdient mehr als Standardmöbel."
Das betrifft rund 30 Bildverweise über alle Seiten. Ein optionaler `imageAlt`-Prop
mit Fallback auf `heading` wäre rückwärtskompatibel und würde das überall zugleich lösen.
