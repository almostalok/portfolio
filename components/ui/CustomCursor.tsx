"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check element under cursor for custom cursor dataset
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (target) {
        const text = target.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        // Check if hovering a normal link/button
        const isInteractive = (e.target as HTMLElement)?.closest("a, button, input, [role='button']");
        if (isInteractive) {
          setCursorText("→");
          setIsHovered(true);
        } else {
          setCursorText("");
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMouse);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!mounted || isTouch || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 400,
        mass: 0.1,
      }}
    >
      <motion.div
        animate={{
          scale: isHovered ? (cursorText ? 1.5 : 1.2) : 1,
          backgroundColor: isHovered ? "#F4C400" : "#111318",
          color: "#111318",
        }}
        transition={{ duration: 0.15 }}
        className={`flex items-center justify-center rounded-full transition-all duration-150 ${
          cursorText
            ? "px-3 py-1.5 h-auto text-[10px] font-bold font-mono border border-[#111318] shadow-sm tracking-wider"
            : "w-3 h-3"
        }`}
      >
        {cursorText && (
          <span className="select-none leading-none uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
