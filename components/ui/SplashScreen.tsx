"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  // Phase 0: Blank white (0–0.3s)
  // Phase 1: Name + dot appear (0.3s)
  // Phase 2: Tagline fades in (1.0s)
  // Phase 3: Exit (2.2s)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => onComplete(), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const nameLetters = "almostalok".split("");

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          key="splash"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FFFFFF]"
        >
          <div className="flex flex-col items-center">
            {/* Name */}
            <div className="flex items-baseline">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={
                    phase >= 1
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 14 }
                  }
                  transition={{
                    delay: i * 0.04,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111318] tracking-tight"
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  phase >= 1
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  delay: nameLetters.length * 0.04 + 0.1,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 400,
                  damping: 18,
                }}
                className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#F4C400]"
              >
                .
              </motion.span>
            </div>

            {/* Thin yellow line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={phase >= 1 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-12 h-[2px] bg-[#F4C400] rounded-full mt-3 mb-3 origin-center"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={
                phase >= 2
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 6 }
              }
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] font-mono tracking-widest text-[#686868] uppercase"
            >
              Developer · Builder · Organizer
            </motion.p>

            {/* Handwritten note */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={
                phase >= 2
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 4 }
              }
              transition={{ delay: 0.25, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 px-3 py-1 bg-[#FFF7D1] border border-[#F4C400]/40 rounded-md -rotate-1 shadow-2xs"
            >
              <span className="font-hand font-bold text-base sm:text-lg text-[#111318]">
                “ turning &lsquo;what if?&rsquo; into &lsquo;it&apos;s live.&rsquo; ”
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
