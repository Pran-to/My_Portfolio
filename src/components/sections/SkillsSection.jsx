import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../ui/KineticText';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="02 // Technical Arsenal"
          title="Technologies & Engineering Stack"
          subtitle="Full-stack web technologies, programming languages, and developer tools I use to build responsive, reliable software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS_DATA.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: groupIdx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {group.category}
                </h3>
                <span
                  className={`h-2.5 w-12 rounded-full bg-gradient-to-r ${group.accent}`}
                />
              </div>

              <div className="space-y-4">
                {group.items.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs sm:text-sm mb-1.5">
                      <span className="font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <span className="font-mono text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/90">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.9,
                          delay: 0.15 + idx * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${group.accent}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
