'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SKILLS } from '@/data/skills';

const INTERVAL = 3400;

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const shouldReduce = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const active = SKILLS[activeIdx];

  // Auto-advance
  useEffect(() => {
    if (!isPlaying || expanded || shouldReduce) return;
    const t = setTimeout(() => {
      setActiveIdx(i => (i + 1) % SKILLS.length);
    }, INTERVAL);
    return () => clearTimeout(t);
  }, [isPlaying, expanded, activeIdx, shouldReduce]);

  // Scroll active tab into view (mobile horizontal list)
  useEffect(() => {
    tabRefs.current[activeIdx]?.scrollIntoView({
      block: 'nearest',
      inline: 'center',
      behavior: 'smooth',
    });
  }, [activeIdx]);

  const handleTabClick = (i: number) => {
    setActiveIdx(i);
    setIsPlaying(false);
  };

  const openExpanded = () => {
    setExpanded(true);
    setIsPlaying(false);
  };

  const closeExpanded = () => {
    setExpanded(false);
    setIsPlaying(true);
  };

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

        {/* Header */}
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

        {/* ── Tab / auto-play view ── */}
        {!expanded && (
          <div className="skills-layout">

            {/* Tab list */}
            <div className="skills-tab-list">
              {SKILLS.map((s, i) => (
                <button
                  key={s.key}
                  ref={el => { tabRefs.current[i] = el; }}
                  onClick={() => handleTabClick(i)}
                  className="skills-tab-btn"
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
                    position: 'relative',
                    overflow: 'hidden',
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

                  {/* Progress bar on active tab */}
                  {i === activeIdx && isPlaying && !shouldReduce && (
                    <span
                      key={`prog-${activeIdx}`}
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: 2,
                        background: 'var(--bg)',
                        opacity: 0.5,
                        animation: `tabProgress ${INTERVAL}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Panel */}
            <div style={{ minHeight: 300 }}>

              {/* Controls row */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                {/* Play / Pause */}
                <button
                  onClick={() => setIsPlaying(p => !p)}
                  title={isPlaying ? 'Pause auto-play' : 'Resume auto-play'}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 999, border: '1px solid var(--line)', background: 'var(--surface-2)', color: 'var(--ink-muted)', fontSize: 12, fontFamily: 'var(--font-mono)', cursor: 'pointer', letterSpacing: '0.04em' }}
                >
                  {isPlaying ? (
                    <>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                        <rect x="1" y="1" width="3" height="8" rx="1"/>
                        <rect x="6" y="1" width="3" height="8" rx="1"/>
                      </svg>
                      PAUSE
                    </>
                  ) : (
                    <>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                        <path d="M2 1.5l7 3.5-7 3.5V1.5z"/>
                      </svg>
                      PLAY
                    </>
                  )}
                </button>

                {/* Expand */}
                <button
                  onClick={openExpanded}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 999, border: '1px solid var(--line)', background: 'var(--surface-2)', color: 'var(--ink-muted)', fontSize: 12, fontFamily: 'var(--font-mono)', cursor: 'pointer', letterSpacing: '0.04em' }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 4H9M1 7h5"/>
                  </svg>
                  ALL {SKILLS.length}
                </button>
              </div>

              {/* Skill chips */}
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
        )}

        {/* ── Expanded: all categories ── */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {/* Collapse button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 32 }}>
              <button
                onClick={closeExpanded}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 999, border: '1px solid var(--line)', background: 'var(--surface-2)', color: 'var(--ink-muted)', fontSize: 12, fontFamily: 'var(--font-mono)', cursor: 'pointer', letterSpacing: '0.04em' }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 8l3-3 3 3M2 5l3-3 3 3"/>
                </svg>
                COLLAPSE
              </button>
            </div>

            {/* All categories grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
              {SKILLS.map((cat, ci) => (
                <motion.div
                  key={cat.key}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, delay: ci * 0.025, ease: [0.2, 0.8, 0.2, 1] }}
                  style={{
                    padding: '20px 22px',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--r-m)',
                    boxShadow: 'var(--shadow-1)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 16, letterSpacing: '-0.01em', marginBottom: 2 }}>{cat.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-faint)', marginBottom: 14, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{cat.sub}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {cat.items.map(item => (
                      <span
                        key={item.t}
                        style={{
                          padding: '5px 12px',
                          borderRadius: 999,
                          background: item.f ? 'var(--primary-soft)' : 'var(--surface)',
                          border: `1px solid ${item.f ? 'color-mix(in oklab, var(--primary) 30%, transparent)' : 'var(--line)'}`,
                          fontSize: 12.5,
                          fontWeight: item.f ? 600 : 400,
                          color: item.f ? 'var(--primary)' : 'var(--ink-muted)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 5,
                        }}
                      >
                        {item.f && <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />}
                        {item.t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
