import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#04060d]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold text-white">
            {PROFILE_DATA.name}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            © {new Date().getFullYear()} • Built with React 19, Vite 8 & Three.js
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE_DATA.socials.githubPrimary}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Primary"
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 text-slate-400 hover:border-cyan-400 hover:text-cyan-300 transition"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PROFILE_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 text-slate-400 hover:border-cyan-400 hover:text-cyan-300 transition"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            aria-label="Direct Email"
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 text-slate-400 hover:border-cyan-400 hover:text-cyan-300 transition"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="#hero"
            aria-label="Back to top"
            className="ml-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-2.5 text-cyan-300 hover:bg-cyan-500/20 transition"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
