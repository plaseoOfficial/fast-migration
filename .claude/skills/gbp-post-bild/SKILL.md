---
name: gbp-post-bild
description: Use when ein Bild für einen Google-Business-Profile-Post, GBP-Beitrag oder Social-Post für Fast Systemmöbel gebraucht wird — auch bei "mach mir dazu ein Bild", "Bild für den Post" oder wenn ein fertiger Posttext noch ein Motiv braucht.
---

# GBP-Post-Bild für Fast Systemmöbel

Ein GBP-Bild ist im Feed ~300px breit und konkurriert mit allem anderen. Es hat
genau eine Aufgabe: in einer halben Sekunde zeigen, **was Fast anders macht als
ein Möbelhaus**. Eine glatte Schrankfront erfüllt das nicht.

**Voraussetzung:** Google Chrome unter `/Applications/Google Chrome.app`
(das Overlay wird headless gerendert) und der Higgsfield-MCP.

## Ablauf

1. **Erst nach echten Fotos suchen.** Generierte Bilder sind die zweite Wahl —
   Google gewichtet Standortfotos höher.
   ```bash
   ls public/images/**/ | grep -iE "kueche|schrank|werkstatt|team"
   ```
   Ein echtes Foto nehmen, sobald es das Motiv-Kriterium unten erfüllt. Tut es
   das nicht (Handyfoto bei Nacht, gerade Standardzeile), generieren — und im
   Ergebnis erwähnen, dass ein echtes Foto vorlag und warum es ausgeschieden ist.
2. **Motiv festlegen.** Aus dem Posttext ableiten. Gibt es keinen (nur ein Thema
   wie „Küche nach Maß"), Motiv und Headline selbst ableiten: welcher Raum-Sonderfall
   macht bei diesem Thema Maßanfertigung zwingend?
3. **Generieren** mit `mcp__claude_ai_Higgsfield__generate_image`, Modell
   `nano_banana_pro`, `aspect_ratio: "4:3"`, `resolution: "2k"`, **`count: 2`**.
   Zwei Kandidaten sind Pflicht — brauchbare Quote liegt bei etwa der Hälfte.
   Kostet Credits, deshalb nicht mehr als 3. (Die API antwortet mit
   `model: "nano_banana_2"`; das ist derselbe Katalogeintrag, kein Fehler.)
4. **Kandidaten ansehen, nicht nur die URL weiterreichen.** 2k-PNGs sind ~9 MB,
   vor dem `Read` verkleinern:
   ```bash
   curl -sL -o kandidat.png "<url>" && sips -Z 1200 kandidat.png
   ```
   Verworfen wird bei unmöglicher Geometrie (schwebende Fronten, Türen ohne
   Anschlag), welligen Kanten, ungefragtem Schwarz-Weiß.
   **Deutschland-Plausibilität prüfen** (Detail-Crop, nicht Übersicht): Modelle
   setzen gern britische 3-Pin-Steckdosen oder Kippschalter — im Profil eines
   deutschen Tischlers fällt das auf. Erwartet sind Schuko-Dosen und Wippschalter.
5. **Overlay rendern:**
   ```bash
   node .claude/skills/gbp-post-bild/scripts/render-overlay.mjs \
     --image kandidat.png --headline "Auch unter der Dachschräge" \
     --subline "Küche nach Maß. Für Räume, in denen Standard nicht passt." \
     --variant beige --ratio 4:3 --out docs/seo/gbp-assets/gbp-<thema>-4x3.png
   ```
6. **Render ansehen**, Checkliste prüfen, und **zusätzlich `--ratio 1:1`** rendern
   (`-1x1.png`). Ablage: `docs/seo/gbp-assets/`, Namensschema `gbp-<thema>-<format>.png`.

## Motiv

| Funktioniert | Funktioniert nicht |
|---|---|
| Schräge, Nische, Erker, Versatz, Treppe — Geometrie, die es von der Stange nicht gibt | Gerade Front vor gerader Wand |
| Altbau-Kontext: Dielen, Sichtziegel, krumme Wand, Stuck | Neubau-Studio ohne Kontext |
| Ein Element offen: Kleiderstange, Auszüge, Eiche innen | Alles geschlossen |
| Werkstatt **ohne Menschen**: Späne, Maschinen, Werkstück | Abstrakte Makro-Details (im Thumbnail nur Farbbalken) |

## Prompt-Bausteine

Immer englisch, immer diese vier Blöcke:

- **Kamera:** `shot on a 35mm lens at eye level`, `natural daylight from a window`,
  `realistic depth of field`, `subtle grain`
- **Kontext:** `old German apartment`, `worn wooden floorboards`,
  `slightly uneven plastered walls`
- **Material:** `warm greige matte fronts`, `oak interior` (Fast-Farbwelt)
- **Negativ:** `no people, no text, no logos, no watermark. Not CGI, not a render.
  Not overly symmetrical or glossy.`

Zusätzlich eine „echte" Unregelmäßigkeit erfinden (Steckdose, Kratzer an der
Sockelleiste) — das ist der Unterschied zwischen Foto und KI-Optik. **Vorsicht bei
Büchern, Verpackungen, Geräten:** Sie tragen Aufschriften und stechen damit den
`no text`-Block. Nur in die Unschärfe legen oder weglassen.

