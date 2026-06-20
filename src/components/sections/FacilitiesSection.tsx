"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Waves, Wifi, Car, Coffee, Wind, ShowerHead, Tv, Shield } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { facilities } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Waves: <Waves size={20} strokeWidth={1.5} />,
  Wifi: <Wifi size={20} strokeWidth={1.5} />,
  Car: <Car size={20} strokeWidth={1.5} />,
  Coffee: <Coffee size={20} strokeWidth={1.5} />,
  Wind: <Wind size={20} strokeWidth={1.5} />,
  ShowerHead: <ShowerHead size={20} strokeWidth={1.5} />,
  Tv: <Tv size={20} strokeWidth={1.5} />,
  Shield: <Shield size={20} strokeWidth={1.5} />,
};

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-green-900 py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <SectionTitle
            tagline="Pool & Facilities"
            title="Resort-style living"
            subtitle="Enjoy the luxury of a private resort experience with our exclusive pool and thoughtfully curated amenities."
            light
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Pool Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl shadow-black/30">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
                alt="Relax Villa – Private swimming pool"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 to-transparent" />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="font-serif text-white text-2xl font-light">Private Pool</p>
                  <p className="text-gold-light text-xs tracking-[0.2em] uppercase mt-1">
                    Exclusively Yours
                  </p>
                </div>
                <div className="bg-gold text-green-950 px-4 py-2 text-xs tracking-[0.15em] uppercase font-medium rounded-sm">
                  Free Access
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/20 rounded-sm -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/20 rounded-sm -z-10" />
          </motion.div>

          {/* Facilities Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8">
              <p className="text-ivory/70 text-base sm:text-lg leading-relaxed">
                Our private pool is the heart of the Relax Villa experience. Crystal-clear waters,
                sunbeds, and a tranquil atmosphere make it the perfect spot to unwind any time of day.
              </p>
              <p className="text-ivory/70 text-base sm:text-lg leading-relaxed mt-4">
                All guests enjoy exclusive access — no crowds, no bookings, just pure relaxation at
                your own pace.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {facilities.map((facility, i) => (
                <motion.div
                  key={facility.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 px-4 py-3.5 rounded-sm transition-all duration-300 group"
                >
                  <span className="text-gold group-hover:scale-110 transition-transform duration-300 shrink-0">
                    {iconMap[facility.icon]}
                  </span>
                  <span className="text-ivory/80 text-sm leading-tight">{facility.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
