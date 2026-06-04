# Datenschutzerklärung – Anpassungen für den Neubau

**Zweck:** Die unter `/datenschutz/` aktuell hinterlegte Erklärung wurde **1:1 von der
Altseite** (WordPress/Joomla bei Mittwald, betreut durch echtagentur) übernommen. Sie
beschreibt deren Verarbeitung. Der Neubau (Next.js, gehostet bei **Vercel**) verarbeitet
anders. Dieses Dokument listet auf, was angepasst werden muss, damit die Erklärung die
**tatsächliche** Verarbeitung abbildet (Art. 13 DSGVO – „transparent und zutreffend").

> ⚠️ **Kein Rechtsrat.** Dieses Dokument gleicht den Text mit dem Code ab. Die finale
> Formulierung sollte über einen aktuellen Generator (z. B. eRecht24/Datenschutz-Generator,
> konfiguriert auf Vercel-Hosting + den real gewählten Formular-Weg) erstellt und
> anwaltlich geprüft werden.

## Audit: Was der Neubau tatsächlich nutzt (Stand Code 2026-06-04)

| Thema | Altseite (Text) | Neubau (Code) |
|---|---|---|
| Hosting | Mittwald CM Service GmbH & Co. KG, betreut durch echtagentur GmbH | **Vercel Inc.** (USA), Domain `www.fast-systemmoebel.de` |
| Google Analytics | aktiv | **nicht vorhanden** (kein gtag/GA/GTM im Code) |
| YouTube-Embeds | aktiv | **keine** (kein iframe/Script) |
| Google Maps (Einbettung) | aktiv | **keine Einbettung** – nur Text-Link „Zu Google Maps" (`KontaktStandort.tsx`) |
| OpenStreetMap | aktiv | **keine** |
| Google reCAPTCHA | aktiv | **keine** |
| Cookies / Consent | beschrieben | **keine** eigenen Cookies, **kein** Consent-Banner, kein localStorage |
| Schriften | „Google Web Fonts, lokal" | `next/font/google` → **selbst-gehostet** beim Build, keine Google-Verbindung |
| Kontaktformular | speichert/verarbeitet Anfragen | `KontaktPanel.tsx`: **sendet/speichert NICHTS** (nur `preventDefault` + „Danke!") |
| Kontakt Tel./E-Mail | beschrieben | Telefon-Link vorhanden; E-Mail noch offen |
| Server-Logs | „Provider" | Vercel erhebt Request-Logs (inkl. IP) |

## Abschnitt-für-Abschnitt: KEEP / ÄNDERN / ENTFERNEN / NEU

### 1. Datenschutz auf einen Blick
- **KEEP** „Allgemeine Hinweise", „Wer/Wie/Wofür/Welche Rechte".
- **ÄNDERN** Unterpunkt „Analyse-Tools und Tools von Drittanbietern": behauptet statistische
  Auswertung des Surf-Verhaltens. Es gibt keine Analyse-Tools → streichen oder umformulieren
  („Wir setzen derzeit keine Analyse-/Tracking-Tools ein").

### 2. Hosting → „Externes Hosting"
- **ÄNDERN (größter Punkt):** Mittwald + echtagentur ersetzen durch **Vercel**.
  - Anbieter: **Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.**
  - US-Transfer benennen; Grundlage: Vercel **DPA/AVV** + **EU-U.S. Data Privacy Framework**
    bzw. **Standardvertragsklauseln** (aktuellen Status bei Vercel verifizieren und verlinken).
  - „Auftragsverarbeitung (AVV)"-Unterabschnitt behalten, aber auf Vercel-DPA beziehen.
  - Hinweis: Datenregion/Functions ggf. global – im DPA/Projekt prüfen.

### 3. Allgemeine Hinweise und Pflichtinformationen
- **KEEP:** Datenschutz, Speicherdauer, Rechtsgrundlagen, Widerruf, Widerspruchsrecht
  (Art. 21), Beschwerderecht, Datenübertragbarkeit, SSL/TLS (Vercel = HTTPS), Auskunft/
  Löschung/Berichtigung, Einschränkung der Verarbeitung, Widerspruch gegen Werbe-E-Mails.
- **ÄNDERN „Hinweis zur verantwortlichen Stelle":** **E-Mail-Adresse ergänzen** (fehlt aktuell,
  Art. 13 verlangt Kontaktdaten). Rest (Fast Systemmöbel, Johann Fast, Adresse, Tel.) korrekt.
- **ÄNDERN „Datenweitergabe in die USA":** Begründung verschiebt sich von „US-Tools (Google)"
  auf **Hosting bei Vercel (USA)**. Abschnitt bleibt relevant, Framing anpassen.

### 4. Datenerfassung auf dieser Website
- **Cookies → ÄNDERN/ENTFERNEN:** Seite setzt keine eigenen Cookies und lädt keine
  Third-Party-Cookies. Entweder Abschnitt entfernen oder ersetzen durch Realität
  („Diese Website verwendet keine Cookies" bzw. nur technisch notwendige). Vercel-Betriebs-
  Cookies im konkreten Setup prüfen.
- **Server-Log-Dateien → KEEP, ÄNDERN:** bleibt zutreffend (Vercel loggt Requests inkl. IP).
  Provider als Vercel benennen; Liste (Browser, OS, Referrer, Hostname, Zeit, IP) bleibt.
- **Kontaktformular → ENTSCHEIDUNG NÖTIG (blockierend):** Das Formular sendet aktuell nichts.
  - Variante A (Formular wird funktional gemacht – empfohlen, sonst gehen Leads verloren):
    Abschnitt behalten und an den realen Weg anpassen (z. B. Versand per E-Mail an Fast,
    Vercel-Serverless + Mailprovider, oder Formular-Dienst). Den **Verarbeiter/Empfänger
    benennen** + ggf. dessen AVV.
  - Variante B (Formular bleibt vorerst raus/deaktiviert): Abschnitt entfernen und Formular
    entfernen/deaktivieren – kein „totes" Formular mit Datenschutztext ohne Verarbeitung.
- **Anfrage per E-Mail, Telefon oder Telefax → KEEP** (zutreffend).

### 5. Analyse-Tools und Werbung
- **ENTFERNEN:** kompletter „Google Analytics"-Block inkl. „Browser Plugin" und
  „Auftragsverarbeitung". (Nur wieder aufnehmen, falls GA4/Tracking später eingebaut wird –
  dann zusätzlich Consent-Banner nötig.)

### 6. Plugins und Tools
- **YouTube → ENTFERNEN** (keine Einbettung).
- **Google Web Fonts (lokales Hosting) → KEEP, leicht ÄNDERN:** Formulierung auf `next/font`
  Selbst-Hosting abstimmen (Fonts werden beim Build lokal gebündelt, keine Verbindung zu
  Google-Servern) – inhaltlich bereits korrekt.
- **Google Maps → ENTFERNEN** (keine Einbettung; nur externer Link – ein reiner Link erfordert
  keinen Maps-Datenschutzabschnitt).
- **OpenStreetMap → ENTFERNEN** (keine Einbettung).
- **Google reCAPTCHA → ENTFERNEN** (nicht im Einsatz).

## Mögliche Ergänzungen (nur falls zutreffend)
- **Vercel Analytics / Speed Insights:** aktuell NICHT installiert. Falls aktiviert → eigener
  Abschnitt (und Cookieless-Status prüfen).
- **Consent-Management/Cookie-Banner:** derzeit nicht nötig (keine einwilligungspflichtigen
  Tools). Damit ist auch der Footer-Link „Cookie-Richtlinie (EU)" gegenstandslos
  (siehe TASKS.md – entfernen oder echte Seite).
- **„Stand"-Datum** der neuen Erklärung aktualisieren.

## Nettoergebnis
Wenn das Formular geklärt ist, schrumpft die Erklärung deutlich: **Hosting (Vercel) +
US-Transfer-Hinweis + Server-Logs + Kontakt (Formular/E-Mail/Telefon) + lokale Fonts +
Pflicht-/Betroffenenrechte.** Analytics, YouTube, Maps, OSM, reCAPTCHA und der Cookie-Abschnitt
fallen weg.

## Offene Entscheidungen
1. **Kontaktformular:** funktional machen (welcher Versandweg/Verarbeiter?) oder entfernen?
2. **Vercel-Datenregion/DPA-Details** verifizieren (DPF vs. SCC, Region).
3. **E-Mail-Adresse** für verantwortliche Stelle / Impressum.
4. Wird später Tracking (GA4/Vercel Analytics) gewünscht? → dann Consent-Konzept nötig.
