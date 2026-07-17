import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import weather from '../assets/weather.jpg';
import clock from '../assets/clock.jpg';
import quiz from '../assets/quiz.jpg';
import portfolio from '../assets/portfolio.jpg';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Weather App',
      description: 'A responsive weather application built using HTML, CSS, and JavaScript that displays real-time weather information for any city.',
      image: weather,
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      github: 'https://github.com/adeel-151',
      live: 'https://weather-app-smoky-beta-85.vercel.app/'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern and fully responsive portfolio website built to showcase projects, skills, and experience with a clean design and smooth animations.',
      image: portfolio,
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      github: 'https://github.com/adeel-151',
      live: 'https://adeel-qaiser.vercel.app/'
    },
    {
      id: 3,
      title: 'Digital Clock',
      description: 'A digital clock made using HTML, CSS, and JavaScript with dynamic time updates.',
      image: clock,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/adeel-151',
      live: 'https://digital-clock-seven-phi.vercel.app/'
    },
    {
      id: 4,
      title: 'Quiz App',
      description: 'An interactive quiz application built with React, featuring smooth animations and responsive UI.',
      image: quiz,
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      github: 'https://github.com/adeel-151',
      live: 'https://quizz-pp.vercel.app/'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.section
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="container">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title">
            <span className="text-gradient">FEATURED</span> WORK
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--gray)', fontSize: '1.1rem', marginTop: '1rem' }}>
            A selection of my best projects that showcase my frontend skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="glass-card"
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  animate={{ scale: hoveredProject === project.id ? 1.05 : 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Overlay Links */}
                <AnimatePresence>
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(15, 23, 42, 0.8)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1.5rem'
                      }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)', color: '#fff' }}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.1)',
                          color: 'var(--light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          border: '1px solid rgba(255,255,255,0.2)',
                          transition: 'all 0.3s'
                        }}
                      >
                        <FiGithub />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ scale: 1.1, backgroundColor: 'var(--secondary)', color: '#fff' }}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.1)',
                          color: 'var(--light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          border: '1px solid rgba(255,255,255,0.2)',
                          transition: 'all 0.3s'
                        }}
                      >
                        <FiExternalLink />
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                  <FiFolder />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--light)', marginBottom: '1rem', fontFamily: 'var(--font-accent)' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '4px 12px',
                        background: 'rgba(6, 182, 212, 0.1)',
                        color: 'var(--secondary)',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        border: '1px solid rgba(6, 182, 212, 0.2)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
