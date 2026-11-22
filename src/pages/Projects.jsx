import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiPlus, FiMinus, FiGithub } from 'react-icons/fi';

import hostel from '../assets/hostel.jpg';
import school from '../assets/school.jpg';
import hospital from '../assets/hospital.jpg';
import jobs from '../assets/jobs.jpg';
import ecommerce from '../assets/e-commerce.jpg';
import elite from '../assets/elite.jpg';

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: 1,
      category: 'Hospitality & Living',
      title: 'Smart Hostel & Dera Management',
      description:
        'An all-in-one smart solution for managing hostels and deras, tracking room allocations, dues, and resident records seamlessly.',
      image: hostel,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
      github: 'https://github.com/adeel-151/basera-hostel',
      live: 'https://basera-hostel.vercel.app/',
    },
    {
      id: 2,
      category: 'Healthcare',
      title: 'Hospital Management System',
      description:
        'A robust system for hospitals to manage patient records, appointments, billing, and staff schedules efficiently.',
      image: hospital,
      technologies: ['React', 'Node.js', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/adeel-151',
      live: 'https://hospital-mgt-system-kappa.vercel.app/',
    },
    {
      id: 3,
      category: 'Education & Academics',
      title: 'School Management System',
      description:
        'A comprehensive management system for schools, handling student enrollments, attendance, grading, and faculty management efficiently.',
      image: school,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/adeel-151',
      live: '#',
    },
    {
      id: 4,
      category: 'Corporate & Engineering',
      title: 'Elite Engineers Company Website',
      description:
        'A professional and dynamic corporate website built for Elite Engineers, featuring their services, portfolio, and an interactive contact system.',
      image: elite,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
      github: 'https://github.com/adeel-151/Elite-Engineers',
      live: 'https://elite-engineers-phi.vercel.app/',
    },
    {
      id: 5,
      category: 'E-commerce',
      title: 'E-commerce Platform',
      description:
        'A fully functional modern e-commerce platform with cart functionality, user authentication, and a scalable database architecture.',
      image: ecommerce,
      technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/adeel-151',
      live: '#',
    },
    {
      id: 6,
      category: 'Career & Recruitment',
      title: 'Developer Jobs Portal',
      description:
        'A specialized job portal for developers, featuring job listings, application tracking, and a user-friendly interface for employers and job seekers.',
      image: jobs,
      technologies: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
      github: 'https://github.com/adeel-151',
      live: '#',
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        
        {/* Section Eyebrow Row (01 / Selected work) */}
        <div className="section-eyebrow-row">
          <span>01 / Selected work</span>
          <span>Independent work. Real applications.</span>
        </div>

        {/* Editorial Heading Grid */}
        <div className="editorial-header-grid">
          <div>
            <h2 className="editorial-title">
              Built with intent.
            </h2>
          </div>
          <div>
            <p className="editorial-subtitle">
              A selection of websites and platforms, shaped around real users, speed, and clean frontend architecture.
            </p>
          </div>
        </div>

        {/* 2-Column Projects Editorial Grid */}
        <div className="grid-editorial-2">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div key={project.id} className="project-editorial-card">
                
                {/* Image Frame with Floating Arrow Link */}
                <div className="project-image-box">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  
                  <a
                    href={project.live !== '#' ? project.live : project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-corner-arrow"
                    title={project.live !== '#' ? 'Visit live website' : 'View repository'}
                    aria-label={`Open ${project.title}`}
                  >
                    <FiArrowUpRight />
                  </a>
                </div>

                {/* Category & Expand Toggle Row */}
                <div className="project-meta-row">
                  <span className="project-category-tag">{project.category}</span>
                  <button
                    className="project-expand-btn"
                    onClick={() => toggleExpand(project.id)}
                    aria-label="Toggle details"
                    title={isExpanded ? 'Collapse info' : 'Expand info'}
                  >
                    {isExpanded ? <FiMinus /> : <FiPlus />}
                  </button>
                </div>

                {/* Project Title */}
                <h3 className="project-title">{project.title}</h3>

                {/* Action Links */}
                <div className="project-links-row">
                  {project.live !== '#' ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-arrow-link"
                    >
                      Live website <FiArrowUpRight />
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.88rem', color: 'var(--gray-dark)' }}>Live preview soon</span>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-arrow-link"
                    style={{ color: 'var(--gray)' }}
                  >
                    View repository <FiArrowUpRight />
                  </a>
                </div>

                {/* Expandable details drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden', marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}
                    >
                      <p style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                        {project.description}
                      </p>
                      
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              padding: '4px 12px',
                              background: 'rgba(255, 255, 255, 0.05)',
                              color: 'var(--light)',
                              borderRadius: '20px',
                              fontSize: '0.78rem',
                              fontFamily: 'var(--font-mono)',
                              border: '1px solid var(--border-light)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* More Work Available Bottom Strip (matching Page 3) */}
        <div
          style={{
            marginTop: '6rem',
            padding: '2.5rem 0',
            borderTop: '1px solid var(--border-light)',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="more-work-strip"
        >
          <div style={{ fontWeight: 600, color: 'var(--light)', fontSize: '1.05rem' }}>
            More work available
          </div>
          <div style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Many additional projects, experiments, client builds and full stack architectures can be shared on request.
          </div>
          <div style={{ textAlign: 'right' }} className="more-work-link">
            <a
              href="https://github.com/adeel-151"
              target="_blank"
              rel="noopener noreferrer"
              className="text-arrow-link"
              style={{ fontWeight: 600 }}
            >
              Ask for more projects <FiArrowUpRight />
            </a>
          </div>
        </div>

      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .more-work-strip {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            .more-work-link {
              text-align: left !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
