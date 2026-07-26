import React, { useRef } from 'react';
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
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiNetlify
} from 'react-icons/si';
import { FiCode, FiDatabase, FiCloud, FiServer, FiTerminal, FiCpu, FiCommand } from 'react-icons/fi';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef();

  const skillCategories = [
    {
      title: 'Frontend & Languages',
      skills: [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
        { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
        { name: 'Python', icon: <SiPython />, color: '#3776AB' }
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'Neon.tech', icon: <FiDatabase />, color: '#00E599' }
      ]
    },
    {
      title: 'Deployment & Tools',
      skills: [
        { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
        { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
        { name: 'Render', icon: <FiCloud />, color: '#46E3B7' },
        { name: 'Railway', icon: <FiServer />, color: '#ffffff' },
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
        { name: 'GitHub', icon: <SiGithub />, color: '#ffffff' },
        { name: 'VS Code', icon: <FiCode />, color: '#007ACC' }
      ]
    },
    {
      title: 'AI & Advanced Editors',
      skills: [
        { name: 'Cursor', icon: <FiTerminal />, color: '#ffffff' },
        { name: 'Antigravity', icon: <FiCpu />, color: '#6366f1' },
        { name: 'Kiro', icon: <FiCommand />, color: '#f59e0b' }
      ]
    }
  ];

  useGSAP(() => {
    gsap.from(".skills-header", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Stagger each category
    const categories = gsap.utils.toArray('.skill-category');
    categories.forEach((cat) => {
      gsap.from(cat.querySelectorAll('.skill-badge'), {
        scrollTrigger: {
          trigger: cat,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)"
      });
      
      gsap.from(cat.querySelector('.category-title'), {
        scrollTrigger: {
          trigger: cat,
          start: "top 85%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="page-wrapper"
    >
      <div className="container">
        <div className="skills-header" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">
            <span className="text-gradient">TECH</span> ARSENAL
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--gray)', fontSize: '1.1rem', marginTop: '1rem' }}>
            The tools and technologies I use to build high-performance applications
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {skillCategories.map((category, idx) => (
            <div key={category.title} className="skill-category">
              <h3 className="category-title" style={{ 
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
              
              <div className="grid-responsive-skills">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="glass-card skill-badge"
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
                    
                    <div 
                      style={{ 
                        fontSize: '3.5rem', 
                        color: skill.color, 
                        zIndex: 1,
                        filter: `drop-shadow(0 0 10px ${skill.color}40)`
                      }}
                    >
                      {skill.icon}
                    </div>
                    
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;