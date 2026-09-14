'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useInView, useMotionValue, animate, type Variants } from 'framer-motion';

interface CounterProps {
  target: number;
  suffix: string;
  label: string;
}

function AnimatedCounter({ target, suffix, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const motionVal = useMotionValue(0);
  const displayRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!isInView || shouldReduce) {
      if (displayRef.current) {
        const isFloat = !Number.isInteger(target);
        displayRef.current.textContent = (isFloat ? target.toFixed(1) : String(target)) + suffix;
      }
      return;
    }
    const controls = animate(motionVal, target, {
      duration: 1.6,
      ease: [0.33, 1, 0.68, 1],
      onUpdate(val) {
        if (displayRef.current) {
          const isFloat = !Number.isInteger(target);
          displayRef.current.textContent = (isFloat ? val.toFixed(1) : String(Math.round(val))) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [isInView, target, suffix, shouldReduce, motionVal]);

  return (
    <div ref={ref} style={{ padding: '14px 16px', background: 'var(--surface-2)', borderRadius: 'var(--r-s)', border: '1px solid var(--line)', transition: 'transform .45s var(--ease-spring)' }}>
      <div
        ref={displayRef}
        style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, color: 'var(--ink)', lineHeight: 1, letterSpacing: '-0.03em' }}
      >
        0{suffix}
      </div>
      <div style={{ fontSize: 11, color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: 6 }}>
        {label}
      </div>
    </div>
  );
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function About() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <section id="about" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, marginBottom: 56, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <div className="mono" style={{ color: 'var(--ink-faint)' }}>01 · Positioning</div>
            <motion.h2
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(40px, 5vw, 76px)', letterSpacing: '-0.03em', lineHeight: 0.95, marginTop: 14 }}
            >
              Building AI systems<br />that are{' '}
              <em style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)' }}>actually</em>
              {' '}deployed.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.52, delay: 0.1 }}
            style={{ maxWidth: 380, color: 'var(--ink-faint)', fontSize: 15.5 }}
          >
            Frontier models are easy to demo. Getting them past compliance, into production, and onto the critical path — that&apos;s the work I care about.
          </motion.p>
        </div>

        <div
          ref={gridRef}
          className="about-grid"
        >
          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="about-span-7"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              padding: 28,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-1)',
              borderRadius: 'var(--r-l) var(--r-l) var(--r-s) var(--r-l)',
            }}
          >
            <span className="mono" style={{ color: 'var(--ink-faint)' }}>Philosophy</span>
            <h3 style={{ fontSize: 26, fontFamily: 'var(--font-display)', fontWeight: 500, margin: '12px 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              LLMs are a component.<br />MLOps is the product.
            </h3>
            <p style={{ color: 'color-mix(in oklab, currentColor 75%, transparent)', fontSize: 15 }}>
              My work centers on the unglamorous layer between a model and a user — retrieval, evaluation, observability, safety rails, and deployment. I architect Model Context Protocol servers, LangGraph multi-agent workflows, and fine-tuned RAG pipelines that survive contact with auditors.
            </p>
            <div className="about-counters">
              <AnimatedCounter target={85} suffix="%" label="Fewer hallucinations" />
              <AnimatedCounter target={60} suffix="%" label="Faster onboarding" />
              <AnimatedCounter target={95} suffix="%" label="Chargebacks cut" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="about-span-5"
            style={{
              background: 'var(--ink)',
              color: 'var(--bg)',
              border: '1px solid var(--line)',
              padding: 28,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-1)',
              borderRadius: 'var(--r-l)',
            }}
          >
            <span className="mono" style={{ color: 'color-mix(in oklab, var(--bg) 60%, transparent)' }}>Currently</span>
            <h3 style={{ fontSize: 26, fontFamily: 'var(--font-display)', fontWeight: 500, margin: '10px 0 12px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              GenAI Engineer at Arm
            </h3>
            <p style={{ color: 'color-mix(in oklab, currentColor 75%, transparent)', fontSize: 15 }}>
              Building the Arm MCP Server and the agentic retrieval stack behind it — helping developers move workloads from x86 to Arm using autonomous AI agents wired into Copilot, Claude Code, Kiro and Gemini CLIs.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="about-span-4"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              padding: 28,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-1)',
              borderRadius: 'var(--r-s) var(--r-l) var(--r-l) var(--r-l)',
            }}
          >
            <span className="mono" style={{ color: 'var(--ink-faint)' }}>Domains</span>
            <h3 style={{ fontSize: 22, fontFamily: 'var(--font-display)', fontWeight: 500, margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Where I&apos;ve shipped</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Silicon & developer tooling', 'Payments & fraud', 'Retail supply chain', 'Search & recommendations'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14.5 }}>
                  <span style={{ width: 18, height: 2, background: 'currentColor', opacity: 0.4, flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="about-span-4"
            style={{
              background: 'var(--surface-2)',
              border: '1px solid var(--line)',
              padding: 28,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-1)',
              borderRadius: 'var(--r-l) var(--r-s) var(--r-l) var(--r-l)',
            }}
          >
            <span className="mono" style={{ opacity: 0.6 }}>Signature stack</span>
            <h3 style={{ fontSize: 22, fontFamily: 'var(--font-display)', fontWeight: 500, margin: '0 0 8px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Agentic workflows</h3>
            <p style={{ fontSize: 14, color: 'color-mix(in oklab, currentColor 75%, transparent)' }}>
              FastMCP · LangGraph · LlamaIndex · Claude · GPT-5 · Bedrock · Milvus · FAISS · vLLM · LangSmith
            </p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="about-span-4"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              padding: 28,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-1)',
              borderRadius: 'var(--r-l) var(--r-l) var(--r-s) var(--r-l)',
            }}
          >
            <span className="mono" style={{ opacity: 0.6 }}>Cloud fluency</span>
            <h3 style={{ fontSize: 22, fontFamily: 'var(--font-display)', fontWeight: 500, margin: '0 0 8px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Multi-cloud by default</h3>
            <p style={{ fontSize: 14, color: 'color-mix(in oklab, currentColor 75%, transparent)' }}>
              SageMaker · Bedrock · EKS · Vertex AI · BigQuery · Kubeflow · Databricks · Snowflake · Terraform
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
