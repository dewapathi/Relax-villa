"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../ui/Logo";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { navLinks, CONTACT } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t.whatsapp.bookingMessage)}`;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-sm shadow-sm border-b border-stone/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-3 group"
            >
              <Logo light={!scrolled} size="sm" />
              <div className="hidden sm:block">
                <p
                  className={`font-serif font-medium text-lg leading-none tracking-wide transition-colors duration-300 ${
                    scrolled ? "text-green-900" : "text-white"
                  }`}
                >
                  {t.brand.name}
                </p>
                <p
                  className={`text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                    scrolled ? "text-gold-dark" : "text-gold-light"
                  }`}
                >
                  {t.brand.tagline}
                </p>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`text-sm tracking-[0.12em] uppercase font-sans font-medium transition-colors duration-300 hover:text-gold relative group ${
                    scrolled ? "text-green-900" : "text-white/90"
                  }`}
                >
                  {t.nav[link.key]}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Language Switcher + CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher instanceId="desktop" light={!scrolled} className="hidden sm:inline-flex" />

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gold text-green-950 text-sm tracking-widest uppercase font-medium rounded-sm hover:bg-gold-dark transition-colors duration-300"
              >
                <MessageCircle size={15} />
                <span>{t.nav.bookNow}</span>
              </a>

              <button
                className={`lg:hidden p-2 rounded-sm transition-colors duration-300 ${
                  scrolled ? "text-green-900" : "text-white"
                }`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-green-950 flex flex-col"
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Logo light size="sm" />
                <p className="font-serif text-white text-lg">{t.brand.name}</p>
              </div>
              <div className="flex items-center gap-4">
                <LanguageSwitcher instanceId="mobile" light />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-white p-1"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.15 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-4xl font-serif font-light text-white/80 hover:text-gold py-3 border-b border-white/10 transition-colors duration-200"
                >
                  {t.nav[link.key]}
                </motion.a>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="px-8 pb-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 bg-gold text-green-950 text-sm tracking-[0.2em] uppercase font-medium rounded-sm"
              >
                <MessageCircle size={18} />
                {t.nav.bookNowWhatsapp}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
