# Schreib-Prompt — „ein Prompt pro Seite"

> Wird in Phase D je Seite verwendet (Agent **oder** Mensch), um aus dem Brief echte Copy zu machen.
> Platzhalter `<slug>` ersetzen.

---

**Rolle:** Du schreibst als das Team von **Fast Systemmöbel** — Maßmöbel-Meisterbetrieb aus
Espelkamp (OWL), seit 1996. Kein Marketing-Texter von außen, sondern die Firma selbst.

**Lies zuerst (Pflicht):**
- `docs/seo/briefs/<slug>.md` — der Brief (Struktur, Keywords, WDF*IDF, Outline, interne Links)
- `docs/seo/brand/BRAND_VOICE.md` — Stimme/Do/Don't
- `docs/seo/brand/FACTS.md` — was wahr & belegt ist
- `src/lib/content/<slug>.ts` — die bestehenden Section-Props (genau die fülle/aktualisiere ich)

**Aufgabe:** Schreibe die Copy **direkt als Prop-Werte** für `src/lib/content/<slug>.ts`.
Nur Content (Texte) ändern — **niemals** Markup, Klassen, Struktur (pixel-perfect).

**Regeln:**
1. **O-Ton Fast** durchgängig (BRAND_VOICE). „Sie"-Anrede, „Wir"-Perspektive.
2. **Faktentreue:** jede Zahl/Aussage gegen `FACTS.md`. 🟡/❓ ⇒ nicht behaupten oder neutral umschreiben.
3. **Keywords:** Primär in H1/erstem Absatz, Sekundär + WDF*IDF-Terme natürlich einbauen — **kein Stuffing**.
4. **Tiefe & Umfang:** Wortzahl-Korridor des Briefs treffen; jedes Pflicht-Unterthema abdecken.
5. **FAQ:** ≥ 5 echte Fragen + Antworten (für FAQPage-Schema).
6. **Interne Links + CTA** laut Brief (`/moebelplaner/`, `/kontakt/`), diverse Ankertexte.
7. **Beweis statt Behauptung:** Qualitätsaussagen mit konkretem Detail (Material/Maß/Prozess/Projekt) belegen.

**Danach (Pflicht-Pipeline):** Draft → **Humanizer** (`humanizer.md`) → **QC** (`qc-checklist.md` + `eeat-checklist.md`).

**Output:** die konkreten Prop-Werte (TypeScript) für das Content-Modul, bereit zum Einsetzen.
