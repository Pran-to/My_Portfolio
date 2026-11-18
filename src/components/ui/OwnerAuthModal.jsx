import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, X, ShieldCheck, KeyRound } from 'lucide-react';

export default function OwnerAuthModal({
  isOpen,
  onClose,
  onVerifyPin,
  onSuccessUnlock,
}) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = onVerifyPin(pin);
    if (ok) {
      setPin('');
      setError('');
      onClose();
      if (onSuccessUnlock) onSuccessUnlock();
    } else {
      setError('Invalid owner passcode. Only Pranto Chakrobortty can upload projects.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 18 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="glass-panel relative w-full max-w-md rounded-2xl p-6 sm:p-7 border border-cyan-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Owner Studio Access
                  </h3>
                  <p className="text-xs text-slate-400">
                    Restricted to Pranto Chakrobortty
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
                aria-label="Close owner login modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  <KeyRound className="h-3.5 w-3.5 text-cyan-400" />
                  Enter Owner Passcode
                </label>
                <input
                  type="password"
                  required
                  autoFocus
                  placeholder="Enter admin passcode..."
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setError('');
                  }}
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
                <p className="mt-2 text-[11px] text-slate-500 font-mono">
                  Default PIN: <span className="text-slate-300">pranto2026</span> (configurable via <span className="text-cyan-400">VITE_ADMIN_PIN</span>)
                </p>
              </div>

              {error && (
                <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-3.5 py-2.5 text-xs text-rose-300">
                  {error}
                </div>
              )}

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/25 hover:brightness-110 transition cursor-pointer"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Unlock & Upload
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
