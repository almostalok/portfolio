import React from "react";

interface MockupWindowProps {
  children: React.ReactNode;
  title?: string;
  url?: string;
  theme?: "light" | "dark";
  className?: string;
}

export function MockupWindow({
  children,
  title,
  url,
  theme = "light",
  className = "",
}: MockupWindowProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`rounded-xl border ${
        isDark
          ? "bg-[#111318] border-[#282A30] text-white shadow-xl"
          : "bg-white border-[#D9D9D4] text-[#111318] shadow-sm"
      } overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Window Titlebar */}
      <div
        className={`flex items-center justify-between px-3 py-2 border-b text-xs select-none ${
          isDark ? "border-[#282A30] bg-[#171920]" : "border-[#EFEFEA] bg-[#FAFAF8]"
        }`}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
        </div>

        {url ? (
          <div
            className={`px-3 py-0.5 rounded text-[10px] font-mono tracking-tight max-w-[200px] truncate ${
              isDark ? "bg-[#111318] text-[#8E929E]" : "bg-white text-[#686868] border border-[#E8E8E2]"
            }`}
          >
            {url}
          </div>
        ) : title ? (
          <span className={`text-[11px] font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            {title}
          </span>
        ) : null}

        <div className="w-8" />
      </div>

      {/* Content Body */}
      <div className="p-3 md:p-4">{children}</div>
    </div>
  );
}
