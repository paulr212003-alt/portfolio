"use client";

import { ArrowUpRight, Download, Mail, Terminal, Linkedin } from "lucide-react";
import { useState } from "react";

const stats = [
  { label: "Projects Built", value: "3" },
  { label: "Patent Published", value: "1" },
  { label: "Research Experience", value: "Samsung PRISM (Deep Learning)" },
  {
    label: "Current Role",
    value: "Rico Auto Industries Ltd (GET - Automation & Robotics)",
  },
];

export default function HeroSection() {
  const [terminalMode, setTerminalMode] = useState(false);

  return (
    <section className="relative overflow-hidden pb-16 pt-20">
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative">
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.4em] text-[rgb(var(--theme-accent-2-rgb)_/_0.9)]">
              Portfolio
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl font-display glow-text">
              Rishabh Paul
            </h1>
            <h2 className="mt-4 text-xl text-[rgb(var(--theme-accent-rgb)_/_0.85)] md:text-2xl">
              AI / Machine Learning Engineer | Automation & Manufacturing Analytics
            </h2>
            <p className="mt-6 max-w-xl text-base text-slate-300 md:text-lg">
              Building intelligent systems using machine learning, industrial
              analytics, and AI-driven automation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="glow-box inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                style={{
                  borderColor: "rgb(var(--theme-accent-2-rgb) / 0.6)",
                  background:
                    "linear-gradient(90deg, rgb(var(--theme-accent-3-rgb) / 0.2), rgb(var(--theme-accent-2-rgb) / 0.2), rgb(var(--theme-accent-rgb) / 0.2))",
                }}
              >
                View Projects
                <ArrowUpRight size={16} />
              </a>
              <a
                href="/resume.pdf"
                download
                className="glow-box inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                style={{
                  borderColor: "rgb(var(--theme-accent-2-rgb) / 0.6)",
                  background: "rgb(var(--theme-accent-2-rgb) / 0.12)",
                }}
              >
                Download Resume
                <Download size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Contact Me
                <Mail size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/rishabh-paul/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                LinkedIn
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="cyber-panel neon-border glow-box relative overflow-hidden p-7">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_rgba(148,163,184,0.12),_transparent_50%)]" />
          <div className="pointer-events-none absolute -left-10 top-6 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
          <div className="pointer-events-none absolute -right-8 bottom-6 h-20 w-20 rounded-full bg-indigo-500/10 blur-2xl" />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              AI Command Center
            </p>
            <button
              type="button"
              onClick={() => setTerminalMode((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] text-indigo-100 transition hover:border-white/40"
              style={{
                borderColor: "rgb(var(--theme-accent-2-rgb) / 0.4)",
                background: "rgb(var(--theme-accent-2-rgb) / 0.12)",
              }}
            >
              <Terminal size={14} />
              {terminalMode ? "Exit Terminal" : "Switch to Terminal Mode"}
            </button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-[10px] uppercase tracking-[0.25em] text-slate-400">
            {"SYS NAV AUTO".split(" ").map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-center"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[120px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-center"
              >
                <p className="text-xs tracking-[0.2em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {terminalMode ? (
            <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-black/60 p-4 font-mono text-xs text-emerald-200">
              <p className="text-emerald-400">&gt; whoami</p>
              <p className="mt-1">Rishabh Paul</p>
              <p className="mt-4 text-emerald-400">&gt; skills</p>
              <p className="mt-1">Machine Learning</p>
              <p>Deep Learning</p>
              <p>Automation Systems</p>
              <p className="mt-4 text-emerald-400">&gt; experience</p>
              <p className="mt-1">Rico Auto Industries Ltd</p>
              <p>Samsung PRISM</p>
              <p>Engineers India Ltd</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
