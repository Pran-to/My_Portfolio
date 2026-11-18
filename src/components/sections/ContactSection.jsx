import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Linkedin,
  Github,
  ExternalLink,
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/portfolioData';
import { sendDirectEmail } from '../../services/emailService';
import { SectionHeader } from '../ui/KineticText';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: 'idle', text: '' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'sending', text: 'Preparing direct mail delivery...' });

    try {
      const result = await sendDirectEmail(formData);
      setStatus({ type: 'success', text: result.text });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        text: `Could not send automatically. Click "Compose in Default Mail App" to email ${PROFILE_DATA.email} directly.`,
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="05 // Direct Connection"
          title="Let's Build Something Together"
          subtitle="Have a project opportunity, freelance inquiry, or engineering role? Send a direct message straight to my inbox."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-white">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Reach out directly via email or phone. Every message sent here
                routes straight to{' '}
                <span className="text-cyan-300 font-mono">
                  {PROFILE_DATA.email}
                </span>
                .
              </p>

              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-white truncate">
                      {PROFILE_DATA.email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-300 hover:border-cyan-400 hover:text-white transition shrink-0 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
                    'Hello Pranto — Project / Hiring Inquiry'
                  )}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/15 px-4 py-2 text-xs font-semibold text-cyan-200 hover:bg-cyan-500/25 transition"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Compose in Default Mail App
                </a>
              </div>

              <div className="space-y-3 pt-2 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">Phone</p>
                    <a
                      href={`tel:${PROFILE_DATA.phone}`}
                      className="hover:text-cyan-300 transition"
                    >
                      {PROFILE_DATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">Location</p>
                    <p>{PROFILE_DATA.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2.5">
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-300 hover:border-cyan-400 hover:text-white transition"
              >
                <Linkedin className="h-4 w-4 text-cyan-400" />
                LinkedIn
              </a>
              <a
                href={PROFILE_DATA.socials.githubPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-300 hover:border-cyan-400 hover:text-white transition"
              >
                <Github className="h-4 w-4 text-cyan-400" />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Send Direct Mail
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Recipient: {PROFILE_DATA.email}
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-[11px] font-mono text-emerald-300">
                Direct Mail Active
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="client@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                placeholder="Web Development Project / Software Engineering Opportunity"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Message *
              </label>
              <textarea
                rows={5}
                required
                placeholder="Tell me about your project timeline, goals, or role..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </div>

            {status.text && (
              <div
                className={`rounded-xl border px-4 py-3 text-xs sm:text-sm ${
                  status.type === 'success'
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                    : status.type === 'error'
                    ? 'border-rose-500/40 bg-rose-500/10 text-rose-200'
                    : 'border-cyan-500/40 bg-cyan-500/10 text-cyan-200'
                }`}
              >
                {status.text}
              </div>
            )}

            <button
              type="submit"
              disabled={status.type === 'sending'}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:brightness-110 disabled:opacity-60 transition cursor-pointer"
            >
              <Send className="h-4 w-4" />
              {status.type === 'sending' ? 'Sending...' : 'Send Direct Email'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
