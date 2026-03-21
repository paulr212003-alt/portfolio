"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Image Blur Classification",
    subheading: "Samsung Research Project",
    description:
      "Deep learning system for blur severity detection using MobileNetV2 and a production-grade PyTorch pipeline.",
    stack: ["MobileNetV2", "PyTorch", "CNN Architectures", "AdamW"],
    highlight: "Achieved ~90% validation accuracy on benchmark datasets.",
    link: "https://github.com/yourusername/image-blur-classification",
    hideLink: true,
  },
  {
    title: "Heart Disease Prediction using Synthetic Data Augmentation",
    description:
      "Synthetic data augmentation with GANs and ensemble model benchmarking for clinical risk prediction.",
    stack: ["GANs", "Logistic Regression", "SVC", "Random Forest", "GridSearchCV"],
    highlight: "Patent published under Government of India.",
    link: "https://github.com/yourusername/heart-disease-prediction",
    viewPatent: true,
  },
  {
    title: "Visitor Management System",
    description:
      "Secure visitor tracking system built for industrial operations and deployment workflows.",
    stack: ["Node.js", "Express", "MongoDB Atlas", "Render"],
    highlight: "Deployed on Render with analytics dashboards.",
    link: "https://github.com/paulr212003-alt/rico-visitor-portal",
    launchLink: "https://crash-pearl-three.vercel.app/index.html",
  },
];

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="py-12 md:py-16">
      <SectionHeader title="Projects" subtitle="Portfolio" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="glow-card neon-border group flex h-full flex-col bg-gradient-to-br from-white/5 via-white/0 to-indigo-500/10 p-6 transition duration-300 hover:shadow-[0_0_28px_rgba(99,102,241,0.35)] hover:from-indigo-500/15 hover:via-blue-500/5 hover:to-purple-500/20"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                {project.subheading ? (
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-indigo-200">
                    {project.subheading}
                  </p>
                ) : null}
              </div>
              <ArrowUpRight size={18} className="text-indigo-300" />
            </div>
            <p className="mt-3 text-sm text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-indigo-200">{project.highlight}</p>
            <div className="mt-auto pt-6">
              {project.launchLink ? (
                <a
                  href={project.launchLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group mb-4 flex w-[92%] items-center gap-4 rounded-full border border-sky-400/40 bg-black/70 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.35)] transition hover:border-sky-300 hover:shadow-[0_0_28px_rgba(56,189,248,0.55)] md:w-full"
                >
                  <span className="relative flex h-16 w-16 items-center justify-center">
                    <span className="absolute -inset-1 rounded-full border border-sky-400/60 shadow-[0_0_18px_rgba(56,189,248,0.35)]" />
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-300 via-sky-500 to-blue-600 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
                    <span className="absolute -top-2 left-1/2 h-4 w-8 -translate-x-1/2 rounded-full bg-sky-400/40 blur-sm transition group-hover:-top-3" />
                  <span className="relative text-[9px] font-bold tracking-[0.08em] leading-none text-black">
                    START
                  </span>
                </span>
                <span className="flex flex-col leading-tight">
                  <span>Launch Project</span>
                </span>
              </a>
            ) : null}
              {project.viewPatent ? (
                <a
                  href="#research"
                  className="inline-flex items-center rounded-md border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-indigo-100 transition hover:border-indigo-300 hover:bg-indigo-500/20"
                >
                  View Patent
                </a>
              ) : project.link && !project.hideLink ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-indigo-300 transition hover:text-indigo-100"
                >
                  <Github size={16} />
                  GitHub Repository
                </a>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
