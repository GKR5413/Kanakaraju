'use client';

export default function AmbientOrbs() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
        background:
          'radial-gradient(60vw 60vw at 12% -10%, color-mix(in oklab, var(--primary-container) 100%, transparent) 0%, transparent 60%),' +
          'radial-gradient(55vw 55vw at 100% 110%, color-mix(in oklab, var(--secondary-container) 100%, transparent) 0%, transparent 60%)',
        opacity: 0.35,
      }}
    />
  );
}
