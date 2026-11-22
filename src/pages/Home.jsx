import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FiArrowUpRight, 
  FiArrowDown, 
  FiLayers, 
  FiDatabase, 
  FiZap, 
  FiLayout, 
  FiCloud 
} from 'react-icons/fi';
import cv from '../assets/Adeel-Qaiser.pdf';

// Sub-component for individual card with horizontal slide-in
const HorizontalCard = ({ card, index, scrollYProgress }) => {
  // Base card (Card 1) stationed on screen
  if (index === 0) {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 'clamp(320px, 30vw, 420px)',
          padding: '28px 30px',
          borderRadius: '22px',
          background: card.bg,
          color: card.textColor,
          border: card.border || '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.65)',
          zIndex: 1,
          transform: `rotate(${card.rotate}deg)`,
        }}
      >
        <CardBody card={card} />
      </div>
    );
  }

  // Cards 2 through 6 slide in horizontally from the right
  const start = 0.08 + (index - 1) * 0.15;
  const end = Math.min(start + 0.14, 0.96);

  const x = useTransform(scrollYProgress, [start, end], [750, card.finalX]);
  const y = useTransform(scrollYProgress, [start, end], [card.finalY + 30, card.finalY]);
  const opacity = useTransform(scrollYProgress, [start, start + 0.04], [0, 1]);
  const rotate = useTransform(scrollYProgress, [start, end], [card.rotate + 8, card.rotate]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'clamp(320px, 30vw, 420px)',
        padding: '28px 30px',
        borderRadius: '22px',
        background: card.bg,
        color: card.textColor,
        border: card.border || 'none',
        boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        zIndex: index + 1,
        x,
        y,
        opacity,
        rotate,
      }}
    >
      <CardBody card={card} />
    </motion.div>
  );
};

