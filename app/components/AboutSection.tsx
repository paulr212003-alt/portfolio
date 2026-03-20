"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

type AboutSectionProps = {
  aboutMode: boolean;
  onToggle: (value: boolean) => void;
};

export default function AboutSection({ aboutMode, onToggle }: AboutSectionProps) {
  const paragraphs = [
    "Hi, I'm Rishabh, an AI/ML engineer working as a Graduate Engineer Trainee (Automation & Robotics) at Rico Auto Industries. I hold a published patent on \"Heart Disease Prediction using Synthetic Data Augmentation with GAN\" under the Government of India, applying generative models to healthcare analytics.",
    "My work sits at the intersection of machine learning, industrial analytics, and backend systems, with hands-on experience in end-to-end development, from deep learning pipelines (PyTorch, CNNs) to full-stack systems using Node.js and MongoDB. I have also interned at Samsung PRISM (Deep Learning-MobileNetV2 architectures and CNN with AdamW optimizations) and Engineers India Limited (ASP.NET, C#, Oracle DB). Outside of tech, I absolutely adore playing badminton, with side pursuits in chess and cricket keeping the competitive edge alive.",
  ];

  return (
    <AnimatedSection id="about" className="py-12 md:py-16">
      <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            Profile
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl font-display glow-text">
            About
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />
        </div>
        <label className="flex items-center gap-2 uppercase tracking-[0.25em] text-slate-300">
          About (Profile)
          <span className="relative inline-flex items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={aboutMode}
              onChange={(event) => onToggle(event.target.checked)}
              aria-label="Toggle About (Profile)"
            />
            <span className="h-6 w-12 rounded-full border border-white/10 bg-white/5 transition-all peer-checked:border-emerald-300/50 peer-checked:bg-emerald-500/25" />
            <span className="pointer-events-none absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-all peer-checked:translate-x-6" />
          </span>
        </label>
      </div>

      {aboutMode ? (
        <div className="grid gap-4 md:grid-cols-2">
          {paragraphs.map((text, index) => (
            <motion.div
              key={`about-${index}`}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="glow-card neon-border relative overflow-hidden bg-gradient-to-br from-white/5 via-white/0 to-indigo-500/10 p-6 text-slate-200 shadow-[0_0_30px_rgba(99,102,241,0.18)] md:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),_transparent_60%)]" />
              <p className="relative mx-auto max-w-[90%] text-justify text-sm leading-7 md:mx-0 md:max-w-none md:text-left md:text-base">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      ) : null}
    </AnimatedSection>
  );
}
