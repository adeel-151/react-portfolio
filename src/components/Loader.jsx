import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('Initializing environment...');

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1600; // 1.6 seconds smooth kinetic intro

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(Math.round((elapsed / duration) * 100), 100);

      setProgress(rawProgress);

      if (rawProgress >= 90) {
        setPhase('Ready to launch.');
      } else if (rawProgress >= 60) {
        setPhase('Configuring editorial layout & themes...');
      } else if (rawProgress >= 25) {
        setPhase('Mounting React & core components...');
      }

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 250);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--darker)',
        color: 'var(--light)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(2rem, 5vw, 4rem)',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Bar: Brand Watermark & Status */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          color: 'var(--gray)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          fontWeight: 400,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-accent)',
              boxShadow: '0 0 10px var(--primary-accent)',
              display: 'inline-block',
            }}
          />
          <span>Adeel Qaiser / Portfolio</span>
        </div>
        <div style={{ display: 'none' }} className="loader-top-coords">
          ISB, PK • 33.7294° N
        </div>
      </div>

      {/* Center Kinetic Experience */}
      <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto' }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            fontWeight: 400,
            color: 'var(--gray)',
            marginBottom: '0.75rem',
            letterSpacing: '-0.01em',
          }}
        >
          Software Engineer <span style={{ color: 'var(--primary-accent)' }}>(MERN)</span>
        </div>

        {/* Massive Editorial Counter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '1rem',
            lineHeight: 0.9,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(5rem, 18vw, 13rem)',
              fontWeight: 500,
              letterSpacing: '-0.05em',
              color: 'var(--light)',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {String(progress).padStart(2, '0')}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              color: 'var(--primary-accent)',
              fontWeight: 400,
            }}
          >
            %
          </span>
        </div>

        {/* Horizontal Hairline Track */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '2px',
            backgroundColor: 'var(--border-light)',
            marginTop: '2rem',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${progress}%`,
              backgroundColor: 'var(--primary-accent)',
              boxShadow: '0 0 12px var(--primary-accent)',
              transition: 'width 0.05s linear',
            }}
          />
        </div>

        {/* Phase Indicator */}
        <div
          style={{
            marginTop: '1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--gray)',
            fontWeight: 400,
          }}
        >
          <span style={{ color: 'var(--light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--primary-accent)' }}>&gt;</span> {phase}
          </span>
          <span style={{ color: 'var(--gray-dark)' }}>{progress}/100</span>
        </div>
      </div>

      {/* Bottom Bar: Philosophy & Timestamp */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--gray-dark)',
          fontWeight: 400,
        }}
      >
        <span>Clean Code • Considered UX</span>
        <span>© {new Date().getFullYear()}</span>
      </div>

      <style>
        {`
          @media (min-width: 640px) {
            .loader-top-coords { display: block !important; }
          }
        `}
      </style>
    </motion.div>
  );
};

export default Loader;
