'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface ToolCall {
  tool: string;
  arg: string;
  result: string;
  ms: string;
}

/** Representative of the Arm MCP Server toolset described in the Experience section. */
const CALLS: ToolCall[] = [
  { tool: 'migrate.scan_repo', arg: 'path: "./services/api"', result: '142 files · 6 x86 intrinsics flagged', ms: '412ms' },
  { tool: 'docker.check_image', arg: 'arch: "linux/arm64"', result: 'compatible · dual-arch manifest ok', ms: '229ms' },
  { tool: 'rag.query', arg: 'k: 5, rerank: true', result: '12 docs · recall@5 0.92', ms: '186ms' },
  { tool: 'bench.llvm_mca', arg: 'target: "neoverse-n1"', result: 'throughput +18% vs baseline', ms: '338ms' },
  { tool: 'terraform.plan', arg: 'guardrails: "strict"', result: 'least-privilege IAM · 0 violations', ms: '504ms' },
];

const STEP = 2600;

export default function HeroConsole() {
  const shouldReduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<'call' | 'result'>('call');

  useEffect(() => {
    if (shouldReduce) return;
    const toResult = setTimeout(() => setPhase('result'), STEP * 0.42);
    const next = setTimeout(() => {
      setIdx(i => (i + 1) % CALLS.length);
      setPhase('call');
    }, STEP);
    return () => { clearTimeout(toResult); clearTimeout(next); };
  }, [idx, shouldReduce]);

  const active = CALLS[idx];
  const showResult = shouldReduce || phase === 'result';

  return (
    <div
      aria-hidden="true"
      className="hero-console"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--r-m)',
        boxShadow: 'var(--shadow-2)',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        width: '100%',
        maxWidth: 420,
        marginLeft: 'auto',
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '12px 16px',
          borderBottom: '1px solid var(--line)',
          background: 'var(--surface-2)',
        }}
      >
        <span style={{ display: 'flex', gap: 5 }}>
          {['oklch(70% 0.17 25)', 'oklch(78% 0.14 80)', 'oklch(72% 0.15 145)'].map(c => (
            <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.75 }} />
          ))}
        </span>
        <span style={{ color: 'var(--ink-muted)', letterSpacing: '0.04em' }}>arm-mcp-server</span>
        <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--ink-faint)' }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'oklch(70% 0.17 145)',
              animation: shouldReduce ? 'none' : 'radar 2.4s ease-out infinite',
            }}
          />
          connected
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '18px 16px', minHeight: 176, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ color: 'var(--ink-faint)', fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          tools/call
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={shouldReduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.34, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
          >
            {/* Request */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
              <span style={{ color: 'var(--primary)' }}>→</span>
              <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{active.tool}</span>
            </div>
            <div style={{ paddingLeft: 20, color: 'var(--ink-muted)', lineHeight: 1.5 }}>
              {'{ '}{active.arg}{' }'}
            </div>

            {/* Response */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0 }}
              animate={{ opacity: showResult ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', gap: 8, alignItems: 'baseline', marginTop: 4 }}
            >
              <span style={{ color: 'oklch(62% 0.15 145)' }}>←</span>
              <span style={{ color: 'var(--ink-muted)', lineHeight: 1.5 }}>{active.result}</span>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Footer meter */}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, paddingTop: 12, borderTop: '1px solid var(--line)' }}>
          <div style={{ flex: 1, height: 2, background: 'var(--line)', borderRadius: 2, overflow: 'hidden' }}>
            <motion.div
              key={`bar-${idx}`}
              initial={shouldReduce ? { width: '100%' } : { width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: shouldReduce ? 0 : STEP / 1000, ease: 'linear' }}
              style={{ height: '100%', background: 'var(--primary)' }}
            />
          </div>
          <span style={{ color: 'var(--ink-faint)', fontSize: 11 }}>{active.ms}</span>
        </div>
      </div>
    </div>
  );
}
