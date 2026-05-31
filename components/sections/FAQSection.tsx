"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { faqItems } from "@/lib/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
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
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-semibold text-[#1c1c1c] pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1c1c1c] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-7 pb-5 md:pb-6">
                      <p className="text-sm md:text-base text-[#1c1c1c]/70 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
