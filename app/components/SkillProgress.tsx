"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import { skillMetrics } from "./skillData";

type SkillProgressProps = {
  embedded?: boolean;
  activeSkill?: string | null;
  onSkillSelect?: (key: string | null) => void;
};

export default function SkillProgress({
  embedded,
  activeSkill,
  onSkillSelect,
}: SkillProgressProps) {
  const content = (
    <div className={embedded ? "p-6" : "glow-card neon-border p-6"}>
      <div className="space-y-5">
        {skillMetrics.map((skill) => (
          <div
            key={skill.label}
            className={`rounded-xl border px-3 py-2 transition ${
              activeSkill === skill.key
                ? "border-indigo-300/60 bg-indigo-500/10 shadow-[0_0_16px_rgba(99,102,241,0.35)]"
                : "border-white/5"
            }`}
            onClick={() =>
              onSkillSelect?.(activeSkill === skill.key ? null : skill.key)
            }
            onMouseEnter={() => onSkillSelect?.(skill.key)}
            onMouseLeave={() => onSkillSelect?.(null)}
            role="button"
            tabIndex={0}
          >
            <div className="mb-2 flex items-center justify-between text-sm text-white">
              <span>{skill.label}</span>
              <span className="text-white">{skill.value}%</span>
            </div>
            <div className="h-3 w-full rounded-full bg-white/5">
              <motion.div
                className="h-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 shadow-[0_0_18px_rgba(99,102,241,0.6)]"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (embedded) {
    return content;
  }

  return (
    <AnimatedSection id="progress" className="py-12 md:py-16">
      <SectionHeader title="Skill Progress" subtitle="Strength Index" />
      {content}
    </AnimatedSection>
  );
}
