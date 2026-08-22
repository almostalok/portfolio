"use client";

import React from "react";

interface DividerSvgProps {
  className?: string;
}

export function TreesBirdsDivider({ className = "" }: DividerSvgProps) {
  return (
    <svg
      viewBox="0 0 1400 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-14 md:h-20 overflow-visible select-none ${className}`}
      preserveAspectRatio="none"
    >
      {/* Distant rolling hills (dashed) */}
      <path
        d="M0 64 C200 52, 400 68, 600 56 C800 44, 1000 66, 1200 54 C1300 48, 1350 56, 1400 58"
        stroke="#D9D9D4"
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />

      {/* Main ground horizon line extending 100% across screen */}
      <path
        d="M0 68 C180 66, 360 72, 540 65 C720 58, 900 70, 1080 64 C1240 58, 1340 68, 1400 66"
        stroke="#111318"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Subtle Yellow Accent ground glow */}
      <path
        d="M200 68 C350 63, 500 67, 650 64"
        stroke="#F4C400"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M850 67 C1000 62, 1150 66, 1300 64"
        stroke="#F4C400"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Left Far Cluster (Pines & Oaks) */}
      <g transform="translate(60, 0)">
        <path d="M40 67V44" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M40 34C32 34 28 40 28 46C26 48 26 52 30 54C34 56 46 56 50 54C54 52 54 48 52 46C52 40 48 34 40 34Z"
          fill="#FFFFFF"
          stroke="#111318"
          strokeWidth="1.8"
        />
        <path d="M36 42C38 40 42 40 44 42" stroke="#F4C400" strokeWidth="1.4" strokeLinecap="round" />

        {/* Pine */}
        <path d="M68 66V48" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
        <path d="M68 28L58 42H78L68 28Z" fill="#FFFFFF" stroke="#111318" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M68 38L54 52H82L68 38Z" fill="#FFFFFF" stroke="#111318" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M68 32V36M64 46L68 42L72 46" stroke="#F4C400" strokeWidth="1.4" strokeLinecap="round" />

        {/* Small Tree */}
        <path d="M92 68V54" stroke="#111318" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="92" cy="48" r="7" fill="#FFFFFF" stroke="#111318" strokeWidth="1.8" />
        <circle cx="92" cy="48" r="3" fill="#FFF7D1" stroke="#F4C400" strokeWidth="1.2" />
      </g>

      {/* Center Left Birds */}
      <g transform="translate(320, 18) scale(0.8)">
        <path d="M2 14C5 8 10 4 15 10C16 11 17 11 18 10C23 4 27 8 30 14" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 10C16 13 17 15 18 17" stroke="#F4C400" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      <g transform="translate(360, 10) scale(0.6)">
        <path d="M2 14C5 8 10 4 15 10C16 11 17 11 18 10C23 4 27 8 30 14" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g transform="translate(395, 22) scale(0.55)">
        <path d="M2 14C5 8 10 4 15 10C16 11 17 11 18 10C23 4 27 8 30 14" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Golden Sunshine in center */}
      <circle cx="700" cy="24" r="10" fill="#FFF7D1" stroke="#F4C400" strokeWidth="1.8" />
      <path d="M700 8V12M700 36V40M684 24H688M712 24H716" stroke="#F4C400" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M689 13L692 16M708 32L711 35M711 13L708 16M689 35L692 32" stroke="#F4C400" strokeWidth="1.2" strokeLinecap="round" />

      {/* Center Grass Tufts */}
      <path d="M520 66L522 58M524 66L528 56M528 66L534 60" stroke="#111318" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M880 66L882 59M885 66L889 57M888 66L893 61" stroke="#111318" strokeWidth="1.6" strokeLinecap="round" />

      {/* Center Right Birds */}
      <g transform="translate(960, 14) scale(0.85)">
        <path d="M2 14C5 8 10 4 15 10C16 11 17 11 18 10C23 4 27 8 30 14" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 10C16 13 17 15 18 17" stroke="#F4C400" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      <g transform="translate(1005, 8) scale(0.65)">
        <path d="M2 14C5 8 10 4 15 10C16 11 17 11 18 10C23 4 27 8 30 14" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g transform="translate(1045, 20) scale(0.5)">
        <path d="M2 14C5 8 10 4 15 10C16 11 17 11 18 10C23 4 27 8 30 14" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Right Tree Cluster */}
      <g transform="translate(1180, 0)">
        {/* Pine */}
        <path d="M40 62V46" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 24L30 38H50L40 24Z" fill="#FFFFFF" stroke="#111318" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M40 34L26 48H54L40 34Z" fill="#FFFFFF" stroke="#111318" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M40 28V32M36 42L40 38L44 42" stroke="#F4C400" strokeWidth="1.4" strokeLinecap="round" />

        {/* Oak */}
        <path d="M70 64V44" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M70 32C62 32 58 38 58 44C56 46 56 50 60 52C64 54 76 54 80 52C84 50 84 46 82 44C82 38 78 32 70 32Z"
          fill="#FFFFFF"
          stroke="#111318"
          strokeWidth="1.8"
        />
        <path d="M66 40C68 38 72 38 74 40" stroke="#F4C400" strokeWidth="1.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function LighthouseDivider({ className = "" }: DividerSvgProps) {
  return (
    <svg
      viewBox="0 0 1400 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-14 md:h-20 overflow-visible select-none ${className}`}
      preserveAspectRatio="none"
    >
      {/* Water Horizon */}
      <path
        d="M0 66 C250 63, 500 68, 750 64 C1000 60, 1200 67, 1400 65"
        stroke="#111318"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Ocean Wave lines */}
      <path d="M180 72 C220 70, 260 74, 300 72" stroke="#D9D9D4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M480 71 C520 69, 560 73, 600 71" stroke="#F4C400" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M780 73 C820 71, 860 75, 900 73" stroke="#D9D9D4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1080 72 C1120 70, 1160 74, 1200 72" stroke="#F4C400" strokeWidth="1.5" strokeLinecap="round" />

      {/* Rocky Coastline on Left */}
      <path
        d="M60 68L90 52L125 48L160 56L200 68H60Z"
        fill="#FFFFFF"
        stroke="#111318"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Lighthouse Tower */}
      <path
        d="M106 48L112 18H132L138 48H106Z"
        fill="#FFFFFF"
        stroke="#111318"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M109 38H135" stroke="#F4C400" strokeWidth="3.5" />
      <path d="M111 28H133" stroke="#111318" strokeWidth="2.5" />

      {/* Lighthouse Lantern & Roof */}
      <rect x="115" y="12" width="14" height="6" fill="#FFF7D1" stroke="#111318" strokeWidth="1.6" />
      <path d="M112 12L122 4L132 12H112Z" fill="#111318" stroke="#111318" strokeWidth="1.6" strokeLinejoin="round" />

      {/* Light Beams across the sky */}
      <path d="M132 15 L500 2 L530 14 L132 17" fill="#FFF7D1" fillOpacity="0.7" stroke="#F4C400" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* Sailboat */}
      <g transform="translate(680, 44) scale(0.9)">
        <path d="M0 16L6 22H28L34 16H0Z" fill="#FFFFFF" stroke="#111318" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M16 16V2L4 14H16Z" fill="#FFFFFF" stroke="#111318" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M18 16V6L28 14H18Z" fill="#FFF7D1" stroke="#F4C400" strokeWidth="1.6" strokeLinejoin="round" />
      </g>

      {/* Clouds in sky */}
      <g transform="translate(900, 16) scale(0.7)">
        <path
          d="M8 22H36C40 22 42 19 41 15C40 11 36 10 33 11C31 6 25 3 20 5C16 7 14 10 14 13C11 12 6 14 6 18C6 21 8 22 8 22Z"
          fill="#FFFFFF"
          stroke="#111318"
          strokeWidth="1.8"
        />
        <path d="M14 18C16 17 19 17 21 18" stroke="#F4C400" strokeWidth="1.4" strokeLinecap="round" />
      </g>

      {/* Flying Seagulls */}
      <g transform="translate(480, 24) scale(0.65)">
        <path d="M2 14C5 8 10 4 15 10C16 11 17 11 18 10C23 4 27 8 30 14" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g transform="translate(530, 16) scale(0.5)">
        <path d="M2 14C5 8 10 4 15 10C16 11 17 11 18 10C23 4 27 8 30 14" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function MountainsVanDivider({ className = "" }: DividerSvgProps) {
  return (
    <svg
      viewBox="0 0 1400 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-14 md:h-20 overflow-visible select-none ${className}`}
      preserveAspectRatio="none"
    >
      {/* Background Mountain Peaks */}
      <path
        d="M100 66L240 18L360 52L520 12L680 58L820 22L980 56L1140 16L1300 68"
        stroke="#D9D9D4"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Mountain Snowcaps */}
      <path d="M240 18L224 28L240 24L256 28L240 18Z" fill="#FFF7D1" stroke="#F4C400" strokeWidth="1.4" />
      <path d="M520 12L504 24L520 20L536 24L520 12Z" fill="#FFF7D1" stroke="#F4C400" strokeWidth="1.4" />
      <path d="M1140 16L1124 26L1140 22L1156 26L1140 16Z" fill="#FFF7D1" stroke="#F4C400" strokeWidth="1.4" />

      {/* Foreground Mountain Ridges */}
      <path
        d="M0 68L180 36L340 62L500 30L680 66L880 34L1080 64L1240 38L1400 68"
        stroke="#111318"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Pine Trees along ridges */}
      <g transform="translate(170, 38) scale(0.65)">
        <path d="M10 0L0 16H20L10 0Z" fill="#FFFFFF" stroke="#111318" strokeWidth="2" />
        <path d="M10 10L0 26H20L10 10Z" fill="#FFFFFF" stroke="#111318" strokeWidth="2" />
      </g>
      <g transform="translate(490, 32) scale(0.65)">
        <path d="M10 0L0 16H20L10 0Z" fill="#FFFFFF" stroke="#111318" strokeWidth="2" />
        <path d="M10 10L0 26H20L10 10Z" fill="#FFFFFF" stroke="#111318" strokeWidth="2" />
      </g>
      <g transform="translate(870, 36) scale(0.65)">
        <path d="M10 0L0 16H20L10 0Z" fill="#FFFFFF" stroke="#111318" strokeWidth="2" />
        <path d="M10 10L0 26H20L10 10Z" fill="#FFFFFF" stroke="#111318" strokeWidth="2" />
      </g>
      <g transform="translate(1230, 40) scale(0.65)">
        <path d="M10 0L0 16H20L10 0Z" fill="#FFFFFF" stroke="#111318" strokeWidth="2" />
        <path d="M10 10L0 26H20L10 10Z" fill="#FFFFFF" stroke="#111318" strokeWidth="2" />
      </g>

      {/* Highway Road across screen */}
      <path d="M0 72H1400" stroke="#111318" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M60 72H120M220 72H280M380 72H440M540 72H600M700 72H760M860 72H920M1020 72H1080M1180 72H1240M1320 72H1380" stroke="#F4C400" strokeWidth="1.8" strokeLinecap="round" />

      {/* Camper Van on Road */}
      <g transform="translate(710, 48) scale(0.9)">
        <rect x="0" y="4" width="44" height="20" rx="3" fill="#FFFFFF" stroke="#111318" strokeWidth="1.8" />
        <path d="M0 15H44" stroke="#F4C400" strokeWidth="2.5" />
        <path d="M30 6H40L42 13H30V6Z" fill="#FFF7D1" stroke="#111318" strokeWidth="1.4" />
        <rect x="4" y="6" width="10" height="7" rx="1" fill="#F6F6F2" stroke="#111318" strokeWidth="1.4" />
        <rect x="17" y="6" width="10" height="7" rx="1" fill="#F6F6F2" stroke="#111318" strokeWidth="1.4" />
        <path d="M4 2H36" stroke="#111318" strokeWidth="1.4" strokeLinecap="round" />
        <ellipse cx="20" cy="1" rx="14" ry="2" fill="#F4C400" stroke="#111318" strokeWidth="1.2" />
        <circle cx="10" cy="24" r="4" fill="#111318" />
        <circle cx="10" cy="24" r="1.5" fill="#FFFFFF" />
        <circle cx="34" cy="24" r="4" fill="#111318" />
        <circle cx="34" cy="24" r="1.5" fill="#FFFFFF" />
        <path d="M44 18L72 14L74 22L44 20" fill="#FFF7D1" fillOpacity="0.6" stroke="#F4C400" strokeWidth="1" strokeDasharray="2 2" />
      </g>
    </svg>
  );
}

