"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const faqItems = [
  {
    question: "Welke soorten projecten neem je aan?",
    answer:
      "Ik neem diverse projecten aan, waaronder commercials, narratieve producties, corporate video's, e-learning modules, audioboeken en meer. Neem gerust contact op om je specifieke project te bespreken.",
  },
  {
    question: "Hoe lang duurt het voordat ik mijn opname ontvang?",
    answer:
      "De levertijd hangt af van de omvang van het project. Voor korte commercials lever ik meestal binnen 24-48 uur. Grotere projecten worden in overleg gepland. Spoedopdrachten zijn mogelijk tegen een meerprijs.",
  },
  {
    question: "Wat heb je nodig om te beginnen met mijn project?",
    answer:
      "Ik heb het script nodig, eventuele referenties voor de gewenste stijl of toon, en informatie over het doel en de doelgroep van het project.",
  },
  {
    question: "In welke talen kun je inspreken?",
    answer:
      "Ik werk voornamelijk in het Nederlands, maar kan ook in het Engels inspreken. Voor andere talen werk ik samen met collega-voice actors uit mijn netwerk.",
  },
  {
    question: "Hoeveel revisies zijn inbegrepen?",
    answer:
      "Eén revisieronde is standaard inbegrepen. Kleine correcties door mijn fout zijn altijd gratis. Bij grotere scriptwijzigingen of extra revisierondes worden aanvullende kosten berekend.",
  },
  {
    question: "In welk formaat ontvang ik de bestanden?",
    answer:
      "Standaard lever ik in WAV (48kHz/24bit) en MP3. Andere formaten zoals AIFF of specifieke specs voor broadcast zijn op verzoek beschikbaar, zonder extra kosten.",
  },
  {
    question: "Kan ik een proefopname aanvragen?",
    answer:
      "Ja, voor grotere projecten bied ik graag een korte proefopname aan zodat je kunt horen of mijn stem en stijl bij jouw project passen. Neem contact op om dit te bespreken.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-20 pb-24 md:pt-32 md:pb-36">
      <ScrollReveal animation="fade-up">
        <h2 className="text-5xl md:text-6xl font-semibold text-[#1a1a1a] text-center mb-10 px-6">
          FAQ
        </h2>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" stagger={0.08} className="max-w-3xl mx-auto md:px-6">
        {faqItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="bg-white mb-3">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex items-center justify-between w-full px-6 py-4 text-left cursor-pointer"
              >
                <span className="text-sm font-semibold text-[#2c2c2c] pr-4">
                  {item.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-[#2c2c2c] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#2c2c2c] shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-[#2c2c2c]/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
