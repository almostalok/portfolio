import React from "react";

interface HandUnderlineProps {
  className?: string;
  color?: string;
}

export function HandUnderline({ className = "w-full h-3", color = "#F4C400" }: HandUnderlineProps) {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={`overflow-visible ${className}`}
    >
      <path
        d="M2 7C40 2 120 1 198 8"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hand-drawn-line"
      />
      {/* Secondary accent stroke */}
      <path
        d="M15 9C70 6 140 7 185 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

export function HandHighlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute -bottom-1 left-0 right-0 h-3 bg-[#F4C400] -rotate-1 rounded-sm -z-0 opacity-80"
        style={{ transformOrigin: "left center" }}
      />
    </span>
  );
}

export function HandCircle({ className = "w-full h-full", color = "#F4C400" }: HandUnderlineProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 pointer-events-none overflow-visible ${className}`}
    >
      <path
        d="M50 8C20 8 6 25 8 55C10 82 28 94 56 92C84 90 95 72 93 45C91 20 75 6 45 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 2"
      />
    </svg>
  );
}