## Harte Grenzen

- **Keine erfundenen Menschen als Fast-Personal.** Ein KI-Mann im Arbeitspolo im
  eigenen Unternehmensprofil gibt einen Fremden als Mitarbeiter aus. Team-,
  Aufmaß- und Werkstattmotive **mit Personen** brauchen echte Fotos — dann beim
  Nutzer anfragen statt generieren.
- **Keine Bildunterschrift, die das Motiv als reales Projekt ausgibt**
  („unser Projekt in Espelkamp"). Generiert bleibt generisch.

## Text im Overlay

Headline ≤ 34 Zeichen, Subline ≤ 62, sonst nichts — das Skript bricht darüber ab.
Die Zeichenzahl ist nur ein Stellvertreter für die echte Grenze (Pixelbreite neben
dem Logo), deshalb den Render trotzdem ansehen. GBP zeigt Titel, Beschreibung und
CTA-Button ohnehin separat unter dem Bild; mehr Text doppelt sich und sieht nach
Flyer aus.

## Variantenwahl

| | `--variant beige` (Standard) | `--variant dunkel` |
|---|---|---|
| Wann | Immer, wenn nichts dagegen spricht | Wenn das Foto oben *und* unten Bildinformation trägt, die der Balken abschneiden würde |
| Text | Auf ruhiger Beige-Fläche, im Thumbnail am besten lesbar | Auf dem Foto, minimal unruhiger |
| Foto | Unten um ~23 % beschnitten | Vollflächig |

## Checkliste vor der Übergabe

- [ ] Schrift ist Poppins, nicht Helvetica (Poppins hat ein rundes geometrisches `a`)
- [ ] Logo vollständig, nicht angeschnitten
- [ ] Motiv zeigt die Besonderheit, nicht nur „ein Schrank"
- [ ] Keine Personen, kein lesbarer Text im Foto
- [ ] Beide Formate geliefert — Google beschneidet im Fotoraster quadratisch und
      schneidet dabei **seitlich** (Logo!), nicht unten

## Häufige Fehler

| Fehler | Folge |
|---|---|
| Overlay per Hand in HTML gebaut statt mit dem Skript | Google Fonts lädt im headless Chrome nicht, Schrift fällt auf Helvetica zurück |
| Nur ein Kandidat generiert | Bei ~50 % Ausschuss beginnt das Nachgenerieren von vorn |
| Bild nicht angesehen, nur URL weitergereicht | Fehlerhafte Geometrie landet beim Kunden |
| Nur die Übersicht geprüft, keine Detail-Crops | Britische Steckdosen und KI-Kauderwelsch auf Buchrücken überleben bis zur Veröffentlichung |
| Motiv zeigt das Thema nicht mehr | Küche ohne Spüle und Kochfeld liest sich als Einbauschrank |
| Headline mit Keywords vollgepackt | Bricht um, wird im Thumbnail unlesbar |
