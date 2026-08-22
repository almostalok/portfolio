"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Zap, Coffee, Clock } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const ROTATING_WORDS = [
  "building products",
  "breaking things",
  "organizing hackathons",
  "shipping experiments",
  "writing code",
  "learning Rust",
  "drinking coffee",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_DURATION = 2200;

export function IntroSection() {
  const { personal, currently } = portfolioData;

  // Typewriter state
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = ROTATING_WORDS[wordIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      // Typing
      if (displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else {
        // Finished typing — pause then start deleting
        setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        return;
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
      }
    }
  }, [displayText, isDeleting, currentWord]);

  useEffect(() => {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  // Current time greeting
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 6) setGreeting("Up late? Me too.");
    else if (hour < 12) setGreeting("Good morning!");
    else if (hour < 17) setGreeting("Good afternoon!");
    else if (hour < 21) setGreeting("Good evening!");
    else setGreeting("Night owl mode.");
  }, []);

  const statusChips = [
    {
      icon: <MapPin className="w-3.5 h-3.5" />,
      label: personal.location,
    },
    {
      icon: <Zap className="w-3.5 h-3.5" />,
      label: personal.status,
    },
    {
      icon: <Coffee className="w-3.5 h-3.5" />,
      label: personal.fuel,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#F6F6F2] border border-[#D9D9D4] rounded-2xl p-6 md:p-8 overflow-hidden"
      >
        {/* Tape sticker top-left */}
        <div className="absolute -top-2.5 left-8 w-12 h-5 bg-[#F4C400]/85 rounded-sm shadow-sm -rotate-2 z-10" />

        {/* Top row: time-aware greeting + clock */}
        <div className="flex items-center gap-2 mb-5">
          <Clock className="w-3.5 h-3.5 text-[#686868]" />
          <span className="text-xs font-mono text-[#686868] tracking-wide">
            {greeting}
          </span>
        </div>

        {/* Typewriter headline */}
        <div className="mb-6">
          <p className="text-sm md:text-base text-[#686868] font-normal leading-relaxed">
            Right now, I&apos;m probably
          </p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#111318] tracking-tight">
              {displayText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block w-[3px] h-7 sm:h-8 md:h-9 bg-[#F4C400] rounded-full ml-0.5"
            />
          </div>
        </div>

        {/* Status chips */}
        <div className="flex flex-wrap gap-2.5 mb-5">
          {statusChips.map((chip, idx) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + idx * 0.1, duration: 0.35 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#D9D9D4] rounded-full text-xs font-mono text-[#111318] hover:border-[#111318] hover:shadow-sm transition-all duration-200 cursor-default"
            >
              <span className="text-[#F4C400]">{chip.icon}</span>
              <span>{chip.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Activity bar — visual representation of "currently" meters */}
        <div className="space-y-2.5">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#686868] uppercase">
            Current Energy Levels
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {currently.meters.map((meter, idx) => (
              <motion.div
                key={meter.label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.08, duration: 0.4 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono text-[#111318] font-medium capitalize">
                    {meter.label}
                  </span>
                  <span className="text-[10px] font-mono text-[#686868]">
                    {meter.percentage}%
                  </span>
                </div>
                <div className="w-full h-2 bg-white rounded-full border border-[#D9D9D4] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${meter.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + idx * 0.12,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`h-full rounded-full ${
                      meter.label === "sleeping"
                        ? "bg-[#686868]"
                        : "bg-[#F4C400]"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Handwritten annotation — bottom right */}
        <div className="absolute -bottom-1 right-6 md:right-10 -rotate-3 pointer-events-none select-none">
          <span className="font-hand text-sm md:text-base text-[#686868]">
            ← always caffeinated ☕
          </span>
        </div>
      </motion.div>
    </section>
  );
}
