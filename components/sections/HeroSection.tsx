"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { getCountdown } from "@/lib/utils";
import FloatingPetals from "@/components/decorative/FloatingPetals";

// ── Countdown box ────────────────────────────────────────────────────────────
function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold border border-gold/40 bg-white/5 backdrop-blur-sm rounded px-3 sm:px-4 py-2 min-w-[58px] sm:min-w-[70px] text-center tabular-nums"
        style={{ fontFamily: "var(--font-cormorant-var,'Cormorant Garamond',serif)" }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <span
        className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-gold/70 mt-2"
        style={{ fontFamily: "var(--font-lato-var,'Lato',sans-serif)" }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Corner ornament — four tiny SVG brackets, one per corner ─────────────────
function Corner({ rotate = 0 }: { rotate?: number }) {
  return (
    <svg
      width="32" height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)`, flexShrink: 0 }}
    >
      <path d="M2 30 L2 6 Q2 2 6 2 L30 2" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.75" />
      <path d="M6 30 L6 10 Q6 6 10 6 L30 6" stroke="#D4AF37" strokeWidth="0.7" strokeDasharray="3 3" strokeOpacity="0.4" />
      <circle cx="2" cy="2" r="2.5" fill="#D4AF37" opacity="0.8" />
    </svg>
  );
}

// ── Horizontal ornamental rule ───────────────────────────────────────────────
function OrnamentRule() {
  return (
    <div className="flex items-center justify-center gap-3 w-full" aria-hidden="true">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/50" />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2 L12.5 10 L10 18 L7.5 10 Z" stroke="#D4AF37" strokeWidth="1" fill="#D4AF37" fillOpacity="0.2" />
        <circle cx="10" cy="10" r="2" fill="#D4AF37" opacity="0.9" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function HeroSection() {
  const { couple, content } = weddingConfig;
  const [countdown, setCountdown] = useState(getCountdown(couple.weddingDate));

  useEffect(() => {
    const id = setInterval(() => setCountdown(getCountdown(couple.weddingDate)), 1000);
    return () => clearInterval(id);
  }, [couple.weddingDate]);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #2A0606 0%, #4A0E0E 40%, #3A1208 70%, #1A0505 100%)",
      }}
    >
      <FloatingPetals />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Content column ── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-5 sm:px-8 py-20 mx-auto">

        {/* Blessing line */}
        <motion.p
          className="uppercase mb-8 text-gold/80 tracking-[0.35em] text-[11px] sm:text-sm md:text-base"
          style={{ fontFamily: "var(--font-fell-var,'IM Fell English SC',serif)" }}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          ✦ With the blessings of Lord Ganesha ✦
        </motion.p>

        {/* ── Framed names block ──────────────────────────────────────────── */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Outer wrapper with CSS border + corner ornaments */}
          <div className="relative border border-gold/30 w-full">

            {/* Four corner ornaments — absolutely positioned outside the border */}
            <span className="absolute -top-2 -left-2"><Corner rotate={0}   /></span>
            <span className="absolute -top-2 -right-2"><Corner rotate={90}  /></span>
            <span className="absolute -bottom-2 -left-2"><Corner rotate={270} /></span>
            <span className="absolute -bottom-2 -right-2"><Corner rotate={180} /></span>

            {/* Inner border (dashed, inset) */}
            <div className="absolute inset-[6px] border border-dashed border-gold/20 pointer-events-none" />

            {/* Names + ampersand */}
            <div className="relative flex flex-col items-center py-8 sm:py-10 md:py-12 px-6 sm:px-10 gap-0">

              {/* Top rule */}
              <div className="w-full mb-4 sm:mb-5">
                <OrnamentRule />
              </div>

              {/* Arpan */}
              <h1
                className="w-full text-center leading-none"
                style={{
                  fontFamily: "var(--font-cormorant-var,'Cormorant Garamond',serif)",
                  fontSize: "clamp(3.2rem, 12vw, 6.5rem)",
                  fontWeight: 300,
                  letterSpacing: "0.04em",
                  background: "linear-gradient(90deg,#D4AF37 0%,#F0D060 35%,#D4AF37 55%,#A88520 75%,#D4AF37 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gold-shimmer 4s linear infinite",
                }}
              >
                {couple.arpan.name}
              </h1>

              {/* Ampersand */}
              <div
                className="text-gold/55 leading-none my-1 sm:my-2"
                style={{
                  fontFamily: "var(--font-cormorant-var,'Cormorant Garamond',serif)",
                  fontSize: "clamp(1.6rem, 6vw, 3.2rem)",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                &amp;
              </div>

              {/* Shivani */}
              <h1
                className="w-full text-center leading-none"
                style={{
                  fontFamily: "var(--font-cormorant-var,'Cormorant Garamond',serif)",
                  fontSize: "clamp(3.2rem, 12vw, 6.5rem)",
                  fontWeight: 300,
                  letterSpacing: "0.04em",
                  background: "linear-gradient(90deg,#D4AF37 0%,#F0D060 35%,#D4AF37 55%,#A88520 75%,#D4AF37 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gold-shimmer 4s linear infinite",
                }}
              >
                {couple.shivani.name}
              </h1>

              {/* Bottom rule */}
              <div className="w-full mt-4 sm:mt-5">
                <OrnamentRule />
              </div>

            </div>
          </div>
        </motion.div>

        {/* Wedding date */}
        <motion.p
          className="text-gold/90 tracking-[0.28em] text-sm sm:text-base md:text-lg mt-7"
          style={{ fontFamily: "var(--font-playfair-var,'Playfair Display SC',serif)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {couple.weddingDateDisplay}
        </motion.p>

        {/* Divider */}
        <motion.div
          className="w-32 sm:w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent my-5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        />

        {/* Tagline */}
        <motion.p
          className="text-gold/60 text-sm md:text-base max-w-[280px] sm:max-w-sm leading-relaxed italic"
          style={{ fontFamily: "var(--font-lato-var,'Lato',sans-serif)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          {content.heroTagline}
        </motion.p>

        {/* Countdown */}
        {countdown && (
          <motion.div
            className="flex gap-3 sm:gap-4 md:gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <CountdownBox value={countdown.days}    label="Days"    />
            <CountdownBox value={countdown.hours}   label="Hours"   />
            <CountdownBox value={countdown.minutes} label="Minutes" />
            <CountdownBox value={countdown.seconds} label="Seconds" />
          </motion.div>
        )}
        {!countdown && (
          <motion.p
            className="mt-10 text-gold text-2xl italic"
            style={{ fontFamily: "var(--font-cormorant-var,'Cormorant Garamond',serif)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            We are married! 🎉
          </motion.p>
        )}

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <p
            className="text-gold/40 text-[10px] uppercase tracking-[0.35em] mt-2"
            style={{ fontFamily: "var(--font-lato-var,'Lato',sans-serif)" }}
          >
            Scroll
          </p>
        </motion.div>

      </div>
    </section>
  );
}
