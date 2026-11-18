import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Upload,
  Plus,
  Link as LinkIcon,
  Github,
  Layers,
  Image as ImageIcon,
} from 'lucide-react';

const GRADIENT_PRESETS = [
  {
    label: 'Cyber Cyan',
    value: 'from-cyan-500/20 via-blue-600/20 to-indigo-900/40',
    accent: '#38bdf8',
  },
  {
    label: 'Nebula Purple',
    value: 'from-purple-500/20 via-fuchsia-600/20 to-slate-900/40',
    accent: '#c084fc',
  },
  {
    label: 'Matrix Emerald',
    value: 'from-emerald-500/20 via-teal-600/20 to-slate-900/40',
    accent: '#34d399',
  },
  {
    label: 'Solar Amber',
    value: 'from-amber-500/20 via-orange-600/20 to-slate-900/40',
    accent: '#fbbf24',
  },
];

export default function ProjectUploadModal({ isOpen, onClose, onAddProject }) {
  const [form, setForm] = useState({
    title: '',
    subtitle: '',
    category: 'Full-Stack',
    liveUrl: '',
    githubUrl: 'https://github.com/Pranto-Chakrobortty',
    description: '',
    architecture: '',
    techInput: 'React.js, Tailwind CSS, Firebase',
    featuresInput:
      'Responsive Modern UI\nAuthentication & Protected Routes\nReal-Time Data Sync',
    coverImage: '',
    presetIndex: 0,
  });

  const [error, setError] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2.5 * 1024 * 1024) {
      setError('Image size must be under 2.5MB for browser storage.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, coverImage: reader.result }));
      setError('');
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim()) {
      setError('Please enter at least a Project Title and Description.');
      return;
    }

    const technologies = form.techInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const features = form.featuresInput
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);

    const preset = GRADIENT_PRESETS[form.presetIndex] || GRADIENT_PRESETS[0];

    onAddProject({
      title: form.title.trim(),
      subtitle: form.subtitle.trim() || 'Interactive Web Application',
      category: form.category,
      liveUrl: form.liveUrl.trim(),
      githubUrl: form.githubUrl.trim(),
      description: form.description.trim(),
      architecture:
        form.architecture.trim() ||
        'Modular component architecture built for performance, clean state management, and responsive accessibility.',
      technologies: technologies.length ? technologies : ['React.js', 'JavaScript'],
      features: features.length ? features : ['Responsive User Interface'],
      coverImage: form.coverImage,
      gradient: preset.value,
      accentColor: preset.accent,
      featured: true,
    });

    setForm({
      title: '',
      subtitle: '',
      category: 'Full-Stack',
      liveUrl: '',
      githubUrl: 'https://github.com/Pranto-Chakrobortty',
      description: '',
      architecture: '',
      techInput: 'React.js, Tailwind CSS, Firebase',
      featuresInput:
        'Responsive Modern UI\nAuthentication & Protected Routes\nReal-Time Data Sync',
      coverImage: '',
      presetIndex: 0,
    });
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="glass-panel relative w-full max-w-2xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-cyan-500/30 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                  <Upload className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Upload & Showcase New Project
                  </h3>
                  <p className="text-xs text-slate-400">
                    Publish directly to your portfolio showcase & export JSON anytime
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {error && (
              <div className="mb-4 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-2.5 text-sm text-rose-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AI Task Nexus"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Full-Stack">Full-Stack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Software / AI">Software / AI</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Tagline / Subtitle
                </label>
                <input
                  type="text"
                  placeholder="e.g. Real-Time Collaborative Productivity Suite"
                  value={form.subtitle}
                  onChange={(e) =>
                    setForm({ ...form, subtitle: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    <LinkIcon className="h-3.5 w-3.5 text-cyan-400" />
                    Live Demo URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://your-project.web.app/"
                    value={form.liveUrl}
                    onChange={(e) =>
                      setForm({ ...form, liveUrl: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    <Github className="h-3.5 w-3.5 text-cyan-400" />
                    GitHub Repository URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/Pranto-Chakrobortty/repo"
                    value={form.githubUrl}
                    onChange={(e) =>
                      setForm({ ...form, githubUrl: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Project Description *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Describe the problem solved, user flow, and core impact..."
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    <Layers className="h-3.5 w-3.5 text-cyan-400" />
                    Technologies (Comma Separated)
                  </label>
                  <input
                    type="text"
                    value={form.techInput}
                    onChange={(e) =>
                      setForm({ ...form, techInput: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    <ImageIcon className="h-3.5 w-3.5 text-cyan-400" />
                    Preview Image (Optional)
                  </label>
                  <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-slate-600 bg-slate-900/60 px-3.5 py-2 text-xs text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition">
                    <Upload className="h-4 w-4" />
                    <span>
                      {form.coverImage ? 'Screenshot Attached ✓' : 'Upload Screenshot'}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Key Features (One per line)
                </label>
                <textarea
                  rows={3}
                  value={form.featuresInput}
                  onChange={(e) =>
                    setForm({ ...form, featuresInput: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Card Glow Theme
                </label>
                <div className="flex flex-wrap gap-2">
                  {GRADIENT_PRESETS.map((preset, idx) => (
                    <button
                      type="button"
                      key={preset.label}
                      onClick={() => setForm({ ...form, presetIndex: idx })}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                        form.presetIndex === idx
                          ? 'border-cyan-400 bg-cyan-500/20 text-white'
                          : 'border-slate-700 bg-slate-900/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: preset.accent }}
                      />
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:brightness-110 transition"
                >
                  <Plus className="h-4 w-4" />
                  Publish to Portfolio
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
