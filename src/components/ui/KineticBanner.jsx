import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ROW_ONE = [
  'FULL-STACK WEB ENGINEERING',
  'REACT 19 & MODERN JAVASCRIPT',
  'INTERACTIVE 3D EXPERIENCES',
  'FIREBASE & MONGODB ARCHITECTURES',
  'TAILWIND CSS & UI SYSTEMS',
];

const ROW_TWO = [
  'SCALABLE FRONTEND SYSTEMS',
  'CLEAN CODE & PROBLEM SOLVING',
  'RESPONSIVE PRODUCT DESIGN',
  'SECURE AUTHENTICATION FLOWS',
  'CONTINUOUS INNOVATION',
];

export default function KineticBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      aria-hidden="true"
      className="marquee-wrapper relative my-6 overflow-hidden border-y border-cyan-500/20 bg-slate-950/65 backdrop-blur-md py-4 select-none"
    >
      {/* Edge Fade Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-[#030712] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-[#030712] to-transparent" />

      {/* Track 1: Leftward Kinetic Typography */}
      <div className="animate-marquee-left items-center gap-8 mb-2.5">
        {[...ROW_ONE, ...ROW_ONE].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="font-display text-xl sm:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-cyan-200 to-slate-400 hover:from-cyan-400 hover:to-fuchsia-400 transition-colors">
              {item}
            </span>
            <Sparkles className="h-4 w-4 text-cyan-400 shrink-0" />
          </div>
        ))}
      </div>

      {/* Track 2: Rightward Kinetic Monospace Sub-track */}
      <div className="animate-marquee-right items-center gap-8">
        {[...ROW_TWO, ...ROW_TWO].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="font-mono text-xs sm:text-sm tracking-[0.22em] text-cyan-300/75">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
