import Image from "next/image";
import type { Track } from "@/components/AudioPlayer";

const demos: Track[] = [
  { title: "Commercials", src: "/audio/commercials.mp3" },
  { title: "Narratieve & Corporate", src: "/audio/narratieve-corporate.mp3" },
];

type DemosSectionProps = {
  onPlay: (track: Track) => void;
  currentTrack: Track | null;
};

export default function DemosSection({ onPlay, currentTrack }: DemosSectionProps) {
  return (
    <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto w-full">
      <h2 className="text-5xl md:text-6xl font-semibold text-[#1c1c1c] text-center">
        DEMOS
      </h2>
      <p className="mt-6 text-xs md:text-sm text-[#1c1c1c] text-center font-medium leading-relaxed">
        Beluister hier mijn demo&apos;s terwijl je verder scrolt
        <br />
        op mijn pagina
      </p>
      <div className="mt-8 space-y-4">
        {demos.map((demo) => {
          const isActive = currentTrack?.src === demo.src;
          return (
            <button
              key={demo.title}
              onClick={() => onPlay(demo)}
              className={`flex items-center w-full px-5 py-3 gap-4 transition-colors cursor-pointer ${
                isActive
                  ? "bg-[#0f2a4a] text-white"
                  : "bg-white text-[#1c1c1c] hover:bg-gray-50"
              }`}
            >
              <Image
                src="/images/icon-speaker.png"
                alt=""
                width={27}
                height={27}
                className={`shrink-0 ${isActive ? "invert" : ""}`}
              />
              <span className="text-base font-medium text-center w-full">
                {demo.title}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
