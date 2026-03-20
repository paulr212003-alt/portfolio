"use client";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import { skillMetrics } from "./skillData";

type CapabilityRadarProps = {
  embedded?: boolean;
};

export default function CapabilityRadar({ embedded }: CapabilityRadarProps) {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(chartRef, { once: true, amount: 0.3 });
  const radarData = skillMetrics.map((skill) => ({
    subject: skill.axis,
    value: skill.value,
  }));

  const content = (
    <div className={embedded ? "p-6" : "glow-card neon-border p-6"}>
      <div ref={chartRef} className="h-80 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%" minHeight={280} minWidth={0}>
          <RadarChart data={radarData} outerRadius="78%">
            <PolarGrid stroke="rgba(148,163,184,0.35)" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: "#ffffff", fontSize: 11 }} />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={{ fill: "#94a3b8", fontSize: 9 }}
              tickCount={6}
            />
            <Radar
              dataKey="value"
              stroke="rgba(99,102,241,0.9)"
              strokeWidth={1.6}
              fill="rgba(99,102,241,0.25)"
              fillOpacity={0.25}
              dot={{ r: 2, fill: "#e2e8f0", strokeWidth: 0 }}
              isAnimationActive={isInView}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  if (embedded) {
    return content;
  }

  return (
    <AnimatedSection id="capabilities" className="py-12 md:py-16">
      <SectionHeader title="AI Capability Radar" subtitle="Signal Map" />
      {content}
    </AnimatedSection>
  );
}
