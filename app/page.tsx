"use client";

import { useState } from "react";
import BubbleMenu from "@/components/BubbleMenu";
import AudioPlayer, { type Track } from "@/components/AudioPlayer";
import SectionDivider from "@/components/SectionDivider";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import StudioSection from "@/components/sections/StudioSection";
import WerkwijzeSection from "@/components/sections/WerkwijzeSection";
import TarievenSection from "@/components/sections/TarievenSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const menuItems = [
  {
    label: "demos",
    href: "#demos",
    ariaLabel: "Demos",
    rotation: -8,
    hoverStyles: { bgColor: "#0f2a4a", textColor: "#ffffff" },
  },
  {
    label: "over mij",
    href: "#about",
    ariaLabel: "Over mij",
    rotation: 8,
    hoverStyles: { bgColor: "#0f2a4a", textColor: "#ffffff" },
  },
  {
    label: "studio",
    href: "#studio",
    ariaLabel: "Studio",
    rotation: -8,
    hoverStyles: { bgColor: "#0f2a4a", textColor: "#ffffff" },
  },
  {
    label: "werkwijze",
    href: "#werkwijze",
    ariaLabel: "Werkwijze",
    rotation: 8,
    hoverStyles: { bgColor: "#0f2a4a", textColor: "#ffffff" },
  },
  {
    label: "tarieven",
    href: "#tarieven",
    ariaLabel: "Tarieven",
    rotation: -8,
    hoverStyles: { bgColor: "#0f2a4a", textColor: "#ffffff" },
  },
  {
    label: "faq",
    href: "#faq",
    ariaLabel: "FAQ",
    rotation: 8,
    hoverStyles: { bgColor: "#0f2a4a", textColor: "#ffffff" },
  },
];

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="relative bg-[#faf7f1] min-h-screen">
      <BubbleMenu
        items={menuItems}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#0f2a4a"
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

      <SectionDivider />

      <div id="werkwijze">
        <WerkwijzeSection />
      </div>

      <div id="tarieven">
        <TarievenSection />
      </div>

      <SectionDivider />

      <div id="faq">
        <FAQSection />
      </div>

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
