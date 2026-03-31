import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal animation="fade-in">
          <p className="text-[#2c2c2c]/40 text-sm font-medium text-center mb-16 md:mb-20 tracking-wide">
            Het verhaal achter de stem
          </p>
        </ScrollReveal>

        {/* Mobile layout */}
        <div className="md:hidden relative">
          <div className="flex">
            <ScrollReveal animation="fade-left" className="relative w-[250px] h-[289px] -ml-10 shrink-0">
              <Image
                src="/images/studio-1.jpg"
                alt="Maik van Velthoven"
                fill
                className="object-cover rounded-[30px]"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2} className="flex-1 flex items-center justify-center">
              <p className="text-5xl font-semibold text-[#1a1a1a]"
                style={{ writingMode: "vertical-rl" }}>
                MAIK
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex md:items-center md:gap-12">
          <ScrollReveal animation="fade-left" className="relative w-[350px] h-[400px] shrink-0">
            <Image
              src="/images/studio-1.jpg"
              alt="Maik van Velthoven"
              fill
              className="object-cover rounded-[30px]"
            />
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.15}>
            <p className="text-7xl font-semibold text-[#1a1a1a]"
              style={{ writingMode: "vertical-rl" }}>
              MAIK
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up" delay={0.1}>
          <p className="mt-10 text-base font-medium text-[#2c2c2c] text-center leading-relaxed max-w-xl mx-auto">
            Vanaf mijn kindertijd imiteerde ik stemmen uit tekenfilms, tot vermaak
            van familie en vrienden. Wat begon als een grap groeide uit tot een
            passie. Na jaren van twijfel besloot ik op mijn dertigste de sprong te
            wagen. Ik richtte een kleine opnamestudio in mijn slaapkamer in, met
            geluidsdemping van dozen met eierdozen. Mijn eerste auditie voor een
            radiocommercial liep rampzalig: zenuwachtig en veel te snel. Maar ik
            gaf niet op. Maanden van vocal coaching, ademhalingsoefeningen en
            eindeloze demo&apos;s volgden.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-right" delay={0.1} className="mt-10 flex justify-center md:justify-end">
          <div className="relative w-[294px] h-[196px] md:w-[400px] md:h-[270px]">
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
