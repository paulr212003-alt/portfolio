"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  const paragraphs = [
    "Hi, I'm Rishabh, an AI/ML engineer working as a Graduate Engineer Trainee (Automation & Robotics) at Rico Auto Industries. I hold a published patent on \"Heart Disease Prediction using Synthetic Data Augmentation with GAN\" under the Government of India, applying generative models to healthcare analytics.",
    "My work sits at the intersection of machine learning, industrial analytics, and backend systems, with hands-on experience in end-to-end development, from deep learning pipelines (PyTorch, CNNs) to full-stack systems using Node.js and MongoDB. I have also interned at Samsung PRISM (Deep Learning-MobileNetV2 architectures and CNN with AdamW optimizations) and Engineers India Limited (ASP.NET, C#, Oracle DB). Outside of tech, I absolutely adore playing badminton, with side pursuits in chess and cricket keeping the competitive edge alive.",
  ];

  return (
    <AnimatedSection id="about" className="py-12 md:py-16">
      <SectionHeader title="About" subtitle="Profile" />
      <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2">
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
    </AnimatedSection>
  );
}
