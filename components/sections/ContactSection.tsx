"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolio";
import { LinkedInIcon, GitHubIcon, InstagramIcon } from "../illustrations/SocialIcons";

const CONTACT_HEADLINES = [
  "GOT AN IDEA?",
  "WANNA COLLABORATE?",
  "LET'S BUILD SOMETHING",
  "HIRING? 👀",
  "SAY SOMETHING NICE",
];

export function ContactSection() {
  const { personal } = portfolioData;
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % CONTACT_HEADLINES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.8 },
      colors: ["#F4C400", "#111318", "#F6F6F2"],
    });
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20 relative select-none">
      <div className="bg-white border-2 border-[#111318] rounded-2xl p-6 sm:p-8 md:p-10 shadow-[4px_4px_0px_#111318] relative overflow-hidden">
        {/* Yellow Tape Sticker on Top Left */}
        <div className="absolute -top-3 left-10 w-16 h-5 bg-[#F4C400] border border-[#111318]/20 rounded-xs shadow-xs -rotate-2" />

        {/* Animated Flow Dotted Line & Arrow in Card Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg
            className="w-full h-full opacity-20"
            viewBox="0 0 1000 240"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 40 160 Q 280 20, 560 120 T 950 60"
              stroke="#111318"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
            {/* Arrow at the end of the flight path */}
            <g transform="translate(950, 60) rotate(-20)">
              <path
                d="M -10 -7 L 2 0 L -10 7"
                stroke="#F4C400"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="6" cy="0" r="3.5" fill="#111318" />
            </g>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col gap-8">
          {/* Top Row: Heading, Subtitle & Typing Indicator */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#111318] uppercase">
                  {CONTACT_HEADLINES[headlineIndex]}
                </h2>
                <div className="animate-float-slow hidden sm:block">
                  <Image
                    src="/assets/generated/icon_paper_plane.jpg"
                    alt="Paper Plane"
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain mix-blend-multiply"
                  />
                </div>
              </div>

              <p className="font-hand text-lg sm:text-xl text-[#686868]">
                Let&apos;s make something weird &amp; useful together.
              </p>
            </div>

            {/* Typing indicator badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAFAF8] border border-[#E8E8E2] rounded-full self-start sm:self-center shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse-dot" />
              <span className="text-[11px] font-mono text-[#686868]">Alok is typing</span>
              <span className="w-1 h-1 rounded-full bg-[#686868] animate-typing-dot-1" />
              <span className="w-1 h-1 rounded-full bg-[#686868] animate-typing-dot-2" />
              <span className="w-1 h-1 rounded-full bg-[#686868] animate-typing-dot-3" />
            </div>
          </div>

          {/* Bottom Row: ALL Social Handles in the SAME Single Line */}
          <div className="w-full pt-6 border-t border-[#EFEFEA] overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-3 min-w-max">
              {/* Primary CTA (Bright Yellow) */}
              <a
                href={`mailto:${personal.email}`}
                onClick={triggerConfetti}
                data-cursor="EMAIL"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F4C400] text-[#111318] font-mono font-bold text-xs sm:text-sm border-2 border-[#111318] shadow-[3px_3px_0px_#111318] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#111318] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL ME →</span>
              </a>

              {/* Social Links all in the same line */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-[#111318] font-mono font-medium text-xs sm:text-sm border border-[#111318] hover:bg-[#F6F6F2] hover:shadow-[2px_2px_0px_#111318] transition-all whitespace-nowrap"
              >
                <LinkedInIcon className="w-4 h-4 text-[#111318]" />
                <span>LinkedIn →</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-[#111318] font-mono font-medium text-xs sm:text-sm border border-[#111318] hover:bg-[#F6F6F2] hover:shadow-[2px_2px_0px_#111318] transition-all whitespace-nowrap"
              >
                <GitHubIcon className="w-4 h-4 text-[#111318]" />
                <span>GitHub →</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-[#111318] font-mono font-medium text-xs sm:text-sm border border-[#111318] hover:bg-[#F6F6F2] hover:shadow-[2px_2px_0px_#111318] transition-all whitespace-nowrap"
              >
                <InstagramIcon className="w-4 h-4 text-[#111318]" />
                <span>Instagram →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
