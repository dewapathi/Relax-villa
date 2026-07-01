"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Logo from "../ui/Logo";
import { navLinks, CONTACT } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t.whatsapp.bookingMessage)}`;

  return (
    <footer className="bg-green-950 text-ivory/70">
      {/* Top CTA Strip */}
      <div className="bg-green-900 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl sm:text-3xl text-ivory font-light">
              {t.footer.ctaTitle}
            </p>
            <p className="text-ivory/60 mt-1 text-sm">
              {t.footer.ctaSubtitle}
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 bg-gold text-green-950 text-sm tracking-[0.2em] uppercase font-medium rounded-sm hover:bg-gold-dark transition-colors duration-300 shrink-0"
          >
            <MessageCircle size={16} />
            {t.footer.ctaButton}
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Logo light size="md" />
              <div>
                <p className="font-serif text-ivory text-xl font-medium leading-none">
                  {t.brand.name}
                </p>
                <p className="text-gold text-[10px] tracking-[0.25em] uppercase mt-0.5">
                  {t.brand.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-ivory/60 max-w-xs">
              {t.footer.description}
            </p>
            <p className="mt-6 font-serif text-gold italic text-base">
              &ldquo;{t.footer.quote}&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-ivory text-xs tracking-[0.25em] uppercase font-medium mb-6 border-b border-white/10 pb-3">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-gold hover:pl-1 transition-all duration-200"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-ivory text-xs tracking-[0.25em] uppercase font-medium mb-6 border-b border-white/10 pb-3">
              {t.footer.contactUs}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-start gap-3 text-sm hover:text-gold transition-colors duration-200 group"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-gold/70 group-hover:text-gold" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 text-sm hover:text-gold transition-colors duration-200 group"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-gold/70 group-hover:text-gold" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-gold/70" />
                  <span>{CONTACT.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/40">
          <p>© {new Date().getFullYear()} {t.brand.name}. {t.footer.rightsReserved}</p>
          <p className="font-serif italic">{t.footer.designedWith}</p>
        </div>
      </div>
    </footer>
  );
}
