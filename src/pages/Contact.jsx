import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiArrowUpRight, 
  FiCheckCircle, 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiUser,
  FiMessageSquare,
  FiCheck
} from 'react-icons/fi';
import { 
  SiWhatsapp, 
  SiGithub, 
  SiLinkedin, 
  SiInstagram 
} from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack MERN',
    subject: '',
    message: ''
  });
  
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const projectTypes = [
    'Full-Stack MERN',
    'Frontend / React 19',
    'Backend API / DB',
    'Freelance / Contract'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectType = (type) => {
    setFormData((prev) => ({
      ...prev,
      projectType: type,
      subject: prev.subject || `Inquiry for ${type}`
    }));
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('adeelkhattak223@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "b7c38581-9e52-47dd-a110-87751434730c");
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", `[${formData.projectType}] ${formData.subject}`);
    formDataToSend.append("message", `Project Type: ${formData.projectType}\n\nMessage:\n${formData.message}`);
    formDataToSend.append("name", formData.name);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: "", email: "", projectType: "Full-Stack MERN", subject: "", message: "" });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section-wrapper" style={{ paddingBottom: '50px' }}>
      <div className="container">
        
        {/* High-Impact Editorial CTA Container */}
        <div className="contact-main-card">
          {/* Subtle Ambient Radial Glow */}
          <div className="contact-ambient-glow" />

          {/* Top Eyebrow Row */}
          <div className="contact-eyebrow-row">
            <span className="contact-availability-text">
              <span className="status-dot-pulse" style={{ display: 'inline-block', marginRight: '8px' }} />
              Available for full-time & client contracts
            </span>
            <span className="contact-response-time">
              <FiClock style={{ color: 'var(--primary-accent)' }} /> Typical response within 2 hours
            </span>
          </div>

          {/* Giant Statement Headline */}
          <div className="contact-headline-row">
            <h2 className="contact-statement-title">
              Let's build<br />what's next.
            </h2>
            <div className="contact-statement-arrow">
              ↗
            </div>
          </div>

          {/* Contact Details & Direct Form Grid */}
          <div className="contact-grid-inner">
            {/* Left Column: Direct Interactive Channels */}
            <div className="contact-info-col">
              <div>
                <span className="contact-channel-eyebrow">
                  Direct Communication
                </span>

                {/* WhatsApp Priority Card */}
                <a
                  href="https://wa.me/923015355509?text=Hi%20Adeel,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-card contact-channel-whatsapp"
                >
                  <div className="channel-icon-wrap" style={{ background: 'rgba(37, 211, 102, 0.12)', color: '#25D366', borderColor: 'rgba(37, 211, 102, 0.25)' }}>
                    <SiWhatsapp />
                  </div>
                  <div className="channel-info-text">
                    <span className="channel-label">WhatsApp (Instant Chat)</span>
                    <span className="channel-value">+92 301 5355509</span>
                    <span className="channel-sub">Quick inquiries, calls & consultations</span>
                  </div>
                  <div className="channel-arrow">
                    <FiArrowUpRight />
                  </div>
                </a>

                {/* Email Direct Card */}
                <div className="contact-channel-card contact-channel-email">
                  <div className="channel-icon-wrap" style={{ background: 'rgba(204, 255, 0, 0.1)', color: 'var(--primary-accent)' }}>
                    <FiMail />
                  </div>
                  <div className="channel-info-text" style={{ flexGrow: 1 }}>
                    <span className="channel-label">Email Direct</span>
                    <a href="mailto:adeelkhattak223@gmail.com" className="channel-value-link">
                      adeelkhattak223@gmail.com
                    </a>
                    <span className="channel-sub">Official communication & proposals</span>
                  </div>
                  <button 
                    onClick={copyEmailToClipboard}
                    className="channel-copy-btn"
                    title="Copy email address"
                  >
                    {copiedEmail ? <FiCheck style={{ color: '#10b981' }} /> : 'Copy'}
                  </button>
                </div>

                {/* Location & Timezone Card */}
                <div className="contact-channel-card contact-channel-location">
                  <div className="channel-icon-wrap" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--secondary)' }}>
                    <FiMapPin />
                  </div>
                  <div className="channel-info-text">
                    <span className="channel-label">Location & Presence</span>
                    <span className="channel-value">Islamabad, Pakistan</span>
                    <span className="channel-sub">Working with teams & clients worldwide (UTC+5)</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Matrix */}
              <div className="contact-social-matrix">
                <span className="contact-channel-eyebrow" style={{ marginBottom: '0.8rem', display: 'block' }}>
                  Verified Networks
                </span>
                <div className="contact-social-buttons">
                  <a
                    href="https://wa.me/923015355509?text=Hi%20Adeel,%20I%20saw%20your%20portfolio!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn contact-social-wa"
                  >
                    <SiWhatsapp className="soc-icon" style={{ color: '#25D366' }} /> WhatsApp ↗
                  </a>
                  <a
                    href="https://github.com/adeel-151"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                  >
                    <SiGithub className="soc-icon" /> GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/adeel-qaiser151/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                  >
                    <SiLinkedin className="soc-icon" style={{ color: '#0a66c2' }} /> LinkedIn ↗
                  </a>
                  <a
                    href="https://www.instagram.com/adeel_qaiser_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                  >
                    <SiInstagram className="soc-icon" style={{ color: '#e4405f' }} /> Instagram ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Upgraded Contact Form */}
            <div className="contact-form-col">
              <form onSubmit={handleSubmit} className="contact-enhanced-form">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="form-success-banner"
                  >
                    <FiCheckCircle style={{ fontSize: '1.4rem', flexShrink: 0 }} />
                    <div>
                      <strong>Message transmitted successfully!</strong>
                      <div>Thank you! I will get back to your email within 2-4 hours.</div>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <div className="form-error-banner">
                    Failed to dispatch message. Please WhatsApp me directly at +92 301 5355509 or email adeelkhattak223@gmail.com.
                  </div>
                )}

                {/* Project Type Quick Selector */}
                <div>
                  <label className="form-field-label">What are you looking to build?</label>
                  <div className="project-type-pills-row">
                    {projectTypes.map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => handleSelectType(type)}
                          className={`project-type-pill ${isSelected ? 'project-type-pill-active' : ''}`}
                        >
                          {isSelected && <FiCheck className="pill-check-icon" />}
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="form-two-col-grid">
                  <div className="form-field-group">
                    <label className="form-field-label">Your Name</label>
                    <div className="form-input-wrap">
                      <FiUser className="form-input-icon" />
                      <input
                        className="minimal-input form-field-input"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label">Email Address</label>
                    <div className="form-input-wrap">
                      <FiMail className="form-input-icon" />
                      <input
                        className="minimal-input form-field-input"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-field-group">
                  <label className="form-field-label">Project Subject</label>
                  <div className="form-input-wrap">
                    <FiMessageSquare className="form-input-icon" />
                    <input
                      className="minimal-input form-field-input"
                      type="text"
                      name="subject"
                      placeholder="e.g. MERN Stack Web Platform Architecture"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label className="form-field-label">Project Details & Vision</label>
                  <textarea
                    className="minimal-input form-field-textarea"
                    name="message"
                    placeholder="Tell me about your project goals, timelines, target users, or tech stack..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn-pill btn-pill-dark contact-submit-btn"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Transmitting message...' : 'Send Message'} <FiArrowUpRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
