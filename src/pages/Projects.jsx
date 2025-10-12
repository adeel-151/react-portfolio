import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import weather from '../assets/weather.jpg';
import clock from '../assets/clock.jpg';
import quiz from '../assets/quiz.jpg';
import portfolio from '../assets/portfolio.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Weather App',
      description:
        'A responsive weather application built using HTML, CSS, and JavaScript that displays real-time weather information for any city.',
      image: weather,
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      github: 'https://github.com/adeel-151',
      live: 'https://weather-app-smoky-beta-85.vercel.app/'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description:
        'A modern and fully responsive portfolio website built to showcase projects, skills, and experience with a clean design and smooth animations.',
      image: portfolio,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/adeel-151',
      live: 'https://adeel-qaiser.vercel.app/'
    },
    {
      id: 3,
      title: 'Digital Clock',
      description:
        'A digital clock made using HTML, CSS, and JavaScript with dynamic time updates.',
      image: clock,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/adeel-151',
      live: 'https://digital-clock-seven-phi.vercel.app/'
    },
    {
      id: 4,
      title: 'Quiz App',
      description:
        'An interactive quiz application built with React, featuring smooth animations and responsive UI.',
      image: quiz,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/adeel-151',
      live: 'https://quizz-pp.vercel.app/'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>My Projects</h2>
          <p>Here are some of my best frontend development projects.</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="project-image">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
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
