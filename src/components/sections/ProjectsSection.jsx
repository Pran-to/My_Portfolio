import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Plus,
  Trash2,
  Download,
  RotateCcw,
  Layers,
  Eye,
  Lock,
  Unlock,
  Star,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { SectionHeader } from '../ui/KineticText';

const CATEGORIES = ['Top 3', 'All', 'Full-Stack', 'Frontend', 'E-Commerce', 'Software / AI'];

export default function ProjectsSection({
  projects,
  isOwnerUnlocked,
  onRequestOwnerAction,
  onLockOwner,
  onSelectProject,
  onDeleteProject,
  onExportJson,
  onResetProjects,
}) {
  const [selectedFilter, setSelectedFilter] = useState('Top 3');

  const visibleProjects =
    selectedFilter === 'Top 3'
      ? projects.slice(0, 3)
      : selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const hasCustomProjects = projects.some((p) => p.isCustom);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <SectionHeader
            eyebrow="03 // Featured Showcase"
            title="Top Projects & Live Deployments"
            subtitle="Highlighting my top 3 flagship applications. Switch filters to explore all deployed systems or inspect architecture case studies."
          />

          {/* Owner-Only Studio Controls */}
          <div className="flex flex-wrap items-center gap-2.5 lg:mb-14">
            {isOwnerUnlocked ? (
              <>
                <button
                  onClick={onRequestOwnerAction}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:brightness-110 transition cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  Upload Project
                </button>

                <button
                  onClick={onExportJson}
                  title="Export portfolio projects as JSON"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/80 px-3.5 py-2.5 text-xs font-medium text-slate-300 hover:border-cyan-400 hover:text-white transition cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5 text-cyan-400" />
                  Export JSON
                </button>

                {hasCustomProjects && (
                  <button
                    onClick={onResetProjects}
                    title="Reset to default resume projects"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/80 px-3.5 py-2.5 text-xs font-medium text-slate-400 hover:border-rose-400 hover:text-rose-300 transition cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Reset
                  </button>
                )}

                <button
                  onClick={onLockOwner}
                  title="Lock owner upload mode"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/35 bg-emerald-500/10 px-3 py-2.5 text-xs font-mono text-emerald-300 hover:bg-emerald-500/20 transition cursor-pointer"
                >
                  <Unlock className="h-3.5 w-3.5" />
                  Owner Mode
                </button>
              </>
            ) : (
              <button
                onClick={onRequestOwnerAction}
                title="Owner login required to upload new projects"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/75 px-3.5 py-2 text-xs font-mono text-slate-400 hover:border-cyan-500/40 hover:text-cyan-300 transition cursor-pointer"
              >
                <Lock className="h-3.5 w-3.5 text-cyan-400" />
                Owner Upload
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-mono uppercase tracking-wider transition cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-900/70 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat === 'Top 3' && <Star className="h-3 w-3 text-amber-400" />}
                {cat === 'All' ? `All (${projects.length})` : cat}
              </button>
            ))}
          </div>

          {projects.length > 3 && (
            <button
              onClick={() =>
                setSelectedFilter(selectedFilter === 'Top 3' ? 'All' : 'Top 3')
              }
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition cursor-pointer"
            >
              {selectedFilter === 'Top 3' ? (
                <>
                  Show All {projects.length} Projects
                  <ChevronDown className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show Top 3 Spotlight
                  <ChevronUp className="h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Showcase Grid (3-Column Spotlight on Desktop for Top 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {visibleProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-panel glass-panel-hover group relative flex flex-col justify-between rounded-2xl overflow-hidden"
            >
              {/* Visual Preview Top */}
              <div
                onClick={() => onSelectProject(project)}
                className={`relative h-48 bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between cursor-pointer overflow-hidden border-b border-slate-800/80`}
              >
                {project.coverImage && (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-45 group-hover:scale-105 transition duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-[#090e1c]/35 to-transparent" />

                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {idx < 3 && selectedFilter === 'Top 3' && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-500/20 px-2.5 py-0.5 text-[10px] font-mono text-amber-200 backdrop-blur-md">
                        <Star className="h-2.5 w-2.5 fill-amber-300 text-amber-300" />
                        Top #{idx + 1}
                      </span>
                    )}
                    <span className="rounded-full border border-white/15 bg-slate-950/75 px-2.5 py-0.5 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <span className="rounded-lg bg-slate-950/75 p-2 text-slate-300 group-hover:text-cyan-300 transition">
                    <Eye className="h-4 w-4" />
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-300 mt-0.5 line-clamp-1">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Links */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-cyan-400 hover:text-white transition cursor-pointer"
                    >
                      <Layers className="h-3.5 w-3.5 text-cyan-400" />
                      Details
                    </button>

                    {isOwnerUnlocked && project.isCustom && (
                      <button
                        onClick={() => onDeleteProject(project.id)}
                        aria-label={`Delete ${project.title}`}
                        className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-1.5 text-rose-400 hover:bg-rose-500/20 transition cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
