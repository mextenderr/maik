import ScrollReveal from "@/components/ScrollReveal";

const tiers = [
  {
    name: "Commercials",
    description: "TV, radio & online advertenties",
    price: "vanaf €250",
    unit: "per spot",
    features: [
      "Spots tot 60 seconden",
      "Inclusief 1 revisieronde",
      "Broadcast-ready oplevering",
      "Licentie in overleg",
    ],
  },
  {
    name: "Narratief & Corporate",
    description: "Bedrijfsvideo's, explainers & documentaires",
    price: "vanaf €0,20",
    unit: "per woord",
    features: [
      "Professionele studioopname",
      "Inclusief 1 revisieronde",
      "Onbeperkt gebruiksrecht",
      "Oplevering binnen 48 uur",
    ],
    highlighted: true,
  },
  {
    name: "E-learning & Audioboeken",
    description: "Cursussen, modules & langere producties",
    price: "vanaf €175",
    unit: "per ingesproken uur",
    features: [
      "Bulkkorting bij 50K+ woorden",
      "Consistente toon & stijl",
      "Onbeperkt gebruiksrecht",
      "Meerdere bestandsformaten",
    ],
  },
];

export default function TarievenSection() {
  return (
    <section className="bg-[#111] pt-20 pb-24 md:pt-32 md:pb-36">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal animation="fade-up">
          <p className="text-white/40 text-[10px] font-medium tracking-[0.25em] uppercase text-center">
            Tarieven
          </p>
          <h2 className="text-5xl md:text-6xl font-semibold text-white text-center mt-3">
            Tarieven
          </h2>
          <p className="text-white/50 text-sm text-center mt-4 max-w-md mx-auto leading-relaxed">
            Transparante prijzen, geen verrassingen. Elk project is anders — neem
            gerust contact op voor een offerte op maat.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" stagger={0.12} className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col p-7 rounded-2xl ${
                tier.highlighted
                  ? "bg-white text-[#111]"
                  : "bg-white/5 text-white"
              }`}
            >
              <p
                className={`text-xs font-medium tracking-wide uppercase ${
                  tier.highlighted ? "text-[#111]/40" : "text-white/40"
                }`}
              >
                {tier.name}
              </p>
              <p
                className={`text-sm mt-1 ${
                  tier.highlighted ? "text-[#111]/60" : "text-white/50"
                }`}
              >
                {tier.description}
              </p>

              <div className="mt-6">
                <span className="text-3xl font-semibold">{tier.price}</span>
                <span
                  className={`text-sm ml-2 ${
                    tier.highlighted ? "text-[#111]/40" : "text-white/40"
                  }`}
                >
                  {tier.unit}
                </span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2.5 text-sm ${
                      tier.highlighted ? "text-[#111]/70" : "text-white/60"
                    }`}
                  >
                    <span
                      className={`shrink-0 mt-1.5 w-1 h-1 rounded-full ${
                        tier.highlighted ? "bg-[#111]/30" : "bg-white/30"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center text-sm font-semibold py-3 rounded-full transition-colors ${
                  tier.highlighted
                    ? "bg-[#111] text-white hover:bg-[#111]/90"
                    : "bg-white/10 text-white hover:bg-white/15"
                }`}
              >
                Offerte aanvragen
              </a>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal animation="fade-in" delay={0.3}>
          <p className="text-white/30 text-xs text-center mt-10 max-w-lg mx-auto leading-relaxed">
            Spoedtarief: +25% voor oplevering binnen 12 uur. Prijzen zijn
            exclusief BTW. Revisies buiten de scope worden apart berekend.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