export function RollingHillsDivider({ className = "" }: DividerSvgProps) {
  return (
    <svg
      viewBox="0 0 1400 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-14 md:h-20 overflow-visible select-none ${className}`}
      preserveAspectRatio="none"
    >
      {/* Distant Hills (dashed) */}
      <path
        d="M0 58 C220 38, 440 68, 700 44 C960 20, 1180 62, 1400 48"
        stroke="#D9D9D4"
        strokeWidth="1.4"
        strokeDasharray="4 4"
      />

      {/* Main Rolling Horizon */}
      <path
        d="M0 66 C200 48, 400 72, 620 52 C840 32, 1080 70, 1280 54 C1340 50, 1370 54, 1400 58"
        stroke="#111318"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Yellow Dotted Trail spanning hills */}
      <path
        d="M100 66 C260 56, 420 70, 600 54 C800 38, 1000 64, 1200 56 C1290 52, 1340 60, 1400 62"
        stroke="#F4C400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />

      {/* Windmill */}
      <g transform="translate(580, 26) scale(0.9)">
        <path d="M8 28L12 12H16L20 28H8Z" fill="#FFFFFF" stroke="#111318" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="14" cy="12" r="2" fill="#F4C400" stroke="#111318" strokeWidth="1.4" />
        <path d="M14 12L2 4M14 12L26 20M14 12L6 24M14 12L22 0" stroke="#111318" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      {/* Trees on Hilltops */}
      <g transform="translate(280, 50) scale(0.7)">
        <circle cx="10" cy="10" r="8" fill="#FFFFFF" stroke="#111318" strokeWidth="2" />
        <path d="M10 18V24" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 10C8 8 12 8 14 10" stroke="#F4C400" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <g transform="translate(1040, 48) scale(0.8)">
        <circle cx="10" cy="10" r="8" fill="#FFFFFF" stroke="#111318" strokeWidth="2" />
        <path d="M10 18V24" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 10C8 8 12 8 14 10" stroke="#F4C400" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Birds */}
      <g transform="translate(1120, 20) scale(0.75)">
        <path d="M2 14C5 8 10 4 15 10C16 11 17 11 18 10C23 4 27 8 30 14" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g transform="translate(1160, 14) scale(0.6)">
        <path d="M2 14C5 8 10 4 15 10C16 11 17 11 18 10C23 4 27 8 30 14" stroke="#111318" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
