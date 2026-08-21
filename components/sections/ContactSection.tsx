"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolio";
import { PaperPlane } from "../illustrations/IllustrationSystem";
import { LinkedInIcon, GitHubIcon, InstagramIcon } from "../illustrations/SocialIcons";

export function ContactSection() {
  const { personal } = portfolioData;

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.8 },
      colors: ["#F4C400", "#111318", "#F6F6F2"],
    });
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20 relative overflow-hidden">
      {/* Flight Path SVG Line across section */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none -z-0 opacity-40">
        <svg className="w-full h-24 overflow-visible" viewBox="0 0 1000 80" fill="none">
          <path
            d="M50 70 Q 250 10, 450 60 T 800 20 T 980 50"
            stroke="#111318"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* Left side: Heading & Paper Plane Doodle */}
        <div className="flex items-center gap-4">
          <div className="animate-float-slow hidden sm:block">
            <img
              src="/assets/icon_paper_plane.png"
              alt="Paper Plane"
              className="w-12 h-12 object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#111318] uppercase">
              GOT AN IDEA?
            </h2>
            <p className="font-hand text-lg sm:text-xl text-[#686868] mt-1">
              Let&apos;s make something weird together.
            </p>
          </div>
        </div>

        {/* Right side: Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Primary CTA (Bright Yellow) */}
          <a
            href={`mailto:${personal.email}`}
            onClick={triggerConfetti}
            data-cursor="EMAIL"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F4C400] text-[#111318] font-mono font-bold text-xs sm:text-sm border-2 border-[#111318] shadow-[3px_3px_0px_#111318] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#111318] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <Mail className="w-4 h-4" />
            <span>EMAIL ME →</span>
          </a>

          {/* Social Links */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white text-[#111318] font-mono font-medium text-xs sm:text-sm border border-[#D9D9D4] hover:border-[#111318] hover:bg-[#F6F6F2] transition-colors shadow-xs"
          >
            <LinkedInIcon className="w-4 h-4 text-[#111318]" />
            <span>LinkedIn →</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white text-[#111318] font-mono font-medium text-xs sm:text-sm border border-[#D9D9D4] hover:border-[#111318] hover:bg-[#F6F6F2] transition-colors shadow-xs"
          >
            <GitHubIcon className="w-4 h-4 text-[#111318]" />
            <span>GitHub →</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white text-[#111318] font-mono font-medium text-xs sm:text-sm border border-[#D9D9D4] hover:border-[#111318] hover:bg-[#F6F6F2] transition-colors shadow-xs"
          >
            <InstagramIcon className="w-4 h-4 text-[#111318]" />
            <span>Instagram →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
