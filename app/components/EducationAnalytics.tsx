"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const data = [
  { label: "Class X", percent: 87.8 },
  { label: "Class XII", percent: 81.2 },
  { label: "B.Tech", cgpa: 8.94 },
];

export default function EducationAnalytics() {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(chartRef, { once: true, amount: 0.4 });

  return (
    <AnimatedSection id="education" className="py-16">
      <SectionHeader title="Education Analytics" subtitle="Performance" />
      <div className="glow-card neon-border p-6">
        <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
          <span>Academic Performance</span>
          <span className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-100">
            % / CGPA
          </span>
        </div>
        <div ref={chartRef} className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis
                dataKey="label"
                tick={{ fill: "#cbd5f5", fontSize: 12 }}
                axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
                tickLine={false}
              />
              <YAxis
                yAxisId="percent"
                tick={{ fill: "#cbd5f5", fontSize: 12 }}
                axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
                tickLine={false}
                domain={[0, 100]}
                tickCount={6}
              />
              <YAxis
                yAxisId="cgpa"
                orientation="right"
                tick={{ fill: "#cbd5f5", fontSize: 12 }}
                axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
                tickLine={false}
                domain={[0, 10]}
                tickCount={6}
              />
              <Tooltip
                cursor={{ fill: "rgba(99,102,241,0.15)" }}
                contentStyle={{
                  background: "rgba(10,10,10,0.9)",
                  border: "1px solid rgba(99,102,241,0.5)",
                  borderRadius: "12px",
                  color: "#e2e8f0",
                }}
                formatter={(
                  value: number | string,
                  name: string | number
                ): [string, string] => {
                  if (name === "CGPA") {
                    return [`${value} CGPA`, "CGPA"];
                  }
                  return [`${value}%`, "Percentage"];
                }}
              />
              <Bar
                yAxisId="percent"
                dataKey="percent"
                name="Percentage"
                fill="#8b5cf6"
                radius={[8, 8, 0, 0]}
                barSize={48}
                isAnimationActive={isInView}
              />
              <Bar
                yAxisId="cgpa"
                dataKey="cgpa"
                name="CGPA"
                fill="#3b82f6"
                radius={[8, 8, 0, 0]}
                barSize={48}
                isAnimationActive={isInView}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-sm text-slate-300">
          B.Tech Computer Science – VIT Vellore (8.94 CGPA)
        </p>
      </div>
    </AnimatedSection>
  );
}
