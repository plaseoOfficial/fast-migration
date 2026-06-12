/**
 * HTML-Template für die Anfrage-Benachrichtigung ans Fast-Team.
 * E-Mail-tauglich gebaut: Tabellen-Layout + Inline-CSS (Outlook rendert
 * weder Flexbox noch externe Stylesheets), Logo als PNG (kein SVG).
 */

const BRAND_YELLOW = "#F9B233";
const BRAND_DARK = "#3D3D3D";
const BRAND_BEIGE = "#E0D9D3";
const BRAND_BEIGE_LIGHT = "#F7F4F0";
const FONT = "'Urbanist', Helvetica, Arial, sans-serif";
const LOGO_URL = "https://www.fast-systemmoebel.de/seo/email-logo.png";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export interface KontaktAnfrageDaten {
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  nachricht: string;
}

export function buildKontaktAnfrageHtml(daten: KontaktAnfrageDaten): string {
  const name = escapeHtml(`${daten.vorname} ${daten.nachname}`);
  const email = escapeHtml(daten.email);
  const telefon = daten.telefon ? escapeHtml(daten.telefon) : "";
  const telefonHref = daten.telefon ? escapeHtml(daten.telefon.replace(/[^\d+]/g, "")) : "";
  const nachricht = escapeHtml(daten.nachricht).replaceAll("\n", "<br />");
  const zeitpunkt = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Berlin",
  }).format(new Date());

  const labelStyle = `font-family:${FONT};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#8A8A8A;padding:14px 0 2px;`;
  const valueStyle = `font-family:${FONT};font-size:16px;line-height:24px;color:${BRAND_DARK};padding:0;`;

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Neue Anfrage über die Website</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND_BEIGE};">
  <!-- Vorschau-Text im Posteingang -->
  <div style="display:none;max-height:0;overflow:hidden;">
    Neue Anfrage von ${name} über fast-systemmoebel.de
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND_BEIGE};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- Header: dunkle Bar mit Logo + gelber Akzentlinie -->
          <tr>
            <td style="background-color:${BRAND_DARK};padding:26px 40px;border-bottom:4px solid ${BRAND_YELLOW};">
              <img src="${LOGO_URL}" alt="Fast Systemmöbel" width="170" style="display:block;border:0;width:170px;height:auto;" />
            </td>
          </tr>

          <!-- Inhalt -->
          <tr>
            <td style="background-color:#FFFFFF;padding:36px 40px 32px;">
              <p style="margin:0 0 6px;font-family:${FONT};font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#8A8A8A;">
                Neue Anfrage über die Website
              </p>
              <p style="margin:0 0 22px;font-family:${FONT};font-size:26px;line-height:32px;font-weight:600;color:${BRAND_DARK};">
                ${name}
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="${labelStyle}">E-Mail</td></tr>
                <tr><td style="${valueStyle}">
                  <a href="mailto:${email}" style="color:${BRAND_DARK};text-decoration:underline;">${email}</a>
                </td></tr>
                ${
                  telefon
                    ? `<tr><td style="${labelStyle}">Telefon</td></tr>
                <tr><td style="${valueStyle}">
                  <a href="tel:${telefonHref}" style="color:${BRAND_DARK};text-decoration:underline;">${telefon}</a>
                </td></tr>`
                    : ""
                }
                <tr><td style="${labelStyle}">Nachricht</td></tr>
                <tr><td style="padding-top:6px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="background-color:${BRAND_BEIGE_LIGHT};border-left:4px solid ${BRAND_YELLOW};padding:18px 20px;font-family:${FONT};font-size:16px;line-height:25px;color:${BRAND_DARK};">
                        ${nachricht}
                      </td>
                    </tr>
                  </table>
                </td></tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px 0;">
              <p style="margin:0;font-family:${FONT};font-size:12px;line-height:18px;color:#8A8A8A;">
                Diese Nachricht wurde am ${zeitpunkt} Uhr über das Kontaktformular auf
                <a href="https://www.fast-systemmoebel.de/" style="color:#8A8A8A;">fast-systemmoebel.de</a> gesendet.
                Antworten gehen direkt an die E-Mail-Adresse der anfragenden Person.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
