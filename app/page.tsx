"use client";

import { useState } from "react";
import BubbleMenu from "@/components/BubbleMenu";
import AudioPlayer, { type Track } from "@/components/AudioPlayer";
import SectionDivider from "@/components/SectionDivider";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import StudioSection from "@/components/sections/StudioSection";
import TarievenSection from "@/components/sections/TarievenSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const menuItems = [
  {
    label: "home",
    href: "#",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#2c2c2c", textColor: "#ffffff" },
  },
  {
    label: "demos",
    href: "#demos",
    ariaLabel: "Demos",
    rotation: 8,
    hoverStyles: { bgColor: "#2c2c2c", textColor: "#ffffff" },
  },
  {
    label: "over mij",
    href: "#about",
    ariaLabel: "Over mij",
    rotation: 8,
    hoverStyles: { bgColor: "#2c2c2c", textColor: "#ffffff" },
  },
  {
    label: "studio",
    href: "#studio",
    ariaLabel: "Studio",
    rotation: -8,
    hoverStyles: { bgColor: "#2c2c2c", textColor: "#ffffff" },
  },
];

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="relative bg-[#f5f5f5] min-h-screen">
      <BubbleMenu
        items={menuItems}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />

      <div id="demos">
        <HeroSection
          onPlay={setCurrentTrack}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
        />
      </div>

      <SectionDivider />

      <div id="about">
        <AboutSection />
      </div>

      <SectionDivider />

      <div id="studio">
        <StudioSection />
      </div>

      <TarievenSection />

      <SectionDivider />

      <FAQSection />

      <SectionDivider />

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />

      <AudioPlayer
        track={currentTrack}
        onClose={() => setCurrentTrack(null)}
        onPlayingChange={setIsPlaying}
      />
    </main>
  );
}
