import React from "react";

export function SpeechBubble({
  text = "HEY!",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className="relative px-3.5 py-1.5 bg-[#FFFFFF] border-2 border-[#111318] rounded-2xl shadow-[2px_2px_0px_#111318] font-bold text-xs tracking-wider uppercase font-mono">
        {text}
        {/* Little bubble tail */}
        <div className="absolute -bottom-2 left-4 w-3 h-3 bg-[#FFFFFF] border-r-2 border-b-2 border-[#111318] rotate-45" />
      </div>
    </div>
  );
}
