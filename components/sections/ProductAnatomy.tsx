"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Activity, ShieldCheck, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ProductAnatomy() {
  const { productAnatomy } = portfolioData;
  const [activeTab, setActiveTab] = useState<"hospate" | "unhack">("hospate");

  const currentData = productAnatomy[activeTab];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="bg-[#F6F6F2] border border-[#D9D9D4] rounded-2xl p-6 md:p-8 relative overflow-hidden">
        {/* Top bar with Toggle tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D9D9D4] pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#F4C400]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#686868] uppercase">
                PRODUCT ANATOMY
              </span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111318] tracking-tight">
              {currentData.title}
            </h3>
            <p className="text-xs font-mono text-[#686868] mt-0.5">{currentData.subtitle}</p>
          </div>

          {/* Switcher Buttons */}
          <div className="inline-flex rounded-full border border-[#D9D9D4] bg-white p-1 self-start sm:self-auto shadow-sm">
            <button
              onClick={() => setActiveTab("hospate")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeTab === "hospate"
                  ? "bg-[#111318] text-white shadow-sm"
                  : "text-[#686868] hover:text-[#111318]"
              }`}
            >
              Hospate EHR
            </button>
            <button
              onClick={() => setActiveTab("unhack")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeTab === "unhack"
                  ? "bg-[#111318] text-white shadow-sm"
                  : "text-[#686868] hover:text-[#111318]"
              }`}
            >
              UnHack Platform
            </button>
          </div>
        </div>

        {/* Animated Architecture Pipeline */}
        <div className="relative">
          {/* Moving pulsing line for desktop */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-0.5 bg-[#D9D9D4] -z-0">
            <motion.div
              animate={{
                left: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-[-2px] w-12 h-1.5 bg-[#F4C400] rounded-full"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {currentData.nodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-3 rounded-xl bg-white border border-[#D9D9D4] shadow-sm hover:border-[#111318] transition-all group"
              >
                {/* Node Step Indicator */}
                <div className="w-8 h-8 rounded-full bg-[#F6F6F2] border border-[#D9D9D4] flex items-center justify-center font-mono font-bold text-xs text-[#111318] mb-2.5 group-hover:bg-[#F4C400] group-hover:border-[#111318] transition-colors">
                  0{index + 1}
                </div>

                {/* Node Label */}
                <span className="font-display font-bold text-xs sm:text-sm text-[#111318] mb-1">
                  {node.label}
                </span>

                {/* Node Description */}
                <span className="text-[10px] font-mono text-[#686868] leading-tight">
                  {node.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
