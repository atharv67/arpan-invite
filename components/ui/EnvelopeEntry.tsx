"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";

type Phase = "idle" | "opening" | "done";

export default function EnvelopeEntry({ onEnter }: { onEnter: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const { couple } = weddingConfig;

  function handleOpen() {
    if (phase !== "idle") return;
    setPhase("opening");
    setTimeout(() => {
      setPhase("done");
      onEnter();
    }, 5200);
  }

  if (phase === "done") return null;

  const isOpening = phase === "opening";

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 px-4"
      style={{ background: "linear-gradient(180deg, #2A0606 0%, #1A0505 100%)" }}
      animate={isOpening ? { opacity: [1, 1, 1, 0] } : { opacity: 1 }}
      transition={isOpening ? { duration: 5.2, times: [0, 0.25, 0.82, 1] } : {}}
    >
      {/* Top ornament */}
      <div className="flex flex-col items-center gap-3">
        <p style={{
          fontFamily: "var(--font-noto-var, 'Noto Serif Devanagari', serif)",
          fontSize: 18,
          color: "#D4AF37",
          opacity: 0.85,
          letterSpacing: "0.12em",
        }}>
          ॥ शुभ विवाह ॥
        </p>
        <div style={{
          width: 140,
          height: 1,
          background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
        }} />
      </div>

      {/* Envelope */}
      <div
        className="cursor-pointer select-none"
        style={{ width: 320, height: 200, perspective: "1000px", position: "relative" }}
        onClick={handleOpen}
        role="button"
        aria-label="Open your wedding invitation"
      >
        {/* Envelope back + static folds */}
        <div className="absolute inset-0 rounded-lg overflow-hidden" style={{ background: "#FBF0D8" }}>
          {/* Left fold */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, #E0C990, #D4B870)",
            clipPath: "polygon(0% 0%, 50% 50%, 0% 100%)",
          }} />
          {/* Right fold */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(225deg, #E0C990, #D4B870)",
            clipPath: "polygon(100% 0%, 50% 50%, 100% 100%)",
          }} />
          {/* Bottom fold */}
          <div className="absolute inset-0" style={{
            background: "#F0DFB0",
            clipPath: "polygon(0% 100%, 50% 50%, 100% 100%)",
          }} />
        </div>

        {/* Letter card inside */}
        <motion.div
          style={{
            position: "absolute",
            top: 16, left: 20, right: 20, bottom: 16,
            borderRadius: 4,
            background: "linear-gradient(160deg, #FFFAF2, #FDF4DC)",
            border: "1px solid rgba(212,175,55,0.45)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            zIndex: 5,
          }}
          initial={{ opacity: 0 }}
          animate={isOpening ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
        >
          <p style={{
            fontFamily: "var(--font-noto-var, 'Noto Serif Devanagari', serif)",
            fontSize: 11,
            color: "#D4AF37",
            opacity: 0.85,
            letterSpacing: "0.08em",
          }}>
            ॥ श्री गणेशाय नमः ॥
          </p>
          <div style={{
            width: 50,
            height: 1,
            background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
          }} />
          <p style={{
            fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
            fontSize: 8.5,
            color: "#8A6A10",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}>
            You are cordially invited
          </p>
          <p style={{
            fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
            fontSize: 21,
            color: "#4A0E0E",
            fontStyle: "italic",
            lineHeight: 1.25,
            textAlign: "center",
          }}>
            {couple.arpan.name}
            <br />
            <span style={{ fontSize: 13, color: "#D4AF37" }}>&amp;</span>
            <br />
            {couple.shivani.name}
          </p>
          <p style={{
            fontFamily: "var(--font-lato-var, 'Lato', sans-serif)",
            fontSize: 8,
            color: "#8A6A10",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}>
            {couple.weddingDateDisplay}
          </p>
        </motion.div>

        {/* Flap — animates open on click */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, #F5E5B0 0%, #E8D090 100%)",
            clipPath: "polygon(0% 0%, 100% 0%, 50% 50%)",
            transformOrigin: "top center",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            zIndex: 10,
            borderRadius: "8px 8px 0 0",
          }}
          animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Wax seal at the flap apex (50% x, 50% y of the inset-0 div) */}
          <div style={{
            position: "absolute",
            top: "calc(50% - 26px)",
            left: "calc(50% - 26px)",
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "radial-gradient(circle at 38% 32%, #C42020, #6B0E0E)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 1,
            boxShadow: "0 3px 12px rgba(0,0,0,0.45), inset 0 1px 3px rgba(255,200,100,0.15)",
            border: "1.5px solid #D4AF37",
          }}>
            <span style={{
              fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
              fontSize: 13,
              fontStyle: "italic",
              color: "#D4AF37",
              lineHeight: 1,
              letterSpacing: "0.04em",
            }}>
              A♥S
            </span>
          </div>
        </motion.div>
      </div>

      {/* Tap hint */}
      <motion.p
        style={{
          fontFamily: "var(--font-lato-var, 'Lato', sans-serif)",
          fontSize: 11,
          color: "#D4AF37",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
        }}
        animate={
          isOpening
            ? { opacity: 0, y: -6 }
            : { opacity: [0.35, 0.75, 0.35] }
        }
        transition={
          isOpening
            ? { duration: 0.3 }
            : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
        }
      >
        Tap to open
      </motion.p>
    </motion.div>
  );
}
