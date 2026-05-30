import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function StudioSection() {
  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Mobile + tablet: STUDIO heading above text */}
        <ScrollReveal animation="fade-up" className="lg:hidden">
          <h2 className="text-5xl md:text-6xl font-semibold text-[#1c1c1c] text-center mb-12 md:mb-14">
            STUDIO
          </h2>
        </ScrollReveal>

        <div className="lg:flex lg:items-center lg:gap-12">
          {/* Laptop+: vertical STUDIO text */}
          <ScrollReveal
            animation="fade-left"
            className="hidden lg:flex items-center shrink-0"
          >
            <p
              className="text-[7rem] xl:text-[9rem] font-semibold text-[#1c1c1c] rotate-180 leading-none"
              style={{ writingMode: "vertical-rl" }}
            >
              STUDIO
            </p>
          </ScrollReveal>

          {/* Description text */}
          <ScrollReveal
            animation="fade-up"
            delay={0.1}
            stagger={0.08}
            className="flex-1 flex justify-end"
          >
            <div className="space-y-5 text-base md:text-lg font-medium text-[#1c1c1c] text-center lg:text-right leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Vanuit mijn thuisstudio werk ik met een Focusrite Scarlett Solo
                (4th gen) audio-interface en een CM25
                MkIII-condensatormicrofoon. Hiermee neem ik heldere en
                professionele voice-overs op.
              </p>
              <p>
                De opnameruimte is bestemd tegen ongewenste galm en houd
                achtergrondgeluiden buiten. Zo ontstaat een warme, natuurlijke
                opname waar elk woord tot zijn recht komt — precies wat een
                goede opname nodig heeft.
              </p>
              <p>
                Omdat ik vanuit eigen studio werk, ben ik flexibel in planning
                en kan ik snel schakelen. Geen wachttijden of tussenpartijen,
                maar direct contact en korte lijnen. Zo krijg je het resultaat
                dat je wilt, op het moment dat je het nodig hebt.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Studio image — shown in full */}
        <ScrollReveal
          animation="scale-in"
          className="mt-12 md:mt-16 lg:mt-40 max-w-sm mx-auto"
        >
          <Image
            src="/images/studio.webp"
            alt="Studio opnameopstelling met microfoon en interface"
            width={1100}
            height={1311}
            className="w-full h-auto rounded-[30px]"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
