'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function AmbientOrbs() {
  const cursorX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth * 0.12 : 200);
  const cursorY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight * 0.3 : 300);

  const springX = useSpring(cursorX, { stiffness: 38, damping: 24, mass: 1.6 });
  const springY = useSpring(cursorY, { stiffness: 38, damping: 24, mass: 1.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [cursorX, cursorY]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
        opacity: 0.38,
      }}
    >
      {/* Primary orb — follows cursor */}
      <motion.div
        style={{
          position: 'absolute',
          width: '70vw',
          height: '70vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, color-mix(in oklab, var(--primary-container) 100%, transparent) 0%, transparent 70%)',
          left: springX,
          top: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Secondary orb — static anchor, bottom-right */}
      <div
        style={{
          position: 'absolute',
          width: '55vw',
          height: '55vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, color-mix(in oklab, var(--secondary-container) 100%, transparent) 0%, transparent 70%)',
          right: '-10vw',
          bottom: '-10vw',
        }}
      />
    </div>
  );
}
