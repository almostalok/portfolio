"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { LaptopPerson, GroupPeople, FlaskIllustration, ArrowDoodle } from "../illustrations/IllustrationSystem";
import { HandUnderline } from "../ui/HandUnderline";

export function PhilosophySection() {
  const { philosophy } = portfolioData;

  const items = [
    {
      key: "build",
      title: philosophy.build.title,
      description: philosophy.build.description,
      illustration: <LaptopPerson className="w-24 h-24 text-[#111318]" />,
    },
    {
      key: "organize",
      title: philosophy.organize.title,
      description: philosophy.organize.description,
      illustration: <GroupPeople className="w-28 h-24 text-[#111318]" />,
    },
    {
      key: "experiment",
      title: philosophy.experiment.title,
      description: philosophy.experiment.description,
      illustration: <FlaskIllustration className="w-24 h-24 text-[#111318]" />,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-14">
      {/* Eyebrow */}
      <div className="text-center mb-10">
        <span className="text-xs font-mono font-bold tracking-widest text-[#686868] uppercase">
          SO... WHAT DO I ACTUALLY DO?
        </span>
      </div>

      {/* 3 Columns connected with arrows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative items-start">
        {items.map((item, idx) => (
          <React.Fragment key={item.key}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-transparent hover:border-[#D9D9D4] hover:shadow-sm transition-all duration-300 group"
            >
              {/* Illustration */}
              <div className="mb-4 h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {item.illustration}
              </div>

              {/* Title with yellow underline */}
              <div className="relative inline-block mb-3">
                <h3 className="font-display font-black text-2xl md:text-3xl text-[#111318] tracking-tight">
                  {item.title}
                </h3>
                <div className="absolute -bottom-1 left-0 w-full">
                  <HandUnderline className="w-full h-2.5" color="#F4C400" />
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#686868] leading-relaxed max-w-xs font-normal">
                {item.description}
              </p>
            </motion.div>

            {/* Connecting Arrow between items */}
            {idx < items.length - 1 && (
              <div
                className="hidden md:flex absolute top-28 pointer-events-none text-[#111318]"
                style={{ left: idx === 0 ? "31%" : "64%" }}
              >
                <ArrowDoodle direction="curved" className="w-14 h-8 opacity-75 animate-pulse" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
