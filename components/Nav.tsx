'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#work' },
  { label: 'Craft', href: '#skills' },
  { label: 'Credentials', href: '#certs' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const saved = localStorage.getItem('theme') ?? 'light';
    document.documentElement.dataset.theme = saved;
    if (saved === 'dark') setIsDark(true);
  }, []);

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    setIsDark(!isDark);
  };

  const movePill = (idx: number | null) => {
    if (idx === null) {
      setPillStyle(p => ({ ...p, opacity: 0 }));
      return;
    }
    const el = linkRefs.current[idx];
    const container = navLinksRef.current;
    if (!el || !container) return;
    const r = el.getBoundingClientRect();
    const p = container.getBoundingClientRect();
    setPillStyle({ left: r.left - p.left, width: r.width, opacity: 1 });
  };

  useEffect(() => {
    const displayIdx = hoveredIdx !== null ? hoveredIdx : activeIdx >= 0 ? activeIdx : null;
    movePill(displayIdx);
  }, [hoveredIdx, activeIdx]);

  useEffect(() => {
    const sectionIds = ['about', 'work', 'skills', 'certs', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            const id = en.target.id;
            const idx = sectionIds.indexOf(id);
            setActiveIdx(idx);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -52, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
      style={{ position: 'sticky', top: 16, zIndex: 50, display: 'flex', justifyContent: 'center', pointerEvents: 'none', padding: '0 16px' }}
    >
      <div
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 8px 8px 20px',
          background: 'color-mix(in oklab, var(--surface) 75%, transparent)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid var(--line)',
          borderRadius: 999,
          boxShadow: 'var(--shadow-1)',
        }}
      >
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em' }}>
          <span style={{ position: 'relative', width: 28, height: 28, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--primary-ink)' }}>
            <svg viewBox="0 0 28 28" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <path
                d="M14,2 C18,2 22,6 24,10 C26,14 26,18 22,22 C18,26 14,26 10,24 C6,22 2,18 2,14 C2,10 6,4 10,3 C12,2 13,2 14,2 Z"
                style={{ fill: 'var(--ink)', animation: 'spinMono 14s linear infinite', transformOrigin: 'center' }}
              />
            </svg>
            <span style={{ position: 'relative', zIndex: 1, color: 'var(--bg)' }}>R</span>
          </span>
          <span className="nav-brand-name">Raju Gottumukkala</span>
        </div>

        {/* Links */}
        <div
          ref={navLinksRef}
          style={{ display: 'flex', gap: 2, marginLeft: 16, position: 'relative' }}
          onMouseLeave={() => setHoveredIdx(null)}
          className="nav-links-wrapper"
        >
          {/* Animated pill */}
          <span
            style={{
              position: 'absolute',
              height: '100%',
              background: 'var(--surface-2)',
              borderRadius: 999,
              transition: 'transform 0.55s var(--ease-spring), width 0.55s var(--ease-spring), opacity 0.35s',
              opacity: pillStyle.opacity,
              zIndex: 0,
              top: 0,
              left: 0,
              width: pillStyle.width,
              transform: `translateX(${pillStyle.left}px)`,
              pointerEvents: 'none',
            }}
          />
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              ref={el => { linkRefs.current[i] = el; }}
              onMouseEnter={() => setHoveredIdx(i)}
              style={{
                padding: '8px 14px',
                borderRadius: 999,
                fontSize: 14,
                color: activeIdx === i || hoveredIdx === i ? 'var(--ink)' : 'var(--ink-muted)',
                transition: 'color .3s',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginLeft: 8 }}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              position: 'relative',
              width: 60,
              height: 32,
              borderRadius: 999,
              background: 'var(--surface-2)',
              border: '1px solid var(--line)',
              cursor: 'pointer',
              padding: 0,
              overflow: 'hidden',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 3,
                left: 3,
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: 'var(--ink)',
                transition: 'transform .7s var(--ease-spring), background .4s',
                transform: isDark ? 'translateX(28px)' : 'translateX(0)',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--bg)',
              }}
            >
              {isDark ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              )}
            </span>
          </button>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '11px 20px',
              borderRadius: 999,
              background: 'var(--ink)',
              color: 'var(--bg)',
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: '-0.005em',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            Let&apos;s talk
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
