import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowUpRight, FiSun, FiMoon } from 'react-icons/fi';

const Header = ({ theme = 'dark', toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Services', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: isScrolled ? '14px 0' : '26px 0',
        backgroundColor: isScrolled ? 'var(--header-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--header-border)' : '1px solid transparent',
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo Brand with Subtitle (Editorial Style) */}
          <a
            href="#home"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'baseline',
              gap: '1.25rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.45rem',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                color: 'var(--light)',
              }}
            >
              adeel qaiser<span style={{ color: 'var(--primary-accent)' }}>*</span>
            </span>

            <span
              className="header-subtitle"
              style={{
                fontSize: '0.75rem',
                color: 'var(--gray)',
                letterSpacing: '0.02em',
                lineHeight: 1.2,
                display: 'none',
                fontWeight: 400,
              }}
            >
              Software Engineer<br />(MERN)
            </span>
          </a>

          <style>
            {`
              @media (min-width: 640px) {
                .header-subtitle { display: block !important; }
              }
              @media (max-width: 860px) {
                .desktop-nav-wrap { display: none !important; }
                .mobile-nav-toggle-wrap { display: flex !important; }
              }
              .mobile-nav-toggle-wrap { display: none; }
            `}
          </style>

          {/* Desktop Navigation */}
          <div className="desktop-nav-wrap" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <nav style={{ display: 'flex', gap: '2rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: 'var(--light)',
                    opacity: 0.85,
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    transition: 'opacity 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.85';
                    e.currentTarget.style.color = 'var(--light)';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            {/* Pill CTA button (Let's talk) */}
            <a
              href="#contact"
              style={{
                padding: '0.55rem 1.35rem',
                borderRadius: '9999px',
                border: '1px solid var(--btn-pill-outline-border)',
                color: 'var(--light)',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                transition: 'all 0.25s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-accent)';
                e.currentTarget.style.color = '#08090b';
                e.currentTarget.style.borderColor = 'var(--primary-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--light)';
                e.currentTarget.style.borderColor = 'var(--btn-pill-outline-border)';
              }}
            >
              Let's talk
            </a>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="mobile-nav-toggle-wrap" style={{ alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--light)',
                fontSize: '1.6rem',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'var(--mobile-menu-bg)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-light)',
              padding: '1.5rem 0',
            }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    color: 'var(--light)',
                    textDecoration: 'none',
                    fontSize: '1.15rem',
                    fontWeight: 500,
                    padding: '0.5rem 0',
                  }}
                >
                  {link.name}
                </a>
              ))}
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-pill btn-pill-dark"
                >
                  Let's talk <FiArrowUpRight />
                </a>
                
                <button
                  onClick={toggleTheme}
                  className="theme-toggle-btn"
                  style={{ width: '44px', height: '44px' }}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <FiSun /> : <FiMoon />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
