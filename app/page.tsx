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
      <TopBar />
      <main className="relative flex w-full flex-col gap-12 px-2 pb-24 sm:px-4 lg:px-8">
        <div className="flex flex-col gap-6">
          <HeroSection />
          <AboutSection />
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
