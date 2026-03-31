"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function ContactSection() {
  return (
    <section className="pt-20 pb-24 md:pt-32 md:pb-36 max-w-3xl mx-auto w-full md:px-6">
      <ScrollReveal animation="fade-up">
        <h2 className="text-5xl md:text-6xl font-semibold text-[#1a1a1a] text-center mb-10 px-6 md:px-0">
          Contact
        </h2>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" stagger={0.1}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4 md:max-w-md md:mx-auto"
        >
          <div>
            <label htmlFor="naam" className="block text-sm font-semibold text-[#2c2c2c] mb-1 px-4 md:px-0">
              Naam
            </label>
            <input
              id="naam"
              type="text"
              className="bg-white h-[39px] w-full px-4 text-sm text-[#2c2c2c] outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#2c2c2c] mb-1 px-4 md:px-0">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="bg-white h-[39px] w-full px-4 text-sm text-[#2c2c2c] outline-none"
            />
          </div>
          <div>
            <label htmlFor="bericht" className="block text-sm font-semibold text-[#2c2c2c] mb-1 px-4 md:px-0">
              Bericht
            </label>
            <textarea
              id="bericht"
              className="bg-white h-[174px] w-full px-4 py-2 text-sm text-[#2c2c2c] outline-none resize-none"
            />
          </div>
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-[#2c2c2c] text-white font-semibold text-sm px-12 py-3 rounded-full hover:bg-[#1a1a1a] transition-colors cursor-pointer"
            >
              Verzenden &rarr;
            </button>
          </div>
        </form>
      </ScrollReveal>
    </section>
  );
}
