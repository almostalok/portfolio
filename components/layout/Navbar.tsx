"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.1 },
      colors: ["#F4C400", "#111318", "#F6F6F2"],
    });
  };

  const navLinks = [
    { label: "PRODUCTS", href: "#products" },
    { label: "BLOGS", href: "#blogs" },
    { label: "SOCIAL", href: "#social" },
    { label: "ORGS", href: "#organizations" },
    { label: "ABOUT", href: "#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-[#D9D9D4] py-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center font-display font-black text-2xl tracking-tight text-[#111318]"
          >
            <span>almostalok</span>
            <span className="text-[#F4C400] text-3xl leading-none inline-block transition-transform duration-200 group-hover:scale-125">
              .
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-medium tracking-wider text-[#111318]">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative py-1 hover:text-[#111318] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F4C400] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={triggerConfetti}
              data-cursor="SAY HI"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#111318] text-white text-xs font-mono font-medium tracking-wide hover:bg-[#282A30] hover:shadow-[0_2px_8px_rgba(17,19,24,0.2)] transition-all duration-200 active:scale-95"
            >
              <span>SAY HI</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F4C400]" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#D9D9D4] bg-white text-[#111318] hover:bg-[#F6F6F2] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Editorial Fullscreen Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white/95 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono text-[#686868] uppercase tracking-widest border-b border-[#D9D9D4] pb-2">
              Navigation
            </span>
            {navLinks.map((item, idx) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-display font-bold tracking-tight text-[#111318] hover:text-[#F4C400] flex items-center justify-between transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-sm font-mono text-[#686868]">0{idx + 1}</span>
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-[#D9D9D4] flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                triggerConfetti();
              }}
              className="w-full text-center py-3 bg-[#F4C400] text-[#111318] font-bold font-mono rounded-xl border border-[#111318] shadow-[2px_2px_0px_#111318] active:translate-y-0.5 active:shadow-none"
            >
              SAY HI →
            </a>
            <p className="text-xs text-center font-mono text-[#686868]">
              © 2026 Alok Singh · Built with curiosity
            </p>
          </div>
        </div>
      )}
    </>
  );
}
