import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiInstagram, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter, FiDownload } from "react-icons/fi";
import cv from "../assets/adeel-cv.pdf";
import profile from "../assets/profile.jpg";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      className="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <div className="hero-content">
          <motion.div className="hero-text" variants={containerVariants}>
            <motion.h1 variants={itemVariants}>
              Hi, I'm <span className="gradient-text">Adeel Qaiser</span>
            </motion.h1>
            <motion.h2 variants={itemVariants}>Frontend Developer</motion.h2>
            <motion.p variants={itemVariants}>
              I create beautiful, functional web applications using modern
              technologies. Passionate about clean code, user experience, and
              bringing ideas to life.
            </motion.p>

            <motion.div className="hero-buttons" variants={itemVariants}>
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
              <a href={cv} download className="btn btn-outline">
                <FiDownload className="btn-icon" />
                Download CV
              </a>
            </motion.div>

            <motion.div className="social-links" variants={itemVariants}>
              <a href="https://github.com/adeel-151" className="social-link">
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/adeel-qaiser151/"
                className="social-link"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://www.instagram.com/imadeel151/"
                className="social-link"
              >
                <FiInstagram />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="image-placeholder">
              <div className="glow-ring"></div>
              <img
                src={profile}
                alt="Adeel Qaiser"
                className="profile-image"
              />

              <div className="floating-elements">
                <div className="floating-element element-1">⚛️</div>
                <div className="floating-element element-2">🚀</div>
                <div className="floating-element element-3">💻</div>
                <div className="floating-element element-4">🎨</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-arrow"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
