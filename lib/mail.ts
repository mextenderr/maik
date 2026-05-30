import nodemailer from "nodemailer";
import type { ContactFormValues } from "@/lib/contact-schema";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
  CONTACT_TO_EMAIL,
  MAIL_FROM,
} = process.env;

function getTransport() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error(
      "Missing SMTP_HOST, SMTP_USER and/or SMTP_PASSWORD environment variables.",
    );
  }

  const port = Number(SMTP_PORT) || 465;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // Port 465 uses implicit TLS; 587 (and others) upgrade via STARTTLS.
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(data: ContactFormValues) {
  const transport = getTransport();
  // The "from" must be an address the SMTP account is allowed to send for.
  const from = MAIL_FROM || SMTP_USER!;
  // Default the recipient to the sending mailbox if no dedicated inbox is set.
  const to = CONTACT_TO_EMAIL || SMTP_USER!;

  await transport.sendMail({
    from: `"Maik van Velthoven website" <${from}>`,
    to,
    replyTo: `"${data.naam}" <${data.email}>`,
    subject: `Nieuw bericht (${data.onderwerp}) — ${data.naam}`,
    text: [
      `Naam: ${data.naam}`,
      `E-mail: ${data.email}`,
      `Onderwerp: ${data.onderwerp}`,
      "",
      data.bericht,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #1c1c1c; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">Nieuw bericht via het contactformulier</h2>
        <p style="margin: 0 0 4px;"><strong>Naam:</strong> ${escapeHtml(data.naam)}</p>
        <p style="margin: 0 0 4px;"><strong>E-mail:</strong> ${escapeHtml(data.email)}</p>
        <p style="margin: 0 0 16px;"><strong>Onderwerp:</strong> ${escapeHtml(data.onderwerp)}</p>
        <p style="margin: 0 0 4px;"><strong>Bericht:</strong></p>
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(data.bericht)}</p>
      </div>
    `,
  });
}
