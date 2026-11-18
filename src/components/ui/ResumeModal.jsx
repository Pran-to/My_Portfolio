import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  FileText,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Code2,
  Briefcase,
} from 'lucide-react';
import {
  PROFILE_DATA,
  SKILLS_DATA,
  INITIAL_PROJECTS,
  EDUCATION_DATA,
} from '../../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('pdf');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-3 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="glass-panel flex flex-col w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/90 px-4 sm:px-6 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {PROFILE_DATA.name} — Curriculum Vitae
                  </h3>
                  <p className="text-xs text-slate-400">
                    Review interactive resume or download official PDF
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden sm:flex rounded-xl border border-slate-800 bg-slate-900 p-1">
                  <button
                    onClick={() => setViewMode('pdf')}
                    className={`rounded-lg px-3 py-1 text-xs font-medium transition ${
                      viewMode === 'pdf'
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Original PDF
                  </button>
                  <button
                    onClick={() => setViewMode('structured')}
                    className={`rounded-lg px-3 py-1 text-xs font-medium transition ${
                      viewMode === 'structured'
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Interactive Sheet
                  </button>
                </div>

                <a
                  href={PROFILE_DATA.resumePath}
                  download="Pranto-Chakrobortty-Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:brightness-110 transition"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>

                <a
                  href={PROFILE_DATA.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open PDF in new browser tab"
                  className="rounded-xl border border-slate-700 bg-slate-900 p-2 text-slate-300 hover:border-cyan-400 hover:text-white transition"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>

                <button
                  onClick={onClose}
                  className="rounded-xl border border-slate-700 bg-slate-900 p-2 text-slate-400 hover:text-white transition"
                  aria-label="Close resume modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-slate-900/70">
              {viewMode === 'pdf' ? (
                <div className="h-full w-full flex flex-col">
                  <iframe
                    src={`${PROFILE_DATA.resumePath}#toolbar=1&navpanes=0`}
                    title="Pranto Chakrobortty Resume PDF"
                    className="h-full w-full flex-1 border-0"
                  />
                </div>
              ) : (
                <div className="max-w-3xl mx-auto p-6 sm:p-10 space-y-8 text-slate-200">
                  <div className="border-b border-slate-800 pb-6">
                    <h2 className="text-3xl font-bold text-white">
                      {PROFILE_DATA.name}
                    </h2>
                    <p className="text-cyan-400 font-medium mt-1">
                      {PROFILE_DATA.role}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-300">
                      <span className="inline-flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-cyan-400" />
                        {PROFILE_DATA.phone}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-cyan-400" />
                        {PROFILE_DATA.email}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                        {PROFILE_DATA.location}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                      Profile Summary
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {PROFILE_DATA.summary}
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                      <Code2 className="h-4 w-4" />
                      Technical Skills & Competencies
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SKILLS_DATA.map((group) => (
                        <div
                          key={group.category}
                          className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5"
                        >
                          <p className="text-xs font-semibold text-white mb-2">
                            {group.category}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {group.items.map((s) => (
                              <span
                                key={s.name}
                                className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-300"
                              >
                                {s.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                      <Briefcase className="h-4 w-4" />
                      Key Projects
                    </h4>
                    <div className="space-y-3">
                      {INITIAL_PROJECTS.map((proj) => (
                        <div
                          key={proj.id}
                          className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                        >
                          <div className="flex items-center justify-between">
                            <h5 className="font-semibold text-white">
                              {proj.title}
                            </h5>
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-cyan-400 hover:underline"
                            >
                              Live Demo ↗
                            </a>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">
                            {proj.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                      <GraduationCap className="h-4 w-4" />
                      Education
                    </h4>
                    <div className="space-y-3">
                      {EDUCATION_DATA.map((edu) => (
                        <div
                          key={edu.degree}
                          className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                        >
                          <div>
                            <h5 className="font-semibold text-white text-sm">
                              {edu.degree}
                            </h5>
                            <p className="text-xs text-slate-400">
                              {edu.institution} • {edu.location}
                            </p>
                          </div>
                          <div className="text-left sm:text-right">
                            <span className="inline-block rounded bg-cyan-500/15 px-2.5 py-0.5 text-xs font-mono text-cyan-300">
                              {edu.grade}
                            </span>
                            <p className="text-xs text-slate-500 mt-0.5">
                              {edu.period}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
