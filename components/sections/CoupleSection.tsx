"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import BandhaniPattern from "@/components/decorative/BandhaniPattern";
import PaithaniPeacock from "@/components/decorative/PaithaniPeacock";
import JharokhaFrame from "@/components/decorative/JharokhaFrame";
import ScrollReveal from "@/components/ui/ScrollReveal";

function PhotoOrPlaceholder({ photoPath, name, size = 220 }: { photoPath: string; name: string; size?: number }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const showPhoto = loaded && !errored;

  return (
    <div
      className="relative overflow-hidden rounded-full border-2 border-gold/40"
      style={{ width: size, height: size }}
    >
      {/* Gold initial placeholder — always visible until photo loads */}
      <div className="absolute inset-0 flex items-center justify-center bg-gold/10">
        <span
          className="text-gold font-cormorant font-light select-none"
          style={{ fontSize: size * 0.35 }}
        >
          {name[0]}
        </span>
      </div>

      {/* Photo — hidden until loaded, removed from view on error */}
      {!errored && (
        <Image
          src={photoPath}
          alt=""                        // empty alt: placeholder already shows the name
          fill
          className="object-cover transition-opacity duration-500"
          style={{ opacity: showPhoto ? 1 : 0 }}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}

export default function CoupleSection() {
  const { couple } = weddingConfig;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] min-h-[600px]">

        {/* ── Left: Arpan (Marwari / saffron) ── */}
        <div
          className="relative overflow-hidden flex flex-col items-center justify-center py-16 px-8 text-center"
          style={{ background: "linear-gradient(135deg, #4A0E0E 0%, #2A0606 100%)" }}
        >
          <BandhaniPattern color="#FF6B00" opacity={0.07} />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <JharokhaFrame width={280} height={340} color="#D4AF37">
              <PhotoOrPlaceholder photoPath={couple.arpan.photoPath} name={couple.arpan.name} size={200} />
            </JharokhaFrame>

            <h2
              className="mt-6"
              style={{
                fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
                fontSize: "2.8rem",
                fontWeight: 300,
                letterSpacing: "0.05em",
                background: "linear-gradient(90deg, #D4AF37 0%, #F0D060 35%, #D4AF37 55%, #A88520 75%, #D4AF37 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gold-shimmer 4s linear infinite",
                display: "inline-block",
              }}
            >
              {couple.arpan.name}
            </h2>

            <p className="text-saffron font-fell tracking-widest text-xs uppercase mt-1 mb-3">
              {couple.arpan.hometown}
            </p>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-saffron to-transparent mb-4" />

            <p className="font-lato text-gold/70 text-sm leading-relaxed max-w-xs italic">
              {couple.arpan.bio}
            </p>

            <p className="font-lato text-gold/50 text-xs mt-4 tracking-wide">
              {couple.arpan.parents}
            </p>
          </motion.div>
        </div>

        {/* ── Center: Ampersand ── */}
        <div
          className="relative flex flex-col items-center justify-center bg-ivory py-8 px-4 md:px-8 z-10"
          style={{ minWidth: "80px" }}
        >
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent mb-4 hidden md:block" />
          <motion.span
            className="text-gold"
            style={{
              fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
              fontSize: "clamp(4rem, 8vw, 7rem)",
              fontStyle: "italic",
              fontWeight: 300,
              lineHeight: 1,
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            &amp;
          </motion.span>
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent mt-4 hidden md:block" />
        </div>

        {/* ── Right: Shivani (Maharashtrian / purple) ── */}
        <div
          className="relative overflow-hidden flex flex-col items-center justify-center py-16 px-8 text-center"
          style={{ background: "linear-gradient(135deg, #3A1860 0%, #5B2D8E 100%)" }}
        >
          <PaithaniPeacock
            className="absolute top-0 left-0 right-0"
            color="#8B5CF6"
            accentColor="#D4AF37"
          />
          <PaithaniPeacock
            className="absolute bottom-0 left-0 right-0"
            color="#8B5CF6"
            accentColor="#D4AF37"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center mt-16 md:mt-0"
          >
            <JharokhaFrame width={280} height={340} color="#D4AF37">
              <PhotoOrPlaceholder photoPath={couple.shivani.photoPath} name={couple.shivani.name} size={200} />
            </JharokhaFrame>

            <h2
              className="mt-6"
              style={{
                fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
                fontSize: "2.8rem",
                fontWeight: 300,
                letterSpacing: "0.05em",
                background: "linear-gradient(90deg, #D4AF37 0%, #F0D060 35%, #D4AF37 55%, #A88520 75%, #D4AF37 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gold-shimmer 4s linear infinite",
                display: "inline-block",
              }}
            >
              {couple.shivani.name}
            </h2>

            <p className="text-purple-300 font-fell tracking-widest text-xs uppercase mt-1 mb-3">
              {couple.shivani.hometown}
            </p>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-4" />

            <p className="font-lato text-gold/70 text-sm leading-relaxed max-w-xs italic">
              {couple.shivani.bio}
            </p>

            <p className="font-lato text-gold/50 text-xs mt-4 tracking-wide">
              {couple.shivani.parents}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
