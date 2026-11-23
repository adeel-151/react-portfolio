import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowUpRight, 
  FiDownload, 
  FiCheck, 
  FiZap, 
  FiLayers, 
  FiShield, 
  FiMapPin, 
  FiBriefcase, 
  FiCode 
} from 'react-icons/fi';
import { 
  SiWhatsapp, 
  SiGithub, 
  SiLinkedin, 
  SiInstagram 
} from 'react-icons/si';
import cv from '../assets/Adeel-Qaiser.pdf';
import profile from '../assets/profile.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');

  const tabs = [
    { id: 'journey', label: 'My Journey' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'focus', label: 'Current Focus' },
    { id: 'values', label: 'Core Values' }
  ];

  const tabContent = {
    journey: (
      <div>
        <p className="about-tab-paragraph">
          I started my programming journey driven by a fascination for system architecture and real-world digital tools. 
          Over the past year, I have built production-grade platforms with the MERN stack—from intelligent hostel management 
          systems with relational PostgreSQL to hospital operational software handling patient appointments and records.
        </p>
        <div className="about-tab-pills-wrap">
          {['30+ Projects Completed', 'Full-Stack MERN Expertise', 'Clean Architecture', 'Relational & NoSQL Data'].map((t) => (
            <span key={t} className="about-pill-tag">
              <FiCheck style={{ color: 'var(--primary-accent)' }} /> {t}
            </span>
          ))}
        </div>
      </div>
    ),
    philosophy: (
      <div>
        <p className="about-tab-paragraph">
          To me, great engineering is measured by resilience and clarity. A clean backend is meaningless if the client 
          experience feels sluggish, and an attractive UI is fragile without robust data validation. I build every system 
          to ensure both sides work in complete harmony.
        </p>
        <div className="about-tab-pills-wrap">
          {['Predictable REST APIs', 'Zero Layout Shift', 'Type-Safe Standards', 'Human-Centric UX'].map((t) => (
            <span key={t} className="about-pill-tag">
              <FiCheck style={{ color: 'var(--primary-accent)' }} /> {t}
            </span>
          ))}
        </div>
      </div>
    ),
    focus: (
      <div>
        <p className="about-tab-paragraph">
          I am currently deepening my mastery of distributed backend architectures, query optimization in PostgreSQL/MongoDB, 
          and high-efficiency component patterns in React 19 to engineer web applications that scale effortlessly.
        </p>
        <div className="about-tab-pills-wrap">
          {['React 19 Ecosystem', 'PostgreSQL Query Optimization', 'Scalable Microservices', 'AI-Augmented Velocity'].map((t) => (
            <span key={t} className="about-pill-tag">
              <FiCheck style={{ color: 'var(--primary-accent)' }} /> {t}
            </span>
          ))}
        </div>
      </div>
    ),
    values: (
      <div>
        <p className="about-tab-paragraph">
          Code maintainability, transparent communication, and unrelenting commitment to delivery timelines. Whether 
          building an MVP from scratch or scaling an existing system, I treat every codebase as a long-term asset.
        </p>
        <div className="about-tab-pills-wrap">
          {['Ownership Mindset', 'Transparent Communication', 'High Iteration Velocity', 'Continuous Learning'].map((t) => (
            <span key={t} className="about-pill-tag">
              <FiCheck style={{ color: 'var(--primary-accent)' }} /> {t}
            </span>
          ))}
        </div>
      </div>
    )
  };

  const milestones = [
    {
      period: '2025 — PRESENT',
      role: 'Software Engineer (MERN)',
      org: 'Freelance & Independent Client Builds',
      detail: 'Architecting full-stack web applications, REST APIs, and database schemas for startups, businesses, and independent clients worldwide.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind']
    },
    {
      period: 'PRODUCTION BUILDS',
      role: '30+ Production Applications Delivered',
      org: 'Management Systems & SaaS Platforms',
      detail: 'Spearheaded complete development lifecycles for Smart Hostel Dera, Hospital ERP, School Management, and E-commerce platforms.',
      stack: ['Vite', 'Express', 'JWT Auth', 'Vercel', 'Render']
    },
    {
      period: 'ACADEMIC & CORE',
      role: 'Computer Science Foundations',
      org: 'Engineering & Algorithmic Rigor',
      detail: 'Strong foundation in object-oriented programming, data structures, algorithm design, and system architecture using C++ and Python.',
      stack: ['C++', 'Python', 'OOP', 'Data Structures']
    }
  ];

  const bentoPrinciples = [
    {
      icon: <FiZap />,
      title: 'Performance-First',
      desc: 'Optimized rendering cycles, lightweight bundles, and sub-100ms API responses engineered for zero user friction.'
    },
    {
      icon: <FiShield />,
      title: 'Structural Resilience',
      desc: 'Robust schema validation, role-based JWT security, and resilient error handling across every server endpoint.'
    },
    {
      icon: <FiLayers />,
      title: 'Considered Usability',
      desc: 'Pixel-precise layouts, accessible contrast, and smooth micro-interactions that make complex software intuitive to use.'
    }
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        
        {/* Section Eyebrow Row */}
        <div className="section-eyebrow-row">
          <span>03 / About Me</span>
          <span>Mindset, journey & principles</span>
        </div>

        {/* Editorial Biography Grid */}
        <div className="about-main-grid">
          {/* Left Column: Visual Profile Card */}
          <div className="about-profile-card">
            <div className="about-image-frame">
              <img src={profile} alt="Adeel Qaiser" className="about-profile-img" />
              
              {/* Online Availability Badge */}
              <div className="about-status-badge">
                <span className="status-dot-pulse" />
                <span>Available for opportunities</span>
              </div>
            </div>

            <div className="about-card-info">
              <h3 className="about-name">Adeel Qaiser</h3>
              <div className="about-role-tag">
                <FiCode style={{ color: 'var(--primary-accent)' }} /> Software Engineer (MERN)
              </div>

              <div className="about-meta-list">
                <div className="about-meta-item">
                  <FiMapPin className="meta-icon" />
                  <span>Pakistan • Remote Worldwide</span>
                </div>
                <div className="about-meta-item">
                  <FiBriefcase className="meta-icon" />
                  <span>Full-Stack & Frontend Roles</span>
                </div>
              </div>

              <div className="about-card-actions">
                <a href={cv} download className="btn-pill btn-pill-dark" style={{ width: '100%', justifyContent: 'center' }}>
                  <FiDownload /> Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Interactive Tabs, and Social Connections */}
          <div className="about-narrative-col">
            <div className="about-headline-wrap">
              <h2 className="about-statement-title">
                Continuous growth.<br />Relentless craft.
              </h2>
              <p className="about-lead-text">
                I am a Software Engineer specialized in the MERN stack. Online and across GitHub, you will find my builds under{' '}
                <a href="https://github.com/adeel-151" target="_blank" rel="noopener noreferrer" className="about-inline-link">
                  @adeel-151 <FiArrowUpRight />
                </a>.
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="about-tabs-nav">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`about-tab-btn ${isActive ? 'about-tab-btn-active' : ''}`}
                  >
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId="about-tab-active-indicator"
                        className="about-tab-indicator"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab Content Area */}
            <div className="about-tab-content-box">
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

            {/* Social Links Row with WhatsApp included */}
            <div className="about-social-links-row">
              <a 
                href="https://wa.me/923015355509?text=Hi%20Adeel,%20I%20saw%20your%20portfolio!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="about-social-chip about-social-wa"
              >
                <SiWhatsapp style={{ color: '#25D366' }} /> WhatsApp <span>↗</span>
              </a>
              <a href="https://github.com/adeel-151" target="_blank" rel="noopener noreferrer" className="about-social-chip">
                <SiGithub /> GitHub <span>↗</span>
              </a>
              <a href="https://www.linkedin.com/in/adeel-qaiser151/" target="_blank" rel="noopener noreferrer" className="about-social-chip">
                <SiLinkedin style={{ color: '#0a66c2' }} /> LinkedIn <span>↗</span>
              </a>
              <a href="https://www.instagram.com/adeel_qaiser_/" target="_blank" rel="noopener noreferrer" className="about-social-chip">
                <SiInstagram style={{ color: '#e4405f' }} /> Instagram <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Milestones & Career Timeline */}
        <div className="about-milestones-section">
          <div className="milestones-header">
            <span className="milestones-eyebrow">Experience & Track Record</span>
            <h3 className="milestones-title">Proven delivery across client platforms.</h3>
          </div>

          <div className="milestones-cards-grid">
            {milestones.map((item, idx) => (
              <div key={idx} className="milestone-card">
                <div className="milestone-period-badge">
                  {item.period}
                </div>
                <h4 className="milestone-role">{item.role}</h4>
                <div className="milestone-org">{item.org}</div>
                <p className="milestone-detail">{item.detail}</p>
                <div className="milestone-stack-pills">
                  {item.stack.map((s) => (
                    <span key={s} className="milestone-pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Principles Matrix */}
        <div className="about-bento-section">
          <div className="bento-header-wrap">
            <span className="milestones-eyebrow">Engineering Mindset</span>
            <h3 className="milestones-title">How I approach every codebase.</h3>
          </div>

          <div className="bento-principles-grid">
            {bentoPrinciples.map((b, idx) => (
              <div key={idx} className="bento-principle-card">
                <div className="bento-icon-box">
                  {b.icon}
                </div>
                <h4 className="bento-card-title">{b.title}</h4>
                <p className="bento-card-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
