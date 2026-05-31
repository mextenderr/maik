/**
 * Central site configuration used for SEO metadata, sitemap, robots and
 * structured data. Override the production URL with NEXT_PUBLIC_SITE_URL.
 */
export const siteConfig = {
  name: "Maik van Velthoven",
  title: "Maik van Velthoven | Voice-over & Stemacteur",
  description:
    "Maik van Velthoven is een professionele Nederlandse voice-over en stemacteur voor commercials, narratieve producties, bedrijfsfilms en e-learning. Opnames vanuit eigen studio, snelle levering.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.maikvanvelthoven.nl").replace(/\/$/, ""),
  locale: "nl_NL",
  email: "info@maikvanvelthoven.nl",
  telephone: "+31625115769",
  city: "Den Haag",
  country: "NL",
  keywords: [
    "voice-over",
    "stemacteur",
    "voice actor",
    "Nederlandse voice-over",
    "stemacteren",
    "commercial voice-over",
    "narratieve voice-over",
    "bedrijfsfilm voice-over",
    "e-learning voice-over",
    "Maik van Velthoven",
    "Den Haag",
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/maik-van-velthoven-8475a01ab/",
    instagram: "https://www.instagram.com/maik_velt/",
    tiktok: "https://www.tiktok.com/@voicemaik",
  },
} as const;
