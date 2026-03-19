"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

type PopupContent = {
  title: string;
  role?: string;
  duration?: string;
  note?: string;
  details?: string[];
  showToggle?: boolean;
};

type TimelineEvent = {
  id: string;
  year: string;
  label: string;
  position: number;
  align: "top" | "bottom";
  labelMode?: "always" | "hover";
  certLink?: string;
  certLabel?: string;
  popup?: PopupContent;
};

const events: TimelineEvent[] = [
  {
    id: "class-x",
    year: "2019",
    label: "Class X",
    position: 8,
    align: "top",
    labelMode: "always",
  },
  {
    id: "class-xii",
    year: "2021",
    label: "Class XII",
    position: 24,
    align: "bottom",
    labelMode: "always",
  },
  {
    id: "eil",
    year: "Sep - Oct 2023",
    label: "Engineers India Limited Internship",
    position: 42,
    align: "top",
    labelMode: "always",
    certLink: "/EIL_certificate.pdf",
    certLabel: "View Certificate",
    popup: {
      title: "Engineers India Limited",
      role: "Software Engineer Intern",
      duration: "Sep - Oct 2023",
      details: [
        "ASP.NET CRUD web forms development",
        "C# backend logic",
        "Oracle database integration",
        "UI collaboration with engineering teams",
      ],
    },
  },
  {
    id: "prism",
    year: "Apr 2024 - Jan 2025",
    label: "Samsung PRISM Internship",
    position: 58,
    align: "bottom",
    labelMode: "always",
    certLink: "/Samsung_Certificate.pdf",
    certLabel: "View Certificate",
    popup: {
      title: "Samsung PRISM",
      role: "Research & Development Intern",
      duration: "Apr 2024 - Jan 2025",
      details: [
        "Deep learning research project on Image Blur Classification",
        "CNN architectures and PyTorch training pipelines",
        "Dataset validation and experimentation",
      ],
    },
  },
  {
    id: "patent",
    year: "2025",
    label: "Patent Published",
    position: 74,
    align: "top",
    labelMode: "always",
    popup: {
      title: "Patent Published",
      duration: "19 Dec 2025",
      note: "Patent granted on 19th Dec, 2025 (202541118367).",
      showToggle: false,
    },
  },
  {
    id: "rico",
    year: "2026",
    label: "GET - Rico Auto Industries Ltd",
    position: 90,
    align: "bottom",
    labelMode: "always",
    popup: {
      title: "Rico Auto Industries Ltd",
      role: "Graduate Engineer Trainee",
      duration: "2026",
      details: [
        "Developing ML models from IoT sensors for system efficiency",
        "Visitor Management System with Node.js, MongoDB Atlas, Express, Render",
        "Implementing ISO 27001 ISMS for IT management",
      ],
    },
  },
];

const scaleDots = Array.from({ length: 32 });
const vitStartIndex = 11;
const vitEndIndex = 28;
const vitMarkers = Array.from(
  { length: vitEndIndex - vitStartIndex },
  (_, index) => vitStartIndex + index + 0.5
);

