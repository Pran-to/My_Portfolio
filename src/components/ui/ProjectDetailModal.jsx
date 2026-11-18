import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
} from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="glass-panel relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`relative h-48 sm:h-56 bg-gradient-to-br ${project.gradient} p-6 sm:p-8 flex flex-col justify-end border-b border-slate-800`}
            >
              {project.coverImage && (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-35"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/55 to-transparent" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 rounded-xl bg-slate-950/70 p-2 text-slate-300 hover:bg-slate-800 hover:text-white transition"
                aria-label="Close project details"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative z-10">
                <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/15 px-3 py-0.5 text-xs font-mono text-cyan-300 mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1">{project.subtitle}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                  Overview
                </h4>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              {project.architecture && (
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-1.5">
                    <Cpu className="h-4 w-4" />
                    Data Handling & Architecture
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              )}

              <div>
                <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                  <Layers className="h-4 w-4" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-700/80 bg-slate-900/90 px-3 py-1 text-xs font-mono text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.features?.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                    Key Engineering Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:brightness-110 transition"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Launch Live Project
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-white transition"
                  >
                    <Github className="h-4 w-4" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
