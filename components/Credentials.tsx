'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { CERTS, EDUCATION } from '@/data/certs';

const certBorderRadii = [
  'var(--r-l) var(--r-xl) var(--r-l) var(--r-l)',
  'var(--r-xl) var(--r-l) var(--r-l) var(--r-xl)',
  'var(--r-l) var(--r-l) var(--r-xl) var(--r-l)',
];

export default function Credentials() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="certs" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, marginBottom: 56, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <div className="mono" style={{ color: 'var(--ink-faint)' }}>04 · Credentials</div>
            <motion.h2
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(40px, 5vw, 76px)', letterSpacing: '-0.03em', lineHeight: 0.95, marginTop: 14 }}
            >
              Certified on the{' '}
              <em style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)' }}>frontier</em>
              .
            </motion.h2>
          </div>
        </div>

        {/* Cert cards */}
        <div className="certs-grid">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.code}
              initial={shouldReduce ? false : { opacity: 0, y: 58, rotateX: 16 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.82, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                padding: 32,
                overflow: 'hidden',
                boxShadow: 'var(--shadow-1)',
                borderRadius: certBorderRadii[i],
                transformOrigin: '50% 0%',
              }}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-3)', transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } }}
            >
              <span style={{ position: 'absolute', top: 24, right: 28, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-faint)' }}>
                {cert.code}
              </span>
              <div style={{ width: 110, height: 110, marginBottom: 24, display: 'grid', placeItems: 'center' }}>
                <Image
                  src={cert.img}
                  alt={cert.alt}
                  width={110}
                  height={110}
                  unoptimized
                  style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 8px 16px oklch(20% 0.008 60 / .15))' }}
                />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 21, marginBottom: 6, letterSpacing: '-0.015em', lineHeight: 1.2 }}>
                {cert.title.split('\n').map((line, j) => (
                  <span key={j}>{j > 0 && <br />}{line}</span>
                ))}
              </h4>
              <div style={{ color: 'var(--ink-muted)', fontSize: 14 }}>{cert.issuer}</div>
            </motion.div>
          ))}
        </div>

        {/* Education card */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="edu-card"
          style={{
            marginTop: 32,
            padding: 36,
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--r-l) var(--r-s) var(--r-l) var(--r-l)',
            boxShadow: 'var(--shadow-1)',
          }}
        >
          <div>
            <div className="mono" style={{ color: 'var(--ink-faint)' }}>Education</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 34, marginTop: 8, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              {EDUCATION.degree}
            </div>
            <div style={{ color: 'var(--ink-muted)', marginTop: 4 }}>{EDUCATION.institution}</div>
          </div>
          <div className="edu-gpa">
            <div className="mono" style={{ color: 'var(--ink-faint)' }}>GPA</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 64, color: 'var(--ink)', lineHeight: 1, letterSpacing: '-0.04em' }}>
              {EDUCATION.gpa}
              <span style={{ fontSize: 22, color: 'var(--ink-faint)', fontWeight: 500 }}>{EDUCATION.gpaMax}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
