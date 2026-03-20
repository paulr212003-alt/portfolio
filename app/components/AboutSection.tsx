"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-12 md:py-16">
      <SectionHeader title="About" subtitle="Profile" />
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="glow-card neon-border relative mt-6 overflow-hidden bg-gradient-to-br from-white/5 via-white/0 to-indigo-500/10 p-6 text-slate-200 shadow-[0_0_30px_rgba(99,102,241,0.18)] md:mt-8 md:p-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),_transparent_60%)]" />
        <div className="relative mx-auto max-w-[90%] space-y-4 text-justify text-sm leading-7 md:mx-0 md:max-w-none md:text-left md:text-base">
          <p>
            Hi, I&apos;m Rishabh, an AI/ML engineer working as a Graduate
            Engineer Trainee (Automation &amp; Robotics) at Rico Auto Industries.I hold a published patent on &quot;Heart Disease Prediction using
            Synthetic Data Augmentation with GAN&quot; under the Government of
            India, applying generative models to healthcare analytics.
          </p>
          <p>
            My work sits at the intersection of machine learning, industrial
            analytics, and backend systems, with hands-on experience in
            end-to-end development, from deep learning pipelines (PyTorch, CNNs)
            to full-stack systems using Node.js and MongoDB.I have also interned at Samsung PRISM (Deep Learning-MobileNetV2
            architectures and CNN with AdamW optimizations) and Engineers India
            Limited (ASP.NET, C#, Oracle DB).Outside of tech, I absolutely adore playing badminton, with side
            pursuits in chess and cricket keeping the competitive edge alive.
          </p>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
