"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { portfolioData, SocialItem } from "@/data/portfolio";
import { LinkedInIcon, GitHubIcon, XTwitterIcon, InstagramIcon } from "../illustrations/SocialIcons";

const JOKE_FOLLOWERS: Record<string, string> = {
  LinkedIn: "500+ connections (mostly recruiters)",
  GitHub: "12 stars & counting",
  "X / Twitter": "3 followers & my mom",
  Instagram: "my friends + that one bot",
};

export function SocialSection() {
  const { socials } = portfolioData;

  const getSocialIcon = (icon: SocialItem["icon"]) => {
    switch (icon) {
      case "linkedin":
        return <LinkedInIcon className="w-5 h-5" />;
      case "github":
        return <GitHubIcon className="w-5 h-5" />;
      case "twitter":
        return <XTwitterIcon className="w-5 h-5" />;
      case "instagram":
        return <InstagramIcon className="w-5 h-5" />;
      default:
        return <GitHubIcon className="w-5 h-5" />;
    }
  };

  return (
    <section id="social" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-14">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-[#111318] uppercase">
            YOU CAN FIND ME ON
          </h2>
          <span className="font-hand text-lg sm:text-xl text-[#686868]">
            I post stuff. Sometimes. Mostly at weird hours.
          </span>
        </div>
      </div>

      {/* 4 Social Pinned Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {socials.map((item, idx) => (
          <motion.a
            key={item.platform}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            whileHover={{ y: -5, rotate: idx % 2 === 0 ? 0.6 : -0.6 }}
            data-cursor="VISIT"
            className="relative flex flex-col justify-between p-5 rounded-xl bg-white border-2 border-[#111318] shadow-[2px_2px_0px_#111318] hover:shadow-[4px_4px_0px_#111318] transition-all group"
          >
            {/* Top Tape Sticker */}
            <div
              className="absolute -top-2.5 left-6 w-10 h-3.5 rounded-xs border border-[#111318]/20 shadow-xs"
              style={{
                backgroundColor: item.tapeColor || "#F4C400",
                transform: `rotate(${idx % 2 === 0 ? "-3deg" : "3deg"})`,
                opacity: 0.9,
              }}
            />

            <div>
              {/* Icon & Platform */}
              <div className="flex items-center gap-2.5 mb-2.5 pt-1">
                <div className="w-8 h-8 rounded-lg bg-[#F6F6F2] border border-[#111318] flex items-center justify-center text-[#111318] group-hover:bg-[#F4C400] transition-colors shadow-xs">
                  {getSocialIcon(item.icon)}
                </div>
                <h3 className="font-display font-bold text-base text-[#111318]">
                  {item.platform}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-[#686868] font-mono leading-relaxed mb-2.5">
                {item.description}
              </p>

              {/* Joke follower badge */}
              <span className="inline-block px-2 py-0.5 bg-[#FFF7D1] border border-[#F4C400] rounded-md text-[9px] font-mono font-bold text-[#111318] mb-2 shadow-2xs">
                {JOKE_FOLLOWERS[item.platform] || "lurking"}
              </span>
            </div>

            {/* Bottom Arrow Indicator */}
            <div className="flex items-center justify-end pt-2 border-t border-[#EFEFEA]">
              <ArrowRight className="w-4 h-4 text-[#111318] transition-transform group-hover:translate-x-1" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
