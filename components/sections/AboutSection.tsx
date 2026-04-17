import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <ScrollReveal animation="fade-in">
          <p className="text-[#1c1c1c]/40 text-sm font-medium text-center mb-16 md:mb-40 tracking-wide">
            Het verhaal achter de stem
          </p>
        </ScrollReveal>

        {/* Mobile + tablet layout: compact image + MAIK text */}
        <div className="lg:hidden relative">
          <div className="flex items-center">
            <ScrollReveal
              animation="fade-left"
              className="relative w-[250px] h-[289px] md:w-[320px] md:h-[370px] -ml-10 md:ml-0 md:mr-auto shrink-0"
            >
              <Image
                src="/images/studio-1.jpg"
                alt="Maik van Velthoven"
                fill
                className="object-cover rounded-[30px]"
              />
            </ScrollReveal>
            <ScrollReveal
              animation="fade-up"
              delay={0.2}
              className="flex-1 flex items-center justify-center"
            >
              <p
                className="text-5xl md:text-7xl font-semibold text-[#1c1c1c]"
                style={{ writingMode: "vertical-rl" }}
              >
                MAIK
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Laptop+ layout: image + MAIK text + paragraphs inline */}
        <div className="hidden lg:grid lg:grid-cols-[auto_auto_1fr] lg:items-center lg:gap-14">
          <ScrollReveal
            animation="fade-left"
            className="relative w-[360px] h-[440px] shrink-0"
          >
            <Image
              src="/images/studio-1.jpg"
              alt="Maik van Velthoven"
              fill
              className="object-cover rounded-[30px]"
            />
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.15}>
            <p
              className="text-[7rem] xl:text-[9rem] font-semibold text-[#1c1c1c] leading-none"
              style={{ writingMode: "vertical-rl" }}
            >
              MAIK
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.25} stagger={0.08}>
            <div className="space-y-5 text-base lg:text-right font-medium text-[#1c1c1c] leading-relaxed">
              <p>
                Op jonge leeftijd ontdekte ik al mijn interesse voor
                stemacteren. Terwijl ik voor de tv zat, vroeg ik me af: wie zit
                er eigenlijk achter die stem? Hoe gaat dat in zijn werk en kan
                ik dat ook?
              </p>
              <p>
                Dat laatste probeerde ik in ieder geval wel. Mijn
                Mr.&nbsp;Bean-imitatie deed ik volgens mijn ouders nét iets te
                goed na. Als een verhaal mijn aandacht trok, kon ik er volledig
                in opgaan. En eigenlijk is dat nooit veranderd. Het is dan ook
                mijn droom om later zelf verschillende animatieprojecten in te
                mogen spreken.
              </p>
              <p>
                Het vertellen van verhalen heeft me uiteindelijk richting het
                voice-overvak geleid. In 2025 besloot ik het serieus aan te
                pakken en volgde ik een jaar lang een opleiding stemacteren.
                Daar heb ik de mogelijkheden van mijn stem verder ontdekt en
                ontwikkeld.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Mobile + tablet: paragraphs stacked below */}
        <ScrollReveal
          animation="fade-up"
          delay={0.1}
          stagger={0.08}
          className="lg:hidden"
        >
          <div className="mt-10 max-w-xl mx-auto space-y-5 text-base font-medium text-[#1c1c1c] text-center leading-relaxed">
            <p>
              Op jonge leeftijd ontdekte ik al mijn interesse voor stemacteren.
              Terwijl ik voor de tv zat, vroeg ik me af: wie zit er eigenlijk
              achter die stem? Hoe gaat dat in zijn werk en kan ik dat ook?
            </p>
            <p>
              Dat laatste probeerde ik in ieder geval wel. Mijn
              Mr.&nbsp;Bean-imitatie deed ik volgens mijn ouders nét iets te
              goed na. Als een verhaal mijn aandacht trok, kon ik er volledig in
              opgaan. En eigenlijk is dat nooit veranderd. Het is dan ook mijn
              droom om later zelf verschillende animatieprojecten in te mogen
              spreken.
            </p>
            <p>
              Het vertellen van verhalen heeft me uiteindelijk richting het
              voice-overvak geleid. In 2025 besloot ik het serieus aan te pakken
              en volgde ik een jaar lang een opleiding stemacteren. Daar heb ik
              de mogelijkheden van mijn stem verder ontdekt en ontwikkeld.
            </p>
            <p>
              Nu ben ik klaar om in de praktijk aan de slag te gaan en jouw
              verhaal of boodschap te vertellen op een manier die geloofwaardig
              en oprecht overkomt. Samen creëren we een duidelijk verhaal dat
              indruk maakt.
            </p>
            <p>
              Sta je open voor een samenwerking? Stuur gerust een bericht, ik
              denk graag met je mee.
            </p>
          </div>
        </ScrollReveal>

        {/* Closing paragraphs + image (laptop+) */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14 mt-16">
          <ScrollReveal animation="fade-up" delay={0.1} stagger={0.08}>
            <div className="space-y-5 text-base font-medium text-[#1c1c1c] leading-relaxed">
              <p>
                Nu ben ik klaar om in de praktijk aan de slag te gaan en jouw
                verhaal of boodschap te vertellen op een manier die
                geloofwaardig en oprecht overkomt. Samen creëren we een
                duidelijk verhaal dat indruk maakt.
              </p>
              <p>
                Sta je open voor een samenwerking? Stuur gerust een bericht, ik
                denk graag met je mee.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal
            animation="fade-right"
            delay={0.1}
            className="relative w-[420px] h-[280px] shrink-0"
          >
            <Image
              src="/images/about-image.jpg"
              alt="Maik in actie"
              fill
              className="object-cover rounded-[30px]"
            />
          </ScrollReveal>
        </div>

        {/* Closing image (mobile + tablet) */}
        <ScrollReveal
          animation="fade-right"
          delay={0.1}
          className="lg:hidden mt-10 flex justify-center md:justify-end"
        >
          <div className="relative w-[294px] h-[196px] md:w-[420px] md:h-[280px]">
            <Image
              src="/images/about-image.jpg"
              alt="Maik in actie"
              fill
              className="object-cover rounded-[30px]"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
