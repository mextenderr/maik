import { siteConfig } from "@/lib/site";
import { faqItems } from "@/lib/faq";

/**
 * Server-rendered JSON-LD structured data. Emitted in <body> so search engines
 * get a Person/ProfessionalService profile, the WebSite entity, and a FAQ rich
 * result eligible for SERP expansion.
 */
export default function StructuredData() {
  const personId = `${siteConfig.url}/#person`;

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "nl-NL",
      publisher: { "@id": personId },
    },
    {
      "@type": ["Person", "ProfessionalService"],
      "@id": personId,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/images/maik-2.webp`,
      jobTitle: "Voice-over & Stemacteur",
      description: siteConfig.description,
      email: `mailto:${siteConfig.email}`,
      telephone: siteConfig.telephone,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressCountry: siteConfig.country,
      },
      areaServed: "NL",
      knowsLanguage: ["nl-NL"],
      sameAs: [
        siteConfig.social.linkedin,
        siteConfig.social.instagram,
        siteConfig.social.tiktok,
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here — all values are static config/content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
