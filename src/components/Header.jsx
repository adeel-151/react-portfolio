import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/skills', label: 'SKILLS' },
    { path: '/contact', label: 'CONTACT' }
  ];

  return (
    <motion.header 
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: isScrolled ? '10px 0' : '20px 0',
        background: isScrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span className="text-gradient" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px' }}>
                AQ
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '1rem' }} className="desktop-nav">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    position: 'relative',
                    padding: '8px 16px',
                    color: isActive ? '#fff' : 'var(--gray)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontFamily: 'var(--font-accent)',
                    letterSpacing: '1px',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(99, 102, 241, 0.2)',
                        border: '1px solid rgba(99, 102, 241, 0.5)',
                        borderRadius: '8px',
                        zIndex: -1
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <style>
            {`
              @media (max-width: 768px) {
                .desktop-nav { display: none !important; }
                .mobile-toggle { display: block !important; }
              }
              .mobile-toggle { display: none; }
            `}
          </style>

          <motion.button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(2, 6, 23, 0.95)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            <div className="container" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      display: 'block',
                      padding: '10px',
                      color: location.pathname === item.path ? 'var(--primary)' : 'var(--light)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      borderLeft: location.pathname === item.path ? '3px solid var(--primary)' : '3px solid transparent'
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;