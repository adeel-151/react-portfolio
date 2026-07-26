import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FiInstagram, FiGithub, FiLinkedin, FiDownload, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import cv from "../assets/Adeel-Qaiser.pdf";
import profile from "../assets/profile.jpg";

const Home = () => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".home-text > *", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2
    });

    gsap.from(".home-image", {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
      delay: 0.4
    });

    gsap.to(".floating-badge", {
      y: -15,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: {
        each: 0.5,
        from: "random"
      }
    });

    gsap.to(".bg-orb", {
      scale: 1.2,
      opacity: 0.5,
      rotation: 90,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="page-wrapper"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div className="container">
        <div className="grid-responsive" style={{ alignItems: 'center' }}>
          
          {/* Text Content */}
          <div className="home-text" style={{ zIndex: 10 }}>
            <div style={{ marginBottom: '1rem' }}>
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
            </div>
            
            <h1 style={{ fontSize: 'clamp(1.8rem, 8vw, 5rem)', marginBottom: '0.5rem', lineHeight: '1.1' }}>
              EXPERT<br />
              <span className="text-gradient">FRONTEND</span><br />
              ENGINEER
            </h1>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--gray)', marginBottom: '2.5rem', maxWidth: '500px', lineHeight: '1.8' }}>
              Crafting immersive, high-performance web experiences. Passionate about clean code, stunning aesthetics, and modern architectures.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <a href="#projects" className="btn-premium solid">
                View My Work <FiArrowRight />
              </a>
              <a href={cv} download className="btn-premium">
                <FiDownload /> Resume
              </a>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
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
            </div>
          </div>

          {/* Image & Floating Elements */}
          <div 
            className="home-image"
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}
          >
            {/* Background glowing orb */}
            <div
              className="bg-orb"
              style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '350px',
                height: '350px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(6,182,212,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(30px)',
                zIndex: 0,
                opacity: 0.3
              }}
            />

            {/* Profile Image inside Glass container */}
            <motion.div 
              className="glass"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                width: '100%',
                maxWidth: '320px',
                height: 'auto',
                aspectRatio: '4/5',
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
              { text: "React.js", top: '10%', left: '-5%' },
              { text: "Tailwind", top: '40%', right: '-10%' },
              { text: "Node.js", bottom: '20%', left: '-10%' }
            ].map((badge, i) => (
              <div
                key={i}
                className="floating-badge"
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
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
