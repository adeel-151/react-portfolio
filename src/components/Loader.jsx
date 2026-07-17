import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        // Increment randomly for realistic feel
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'var(--darker)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
      }}
    >
      <div style={{ position: 'relative', width: '200px', height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            backgroundColor: 'var(--primary)',
            boxShadow: '0 0 10px var(--primary)'
          }}
        />
      </div>
      <motion.div
        style={{
          marginTop: '1.5rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--light)',
          fontSize: '1.2rem',
          letterSpacing: '2px'
        }}
      >
        {progress}%
      </motion.div>
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{
          marginTop: '0.5rem',
          fontFamily: 'var(--font-display)',
          color: 'var(--primary)',
          fontSize: '0.8rem',
          letterSpacing: '4px',
          textTransform: 'uppercase'
        }}
      >
        Initializing
      </motion.div>
    </motion.div>
  );
};

export default Loader;
