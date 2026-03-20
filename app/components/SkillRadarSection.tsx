"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import CapabilityRadar from "./CapabilityRadar";
import SkillProgress from "./SkillProgress";

export default function SkillRadarSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <AnimatedSection id="skill-intel" className="py-12 md:py-16">
      <SectionHeader title="Skill Intelligence" subtitle="Capabilities" />
      <div className="glow-card neon-border overflow-hidden">
        <div className="grid divide-y divide-white/10 lg:grid-cols-2 lg:divide-y-0 lg:divide-x">
          <SkillProgress
            embedded
            activeSkill={activeSkill}
            onSkillSelect={setActiveSkill}
          />
          <CapabilityRadar embedded activeSkill={activeSkill} />
        </div>
      </div>
    </AnimatedSection>
  );
}
