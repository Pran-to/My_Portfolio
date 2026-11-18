import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Rocket, Users } from 'lucide-react';
import { PROFILE_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../ui/KineticText';

const PILLARS = [
  {
    icon: Lightbulb,
    title: 'Problem Solving & Innovation',
    desc: 'Breaking down complex software requirements into clean, modular React and JavaScript architectures.',
  },
  {
    icon: Compass,
    title: 'Strategic Thinking',
    desc: 'Combining technology with an entrepreneurial mindset to build user-centric web platforms.',
  },
  {
    icon: Users,
    title: 'Leadership & Teamwork',
    desc: 'Collaborating effectively across agile workflows with clear communication and adaptability.',
  },
  {
    icon: Rocket,
    title: 'End-to-End Execution',
    desc: 'Taking products from initial UI wireframes to Firebase and Netlify production deployments.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="01 // Profile & Mindset"
          title="Engineering Meaningful Digital Products"
          subtitle="Focused on modern web development, software engineering, and entrepreneurial problem-solving."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Core Competencies
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {PROFILE_DATA.summary}
            </p>

            <div className="flex flex-wrap gap-2">
              {PROFILE_DATA.competencies.map((comp, idx) => (
                <motion.span
                  key={comp}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-xl border border-cyan-500/25 bg-cyan-500/10 px-3 py-1.5 text-xs font-mono text-cyan-200"
                >
                  {comp}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PILLARS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  className="glass-panel glass-panel-hover rounded-2xl p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-cyan-400 border border-cyan-500/25 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
