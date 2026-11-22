import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

const Header = () => {
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
        padding: isScrolled ? '14px 0' : '28px 0',
        backgroundColor: isScrolled ? 'rgba(8, 9, 11, 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid transparent',
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
              alignItems: 'center',
              gap: '0.85rem',
            }}
          >
            <img 
              src="/favicon.svg" 
              alt="AQ Logo" 
              style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
              }} 
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.45rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--light)',
              }}
            >
              adeel qaiser<span style={{ color: 'var(--primary)' }}>*</span>
            </span>

            <span
              className="header-subtitle"
              style={{
                fontSize: '0.75rem',
                color: 'var(--gray)',
                letterSpacing: '0.02em',
                lineHeight: 1.2,
                display: 'none',
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
              @media (max-width: 820px) {
                .desktop-nav-wrap { display: none !important; }
                .mobile-nav-toggle { display: flex !important; }
              }
              .mobile-nav-toggle { display: none; }
            `}
          </style>

          {/* Desktop Navigation */}
          <div className="desktop-nav-wrap" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
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

            {/* Pill CTA button (Let's talk) */}
            <a
              href="#contact"
              style={{
                padding: '0.55rem 1.35rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: 'var(--light)',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
                e.currentTarget.style.color = 'var(--darker)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--light)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              }}
            >
              Let's talk
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--light)',
              fontSize: '1.6rem',
              cursor: 'pointer',
              padding: '4px',
            }}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
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
              background: 'rgba(6, 9, 19, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
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
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-pill btn-pill-dark"
                style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
              >
                Let's talk <FiArrowUpRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
