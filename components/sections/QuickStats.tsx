"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Calendar, Users, Terminal, BookOpen, Trophy } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { CountUp } from "../ui/CountUp";

export function QuickStats() {
  const { stats } = portfolioData;

  const getIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="w-5 h-5" />;
      case "Calendar":
        return <Calendar className="w-5 h-5" />;
      case "Users":
        return <Users className="w-5 h-5" />;
      case "Terminal":
        return <Terminal className="w-5 h-5" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5" />;
      case "Trophy":
        return <Trophy className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="stats" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white border border-[#D9D9D4] rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#111318] transition-colors duration-300"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EFEFEA]">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center group ${
                idx > 0 ? "pt-4 sm:pt-0 sm:pl-4" : ""
              }`}
            >
              {/* Circular Icon Container with thin border */}
              <div className="w-10 h-10 rounded-full border border-[#D9D9D4] flex items-center justify-center text-[#111318] mb-3 group-hover:bg-[#F4C400] group-hover:border-[#111318] transition-all duration-200 shadow-sm">
                {getIcon(stat.icon)}
              </div>

              {/* Animated Stat Number */}
              <div className="font-display font-black text-2xl sm:text-3xl text-[#111318] tracking-tight flex items-baseline">
                <CountUp
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={1200 + idx * 150}
                />
              </div>

              {/* Stat Label */}
              <span className="text-xs font-mono text-[#686868] mt-1 group-hover:text-[#111318] transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
