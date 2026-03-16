"use client";

import { motion } from "framer-motion";
import HeroSection     from "@/components/sections/HeroSection";
import GanpatiSection  from "@/components/sections/GanpatiSection";
import CoupleSection   from "@/components/sections/CoupleSection";
import EventsSection   from "@/components/sections/EventsSection";
import CulturalSection from "@/components/sections/CulturalSection";
import GallerySection  from "@/components/sections/GallerySection";
import FooterSection   from "@/components/sections/FooterSection";

export default function Home() {
  return (
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
  );
}
