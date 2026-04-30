'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SKILLS } from '@/data/skills';

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduce = useReducedMotion();

  const active = SKILLS[activeIdx];

  return (
    <section
      id="skills"
      style={{
        padding: '120px 0',
        background: 'var(--surface)',
        borderRadius: 'var(--r-xl)',
        margin: '0 clamp(12px, 3vw, 32px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none', background: 'radial-gradient(circle at 15% 20%, var(--primary-soft), transparent 30%), radial-gradient(circle at 85% 80%, color-mix(in oklab, var(--tertiary) 20%, transparent), transparent 30%)' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, marginBottom: 56, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <div className="mono" style={{ color: 'var(--ink-faint)' }}>02 · Craft</div>
            <motion.h2
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(40px, 5vw, 76px)', letterSpacing: '-0.03em', lineHeight: 0.95, marginTop: 14 }}
            >
              The{' '}
              <em style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)' }}>toolkit</em>
              ,<br />organized by layer.
            </motion.h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 40 }}>
          {/* Tab list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, position: 'sticky', top: 100, alignSelf: 'start' }}>
            {SKILLS.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setActiveIdx(i)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '11px 18px',
                  borderRadius: i === activeIdx ? 14 : 999,
                  background: i === activeIdx ? 'var(--ink)' : 'transparent',
                  color: i === activeIdx ? 'var(--bg)' : 'var(--ink-muted)',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 14,
                  fontWeight: 500,
                  textAlign: 'left',
                  letterSpacing: '-0.01em',
                  transition: 'background 0.14s ease, color 0.14s ease, border-radius 0.14s ease',
                  width: '100%',
                }}
              >
                <span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: i === activeIdx ? 'var(--bg)' : 'var(--ink-faint)', opacity: i === activeIdx ? 0.55 : 1, marginRight: 10, minWidth: 20, display: 'inline-block' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s.label}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.6 }}>
                  {s.items.length}
                </span>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div style={{ minHeight: 300 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={shouldReduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 40, letterSpacing: '-0.025em', lineHeight: 1 }}>
                    {active.label}
                  </div>
                  <div style={{ color: 'var(--ink-faint)', marginTop: 8, fontSize: 14.5 }}>{active.sub}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {active.items.map((item, i) => (
                    <motion.span
                      key={item.t}
                      initial={shouldReduce ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.24, delay: i * 0.016, ease: [0.2, 0.8, 0.2, 1] }}
                      style={{
                        padding: '10px 18px',
                        borderRadius: 999,
                        background: item.f ? 'var(--surface-3)' : 'var(--surface-2)',
                        border: '1px solid var(--line)',
                        fontSize: 14,
                        fontWeight: 500,
                        letterSpacing: '-0.005em',
                        cursor: 'default',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: item.f ? 10 : 0,
                        transition: 'background 0.18s ease, color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease',
                        paddingLeft: item.f ? 22 : 18,
                        position: 'relative',
                      }}
                    >
                      {item.f && (
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0, boxShadow: '0 0 8px var(--primary)' }} />
                      )}
                      {item.t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
