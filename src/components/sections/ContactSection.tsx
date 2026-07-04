"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import FacebookIcon from "../ui/FacebookIcon";
import { CONTACT } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
  });

  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t.whatsapp.bookingMessage)}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Booking Inquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Check-in: ${form.checkIn}`,
      `Check-out: ${form.checkOut}`,
      `Guests: ${form.guests}`,
      ``,
      `Message:`,
      form.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full bg-white/5 border border-white/15 text-ivory placeholder:text-ivory/30 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-gold/60 focus:bg-white/10 transition-all duration-300";

  return (
    <section id="contact" className="bg-green-900 py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <SectionTitle
            tagline={t.contact.tagline}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
            light
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 p-5 rounded-sm hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#25D366] flex items-center justify-center rounded-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
                <MessageCircle size={22} className="text-white" />
              </div>
              <div>
                <p className="font-medium text-ivory">{t.contact.whatsappLabel}</p>
                <p className="text-ivory/60 text-sm mt-0.5">+{CONTACT.whatsapp}</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-sm hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm shrink-0 group-hover:bg-gold/20 transition-all duration-300">
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                <p className="font-medium text-ivory">{t.contact.phoneLabel}</p>
                <p className="text-ivory/60 text-sm mt-0.5">{CONTACT.phone}</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-sm hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm shrink-0 group-hover:bg-gold/20 transition-all duration-300">
                <Mail size={20} className="text-gold" />
              </div>
              <div>
                <p className="font-medium text-ivory">{t.contact.emailLabel}</p>
                <p className="text-ivory/60 text-sm mt-0.5">{CONTACT.email}</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-sm">
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm shrink-0">
                <MapPin size={20} className="text-gold" />
              </div>
              <div>
                <p className="font-medium text-ivory">{t.contact.addressLabel}</p>
                <p className="text-ivory/60 text-sm mt-0.5 leading-relaxed">{CONTACT.address}</p>
              </div>
            </div>

            {/* Facebook */}
            <a
              href={CONTACT.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#1877F2]/10 border border-[#1877F2]/30 p-5 rounded-sm hover:bg-[#1877F2]/20 hover:border-[#1877F2]/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#1877F2] flex items-center justify-center rounded-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
                <FacebookIcon size={20} className="text-white" />
              </div>
              <div>
                <p className="font-medium text-ivory">{t.contact.facebookLabel}</p>
                <p className="text-ivory/60 text-sm mt-0.5">{t.contact.facebookSubtitle}</p>
              </div>
            </a>

            {/* Quote */}
            <div className="border-l-2 border-gold/40 pl-5 py-2 mt-4">
              <p className="font-serif italic text-gold-light text-lg leading-relaxed">
                &ldquo;{t.contact.quote}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
              <p className="text-ivory/60 text-xs tracking-[0.25em] uppercase mb-6">
                {t.contact.formTitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-ivory/60 text-xs mb-1.5 tracking-wide">
                      {t.contact.fullName}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.fullNamePlaceholder}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-ivory/60 text-xs mb-1.5 tracking-wide">
                      {t.contact.emailAddress}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-ivory/60 text-xs mb-1.5 tracking-wide">
                      {t.contact.phoneNumber}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t.contact.phonePlaceholder}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-ivory/60 text-xs mb-1.5 tracking-wide">
                      {t.contact.guestsLabel}
                    </label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                        <option key={n} value={n} className="bg-green-900">
                          {n} {n === "1" ? t.contact.guestSingular : t.contact.guestPlural}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-ivory/60 text-xs mb-1.5 tracking-wide">
                      {t.contact.checkIn}
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={form.checkIn}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-ivory/60 text-xs mb-1.5 tracking-wide">
                      {t.contact.checkOut}
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={form.checkOut}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-ivory/60 text-xs mb-1.5 tracking-wide">
                    {t.contact.message}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-gold text-green-950 text-sm tracking-[0.2em] uppercase font-medium rounded-sm hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                  >
                    <Send size={15} />
                    {t.contact.send}
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 border border-white/20 text-ivory text-sm tracking-[0.2em] uppercase font-medium rounded-sm hover:border-[#25D366]/50 hover:text-[#25D366] transition-all duration-300"
                  >
                    <MessageCircle size={15} />
                    {t.contact.whatsapp}
                  </a>
                </div>

                <p className="text-ivory/30 text-xs text-center pt-2">{t.contact.formNote}</p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
