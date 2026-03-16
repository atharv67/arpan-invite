"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { weddingConfig } from "@/config/wedding";
import type { WeddingEvent } from "@/types/wedding";
import LeheriyaWave from "@/components/decorative/LeheriyaWave";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Icon map — simple emoji/unicode symbols for each event type
const ICONS: Record<string, string> = {
  mehendi:       "🌿",
  haldi:         "🌼",
  sangeet:       "🎶",
  wedding:       "🪔",
  reception:     "✨",
  puja:          "🙏",
  baraat:        "🐎",
  ganpati:       "🐘",
};

const CULTURAL_COLORS = {
  marwari:       { border: "#FF6B00", accent: "#FF6B00", text: "text-saffron" },
  maharashtrian: { border: "#5B2D8E", accent: "#8B5CF6", text: "text-purple-400" },
  both:          { border: "#D4AF37", accent: "#D4AF37", text: "text-gold" },
};

function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
  const colors = CULTURAL_COLORS[event.culturalTag];

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Card */}
      <div
        className="relative border rounded-lg p-6 md:p-8 h-full"
        style={{
          borderColor: `${colors.border}40`,
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Leheriya texture */}
        <LeheriyaWave color={colors.accent} opacity={0.05} />

        {/* Colored top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
          style={{ background: `linear-gradient(90deg, ${colors.accent}80, ${colors.accent}, ${colors.accent}80)` }}
        />

        {/* Icon badge */}
        <div
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-lg"
          style={{ background: `${colors.accent}20`, border: `1px solid ${colors.accent}40` }}
        >
          {ICONS[event.icon]}
        </div>

        {/* Cultural tag pill */}
        <div className="mb-4">
          <span
            className={`inline-block text-xs font-lato uppercase tracking-widest px-3 py-1 rounded-full ${colors.text}`}
            style={{ background: `${colors.accent}15`, border: `1px solid ${colors.accent}30` }}
          >
            {event.culturalTag === "both" ? "Both Families" : event.culturalTag === "marwari" ? "Marwari" : "Maharashtrian"}
          </span>
        </div>

        {/* Event name */}
        <h3
          className="text-gold mb-1"
          style={{
            fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
            fontSize: "1.6rem",
            fontWeight: 500,
            letterSpacing: "0.03em",
          }}
        >
          {event.name}
        </h3>

        {/* Date & Time */}
        <p className="font-lato text-gold/60 text-sm mb-1">{event.date}</p>
        <p className={`font-lato text-sm font-semibold mb-4 ${colors.text}`}>{event.time}</p>

        {/* Divider */}
        <div className="w-12 h-px mb-4" style={{ background: `${colors.accent}60` }} />

        {/* Venue */}
        <p className="font-lato text-ivory/80 text-sm font-medium mb-1">📍 {event.venue}</p>
        <p className="font-lato text-ivory/50 text-xs mb-3 leading-relaxed">{event.address}</p>

        {/* Description */}
        <p className="font-cormorant text-ivory/70 text-base italic leading-relaxed mb-4">
          {event.description}
        </p>

        {/* Dresscode */}
        <div
          className="flex items-center gap-2 text-xs font-lato uppercase tracking-widest rounded px-3 py-2 mt-auto"
          style={{ background: `${colors.accent}10`, border: `1px solid ${colors.accent}20` }}
        >
          <span className="text-base">👘</span>
          <span className={colors.text}>{event.dresscode}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventsSection() {
  const { events } = weddingConfig;
  const visibleEvents = events.filter((e) => e.visible);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-20 px-4"
      style={{ background: "linear-gradient(180deg, #1A0A00 0%, #120800 100%)" }}
    >
      {/* Section header */}
      <div ref={ref} className="text-center mb-16 max-w-2xl mx-auto">
        <motion.p
          className="font-fell text-gold/60 tracking-[0.5em] text-xs uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          ✦ Join Us ✦
        </motion.p>
        <motion.h2
          style={{
            fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 300,
            letterSpacing: "0.05em",
            background: "linear-gradient(90deg,#D4AF37 0%,#F0D060 35%,#D4AF37 55%,#A88520 75%,#D4AF37 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gold-shimmer 4s linear infinite",
            display: "inline-block",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          The Celebrations
        </motion.h2>
        <motion.div
          className="w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.p
          className="font-cormorant text-ivory/50 italic text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Every moment, a memory. Every ritual, a blessing.
        </motion.p>
      </div>

      {/* Events grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleEvents.map((event, index) => (
          <EventCard key={event.name} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}
