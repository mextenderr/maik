"use server";

import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/mail";

export type ContactActionResult =
  | { success: true }
  | { success: false; error: string };

type SpamMeta = {
  /** Honeypot decoy field — must be empty for a real human. */
  website?: string;
  /** Milliseconds between form render and submit (measured client-side). */
  elapsedMs?: number;
};

// Humans take longer than this to fill the form; faster = almost certainly a bot.
const MIN_SUBMIT_MS = 3000;

export async function submitContact(
  values: ContactFormValues,
  meta?: SpamMeta,
): Promise<ContactActionResult> {
  // Honeypot: a filled decoy field means a bot. Pretend success so it doesn't retry.
  if (meta?.website && meta.website.trim() !== "") {
    return { success: true };
  }

  // Time-trap: submitted impossibly fast. (Missing value => skip, no false positives.)
  if (typeof meta?.elapsedMs === "number" && meta.elapsedMs < MIN_SUBMIT_MS) {
    return { success: true };
  }

  // Re-validate on the server — never trust the client.
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Controleer de ingevulde gegevens." };
  }

  try {
    await sendContactEmail(parsed.data);
    return { success: true };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      error: "Er ging iets mis bij het verzenden. Probeer het later opnieuw.",
    };
  }
}
