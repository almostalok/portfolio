"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Target, Flag, Trophy, Presentation } from "lucide-react";
import { portfolioData, OrganizationItem } from "@/data/portfolio";

export function OrganizationsSection() {
  const { organizations } = portfolioData;

  const renderBadgeIcon = (type: OrganizationItem["iconType"]) => {
    switch (type) {
      case "medal":
        return (
          <div className="w-12 h-12 rounded-full bg-[#FAFAF8] border-2 border-[#111318] flex items-center justify-center text-[#111318] relative">
            <Award className="w-6 h-6" />
            <span className="absolute -bottom-1 w-3 h-3 bg-[#F4C400] rounded-full border border-[#111318]" />
          </div>
        );
      case "radar":
        return (
          <div className="w-12 h-12 rounded-full bg-[#FAFAF8] border-2 border-[#111318] flex items-center justify-center text-[#111318] relative">
            <Target className="w-6 h-6 text-[#111318]" />
          </div>
        );
      case "flag":
        return (
          <div className="w-12 h-12 rounded-full bg-[#FAFAF8] border-2 border-[#111318] flex items-center justify-center text-[#111318] relative">
            <Flag className="w-6 h-6 fill-[#F4C400]" />
          </div>
        );
      case "trophy":
        return (
          <div className="w-12 h-12 rounded-full bg-[#FAFAF8] border-2 border-[#111318] flex items-center justify-center text-[#111318] relative">
            <Trophy className="w-6 h-6" />
          </div>
        );
      case "certificate":
        return (
          <div className="w-12 h-12 rounded-full bg-[#FAFAF8] border-2 border-[#111318] flex items-center justify-center text-[#111318] relative">
            <Presentation className="w-6 h-6 text-[#111318]" />
          </div>
        );
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  return (
    <section id="organizations" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-14">
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-[#111318] uppercase">
            COMMUNITIES &amp; ORGANIZATIONS
          </h2>
          <span className="font-hand text-lg sm:text-xl text-[#686868]">
            Building rooms for builders.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <img
              src="/assets/alok_fistpump_win.png"
              alt="Celebration"
              className="h-16 w-auto object-contain"
            />
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-[#111318] hover:text-[#F4C400] font-semibold transition-colors"
          >
            <span>View all</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Badges Row Container */}
      <div className="bg-white border border-[#D9D9D4] rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#EFEFEA]">
          {organizations.map((org, idx) => (
            <motion.div
              key={org.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`flex flex-col items-center text-center group ${
                idx > 0 ? "pt-4 sm:pt-0 sm:pl-4" : ""
              }`}
            >
              {/* Badge Icon */}
              <div className="mb-3.5 group-hover:scale-110 transition-transform duration-200">
                {renderBadgeIcon(org.iconType)}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xs sm:text-sm text-[#111318] leading-tight mb-1">
                {org.title}
              </h3>

              {/* Subtitle / Role */}
              <span className="text-[10px] font-mono text-[#686868] font-medium leading-tight">
                {org.subtitle}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
