# TODO / Backlog

Allgemeine offene Aufgaben für diese Codebase. (Für interne Verlinkungs-Aufgaben
siehe das spezielle Backlog in [`seo/internal-linking.md`](seo/internal-linking.md).)

## Offen

- [ ] **Kontaktformular: echter Versand via Server Action.** Das Formular in
  `src/components/sections/kontakt/KontaktFormularHero.tsx` setzt aktuell nur
  clientseitig `submitted = true` (Fake) und verschickt nichts. Eine Next.js 16
  Server Action ergänzen, die die Felder (Vorname, Nachname, Email, Telefon,
  Nachricht) entgegennimmt, **serverseitig validiert** und **per E-Mail
  versendet** (an die Fast-Adresse). Inklusive: Fehler-/Erfolgs-State im UI,
  Spam-Schutz (z. B. Honeypot) und Beibehaltung der Erfolgsmeldung
  „Danke! Wir melden uns."

## Erledigt

<!-- abgeschlossene Aufgaben hierher verschieben -->
