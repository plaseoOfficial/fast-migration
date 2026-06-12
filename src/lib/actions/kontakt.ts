"use server";

import { Resend } from "resend";

export interface KontaktFormState {
  ok: boolean;
  error?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Empfänger der Formular-Anfragen; per Env überschreibbar (z. B. fürs Testen). */
const TO_EMAIL = process.env.KONTAKT_TO_EMAIL ?? "info@fast-systemmoebel.de";
const FROM_EMAIL = "Fast Systemmöbel <formular@mail.plaseo.de>";

export async function sendeKontaktAnfrage(
  formData: FormData
): Promise<KontaktFormState> {
  // Honeypot: echte Besucher lassen das unsichtbare Feld leer.
  if (formData.get("firma")) {
    return { ok: true };
  }

  const vorname = String(formData.get("vorname") ?? "").trim();
  const nachname = String(formData.get("nachname") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telefon = String(formData.get("telefon") ?? "").trim();
  const nachricht = String(formData.get("nachricht") ?? "").trim();

  if (!vorname || !nachname) {
    return { ok: false, error: "Bitte geben Sie Ihren Namen an." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse an." };
  }
  if (!nachricht) {
    return { ok: false, error: "Bitte schreiben Sie uns eine kurze Nachricht." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Kontaktformular: RESEND_API_KEY ist nicht gesetzt.");
    return {
      ok: false,
      error:
        "Das Formular ist momentan nicht erreichbar. Rufen Sie uns gern an: 05771 9138312.",
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `Neue Anfrage über die Website von ${vorname} ${nachname}`,
    text: [
      `Neue Anfrage über das Kontaktformular auf fast-systemmoebel.de`,
      ``,
      `Name: ${vorname} ${nachname}`,
      `E-Mail: ${email}`,
      `Telefon: ${telefon || "—"}`,
      ``,
      `Nachricht:`,
      nachricht,
    ].join("\n"),
  });

  if (error) {
    console.error("Kontaktformular: Resend-Fehler:", error);
    return {
      ok: false,
      error:
        "Senden fehlgeschlagen. Versuchen Sie es später erneut oder rufen Sie uns an: 05771 9138312.",
    };
  }

  return { ok: true };
}
