"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { testimonials } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-ivory py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 lg:mb-20">
          <SectionTitle
            tagline={t.testimonials.tagline}
            title={t.testimonials.title}
            subtitle={t.testimonials.subtitle}
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white border border-stone p-8 hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1 transition-all duration-500 group"
            >
              {/* Quote icon */}
              <Quote
                size={36}
                className="absolute top-6 right-6 text-gold/15 group-hover:text-gold/25 transition-colors duration-300"
                fill="currentColor"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#C8A96E" className="text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 italic">
                &ldquo;{t.testimonials.items[testimonial.id].text}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-stone mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-green-900 flex items-center justify-center shrink-0">
                  <span className="font-serif text-gold text-sm font-medium">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-green-950 text-sm">{testimonial.name}</p>
                  <p className="text-stone-400 text-xs mt-0.5">
                    {t.testimonials.items[testimonial.id].role} · {testimonial.date}
                  </p>
                </div>
              </div>

              {/* Bottom gold accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
