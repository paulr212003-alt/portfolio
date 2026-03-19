"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const strengths = [
  { label: "Machine Learning", value: 90 },
  { label: "Deep Learning", value: 85 },
  { label: "Backend Development", value: 78 },
  { label: "Data Analytics", value: 82 },
];

type SkillProgressProps = {
  embedded?: boolean;
};

export default function SkillProgress({ embedded }: SkillProgressProps) {
  const content = (
    <div className={embedded ? "p-6" : "glow-card neon-border p-6"}>
      <div className="space-y-5">
        {strengths.map((skill) => (
          <div key={skill.label}>
            <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
              <span>{skill.label}</span>
              <span className="text-indigo-200">{skill.value}%</span>
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
    <AnimatedSection id="progress" className="py-16">
      <SectionHeader title="Skill Progress" subtitle="Strength Index" />
      {content}
    </AnimatedSection>
  );
}
