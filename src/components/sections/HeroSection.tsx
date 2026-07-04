"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import Logo from "../ui/Logo";
import { CONTACT } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { useSmoothScrollTo } from "@/context/SmoothScrollContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const scrollTo = useSmoothScrollTo();
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t.whatsapp.bookingMessage)}`;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden pt-28 lg:pt-24"
    >
      {/* Background image — parallax wrapper moves slower than scroll, inner layer holds a slow Ken Burns zoom */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-x-0 -top-[15%] h-[130%]">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.08] }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          <Image
            src="/images/ranuli_4.jpeg"
            alt="Relax Villa – Luxury private pool at sunset"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>
      </motion.div>

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-green-950/30" />

      {/* Decorative corner lines */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t border-l border-gold/30" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-gold/30" />
      <div className="absolute bottom-16 left-6 w-16 h-16 border-b border-l border-gold/30" />
      <div className="absolute bottom-16 right-6 w-16 h-16 border-b border-r border-gold/30" />

      {/* Main Content — flex-1 so it centers within whatever space is left above the scroll indicator, instead of an absolutely-positioned indicator fighting centered content for the same space on short viewports */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <Logo light size="lg" />
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
            {t.hero.badge}
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
          {t.hero.titleFirst}
          <br />
          <em className="font-light italic text-gold-light">{t.hero.titleSecond}</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="text-white/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-light"
        >
          {t.hero.subtitleLine1}
          <br className="hidden sm:block" /> {t.hero.subtitleLine2}
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
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center justify-center gap-2 px-8 py-4 text-green-950 text-sm tracking-[0.2em] uppercase font-medium rounded-sm hover:shadow-lg hover:shadow-gold/20"
          >
            <MessageCircle size={16} />
            {t.hero.cta}
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex items-center gap-8 sm:gap-12 mt-8 pt-6 sm:mt-10 sm:pt-8 border-t border-white/20"
        >
          {[
            { value: t.hero.stats.bedroomsValue, label: t.hero.stats.bedroomsLabel },
            { value: t.hero.stats.includedValue, label: t.hero.stats.includedLabel },
            { value: t.hero.stats.poolValue, label: t.hero.stats.poolLabel },
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

      {/* Scroll Indicator — lives in normal flow with its own reserved space, so it can never overlap the centered content above on short viewports */}
      <div className="relative z-10 shrink-0 flex justify-center pb-4">
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          onClick={() => scrollTo("#about")}
          className="flex flex-col items-center gap-1 text-white/50 hover:text-gold transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">{t.hero.scroll}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
