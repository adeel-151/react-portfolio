import React from "react";
import { motion } from "framer-motion";
import { FiInstagram, FiGithub, FiLinkedin, FiDownload, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import cv from "../assets/Adeel-Qaiser.pdf";
import profile from "../assets/profile.jpg";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    },
  };

  return (
    <motion.section
      className="page-wrapper"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={containerVariants}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Text Content */}
          <motion.div variants={containerVariants} style={{ zIndex: 10 }}>
            <motion.div variants={itemVariants} style={{ marginBottom: '1rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                color: 'var(--secondary)', 
                letterSpacing: '2px', 
                textTransform: 'uppercase',
                background: 'rgba(6, 182, 212, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                border: '1px solid rgba(6, 182, 212, 0.3)'
              }}>
                MERN Stack Developer
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '0.5rem', lineHeight: '1.1' }}>
              EXPERT<br />
              <span className="text-gradient">FRONTEND</span><br />
              ENGINEER
            </motion.h1>
            
            <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', color: 'var(--gray)', marginBottom: '2.5rem', maxWidth: '500px', lineHeight: '1.8' }}>
              Crafting immersive, high-performance web experiences. Passionate about clean code, stunning aesthetics, and modern architectures.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link to="/projects" className="btn-premium solid">
                View My Work <FiArrowRight />
              </Link>
              <a href={cv} download className="btn-premium">
                <FiDownload /> Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ height: '2px', width: '50px', background: 'var(--gray)', opacity: 0.3 }} />
              {[
                { icon: <FiGithub />, link: "https://github.com/adeel-151", color: "hover:text-white" },
                { icon: <FiLinkedin />, link: "https://www.linkedin.com/in/adeel-qaiser151/", color: "hover:text-[#0a66c2]" },
                { icon: <FiInstagram />, link: "https://www.instagram.com/adeel_qaiser_/", color: "hover:text-[#e1306c]" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1, color: 'var(--primary)' }}
                  style={{ fontSize: '1.5rem', color: 'var(--gray)', transition: 'all 0.3s' }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image & Floating Elements */}
          <motion.div 
            variants={itemVariants}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}
          >
            {/* Background glowing orb */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                width: '350px',
                height: '350px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(6,182,212,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(30px)',
                zIndex: 0
              }}
            />

            {/* Profile Image inside Glass container */}
            <motion.div 
              className="glass"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                width: '320px',
                height: '400px',
                borderRadius: '24px',
                padding: '10px',
                position: 'relative',
                zIndex: 1,
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              <img
                src={profile}
                alt="Adeel Qaiser"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,6,23,0.8), transparent 50%)', borderRadius: '16px' }} />
            </motion.div>

            {/* Floating Tech Badges */}
            {[
              { text: "React.js", top: '10%', left: '-5%', delay: 0 },
              { text: "Tailwind", top: '40%', right: '-10%', delay: 1 },
              { text: "Node.js", bottom: '20%', left: '-10%', delay: 2 }
            ].map((badge, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: badge.delay, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  top: badge.top,
                  left: badge.left,
                  right: badge.right,
                  bottom: badge.bottom,
                  background: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--secondary)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                  zIndex: 2
                }}
              >
                {badge.text}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Home;
