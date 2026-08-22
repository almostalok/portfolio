"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Bird } from "../illustrations/IllustrationSystem";

const FOOTER_QUIPS = [
  "Built with curiosity, coffee & questionable decisions.",
  "Powered by ctrl+z and blind optimism.",
  "No divs were harmed in the making of this site.",
  "Made with 🖤 and an unreasonable amount of CSS.",
  "Runs on caffeine, deploys on vibes.",
  "git commit -m 'it works on my machine'",
];

export function Footer() {
  const [quipIndex, setQuipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuipIndex((prev) => (prev + 1) % FOOTER_QUIPS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full border-t border-[#D9D9D4] bg-[#FFFFFF] py-10 select-none">
      {/* Hand-drawn little bird perched gracefully on top border (far right) */}
      <div className="absolute -top-4 right-12 hidden md:flex items-center gap-1 text-[#111318] pointer-events-none">
        <Bird className="w-5 h-4" yellowStroke />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand */}
        <div className="flex items-center gap-1">
          <span className="font-display font-black text-2xl tracking-tight text-[#111318]">
            almostalok
          </span>
          <span className="text-[#F4C400] text-3xl font-black leading-none">.</span>
        </div>

        {/* Center Rotating Humor / Philosophy Note */}
        <div className="flex items-center justify-center">
          <p className="text-xs md:text-sm text-[#686868] font-mono transition-opacity duration-300">
            {FOOTER_QUIPS[quipIndex]}
          </p>
        </div>

        {/* Right copyright & Back-to-top */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-[#686868]">
            © 2026 Alok Singh
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            data-cursor="TOP"
            className="w-9 h-9 rounded-full border-2 border-[#111318] flex items-center justify-center text-[#111318] hover:bg-[#F4C400] transition-all duration-200 shadow-[2px_2px_0px_#111318] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
