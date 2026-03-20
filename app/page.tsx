 "use client";

import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import CareerTimeline from "./components/CareerTimeline";
import ContactSection from "./components/ContactSection";
import EducationAnalytics from "./components/EducationAnalytics";
import HeroSection from "./components/HeroSection";
import PatentShowcase from "./components/PatentShowcase";
import ProjectsSection from "./components/ProjectsSection";
import SkillRadarSection from "./components/SkillRadarSection";
import SkillsDistribution from "./components/SkillsDistribution";
import TopBar from "./components/TopBar";

export default function Home() {
  const [aiMode, setAiMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedAi = window.localStorage.getItem("portfolio-ai");
    if (storedAi) {
      setAiMode(storedAi === "on");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.dataset.ai = aiMode ? "on" : "off";
    window.localStorage.setItem("portfolio-ai", aiMode ? "on" : "off");
  }, [aiMode, mounted]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--theme-bg)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(120deg, var(--theme-surface), var(--theme-bg))",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at top, var(--theme-ambient-1), transparent 55%), radial-gradient(circle at 30% 30%, var(--theme-ambient-2), transparent 45%), radial-gradient(circle at 80% 70%, var(--theme-ambient-3), transparent 50%)",
        }}
      />
      <TopBar aiMode={aiMode} onAiModeChange={setAiMode} />
      <main className="relative flex w-full flex-col gap-10 px-2 pb-24 sm:px-4 lg:px-8 md:gap-12">
        <div className="flex flex-col gap-6">
          <HeroSection aiMode={aiMode} onAiModeChange={setAiMode} />
          {aiMode ? (
            <div className="md:hidden">
              <AboutSection />
            </div>
          ) : null}
          <div className="hidden md:block">
            <AboutSection />
          </div>
        </div>
        <CareerTimeline />
        <ProjectsSection />
        <PatentShowcase />
        <EducationAnalytics />
        <SkillsDistribution />
        <SkillRadarSection />
        <ContactSection />
      </main>
    </div>
  );
}
