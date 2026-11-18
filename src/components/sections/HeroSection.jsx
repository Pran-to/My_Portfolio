import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Eye,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/portfolioData';
import { MaskedHeadline, ScrambleText } from '../ui/KineticText';

export default function HeroSection({ onOpenResume }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-mono text-cyan-300 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <ScrambleText
              text="AVAILABLE FOR SOFTWARE & WEB ENGINEERING ROLES"
              triggerOnMount
            />
          </motion.div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            <MaskedHeadline text="Hi, I'm" delay={0.05} />{' '}
            <span className="text-gradient block sm:inline">
              <MaskedHeadline text={PROFILE_DATA.name} delay={0.18} />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="mt-5 flex flex-wrap items-center gap-3 text-lg sm:text-2xl font-display font-medium text-slate-200"
          >
            <Sparkles className="h-5 w-5 text-cyan-400 shrink-0" />
            <span>{PROFILE_DATA.role}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="mt-5 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl"
          >
            {PROFILE_DATA.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 font-mono"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-cyan-400" />
              {PROFILE_DATA.location}
            </span>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition"
            >
              <Mail className="h-4 w-4 text-cyan-400" />
              {PROFILE_DATA.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:brightness-110 transition"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-sm font-semibold text-white hover:border-cyan-400 hover:bg-slate-800/90 transition cursor-pointer"
            >
              <Eye className="h-4 w-4 text-cyan-400" />
              Review Resume
            </button>

            <a
              href={PROFILE_DATA.resumePath}
              download="Pranto-Chakrobortty-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/35 bg-cyan-500/10 px-5 py-3.5 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/20 transition"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href={PROFILE_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3.5 py-2 text-xs font-medium text-slate-300 hover:border-cyan-400 hover:text-white transition"
            >
              <Linkedin className="h-4 w-4 text-cyan-400" />
              LinkedIn
            </a>
            <a
              href={PROFILE_DATA.socials.githubPrimary}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3.5 py-2 text-xs font-medium text-slate-300 hover:border-cyan-400 hover:text-white transition"
            >
              <Github className="h-4 w-4 text-cyan-400" />
              GitHub (@Pran-to)
            </a>
            <a
              href={PROFILE_DATA.socials.githubSecondary}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3.5 py-2 text-xs font-medium text-slate-300 hover:border-cyan-400 hover:text-white transition"
            >
              <Github className="h-4 w-4 text-indigo-400" />
              GitHub (@Pranto-Chakrobortty)
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