export default function CareerTimeline() {
  const [active, setActive] = useState<TimelineEvent | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const openPopup = (event: TimelineEvent) => {
    if (!event.popup) return;
    setActive(event);
    setShowDetails(event.popup.showToggle === false);
  };

  const closePopup = () => {
    setActive(null);
    setShowDetails(false);
  };

  return (
    <AnimatedSection id="timeline" className="py-16">
      <SectionHeader title="Career Timeline" subtitle="Signal Map" />

        <div className="relative mt-10 hidden md:block">
        <div className="relative mx-auto min-h-[260px] max-w-6xl px-6">
          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 items-center justify-between">
            {scaleDots.map((_, index) => (
              <span
                key={`dot-${index}`}
                className={`h-1.5 w-1.5 rounded-full bg-blue-400/40 shadow-[0_0_10px_rgba(59,130,246,0.45)] ${
                  index % 2 === 0 ? "-translate-y-2" : "translate-y-2"
                }`}
              />
            ))}
          </div>
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2">
            {vitMarkers.map((position) => (
              <span
                key={`vit-${position}`}
                className="absolute h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.9)]"
                style={{ left: `${(position / (scaleDots.length - 1)) * 100}%` }}
              />
            ))}
          </div>

          {events.map((event) => {
            const isInteractive = Boolean(event.popup);
            const isActive = active?.id === event.id;
            const labelState =
              event.labelMode === "hover"
                ? "opacity-60 group-hover:opacity-100"
                : "opacity-100";

            return (
              <div
                key={event.id}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: `${event.position}%` }}
              >
                <motion.button
                  type="button"
                  onClick={() => openPopup(event)}
                  whileHover={isInteractive ? { scale: 1.08 } : undefined}
                  className={`group relative flex items-center justify-center ${
                    isInteractive ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <span className="absolute h-7 w-7 rounded-full bg-blue-400/20 blur-md opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute h-6 w-6 rounded-full bg-blue-400/20 animate-pulse" />
                  <span
                    className={`relative h-4 w-4 rounded-full border border-blue-300/60 bg-blue-400/80 shadow-[0_0_18px_rgba(59,130,246,0.9)] transition ${
                      isActive ? "ring-2 ring-blue-300/80" : ""
                    } group-hover:shadow-[0_0_24px_rgba(59,130,246,1)]`}
                  />

                  <div
                    className={`absolute left-1/2 w-60 -translate-x-1/2 text-center ${
                      event.align === "top" ? "-top-24" : "top-10"
                    }`}
                  >
                    <div
                      className={`rounded-2xl border border-white/10 bg-black/75 px-4 py-2 text-xs text-slate-200 shadow-[0_0_18px_rgba(59,130,246,0.35)] transition ${labelState}`}
                    >
                      <p className="text-[10px] uppercase tracking-[0.25em] text-blue-200">
                        {event.year}
                      </p>
                      <p className="mt-1">{event.label}</p>
                      {event.certLink ? (
                        <a
                          href={event.certLink}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-flex items-center rounded-md border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-blue-100 transition hover:border-blue-300"
                        >
                          {event.certLabel ?? "View Certificate"}
                        </a>
                      ) : null}
                    </div>
                    {event.id === "rico" ? (
                      <div className="mt-3 flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.25em] text-amber-200">
                        <span className="h-3.5 w-3.5 rounded-full bg-amber-300 shadow-[0_0_16px_rgba(251,191,36,0.95)]" />
                        : VIT
                      </div>
                    ) : null}
                  </div>
                </motion.button>
              </div>
            );
          })}

          <div className="mt-28 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-500">
            <span>2019</span>
            <span>2026</span>
          </div>
          {/* Legend moved under Rico label */}
        </div>
      </div>

      <div className="mt-10 space-y-8 md:hidden">
        <div className="relative pl-6">
          <div className="absolute left-1 top-0 flex h-full flex-col items-center justify-between">
            {scaleDots.map((_, index) => (
              <span
                key={`dot-mobile-${index}`}
                className="h-1.5 w-1.5 rounded-full bg-blue-400/40 shadow-[0_0_10px_rgba(59,130,246,0.45)]"
              />
            ))}
          </div>
          <div className="pointer-events-none absolute left-1 top-0 h-full">
            {vitMarkers.map((position) => (
              <span
                key={`vit-mobile-${position}`}
                className="absolute h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.9)]"
                style={{ top: `${(position / (scaleDots.length - 1)) * 100}%` }}
              />
            ))}
          </div>

          {events.map((event) => {
            const isInteractive = Boolean(event.popup);
            return (
              <div key={event.id} className="relative pl-8">
                <motion.button
                  type="button"
                  onClick={() => openPopup(event)}
                  whileHover={isInteractive ? { scale: 1.04 } : undefined}
                  className={`relative flex items-start gap-3 text-left ${
                    isInteractive ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <span className="mt-1 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(59,130,246,0.9)]" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
                      {event.year}
                    </p>
                    <p className="mt-1 text-sm text-slate-200">
                      {event.label}
                    </p>
                    {event.id === "rico" ? (
                      <div className="mt-2 flex items-center gap-2 text-[12px] uppercase tracking-[0.25em] text-amber-200">
                        <span className="h-3.5 w-3.5 rounded-full bg-amber-300 shadow-[0_0_16px_rgba(251,191,36,0.95)]" />
                        : VIT
                      </div>
                    ) : null}
                    {event.certLink ? (
                      <a
                        href={event.certLink}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center rounded-md border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-blue-100 transition hover:border-blue-300"
                      >
                        {event.certLabel ?? "View Certificate"}
                      </a>
                    ) : null}
                  </div>
                </motion.button>
              </div>
            );
          })}
        </div>
        {/* Legend moved under Rico label */}
      </div>

      <AnimatePresence>
        {active?.popup ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 md:items-start md:pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <motion.div
              className="glow-card neon-border w-full max-w-xl rounded-3xl bg-black/80 p-6 text-slate-200"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {active.popup.title}
                  </h3>
                  {active.popup.role ? (
                    <p className="mt-1 text-sm text-blue-200">
                      {active.popup.role}
                    </p>
                  ) : null}
                </div>
                {active.popup.duration ? (
                  <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
                    {active.popup.duration}
                  </span>
                ) : null}
              </div>

              {active.popup.note ? (
                <p className="mt-4 text-sm text-slate-300">{active.popup.note}</p>
              ) : null}

              {active.popup.details ? (
                <div className="mt-6">
                  {active.popup.showToggle !== false ? (
                    <button
                      type="button"
                      onClick={() => setShowDetails((prev) => !prev)}
                      className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200"
                    >
                      Show Details
                    </button>
                  ) : null}
                  <AnimatePresence>
                    {showDetails ? (
                      <motion.ul
                        className="mt-4 space-y-2 text-sm text-slate-300"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {active.popup.details.map((detail) => (
                          <li key={detail} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </motion.ul>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : null}

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={closePopup}
                  className="rounded-full border border-blue-400/40 bg-blue-500/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-blue-100 transition hover:border-blue-300"
                >
                  Back / Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </AnimatedSection>
  );
}
