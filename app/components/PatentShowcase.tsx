"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

export default function PatentShowcase() {
  const [openPdf, setOpenPdf] = useState(false);
  const [openImages, setOpenImages] = useState(false);

  return (
    <AnimatedSection id="research" className="py-16">
      <SectionHeader title="Research & Intellectual Property" subtitle="Patents" />
      <div className="glow-card neon-border p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Patent Title
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">
              AI-based Heart Disease Prediction using Synthetic Data Augmentation
            </h3>
          </div>
          <span className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-indigo-100">
            2025
          </span>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Issued by: Office of Controller General of Patents-(Government of India)
          </span>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setOpenPdf(true)}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-5 py-2 text-sm text-white transition hover:border-purple-300"
          >
            <FileText size={16} />
            View Publication
          </button>
          <button
            type="button"
            onClick={() => setOpenImages(true)}
            className="group inline-flex items-center justify-center rounded-full p-0"
            aria-label="View patent images"
          >
            <img
              src="/Patent_Icon.png"
              alt="Patent images icon"
              className="h-11 w-11 rounded-full border border-indigo-400/30 bg-black/40 object-cover shadow-[0_0_18px_rgba(99,102,241,0.6)] transition group-hover:shadow-[0_0_26px_rgba(99,102,241,0.9)]"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {openPdf ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenPdf(false)}
          >
            <motion.div
              className="glow-card neon-border w-full max-w-5xl rounded-3xl bg-black/85 p-6 text-slate-200"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  Patent Publication (PDF)
                </h3>
                <button
                  type="button"
                  onClick={() => setOpenPdf(false)}
                  className="rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-purple-100 transition hover:border-purple-300"
                >
                  Back / Close
                </button>
              </div>
              <div className="mt-6 h-[70vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <iframe
                  title="Patent publication PDF"
                  src="/Shreyash%20Rishabh%20Kushagra%20Patent.pdf"
                  className="h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {openImages ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenImages(false)}
          >
            <motion.div
              className="glow-card neon-border w-full max-w-4xl rounded-3xl bg-black/85 p-6 text-slate-200"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  Patent Image Evidence
                </h3>
                <button
                  type="button"
                  onClick={() => setOpenImages(false)}
                  className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-indigo-100 transition hover:border-indigo-300"
                >
                  Back / Close
                </button>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <img
                  src="/patent-1.png"
                  alt="Patent application details"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-2"
                />
                <img
                  src="/patent-2.png"
                  alt="Patent application status"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-2"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </AnimatedSection>
  );
}
