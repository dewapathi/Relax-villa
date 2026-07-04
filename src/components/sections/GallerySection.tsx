"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { galleryImages } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

// Cycled per tile to give the masonry wall varied heights instead of a uniform grid.
const ASPECT_PATTERN = ["4/5", "1/1", "3/4", "4/3", "1/1", "4/5"];

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section id="gallery" className="bg-white py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 lg:mb-20">
          <SectionTitle
            tagline={t.gallery.tagline}
            title={t.gallery.title}
            subtitle={t.gallery.subtitle}
          />
        </Reveal>

        {/* Masonry wall — CSS multi-column layout so photos keep their own rhythm instead of a uniform grid */}
        <div className="columns-2 sm:columns-3 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 6) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative group cursor-pointer overflow-hidden rounded-sm mb-3 sm:mb-4 break-inside-avoid"
              style={{ aspectRatio: ASPECT_PATTERN[i % ASPECT_PATTERN.length] }}
              onClick={() => setSelected(i)}
            >
              <Image
                src={img.src}
                alt={t.gallery.alt[img.id]}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-green-950/0 group-hover:bg-green-950/40 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex flex-col items-center gap-2">
                  <ZoomIn size={24} />
                  <p className="text-xs tracking-[0.2em] uppercase">{t.gallery.alt[img.id]}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-10"
              onClick={() => setSelected(null)}
              aria-label={t.gallery.closeLabel}
            >
              <X size={28} />
            </button>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white/60 text-sm tracking-wider">
                {t.gallery.alt[galleryImages[selected].id]}
              </p>
              <p className="text-white/30 text-xs mt-1">
                {selected + 1} / {galleryImages.length}
              </p>
            </div>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full max-h-[80vh]"
              style={{ aspectRatio: "16/10" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selected].src.replace("w=800", "w=1400")}
                alt={t.gallery.alt[galleryImages[selected].id]}
                fill
                className="object-contain"
                quality={90}
              />
            </motion.div>

            {/* Navigation */}
            <button
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-gold text-4xl font-thin transition-colors duration-200 p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelected((s) => ((s ?? 0) - 1 + galleryImages.length) % galleryImages.length);
              }}
              aria-label={t.gallery.previousLabel}
            >
              ‹
            </button>
            <button
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-gold text-4xl font-thin transition-colors duration-200 p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelected((s) => ((s ?? 0) + 1) % galleryImages.length);
              }}
              aria-label={t.gallery.nextLabel}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
