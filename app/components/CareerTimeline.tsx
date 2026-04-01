"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

type TimelineEvent = {
  id: string;
  year: string;
  label: string;
  position: number;
  align: "top" | "bottom";
  certLink?: string;
  certLabel?: string;
};

const events: TimelineEvent[] = [
  {
    id: "class-x",
    year: "2019",
    label: "Class X",
    position: 12,
    align: "top",
  },
  {
    id: "class-xii",
    year: "2021",
    label: "Class XII",
    position: 28,
    align: "bottom",
  },
  {
    id: "eil",
    year: "Sep'23 - Oct'23",
    label: "Engineers India Limited Internship",
    position: 44,
    align: "top",
    certLink: "/EIL_certificate.pdf",
    certLabel: "View certificate",
  },
  {
    id: "prism",
    year: "Apr'24 - Jan'25",
    label: "Samsung PRISM Internship",
    position: 60,
    align: "bottom",
    certLink: "/Samsung_Certificate.pdf",
    certLabel: "View certificate",
  },
  {
    id: "patent",
    year: "2025",
    label: "Patent Published",
    position: 76,
    align: "top",
  },
  {
    id: "rico",
    year: "2026",
    label: "GET - Rico Auto Industries Ltd",
    position: 88,
    align: "bottom",
  },
];

const highlightStart =
  events.find((event) => event.id === "class-xii")?.position ?? 24;
const highlightEnd =
  events.find((event) => event.id === "patent")?.position ?? 74;

const mobilePositions = events.map(
  (_, index) => (index / (events.length - 1)) * 100
);
const highlightMobileStart = mobilePositions[1] ?? 20;
const highlightMobileEnd = mobilePositions[4] ?? 70;

export default function CareerTimeline() {
  const baseLine = "rgb(var(--theme-border-rgb) / 0.65)";
  const highlightLine = "rgba(250, 204, 21, 0.85)";
  const highlightWidth = highlightEnd - highlightStart;
  const highlightHeight = highlightMobileEnd - highlightMobileStart;
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <AnimatedSection id="timeline" className="py-12 md:py-16">
      <SectionHeader title="Career Timeline" subtitle="Signal Map" />

      <div className="relative mt-12 hidden md:block">
        <div className="relative mx-auto min-h-[360px] max-w-6xl px-16 py-10">
          <div
            className="absolute left-10 right-10 top-1/2 h-[2px] -translate-y-1/2"
            style={{ background: baseLine }}
          />
          <div
            className="absolute h-[2px] -translate-y-1/2 rounded-full"
            style={{
              top: "calc(50% - 14px)",
              left: `${highlightStart}%`,
              width: `${highlightWidth}%`,
              background: highlightLine,
            }}
          />
          <span
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            style={{ left: `${highlightStart}%`, top: "calc(50% - 14px)" }}
          />
          <span
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            style={{ left: `${highlightEnd}%`, top: "calc(50% - 14px)" }}
          />

          {events.map((event) => {
            const isPatent = event.id === "patent";
            const cardClasses = `absolute left-1/2 w-64 -translate-x-1/2 rounded-2xl border px-5 py-4 text-sm text-[var(--theme-foreground)] shadow-[0_0_18px_var(--theme-glow)] ${
              event.align === "top" ? "-translate-y-[135%]" : "translate-y-[40%]"
            } ${
              activeId === event.id
                ? "border-white/30 bg-white/5"
                : "border-white/10 bg-[var(--theme-card)]"
            }`;

            return (
              <div
                key={event.id}
                className="absolute top-1/2"
                style={{ left: `${event.position}%` }}
              >
                <button
                  type="button"
                  onClick={() => setActiveId(event.id)}
                  className="relative h-6 w-6 -translate-x-1/2 -translate-y-1/2"
                >
                  <span
                    className={`absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--theme-accent-rgb)_/_0.85)] shadow-[0_0_16px_var(--theme-glow)] transition ${
                      activeId === event.id ? "ring-2 ring-white/50" : ""
                    }`}
                  />
                </button>
                {isPatent ? (
                  <a href="#research" className={cardClasses}>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--theme-muted)]">
                      {event.year}
                    </p>
                    <p className="mt-2 text-base font-semibold text-[var(--theme-foreground)]">
                      {event.label}
                    </p>
                  </a>
                ) : (
                  <motion.div whileHover={{ y: -4 }} className={cardClasses}>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--theme-muted)]">
                      {event.year}
                    </p>
                    <p className="mt-2 text-base font-semibold text-[var(--theme-foreground)]">
                      {event.label}
                    </p>
                    {event.certLink ? (
                      <a
                        href={event.certLink}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-[var(--theme-foreground)] transition hover:border-white/30"
                      >
                        {event.certLabel ?? "View certificate"}
                      </a>
                    ) : null}
                  </motion.div>
                )}
              </div>
            );
          })}
          <div className="absolute right-6 -bottom-2 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-200">
            <span className="h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
            VIT
          </div>
        </div>
      </div>

      <div className="mt-10 md:hidden">
        <div className="relative mx-auto max-w-md px-4 py-6">
          <div
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
            style={{ background: baseLine }}
          />
          <div
            className="absolute w-0.5 rounded-full"
            style={{
              left: "calc(50% + 10px)",
              top: `${highlightMobileStart}%`,
              height: `${highlightHeight}%`,
              background: highlightLine,
            }}
          />
          <span
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            style={{ left: "calc(50% + 10px)", top: `${highlightMobileStart}%` }}
          />
          <span
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            style={{ left: "calc(50% + 10px)", top: `${highlightMobileEnd}%` }}
          />

          <div className="space-y-10">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={event.id} className="relative flex items-start">
                  <span className="absolute left-1/2 top-6 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[rgb(var(--theme-accent-rgb)_/_0.85)] shadow-[0_0_14px_var(--theme-glow)]" />
                  <div
                    className={`w-[calc(50%-24px)] ${
                      isLeft ? "pr-6 text-right" : "ml-auto pl-6 text-left"
                    }`}
                  >
                    <div className="glow-card neon-border min-h-[120px] rounded-2xl border border-white/10 bg-[var(--theme-card)] px-4 py-4 text-[var(--theme-foreground)] shadow-[0_0_14px_var(--theme-glow)]">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--theme-muted)]">
                        {event.year}
                      </p>
                      <p className="mt-2 text-base font-semibold text-[var(--theme-foreground)]">
                        {event.label}
                      </p>
                      {event.certLink ? (
                        <a
                          href={event.certLink}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-[var(--theme-foreground)] transition hover:border-white/30"
                        >
                          {event.certLabel ?? "View certificate"}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-end gap-2 text-[11px] uppercase tracking-[0.25em] text-amber-200">
            <span className="h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
            VIT
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
