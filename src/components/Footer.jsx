import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        padding: '3rem 0 4rem',
        borderTop: '1px solid var(--border-light)',
        marginTop: '4rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
          className="footer-inner"
        >
          {/* Brand */}
          <div>
            <a
              href="#home"
              style={{
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: 'var(--light)',
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <img src="/favicon.svg" alt="AQ" style={{ width: '24px', height: '24px', borderRadius: '6px' }} />
              <span>adeel qaiser<span style={{ color: 'var(--primary)' }}>*</span></span>
            </a>
          </div>

          {/* Quick Nav Links */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { name: 'Projects', href: '#projects' },
              { name: 'Services', href: '#skills' },
              { name: 'About', href: '#about' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: 'var(--gray)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--light)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray)')}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div
            style={{
              color: 'var(--gray-dark)',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            © {new Date().getFullYear()} Adeel Qaiser. All rights reserved.
          </div>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 640px) {
            .footer-inner {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 1.5rem !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
