import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiArrowUpRight, FiCode, FiDatabase, FiCloud, FiCpu } from 'react-icons/fi';
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
  const [openIndex, setOpenIndex] = useState(0); // 01 open by default matching screenshot

  const capabilities = [
    {
      index: '01',
      title: 'Frontend & Interactive Web Applications',
      subtitle: 'Fast, thoughtful interfaces and custom web applications.',
      description:
        'From initial component architecture to smooth, state-driven user experiences. I specialize in crafting clean, accessible, and responsive user interfaces using modern React ecosystem tools.',
      technologies: [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
        { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
      ],
      linkText: 'Explore frontend projects',
      linkHref: '#projects',
    },
    {
      index: '02',
      title: 'Backend Systems & Database Architecture',
      subtitle: 'Robust APIs, server-side logic, and scalable data models.',
      description:
        'Building reliable server foundations with Node.js and Express. Experienced in designing relational schemes with PostgreSQL and flexible document stores with MongoDB and Neon.tech.',
      technologies: [
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'Neon.tech', icon: <FiDatabase />, color: '#00E599' },
      ],
      linkText: 'View backend implementations',
      linkHref: '#projects',
    },
    {
      index: '03',
      title: 'Cloud Deployment & DevOps Workflows',
      subtitle: 'Continuous delivery, edge hosting, and seamless deployments.',
      description:
        'Setting up modern deployment pipelines, monitoring production builds, and maintaining clean git version control across branches and environments.',
      technologies: [
        { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
        { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
        { name: 'Render', icon: <FiCloud />, color: '#46E3B7' },
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
        { name: 'GitHub', icon: <SiGithub />, color: '#ffffff' },
      ],
      linkText: 'Inspect GitHub workflow',
      linkHref: 'https://github.com/adeel-151',
    },
    {
      index: '04',
      title: 'AI Tooling & Next-Gen Developer Environments',
      subtitle: 'Supercharging development velocity with AI-native workflows.',
      description:
        'Leveraging cutting-edge tools to accelerate prototyping, automate testing, and deliver production-ready features with high precision.',
      technologies: [
        { name: 'Cursor', icon: <FiCode />, color: '#ffffff' },
        { name: 'Antigravity', icon: <FiCpu />, color: '#6366f1' },
        { name: 'Kiro', icon: <FiCode />, color: '#f59e0b' },
      ],
      linkText: 'Connect & collaborate',
      linkHref: '#contact',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        
        {/* Section Eyebrow Row (02 / What I bring) */}
        <div className="section-eyebrow-row">
          <span>02 / What I bring</span>
          <span>From idea to launch</span>
        </div>

        {/* Editorial Heading Grid */}
        <div className="editorial-header-grid">
          <div>
            <h2 className="editorial-title">
              Good thinking.<br />Better making.
            </h2>
          </div>
          <div>
            <p className="editorial-subtitle" style={{ marginBottom: '1.2rem' }}>
              One collaborator across the technical architecture and interactive frontend of your next application.
            </p>
            <a href="#contact" className="text-arrow-link" style={{ fontWeight: 500 }}>
              Explore web development services <FiArrowUpRight />
            </a>
          </div>
        </div>

        {/* Editorial Accordion List */}
        <div style={{ marginTop: '2rem' }}>
          {capabilities.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.index} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <div className="accordion-index-title">
                    <span className="accordion-index">{item.index}</span>
                    <span className="accordion-title">{item.title}</span>
                  </div>
                  <div className="accordion-toggle-icon">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="accordion-body">
                        {/* Description Column */}
                        <div>
                          <p style={{ color: 'var(--light)', fontSize: '1.05rem', fontWeight: 500, marginBottom: '0.8rem' }}>
                            {item.subtitle}
                          </p>
                          <p style={{ color: 'var(--gray)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                            {item.description}
                          </p>
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

                        {/* Technology Badges Column */}
                        <div>
                          <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--gray)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                            Core Technologies
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {item.technologies.map((tech) => (
                              <div
                                key={tech.name}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.5rem',
                                  padding: '8px 16px',
                                  background: 'rgba(255, 255, 255, 0.04)',
                                  border: '1px solid var(--border-light)',
                                  borderRadius: '100px',
                                  fontSize: '0.88rem',
                                  color: 'var(--light)',
                                  transition: 'all 0.25s ease',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.borderColor = tech.color;
                                  e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.borderColor = 'var(--border-light)';
                                  e.currentTarget.style.transform = 'translateY(0)';
                                }}
                              >
                                <span style={{ color: tech.color, display: 'flex', fontSize: '1rem' }}>
                                  {tech.icon}
                                </span>
                                <span>{tech.name}</span>
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

      </div>
    </section>
  );
};

export default Skills;
