"use client";

import { useState, useRef, useCallback } from "react";
import BubbleMenu from "@/components/BubbleMenu";
import AudioPlayer, {
  type Track,
  type AudioPlayerHandle,
} from "@/components/AudioPlayer";
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
    label: "Demos",
    href: "#demos",
    ariaLabel: "Demos",
    rotation: -8,
    hoverStyles: { bgColor: "#0f2a4a", textColor: "#ffffff" },
  },
  {
    label: "Over mij",
    href: "#about",
    ariaLabel: "Over mij",
    rotation: 8,
    hoverStyles: { bgColor: "#0f2a4a", textColor: "#ffffff" },
  },
  {
    label: "Studio",
    href: "#studio",
    ariaLabel: "Studio",
    rotation: -8,
    hoverStyles: { bgColor: "#0f2a4a", textColor: "#ffffff" },
  },
  {
    label: "Werkwijze",
    href: "#werkwijze",
    ariaLabel: "Werkwijze",
    rotation: 8,
    hoverStyles: { bgColor: "#0f2a4a", textColor: "#ffffff" },
  },
  {
    label: "Tarieven",
    href: "#tarieven",
    ariaLabel: "Tarieven",
    rotation: -8,
    hoverStyles: { bgColor: "#0f2a4a", textColor: "#ffffff" },
  },
  {
    label: "FAQ",
    href: "#faq",
    ariaLabel: "FAQ",
    rotation: 8,
    hoverStyles: { bgColor: "#0f2a4a", textColor: "#ffffff" },
  },
];

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<AudioPlayerHandle>(null);

  const handlePlay = useCallback(
    (track: Track) => {
      // Clicking the already-active track toggles play/pause instead of reloading it.
      if (currentTrack?.src === track.src) {
        playerRef.current?.toggle();
      } else {
        setCurrentTrack(track);
      }
    },
    [currentTrack],
  );

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
          onPlay={handlePlay}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
        />
      </div>

      <SectionDivider />

      <div id="about" className="scroll-mt-24">
        <AboutSection />
      </div>

      <SectionDivider />

      <div id="studio" className="scroll-mt-24">
        <StudioSection />
      </div>

      <SectionDivider />

      <div id="werkwijze" className="scroll-mt-24">
        <WerkwijzeSection />
      </div>

      <div id="tarieven" className="scroll-mt-40">
        <TarievenSection />
      </div>

      <SectionDivider />

      <div id="faq" className="scroll-mt-24">
        <FAQSection />
      </div>

      <SectionDivider />

      <div id="contact" className="scroll-mt-24">
        <ContactSection />
      </div>

      <Footer />

      <AudioPlayer
        ref={playerRef}
        track={currentTrack}
        onClose={() => setCurrentTrack(null)}
        onPlayingChange={setIsPlaying}
      />
    </main>
  );
}
