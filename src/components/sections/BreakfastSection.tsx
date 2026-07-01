"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sunrise } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { breakfastItems } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function BreakfastSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-ivory py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionTitle
              tagline={t.breakfast.tagline}
              title={t.breakfast.title}
              align="left"
              className="mb-8"
            />

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
              {t.breakfast.paragraph}
            </p>

            {/* Menu items */}
            <div className="space-y-4">
              {breakfastItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <div>
                    <p className="font-medium text-green-950 text-sm sm:text-base">
                      {t.breakfast.items[item.id].name}
                    </p>
                    <p className="text-stone-500 text-sm mt-0.5">
                      {t.breakfast.items[item.id].description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tag */}
            <div className="mt-10 flex items-center gap-3 bg-green-900/5 border border-green-900/10 px-5 py-4 rounded-sm">
              <Sunrise size={20} className="text-gold shrink-0" />
              <p className="text-green-900 text-sm font-medium">{t.breakfast.note}</p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80"
                alt={t.breakfast.imageAlt}
                fill
                className="object-cover"
              />
              {/* Gold border frame */}
              <div className="absolute inset-4 border border-gold/20 rounded-sm pointer-events-none" />
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-stone p-5 shadow-xl">
              <p className="text-green-900 font-serif text-3xl font-light leading-none">
                {t.breakfast.badgeTitle}
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone-500 mt-1">
                {t.breakfast.badgeLine1}
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone-500">
                {t.breakfast.badgeLine2}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
