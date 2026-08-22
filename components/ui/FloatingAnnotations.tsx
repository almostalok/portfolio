"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function FloatingAnnotations() {
  const { scrollQuips } = portfolioData;
  const { scrollYProgress } = useScroll();
  const [currentQuip, setCurrentQuip] = useState("");
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: "30%", side: "right" as "left" | "right" });

  useEffect(() => {
    let lastThreshold = -1;

    const unsubscribe = scrollYProgress.on("change", (value) => {
      // Show a quip at every ~10% scroll increment
      const threshold = Math.floor(value * 10);
      if (threshold !== lastThreshold && threshold > 0 && threshold < 10) {
        lastThreshold = threshold;
        const quipIndex = threshold % scrollQuips.length;
        setCurrentQuip(scrollQuips[quipIndex]);
        setPosition({
          top: `${15 + Math.random() * 60}%`,
          side: threshold % 2 === 0 ? "right" : "left",
        });
        setVisible(true);
        setTimeout(() => setVisible(false), 2500);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, scrollQuips]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden hidden lg:block">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={
          visible
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: position.side === "right" ? 20 : -20 }
        }
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute max-w-[180px]"
        style={{
          top: position.top,
          [position.side]: "24px",
        }}
      >
        <div className="relative px-3.5 py-2.5 bg-white border-2 border-[#111318] rounded-xl shadow-[3px_3px_0px_#111318] -rotate-2">
          {/* Authentic Washi Tape on top */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#F4C400] border border-[#111318]/20 shadow-xs rotate-1" />

          {/* Yellow Highlighter marker accent */}
          <span className="font-hand font-bold text-sm text-[#111318] leading-snug block pt-0.5">
            {currentQuip}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
