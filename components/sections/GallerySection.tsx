"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";

// Decorative placeholder when photo file is missing
function PhotoPlaceholder({ caption }: { caption: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-maroon/30 to-charcoal/60">
      {/* A&S mandala */}
      <svg viewBox="0 0 100 100" width={60} height={60} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const cx = 50 + 22 * Math.sin(angle);
          const cy = 50 - 22 * Math.cos(angle);
          return (
            <ellipse key={i} cx={cx} cy={cy} rx="5" ry="10"
              stroke="#D4AF37" strokeWidth="0.8" fill="#D4AF37" fillOpacity="0.08"
              transform={`rotate(${i * 45} ${cx} ${cy})`}
            />
          );
        })}
        <circle cx="50" cy="50" r="6" stroke="#D4AF37" strokeWidth="1" fill="#D4AF37" fillOpacity="0.12" />
        <text x="50" y="54" textAnchor="middle" fill="#D4AF37" fontSize="7" fontFamily="serif" fontStyle="italic" opacity="0.8">
          A&amp;S
        </text>
      </svg>
      <p className="text-gold/40 text-xs font-lato mt-3 text-center px-2 italic">{caption}</p>
    </div>
  );
}

function GalleryCard({ filename, caption, index }: { filename: string; caption: string; index: number }) {
  const [imgError, setImgError] = useState(false);
  const src = `/images/gallery/${filename}`;

  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg cursor-pointer"
      style={{ aspectRatio: index % 3 === 0 ? "4/5" : "3/4" }} // vary aspect ratios for masonry feel
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      {/* Gold border on hover */}
      <div
        className="absolute inset-0 rounded-lg border-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500 z-20 pointer-events-none"
      />

      {/* Image or placeholder */}
      {!imgError ? (
        <Image
          src={src}
          alt={caption}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          onError={() => setImgError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <PhotoPlaceholder caption={caption} />
      )}

      {/* Caption overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end z-10">
        <p className="font-cormorant text-ivory text-lg italic px-4 pb-4">{caption}</p>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const { gallery, couple } = weddingConfig;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-20 px-4"
      style={{ background: "linear-gradient(180deg, #FDF8F0 0%, #FFF8E8 100%)" }}
    >
      {/* Section header */}
      <div ref={ref} className="text-center mb-16 max-w-2xl mx-auto">
        <motion.p
          className="font-fell text-gold/60 tracking-[0.5em] text-xs uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          ✦ Moments ✦
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
          Our Story in Frames
        </motion.h2>
        <motion.div
          className="w-40 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.p
          className="font-lato text-charcoal/50 text-sm mt-3 tracking-widest"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {couple.hashtag}
        </motion.p>
      </div>

      {/* Photo grid — CSS columns for masonry-like layout */}
      <div className="max-w-5xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {gallery.photos.map((photo, index) => (
          <div key={photo.filename} className="break-inside-avoid">
            <GalleryCard filename={photo.filename} caption={photo.caption} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
