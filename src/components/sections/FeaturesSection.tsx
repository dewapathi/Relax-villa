"use client";

import { motion } from "framer-motion";
import { BedDouble, Coffee, Waves, Leaf } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { features } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  BedDouble: <BedDouble size={32} strokeWidth={1.5} />,
  Coffee: <Coffee size={32} strokeWidth={1.5} />,
  Waves: <Waves size={32} strokeWidth={1.5} />,
  Leaf: <Leaf size={32} strokeWidth={1.5} />,
};

export default function FeaturesSection() {
  return (
    <section className="bg-ivory py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <SectionTitle
            tagline="What We Offer"
            title="Crafted for your comfort"
            subtitle="Every detail at Relax Villa has been thoughtfully designed to ensure you enjoy a truly memorable and relaxing stay."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="group relative bg-white border border-stone hover:border-gold/40 p-8 h-full flex flex-col transition-all duration-500 hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1">
                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-gold/10 transition-all duration-300 group-hover:border-t-gold/25" />

                {/* Icon */}
                <div className="w-16 h-16 bg-green-900/5 group-hover:bg-green-900 flex items-center justify-center mb-6 transition-all duration-500 rounded-sm text-green-900 group-hover:text-gold">
                  {iconMap[feature.icon]}
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl text-green-950 mb-3 font-medium group-hover:text-green-900">
                  {feature.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 w-8 h-0.5 bg-gold/40 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
