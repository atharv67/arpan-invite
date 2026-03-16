"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { weddingConfig } from "@/config/wedding";
import GanpatiSVG from "@/components/decorative/GanpatiSVG";
import MandalaBorder from "@/components/decorative/MandalaBorder";

export default function GanpatiSection() {
  const { content } = weddingConfig;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FDF8F0 0%, #FFF8E8 40%, #FDF8F0 100%)",
      }}
    >
      {/* Top mandala border */}
      <MandalaBorder color="#D4AF37" opacity={0.5} />

      {/* Soft golden radial glow behind Ganpati */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(212,175,55,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative z-10 py-20 px-4 flex flex-col items-center text-center max-w-3xl mx-auto">

        {/* Sanskrit blessing */}
        <motion.p
          className="font-noto text-maroon text-2xl md:text-3xl mb-2 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          ॥ श्री गणेशाय नमः ॥
        </motion.p>

        <motion.p
          className="font-fell text-gold tracking-[0.4em] text-sm uppercase mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Shree Ganeshaya Namaha
        </motion.p>

        {/* Ganpati SVG — scales from 0.8 on scroll entry */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <GanpatiSVG size={380} />
        </motion.div>

        {/* Gold divider */}
        <motion.div
          className="w-40 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Blessing text */}
        <motion.p
          className="font-cormorant text-charcoal/80 text-lg md:text-xl leading-relaxed italic max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {content.ganpatiBlessingText}
        </motion.p>

        {/* Ganpati Bappa Morya */}
        <motion.p
          className="font-playfair text-saffron tracking-[0.25em] text-base md:text-lg mt-8 uppercase"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Ganpati Bappa Morya!
        </motion.p>
      </div>

      {/* Bottom mandala border (flipped) */}
      <MandalaBorder color="#D4AF37" opacity={0.5} flip />
    </section>
  );
}
