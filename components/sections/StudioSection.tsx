import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const studioImages = [
  {
    src: "/images/studio-2.jpg",
    alt: "Studio opname ruimte",
    h: "h-[203px] md:h-[280px]",
  },
  {
    src: "/images/studio-3.jpg",
    alt: "Studio apparatuur",
    h: "h-[170px] md:h-[240px]",
  },
  {
    src: "/images/studio-4.jpg",
    alt: "Studio overzicht",
    h: "h-[201px] md:h-[280px]",
  },
];

export default function StudioSection() {
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Mobile: STUDIO above text */}
        <ScrollReveal animation="fade-up" className="md:hidden">
          <h2 className="text-5xl font-semibold text-[#1a1a1a] text-center mb-16">
            STUDIO
          </h2>
        </ScrollReveal>

        <div className="md:flex md:items-start md:gap-8">
          {/* Desktop: Vertical STUDIO text */}
          <ScrollReveal animation="fade-left" className="hidden md:flex items-center shrink-0">
            <p
              className="text-7xl font-semibold text-[#1a1a1a] rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              STUDIO
            </p>
          </ScrollReveal>

          {/* Description text */}
          <ScrollReveal animation="fade-up" delay={0.1} className="flex-1">
            <p className="text-base font-medium text-[#2c2c2c] text-center leading-relaxed">
              Als voice actor heb ik eindelijk mijn eigen studio. Geen huur meer
              betalen per uur, geen haast meer om klaar te zijn voordat de
              volgende klant komt. Mijn ruimte, mijn regels, mijn tijd. Ik heb de
              muren bekleed met akoestisch schuim, een professionele microfoon
              opgehangen en verlichting ge&iuml;nstalleerd die de juiste sfeer
              cre&euml;ert. Hier kan ik experimenteren, fouten maken, opnieuw
              beginnen zonder druk. Vroege ochtenden of late avonden - het maakt
              niet uit.
            </p>
          </ScrollReveal>
        </div>

        {/* Studio images — staggered */}
        <ScrollReveal animation="scale-in" stagger={0.15} className="mt-14 space-y-5 max-w-md mx-auto md:max-w-none md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          {studioImages.map((img) => (
            <div
              key={img.src}
              className={`relative w-full ${img.h} rounded-[30px] overflow-hidden`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
