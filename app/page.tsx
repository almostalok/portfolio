import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { CustomCursor } from "@/components/ui/CustomCursor";

import { HeroSection } from "@/components/sections/HeroSection";
import { QuickStats } from "@/components/sections/QuickStats";
import { IntroSection } from "@/components/sections/IntroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { ProductAnatomy } from "@/components/sections/ProductAnatomy";
import { EngineeringSection } from "@/components/sections/EngineeringSection";
import { BuildLogAndGithub } from "@/components/sections/BuildLogAndGithub";
import { ExperimentsSection } from "@/components/sections/ExperimentsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { OrganizationsSection } from "@/components/sections/OrganizationsSection";
import { CurrentlySection } from "@/components/sections/CurrentlySection";
import { PersonalStatement } from "@/components/sections/PersonalStatement";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#111318] flex flex-col selection:bg-[#F4C400] selection:text-[#111318]">
      {/* Desktop Contextual Cursor */}
      <CustomCursor />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* 01 HERO SECTION */}
      <HeroSection />

      {/* Landscape Motif Divider */}
      <SectionDivider variant="trees-birds" />

      {/* INTRO — Dynamic Status & Typewriter */}
      <IntroSection />

      {/* 02 QUICK STATS */}
      <QuickStats />

      {/* 03 BUILD / ORGANIZE / EXPERIMENT */}
      <PhilosophySection />

      {/* Landscape Motif Divider */}
      <SectionDivider variant="clouds-trees" />

      {/* 04 FEATURED PRODUCTS */}
      <FeaturedProducts />

      {/* 05 PRODUCT ANATOMY */}
      <ProductAnatomy />

      {/* Landscape Motif Divider */}
      <SectionDivider variant="birds-minimal" />

      {/* 06 ENGINEERING / WHAT'S UNDER THE HOOD */}
      <EngineeringSection />

      {/* 07 BUILD LOG & 08 GITHUB SNAPSHOT */}
      <BuildLogAndGithub />

      {/* Landscape Motif Divider */}
      <SectionDivider variant="hills" />

      {/* 09 EXPERIMENTS & SIDE QUESTS */}
      <ExperimentsSection />

      {/* 10 BLOGS */}
      <BlogSection />

      {/* Landscape Motif Divider */}
      <SectionDivider variant="trees-birds" />

      {/* 11 SOCIAL MEDIA */}
      <SocialSection />

      {/* 12 ORGANIZATIONS & COMMUNITY */}
      <OrganizationsSection />

      {/* 13 CURRENTLY & 14 FAILED EXPERIMENTS */}
      <CurrentlySection />

      {/* 15 PERSONAL STATEMENT */}
      <PersonalStatement />

      {/* Landscape Motif Divider */}
      <SectionDivider variant="birds-minimal" />

      {/* 16 CONTACT */}
      <ContactSection />

      {/* 17 FOOTER */}
      <Footer />
    </main>
  );
}
