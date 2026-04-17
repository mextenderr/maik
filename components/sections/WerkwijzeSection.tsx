import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Contact",
    description:
      "Neem contact op via e-mail, telefoon of WhatsApp. Ik reageer snel, zodat we snel kunnen starten.",
  },
  {
    number: "02",
    title: "Intake",
    description:
      "We bespreken kort het doel van de opname, de doelgroep en de gewenste tone of voice.",
  },
  {
    number: "03",
    title: "Opname",
    description:
      "Na akkoord ga ik aan de slag in mijn thuisstudio en neem ik de voice-over op met aandacht voor helderheid en kwaliteit.",
  },
  {
    number: "04",
    title: "Feedback & revisie",
    description:
      "Na levering is er ruimte voor feedback. Indien nodig pas ik de opname aan, zodat deze goed aansluit bij jouw wensen.",
  },
  {
    number: "05",
    title: "Oplevering",
    description:
      "De definitieve opname ontvang je in het gewenste formaat (WAV of MP3), klaar voor gebruik.",
  },
];

export default function WerkwijzeSection() {
  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <ScrollReveal animation="fade-up">
          <p className="text-[#1c1c1c]/40 text-[10px] font-medium tracking-[0.25em] uppercase text-center">
            Werkwijze
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1c1c1c] text-center mt-3">
            Werkwijze
          </h2>
          <p className="text-[#1c1c1c]/60 text-sm md:text-base text-center mt-4 max-w-xl mx-auto leading-relaxed">
            Van eerste contact tot definitieve opname — zo ziet een samenwerking
            er stap voor stap uit.
          </p>
        </ScrollReveal>

        <ScrollReveal
          animation="fade-up"
          stagger={0.1}
          className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col p-6 lg:p-7 rounded-2xl bg-white"
            >
              <span className="text-[#1c1c1c]/30 text-xs font-semibold tracking-[0.2em]">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-[#1c1c1c]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[#1c1c1c]/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
