"use client";

import React from "react";
import Image from "next/image";

interface SectionDividerProps {
  variant?: "trees-birds" | "lighthouse" | "mountains-van" | "rolling-hills" | "clouds-trees" | "birds-minimal" | "hills";
  className?: string;
}

export function SectionDivider({ variant = "trees-birds", className = "" }: SectionDividerProps) {
  let assetName = "landscape_trees_birds.png";
  if (variant === "lighthouse" || variant === "clouds-trees") {
    assetName = "landscape_lighthouse.png";
  } else if (variant === "mountains-van" || variant === "hills") {
    assetName = "landscape_mountains_van.png";
  } else if (variant === "rolling-hills" || variant === "birds-minimal") {
    assetName = "landscape_rolling_hills.png";
  }

  return (
    <div className={`relative w-full max-w-5xl mx-auto my-10 md:my-14 px-4 select-none pointer-events-none ${className}`}>
      <div className="relative w-full flex items-center justify-center">
        <Image
          src={`/assets/${assetName}`}
          alt="Hand-drawn landscape divider"
          width={920}
          height={120}
          className="w-full max-h-16 object-contain object-center"
        />
      </div>
    </div>
  );
}
