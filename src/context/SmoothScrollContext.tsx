"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef, type ReactNode, type RefObject } from "react";

const SmoothScrollContext = createContext<RefObject<Lenis | null> | null>(null);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let frameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <SmoothScrollContext.Provider value={lenisRef}>{children}</SmoothScrollContext.Provider>;
}

/** Returns a scrollTo helper that uses Lenis when ready, falling back to native smooth scroll. */
export function useSmoothScrollTo() {
  const lenisRef = useContext(SmoothScrollContext);

  return (target: string | Element) => {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return;
    const lenis = lenisRef?.current;
    if (lenis) {
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
}
