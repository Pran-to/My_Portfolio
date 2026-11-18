import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../ui/KineticText';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="04 // Academic Foundation"
          title="Education & Credentials"
          subtitle="Computer Science and Engineering degree paired with strong analytical and scientific training."
        />

        <div className="relative space-y-6 before:absolute before:inset-y-0 before:left-5 sm:before:left-8 before:w-px before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-transparent">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              className="relative pl-14 sm:pl-20"
            >
              <div className="absolute left-1.5 sm:left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/50 bg-[#050811] text-cyan-400 shadow-lg shadow-cyan-500/20">
                <GraduationCap className="h-4 w-4" />
              </div>

              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-cyan-300 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-300">
                      <Award className="h-3.5 w-3.5" />
                      {edu.grade}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                    {edu.location}
                  </span>
                </div>

                <ul className="space-y-1.5 text-sm text-slate-300">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
