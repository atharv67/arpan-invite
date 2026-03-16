"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { weddingConfig } from "@/config/wedding";

// Central lotus mandala SVG divider
function LotusMandala() {
  return (
    <svg viewBox="0 0 120 120" width={120} height={120} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Outer ring */}
      <circle cx="60" cy="60" r="55" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="60" cy="60" r="48" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3" />

      {/* Lotus petals — 8 outer */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const cx = 60 + 30 * Math.sin(angle);
        const cy = 60 - 30 * Math.cos(angle);
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="7"
            ry="14"
            stroke="#D4AF37"
            strokeWidth="1"
            fill="#D4AF37"
            fillOpacity="0.06"
            transform={`rotate(${i * 45} ${cx} ${cy})`}
          />
        );
      })}

      {/* Inner 8 petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = ((i * 45 + 22.5) * Math.PI) / 180;
        const cx = 60 + 16 * Math.sin(angle);
        const cy = 60 - 16 * Math.cos(angle);
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="4"
            ry="8"
            stroke="#D4AF37"
            strokeWidth="0.8"
            fill="#D4AF37"
            fillOpacity="0.08"
            transform={`rotate(${i * 45 + 22.5} ${cx} ${cy})`}
          />
        );
      })}

      {/* Center circle */}
      <circle cx="60" cy="60" r="8" stroke="#D4AF37" strokeWidth="1.2" fill="#D4AF37" fillOpacity="0.15" />
      <circle cx="60" cy="60" r="3" fill="#D4AF37" opacity="0.9" />
    </svg>
  );
}

function TraditionPill({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-block font-lato text-xs md:text-sm px-4 py-2 rounded-full border m-1"
      style={{
        borderColor: `${color}50`,
        color: color,
        background: `${color}12`,
      }}
    >
      {label}
    </span>
  );
}

export default function CulturalSection() {
  const { content } = weddingConfig;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FDF8F0 0%, #FFF8E8 50%, #FDF8F0 100%)" }}
    >
      {/* Subtle mandala watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="mandala-spin-slow-reverse" style={{ opacity: 0.04 }}>
          <LotusMandala />
        </div>
      </div>

      {/* Header */}
      <div ref={ref} className="text-center mb-16 max-w-2xl mx-auto relative z-10">
        <motion.p
          className="font-fell text-gold/60 tracking-[0.5em] text-xs uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          ✦ Our Roots ✦
        </motion.p>
        <motion.h2
          className="text-maroon"
          style={{
            fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 300,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Two Cultures, One Love
        </motion.h2>
        <motion.div
          className="w-40 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 relative z-10">

        {/* ── Marwari (Left) ── */}
        <motion.div
          className="flex flex-col items-center md:items-end text-center md:text-right px-8"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Cultural header */}
          <div className="mb-6">
            <p className="font-fell text-saffron tracking-[0.4em] text-xs uppercase mb-2">Marwari Heritage</p>
            <h3
              className="text-charcoal"
              style={{
                fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
                fontSize: "2rem",
                fontWeight: 500,
              }}
            >
              Arpan&apos;s Traditions
            </h3>
            <div className="w-20 h-px bg-saffron/50 mt-3 ml-auto" />
          </div>

          <p className="font-lato text-charcoal/70 text-sm leading-relaxed max-w-sm mb-6">
            {content.marwariDescription}
          </p>

          <div className="flex flex-wrap justify-center md:justify-end">
            {content.marwariTraditions.map((t) => (
              <TraditionPill key={t} label={t} color="#FF6B00" />
            ))}
          </div>
        </motion.div>

        {/* ── Lotus mandala center divider ── */}
        <motion.div
          className="flex flex-col items-center justify-center py-4 px-4 md:px-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block" />
          <div className="my-4">
            <LotusMandala />
          </div>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block" />
        </motion.div>

        {/* ── Maharashtrian (Right) ── */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left px-8"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-6">
            <p className="font-fell text-purple tracking-[0.4em] text-xs uppercase mb-2">Maharashtrian Heritage</p>
            <h3
              className="text-charcoal"
              style={{
                fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
                fontSize: "2rem",
                fontWeight: 500,
              }}
            >
              Shivani&apos;s Traditions
            </h3>
            <div className="w-20 h-px bg-purple/50 mt-3" />
          </div>

          <p className="font-lato text-charcoal/70 text-sm leading-relaxed max-w-sm mb-6">
            {content.maharashtranDescription}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start">
            {content.maharashtranTraditions.map((t) => (
              <TraditionPill key={t} label={t} color="#5B2D8E" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
