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
    axis: "DL",
    value: 85,
  },
  {
    key: "operating-systems",
    label: "Operating Systems",
    axis: "OS",
    value: 80,
  },
  {
    key: "oops",
    label: "OOPS (C++)",
    axis: "OOPS (C++)",
    value: 85,
  },
  {
    key: "sql",
    label: "SQL",
    axis: "SQL",
    value: 70,
  },
];
