'use client';

import { motion, useReducedMotion } from 'framer-motion';

const CONTACT_METHODS = [
  {
    label: 'Email',
    val: 'kanakaraju.g@proton.me',
    href: 'mailto:kanakaraju.g@proton.me',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    val: '+1 (816) 352-4975',
    href: 'tel:+18163524975',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Network',
    val: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Code',
    val: 'GitHub',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" style={{ width: 14, height: 14 }}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function Contact() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="contact"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--line)',
        borderRadius: 'var(--r-xl) var(--r-xl) 0 0',
        padding: '120px 0 48px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orb */}
      <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: '55%', aspectRatio: '1', background: 'radial-gradient(circle at 30% 30%, var(--primary-container), transparent 70%)', borderRadius: '50%', opacity: 0.35, filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.38, ease: [0.2, 0.8, 0.2, 1] }}
          className="mono"
          style={{ color: 'var(--ink-faint)', marginBottom: 20 }}
        >
          05 · Let&apos;s collaborate
        </motion.div>

        <motion.h2
          initial={shouldReduce ? false : { opacity: 0, y: 52 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.88, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(54px, 9vw, 140px)', lineHeight: 0.92, letterSpacing: '-0.045em', maxWidth: 1000, marginBottom: 40 }}
        >
          Have a{' '}
          <em style={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)' }}>hard problem</em>
          <br />at the intersection of<br />AI and production?
        </motion.h2>

        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.62, delay: 0.38, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ maxWidth: 600, color: 'var(--ink-muted)', fontSize: 18 }}
        >
          I&apos;m open to senior roles and advisory engagements in applied GenAI, MLOps, and agentic systems — especially where compliance, observability, and scale are non-negotiable.
        </motion.p>

        {/* Contact methods */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 64, maxWidth: 720, borderTop: '1px solid var(--line)' }}>
          {CONTACT_METHODS.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              initial={shouldReduce ? false : { opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                alignItems: 'center',
                gap: 28,
                padding: '28px 8px',
                borderBottom: '1px solid var(--line)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'padding .5s var(--ease-spring), background .4s',
                cursor: 'pointer',
                position: 'relative',
              }}
              whileHover={{ paddingLeft: 24, paddingRight: 24 }}
            >
              <motion.div
                whileHover={{ rotate: -8, scale: 1.05, background: 'var(--ink)', color: 'var(--bg)', borderColor: 'var(--ink)' }}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'transparent',
                  color: 'var(--ink-muted)',
                  display: 'grid',
                  placeItems: 'center',
                  border: '1px solid var(--line)',
                  transition: 'all .45s var(--ease-spring)',
                }}
              >
                {method.icon}
              </motion.div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div className="mono" style={{ color: 'var(--ink-faint)' }}>{method.label}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
                  {method.val}
                </div>
              </div>
              <div style={{ width: 36, height: 36, borderRadius: '50%', display: 'grid', placeItems: 'center', color: 'var(--ink-faint)' }}>
                <ArrowIcon />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--line)', color: 'var(--ink-faint)', fontSize: 13, flexWrap: 'wrap', gap: 12 }}>
          <div>© 2026 Kanakaraju G — Senior GenAI Engineer</div>
          <div className="mono">Crafted with intention.</div>
        </div>
      </div>
    </section>
  );
}
