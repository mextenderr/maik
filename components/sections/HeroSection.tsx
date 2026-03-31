"use client";

import { useRef } from "react";
import Image from "next/image";
import { Play, Pause, Download } from "lucide-react";
import type { Track } from "@/components/AudioPlayer";
import { useHeroEntrance } from "@/components/ScrollReveal";

const demos: Track[] = [
  { title: "Commercials", src: "/audio/commercials.mp3" },
  { title: "Narratieve & Corporate", src: "/audio/narratieve-corporate.mp3" },
];

type HeroSectionProps = {
  onPlay: (track: Track) => void;
  currentTrack: Track | null;
  isPlaying: boolean;
};

export default function HeroSection({
  onPlay,
  currentTrack,
  isPlaying,
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  useHeroEntrance(sectionRef);

  return (
    <section ref={sectionRef} className="relative bg-[#111] overflow-hidden lg:min-h-screen lg:flex lg:items-center">
      {/* Image — top block on mobile, right half on desktop */}
      <div data-hero-image className="relative h-[45vh] lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <Image
          src="/images/maik-hero.jpg"
          alt="Maik van Velthoven"
          fill
          className="object-cover grayscale"
          priority
        />
      </div>

      {/* Content — solid dark background, below image on mobile */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-10 lg:py-24 w-full">
        <div className="lg:w-1/2">
          <p data-hero-label className="text-white/60 text-[11px] font-medium tracking-[0.3em] uppercase">
            Voice Actor
          </p>
        </div>

        <h1 className="mt-4 lg:mt-5 pointer-events-none">
          <span data-hero-name1 className="block text-white text-7xl md:text-8xl lg:text-[9rem] font-semibold tracking-tighter leading-none">
            MAIK
          </span>
          <span data-hero-name2 className="block text-white/30 lg:text-white/10 text-5xl md:text-6xl lg:text-[5.5rem] font-semibold tracking-tighter leading-none mt-1">
            VAN VELTHOVEN
          </span>
        </h1>

        <div className="lg:w-1/2">
          <p data-hero-desc className="mt-8 text-white/60 text-sm max-w-sm leading-relaxed">
            Professionele stem voor commercials, narratieve producties en
            corporate content.
          </p>

          {/* Demos */}
          <div data-hero-demos className="mt-10">
            <p className="text-white/40 text-[10px] font-medium tracking-[0.25em] uppercase">
              Demo&apos;s
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              {demos.map((demo) => {
                const isActive = currentTrack?.src === demo.src;
                return (
                  <button
                    key={demo.title}
                    onClick={() => onPlay(demo)}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-full transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white/15"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        isActive
                          ? "bg-white text-[#111]"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      {isActive && isPlaying ? (
                        <Pause className="w-3.5 h-3.5" />
                      ) : (
                        <Play className="w-3.5 h-3.5 ml-0.5" />
                      )}
                    </div>
                    <span
                      className={`flex-1 text-sm font-medium transition-colors duration-200 ${
                        isActive ? "text-white" : "text-white/70 group-hover:text-white/90"
                      }`}
                    >
                      {demo.title}
                    </span>
                    <a
                      href={demo.src}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="shrink-0 ml-auto w-7 h-7 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label={`Download ${demo.title}`}
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
