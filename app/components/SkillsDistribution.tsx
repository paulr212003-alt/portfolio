"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const technicalSkills = [
  { name: "Machine Learning", value: 20 },
  { name: "Deep Learning", value: 18 },
  { name: "Artificial Intelligence", value: 15 },
  { name: "SQL", value: 12 },
  { name: "Operating Systems", value: 10 },
  { name: "C++", value: 12 },
  { name: "OOPS", value: 13 },
];

const softSkills = [
  { name: "Communication", value: 22 },
  { name: "Problem Solving", value: 22 },
  { name: "Adaptability", value: 18 },
  { name: "Time Management", value: 18 },
  { name: "Teamwork", value: 20 },
];

const COLORS = [
  "#8b5cf6",
  "#3b82f6",
  "#6366f1",
  "#7c3aed",
  "#22d3ee",
  "#60a5fa",
  "#a78bfa",
];

export default function SkillsDistribution() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeTechIndex, setActiveTechIndex] = useState<number | null>(null);

  return (
    <AnimatedSection id="skills" className="py-12 md:py-16">
      <SectionHeader title="Skills Distribution" subtitle="Expertise" />
      <div ref={sectionRef} className="grid gap-6 lg:grid-cols-2">
        <div className="glow-card neon-border p-6">
          <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
            <span>Technical Skills</span>
            <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs text-purple-100">
              % Share
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="h-64 w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%" minHeight={240} minWidth={0}>
                <PieChart>
                  <Pie
                    data={technicalSkills}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={55}
                    outerRadius={90}
                    paddingAngle={4}
                    stroke="rgba(0,0,0,0)"
                    isAnimationActive={isInView}
                    activeIndex={activeTechIndex ?? undefined}
                    onMouseEnter={(_, index) => setActiveTechIndex(index)}
                    onMouseLeave={() => setActiveTechIndex(null)}
                    onClick={(_, index) => setActiveTechIndex(index)}
                  >
                    {technicalSkills.map((entry, index) => (
                      <Cell
                        key={`cell-${entry.name}`}
                        fill={COLORS[index % COLORS.length]}
                        fillOpacity={
                          activeTechIndex !== null && activeTechIndex !== index
                            ? 0.35
                            : 1
                        }
                        stroke={activeTechIndex === index ? "#ffffff" : "transparent"}
                        strokeWidth={activeTechIndex === index ? 2 : 0}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "rgba(10,10,10,0.9)",
                      border: "1px solid rgba(99,102,241,0.5)",
                      borderRadius: "12px",
                      color: "#e2e8f0",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {technicalSkills.map((item, index) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm text-slate-200">{item.name}</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{item.value}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="glow-card neon-border p-6">
            <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
              <span>Soft Skills</span>
              <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs text-purple-100">
                % Share
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
              <div className="h-64 w-full min-w-0">
                <ResponsiveContainer width="100%" height="100%" minHeight={240} minWidth={0}>
                  <PieChart>
                    <Pie
                      data={softSkills}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={55}
                      outerRadius={90}
                      paddingAngle={4}
                      stroke="rgba(0,0,0,0)"
                      isAnimationActive={isInView}
                    >
                      {softSkills.map((entry, index) => (
                        <Cell
                          key={`cell-${entry.name}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        background: "rgba(10,10,10,0.9)",
                        border: "1px solid rgba(99,102,241,0.5)",
                        borderRadius: "12px",
                        color: "#e2e8f0",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {softSkills.map((item, index) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span className="text-sm text-slate-200">{item.name}</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-400">{item.value}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
