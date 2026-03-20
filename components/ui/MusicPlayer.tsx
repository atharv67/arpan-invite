"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MusicPlayerProps {
  src: string;
  label: string;
  autoplay?: boolean;
}

// Animated equalizer bars — shown while playing
function EqBars() {
  return (
    <span className="flex items-end gap-[2px] h-4" aria-hidden="true">
      {[1, 1.6, 0.7, 1.3, 0.9].map((delay, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-sm bg-maroon"
          animate={{ scaleY: [0.3, 1, 0.5, 0.8, 0.3] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            delay: i * 0.12,
            ease: "easeInOut",
          }}
          style={{ height: "100%", transformOrigin: "bottom" }}
        />
      ))}
    </span>
  );
}

// Music note icon — shown while paused
function NoteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M9 18.5a2.5 2.5 0 1 0 5 0V6l5-1"
        stroke="#4A0E0E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function MusicPlayer({ src, label, autoplay }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.15;
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [src]);

  // Start playing when the envelope is opened (autoplay signal)
  useEffect(() => {
    if (!autoplay) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().then(() => setPlaying(true)).catch(() => {});
  }, [autoplay]);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* Player button */}
      <motion.button
        onClick={toggle}
        title={playing ? `Pause — ${label}` : `Play — ${label}`}
        aria-label={playing ? "Pause music" : "Play music"}
        className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        style={{ background: "linear-gradient(135deg, #F0D060 0%, #D4AF37 50%, #A88520 100%)" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        animate={playing ? { boxShadow: ["0 0 0px rgba(212,175,55,0.4)", "0 0 18px rgba(212,175,55,0.7)", "0 0 0px rgba(212,175,55,0.4)"] } : {}}
        transition={playing ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
      >
        {/* Outer ring pulse while playing */}
        {playing && (
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-gold/60"
            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
        )}

        {/* Icon */}
        <span className="relative z-10">
          {playing ? <EqBars /> : <NoteIcon />}
        </span>
      </motion.button>

    </div>
  );
}
