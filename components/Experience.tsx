'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { EXPERIENCE } from '@/data/experience';

function HighlightText({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function ExperienceItem({ entry, index }: { entry: typeof EXPERIENCE[0]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const shouldReduce = useReducedMotion();

  return (
    <article
      ref={ref}
      className="experience-row"
    >
      {/* Left col */}
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, x: -32 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="experience-left-col"
      >
        <div className="experience-number">
          0{index + 1}
        </div>
        <div className="mono">{entry.when}</div>
        <div style={{ fontSize: 13 }}>{entry.loc}</div>
      </motion.div>

      {/* Right col */}
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.21, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Company lockup */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 20, padding: '6px 18px 6px 6px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 999, boxShadow: 'var(--shadow-1)' }}>
          <span style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', display: 'grid', placeItems: 'center', background: 'var(--surface-2)', flexShrink: 0 }}>
            <Image src={entry.logo} alt={`${entry.co} logo`} width={36} height={36} unoptimized style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </span>
          <div style={{ fontWeight: 600, fontSize: 14, letterSpacing: '-0.01em' }}>{entry.co}</div>
        </div>

        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.05, marginBottom: 4, letterSpacing: '-0.025em' }}>
          {entry.role}{' '}
          <span style={{ color: 'var(--ink-faint)', fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontWeight: 400 }}>at</span>
          {' '}{entry.co}
        </h3>
        <div style={{ color: 'var(--ink-muted)', fontSize: 15.5, marginBottom: 20 }}>{entry.role}</div>

        {/* Project card */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--r-m) var(--r-m) var(--r-s) var(--r-m)',
          padding: '20px 24px',
          marginBottom: 22,
          boxShadow: 'var(--shadow-1)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: 'linear-gradient(to bottom, var(--primary), var(--tertiary))' }} />
          <div style={{ fontWeight: 600, marginBottom: 6, fontSize: 15, paddingLeft: 8 }}>{entry.project}</div>
          <p style={{ fontSize: 14.5, color: 'var(--ink-muted)', paddingLeft: 8 }}>
            <HighlightText html={entry.desc} />
          </p>
        </div>

        {/* Highlights */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {entry.highlights.map((h, hi) => (
            <motion.li
              key={hi}
              initial={shouldReduce ? false : { opacity: 0, x: 14 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.38, delay: 0.53 + hi * 0.038, ease: [0.2, 0.8, 0.2, 1] }}
              style={{
                padding: '14px 18px 14px 44px',
                position: 'relative',
                fontSize: 15,
                color: 'var(--ink-muted)',
                borderRadius: 'var(--r-s)',
                background: 'color-mix(in oklab, var(--surface) 50%, transparent)',
                border: '1px solid transparent',
              }}
            >
              <span style={{ position: 'absolute', left: 18, top: 22, width: 14, height: 2, background: 'var(--primary)' }} />
              <HighlightText html={h} />
            </motion.li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
          {entry.tech.map(t => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                padding: '5px 10px',
                borderRadius: 999,
                background: 'var(--surface-2)',
                color: 'var(--ink-muted)',
                border: '1px solid var(--line)',
                transition: 'all .3s',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="work" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, marginBottom: 56, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <div className="mono" style={{ color: 'var(--ink-faint)' }}>03 · Experience</div>
            <motion.h2
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(40px, 5vw, 76px)', letterSpacing: '-0.03em', lineHeight: 0.95, marginTop: 14 }}
            >
              Shipped in{' '}
              <em style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)' }}>regulated</em>
              <br />enterprise environments.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.52, delay: 0.1 }}
            style={{ maxWidth: 380, color: 'var(--ink-faint)', fontSize: 15.5 }}
          >
            Four companies. Financial services, payments, healthcare, silicon. Measurable outcomes at every stop.
          </motion.p>
        </div>

        <div>
          {EXPERIENCE.map((entry, i) => (
            <ExperienceItem key={entry.co} entry={entry} index={i} />
          ))}
          <div style={{ borderBottom: '1px solid var(--line)' }} />
        </div>
      </div>
    </section>
  );
}
