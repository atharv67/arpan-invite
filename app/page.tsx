"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import HeroSection     from "@/components/sections/HeroSection";
import GanpatiSection  from "@/components/sections/GanpatiSection";
import CoupleSection   from "@/components/sections/CoupleSection";
import EventsSection   from "@/components/sections/EventsSection";
import CulturalSection from "@/components/sections/CulturalSection";
import GallerySection  from "@/components/sections/GallerySection";
import FooterSection   from "@/components/sections/FooterSection";
import EnvelopeEntry   from "@/components/ui/EnvelopeEntry";
import MusicPlayer     from "@/components/ui/MusicPlayer";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <EnvelopeEntry onEnter={() => setEntered(true)} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection />
        <GanpatiSection />
        <CoupleSection />
        <EventsSection />
        <CulturalSection />
        <GallerySection />
        <FooterSection />
      </motion.main>

      <MusicPlayer
        src={weddingConfig.music.src}
        label={weddingConfig.music.label}
        autoplay={entered}
      />
    </>
  );
}
