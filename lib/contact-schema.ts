import { z } from "zod";

export const contactSchema = z.object({
  naam: z.string().min(2, { message: "Vul je naam in." }),
  email: z.email({ message: "Vul een geldig e-mailadres in." }),
  onderwerp: z.string().min(1, { message: "Kies een onderwerp." }),
  bericht: z.string().min(10, { message: "Je bericht is te kort (min. 10 tekens)." }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
