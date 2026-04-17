"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

// TODO: replace with real contact details before launch
const contactChannels = [
  {
    icon: Mail,
    label: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: Phone,
    label: "+31 6 00 00 00 00",
    href: "tel:+31600000000",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/31600000000",
  },
];

export default function ContactSection() {
  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">
          {/* Left: heading + intro + channels */}
          <ScrollReveal animation="fade-up" className="text-center lg:text-left">
            <p className="text-[#1c1c1c]/40 text-[10px] font-medium tracking-[0.25em] uppercase">
              Laten we praten
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1c1c1c] mt-3">
              Contact
            </h2>
            <p className="mt-5 text-base text-[#1c1c1c]/70 leading-relaxed max-w-md mx-auto lg:mx-0">
              Heb je een project in gedachten of gewoon een vraag? Stuur een
              bericht, dan neem ik zo snel mogelijk contact met je op.
            </p>

            <ul className="mt-8 flex flex-wrap lg:flex-col justify-center lg:justify-start gap-3 lg:gap-2">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      className="inline-flex items-center gap-3 bg-white text-[#1c1c1c] text-sm font-medium px-4 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[#b2492b]" />
                      {channel.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal animation="fade-up" delay={0.1} stagger={0.08}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm"
            >
              <div>
                <label
                  htmlFor="naam"
                  className="block text-sm font-semibold text-[#1c1c1c] mb-1.5"
                >
                  Naam
                </label>
                <input
                  id="naam"
                  type="text"
                  className="bg-[#faf7f1] h-11 w-full px-4 text-sm text-[#1c1c1c] outline-none rounded-md border border-black/5 focus:border-[#0f2a4a] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#1c1c1c] mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="bg-[#faf7f1] h-11 w-full px-4 text-sm text-[#1c1c1c] outline-none rounded-md border border-black/5 focus:border-[#0f2a4a] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="bericht"
                  className="block text-sm font-semibold text-[#1c1c1c] mb-1.5"
                >
                  Bericht
                </label>
                <textarea
                  id="bericht"
                  className="bg-[#faf7f1] h-[174px] w-full px-4 py-3 text-sm text-[#1c1c1c] outline-none resize-none rounded-md border border-black/5 focus:border-[#0f2a4a] transition-colors"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#b2492b] text-white font-semibold text-sm px-12 py-3.5 rounded-full hover:bg-[#9e4025] transition-colors cursor-pointer"
                >
                  Verzenden &rarr;
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
