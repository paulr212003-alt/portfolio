// @ts-nocheck
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

const series = [
  { key: "aiMl", color: "#a855f7" },
  { key: "deepLearning", color: "#fb923c" },
  { key: "sql", color: "#7dd3fc" },
  { key: "os", color: "#86efac" },
  { key: "oops", color: "#facc15" },
];

const data = [
  {
    subject: "AI/ML",
    aiMl: 90,
    deepLearning: 90,
    sql: 90,
    os: 90,
    oops: 90,
  },
  {
    subject: "Deep Learning",
    aiMl: 80,
    deepLearning: 80,
    sql: 80,
    os: 80,
    oops: 80,
  },
  {
    subject: "SQL",
    aiMl: 75,
    deepLearning: 75,
    sql: 75,
    os: 75,
    oops: 75,
  },
  {
    subject: "OS",
    aiMl: 85,
    deepLearning: 85,
    sql: 85,
    os: 85,
    oops: 85,
  },
  {
    subject: "OOPS (C++)",
    aiMl: 80,
    deepLearning: 80,
    sql: 80,
    os: 80,
    oops: 80,
  },
];

const subjectColors: Record<string, string> = {
  "AI/ML": "#a855f7",
  "Deep Learning": "#fb923c",
  SQL: "#7dd3fc",
  OS: "#86efac",
  "OOPS (C++)": "#facc15",
};

type CapabilityRadarProps = {
  embedded?: boolean;
};

export default function CapabilityRadar({ embedded }: CapabilityRadarProps) {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(chartRef, { once: true, amount: 0.3 });
  const angleTick = (props: any) => {
    const { payload, x, y, textAnchor } = props as {
      payload?: { value?: string };
      x?: number | string;
      y?: number | string;
      textAnchor?: string;
    };
    if (!payload?.value) return null;
    const anchor =
      textAnchor === "start" || textAnchor === "middle" || textAnchor === "end"
        ? textAnchor
        : "middle";
    return (
      <text
        x={x}
        y={y}
        textAnchor={anchor}
        dominantBaseline="middle"
        fill={subjectColors[payload.value] ?? "#e2e8f0"}
        fontSize={11}
      >
        {payload.value}
      </text>
    );
  };

  const content = (
    <div className={embedded ? "p-6" : "glow-card neon-border p-6"}>
      <div ref={chartRef} className="h-80 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%" minHeight={280} minWidth={0}>
          <RadarChart data={data} outerRadius="78%">
            <PolarGrid stroke="rgba(148,163,184,0.35)" />
            <PolarAngleAxis
              dataKey="subject"
              tick={angleTick}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={{ fill: "#94a3b8", fontSize: 9 }}
              tickCount={6}
            />
            {series.map((entry, index) => (
              <Radar
                key={entry.key}
                dataKey={entry.key}
                stroke={entry.color}
                strokeWidth={1.6}
                fill={entry.color}
                fillOpacity={0.12}
                dot={
                  index === 0
                    ? { r: 2, fill: "#e2e8f0", strokeWidth: 0 }
                    : false
                }
                isAnimationActive={isInView}
              />
            ))}
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  if (embedded) {
    return content;
  }

  return (
    <AnimatedSection id="capabilities" className="py-16">
      <SectionHeader title="AI Capability Radar" subtitle="Signal Map" />
      {content}
    </AnimatedSection>
  );
}
