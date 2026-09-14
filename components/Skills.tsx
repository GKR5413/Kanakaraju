'use client';

import { useMemo, useState, useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SKILLS, SKILL_GROUPS } from '@/data/skills';

/**
 * Design rationale (see also: the research notes in the PR description).
 *
 * The previous version was an auto-advancing tab carousel: one of 17 categories
 * visible at a time, rotating every 3.4s. Three findings argue against that:
 *
 *  1. Recruiters average 7.4s on a first pass (Ladders eye-tracking, 2018).
 *     A rotating panel shows them ~1 of 17 categories in that window.
 *  2. Auto-forwarding carousels are ignored (~1% engage with the first slide,
 *     fewer after) and read as ad-like visual noise — NN/g.
 *  3. Tabs and accordions raise interaction cost and cut content visibility;
 *     scrolling a well-structured page is cheaper than clicking — NN/g.
 *
 * So: everything is visible by default, grouped into five layers with clear
 * headings for F-pattern scanning. Filtering is additive — a recruiter checking
 * "do they know Kubernetes?" can type it, but nothing is hidden until they do.
 */

const TOTAL = SKILLS.reduce((n, c) => n + c.items.length, 0);

export default function Skills() {
  const shouldReduce = useReducedMotion();
  const [query, setQuery] = useState('');
  const [coreOnly, setCoreOnly] = useState(false);
  const inputId = useId();

  const q = query.trim().toLowerCase();

  const groups = useMemo(() => {
    const filteredCats = SKILLS.map(cat => {
      const categoryMatches = q !== '' && cat.label.toLowerCase().includes(q);
      const items = cat.items.filter(item => {
        if (coreOnly && !item.f) return false;
        if (q === '') return true;
        return categoryMatches || item.t.toLowerCase().includes(q);
      });
      return { ...cat, items };
    }).filter(cat => cat.items.length > 0);

    return SKILL_GROUPS
      .map(g => ({ name: g, cats: filteredCats.filter(c => c.group === g) }))
      .filter(g => g.cats.length > 0);
  }, [q, coreOnly]);

  const shown = groups.reduce((n, g) => n + g.cats.reduce((m, c) => m + c.items.length, 0), 0);

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
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none', background: 'radial-gradient(circle at 15% 20%, var(--primary-soft), transparent 30%), radial-gradient(circle at 85% 80%, color-mix(in oklab, var(--tertiary) 20%, transparent), transparent 30%)' }}
      />

      <div className="container" style={{ position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div className="mono" style={{ color: 'var(--ink-faint)' }}>03 · Craft</div>
          <motion.h2
            initial={shouldReduce ? false : { opacity: 0, y: 38 }}
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

        {/* Controls — additive, never gating */}
        <div className="skills-controls">
          <div className="skills-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ width: 15, height: 15, color: 'var(--ink-faint)', flexShrink: 0 }}>
              <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" />
            </svg>
            <label htmlFor={inputId} className="sr-only">Filter skills</label>
            <input
              id={inputId}
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={`Filter ${TOTAL} skills — try "Kubernetes"`}
              style={{
                border: 'none', background: 'transparent', outline: 'none',
                font: 'inherit', fontSize: 14, color: 'var(--ink)', width: '100%', padding: 0,
              }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear filter"
                style={{ border: 'none', background: 'transparent', color: 'var(--ink-faint)', cursor: 'pointer', padding: 2, display: 'flex' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" style={{ width: 14, height: 14 }}>
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <button
            onClick={() => setCoreOnly(v => !v)}
            aria-pressed={coreOnly}
            className="skills-toggle"
            style={{
              background: coreOnly ? 'var(--ink)' : 'var(--surface-2)',
              color: coreOnly ? 'var(--bg)' : 'var(--ink-muted)',
              borderColor: coreOnly ? 'var(--ink)' : 'var(--line)',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: coreOnly ? 'var(--bg)' : 'var(--primary)' }} />
            Core only
          </button>

          <div aria-live="polite" className="mono" style={{ color: 'var(--ink-faint)', whiteSpace: 'nowrap' }}>
            {shown} / {TOTAL}
          </div>
        </div>

        {/* Groups */}
        {groups.length === 0 ? (
          <p style={{ color: 'var(--ink-muted)', padding: '48px 0' }}>
            No skills match “{query}”.
          </p>
        ) : (
          groups.map((group, gi) => (
            <motion.div
              key={group.name}
              initial={shouldReduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: Math.min(gi * 0.06, 0.24), ease: [0.2, 0.8, 0.2, 1] }}
              style={{ marginBottom: 56 }}
            >
              {/* Group heading — the F-pattern anchor */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 6 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                  {group.name}
                </h3>
                <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
                <span className="mono" style={{ color: 'var(--ink-faint)' }}>
                  {group.cats.reduce((n, c) => n + c.items.length, 0)}
                </span>
              </div>

              <div>
                {group.cats.map(cat => (
                  <div key={cat.key} className="skills-row">
                    <div>
                      <h4 className="skills-row-label">{cat.label}</h4>
                      <div className="mono skills-row-sub">{cat.sub}</div>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                      {cat.items.map(item => (
                        <li key={item.t} className={item.f ? 'skill-chip skill-chip--core' : 'skill-chip'}>
                          <span className="skill-dot" aria-hidden="true" />
                          {item.t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
