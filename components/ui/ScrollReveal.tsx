"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  const initial = {
    up:    { opacity: 0, y: 40 },
    down:  { opacity: 0, y: -40 },
    left:  { opacity: 0, x: 50 },
    right: { opacity: 0, x: -50 },
    scale: { opacity: 0, scale: 0.85 },
  }[direction];

  const animate = {
    up:    { opacity: inView ? 1 : 0, y:     inView ? 0 : 40  },
    down:  { opacity: inView ? 1 : 0, y:     inView ? 0 : -40 },
    left:  { opacity: inView ? 1 : 0, x:     inView ? 0 : 50  },
    right: { opacity: inView ? 1 : 0, x:     inView ? 0 : -50 },
    scale: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0.85 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
