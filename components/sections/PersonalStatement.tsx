"use client";

import React from "react";
import { motion } from "framer-motion";
import { PersonWithLaptopAndPlane } from "../illustrations/IllustrationSystem";
import { HandUnderline } from "../ui/HandUnderline";

export function PersonalStatement() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-white border-2 border-[#F4C400] rounded-3xl p-8 md:p-14 shadow-[4px_4px_0px_#111318] overflow-hidden"
      >
        {/* Subtle yellow quote background watermark */}
        <div className="absolute top-4 left-6 text-7xl md:text-9xl font-display font-black text-[#FFF7D1] select-none pointer-events-none -z-0">
          “
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          {/* Quote Text */}
          <div className="md:col-span-8 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black font-display tracking-tight text-[#111318] leading-[1.2]">
              &ldquo; I like turning{" "}
              <span className="relative inline-block px-1">
                &ldquo;what if?&rdquo;
                <span className="absolute -bottom-1 left-0 w-full">
                  <HandUnderline className="w-full h-3" color="#F4C400" />
                </span>
              </span>{" "}
              into{" "}
              <span className="relative inline-block px-1 bg-[#FFF7D1] rounded-lg border border-[#F4C400]/40">
                &ldquo;it&apos;s live.&rdquo;
              </span>{" "}
              &rdquo;
            </h2>
          </div>

          {/* Right Illustration: Developer Flying on Paper Plane */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="animate-float-slow">
              <img
                src="/assets/scene_flying_paper_plane.png"
                alt="Flying on paper plane"
                className="w-36 sm:w-48 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
