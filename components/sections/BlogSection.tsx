"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { CoffeeCup } from "../illustrations/IllustrationSystem";

export function BlogSection() {
  const { blogs } = portfolioData;

  return (
    <section id="blogs" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-16">
      {/* Header with Steaming Coffee Cup on Right */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-[#111318] uppercase">
              BLOGS
            </h2>
            <span className="font-hand text-lg sm:text-xl text-[#686868]">
              Things I figured out the hard way.
            </span>
          </div>
        </div>

        <div className="hidden sm:block">
          <img
            src="/assets/icon_coffee_steaming.png"
            alt="Steaming Coffee Cup"
            className="w-12 h-14 object-contain"
          />
        </div>
      </div>

      {/* 4 Pinned Paper Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, idx) => (
          <motion.article
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -6, rotate: idx % 2 === 0 ? 0.8 : -0.8 }}
            data-cursor="READ"
            className="relative flex flex-col justify-between p-5 rounded-xl bg-white border border-[#D9D9D4] shadow-xs hover:border-[#111318] hover:shadow-md transition-all cursor-pointer min-h-[220px] group"
          >
            {/* Top Tape Sticker */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#F4C400]/80 rounded-xs shadow-xs -rotate-2" />

            <div>
              {/* Number Badge */}
              <div className="flex items-center justify-between mb-4 pt-1">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FFF7D1] border border-[#F4C400] text-[#111318]">
                  {blog.number}
                </span>
                <span className="text-[10px] font-mono text-[#686868]">
                  {blog.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-sm sm:text-base text-[#111318] leading-snug mb-3 group-hover:text-[#111318]">
                {blog.title}
              </h3>
            </div>

            {/* Bottom Meta & Doodle */}
            <div className="pt-3 border-t border-[#EFEFEA] flex items-center justify-between text-[11px] font-mono text-[#686868]">
              <span>
                {blog.category} · {blog.readTime}
              </span>

              {/* Mini Doodle Wave */}
              <svg className="w-6 h-3 text-[#111318]" viewBox="0 0 24 12" fill="none">
                <path d="M2 9Q6 2 12 7T22 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
