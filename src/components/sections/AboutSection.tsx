"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import KenBurnsImage from "../ui/KenBurnsImage";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-white py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <KenBurnsImage src="/images/ranuli_2.jpeg" alt={t.about.mainImageAlt} />
              {/* Gold frame accent */}
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/10 z-10" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -bottom-8 -right-6 sm:-right-8 bg-green-900 text-white p-6 sm:p-8 shadow-2xl max-w-[180px]"
            >
              <p className="font-serif text-5xl text-gold font-light leading-none">
                {t.about.statNumber}
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-white/70 mt-2">
                {t.about.statLabelLine1}
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-white/70">
                {t.about.statLabelLine2}
              </p>
            </motion.div>

            {/* Small accent image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="absolute -top-6 -right-4 sm:-right-6 w-32 sm:w-40 h-32 sm:h-40 rounded-sm overflow-hidden shadow-xl border-4 border-white"
            >
              <Image
                src="/images/ranuli_5.jpeg"
                alt={t.about.accentImageAlt}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="pt-8 lg:pt-0"
          >
            <SectionTitle
              tagline={t.about.tagline}
              title={t.about.title}
              align="left"
              className="mb-8"
            />

            <p className="text-stone-600 leading-relaxed mb-5 text-base sm:text-lg">
              {t.about.paragraph1}
            </p>

            <p className="text-stone-600 leading-relaxed mb-8 text-base sm:text-lg">
              {t.about.paragraph2}
            </p>

            {/* Highlights list */}
            <ul className="space-y-3 mb-10">
              {t.about.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-stone-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* Quote */}
            <div className="border-l-2 border-gold pl-6 py-2">
              <p className="font-serif italic text-green-900 text-xl sm:text-2xl leading-relaxed">
                &ldquo;{t.about.quote}&rdquo;
              </p>
              <p className="text-gold-dark text-sm tracking-wider uppercase mt-3 font-medium">
                {t.about.quoteAuthor}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
