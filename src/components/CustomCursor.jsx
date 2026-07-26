import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  // Use MotionValues for butter-smooth performance (bypasses React state re-renders completely)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for the outer ring trailing effect
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const outerX = useSpring(cursorX, springConfig);
  const outerY = useSpring(cursorY, springConfig);

  // Stiffer springs for the inner dot to follow exactly
  const innerSpringConfig = { damping: 40, stiffness: 1000, mass: 0.1 };
  const innerX = useSpring(cursorX, innerSpringConfig);
  const innerY = useSpring(cursorY, innerSpringConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
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

    // Use passive listener for better scroll/movement performance
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  const outerVariants = {
    default: {
      scale: 1,
      opacity: 1,
      backgroundColor: 'rgba(99, 102, 241, 0.05)',
      border: '1.5px solid rgba(99, 102, 241, 0.5)',
      boxShadow: '0 0 15px rgba(99, 102, 241, 0.3), inset 0 0 10px rgba(99, 102, 241, 0.1)'
    },
    hover: {
      scale: 1.6,
      opacity: 1,
      backgroundColor: 'rgba(6, 182, 212, 0.1)',
      border: '1px solid rgba(6, 182, 212, 0.6)',
      boxShadow: '0 0 30px rgba(6, 182, 212, 0.6), inset 0 0 15px rgba(6, 182, 212, 0.2)'
    },
    click: {
      scale: 0.8,
      backgroundColor: 'rgba(99, 102, 241, 0.4)',
      border: '2px solid var(--primary)',
      boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)'
    }
  };

  const innerVariants = {
    default: { scale: 1, opacity: 1 },
    hover: { scale: 0, opacity: 0 },
    click: { scale: 0.5, opacity: 0.5 }
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
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          marginLeft: '-20px', // Perfect centering independent of scale
          marginTop: '-20px',
          x: outerX,           // Directly bound to useSpring (no re-renders)
          y: outerY,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          backdropFilter: isHovering ? 'blur(2px)' : 'none',
        }}
      />
      <motion.div
        variants={innerVariants}
        animate={activeVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          marginLeft: '-4px',
          marginTop: '-4px',
          x: innerX,
          y: innerY,
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
