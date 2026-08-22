"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolio";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function EasterEgg() {
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const [triggered, setTriggered] = useState(false);
  const { easterEggs } = portfolioData;

  const randomQuip = easterEggs[Math.floor(Math.random() * easterEggs.length)];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const newSequence = [...inputSequence, e.key].slice(-KONAMI_CODE.length);
      setInputSequence(newSequence);

      if (newSequence.length === KONAMI_CODE.length &&
          newSequence.every((key, i) => key === KONAMI_CODE[i])) {
        setTriggered(true);
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.5 },
          colors: ["#F4C400", "#111318", "#F6F6F2", "#FFFFFF"],
        });
      }
    },
    [inputSequence]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setTriggered(false)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white border-2 border-[#111318] rounded-2xl p-8 max-w-sm mx-4 shadow-[4px_4px_0px_#111318] text-center"
          >
            {/* Tape sticker */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#F4C400] border border-[#111318]/20 rounded-xs shadow-xs rotate-1" />

            {/* Sparkle */}
            <div className="text-[#F4C400] mb-3 flex justify-center">
              <svg className="w-10 h-10 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" />
              </svg>
            </div>

            <h3 className="font-display font-black text-2xl text-[#111318] mb-2">
              You found it! 🎉
            </h3>
            <p className="font-hand font-bold text-xl text-[#111318] mb-4 -rotate-1 leading-snug">
              “{randomQuip}”
            </p>
            <p className="text-[10px] font-mono text-[#686868] tracking-widest uppercase bg-[#F6F6F2] py-1 px-2 rounded border border-[#E8E8E2] inline-block">
              KONAMI CODE: ↑↑↓↓←→←→BA
            </p>

            <button
              onClick={() => setTriggered(false)}
              className="mt-5 px-5 py-2 rounded-full bg-[#111318] text-white text-xs font-mono font-semibold hover:bg-[#282A30] transition-colors shadow-xs"
            >
              nice.
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
