import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Menu, X, Terminal } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({
  activeSection,
  scrollProgress,
  onOpenResume,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="h-[2px] w-full bg-slate-900/80">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500"
          style={{ width: `${Math.round(scrollProgress * 100)}%` }}
        />
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3">
        <div className="glass-panel flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 shadow-lg">
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-white font-display font-bold tracking-tight group"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition">
              <Terminal className="h-4 w-4" />
            </span>
            <span className="text-base sm:text-lg">
              Pranto<span className="text-cyan-400">.Chakrobortty</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`relative rounded-xl px-3.5 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'text-cyan-300'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        className="absolute inset-0 -z-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30"
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-200 hover:bg-cyan-500/20 hover:text-white transition cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5 text-cyan-400" />
              Resume
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-xl p-2 text-slate-300 hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel mt-2 rounded-2xl p-4 md:hidden space-y-2"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-sm font-medium ${
                  activeSection === item.id
                    ? 'bg-cyan-500/15 text-cyan-300'
                    : 'text-slate-300 hover:bg-slate-800/70'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white mt-2"
            >
              <FileText className="h-4 w-4" />
              Review & Download Resume
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
