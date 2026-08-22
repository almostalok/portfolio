"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SpeechBubble } from "../ui/SpeechBubble";
import { HandUnderline } from "../ui/HandUnderline";
import { Bird, Tree } from "../illustrations/IllustrationSystem";

export function HeroSection() {
  const { personal } = portfolioData;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full pt-28 md:pt-36 pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Speech Bubble */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <SpeechBubble text={personal.greeting} />
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl font-black font-display tracking-tight text-[#111318] leading-[1.05]">
              I&apos;m {personal.name}
              <span className="text-[#F4C400]">.</span>
            </h1>

            {/* Sub-headline with yellow underline under 'ship something useful' */}
            <div className="relative text-lg sm:text-xl md:text-2xl text-[#111318] font-normal leading-relaxed max-w-xl">
              <span>I build products, break things, organize people &amp; occasionally </span>
              <span className="relative inline-block font-medium">
                ship something useful.
                <span className="absolute -bottom-2 left-0 w-full pointer-events-none">
                  <HandUnderline className="w-full h-3.5" color="#F4C400" />
                </span>
              </span>
            </div>

            {/* Roles Tagline */}
            <p className="text-xs sm:text-sm font-mono text-[#686868] font-medium tracking-wide flex flex-wrap items-center gap-2 pt-1">
              {personal.roles.map((role, idx) => (
                <React.Fragment key={role}>
                  <span className="hover:text-[#111318] transition-colors">{role}</span>
                  {idx < personal.roles.length - 1 && <span className="text-[#F4C400] font-bold">·</span>}
                </React.Fragment>
              ))}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection("products")}
                data-cursor="EXPLORE"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111318] text-white text-xs sm:text-sm font-mono font-semibold tracking-wider hover:bg-[#282A30] hover:shadow-[0_4px_16px_rgba(17,19,24,0.15)] transition-all duration-200 active:scale-95"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 text-[#F4C400] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection("stats")}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#D9D9D4] bg-white text-[#111318] text-xs sm:text-sm font-mono font-medium hover:border-[#111318] hover:bg-[#F6F6F2] transition-all duration-200"
              >
                <span>SCROLL DOWN</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#686868] transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Avatar & Organic Doodle Ecosystem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0"
          >
            {/* Background oversized organic off-white circle */}
            <div className="relative w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 flex items-center justify-center">
              {/* Organic blob background */}
              <Image
                src="/assets/hero_blob.svg"
                alt=""
                width={520}
                height={580}
                unoptimized
                className="absolute inset-0 w-full h-full object-contain -z-10 scale-110"
                aria-hidden="true"
              />

              {/* Real Avatar with subtle idle floating motion */}
              <motion.div
                animate={{
                  y: [-4, 4, -4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 rounded-full overflow-hidden flex items-end justify-center bg-white shadow-inner"
              >
                <Image
                  src="/avatar.png"
                  alt="Alok - Developer & Builder"
                  width={400}
                  height={400}
                  priority
                  unoptimized
                  className="w-full h-full object-cover object-top grayscale contrast-105"
                />
              </motion.div>



              {/* Bottom Left: Little Tree & Grass Doodle */}
              <div className="absolute -bottom-4 -left-4 flex items-end gap-1 pointer-events-none">
                <Tree className="w-7 h-9 text-[#111318]" />
              </div>

              {/* Bottom Right: Little Star / Sparkle Doodle */}
              <div className="absolute -bottom-2 -right-2 text-[#F4C400] pointer-events-none animate-spin-slow">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
