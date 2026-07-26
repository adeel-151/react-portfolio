import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import hostel from "../assets/hostel.jpg";
import school from "../assets/school.jpg";
import hospital from "../assets/hospital.jpg";
import jobs from "../assets/jobs.jpg";
import ecommerce from "../assets/e-commerce.jpg";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "School Management System",
      description:
        "A comprehensive management system for schools, handling student enrollments, attendance, grading, and faculty management efficiently.",
      image: school,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/adeel-151",
      live: "#",
    },
    {
      id: 2,
      title: "Smart Hostel & Dera Management",
      description:
        "An all-in-one smart solution for managing hostels and deras, tracking room allocations, dues, and resident records seamlessly.",
      image: hostel,
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      github: "https://github.com/adeel-151/basera-hostel",
      live: "https://basera-hostel.vercel.app/",
    },
    {
      id: 3,
      title: "E-commerce Website",
      description:
        "A fully functional modern e-commerce platform with cart functionality, user authentication, and a scalable database architecture.",
      image: ecommerce,
      technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com/adeel-151",
      live: "#",
    },
    {
      id: 4,
      title: "Developer Jobs Portal",
      description:
        "A specialized job portal for developers, featuring job listings, application tracking, and a user-friendly interface for both employers and job seekers.",
      image: jobs,
      technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
      github: "https://github.com/adeel-151",
      live: "#",
    },
    {
      id: 5,
      title: "Hospital Management System",
      description:
        "A robust system for hospitals to manage patient records, appointments, billing, and staff schedules efficiently.",
      image: hospital,
      technologies: ["React", "Node.js", "MySQL", "Bootstrap"],
      github: "https://github.com/adeel-151",
      live: "https://hospital-mgt-system-kappa.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
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
          style={{ marginBottom: "4rem" }}
        >
          <h2 className="section-title">
            <span className="text-gradient">FEATURED</span> WORK
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--gray)",
              fontSize: "1.1rem",
              marginTop: "1rem",
            }}
          >
            A selection of my best projects that showcase my frontend skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid-responsive"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="glass-card"
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "240px",
                  overflow: "hidden",
                }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  animate={{ scale: hoveredProject === project.id ? 1.05 : 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* Overlay Links */}
                <AnimatePresence>
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(15, 23, 42, 0.8)",
                        backdropFilter: "blur(4px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1.5rem",
                      }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "var(--primary)",
                          color: "#fff",
                        }}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.1)",
                          color: "var(--light)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.5rem",
                          border: "1px solid rgba(255,255,255,0.2)",
                          transition: "all 0.3s",
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
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "var(--secondary)",
                          color: "#fff",
                        }}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.1)",
                          color: "var(--light)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.5rem",
                          border: "1px solid rgba(255,255,255,0.2)",
                          transition: "all 0.3s",
                        }}
                      >
                        <FiExternalLink />
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--primary)",
                    marginBottom: "1rem",
                    fontSize: "1.5rem",
                  }}
                >
                  <FiFolder />
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--light)",
                    marginBottom: "1rem",
                    fontFamily: "var(--font-accent)",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "var(--gray)",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    marginBottom: "1.5rem",
                    flexGrow: 1,
                  }}
                >
                  {project.description}
                </p>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "4px 12px",
                        background: "rgba(6, 182, 212, 0.1)",
                        color: "var(--secondary)",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-mono)",
                        border: "1px solid rgba(6, 182, 212, 0.2)",
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
