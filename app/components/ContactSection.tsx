"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import { Phone, Mail, Linkedin, Github, Download } from "lucide-react";

const contacts = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rishabh-paul",
    href: "https://www.linkedin.com/in/rishabh-paul/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/paulr212003-alt",
    href: "https://github.com/paulr212003-alt",
    icon: Github,
  },
];

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="py-12 md:py-16">
      <SectionHeader title="Contact" subtitle="Connect" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glow-card neon-border p-6">
          <h3 className="text-lg font-semibold text-white">
            Let&apos;s build intelligent systems together
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            Reach out for collaborations, research, or AI-driven product
            development. I&apos;m always open to impactful automation challenges.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <motion.a
              href="tel:+919315280887"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="glow-box inline-flex h-11 items-center gap-2 rounded-full border border-indigo-400/50 bg-indigo-500/10 px-5 text-sm font-semibold text-white transition hover:border-indigo-300 md:hover:shadow-[0_0_18px_rgba(99,102,241,0.35)] active:scale-[0.98]"
            >
              <Phone size={16} />
              Call Me
            </motion.a>
            <motion.a
              href="mailto:paul.r212003@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="glow-box inline-flex h-11 items-center gap-2 rounded-full border border-blue-400/50 bg-blue-500/10 px-5 text-sm font-semibold text-white transition hover:border-blue-300 md:hover:shadow-[0_0_18px_rgba(59,130,246,0.35)] active:scale-[0.98]"
            >
              <Mail size={16} />
              Email
            </motion.a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="glow-card neon-border group flex items-center justify-center p-5 text-center hover:shadow-[0_0_28px_rgba(99,102,241,0.35)] md:justify-start md:text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 p-2 text-indigo-200">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-1 hidden text-sm text-white md:block">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
      <div className="mt-6">
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ y: -6, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glow-card neon-border flex items-center justify-center gap-3 p-5 text-center hover:shadow-[0_0_28px_rgba(99,102,241,0.35)] md:justify-start md:text-left"
        >
          <span className="rounded-full border border-white/10 bg-white/5 p-2 text-indigo-200">
            <Download size={16} />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Resume
            </p>
            <p className="mt-1 text-sm text-white">Download Resume</p>
          </div>
        </motion.a>
      </div>
    </AnimatedSection>
  );
}
