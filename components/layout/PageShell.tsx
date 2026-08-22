"use client";

import React, { useState, useCallback } from "react";
import { SplashScreen } from "@/components/ui/SplashScreen";

export function PageShell({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
    // Small delay to let the exit animation finish cleanly
    setTimeout(() => setContentVisible(true), 100);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div
        className={`transition-opacity duration-500 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ visibility: showSplash && !contentVisible ? "hidden" : "visible" }}
      >
        {children}
      </div>
    </>
  );
}
