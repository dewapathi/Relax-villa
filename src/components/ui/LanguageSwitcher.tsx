"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES } from "@/lib/i18n";

interface LanguageSwitcherProps {
  /** Use light (white/gold) colors for placement on dark backgrounds */
  light?: boolean;
  className?: string;
  /** Unique per rendered instance — prevents the sliding highlight from animating between separate switchers (e.g. desktop nav vs. mobile menu) that are mounted at the same time */
  instanceId: string;
}

export default function LanguageSwitcher({ light = false, className, instanceId }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const containerClass = light
    ? "border-white/25 bg-white/5"
    : "border-green-900/15 bg-green-900/[0.03]";

  const inactiveTextClass = light ? "text-white/60 hover:text-white" : "text-green-900/50 hover:text-green-900";

  // `className` (when passed) fully owns the display utility — e.g. Navbar
  // passes "hidden sm:inline-flex" for the desktop instance. Defaulting to
  // "inline-flex" only when no override is given avoids two competing
  // `display` utilities landing on the same element, which Tailwind would
  // resolve by CSS source order rather than by class-attribute order.
  const displayClass = className ?? "inline-flex";

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`relative items-center gap-0.5 p-1 rounded-full border backdrop-blur-sm ${containerClass} ${displayClass}`}
    >
      {LANGUAGES.map((option) => {
        const isActive = option.code === language;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-pressed={isActive}
            aria-label={`Switch to ${option.nativeLabel}`}
            className={`relative z-10 px-3 py-1.5 text-xs tracking-[0.15em] font-medium uppercase rounded-full transition-colors duration-300 ${
              isActive ? "text-green-950" : inactiveTextClass
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={`language-switcher-highlight-${instanceId}`}
                className="absolute inset-0 -z-10 bg-gold rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            {option.short}
          </button>
        );
      })}
    </div>
  );
}
