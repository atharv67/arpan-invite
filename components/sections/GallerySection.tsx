"use client";

import {
  motion,
  useScroll,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";

const STACK_LAYOUT = [
  { rotate: -7,  x: -22, y:  12 },
  { rotate:  5,  x:  18, y:  -6 },
  { rotate: -3,  x: -12, y:   4 },
  { rotate:  8,  x:  22, y: -10 },
  { rotate: -5,  x:  -9, y:   7 },
  { rotate:  2,  x:  12, y:  -3 },
];

const PHOTO_W      = 300;
const PHOTO_H_HALF = 138;
// px of scroll per photo — roughly one mouse-wheel tick
const PX_PER_PHOTO = 140;

function ScrollPhoto({
  filename,
  caption,
  index,
  totalPhotos,
  scrollYProgress,
}: {
  filename: string;
  caption: string;
  index: number;
  totalPhotos: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const [imgError, setImgError] = useState(false);
  const config = STACK_LAYOUT[index % STACK_LAYOUT.length];

  const start = 0.04 + index * (0.80 / Math.max(totalPhotos - 1, 1));
  const end   = Math.min(start + 0.12, 0.97);

  const yMV       = useMotionValue(520);
  const xMV       = useMotionValue(0);
  const rotateMV  = useMotionValue(0);
  const opacityMV = useMotionValue(0);
  const landedRef = useRef(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (landedRef.current) return;
    const t = Math.max(0, Math.min(1, (latest - start) / (end - start)));
    yMV.set(520 + (config.y - 520) * t);
    xMV.set(config.x * t);
    rotateMV.set(config.rotate * t);
    opacityMV.set(t);
    if (latest >= end) landedRef.current = true;
  });

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: -(PHOTO_W / 2),
        marginTop: -PHOTO_H_HALF,
        width: PHOTO_W,
        zIndex: index,
        padding: "10px 10px 44px",
        background: "#ffffff",
        boxShadow: "0 10px 36px rgba(0,0,0,0.20), 0 2px 10px rgba(0,0,0,0.10)",
        y: yMV, x: xMV, rotate: rotateMV, opacity: opacityMV,
      }}
    >
      <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
        {!imgError ? (
          <Image
            src={`/images/gallery/${filename}`}
            alt={caption}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
            sizes="300px"
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            background: "linear-gradient(135deg, #f5e8d3, #e8d3b8)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            <svg viewBox="0 0 100 100" width={48} height={48} fill="none">
              {Array.from({ length: 8 }).map((_, i) => {
                const a = (i * 45 * Math.PI) / 180;
                const cx = 50 + 22 * Math.sin(a);
                const cy = 50 - 22 * Math.cos(a);
                return (
                  <ellipse key={i} cx={cx} cy={cy} rx="5" ry="10"
                    stroke="#D4AF37" strokeWidth="0.8" fill="#D4AF37" fillOpacity="0.1"
                    transform={`rotate(${i * 45} ${cx} ${cy})`}
                  />
                );
              })}
              <circle cx="50" cy="50" r="6" stroke="#D4AF37" strokeWidth="1" fill="#D4AF37" fillOpacity="0.15" />
              <text x="50" y="54" textAnchor="middle" fill="#D4AF37" fontSize="7" fontFamily="serif" fontStyle="italic">A&amp;S</text>
            </svg>
            <p style={{ color: "#A08050", fontSize: 10, fontStyle: "italic", textAlign: "center", padding: "0 10px" }}>{caption}</p>
          </div>
        )}
      </div>
      <p style={{
        marginTop: 10, textAlign: "center",
        fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
        fontStyle: "italic", fontSize: 13, color: "#5A3010", opacity: 0.7, lineHeight: 1.3,
      }}>
        {caption}
      </p>
    </motion.div>
  );
}

export default function GallerySection() {
  const { gallery, couple } = weddingConfig;
  const photos = gallery.photos.slice(0, 6);

  // Section height: viewport + scroll room for each photo + small linger buffer
  const scrollPx = photos.length * PX_PER_PHOTO + 200;

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const headerInView = useInView(headerRef, { once: true });
  const hintOpacity  = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  // Scroll-up escape: when user scrolls up inside the sticky zone,
  // jump instantly to the top of the section so they exit without friction.
  useEffect(() => {
    let lastY   = window.scrollY;
    let jumping = false;

    const onScroll = () => {
      if (jumping) return;
      const y = window.scrollY;
      const goingUp = y < lastY;
      lastY = y;

      if (!goingUp || !sectionRef.current) return;

      const top    = sectionRef.current.offsetTop;
      const bottom = top + sectionRef.current.offsetHeight - window.innerHeight;

      if (y > top && y < bottom) {
        jumping = true;
        window.scrollTo({ top, behavior: "instant" as ScrollBehavior });
        setTimeout(() => { jumping = false; }, 200);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ height: `calc(100vh + ${scrollPx}px)`, position: "relative" }}
    >
      {/* Sticky visual panel */}
      <div style={{
        position: "sticky", top: 0, height: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        background: "linear-gradient(180deg, #FDF8F0 0%, #FFF8E8 100%)",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 max-w-2xl mx-auto px-4">
          <motion.p
            className="font-fell text-gold/60 tracking-[0.5em] text-xs uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            ✦ Moments ✦
          </motion.p>
          <motion.h2
            className="text-maroon"
            style={{
              fontFamily: "var(--font-cormorant-var, 'Cormorant Garamond', serif)",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 300,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our Story in Frames
          </motion.h2>
          <motion.div
            className="w-40 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4"
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="font-lato text-charcoal/50 text-sm mt-3 tracking-widest"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {couple.hashtag}
          </motion.p>
        </div>

        {/* Photo stack */}
        <div style={{ position: "relative", width: 400, height: 320 }}>
          {photos.map((photo, index) => (
            <ScrollPhoto
              key={photo.filename}
              filename={photo.filename}
              caption={photo.caption}
              index={index}
              totalPhotos={photos.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.p
          className="absolute bottom-10 font-lato text-gold/40 text-xs tracking-[0.3em] uppercase"
          style={{ opacity: hintOpacity }}
        >
          scroll to reveal ↓
        </motion.p>
      </div>
    </section>
  );
}
