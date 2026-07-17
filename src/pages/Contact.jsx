import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

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
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      info: 'adeelkhattak223@gmail.com',
      link: 'mailto:adeelkhattak223@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      info: '+92 301 5355509',
      link: 'tel:+923015355509'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      info: 'Pakistan',
      link: '#'
    }
  ];

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
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title">
            <span className="text-gradient">LET'S</span> CONNECT
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--gray)', fontSize: '1.1rem', marginTop: '1rem' }}>
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid-responsive">
          {/* Contact Info */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div className="glass" style={{ padding: '2.5rem', borderRadius: '24px', flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--light)', marginBottom: '1rem' }}>Get In Touch</h3>
              <p style={{ color: 'var(--gray)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                Whether you have a question, a project proposition, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    whileHover={{ x: 10, color: 'var(--primary)' }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'color 0.3s'
                    }}
                  >
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'rgba(99, 102, 241, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: 'var(--primary)',
                      border: '1px solid rgba(99, 102, 241, 0.2)'
                    }}>
                      {item.icon}
                    </div>
                    <div style={{ wordBreak: 'break-word', overflow: 'hidden' }}>
                      <h4 style={{ color: 'var(--light)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ color: 'var(--gray)', fontSize: '1rem' }}>{item.info}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <form 
              className="glass"
              onSubmit={handleSubmit}
              style={{
                padding: '2.5rem',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(10px)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10
                  }}
                >
                  <FiCheckCircle style={{ fontSize: '4rem', color: 'var(--success)', marginBottom: '1rem' }} />
                  <h3 style={{ color: 'var(--light)', fontSize: '1.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--gray)' }}>I'll get back to you shortly.</p>
                </motion.div>
              )}

              <div className="grid-responsive-form">
                <input
                  className="glass-input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="glass-input"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                className="glass-input"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                className="glass-input"
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ resize: 'none' }}
              ></textarea>
              
              <motion.button
                type="submit"
                className="btn-premium solid"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}
              >
                {status === 'loading' ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                      <FiSend />
                    </motion.div>
                    Sending...
                  </span>
                ) : (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiSend /> Send Message
                  </span>
                )}
              </motion.button>

              {status === 'error' && (
                <p style={{ color: '#ef4444', textAlign: 'center', fontSize: '0.9rem', marginTop: '1rem' }}>
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;