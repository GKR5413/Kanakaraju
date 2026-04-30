'use client';

import { motion } from 'framer-motion';

export default function AmbientOrbs() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}
    >
      <motion.div
        animate={{ x: ['0%', '5%', '0%'], y: ['0%', '8%', '0%'], scale: [1, 1.12, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-14%',
          left: '-8%',
          width: '55vw',
          aspectRatio: '1',
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: 0.35,
          background: 'radial-gradient(circle at 30% 30%, var(--primary-container), transparent 70%)',
        }}
      />
      <motion.div
        animate={{ x: ['0%', '-7%', '0%'], y: ['0%', '-5%', '0%'], scale: [1, 1.18, 1] }}
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '50vw',
          aspectRatio: '1',
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: 0.35,
          background: 'radial-gradient(circle at 50% 50%, var(--secondary-container), transparent 70%)',
        }}
      />
    </div>
  );
}
