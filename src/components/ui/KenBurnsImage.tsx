"use client";

import Image, { type ImageProps } from "next/image";
import { motion } from "framer-motion";

type KenBurnsImageProps = Omit<ImageProps, "fill">;

// Wraps next/image (always `fill`) in a slow, continuous zoom loop — the
// classic "Ken Burns" treatment used for the site's large hero-style photography.
// Needs an `overflow-hidden` positioned parent, same as a plain `fill` image would.
export default function KenBurnsImage({ className = "", ...props }: KenBurnsImageProps) {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ scale: [1, 1.08] }}
      transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
    >
      <Image {...props} fill className={`object-cover ${className}`} />
    </motion.div>
  );
}
