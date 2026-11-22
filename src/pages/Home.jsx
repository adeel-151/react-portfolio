import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiArrowUpRight, 
  FiArrowDown, 
  FiLayers, 
  FiDatabase,
  FiCode
} from 'react-icons/fi';
import cv from '../assets/Adeel-Qaiser.pdf';

// Reusable card content layout
const CardBody = ({ card }) => (
  <div>
    {/* Card Top Row: Icon & Tag */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
      <div 
        style={{ 
          fontSize: '1.25rem', 
          color: card.accentColor,
          fontFamily: 'var(--font-mono)',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {card.icon}
      </div>
      <span
        style={{
          fontSize: '0.8rem',
          color: card.tagColor,
          fontWeight: 500,
          fontFamily: 'var(--font-body)',
        }}
      >
        {card.tag}
      </span>
    </div>

    {/* Card Title */}
    <div
      style={{
        fontSize: '1.45rem',
        fontWeight: 500,
        color: card.textColor,
        lineHeight: 1.25,
        marginBottom: '0.6rem',
        letterSpacing: '-0.02em',
      }}
    >
      {card.title}
    </div>

    {/* Subtitle / Tech Stack */}
    <div
      style={{
        fontSize: '0.86rem',
        color: card.descColor,
        fontFamily: 'var(--font-body)',
        lineHeight: 1.4,
        fontWeight: 400,
      }}
    >
      {card.tech}
    </div>
  </div>
);

const Home = ({ theme = 'dark' }) => {
  // First 3 Cards tailored specifically for Adeel's MERN engineering stack
  const cards = [
    {
      id: 1,
      tag: 'Frontend Engineering',
      icon: <FiCode />,
      title: 'Responsive & Fluid Interfaces.',
      tech: 'React 19 / TypeScript / Vite / Modern UI',
      bg: '#ffffff',
      textColor: '#090e1c',
      descColor: '#52525b',
      accentColor: '#090e1c',
      tagColor: '#71717a',
    },
    {
      id: 2,
      tag: 'Backend Systems',
      icon: <FiLayers />,
      title: 'Scalable Server Architecture.',
      tech: 'Node.js / Express / REST APIs / Auth',
      bg: '#c5f82a', // Signature lime card
      textColor: '#090e1c',
      descColor: '#27272a',
      accentColor: '#090e1c',
      tagColor: '#3f3f46',
    },
    {
      id: 3,
      tag: 'Database & Cloud',
      icon: <FiDatabase />,
      title: 'High-Throughput Data Stores.',
      tech: 'MongoDB / PostgreSQL / Neon / SQL',
      bg: '#0c1527',
      textColor: '#ffffff',
      descColor: '#94a3b8',
      accentColor: '#10b981',
      tagColor: '#a7f3d0',
      border: '1px solid rgba(16, 185, 129, 0.35)',
    },
  ];

  return (
    <section className="section-wrapper" style={{ paddingTop: 'clamp(95px, 11vh, 115px)', paddingBottom: '0' }}>
      <div className="container">
        
        {/* Top Hero Layout */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.25fr 0.75fr', 
            gap: '2.5rem', 
            alignItems: 'center',
          }}
          className="hero-main-grid"
        >
          {/* Left Column: Typography & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              style={{
                fontSize: 'clamp(2rem, 6.2vw, 5rem)',
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                marginBottom: '1.25rem',
                color: 'var(--light)'
              }}
            >
              Code with intent.<br />Built to scale.
            </h1>

            <div style={{ maxWidth: '520px', marginBottom: '1.75rem' }}>
              <div style={{ marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--light)', display: 'block' }}>
                  Adeel Qaiser
                </span>
                <span style={{ fontSize: '0.92rem', color: 'var(--gray)', fontWeight: 400 }}>
                  Software Engineer (MERN)
                </span>
              </div>

              <p style={{ color: 'var(--gray)', fontSize: '1rem', lineHeight: '1.65', marginTop: '0.6rem', fontWeight: 400 }}>
                I engineer reliable full-stack applications, scalable backend APIs, and responsive interactive interfaces with clean code and modern web standards.
              </p>
            </div>

            {/* CTA Buttons - fully visible & responsive */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>
              <a href="#projects" className="btn-pill btn-pill-dark">
                Explore my builds <FiArrowUpRight style={{ fontSize: '1.1rem' }} />
              </a>
              <a href="#contact" className="text-arrow-link" style={{ fontSize: '1rem', fontWeight: 500 }}>
                Let's talk
              </a>
              <a href={cv} download className="text-arrow-link" style={{ fontSize: '0.95rem', color: 'var(--gray)' }}>
                Download CV <FiArrowUpRight />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Visual Perspective Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '360px',
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                perspective: '1000px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '240px',
                  height: '240px',
                  background: 'radial-gradient(circle, var(--ambient-glow-1) 0%, var(--ambient-glow-2) 60%, transparent 80%)',
                  borderRadius: '50%',
                  filter: 'blur(40px)',
                  zIndex: 0,
                }}
              />

              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  rotateX: [8, 14, 8],
                  rotateY: [-10, -4, -10]
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="hero-perspective-cube"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '32px',
                  background: 'var(--cube-bg)',
                  border: '1px solid var(--cube-border)',
                  boxShadow: 'var(--cube-shadow)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-30%',
                    right: '-30%',
                    width: '160px',
                    height: '160px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    borderRadius: '50%',
                    filter: 'blur(30px)'
                  }}
                />

                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '6rem',
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: '-0.05em',
                    background: 'var(--cube-text-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: theme === 'dark' ? 'drop-shadow(0 15px 25px rgba(0,0,0,0.6))' : 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))'
                  }}
                >
                  AQ*
                </span>

                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    marginTop: '0.8rem',
                    padding: '4px 14px',
                    borderRadius: '20px',
                    background: 'var(--badge-bg)',
                    border: '1px solid var(--badge-border)'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-accent)' }}></span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--gray)', fontWeight: 400 }}>
                    Open to opportunities
                  </span>
                </div>
              </motion.div>
            </div>

            <span 
              style={{ 
                fontSize: '0.82rem', 
                color: 'var(--gray)', 
                fontFamily: 'var(--font-mono)', 
                marginTop: '1.5rem',
                opacity: 0.8,
                fontWeight: 400,
              }}
            >
              Full-stack engineering & clean architecture.
            </span>
          </motion.div>
        </div>

        {/* Hero Bottom Strip with Brand Statement & Indicator */}
        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem' }}>
          <div className="hero-status-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--gray)', lineHeight: 1.5, fontWeight: 400 }}>
              Available for remote & full-time roles<br />
              <span style={{ color: 'var(--light)', fontWeight: 500 }}>Working worldwide</span>
            </div>

            <a 
              href="#manifesto" 
              className="text-arrow-link"
              style={{ fontSize: '0.85rem', color: 'var(--gray)' }}
            >
              <FiArrowDown /> Explore technical manifesto
            </a>
          </div>

          <div style={{ overflow: 'hidden', width: '100%' }}>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{
                fontSize: 'clamp(1.9rem, 11vw, 12rem)',
                fontWeight: 500,
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                color: 'var(--light)',
                marginTop: '2rem',
                userSelect: 'none'
              }}
            >
              adeel qaiser<span style={{ color: 'var(--primary-accent)' }}>*</span>
            </motion.h2>
          </div>
        </div>

      </div>

      {/* Editorial Manifesto Section */}
      <div 
        id="manifesto"
        style={{
          marginTop: '6rem',
          padding: '100px 0',
          background: 'var(--darker)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.1fr 0.9fr', 
              gap: '4rem', 
              alignItems: 'start'
            }}
            className="manifesto-grid"
          >
            {/* Left Column: Fixed / Sticky on desktop */}
            <div className="manifesto-left-col" style={{ position: 'sticky', top: '130px' }}>
              <h2
                style={{
                  fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
                  fontWeight: 500,
                  lineHeight: 1.08,
                  letterSpacing: '-0.035em',
                  color: 'var(--light)',
                  marginBottom: '2rem'
                }}
              >
                Built for performance.<br />
                Designed for humans.
              </h2>

              <p 
                style={{ 
                  color: 'var(--gray)', 
                  fontSize: '1.15rem', 
                  lineHeight: 1.7, 
                  maxWidth: '460px',
                  marginBottom: '2.5rem',
                  fontWeight: 400,
                }}
              >
                I bridge high-throughput server architecture with seamless, fluid client-side interfaces. Every layer is carefully planned for maintainability, speed, and effortless user flow.
              </p>

              <div>
                <a href="#about" className="text-arrow-link" style={{ fontSize: '1.05rem', fontWeight: 500 }}>
                  Discover my journey & philosophy <FiArrowUpRight />
                </a>
              </div>

              {/* Bottom tags */}
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  paddingTop: '3.5rem', 
                  marginTop: '3.5rem',
                  borderTop: '1px solid var(--border-subtle)',
                  color: 'var(--gray)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 400,
                }}
                className="discipline-tags-row"
              >
                <span>Full-Stack MERN</span>
                <span>System Architecture</span>
                <span>Interactive UI/UX</span>
              </div>
            </div>

            {/* Right Column: 3 Cards stacked vertically */}
            <div 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem',
                width: '100%',
                maxWidth: '440px',
                marginLeft: 'auto'
              }}
              className="stacked-cards-list"
            >
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -4 }}
                  style={{
                    width: '100%',
                    padding: '28px 30px',
                    borderRadius: '22px',
                    background: card.bg,
                    color: card.textColor,
                    border: card.border || (theme === 'light' ? '1px solid rgba(0, 0, 0, 0.09)' : '1px solid rgba(255, 255, 255, 0.08)'),
                    boxShadow: theme === 'light'
                      ? '0 15px 35px -10px rgba(0, 0, 0, 0.09), 0 0 0 1px rgba(0, 0, 0, 0.04)'
                      : '0 20px 45px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                >
                  <CardBody card={card} />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 992px) {
            .hero-main-grid {
              grid-template-columns: 1fr !important;
              gap: 3.5rem !important;
            }
            .manifesto-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
            .stacked-cards-list {
              max-width: 100% !important;
              margin-left: 0 !important;
            }
          }
          @media (max-width: 640px) {
            .discipline-tags-row {
              flex-direction: column !important;
              gap: 0.8rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Home;
