"use client";

import Image from "next/image";
import { useEffect, useRef, type BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, Phone, MessageCircle } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { categories } from "@/components/sections/TarievenSection";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { submitContact } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactChannels = [
  {
    icon: Mail,
    label: "info@maikvanvelthoven.nl",
    href: "mailto:info@maikvanvelthoven.nl",
  },
  {
    icon: Phone,
    label: "+31 6 25115769",
    href: "tel:+31625115769",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/31625115769",
  },
];

const fieldClass =
  "bg-[#faf7f1] w-full text-sm text-[#1c1c1c] border-black/5 rounded-md focus-visible:border-[#0f2a4a] focus-visible:ring-0";

// Wrapped so it reads the clock at call time (in effects/handlers), not during render.
const nowMs = () => Date.now();

export default function ContactSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { naam: "", email: "", onderwerp: "", bericht: "" },
  });

  const { isSubmitting } = form.formState;

  // Spam protection: stamp the render time into a hidden input on mount, then
  // read it (and the honeypot) from FormData at submit — no refs in the handler.
  const startedAtInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (startedAtInputRef.current) {
      startedAtInputRef.current.value = String(nowMs());
    }
  }, []);

  async function onSubmit(values: ContactFormValues, event?: BaseSyntheticEvent) {
    const formEl = event?.target as HTMLFormElement | undefined;
    const data = formEl ? new FormData(formEl) : undefined;
    const website = ((data?.get("website") as string | null) ?? "").trim();
    const startedAt = Number(data?.get("startedAt")) || 0;

    const result = await submitContact(values, {
      website,
      elapsedMs: startedAt ? nowMs() - startedAt : undefined,
    });
    if (result.success) {
      toast.success("Bedankt! Je bericht is verzonden.");
      form.reset();
    } else {
      toast.error(result.error);
    }
  }

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

            <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto lg:mx-0 mt-8 rounded-full overflow-hidden ring-4 ring-white shadow-md">
              <Image
                src="/images/maik-3.webp"
                alt="Maik van Velthoven"
                fill
                className="object-cover object-top"
              />
            </div>

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
          <ScrollReveal animation="fade-up" delay={0.1}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm"
                noValidate
              >
                {/* Honeypot — hidden from humans, bots fill it. Off-screen so
                    bots that skip display:none fields still see it. */}
                <div
                  className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                {/* Time-trap — render timestamp, stamped in via effect. */}
                <input type="hidden" name="startedAt" ref={startedAtInputRef} />

                <FormField
                  control={form.control}
                  name="naam"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[#1c1c1c]">
                        Naam
                      </FormLabel>
                      <FormControl>
                        <Input
                          className={`${fieldClass} h-11 px-4`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[#1c1c1c]">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className={`${fieldClass} h-11 px-4`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="onderwerp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[#1c1c1c]">
                        Onderwerp
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger
                            className={`${fieldClass} !h-11 px-4 [&[data-placeholder]]:text-[#1c1c1c]/50`}
                          >
                            <SelectValue placeholder="Selecteer een onderwerp" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.label}>
                              {cat.label}
                            </SelectItem>
                          ))}
                          <SelectItem value="Anders">Anders</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bericht"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[#1c1c1c]">
                        Bericht
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className={`${fieldClass} min-h-[150px] px-4 py-3 resize-none`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-auto bg-[#b2492b] text-white font-semibold text-sm py-3.5 rounded-full hover:bg-[#9e4025]"
                  >
                    {isSubmitting ? "Verzenden…" : "Verzenden →"}
                  </Button>
                </div>
              </form>
            </Form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
