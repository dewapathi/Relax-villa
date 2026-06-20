"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, MessageCircle } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { rooms, CONTACT } from "@/lib/data";

export default function RoomsSection() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  return (
    <section id="rooms" className="bg-white py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <SectionTitle
            tagline="Accommodations"
            title="Elegant bedrooms"
            subtitle="Each of our four bedrooms has been designed with care to offer maximum comfort, privacy, and a sense of home."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white border border-stone overflow-hidden hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-900/90 backdrop-blur-sm text-gold text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm">
                    {room.type}
                  </span>
                </div>
                {/* Size badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white/90 text-xs px-2 py-1 rounded-sm">
                  <Maximize2 size={11} />
                  {room.size}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-xl text-green-950 font-medium mb-2 group-hover:text-green-800 transition-colors">
                  {room.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {room.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="text-[10px] tracking-wide uppercase bg-ivory border border-stone px-2 py-1 text-stone-600 rounded-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-green-900 text-green-900 text-xs tracking-[0.2em] uppercase font-medium hover:bg-green-900 hover:text-gold transition-all duration-300 rounded-sm"
                >
                  <MessageCircle size={13} />
                  Enquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
