import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Improved hover detection including computed styles
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('glass-card') ||
        e.target.classList.contains('btn-premium') ||
        window.getComputedStyle(e.target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const cursorX = mousePosition.x;
  const cursorY = mousePosition.y;

  const outerVariants = {
    default: {
      x: cursorX - 20,
      y: cursorY - 20,
      scale: 1,
      opacity: 1,
      backgroundColor: 'rgba(99, 102, 241, 0.05)',
      border: '1.5px solid rgba(99, 102, 241, 0.5)',
      boxShadow: '0 0 15px rgba(99, 102, 241, 0.3), inset 0 0 10px rgba(99, 102, 241, 0.1)'
    },
    hover: {
      x: cursorX - 20,
      y: cursorY - 20,
      scale: 1.6,
      opacity: 1,
      backgroundColor: 'rgba(6, 182, 212, 0.1)',
      border: '1px solid rgba(6, 182, 212, 0.6)',
      boxShadow: '0 0 30px rgba(6, 182, 212, 0.6), inset 0 0 15px rgba(6, 182, 212, 0.2)'
    },
    click: {
      x: cursorX - 20,
      y: cursorY - 20,
      scale: 0.8,
      backgroundColor: 'rgba(99, 102, 241, 0.4)',
      border: '2px solid var(--primary)',
      boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)'
    }
  };

  const innerVariants = {
    default: { 
      x: cursorX - 4, 
      y: cursorY - 4, 
      scale: 1,
      opacity: 1
    },
    hover: { 
      x: cursorX - 4, 
      y: cursorY - 4, 
      scale: 0,
      opacity: 0
    },
    click: {
      x: cursorX - 4, 
      y: cursorY - 4, 
      scale: 0.5,
      opacity: 0.5
    }
  };

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const activeVariant = isClicking ? 'click' : (isHovering ? 'hover' : 'default');

  return (
    <>
      <motion.div
        variants={outerVariants}
        animate={activeVariant}
        // Lower stiffness and damping for a smooth, premium trailing effect
        transition={{ type: 'spring', stiffness: 250, damping: 25, mass: 0.6 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          backdropFilter: isHovering ? 'blur(2px)' : 'none',
        }}
      />
      <motion.div
        variants={innerVariants}
        animate={activeVariant}
        // High stiffness for instant precise tracking of the dot
        transition={{ type: 'spring', stiffness: 1000, damping: 40, mass: 0.1 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--secondary)',
          boxShadow: '0 0 10px var(--secondary), 0 0 20px var(--secondary)',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      />
      <style>{`
        @media (pointer: fine) {
          body, a, button, input, textarea, select {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
