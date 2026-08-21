"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { Bird } from "../illustrations/IllustrationSystem";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full border-t border-[#D9D9D4] bg-[#FFFFFF] py-12 overflow-hidden select-none">
      {/* Flying bird that crosses periodically */}
      <div className="absolute top-4 left-0 w-full pointer-events-none overflow-hidden h-10">
        <div className="absolute animate-[flyAcross_22s_linear_infinite] flex items-center gap-1 text-[#111318]">
          <Bird className="w-5 h-4" yellowStroke />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand */}
        <div className="flex items-center gap-1">
          <span className="font-display font-black text-2xl tracking-tight text-[#111318]">
            almostalok
          </span>
          <span className="text-[#F4C400] text-3xl font-black leading-none">.</span>
        </div>

        {/* Center Humor / Philosophy Note */}
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-xs md:text-sm text-[#686868] font-mono">
            Built with curiosity, coffee &amp; questionable decisions.
          </p>
          <div className="w-6 h-5 text-[#111318] -scale-x-100">
            <Bird className="w-5 h-4" />
          </div>
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
            className="w-8 h-8 rounded-full border border-[#D9D9D4] flex items-center justify-center text-[#111318] hover:bg-[#F4C400] hover:border-[#111318] transition-all duration-200 shadow-sm active:scale-95"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes flyAcross {
          0% {
            transform: translateX(-60px) translateY(4px);
          }
          50% {
            transform: translateX(50vw) translateY(-4px);
          }
          100% {
            transform: translateX(105vw) translateY(4px);
          }
        }
      `}</style>
    </footer>
  );
}