// Reusable card content layout matching the reference screenshot exactly
const CardBody = ({ card }) => (
  <div>
    {/* Card Top Row: Icon & Tag */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
      <div 
        style={{ 
          fontSize: '1.25rem', 
          color: card.accentColor,
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
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
        fontWeight: 700,
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
      }}
    >
      {card.tech}
    </div>
  </div>
);

const Home = () => {
  const manifestoContainerRef = useRef(null);

  // Tracks scroll progress through the tall container so the section stays pinned
  // while cards slide in horizontally from the right!
  const { scrollYProgress } = useScroll({
    target: manifestoContainerRef,
    offset: ['start start', 'end end']
  });

  // 6 Distinct Cards matching the visual hierarchy of the reference
  const cards = [
    {
      id: 1,
      tag: 'Development',
      icon: '</>',
      title: 'Carefully engineered.',
      tech: 'React 19 / TypeScript / Vite',
      bg: '#ffffff',
      textColor: '#090e1c',
      descColor: '#52525b',
      accentColor: '#090e1c',
      tagColor: '#71717a',
      rotate: -3.5,
      finalX: 0,
      finalY: 0,
    },
    {
      id: 2,
      tag: 'Architecture',
      icon: <FiLayers />,
      title: 'The right connections.',
      tech: 'Node.js / Express / REST APIs',
      bg: '#c5f82a', // Signature lime card from the reference screenshot
      textColor: '#090e1c',
      descColor: '#27272a',
      accentColor: '#090e1c',
      tagColor: '#3f3f46',
      rotate: 2.5,
      finalX: 45,
      finalY: 35,
    },
    {
      id: 3,
      tag: 'Data Layer',
      icon: <FiDatabase />,
      title: 'Structured for scale.',
      tech: 'MongoDB / PostgreSQL / Neon.tech',
      bg: '#0c1527',
      textColor: '#ffffff',
      descColor: '#94a3b8',
      accentColor: '#10b981',
      tagColor: '#a7f3d0',
      border: '1px solid rgba(16, 185, 129, 0.35)',
      rotate: -2,
      finalX: 90,
      finalY: 70,
    },
    {
      id: 4,
      tag: 'Performance',
      icon: <FiZap />,
      title: 'Blazing fast metrics.',
      tech: 'Code Splitting / Core Web Vitals',
      bg: '#181226',
      textColor: '#ffffff',
      descColor: '#94a3b8',
      accentColor: '#f59e0b',
      tagColor: '#fde68a',
      border: '1px solid rgba(245, 158, 11, 0.35)',
      rotate: 2,
      finalX: 135,
      finalY: 105,
    },
    {
      id: 5,
      tag: 'Experience',
      icon: <FiLayout />,
      title: 'Pixel-perfect craft.',
      tech: 'Framer Motion / Tailwind / Smooth UX',
      bg: '#0f172a',
      textColor: '#ffffff',
      descColor: '#94a3b8',
      accentColor: '#06b6d4',
      tagColor: '#a5f3fc',
      border: '1px solid rgba(6, 182, 212, 0.35)',
      rotate: -1.5,
      finalX: 180,
      finalY: 140,
    },
    {
      id: 6,
      tag: 'Deployment',
      icon: <FiCloud />,
      title: 'Production ready.',
      tech: 'Vercel / Netlify / Git / CI-CD',
      bg: 'linear-gradient(145deg, #111a33, #090e1c)',
      textColor: '#ffffff',
      descColor: '#94a3b8',
      accentColor: '#38bdf8',
      tagColor: '#bae6fd',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      rotate: 1,
      finalX: 225,
      finalY: 175,
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
                fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                marginBottom: '1.25rem',
                color: 'var(--light)'
              }}
            >
              Ideas into<br />experiences.
            </h1>

            <div style={{ maxWidth: '520px', marginBottom: '1.75rem' }}>
              <div style={{ marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--light)', display: 'block' }}>
                  Adeel Qaiser
                </span>
                <span style={{ fontSize: '0.92rem', color: 'var(--gray)' }}>
                  Software Engineer (MERN)
                </span>
              </div>

              <p style={{ color: 'var(--gray)', fontSize: '1rem', lineHeight: '1.65', marginTop: '0.6rem' }}>
                I build high-performance web applications and digital products by bringing clean code, modern architecture, and intuitive user experiences together.
              </p>
            </div>

            {/* CTA Buttons - fully visible & responsive */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>
              <a href="#projects" className="btn-pill btn-pill-dark">
                Explore my work <FiArrowUpRight style={{ fontSize: '1.1rem' }} />
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
                  background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(6, 182, 212, 0.08) 60%, transparent 80%)',
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
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '260px',
                  height: '260px',
                  borderRadius: '32px',
                  background: 'linear-gradient(145deg, #161f36, #090e1c)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
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
                    fontSize: '6.5rem',
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: '-0.05em',
                    background: 'linear-gradient(135deg, #ffffff 40%, #6366f1 70%, #06b6d4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                    filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.6))'
                  }}
                >
                  A*
                </span>

                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    marginTop: '0.8rem',
                    padding: '4px 14px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--gray)' }}>
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
                opacity: 0.8
              }}
            >
              A different dimension of code.
            </span>
          </motion.div>
        </div>

        {/* Hero Bottom Strip with Brand Watermark & Indicators */}
        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--gray)', lineHeight: 1.5 }}>
              Available for remote projects<br />
              <span style={{ color: 'var(--light)' }}>Working worldwide</span>
            </div>

            <a 
              href="#manifesto" 
              className="text-arrow-link"
              style={{ fontSize: '0.85rem', color: 'var(--gray)' }}
            >
              <FiArrowDown /> A little further
            </a>
          </div>

          <div style={{ overflow: 'hidden', width: '100%' }}>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{
                fontSize: 'clamp(3.8rem, 15vw, 12rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                color: 'var(--light)',
                marginTop: '2rem',
                userSelect: 'none'
              }}
            >
              adeel qaiser<span style={{ color: 'var(--secondary)' }}>*</span>
            </motion.h2>
          </div>
        </div>

      </div>

      {/* Pinned Manifesto Section matching the exact screenshot */}
      <div 
        id="manifesto"
        ref={manifestoContainerRef}
        style={{
          position: 'relative',
          height: '280vh', // Pinned scroll track
          marginTop: '6rem',
        }}
      >
        {/* Sticky 100vh Viewport */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--darker)',
            borderTop: '1px solid var(--border-light)',
            borderBottom: '1px solid var(--border-light)',
            zIndex: 10,
            paddingTop: '60px',
          }}
        >
          <div className="container" style={{ width: '100%', padding: '0 32px' }}>
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '1.05fr 0.95fr', 
                gap: '3rem', 
                alignItems: 'center'
              }}
              className="manifesto-grid"
            >
              {/* Left Column: Exactly like screenshot */}
              <div>
                <h2
                  style={{
                    fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
                    fontWeight: 700,
                    lineHeight: 1.08,
                    letterSpacing: '-0.035em',
                    color: 'var(--light)',
                    marginBottom: '2rem'
                  }}
                >
                  A developer's mind.<br />
                  A creative's eye.
                </h2>

                <p 
                  style={{ 
                    color: 'var(--gray)', 
                    fontSize: '1.15rem', 
                    lineHeight: 1.7, 
                    maxWidth: '460px',
                    marginBottom: '2.5rem' 
                  }}
                >
                  I connect clean code, modern architecture and thoughtful interfaces. Different disciplines, one considered experience.
                </p>

                <div>
                  <a href="#about" className="text-arrow-link" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                    Meet the person behind the work <FiArrowUpRight />
                  </a>
                </div>

                {/* Bottom tags like the reference */}
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    paddingTop: '3.5rem', 
                    marginTop: '3.5rem',
                    borderTop: '1px solid var(--border-subtle)',
                    color: 'var(--gray)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                  className="discipline-tags-row"
                >
                  <span>Engineering</span>
                  <span>Architecture</span>
                  <span>Interface Design</span>
                </div>
              </div>

              {/* Right Column: Cards sliding in horizontally and overlapping */}
              <div 
                style={{ 
                  height: '420px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  position: 'relative',
                  perspective: '1200px'
                }}
                className="stacked-cards-container"
              >
                <div style={{ position: 'relative', width: '100%', maxWidth: '420px', height: '300px' }}>
                  {cards.map((card, index) => (
                    <HorizontalCard
                      key={card.id}
                      card={card}
                      index={index}
                      scrollYProgress={scrollYProgress}
                    />
                  ))}
                </div>
              </div>

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
              gap: 2.5rem !important;
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
