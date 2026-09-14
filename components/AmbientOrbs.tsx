'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';

export default function AmbientOrbs() {
  // Fixed seed on both server and client; the real position arrives after mount.
  const cursorX = useMotionValue(200);
  const cursorY = useMotionValue(300);
  // A motion value, not state — fading in must not trigger a re-render.
  const opacity = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 38, damping: 24, mass: 1.6 });
  const springY = useSpring(cursorY, { stiffness: 38, damping: 24, mass: 1.6 });

  useEffect(() => {
    cursorX.set(window.innerWidth * 0.12);
    cursorY.set(window.innerHeight * 0.3);
    const fade = animate(opacity, 0.38, { duration: 1.2, ease: [0.2, 0.8, 0.2, 1] });
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      fade.stop();
      window.removeEventListener('mousemove', onMove);
    };
  }, [cursorX, cursorY, opacity]);

  return (
    <motion.div
      aria-hidden="true"
      className="ambient-orbs"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
        opacity,
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
    </motion.div>
  );
}
