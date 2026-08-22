"use client";

import React from "react";
import {
  TreesBirdsDivider,
  LighthouseDivider,
  MountainsVanDivider,
  RollingHillsDivider,
} from "@/components/illustrations/LandscapeDividers";

interface SectionDividerProps {
  variant?: "trees-birds" | "lighthouse" | "mountains-van" | "rolling-hills" | "clouds-trees" | "birds-minimal" | "hills";
  className?: string;
}

export function SectionDivider({ variant = "trees-birds", className = "" }: SectionDividerProps) {
  const renderDivider = () => {
    switch (variant) {
      case "lighthouse":
      case "clouds-trees":
        return <LighthouseDivider />;
      case "mountains-van":
      case "hills":
        return <MountainsVanDivider />;
      case "rolling-hills":
      case "birds-minimal":
        return <RollingHillsDivider />;
      case "trees-birds":
      default:
        return <TreesBirdsDivider />;
    }
  };

  return (
    <div className={`relative w-full max-w-6xl lg:max-w-7xl mx-auto my-10 md:my-14 px-4 select-none pointer-events-none ${className}`}>
      <div className="relative w-full flex items-center justify-center text-[#111318]">
        {renderDivider()}
      </div>
    </div>
  );
}
