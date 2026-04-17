"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, X } from "lucide-react";

export type Track = {
  title: string;
  src: string;
};

type AudioPlayerProps = {
  track: Track | null;
  onClose: () => void;
  onPlayingChange?: (playing: boolean) => void;
};

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function AudioPlayer({ track, onClose, onPlayingChange }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, _setIsPlaying] = useState(false);
  const setIsPlaying = useCallback((v: boolean) => {
    _setIsPlaying(v);
    onPlayingChange?.(v);
  }, [onPlayingChange]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [visible, setVisible] = useState(false);

  // Animate in when track changes
  useEffect(() => {
    if (track) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [track]);

  // Load and autoplay new track
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !track) return;

    audio.src = track.src;
    audio.load();
    audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [track]);

  // Time updates
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true));
    }
  }, [isPlaying]);

  const seek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      if (!audio || !duration) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audio.currentTime = ratio * duration;
    },
    [duration],
  );

  const handleClose = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  if (!track) return <audio ref={audioRef} preload="metadata" />;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <audio ref={audioRef} preload="metadata" />
      <div
        className={`fixed bottom-0 left-0 right-0 z-[100] transition-transform duration-300 ease-out ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-[#0f2a4a] text-white px-4 py-3 md:px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
          <div className="max-w-3xl mx-auto flex items-center gap-3 md:gap-4">
            {/* Play/pause */}
            <button
              onClick={togglePlay}
              className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              aria-label={isPlaying ? "Pauzeren" : "Afspelen"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white ml-0.5" />
              )}
            </button>

            {/* Track info + progress */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{track.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] text-white/50 tabular-nums w-8 shrink-0">
                  {formatTime(currentTime)}
                </span>
                <div
                  className="flex-1 h-1.5 bg-white/10 rounded-full cursor-pointer group"
                  onClick={seek}
                >
                  <div
                    className="h-full bg-white rounded-full relative transition-[width] duration-100"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <span className="text-[10px] text-white/50 tabular-nums w-8 shrink-0 text-right">
                  {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={handleClose}
              className="shrink-0 w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer"
              aria-label="Sluiten"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
