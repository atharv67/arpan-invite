"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  speed?: number; // positive = moves up slower than scroll, negative = moves down
  offset?: [string, string]; // scroll range, e.g. ["start end", "end start"]
}

export default function ParallaxLayer({
  children,
  className = "",
  speed = 0.3,
  offset = ["start end", "end start"],
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ("start end" | "end start" | string)[],
  } as Parameters<typeof useScroll>[0]);

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -80}px`, `${speed * 80}px`]);

  return (
    <div ref={ref} className={`${className} overflow-hidden`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
