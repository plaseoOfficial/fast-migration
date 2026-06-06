# BRAND VOICE — Fast Systemmöbel (v1)

> **Status: v1 — messbar gemacht & im Code-Gate verankert.** Die Stimme ist aus der
> bestehenden Klon-Copy abgeleitet und um prüfbare Schwellwerte ergänzt, die die
> Authoring-Engine deterministisch durchsetzt (`docs/seo/engine/authoring-engine.workflow.mjs`,
> Funktionen `lintVoice` + `lintLengths`).
>
> **Noch offen (für v2, braucht Kunden-/Ben-Input):** Abschnitt 5 „Brand Voice" der
> [`COMPANY_INTAKE.md`](COMPANY_INTAKE.md) ist leer. Sobald der Inhaber **3–5 eigene
> O-Ton-Sätze** liefert, wird der „Referenz-O-Ton" unten gegen echte Zitate getauscht
> (heute nur aus alter Copy rekonstruiert). Bis dahin ist v1 verbindlich.

## Stimme in einem Satz
Ein **Meisterbetrieb, der mit ruhigem Handwerksstolz spricht**: bodenständig, präzise,
warm; verkauft nicht, sondern erklärt und beweist.

## Grundregeln
- **Anrede:** „**Sie**" (vom Kunden bestätigt 2026-06-05). Höflich, nicht steif. Die alte
  Fast-Site sprach „Du" — O-Ton-Zitate von „Du" auf „Sie" umschreiben.
- **Perspektive:** „Wir" (Team/Betrieb). Inhaber-„Ich" nur in O-Ton-Zitaten (z.B. Über-uns).
- **Haltung:** Mensch vor Maschine, Funktion + Gefühl, regional verwurzelt (Espelkamp/OWL).
- **Beweis statt Behauptung:** jede Qualitätsaussage mit konkretem Detail belegen
  (Material, Maß, Prozess, Projekt). Nie leeres Adjektiv-Marketing.

## Tonalität (Leitwörter)
handwerklich-stolz · ehrlich · präzise · langlebig · persönlich · bodenständig

---

## Messbare Regeln (v1 — vom Code-Gate geprüft)

> „Aufs gerenderte Design schreiben, nicht auf Wortzahl." Diese Schwellwerte sind die
> objektive Antwort auf „Brand-Voice/Lesbarkeit passt nicht" — sie laufen automatisch
> im QC-Schritt (`lintLengths` / `lintVoice`) und blocken den Status auf `BLOCKED_QUALITY`.

| Kriterium | Regel | Warum |
|---|---|---|
| **Heading / Section-Titel** | ≤ **50 Zeichen** (1–2 Zeilen) | h2 rendert mit 64–84px; darüber bricht es / kollidiert mit dem Bild-Layout |
| **Eyebrow / Subheading** | ≤ **64 Zeichen** | uppercase + Sperrung (letterSpacing) frisst Platz |
| **Absatz** | ≤ **3 Sätze** (und ≤ ~320 Zeichen) | keine 233-Wort-Wände; scanbar |
| **Satzlänge** | Ziel **Ø ≤ 15 Wörter**, Spitze max ~25; variieren | „kurze, klare Sätze, ruhiger Rhythmus" |
| **Keyword-Platzierung** | Primär-KW in eyebrow/intro/Karten-Titel + erstem Body-Satz | NICHT als Keyword-Liste in die H2 stuffen |
| **Anrede** | „Sie" — „Du/Dein/Dich/Dir/Euch/Euer" = Verstoß | siehe Grundregeln |
| **em-dash „—"** | **VERBOTEN** (final entschieden) | stattdessen Doppelpunkt, Komma oder Punkt |

## DO
- Konkrete Materialien & Verfahren nennen (Eiche, Nussbaum, Linoleum, CNC, Aufmaß, Montage).
- Kurze, klare Sätze; ruhiger Rhythmus; gelegentlich ein lakonischer Kurz-Satz als Akzent.
- Nutzen aus Kundensicht zeigen („passt millimetergenau", „kein Stückwerk, eine Hand").
- Aktiv statt Passiv. Idiomatisches Deutsch.
- Echte Zahlen/Fakten aus [`FACTS.md`](FACTS.md) verwenden, sonst keine Zahl.
- Strukturierten Inhalt (Vergleiche, Spezifikationen) als Tabelle/strukturierte Section,
  nicht als Fließtext-Wand. Fehlt die Komponente: „STRUKTUR-BEDARF (Design)" vermerken.

## DON'T — zentrale Banword-/Floskel-Liste (maschinenlesbar)

> Quelle für `lintVoice`. Hier zentral gepflegt (nicht mehr nur im Humanizer verstreut).

**Leer-Superlative / Stockphrasen:**
- „der/die/das Beste", „revolutionär", „Premium" als Leerwort, „hochwertig"/„erstklassig" ohne Detail
- „maßgeschneiderte Lösungen", „höchste Ansprüche"

**KI-Floskeln / Füllphrasen:**
- „In der heutigen Zeit", „Wenn es um … geht", „nicht nur … sondern auch"
- „Sie fragen sich vielleicht", „es ist wichtig zu beachten/wissen", „spielt eine entscheidende/wichtige Rolle"

**Generische Übergänge:**
- „Darüber hinaus", „Zusammenfassend", „Insgesamt betrachtet", „Letztendlich"

**Außerdem verboten:**
- Erfundene Awards/Zahlen/Zitate (E-E-A-T-Schaden; siehe 🟡/❓ in FACTS.md).
- Druck/Clickbait/Dringlichkeit. Vertrauen entsteht durch Substanz, nicht „Nur noch heute!".
- Dreiklang-Slogan-Tics, symmetrische Absätze gleicher Länge, übermäßige Doppelpunkt-Aufzählungen.

## Referenz-O-Ton (Zielklang — aus bestehender Copy, bis echte Inhaber-Zitate vorliegen)
> „Handgemachte Möbel erzählen unsere Geschichten. Nicht von Maschinen, sondern von
> Menschen, die Liebe investiert haben."

> „Wahre Qualität passt sich dem Menschen an. Nicht umgekehrt."

> „Wir verwenden Holz, Metall und Glas in ehrlicher Verarbeitung, ohne Kompromisse bei
> Qualität. Unsere Designs überdauern Moden."

## Mikro-Beispiele (Vorher → Fast-Ton)
- ❌ „Wir bieten hochwertige maßgeschneiderte Möbellösungen."
  ✅ „Wir bauen Möbel, die auf den Millimeter in Ihren Raum passen. In unserer eigenen Werkstatt in Espelkamp."
- ❌ „Profitieren Sie von jahrelanger Erfahrung."
  ✅ „Seit 1996 fertigen wir nach Maß. Was wir planen, montieren wir auch selbst."
- ❌ „Ein Meisterbetrieb aus OWL, der Arbeitsräume versteht und maßgeschneiderte Konzepte bietet." (74 Z., Bloat)
  ✅ „Ein Meisterbetrieb, der Arbeitsräume versteht." (43 Z.)
