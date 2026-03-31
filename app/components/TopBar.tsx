"use client";

import { useEffect, useState } from "react";

const themes = [
  { label: "Classic", value: "classic" },
  { label: "Obsidian Core", value: "obsidian-core" },
  { label: "Nebula Noir", value: "nebula-noir" },
  { label: "Cyber Azure", value: "cyber-azure" },
  { label: "Quantum Indigo", value: "quantum-indigo" },
  { label: "Solar Ember", value: "solar-ember" },
  { label: "Emerald Pulse", value: "emerald-pulse" },
  { label: "Graphite Frost", value: "graphite-frost" },
  { label: "Aurora Flux", value: "aurora-flux" },
  { label: "Sandstone Calm", value: "sandstone-calm" },
];

const formatTime = (date: Date) => {
  const datePart = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });
  const timePart = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
  return `${datePart} | ${timePart}`;
};

export default function TopBar() {
  const [time, setTime] = useState("");
  const [theme, setTheme] = useState("classic");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    setTime(formatTime(new Date()));
    const interval = window.setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-0 z-40 w-full">
      <div className="cyber-panel neon-border relative border-b border-white/5 px-3 py-2 backdrop-blur-2xl md:px-5 md:py-3">
        <div className="ai-shimmer ai-animate pointer-events-none absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,_transparent,_rgb(var(--theme-accent-rgb)_/_0.5),_transparent)]" />
        <div className="mx-auto max-w-6xl">
          <div className="hidden items-center justify-between gap-4 md:flex">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-[var(--theme-foreground)]">
                RP
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--theme-muted)]">
                Control Node
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[color:var(--theme-muted)]">
              <span className="ai-blink ai-animate text-[var(--theme-foreground)]">
                {"\u25CF"}
              </span>
              Rishabh Paul Portfolio
            </div>

            <div className="flex items-center justify-end gap-5 text-xs text-[color:var(--theme-muted)]">
              <div className="flex items-center gap-2">
                <span className="status-dot pulse-slow ai-animate" />
                <span className="uppercase tracking-[0.25em] text-emerald-300">
                  Online
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="ai-blink ai-animate text-[var(--theme-foreground)]">
                  {"\u25CF"}
                </span>
                <span
                  className="uppercase tracking-[0.25em]"
                  suppressHydrationWarning
                >
                  {mounted && time ? time : "Loading..."}
                </span>
              </div>
              <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
                Theme
                <select
                  value={theme}
                  onChange={(event) => setTheme(event.target.value)}
                  className="rounded-lg border border-white/10 bg-[var(--theme-surface)] px-3 py-2 text-[10px] text-[var(--theme-foreground)] shadow-[0_0_12px_rgb(var(--theme-accent-rgb)_/_0.35)] transition hover:border-white/20"
                >
                  {themes.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] font-semibold text-[var(--theme-foreground)]">
                  RP
                </div>
                <div className="flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-emerald-200">
                  <span className="status-dot pulse-slow ai-animate h-2 w-2" />
                  Online
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--theme-muted)]">
                <span className="ai-blink ai-animate text-[var(--theme-foreground)]">
                  {"\u25CF"}
                </span>
                <span suppressHydrationWarning>
                  {mounted && time ? time : "Loading..."}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--theme-muted)]">
                Theme
                <select
                  value={theme}
                  onChange={(event) => setTheme(event.target.value)}
                  className="rounded-lg border border-white/10 bg-[var(--theme-surface)] px-2 py-1 text-[10px] text-[var(--theme-foreground)] shadow-[0_0_12px_rgb(var(--theme-accent-rgb)_/_0.35)] transition hover:border-white/20"
                >
                  {themes.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
