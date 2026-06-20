"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, Bed } from "lucide-react";
import Logo from "../ui/Logo";
import { CONTACT } from "@/lib/data";

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80"
        alt="Relax Villa – Luxury private pool at sunset"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-green-950/30" />

      {/* Decorative corner lines */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t border-l border-gold/30" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-gold/30" />
      <div className="absolute bottom-16 left-6 w-16 h-16 border-b border-l border-gold/30" />
      <div className="absolute bottom-16 right-6 w-16 h-16 border-b border-r border-gold/30" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Logo light size="xl" />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-10 h-px bg-gold/70" />
          <p className="text-gold-light text-xs tracking-[0.35em] uppercase font-sans">
            Luxury Villa Accommodation
          </p>
          <span className="w-10 h-px bg-gold/70" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light text-white text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tight mb-6"
        >
          Relax
          <br />
          <em className="font-light italic text-gold-light">Villa</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="text-white/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-light"
        >
          Where comfort, tranquility, and warm hospitality come together
          <br className="hidden sm:block" /> to create a stay that truly feels like home.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
          className="w-24 h-px bg-gold/60 my-8"
        />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => document.querySelector("#rooms")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gold text-green-950 text-sm tracking-[0.2em] uppercase font-medium rounded-sm hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            <Bed size={16} />
            Explore Rooms
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white text-sm tracking-[0.2em] uppercase font-medium rounded-sm hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm"
          >
            <MessageCircle size={16} />
            Book Now
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex items-center gap-8 sm:gap-12 mt-14 pt-10 border-t border-white/20"
        >
          {[
            { value: "4", label: "Bedrooms" },
            { value: "B&B", label: "Included" },
            { value: "Pool", label: "Private" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-2xl sm:text-3xl text-gold font-light leading-none">
                {stat.value}
              </p>
              <p className="text-white/50 text-xs tracking-[0.2em] uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
