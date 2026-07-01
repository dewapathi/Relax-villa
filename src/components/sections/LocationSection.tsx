"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { CONTACT } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function LocationSection() {
  const { t } = useLanguage();

  return (
    <section id="location" className="bg-white py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <SectionTitle
            tagline={t.location.tagline}
            title={t.location.title}
            subtitle={t.location.subtitle}
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg border border-stone">
              <iframe
                src={CONTACT.googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.location.mapTitle}
              />
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Address card */}
            <div className="bg-ivory border border-stone p-6 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-900 flex items-center justify-center rounded-sm shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-green-950 mb-1">{t.location.addressLabel}</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{CONTACT.address}</p>
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="bg-ivory border border-stone p-6 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-900 flex items-center justify-center rounded-sm shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-green-950 mb-1">{t.location.phoneLabel}</h4>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="text-green-800 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Nearby places */}
            <div className="bg-ivory border border-stone p-6 rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <Navigation size={16} className="text-gold" />
                <h4 className="font-medium text-green-950 text-sm tracking-wide">
                  {t.location.nearbyLabel}
                </h4>
              </div>
              <ul className="space-y-3">
                {t.location.nearbyPlaces.map((place) => (
                  <li
                    key={place.name}
                    className="flex items-center justify-between text-sm border-b border-stone/60 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-stone-700">{place.name}</span>
                    <span className="flex items-center gap-1.5 text-green-800">
                      <Clock size={12} className="text-gold" />
                      {place.distance}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Directions CTA */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-900 text-gold text-sm tracking-[0.15em] uppercase font-medium rounded-sm hover:bg-green-800 transition-colors duration-300"
            >
              <Navigation size={15} />
              {t.location.directions}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
