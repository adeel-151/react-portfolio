import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiAward, FiUsers, FiFolder, FiDownload, FiCamera, FiCheckCircle } from 'react-icons/fi';
import cv from '../assets/Adeel-Qaiser.pdf';
import profile from '../assets/profile.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');

  const tabs = [
    { id: 'journey', label: 'My Journey' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'focus', label: 'Current Focus' }
  ];

  const tabContent = {
    journey: (
      <p style={{ lineHeight: '1.8', color: 'var(--gray)', fontSize: '1.05rem' }}>
        I started my web development journey with a deep curiosity for how things work on the internet. 
        Over the past year, I've transitioned into a confident Software Engineer (MERN). I've built everything from responsive landing pages to complex, state-driven 
        platforms including hostel management and healthcare systems.
      </p>
    ),
    philosophy: (
      <p style={{ lineHeight: '1.8', color: 'var(--gray)', fontSize: '1.05rem' }}>
        I believe that a great user interface goes far beyond just visual aesthetics—it’s about creating seamless, 
        intuitive experiences that delight users while maintaining clean, maintainable architecture and 
        pixel-perfect responsiveness under the hood.
      </p>
    ),
    focus: (
      <p style={{ lineHeight: '1.8', color: 'var(--gray)', fontSize: '1.05rem' }}>
        Right now, I am heavily focused on mastering modern React patterns, advanced interactive animations, 
        and scalable full-stack web architectures with Node.js and PostgreSQL/MongoDB to deliver blazing-fast 
        performant web products.
      </p>
    )
  };

  const experienceList = [
    {
      role: 'Software Engineer (MERN)',
      context: 'Freelance & Independent Projects (Remote)',
      detail: 'Delivering production-ready web apps for clients and businesses.'
    },
    {
      role: '30+ Completed Builds',
      context: 'Full Stack & Frontend Applications',
      detail: 'From EdTech systems to smart hostel and hospital platforms.'
    },
    {
      role: '5+ Satisfied Clients',
      context: 'Independent Client Engagements',
      detail: 'High satisfaction across custom business logic and UI/UX implementation.'
    },
    {
      role: 'Core Engineering Background',
      context: 'Computer Science & Software Foundations',
      detail: 'Proficient in C++, Python, JavaScript/TypeScript, and data structures.'
    }
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        
        {/* Section Eyebrow Row (03 / The person) */}
        <div className="section-eyebrow-row">
          <span>03 / The person</span>
          <span>Beyond the screen</span>
        </div>

        {/* Two-Column Editorial Biography Layout (Page 4 reference) */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1.25fr', 
            gap: '4rem', 
            marginBottom: '6rem' 
          }}
          className="about-bio-grid"
        >
          {/* Left Column: Heading & Author */}
          <div>
            <h2 className="editorial-title" style={{ marginBottom: '2rem' }}>
              Curiosity is<br />the constant.
            </h2>
            <div style={{ color: 'var(--gray)', fontSize: '1.1rem', fontWeight: 500 }}>
              Adeel Qaiser
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', marginTop: '0.4rem' }}>
              Available for freelance & full-time roles
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <a href={cv} download className="btn-pill btn-pill-outline" style={{ display: 'inline-flex', gap: '0.6rem' }}>
                <FiDownload /> Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Right Column: Narrative & Story */}
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 600, color: 'var(--light)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              I'm Adeel. Online, you'll find me as <a href="https://github.com/adeel-151" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'none' }}>adeel-151</a>.
            </div>

            {/* Interactive Tab Switcher */}
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.8rem' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeTab === tab.id ? 'var(--light)' : 'var(--gray)',
                    fontWeight: activeTab === tab.id ? 600 : 400,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    position: 'relative',
                    paddingBottom: '0.4rem',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="about-tab-indicator"
                      style={{
                        position: 'absolute',
                        bottom: '-0.85rem',
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--secondary)'
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div style={{ minHeight: '140px', marginBottom: '2rem' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {tabContent[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <a href="https://github.com/adeel-151" target="_blank" rel="noopener noreferrer" className="text-arrow-link">
                GitHub profile <FiArrowUpRight />
              </a>
              <a href="https://www.linkedin.com/in/adeel-qaiser151/" target="_blank" rel="noopener noreferrer" className="text-arrow-link">
                LinkedIn connection <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        {/* Experience & Education Strip (Page 4 lower reference) */}
        <div 
          style={{ 
            borderTop: '1px solid var(--border-light)', 
            paddingTop: '3.5rem',
            marginBottom: '6rem',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '3rem'
          }}
          className="experience-strip"
        >
          <div>
            <span style={{ fontSize: '0.9rem', color: 'var(--gray)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
              Experience & milestones
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experienceList.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  borderBottom: idx !== experienceList.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  paddingBottom: '1.5rem'
                }}
              >
                <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--light)', marginBottom: '0.25rem' }}>
                  {item.role}
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--secondary)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  {item.context}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outside the Browser Feature Box (Page 5 top reference) */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.5)',
            border: '1px solid var(--border-light)',
            borderRadius: '24px',
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="outside-browser-box"
        >
          <div>
            <h3 style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--light)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Outside the browser.
            </h3>
            <p style={{ color: 'var(--gray)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Passionate about problem solving, clean engineering architectures, and continuous self-learning. Always exploring new horizons in software development.
            </p>
            <a href="#contact" className="text-arrow-link" style={{ fontSize: '1rem', fontWeight: 600 }}>
              Let's build together <FiArrowUpRight />
            </a>
          </div>

          {/* Right Frame Spotlight Card with Dashed Border */}
          <div
            style={{
              border: '1px dashed rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              background: 'rgba(6, 9, 19, 0.6)',
            }}
          >
            <div style={{ color: 'var(--secondary)', fontSize: '1.8rem', marginBottom: '1.2rem' }}>
              <FiCamera />
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--light)', marginBottom: '0.6rem' }}>
              Continuous craftsmanship
            </div>
            <p style={{ color: 'var(--gray)', fontSize: '0.92rem', lineHeight: '1.6' }}>
              Focused on modern frontend standards, accessible web interfaces, and high-performance React architectures.
            </p>
            <div style={{ marginTop: '1.2rem', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--gray-dark)' }}>
              100% committed to quality & performance
            </div>
          </div>
        </div>

      </div>

      <style>
        {`
          @media (max-width: 992px) {
            .about-bio-grid,
            .experience-strip,
            .outside-browser-box {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
