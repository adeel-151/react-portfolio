import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiChevronDown, FiChevronUp, FiCheck } from 'react-icons/fi';

import hostel from '../assets/hostel.jpg';
import school from '../assets/school.jpg';
import hospital from '../assets/hospital.jpg';
import jobs from '../assets/jobs.jpg';
import ecommerce from '../assets/e-commerce.jpg';
import elite from '../assets/elite.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const filterTabs = ['All', 'Full Stack MERN', 'Management Systems', 'Web Platforms'];

  const projects = [
    {
      id: 1,
      num: '01',
      filter: 'Management Systems',
      category: 'Hospitality & Living',
      title: 'Smart Hostel & Dera Management',
      tagline: 'Automated resident tracking, room allocation, and financial dues ledger.',
      description:
        'A full-scale hostel administration ecosystem engineered to streamline resident admissions, room allocations, security logs, and fee tracking. Built with high-efficiency PostgreSQL relational data models and an intuitive React interface.',
      features: [
        'Relational schema for room and resident occupancy tracking',
        'Automated monthly fee calculation and dues ledger',
        'Resident directory with search, filter, and document verification',
        'Responsive mobile dashboard for hostel wardens and owners'
      ],
      image: hostel,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'Express'],
      github: 'https://github.com/adeel-151/basera-hostel',
      live: 'https://basera-hostel.vercel.app/',
    },
    {
      id: 2,
      num: '02',
      filter: 'Management Systems',
      category: 'Healthcare Systems',
      title: 'Hospital Management System',
      tagline: 'Comprehensive clinical operations, appointments, and patient records system.',
      description:
        'An enterprise-grade hospital software platform coordinating patient records, doctor scheduling, department queues, and billing receipts. Ensures fast record lookup with indexed database queries.',
      features: [
        'Centralized electronic medical records (EMR) management',
        'Appointment booking & doctor availability scheduling',
        'Departmental billing, invoice generation, and financial logs',
        'Role-based access control for doctors, receptionists, and admins'
      ],
      image: hospital,
      technologies: ['React', 'Node.js', 'MySQL', 'Bootstrap', 'REST APIs'],
      github: 'https://github.com/adeel-151',
      live: 'https://hospital-mgt-system-kappa.vercel.app/',
    },
    {
      id: 3,
      num: '03',
      filter: 'Management Systems',
      category: 'Education & Academics',
      title: 'School Management System',
      tagline: 'Unified campus administration, student grading, and faculty management.',
      description:
        'A cloud-based school platform designed to manage student enrollment cycles, daily attendance metrics, examination grading, and parent communications with real-time record updates.',
      features: [
        'Student enrollment & demographic record archiving',
        'Attendance tracking and automated monthly reports',
        'Gradebook & exam marks evaluation engine',
        'Staff and faculty workload allocation module'
      ],
      image: school,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Auth'],
      github: 'https://github.com/adeel-151',
      live: '#',
    },
    {
      id: 4,
      num: '04',
      filter: 'Web Platforms',
      category: 'Corporate & Engineering',
      title: 'Elite Engineers Company Website',
      tagline: 'High-performance corporate web presence with client consultation workflow.',
      description:
        'A sleek, bespoke corporate platform designed for an engineering consultancy firm. Features interactive service presentations, high-resolution project portfolio showcases, and direct quotation inquiry dispatch.',
      features: [
        'Clean editorial typography and high-converting service funnels',
        'Integrated asynchronous client inquiry dispatch system',
        'Optimized asset delivery achieving high Google PageSpeed scores',
        'Full cross-browser responsiveness and accessibility'
      ],
      image: elite,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
      github: 'https://github.com/adeel-151/Elite-Engineers',
      live: 'https://elite-engineers-phi.vercel.app/',
    },
    {
      id: 5,
      num: '05',
      filter: 'Full Stack MERN',
      category: 'E-commerce Architecture',
      title: 'E-commerce Platform',
      tagline: 'Full-featured online store with cart state, authentication, and product catalogs.',
      description:
        'A modern digital storefront featuring state-driven shopping cart management, user authentication, inventory filtering, order summary calculation, and streamlined checkout experience.',
      features: [
        'Persistent cart state using global React context',
        'Multi-criteria product search, categories, and price filtering',
        'Secure user authentication and profile order history',
        'Scalable MongoDB schemas for products, orders, and reviews'
      ],
      image: ecommerce,
      technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Context API'],
      github: 'https://github.com/adeel-151',
      live: '#',
    },
    {
      id: 6,
      num: '06',
      filter: 'Full Stack MERN',
      category: 'Career & Recruitment',
      title: 'Developer Jobs Portal',
      tagline: 'Interactive job listing board and applicant submission pipeline for tech teams.',
      description:
        'A niche job board engineered for tech talent recruitment. Allows employers to publish verified job openings while candidates search, filter by stack, and submit applications effortlessly.',
      features: [
        'Real-time job search by programming stack and experience level',
        'Employer job posting and applicant pipeline manager',
        'Candidate resume attachment and application tracking',
        'Responsive mobile-first layout with instant search debouncing'
      ],
      image: jobs,
      technologies: ['React', 'Tailwind', 'Node.js', 'MongoDB', 'REST APIs'],
      github: 'https://github.com/adeel-151',
      live: '#',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.filter === activeFilter || (activeFilter === 'Full Stack MERN' && p.technologies.includes('MongoDB') && p.technologies.includes('Node.js')));

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        
        {/* Section Eyebrow Row */}
        <div className="section-eyebrow-row">
          <span>01 / Featured Builds</span>
          <span>Full-stack applications. Production code.</span>
        </div>

        {/* Editorial Heading Grid */}
        <div className="editorial-header-grid">
          <div>
            <h2 className="editorial-title">
              Engineered for impact.
            </h2>
          </div>
          <div>
            <p className="editorial-subtitle">
              A showcase of scalable web platforms, management systems, and interactive applications built to solve genuine business challenges.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="projects-filter-bar" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--primary-accent)' : 'var(--border-light)',
                  background: isActive ? 'var(--primary-accent)' : 'var(--badge-bg)',
                  color: isActive ? '#08090b' : 'var(--gray)',
                  fontSize: '0.86rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* 2-Column Enhanced Projects Grid */}
        <div className="grid-editorial-2">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4 }}
                className="project-editorial-card"
              >
                {/* Image Frame with Floating Badges and Direct Action Link */}
                <div className="project-image-box">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="project-image-overlay" />

                  {/* Top-Left Project Number Badge */}
                  <div className="project-num-badge">
                    {project.num}
                  </div>

                  {/* Top-Right Category Pill */}
                  <div className="project-cat-pill">
                    {project.category}
                  </div>

                  {/* Floating Action Arrow */}
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

                {/* Card Content */}
                <div className="project-card-content">
                  {/* Project Title */}
                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  {/* Project Tagline */}
                  <p className="project-tagline">
                    {project.tagline}
                  </p>

                  {/* Always Visible Tech Stack Badges */}
                  <div className="project-tech-pills">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="project-tech-pill">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="project-tech-pill project-tech-pill-more">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions & Expand Details Row */}
                  <div className="project-actions-row">
                    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                      {project.live !== '#' ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-primary-link"
                        >
                          Live preview <FiArrowUpRight />
                        </a>
                      ) : (
                        <span className="project-preview-soon">Preview soon</span>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-code-link"
                      >
                        <FiGithub style={{ fontSize: '0.95rem' }} /> Code
                      </a>
                    </div>

                    <button
                      className="project-details-btn"
                      onClick={() => toggleExpand(project.id)}
                      aria-label="Toggle project architecture details"
                    >
                      {isExpanded ? 'Less info' : 'Architecture'}
                      {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                  </div>

                  {/* Expandable Architectural Details Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="project-drawer"
                      >
                        <div className="project-drawer-inner">
                          <p className="project-full-description">
                            {project.description}
                          </p>

                          <div className="project-features-list">
                            <span className="project-features-title">
                              Key Architecture Highlights:
                            </span>
                            <ul>
                              {project.features.map((feat, idx) => (
                                <li key={idx}>
                                  <FiCheck className="feature-check-icon" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="project-full-techs">
                            <span className="project-features-title">
                              Full Tech Stack:
                            </span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.4rem' }}>
                              {project.technologies.map((tech) => (
                                <span key={tech} className="project-tech-pill">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Builds Bottom Strip */}
        <div className="more-work-strip">
          <div style={{ fontWeight: 500, color: 'var(--light)', fontSize: '1.05rem' }}>
            Custom & Enterprise Builds
          </div>
          <div style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: 400 }}>
            Additional private repositories, client solutions, and microservices architectures can be walked through upon request.
          </div>
          <div style={{ textAlign: 'right' }} className="more-work-link">
            <a
              href="https://github.com/adeel-151"
              target="_blank"
              rel="noopener noreferrer"
              className="text-arrow-link"
              style={{ fontWeight: 500 }}
            >
              Request project walkthrough <FiArrowUpRight />
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
