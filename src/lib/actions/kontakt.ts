"use server";

import { Resend } from "resend";
import {
  ANFRAGE_GRENZEN,
  baueBetreff,
  baueMailText,
  leseAnfrage,
  pruefeAnfrage,
  sichererDateiname,
} from "@/lib/anfrage-mail";

export interface KontaktFormState {
  ok: boolean;
  error?: string;
  /** Name des Formularfelds, an dem die Fehlermeldung erscheinen soll (Anfrageblock). */
  feld?: string;
  /**
   * true, wenn die Anfrage als Spam erkannt und stillschweigend verworfen wurde
   * (Honeypot). Dem Bot wird Erfolg vorgetäuscht, es geht aber KEINE E-Mail raus
   * — der Client darf für diesen Fall daher auch keine Conversion tracken.
   */
  spam?: boolean;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Empfänger der Formular-Anfragen; per Env überschreibbar (z. B. fürs Testen). */
const TO_EMAIL = process.env.KONTAKT_TO_EMAIL ?? "anfrage@fast-systemmoebel.de";
const FROM_EMAIL = "Fast Systemmöbel <formular@mail.plaseo.de>";

export async function sendeKontaktAnfrage(
  formData: FormData
): Promise<KontaktFormState> {
  // Honeypot: echte Besucher lassen das unsichtbare Feld leer.
  if (formData.get("firma")) {
    return { ok: true, spam: true };
  }

  // Anfrageblock (LeistungAnfrage) schickt `variante` mit und hat eigene Felder,
  // Pflichtlogik und Anhänge. Das Formular auf /kontakt/ schickt sie nicht und
  // läuft unverändert durch den Zweig darunter.
  if (formData.get("variante")) {
    return sendeAnfrageblock(formData);
  }

  const vorname = String(formData.get("vorname") ?? "").trim();
  const nachname = String(formData.get("nachname") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telefon = String(formData.get("telefon") ?? "").trim();
  const nachricht = String(formData.get("nachricht") ?? "").trim();
  // Optional: Herkunftsseite (z. B. "Ladenbau"). Leer bei den Formularen, die es
  // nicht mitschicken — das Verhalten bleibt dann unverändert.
  const seite = String(formData.get("seite") ?? "").trim();

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
    subject: seite
      ? `Neue Anfrage (${seite}) über die Website von ${vorname} ${nachname}`
      : `Neue Anfrage über die Website von ${vorname} ${nachname}`,
    text: [
      `Neue Anfrage über das Kontaktformular auf fast-systemmoebel.de`,
      ...(seite ? [`Seite: ${seite}`] : []),
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

/**
 * Anfrageblock: validiert die neuen Felder, baut Betreff und Text (Logik in
 * src/lib/anfrage-mail.ts) und hängt bis zu drei Dateien an die Mail.
 */
async function sendeAnfrageblock(formData: FormData): Promise<KontaktFormState> {
  const eingang = leseAnfrage((name) => String(formData.get(name) ?? ""));

  const fehler = pruefeAnfrage(eingang);
  if (fehler) return { ok: false, error: fehler.error, feld: fehler.feld };

  // Dateien: Grenzen auch serverseitig prüfen (der Browser verkleinert Bilder,
  // verlassen darf man sich darauf nicht).
  const dateien = formData
    .getAll("dateien")
    .filter((d): d is File => typeof d !== "string" && d.size > 0);
  const gesamt = dateien.reduce((summe, d) => summe + d.size, 0);
  if (
    dateien.length > ANFRAGE_GRENZEN.maxDateien ||
    gesamt > ANFRAGE_GRENZEN.maxGesamtBytes ||
    dateien.some((d) => !(ANFRAGE_GRENZEN.erlaubteTypen as readonly string[]).includes(d.type))
  ) {
    return {
      ok: false,
      feld: "dateien",
      error: "Die Dateien sind zu groß oder haben ein nicht unterstütztes Format. Erlaubt sind bis zu drei Bilder oder PDFs.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Anfrageblock: RESEND_API_KEY ist nicht gesetzt.");
    return {
      ok: false,
      error:
        "Das Formular ist momentan nicht erreichbar. Rufen Sie uns gern an: 05771 9138312.",
    };
  }

  const anhaenge = await Promise.all(
    dateien.map(async (d) => ({
      filename: sichererDateiname(d.name),
      content: Buffer.from(await d.arrayBuffer()),
    })),
  );

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    // Antwort-Adresse nur, wenn eine E-Mail angegeben wurde (sonst reicht das Telefon).
    ...(eingang.email ? { replyTo: eingang.email } : {}),
    subject: baueBetreff(eingang),
    text: baueMailText(
      eingang,
      anhaenge.map((a) => a.filename),
    ),
    ...(anhaenge.length ? { attachments: anhaenge } : {}),
  });

  if (error) {
    console.error("Anfrageblock: Resend-Fehler:", error);
    return {
      ok: false,
      error:
        "Senden fehlgeschlagen. Versuchen Sie es später erneut oder rufen Sie uns an: 05771 9138312.",
    };
  }

  return { ok: true };
}
