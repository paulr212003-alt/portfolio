"use client";

export type SkillMetric = {
  key: string;
  label: string;
  axis: string;
  value: number;
};

export const skillMetrics: SkillMetric[] = [
  {
    key: "ai-ml",
    label: "Machine Learning",
    axis: "AI/ML",
    value: 90,
  },
  {
    key: "deep-learning",
    label: "Deep Learning",
    axis: "Deep Learning",
    value: 85,
  },
  {
    key: "operating-systems",
    label: "Operating Systems",
    axis: "OS",
    value: 85,
  },
  {
    key: "oops",
    label: "OOPS (C++)",
    axis: "OOPS (C++)",
    value: 80,
  },
  {
    key: "sql",
    label: "SQL",
    axis: "SQL",
    value: 80,
  },
];
