"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioData, ProjectItem } from "@/data/portfolio";
import { HospateMockup, UnHackMockup, GrupmateMockup } from "../products/ProductMockup";
import { HandUnderline } from "../ui/HandUnderline";

export function FeaturedProducts() {
  const { products } = portfolioData;
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const renderMockup = (type: ProjectItem["mockupType"]) => {
    switch (type) {
      case "hospate":
        return <HospateMockup />;
      case "unhack":
        return <UnHackMockup />;
      case "grupmate":
        return <GrupmateMockup />;
      default:
        return null;
    }
  };

  return (
    <section id="products" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-16">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-8 md:mb-12">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#686868] uppercase block mb-1">
            FEATURED PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#111318]">
            Things I&apos;ve built<span className="text-[#F4C400]">.</span>
          </h2>
          <p className="text-sm font-hand text-[#686868] mt-1 text-lg">
            Some started as stupid ideas. Some became actual products.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous project"
            className="w-9 h-9 rounded-full border border-[#D9D9D4] flex items-center justify-center text-[#111318] hover:bg-[#F4C400] hover:border-[#111318] transition-all duration-200 shadow-sm active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next project"
            className="w-9 h-9 rounded-full border border-[#D9D9D4] flex items-center justify-center text-[#111318] hover:bg-[#F4C400] hover:border-[#111318] transition-all duration-200 shadow-sm active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Cards Container (Grid on desktop / horizontal swipe scroll on mobile) */}
      <div
        ref={scrollContainerRef}
        className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none"
      >
        {products.map((product) => {
          const isHovered = hoveredId === product.id;
          const isSiblingHovered = hoveredId !== null && !isHovered;

          return (
            <motion.div
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-cursor="VIEW"
              className={`min-w-[320px] sm:min-w-[360px] md:min-w-0 snap-start flex-1 flex flex-col justify-between p-5 md:p-6 rounded-2xl bg-white border border-[#D9D9D4] transition-all duration-300 ${
                isHovered
                  ? "border-[#111318] shadow-[0_12px_32px_-8px_rgba(17,19,24,0.12)] -translate-y-1 scale-[1.01]"
                  : isSiblingHovered
                  ? "opacity-90 scale-[0.99]"
                  : "shadow-sm hover:border-[#111318]"
              }`}
            >
              {/* Card Header: Number Badge & Category */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded bg-[#FFF7D1] border border-[#F4C400] text-[#111318] font-mono font-bold text-xs">
                    {product.number}
                  </span>
                  <span className="text-[11px] font-mono text-[#686868]">
                    {product.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-display font-black text-2xl text-[#111318] mb-2 transition-transform duration-200 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                >
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#686868] leading-relaxed mb-4 min-h-[38px]">
                  {product.description}
                </p>

                {/* Realistic Product Mockup Frame */}
                <div className="mb-5 transition-transform duration-300">
                  {renderMockup(product.mockupType)}
                </div>
              </div>

              {/* Card Footer: Tech Stack Tags & CTA Link */}
              <div className="pt-4 border-t border-[#EFEFEA] space-y-4">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F6F6F2] text-[#111318] border border-[#E8E8E2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Case Study CTA Link */}
                <a
                  href={product.caseStudyUrl}
                  data-cursor="CASE STUDY"
                  className="group/link inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#111318] hover:text-[#111318]"
                >
                  <span className="relative">
                    CASE STUDY
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F4C400] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-200 origin-left" />
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
