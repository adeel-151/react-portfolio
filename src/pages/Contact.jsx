import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "b7c38581-9e52-47dd-a110-87751434730c");
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("name", formData.name);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
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
    <section id="contact" className="section-wrapper" style={{ paddingBottom: '40px' }}>
      <div className="container">
        
        {/* High-Impact Editorial CTA Container (matching Page 5 reference with Adeel's theme) */}
        <div
          style={{
            background: 'linear-gradient(145deg, #12141a 0%, #08090b 100%)',
            border: '1px solid var(--border-light)',
            borderRadius: '32px',
            padding: ' clamp(2rem, 5vw, 4.5rem)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.7)'
          }}
        >
          {/* Subtle gradient light in corner */}
          <div
            style={{
              position: 'absolute',
              top: '-15%',
              right: '-10%',
              width: '350px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(204, 255, 0, 0.12) 0%, rgba(56, 189, 248, 0.04) 50%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(50px)',
              pointerEvents: 'none'
            }}
          />

          {/* Top Eyebrow Row */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '3rem',
              color: 'var(--gray)',
              fontSize: '0.88rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <span>Have something in mind?</span>
            <span>Let's make it happen.</span>
          </div>

          {/* Giant Statement Headline */}
          <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2.8rem, 8vw, 6.5rem)',
                fontWeight: 500,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: 'var(--light)',
                margin: 0
              }}
            >
              Let's make<br />it matter.
            </h2>
            <div style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--primary)' }}>
              ↗
            </div>
          </div>

          {/* Contact Details & Direct Form Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1.2fr', 
              gap: '4rem', 
              paddingTop: '3rem',
              borderTop: '1px solid var(--border-light)'
            }}
            className="contact-details-grid"
          >
            {/* Left Contact Information */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--gray)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                  Direct Contact
                </div>
                <a
                  href="mailto:adeelkhattak223@gmail.com"
                  style={{
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                    color: 'var(--light)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    display: 'block',
                    marginBottom: '1rem',
                    transition: 'color 0.2s ease',
                    wordBreak: 'break-word'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--light)')}
                >
                  adeelkhattak223@gmail.com
                </a>
                <a
                  href="tel:+923015355509"
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--gray)',
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: '1.5rem',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray)')}
                >
                  +92 301 5355509
                </a>
                <div style={{ color: 'var(--gray-dark)', fontSize: '0.95rem' }}>
                  Based in Pakistan • Available Worldwide
                </div>
              </div>

              {/* Social Channels (matching reference Page 5) */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '3rem' }}>
                <a href="https://github.com/adeel-151" target="_blank" rel="noopener noreferrer" className="text-arrow-link">
                  GitHub <FiArrowUpRight />
                </a>
                <a href="https://www.linkedin.com/in/adeel-qaiser151/" target="_blank" rel="noopener noreferrer" className="text-arrow-link">
                  LinkedIn <FiArrowUpRight />
                </a>
                <a href="https://www.instagram.com/adeel_qaiser_/" target="_blank" rel="noopener noreferrer" className="text-arrow-link">
                  Instagram <FiArrowUpRight />
                </a>
              </div>
            </div>

            {/* Right Clean Contact Form */}
            <div>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', position: 'relative' }}>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      padding: '1.2rem',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '12px',
                      color: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      fontSize: '0.95rem'
                    }}
                  >
                    <FiCheckCircle style={{ fontSize: '1.3rem' }} />
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                {status === 'error' && (
                  <div
                    style={{
                      padding: '1rem',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: '12px',
                      color: '#ef4444',
                      fontSize: '0.95rem'
                    }}
                  >
                    Failed to send message. Please email me directly at adeelkhattak223@gmail.com.
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-two-col">
                  <div>
                    <input
                      className="minimal-input"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="minimal-input"
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    className="minimal-input"
                    type="text"
                    name="subject"
                    placeholder="Project or subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <textarea
                    className="minimal-input"
                    name="message"
                    placeholder="Tell me about your project or vision..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ resize: 'none' }}
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn-pill btn-pill-dark"
                    disabled={status === 'loading'}
                    style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                  >
                    {status === 'loading' ? 'Sending message...' : 'Send message'} <FiArrowUpRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

      <style>
        {`
          @media (max-width: 992px) {
            .contact-details-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
          @media (max-width: 640px) {
            .form-two-col {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
