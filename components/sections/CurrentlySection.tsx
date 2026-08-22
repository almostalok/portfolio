"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Zap, Coffee, TerminalSquare } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { BrokenTerminal } from "../illustrations/IllustrationSystem";

const VIBE_LABELS = [
  "CURRENTLY",
  "VIBE CHECK",
  "LIVE STATUS",
  "RIGHT NOW",
  "REAL-TIME ALOK",
];

export function CurrentlySection() {
  const { currently, failedExperiments } = portfolioData;
  const [vibeIndex, setVibeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVibeIndex((prev) => (prev + 1) % VIBE_LABELS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Currently Status Card (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-[#D9D9D4] rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#111318] transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] animate-pulse-dot" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#111318] uppercase">
                {VIBE_LABELS[vibeIndex]}
              </span>
            </div>

            {/* Meters Grid */}
            <div className="space-y-4 mb-8">
              {currently.meters.map((item) => (
                <div key={item.label} className="space-y-1.5 font-mono text-xs">
                  <div className="flex items-center justify-between text-[#111318]">
                    <span className="font-medium">→ {item.label}</span>
                    <span className="font-bold">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#F6F6F2] rounded-full overflow-hidden border border-[#E8E8E2]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-[#111318] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom metadata tags */}
          <div className="pt-4 border-t border-[#EFEFEA] grid grid-cols-3 gap-3 text-[11px] font-mono">
            <div>
              <span className="text-[#686868] block mb-0.5">location</span>
              <span className="font-bold text-[#111318]">{currently.location}</span>
            </div>
            <div>
              <span className="text-[#686868] block mb-0.5">status</span>
              <span className="font-bold text-[#111318]">{currently.status}</span>
            </div>
            <div>
              <span className="text-[#686868] block mb-0.5">fuel</span>
              <span className="font-bold text-[#111318]">{currently.fuel}</span>
            </div>
          </div>
        </div>

        {/* Failed Experiments Humorous Card (5 cols) */}
        <div className="lg:col-span-5 bg-[#FAFAF8] border border-[#D9D9D4] rounded-2xl p-6 md:p-8 flex flex-col justify-between relative shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#111318] transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#686868] uppercase">
                THINGS THAT DIDN&apos;T WORK
              </span>
              <BrokenTerminal className="w-8 h-8 text-[#111318]" />
            </div>

            <p className="font-hand text-base text-[#686868] mb-6">
              {failedExperiments.humorNote}
            </p>

            {/* Failure metrics */}
            <div className="grid grid-cols-2 gap-4">
              {failedExperiments.stats.map((item) => (
                <div key={item.label} className="p-3 bg-white rounded-xl border border-[#E8E8E2]">
                  <div className="font-display font-black text-2xl text-[#111318]">
                    {item.value}
                  </div>
                  <div className="text-[10px] font-mono text-[#686868] mt-0.5 leading-tight">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8E8E2] mt-6 text-[10px] font-mono text-[#8E929E]">
            git commit -m &quot;it works on my machine&quot;
          </div>
        </div>
      </div>
    </section>
  );
}
