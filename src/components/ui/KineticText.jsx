import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>{}[]#*';

export function ScrambleText({ text, className = '', triggerOnMount = false }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const runScramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 0.45;
    }, 24);
  };

  useEffect(() => {
    if (triggerOnMount) runScramble();
    return () => clearInterval(intervalRef.current);
  }, [text]);

  return (
    <span
      onMouseEnter={runScramble}
      className={`inline-block cursor-default ${className}`}
    >
      {displayText}
    </span>
  );
}

export function MaskedHeadline({ text, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden py-1">
          <motion.span
            className="inline-block"
            initial={{ y: '115%', rotateX: -45, opacity: 0 }}
            animate={
              isInView
                ? { y: '0%', rotateX: 0, opacity: 1 }
                : { y: '115%', rotateX: -45, opacity: 0 }
            }
            transition={{
              duration: 0.72,
              delay: delay + idx * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-14 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-4"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <ScrambleText text={eyebrow} />
      </motion.div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
        <MaskedHeadline text={title} />
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
