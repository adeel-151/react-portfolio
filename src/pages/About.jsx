import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiFolder } from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: <FiAward />, number: '1+', text: 'Years Experience' },
    { icon: <FiUsers />, number: '5+', text: 'Clients' },
    { icon: <FiFolder />, number: '30+', text: 'Projects' }
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 75 }
  ];

  return (
    <motion.section 
      className="about"
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
          <h2>About Me</h2>
          <p>Get to know more about my journey and skills</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Frontend Developer & Problem Solver</h3>
            <p>
              I'm a passionate Frontend developer with over 1 years of experience 
              creating digital solutions that make a difference. I love turning complex 
              problems into simple, beautiful designs.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card"
                  whileHover={{ scale: 1.05 }}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-text">{stat.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="skills-section"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h4>Technical Skills</h4>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="skill-item"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;