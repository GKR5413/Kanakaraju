'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TECH_MARQUEE } from '@/data/skills';
import { LOGO_MARQUEE } from '@/data/experience';
import Image from 'next/image';

const H1_LINES = [
  { text: 'Engineering', italic: false },
  { text: 'intelligence', italic: true },
  { text: 'into production.', italic: false },
];

function SplitChars({ text, italic, startDelay }: { text: string; italic: boolean; startDelay: number }) {
  const chars = text.split('');
  const shouldReduce = useReducedMotion();
  return (
    <>
      {chars.map((c, i) => (
        <motion.span
          key={i}
          initial={shouldReduce ? false : { y: '0.68em', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.82,
            delay: startDelay + i * 0.022,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: 'inline-block' }}
        >
          {c === ' ' ? ' ' : c}
        </motion.span>
      ))}
    </>
  );
}

export default function Hero() {
  const logoTrackRef = useRef<HTMLDivElement>(null);
  const techTrackRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce) return;

    // Tech marquee
    const techTrack = techTrackRef.current;
    if (techTrack) {
      let x = 0;
      const width = techTrack.scrollWidth / 2;
      const speed = width / 42000; // pixels per ms (42s for one loop)
      let lastTime: number | null = null;
      let rafId: number;
      const animate = (time: number) => {
        if (lastTime !== null) {
          x -= speed * (time - lastTime);
          if (x <= -width) x += width;
          techTrack.style.transform = `translateX(${x}px)`;
        }
        lastTime = time;
        rafId = requestAnimationFrame(animate);
      };
      rafId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(rafId);
    }
  }, [shouldReduce]);

  useEffect(() => {
    if (shouldReduce) return;
    const logoTrack = logoTrackRef.current;
    if (!logoTrack) return;

    let x = 0;
    let paused = false;
    const width = logoTrack.scrollWidth / 3;
    const speed = width / 28000;
    let lastTime: number | null = null;
    let rafId: number;

    const animate = (time: number) => {
      if (!paused && lastTime !== null) {
        x -= speed * (time - lastTime);
        if (x <= -width) x += width;
        logoTrack.style.transform = `translateX(${x}px)`;
      }
      lastTime = time;
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const onEnter = () => { paused = true; };
    const onLeave = () => { paused = false; };
    logoTrack.addEventListener('mouseenter', onEnter);
    logoTrack.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      logoTrack.removeEventListener('mouseenter', onEnter);
      logoTrack.removeEventListener('mouseleave', onLeave);
    };
  }, [shouldReduce]);

  const metaChips = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: 10, height: 10 }}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>, label: '~8 years experience' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: 10, height: 10 }}><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /></svg>, label: '3× Cloud AI Certified (AWS GenAI · AWS ML · Azure AI)' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: 10, height: 10 }}><path d="M4 6h16M4 12h16M4 18h10" /></svg>, label: 'MSCS · UMKC' },
  ];

  let charOffset = 0;
  const lineDelayBase = 0.48;

  return (
    <header style={{ position: 'relative', padding: '56px 0 40px', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 48, alignItems: 'center' }}>
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={shouldReduce ? false : { y: 26, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '8px 18px 8px 10px',
              background: 'var(--surface)',
              borderRadius: 999,
              fontSize: 13,
              color: 'var(--ink-muted)',
              border: '1px solid var(--line)',
              marginBottom: 32,
              boxShadow: 'var(--shadow-1)',
            }}
          >
            <span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', background: 'oklch(70% 0.17 145)', flexShrink: 0 }}>
              <span style={{ content: '', position: 'absolute', inset: -2, borderRadius: '50%', background: 'oklch(70% 0.17 145 / 0.4)', animation: 'radar 2s ease-out infinite' }} />
            </span>
            <span className="mono">Available · Austin, TX</span>
          </motion.div>

          {/* H1 */}
          <h1
            className="display"
            style={{ fontSize: 'clamp(36px, 4.6vw, 72px)', marginBottom: 24, lineHeight: 1.08, maxWidth: 640 }}
          >
            {H1_LINES.map((line, li) => {
              const startDelay = lineDelayBase + charOffset * 0.022;
              const lineChars = line.text.length;
              const el = (
                <span
                  key={li}
                  style={{ display: 'block', overflow: 'hidden' }}
                >
                  {line.italic ? (
                    <em
                      style={{
                        fontFamily: '"Fraunces", Georgia, serif',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        background: 'linear-gradient(105deg, var(--primary) 0%, var(--tertiary) 60%, var(--accent-warm) 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        paddingRight: '0.1em',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      <SplitChars text={line.text} italic={true} startDelay={startDelay} />
                    </em>
                  ) : (
                    <SplitChars text={line.text} italic={false} startDelay={startDelay} />
                  )}
                </span>
              );
              charOffset += lineChars;
              return el;
            })}
          </h1>

          {/* Lede */}
          <motion.p
            initial={shouldReduce ? false : { y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.92, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ maxWidth: 540, fontSize: 'clamp(17px, 1.3vw, 20px)', color: 'var(--ink-muted)', marginBottom: 36, lineHeight: 1.5 }}
          >
            I&apos;m Kanakaraju — a Senior GenAI Engineer with ~8 years across financial services, payments, e-commerce, and healthcare. I design and deploy production-grade LLM systems, agentic AI workflows, and RAG pipelines for regulated enterprise environments.
          </motion.p>

          {/* Meta chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
            {metaChips.map((chip, i) => (
              <motion.span
                key={i}
                initial={shouldReduce ? false : { y: 18, opacity: 0, scale: 0.88 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.08 + i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 14px',
                  borderRadius: 999,
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  fontSize: 13,
                  boxShadow: 'var(--shadow-1)',
                }}
              >
                <span style={{ width: 16, height: 16, borderRadius: 5, background: 'var(--primary-soft)', color: 'var(--primary)', display: 'grid', placeItems: 'center' }}>
                  {chip.icon}
                </span>
                {chip.label}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { label: 'Explore work', href: '#work', ghost: false },
              { label: 'Download résumé', href: '#contact', ghost: true },
            ].map((btn, i) => (
              <motion.a
                key={i}
                href={btn.href}
                initial={shouldReduce ? false : { y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.48, delay: 1.25 + i * 0.11 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '11px 20px',
                  borderRadius: 999,
                  background: btn.ghost ? 'var(--surface-2)' : 'var(--ink)',
                  color: btn.ghost ? 'var(--ink)' : 'var(--bg)',
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: '-0.005em',
                  textDecoration: 'none',
                }}
              >
                {btn.label}
                {!btn.ghost && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right visual placeholder — empty as in original */}
        <div />
      </div>

      {/* Marquees */}
      <div className="container">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.38 }}
          style={{
            marginTop: 60,
            padding: '22px 0',
            borderTop: '1px solid var(--line)',
            borderBottom: '1px solid var(--line)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <span style={{ content: '', position: 'absolute', top: 0, bottom: 0, left: 0, width: 120, zIndex: 2, background: 'linear-gradient(to right, var(--bg), transparent)', pointerEvents: 'none' }} />
          <span style={{ content: '', position: 'absolute', top: 0, bottom: 0, right: 0, width: 120, zIndex: 2, background: 'linear-gradient(to left, var(--bg), transparent)', pointerEvents: 'none' }} />
          <div ref={techTrackRef} style={{ display: 'flex', gap: 48, width: 'max-content', willChange: 'transform' }}>
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((t, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--ink-muted)', fontSize: 15, whiteSpace: 'nowrap' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduce ? false : { y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.52 }}
          style={{ marginTop: 14, padding: '28px 0', overflow: 'hidden', position: 'relative' }}
        >
          <span style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 160, zIndex: 2, background: 'linear-gradient(to right, var(--bg), transparent)', pointerEvents: 'none' }} />
          <span style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 160, zIndex: 2, background: 'linear-gradient(to left, var(--bg), transparent)', pointerEvents: 'none' }} />
          <span style={{ display: 'block', textAlign: 'center', color: 'var(--ink-faint)', fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.18em', marginBottom: 18 }}>
            Trusted across regulated enterprise — past &amp; present
          </span>
          <div ref={logoTrackRef} style={{ display: 'flex', gap: 72, width: 'max-content', alignItems: 'center', willChange: 'transform' }}>
            {[...LOGO_MARQUEE, ...LOGO_MARQUEE, ...LOGO_MARQUEE].map((l, i) => (
              <span
                key={i}
                title={l.name}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 14, whiteSpace: 'nowrap', opacity: 0.55, filter: 'grayscale(1)', transition: 'opacity .4s, filter .4s, transform .5s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.opacity = '1'; (e.currentTarget as HTMLSpanElement).style.filter = 'grayscale(0)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.opacity = '0.55'; (e.currentTarget as HTMLSpanElement).style.filter = 'grayscale(1)'; }}
              >
                <Image
                  src={l.src}
                  alt={l.name}
                  width={110}
                  height={38}
                  unoptimized
                  style={{ height: 38, width: 'auto', maxWidth: 110, objectFit: 'contain', display: 'block' }}
                />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
