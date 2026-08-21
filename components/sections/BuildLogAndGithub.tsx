"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Flag } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { WalkingPerson } from "../illustrations/IllustrationSystem";

export function BuildLogAndGithub() {
  const { buildLog, github } = portfolioData;
  const [hoveredCell, setHoveredCell] = useState<{ count: number; date: string } | null>(null);

  // Generate deterministic heatmap data
  const weeks = 16;
  const days = 7;
  const heatmapData = Array.from({ length: weeks * days }, (_, i) => {
    // Generate realistic distribution of commits
    const pseudoRandom = Math.sin(i * 997) * 10000;
    const rand = pseudoRandom - Math.floor(pseudoRandom);
    let level = 0;
    let count = 0;
    if (rand > 0.3) {
      if (rand > 0.88) {
        level = 4;
        count = Math.floor(rand * 12) + 6;
      } else if (rand > 0.7) {
        level = 3;
        count = Math.floor(rand * 6) + 3;
      } else if (rand > 0.5) {
        level = 2;
        count = 2;
      } else {
        level = 1;
        count = 1;
      }
    }
    return {
      index: i,
      level,
      count,
      date: `Day ${i + 1}`,
    };
  });

  const getCellColor = (level: number) => {
    switch (level) {
      case 4:
        return "bg-[#111318]";
      case 3:
        return "bg-[#F4C400]";
      case 2:
        return "bg-[#F4C400]/70";
      case 1:
        return "bg-[#D9D9D4]";
      default:
        return "bg-[#F6F6F2]";
    }
  };

  return (
    <section id="github" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Build Log Timeline (Col 6 or 7) */}
        <div className="lg:col-span-6 bg-white border border-[#D9D9D4] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#111318] transition-colors">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#686868] uppercase">
                BUILD LOG (THE JOURNEY)
              </span>
            </div>

            {/* Timeline Row with Walking Person */}
            <div className="relative pt-6 pb-4">
              {/* Walking Person Image Asset */}
              <div className="flex items-center mb-2">
                <img
                  src="/assets/alok_walking_backpack.png"
                  alt="Alok walking"
                  className="h-16 w-auto object-contain animate-float-gentle"
                />
              </div>

              {/* Yellow Horizontal Timeline Track */}
              <div className="relative h-2 bg-[#F6F6F2] rounded-full overflow-visible border border-[#E8E8E2] mb-6">
                <div className="absolute inset-y-0 left-0 right-4 bg-[#F4C400] rounded-full" />
                {/* Yellow Flag at finish line */}
                <div className="absolute -top-3 right-0 text-[#111318]">
                  <Flag className="w-5 h-5 fill-[#F4C400] text-[#111318]" />
                </div>
              </div>

              {/* Milestone Points */}
              <div className="grid grid-cols-3 gap-2">
                {buildLog.map((log) => (
                  <div key={log.year} className="flex flex-col">
                    <span className="font-display font-black text-xl text-[#111318] tracking-tight">
                      {log.year}
                    </span>
                    <p className="text-[11px] font-mono text-[#686868] mt-1 leading-snug">
                      {log.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#EFEFEA] mt-6">
            <span className="text-[11px] font-mono text-[#686868]">
              Continuing the journey — Shipping more experiments in 2026.
            </span>
          </div>
        </div>

        {/* Right Column: GitHub Snapshot (Col 6) */}
        <div className="lg:col-span-6 bg-white border border-[#D9D9D4] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#111318] transition-colors">
          <div>
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#686868] uppercase">
                GITHUB SNAPSHOT
              </span>
              <a
                href={github.profileUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="GITHUB"
                className="group inline-flex items-center gap-1 text-xs font-mono text-[#111318] hover:text-[#F4C400] font-medium transition-colors"
              >
                <span>View Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Contributions Counter */}
            <div className="mb-5">
              <div className="font-display font-black text-2xl md:text-3xl text-[#111318] tracking-tight flex items-baseline gap-2">
                <span>{github.totalContributions}</span>
                <span className="text-xs font-mono text-[#686868] font-normal">
                  contributions this year
                </span>
              </div>
            </div>

            {/* Heatmap Grid */}
            <div className="relative mb-6">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 p-3 rounded-xl bg-[#FAFAF8] border border-[#E8E8E2]">
                {heatmapData.map((cell) => (
                  <div
                    key={cell.index}
                    onMouseEnter={() => setHoveredCell(cell)}
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-xs transition-transform hover:scale-125 cursor-pointer ${getCellColor(
                      cell.level
                    )}`}
                    title={`${cell.count} commits`}
                  />
                ))}
              </div>

              {/* Heatmap Legend */}
              <div className="flex items-center justify-between text-[10px] font-mono text-[#686868] mt-2 px-1">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#F6F6F2] border border-[#E8E8E2]" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#D9D9D4]" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#F4C400]/70" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#F4C400]" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#111318]" />
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Top Languages Breakdown */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-bold uppercase text-[#686868] tracking-wider mb-2">
                Top Languages
              </div>
              {github.languages.map((lang) => (
                <div key={lang.name} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#111318] font-medium">{lang.name}</span>
                    <span className="text-[#686868]">{lang.percentage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#F6F6F2] overflow-hidden border border-[#E8E8E2]">
                    <div
                      className="h-full bg-[#111318] rounded-full transition-all duration-500"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
