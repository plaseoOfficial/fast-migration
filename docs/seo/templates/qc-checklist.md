# QC-Checkliste — 9 harte Gates (alle müssen bestehen)

> Wird auf **Brief** (Engine) und auf **fertige Copy** (Phase D) angewandt. Ein Fail ⇒ Nachschärf-Runde.

1. **Domain- & Brand-Konsistenz** — kein `side-boost`, Domain überall `www.fast-systemmoebel.de`, Marke „Fast Systemmöbel", NAP korrekt.
2. **Keyword-Platzierung** — Primär-Keyword in H1, Meta-Title, erstem Absatz und URL/Slug.
3. **Sekundär-/LSI-Abdeckung** — alle Sekundär-Keywords + Pflicht-Entitäten aus dem Brief vorhanden.
4. **WDF*IDF** — thematische Pflichtterme im Zielkorridor (kein Term vergessen, kein Stuffing).
5. **Umfang & Tiefe** — Wortzahl im Brief-Korridor; jedes Pflicht-Unterthema abgedeckt; tiefer als der SERP-Schnitt.
6. **Faktentreue** — jede Zahl/Aussage gegen `FACTS.md` belegt; keine 🟡/❓-Claims als Fakt; keine Erfindungen.
7. **Interne Verlinkung, Belege & CTA** — ≥ 3 kontextuelle Links laut `internal-linking.md`, diverse Ankertexte (keine generischen wie „hier“, „mehr infos“, „entdecken Sie“), Möbelplaner + Kontakt verlinkt. **Produkt/Ratgeber/Artikel:** ≥ 1 Geschwister im Fließtext verlinkt **und** Rücklink in ≥ 1 indexierter Geschwister-Seite eingetragen (Budget der Quelle geprüft). **Externe Links** nur als Beleg für Norm-/Vorschrift-/Messwert-Angaben, max. 2 je Seite, nur Hosts der `EXTERNAL_SOURCE_ALLOWLIST`, Anker = Name der Quelle, nie Hersteller/Wettbewerber. Maschinell: `pnpm run audit:links` = 0 Fehler.
8. **Schema & Technik** — korrekte JSON-LD-Typen, ≥ 5 FAQ für FAQPage, eindeutige Canonical/OG, `alt`-Texte gepflegt.
9. **Human-Score / KI-Detektor-Resistenz** — liest sich menschlich & im O-Ton Fast: variabler Satzrhythmus, keine KI-Floskeln, keine Übersetzungs-Anmutung (siehe `humanizer.md`). **Pflicht-Gate.**

---
**QC-Ausgabe je Gate:** `pass | fail` + kurze Begründung + konkreter Fix. Gesamt erst `pass`, wenn alle 9 grün.
