"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Info, Check } from "lucide-react";
import { portfolioData, TechItem } from "@/data/portfolio";
import { DeveloperWithGraph } from "../illustrations/IllustrationSystem";

export function EngineeringSection() {
  const { engineering } = portfolioData;
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case "monitor":
        return (
          <svg className="w-5 h-5 text-[#111318]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        );
      case "server":
        return (
          <svg className="w-5 h-5 text-[#111318]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="8" rx="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
          </svg>
        );
      case "cloud":
        return (
          <svg className="w-5 h-5 text-[#111318]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        );
      case "rocket":
        return (
          <svg className="w-5 h-5 text-[#111318]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-16">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#111318] leading-tight">
            I like knowing
            <br />
            what&apos;s under
            <br />
            the hood<span className="text-[#F4C400]">.</span>
          </h2>
        </div>

        <div>
          <a
            href="#github"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111318] text-white text-xs font-mono font-medium tracking-wide hover:bg-[#282A30] transition-colors shadow-sm"
          >
            <span>VIEW TECH STACK</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F4C400]" />
          </a>
        </div>
      </div>

      {/* Main Stack Dashboard Card */}
      <div className="bg-white border border-[#D9D9D4] rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EFEFEA]">
          {engineering.map((cat, idx) => (
            <div key={cat.title} className={`${idx > 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""}`}>
              {/* Category Header with Hand-drawn style icon */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#EFEFEA]">
                <div className="w-8 h-8 rounded-lg bg-[#F6F6F2] border border-[#D9D9D4] flex items-center justify-center">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className="font-display font-bold text-sm tracking-tight text-[#111318]">
                  {cat.title}
                </h3>
              </div>

              {/* Technologies List with hover tooltips */}
              <ul className="space-y-2">
                {cat.items.map((item) => {
                  const isSelected = selectedTech?.name === item.name;

                  return (
                    <li key={item.name} className="relative">
                      <button
                        onMouseEnter={() => setSelectedTech(item)}
                        onMouseLeave={() => setSelectedTech(null)}
                        onClick={() => setSelectedTech(isSelected ? null : item)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-mono transition-all text-left group ${
                          isSelected
                            ? "bg-[#FFF7D1] text-[#111318] font-bold border border-[#F4C400]"
                            : "text-[#686868] hover:text-[#111318] hover:bg-[#F6F6F2]"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-[#111318]" : "bg-[#D9D9D4] group-hover:bg-[#F4C400]"}`} />
                          <span>{item.name}</span>
                        </span>
                        <Info className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#686868]" />
                      </button>

                      {/* Floating Tooltip / Usage Details */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 right-0 top-full mt-1 z-30 p-3 bg-[#111318] text-white rounded-xl shadow-xl border border-[#282A30] text-[11px] font-sans"
                          >
                            <div className="font-bold text-[#F4C400] font-display text-xs mb-1">
                              {item.name}
                            </div>
                            <p className="text-[#A0A4B0] text-[10px] leading-snug mb-2 font-mono">
                              {item.details.description}
                            </p>
                            <div className="text-[9px] font-mono text-[#8E929E] uppercase tracking-wider mb-1">
                              Used for:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {item.details.usedFor.map((use) => (
                                <span
                                  key={use}
                                  className="px-1.5 py-0.5 rounded bg-[#1F222B] text-[#D0D4E0] text-[9px] font-mono"
                                >
                                  {use}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom illustration in corner */}
        <div className="mt-8 pt-6 border-t border-[#EFEFEA] flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs font-mono text-[#686868]">
            Hover over any technology node to inspect architectural usage.
          </p>
          <div className="h-16 flex items-end">
            <img
              src="/assets/scene_dual_monitors.png"
              alt="Developer working at desk"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
