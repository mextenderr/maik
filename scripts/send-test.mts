// One-off SMTP send test. Run with: npx tsx scripts/send-test.mts
// Loads .env.local the same way Next.js does, then sends a real email.
import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd());

console.log("SMTP target:", {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
  to: process.env.CONTACT_TO_EMAIL,
  passwordSet: Boolean(process.env.SMTP_PASSWORD),
});

// Import AFTER env is loaded — mail.ts reads process.env at module init.
const { sendContactEmail } = await import("../lib/mail");

try {
  await sendContactEmail({
    naam: "Send Test",
    email: "test-visitor@example.com",
    onderwerp: "Radio commercial",
    bericht:
      "Dit is een testbericht vanuit het send-test script om de SMTP-configuratie te controleren.",
  });
  console.log("\n✅ Email sent successfully.");
} catch (err) {
  console.error("\n❌ Send failed:\n", err);
  process.exitCode = 1;
}
