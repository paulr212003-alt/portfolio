"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import CapabilityRadar from "./CapabilityRadar";
import SkillProgress from "./SkillProgress";

export default function SkillRadarSection() {
  return (
    <AnimatedSection id="skill-intel" className="py-16">
      <SectionHeader title="Skill Intelligence" subtitle="Capabilities" />
      <div className="glow-card neon-border overflow-hidden">
        <div className="grid divide-y divide-white/10 lg:grid-cols-2 lg:divide-y-0 lg:divide-x">
          <SkillProgress embedded />
          <CapabilityRadar embedded />
        </div>
      </div>
    </AnimatedSection>
  );
}
