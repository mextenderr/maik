"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const faqItems = [
  {
    question: "Voor wat voor projecten kun je worden ingezet?",
    answer:
      "Ik ben inzetbaar voor de volgende soorten projecten: tv- en radiocommercials, voice-over dubbing, bedrijfsfilms, online video en social media, en e-learning.",
  },
  {
    question: "Wat kost een voice-over?",
    answer:
      "De prijs hangt af van verschillende factoren, zoals de lengte van de tekst, het type project (bijvoorbeeld commercial, dubbing of social media) en het gebruik van de opname. Daarom heb ik in mijn tarieven vermeld hoe de prijzen worden opgebouwd. Alle afspraken worden vooraf duidelijk afgestemd, zodat je precies weet waar je aan toe bent. Vragen? Neem alsjeblieft contact op zodat ik je een prijsindicatie kan geven. Dan komen we er samen vast uit!",
  },
  {
    question: "Hoe snel kun je een opname leveren?",
    answer:
      "In de meeste gevallen kan ik snel schakelen en binnen 24 uur aanleveren, afhankelijk van de lengte en tijd die ik in de opdracht zal steken. Heb je een deadline? Laat het vooral weten, dan kijk ik wat mogelijk is.",
  },
  {
    question: "Kun je retakes of revisies doen?",
    answer:
      "Retakes: je krijgt standaard een correctieronde. Dit gaat om kleine aanpassingen zoals intonatie of toon. Uiteraard zal ik kosteloos een retake sturen mocht de tone of voice toch niet direct aan je verwachtingen voldoen. Revisies: kleine aanpassingen zijn geen probleem. Binnen 48 uur kan ik maximaal 2 keer opnieuw inspreken voor je. Ik zorg er graag voor dat het eindresultaat precies aansluit bij jouw wensen. In overleg kijken we wat nodig is om tot het beste resultaat te komen.",
  },
  {
    question: "Hoe worden de opnames aangeleverd?",
    answer:
      "Opnames kunnen worden aangeleverd in WAV- of MP3-bestanden. Na je aanvraag bespreken we jouw wensen, de tone of voice en het doel van de opname. Vervolgens ga ik aan de slag en ontvang je de voice-over ter beoordeling. Waar nodig pas ik het aan, zodat het perfect aansluit bij jouw project.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40">
      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
        <ScrollReveal animation="fade-up">
          <p className="text-[#1c1c1c]/40 text-[10px] font-medium tracking-[0.25em] uppercase text-center">
            Veelgestelde vragen
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1c1c1c] text-center mt-3 mb-10 md:mb-14">
            FAQ
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" stagger={0.08}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white mb-3 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex items-center justify-between w-full px-6 md:px-7 py-4 md:py-5 text-left cursor-pointer"
                >
                  <span className="text-sm md:text-base font-semibold text-[#1c1c1c] pr-4">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#1c1c1c] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#1c1c1c] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 md:px-7 pb-5 md:pb-6">
                    <p className="text-sm md:text-base text-[#1c1c1c]/70 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
