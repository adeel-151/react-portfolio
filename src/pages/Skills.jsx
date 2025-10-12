import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiDocker,
  Si1001Tracklists,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiCplusplus,
  SiPython,
  SiGitlab,
  SiGithub,
  SiVsco,
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      
      skills: [
        { name: 'React', icon: <SiReact />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 95 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
        { name: 'HTML/CSS', icon: <SiHtml5 />, level: 95 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
        { name: 'Bootstrap', icon: <SiBootstrap />, level: 80 },
        { name: 'C++', icon: <SiCplusplus />, level: 70 },
        { name: 'Python', icon: <SiPython />, level: 75 }
      ]
    },
    
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <SiGit />, level: 90 },
        { name: 'Github', icon: <SiGithub />, level: 85 },
        { name: 'VS Code', icon: <SiVsco />, level: 95 }
      ]
    }
  ];

  return (
    <motion.section 
      className="skills"
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
          <h2>Skills & Technologies</h2>
          <p>Technologies I work with to bring ideas to life</p>
        </motion.div>

        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              className="skill-category"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid-category">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + skillIndex * 0.1 }}
                  >
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <h4>{skill.name}</h4>
                    <div className="skill-level">
                      <div className="level-bar">
                        <motion.div 
                          className="level-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.8 + skillIndex * 0.1, duration: 1 }}
                        />
                      </div>
                      <span className="level-percent">{skill.level}%</span>
                    </div>
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