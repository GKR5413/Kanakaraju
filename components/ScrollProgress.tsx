'use client';

import { useScroll, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: '0%', background: 'var(--ink)', height: 2 }}
      className="fixed top-0 left-0 right-0 z-[100] origin-left"
    />
  );
}
