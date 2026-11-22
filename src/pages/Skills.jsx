import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowUpRight, 
  FiChevronDown, 
  FiChevronUp, 
  FiCheck, 
  FiCode, 
  FiServer, 
  FiDatabase, 
  FiCpu, 
  FiZap,
  FiCloud 
} from 'react-icons/fi';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiBootstrap, 
  SiCplusplus, 
  SiPython,
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiVercel, 
  SiNetlify, 
  SiGit, 
  SiGithub 
} from 'react-icons/si';

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(0); // 01 open by default

  const capabilities = [
    {
      index: '01',
      tag: 'FRONTEND',
      icon: <FiCode />,
      title: 'Frontend Architecture & Interactive Interfaces',
      subtitle: 'Responsive, accessible, and high-performance client applications.',
      description:
        'Designing robust component hierarchies with React 19, TypeScript, and modern styling architectures. Deep focus on predictable state management, smooth micro-interactions, and sub-second load times.',
      insight: 'Targeting 60fps animations, zero cumulative layout shifts (CLS), and reusable component design systems.',
      competencies: [
        'Component Architecture & Atomic Design',
        'Complex State Management & Context API',
        'Accessible HTML5, Semantic Markup & ARIA',
        'Fluid Micro-Animations & Framer Motion',
        'Mobile-First Responsive Layouts'
      ],
      technologies: [
        { name: 'React 19', role: 'Core Framework', icon: <SiReact />, color: '#61DAFB' },
        { name: 'TypeScript', role: 'Type Safety', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'JavaScript (ES6+)', role: 'Modern Syntax', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'Tailwind CSS', role: 'Utility Styling', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'HTML5 & CSS3', role: 'Web Standards', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'Bootstrap', role: 'Rapid UI', icon: <SiBootstrap />, color: '#7952B3' },
        { name: 'Python', role: 'Scripting', icon: <SiPython />, color: '#3776AB' },
        { name: 'C++', role: 'Algorithms', icon: <SiCplusplus />, color: '#00599C' },
      ],
      linkText: 'Explore frontend builds',
      linkHref: '#projects',
    },
    {
      index: '02',
      tag: 'BACKEND',
      icon: <FiServer />,
      title: 'Backend Engineering & Distributed APIs',
      subtitle: 'High-throughput server logic, authentication pipelines, and REST architectures.',
      description:
        'Constructing reliable, resilient server applications using Node.js and Express. Experienced in secure JWT authentication flows, rate limiting, request validation, and scalable API endpoints.',
      insight: 'Built around deterministic REST principles, secure JWT sessions, and sub-100ms response targets.',
      competencies: [
        'RESTful API Design & Versioning',
        'JWT & Session Authentication Security',
        'Express Middleware Pipelines & CORS',
        'Request Validation & Error Boundaries',
        'Asynchronous Task Orchestration'
      ],
      technologies: [
        { name: 'Node.js', role: 'Runtime Engine', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Express.js', role: 'Server Framework', icon: <SiExpress />, color: '#ffffff' },
        { name: 'REST APIs', role: 'Architecture', icon: <FiServer />, color: '#ccff00' },
        { name: 'JWT Security', role: 'Auth Flow', icon: <FiZap />, color: '#f59e0b' },
      ],
      linkText: 'View backend implementations',
      linkHref: '#projects',
    },
    {
      index: '03',
      tag: 'DATABASE & CLOUD',
      icon: <FiDatabase />,
      title: 'Database Systems & Cloud Deployment',
      subtitle: 'Structured relational models, scalable document stores, and edge hosting.',
      description:
        'Designing optimized schemas across relational PostgreSQL/MySQL and flexible MongoDB collections. Deploying with continuous integration, automated builds, and serverless edge hosting.',
      insight: 'Normalized schemas with foreign key integrity alongside flexible document stores for high read throughput.',
      competencies: [
        'Relational Data Modeling (PostgreSQL / MySQL)',
        'NoSQL Document Store Schema Design (MongoDB)',
        'Serverless & Edge Deployment Pipelines',
        'Git Branching Strategy & GitHub Actions',
        'Database Query Indexing & Optimization'
      ],
      technologies: [
        { name: 'PostgreSQL', role: 'Relational DB', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'MongoDB', role: 'NoSQL Database', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Neon.tech', role: 'Serverless Postgres', icon: <FiDatabase />, color: '#00E599' },
        { name: 'Vercel', role: 'Edge Hosting', icon: <SiVercel />, color: '#ffffff' },
        { name: 'Netlify', role: 'Static & Serverless', icon: <SiNetlify />, color: '#00C7B7' },
        { name: 'Render', role: 'Cloud Backend', icon: <FiCloud />, color: '#46E3B7' },
        { name: 'Git & GitHub', role: 'Version Control', icon: <SiGit />, color: '#F05032' },
      ],
      linkText: 'Inspect GitHub workflow',
      linkHref: 'https://github.com/adeel-151',
    },
    {
      index: '04',
      tag: 'VELOCITY & AI',
      icon: <FiCpu />,
      title: 'Developer Velocity & AI-Native Tooling',
      subtitle: 'Next-gen developer environments, rapid prototyping, and automated verification.',
      description:
        'Harnessing cutting-edge agentic and AI-augmented developer workflows to accelerate engineering velocity, maintain comprehensive test coverage, and ship production features swiftly.',
      insight: 'Accelerating iteration cycles by 3x while enforcing strict architectural discipline and code hygiene.',
      competencies: [
        'Agentic Workflow Automation',
        'AI-Assisted Debugging & Code Review',
        'Rapid Prototyping & Spike Verification',
        'Modern Terminal & CLI Workflow Tooling',
        'Chrome DevTools Performance Auditing'
      ],
      technologies: [
        { name: 'Cursor AI', role: 'AI-Native IDE', icon: <FiCode />, color: '#ffffff' },
        { name: 'Antigravity', role: 'DeepMind Agent', icon: <FiCpu />, color: '#6366f1' },
        { name: 'Kiro', role: 'Velocity Tool', icon: <FiCode />, color: '#f59e0b' },
        { name: 'DevTools', role: 'Profiling', icon: <FiZap />, color: '#38bdf8' },
      ],
      linkText: 'Connect & collaborate',
      linkHref: '#contact',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const metrics = [
    { value: '30+', label: 'Builds & Platforms Shipped' },
    { value: '100%', label: 'Mobile & Responsive Precision' },
    { value: '<100ms', label: 'Target API Latency' },
    { value: 'MERN', label: 'Full-Stack Specialization' }
  ];

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        
        {/* Section Eyebrow Row */}
        <div className="section-eyebrow-row">
          <span>02 / Core Capabilities</span>
          <span>Full-stack engineering toolkit</span>
        </div>

        {/* Editorial Heading Grid */}
        <div className="editorial-header-grid">
          <div>
            <h2 className="editorial-title">
              Disciplined logic.<br />Decisive execution.
            </h2>
          </div>
          <div>
            <p className="editorial-subtitle" style={{ marginBottom: '1.2rem' }}>
              End-to-end technical execution across relational data models, robust backend services, and pixel-precise user interfaces.
            </p>
            <a href="#contact" className="text-arrow-link" style={{ fontWeight: 500 }}>
              Discuss your technical requirements <FiArrowUpRight />
            </a>
          </div>
        </div>

        {/* Enhanced Capabilities Panels List */}
        <div className="capabilities-list-wrap">
          {capabilities.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={item.index} 
                className={`capability-panel ${isOpen ? 'capability-panel-open' : ''}`}
              >
                <button
                  className="capability-panel-header"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <div className="capability-header-left">
                    <span className="capability-index-badge">{item.index}</span>
                    <span className="capability-tag-pill">{item.tag}</span>
                    <h3 className="capability-main-title">{item.title}</h3>
                  </div>

                  <div className="capability-toggle-circle">
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="capability-panel-body"
                    >
                      <div className="capability-body-grid">
                        {/* Left Column: Narrative, Competencies, and Action Link */}
                        <div className="capability-narrative-col">
                          <p className="capability-subtitle">
                            {item.subtitle}
                          </p>

                          <p className="capability-description">
                            {item.description}
                          </p>

                          {/* Architectural Insight Callout Box */}
                          <div className="capability-insight-box">
                            <span className="capability-insight-title">
                              <FiZap style={{ color: 'var(--primary-accent)' }} /> Architectural Standard
                            </span>
                            <p className="capability-insight-text">
                              {item.insight}
                            </p>
                          </div>

                          {/* Competencies Checklist */}
                          <div className="capability-competencies-wrap">
                            <span className="capability-competencies-title">
                              Core Competencies:
                            </span>
                            <ul className="capability-competencies-list">
                              {item.competencies.map((comp, idx) => (
                                <li key={idx}>
                                  <FiCheck className="competency-check-icon" />
                                  <span>{comp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div style={{ marginTop: '1.75rem' }}>
                            <a
                              href={item.linkHref}
                              className="text-arrow-link"
                              style={{ fontSize: '0.92rem', color: 'var(--primary)' }}
                              target={item.linkHref.startsWith('http') ? '_blank' : '_self'}
                              rel="noopener noreferrer"
                            >
                              {item.linkText} <FiArrowUpRight />
                            </a>
                          </div>
                        </div>

                        {/* Right Column: Interactive Tech Stack Matrix */}
                        <div className="capability-stack-col">
                          <div className="capability-stack-header">
                            <span>Production Toolchain & Frameworks</span>
                          </div>

                          <div className="capability-tech-grid">
                            {item.technologies.map((tech) => (
                              <div
                                key={tech.name}
                                className="capability-tech-card"
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.borderColor = tech.color;
                                  e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.borderColor = 'var(--border-light)';
                                  e.currentTarget.style.transform = 'translateY(0)';
                                }}
                              >
                                <div className="capability-tech-icon-wrap" style={{ color: tech.color }}>
                                  {tech.icon}
                                </div>
                                <div className="capability-tech-meta">
                                  <span className="capability-tech-name">{tech.name}</span>
                                  <span className="capability-tech-role">{tech.role}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Engineering Metrics Strip */}
        <div className="engineering-metrics-strip">
          {metrics.map((m, idx) => (
            <div key={idx} className="metric-box">
              <span className="metric-value">{m.value}</span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
