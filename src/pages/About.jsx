import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiUsers, FiFolder, FiCode, FiCoffee, FiGlobe } from 'react-icons/fi';

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');

  const stats = [
    { icon: <FiAward />, number: '1+', text: 'Years Experience' },
    { icon: <FiUsers />, number: '5+', text: 'Clients' },
    { icon: <FiFolder />, number: '30+', text: 'Projects' }
  ];

  const tabs = [
    { id: 'journey', label: 'My Journey', icon: <FiGlobe /> },
    { id: 'philosophy', label: 'Philosophy', icon: <FiCoffee /> },
    { id: 'focus', label: 'Current Focus', icon: <FiCode /> }
  ];

  const tabContent = {
    journey: (
      <p style={{ lineHeight: '1.8', color: 'var(--gray)', fontSize: '1.1rem' }}>
        I started my web development journey with a deep curiosity for how things work on the internet. 
        Over the past year, I've transitioned from a beginner to a confident MERN stack developer, 
        specializing heavily in Frontend Engineering. I've built everything from simple landing pages 
        to complex, state-driven web applications.
      </p>
    ),
    philosophy: (
      <p style={{ lineHeight: '1.8', color: 'var(--gray)', fontSize: '1.1rem' }}>
        I believe that a great user interface goes beyond just aesthetics—it’s about creating seamless, 
        intuitive experiences that delight users. Clean code, maintainable architecture, and pixel-perfect 
        designs are at the core of everything I build.
      </p>
    ),
    focus: (
      <p style={{ lineHeight: '1.8', color: 'var(--gray)', fontSize: '1.1rem' }}>
        Right now, I am heavily focused on mastering modern React patterns, advanced CSS animations (like 
        Framer Motion), and exploring next-gen meta-frameworks like Next.js to deliver blazing-fast 
        performance.
      </p>
    )
  };

  return (
    <motion.section 
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">ABOUT</span> ME
          </h2>
        </motion.div>

        <div className="grid-responsive" style={{ marginTop: '2rem' }}>
          {/* Left Column: Interactive Story */}
          <motion.div 
            className="glass"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ borderRadius: '24px', padding: '2rem', overflow: 'hidden', position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'rgba(99, 102, 241, 0.2)', filter: 'blur(40px)', borderRadius: '50%' }} />
            
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--light)' }}>Behind the Code</h3>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeTab === tab.id ? 'var(--primary)' : 'var(--gray)',
                    fontFamily: 'var(--font-accent)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'color 0.3s'
                  }}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            <div style={{ minHeight: '150px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {tabContent[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid-responsive-2"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="glass-card"
                whileHover={{ y: -10, scale: 1.02 }}
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  gridColumn: index === 2 ? '1 / -1' : 'auto' // Make 3rd item span full width
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, transparent 100%)', zIndex: 0 }} />
                
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '1rem', zIndex: 1 }}>
                  {stat.icon}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--light)', lineHeight: 1, marginBottom: '0.5rem', zIndex: 1 }}>
                  {stat.number}
                </div>
                <div style={{ color: 'var(--gray)', fontFamily: 'var(--font-accent)', fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase', zIndex: 1 }}>
                  {stat.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;