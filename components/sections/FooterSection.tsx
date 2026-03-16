"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { weddingConfig } from "@/config/wedding";
import MandalaBorder from "@/components/decorative/MandalaBorder";
import GanpatiSVG from "@/components/decorative/GanpatiSVG";

export default function FooterSection() {
  const { couple, content, contact } = weddingConfig;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2A0606 0%, #1A0505 100%)" }}
    >
      {/* Mandala border at top */}
      <MandalaBorder color="#D4AF37" opacity={0.4} />

      <div ref={ref} className="relative z-10 py-16 px-4 max-w-3xl mx-auto text-center">

        {/* Small Ganpati */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <GanpatiSVG size={100} />
        </motion.div>

        {/* Names */}
        <motion.h2
          className="mb-2"
          style={{
            fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
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
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {couple.arpan.name} &amp; {couple.shivani.name}
        </motion.h2>

        {/* Wedding date */}
        <motion.p
          className="font-playfair text-gold/70 tracking-[0.3em] text-sm md:text-base mb-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {couple.weddingDateDisplay}
        </motion.p>

        {/* Hashtag */}
        <motion.p
          className="font-fell text-saffron/80 tracking-[0.3em] text-sm mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {couple.hashtag}
        </motion.p>

        {/* Gold divider */}
        <motion.div
          className="w-40 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Closing message */}
        <motion.p
          className="font-cormorant text-ivory/60 text-lg italic leading-relaxed max-w-lg mx-auto mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {content.footerClosingMessage}
        </motion.p>

        {/* Family names */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <p className="font-lato text-gold/50 text-xs uppercase tracking-widest mb-2">With love from</p>
          <p className="font-cormorant text-gold/80 text-lg">
            {couple.arpan.parents}
          </p>
          <p className="font-lato text-gold/40 text-xs my-1">&amp;</p>
          <p className="font-cormorant text-gold/80 text-lg">
            {couple.shivani.parents}
          </p>
        </motion.div>

        {/* Contact info */}
        {contact.length > 0 && (
          <motion.div
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <p className="font-lato text-gold/40 text-xs uppercase tracking-widest mb-4">For any queries</p>
            <div className="flex flex-wrap justify-center gap-6">
              {contact.map((c) => (
                <div key={c.name} className="text-center">
                  <p className="font-lato text-gold/70 text-sm font-semibold">{c.name}</p>
                  <p className="font-lato text-gold/40 text-xs">{c.relation}</p>
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="font-lato text-saffron/70 text-xs hover:text-saffron transition-colors"
                  >
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom note */}
        <motion.p
          className="font-lato text-gold/25 text-xs tracking-wide"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          Made with ❤️ for Arpan &amp; Shivani&apos;s wedding
        </motion.p>
      </div>
    </footer>
  );
}
