"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData, ExperimentItem } from "@/data/portfolio";

export function ExperimentsSection() {
  const { experiments } = portfolioData;

  const renderDoodle = (type: ExperimentItem["doodleType"]) => {
    switch (type) {
      case "heart":
        return (
          <svg className="w-8 h-8 text-[#111318]" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 28C16 28 3 20 3 10C3 5 7 2 12 2C14.5 2 16 3.5 16 3.5C16 3.5 17.5 2 20 2C25 2 29 5 29 10C29 20 16 28 16 28Z" />
          </svg>
        );
      case "smile":
        return (
          <div className="w-9 h-9 rounded-full bg-[#FFF7D1] border-2 border-[#111318] flex items-center justify-center relative">
            <div className="flex gap-2">
              <span className="w-1 h-1.5 rounded-full bg-[#111318]" />
              <span className="w-1 h-1.5 rounded-full bg-[#111318]" />
            </div>
            <div className="absolute bottom-2 w-3.5 h-1.5 border-b-2 border-[#111318] rounded-full" />
          </div>
        );
      case "wave":
        return (
          <svg className="w-10 h-6 text-[#111318]" viewBox="0 0 40 20" fill="none">
            <path
              d="M2 14Q10 4 20 12T38 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "shield":
        return (
          <svg className="w-8 h-8 text-[#111318]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case "arrow":
        return (
          <svg className="w-10 h-8 text-[#111318]" viewBox="0 0 36 28" fill="none">
            <path
              d="M4 22L16 12L24 16L32 4M32 4H24M32 4V12"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "stars":
        return (
          <div className="flex items-center gap-1 text-[#F4C400]">
            <svg className="w-6 h-6 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" />
            </svg>
            <svg className="w-4 h-4 text-[#111318]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-[#111318] uppercase">
            EXPERIMENTS &amp; SIDE QUESTS
          </h2>
          <span className="font-hand text-lg sm:text-xl text-[#686868]">
            Because shipping is addictive.
          </span>
        </div>
      </div>

      {/* Grid of scattered tilted cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
        {experiments.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            style={{ rotate: `${item.rotation}deg` }}
            whileHover={{
              rotate: 0,
              y: -8,
              transition: { duration: 0.2 },
            }}
            data-cursor="TEST"
            className="flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-white border border-[#D9D9D4] shadow-xs hover:border-[#111318] hover:shadow-md transition-all cursor-pointer min-h-[145px]"
          >
            {/* Top Browser Dots */}
            <div>
              <div className="flex items-center gap-1 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#111318]" />
                <span className="w-2 h-2 rounded-full bg-[#D9D9D4]" />
                <span className="w-2 h-2 rounded-full bg-[#F4C400]" />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xs sm:text-sm text-[#111318] leading-tight mb-1">
                {item.title}
              </h3>
            </div>

            {/* Doodle Icon in Center/Bottom */}
            <div className="flex justify-center items-center py-2">
              {renderDoodle(item.doodleType)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
