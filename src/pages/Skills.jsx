import React from 'react';
import { motion } from 'framer-motion';
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
  SiGit,
  SiGithub,
  SiVisualstudiocode,
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend & Languages',
      skills: [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
        { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
        { name: 'Python', icon: <SiPython />, color: '#3776AB' }
      ]
    },
    {
      title: 'Tools & Version Control',
      skills: [
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
        { name: 'GitHub', icon: <SiGithub />, color: '#ffffff' },
        { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.section 
      className="page-wrapper"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div variants={itemVariants} style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">
            <span className="text-gradient">TECH</span> ARSENAL
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--gray)', fontSize: '1.1rem', marginTop: '1rem' }}>
            The tools and technologies I use to build high-performance applications
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {skillCategories.map((category, idx) => (
            <motion.div key={category.title} variants={itemVariants}>
              <h3 style={{ 
                fontFamily: 'var(--font-accent)', 
                fontSize: '1.8rem', 
                marginBottom: '2rem', 
                color: 'var(--light)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <span style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></span>
                {category.title}
              </h3>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
                gap: '1.5rem' 
              }}>
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="glass-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '2rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1rem',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Hover Glow Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.15 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: skill.color,
                        filter: 'blur(20px)',
                        zIndex: 0
                      }}
                    />
                    
                    <motion.div 
                      style={{ 
                        fontSize: '3.5rem', 
                        color: skill.color, 
                        zIndex: 1,
                        filter: `drop-shadow(0 0 10px ${skill.color}40)`
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    
                    <span style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '1rem', 
                      fontWeight: 600, 
                      color: 'var(--light)',
                      zIndex: 1,
                      textAlign: 'center'
                    }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;